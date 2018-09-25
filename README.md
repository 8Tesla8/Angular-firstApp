# APM

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



## HTML
product?.productName
[(ngModel)] = 'product?.name' // not working in HTML

## package.json
"scripts" have some commands


## -- -- --
## npm command
// clean terminal
cls

cntr + C or cmd + C stop running project 

// install angular globaly
npm install -g @angular/cli
g - globaly

// angular help
ng help

// show help about command
ng commandName --help

// create new angular appliacation
ng new projectName
ng new projectName --prefix name
angular.json have a prefix

// create component 
ng g c path/name --flat 
g - generate 
c - component 
--flat - will not create additional folder

// run project
npm start
ng serve 
// run project on specific port
ng serve --port 4402 
// run project and open it in default browser
ng serve -o
o - open flag, open in default browser 

// create guard
ng g g path/name
g - generate 
g - guard

// create module
ng g m path/name
g - generate
m - module

// import module
ng g m path/name --flat -m path/moduleName
g - generate
m - modul
--flat - not create folder
-m - import module in module(name)


// run test
ng test
ng e2e

// prepare your application for deployment, this command will create dist folder
ng build
ng build --prod 
prod - do not generate map file

