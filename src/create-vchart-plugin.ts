import {
  ICommandService,
  Plugin,
  DependentOn,
  CommandType,
  Inject,
  Injector,
  UniverInstanceType,
} from "@univerjs/core";
import { ComponentManager } from "@univerjs/ui";
import type { ICommand, Serializable } from "@univerjs/core";
import { UniverSheetsDrawingUIPlugin } from "@univerjs/sheets-drawing-ui";
import {
  COMPONENT_KEY,
  CREATE_VCHART_COMMAND_ID,
  PLUGIN_NAME,
} from "./constants";
import { CreateVChartParams } from "./interface";
import { VChartWrapper } from "./VChartWrapper";

@DependentOn(UniverSheetsDrawingUIPlugin)
class UniverVChartPlugin extends Plugin {
  static override type = UniverInstanceType.UNIVER_SHEET;
  static override pluginName = PLUGIN_NAME;

  constructor(
    _config: unknown,
    @Inject(Injector) override readonly _injector: Injector,
    @Inject(ComponentManager) private readonly _componentManager: ComponentManager,
    @Inject(ICommandService) private readonly _commandService: ICommandService
  ) {
    super();
  }

  override onStarting(): void {
    this._initCustomComponents();
    this._registerCommands();
  }

  private _initCustomComponents(): void {
    this.disposeWithMe(
      this._componentManager.register(COMPONENT_KEY, VChartWrapper)
    );
  }

  private _registerCommands(): void {
    const createVChartCommand: ICommand = {
      id: CREATE_VCHART_COMMAND_ID,
      type: CommandType.COMMAND,
      handler: async (accessor, params: CreateVChartParams) => {
        return true;
      },
    };

    this._commandService.registerCommand(createVChartCommand);
  }
}

export default UniverVChartPlugin;