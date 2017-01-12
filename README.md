# skeleton-web-app
 web app skeleton with [spapp](https://github.com/c-smile/spapp)

 use `grunt` for app production and spapp generator
```shell
  npm install
```


 ##add a template/controller

 ```shell
  grunt spapp_generator:new --name=controller_name

 ```

 ##test
 ```shell
  grunt test
 ```

 ##compressing for publishing
   ```
   grunt # will output app in dist/dev folder
   grunt --rev=prod #will output in dist folder
   ```
