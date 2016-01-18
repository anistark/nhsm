Node Hapi Swig Mongo
=====================

Stuffs Used :

#### [Node][nodeUrl]

#### [Hapi](http://hapijs.com/)

#### [Swig](http://paularmstrong.github.io/swig/)

#### [MongoDb](https://www.mongodb.org/)

#### [Joi](https://github.com/hapijs/joi)


Setup

Install via npm
```
mkdir projectName
cd projectName
npm init
npm install nhsm
cp -r node_modules/nhsm .
```

Install via git

```
$ git clone --depth=1 https://github.com/anistark/nhsm.git projectName
$ cd neem
$ npm install
```

**The project will be a bit different in both the processes shown above. But you can rename you project or edit the package.json file accordingly.


Configure your project
```
$ cp config_example.js config.js
```

Replace the config values accordingly.


Start server:
```
$ node server
```

#### Production

Good to minify first:
```
npm install -g gulp
```


Suggestions welcome for enhancing this boilerplate stack


[nodeUrl]: https://nodejs.org