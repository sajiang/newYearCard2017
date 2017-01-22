var shareData = {
    title: '给您拜年啦',
    desc: '祝您生意兴隆，财源广进',
    link: 'http://m.sspp.co/happy2017/index.html?shipname=',
    imgUrl: 'http://webapp.visualbusiness.cn/app/api/editor/loadBytes.do?uid=71FB4D11-3459-4F9C-8A71-E1E1E31D1758'
  };
var SimpleXhrFactory=(function(){
    var standard={
        createXhrObj:function(){
            return new XMLHttpRequest();
        }
    };
    var activeXNew={
        createXhrObj:function(){
            return new ActiveXObject("Msxml2.XMLHTTP");
        }
    } ;
    var activeXOld={
        createXhrObj:function(){
            return new ActiveXObject("Microsoft.XMLHTTP");
        }
    };

    var testObj;
    try{
        testObj=standard.createXhrObj();
        return standard;
    }
    catch(e){
        try{
            testObj=activeXNew.createXhrObj();
            return activeXNew;
        }
        catch(e){
            try{
                testObj=activeXOld.createXhrObj();
                return activeXOld;
            }
            catch(e){
                throw new Error("当前环境没有XHR对象");
            }
        }
    }
})();

  var nonceStr;
  var timeStamp;
  var signature;
  

	function initConfig() {
	 wx.config({
      debug: false,
      appId: 'wx2c3564a3bb8ca88e',
      timestamp: timeStamp,
      nonceStr: nonceStr,
      signature: signature,
      jsApiList: [
          'openLocation',
          'checkJsApi',
          'onMenuShareTimeline',
          'onMenuShareAppMessage',
          'onMenuShareQQ',
          'onMenuShareWeibo',
          'onMenuShareQZone'
        
      ]
	});
        
    wx.ready(function(){
            wx.onMenuShareAppMessage(shareData);
			     wx.onMenuShareTimeline(shareData);
        });
	}

 function getShareInfo(url) {
	 var newUrl = url.replace(new RegExp("&","g"),"%26");
	 var mUrl = 'http://192.168.0.245:8080/WeiXin/WeiXin.ashx?act=signature&url='+newUrl;
     var xhr=SimpleXhrFactory.createXhrObj();
     xhr.onreadystatechange=function(){
         if(xhr.readyState==4){
             if((xhr.status>=200&&xhr.status<300)||xhr.status==304){
                 var dataJson = eval("("+xhr.responseText+")");
                 nonceStr = dataJson.noncestr;
                 timeStamp = dataJson.timestamp;
                 signature = dataJson.signature;
                 initConfig();
             }
         }
     }
     xhr.open("get",mUrl,true); //第三个参数表示是否异步
     xhr.send(null);
  }