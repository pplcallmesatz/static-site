# Mixins


If you are concerned about Unicode characters you can use ASCII to build the structures, so your example structure becomes

.
+-- SCSS
|   +-- application.scss
|   +-- your_file.scss
|       +-- mixins
|           +--_background.scss
|           +--_button.scss
|           +--_media-queries.scss
|           +--_prefixer.scss


```bash
└── scss
    ├── _variables.scss
    ├── _general.scss
    ├── application.scss
    └── mixins
        ├── _background.scss
        ├── _button.scss
        ├── _media-queries.scss
        └── _prefixer.scss
```