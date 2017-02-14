# skeleton-web-app
 web app skeleton with [spapp](https://github.com/c-smile/spapp)

 use `grunt` for app production and spapp generator
```shell
  git clone https://github.com/lduboeuf/skeleton-web-app.git
  cd skeleton-web-app
  npm install
```

  ##build
  ```shell
   grunt build:dev #will copy all files to dist/dev folder
   grunt build:prod #will output minified, compressed files in dist folder and launch tests
  ```


 ##add a template/controller

 ```shell
  grunt spapp_generator:new --name=folder/controller_name

 ```

 ##test
 ```shell
  grunt test
 ```
