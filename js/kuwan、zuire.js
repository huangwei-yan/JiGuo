$('#jiazai>a').click(function(){
    $('#jiazai>img').attr('src',"../img/loading-icon.gif");
    $('#jiazai>img').css('margin-bottom','50px');
    $('#jiazai>a').text('正在加载中');
})
// 酷玩
function fxkuwan() {
    var ajax_2 = new XMLHttpRequest || new ActiveXObject('Microsoft.XMLHTTP');
    ajax_2.open('get', 'http://1.15.132.9:3000/play/new', true);
    ajax_2.send();
    ajax_2.onreadystatechange = function () {
        if(ajax_2.readyState==4){
            if(ajax_2.status==200){
                var res2=JSON.parse(ajax_2.responseText);
                console.log(res2);
                var text_2 = doT.template(document.getElementById('xls2').innerHTML);
                    document.getElementById('lis3').innerHTML=text_2(res2[2]);
                
            }
        }
    }
}
function fxkuwan_() {
    var ajax_3 = new XMLHttpRequest || new ActiveXObject('Microsoft.XMLHTTP');
    ajax_3.open('get', 'http://1.15.132.9:3000/play/new', true);
    ajax_3.send();
    ajax_3.onreadystatechange = function () {
        if(ajax_3.readyState==4){
            if(ajax_3.status==200){
                var res3=JSON.parse(ajax_3.responseText);
                console.log(res3);
                var text_3 = doT.template(document.getElementById('xls3').innerHTML);
                    document.getElementById('lis4').innerHTML=text_3(res3[2]);
                
            }
        }
    }
}
fxkuwan();
fxkuwan_();