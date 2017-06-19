$.ajax({
	type:"get",
	url:"http://h6.duchengjiu.top/shop/api_goods.php",
	dataType:"json",
	success:function(data) {
		//console.log(data.data)
		for (var i in data.data) {
			addthing(data.data[i])
		}
	}
});
function addthing(data) {
	var oul=$(".section_list");
	var img = $('<img src="'+data.goods_thumb+'"/>');
	var thingsection = $('<a href=html/section.html?goods_id='+data.goods_id+'></a>');
	var div = $('<div><h1>'+data.goods_name+'</h1><p><b>￥'+data.price+'</b><br/><span>'+data.star_number+'</span>人购买</p>');
	var oli = $("<li></li>");
	img.appendTo(thingsection);
	thingsection.appendTo(oli);
	div.appendTo(oli);
	oli.appendTo(oul);
}
$("#search").click(function(){
	if ($("#search_input").val()!==""&&$("#search_input").val()!==null) {
		window.location = "html/list.html?selectText="+$("#search_input").val();
	}else{
		alert("请输入搜索内容");
	}
})