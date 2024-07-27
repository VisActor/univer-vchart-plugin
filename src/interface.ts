import type { IInitOption, ISpec } from "@visactor/react-vchart";

/**
 * the params of create a vchart instance
 *
 * @param spec spec of vchart
 * @param options options of vchart
 * @param initPosition ths position of vchart layer
 */
export interface CreateVChartParams {
  data?: ISpec["data"];
  spec: ISpec;
  options?: Omit<IInitOption, "dom" | "renderCanvas">;
  initPosition?: {
    startX?: number;
    startY?: number;
    endX?: number;
    endY?: number;
  };
}
