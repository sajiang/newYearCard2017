$p1Ani={};
$p2Ani={};
$p3Ani={};


var friend={
	weiwei:{
		name:"胃胃",
		wishes:"<p>happy New Year</p><p>新年收到某人祝福还是很感动呀</p>",
		flag:0,
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
