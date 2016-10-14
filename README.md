# GitHub Repositories

#### By Jason Downing

## Description

_A java web application demonstrating a field wildlife-tracker built using Spark and Velocity_

## Setup/Installation Requirements


* Node.js, Gulp, and Bower installation required as well as the following dependencies:
"bower-files": "^3.14.1",
"browser-sync": "^2.17.3",
"browserify": "^13.1.0",
"del": "^2.2.2",
"gulp": "^3.9.1",
"gulp-concat": "^2.6.0",
"gulp-jshint": "^2.0.1",
"gulp-sass": "^2.3.2",
"gulp-sourcemaps": "^2.1.1",
"gulp-uglify": "^2.0.0",
"gulp-util": "^3.0.7",
"jshint": "^2.9.3",
"vinyl-source-stream": "^1.1.0"
* Copy the repository from GitHub: https://github.com/downingforce/github
* Gulp and Bower build can be executed after cloning using the following commands:
- $npm install
- $bower install
* Run program in a command line terminal application using:
$gulp build
$gulp serve

## Specifications

| Behavior                              | Input Example               | Output Example                         |
| --------------------------------------| --------------------------- | -------------------------------------- |
| Take user input (github username)     | "downingforce"              | "Repositories for " + GitHubUser + ":" |
| Validates username                    | "23423vvfhw56jdfg77"        | "There is no user matching that name"  |
| Displays github user repos            | "downingforce"              | "<li>'address_book'</li>"              |


## Technologies Used

* Javascript
* Node.js - https://nodejs.org/en/
* Gulp - http://gulpjs.com/
* Bower - https://bower.io/

## Licensing

MIT

_This software is licensed under the MIT license.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE._

Copyright (c) 2016 **_Jason Downing_**