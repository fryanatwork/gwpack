# GW-pack Template Generater
A module work with gulp and webpack to generate HTML templates.

## Getting Started

### Installation
Gwpack requires [Node.js](https://nodejs.org/) v4+ to run.

This package can be installed with:
```sh
$ git clone https://github.com/fryanatwork/gwpack ./gwpackTemplate
$ cd gwpackTemplate
$ npm install
$ npm run [task]
```

### Tasks
* ```$ npm run dev``` - Development
* ```$ npm run build``` - Generate template with formatter HTML
* ```$ npm run underbuild``` - Generate template with compress HTML




## Documentation
### Install Plugins in Project
You can import your plugins (like jQuery) or manually setting in `plugins/main.js`
### Template
Base on [gulp-html-extend](https://www.npmjs.com/package/gulp-html-extend)
1. #### Master on a template
```html
<!-- @@master  = /templates/App.tpl {"KEY":"VALUE"} -->
```
2. #### Placeholder in template
```html
<!-- @@placeholder= includeContent -->
```
3. #### Inject content
```html
<!-- @@block  =  includeContent-->
    Content here
<!-- @@close -->
```
4. #### Variable in Master template
```html
<!-- @@var KEY -->
```
5. #### Include components (without loops, but variable)
```html
<!-- @@include /footer.html {"KEY":"VALUE"} -->
```
---

### Include Components
Base on [gulp-file-include](https://www.npmjs.com/package/gulp-file-include)
1. #### Regular include
* Base path `views/components/[components]`
* ``@@fileinclude>/[componentName]`` 
2. #### Include for loops
Include script
```html
<body>
    @@fileinclude('/[componentName]', [
        { "KEY": "Value", "id": "1" },
        { "KEY": "Value", "id": "2" },
        { "KEY": "Value", "id": "3" }
    ])
</body>
```
Use variables in components
```html
<span>@@fileinclude>KEY</span>
```
---


### Global Variables
Base on [gulp-replace-include](https://www.npmjs.com/package/gulp-replace-include)
* Manage your variables in ``config/variables.js``
* `@@TEXT>KEY` in HTML
```js
global: {
	"KEY": 'VALUE'
}
```


## How it work?
1. #### webpack
Package plugins css, js files.

| TYPE | EXPORT |
| ------ | ------ |
| Javascript | `plugins/bundle/bundle.js` |
| CSS | `plugins/bundle/bundle.css` |
2. #### gulp
HTML, SCSS, Images, Template generate.

| TYPE | SRC | EXPORT |
| ------ | ------ | ------ |
| HTML | ``src/**/*``   | ``dist/`` |
| Javascript | ``plugins/main.js`` | ``plugins/bundle/bundle.js``, ``dist/vendor/bundle.js`` |
| CSS | ``assets/sass/**/*``, ``plugins/bundle.css`` | ``dist/vendor/bundle.css`` |
| Images | ``assets/images/**/*`` | ``dist/vendor/images/`` | 
3. #### Folder
| NAME | FILE TYPES |
| ------ | ------ |
| assets | SASS, Images|
| build | gulp tasks |
| config | Config for gulp task |
| plugins | Using `main.js` to import your plugins |
| src | HTML files to export|
| views | Templates, components.|
