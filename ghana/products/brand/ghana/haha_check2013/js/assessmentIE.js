// JavaScript Document

$(function(){
	loading=false;
	timerId = 0;
	hide();
	
	$(".shindan_btn").click(function(){ q01(); });

function q01(){	
	q1In();
	
	$("#back_btn").off("click");
	$("#choices1 ul li:eq(0), #choices1 ul li:eq(1)").off("click");
	$("#choices1 ul li:eq(0)").on("click",function(){ nextHide(); q02(); });
	$("#choices1 ul li:eq(1)").on("click",function(){ nextHide(); q03(); });
}

function q02(){
	q2In();
	
	$("#choices2 ul li:eq(0), #choices2 ul li:eq(1)").off("click");
	$("#choices2 ul li:eq(0)").on("click",function(){ nextHide(); cq02=true; cq03=false; q04(); });
	$("#choices2 ul li:eq(1)").on("click",function(){ nextHide(); cq02=true; cq03=false; q05(); });
	$("#restart").click(function(){ restartHide();q01(); });
	$("#back_btn").off("click");
	$("#back_btn").on("click", function(){ backHide(); q01(); });
}

function q03(){
	q2In();
	
	$("#choices2 ul li:eq(0), #choices2 ul li:eq(1)").off("click");
	$("#choices2 ul li:eq(0)").on("click",function(){ nextHide(); cq02=false; cq03=true; q05(); });
	$("#choices2 ul li:eq(1)").on("click",function(){ nextHide(); cq02=false; cq03=true; q06(); });
	$("#restart").click(function(){ restartHide();q01(); });
	$("#back_btn").off("click");
	$("#back_btn").on("click", function(){ backHide(); q01(); });
}

function q04(){
	q3In();
	
	$("#choices3 ul li:eq(0), #choices3 ul li:eq(1)").off("click");
	$("#choices3 ul li:eq(0)").on("click",function(){ nextHide(); cq04=true; cq05=false; cq06=false; q07(); });
	$("#choices3 ul li:eq(1)").on("click",function(){ nextHide(); cq04=true; cq05=false; cq06=false; q08(); });
	$("#back_btn").off("click");
	$("#back_btn").on("click",function(){
		backHide();
		if(cq02==true){q02();}else if(cq03==true){q03();}
	});
}

function q05(){
	q3In();
	
	$("#choices3 ul li:eq(0), #choices3 ul li:eq(1)").off("click");
	$("#choices3 ul li:eq(0)").on("click",function(){ nextHide(); cq04=false; cq05=true; cq06=false; q08(); });
	$("#choices3 ul li:eq(1)").on("click",function(){ nextHide(); cq04=false; cq05=true; cq06=false; q09(); });
	$("#back_btn").off("click");
	$("#back_btn").on("click",function(){
		backHide();
		if(cq02==true){q02();}else if(cq03==true){q03();}
	});
}

function q06(){	
	q3In();
	
	$("#choices3 ul li:eq(0), #choices3 ul li:eq(1)").off("click");
	$("#choices3 ul li:eq(0)").on("click",function(){ nextHide(); cq04=false; cq05=false; cq06=true; q09(); });
	$("#choices3 ul li:eq(1)").on("click",function(){ nextHide(); cq04=false; cq05=false; cq06=true; q10(); });
	$("#back_btn").off("click");
	$("#back_btn").on("click",function(){
		backHide();
		if(cq02==true){q02();}else if(cq03==true){q03();}
	});
}

function q07(){
	q4In();
	
	$("#choices4 ul li:eq(0), #choices4 ul li:eq(1)").off("click");
	$("#choices4 ul li:eq(0)").on("click",function(){ nextHide(); cq07=true; cq08=false; cq09=false; cq10=false; q11(); });
	$("#choices4 ul li:eq(1)").on("click",function(){ nextHide(); cq07=true; cq08=false; cq09=false; cq10=false; q12(); });
	$("#back_btn").off("click");
	$("#back_btn").on("click", function(){
		backHide();
		if(cq04==true){q04();}else if(cq05==true){q05();}else if(cq06==true){q06();}
	});
}

function q08(){
	q4In();
	
	$("#choices4 ul li:eq(0), #choices4 ul li:eq(1)").off("click");
	$("#choices4 ul li:eq(0)").on("click",function(){ nextHide(); cq07=false; cq08=true; cq09=false; cq10=false; q12(); });
	$("#choices4 ul li:eq(1)").on("click",function(){ nextHide(); cq07=false; cq08=true; cq09=false; cq10=false; q13(); });
	$("#back_btn").off("click");
	$("#back_btn").on("click", function(){
		backHide();
		if(cq04==true){q04();}else if(cq05==true){q05();}else if(cq06==true){q06();}
	});
}

function q09(){
	q4In();
	
	$("#choices4 ul li:eq(0), #choices4 ul li:eq(1)").off("click");
	$("#choices4 ul li:eq(0)").on("click",function(){ nextHide(); cq07=false; cq08=false; cq09=true; cq10=false; q13(); });
	$("#choices4 ul li:eq(1)").on("click",function(){ nextHide(); cq07=false; cq08=false; cq09=true; cq10=false; q14(); });
	$("#back_btn").off("click");
	$("#back_btn").on("click", function(){
		backHide();
		if(cq04==true){q04();}else if(cq05==true){q05();}else if(cq06==true){q06();}
	});
}

function q10(){	
	q4In();
	
	$("#choices4 ul li:eq(0), #choices4 ul li:eq(1)").off("click");
	$("#choices4 ul li:eq(0)").on("click",function(){ nextHide(); cq07=false; cq08=false; cq09=false; cq10=true; q14(); });
	$("#choices4 ul li:eq(1)").on("click",function(){ nextHide(); cq07=false; cq08=false; cq09=false; cq10=true; q15(); });
	$("#back_btn").off("click");
	$("#back_btn").on("click", function(){
		backHide();
		if(cq04==true){q04();}else if(cq05==true){q05();}else if(cq06==true){q06();}
	});
}

function q11(){
	q5In();
	
	$("#choices5 ul li:eq(0), #choices5 ul li:eq(1)").off("click");
	$("#choices5 ul li:eq(0)").on("click",function(){ a01(); });
	$("#choices5 ul li:eq(1)").on("click",function(){ a02(); });
	$("#back_btn").off("click");
	$("#back_btn").on("click", function(){ 
		backHide();
		if(cq07==true){q07();}else if(cq08==true){q08();}else if(cq09==true){q09();}else if(cq10==true){q10();}
	});
}

function q12(){
	q5In();
	
	$("#choices5 ul li:eq(0), #choices5 ul li:eq(1)").off("click");
	$("#choices5 ul li:eq(0)").on("click",function(){ a03(); });
	$("#choices5 ul li:eq(1)").on("click",function(){ a04(); });
	$("#back_btn").off("click");
	$("#back_btn").on("click", function(){ 
		backHide();
		if(cq07==true){q07();}else if(cq08==true){q08();}else if(cq09==true){q09();}else if(cq10==true){q10();}
	});
}

function q13(){
	q5In();
	
	$("#choices5 ul li:eq(0), #choices5 ul li:eq(1)").off("click");
	$("#choices5 ul li:eq(0)").on("click",function(){ a05(); });
	$("#choices5 ul li:eq(1)").on("click",function(){ a06(); });
	$("#back_btn").off("click");
	$("#back_btn").on("click", function(){ 
		backHide();
		if(cq07==true){q07();}else if(cq08==true){q08();}else if(cq09==true){q09();}else if(cq10==true){q10();}
	});
}

function q14(){
	q5In();
	
	$("#choices5 ul li:eq(0), #choices5 ul li:eq(1)").off("click");
	$("#choices5 ul li:eq(0)").on("click",function(){ a06(); });
	$("#choices5 ul li:eq(1)").on("click",function(){ a07(); });
	$("#back_btn").off("click");
	$("#back_btn").on("click", function(){ 
		backHide();
		if(cq07==true){q07();}else if(cq08==true){q08();}else if(cq09==true){q09();}else if(cq10==true){q10();}
	});
}

function q15(){	
	q5In();
	
	$("#choices5 ul li:eq(0), #choices5 ul li:eq(1)").off("click");
	$("#choices5 ul li:eq(0)").on("click",function(){ a08(); });
	$("#choices5 ul li:eq(1)").on("click",function(){ a09(); });
	$("#back_btn").off("click");
	$("#back_btn").on("click", function(){ 
		backHide();
		if(cq07==true){q07();}else if(cq08==true){q08();}else if(cq09==true){q09();}else if(cq10==true){q10();}
	});
}

function a01(){
	$("#shindan_index_r").css("background","url(img/result/result_01.png) no-repeat");
	resultIn();
}

function a02(){
	$("#shindan_index_r").css("background","url(img/result/result_02.png) no-repeat");
	resultIn();
}

function a03(){
	$("#shindan_index_r").css("background","url(img/result/result_03.png) no-repeat");
	resultIn();
}

function a04(){
	$("#shindan_index_r").css("background","url(img/result/result_04.png) no-repeat");
	resultIn();
}

function a05(){
	$("#shindan_index_r").css("background","url(img/result/result_05.png) no-repeat");
	resultIn();
}

function a06(){
	$("#shindan_index_r").css("background","url(img/result/result_06.png) no-repeat");
	resultIn();
}

function a07(){
	$("#shindan_index_r").css("background","url(img/result/result_07.png) no-repeat");
	resultIn();
}

function a08(){
	$("#shindan_index_r").css("background","url(img/result/result_08.png) no-repeat");
	resultIn();
}

function a09(){
	$("#shindan_index_r").css("background","url(img/result/result_09.png) no-repeat");
	resultIn();
}

function hide(){
	$("#question, #Q1, #Q2, #Q3, #Q4, #Q5, #result, #back_btn, #restart , #restart02").hide();
	$("#current_value1, #q1_txt, #choices1").hide();
	$("#current_value2, #q2_txt, #choices2").hide();
	$("#current_value3, #q3_txt, #choices3").hide();
	$("#current_value4, #q4_txt, #choices4").hide();
	$("#current_value5, #q5_txt, #choices5").hide();
}

function restartHide(){
	$("#Q1, #Q2, #Q3, #Q4, #Q5, #result, #back_btn, #restart, #top, #restart02").hide();
	$("#current_value1, #q1_txt, #choices1").hide();
	$("#current_value2, #q2_txt, #choices2").hide();
	$("#current_value3, #q3_txt, #choices3").hide();
	$("#current_value4, #q4_txt, #choices4").hide();
	$("#current_value5, #q5_txt, #choices5").hide();
	$("#question1, #question2, #question3, #question4, #question5").css({'top':'55px','opacity':'0'}).hide();
	$("#q1pkg, #q2pkg, #q3pkg, #q4pkg, #q5pkg").css({'top':'70px','opacity':'0'}).hide();
	clearInterval(timerId);
}

function backHide(){
	$("#result, #back_btn, #top").hide();
	$("#current_value1,#current_value2,#current_value3,#current_value4,#current_value5").hide();
	$("#question1, #question2, #question3, #question4, #question5").css({'opacity':'0','top':'55px'}).hide();
	$("#q1pkg, #q2pkg, #q3pkg, #q4pkg, #q5pkg").css({'top':'70px','opacity':'0'}).hide();
	$("#q1_txt, #choices1").hide();
	$("#q2_txt, #choices2").hide();
	$("#q3_txt, #choices3").hide();
	$("#q4_txt, #choices4").hide();
	$("#q5_txt, #choices5").hide();
	clearInterval(timerId);
}

function nextHide(){
	$("#result, #back_btn, #top").hide();
	$("#question1, #question2, #question3, #question4, #question5").css({'opacity':'0','top':'55px'}).hide();
	$("#q1pkg, #q2pkg, #q3pkg, #q4pkg, #q5pkg").css({'top':'70px','opacity':'0'}).hide();
	$("#q1_txt, #choices1").hide();
	$("#q2_txt, #choices2").hide();
	$("#q3_txt, #choices3").hide();
	$("#q4_txt, #choices4").hide();
	$("#q5_txt, #choices5").hide();
	clearInterval(timerId);
}

function q1In(){
	$("#question, #Q1, #current_value1").show();
	$("#top, #back_btn, #restart").hide();
	
	setTimeout(question1Tit,600);
	setTimeout(question1Txt,1000);
	setTimeout(question1Choices,1400);
	function question1Tit(){
		$("#question1").show().animate({"top":75,opacity:1}, 400);
		$("#q1pkg").show().animate({"top":90,opacity:1}, 400);
	}
	
	clearInterval(timerId);
	zuizui();
	
	function question1Txt(){ $("#q1_txt").show(); }
	function question1Choices(){ $("#choices1").show(); }
}

function q2In(){
	$("#Q2, #current_value2 ,#restart").show();
	$("#Q1, #back_btn").hide();
	
	setTimeout(question2Tit,600);
	setTimeout(question2Txt,1000);
	setTimeout(question2Choices,1400);
	setTimeout(question2bb,1400);
	function question2Tit(){
		$("#question2").show().animate({"top":75,opacity:1}, 400);
		$("#q2pkg").show().animate({"top":90,opacity:1}, 400);
	}
	
	clearInterval(timerId);
	zuizui();
	
	function question2Txt(){ $("#q2_txt").show(); }
	function question2Choices(){ $("#choices2").show(); }
	function question2bb(){ $("#back_btn").show(); }
}

function q3In(){
	$("#Q3, #current_value3").show();
	$("#Q2, #back_btn").hide();
	
	setTimeout(question3Tit,600);
	setTimeout(question3Txt,1000);
	setTimeout(question3Choices,1400);
	setTimeout(question3bb,1400);
	function question3Tit(){
		$("#question3").show().animate({"top":75,opacity:1}, 400);
		$("#q3pkg").show().animate({"top":90,opacity:1}, 400);
	}
	
	clearInterval(timerId);
	zuizui();
	
	function question3Txt(){ $("#q3_txt").show(); }
	function question3Choices(){ $("#choices3").show(); }
	function question3bb(){ $("#back_btn").show(); }
}

function q4In(){
	$("#Q4, #current_value4").show();
	$("#Q3, #back_btn").hide();
	
	setTimeout(question4Tit,600);
	setTimeout(question4Txt,1000);
	setTimeout(question4Choices,1400);
	setTimeout(question4bb,1400);
	function question4Tit(){
		$("#question4").show().animate({"top":75,opacity:1}, 400);
		$("#q4pkg").show().animate({"top":90,opacity:1}, 400);
	}
	
	clearInterval(timerId);
	zuizui();
	
	function question4Txt(){ $("#q4_txt").show(); }
	function question4Choices(){ $("#choices4").show(); }
	function question4bb(){ $("#back_btn").show(); }
}

function q5In(){
	$("#Q5, #current_value5").show();
	$("#Q4, #back_btn").hide();
	
	setTimeout(question5Tit,600);
	setTimeout(question5Txt,1000);
	setTimeout(question5Choices,1400);
	setTimeout(question5bb,1400);
	function question5Tit(){
		$("#question5").show().animate({"top":75,opacity:1}, 400);
		$("#q5pkg").show().animate({"top":90,opacity:1}, 400);
	}
	
	clearInterval(timerId);
	zuizui();
	
	function question5Txt(){ $("#q5_txt").show(); }
	function question5Choices(){ $("#choices5").show(); }
	function question5bb(){ $("#back_btn").show(); }
}

function resultIn(){
	$("#result, #restart02").show();
	$("#question, #Q5, #back_btn").hide();
	$("#back_btn").off("click");
	$("#restart02").off("click");
	$("#restart02").click(function(){ restartHide();q01(); });
}

function zuizui(){
	timerId = setInterval(anime,5000);
	
	function anime(){
		$("#question1, #question2, #question3, #question4, #question5")
			.animate({"top":78},100,"swing").animate({"top":75},200,"swing")
			.animate({"top":78},100,"swing").animate({"top":75},200,"swing");
	}
}

});