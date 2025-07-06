# Source for fast build template
## Description
- Use for fastbuild html, css, js for wordpress by Pug file

## Require
- Node >= 16.x
- Gulp

## How to use
- Run the command below:
```
npm install 
```
- Install gulp cli:
```
npm install --global gulp-cli
```
- Install gulp package (don't need run these command after GitClone this, just use for create the source): 
```
npm install --save-dev gulp
npm install --save-dev gulp-sass 
npm install --save-dev sass 
npm install --save-dev gulp-autoprefixer 
npm install --save-dev gulp-clean-css 
npm install --save-dev gulp-uglify 
npm install --save-dev gulp-concat 
npm install --save-dev gulp-imagemin 
npm install --save-dev browser-sync 
npm install --save-dev gulp-htmlmin 
npm install --save-dev gulp-nunjucks-render
npm install --save-dev del
```
- Run the command below to use:
```
gulp
```
- Install format and snipet for .njk
    - Use this extendsion: eseom.nunjucks-template
    - Ctrl + Shift + P and input "Open User Settings (JSON)" add below command into json:
```
"emmet.triggerExpansionOnTab": true,
"emmet.showSuggestionsAsSnippets": true,
"[nunjucks]": {
    "editor.defaultFormatter": "vscode.html-language-features",
    "editor.tabSize": 2,
    "files.associations": {
        "*.njk": "html"
    },
    "emmet.includeLanguages": {
        "nunjucks": "html"
    },
},
```
The source was set up by KhangNguyen — do not copy
