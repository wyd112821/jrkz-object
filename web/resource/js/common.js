//主界面区域滚动；
mui('#offCanvasContentScroll').scroll();

//点击事件
mui('.mui-content').on('tap', 'a', function() {
	var id = this.getAttribute('href');
	if(id == "javascirpt:void(0)" || id == ""){
		return false;
	}else{
		mui.openWindow({
			id: id,
			url: this.href
		});
	}
	
		
})