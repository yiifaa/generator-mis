generator-mis
=============
> 信息系统代码自动生成器

1. 安装方式
```bash
#
npm install
#
npm link
```

2. 使用方式
```bash
# 生成项目
yo mis
# 生成子模块
# index.html在当前目录下生成的文件
# domain.js为域对象，结合模板生成目标文件
yo mis:sub index.html domain.js
```

## 2. 补充
```bash
# 安装npx
npm install npx -g
# 运行方式，能吸收ES6语法文件
npx babel-node configs/App
# 编译直接生成Nodejs兼容文件
npx babel configs/Constant.js -o configs/Output.js
```

## 参考文档
1. [文件操作](https://github.com/sboudrias/mem-fs-editor)
2. [模板的详细操作](http://yeoman.io/authoring/file-system.html)