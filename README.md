# skeleton-web-app
 web app skeleton with [spapp](https://github.com/c-smile/spapp)

 use `grunt` for app production and spapp generator
```shell
  npm install
```

  ##build
  ```shell
   grunt build #will output to dist/dev folder
   grunt build --rev=prod #will output in dist folder
  ```


 ##add a template/controller

 ```shell
  grunt spapp_generator:new --name=controller_name

 ```

 ##test
 ```shell
  grunt test
 ```
