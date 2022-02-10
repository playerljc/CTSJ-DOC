# CTSJ-DOC

English | [简体中文](./README-zh_CN.md)

A document generation tool, including two sets of project templates for generating documents, React and Vue respectively

React project template

  - Build with **[@ctsj/build](https://www.npmjs.com/package/@ctsj/build)**
  - Use **[@ctsj/router](https://www.npmjs.com/package/@ctsj/router)** for routing jump
  - Use **[ant-design](https://ant.design/)** for UI
  - Use **[@baifendian/adhere-ui-playground](https://www.npmjs.com/package/@baifendian/adhere-ui-playground)** as the code display component, For details, please refer to [Online Example](http://49.232.163.126:8083/adhere/component/ui/demo), and for configuration, please [Reference](http://49.232.163.126:8083/adhere/component/ui/ playground)
    - AnchorNavigation - panel with anchor navigation
    - CodeBoxPanel - code display group panel (can include Playground, PlayGroundTab and PlaygroundMulit)
    - CodePanel - single code display panel
    - CodeTabPanel - Code display panel with tab switching
    - FunctionProps - function description panel
    - Props - Props description panel for React
    - Playground - basic code and example display panel (including CodePanel)
    - PlayGroundTab - Code and example display panel with tab switching (includes CodeTabPanel)
    - PlaygroundMulit - Multiple code and example display panels (including Playground and PlaygroundMulit)
    - PlaygroundPage - contains AnchorNavigation and CodeBoxPanel
  - React-17.x
  - Ant-Design-4.x \*Typescript 4.x

Vue project template
  - Build with **[@ctsj/buildv](https://www.npmjs.com/package/@ctsj/buildv)**
  - Use **[vue-router](https://router.vuejs.org/zh/)** for routing jump
  - Use **[ant-design-vue](https://www.antdv.com/docs/vue/introduce-cn/)** for UI
  - Use **[@baifendian/adherev-ui-playground](https://www.npmjs.com/package/@baifendian/adherev-ui-playground)** as the code display component, For details, please refer to [Online Example](http://49.232.163.126:8084/adherev/component/ui/demo), and for configuration, please [Reference](http://49.232.163.126:8084/adherev/component/ui/ playground)
    - AnchorNavigation - panel with anchor navigation
    - CodeBoxPanel - code display group panel (can include Playground, PlayGroundTab and PlaygroundMulit)
    - CodePanel - single code display panel
    - CodeTabPanel - Code display panel with tab switching
    - FunctionProps - function description panel
    - Props - Props description panel for React
    - Playground - basic code and example display panel (including CodePanel)
    - PlayGroundTab - Code and example display panel with tab switching (includes CodeTabPanel)
    - PlaygroundMulit - Multiple code and example display panels (including Playground and PlaygroundMulit)
    - PlaygroundPage - contains AnchorNavigation and CodeBoxPanel
  - Vue-2.x
  - Ant-Design-Vue-1.x \*Typescript 4.x

# Install

```
npm install @ctsj/doc
```

```
yarn add @ctsj/doc
```

# use

- Create React project template

```
ctd create -t ​​react -n yarn -d HelloWord
```

- Create Vue project template

```
ctd create -t ​​vue -n yarn -d HelloWord
```

- enter/start

```
> cd HelloWord
> npm run startapp
```

- Construct

```
> npm run buildapp
```

# CLI

&ensp;&ensp; Use ctd create to create a project

- -t --type Create the type of project template [react | vue]
- -n --npmClient The npmClient [npm | yarn] used by npmClient is yarn by default
- -d --directory The directory where the project is created Supports relative and absolute paths

# develop

- ### React development

  - Project catalog introduction

  | Contents/Files    | Introduction                  |
  | ----------------- | ----------------------------- |
  | assets            | static directory              |
  | src               | Source directory              |
  | themes            | Theme Directory               |
  | .browserslistrc   | browserslistrc configuration  |
  | .editorconfig     | editorconfig configuration    |
  | .eslintrc.js      | eslint configuration          |
  | .prettierrc.js    | prettierrc configuration      |
  | .stylelintrc.js   | stylelintrc configuration     |
  | ctbuild.config.js | build (webpack) configuration |
  | jsconfig.json     | jsconfig.json configuration   |
  | package.json      | Project configuration         |
  | tsconfig.json     | typescript configuration      |

  - Introduction to the src directory

    - components - system-level components are now divided into gallery, ui, util and can be defined by themselves
    - config - configure
      - dict - directory of dictionaries
      - dict.config.js - dictionary configuration
      - router.config.js - routing configuration
    - lib - the lib that supports the system
      - AnchorNavigation - panel with anchor navigation
      - CodeBoxPanel - code display group panel (can include Playground, PlayGroundTab and PlaygroundMulit)
      - CodePanel - single code display panel
      - CodeTabPanel - Code display panel with tab switching
      - FunctionProps - function description panel
      - Props - Props description panel for React
      - Playground - basic code and example display panel (including CodePanel)
      - PlayGroundTab - Code and example display panel with tab switching (includes CodeTabPanel)
      - PlaygroundMulit - Multiple code and example display panels (including Playground and PlaygroundMulit)
      - PlaygroundPage - contains AnchorNavigation and CodeBoxPanel
      - Header - header (including first-level menu information)
      - Footer - foot (contains external connection information)
      - GalleryLayout - code snippet display panel
      - ScrollFooterPanel - scrollable panel with Footer
      - BasicLayout - routing switch panel on the right side of the secondary menu on the left (dynamically generated according to the routing configuration)
      - Router - routing configuration integration
      - SearchBar - head search component (for full text search)
        - index.json - index file
          - kw - keyword to search for
          - group - group name
          - path - routing address
    - app.jsx - the top-level routing component
    - changelog.jsx - changelog component
    - CHANGELOG.md - markdown for CHANGELOG
    - introduction.jsx - the introduction component
    - index.html - html template file
    - index.js - the first js file to execute
    - index.less - overall less file

  - package.json description
    - startapp command - start the project
    - buildapp command - build the project
      - --define parameter
        - alias=@ webpack alias set @ is the src directory address
        - envVars=true The env variable value is mixed into the process
        - cssModules=true whether to enable cssModel
        - static=assets static directory name
    - lint-\* eslint related commands

- ### Vue development

  - Project catalog introduction

  | Contents/Files     | Introduction                  |
  | ------------------ | ----------------------------- |
  | assets             | static directory              |
  | src                | Source directory              |
  | themes             | Theme Directory               |
  | .browserslistrc    | browserslistrc configuration  |
  | .editorconfig      | editorconfig configuration    |
  | .eslintrc.js       | eslint configuration          |
  | .prettierrc.js     | prettierrc configuration      |
  | .stylelintrc.js    | stylelintrc configuration     |
  | ctbuildv.config.js | build (webpack) configuration |
  | jsconfig.json      | jsconfig.json configuration   |
  | package.json       | Project configuration         |
  | tsconfig.json      | typescript configuration      |

  - Introduction to the src directory

    - components - system-level components are now divided into gallery, ui, util and can be defined by themselves
    - config - configure
      - component.register.config.js - registration of Vue global components and plugins
      - router.config.js - routing configuration
    - lib - the lib that supports the system
      - AnchorNavigation - panel with anchor navigation
      - CodeBoxPanel - code display group panel (can include Playground, PlayGroundTab and PlaygroundMulit)
      - CodePanel - single code display panel
      - CodeTabPanel - Code display panel with tab switching
      - FunctionProps - function description panel
      - Props - Props description panel for React
      - Playground - basic code and example display panel (including CodePanel)
      - PlayGroundTab - Code and example display panel with tab switching (includes CodeTabPanel)
      - PlaygroundMulit - Multiple code and example display panels (including Playground and PlaygroundMulit)
      - PlaygroundPage - contains AnchorNavigation and CodeBoxPanel
      - Header - header (including first-level menu information)
      - Footer - foot (contains external connection information)
      - GalleryLayout - code snippet display panel
      - ScrollFooterPanel - scrollable panel with Footer
      - BasicLayout - routing switch panel on the right side of the secondary menu on the left (dynamically generated according to the routing configuration)
      - Router - routing configuration integration
      - SearchBar - head search component (for full text search)
        - index.json - index file
          - kw - keyword to search for
          - group - group name
          - path - routing address
    - app.vue - the top-level routing component
    - changelog.vue - changelog component
    - CHANGELOG.md - markdown for CHANGELOG
    - introduction.vue - the introduction component
    - index.html - html template file
    - index.ts - the first js file to execute
    - index.less - overall less file

  - package.json description
    - startapp command - start the project
    - buildapp command - build the project
      - --define parameter
        - alias=@ webpack alias set @ is the src directory address
        - envVars=true The env variable value is mixed into the process
        - cssModules=true whether to enable cssModel
        - static=assets static directory name
        - runtimeCompiler=true whether to dynamically compile Vue's template template
    - lint-\* eslint related commands
