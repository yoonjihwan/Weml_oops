//document.write('<link rel="stylesheet" href="http://code.jquery.com/ui/1.9.2/themes/base/jquery-ui.css" />');
//document.write('<script src="http://code.jquery.com/ui/1.9.2/jquery-ui.js"></script>');
/**
메모리내에 클래스영역 생성
*/
var ClassStorage = function()
{

	/**
	*
	*	현재 클래스의 고유ID 반환
	*
	*	@param value	현재 클래스의 고유 ID
	*	@return 없음
	*/
	this.makeClass_ = function(value)
	{
		return value;
	};
	
	/**
	*
	*	멤버 변수 저장
	*
	*	@param classname	현재 클래스 이름
	*	@param classcount	지금까지 만들어진 클래스 개수
	*	@param	value		클래스에 속하는 변수JSON 데이터
	*	@return 1 성공여부
	*/
	this.saveMembervar = function(classname, classcount, value)
	{
		var key = classname+"_var_"+classcount;
		localStorage.setItem(key, value);
		return 1;
	};
	
	/**
	*
	*	멤버 함수 저장
	*
	*	@param classname	현재 클래스 이름
	*	@param classcount	지금까지 만들어진 클래스 개수
	*	@param	value		클래스에 속하는 함수JSON 데이터
	*	@return 1 성공여부
	*/
	this.saveMemberFunc = function(classname, classcount, value)
	{
		var key = classname+"_func_"+classcount;
		localStorage.setItem(key, value);
		return 1;
	};
	

	/*this.saveClassInfo = function(classname, variable, func)
	{
		//localStorage.setItem(class
	};*/


	/**
	*
	*	로컬스토리지에 저장되어 있는 멤버변수/함수 출력
	*
	*	@param category		멤버변수 / 멤버함수
	*	@return html 멤버변수 / 멤버함수를 HTML태그로 출력
	*/
	this.showLocalStorage = function(category)
	{
		if(category == "variable")
		{
			//$("#"+currentClass+"_var").html("");
			//$("#classlist").html("");
			//alert(currentClass + "besth");
			var html ="";
			var data;
			var cnt = (localStorage.getItem(currentClass+"_varCnt"));
			if(cnt != 0)
			{
				for(var i=0; i<cnt; i++)
				{
					data = JSON.parse(localStorage.getItem(currentClass+"_var_"+i));
					html += "<div id='"+data.name+"' class='code_line'><b>";
					html += "<span id='var_access' onclick=\"showClassData('"+data.access+"','"+data.data+"','"+data.name+"','"+i+"')\""+"><font style='color:#aa7b00'>";
					html += data.access;
					html += "</font></span>&nbsp;&nbsp;<span id='var_data'>";
					html += data.data;
					html += "</span>&nbsp;&nbsp;<span id='var_name'>";
					html += data.name;
					html += "</span></b>";
					html += "<input type='hidden' id='var_cnt' value="+i+">";

					html += "</span>";
					html += "&nbsp;<img src=\"./img/revi.png\"  alt=\"수정하기\" onclick=\"javascript:OperClass.modifyLocalStorage_('"+data.access+"','"+data.data+"','"+data.name+"','"+i+"', '"+'variable'+"', '0')\" id='"+data.name+"_show'>";
					html += "&nbsp;<img src=\"./img/del.png\"  alt=\"삭제하기\" onclick=\"OperClass.deleteLocalStorage('"+currentClass+"', '"+i+"', '"+'variable'+"')\">";
					html += "</div>";

					console.log(data.access + "= " + data.name + "=" + data.data);
				}
			}
			return html;
		}
		else if(category == "function")
		{
			var html = "";
			var data;
			var param = [];
			//var param = "'paramlist':[";
			var paramlist;
			var cnt = (localStorage.getItem(currentClass+"_funcCnt"));
			if(cnt != 0)
			{
				for(var i=0; i<cnt; i++)
				{
					data = JSON.parse(localStorage.getItem(currentClass+"_func_"+i));
					html += "<div id='"+data.name+"' class='code_line'>";
					html += "<span id='func_access'><font color='blue'><b>";
					html += data.access;
					html += "</font></span>&nbsp;&nbsp;<span id='func_data'>";
					html += data.returns;
					html += "</span>&nbsp;&nbsp;<span id='func_name'>";
					html += data.name;
					html += "</span>";
					html += "<input type='hidden' id='func_cnt' value="+i+">";
					html += "<span>(</span>";
					//if(data.param){
						/*for(var j=0; j<data.param.length; j++)
						{
							html += "<span id='param_data'>"+data.param[j].paramdata+"</span>&nbsp;&nbsp;";
							html += "<span id='param_name'>"+data.param[j].paramname+"</span>";
							html += "<span>,</span>";
							//param += "{\\\"paramdata\\\":\\\""+data.paramlist.param[j].paramdata+"\\\", \\\"paramname\\\":\\\""+data.paramlist.param[j].paramname+"\\\"},";
							//param += "{'paramdata':'"+data.paramlist.param[j].paramdata+"', 'paramname':'"+data.paramlist.param[j].paramname+"'},";
							param[j] = new addParameter(data.paramlist.param[j].paramdata, data.paramlist.param[j].paramname);

						}*/
						//paramlist = new addFinalParameter(param);
						html += "<span id='param_name'>"+data.param+"</span>";
						html += "<input id='pp"+i+"' type='hidden' value='"+JSON.stringify(data.param)+"'>";
						html += "<span>)</b>";
						html += "<img src=\"./img/revi.png\" width=\"20\" height=\"20\" onclick=\"javascript:OperClass.modifyLocalStorage_('"+data.access+"','"+data.returns+"','"+data.name+"','"+i+"', '"+'function'+"', '"+data.param+"')\" id='"+data.name+"_show'>";
						html += "<img src=\"./img/del.png\" width=\"20\" height=\"20\"  onclick=\"OperClass.deleteLocalStorage('"+currentClass+"', '"+i+"', '"+'function'+"')\">";
					//}
					//else
					//{
					//	html += "<span>)</b>";
					//	html += "<button onclick=\"OperClass.deleteLocalStorage('"+currentClass+"', '"+i+"', '"+'function'+"')\">삭제</button>";
					//}
					html += "</div>";
					//param += "]}";
					//var str = param.substr(0, param.length-4);
					//str += "}]";
					//var t = JSON.stringify(param);


					//alert(paramlist.param[0].paramdata);
					//alert(JSON.stringify(paramlist));
					param.splice();
					//console.log(param.length);
					//param = "";
				}
			}
			return html;
		}
	};
	
	/**
	*
	*	멤버변수 / 멤버함수 '수정' 다이얼로그상태에서 취소버튼을 눌렀을 때 호출되는 함수
	*
	*	@param 없음
	*	@return 없음
	*/
	this.modifycancle = function()
	{
		$("#show_modify").hide();
	}

	/**
	*
	*	다이어그램 '저장' 다이얼로그상태에서 취소버튼을 눌렀을 때 호출되는 함수
	*
	*	@param 없음
	*	@return 없음
	*/
	this.diagramcancle = function()
	{
		$("#diagram_name").hide();
	}

	/**
	*
	*	멤버변수 / 멤버함수를 수정할 때 호출되는 함수1
	*
	*	@param	access	접근제한자
	*	@param	data	자료형
	*	@param	name	변수/함수 이름
	*	@param	cnt		지금까지 저장한 멤버변수 / 멤버함수의 개수
	*	@param	category	멤버변수 / 멤버함수
	*	@param	length
	*	@return 없음
	*/
	this.modifyLocalStorage_ = function(access,data,name,cnt,category,length)
	{
		
		var type;
		var dialogOpts;
		if(category == "variable")
		{
			var height = 200;
			var html = "";

			html += '<div class="inbox">';
			html += '<label>접근제한자 &nbsp; ';
			if(access == "public")	html += '<input type="radio" value="public" name="var_access_txt" checked>Public'; else html += '<input type="radio" value="public" name="var_access_txt">Public';
			if(access == "private")	html += '<input type="radio" value="private" name="var_access_txt" checked>Private'; else html += '<input type="radio" value="private" name="var_access_txt">Private';
			if(access == "protected")	html += '<input type="radio" value="protected" name="var_access_txt" checked>Protected'; else html += '<input type="radio" value="protected" name="var_access_txt">Protected';
			html += '</label>';
			html += '<label>자&nbsp;&nbsp;&nbsp;&nbsp;료&nbsp;&nbsp;&nbsp;&nbsp;형&nbsp;';
			html += '<input type="text" name="var_data_txt" value=' + data + '>';
			html += '</label>';
			html += '<label>변&nbsp;수&nbsp;&nbsp;이&nbsp;름 &nbsp;';
			html += '<input type="text" name="var_name_txt" value=' + name + '>';
			html += '</label>';
			html += "<a class='grd_button shadow' href=\"javascript:OperClass.modifyLocalStorage('"+currentClass+"','"+access+"','"+data+"','"+name+"','"+cnt+"', '"+'variable'+"', '0')\">수정</span>";
			html += "&nbsp;<a class='grd_button shadow' href=\"javascript:OperClass.modifycancle()\" >취소</span>";
			html += '</div>';
			/*	dialogOpts = {
				title:"dd",
				modal:true,
				height:450,
				width:450,
				open:function()
				{
					//$(this).parents(".ui-dialog").find(".ui-dialog-title").remove();
				},
				buttons:{
					수정:function()
					{
						OperClass.modifyLocalStorage(currentClass,access,data,name,cnt, type, '0');
						$(this).dialog('close');
					},
					Cancel:function()
					{$(this).dialog('close');}
					
				}
			};*/
		}
		else if(category == "function")
		{
			var height = 1000;
			//var param = JSON.parse($("#pp"+cnt).val());
			//alert(param.param[0].paramdata);
			var html = "";

			html += '<div class="inbox">';
			html += '<label>접근제한자 &nbsp; ';
			if(access == "public")	html += '<input type="radio" value="public" name="func_access_txt" checked>Public'; else html += '<input type="radio" value="public" name="func_access_txt">Public';
			if(access == "private")	html += '<input type="radio" value="private" name="func_access_txt" checked>Private'; else html += '<input type="radio" value="private" name="func_access_txt">Private';
			if(access == "protected")	html += '<input type="radio" value="protected" name="func_access_txt" checked>Protected'; else html += '<input type="radio" value="protected" name="func_access_txt">Protected';
			html += '</label>';
			html += '<label>반&nbsp;&nbsp;&nbsp;&nbsp;환&nbsp;&nbsp;&nbsp;&nbsp;형 &nbsp; ';
			html += '<input type="text" name="func_data_txt" value=' + data + '>';
			html += '</label>';
			html += '<label>함&nbsp;수&nbsp;&nbsp;이&nbsp;름 &nbsp; ';
			html += '<input type="text" name="func_name_txt" value=' + name + '>';
			html += '</label>';
			html += '<label>파&nbsp;라&nbsp;&nbsp;미&nbsp;터 &nbsp; ';
			html += '<input type="text" name="func_param_txt" value=' + length + '>';
			html += '</label>';
			html += "<a class='grd_button shadow' href=\"javascript:OperClass.modifyLocalStorage('"+currentClass+"','"+access+"','"+data+"','"+name+"','"+cnt+"', '"+'function'+"', '"+length+"')\">수정</span>";
			html += "&nbsp;<a class='grd_button shadow' href=\"javascript:OperClass.modifycancle()\" >취소</span>";
			html += '</div>';
		}
		$("#modify_field").html(html);
		$("#show_modify").show();
		//alert(html);
		//$('#modi').dialog({ dialogClass: "hide-title-bar" });
		//$('#modi').dialog(dialogOpts);

	};

	/**
	*
	*	멤버변수 / 멤버함수를 수정할 때 호출되는 함수2
	*
	*	@param	currentClass	현재 클래스의 고유ID
	*	@param	access	접근제한자
	*	@param	data	자료형
	*	@param	name	변수/함수 이름
	*	@param	cnt		지금까지 저장한 멤버변수 / 멤버함수의 개수
	*	@param	category	멤버변수 / 멤버함수
	*	@param	length
	*	@return 없음
	*/
	this.modifyLocalStorage = function(currentClass, access, data, name, cnt, category, length)
	{	
		if(category == "variable")
		{
			var access_ = $("input[name=var_access_txt]:checked").val();
			var data_ = $("input[name=var_data_txt]").val();
			var name_ = $("input[name=var_name_txt]").val();
			localStorage.removeItem(currentClass+"_var_"+cnt);
			var result = new memberVarPro(access_, name_, data_);
			if(this.saveMembervar(currentClass, cnt, JSON.stringify(result)) == 1)
			{
				alert('로컬스토리지 입력 성공');
				$("#"+currentClass+"_var").html(this.showLocalStorage("variable"));
				$("#show_modify").hide();
			}
		}
		else if(category == "function")
		{
			var access_ = $("input[name=func_access_txt]:checked").val();
			var data_ = $("input[name=func_data_txt]").val();
			var name_ = $("input[name=func_name_txt]").val();
			var param_ = $("input[name=func_param_txt]").val();
			localStorage.removeItem(currentClass+"_func_"+cnt);

			var result = new memberFuncPro(access_, name_, data_, param_);
			if(this.saveMemberFunc(currentClass, cnt, JSON.stringify(result)) == 1)
			{
				alert('로컬스토리지 입력 성공');
				$("#"+currentClass+"_func").html(this.showLocalStorage("function"));
				$("#show_modify").hide();
			}
		}
		
	};


	/**
	*
	*	멤버변수 / 멤버함수를 수정할 때 호출되는 함수
	*
	*	@param	currentClass	현재 클래스의 고유ID
	*	@param	currentcnt		현재 활성화된 클래스의 넘버
	*	@param	category	멤버변수 / 멤버함수
	*	@return 없음
	*/
	this.deleteLocalStorage = function(currentClass, currentcnt, category)
	{
		//seolhee
		if(currentcnt == '-1')
		{
			var key_cnt = currentClass+"_varCnt";
			var cnt = localStorage.getItem(key_cnt);
			for(var i=0; i<(cnt*1); i++)
			{
				localStorage.removeItem(currentClass+"_var_"+i);
			}
			localStorage.removeItem(key_cnt);
			var key_cnt = currentClass+"_funcCnt";
			var cnt = localStorage.getItem(key_cnt);
			for(var i=0; i<(cnt*1); i++)
			{
				localStorage.removeItem(currentClass+"_func_"+i);
			}
				
			localStorage.removeItem(key_cnt);
			$("#"+currentClass+"_class").remove();

		}
		else
		{
			if(category == "variable")
			{
				localStorage.removeItem(currentClass+"_var_"+currentcnt);
				var key_cnt = currentClass+"_varCnt";
				var cnt = localStorage.getItem(key_cnt);
				var temp_cnt = cnt;
				if((cnt*1) == 1)
				{
					localStorage.setItem(key_cnt, (--cnt));
					$("#"+currentClass+"_var").html(this.showLocalStorage("variable"));
					return;
				}
				else
				{
					localStorage.setItem(key_cnt, (--cnt));
				}
				for(var i=(currentcnt*1)+1; i<temp_cnt; i++)
				{
					var data = JSON.parse(localStorage.getItem(currentClass+"_var_"+i));
					var result = new memberVarPro(data.access, data.name, data.data);
					this.saveMembervar(currentClass, i-1, JSON.stringify(result));
					localStorage.removeItem(currentClass+"_var_"+i);
				}
				
				$("#"+currentClass+"_var").html(this.showLocalStorage("variable"));

			}
			else if(category == "function")
			{	
				//var paramlist = JSON.parse($("#pp"+currentcnt).val());

				localStorage.removeItem(currentClass+"_func_"+currentcnt);

				var key_cnt = currentClass+"_funcCnt";
				var cnt = localStorage.getItem(key_cnt);
				var temp_cnt = cnt;
				//alert('this1');
				if((cnt*1) == 1)
				{
					//alert('this2');
					localStorage.setItem(key_cnt, (--cnt));
					$("#"+currentClass+"_func").html(this.showLocalStorage("function"));
					return;
				}
				else
				{
						
					//alert('this3');
					localStorage.setItem(key_cnt, (--cnt));
				}
				for(var i=(currentcnt*1)+1; i<temp_cnt; i++)
				{
					//alert('this4');
					data = JSON.parse(localStorage.getItem(currentClass+"_func_"+i));
					var result = new memberFuncPro(data.access, data.name, data.returns, JSON.parse($("#pp"+i).val()));
					this.saveMemberFunc(currentClass, i-1, JSON.stringify(result));
					localStorage.removeItem(currentClass+"_func_"+i);
				}
				
				$("#"+currentClass+"_func").html(OperClass.showLocalStorage("function"));
			}
		}
	};


}