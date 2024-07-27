import {
  ICommandService,
  Plugin,
  DependentOn,
  CommandType,
  Inject,
  Injector,
} from "@univerjs/core";
import { ComponentManager } from "@univerjs/ui";
import type { ICommand, Serializable } from "@univerjs/core";
import {
  SheetCanvasFloatDomManagerService,
  UniverSheetsDrawingUIPlugin,
} from "@univerjs/sheets-drawing-ui";
import {
  COMPONENT_KEY,
  CREATE_VCHART_COMMAND_ID,
  PLUGIN_NAME,
} from "./constants";
import { CreateVChartParams } from "./interface";
import { VChartWrapper } from "./VChartWrapper";

@DependentOn(UniverSheetsDrawingUIPlugin)
class UniverVChartPlugin extends Plugin {
  static override pluginName = PLUGIN_NAME;
  constructor(
    _config: null,
    // inject injector, required
    @Inject(Injector) override readonly _injector: Injector,
    @Inject(ComponentManager)
    private readonly _componentManager: ComponentManager,
    // inject command service, to register command handler
    @Inject(ICommandService) private readonly commandService: ICommandService
  ) {
    super();

    this._initCustomComponents();
  }

  private _initCustomComponents = () => {
    const componentManager = this._componentManager;
    this.disposeWithMe(componentManager.register(COMPONENT_KEY, VChartWrapper));
  };

  /**
   * The first lifecycle of the plugin mounted on the Univer instance,
   * the Univer business instance has not been created at this time.
   * The plugin should add its own module to the dependency injection system at this lifecycle.
   * It is not recommended to initialize the internal module of the plugin outside this lifecycle.
   */
  onStarting() {
    const createVChatCommand: ICommand = {
      id: CREATE_VCHART_COMMAND_ID,
      type: CommandType.COMMAND,
      handler: async (accessor, params: CreateVChartParams) => {
        const floatDomService = accessor.get(SheetCanvasFloatDomManagerService);
        // 返回浮层id，开发者需要自行存储
        await floatDomService.addFloatDomToPosition({
          allowTransform: true,
          initPosition: {
            startX: 100,
            startY: 100,
            endX: 400,
            endY: 400,
            ...params.initPosition,
          },
          componentKey: COMPONENT_KEY,
          data: {
            data: params.data,
            spec: params.spec,
            options: params.options,
          } as unknown as Serializable,
        });
        return true;
      },
    };

    this.commandService.registerCommand(createVChatCommand);
  }
}

export default UniverVChartPlugin;
