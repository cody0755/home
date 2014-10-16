var zh_windowCount = 0,
	zh_winzIndex = 10000,
	zh_appzIndex = 1,
	zh_className = {
		thisWindow : 'newWindow',
		windowContainer : 'windowContainer',
		windowMenu : 'windowMenu',
		windowMenuactive:'windowMenuactive',
		windowMenuContent : 'windowMenuContent',
		windowFrame : 'contentFrame',
		contentMask:'contentMask',
		windowControl : 'windowControl',
		windowMinimize : 'windowMinimize',
		windowMaximize : 'windowMaximize',
		windowMax:'windowMax',
		windowClose : 'windowClose',
		windowContent:'windowContent',
		windowResize:'windowResize',
		windowTopResize : 'windowTopResize',
		windowLeftResize : 'windowLeftResize',
		windowRightResize : 'windowRightResize',
		windowBottomResize : 'windowBottomResize',
		windowTlResize : 'windowTlResize',
		windowTrResize : 'windowTrResize',
		windowBrResize : 'windowBrResize',
		windowBlResize : 'windowBlResize',
		
		taskMenu:'taskMenu',
		taskMenuWrap:'taskMenuWrap',
		taskMenuCon:'taskMenuCon',
		taskMax:'taskMax',
		taskClose:'taskClose',
		
		icon : 'app',
		minIcon:'minIcon',
		iconImg	: 'appImg',
		icontitle : 'appTitle',
		iconDelete : 'iconDelete',
		leftIcon:'leftIcon',
		leftIconImg:'leftIconImg',
		
		iconDesk:'deskIcon',
		menu:'menu',
		btm:'btm',
		iconMenuRight:'iconRight',
		iconMenuLeft:'iconLeft',
		iconMenuCur:'iconCur',
		
		deskMenuRight:'deskRight',
		deskMenuLeft:'deskLeft',
		typeChecked:'typeChecked',
		
		top:'top',
		topImg:'topImg',
		deskIndex:'deskIndex',
		activeNum:'active',
		tosearch:'tosearch',
		appView:'appView'
	},
	zh_iconMenu = [
		{id:'open',innerHTML:'打开应用'},
		[
			{id:'move',innerHTML:'移动到'},
			{id:'to1',innerHTML:'桌面1'},
			{id:'to2',innerHTML:'桌面2'},
			{id:'to3',innerHTML:'桌面3'},
			{id:'to4',innerHTML:'桌面4'},
			{id:'to5',innerHTML:'桌面5'}
		],
		{id:'del',innerHTML:'删除应用'},
	],
	zh_addIcon = [
		{id:'open',innerHTML:'上传文件'},
		{id:'del',innerHTML:'添加应用'},
		{id:'del',innerHTML:'添加桌面联系人'},
		{id:'del',innerHTML:'新建文件夹'},
	],
	zh_deskMenu = [
		[
			{id:'viewIcon',innerHTML:'查看'},
			{id:'smIcon',innerHTML:'小图标'},
			{id:'bigIcon',innerHTML:'大图标'},
			{id:'hugIcon',innerHTML:'超大图标'},
		],
		[
			{id:'arrge',innerHTML:'排列方式'},
			{id:'toRow',innerHTML:'横向'},
			{id:'toCol',innerHTML:'纵向'},
			{id:'toFree',innerHTML:'自由排列'},
		],
		{id:'renovate',innerHTML:'刷新'},
		{id:'showdesk',innerHTML:'显示桌面'},
		{id:'bgSet',innerHTML:'主题设置'},
		{id:'advise',innerHTML:'反馈'},
		{id:'cancel',innerHTML:'注销'},
		
	],
