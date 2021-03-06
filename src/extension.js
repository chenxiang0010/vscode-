const vscode = require('vscode');

/**
 * 插件被激活时触发，所有代码总入口
 * @param {*} context 插件上下文
 */
exports.activate = function(context) {
    console.log('恭喜，您的扩展“super-comprehensive”已被激活！');

    require('./test-command-params')(context); // 测试命令参数  获取当前文件路径
    require('./jump-to-definition')(context); // 跳转到定义
    require('./completion')(context); // 自动补全
    require('./welcome')(context); // 欢迎提示

};

/**
 * 插件被释放时触发
 */
exports.deactivate = function() {
    console.log('您的扩展“super-comprehensive”已被释放！')
};