![Static Web Logo](https://satheesh-design.in/static-web-app/logo-sm.png "Static Web Logo") <br/>

## Our Goal

Our goal is to create a static web page set up, working with SCSS. There are some dependencies to compile the SCSS to CSS, starting a local server and also browser live reload. Here is the boilerplate to automate all this process in simple steps. It also includes documentation for some mixins. Which made you easy to play with mixins.

<br/>

## System Requirements
For using this service,  your machine needs to have Node.js and Gulp pre-installed. If you did didn't have those please find the installation method. This is used to compile the `SCSS`, `livereload` and also for starting `local server`.
1. [Node.js](https://nodejs.org/en/)
2. [Gulp](https://gulpjs.com/docs/en/getting-started/quick-start) or run `sudo npm install --global gulp-cli` in  terminal

**Note:** You just need to install Node.js and Gulp, no need to create a project. 

<br/>

Documentation
-------------
1. [Project setup - Manually](#project-manual-setup)
2. [Project setup - Using Mac app (This is only for mac users)](#mac-app)
3. [Mixins](#mixins)
     - [Background](https://github.com/swasatz/static-site/tree/master/scss#background)
     - [Button](https://github.com/swasatz/static-site/tree/master/scss#button)
     - [Media Queries](https://github.com/swasatz/static-site/tree/master/scss#media-queries)
     - [Prefixer](https://github.com/swasatz/static-site/tree/master/scss#prefixer)

<br/>

## Project manual setup
1. Open terminal
2. Navigate to the project folder in terminal `cd your-project-folder-path`
3. Clone the repository `git clone https://github.com/swasatz/static-site.git`
4. Move the contents from the cloned folder to parent 
     - For Mac users: `mv static-site/* . `
     - For Windows user follow the given steps:
          - Move to the static folder `cd static-site`
          - Run `move *.* ..`
          - Then run `for /r . %a in (.) do @move %a ..`

5. Remove the empty cloned folder `rm -rf static-site`
6. Install all dependencies `npm install`
7. To compile SCSS to CSS run `gulp scss` , to watch each and every change in files(HTML, CSS, js) run `gulp watch`
8. To start local server run `gulp serve`

That's it you are all set, open http://localhost:3000/ in the browser. If any changes are done in the code, the browser automatically reloads and update the latest changes.

**(or) use shorthand method to avoid too much terminal commands**

1. Follow first two points
2. Run the given script in the terminal(only for iOS users) `git clone https://github.com/swasatz/static-site.git && mv static-site/* . && rm -rf static-site && npm install && gulp watch & gulp serve`

**:clap: you are all set...** open http://localhost:3000/ in the browser to view the page.

<br/>

## Mac app
**:computer:**
This is only of the Mac users, simply [download the mac app and run.](https://satheesh-design.in/static-web-app/Static-web-setup.zip)
Since it needs to access external app(terminal) we need to give permission to allow access(Reference in attachment).

Starting the project for next time, you didn't need to run above app. 
- Just navigate to the folder in terminal.
- Run `gulp watch & gulp serve`

**Reference for mac permission**<br/>
<img src="https://satheesh-design.in/static-web-app/sw-privacy.png" style="max-width: 100%;">
<br/>

## Mixins
The main purpose of a mixin is to make a set of properties reusable. Like `SCSS/SASS` variables (where you define your values on a single location), Sass mixins allow you to define properties on a single location.

We have created mixins for most commonly used properties like `Button`, `Background`,`Prefixer`, `Media Queries`.
You can see the full [documentation here.](https://github.com/swasatz/static-site/tree/master/scss)

<br/>
<br/> 

Licensing
---------

MIT License

Copyright © 2019, [Satheesh Kumar S](https://satheesh-design.in/)<br/>
Organization [**Mallow Technologies Private Limited**](https://www.mallow-tech.com/)<br/>
All rights reserved.<br/>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


<br/>
<br/>

## Social
You can also find me at:<br/>
:point_right:<a href="https://dribbble.com/satheesh_design" target="_blank">Dribbble</a>:point_left:<br/>
:point_right:<a href="https://codepen.io/satheesh_design/" target="_blank">Codepen</a>:point_left:<br/>
:point_right:<a href="https://stackoverflow.com/users/5746301/satheesh-kumar" target="_blank">Stackoverflow</a>:point_left:<br/>
:point_right:<a href="https://medium.com/@satheesh_design" target="_blank">Medium</a>:point_left:<br/>
