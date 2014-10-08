define(function(require, exports, module){
	var $ = require('lib/zepto/zepto');

	//文档头
	var $head = $('head');

	//styleUtil模块
	var styleUtil = {
		//追加样式
		addStyle : function (styleText) {
			var $style = $head.find('#styleUtil_styleElement');
			if($style.length == 0){
				$style = $('<style id="styleUtil_styleElement"></style>');
				$head.append($style);
			}
			$style.append(styleText);
		}
	};

	//输出模块
	module.exports = styleUtil;	
});