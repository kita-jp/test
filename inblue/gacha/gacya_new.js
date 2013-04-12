(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.gacya_new = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{_loop:40,_count:96,_skip:97,_jump:105});

	// timeline functions:
	this.frame_0 = function() {
		callback_url=callback_url;
		base_url=base_url;
		rare_num1=rare_num1;
		at_txt1=at_txt1;
		df_txt1=df_txt1;
		up_txt1=up_txt1;
		ms_txt1=ms_txt1;
		rare_num2=rare_num2;
		at_txt2=at_txt2;
		df_txt2=df_txt2;
		up_txt2=up_txt2;
		ms_txt2=ms_txt2;
		rare_num3=rare_num3;
		at_txt3=at_txt3;
		df_txt3=df_txt3;
		up_txt3=up_txt3;
		ms_txt3=ms_txt3;
		ms_txt4=ms_txt4;
		count==1;
	}
	this.frame_40 = function() {
		_count++;
	}
	this.frame_96 = function() {
		this.stop();
		if(_count==3)
		{
		
		this.gotoAndPlay("_skip");
		}
		else 
		{
		
		this.gotoAndPlay("_loop");
		}
	}
	this.frame_97 = function() {
		mcWindow.ms_txt=_comment;
	}
	this.frame_104 = function() {
		this.stop();
	}
	this.frame_105 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(40).call(this.frame_40).wait(56).call(this.frame_96).wait(1).call(this.frame_97).wait(7).call(this.frame_104).wait(1).call(this.frame_105));

	// button
	this.instance = new lib.Button();
	this.instance.setTransform(8.3,8.3,1,1,0,0,0,8.3,8.3);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},40).wait(4).to({_off:false},0).to({_off:true},52).wait(1).to({_off:false},0).to({_off:true},8).wait(1));

	// loading
	this.instance_1 = new lib.mcLoading();
	this.instance_1.setTransform(120,160,1,1,0,0,0,120,160);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(105).to({_off:false},0).wait(1));

	// jump_URL
	this.mc2 = new lib.mc_link2();
	this.mc2.setTransform(640.1,4,1,1,0,0,0,0,4);
	this.mc2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mc2).wait(97).to({_off:false},0).wait(9));

	// card_name
	this.mcRare = new lib.mcRare();

	this.mcUpDm = new lib.mcUpDm();
	this.mcUpDm.setTransform(331,345.1,1.421,1.421,-25.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.mcUpDm},{t:this.mcRare}]},42).to({state:[]},55).wait(9));

	// txt_Effect
	this.instance_2 = new lib.effect1();
	this.instance_2.setTransform(0,220);

	this.instance_3 = new lib.effect2();
	this.instance_3.setTransform(0,220);

	this.instance_4 = new lib.effect3();
	this.instance_4.setTransform(0,220);

	this.instance_5 = new lib.effect4();
	this.instance_5.setTransform(0,220);

	this.instance_6 = new lib.effect5();
	this.instance_6.setTransform(0,220);

	this.instance_7 = new lib.effect6();
	this.instance_7.setTransform(0,220);

	this.instance_8 = new lib.effect7();
	this.instance_8.setTransform(0,220);

	this.instance_9 = new lib.effect8();
	this.instance_9.setTransform(0,220);

	this.instance_10 = new lib.effect9();
	this.instance_10.setTransform(0,220);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[]},1).wait(97));

	// txt
	this.instance_11 = new lib.isTxt1("synched",0);
	this.instance_11.setTransform(320,401.1,0.806,0.806,0,0,0,320,228.1);
	this.instance_11.alpha = 0.34;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(4).to({startPosition:0,_off:false},0).to({scaleX:1,scaleY:1,alpha:1},5).wait(22).to({startPosition:0},0).to({scaleX:1.54,scaleY:1.54,y:401.2,alpha:0.199},5).to({_off:true},1).wait(69));

	// window
	this.mcWindow = new lib.mcWindow();
	this.mcWindow.setTransform(120,745.5,1,1,0,0,0,120,33.5);
	this.mcWindow._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcWindow).wait(44).to({_off:false},0).wait(53).to({alpha:0},0).wait(1).to({alpha:1},0).to({_off:true},7).wait(1));

	// crosshatch
	this.instance_12 = new lib.mｃCrosshatch1();
	this.instance_12.setTransform(586.9,506.5,0.551,0.551,0,0,0,264.8,141.8);

	this.instance_13 = new lib.mｃCrosshatch2();
	this.instance_13.setTransform(66.3,279.6,0.389,0.389,0,0,0,264.7,265.3);

	this.instance_14 = new lib.mｃCrosshatch2();
	this.instance_14.setTransform(566.1,628.2,0.903,0.903,0,0,0,264.9,265.4);

	this.instance_15 = new lib.mｃCrosshatch2();
	this.instance_15.setTransform(183.3,622.2,0.665,0.665,0,0,0,264.9,265.4);

	this.instance_16 = new lib.mｃCrosshatch2();
	this.instance_16.setTransform(532.7,346.6,0.48,0.48,0,0,0,264.8,265.4);

	this.instance_17 = new lib.mｃCrosshatch1();
	this.instance_17.setTransform(45,547,0.216,0.216);

	this.instance_18 = new lib.mｃCrosshatch1();
	this.instance_18.setTransform(111,427.1,0.662,0.662,0,0,0,264.8,141.9);

	this.instance_19 = new lib.mｃCrosshatch1();
	this.instance_19.setTransform(474.6,606,0.564,0.564,0,0,0,264.8,141.9);

	this.instance_20 = new lib.mｃCrosshatch2();
	this.instance_20.setTransform(49.1,517.3,0.959,0.959,0,0,0,264.9,265.4);

	this.instance_21 = new lib.mｃCrosshatch1();
	this.instance_21.setTransform(602.4,400.6,0.669,0.669,0,0,0,264.8,141.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12}]},9).to({state:[]},28).to({state:[{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12}]},14).to({state:[]},46).to({state:[{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12}]},7).to({state:[]},1).wait(1));

	// レイヤー 4
	this.instance_22 = new lib.isEffectFlash("synched",0);
	this.instance_22.setTransform(320,480,1,1,0,0,0,320,480);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(40).to({startPosition:0,_off:false},0).to({scaleX:1.65,scaleY:1.65},2).to({regX:320.1,scaleX:1.77,scaleY:1.77,x:320.2,y:479.9,alpha:0.699},2).to({regX:320,scaleX:1.9,scaleY:1.9,x:320,y:480,alpha:0.391},2).to({_off:true},1).wait(50).to({scaleX:1,scaleY:1,alpha:1,_off:false},0).to({scaleX:1.65,scaleY:1.65},2).to({scaleX:1.9,scaleY:1.9,alpha:0.391},4).to({_off:true},1).wait(2));

	// cardA
	this.instance_23 = new lib.isCardA("synched",0);
	this.instance_23.setTransform(246.6,468,0.305,0.305,0,0,0,120.2,120);
	this.instance_23.alpha = 0.148;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).to({regX:120.1,scaleX:0.68,scaleY:0.68,x:156.9,y:474.2,alpha:0.32},9).to({regY:120.1,scaleX:0.91,scaleY:0.91,x:99.8,y:478.3,alpha:0.301},22).to({scaleX:1.83,scaleY:1.83,x:-120.2,y:493.6,alpha:0.09},5).to({_off:true},1).wait(60).to({regX:120.2,regY:120.2,scaleX:0.15,scaleY:0.15,x:283.3,y:351.2,alpha:1,_off:false},0).to({scaleX:0.38,scaleY:0.38,x:228.3,y:232.7},3).to({regY:119.9,scaleX:0.59,scaleY:0.59,x:161.4,y:296.2},3).wait(3));

	// cardC
	this.instance_24 = new lib.isCardC("synched",0);
	this.instance_24.setTransform(318.8,256.8,0.305,0.305,0,0,0,70.1,69.9);
	this.instance_24.alpha = 0.148;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).to({scaleX:0.68,scaleY:0.68,x:317.5,y:4.8,alpha:0.32},9).to({scaleX:0.91,scaleY:0.91,x:316.6,y:-155.4,alpha:0.301},22).to({regX:70,scaleX:1.83,scaleY:1.83,x:313,y:-773.9,alpha:0.09},5).to({_off:true},1).wait(60).to({regX:70.3,scaleX:0.15,scaleY:0.15,x:319.4,y:291.3,alpha:1,_off:false},0).to({regY:70,scaleX:0.38,scaleY:0.38,x:318.6,y:83},3).to({regX:70,scaleX:0.59,scaleY:0.59,x:316.6,y:49.6},3).wait(3));

	// cardB
	this.instance_25 = new lib.isCardB("synched",0);
	this.instance_25.setTransform(168.8,256.8,0.305,0.305,0,0,0,70.1,69.9);
	this.instance_25.alpha = 0.148;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).to({regX:70,scaleX:0.68,scaleY:0.68,x:-15.7,y:4.8,alpha:0.32},9).to({regX:70.1,scaleX:0.91,scaleY:0.91,x:-133.2,y:-155.4,alpha:0.301},22).to({regX:70,scaleX:1.83,scaleY:1.83,x:-586.8,y:-773.9,alpha:0.09},5).to({_off:true},1).wait(60).to({regX:69.9,scaleX:0.15,scaleY:0.15,x:244.4,y:291.3,alpha:1,_off:false},0).to({regX:70,regY:70,scaleX:0.38,scaleY:0.38,x:131,y:83},3).to({scaleX:0.59,scaleY:0.59,x:16.6,y:49.6},3).wait(3));

	// mcCard
	this.mcCard = new lib.mcCard();
	this.mcCard.setTransform(68,16,1,1,0,0,0,68,68);
	this.mcCard._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcCard).wait(42).to({_off:false},0).to({y:84},2).to({y:136},2).to({y:112},2).to({y:136},3).to({_off:true},46).wait(9));

	// BG
	this.instance_26 = new lib.isBG("synched",0);
	this.instance_26.setTransform(120,201,1,1,0,0,0,120,201);
	this.instance_26.alpha = 0.18;
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(36).to({startPosition:0,_off:false},0).to({alpha:1},4).wait(66));

	// レイヤー 3
	this.instance_27 = new lib.isBG2("synched",0);
	this.instance_27.setTransform(320,480,1,1,0,0,0,320,480);
	this.instance_27.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).to({alpha:1},9).wait(20).to({startPosition:0},0).to({alpha:0},6).to({_off:true},1).wait(70));

	// BG_black
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Egx/BLAMAAAiV/MBj+AAAMAAACV/g");
	this.shape.setTransform(320,480);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Egx/BLAMAAAiV/MBj+AAAMAAACV/g");
	this.shape_1.setTransform(320,480);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},29).wait(77));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,960);


