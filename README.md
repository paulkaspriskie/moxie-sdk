# Moxie-SDK

A micro front-end architecture to rapidly develop and deploy react apps.

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
### Compile development build and run dev server
> Uses webpack.dev.js to build development configuration and to start dev server. <br/><br/> **NOTE!:** If no app name is specified the first application within ```apps/``` will be compiled as default.
```shell
npm start [app-name]
```

<br/>

### Compile production build
> Uses webpack.prod.js to build production configuration. <br/><br/> **NOTE!:** If no app name is specified the first application within ```apps/``` will be compiled as default.
```shell
npm run build [app-name]
```

<br/>

### Create new application
> Dynamically generates directory and necessary entry point files within ```apps/```.
```shell
npm run create-app [app-name]
```

<br/>

### Create new component
> Dynamically generates react component architecture and corresponding scss file in specified app. A prompt will ask for valid component name when command is initially run.
```shell
npm run create-component [component-name]
```

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
