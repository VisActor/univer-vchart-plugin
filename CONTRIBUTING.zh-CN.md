首先为你选择加入开源贡献行列的行为点赞 👍🏻。再者，十分感谢你选择参与到 VisActor 社区，为这个开源项目做出贡献。

## VChart 贡献指南

VisActor 团队通常在 github 上进行开发和 issue 维护，请打开 [Github 网站](https://github.com/)，点击右上角 `Sign up` 按钮，注册一个自己的账号，开启你开源之旅的第一步。

如果因为特殊情况，你无法打开 Github 站点，请告知我们并通过 [Gitee](https://gitee.com/VisActor/univer-vchart-plugin) 进行项目开发。

在 [VChart 仓库](https://github.com/VisActor/univer-vchart-plugin)中，我们有一份面向所有开源贡献者的[指南](https://github.com/VisActor/univer-vchart-plugin/blob/develop/CONTRIBUTING.zh-CN.md)，介绍了有关版本管理、分支管理等内容，**请花几分钟时间阅读了解一下**。

## 你的第一个 Pull Request

### Step0：安装 Git

Git 是一种版本控制系统，用于跟踪和管理软件开发项目中的代码变更。它帮助开发者记录和管理代码的历史记录，方便团队协作、代码版本控制、合并代码等操作。通过 Git，您可以追踪每个文件的每个版本，并轻松地在不同版本之间进行切换和比较。Git 还提供了分支管理功能，使得可以同时进行多个并行开发任务。

- 访问 Git 官方网站：<https://git-scm.com/>
- 下载最新版本的 Git 安装程序。
- 运行下载的安装程序，按照安装向导的提示进行安装。
- 安装完成后，你可以通过命令行使用 `git version` 命令确认安装成功。

### Step1：Fork 项目

- 首先需要 fork 这个项目，进入[univer-vchart-plugin 项目页面](https://github.com/VisActor/univer-vchart-plugin)，点击右上角的 Fork 按钮

![](https://lf9-dp-fe-cms-tos.byteorg.com/obj/bit-cloud/univer-vchart-plugin/contribution-guide/fork.PNG)

- 你的 github 帐号中会出现 xxxx(你的 github 用户名)/univer-vchart-plugin 这个项目
- 在本地电脑上使用以下命令: 得到一个 univer-vchart-plugin 文件夹

```
// ssh
git clone git@github.com:xxxx(你的github用户名)/univer-vchart-plugin.git
// https
git clone https://github.com/xxxx(你的github用户名)/univer-vchart-plugin.git
```

### Step2：获取项目代码

- 进入 VChart 文件夹，添加 VChart 的远程地址

```
git remote add upstream https://github.com/VisActor/univer-vchart-plugin.git
```

- 获取 VChart 最新源码

```
git pull upstream develop
```

### Step3：创建分支

- 好了，现在可以开始贡献我们的代码了。VChart 默认分支为 develop 分支。无论是功能开发、bug 修复、文档编写，都请新建立一个分支，再合并到 develop 分支上。使用以下代码创建分支：

```
// 创建功能开发分支
git checkout -b feat/xxxx

// 创建问题修复开发分支
git checkout -b fix/xxxx

// 创建文档、demo分支
git checkout -b docs/add-funnel-demo
```

假设我们创建了文档修改分支 `docs/add-funnel-demo`

- 现在我们可以在分支上更改代码了
- 假设我们已经添加了一些代码，提交到代码库
- git commit -a -m "docs: add custom funnel demo and related docs" 。VisActor 的 commit 提交信息遵循 [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) 规范

  - `<type>[optional scope]: <description>`
  - 其中常用的`type`包括 docs（文档、日志修改）、feat（新功能）、fix（问题修复）、refactor（代码重构）等，请根据实际情况选择。
  - 请用简短精确的英文描述编写 description
  - 提交 commit 之前，我们会进行 commit lint 检查，具体可以查看[检查规则](https://github.com/VisActor/univer-vchart-plugin/blob/98711490e90532d896dd9e44dd00a3af5b95f06d/common/autoinstallers/lint/commitlint.config.js)

### Step4：合并修改

- 一个常见的问题是远程的 upstream (@visactor/univer-vchart-plugin) 有了新的更新， 从而会导致我们提交的 Pull Request 时会导致冲突。 因此我们可以在提交前先把远程其他开发者的 commit 和我们的 commit 合并。使用以下代码切换到 develop 分支:

```
git checkout develop
```

- 使用以下代码拉出远程的最新代码:

```
git pull upstream develop
```

- 切换回自己的开发分支:

```
git checkout docs/add-funnel-demo
```

- 把 develop 的 commit 合并到自己分支：

```
git rebase develop
```

- 把更新代码提交到自己的分支中:

```
git push origin docs/add-funnel-demo
```

### Step5：提交 Pull Request

你可以在你的 github 代码仓库页面点击 `Compare & pull request` 按钮。

相关信息填写完成后，点击 Create pull request 提交。

## 拥抱 VisActor 社区

在你为 VisActor 贡献代码之余，我们鼓励你参与其他让社区更加繁荣的事情，比如：

1. 为项目的发展、功能规划 等提建议。
2. 创作文章、视频，开办讲座来宣传 VisActor。
3. 撰写推广计划，同团队一同执行。

VisActor 也在努力帮助参与社区建设的同学一同成长，我们计划（但不限于，期待大家更多的建议）提供如下帮助：

1. 以 VisActor 为基础的数据可视化研发培训，帮助参与的同学在编程技能、可视化理论、架构设计等多个方面快速成长。
2. 定期评选“代码贡献奖”和“社区推广奖”。
3. 组织社区成员参与开源活动。
