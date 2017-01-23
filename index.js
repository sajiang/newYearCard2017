$p1Ani={};
$p2Ani={};
$p3Ani={};


var friend={
	weiwei:{
		name:"胃胃",
		wishes:"<p>元旦节能收到某人祝福还是很感动呀</p><p>看着你的朋友圈空间微博</p><p>你一天一天变成了一个更好的胃胃</p><p>做着更加有种的事情</p><p>希望你加油呀</p><p>要过得更加发光</p><p>因为你的成就</p><p>让我看到我的可能</p><p>我就不祝你早日脱单了</p><p>感觉你不缺男朋友~</p>",
		flag:true,
	},
	houzi:{
		name:"猴子",
		wishes:"<p>当护士一定很辛苦吧，经常夜班什么的</p><p>要注意自己身体好好照顾自己</p><p>谢谢你不嫌弃我坑比带我玩LOL</p><p>还带着你的大神朋友carry我</p><p>一如高中我们玩自由幻想的时候</p><p>跟你在一起特别开心和轻松</p><p>长时间的不联系关系好似变淡了</p><p>可我一听到你说我好久都没听到你的声音</p><p>就觉得我们好似从来没有分开过</p><p>因为男朋友开始玩LOL</p><p>因为你爱上LOL</p>",
		flag:true,
	},
	caicai:{
		name:"菜菜",
		wishes:"<p>世界上最好看的三个人之一</p><p>你一定要和fyt过得幸福啊</p><p>嗯还有要好好学习，天天向上</p><p>希望大学霸菜菜在研究生阶段也还是一个大学霸</p>",
		flag:false,
	},
	yaling:{
		name:"亚玲",
		wishes:"<p>答应我好好的要带我玩LOL</p><p>居然忘记带手机出门</p><p>哼 生气</p><p>哼我不管</p><p>你得给我补上</p><p>诶你和猴子谁厉害啊？</p><p>好了亲爱的</p><p>不要再吃醋猴子有生日礼物了</p><p>今年你也有</p><p>哎，也不知道你现在到底有没有男朋友</p><p>不管啦</p>",
		flag:false,
	},
	fengjie:{
		name:"凤姐",
		wishes:"<p>新年快乐</p><p>哼 和王杰和好了都不跟我说</p><p>算了不管了</p><p>希望你们一定要幸福啊</p><p>听说你戒游戏了</p><p>可喜可贺可喜可贺</p><p>新年一年要好好学习天天向上哦</p><p>好啦不打扰你在家好好陪伴长辈了</p>",
		flag:false,
	},
	fengxiaorui:{
		name:"甜皮鸭！",
		wishes:"<p>新年快乐呀</p><p>你去日本玩还惦记着要给我代购</p><p>哇 贼开心</p><p>虽然最后没有给我带回来哈哈</p><p>但是还是超级感动</p><p>在香港要好好学习天天向上</p><p>祝你学业有成，变成大神~</p><p>然后带我装逼 哈哈</p>",
		flag:true,
	},
	liaosishi:{
		name:"思师，发音标准不~",
		wishes:"<p>新年快乐呀</p><p>整天和各国帅哥一起吃吃喝喝过得happy哦</p><p>元旦节还穿汉服招摇过市</p><p>嗷嗷 好羡慕啊！</p><p>一定要好好学习哦</p><p>要过得更加发光</p><p>因为你的成就</p><p>让我看到我的可能</p>",
		flag:false,
	},
	snoopy:{
		name:"月亮歌姬~",
		wishes:"<p>新年快乐呀</p><p>【伸爪子】要红包</p><p>这是我们第一个在一起过的新年</p><p>转眼我们就过了一周年两周年1000天</p><p>QQ情侣的树满级了</p><p>NIKO也寻了好久好久的宝</p><p>余生多多指教不止说着玩玩</p><p>我又笨又任性</p><p>希望你看在我可爱又会烤饼干还会写代码这些不足一提的优点上</p><p>多多包容，携手余生</p>",
		flag:false,
	},
	xiaotiancai:{
		name:"哥哥~~",
		wishes:"<p>新年快乐呀</p><p>【伸爪子】要红包</p><p>诶诶我开始玩LOL了~</p><p>巨神峰还有那个什么之海都有号！</p><p>我不管 钻石大神快回来带我超神</p><p>我妈老叫我关心一下你的工作</p><p>惭愧惭愧，近来都关心的很少</p><p>找你要爱奇艺VIP倒比较多</p><p>希望你看在我长得好看的份上原谅我！</p>",
		flag:false,
	},
	eryi:{
		name:"二姨二姨爹~",
		wishes:"<p>新年快乐呀</p><p>小侄女和小侄子长得越来越好看啦！</p><p>又聪明又招人喜欢</p><p>二姨二姨爹辛苦啦~</p><p>要注意自己身体好好照顾自己哦</p>",
		flag:false,
	},
	babamama:{
		name:"爸爸妈妈~",
		wishes:"<p>新年快乐呀</p><p>我很想你们</p><p>你们有没有想我呀</p><p>要好好照顾自己啊</p><p>你们都要多锻炼多运动</p><p>少玩点游戏，坐久了就起来走动下</p><p>你们身体健康就是我最大的心愿了</p><p>今年过年要多赢点钱钱哦</p><p>【伸爪子】要红包</p>",
		flag:false,
	},
	xiangyi:{
		name:"哥哥~",
		wishes:"<p>新年快乐呀</p><p>恭喜当爸爸啦！！</p><p>小侄女名字取好没有？</p><p>嘿嘿嘿</p><p>我已经准备好喊她给我捶背</p><p>然后给她买一堆巧克力啦</p><p>算了巧克力太长胖了，还是买点别的吧</p><p>哈哈哈</p><p>和嫂嫂要和谐美满哦！</p>",
		flag:false,
	},
	laolao:{
		name:"姥姥~",
		wishes:"<p>新年快乐呀</p><p>小时候承蒙照顾啦</p><p>大半夜还麻烦你给我打针输液</p><p>哎，我还一事无成</p><p>没有办法修医院门口的路了</p><p>不过以后我还是可以开车来接你！</p><p>新的一年要好好照顾自己</p><p>身体健康</p><p>万事如意！</p>",
		flag:false,
	},
	niannong:{
		name:"念浓姐姐~",
		wishes:"<p>新年快乐呀</p><p>今年再也不会抢你的烟花放了</p><p>哈哈哈</p><p>最近都很少关心你</p><p>反省中……</p><p>嗯要好好学习，天天向上！</p>",
		flag:true,
	},
	chenzerong:{
		name:"姐姐~",
		wishes:"<p>新年快乐呀</p><p>你是不是要结婚了！</p><p>对头，是不是今年就结婚了！</p><p>说好的要找我开发项目呢！</p><p>项目呢！</p>",
		flag:false,
	},
	taomingjuan:{
		name:"姐姐~",
		wishes:"<p>新年快乐呀</p><p>小侄女和小侄子长得越来越好看啦！</p><p>聪明可爱还招人喜欢~</p><p>姐姐和姐夫都功不可没啊！</p><p>嗯，有空去三亚的时候再帮你带包啦</p>",
		flag:false,
	},
	yaolao:{
		name:"幺姥~",
		wishes:"<p>新年快乐呀</p><p>今年过年在哪里过呢</p><p>出去打牌要多赢点钱钱哦~</p><p>你们那个特产好好吃</p><p>那个淡黄色的 有肉的</p><p>有机会给我多带点哈！</p><p>嘿嘿嘿</p>",
		flag:false,
	},
	sanyi:{
		name:"三姨~",
		wishes:"<p>新年快乐呀</p><p>恭喜当婆婆了哟！！</p><p>看你一天这里耍那里耍</p><p>日子过得很滋润嘛</p><p>对头 就是要这么过</p><p>多享受生活</p><p>多发些照片</p<p>三姨永远都这么年轻好看~</p>",
		flag:false,
	},
	chenxiuzhu:{
		name:"姐姐~",
		wishes:"<p>新年快乐呀</p><p>一边当护士又一边代购</p><p>一定很辛苦吧</p><p>不过看你还是乐在其中的样子</p><p>能够喜欢现在的工作最好不过了</p><p>新的一年</p><p>祝你身体健康，多赚点钱</p>",
		flag:true,
	},
	simon:{
		name:"鑫鑫~",
		wishes:"<p>新年快乐呀</p><p>感觉自己很幸运</p><p>毕业之后的第一个工作就能碰到这么好的老大</p><p>我在微景接触和学习到了很多东西</p><p>像腾讯地图腾讯统计什么的，都是我以前不知道但是现在工作中又需要的</p><p>谢谢老大在成都给我们提供了一个轻松的工作环境</p><p>可能对老大来说，见过很多我这样的毕业生，对于感谢已经不足为奇了，但我还是要说</p><p>感恩老大。我爱微景天下。</p>",
		flag:false,
	},
	haven:{
		name:"haven同志~",
		wishes:"<p>新年快乐呀</p><p>很幸运和你一起用Vue做了项目</p><p>谢谢大神带我装逼带我用webpack</p><p>让我走在了时代的前沿</p><p>新的一年要多多交流</p><p>有逼一起装</p><p>说好的有空来海南我请你吃饭呢</p><p>我等着的哦</p>",
		flag:false,
	},
	hilary:{
		name:"雪儿姐姐~",
		wishes:"<p>新年快乐呀</p><p>我在海南超级想念你</p><p>还有你的那条狗狗</p><p>诶名字叫啥我忘了</p><p>海南也有奶盖茶</p><p>一喝就会想你</p><p>呜呜呜</p><p>不知道你现在房子买了没有</p><p>你要好好学习，早点考上MBA</p>",
		flag:true,
	},
	myfriend:{
		name:"我的朋友",
		wishes:"<p>每年的这个时候，</p><p>祝福就会象海洋涌向你，</p><p>希望我的祝福象一叶轻舟，</p><p>载你乘风破浪，</p><p>到达成功的彼岸!</p><p>欢欢喜喜迎新年，</p><p>万事如意平安年</p><p>，扬眉吐气顺心年，</p><p>梦想成真发财年，</p><p>事业辉煌成功年，</p><p>祝君岁岁有好年!</p>",
		flag:false

	}
}


