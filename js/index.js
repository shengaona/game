
$(function(){
	var data={
		"succeed":['勇敢坚毅真正之才智乃刚毅之志向。 —— 拿破仑',
					'志向不过是记忆的奴隶，生气勃勃地降生，但却很难成长。 —— 莎士比亚',
					'骏马是跑出来的，强兵是打出来的。',
					'只有登上山顶，才能看到那边的风光。',
					'如果惧怕前面跌宕的山岩，生命就永远只能是死水一潭。',
					'平时没有跑发卫千米，占时就难以进行一百米的冲刺。',
					'梯子的梯阶从来不是用来搁脚的，它只是让人们的脚放上一段时间，以便让别一只脚能够再往上登。',],
		"failed":['志在峰巅的攀登者，不会陶醉在沿途的某个脚印之中。',
					'海浪为劈风斩浪的航船饯行，为随波逐流的轻舟送葬。',
					'人生最重要的一点是，永远不要迷失自己。',
					'一个人承受孤独的能力有多大，他的能力就有多大。',
					'实力塑造性格，性格决定命运。',
					'普通人成功并非靠天赋，而是靠把寻常的天资发挥到不寻常的高度。',
					'对于强者，要关注他们的灵魂，对于弱者，他关注他们的生存。',
					'积极的人在每一次忧患中都看到一个机会，而消极的人则在每个机会都看到某种忧患。',
					'成功不是将来才有的，而是从决定去做的那一刻起，持续累积而成。',
					'当你感到悲哀痛苦时，最好是去学些什么东西。学习会使你永远立于不败之地。',]
		}
		//成功
		function su(){
			var num=Math.floor(Math.random()*7);
			dialog(data.succeed[num],true);
			$(".dialog").show();
		}
		//失败
		function fa(){
			var num=Math.floor(Math.random()*10);
			dialog(data.failed[num],false)
			$(".dialog").show();
		}
	var $infoBox=$(".infoBox");
	var $showBox=$(".showBox");
	var number=0
	var gk=1;
	//设置第一关页面柱子样式
	$(".well-box div:eq(0)").css({"width":creatNext()[0]+'px',"margin-right":creatNext()[1]+'px'});
	// console.log(creatNext()[0])
	$(".well-box div:eq(1)").css({"width":creatNext()[0]+'px',"margin-right":creatNext()[1]+'px'});
	$(".well-box div:eq(2)").css({"width":creatNext()[0]+'px',"margin-right":creatNext()[1]+'px'});
	$(".well-box div:eq(3)").css({"width":creatNext()[0]+'px',"margin-right":creatNext()[1]+'px'});
	var firstWellW=$(".well-box").children('.well').eq(0).width();//第一根柱子的宽度
	// console.log(firstWellW)
	$(".man").css("left",(firstWellW-50)+"px");
	$(".stick").css("left",firstWellW+"px");
	//点击游戏说明
	$(".btnBox a:nth-child(2)").on("click",function(){		
		if(!$infoBox.get(0)){
			$infoBox=$("<div class='infoBox'><p class='infoText'>游戏说明：<br/>1、该游戏为一款好玩的闯关挑战类游戏，可以锻炼玩家的判断力，提高玩家的敏捷思维能力。<br/>2、可以选择闯关模式或者挑战模式开始游戏。进入闯关模式后点击上方按钮可选择已解锁的关卡。<br/>3、闯关模式总共有十个关卡，每通过一个关卡，游戏难度会逐渐增大。如果玩家玩通关闯关模式，会获得W币奖励。<br/>4、挑战模式会计算积分，玩家可以在线存档，也可以提交自己的积分来查看自己的排行。<br/>5、本游戏引入了金币机制，即W币，初始金币为3个，玩家可以通过每日签到(+1 W币，连续签到从第二天起+2 W币)和完成每日的挑战任务(随机+7或8或9 W币)或玩通关闯关模式(随机+10或11或12 W币)来获得W币，W币可以用来购买道具。本游戏目前含有四种道具，分别是原地复活道具、水波特效道具、蝴蝶跟随鼠标特效道具和下雪特效道具。原地复活道具只可以在挑战模式使用，其它三种道具均为特效道具，每次购买后有七天使用期限，七天后需再次购买才可继续使用。</p><button class='close'>返回</button></div>")		
			$infoBox.appendTo($('body'));
		}			
		$infoBox.show()	
		if("$showBox.get(0)"){
			$showBox=$("<div class='showBox'></div>")
			$showBox.appendTo($('body'));
		}
		var w=$(window).innerWidth();
		var h=$(window).innerHeight();
		$showBox.css({"width":w,"height":h});
		$showBox.show()
	})
	$("body").on("click",".close",function(){
		$infoBox.hide()
		$showBox.hide()
	})
	//接受两个参数，
	function dialog(text,bool){
		var dialog=$(".dialog")
		if(!dialog.get(0)){
			dialog=$("<div class='dialog'><p class='name'></p><p class='dialog-btn'></p></div>")
			dialog.appendTo($("body"))
		}
		$(".name").html(text)
		if(bool){
			$(".dialog-btn").html("<a href='javascript:void(0)' class='play-agin'>重新开始</a><a href='javascript:void(0)' class='next'>下一关</a>");
		}else{
			$(".dialog-btn").html("<a href='javascript:void(0)' class='play-agin'>重新开始</a>")
		}
	}
	var flag=true;
	var speed=4000;
	//按钮点击时候
	$(".btnClick").on("mousedown",function(){
		var stickMax=$(".stick").offset().top;
		if(flag){
			$(this).addClass('btnDown')
			$(".stick").animate({"width":stickMax+"px"},speed);
		}		
	}).on("mouseup",function(){//移开按钮
		if(flag){
			$(this).removeClass('btnDown')
			$(".stick").stop();
			flag=false;
		}
		manMove(number);
	});
	//人移动时候
	function manMove(num){
		$(".stick").addClass('stickDown');
		var wellLen=$(".well-box").children().length//柱子的数量
		var stickWidth=$(".stick").width();//棍子的长度
		var manWidth=$(".man").width();//人的宽度
		var nowWellW=$(".well-box").children().eq(num).width();//当前柱子的宽度
		var nowWellO=$(".well-box").children().eq(num).position().left;//距离大盒子的宽度
		var next=num+1;
		var nextWellW=$(".well-box").children().eq(next).width();//下一个柱子的宽度
		var nextWellO=$(".well-box").children().eq(next).position().left;//下一个柱子距离大盒子的宽度
		// console.log(nextWellO);
		var wellMinO=nextWellO-nowWellO-nowWellW;//棍子的最小长度
		var wellMaxO=wellMinO+nextWellW;////棍子的最大长度
		setTimeout(function(){
			$(".man").find("img").attr("src","img/stick.gif");
			$(".man").animate({"left":(stickWidth+manWidth)+"px"},1000,function(){
				if(stickWidth<wellMinO||stickWidth>wellMaxO){//失败
					// $(".man").animate({"bottom":"0px"},1000);
					$(".man").find("img").addClass("rotate");
					fa();
					$(".play-agin").on("click",aginP);
				}
				else{
					flag=true//成功的时候
					$(".man").find("img").attr("src","img/stick_stand.png");
					$(".man").animate({"left":(nextWellW-manWidth)+"px"})
					$(".stick").removeClass('stickDown').width("0px").animate({"left":nextWellW+"px"})
					$(".well-box").animate({"left":-nextWellO+"px"})
					number++;
					if(number==wellLen-1){
						flag=false;
						su();
						$(".play-agin").on("click",aginP);
						$(".next").on("click",nextP);
					}
				}
			})
		},1000)
	}
	//下一关
	function nextP(){
		$(".dialog").hide();
		gk++
		number=0;
		speed-=1000;
		$(".paly-title").text("关卡"+gk)
		$(".well-box div:eq(0)").css({"width":creatNext()[0]+'px',"margin-right":creatNext()[1]+'px'});
		$(".well-box div:eq(1)").css({"width":creatNext()[0]+'px',"margin-right":creatNext()[1]+'px'});
		$(".well-box div:eq(2)").css({"width":creatNext()[0]+'px',"margin-right":creatNext()[1]+'px'});
		$(".well-box div:eq(3)").css({"width":creatNext()[0]+'px',"margin-right":creatNext()[1]+'px'});
		$("<div>").appendTo('.well-box').addClass('.well').css({"width":creatNext()[0]+'px',"margin-right":creatNext()[1]+'px'});
		var fWellW=$(".well-box div:eq(0)").width();
		$(".paly-title").text("关卡"+gk)	
		$(".man").css("left",(fWellW-50)+"px");
		// console.log(fWellW)
		$(".stick").css("left",fWellW+"px");
		$(".well-box").css({"left":"0px"});		
		flag=true;
		// changeBg();	
		var num=Math.floor(Math.random()*20)+1;
            $("body").removeAttr("class");
            $("body").addClass("bg"+num);	
	}
	//重新开始
	function aginP(){
		$(".dialog").hide();
		var firstWell=$(".well-box").children('.well').eq(0).width();
		$(".man").find("img").attr("src","img/stick_stand.png").removeClass("rotate");
		$(".stick").removeClass('stickDown').width("0px");
		number=0;
		$(".paly-title").text("关卡"+gk)
		$(".man").css({"left":"50px"});
		$(".well-box").css({"left":"0px"});
		$(".stick").css({"left":firstWell+"px"});
		flag=true
		var fiWellW=$(".well-box div:eq(0)").width();
		$(".man").css("left",(fiWellW-50)+"px");
		$(".stick").css("left",fiWellW+"px");
	}
	/*function changeBg(){
		var num=Math.floor(Math.random()*20)+1;
		$(".bg2").css("background","url('../0920hero/img/2.jpg') no-repeat");
	}*/

	//柱子数量变多4-8 60-120 距离最少60 每增加一关速度变快
	function changeRd(MIN,MAX){
		//60-120
		var length=Math.floor(Math.random()*(MAX-MIN+1))+MIN
		return length;		
	}
	function creatNext(){
    	var iWidth = changeRd(100,150);
    	var iRight = changeRd(60,200);
    	return [iWidth,iRight];
    }

})