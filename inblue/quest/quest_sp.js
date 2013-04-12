(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.quest_sp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{_start:0,_set:5,_attack:7,_end:29,_error:46,_jump:47},true);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		callback_url = "http://www.google.com";
		base_url = "http://www.google.com";
		hp_num = 100;//体力初期値
		hp_max = 120;//体力max値
		goal_num = 3;//達成度初期値
		ex_num = 25;//経験初期値
		ex_max = 1000;//経験max値
		gold_num = 4567;//所持金初期値
		gacya_num = 24;//ガチャpt初期値
		lv_num = 5;//レベル
		
		//第●章　チャプター名　1/9（階層）　
		_title = "第1章　あああああああああ　1/9";
		_comment = "ああああああああああああああああああああああああああああああ";//お知らせ文言
		get_txt = "あああああああああああああああ\nああああああああああああああ";//取得物テキスト
		raid_txt = "ああああああああああああああ\nLv.000";//レイドボス登場文言
		less_hp = 10;//体力消費　
		end_num = 4;//終了するターン
		end_pt = 5;//終了パターン 1: レベルアップ　2：レイドボス登場　3：冒険達成　4：体力不足　5：何か取得（画像が280ｘ280ならなんでも）　
		// スライス用数値
		action_pattern = "1,1,2,1,1,3,1,2";//敵パターン　敵小：1　敵中：2　敵大（レア）：3
		ex_pattern = "18,14,108,10,15,150,20,10";//取得経験値パターン
		gold_pattern = "150,148,378,182,157,1054,275,35";//取得お金パターン
		fiver_pattern = "0,0,1,0,0,1,0,0";//フィーバーパターン//0：normal　1:fiver
		//ゲージ用スライス数値
		goal_gauge = "7,11,25,31,41,80,87,95";//達成度//※パーセント
		
		actStr=action_pattern;
		actStr = actStr + ",";
		s1 = "";
		_numA = 0;
		for (i = 0; i < actStr.length; i++)
		{
			if (actStr.substring(i + 1, i) == ",")
			{
				_numA++;
				eval("a" + _numA +" = s1");
				s1 = "";
			}
			else
			{
				s1 +=actStr.substring(i + 1, i);
			}
			if (_numA == 7)
			{
				_flg1 = 1;
			}
		}
		
		exStr=ex_pattern;
		exStr = exStr + ",";
		s2 = "";
		_numB = 0;
		for (q = 0; q < exStr.length; q++)
		{
			if (exStr.substring(q + 1, q) == ",")
			{
				_numB++;
				eval("e" + _numB +" = s2");
				s2 = "";
			}
			else
			{
				s2 +=exStr.substring(q + 1, q);
			}
			if (_numB == 7)
			{
				_flg2 = 1;
			}
		}
		
		gldStr=gold_pattern;
		gldStr = gldStr + ",";
		s3 = "";
		_numC = 0;
		for (w = 0; w < gldStr.length; w++)
		{
			if (gldStr.substring(w + 1, w) == ",")
			{
				_numC++;
				eval("g" + _numC + "= s3");
				s3 = "";
			}
			else
			{
				s3 +=gldStr.substring(w + 1, w);
			}
			if (_numC == 7)
			{
				_flg3 = 1;
			}
		}
		
		fvStr=fiver_pattern;
		fvStr = fvStr + ",";
		s4= "";
		_numD = 0;
		for (v = 0; v < fvStr.length; v++)
		{
			if (fvStr.substring(v + 1, v) == ",")
			{
				_numD++;
				eval("f" + _numD + "= s4");
				s4 = "";
			}
			else
			{
				s4 +=fvStr.substring(v + 1, v);
			}
			if (_numD == 7)
			{
				_flg4 = 1;
			}
		}
		
		goalG=goal_gauge;
		goalG = goalG + ",";
		s5 = "";
		_numE = 0;
		for (z = 0; z < goalG.length; z++)
		{
			if (goalG.substring(z + 1, z) == ",")
			{
				_numE++;
				eval("gG" + _numE + "= s5");
				s5 = "";
			}
			else
			{
				s5 +=goalG.substring(z + 1, z);
			}
			if (_numE == 7)
			{
				_flg5 = 1;
			}
		}
			
		count=0;
		
		this.mcTxt._title_txt.text=_title;
		this.mcTxt.lv_num.text=lv_num;
		this.mcTxt.hp_now_txt.text=hp_num;
		this.mcTxt.hp_max_txt.text=hp_max;
		this.mcTxt.ex_now_txt.text=ex_num;
		this.mcTxt.ex_max_txt.text=ex_max;
		this.mcTxt.gold_txt.text=gold_num;
		this.mcTxt.goal_txt.text=goal_num;
		
		this.mcMessage._commentM._comment.text = _comment;
		
		//App.NativeAPI.call('start_effect_sound({ "sound_name" : "start_effect_sound" })');
		
		this.gotoAndPlay(0);
	}
	this.frame_1 = function() {
		if(_flg1+_flg2+_flg3+_flg4+_flg5==5)
		{
			this.gotoAndPlay("_set");
		}
		else if(loop_num==60)
		{
			this.gotoAndStop("_error");
		}
		else 
		{
		loop_num++;
		
		this.gotoAndPlay("_start");
		}
	}
	this.frame_5 = function() {
		if(end_num==count)
		{
			this.gotoAndPlay("_end");
		}
		else 
		{
			count++;
			_eFlg=eval("a"+count);
			if(_eFlg==1){
				this.mcEnemy.gotoAndPlay("_enemy1");
			}
			else if(_eFlg==2){
				this.mcEnemy.gotoAndPlay("_enemy2");
			}
			else if(_eFlg==3){
				this.mcEnemy.gotoAndPlay("_enemy3");
			}
		}
	}
	this.frame_6 = function() {
		r_num=0;
		r_num=(Math.floor(Math.random()*8)+1)*45;
		this.stop();
		
		this.btn1.onClick = function(){
			exportRoot.gotoAndPlay("_attack");
		}
	}
	this.frame_7 = function() {
		cjs.Tween.get(this.mcThunder).to({rotation:r_num},0);
		this.mcThunder.gotoAndPlay(0);
		this.mcNext.gotoAndPlay("_attack");
		this.mcCard.gotoAndPlay("_attack");
		
		fv_flg=eval("f"+count);
		if(fv_flg==1)
		{
		this.mcFiver.gotoAndPlay("_on");
		}
		
		exp_num=eval("e"+count);
		gl_num=eval("g"+count);
		this.getWindow.get_r_txt.text = "Ex:"+exp_num+"GET!\n"+gl_num+"ﾄﾞｰﾗGET!";
		
		hp_num-=less_hp;
		this.mchG.gotoAndPlay("_play");
		
		ex_num=parseInt(ex_num) + parseInt(exp_num);
		this.mceG.gotoAndPlay("_play");
	}
	this.frame_11 = function() {
		this.mcGold.gotoAndPlay(0);
		if(_eFlg==1)
		{
		this.mcEnemy.gotoAndPlay("_attack1");
		}
		else if(_eFlg==2)
		{
		this.mcEnemy.gotoAndPlay("_attack2");
		}
		else if(_eFlg==3)
		{
		this.mcEnemy.gotoAndPlay("_attack3");
		}
	}
	this.frame_17 = function() {
		this.mcBG.gotoAndPlay();
	}
	this.frame_21 = function() {
		this.mcTxt.hp_now_txt.text=hp_num;
		
		this.mcTxt.ex_now_txt.text=ex_num;
		
		gold_num = parseInt(gold_num) + parseInt(eval("g" + count));
		
		this.mcTxt.gold_txt.text= gold_num;
		
		this.mcTxt.goal_txt.text=eval("gG"+count);
	}
	this.frame_28 = function() {
		this.gotoAndPlay("_set");
	}
	this.frame_29 = function() {
		if(end_pt==1)
		{
			//App.NativeAPI.call('start_effect_sound({ "sound_name" : "levelup_bgm_sound" })');
		　  //App.NativeAPI.call('start_effect_sound({ "sound_name" : "levelup_effect_sound" })');
			this.mcEnd.gotoAndPlay("_end1");
		}
		else if(end_pt==2)
		{
			//App.NativeAPI.call('start_effect_sound({ "sound_name" : "raidboss_bgm_sound" })');
		    //App.NativeAPI.call('start_effect_sound({ "sound_name" : "raidboss_entry_sound" })');
			this.mcEnd.gotoAndPlay("_end2");
		}
		else if(end_pt==3)
		{
			//App.NativeAPI.call('start_effect_sound({ "sound_name" : "quest_bgm_sound" })');
		　  //App.NativeAPI.call('start_effect_sound({ "sound_name" : "quest_clear_sound" })');
			this.mcEnd.gotoAndPlay("_end3");
		}
		else if(end_pt==4)
		{
			this.mcEnd.gotoAndPlay("_end4");
		}
		else if(end_pt==5)
		{
			//App.NativeAPI.call('start_effect_sound({ "sound_name" : "item_bgm_sound" })');
			//App.NativeAPI.call('start_effect_sound({ "sound_name" : "item_get_sound"})');
			this.mcEnd.gotoAndPlay("_end5");
		}
	}
	this.frame_45 = function() {
		this.stop();
		
		this.btn2.onClick = function(){
			location.href = base_url+'?guid=ON&url='+callback_url,"_self","GET";
			exportRoot.gotoAndStop("_jump");
		}
	}
	this.frame_46 = function() {
		this.stop();
	}
	this.frame_47 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(4).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(4).call(this.frame_11).wait(6).call(this.frame_17).wait(4).call(this.frame_21).wait(7).call(this.frame_28).wait(1).call(this.frame_29).wait(16).call(this.frame_45).wait(1).call(this.frame_46).wait(1).call(this.frame_47));

	// jump_URL
	this.mc2 = new lib.mc_link2();
	this.mc2.setTransform(644,4,1,1,0,0,0,0,4);
	this.mc2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mc2).wait(29).to({_off:false},0).wait(19));

	// button コピー
	this.btn1 = new lib.Button();
	this.btn1.setTransform(8.3,8.3,1,1,0,0,0,8.3,8.3);
	this.btn1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btn1).wait(6).to({_off:false},0).to({_off:true},1).wait(41));

	// button
	this.btn2 = new lib.Button();
	this.btn2.setTransform(8.3,8.3,1,1,0,0,0,8.3,8.3);
	this.btn2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btn2).wait(39).to({_off:false},0).to({_off:true},8).wait(1));

	// window
	this.getWindow = new lib.mcGetTxt();
	this.getWindow.setTransform(209.5,357.9,1,1,0,0,0,89.5,12);
	this.getWindow._off = true;

	this.timeline.addTween(cjs.Tween.get(this.getWindow).wait(11).to({_off:false},0).to({_off:true},18).wait(19));

	// coin
	this.mcGold = new lib.mcGold();
	this.mcGold.setTransform(325.8,353.8,1,1,0,0,0,0.8,3.8);
	this.mcGold._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcGold).wait(13).to({_off:false},0).to({_off:true},16).wait(19));

	// end
	this.mcEnd = new lib.mcEnd();
	this.mcEnd.setTransform(0,180);
	this.mcEnd._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcEnd).wait(29).to({_off:false},0).to({_off:true},17).wait(2));

	// load
	this.instance = new lib.mcLoading();
	this.instance.setTransform(320,480,1,1,0,0,0,320,480);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({alpha:0.281},2).to({_off:true},1).wait(42).to({alpha:1,_off:false},0).wait(1));

	// error
	this.instance_1 = new lib.error();
	this.instance_1.setTransform(0,330);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},46).to({state:[]},1).wait(1));

	// screenBlack
	this.instance_2 = new lib.isScreen("synched",0);
	this.instance_2.setTransform(120,160,1,1,0,0,0,120,160);
	this.instance_2.alpha = 0.18;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(29).to({startPosition:0,_off:false},0).to({alpha:0.789},10).wait(9));

	// mcMessage
	this.mcMessage = new lib.mcMessage();
	this.mcMessage.setTransform(-239.9,946,2,2,0,0,0,120,8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mcMessage}]}).wait(48));

	// fiver
	this.mcFiver = new lib.mcFiver();
	this.mcFiver.setTransform(9,134.6,2.07,1.914);
	this.mcFiver._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcFiver).wait(6).to({_off:false},0).to({_off:true},23).wait(19));

	// txt
	this.mcTxt = new lib.mcTxt();
	this.mcTxt.setTransform(319.1,15.5,1,1,0,0,0,219.1,14.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mcTxt}]}).wait(48));

	// mceG
	this.mceG = new lib.mcGaugeEx();
	this.mceG.setTransform(382,72,2.36,1.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mceG}]}).wait(48));

	// mchG
	this.mchG = new lib.mcGaugeHp();
	this.mchG.setTransform(19,73,2.36,1.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mchG}]}).wait(48));

	// enter
	this.mcNext = new lib.mcAttack();
	this.mcNext.setTransform(233.5,813.5,1,1,0,0,0,33.5,16.5);
	this.mcNext._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcNext).wait(2).to({_off:false},0).to({_off:true},27).wait(19));

	// card
	this.mcCard = new lib.mcCard();
	this.mcCard.setTransform(328,696,1,1,0,0,0,140,140);
	this.mcCard._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcCard).wait(2).to({_off:false},0).wait(46));

	// pict
	this.instance_3 = new lib.isHeader("synched",0);
	this.instance_3.setTransform(120,26,1,1,0,0,0,120,26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).wait(48));

	// effect
	this.mcThunder = new lib.mcText();
	this.mcThunder.setTransform(307.8,383.3,4.65,4.423);
	this.mcThunder._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcThunder).wait(7).to({_off:false},0).to({_off:true},22).wait(19));

	// ENEMY
	this.mcEnemy = new lib.mcEnemy();
	this.mcEnemy.setTransform(267,303,1,1,0,0,0,90,55);
	this.mcEnemy._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcEnemy).wait(2).to({_off:false},0).wait(11).to({scaleX:0.95,scaleY:0.95,x:256.6,y:261.5},0).to({scaleX:0.98,scaleY:0.98,x:250.8,y:309},2).to({scaleX:0.85,scaleY:0.85,x:265.3,y:292.5},2).to({scaleX:1,scaleY:1,x:267,y:303},2).wait(29));

	// screenWhite
	this.instance_4 = new lib.isScreenWhite("synched",0);
	this.instance_4.setTransform(320,480,1,1,0,0,0,320,480);
	this.instance_4.alpha = 0.199;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(11).to({startPosition:0,_off:false},0).to({alpha:0.641},2).to({alpha:0.199},2).to({alpha:0.641},2).to({alpha:0.199},2).to({_off:true},1).wait(28));

	// BGpict
	this.mcBG = new lib.mcBG();
	this.mcBG.setTransform(140,121,1,1,0,0,0,140,60);

	this.timeline.addTween(cjs.Tween.get(this.mcBG).wait(11).to({y:98},0).to({y:121},2).to({y:98},2).to({y:121},2).wait(31));

	// bg
	this.instance_5 = new lib.isBG01("synched",0);
	this.instance_5.setTransform(120,120,1,1,0,0,0,120,120);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).wait(48));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1340,960);


