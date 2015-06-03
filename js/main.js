function searchPlaceHolder(){
    
    $("[placeholder]").focus(function () {
        if ($(this).val() == $(this).attr("placeholder")) $(this).val("");
    }).blur(function () {
        if ($(this).val() == "") $(this).val($(this).attr("placeholder"));
    }).blur();

    $("[placeholder]").parents("form").submit(function () {
        $(this).find('[placeholder]').each(function() {
            if ($(this).val() == $(this).attr("placeholder")) {
                $(this).val("");
            }
        });
    });
}
$(document).ready(function(){
//    var cBrowser = function() {
        var ua = navigator.userAgent;
        var bName = function () {
            if (ua.search(/MSIE/) > -1) return "ie";
            if (ua.search(/Firefox/) > -1) return "firefox";
            if (ua.search(/Opera/) > -1) return "opera";
            if (ua.search(/Chrome/) > -1) return "chrome";
            if (ua.search(/Safari/) > -1) return "safari";
            if (ua.search(/Konqueror/) > -1) return "konqueror";
            if (ua.search(/Iceweasel/) > -1) return "iceweasel";
            if (ua.search(/SeaMonkey/) > -1) return "seamonkey";
        }();
        var version = function (bName) {
            switch (bName) {
                case "ie" : return (ua.split("MSIE ")[1]).split(";")[0];break;
                case "firefox" : return ua.split("Firefox/")[1];break;
                case "opera" : return ua.split("Version/")[1];break;
                case "chrome" : return (ua.split("Chrome/")[1]).split(" ")[0];break;
                case "safari" : return (ua.split("Version/")[1]).split(" ")[0];break;
                case "konqueror" : return (ua.split("KHTML/")[1]).split(" ")[0];break;
                case "iceweasel" : return (ua.split("Iceweasel/")[1]).split(" ")[0];break;
                case "seamonkey" : return ua.split("SeaMonkey/")[1];break;
            }
        }(bName);
        n=1;
        function loadOurScript(source){
    var head = document.getElementsByTagName("head")[0];
    script=document.createElement('script');
    script.type='text/javascript';
    script.id = 'ac'+n;
    script.src=source;
//    script.write();
    head.appendChild(script);
//    $('#ac'+n).trigger('load');
    n++;
   }
        if(bName=='ie'){
            switch(version){
                case '6.0' : 
                    loadOurScript('pie/PIE_IE678.js');
                    searchPlaceHolder();
                    break;
                case '8.0' : 
                    loadOurScript('pie/PIE_IE678.js');
                    loadOurScript('http://ie7-js.googlecode.com/svn/version/2.1(beta4)/IE8.js');
                    searchPlaceHolder();
                    break;
                case '7.0' : 
                    loadOurScript('pie/PIE_IE678.js');
                    loadOurScript('http://ie7-js.googlecode.com/svn/version/2.1(beta4)/IE7.js');
                    searchPlaceHolder();
//                    document.write('<script src="http://ie7-js.googlecode.com/svn/version/2.1(beta4)/IE7.js"></script>');
                    
                    break;
                case '9.0' : 
                    loadOurScript('pie/PIE_IE9.js');
                    loadOurScript('http://ie7-js.googlecode.com/svn/version/2.1(beta4)/IE9.js');
                    searchPlaceHolder();
//                    loadOurScript('pie/PIE_IE9.js');
                    break;
            }
        }
        
//        return  [
//            bName,
//            version.split(".")[0],
//            bName + version
//        ];
        
//    }
//    console.log(cBrowser);
//    setTimeout(function(){
//        var oBrowser = cBrowser();
//        console.log(oBrowser);
//    },1000);
//    console.log(navigator.userAgent);
});