$(document).ready(function() {
    $('#fullpage').fullpage({
    	verticalCentered:false,
    	'navigation': true,
        'navigationPosition': 'right',
    	afterLoad: function(anchorLink, index){
			var loadedSection = $(this);
			//using index
			if(index == 1){
				$("#p1AniWapper").append($p1Ani)
			}
			if(index == 2){
				$("#p2AniWapper").append($p2Ani)
			}
			if(index == 3){
				$("#p3AniWapper").append($p3Ani)
			}
		},
		onLeave:function(anchorLink, index){
			if(index == 1){
				$p1Ani=$("#p1Ani").remove();
			}
			if(index == 2){
				$p2Ani=$("#p2Ani").remove();
			}
			if(index == 3){
				$p3Ani=$("#p3Ani").remove();
			}
		}
    });
    getData();
    cancelLoading();
    letItSnow();
    bindEvent();

});
function getData(){
	var fromPerson=decodeURI(escape(getQueryString("fromPerson")));
	var toPerson=decodeURI(escape(getQueryString("toPerson")));

	$("#fromPerson").text(fromPerson);
	$("#toPerson").text(friend[toPerson].name);
	$("#words div").append(friend[toPerson].wishes);

	if(friend[toPerson].flag){
		$(".zhuanqian").addClass("hide");
	}else{
		$(".tuodan").addClass("hide");
	}
	
}
function bindEvent(){
	$("#music").click(function(){
		if($("#audio")[0].paused){
			$("#audio")[0].play();
			$("#music").removeClass("music_off").addClass("music_on");
		}else{
			$("#audio")[0].pause();
			$("#music").removeClass("music_onn").addClass("music_off");
		}
	});
}
function letItSnow(){
	$("canvas.snow").let_it_snow({
		windPower: 0,
		speed: 1,
		count: 300,
		size: 0,
	});
	
	$("canvas.redPocket").let_it_snow({
		windPower: 0,
		speed: 5,
		count: 10,
		size: 7,
		image: "img/redPocket.png"
	});
	$("canvas.bigSnow").let_it_snow({
		windPower: 0,
		speed: 5,
		count: 10,
		size: 7,
		image: "img/snow.png"
	});
	
}

function cancelLoading () {
    var loadingDiv = document.getElementById("loading");
    loadingDiv.style.display="none";
};

(function (doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      docEl.style.fontSize = 17 * (clientWidth / 320) + 'px';
    };
  if (!doc.addEventListener) return;
  //win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);

})(document, window);




function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}
