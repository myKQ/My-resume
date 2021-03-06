/*
* @Author: Administrator
* @Date:   2017-02-18 15:17:45
* @Last Modified by:   Administrator
* @Last Modified time: 2017-02-18 15:18:05
*/

'use strict';
$(function(){
    $('#box').fullpage({
    	// 设置每一屏的颜色 接受数组
		'sectionsColor' : ['red','green','blue','yellow'],
		// 重要：设置锚点 （哈希）
		'anchors': ['page1', 'page2', 'page3', 'page4'],
		// 无缝滚动（循环滚动的意思）
		'continuousVertical' : true,
		// 绑定自定义的菜单栏
		'menu' : '#menu',
		// 设置侧边导航 默认值是false
		'navigation': true,
		// 侧边导航的位置 
		'navigationPosition' : 'right',
		/*滚动的速度*/
		'scrollingSpeed' : 500,
		// 当滚动到哪一屏的回调函数  接收 anchorLink 和 index 两个参数，anchorLink 是锚链接的名称，index 是序号，从1开始计算
		afterLoad : function(anchorLink, index){
			console.log('我来到了第'+index+'屏')
		},
		// 滚动前的回调函数，接收 index、nextIndex 和 direction 3个参数：
		// index 是离开的“页面”的序号，从1开始计算；

		// nextIndex 是滚动到的“页面”的序号，从1开始计算；

		// direction 判断往上滚动还是往下滚动，值是 up 或 down。
		onLeave : function(index,nextIndex,direction){
			console.log('我要开始滚动了，我现在在第'+index +'屏，方向为：'+ direction + '我即将去往第'+nextIndex+'屏');
		}
    })
})