(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.union = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{_skip:52,_jump:68});

	// timeline functions:
	this.frame_0 = function() {
		callback_url=callback_url;
		base_url=base_url;
		skill_flg=skill_flg;
		
		lvup_flg=lvup_flg;
		
		_lv=_lv;
		_hp=_hp;
		_at=_at;
		_df=_df;
		_wis=_wis;
		_agi=_agi;
		
		ms_txt=ms_txt;
		this.stop();
	}
	this.frame_71 = function() {
		this.stop();
	}
	this.frame_72 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(71).call(this.frame_71).wait(1).call(this.frame_72));

	// jump_URL
	this.mc2 = new lib.mc_link2();
	this.mc2.setTransform(659,4,1,1,0,0,0,0,4);
	this.mc2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mc2).wait(55).wait(1).to({_off:false},0).wait(17));

	// button
	this.instance = new lib.Button();
	this.instance.setTransform(8.3,8.3,1,1,0,0,0,8.3,8.3);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.instance_1 = new lib.mcLoading();
	this.instance_1.setTransform(120,160,1,1,0,0,0,120,160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[]},1).to({state:[{t:this.instance}]},5).to({state:[]},49).to({state:[]},1).to({state:[{t:this.instance}]},12).to({state:[{t:this.instance_1}]},4).wait(1));

	// next
	this.instance_2 = new lib.mcNext();
	this.instance_2.setTransform(320,936,1,1,0,0,0,320,24);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(67).to({y:934,_off:false},0).to({_off:true},4).wait(1));

	// frame
	this.instance_3 = new lib.frame();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},68).to({state:[]},4).wait(1));

	// window
	this.mcWindow = new lib.mcWindow();
	this.mcWindow.setTransform(320,738.5,1,1,0,0,0,320,221.5);

	this.timeline.addTween(cjs.Tween.get(this.mcWindow).to({y:1061.5},4).to({_off:true},1).wait(68));

	// lvup
	this.mcLvup = new lib.mcLvup();
	this.mcLvup.setTransform(320,805.5,1,1,0,0,0,320,165.5);
	this.mcLvup._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcLvup).wait(71).to({_off:false},0).to({_off:true},1).wait(1));

	// mcSkill
	this.mcSkill = new lib.mcSkill();
	this.mcSkill._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcSkill).wait(59).to({_off:false},0).to({_off:true},13).wait(1));

	// effect
	this.instance_4 = new lib.flash1();

	this.instance_5 = new lib.flash2();

	this.instance_6 = new lib.flash3();

	this.instance_7 = new lib.flash4();

	this.instance_8 = new lib.flash5();

	this.instance_9 = new lib.flash6();

	this.instance_10 = new lib.flash7();

	this.instance_11 = new lib.flash8();

	this.instance_12 = new lib.flash9();

	this.instance_13 = new lib.flash10();

	this.instance_14 = new lib.flash11();

	this.instance_15 = new lib.flash12();

	this.instance_16 = new lib.flash13();

	this.instance_17 = new lib.flash14();

	this.instance_18 = new lib.flash15();

	this.instance_19 = new lib.flash16();

	this.instance_20 = new lib.flash17();

	this.instance_21 = new lib.flash18();

	this.instance_22 = new lib.flash19();

	this.instance_23 = new lib.flash20();

	this.instance_24 = new lib.flash21();

	this.instance_25 = new lib.flash22();

	this.instance_26 = new lib.flash23();

	this.instance_27 = new lib.flash24();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},43).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[]},1).to({state:[]},4).wait(1));

	// レイヤー 5
	this.instance_28 = new lib.isScreen("synched",0);
	this.instance_28.setTransform(120,200,1,1,0,0,0,120,200);
	this.instance_28.alpha = 0.199;
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(51).to({startPosition:0,_off:false},0).to({alpha:1},4).wait(1).to({alpha:0.879},0).to({alpha:0.25},4).to({_off:true},1).wait(12));

	// crosshatch
	this.instance_29 = new lib.mｃCrosshatch1();
	this.instance_29.setTransform(586.9,468.4,0.551,0.551,0,0,0,264.8,141.8);

	this.instance_30 = new lib.mｃCrosshatch2();
	this.instance_30.setTransform(66.3,241.6,0.389,0.389,0,0,0,264.7,265.3);

	this.instance_31 = new lib.mｃCrosshatch2();
	this.instance_31.setTransform(566.1,590.1,0.903,0.903,0,0,0,264.9,265.4);

	this.instance_32 = new lib.mｃCrosshatch2();
	this.instance_32.setTransform(183.3,584.2,0.665,0.665,0,0,0,264.9,265.4);

	this.instance_33 = new lib.mｃCrosshatch2();
	this.instance_33.setTransform(532.7,308.5,0.48,0.48,0,0,0,264.8,265.4);

	this.instance_34 = new lib.mｃCrosshatch1();
	this.instance_34.setTransform(45,509,0.216,0.216);

	this.instance_35 = new lib.mｃCrosshatch1();
	this.instance_35.setTransform(111,389,0.662,0.662,0,0,0,264.8,141.9);

	this.instance_36 = new lib.mｃCrosshatch1();
	this.instance_36.setTransform(474.6,567.9,0.564,0.564,0,0,0,264.8,141.9);

	this.instance_37 = new lib.mｃCrosshatch2();
	this.instance_37.setTransform(49.1,479.3,0.959,0.959,0,0,0,264.9,265.4);

	this.instance_38 = new lib.mｃCrosshatch1();
	this.instance_38.setTransform(602.4,362.5,0.669,0.669,0,0,0,264.8,141.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_38,p:{y:362.5}},{t:this.instance_37,p:{y:479.3}},{t:this.instance_36,p:{y:567.9}},{t:this.instance_35,p:{y:389}},{t:this.instance_34,p:{y:509}},{t:this.instance_33,p:{y:308.5}},{t:this.instance_32,p:{y:584.2}},{t:this.instance_31,p:{y:590.1}},{t:this.instance_30,p:{y:241.6}},{t:this.instance_29,p:{y:468.4}}]}).to({state:[]},43).to({state:[{t:this.instance_38,p:{y:316.5}},{t:this.instance_37,p:{y:433.3}},{t:this.instance_36,p:{y:521.9}},{t:this.instance_35,p:{y:343}},{t:this.instance_34,p:{y:463}},{t:this.instance_33,p:{y:262.5}},{t:this.instance_32,p:{y:538.2}},{t:this.instance_31,p:{y:544.1}},{t:this.instance_30,p:{y:195.6}},{t:this.instance_29,p:{y:422.4}}]},13).to({state:[]},16).wait(1));

	// cardsoul
	this.instance_39 = new lib.mcCardsoul();
	this.instance_39.setTransform(315.2,422.2,2.124,2.124,0,0,0,245.2,247.2);
	this.instance_39.alpha = 0.352;
	this.instance_39._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(1).to({_off:false},0).to({scaleX:1.56,scaleY:1.56,x:315.3,alpha:1},2).to({scaleX:1,scaleY:1,x:315.2},2).wait(4).to({scaleY:0.53,y:595.1},2).to({regX:245.3,scaleX:0.41,scaleY:1.33,y:450.8},1).to({y:224.5},3).to({scaleX:1,scaleY:1,x:316,y:132.7},1).to({y:111.3},7).to({x:301.4,y:135.4},8).to({x:167.4,y:193.5},1).to({x:179.3,y:316.3},1).to({x:318.7,y:373},1).to({x:402.6,y:400.4},1).to({x:484.3,y:431.2},1).to({x:559.2,y:474.9},1).to({x:597.2,y:550.6},1).to({x:584.6,y:637.3},1).to({x:538.9,y:702.6},1).to({x:470.6,y:744.1},1).to({x:391.9,y:759.8},1).to({x:322.3,y:743.6},1).to({regX:245.2,regY:247.3,scaleX:1.51,scaleY:1.51,x:322.2,y:743.8},3).to({scaleX:2.07,scaleY:2.07,y:545.8},4).to({_off:true},1).wait(22));

	// card
	this.instance_40 = new lib.isCard("synched",0);
	this.instance_40.setTransform(320,450,1,1,0,0,0,320,400);

	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(1).to({startPosition:0},0).to({scaleX:0.51,scaleY:0.51,alpha:0},4).to({_off:true},1).wait(50).to({regX:320.1,scaleX:0.63,scaleY:0.63,x:320.1,y:363.7,alpha:1,_off:false},0).to({regX:320,scaleX:1,scaleY:1,x:320,y:450},4).to({y:420},3).to({y:450},4).wait(6));

	// レイヤー 2
	this.mcAllCard = new lib.mcAllCard3();
	this.mcAllCard.setTransform(80,621.5,1,0.318);
	this.mcAllCard.alpha = 0.191;
	this.mcAllCard._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcAllCard).wait(22).to({_off:false},0).to({scaleY:1,y:280,alpha:1},3).to({_off:true},26).wait(22));

	// magic
	this.instance_41 = new lib.mcMagic();
	this.instance_41.setTransform(318.6,686.3,1.069,0.42,0,0,0,320.2,166.6);
	this.instance_41.alpha = 0.25;
	this.instance_41._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(17).to({_off:false},0).to({alpha:1},5).wait(51));

	// BG
	this.instance_42 = new lib.isBG("synched",0);
	this.instance_42.setTransform(120,200,1,1,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_42}]}).wait(73));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.7,0,653.8,960);