// symbols:
(lib.box_flash01 = function() {
	this.initialize(img.box_flash01);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,637,720);


(lib.box_flash02 = function() {
	this.initialize(img.box_flash02);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,637,720);


(lib.box_flash03 = function() {
	this.initialize(img.box_flash03);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,637,720);


(lib.box_flash04 = function() {
	this.initialize(img.box_flash04);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,637,720);


(lib.box_flash05 = function() {
	this.initialize(img.box_flash05);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,637,720);


(lib.box_flash06 = function() {
	this.initialize(img.box_flash06);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,637,720);


(lib.box_flash07 = function() {
	this.initialize(img.box_flash07);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,637,720);


(lib.box_flash08 = function() {
	this.initialize(img.box_flash08);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,637,720);


(lib.box_flash09 = function() {
	this.initialize(img.box_flash09);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,637,720);


(lib.box1 = function() {
	this.initialize(img.box1);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,268,210);


(lib.box2 = function() {
	this.initialize(img.box2);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,337,267);


(lib.btn = function() {
	this.initialize(img.btn);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,116);


(lib.btn2 = function() {
	this.initialize(img.btn2);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,116);


(lib.clear01 = function() {
	this.initialize(img.clear01);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,480);


(lib.clear02 = function() {
	this.initialize(img.clear02);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,480);


(lib.clear03 = function() {
	this.initialize(img.clear03);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,480);


(lib.clear04 = function() {
	this.initialize(img.clear04);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,480);


(lib.clear05 = function() {
	this.initialize(img.clear05);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,480);


(lib.clear06 = function() {
	this.initialize(img.clear06);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,480);


(lib.clear07 = function() {
	this.initialize(img.clear07);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,480);


(lib.clear08 = function() {
	this.initialize(img.clear08);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,480);


(lib.clear09 = function() {
	this.initialize(img.clear09);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,480);


(lib.clear10 = function() {
	this.initialize(img.clear10);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,480);


(lib.clear11 = function() {
	this.initialize(img.clear11);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,480);


(lib.clear12 = function() {
	this.initialize(img.clear12);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,480);


(lib.clear13 = function() {
	this.initialize(img.clear13);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,480);


(lib.clear14 = function() {
	this.initialize(img.clear14);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,480);


(lib.clear15 = function() {
	this.initialize(img.clear15);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,480);


(lib.clear16 = function() {
	this.initialize(img.clear16);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,480);


(lib.clear17 = function() {
	this.initialize(img.clear17);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,480);


(lib.clear18 = function() {
	this.initialize(img.clear18);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,480);


(lib.clear19 = function() {
	this.initialize(img.clear19);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,480);


(lib.clear20 = function() {
	this.initialize(img.clear20);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,480);


(lib.clear21 = function() {
	this.initialize(img.clear21);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,147);


(lib.clear22 = function() {
	this.initialize(img.clear22);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,260,260);


(lib.coin03 = function() {
	this.initialize(img.coin03);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,210);


(lib.coin04 = function() {
	this.initialize(img.coin04);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,210);


(lib.coin05 = function() {
	this.initialize(img.coin05);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,210);


(lib.coin06 = function() {
	this.initialize(img.coin06);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,210);


(lib.coin07 = function() {
	this.initialize(img.coin07);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,210);


(lib.coin08 = function() {
	this.initialize(img.coin08);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,210);


(lib.coin09 = function() {
	this.initialize(img.coin09);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,210);


(lib.coin10 = function() {
	this.initialize(img.coin10);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,210);


(lib.coin11 = function() {
	this.initialize(img.coin11);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,210);


(lib.coin12 = function() {
	this.initialize(img.coin12);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,210);


(lib.coin13 = function() {
	this.initialize(img.coin13);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,210);


(lib.dammy_bg_800x680 = function() {
	this.initialize(img.dammy_bg_800x680);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,680);


(lib.dammy_card_280 = function() {
	this.initialize(img.dammy_card_280);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,280,280);


(lib.dammy_item_280 = function() {
	this.initialize(img.dammy_item_280);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,280,280);


(lib.dammy_raid_480 = function() {
	this.initialize(img.dammy_raid_480);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,480);


(lib.Enagy = function() {
	this.initialize(img.Enagy);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,271);


(lib.error = function() {
	this.initialize(img.error);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,220);


(lib.flash01 = function() {
	this.initialize(img.flash01);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,840);


(lib.flash02 = function() {
	this.initialize(img.flash02);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,840);


(lib.flash03 = function() {
	this.initialize(img.flash03);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,840);


(lib.flash04 = function() {
	this.initialize(img.flash04);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,840);


(lib.flash05 = function() {
	this.initialize(img.flash05);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,840);


(lib.flash06 = function() {
	this.initialize(img.flash06);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,840);


(lib.flash07 = function() {
	this.initialize(img.flash07);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,840);


(lib.flash08 = function() {
	this.initialize(img.flash08);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,840);


(lib.flash09 = function() {
	this.initialize(img.flash09);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,840);


(lib.lvup01 = function() {
	this.initialize(img.lvup01);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,432);


(lib.lvup02 = function() {
	this.initialize(img.lvup02);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,432);


(lib.lvup03 = function() {
	this.initialize(img.lvup03);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,432);


(lib.lvup04 = function() {
	this.initialize(img.lvup04);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,432);


(lib.lvup05 = function() {
	this.initialize(img.lvup05);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,432);


(lib.lvup06 = function() {
	this.initialize(img.lvup06);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,432);


(lib.lvup07 = function() {
	this.initialize(img.lvup07);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,432);


(lib.lvup08 = function() {
	this.initialize(img.lvup08);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,432);


(lib.lvup09 = function() {
	this.initialize(img.lvup09);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,432);


(lib.lvup10 = function() {
	this.initialize(img.lvup10);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,432);


(lib.lvup11 = function() {
	this.initialize(img.lvup11);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,432);


(lib.monstar_l = function() {
	this.initialize(img.monstar_l);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,430);


(lib.monstar_m = function() {
	this.initialize(img.monstar_m);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,450,430);


(lib.monstar_s = function() {
	this.initialize(img.monstar_s);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,250);


(lib.raid_frame = function() {
	this.initialize(img.raid_frame);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,960);


(lib.raid_Gas = function() {
	this.initialize(img.raid_Gas);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,960);


(lib.raid_text = function() {
	this.initialize(img.raid_text);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,636,241);


(lib.soul01 = function() {
	this.initialize(img.soul01);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,570);


(lib.soul02 = function() {
	this.initialize(img.soul02);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,570);


(lib.soul03 = function() {
	this.initialize(img.soul03);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,570);


(lib.soul04 = function() {
	this.initialize(img.soul04);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,570);


(lib.soul05 = function() {
	this.initialize(img.soul05);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,570);


(lib.soul06 = function() {
	this.initialize(img.soul06);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,570);


(lib.soul07 = function() {
	this.initialize(img.soul07);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,570);


(lib.txt_BG = function() {
	this.initialize(img.txt_BG);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,416,90);


(lib.ui = function() {
	this.initialize(img.ui);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,960);


(lib.Button = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.012)").s().p("EAyAhK+MAAACV9Mhj/AAAMAAAiV9MBj/AAA").cp();
	this.shape.setTransform(320,480);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,960);


(lib.isBoxFlash = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.box_flash09();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,637,720);


(lib.isSoul = function() {
	this.initialize();

	// レイヤー 1
	this.instance_1 = new lib.soul07();

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,500,570);


(lib.mcTxt = function() {
	this.initialize();

	// lv
	this.lv_num = new cjs.Text("", "bold 32px Times New Roman", "#FFFFFF");
	this.lv_num.textAlign = "center";
	this.lv_num.lineHeight = 32;
	this.lv_num.lineWidth = 50;
	this.lv_num.setTransform(220,65,1.24,1.24);

	// goal
	this.goal_txt = new cjs.Text("", "italic bold 40px Times New Roman", "#FFFFFF");
	this.goal_txt.textAlign = "right";
	this.goal_txt.lineHeight = 42;
	this.goal_txt.lineWidth = 75;
	this.goal_txt.setTransform(-9.9,134,1.24,1.24);

	// ex_now
	this.ex_now_txt = new cjs.Text("", "italic bold 24px Times New Roman", "#FFFFFF");
	this.ex_now_txt.textAlign = "right";
	this.ex_now_txt.lineHeight = 26;
	this.ex_now_txt.lineWidth = 67;
	this.ex_now_txt.setTransform(337,41);

	// hp_now
	this.hp_now_txt = new cjs.Text("", "italic bold 24px Times New Roman", "#FFFFFF");
	this.hp_now_txt.textAlign = "right";
	this.hp_now_txt.lineHeight = 26;
	this.hp_now_txt.lineWidth = 67;
	this.hp_now_txt.setTransform(75,41);

	// ex_max
	this.ex_max_txt = new cjs.Text("", "italic bold 24px Times New Roman", "#FFFFFF");
	this.ex_max_txt.lineHeight = 26;
	this.ex_max_txt.lineWidth = 67;
	this.ex_max_txt.setTransform(365,41);

	// hp_max
	this.hp_max_txt = new cjs.Text("", "italic bold 24px Times New Roman", "#FFFFFF");
	this.hp_max_txt.lineHeight = 26;
	this.hp_max_txt.lineWidth = 67;
	this.hp_max_txt.setTransform(100,41);

	// title
	this._title_txt = new cjs.Text("", "24px MS PGothic", "#FFFF99");
	this._title_txt.textAlign = "center";
	this._title_txt.lineHeight = 26;
	this._title_txt.lineWidth = 434;
	this._title_txt.setTransform(217,0);

	// goal
	this.gold_txt = new cjs.Text("", "italic bold 24px Times New Roman", "#FFFFFF");
	this.gold_txt.textAlign = "right";
	this.gold_txt.lineHeight = 26;
	this.gold_txt.lineWidth = 224;
	this.gold_txt.setTransform(525,95);

	// other
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABPhUIiPCpIgOAAICPipIAOAAAA0AFQgFAAgDAEQgDAEgGARQgIAeAAAKQAAAEACACQACACADAAQADAAADgCQADgDADgHQACgDAIgcQAEgPAAgGQAAgEgDgCQgCgDgDAAIAAAAABQAdQAAAWgPASQgPAQgRAAQgLAAgIgJQgHgIAAgPQAAgXAOgPQAOgPARAAQAMAAAIAHQAIAIAAAOIAAAAAgOhKQAIAHAAAOQAAAYgOAQQgOAOgSAAQgMAAgHgFQgIgJAAgPQAAgXAPgRQANgPARAAQANAAAHAJIAAAAAgthBQgCAFgIAbQgEAPAAAHQAAADACADQACACAEAAQAEAAACgBQAEgEACgGQABgDAJgcQAEgQAAgHQAAgEgDgCQgBgCgEAAQgEAAgCACQgEACgCAHIAAAA").cp();
	this.shape_1.setTransform(-0.9,179);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA6hiIhcDQIgWgLIBcjPIAWAK").cp();
	this.shape_2.setTransform(350.2,56.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA5hiIhcDQIgWgLIBcjPIAWAK").cp();
	this.shape_3.setTransform(88.2,56.1);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.gold_txt,this._title_txt,this.hp_max_txt,this.ex_max_txt,this.hp_now_txt,this.ex_now_txt,this.goal_txt,this.lv_num);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.9,0,763,196);


(lib.mcThunder = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// レイヤー 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgIq7QASAMgCAAIjcCFIDYDmIACADQABACgBABIgCACIhZBEIBIBeIABADIgBADIi4EyICvCAQACABABABQAAACgBACIgnBbIBPBsIABADIgBADIgCACIkYDLQgBAAgHAAQgHgBgBAAQgLgDgKgCQgTgFAAgBQgCgCABgBQAAgDACAAIFGi/IhIhjIgPAiQgBABARAGIAPAHQgCAAgkgLQgCgBAAgCQgBgCABgCIARgnIiijZIgCgDIAAgCIDTk6IhTheIgCgDIABgCIACgDIBphBIj8jqIgCgEIABgDIACgCIDsiMQABAAADAAQADABAAABIAAAAAjNC0ICACwIAzhCIizhuABtIfQgBgBADgVIg0hNIgeDCIENgXIi9hIADuoHQAAAAAAAAQAFACgCAFQAAABgCACQAAAAgDACQgDABgIADQgPAGggAKQg9AVh6AmIA5A6QACABAAABQAAACgBABIgoBXIDnCRQACABAAACQABACgBACQgBACgCAAIj3BeIBjCjQABACgBACQAAABgCACIhEA1IDQBZQACAAABACQABACgBACQgBABgBACIjEBoIBdBxIC6BrQACABAAABQABABAAACQgBACgBABQgBABgCAAIkkAYQgBAAgCgBQgBAAgBgCQAAgBAAgCIAfjJQABgFABgDIgZgkQgBgBAAgCQAAgBAAgCQABgBACgBIClhhIi0hdQgBgBgBgBQgBgCAAgBQABgCABgBIA5g3IhUimQgBgCAAgBQAAgCABgBQABgBABgBIDrhUIjaiWQgBgBgBgBQAAgCAAgCIAphYIg9g9QgBgBgBgBQAAgCABgCQABgBACgBQCAgoA/gVQAggLAOgFQADgBADgBQgjgXith6QgBgBgBgCQAAgCABgCQACgCACAAQACAAABABQDOCSAHACIAAAA").cp();
	this.shape_4.setTransform(49,19.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgDq7QAIAMgBAAIhoCFIBmDmIAAADQABACgBABIAAACIgpBEIAiBeIAAADIAAADIhXEyIBTCAQAAABABABQAAACgBACIgSBbIAkBsIAAAGIgBACIiDDLQgBAAgDAAQgDgBgBAAQgFgDgFgCQgIgFgBgBQAAgCAAgBQAAgDABAAICZi/IghhjIgHAiQAAABAHAGIAIAHQgBAAgRgLQgBgBAAgCQgBgCABgCIAIgnIhOjcIAAgCIBkk6IgohhIAAgCIABgDIAxhBIh3jqIAAgEIABgFIBwiMQAAAAACAAQABABAAABIAAAAAhgC0IA8CwIAZhCIhVhuAAzIfQAAgBABgVIgYhMIgPDBICAgWIhahJAAJqTQgBgBAAgCQAAgDAAgBQABgBABgBQABgBABACQBhCRADADQADACgBAFQAAABgBACQgBAAAAACQgCABgEADQgHAGgPAKQgdAUg5AoIAaA5QABABAAABQAAABAAACIgTBXIBtCSQABABAAACQABABgBACQAAACgBABIh0BdIAtCjQABACAAACQgBACAAABIggA2IBiBYQABAAAAACQABACAAACQgBACgBABIhcBoIAsByIBYBqQABABAAABQAAACAAABQAAACgBABQAAABgBAAIiKAYQgBAAgBAAQAAgBgBgBQAAgCAAgBIAPjJQAAgGABgDIgMgkQAAgBAAgCQAAgBAAgBQAAgCABgBIBOhhIhVhdQgBAAAAgCQAAgCAAgBQAAgCABgBIAag3IgmimQgBgCAAgBQAAgCABgBQAAgBABAAIBuhVIhniWQgBgBAAgBQgBgDABgBIAThXIgcg+QgBAAAAgCQAAgDABAAQAAgCABAAQA8gpAegVQAOgLAIgFQABgCABAAQgRgXhRh6IAAAA").cp();
	this.shape_5.setTransform(47.3,19.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAJq7QAAgBADgBQADAAABAAIDsCMIACACIABADIgCAEIj8DqIBpBBIACADIABACIgCADIhTBeIDTE6IAAACIgCADIiiDZIARAnQABACgBACQAAACgCABQgkALgCAAIAPgHQARgGgBgBIgPgiIhIBjIFGC/QACAAAAADQABABgCACQAAABgTAFQgKACgLADQgBAAgHABQgHAAgBAAIkYjLIgCgCIgBgDIABgDIBPhsIgnhbQgBgCAAgCQABgBACgBICviAIi4kyIgBgDIABgDIBIheIhZhEIgCgCQgBgBABgCIACgDIDYjmIjciFQgCAAASgMIAAAAAjcoAQAPAFAfALQA/AVCAApQACAAABACQABAAAAADQAAACgCAAIg9A+IApBXQABABgBADQAAABgCABIjaCWIDrBVQABAAABABQABABAAACQAAABgBACIhUCmIA5A3QABABABACQAAABgBACQgBACgBAAIi0BdIClBhQACABABACQAAABAAABQAAACgBABIgZAkQABADABAGIAfDJQAAABAAACQgBABgBABQgCAAgBAAIkkgYQgCAAgBgBQgBgBgBgCQAAgBABgCQAAgBACgBIC6hqIBdhyIjEhoQgBgBgBgCQgBgCABgCQABgCACAAIDQhYIhEg2QgCgBAAgCQgBgCABgCIBjijIj3hdQgCgBgBgCQgBgCABgBQAAgCACgBIDniSIgohXQgBgCAAgBQABgBABgBIA5g5Qh6gog9gUQgggKgPgGQgIgDgDgBQgCgCgBAAQgCgCAAgBQgCgFAFgCIAAAAQAHgDDOiRQABgCACABQADABABABQABABAAADQgBACgBABQitB6gjAXQADAAADACIAAAAAAbEiIAzBCICAiwIizBuAkpJoIENAWIgejBIg0BMQADAVgBABIi9BJ").cp();
	this.shape_6.setTransform(49,19.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(17,-50.7,64.1,140.5);


(lib.mcGold = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// timeline functions:
	this.frame_11 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(11).call(this.frame_11));

	// レイヤー 7
	this.instance_2 = new lib.coin03();
	this.instance_2.setTransform(-87.9,-61.9);

	this.instance_3 = new lib.coin04();
	this.instance_3.setTransform(-87.9,-61.9);

	this.instance_4 = new lib.coin05();
	this.instance_4.setTransform(-87.9,-61.9);

	this.instance_5 = new lib.coin06();
	this.instance_5.setTransform(-87.9,-61.9);

	this.instance_6 = new lib.coin07();
	this.instance_6.setTransform(-87.9,-61.9);

	this.instance_7 = new lib.coin08();
	this.instance_7.setTransform(-87.9,-61.9);

	this.instance_8 = new lib.coin09();
	this.instance_8.setTransform(-87.9,-61.9);

	this.instance_9 = new lib.coin10();
	this.instance_9.setTransform(-87.9,-61.9);

	this.instance_10 = new lib.coin11();
	this.instance_10.setTransform(-87.9,-61.9);

	this.instance_11 = new lib.coin12();
	this.instance_11.setTransform(-87.9,-61.9);

	this.instance_12 = new lib.coin13();
	this.instance_12.setTransform(-87.9,-61.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.9,-61.9,160,210);


(lib.mcGetTxt = function() {
	this.initialize();

	// timeline function:
	this.frame_0 = function() {
		
	}

	// レイヤー 3
	this.get_r_txt = new cjs.Text("", "24px MS PGothic", "#FFFFFF");
	this.get_r_txt.textAlign = "center";
	this.get_r_txt.lineHeight = 26;
	this.get_r_txt.lineWidth = 354;
	this.get_r_txt.setTransform(211.9,17);

	// レイヤー 1
	this.instance_13 = new lib.txt_BG();

	this.addChild(this.instance_13,this.get_r_txt);
	this.frame_0();
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,416,90);


(lib.mcGaugeyellow = function() {
	this.initialize();

	// レイヤー 2
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#FFFF66","#FFFFFF"],[0.027,1],0,-6.7,0,6.8).s().p("AH0AoIvnAAIAAhPIPnAAIAABP").cp();
	this.shape_7.setTransform(50,4);

	this.addChild(this.shape_7);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,100,8);


(lib.mcGaugeren = function() {
	this.initialize();

	// レイヤー 1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#C1F975","#A5F73B","#A5F73B","#DBFCAC","#006600","#006600","#4ECF09"],[0.035,0.106,0.373,0.478,0.494,0.616,1],0,-3,0,3.1).s().p("AH0AoIvnAAIAAhPIPnAAIAABP").cp();
	this.shape_8.setTransform(50,4);

	this.addChild(this.shape_8);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,100,8);


(lib.mcGaugegreen = function() {
	this.initialize();

	// レイヤー 2
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#C195FD","#B07AFD","#B07AFD","#CCA5FE","#40005E","#40005E","#9B00F1"],[0.043,0.106,0.373,0.478,0.494,0.616,1],0,-3,0,3.2).s().p("AH0AoIvnAAIAAhPIPnAAIAABP").cp();
	this.shape_9.setTransform(50,4);

	this.addChild(this.shape_9);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,100,8);


(lib.mcComment = function() {
	this.initialize();

	// timeline function:
	this.frame_0 = function() {
		
	}

	// レイヤー 1
	this._comment = new cjs.Text("", "11px MS PGothic", "#CC99FF");
	this._comment.lineHeight = 14;
	this._comment.lineWidth = 346;
	this._comment.setTransform(0,-2.9);

	this.addChild(this._comment);
	this.frame_0();
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-2.9,350,16);


(lib.mc_link2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{ex:1},true);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1));

	// as
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAzAvIhlAAIAAhdIBlAAIAABd").cp();
	this.shape_10.setTransform(5.1,4.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAzguIAABdIhlAAIAAhdIBlAA").cp();
	this.shape_11.setTransform(5.1,4.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10}]}).to({state:[{t:this.shape_11}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,10.3,9.5);


(lib.isLvup = function() {
	this.initialize();

	// レイヤー 1
	this.instance_14 = new lib.lvup11();

	this.addChild(this.instance_14);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,432);


(lib.loading = function() {
	this.initialize();

	// レイヤー 1
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AApgoQARARAAAXQAAAYgRARQgRASgYAAQgXAAgRgSQgRgRAAgYQAAgXARgRQARgSAXAAQAYAAARASIAAAA").cp();
	this.shape_12.setTransform(0.8,-0.3);

	this.addChild(this.shape_12);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5,-6.2,11.8,11.8);


(lib.isShadow = function() {
	this.initialize();

	// レイヤー 1
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(0,0,0,0.694)").s().p("A13iLMArvAAAID6EXMgzjAAAID6kX").cp();
	this.shape_13.setTransform(165,14);

	this.addChild(this.shape_13);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,330,28);


(lib.isScreenWhite = function() {
	this.initialize();

	// レイヤー 1
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("EAyAhK/MAAACV/Mhj/AAAMAAAiV/MBj/AAA").cp();
	this.shape_14.setTransform(320,480);

	this.addChild(this.shape_14);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,960);


(lib.isScreenRed = function() {
	this.initialize();

	// レイヤー 1
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["rgba(153,0,0,0.698)","rgba(153,0,0,0)"],[0,0.89],0,189.1,0,-188.9).s().p("EAyAAeyMhj/AAAMAAAg9jMBj/AAAMAAAA9j").cp();
	this.shape_15.setTransform(320,197.1);

	this.addChild(this.shape_15);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,394.1);


(lib.isScreenBlack = function() {
	this.initialize();

	// レイヤー 1
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("EAyAhK/MAAACV/Mhj/AAAMAAAiV/MBj/AAA").cp();
	this.shape_16.setTransform(320,480);

	this.addChild(this.shape_16);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,960);


(lib.isScreen = function() {
	this.initialize();

	// レイヤー 1
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("EAlgArwMhK/AAAMAAAhXfMBK/AAAMAAABXf").cp();
	this.shape_17.setTransform(320,480,1.333,1.714);

	this.addChild(this.shape_17);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,960);


(lib.isMonsterS = function() {
	this.initialize();

	// レイヤー 1
	this.instance_15 = new lib.monstar_s();

	this.addChild(this.instance_15);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,250,250);


(lib.isMonsterM = function() {
	this.initialize();

	// レイヤー 1
	this.instance_16 = new lib.monstar_m();

	this.addChild(this.instance_16);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,450,430);


(lib.isMonsterL = function() {
	this.initialize();

	// レイヤー 1
	this.instance_17 = new lib.monstar_l();

	this.addChild(this.instance_17);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,430);


(lib.isLine1 = function() {
	this.initialize();

	// レイヤー 1
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["rgba(51,204,255,0)","#33CCFF","#FFFFFA","#33CCFF","rgba(51,204,255,0)"],[0.008,0.408,0.486,0.569,1],0,24.4,0,-24.2).s().p("ASwFsMglfAAAIAArXMAlfAAAIAALX").cp();
	this.shape_18.setTransform(120,36.4);

	this.addChild(this.shape_18);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,240,72.8);


(lib.isLight = function() {
	this.initialize();

	// レイヤー 1
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.635,1],0,0,0,0,0,231.5).s().p("AZTZTQqfKfu0AAQu0AAqfqfQqeqfAAu0QAAu0KeqfQKfqeO0AAQO0AAKfKeQKfKfAAO0QAAO0qfKfIAAAA").cp();
	this.shape_19.setTransform(229.1,229.1);

	this.addChild(this.shape_19);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,458.1,458.1);


(lib.isIem = function() {
	this.initialize();

	// レイヤー 1
	this.instance_18 = new lib.dammy_item_280();

	this.addChild(this.instance_18);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,280,280);


(lib.isHeader = function() {
	this.initialize();

	// レイヤー 1
	this.instance_19 = new lib.ui();

	this.addChild(this.instance_19);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,960);


(lib.isGas = function() {
	this.initialize();

	// レイヤー 1
	this.instance_20 = new lib.raid_Gas();

	this.addChild(this.instance_20);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,960);


(lib.isFiverFlash = function() {
	this.initialize();

	// レイヤー 1
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.573,1],0,0,0,0,0,25).s().p("AicipQBBhGBbAAQBcAABBBGQBBBHAABiQAABjhBBHQhBBGhcAAQhbAAhBhGQhBhHAAhjQAAhiBBhHIAAAA").cp();
	this.shape_20.setTransform(22.3,24.1);

	this.addChild(this.shape_20);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,44.5,48.2);


(lib.isFiver = function() {
	this.initialize();

	// レイヤー 1
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#FFFFFF","#FFFFFF","#C8B0D3","#FFFFFF"],[0.008,0.278,0.549,0.549],0,-9.4,0,9.6).s().p("AAxgjQgEgZgFgJQgJgMgVAAQgIAAgCACQgCACAAAJIAAA/QAMABAHgNQAEgHADgVIAGAAIAABZIgGAAQgDgVgDgIQgHgNgNAAIAABAQAAAKAEAFQAEADALAAIAAAGIhGAAIAAgGQAJgBADgDQAFgEAAgLIAAiBQAAgMgFgEQgDgCgJgBIAAgGIBrAAIAAA2IgFAA").cp();
	this.shape_21.setTransform(6.3,10.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#FFFFFF","#FFFFFF","#C8B0D3","#FFFFFF"],[0.008,0.278,0.549,0.549],-0.3,-12.3,-0.3,5.6).s().p("AAgA/Ig/AAIAAgGQAJgCACgBQAFgEAAgIIAAhRQAAgHgKgCIAAgEIArgKIAABoQAAAOAOABIAAAG").cp();
	this.shape_22.setTransform(18.8,12.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#FFFFFF","#FFFFFF","#C8B0D3","#FFFFFF"],[0.008,0.278,0.549,0.549],1.8,-1.8,1.8,16.1).s().p("AAQAQQgHAHgJAAQgIAAgHgHQgHgHAAgJQAAgIAHgHQAHgHAIAAQAJAAAHAHQAHAHAAAIQAAAJgHAHIAAAA").cp();
	this.shape_23.setTransform(18.7,3.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#FFFFFF","#FFFFFF","#C8B0D3","#FFFFFF"],[0.008,0.278,0.549,0.549],0.4,-12.4,0.4,5.8).s().p("AgDgxQAAAAADAJIAMAzIASguQADgIAAgFQAAgFgFgCQgBgBgHgBIAAgFIAkAAIAAAFQgFABgDADQgDADgDAJIgnBoIgDAAIgphoQgEgJgCgDQgDgEgFAAIAAgFIA7AAIAAAFQgEABAAABQgDABAAAFIAAAA").cp();
	this.shape_24.setTransform(31.3,12.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#FFFFFF","#FFFFFF","#C8B0D3","#FFFFFF"],[0.008,0.278,0.549,0.549],-0.8,-11.9,-0.8,7.9).s().p("AgRgMIAnAAQAAgTgCgKQgEgQgNAAQgEAAgHAJQgJAMAAAYIAAAAAAqgpQAJAQAAAVIhDAAQAAAUAHAOQAJAQARAAQAOAAANgSIAGADQgJAUgNAIQgLAGgRAAQgVAAgNgOQgQgSAAghQAAhAA0AAQAdAAALAXIAAAA").cp();
	this.shape_25.setTransform(43.8,13);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#FFFFFF","#FFFFFF","#C8B0D3","#FFFFFF"],[0.008,0.278,0.549,0.549],0.5,-12.1,0.5,6.6).s().p("AgHglQANgZAYAAQAZAAAAASQAAAVgWAAQgIAAgFgHQgGgIgEAAQgIAAgDAGQgGAGAAAJIAAA2QAAAMAEAEQADAEAKABIAAAFIhAAAIAAgFQAIgCACgCQAFgDAAgJIAAhQQAAgIgJgBIAAgFIApgJIAAAY").cp();
	this.shape_26.setTransform(56.3,12.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AE4gRQAAAOgHAFQgHAIgPAAQgLAAgIgKQgDgEgCAAQgEAAgDAEQgEABAAAHIAAA4QAAAIADADIAAgBQACADAHAAQADAAADACQACADAAACIAAAGQAAADgCADQgDABgDAAIhCAAQgDAAgCgBQgCgDAAgDIAAgGQAAgCABgCQABgBABAAIAAAAQAAAAABgBQAAgBABAAQAFgBADgCQABgCAAgDIAAhQQAAgCgCAAQgDgBgCgCQgCgCAAgDIAAgEQAAgDACgCQACgCACAAQABgBAAAAIAogJIABAAQACAAABAAIABAAIAAABQACAAABACIAAAAQABACAAACIAAAEQAOgMASAAQAQAAAIAGQAIAHAAANIAAAAABxAHIAbAAQgBgKgCgHQgCgJgHgCQgDABgEAFQgGAIgCAOIAAAAACugQQAJAQAAAXQAAADgCADQgCABgDAAIg+AAQACAPAFAKQAHAMANAAQALAAAKgPQACgCADgBIABAAQADAAACACQABAAAAAAIADADQAAAAAAAAQADABABACIAAAAQAAABABAAIAAABQAAACgBADIAAAAQgKAWgOAIQgMAHgVAAQgaAAgPgRQgSgTAAgmQAAgiAQgRQAPgTAfAAQAhAAAOAbIAAAAAA9gpQABACAAADIAAAGQAAACgBADIAAgBQgBACgDABIAAAAQgCABgBAAQgBABAAAAQgDADgCAGIgmBnQAAABAAAAQgCACgBACQgBABAAAAQgCAAgCAAIgCAAQgCAAgBAAQgCgCgBgCQgBgBABAAIgqhnQgEgIgCgDQAAAAAAgBIgBAAQgDAAgCgCQgCgCAAgDIAAgGQAAgDACgCQACgCADAAIA6AAQADAAADACQACACAAADIAAAGQAAACgBADIAAgBQgCACgCABIgBAAQgCABAAAAQAAACACAFIAIAdIAJgXIAAAAQAAgBABgBIAAAAQACgGAAgEIAAgBIABAAQgDAAgFgBQgCAAgCgCIgBAAQgBgDAAgCIAAgGQAAgDACgCQACgCADAAIAkAAQADAAADACIAAAAAhmgvQgFADgDACIADgBIAAAAQABAAACABQAAAAABAAIABAAQABABABACQABACAAACIAABoQAAAHAIABQADAAACACIAAABQACACAAACIAAAGQAAADgCADQgDABgDAAIhBAAQgDAAgCgBQgCgDAAgDIAAgGQAAgCABgCIAAABQABgCACgBQAAgBABAAQAHgCADgBQABgCAAgDIAAhQQgBgCgDgBQgDAAgCgCIAAAAQgCgDAAgCIAAgFQAAgCACgCQABgCADgBQAAAAABAAIAZgGQgMAAgIgJQgJgJAAgMQAAgNAKgJQAIgJANAAQANAAAKAJQAIAJAAANQAAAMgIAKIAAAAAi9heQACACAAADIAAA2QAAADgCACQgDACgDAAIgFAAQgDAAgCgBQgCgCgBgDQgEgXgEgIQgHgJgQAAQgEAAgBABQgBABAAAEIAAA2QAEgCADgEQADgHACgTQAAgDADgBIAAgBQACgCACAAIAHAAQADAAACADQACACAAADIAABZQAAACgCADQgCACgDAAIgHAAQgCAAgBgBQgBAAAAgBQgDgCAAgCQgBgSgDgIIgBAAQgDgGgEgCIAAA3QAAAGADADQADABAHABQADAAADACQACACAAADIAAAGQAAADgCADQgDABgDAAIhIAAQgDAAgCgBQgCgDAAgDIAAgGQAAgCABgCQAAgBABAAQACgCADAAQAGgBACgCQACgCAAgHIAAiBQAAgHgCgDQgDgBgFgBQgDAAgCgCQgBAAAAgBQgBgCAAgCIAAgGQAAgDACgCQACgDADAAIBtAAQADAAADADIAAAA").cp();
	this.shape_27.setTransform(31.3,10.2);

	this.addChild(this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,62.5,20.3);


(lib.isEnagy = function() {
	this.initialize();

	// レイヤー 1
	this.instance_21 = new lib.Enagy();

	this.addChild(this.instance_21);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,271);


(lib.isCrosshatch = function() {
	this.initialize();

	// レイヤー 3
	this.instance_22 = new lib.clear22();

	this.addChild(this.instance_22);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,260,260);


(lib.isCard = function() {
	this.initialize();

	// レイヤー 1
	this.instance_23 = new lib.dammy_card_280();

	this.addChild(this.instance_23);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,280,280);


(lib.isBox2 = function() {
	this.initialize();

	// レイヤー 1
	this.instance_24 = new lib.box2();

	this.addChild(this.instance_24);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,337,267);


(lib.isBox1 = function() {
	this.initialize();

	// レイヤー 1
	this.instance_25 = new lib.box1();

	this.addChild(this.instance_25);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,268,210);


(lib.isBG01 = function() {
	this.initialize();

	// レイヤー 1
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("EAlggrvMAAABXfMhK/AAAMAAAhXfMBK/AAA").cp();
	this.shape_28.setTransform(320,480,1.333,1.714);

	this.addChild(this.shape_28);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,960);


(lib.isBG = function() {
	this.initialize();

	// レイヤー 1
	this.instance_26 = new lib.dammy_bg_800x680();

	this.addChild(this.instance_26);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,800,680);


(lib.isAttack_over = function() {
	this.initialize();

	// レイヤー 3
	this.instance_27 = new lib.btn2();

	this.addChild(this.instance_27);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,240,116);


(lib.isAttack = function() {
	this.initialize();

	// レイヤー 3
	this.instance_28 = new lib.btn();

	this.addChild(this.instance_28);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,240,116);


(lib.isDot = function() {
	this.initialize();

	// レイヤー 1
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAUAAQAAAIgGAGQgGAGgIAAQgHAAgGgGQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHIAAAA").cp();
	this.shape_29.setTransform(3,3);

	this.addChild(this.shape_29);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1,1,4,4);


(lib.mcFlash = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// レイヤー 1
	this.instance_29 = new lib.flash01();

	this.instance_30 = new lib.flash02();

	this.instance_31 = new lib.flash03();

	this.instance_32 = new lib.flash04();

	this.instance_33 = new lib.flash05();

	this.instance_34 = new lib.flash06();

	this.instance_35 = new lib.flash07();

	this.instance_36 = new lib.flash08();

	this.instance_37 = new lib.flash09();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_29}]}).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,840);


(lib.mcText = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// timeline functions:
	this.frame_6 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(6).call(this.frame_6));

	// レイヤー 7
	this.instance_38 = new lib.mcThunder();
	this.instance_38.setTransform(132.4,-0.9,0.39,0.496,-89.9,0,0,53.5,103.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_38).to({scaleY:1.62,x:132.5},2).wait(3).to({alpha:0.648},0).to({_off:true},1).wait(1));

	// レイヤー 4
	this.instance_39 = new lib.isLine1("synched",0);
	this.instance_39.setTransform(-0.5,0.1,1,0.471,0,0,0,120,36.4);
	this.instance_39._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(2).to({startPosition:0,_off:false},0).to({scaleX:1.03,scaleY:1.61,alpha:0.281},3).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(56,-11.7,69.6,25.1);


(lib.mcRaidBoss = function() {
	this.initialize();

	// レイヤー 1
	this.instance_40 = new lib.raid_frame();

	// screeneffect
	this.instance_41 = new lib.isScreenRed("synched",0);
	this.instance_41.setTransform(320,736.2,1,1.249,0,0,0,320,394.1);

	// レイヤー 2
	this.instance_42 = new lib.dammy_raid_480();
	this.instance_42.setTransform(0,62,1.333,1.333);

	// bg
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(153,0,0,0.498)").s().p("EAyAhK/MAAACV/Mhj/AAAMAAAiV/MBj/AAA").cp();
	this.shape_30.setTransform(320,480);

	this.addChild(this.shape_30,this.instance_42,this.instance_41,this.instance_40);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,960);


(lib.mcMessage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// レイヤー 1
	this._commentM = new lib.mcComment();
	this._commentM.setTransform(560,-2.8,1,1,0,0,0,0,-2.9);

	this.timeline.addTween(cjs.Tween.get(this._commentM).to({x:-109.8},261).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(560,-2.9,350,16);


(lib.mcGaugeHp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{_play:1,_wait:3},true);

	// timeline functions:
	this.frame_0 = function() {
		this.mcBar2.val_q = hp_num/hp_max;
		this.mcBar.val02_q = hp_num/hp_max;
		this.mcBar2.val = this.mcBar2.val_q
		this.mcBar.val02 = this.mcBar.val02_q
		this.mcBar2.scaleX = this.mcBar2.val;
		this.mcBar.scaleX = this.mcBar.val02;
		
		this.gotoAndStop("_wait");
	}
	this.frame_1 = function() {
		this.mcBar2.val_q = hp_num/hp_max;
		this.mcBar2.val = this.mcBar2.val_q < 0 ? 0 : this.mcBar2.val_q;
		
		this.mcBar.val02_q = hp_num/hp_max;
		this.mcBar.val02 = this.mcBar.val02_q < 0 ? 0 : this.mcBar.val02_q;
	}
	this.frame_2 = function() {
		cjs.Tween.get(this.mcBar2).to({scaleX:this.mcBar2.val},0);
		cjs.Tween.get(this.mcBar).to({scaleX:this.mcBar.val02},400);
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3));

	// hp_bar
	this.mcBar2 = new lib.mcGaugeren();
	this.mcBar2.setTransform(1,8,1,1,0,0,0,0,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mcBar2}]}).wait(4));

	// hp_bar
	this.mcBar = new lib.mcGaugeyellow();
	this.mcBar.setTransform(1,8,1,1,0,0,0,0,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mcBar}]}).wait(4));

	// empty
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#666666","#333333"],[0,1],0,-2.8,0,2.7).s().p("AH0AoIvngDIAAhMIPnAAIAABP").cp();
	this.shape_31.setTransform(51,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31}]}).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,3,100,8);


(lib.mcGaugeEx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{_play:1,_wait:3},true);

	// timeline functions:
	this.frame_0 = function() {
		this.mcBar4.val_q = ex_num/ex_max;
		this.mcBar3.val02_q = ex_num/ex_max;
		this.mcBar4.val = this.mcBar4.val_q
		this.mcBar3.val02 = this.mcBar3.val02_q
		this.mcBar4.scaleX = this.mcBar4.val;
		this.mcBar3.scaleX = this.mcBar3.val02;
		
		this.gotoAndStop("_wait");
	}
	this.frame_1 = function() {
		this.mcBar4.val_q = ex_num/ex_max;
		this.mcBar4.val = this.mcBar4.val_q < 0 ? 0 : this.mcBar4.val_q;
		
		this.mcBar3.val02_q = ex_num/ex_max;
		this.mcBar3.val02 = this.mcBar3.val02_q < 0 ? 0 : this.mcBar3.val02_q;
	}
	this.frame_2 = function() {
		cjs.Tween.get(this.mcBar4).to({scaleX:this.mcBar4.val},400);
		cjs.Tween.get(this.mcBar3).to({scaleX:this.mcBar3.val02},0);
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3));

	// hp_bar
	this.mcBar4 = new lib.mcGaugegreen();
	this.mcBar4.setTransform(1,8,1,1,0,0,0,0,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mcBar4}]}).wait(4));

	// hp_bar
	this.mcBar3 = new lib.mcGaugeyellow();
	this.mcBar3.setTransform(1,8,1,1,0,0,0,0,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mcBar3}]}).wait(4));

	// empty
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#666666","#333333"],[0,1],0,-2.8,0,2.7).s().p("AH0AoIvngDIAAhMIPnAAIAABP").cp();
	this.shape_32.setTransform(51,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32}]}).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,3,100,8);


(lib.mcFiver = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{_off:0,_on:1},true);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_13 = function() {
		this.gotoAndStop("_off");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(13).call(this.frame_13));

	// レイヤー 1
	this.instance_43 = new lib.isFiver("synched",0);
	this.instance_43.setTransform(29.7,21.2,0.706,0.706,0,0,0,31.3,10.2);
	this.instance_43.alpha = 0.262;
	this.instance_43._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(1).to({startPosition:0,_off:false},0).to({y:19.1,alpha:1},4).to({y:17},4).to({y:15.5,alpha:0.262},4).wait(1));

	// レイヤー 4
	this.instance_44 = new lib.isFiverFlash("synched",0);
	this.instance_44.setTransform(29.5,17,1,1,0,0,0,22.3,24.1);
	this.instance_44._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(1).to({startPosition:0,_off:false},0).to({regX:22.2,scaleX:1.24,scaleY:1.24,x:29.4,y:16.9},4).to({regY:24,scaleX:1.52,scaleY:1.52,y:16.8,alpha:0.262},4).to({_off:true},1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.mcEnemy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{_stop:0,_enemy1:1,_loop1:13,_attack1:60,_enemy2:71,_loop2:83,_attack2:130,_enemy3:141,_loop3:153,_attack3:200},true);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		//App.NativeAPI.call('start_effect_sound({ "sound_name" : "enemy1_entry_sound" })');
	}
	this.frame_59 = function() {
		this.gotoAndPlay("_loop1");
	}
	this.frame_70 = function() {
		this.gotoAndStop("_stop");
	}
	this.frame_71 = function() {
		//App.NativeAPI.call('start_effect_sound({ "sound_name" : "enemy2_entry_sound" })');
	}
	this.frame_129 = function() {
		this.gotoAndPlay("_loop2");
	}
	this.frame_140 = function() {
		this.gotoAndStop("_stop");
	}
	this.frame_141 = function() {
		//App.NativeAPI.call('start_effect_sound({ "sound_name" : "enemy3_entry_sound" })');
	}
	this.frame_199 = function() {
		this.gotoAndPlay("_loop3");
	}
	this.frame_210 = function() {
		this.gotoAndStop("_stop");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(58).call(this.frame_59).wait(11).call(this.frame_70).wait(1).call(this.frame_71).wait(58).call(this.frame_129).wait(11).call(this.frame_140).wait(1).call(this.frame_141).wait(58).call(this.frame_199).wait(11).call(this.frame_210));

	// effect コピー
	this.instance_45 = new lib.soul01();
	this.instance_45.setTransform(0,-64.9,0.6,0.6);

	this.instance_46 = new lib.soul02();
	this.instance_46.setTransform(0,-64.9,0.6,0.6);

	this.instance_47 = new lib.soul03();
	this.instance_47.setTransform(0,-64.9,0.6,0.6);

	this.instance_48 = new lib.soul04();
	this.instance_48.setTransform(0,-64.9,0.6,0.6);

	this.instance_49 = new lib.soul05();
	this.instance_49.setTransform(0,-64.9,0.6,0.6);

	this.instance_50 = new lib.soul06();
	this.instance_50.setTransform(0,-64.9,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_45,p:{scaleX:0.6,scaleY:0.6,x:0,y:-64.9}}]},1).to({state:[{t:this.instance_46,p:{scaleX:0.6,scaleY:0.6,x:0,y:-64.9}}]},1).to({state:[{t:this.instance_47,p:{scaleX:0.6,scaleY:0.6,x:0,y:-64.9}}]},1).to({state:[{t:this.instance_48,p:{scaleX:0.6,scaleY:0.6,x:0,y:-64.9}}]},1).to({state:[{t:this.instance_49,p:{scaleX:0.6,scaleY:0.6,x:0,y:-64.9}}]},1).to({state:[{t:this.instance_50,p:{scaleX:0.6,scaleY:0.6,x:0,y:-64.9}}]},1).to({state:[]},1).to({state:[{t:this.instance_45,p:{scaleX:0.8,scaleY:0.8,x:-49.9,y:-121.9}}]},64).to({state:[{t:this.instance_46,p:{scaleX:0.8,scaleY:0.8,x:-49.9,y:-121.9}}]},1).to({state:[{t:this.instance_47,p:{scaleX:0.8,scaleY:0.8,x:-49.9,y:-121.9}}]},1).to({state:[{t:this.instance_48,p:{scaleX:0.8,scaleY:0.8,x:-49.9,y:-121.9}}]},1).to({state:[{t:this.instance_49,p:{scaleX:0.8,scaleY:0.8,x:-49.9,y:-121.9}}]},1).to({state:[{t:this.instance_50,p:{scaleX:0.8,scaleY:0.8,x:-49.9,y:-121.9}}]},1).to({state:[]},1).to({state:[{t:this.instance_45,p:{scaleX:1,scaleY:1,x:-99.9,y:-178.9}}]},64).to({state:[{t:this.instance_46,p:{scaleX:1,scaleY:1,x:-99.9,y:-178.9}}]},1).to({state:[{t:this.instance_47,p:{scaleX:1,scaleY:1,x:-99.9,y:-178.9}}]},1).to({state:[{t:this.instance_48,p:{scaleX:1,scaleY:1,x:-99.9,y:-178.9}}]},1).to({state:[{t:this.instance_49,p:{scaleX:1,scaleY:1,x:-99.9,y:-178.9}}]},1).to({state:[{t:this.instance_50,p:{scaleX:1,scaleY:1,x:-99.9,y:-178.9}}]},1).to({state:[]},1).wait(64));

	// effect
	this.instance_51 = new lib.isSoul("synched",0);
	this.instance_51.setTransform(150,106,0.6,0.6,0,0,0,250,285);
	this.instance_51._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_51).wait(7).to({startPosition:0,_off:false},0).to({scaleX:0.74,scaleY:0.74,alpha:0.281},5).to({_off:true},1).wait(64).to({scaleX:0.8,scaleY:0.8,alpha:1,_off:false},0).to({scaleX:0.99,scaleY:0.99,alpha:0.281},5).to({_off:true},1).wait(64).to({scaleX:1,scaleY:1,alpha:1,_off:false},0).to({scaleX:1.23,scaleY:1.23,alpha:0.281},5).to({_off:true},1).wait(58));

	// monsterS
	this.instance_52 = new lib.isMonsterS("synched",0);
	this.instance_52.setTransform(141,248.3,1,1,0,0,0,125,232.3);
	this.instance_52._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_52).wait(5).to({startPosition:0,_off:false},0).to({scaleY:1.12},4).to({scaleY:1},4).to({scaleY:1.06},23).to({scaleY:1},23).wait(1).to({alpha:0.5},0).to({_off:true},11).wait(140));

	// monsterM
	this.instance_53 = new lib.isMonsterM("synched",0);
	this.instance_53.setTransform(145,259.5,1,0.881,0,0,0,225,409.5);
	this.instance_53._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_53).wait(75).to({startPosition:0,_off:false},0).to({regY:409.6,scaleY:1.11,y:259.6},4).to({scaleY:1},4).to({scaleY:1.05},23).to({scaleY:1},23).wait(1).to({alpha:0.5},0).to({_off:true},11).wait(70));

	// monsterL
	this.instance_54 = new lib.isMonsterL("synched",0);
	this.instance_54.setTransform(143,236.2,1,0.884,0,0,0,320,387.2);
	this.instance_54._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_54).wait(145).to({startPosition:0,_off:false},0).to({scaleY:1.1},4).to({scaleY:1},4).to({scaleY:1.04},23).to({scaleY:1},23).wait(1).to({alpha:0.5},0).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.mcEnagy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// timeline functions:
	this.frame_15 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(15).call(this.frame_15));

	// レイヤー 1
	this.instance_55 = new lib.isEnagy("synched",0);
	this.instance_55.setTransform(320,207.5,1.881,1.881,0,0,0,320,135.5);
	this.instance_55.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_55).to({scaleX:1,scaleY:1,alpha:1},4).to({scaleX:1.21,scaleY:1.21,y:187.5},4).to({scaleX:1.24,scaleY:1.24},2).to({scaleX:1,scaleY:1,y:207.5},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-282,-47.4,1204.1,509.9);


(lib.mｃCrosshatch2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// レイヤー 1
	this.instance_56 = new lib.isCrosshatch("synched",0);
	this.instance_56.setTransform(264.9,265.5,0.504,0.504,0,0,0,130,130);
	this.instance_56.alpha = 0.148;

	this.timeline.addTween(cjs.Tween.get(this.instance_56).to({regY:129.9,y:141.9,alpha:1},4).to({regY:130,y:-12.3},5).to({y:-135.9,alpha:0.148},4).to({_off:true},1).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(199.4,200,130.9,130.9);


(lib.mｃCrosshatch1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// レイヤー 2
	this.instance_57 = new lib.isCrosshatch("synched",0);
	this.instance_57.setTransform(264.9,265.5,0.504,0.504,0,0,0,130,130);
	this.instance_57.alpha = 0.148;
	this.instance_57._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_57).wait(9).to({startPosition:0,_off:false},0).to({regY:129.9,y:141.9,alpha:1},4).to({regY:130,y:-12.3},5).to({y:-135.9,alpha:0.148},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.mcCard = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{_loop:8,_attack:40},true);

	// timeline functions:
	this.frame_39 = function() {
		this.gotoAndPlay("_loop");
	}
	this.frame_49 = function() {
		this.gotoAndPlay("_loop");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(39).call(this.frame_39).wait(10).call(this.frame_49));

	// card
	this.instance_58 = new lib.isCard("synched",0);
	this.instance_58.setTransform(140,58,1.943,1.943,0,0,0,140,140);
	this.instance_58.alpha = 0.391;

	this.timeline.addTween(cjs.Tween.get(this.instance_58).to({scaleX:1,scaleY:1,y:140,alpha:1},8).to({y:120},16).to({y:140},15).wait(1).to({startPosition:0},0).to({y:-53.8},3).to({y:-63.8},3).to({y:140},3).wait(1));

	// shadow
	this.instance_59 = new lib.isShadow("synched",0);
	this.instance_59.setTransform(140,284,1,1,0,0,0,165,14);
	this.instance_59._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_59).wait(8).to({startPosition:0,_off:false},0).to({scaleX:0.95,scaleY:1.29},16).to({scaleX:1,scaleY:1},15).wait(1).to({startPosition:0},0).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-131.9,-213.9,544,544);


(lib.mcBoss = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// timeline functions:
	this.frame_0 = function() {
		this.raid_txt.text=raid_txt;
	}
	this.frame_18 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(18).call(this.frame_18));

	// レイヤー 8
	this.raid_txt = new cjs.Text("", "32px MS Gothic", "#FFFFFF");
	this.raid_txt.textAlign = "center";
	this.raid_txt.lineHeight = 32;
	this.raid_txt.lineWidth = 596;
	this.raid_txt.setTransform(318,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.raid_txt}]},17).wait(2));

	// レイヤー 6
	this.instance_60 = new lib.raid_text();
	this.instance_60.setTransform(0,480);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_60}]},17).wait(2));

	// レイヤー 5
	this.instance_61 = new lib.mcRaidBoss();
	this.instance_61.setTransform(320,300,1,1,0,0,0,320,480);
	this.instance_61._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_61).wait(14).to({_off:false},0).to({regY:480.1,scaleX:1.24,scaleY:1.24,y:300.1,alpha:0},3).to({_off:true},1).wait(1));

	// レイヤー 4
	this.instance_62 = new lib.mcRaidBoss();
	this.instance_62.setTransform(320,300,1.604,1.604,0,0,0,320,480);
	this.instance_62._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_62).wait(11).to({_off:false},0).to({scaleX:1,scaleY:1},3).wait(5));

	// レイヤー 7
	this.instance_63 = new lib.isGas("synched",0);
	this.instance_63.setTransform(320,300,1,1,0,0,0,320,480);
	this.instance_63.alpha = 0.148;

	this.timeline.addTween(cjs.Tween.get(this.instance_63).to({regY:479.9,scaleX:1.09,scaleY:1.09,alpha:0.449},3).to({regY:480,scaleX:1.3,scaleY:1.3,alpha:0.73},7).to({_off:true},1).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-179.9,640,960);


(lib.mcBG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{bg1:1,bg2:11,bg3:21,bg4:31,bg5:41,bg6:51,bg7:61},true);

	// timeline functions:
	this.frame_0 = function() {
		bg_num=Math.floor(Math.random()*7)+1;
		if(bg_num==1)
		{
		
		this.gotoAndStop("bg1");
		}
		else if(bg_num==2)
		{
		
		this.gotoAndStop("bg2");
		}
		else if(bg_num==3)
		{
		
		this.gotoAndStop("bg3");
		}
		else if(bg_num==4)
		{
		
		this.gotoAndStop("bg4");
		}
		else if(bg_num==5)
		{
		
		this.gotoAndStop("bg5");
		}
		else if(bg_num==6)
		{
		
		this.gotoAndStop("bg6");
		}
		else if(bg_num==7)
		{
		
		this.gotoAndStop("bg7");
		}
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_11 = function() {
		this.stop();
	}
	this.frame_21 = function() {
		this.stop();
	}
	this.frame_31 = function() {
		this.stop();
	}
	this.frame_41 = function() {
		this.stop();
	}
	this.frame_51 = function() {
		this.stop();
	}
	this.frame_61 = function() {
		this.stop();
	}
	this.frame_71 = function() {
		this.gotoAndStop("bg1");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(10).call(this.frame_11).wait(10).call(this.frame_21).wait(10).call(this.frame_31).wait(10).call(this.frame_41).wait(10).call(this.frame_51).wait(10).call(this.frame_61).wait(10).call(this.frame_71));

	// レイヤー 1
	this.instance_64 = new lib.isBG("synched",0);
	this.instance_64.setTransform(123.2,53.8,1,1,0,0,0,140,60);
	this.instance_64._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_64).wait(1).to({startPosition:0,_off:false},0).to({x:72.8,y:35.2},3).to({x:56,y:29},7).to({x:67.2,y:61},3).to({x:70,y:69},7).to({x:114,y:21.8},3).to({x:125,y:10},7).to({x:29.8,y:40.4},3).to({x:6,y:48},7).to({x:105.2,y:8.8},3).to({x:130,y:-0.8},7).to({x:57.2,y:36.6},3).to({x:39,y:46},7).to({x:119.8,y:57.2},3).to({x:140,y:60},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.mcAttack = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{_loop:0,_attack:32},true);

	// timeline functions:
	this.frame_31 = function() {
		this.gotoAndPlay("_loop");
	}
	this.frame_38 = function() {
		this.gotoAndPlay("_loop");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(31).call(this.frame_31).wait(7).call(this.frame_38));

	// レイヤー 1 コピー
	this.instance_65 = new lib.isAttack("synched",0);
	this.instance_65.setTransform(54.8,15.8,1,1,0,0,0,54.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_65).to({startPosition:0},8).to({alpha:0.789},6).to({alpha:1},6).to({startPosition:0},11).to({_off:true},1).wait(7));

	// レイヤー 1
	this.instance_66 = new lib.isAttack_over("synched",0);
	this.instance_66.setTransform(54.8,-3.8,1,1,0,0,0,54.8,19.8);
	this.instance_66._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_66).wait(32).to({startPosition:0,_off:false},0).to({startPosition:0},2).to({y:15.8},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-3.9,240,116);


(lib.mcLvup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{_on:0},true);

	// timeline functions:
	this.frame_12 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(12).call(this.frame_12));

	// txt
	this.instance_67 = new lib.mｃCrosshatch1();
	this.instance_67.setTransform(382.8,563.1,0.338,0.338,0,0,0,264.8,141.8);

	this.instance_68 = new lib.mｃCrosshatch2();
	this.instance_68.setTransform(249.6,424.1,0.265,0.265,0,0,0,264.8,265.4);

	this.instance_69 = new lib.mｃCrosshatch2();
	this.instance_69.setTransform(498.1,616.8,0.554,0.554,0,0,0,264.9,265.4);

	this.instance_70 = new lib.mｃCrosshatch2();
	this.instance_70.setTransform(135.1,606,0.452,0.452,0,0,0,264.9,265.4);

	this.instance_71 = new lib.mｃCrosshatch2();
	this.instance_71.setTransform(537.5,464,0.295,0.295,0,0,0,264.8,265.3);

	this.instance_72 = new lib.mｃCrosshatch1();
	this.instance_72.setTransform(14.1,520.8,0.147,0.147);

	this.instance_73 = new lib.mｃCrosshatch1();
	this.instance_73.setTransform(72.9,458.3,0.45,0.45,0,0,0,264.8,141.9);

	this.instance_74 = new lib.mｃCrosshatch1();
	this.instance_74.setTransform(526.9,603.1,0.346,0.346,0,0,0,264.8,141.8);

	this.instance_75 = new lib.mｃCrosshatch2();
	this.instance_75.setTransform(30.9,477.7,0.651,0.651,0,0,0,264.9,265.4);

	this.instance_76 = new lib.mｃCrosshatch1();
	this.instance_76.setTransform(607.3,496.1,0.41,0.41,0,0,0,264.8,141.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_76},{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67}]},12).wait(1));

	// レイヤー 4
	this.instance_77 = new lib.lvup01();
	this.instance_77.setTransform(0,280);

	this.instance_78 = new lib.lvup02();
	this.instance_78.setTransform(0,280);

	this.instance_79 = new lib.lvup03();
	this.instance_79.setTransform(0,280);

	this.instance_80 = new lib.lvup04();
	this.instance_80.setTransform(0,280);

	this.instance_81 = new lib.lvup05();
	this.instance_81.setTransform(0,280);

	this.instance_82 = new lib.lvup06();
	this.instance_82.setTransform(0,280);

	this.instance_83 = new lib.lvup07();
	this.instance_83.setTransform(0,280);

	this.instance_84 = new lib.lvup08();
	this.instance_84.setTransform(0,280);

	this.instance_85 = new lib.lvup09();
	this.instance_85.setTransform(0,280);

	this.instance_86 = new lib.lvup10();
	this.instance_86.setTransform(0,280);

	this.instance_87 = new lib.isLvup("synched",0);
	this.instance_87.setTransform(0,280);
	this.instance_87.alpha = 0.91;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_77}]}).to({state:[{t:this.instance_78}]},1).to({state:[{t:this.instance_79}]},1).to({state:[{t:this.instance_80}]},1).to({state:[{t:this.instance_81}]},1).to({state:[{t:this.instance_82}]},1).to({state:[{t:this.instance_83}]},1).to({state:[{t:this.instance_84}]},1).to({state:[{t:this.instance_85}]},1).to({state:[{t:this.instance_86}]},1).to({state:[{t:this.instance_87,p:{alpha:0.91}}]},1).to({state:[{t:this.instance_87,p:{alpha:1}}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,280,640,432);


(lib.mcLoadTxt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// レイヤー 4
	this.instance_88 = new lib.isDot("synched",0);
	this.instance_88.setTransform(98.4,11.1,1,1,0,0,0,3,3);
	this.instance_88._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_88).wait(11).to({startPosition:0,_off:false},0).wait(14));

	// レイヤー 3
	this.instance_89 = new lib.isDot("synched",0);
	this.instance_89.setTransform(89.6,11.1,1,1,0,0,0,3,3);
	this.instance_89._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_89).wait(7).to({startPosition:0,_off:false},0).wait(18));

	// レイヤー 2
	this.instance_90 = new lib.isDot("synched",0);
	this.instance_90.setTransform(80.9,11.1,1,1,0,0,0,3,3);
	this.instance_90._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_90).wait(3).to({startPosition:0,_off:false},0).wait(22));

	// レイヤー 1
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AFvgbQAEAEAAAGQAAAEgDAEQgDADgFAAQgFAAgEgEQgCgDgBgEQgBgFgCAAQgDAAgCABQAIAIAAAKQAAANgNAHQgLAIgOAAQgOAAgLgHQgEAEAAADQAAAFAUABQAcACAJACQAUAFAAAQQAAARgSAEQgKADgXAAQgrAAAAgUQAAgIAKgHQgGgGAAgHQAAgIANgJQgJgHAAgLQAAgOAMgIQAMgGAOAAQARAAAKAIQAJgIAKAAQAGAAAFAEIAAAAAFAgRQgDgJgHAAQgHAAgEAJQgCAGAAAIQAAAGACAHQAEAJAHAAQAHAAADgJQADgHAAgGQAAgIgDgGIAAAAAEhBGQALAFAKAAQAeAAAAgNQAAgGgNgBQgEgBgWgCQgQgBgGgEQgFAFAAAEQAAAJAPAFIAAAAAEAA6Ig6AAIAAgFQAPAAAAgQIAAgpQAAgUgPAAQgJAAgMAHIAAA3QAAAPAPAAIAAAFIg4AAIAAgFQAOAAAAgPIAAgvQAAgIgDgDQgCgCgHAAIgCAAIAAgFQAMAAAIgDQAIAAANgGIAAANQAOgJAOAAQAiAAAAAgIAAAlQAAAQARAAIAAAFABShEQAGgFAHAAQAHAAAEAFQAGAFAAAIQAAAHgGAFQgEAEgHAAQgHAAgGgEQgFgFAAgHQAAgIAFgFIAAAAABEgUIAAgFQATAAAVgIIAABGQAAAGAEAGQAEAEAHAAIAAAFIg3AAIAAgFQAHAAAFgFQADgFAAgGIAAgrQAAgHgDgDQgEgEgGAAIgCAAAA3A7QgbAAgMADIAAgKQgJAIgIAAQgSAAgMgNQgMgNAAgTQAAgUALgMQAMgOAUAAQAHAAAJAEIAAgXQAAgOgNAAIAAgEQAVAAASgLIAAB2QAAAOANAAIAAAGAgOAPQAAAmARAAQACAAAFgCQAEgDACgDIAAhCQgFgEgHAAQgIAAgGARQgEAJAAAOIAAAAAhOgaQAMAIAAAOIAAAqQAAAKAEAAQAFAAAGgHIADACQgEAJgFAEQgFAEgJAAQgOAAgFgIQgOAIgPAAQgbAAAAgWQAAgSAQgJQAMgFAZgDIAAgIQAAgVgMAAQgFAAgEACQgFACAAADQAAABABAFQACADAAACQAAAFgEADQgEACgFAAQgHAAgDgCQgEgEAAgFQAAgLAPgGQAMgFANAAQAPAAAKAFIAAAAAiXANQAAAVgOANQgNANgVAAQgVAAgOgNQgNgNAAgVQAAgSANgNQAOgNAVAAQAVAAANANQAOANAAASIAAAAAhvARQgIAIAAAKQAAAHADAFQAEAFAHAAQAGAAAGgFIAAgnQgKACgIAHIAAAAAjcANQAAAOAFALQAEASAMAAQAKAAAGgSQAEgLAAgOQAAgNgEgKQgGgQgKAAQgMAAgEAQQgFAKAAANIAAAAAj7AUIgLAmIhsAAIAAgGIACAAQAHAAAFgFQADgEAAgIIAAhSQAAgIgDgDQgEgFgIAAIgCAAIAAgGIA/AAIAAAGIgEAAQgFAAgFAFQgEADAAAIIAABTQAAAQAPAAIALAAQAMAAAOgKQAKgJAJgOIADAB").cp();
	this.shape_33.setTransform(38.1,9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33}]}).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,0.9,74.3,16.1);


(lib.loding = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// レイヤー 1
	this.instance_91 = new lib.loading();
	this.instance_91.setTransform(0,-34.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_91).to({alpha:0},11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-40.9,11.8,11.8);


(lib.loading_set = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// timeline functions:
	this.frame_11 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(11).call(this.frame_11));

	// L12
	this.L12 = new lib.loding();
	this.L12.setTransform(0.1,0.1,1,1,-29.9);
	this.L12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.L12).wait(11).to({_off:false},0).wait(1));

	// L11
	this.L11 = new lib.loding();
	this.L11.setTransform(0.1,0.1,1,1,-59.9);
	this.L11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.L11).wait(10).to({_off:false},0).wait(2));

	// L10
	this.L10 = new lib.loding();
	this.L10.setTransform(0.1,0.1,1,1,-89.9);
	this.L10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.L10).wait(9).to({_off:false},0).wait(3));

	// L9
	this.L9 = new lib.loding();
	this.L9.setTransform(-1.1,0.7,1,1,-119.9);
	this.L9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.L9).wait(8).to({_off:false},0).wait(4));

	// L8
	this.L8 = new lib.loding();
	this.L8.setTransform(-1.1,0.7,1,1,-149.9);
	this.L8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.L8).wait(7).to({_off:false},0).wait(5));

	// L7
	this.L7 = new lib.loding();
	this.L7.setTransform(2.1,0.1,1,1,180);
	this.L7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.L7).wait(6).to({_off:false},0).wait(6));

	// L6
	this.L6 = new lib.loding();
	this.L6.setTransform(4,0.1,1,1,150);
	this.L6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.L6).wait(5).to({_off:false},0).wait(7));

	// L5
	this.L5 = new lib.loding();
	this.L5.setTransform(0.1,0.1,1,1,120);
	this.L5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.L5).wait(4).to({_off:false},0).wait(8));

	// L4
	this.L4 = new lib.loding();
	this.L4.setTransform(-2.4,0.1,1,1,90);
	this.L4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.L4).wait(3).to({_off:false},0).wait(9));

	// L3
	this.L3 = new lib.loding();
	this.L3.setTransform(0.1,0.1,1,1,60);
	this.L3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.L3).wait(2).to({_off:false},0).wait(10));

	// L2
	this.L2 = new lib.loding();
	this.L2.setTransform(2.1,0.1,1,1,30);
	this.L2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.L2).wait(1).to({_off:false},0).wait(11));

	// L1
	this.L1 = new lib.loding();
	this.L1.setTransform(0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.L1}]}).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.9,-40.9,11.8,11.8);


(lib.mcClear = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// timeline functions:
	this.frame_24 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24));

	// txt
	this.instance_92 = new lib.mｃCrosshatch1();
	this.instance_92.setTransform(382.8,367.1,0.338,0.338,0,0,0,264.8,141.8);

	this.instance_93 = new lib.mｃCrosshatch2();
	this.instance_93.setTransform(249.6,228.1,0.265,0.265,0,0,0,264.8,265.4);

	this.instance_94 = new lib.mｃCrosshatch2();
	this.instance_94.setTransform(498.1,420.7,0.554,0.554,0,0,0,264.9,265.4);

	this.instance_95 = new lib.mｃCrosshatch2();
	this.instance_95.setTransform(135.1,409.9,0.452,0.452,0,0,0,264.9,265.4);

	this.instance_96 = new lib.mｃCrosshatch2();
	this.instance_96.setTransform(537.5,268,0.295,0.295,0,0,0,264.8,265.3);

	this.instance_97 = new lib.mｃCrosshatch1();
	this.instance_97.setTransform(14.1,324.8,0.147,0.147);

	this.instance_98 = new lib.mｃCrosshatch1();
	this.instance_98.setTransform(72.9,262.3,0.45,0.45,0,0,0,264.8,141.9);

	this.instance_99 = new lib.mｃCrosshatch1();
	this.instance_99.setTransform(526.9,407.1,0.346,0.346,0,0,0,264.8,141.8);

	this.instance_100 = new lib.mｃCrosshatch2();
	this.instance_100.setTransform(30.9,281.7,0.651,0.651,0,0,0,264.9,265.4);

	this.instance_101 = new lib.mｃCrosshatch1();
	this.instance_101.setTransform(607.3,300.1,0.41,0.41,0,0,0,264.8,141.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_101},{t:this.instance_100},{t:this.instance_99},{t:this.instance_98},{t:this.instance_97},{t:this.instance_96},{t:this.instance_95},{t:this.instance_94},{t:this.instance_93},{t:this.instance_92}]},19).wait(6));

	// レイヤー 1
	this.instance_102 = new lib.clear01();

	this.instance_103 = new lib.clear02();

	this.instance_104 = new lib.clear03();

	this.instance_105 = new lib.clear04();

	this.instance_106 = new lib.clear05();

	this.instance_107 = new lib.clear06();

	this.instance_108 = new lib.clear07();

	this.instance_109 = new lib.clear08();

	this.instance_110 = new lib.clear09();

	this.instance_111 = new lib.clear10();

	this.instance_112 = new lib.clear11();

	this.instance_113 = new lib.clear12();

	this.instance_114 = new lib.clear13();

	this.instance_115 = new lib.clear14();

	this.instance_116 = new lib.clear15();

	this.instance_117 = new lib.clear16();

	this.instance_118 = new lib.clear17();

	this.instance_119 = new lib.clear18();

	this.instance_120 = new lib.clear19();

	this.instance_121 = new lib.clear20();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_102}]}).to({state:[{t:this.instance_103}]},1).to({state:[{t:this.instance_104}]},1).to({state:[{t:this.instance_105}]},1).to({state:[{t:this.instance_106}]},1).to({state:[{t:this.instance_107}]},1).to({state:[{t:this.instance_108}]},1).to({state:[{t:this.instance_109}]},1).to({state:[{t:this.instance_110}]},1).to({state:[{t:this.instance_111}]},1).to({state:[{t:this.instance_112}]},1).to({state:[{t:this.instance_113}]},1).to({state:[{t:this.instance_114}]},1).to({state:[{t:this.instance_115}]},1).to({state:[{t:this.instance_116}]},1).to({state:[{t:this.instance_117}]},1).to({state:[{t:this.instance_118}]},1).to({state:[{t:this.instance_119}]},1).to({state:[{t:this.instance_120}]},1).to({state:[{t:this.instance_121}]},1).wait(6));

	// レイヤー 2
	this.instance_122 = new lib.clear21();
	this.instance_122.setTransform(0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_122}]},19).wait(6));

	// レイヤー 6
	this.instance_123 = new lib.isLight("synched",0);
	this.instance_123.setTransform(313.1,243.1,0.502,0.502,0,0,0,229.1,229.1);
	this.instance_123._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_123).wait(16).to({startPosition:0,_off:false},0).to({scaleX:1,scaleY:1},3).to({scaleX:1.52,scaleY:1.52,alpha:0.148},3).to({_off:true},1).wait(2));

	// レイヤー 4
	this.instance_124 = new lib.mcFlash();
	this.instance_124.setTransform(320,300,1,1,0,0,0,320,420);
	this.instance_124.alpha = 0.148;
	this.instance_124._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_124).wait(16).to({_off:false},0).to({alpha:1},3).wait(6));

	// レイヤー 3
	this.instance_125 = new lib.isScreenBlack("synched",0);
	this.instance_125.setTransform(320,300,1,1,0,0,0,320,480);
	this.instance_125.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_125).to({alpha:0.5},3).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-179.9,640,960);


(lib.mcEnd_Get = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{_loop:34},true);

	// timeline functions:
	this.frame_0 = function() {
		this.get_txt.text=get_txt;
	}
	this.frame_74 = function() {
		this.gotoAndPlay("_loop");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(74).call(this.frame_74));

	// レイヤー 8
	this.get_txt = new cjs.Text("", "24px MS PGothic", "#FFFFFF");
	this.get_txt.textAlign = "center";
	this.get_txt.lineHeight = 26;
	this.get_txt.lineWidth = 371;
	this.get_txt.setTransform(155.5,552);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.get_txt}]},34).wait(41));

	// レイヤー 6
	this.instance_126 = new lib.txt_BG();
	this.instance_126.setTransform(-49.9,540);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_126}]},34).wait(41));

	// txt
	this.instance_127 = new lib.mｃCrosshatch1();
	this.instance_127.setTransform(263.8,346.1,0.338,0.338,0,0,0,264.8,141.8);

	this.instance_128 = new lib.mｃCrosshatch2();
	this.instance_128.setTransform(130.6,207.1,0.265,0.265,0,0,0,264.8,265.4);

	this.instance_129 = new lib.mｃCrosshatch2();
	this.instance_129.setTransform(379.1,399.7,0.554,0.554,0,0,0,264.9,265.4);

	this.instance_130 = new lib.mｃCrosshatch2();
	this.instance_130.setTransform(16.1,388.9,0.452,0.452,0,0,0,264.9,265.4);

	this.instance_131 = new lib.mｃCrosshatch2();
	this.instance_131.setTransform(418.5,247,0.295,0.295,0,0,0,264.8,265.3);

	this.instance_132 = new lib.mｃCrosshatch1();
	this.instance_132.setTransform(-104.9,303.8,0.147,0.147);

	this.instance_133 = new lib.mｃCrosshatch1();
	this.instance_133.setTransform(-46,241.3,0.45,0.45,0,0,0,264.8,141.9);

	this.instance_134 = new lib.mｃCrosshatch1();
	this.instance_134.setTransform(407.9,386.1,0.346,0.346,0,0,0,264.8,141.8);

	this.instance_135 = new lib.mｃCrosshatch2();
	this.instance_135.setTransform(-88,260.7,0.651,0.651,0,0,0,264.9,265.4);

	this.instance_136 = new lib.mｃCrosshatch1();
	this.instance_136.setTransform(488.3,279.1,0.41,0.41,0,0,0,264.8,141.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_136},{t:this.instance_135},{t:this.instance_134},{t:this.instance_133},{t:this.instance_132},{t:this.instance_131},{t:this.instance_130},{t:this.instance_129},{t:this.instance_128},{t:this.instance_127}]},34).wait(41));

	// レイヤー 3
	this.instance_137 = new lib.isIem("synched",0);
	this.instance_137.setTransform(178,360.9,0.321,0.321,0,0,0,143,142.8);
	this.instance_137.alpha = 0.391;
	this.instance_137._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_137).wait(26).to({startPosition:0,_off:false},0).to({regY:143,scaleX:1,scaleY:1,x:179,y:239,alpha:1},8).to({y:223},20).to({y:239},20).wait(1));

	// レイヤー 9 コピー
	this.instance_138 = new lib.box_flash01();
	this.instance_138.setTransform(-137.9,-4.9);

	this.instance_139 = new lib.box_flash02();
	this.instance_139.setTransform(-139.9,-26.9);

	this.instance_140 = new lib.box_flash03();
	this.instance_140.setTransform(-140.9,-40.9);

	this.instance_141 = new lib.box_flash04();
	this.instance_141.setTransform(-138.9,-64.9);

	this.instance_142 = new lib.box_flash05();
	this.instance_142.setTransform(-139.9,-70.9);

	this.instance_143 = new lib.box_flash06();
	this.instance_143.setTransform(-138.9,-87.9);

	this.instance_144 = new lib.box_flash07();
	this.instance_144.setTransform(-136.9,-99.9);

	this.instance_145 = new lib.box_flash08();
	this.instance_145.setTransform(-138.9,-97.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_138}]},26).to({state:[{t:this.instance_139}]},1).to({state:[{t:this.instance_140}]},1).to({state:[{t:this.instance_141}]},1).to({state:[{t:this.instance_142}]},1).to({state:[{t:this.instance_143}]},1).to({state:[{t:this.instance_144}]},1).to({state:[{t:this.instance_145}]},1).to({state:[]},1).wait(41));

	// レイヤー 9
	this.instance_146 = new lib.isBoxFlash("synched",0);
	this.instance_146.setTransform(181.5,249,1,1,0,0,0,318.5,360);
	this.instance_146._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_146).wait(34).to({startPosition:0,_off:false},0).to({scaleX:1.1,scaleY:1.1,alpha:0.391},20).to({scaleX:1,scaleY:1,alpha:1},20).wait(1));

	// レイヤー 1 コピー
	this.instance_147 = new lib.isBox1("synched",0);
	this.instance_147.setTransform(143.6,111.5,1,1,22.7,0,0,136.6,170.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_147).to({regX:136.5,x:143.5,y:458.4},3).to({regX:136.4,scaleX:1,scaleY:1,rotation:22.6,x:143.4,y:378},2).to({regY:170.4,scaleX:1,scaleY:1,rotation:22.7,x:143.5,y:348.4},2).to({regX:136.5,regY:170.5,y:458.4},3).to({regY:170.4,rotation:0,x:169,y:494.5},2).wait(2).to({startPosition:0},0).to({scaleX:1.29,scaleY:0.58},4).to({regX:136.4,scaleX:1,scaleY:1,rotation:22.7,x:143.5,y:365.4},3).to({_off:true},1).wait(53));

	// レイヤー 1
	this.instance_148 = new lib.isBox2("synched",0);
	this.instance_148.setTransform(79.5,113.5,1,1,9.5,0,0,29.5,23.4);
	this.instance_148._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_148).wait(22).to({startPosition:0,_off:false},0).to({rotation:0,x:62.5,y:289.8},4).wait(49));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.4,-98.4,328.3,297.2);


