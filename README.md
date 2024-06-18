<div align="center">
  <a href="https://github.com/VisActor#gh-light-mode-only" target="_blank">
    <img alt="VisActor Logo" width="200" src="https://github.com/VisActor/.github/blob/main/profile/logo_500_200_light.svg"/>
  </a>
  <a href="https://github.com/VisActor#gh-dark-mode-only" target="_blank">
    <img alt="VisActor Logo" width="200" src="https://github.com/VisActor/.github/blob/main/profile/logo_500_200_dark.svg"/>
  </a>
</div>

<div align="center">
  <h1>univer-vchart-plugin</h1>
</div>

<div align="center">

The vchart univer plugin encapsulates the capability to create chart overlays within [Univer](https://univer.ai/zh-CN).

![](https://github.com/visactor/univer-vchart-plugin/actions/workflows/bug-server.yml/badge.svg)
![](https://github.com/visactor/univer-vchart-plugin/actions/workflows/unit-test.yml/badge.svg)
[![npm Version](https://img.shields.io/npm/v/@visactor/univer-vchart-plugin.svg)](https://www.npmjs.com/package/@visactor/univer-vchart-plugin)
[![npm Download](https://img.shields.io/npm/dm/@visactor/univer-vchart-plugin.svg)](https://www.npmjs.com/package/@visactor/univer-vchart-plugin)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/visactor/univer-vchart-plugin/blob/main/CONTRIBUTING.md#your-first-pull-request)

![](https://img.shields.io/badge/language-TypeScript-red.svg) [![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/visactor/univer-vchart-plugin/blob/main/LICENSE)

</div>

<div align="center">

[English](./README.md) | 简体中文

</div>

## Introduction

VChart is a chart component library within the VisActor visualization system. [Univer](https://univer.ai/) is an open-source Office suite. Using the univer-vchart-plugin, you can easily create chart overlays.

## 🔨 Usage

### 📦 Installation

```bash
# npm
$ npm install @visactor/univer-vchart-plugin

# yarn
$ yarn add @visactor/univer-vchart-plugin
```

### 📊 A Simple Chart

<img src="https://lf9-dp-fe-cms-tos.byteorg.com/obj/bit-cloud/univer-vchart-plugin.png" style="width: 800px">

```typescript
import {
  UniverVChartPlugin,
  CREATE_VCHART_COMMAND_ID,
} from "@visactor/univer-vchart-plugin";

export function setupUniver() {
  const univer = new Univer({
    theme: defaultTheme,
    locale: LocaleType.EN_US,
    locales: {
      [LocaleType.EN_US]: enUS,
    },
  });
  univer.registerPlugin(UniverVChartPlugin);
}

export function setupVChartDemo($toolbar: HTMLElement, univerAPI: FUniver) {
  const $button = document.createElement("a");
  $button.textContent = "Create vchart demo";
  $toolbar.appendChild($button);

  $button.addEventListener("click", async () => {
    if (!univerAPI) throw new Error("univerAPI is not defined");

    const activeWorkbook = univerAPI.getActiveWorkbook();
    if (!activeWorkbook) throw new Error("activeWorkbook is not defined");
    const activeSheet = activeWorkbook.getActiveSheet();
    if (!activeSheet) throw new Error("activeSheet is not defined");

    await univerAPI.executeCommand(CREATE_VCHART_COMMAND_ID, {
      spec: {
        type: "line",
        data: {
          values: [
            {
              time: "2:00",
              value: 8,
            },
            {
              time: "4:00",
              value: 9,
            },
            {
              time: "6:00",
              value: 11,
            },
            {
              time: "8:00",
              value: 14,
            },
            {
              time: "10:00",
              value: 16,
            },
            {
              time: "12:00",
              value: 17,
            },
            {
              time: "14:00",
              value: 17,
            },
            {
              time: "16:00",
              value: 16,
            },
            {
              time: "18:00",
              value: 15,
            },
          ],
        },
        xField: "time",
        yField: "value",
      },
    });
  });
}
```

## 🔗 Related Links

- [Homepage](https://www.visactor.io/vchart)
- [VCharts Chart Examples](https://www.visactor.io/vchart/example)
- [VChart Chart Tutorial](https://www.visactor.io/vchart/guide/tutorial_docs/VChart_Website_Guide)
- [VChart Chart Configuration Options](https://www.visactor.io/vchart/option/)
- [VChart API](https://www.visactor.io/vchart/api/API/vchart)
- [VGrammar](https://www.visactor.io/vgrammar)
- [VRender](https://www.visactor.io/vrender)
- [FAQ](https://www.visactor.io/vchart/guide/tutorial_docs/FAQ)
- [CodeSandbox Template](https://codesandbox.io/s/the-template-of-visactor-vchart-vl84ww?file=/src/index.ts) for submitting bugs

## 🤝 Contributing [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/visactor/univer-vchart-plugin/blob/main/CONTRIBUTING.md#your-first-pull-request)

If you would like to contribute, please read the [Code of Conduct](./CODE_OF_CONDUCT.md) and the [Contribution Guide](./CONTRIBUTING.zh-CN.md) first.

Small streams make big rivers!

<a href="https://github.com/visactor/univer-vchart-plugin/graphs/contributors"><img src="https://contrib.rocks/image?repo=visactor/univer-vchart-plugin" /></a>