// symbols:
(lib.BG = function() {
	this.initialize(img.BG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,960);


(lib.BG2 = function() {
	this.initialize(img.BG2);
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


(lib.cardC_640x800 = function() {
	this.initialize(img.cardC_640x800);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,800);


(lib.crosshatch = function() {
	this.initialize(img.crosshatch);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,260,260);


(lib.effect1 = function() {
	this.initialize(img.effect1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,350);


(lib.effect2 = function() {
	this.initialize(img.effect2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,350);


(lib.effect3 = function() {
	this.initialize(img.effect3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,350);


(lib.effect4 = function() {
	this.initialize(img.effect4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,350);


(lib.effect5 = function() {
	this.initialize(img.effect5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,350);


(lib.effect6 = function() {
	this.initialize(img.effect6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,350);


(lib.effect7 = function() {
	this.initialize(img.effect7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,350);


(lib.effect8 = function() {
	this.initialize(img.effect8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,350);


(lib.effect9 = function() {
	this.initialize(img.effect9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,350);


(lib.effectflash = function() {
	this.initialize(img.effectflash);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,960);


(lib.ｌgr = function() {
	this.initialize(img.ｌgr);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,162,162);


(lib.name_bg = function() {
	this.initialize(img.name_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,61);


(lib.next = function() {
	this.initialize(img.next);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,48);


(lib.sr = function() {
	this.initialize(img.sr);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,162,162);


(lib.status_bg = function() {
	this.initialize(img.status_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,248);


(lib.text01 = function() {
	this.initialize(img.text01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,200);


(lib.ur = function() {
	this.initialize(img.ur);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,162,162);


(lib.Button = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("EgSvAlgMAAAhK+MAlfAAAMAAABK+g");
	this.shape.setTransform(320,480,2.667,2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,960);


(lib.mcNum = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{n1:0,n2:1,n3:2,n4:3,n5:4,n6:5,n7:6,n8:7,n9:8,n0:9,n11:10});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AABBPIAAhnQgJAJgLAFQgJAFgPAFIAAglQAWgHAMgKQAKgKAIgPIAkAAIAACeg");
	this.shape.setTransform(93.7,18.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhABPQACgTALgRQAMgRAfgXQARgNAGgHQAGgIgBgGQABgHgGgGQgFgEgJAAQgFAAgGAEQgFAGgCANIgsgDQADgTAGgKQAIgLAMgFQAMgGAUAAQAYABAMAFQAOAFAGALQAIALAAANQAAAOgJANQgIAMgWAQQgOAIgDAEIgJAKIBCAAIAAAjg");
	this.shape_1.setTransform(94.5,18.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgfBMQgMgFgIgKQgIgKgFgOIAsgGQADANAFAFQAGAFAGAAQAJAAAGgGQAGgHAAgKQAAgLgGgGQgGgGgJAAQgEAAgJACIADgdIAFABQAHAAAGgGQAFgFAAgIQAAgHgEgEQgEgFgGAAQgHAAgFAFQgFAFgCALIgpgHQAFgUAPgKQAOgLAbAAQAdAAAOAMQAOALAAARQAAALgGAIQgGAIgLAGQAJADAFADQAIADAEAIQAFAHAAALQAAAOgIANQgHAMgNAHQgOAHgWAAQgTAAgNgFg");
	this.shape_2.setTransform(94.6,18.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAKBPIAAgdIhNAAIAAgkIBNhdIAnAAIAABfIATAAIAAAiIgTAAIAAAdgAgeAQIAoAAIAAgvg");
	this.shape_3.setTransform(94.7,18.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgYBNQgMgDgHgGQgIgGgEgIQgFgHgEgLIAtgEQABAKAGAFQAGAGAGAAQAJAAAGgHQAGgHAAgNQAAgOgGgHQgGgFgJAAQgFAAgGABQgEADgGAFIglgFIAOhTIBmAAIAAAjIhEAAIgFAYQAIgDAHgCQAFgCAHAAQAYAAAPAOQAOANAAAVQAAAQgHAOQgIAOgOAHQgOAIgWAAQgNgBgLgCg");
	this.shape_4.setTransform(94.6,18.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AggBJQgOgIgIgSQgJgSAAgdQgBgoATgUQASgUAdAAQATAAALAEQALAFAHAIQAHAJAEAMIgrAGQgCgKgEgDQgEgEgGAAQgIAAgHALQgEAHgCAaQAIgIAIgEQAHgEAKAAQAWAAAOAPQAPANAAAXQgBAQgHANQgHANgNAGQgOAHgTAAQgVAAgPgIgAgLAHQgHAHABAMQgBANAHAHQAGAIAIAAQAIAAAGgHQAGgGAAgNQAAgOgGgHQgGgHgJAAQgHAAgGAHg");
	this.shape_5.setTransform(94.8,18.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgkBOQAFgmALgaQALgZAWgdIhLAAIAAglIB9AAIAAAdQgQAPgMASQgNATgIAaQgGAVgCAbg");
	this.shape_6.setTransform(94.7,18.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgkBLQgNgGgHgLQgHgMAAgOQAAgOAHgJQAGgJAOgEQgLgGgEgHQgHgJAAgMQAAgUATgMQAOgKAYAAQAeAAAPAMQAPAMAAASQAAALgGAJQgFAHgJAHQAMAEAHAKQAGAKAAAMQAAAMgFAKQgGALgIAFQgIAGgLACQgMADgOAAQgXAAgNgGgAgNANQgGAGAAALQAAALAGAHQAHAGAGAAQAIAAAGgHQAGgGAAgLQAAgKgGgHQgHgGgHAAQgHAAgGAGgAgMgwQgFAFAAAIQAAAIAFAFQAFAFAHAAQAHAAAFgFQAFgFAAgIQAAgIgFgFQgFgFgHAAQgHAAgFAFg");
	this.shape_7.setTransform(94.7,18.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgfBNQgLgFgHgIQgHgJgEgMIArgGQACAKAFADQADAEAHAAQAIAAAGgLQAEgHACgaQgIAIgIAEQgGAEgLAAQgWAAgOgPQgOgNAAgXQAAgQAHgNQAIgNANgGQANgHATAAQAWAAAOAIQAOAIAJASQAJASgBAcQABApgTAUQgSAUgdAAQgTAAgLgEgAgQguQgGAGAAAOQAAANAGAHQAGAGAJAAQAHAAAHgGQAFgHAAgMQAAgNgGgHQgHgIgGAAQgKAAgFAHg");
	this.shape_8.setTransform(94.6,18.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgfBLQgMgHgIgMQgFgJgEgPQgDgPAAgRQAAgsAQgSQARgSAfAAQAQAAAKAEQAKAEAGAGQAHAGAEAHQADAHADAKQAEARAAATQAAApgPAUQgOAUgjAAQgSAAgNgGgAgOgoQgFALAAAdQAAAdAFALQAFALAJAAQAGAAAFgFQAFgEACgKQACgKAAgWQAAgdgFgLQgFgLgKAAQgKAAgEALg");
	this.shape_9.setTransform(94.7,18.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(89.2,10.2,9,16);


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


(lib.isTxt1 = function() {
	this.initialize();

	// レイヤー 2
	this.instance = new lib.text01();
	this.instance.setTransform(0,130);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,130,640,200);


(lib.isNext = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.next();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,48);


(lib.isFlash2 = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAAKIhgBYIBVhiIhVhgIBgBVIBhhVIhWBgIBWBig");
	this.shape.setTransform(0,0,2.171,2.171);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,24.4).s().p("AiqCrQhHhHAAhkQAAhjBHhHQBHhHBjAAQBkAABHBHQBHBHAABjQAABkhHBHQhHBHhkAAQhjAAhHhHg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24.2,-24.2,48.5,48.5);


(lib.isEffectFlash = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.effectflash();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,960);


(lib.isCrosshatch = function() {
	this.initialize();

	// レイヤー 3
	this.instance = new lib.crosshatch();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,260,260);


(lib.isCardC = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.cardC_640x800();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,800);


(lib.isCardB = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.cardB_640x800();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,800);


(lib.isCardA = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.cardA_640x800();
	this.instance.setTransform(50,50);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(50,50,640,800);


(lib.isBG2 = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.BG2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,960);


(lib.isBG = function() {
	this.initialize();

	// レイヤー 2
	this.instance = new lib.BG();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,960);


(lib.mcRfla = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.isFlash2("synched",0);
	this.instance.setTransform(46.4,40.4,0.489,0.489,-18.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:0},6).to({rotation:5},14).to({scaleX:0.43,scaleY:0.43,rotation:13},6).to({_off:true},2).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(31.3,25.3,30.1,30.1);


(lib.mcRare = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{r_1:1,r_2:2,r_3:3});

	// timeline functions:
	this.frame_0 = function() {
		_cardname=eval("name_txt"+_count);
		_rare=eval("rare_num"+_count);
		if(_rare==1)
		{
		
		this.gotoAndStop("r_1");
		}
		else if(_rare==2)
		{
		
		this.gotoAndStop("r_2");
		}
		else if(_rare==3)
		{
		
		this.gotoAndStop("r_3");
		}
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

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3));

	// レイヤー 3
	this.instance = new lib.mcRfla();
	this.instance.setTransform(114.2,44.2,2,2,0,0,0,40.1,40.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(3));

	// レイヤー 2
	this.instance_1 = new lib.sr();
	this.instance_1.setTransform(-9.9,-9.9);

	this.instance_2 = new lib.ur();
	this.instance_2.setTransform(-9.9,-9.9);

	this.instance_3 = new lib.ｌgr();
	this.instance_3.setTransform(-9.9,-9.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	// レイヤー 5
	this.text = new cjs.Text("", "30px MS PGothic", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 32;
	this.text.lineWidth = 396;
	this.text.setTransform(336,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text}]},1).wait(3));

	// レイヤー 4
	this.instance_4 = new lib.name_bg();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},1).wait(3));

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


(lib.mcDM = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		if(up_txt>=10)
		{
			Dm1 =up_txt.substring(1,1+1);
		this.mcUp1.gotoAndStop("n"+Dm1);
		
			Dm2 =up_txt.substring(2,2+1);
		this.mcUp2.gotoAndStop("n"+Dm2);
		
		}
		else 
		{
		this.mcUp1.visible=false;
		
			Dm2 =up_txt.substring(1,1+1);
		this.mcUp2.gotoAndStop("n"+Dm2);
		
		mcUp2.x=-125.2;
		mcUp2.y=-9.2;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0));

	// レイヤー 1
	this.mcUp2 = new lib.mcNum();
	this.mcUp2.setTransform(-114.5,-9.1,1.579,1.579);

	this.mcUp1 = new lib.mcNum();
	this.mcUp1.setTransform(-136.6,-9.1,1.579,1.579);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mcUp1},{t:this.mcUp2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.1,6.9,36.4,25.3);


(lib.mｃCrosshatch2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.isCrosshatch("synched",0);
	this.instance.setTransform(264.9,265.5,0.504,0.504,0,0,0,130,130);
	this.instance.alpha = 0.148;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:141.9,alpha:1},9).to({y:-12.3},10).to({y:-135.9,alpha:0.148},9).to({_off:true},1).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(199.4,200,130.9,130.9);


(lib.mｃCrosshatch1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 2
	this.instance = new lib.isCrosshatch("synched",0);
	this.instance.setTransform(264.9,265.5,0.504,0.504,0,0,0,130,130);
	this.instance.alpha = 0.148;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16).to({startPosition:0,_off:false},0).to({y:141.9,alpha:1},8).to({y:-12.3},11).to({y:-135.9,alpha:0.148},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.mcCard = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{_card1:1,_card2:2,_card3:3});

	// timeline functions:
	this.frame_0 = function() {
		if(_count==1)
		{
		
		this.gotoAndStop("_card1");
		}
		else if(_count==2)
		{
		
		this.gotoAndStop("_card2");
		}
		else if(_count==3)
		{
		
		this.gotoAndStop("_card3");
		}
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

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3));

	// レイヤー 7
	this.instance = new lib.isCardA("synched",0);
	this.instance.setTransform(70,70,1,1,0,0,0,120,120);

	this.instance_1 = new lib.isCardB("synched",0);
	this.instance_1.setTransform(70,70,1,1,0,0,0,70,70);

	this.instance_2 = new lib.isCardC("synched",0);
	this.instance_2.setTransform(70,70,1,1,0,0,0,70,70);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


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
	this.shape.graphics.lf(["rgba(0,0,0,0.694)","#000000","#000000","rgba(0,0,0,0.694)"],[0.251,0.396,0.6,0.765],0,-304.1,0,304.2).s().p("Egx/BLAMAAAiV/MBj+AAAMAAACV/g");
	this.shape.setTransform(320,480);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,960);


(lib.mcWindow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		ms_txt=eval("status_txt"+_count);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0));

	// next
	this.instance = new lib.mcNext();
	this.instance.setTransform(320,219,1,1,0,0,0,320,24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(1));

	// Text
	this.text = new cjs.Text("", "24px MS PGothic", "#FFFFFF");
	this.text.lineHeight = 26;
	this.text.lineWidth = 611;
	this.text.setTransform(13,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).wait(1));

	// レイヤー 2
	this.instance_1 = new lib.status_bg();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,248);


(lib.mcUpDm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{_off:0,on2:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		if(up_txt>=1)
		{
		nextFrame();
		}
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1));

	// レイヤー 5
	this.mcDM = new lib.mcDM();
	this.mcDM.setTransform(47.1,22.4,1.189,1.313,0,25.1,0,25.6,25.2);
	this.mcDM._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcDM).wait(1).to({_off:false},0).wait(1));

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFE566","#F0CD0E","#955100","#F0CD0E","#FFFFCC","#FFE566","#B77F06"],[0,0.165,0.443,0.455,0.475,0.671,0.988],-0.3,1.7,-0.3,-16.4).s().p("AgOALIAIgVIAVAAIgIAVg");
	this.shape.setTransform(98.7,26.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFE566","#F0CD0E","#955100","#F0CD0E","#FFFFCC","#FFE566","#B77F06"],[0,0.165,0.443,0.455,0.475,0.671,0.988],0.1,1.9,0.2,-15.6).s().p("AgOALIAIgVIAVAAIgIAVg");
	this.shape_1.setTransform(93.4,26.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFE566","#F0CD0E","#955100","#F0CD0E","#FFFFCC","#FFE566","#B77F06"],[0,0.165,0.443,0.455,0.475,0.671,0.988],0,3.3,0,-13.7).s().p("Ag8AmIAahLIBHAAQAQAAAFALQAFAKgFAQQgGAQgMAJQgMAMgQABgAgjAUIAzAAQARgCAHgSQAGgSgPgCIg0AAg");
	this.shape_2.setTransform(83.9,23.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFE566","#F0CD0E","#955100","#F0CD0E","#FFFFCC","#FFE566","#B77F06"],[0,0.165,0.443,0.455,0.475,0.671,0.988],-1.8,14.2,-1.8,-5.3).s().p("AhFArIAGgTIAZAAQACgQAGgSIgPAAIAGgSIAsAAIAEgOIAVAAIgGAOIAuAAIgGASIgNAAQgHAQgKASIAVAAIgGATgAgUAYIAjAAQAKgTAIgPIgtAAQgGARgCARg");
	this.shape_3.setTransform(86.6,14.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FFE566","#F0CD0E","#955100","#F0CD0E","#FFFFCC","#FFE566","#B77F06"],[0,0.165,0.443,0.455,0.475,0.671,0.988],0,9.7,0,-9.5).s().p("AguBXIAmhsQgOALgNAHIAJgaQAagQAcgpIATAAQgOAVgPARIgtCHg");
	this.shape_4.setTransform(78.2,19.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FFE566","#F0CD0E","#955100","#F0CD0E","#FFFFCC","#FFE566","#B77F06"],[0,0.165,0.443,0.455,0.475,0.671,0.988],-0.6,9.6,-0.6,-6.2).s().p("AgcA7IAhh1IAYAAIgrB1g");
	this.shape_5.setTransform(96.5,17.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FFE566","#F0CD0E","#955100","#F0CD0E","#FFFFCC","#FFE566","#B77F06"],[0,0.165,0.443,0.455,0.475,0.671,0.988],-0.7,10.1,-0.7,-6.2).s().p("AgcA7IAhh1IAYAAIgrB1g");
	this.shape_6.setTransform(101.8,17.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Aj0CFQAkgEAigWQgJgMgRgJIAFgQQAXAKALARQAWgSAGgTQADgIgLAAIgqAAQgVAcgfAKIAGgRQAggOAQgnIAQAAQgDAJgFAIIAmAAQANAAAEAGQAFAGgEALQgKAggqAbQgnAZgpAFgABqCBQBdgEAghJIAPAAQgUAvgqAYQgkAUgwACgAhzCAQAngPAegaQgMgOgSgKIAFgRQAXANAQAQQAVgWAOgcIAQAAQgTAigYAZQAHAJAFALIgIAXQgHgRgLgNQgjAfgwARgAB+BSIAFgQQAaAGAKAIIgGAQQgJgIgagGgAAEBbIAEgOIBtAAIgFAOgACQAsIAFgQQAcAFANAKIgGAQQgNgLgbgEgADaAuIgEgVIAMAAQAEAJAAAMgADtAoQAAgIgDgKIAMAAQAEAIAAAKgAh4AjIgDgUIAMAAQAEAJAAALgAhkAdIgDgRIAMAAQADAIABAJgAi6geQANgPAKgcIACgGIAOAAIgDAGIgHATIAEAIIAOgnIgbAAIAFgOIAXAAIAFgQIgUAAIAFgNIAUAAIAFgPIAOAAIgFAPIATAAIgEANIgUAAIgFAQIAVAAIgEAOIgSAAIgGARIASAAIgFANIgSAAIgGATQALAHARABQAlAAAQgCIgFAOIg1ABQgpgBgFgZQgMASgQALgAADgOIAehaIgxAAIAFgOIAxAAIAIgWIAPAAIgIAWIAyAAIgFAOIgzAAIgeBagACfg8IgCAAQglAegnAKIAGgRQAegHAfgYQAfgYAGgTQADgGgIAAIg6AAIAFgPIA+AAQAJAAADAFQAEAGgDAJQgGARgXAXQAQAOAPAUIgHAVQgPgZgXgSgAA5gUQgHgaAIgxIAPAAQgHAmAIAlgAgwgUIAzhLIAQAAIgzBLgAh2giIAPguIAmAAQAIAAADAHQADAGgDAKQgEAJgHAHQgIAHgIAAgAhmguIAXAAQAIgBAEgKQADgJgIgCIgWAAgAhihiQARgJAJgTIgPAAIAEgMIAnAAQAMABgCAKQACAHgEALQgEALgHAGQgHAHgKABQgMAAgDgCIAEgLIAJAAQAIAAADgCQACgBADgKIADgKQABgGgIAAIgGAAQgPAfgbAMgABRh8IgDgUIAMAAQADAJABALgABliCQgBgIgCgKIAMAAQADAJAAAJg");
	this.shape_7.setTransform(-5.1,12.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Aj+CrIAAAAQgGgDgBgEIAAAAIgBgCQgBgEABgEIAAgBIABgEIAAAAIAAAAIgCgDIAAgHIAAgCIAGgQIABgCIAAgBIABAAIAAAAIACgCIABgCIAAgBIACAAIAGgBIACgBIgEgEQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQgBgDABgEIAAgDIABgDQAAgBgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQgCgDABgFIAAgCIAGgRIABgCIAAAAIABgBIABgDIABAAQAAgBABAAQAAgBAAAAQABAAAAgBQABAAABAAIAAAAQAagNAOgfIgCAAIgCAAIgCgBIAAgCIgDgCIAAAAIgCgDIAAgFIAAgDIACgEIgBAAIAAAAIAAgBIgBgCQgCgEACgEIAAgBIAGgTIAAgBIAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABgBABAAIAAgBIABgBIACgCIAAAAQAIgKAFgQIABgCIAAgCIABgDIgBgCIgBgCIAAgBQgBgEABgDIAAgBIAFgOQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAIAAgBIADgCIgBAAIABgBIABgBIAAgBIABAAIAAAAIABgBIABAAQgBgEACgCIAAgBIAEgNIABgBIAAgBIAAgBIADgDIABgCIACAAIABgBIAAAAQADgCAEABIAHAAIADgGIABgCIABAAIACgCIAAAAIABgCIABAAIACgBQACgCAFABIANAAQACgBADACIACAAIABABIABAAIABABIAAABIAEAFIAAACIABgCIABgBIAAgBIACgBIABAAQADgCAEAAIAnAAQALABAHAHIABAAIABACQAEAFAAAHIABAAIAAAAIABAAQADgDAFACIAlAAIAFgPIAAAAIABgBIAAAAIAAgBIACAAIABgBIABgCIgBAAIABAAIAAgBIABAAIAAAAIADgBQACgBAEAAIAOAAIAFABIABAAIAAAAIAAAAIABgCIAAAAIAAAAIAAgBIACAAIACgBQADgBADAAIAKAAIAAgBIACgBIAAAAIACAAQADgCADABIAJAAQAHgEAFAGIABABIABABIAAAAIABABIABAAQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAABIABAGIADAAIA9AAQAQAAAGAJIABAAIAAAAIAAABIABAAIAAAAIABABIAAABIAAAAIAAABQAGAIgDAMQAEAJgFAOQgEALgMAPIAOARIACABIABABIAAADQACAEgCAEIAAABIgBADIACAEQABAEgBAEIAAACIgHAVIAAABIgBABIAAAAIgFAEIAAAAIgBABIgCAAQgFACgCgCIgDAAQgGgCgCgDIAAgDQgMgQgOgNQgjAbgkAHIgEAAQgEABgCgBIgEAAIgPAAQgEAAgDgBIgBAAIAAAAIgBAAIgCgCIAAAAIgBAAIAAgBIgBAAIgBgBIAAAAIAAgCQgDgJgBgKIgIAZIgCAAIAAABIAAABIgBAAIAAAAIgBAAIAAABIAAAAIAAABIgCAAIAAAAIAAAAIAAAAIABABIAAAAIABABIABAAIAAABIAAABQACACACAEIAAACQAAAEgBADIgBACIAAABIACAEIAAADQABAEgBADIgBACIgCABIAAAAIAAAAIgIAMIBdAAIACAAIABgCIAAAAIAAgBIAAAAQACgFAFgCIACAAIAEgBIgBgBIAAgBIAAAAIAAgBQgCgEACgDIAAgCIAFgQIAAgCQADgFAEgCIABAAQAEgCAFACQAdAEAPALIADABIAAAAIADAEIgBgHQgBgDABgDIAAgCIAAAAIAEgFIACgCIAAAAIACgBIAFAAIALAAIAAgBIACAAIABgBQADgCAEABIALAAQADgBADACQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAIABABIABACIACABIABADQAEAKAAALIAAAHIAAAKIAAABQABACgBAEIgBACIAAAAIgCACQABAEgBAEIAAABQgWAxgtAaIgBAAIAAABIgCABIABAAQgnAUgzADIgBAAQgFAAgCgCIgBAAIAAAAIgBAAIgBgCIgCgBIgBgBIgBgDIAAgHIAAgDIABgDIgBgBIgBgDIAAgGIAAgDIAGgQQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAIABAAIhYAAQgBAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAIAAAEIgGAXIAAABIgBAAIAAABIAAAAIgBABIAAABIgBAAIgBACIAAAAIgBABIAAABIgDAAIgGABIAAAAQgDAAgCgBIgDgBIABAAIgBAAIgCgBIAAAAIgBgCIAAAAIgBgBIAAAAIAAAAIAAAAIgBgBIgBAAIgHgQQghAagqAPQgHACgDgCIgCgBIAAgBIgEgDIgBgBIgBgBQgCgFABgEIAAgDIABgEIAAAAIgBgBIAAAAIAAgBQgCgEACgEIAAgCIAFgRIAAgBIAAgBQgNAOgTAMQgrAagrAGIgBAAIgCAAIgEgBgABhBxIAAAAIABAAIAAAAIAAgBIAAABIAAAAIAAAAIAAAAIAAAAgABgBwIABAAIAAgBIgBABgAh+BvIABAAIAAAAIgBAAgAhmBKQgGARgOAQIABAAIABAAQAWgJAUgMIgCgBIgCgBIgBAAIAAAAIAAAAQgEgCgCgDIAAgBIAAAAIgBgCIAAgIIAAgBIACgEIAAAAIgBAAIAAAAIgBgCIAAgBIAAgBIgBgHIgDAAIgBABIAAAAIgBABIAAAAIAAAAIgBABIgBABIAAABIgBAAIgBAAQABAHgDAKgAB+BpIAAABIACAAIgCgBgAhAAZIACACIABABQAQAJANAMQANgSALgVQACgDADgCQgEgCgCgDIAAAAIAAgBQgBgEABgEIAAgBIABgDIgBgBIAAgCIAAgCIgKAOIAAAAIAAABIgBAAIgCACIAAAAIgBABIgBAAIgCAAIgFABIgRAAIgGgBIgBACIAAAAIgBACIAAAAIgEABIgBAAIgEAAIgBAAIgKABIADANIAAAFIABAAIADgBIAFACgABVg7IAAAAQAagHAcgUIABgBIAJgIIgaAAQgFABgDgDIABAAIgBAAIgCAHIgBABIAAABIAAABIgBABIAAAAIgBABIgBAAIAAABIAAABIgBABIAAAAIgFABIgEAAIgMAAIgCAWg");
	this.shape_8.setTransform(-5.1,13.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AiIBnIgTAAQgDABgCgCIgEgEIAAAAIAAgBIAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBQAAgBABAAIAAgBIABgFIgBgCIAAAAIAAgBIAAAAQgBgDABgCIAAgBIAWhCIgBAAIgBAAQgEABgBgCIgBAAIAAgBIgCgCIAAAAIgBgCIAAAAQgBgEABgBIAAAAIABgEIAAgBIgBgCIAAAAQgBgEABgCIAAAAIAIgaIAAAAIABgBIAAAAQABgDADgCIACAAQAZgPAZgkIAAgBQABgDADgCIAFAAIATAAQACgBADABIABABIABABIAAABIABAAIAAABIABADQACACgCAEIAZAAIADgIIAAgBIABAAIACgCIAAAAIAAgBIAAAAIABAAIABgBQACgBADAAIARAAQABAAAAAAQABAAABAAQAAABABAAQAAAAABAAIABABIABABIADAEIAAABIAAAEIAAACIAfAAIAEAAIAAAAIACABQACABABAEIAAABIAAAFIAAABIgBAEIABADIAAABIAAAFIAAABIgGASIAAABIAAABIgCABIgBACIgCAAQgBABAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAIgEAAIgCADIACABIADABIADAEIAAACIAAAEIAAACIgCAEIACACIAAACIAAAEIAAACIgHAQIAAABIAAABIgCABIgBACIgCAAIgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIgHAAQACAHgBAIQACALgFAOQgHATgMAMIAAAAIgBABQgPAMgTABIhJAAIgEgBIgBAAQgDgBgCgDIAAgCQgBgDABgCIAAgBIACgEIgBgBIgFAQIgBABIAAAAIgCACIAAABIgDABIAAAAIgDABIgBgBgAhEAxIAhAAQAHgBAFgIIgqAAgAgfgjIARAAIACgDIgRAAIgCADgAhQgnIAAACIgBACIAJAAIABgDIgDgBIgBAAIgDgCIgCACgABnBgIgXAAIgEAAIgBAAQgDgCgBgDIAAgBIAAgFIAAgBIABgEIgBgDIAAgBIAAgFIAAgBIAHgXQACgEADgCIAAAAIABAAQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAIAAgEIAAgCIAkh0IAAgBIADgDIAAgBIAAAAIABAAIABgBQAAAAABAAQAAAAABgBQAAAAABAAQABAAAAAAIAYAAQABAAAAAAQABAAAAAAQABABABAAQAAAAABAAIABABIABABIADADIAAACIAAAEIAAACIgCAEIACACIAAACIAAAEIAAACIguB0IAAABIAAABIgBAAIAAABIABACIAAACQAAAAABABQAAABAAAAQAAABAAAAQgBABAAAAIAAACIgHAXIAAAAIgEAEIAAAAIgBABIgBAAIgDABIgBgBgAAyBgIgXAAIgEAAIgBAAQgDgCgCgDIAAgBIAAgFIAAgBIACgEIgCgDIAAgBIAAgFIAAgBIAIgXQABgEADgCIABAAIAAAAQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAIAAgEIAAgCIAjh0IAAgBIADgDIABgBIAAAAIAAAAIABgBQABAAAAAAQABAAAAgBQABAAAAAAQABAAABAAIAYAAQAAAAABAAQAAAAABAAQABABAAAAQABAAAAAAIACABIAAAAIADADIAAACIAAABIAAAEIAAACIgBAEIABABIAAACIAAABIAAAEIAAACIgtB0IgBABIAAABIAAAAIgBABIACACIAAACQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAIAAACIgIAXIAAAAIgDAEIgCABIgBAAIgCABIgBgBg");
	this.shape_9.setTransform(89.1,19.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ah9CHIjKBSICAiGImrgSIGMh7IkHipIFsBaIgFj6ICoDaIDhjDIhSDjIEugdIj8CJIGQB5ImngbICYDaIkUiGIjNDvg");
	this.shape_10.setTransform(50,19.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;