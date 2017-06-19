$("#login").on("click",function(){
	var user=getUser();
	$.ajax({ 
		url:"http://h6.duchengjiu.top/shop/api_user.php",
		type:'post', 
		data:{username:user.userID,password:user.password,status:"login"},
		dataType:"json",
		success:function(data){
			//console.log(data)
			if(data.code==2002){
				alert("该帐号不存在!")
			}else if(data.code==1000){
				alert("请输入账号")
			}else if(data.code==1001){
				alert("请输入正确密码")
			}else if(data.code==0){
				location.href ="../index.html";
			}
		}
	})
	
});
var flag = false;  
$("#userID").focusout(function(){
	var filter =/^0?(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8}$/;
	if($("#userID").val()==""){
		alert("请输入注册账号");
		flag = false; 
	}else if(filter.test($(this).val())){
		flag = true;
	}else{
		alert("请输入正确手机号");
		flag = false; 
	}
})
$("#password").focusout(function(){
	var filter =/^[a-z0-9_\.-]{6,20}$/;
	if (flag==true) {
		if($("#password").val()==""){
			alert("请输入密码");
			flag = false; 
		}else if(filter.test($(this).val())){
			flag = true;
		}else{
			alert("密码长度6-20、字母、数字、下划线");
			flag = false; 
		}
	}
	
})
$("#qrPassword").focusout(function(){
	var filter =/^[a-z0-9_\.-]{6,20}$/;
	if (flag == true) {
		if($("#qrPassword").val()==""){
			alert("请确认密码");
			flag = false; 
		}else if($("#password").val()!=$("#qrPassword").val()){
			alert("两次密码不一致");
		}else{
			flag = true;
		}
	}	
})
$("#submit").on("click",function(){
	var user=getUser();
	$.ajax({ 
		url:"http://h6.duchengjiu.top/shop/api_user.php",
		type:'post', 
		data:{username:user.userID,password:user.password,status:"register"},
		dataType:"json",
		success:function(data){
			console.log(data)
			if(flag==false){
				alert("请按要求注册账号!")
			}else if(data.code==2001 && flag==true){
				alert("用户已被注册，请更换用户名!")
			}else if(data.code==0&& flag==true){
				location.href ="../index.html";
					
			}
		}
	})
})

function GetQueryString(name){
	/*定义正则，用于获取相应参数*/
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	 /*字符串截取，获取匹配参数值*/
     var r = window.location.search.substr(1).match(reg);
	 /*但会参数值*/
     if(r!=null)return  decodeURI(r[2]); return null;
};
function getUser(){
	var user={
			userID:$("#userID").val(),
			password:$("#password").val(),
			checkPassword:$("#checkPassword").val()
		}
	return user;
}