// symbols:
(lib.BG_sp = function() {
	this.initialize(img.BG_sp);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,960);


(lib.cardA_640x800 = function() {
	this.initialize(img.cardA_640x800);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,800);


(lib.cardB_640x800 = function() {
	this.initialize(img.cardB_640x800);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,800);


(lib.crosshatch = function() {
	this.initialize(img.crosshatch);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,260,260);


(lib.flash1 = function() {
	this.initialize(img.flash1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,960);


(lib.flash10 = function() {
	this.initialize(img.flash10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,960);


(lib.flash11 = function() {
	this.initialize(img.flash11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,960);


(lib.flash12 = function() {
	this.initialize(img.flash12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,960);


(lib.flash13 = function() {
	this.initialize(img.flash13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,960);


(lib.flash14 = function() {
	this.initialize(img.flash14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,960);


(lib.flash15 = function() {
	this.initialize(img.flash15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,960);


(lib.flash16 = function() {
	this.initialize(img.flash16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,960);


(lib.flash17 = function() {
	this.initialize(img.flash17);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,960);


(lib.flash18 = function() {
	this.initialize(img.flash18);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,960);


(lib.flash19 = function() {
	this.initialize(img.flash19);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,960);


(lib.flash2 = function() {
	this.initialize(img.flash2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,960);


(lib.flash20 = function() {
	this.initialize(img.flash20);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,960);


(lib.flash21 = function() {
	this.initialize(img.flash21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,960);


(lib.flash22 = function() {
	this.initialize(img.flash22);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,960);


(lib.flash23 = function() {
	this.initialize(img.flash23);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,960);


(lib.flash24 = function() {
	this.initialize(img.flash24);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,960);


(lib.flash3 = function() {
	this.initialize(img.flash3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,960);


(lib.flash4 = function() {
	this.initialize(img.flash4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,960);


(lib.flash5 = function() {
	this.initialize(img.flash5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,960);


(lib.flash6 = function() {
	this.initialize(img.flash6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,960);


(lib.flash7 = function() {
	this.initialize(img.flash7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,960);


(lib.flash8 = function() {
	this.initialize(img.flash8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,960);


(lib.flash9 = function() {
	this.initialize(img.flash9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,960);


(lib.frame = function() {
	this.initialize(img.frame);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,960);


(lib.lv_txt = function() {
	this.initialize(img.lv_txt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,82);


(lib.lvup_bg = function() {
	this.initialize(img.lvup_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,293);


(lib.lvup01 = function() {
	this.initialize(img.lvup01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,322);


(lib.lvup02 = function() {
	this.initialize(img.lvup02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,322);


(lib.lvup03 = function() {
	this.initialize(img.lvup03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,322);


(lib.lvup04 = function() {
	this.initialize(img.lvup04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,322);


(lib.lvup05 = function() {
	this.initialize(img.lvup05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,322);


(lib.lvup06 = function() {
	this.initialize(img.lvup06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,322);


(lib.lvup07 = function() {
	this.initialize(img.lvup07);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,322);


(lib.lvup08 = function() {
	this.initialize(img.lvup08);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,322);


(lib.lvup09 = function() {
	this.initialize(img.lvup09);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,322);


(lib.lvup10 = function() {
	this.initialize(img.lvup10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,322);


(lib.magic = function() {
	this.initialize(img.magic);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,640);


(lib.next = function() {
	this.initialize(img.next);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,48);


(lib.skill = function() {
	this.initialize(img.skill);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,271);


(lib.soul01 = function() {
	this.initialize(img.soul01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,488,480);


(lib.soul02 = function() {
	this.initialize(img.soul02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,488,480);


(lib.soul03 = function() {
	this.initialize(img.soul03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,488,480);


(lib.soul04 = function() {
	this.initialize(img.soul04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,488,480);


(lib.soul05 = function() {
	this.initialize(img.soul05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,488,480);


(lib.soul06 = function() {
	this.initialize(img.soul06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,488,480);


(lib.soul07 = function() {
	this.initialize(img.soul07);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,488,480);


(lib.soul08 = function() {
	this.initialize(img.soul08);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,488,480);


(lib.soul09 = function() {
	this.initialize(img.soul09);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,488,480);


(lib.soul10 = function() {
	this.initialize(img.soul10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,488,480);


(lib.soul11 = function() {
	this.initialize(img.soul11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,488,480);


(lib.soul12 = function() {
	this.initialize(img.soul12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,488,480);


(lib.soul13 = function() {
	this.initialize(img.soul13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,488,480);


(lib.txt_bg1 = function() {
	this.initialize(img.txt_bg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,590,40);


(lib.txt_bg2 = function() {
	this.initialize(img.txt_bg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,590,40);


(lib.txt_bg3 = function() {
	this.initialize(img.txt_bg3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,590,40);


(lib.window = function() {
	this.initialize(img.window);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,443);


(lib.Button = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("Egx/BLAMAAAiV/MBj+AAAMAAACV/g");
	this.shape.setTransform(320,480);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,960);


(lib.mcWindow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		ms_txt=ms_txt;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0));

	// レイヤー 2
	this.text = new cjs.Text("", "30px MS PGothic", "#FFFFFF");
	this.text.lineHeight = 32;
	this.text.lineWidth = 396;
	this.text.setTransform(3,220);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).wait(1));

	// レイヤー 1
	this.instance = new lib.window();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,443);


(lib.mcCardsoul = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.soul01();

	this.instance_1 = new lib.soul02();

	this.instance_2 = new lib.soul03();

	this.instance_3 = new lib.soul04();

	this.instance_4 = new lib.soul05();

	this.instance_5 = new lib.soul06();

	this.instance_6 = new lib.soul07();

	this.instance_7 = new lib.soul08();

	this.instance_8 = new lib.soul09();

	this.instance_9 = new lib.soul10();

	this.instance_10 = new lib.soul11();

	this.instance_11 = new lib.soul12();

	this.instance_12 = new lib.soul13();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,488,480);


(lib.mc_link2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{ex:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		getURL(base_url+'?guid=ON&url='+callback_url,"_self","GET");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1));

	// as
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgyAvIAAhdIBlAAIAABdg");
	this.shape.setTransform(5.1,4.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,10.3,9.5);


(lib.mcLoadBat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// グループ: 1 オブジェクト
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AhOLcQhmiaiMg7Qh3gykNgSQiHgKhvABQAXhFgDhkQgHjJiAieQhDhUg8gOQhbgVixBKQB0i2gdiNQgqjNlKjUQJbAzGAE5QFjEiDaIvQAZgWARgiQAig+ATiRQAjAZAhBMQARAmAJAgQAJggARgnQAihMAigZQAZCWAaA3QAJATAkAmQDZouFlkiQF/k6JagzQlIDUgrDOQgdCMB0C2QixhKhbAWQg8AOhDBTQiACegHDJQgDBlAXBEQhsgDiDAHQkFANh3AyQiOA7hvCaQhIBjgPA2QgWhAg0hNg");
	this.shape.setTransform(119.5,102.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AJ7HwQiaiJicgMQiYgNhmB0QgzA6gUA8QgTg8gzg6Qhmh0iXANQidAMiaCJQhNBEguBBQAChGgQhFQggiMhegBQhdAAjBBOQhgAmhNAmQAkhQAJhWQASiuiJghQibgmilAIQkWAOkGCPQCgilDQicQC4iKDChxQD8iTB+g2QBDgeDyhTQg7AcgmBOQgpBTACBgQAFBsA+BdQBJBrCPBCQEdCICdhWQCFhHApjmQAiAZAjBMQAQAmAJAhQAKghARgmQAhhMAigZQAqDmCFBHQCdBWEdiIQCPhCBJhrQA+hdAEhsQAEhggqhTQgnhOg7gcQDyBTBDAeQB/A2D7CTQDEBxC2CKQDRCcCgClQkHiPkVgOQikgIicAmQiJAhASCuQAJBWAlBQQhOgmhggmQjAhOheAAQheABggCMQgRBFADBGQguhBhNhEg");
	this.shape_1.setTransform(119.5,120.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AYmGWQiwjBhyhEQhAgngdBRQgPAogCAwQg3hfhJhfQiUi8heAAQhdAAgSBfQgJAtAKAwQgeg6g9g6Qh6h4idgMQiYgMhjBuQg2A8gTA9QgTg6gzg6QhmhziXAMQicAMh7B4Qg9A6geA6QAKgwgJgtQgRhfheAAQheAAiTC8QhKBfg3BfQgCgwgPgoQgdhRhAAnQgrAZhMBDQhYBOhTBbQjhD1hBDMQAOkmCBlwQB0lHCDi9QBKhrB9hrQB6hnCNhOQCRhRCCghQCLglBeAaQg3AZglA8QgjA5gGBEQgGBGAdA2QAgA9BEAZQCUA2ByhOQB5hTAljLQAiAZAhBMQARAmAJAhQAJghARgmQAihMAigZQAlDLB5BTQByBOCUg2QBEgZAgg9QAdg2gGhGQgGhEgjg5Qglg8g3gZQBegaCLAlQCCAhCRBRQCNBOB6BnQB9BrBKBrQCDC9B0FHQCBFwAOEmQhBjMjhj1g");
	this.shape_2.setTransform(119.5,120.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AJMF+QhriFicgNQiYgMhmB0QgzA6gUA8QgTg8gzg6Qhmh0iXAMQidANhrCFQg2BDgWBAQgXg/gtg/QhaiAhugGQiRgJjaA2QhtAahQAdQAbg0AGg7QANh2hjgmQh2gsjZAGQkbAIjlBuQDniPBwhAQCRhWCrhcQD/iICpg8QAugREVhQQgFBrCjCnQCeCiCUA2QCUA1ByhMQB5hTAkjMQAjAZAhBNQARAmAJAhQAJghARgmQAihNAigZQAlDMB5BTQBzBMCUg1QCUg2CdiiQCjingGhrQEfBUAjANQCsA9D9CHQCsBcCRBWQBxBADnCPQjmhukbgIQjZgGh1AsQhlAmAOB2QAHA7AbA0QhQgdhtgaQjbg2iSAJQhuAGhZCAQgtA/gWA/QgXhAg2hDg");
	this.shape_3.setTransform(119.5,120.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},3).to({state:[{t:this.shape_2}]},3).to({state:[{t:this.shape_3}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.4,15.1,350,174.8);


(lib.isDot = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFE566","#F0CD0E","#955100","#FFE566","#B77F06"],[0,0.165,0.443,0.447,0.988],0,6,0,-7.1).s().p("AgNAOQgFgGgBgIQABgHAFgGQAGgFAHgBQAIABAGAFQAFAGABAHQgBAIgFAGQgGAFgIABQgHgBgGgFg");
	this.shape.setTransform(3,3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1,1,4,4);


(lib.isTxtBg3 = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.txt_bg3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,590,40);


(lib.isTxtBg2 = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.txt_bg2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,590,40);


(lib.isTxtBg1 = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.txt_bg1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,590,40);


(lib.isSkill = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.skill();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,271);


(lib.isScreen = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Egx/BLAMAAAiV/MBj+AAAMAAACV/g");
	this.shape.setTransform(320,480);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,960);


(lib.isNext = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.next();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,48);


(lib.isMaterial = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.cardB_640x800();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,800);


(lib.isMagic = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.magic();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,640);


(lib.isLvupBg = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.lvup_bg();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,293);


(lib.isCrosshatch = function() {
	this.initialize();

	// レイヤー 3
	this.instance = new lib.crosshatch();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,260,260);


(lib.isCard = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.cardA_640x800();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,800);


(lib.isBG = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.BG_sp();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,960);


(lib.mcSkill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{_off:0,_on:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		if(skill_flg==1)
		{
		
		this.gotoAndPlay("_on");
		}
	}
	this.frame_30 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(30).call(this.frame_30));

	// レイヤー 3
	this.instance = new lib.isSkill("synched",0);
	this.instance.setTransform(320.1,369.9,0.766,0.766,0,0,0,320.1,135.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0,_off:false},0).to({regX:320,regY:135.5,scaleX:1,scaleY:1,x:320,y:435.5},5).wait(16).to({startPosition:0},0).to({y:465.5,alpha:0.25},7).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.mcNext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.isNext("synched",0);
	this.instance.setTransform(320,24,1,1,0,0,0,320,24);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.352},15).to({alpha:1},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,48);


(lib.mcLvup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		if(lvup_flg==1){
		
		}
	}
	this.frame_1 = function() {
		_lv=_lv;
		_hp=_hp;
		_at=_at;
		_df=_df;
		_wis=_wis;
		_agi=_agi;
	}
	this.frame_48 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(47).call(this.frame_48).wait(12));

	// effect
	this.instance = new lib.lvup01();
	this.instance.setTransform(0,-99.9);

	this.instance_1 = new lib.lvup02();
	this.instance_1.setTransform(0,-99.9);

	this.instance_2 = new lib.lvup03();
	this.instance_2.setTransform(0,-99.9);

	this.instance_3 = new lib.lvup04();
	this.instance_3.setTransform(0,-99.9);

	this.instance_4 = new lib.lvup05();
	this.instance_4.setTransform(0,-99.9);

	this.instance_5 = new lib.lvup06();
	this.instance_5.setTransform(0,-99.9);

	this.instance_6 = new lib.lvup07();
	this.instance_6.setTransform(0,-99.9);

	this.instance_7 = new lib.lvup08();
	this.instance_7.setTransform(0,-99.9);

	this.instance_8 = new lib.lvup09();
	this.instance_8.setTransform(0,-99.9);

	this.instance_9 = new lib.lvup10();
	this.instance_9.setTransform(0,-99.9);

	this.instance_10 = new lib.lv_txt();
	this.instance_10.setTransform(69,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},12).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).wait(39));

	// _hp
	this.text = new cjs.Text("000000(+000)", "30px Arial", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 32;
	this.text.lineWidth = 226;
	this.text.setTransform(503,200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},29).to({state:[{t:this.text}]},3).wait(29));

	// _at
	this.text_1 = new cjs.Text("000000(+000)", "30px Arial", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 32;
	this.text_1.lineWidth = 226;
	this.text_1.setTransform(223,200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},29).to({state:[{t:this.text_1}]},3).wait(29));

	// txtbg1
	this.instance_11 = new lib.isTxtBg3("synched",0);
	this.instance_11.setTransform(325,215,1,1,0,0,0,295,20);
	this.instance_11.alpha = 0.25;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(29).to({startPosition:0,_off:false},0).to({alpha:1},3).wait(29));

	// _hp
	this.text_2 = new cjs.Text("000000(+000)", "30px Arial", "#FFFFFF");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 32;
	this.text_2.lineWidth = 226;
	this.text_2.setTransform(503,155);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_2}]},29).wait(32));

	// _at
	this.text_3 = new cjs.Text("000000(+000)", "30px Arial", "#FFFFFF");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 32;
	this.text_3.lineWidth = 226;
	this.text_3.setTransform(223,155);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_3}]},29).wait(32));

	// txtbg1
	this.instance_12 = new lib.isTxtBg2("synched",0);
	this.instance_12.setTransform(325,170,1,1,0,0,0,295,20);
	this.instance_12.alpha = 0.25;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(26).to({startPosition:0,_off:false},0).to({alpha:1},3).wait(32));

	// _hp
	this.text_4 = new cjs.Text("000000(+000)", "30px Arial", "#FFFFFF");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 32;
	this.text_4.lineWidth = 226;
	this.text_4.setTransform(503,110);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_4}]},26).wait(35));

	// _lv
	this.text_5 = new cjs.Text("000000(+000)", "30px Arial", "#FFFFFF");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 32;
	this.text_5.lineWidth = 226;
	this.text_5.setTransform(223,110);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_5}]},26).wait(35));

	// txtbg1
	this.instance_13 = new lib.isTxtBg1("synched",0);
	this.instance_13.setTransform(325,125,1,1,0,0,0,295,20);
	this.instance_13.alpha = 0.25;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(23).to({startPosition:0,_off:false},0).to({alpha:1},3).wait(35));

	// bg
	this.instance_14 = new lib.isLvupBg("synched",0);
	this.instance_14.setTransform(320,425.5,1,1,0,0,0,320,165.5);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1).to({startPosition:0,_off:false},0).to({y:165.5},8).to({y:160.9},2).wait(1).to({y:165.5},0).wait(49));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.mｃCrosshatch2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.isCrosshatch("synched",0);
	this.instance.setTransform(264.9,265.5,0.504,0.504,0,0,0,130,130);
	this.instance.alpha = 0.148;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:129.9,y:141.9,alpha:1},9).to({regY:130,y:-12.3},10).to({y:-135.9,alpha:0.148},9).to({_off:true},1).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(199.4,200,130.9,130.9);


(lib.mｃCrosshatch1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 2
	this.instance = new lib.isCrosshatch("synched",0);
	this.instance.setTransform(264.9,265.5,0.504,0.504,0,0,0,130,130);
	this.instance.alpha = 0.148;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16).to({startPosition:0,_off:false},0).to({regY:129.9,y:141.9,alpha:1},8).to({regY:130,y:-12.3},11).to({y:-135.9,alpha:0.148},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.mcAllCard3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_12 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(12).call(this.frame_12));

	// レイヤー 4
	this.instance = new lib.isMaterial("synched",0);
	this.instance.setTransform(240,309,0.553,0.553,0,0,0,320,400);
	this.instance.alpha = 0.578;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:400.1,scaleX:0.71,scaleY:0.71,y:114.1,alpha:0.738},3).to({regY:400,scaleX:0.83,scaleY:0.83,y:246,alpha:1},4).to({y:230},2).to({y:246},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(63.2,88,353.6,442);


(lib.mcLoadTxt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 5
	this.instance = new lib.mcLoadBat();
	this.instance.setTransform(-7.5,-105.4,0.494,0.494);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(25));

	// レイヤー 4
	this.instance_1 = new lib.isDot("synched",0);
	this.instance_1.setTransform(169.9,47.9,2.5,2.5,0,0,0,3,3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({startPosition:0,_off:false},0).wait(14));

	// レイヤー 3
	this.instance_2 = new lib.isDot("synched",0);
	this.instance_2.setTransform(148,47.9,2.5,2.5,0,0,0,3,3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({startPosition:0,_off:false},0).wait(18));

	// レイヤー 2
	this.instance_3 = new lib.isDot("synched",0);
	this.instance_3.setTransform(126.2,47.9,2.5,2.5,0,0,0,3,3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({startPosition:0,_off:false},0).wait(22));

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFE566","#F0CD0E","#955100","#F0CD0E","#FFFFCC","#FFE566","#B77F06"],[0,0.165,0.443,0.455,0.475,0.671,0.988],0,15,0,-14.7).s().p("AiTCgIAAgPIAFAAQARAAAMgLQAIgLAAgTIAAjRQAAgTgIgJQgJgLgUAAIgFAAIAAgPICaAAIAAAPIgHAAQgNAAgMALQgKAJAAATIAADTQAAAnAkAAIAaAAQAfAAAigZQAZgWAXgiIAIACIgcBeg");
	this.shape.setTransform(-58.5,44.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFE566","#F0CD0E","#955100","#F0CD0E","#FFFFCC","#FFE566","#B77F06"],[0,0.165,0.443,0.455,0.475,0.671,0.988],-0.6,13.2,-0.6,-22.2).s().p("AhWBUQghgiAAgyQAAgxAhghQAjghAzAAQAzAAAhAhQAkAhAAAxQAAAygkAiQghAggzAAQgzAAgjgggAgng+QgMAdAAAhQAAAiAMAbQALAsAcAAQAYAAAQgsQAJgbAAgiQAAghgJgdQgQgpgYAAQgcAAgLApg");
	this.shape_1.setTransform(-30.7,49.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFE566","#F0CD0E","#955100","#F0CD0E","#FFFFCC","#FFE566","#B77F06"],[0,0.165,0.443,0.455,0.475,0.671,0.988],0,12.9,0,-23).s().p("AARBfQghAVgkAAQhFAAAAg3QAAgtAogUQAfgOA9gGIAAgaQAAg1geAAQgLAAgLAFQgMAGABAIIACAOQAFAIAAAEQAAAOgLAJQgJAIgNAAQgRAAgIgIQgKgMABgNQAAgbAlgQQAegMAgAAQAjAAAZAMQAfAVAAAjIAABsQAAAYAJAAQANAAAPgRIAHAFQgKAWgLAKQgOALgWAAQgjAAgNgVgAggAIQgWAUAAAaQAAAQAJAOQAJALARAAQARAAANgLIAAhhQgYAFgTAQg");
	this.shape_2.setTransform(-5.3,49.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFE566","#F0CD0E","#955100","#F0CD0E","#FFFFCC","#FFE566","#B77F06"],[0,0.165,0.443,0.455,0.475,0.671,0.988],0.1,15.4,0.1,-23.7).s().p("AhEB0IAAgMQATAAALgNQAJgMAAgPIAAhvQAAgRgJgIQgKgJgPAAIgFAAIAAgOQAwAAAzgUIAACzQAAAPAJAOQALALASAAIAAAMg");
	this.shape_3.setTransform(43.3,49.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FFE566","#F0CD0E","#955100","#F0CD0E","#FFFFCC","#FFE566","#B77F06"],[0,0.165,0.443,0.455,0.475,0.671,0.988],0,17,0,-16.9).s().p("AAbCZQgXAUgXAAQgtAAgeggQgdgiAAgvQAAg2AbgdQAdgjAzAAQAUAAAXALIAAg7QAAgigfAAIAAgKQAzAAAtgbIAAEpQAAAkAgAAIAAAOQhEAAgdAIgAgqgBQgKAbAAAiQAABgAwAAQAEAAALgGQALgIAFgGIAAioQgOgLgPAAQgZAAgPAqg");
	this.shape_4.setTransform(20.8,44);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FFE566","#F0CD0E","#955100","#F0CD0E","#FFFFCC","#FFE566","#B77F06"],[0,0.165,0.443,0.455,0.475,0.671,0.988],-1.7,30.7,-1.7,-6.7).s().p("AgdAfQgNgNAAgSQAAgRANgLQAOgMAQAAQARAAALAMQAOALAAARQAAASgOANQgLAKgRAAQgQAAgOgKg");
	this.shape_5.setTransform(43,31.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FFE566","#F0CD0E","#955100","#F0CD0E","#FFFFCC","#FFE566","#B77F06"],[0,0.165,0.443,0.455,0.475,0.671,0.988],-0.6,17,-0.6,-24.7).s().p("AAFB3IAAgMQAkABAAgoIAAhqQAAgzgkAAQgUAAggARIAACOQAAAlAnAAIAAAMIiNAAIAAgMQAkAAAAglIAAh6QAAgUgIgGQgFgGgSAAIgFAAIAAgMQAfABAUgIQAUgBAfgOIAAAfQAkgWAhAAQBVAAABBSIAABfQAAAoAqgBIAAAMg");
	this.shape_6.setTransform(68.5,48.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#FFE566","#F0CD0E","#955100","#F0CD0E","#FFFFCC","#FFE566","#B77F06"],[0,0.165,0.443,0.455,0.475,0.671,0.988],-0.2,10.3,-0.2,-22.9).s().p("AiEBbQAAgUAagRQgPgQAAgSQAAgUAggUQgXgSAAgfQAAgkAfgUQAdgPAkAAQAoAAAYAUQAXgUAZAAQAPAAANALQAJAJAAAPQAAALgGAJQgIAHgMAAQgOAAgJgJQgFgHgCgLQgEgMgFAAQgGAAgFADQATAUAAAZQAAAkggASQgbASghAAQgkAAgbgQQgLALAAAFQAAANAzACQBDAFAXAFQAzAMAAAoQAAArguALQgZAHg3AAQhsAAAAgygAhqBQQAAAXAkANQAdAMAZAAQBIAAAAggQAAgQgggBQgKgDg1gGQgogCgQgJQgLALAAAKgAgshpQgGAQAAAUQAAAUAGARQAJAXATAAQAQAAAGgXQAHgRAAgUQAAgUgHgQQgGgXgQAAQgTAAgJAXg");
	this.shape_7.setTransform(98.8,52.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.4,-98,211.3,164.4);


(lib.mcLoading = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0));

	// EnterIcon
	this.instance = new lib.mcLoadTxt();
	this.instance.setTransform(308.4,493.5,1,1,0,0,0,41.4,9.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(1));

	// レイヤー 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0.698)","#000000","#000000","rgba(0,0,0,0.698)"],[0.251,0.396,0.6,0.765],0,-304.1,0,304.2).s().p("Egx/BLAMAAAiV/MBj+AAAMAAACV/g");
	this.shape.setTransform(320,480);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,960);


(lib.mcMagic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.isMagic("synched",0);
	this.instance.setTransform(320,320,1,1,0,0,0,320,320);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:90},10).to({rotation:180},10).to({rotation:270.1},10).to({rotation:360},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,640);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;