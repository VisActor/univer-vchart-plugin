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

vchart univer 插件封装了[Univer](https://univer.ai/zh-CN)中绘制图表浮层的能力

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

## 简介

VChart 是 VisActor 可视化体系中的图表组件库，[Univer](https://univer.ai/)是开源Office 办公套件，基于univer-vchart-plugin，可以轻松的创建图表浮层

## 🔨 使用

### 📦 安装

```bash
# npm
$ npm install @visactor/univer-vchart-plugin

# yarn
$ yarn add @visactor/univer-vchart-plugin
```

### 📊 一个简单的图表

<img src="https://user-images.githubusercontent.com/135952300/246996854-95cf0db3-42a2-41f9-8f15-8b7bbec1794c.png" style="width: 500px">

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

## 🔗 相关链接

- [主页](https://www.visactor.io/vchart)
- [VCharts 图表示例](https://www.visactor.io/vchart/example)
- [VChart 图表教程](https://www.visactor.io/vchart/guide/tutorial_docs/VChart_Website_Guide)
- [VChart 图表配置项](https://www.visactor.io/vchart/option/)
- [VChart API](https://www.visactor.io/vchart/api/API/vchart)
- [VGrammar](https://www.visactor.io/vgrammar)
- [VRender](https://www.visactor.io/vrender)
- [FAQ](https://www.visactor.io/vchart/guide/tutorial_docs/FAQ)
- [CodeSandbox 模板](https://codesandbox.io/s/the-template-of-visactor-vchart-vl84ww?file=/src/index.ts) 用于 bug 的提交

## 🤝 参与贡献 [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/visactor/univer-vchart-plugin/blob/main/CONTRIBUTING.md#your-first-pull-request)

如想参与贡献，请先阅读[行为准则](./CODE_OF_CONDUCT.md) 和[贡献指南](./CONTRIBUTING.zh-CN.md)。

细流成河，终成大海！

<a href="https://github.com/visactor/univer-vchart-plugin/graphs/contributors"><img src="https://contrib.rocks/image?repo=visactor/univer-vchart-plugin" /></a>
