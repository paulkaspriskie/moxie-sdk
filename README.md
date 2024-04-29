# Moxie-SDK

A micro front-end architecture to rapidly develop and deploy react apps.

<br/>

## Installation
#### Clone this repository
```shell
git clone https://github.com/paulkaspriskie/moxie-sdk.git
```

#### Install node dependencies
```shell
npm install
```
<br/>

---

<br/>

## Usage
#### Compile development build and run dev server
```shell
npm start [app-name]
```

#### Compile production build
```shell
npm run build [app-name]
```
> **NOTE!:** If no app name is specified the first application within ```apps/``` will be compiled as default.

#### Create new application
> Dynamically generates directory and necessary entry point files within ```apps/```.
```shell
npm run create-app [app-name]
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
