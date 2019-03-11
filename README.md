If you want to start a new static web project, this is useful for you. It has predefined settings for SCSS to CSS compilation, Live Reload,  starting a local server.

Requirements
For using this service,  your machine needs to have Node.js and Gulp pre-installed. If you did didn't have those please find the installation method. 
1. [Node.js](https://nodejs.org/en/)
2. [Gulp](https://gulpjs.com/docs/en/getting-started/quick-start) or run `npm install --global gulp-cli` in  terminal

**Note:** You just need to install Node.js and Gulp, no need to create a project. 

Documentation
-------------
1. [Project setup - Manually](#project-manual-setup)
2. [Project setup - Using Mac app (This is only for mac users)](#mac-app)
3. [Mixins](#mixins)

<br/>
<br/>
<br/>

## Project manual setup
1. Open terminal
2. Navigate to the project folder in terminal `cd your-project-folder-path`
3. Clone the repository `git clone https://github.com/swasatz/static-site.git`
4. Move the contents from the cloned folder to parent `mv static-site/* . `
5. Remove the empty cloned folder `rm -rf static-site`
6. Install all dependencies `npm install`
7. To compile SCSS to CSS run `gulp scss` , to watch each and every change in files(HTML, CSS, js) run `gulp watch`
8. To start local server run `gulp serve`

That's it you are all set, open http://localhost:3000/ in the browser. If any changes are done in the code, the browser automatically reloads and update the latest changes.

**(or) use shorthand method to avoid too much terminal commands**

1. Follow first two points
2. Run the given script in the terminal `git clone https://github.com/swasatz/static-site.git && mv static-site/* . && rm -rf static-site && npm install && gulp watch & gulp serve`

**:clap: you are all set...** open http://localhost:3000/ in the browser to view the page.

<br/>
<br/>
<br/>

## Mac app
**:computer:**
This is only of the Mac users, simply download the mac app and run.
Since it needs to access external app(terminal) we need to give permission to allow access.

Starting the project for next time, you didn't need to run above app. 
- Just navigate to the folder in terminal.
- Run `gulp watch & gulp serve`

**Reference in attachment.**

## Mixins
The main purpose of a mixin is to make a set of properties reusable. Like Sass variables (where you define your values on a single location), Sass mixins allow you to define properties on a single location.

We have created mixins for most commonly used properties.
You can see the full [documentation here.](https://github.com/swasatz/static-site/tree/master/scss)

<br/>
<br/>
<br/>

Licensing
---------
Copyright 2019 Satheesh Kumar S

Organization [**Mallow Technologies Private Limited**](https://www.mallow-tech.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
