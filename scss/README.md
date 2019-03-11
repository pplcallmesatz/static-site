# Mixins

The main purpose of a mixin is to make a set of properties reusable. Like Sass variables (where you define your values on a single location), Sass mixins allow you to define properties on a single location.

## Documentation

We have some boilerplates for the mixins which are most commonly using in the projects, they are listed below.
- [Background](#background)
- [Button](#button)
- [Media Queries](#media-queries)
- [Prefixer](#prefixer)

```
git clone --single-branch --branch mixins https://github.com/swasatz/static-site.git
```

## File structure
```
├── assets
|   └── css
|       ├── application.css
        └── your-style.css
|        
└── scss
    ├── _variables.scss
    ├── _general.scss
    ├── application.scss (Import all your files if it is global styles.)
    ├── your-style.scss (create new file)
    |   
    └── mixins
        ├── _background.scss
        ├── _button.scss
        ├── _media-queries.scss
        └── _prefixer.scss
```

## General
All the files are imported inside the `application.scss` and compailed to `assets/css/application.css`.
You can also create a custom scss file inside to the `scss` folder, it will also converted in `css` under `css` folder
If you create a partial file it won't compile as css.


## Background
Insted of giving full path for background image, just pass the background image name, size (how it to be placed), position (Where it to be placed).<br/>

*Syntax*
```Syntax
.bg {
@include bg(image.png, cover, top)
}
```

*Output*<br/>
This is the output for the above code.
```Output
.bg {
  background-image: url(../img/image.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
}
```
If you need to chnage the image path, navigate to `_background.scss` in mixins folder. Change the `$imagedir` variable path.

---

## Button
Button has three different styles, Normal button, Link button, Outline button.

**Normal Button** <br/>
You need to pass the two vaiables/values, first is for background color and second is for text color.<br />
*Syntax*
```Syntax
.btn{
@include btn(#000000, #ffffff);
}
```

**Link Button** <br/>
For link it needs only the text color.<br/>
*Syntax*
```Syntax
.btn-link{
@include btn-link(#000000);
}
```
**Outline Button** <br/>
Since the border and text color are same you just need to pass the primary color/theme color.<br/>
*Syntax*
```Syntax
@include btn-outline(#000000);
```
---

## Media Queries
We have followed the bootstrap media structure here. We feel it is better to use the bootstrap class elements like `sm`, `md`, `lg`.<br/>
*Syntax*
```Syntax
.hero{
  @include media(md){
  height: 100px;      
  }
  height: 200px;
}
```
*Output*
```Output
.hero{
height: 200px;
}

@media (min-width: 992px){
height: 100px;
}
```

Here is the table which has the following media options.<br/>
**Options**

| Media Points        	| Options                 	|
|---------------------	|-------------------------	|
| (min-width: 768px)  	| **@include media(sm)**      	|
| (max-width: 767px)  	| **@include media(sm-max)**  	|
| (min-width: 992px)  	| **@include media(md)**     	|
| (max-width: 991px)  	| **@include media(md-max)**  	|
| (min-width: 1200px) 	| **@include media(lg)**	|
| (max-width: 1199px) 	| **@include media(lg-max)**	|
| (min-width: 1300px) 	| **@include media(xlg)**	|
| (max-width: 1299px) 	| **@include media(xlg-max)**	|

---

## Prefixer
It is used to add the browser compatablity prefixes to the `CSS` properties. Example: `webkit, moz, o, ms`.<br/>
You Need to pass two values, first one is `property` and the second is `value`.
*Syntax*
```
.prefixer{
  @include prefixer(transform, translate(-50%, -50%))
}
```
*Output*
```
.prefixer {
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
```

