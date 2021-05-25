init();

function init() {
	var btn_add=document.getElementById("btn_add");//姓名验证按钮
	var btn_mi=document.getElementById("btn_mi");//密码验证按钮
	var btn_que=document.getElementById("btn_que");//确认密码验证按钮
	var btn_bie=document.getElementById("btn_bie");//别名验证按钮
	var btn_shou=document.getElementById("btn_shou");//手机号码验证按钮
	var btn_you=document.getElementById("btn_you");//邮箱验证按钮
	var btn_ban=document.getElementById("btn_ban");//班级验证按钮

	var input_add=document.getElementById("name");//姓名输入框
	var input_mi=document.getElementById("pass");//密码输入框
	var input_que=document.getElementById("pass2");//确认密码输入框
	var input_bie=document.getElementById("bie");//别名输入框
	var input_shou=document.getElementById("shou");//手机号码输入框
	var input_you=document.getElementById("you");//邮箱输入框
	var input_ban=document.getElementById("ban");//班级输入框

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
	btn_mi.onclick=function() {
		var v=input_mi.value;
		var p=document.getElementById("p_pass");
		
		if(v==""||v==null||v.length<12) {
			p.innerHTML="必填，长度为大于12位字符";
		}
		else {
			p.innerHTML="密码格式正确";
		}
	}
	//确认密码验证事件处理程序
	btn_que.onclick=function() {
		var v=input_mi.value;
		var q=input_que.value;
		var p=document.getElementById("p_pass2");
		
		if(v==""||v==null) {
			p.innerHTML="不能为空！";
		}else if(v!=q){
            p.innerHTML="密码与确认密码不相同！";
		}
		else {
			p.innerHTML="正确";
		}
	}
	//别名验证事件处理程序
	btn_bie.onclick=function() {
		var v=input_bie.value;
		var p=document.getElementById("p_bie");

		var reg=/^[\u4e00-\u9fa5]+$/;//连续多个中文

		if(v==""||v==null) {
			p.innerHTML="别名不能为空";
		}
		else if(!reg.test(v)) {
			p.innerHTML="别名中不能含有非中文";
		}
		else {
			p.innerHTML="别名格式正确";
		}

	}

	//班级验证事件处理程序
	btn_ban.onclick=function() {
		var v=input_ban.value;
		var p=document.getElementById("p_ban");

		if(v==""||v==null) {
			p.innerHTML="班级不能为空";
		}
		else {
			p.innerHTML="格式正确";
		}
	}
	//手机号码验证事件处理程序
	btn_shou.onclick=function() {
		var v=input_shou.value;
		var p=document.getElementById("p_shou");

		if(v==""||v==null||v.length!=11) {
			p.innerHTML="手机号码格式不对！";
		}
		else {
			p.innerHTML="格式正确";
		}
	}

	//邮箱验证事件处理程序
	btn_you.onclick=function() {
		var v=input_you.value;
		var p=document.getElementById("p_you");
		var reg=/^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/;

		if(v==""||v==null) {
			p.innerHTML="邮箱不能为空！";
		}
		else if (!reg.test(v)) {
			p.innerHTML="邮箱格式不对！";
		}
		else {
			p.innerHTML="格式正确";
		}
	}
}