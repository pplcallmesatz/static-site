# Mixins

The main purpose of a mixin is to make a set of properties reusable. Like Sass variables (where you define your values on a single location), Sass mixins allow you to define properties on a single location.

## Documentation

We have some boilerplates for the mixins which are most commonly using in the projects, they are listed below.
- [Background](#background)
- [Button](#button)
- [Media Queries](#media-queries)
- [Prefixer](#prefixer)

```bash
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

## Button

## Media Queries

## Prefixer


