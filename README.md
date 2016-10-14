# GitHub Repositories

#### By Jason Downing

## Description

_A web application written in javascript (utilizing Gulp and Bower libs) that takes in a GitHub username and returns a list of their repositories_

## Setup/Installation Requirements

Node.js, Gulp, and Bower installation required as well as the following dependencies:
* _"bower-files": "^3.14.1",_
* _"browser-sync": "^2.17.3",_
* _"browserify": "^13.1.0",_
* _"del": "^2.2.2",_
* _"gulp": "^3.9.1",_
* _"gulp-concat": "^2.6.0",_
* _"gulp-jshint": "^2.0.1",_
* _"gulp-sass": "^2.3.2",_
* _"gulp-sourcemaps": "^2.1.1",_
* _"gulp-uglify": "^2.0.0",_
* _"gulp-util": "^3.0.7",_
* _"jshint": "^2.9.3",_
* _"vinyl-source-stream": "^1.1.0"_
Copy the repository from GitHub: https://github.com/downingforce/github_repos
Gulp and Bower build can be executed after cloning using the following commands:
* _$npm install_
* _$bower install_
Run program in a command line terminal application using:
* _$gulp build_
* _$gulp serve_

## Specifications

| Behavior                              | Input Example               | Output Example                         |
| --------------------------------------| --------------------------- | -------------------------------------- |
| Take user input (github username)     | "downingforce"              | "Repositories for " + GitHubUser + ":" |
| Validates username                    | "23423vvfhw56jdfg77"        | "There is no user matching that name"  |
| Displays github user repos            | "downingforce"              | "address_book"......etc.               |


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
