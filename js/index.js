setInterval(function () {
    var date = new Date();
    var date1 = new Date(2021, 5, 1);
    var date2 = date1 - date;
    var day = Math.floor(date2 / 1000 / 60 / 60 / 24);
    var hour = Math.floor(date2 / 1000 / 60 / 60 % 24);
    var min = Math.floor(date2 / 1000 / 60 % 60);
    var s = Math.floor(date2 / 1000 % 60);
    document.getElementById('day1').innerHTML = '申请时间剩余' + day + '天' + hour + '时' + min + '分' + s + '秒';
}, 1000)
function show() {
    var ajax_ = new XMLHttpRequest || new ActiveXObject('Microsoft.XMLHTTP');
    ajax_.open('get', 'http://1.15.132.9:3000/useing/public', true);
    ajax_.send();
    ajax_.onreadystatechange = function () {
        if(ajax_.readyState==4){
            if(ajax_.status==200){
                var res=JSON.parse(ajax_.responseText);
                // console.log(res);
                var text_ = doT.template(document.getElementById('xls').innerHTML);
                    document.getElementById('lis1').innerHTML=text_(res);
                
            }
        }
    }
}
show();
function daogou() {
    var ajax_1 = new XMLHttpRequest || new ActiveXObject('Microsoft.XMLHTTP');
    ajax_1.open('get', 'http://1.15.132.9:3000/useing/public', true);
    ajax_1.send();
    ajax_1.onreadystatechange = function () {
        if(ajax_1.readyState==4){
            if(ajax_1.status==200){
                var res1=JSON.parse(ajax_1.responseText);
                // console.log(res1);
                var text_1 = doT.template(document.getElementById('xls1').innerHTML);
                    document.getElementById('lis2').innerHTML=text_1(res1);
                
            }
        }
    }
}
daogou();
function fxkuwan() {
    var ajax_2 = new XMLHttpRequest || new ActiveXObject('Microsoft.XMLHTTP');
    ajax_2.open('get', 'http://1.15.132.9:3000/play/new', true);
    ajax_2.send();
    ajax_2.onreadystatechange = function () {
        if(ajax_2.readyState==4){
            if(ajax_2.status==200){
                var res2=JSON.parse(ajax_2.responseText);
                // console.log(res2);
                var text_2 = doT.template(document.getElementById('xls2').innerHTML);
                    document.getElementById('lis3').innerHTML=text_2(res2[1]);
                
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
                    document.getElementById('lis4').innerHTML=text_3(res3[1]);
                
            }
        }
    }
}
fxkuwan();
fxkuwan_();
$('#jiazai>a').click(function(){
    $('#jiazai>img').attr('src',"./img/loading-icon.gif");
    $('#jiazai>img').css('margin-bottom','50px');
    $('#jiazai>a').text('正在加载中');
})

