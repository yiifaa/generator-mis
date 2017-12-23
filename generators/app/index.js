const Generator = require('yeoman-generator')

/**
 *  必须要有这份文件
 */
module.exports = class extends Generator {
    
    constructor(args, opts) {
        super(args, opts)
        this.log(args)
        this.log('-----------------------------------')
        this.log(opts)
        //  添加自定义代码
        this.option('babel')
    }

    buildOptions() {
        this.log('build the options')
    }

}