/*----------------------------*****************----------------------------*/
/*----------------------------*---App---Data--*----------------------------*/
/*----------------------------*****************----------------------------*/
//http://www.google.com/favicon.ico
 	zh_leftIcon = [
		{id:'leftIcon4',pos:'left',title:'真味多',src:'images/zwdlogo_f.png',webSrc:'http://www.shenzhenqh.com/zwd',iTop:10,iLeft:200,iHeight:600,minWidth:300,minHeight:600},
		{id:'leftIcon1',pos:'left',title:'github',src:'images/github.jpg',webSrc:'http://www.github.com/cody0755',iWidth:950,iHeight:660,minWidth:800,minHeight:600},
		{id:'leftIcon2',pos:'left',title:'网盘搜索',src:'http://so.baiduyun.me/images/yunlogo.png',webSrc:'http://so.baiduyun.me',iWidth:1100,iHeight:500,iLeft:100},
		{id:'leftIcon3',pos:'left',title:'新浪微博',src:'images/sina.png',webSrc:'http://weibo.com/1931492552/profile?topnav=1&wvr=5&user=1'},				
		{id:'leftIcon6',pos:'left',title:'腾讯微博',src:'images/left6.png',webSrc:'http://dev.t.qq.com/'},
		{id:'leftIcon5',pos:'left',title:'163邮箱',src:'http://mail.163.com/favicon.ico',webSrc:'http://mail.163.com'},
		{id:'leftIcon5',pos:'left',title:'sina邮箱',src:'http://mail.sina.com/favicon.ico',webSrc:'http://mail.sina.com'}
	]
 	zh_deskIcon = [
		[
			{id:'icon2',src:'images/zwd_logo64.png',title:'gomockingbird(Web原型)',desc:'一个快速在Web上进行原型制作的工具',webSrc:'https://gomockingbird.com/'},
			{id:'icon1',src:'images/zwd_logo64.png',title:'typecastapp(字体)',desc:'TypeCast让你可以从Fonts.com、TypeKit、FontDeck和Google这些字体供应和商选择字体，而且能非常方便的比较这些字体使用效果。如果你想获得用户对这些字体效果的反馈，只需要发布一个URL就可以了。这样，无需实际购买的字体，直到你已经决定在最终的解决方案。',webSrc:'http://beta.typecastapp.com/'},			
			{id:'icon3',src:'images/zwd_logo64.png',title:'配色工具',desc:'配色工具，非常小清新',webSrc:'http://nipponcolors.com/'}
		],
		[
		
			{id:'icon10',src:'images/zwd_logo64.png',title:'html-js',webSrc:'http://www.html-js.com/'},
			{id:'icon10',src:'images/zwd_logo64.png',title:'课件',webSrc:'http://www.imooc.com/'},
			{id:'icon10',src:'images/14.png',title:'团购地图',webSrc:'http://web.qq.com/app/tuangoumap/index.html'},
			{id:'icon8',src:'images/4.png',title:'豆瓣FM',webSrc:'http://douban.fm/partner/qq_plus',iWidth:550,iHeight:460,minWidth:400,minHeight:200},
			{id:'icon10',src:'images/add.png',title:'添加',isOpen:'no'}
		],
		[
			{id:'icon1',src:'images/27.png',title:'github',webSrc:'http://www.github.com',iWidth:1000,iHeight:500},
			{id:'icon2',src:'images/jquery.png',title:'jquery',webSrc:'http://www.jquery.com',iWidth:800,iHeight:500},
			{id:'icon3',src:'images/nodejs.png',title:'nodejs',webSrc:'http://www.nodejs.org/',iHeight:550},
			{id:'icon4',src:'images/mongodb.png',title:'mongodb',webSrc:'http://www.mongodb.org',iWidth:950,iHeight:660,minWidth:800,minHeight:600},
			{id:'icon5',src:'images/c_logo2013.png',title:'携程旅行网',webSrc:'http://www.ctrip.com'},
		
			{id:'icon6',src:'images/java.jpg',title:'java网站',webSrc:'http://www.java.com/zh_CN/',iHeight:600,iWidth:1200,iLeft:100,iTop:31},	
			{id:'icon7',src:'images/aspnet.png',title:'asp.net',webSrc:'http://www.asp.net/',iHeight:600,iWidth:1200,iLeft:100,iTop:31},
					
			{id:'icon9',src:'images/27.png',title:'说明文档',webSrc:'html/doc/index.html'},
			{id:'icon10',src:'images/add.png',title:'添加',isOpen:'no'}
		],
		[
		
			{id:'icon10',src:'images/5.png',title:'起点中文',webSrc:'http://webqq.qidian.com'},
			{id:'icon10',src:'images/18.png',title:'乐视网',webSrc:'http://www.letv.com/cooperation/qq.html'},
			{id:'icon10',src:'images/15.png',title:'QQ阅读',webSrc:'http://reader.qq.com/cgi-bin/login?fun=passport&from=webqq&target=reader'},
			{id:'icon10',src:'images/17.png',title:'视频',webSrc:'http://ptlogin2.tenpay.com/tenvideo'},
			{id:'icon10',src:'images/add.png',title:'添加',isOpen:'no'}
		],
		[
			{id:'icon1',src:'images/c_logo2013.png',title:'携程旅行网',webSrc:'http://www.ctrip.com'},
			{id:'icon2',src:'images/c_logo2013.png',title:'度假',webSrc:'http://vacations.ctrip.com/'},
			{id:'icon3',src:'images/c_logo2013.png',title:'机票',webSrc:'http://flights.ctrip.com/'},
			{id:'icon4',src:'images/c_logo2013.png',title:'酒店',webSrc:'http://hotels.ctrip.com/'},
			{id:'icon5',src:'images/add.png',title:'商旅',isOpen:'no'}
		]		
	];