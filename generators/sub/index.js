const Generator = require('yeoman-generator'),
      path = require('path'),
      fs = require('fs')

/**
 *  必须要有这份文件
 */
module.exports = class extends Generator {
    
    constructor(args, opts) {
        super(args, opts)
        this.log('build the mis:sub yeoman')
        //  添加自定义代码
        this.option('babel')
        this._privateBuild()
        //  this.log(this._buildFiles(args[0]))
        this.filename = args[0]
        this.domainFile = args[1]
    }

    writing () {
        const source = this.templatePath('index.html'),
              cwd = this.contextRoot,
              domain = this.fs.readJSON(path.resolve(cwd, this.domainFile)),
              destFile = path.resolve(cwd, this.filename)
        /** 
        this.fs.copyTpl(source, destFile, {
            title : '国际米兰',
            username : '伊卡尔迪'
        });
        */
        this.fs.copyTpl(source, destFile, domain)
    }

    /**
     * 优先级说明
     * 通过方法的名称来确定执行的优先级，比如end最后一个执行
     */
    end () {
        this.log('generator is end!')
        log
    }

    _buildFiles (filename) {
        const root = this.destinationRoot(),
        //      file = this.destinationPath(filename),
              cwd = this.contextRoot,
              file = path.resolve(cwd, filename)
        return file
    }

    /**
     * 所有的实例方法都会自动执行
     * 每个实例方法都是一个任务
     */
    buildOptions () {
        const self = this
        this.log('build the options')
        //  支持异步执行的任务
        return Promise.resolve({
            then (resolve, reject) {
                setTimeout(() => {
                    self.log('Hello, Async!')    
                    resolve()
                }, 2000)
            }
        })
    }

    /**
     * 不会自动执行的三种实例方法
     * 1. 以_ 开头的实例方法
     * 2. 在constructor中注册给this的方法
     * 3. 继承父类的方法
     */
    _privateBuild () {
        this.log('this is a private method!')
    }

}