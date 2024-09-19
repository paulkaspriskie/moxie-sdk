# Moxie-SDK

A front-end architecture/Software Development Kit (SDK) that rapidly develops and deploys React.js single page applications (SPAs).

## Contents
- [Installation](#installation)
- [Basic Usage](#basic-usage)
- [File Structure](#file-structure-overview)
- [Style Guides](docs/style-guidelines.md)

<br/>

## Installation
### Clone this repository
```shell
git clone https://github.com/paulkaspriskie/moxie-sdk.git
```
<br/>

### Install node dependencies
```shell
npm install
```

<br/>

---

<br/>

## Basic Usage
### NPM Scripts
| Command | Description |
| :------ | :---------- |
| `npm start <app-name>` | Uses webpack.dev.js to build development configuration and to start dev server. **NOTE!:** If no app name is specified the first application within ```apps/``` will be compiled as default. |
| `npm run build <app-name>` | Uses webpack.prod.js to build production configuration. **NOTE!:** If no app name is specified the first application within ```apps/``` will be compiled as default. |
| `npm run create-app <app name>` | Dynamically generates directory and necessary entry point files within ```apps/```. |
| `npm run create-component <component name>` | Dynamically generates react component architecture and corresponding scss file in specified app. A prompt will ask for valid app name when process initially runs. |


<br/>

---

<br/>

## File Structure Overview
```
.
├── apps
│   └── app-name
│       └── src
│           ├── js
│           │   └── index.js
│           └── scss
│               └── index.scss
├── docs
│   └── style-guidelines.md
├── lib
│   ├── config
│   │   ├── webpack.common.js
│   │   ├── webpack.dev.js
│   │   └── webpack.prod.js
│   ├── templates
│   │   └── index.template.html
│   └── util
│       ├── build.sh
│       ├── server.js
│       └── util-app-create.js
├── LICENSE
├── package.json
├── package-lock.json
└── README.md
```
>- ```apps/``` - Location of all precompiled app source code.
>- ```docs/``` - Contains general documentation on code formatting and project usage.
>- ```lib/``` - Common configurations, components, utilities and functions.
