import { LocaleType, Univer, UniverInstanceType } from "@univerjs/core";
import { defaultTheme } from "@univerjs/design";
import { UniverDocsPlugin } from "@univerjs/docs";
import { UniverDocsUIPlugin } from "@univerjs/docs-ui";
import { UniverFormulaEnginePlugin } from "@univerjs/engine-formula";
import { UniverRenderEnginePlugin } from "@univerjs/engine-render";
import { UniverSheetsPlugin } from "@univerjs/sheets";
import { UniverSheetsFormulaPlugin } from "@univerjs/sheets-formula";
import { UniverSheetsNumfmtPlugin } from "@univerjs/sheets-numfmt";
import { UniverSheetsUIPlugin } from "@univerjs/sheets-ui";
import { UniverUIPlugin } from "@univerjs/ui";
import { UniverSheetsZenEditorPlugin } from "@univerjs/sheets-zen-editor";
import { FUniver } from "@univerjs/facade";
import { enUS } from "univer:locales";
import { UniverVChartPlugin } from "@visactor/univer-vchart-plugin";

export function setupUniver() {
  const univer = new Univer({
    theme: defaultTheme,
    locale: LocaleType.EN_US,
    locales: {
      [LocaleType.EN_US]: enUS,
    },
  });

  univer.registerPlugin(UniverDocsPlugin, {
    hasScroll: false,
  });
  univer.registerPlugin(UniverDocsUIPlugin);
  univer.registerPlugin(UniverRenderEnginePlugin);
  univer.registerPlugin(UniverUIPlugin, {
    container: "univer",
    header: true,
    footer: true,
  });
  univer.registerPlugin(UniverSheetsPlugin);
  univer.registerPlugin(UniverSheetsUIPlugin);

  univer.registerPlugin(UniverSheetsNumfmtPlugin);
  univer.registerPlugin(UniverFormulaEnginePlugin);
  univer.registerPlugin(UniverSheetsFormulaPlugin);

  univer.registerPlugin(UniverSheetsZenEditorPlugin);

  univer.registerPlugin(UniverVChartPlugin);

  univer.createUnit(UniverInstanceType.UNIVER_SHEET, {});

  return FUniver.newAPI(univer);
}
