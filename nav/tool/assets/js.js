var scale_2  = $('scale_2');
var scale_8  = $('scale_8');
var scale_10 = $('scale_10');
var scale_16 = $('scale_16');

//清除
function clearNum(){
	$('sNum').value    = '';
	scale_2.value  = '';
	scale_8.value  = '';
	scale_10.value = '';
	scale_16.value = '';
}

//点击复制
function copyfun(funName,sn){
	var str = $(funName).value.toString();
	buttonCopyCode(str);
	$('showTxt').innerHTML = sn+'进制复制成功!';
}


//得值
function changeNum(){
	var scaleNum = $('scaleNum').value; //进制数
	var sNum     = $('sNum').value;     //输入的数值
	if(scaleNum=='16'){
		if(/[^0-9a-fA-F]+/.test(sNum)){
			scale_2.value = '<font style="color:red">转换的数据格式不对</font>';
		}
	}else if(isNaN(sNum)){
			scale_2.value = '<font style="color:red">转换的数据格式不对</font>';
			return false;
	}
	switch(scaleNum){
		case '2':
			if(!/[^01]+/.test(sNum)){
				scale_2.value  = sNum;
				scale_8.value  = parseInt(sNum,2).toString(8);
				scale_10.value = parseInt(sNum,2);
				scale_16.value = parseInt(sNum,2).toString(16);
			}else{
				scale_2.value = '<font style="color:red">转换的数据格式不对</font>';
			}
			break;
		case '8':
			if(!/[^0-7]+/.test(sNum)){
				scale_2.value  = parseInt(sNum,8).toString(2);
				scale_8.value  = sNum;
				scale_10.value = parseInt(sNum,8);
				scale_16.value = parseInt(sNum,8).toString(16);
			}else{
				scale_2.value = '<font style="color:red">转换的数据格式不对</font>';
			}
			break;
		case '10':
			if(!/\D+/.test(sNum)){
				scale_2.value  = parseInt(sNum).toString(2);
				scale_8.value  = parseInt(sNum).toString(8);
				scale_10.value = sNum;
				scale_16.value = parseInt(sNum).toString(16);
			}else{
				scale_2.value = '<font style="color:red">转换的数据格式不对</font>';
			}			
			break;
		case '16':
				scale_2.value = parseInt(sNum,16).toString(2);
				scale_8.value  = parseInt(sNum,16).toString(8);
				scale_10.value = parseInt(sNum,16);
				scale_16.value = sNum;
			break;
	}
}



function $(id){return document.getElementById(id);}

//复制函数
function buttonCopyCode(txt ){
	if (window.clipboardData) {
		window.clipboardData.clearData();
		window.clipboardData.setData("Text", txt);
	} else if (navigator.userAgent.indexOf("Opera") != -1) {
		window.location = txt;
	} else if (window.netscape) {
		try {
			netscape.security.PrivilegeManager
					.enablePrivilege("UniversalXPConnect");
		} catch (e) {
			alert("你使用的FireFox浏览器,复制功能被浏览器拒绝！\r\n请在浏览器地址栏输入“about:config”并回车。\r\n然后将“signed.applets.codebase_principal_support”双击，设置为“true”");
			return;
		}
		var clip = Components.classes['@mozilla.org/widget/clipboard;1']
				.createInstance(Components.interfaces.nsIClipboard);
		if (!clip)
			return;
		var trans = Components.classes['@mozilla.org/widget/transferable;1']
				.createInstance(Components.interfaces.nsITransferable);
		if (!trans)
			return;
		trans.addDataFlavor('text/unicode');
		var str = new Object();
		var len = new Object();
		var str = Components.classes["@mozilla.org/supports-string;1"]
				.createInstance(Components.interfaces.nsISupportsString);
		var copytext = txt;
		str.data = copytext;
		trans.setTransferData("text/unicode", str, copytext.length * 2);
		var clipid = Components.interfaces.nsIClipboard;
		if (!clip)
			return false;
		clip.setData(trans, null, clipid.kGlobalClipboard);
	}
	else{
		alert("你的浏览器不支持一键复制功能");
		return;
	}
	//alert("复制成功");
}