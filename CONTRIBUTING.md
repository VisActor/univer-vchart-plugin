First of all, thumbs up 👍🏻 for choosing to contribute to the open-source community. Furthermore, thank you very much for deciding to participate in the VisActor community and contribute to this open-source project.

## VChart Contribution Guide
The VisActor team typically develops and maintains issues on GitHub. Please open the [GitHub website](https://github.com/), click the `Sign up` button in the top right corner, register your own account, and take the first step on your journey to open-source contribution.

If you are unable to access the GitHub site due to special circumstances, please inform us and proceed with the project development through [Gitee](https://gitee.com/VisActor/univer-vchart-plugin).
In the [VChart repository](https://github.com/VisActor/univer-vchart-plugin), we have a guide aimed at all open-source contributors, which covers topics such as version management and branch management. **Please take a few minutes to read and understand it**.

## Your First Pull Request

### Step0: Install Git

Git is a version control system used to track and manage code changes in software development projects. It helps developers record and manage the history of code, facilitating team collaboration, code version control, and code merging. With Git, you can track every version of each file and easily switch and compare between different versions. Git also offers branch management features, allowing multiple parallel development tasks to proceed simultaneously.

- Visit the official Git website: <https://git-scm.com/>
- Download the latest version of the Git installer.
- Run the downloaded installer and follow the installation guide.
- After installation, you can confirm the installation success via the command line with the `git version` command.

### Step1: Fork the Project

- First, you need to fork this project. Go to the [univer-vchart-plugin project page](https://github.com/VisActor/univer-vchart-plugin) and click the Fork button in the top right corner.

![](https://lf9-dp-fe-cms-tos.byteorg.com/obj/bit-cloud/univer-vchart-plugin/contribution-guide/fork.PNG)

- The project xxxx(your GitHub username)/univer-vchart-plugin will appear in your GitHub account.
- Use the following command on your local computer to obtain a univer-vchart-plugin folder:

```
// ssh
git clone git@github.com:xxxx(你的github用户名)/univer-vchart-plugin.git
// https
git clone https://github.com/xxxx(你的github用户名)/univer-vchart-plugin.git
```

### Step2: Obtain the Project Code

- Navigate to the VChart directory and add the remote URL for VChart

```
git remote add upstream https://github.com/VisActor/univer-vchart-plugin.git
```

- Fetch the latest source code of univer-vchart-plugin

```
git pull upstream develop
```

### Step3: Create a Branch
- Alright, now we can start contributing our code. The default branch for VChart is the develop branch. Whether it's feature development, bug fixing, or documentation writing, please create a new branch and then merge it into the develop branch. Use the following code to create a branch:
// End of  Selection

```
// Create a feature development branch
git checkout -b feat/xxxx

// Create a bug fix development branch
git checkout -b fix/xxxx

// Create a documentation/demo branch
git checkout -b docs/add-funnel-demo
```

Assuming we have created a documentation modification branch `docs/add-funnel-demo`

- We can now make changes to the code on this branch.
- Assume we have already added some code and committed it to the repository.
- git commit -a -m "docs: add custom funnel demo and related docs". VisActor's commit messages follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) standard.

  - `<type>[optional scope]: <description>`
  - Common `type` includes docs (documentation, log changes), feat (new features), fix (bug fixes), refactor (code restructuring), etc. Please choose according to the actual situation.
  - Please write the description in concise and precise English.
  - Before submitting the commit, we will perform a commit lint check, you can view the [linting rules](https://github.com/VisActor/univer-vchart-plugin/blob/98711490e90532d896dd9e44dd00a3af5b95f06d/common/autoinstallers/lint/commitlint.config.js) here.

### Step4: Merge Changes

- A common issue is that the remote upstream (@visactor/univer-vchart-plugin) has new updates, which can lead to conflicts when we submit our Pull Request. Therefore, we can merge the commits from other developers and our own commits before submitting. Use the following code to switch to the develop branch:
```
git checkout develop
```

- Use the following code to pull the latest code from the remote repository:

```
git pull upstream develop
```

- Switch back to your own development branch:

```
git checkout docs/add-funnel-demo
```

- Merge the commits from develop into your own branch:

```
git rebase develop
```

- Push the updated code to your own branch:

```
git push origin docs/add-funnel-demo
```

### Step 5: Submit a Pull Request

You can click the `Compare & pull request` button on your GitHub repository page.

After filling out the relevant information, click on Create pull request to submit.

## Embrace the VisActor Community

Beyond contributing code to VisActor, we encourage you to engage in other activities that enrich our community, such as:

1. Providing suggestions for project development and feature planning.
2. Creating articles, videos, and hosting seminars to promote VisActor.
3. Writing and implementing promotional plans with the team.

VisActor is also committed to helping community members grow by participating in community building. Our plans (which are not limited to and we look forward to more suggestions) include the following support:

1. Data visualization research and development training based on VisActor, aimed at rapidly enhancing participants' programming skills, visualization theories, and architectural design.
2. Regularly awarding "Code Contribution Awards" and "Community Promotion Awards".
3. Organizing community members to participate in open-source activities.

