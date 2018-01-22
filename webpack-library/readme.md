### package.json文件

#### 对于script属性
---
>（一）build命令
```json
"scripts": {
  "build": "cross-env WEBPACK_ENV=build webpack",
}
```

1. 由于在是在window环境，所以编译时需要加上`cross-env`；
2. 需要在package.json文件里添加
```json
  "devDependencies": {
    "cross-env": "^5.1"
  }
``` 

> (二) fix命令
```json
"scripts": {
  "fix": "eslint --fix ./src/*.js"
}
```
此命令主要是让编码风格符合`.eslintrc`的定义

> (三) test命令
```json
  "script": {
    "test": "mocha --compilers js:babel-core/register --colors -w ./test/*.spec.js"
  }
```
- `--compilers`: 它允许我们在运行测试文件之前预先处理这个文件
- `-w`: 它允许监控文件变化  


### webpack.config.js文件

```json
  output: {
    path: __dirname + '/lib',
    filename: library.js,
    library: MyDate,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
```
1. `filename`: 导出的类库文件名字，`script src="library.js"`
2. `library` : 导出的类名，` var MyDate = library.MyDate; var myDate = new MyDate();`
3. `libraryTarget`: 设定为 umd 表示采用 [通用模块定义](https://github.com/umdjs/umd) 来生成最终结果。而且这段代码确实可以识别不同的运行环境，并为我们的类库提供一个妥当的初始化机制


### 其他内容:[[译] 基于 Webpack 和 ES6 打造 JavaScript 类库](https://github.com/cssmagic/blog/issues/56)