(lib.mcEnd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{_end1:1,_end2:2,_end3:3,_end4:4,_end5:5},true);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5));

	// lvup
	this.mcLvup = new lib.mcLvup();
	this.mcLvup.setTransform(152.9,-152.8,1,1,0,0,0,152.9,27.1);
	this.mcLvup._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcLvup).wait(1).to({_off:false},0).to({_off:true},1).wait(4));

	// raid
	this.mcBoss = new lib.mcBoss();
	this.mcBoss._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcBoss).wait(2).to({_off:false},0).to({_off:true},1).wait(3));

	// clear
	this.instance_149 = new lib.mcClear();
	this.instance_149.setTransform(320,240,1,1,0,0,0,320,240);
	this.instance_149._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_149).wait(3).to({_off:false},0).to({_off:true},1).wait(2));

	// clear
	this.instance_150 = new lib.mcEnagy();
	this.instance_150.setTransform(0,98);
	this.instance_150._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_150).wait(4).to({_off:false},0).to({_off:true},1).wait(1));

	// get
	this.instance_151 = new lib.mcEnd_Get();
	this.instance_151.setTransform(163.5,-81.4,1,1,0,0,0,23.5,18.5);
	this.instance_151._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_151).wait(5).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.mcLoading = function() {
	this.initialize();

	// mcLoadTxt
	this.instance_152 = new lib.mcLoadTxt();
	this.instance_152.setTransform(314.7,541.5,1.6,1.6,0,0,0,41.3,9.1);

	// loading_set
	this.instance_153 = new lib.loading_set();
	this.instance_153.setTransform(313.2,481.1,0.693,0.693);

	// レイヤー 1
	this.instance_154 = new lib.isScreen("synched",0);
	this.instance_154.setTransform(120,160,1,1,0,0,0,120,160);

	this.addChild(this.instance_154,this.instance_153,this.instance_152);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,960);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;