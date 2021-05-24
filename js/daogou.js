$(function() {
    $('#jiazai>a').click(function() {
        $('#jiazai>img').attr('src', "../img/loading-icon.gif");
        $('#jiazai>img').css('margin-bottom', '-5px');
        $('#jiazai>a').text('正在加载中');
    })
    $('#dg-xin').on({
        mouseenter: function() {
            $('#dg-xin>img').attr('src', '../img/xinRedh.png');
            $('#dg-xin>p').css('color', '#fe5431');
        },
        mouseleave: function() {
            $('#dg-xin>img').attr('src', '../img/xinRedo.png');
            $('#dg-xin>p').css('color', '#a3a3a3');
        }
    })
    $('#dg-share').on({
        mouseenter: function() {
            $('#dg-share>img').attr('src', '../img/shareh_yj1.png');
            $('#dg-share>p').css('color', '#fe5431');
        },
        mouseleave: function() {
            $('#dg-share>img').attr('src', '../img/share_yj1.png');
            $('#dg-share>p').css('color', '#a3a3a3');
        }
    })
    $('.bg-left>#bg-footer>a').click(function() {
        $('.bg-left>#bg-footer>img').attr('src', "../img/loading-icon.gif");
        $('.bg-left>#bg-footer>img').css('width', '20px');
        $('.bg-left>#bg-footer>img').css('height', '20px');
        $('.bg-left>#bg-footer>a').innerHTML('正在加载中');

    })

})
var ajax = new XMLHttpRequest() || new ActiveXObject();
ajax.open('get', 'http://1.15.132.9:3000/guid/hot', true);
ajax.send();
ajax.onreadystatechange = function() {
    if (ajax.readyState == 4) {
        if (ajax.status == 200) {
            //数据源   json字符串转接送对象
            var data = JSON.parse(ajax.responseText);
            //4\调用方式  找到模板 把数据传进去*/
            // var tmpText = doT.template(模板);
            // tmpText(数据源);
            // console.log(data);
            // console.log(document.getElementById('gd-new').innerHTML);
            var tmpText = doT.template(document.getElementById('gd-new').innerHTML);
            console.log(tmpText(data));
            document.getElementsByClassName('dg-con')[0].innerHTML = tmpText(data);
        } else {
            console.log('失败');
        }
    }
}