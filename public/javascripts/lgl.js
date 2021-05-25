init();

function init() {
	var btn_add=document.getElementById("btn_add");//姓名验证按钮
	var btn_en=document.getElementById("btn_en");//密码验证按钮

	var input_add=document.getElementById("name");//姓名输入框
	var input_en=document.getElementById("pass");//密码输入框

	//姓名验证事件处理程序
	btn_add.onclick=function() {
		var v=input_add.value;
		var p=document.getElementById("p_name");

		if(v==""||v==null||v.length<0||v.length>4) {
			p.innerHTML="必填，长度为0~4位字符";
		}
		else {
			p.innerHTML="姓名格式正确";
		}
	}

	//密码验证事件处理程序
	btn_en.onclick=function() {
		var v=input_en.value;
		var p=document.getElementById("p_pass");
		
		if(v==""||v==null||v.length<12) {
			p.innerHTML="必填，长度为大于12位字符";
		}
		else {
			p.innerHTML="密码格式正确";
		}
	}

}