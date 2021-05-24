var form = document.getElementsByClassName('field')[0];
form.onsubmit = function () {
    var reg = /^1[345789][0-9]{9}$/;
    var phone = form.phone.value;
    var reg1 = /^\d{4}$/;
    var yz1 = form.yz1.value;
    var yz2 = form.yz2.value;
    var nam = form.nam.value;
    var pw1 = form.pw1.value;
    var pw2 = form.pw2.value;
    if (reg.test(phone) == false) {
        alert('请输入正确的手机号');
    }
    else if (reg1.test(yz1) == false) {
        alert('请输入正确验证码');
    }
    else if (reg1.test(yz2) == false) {
        alert('请输入正确验证码');
    }
    else if (nam != 'admin') {
        alert('用户名输入错误');
    }
    else if (pw1 != '123456') {
        alert('密码输入错误');
    }
    else if (pw2 != pw1) {
        alert('密码输入错误');
    }
    return false;
}
var yanz = document.getElementsByClassName('yanzhengma')[0];
    yanz.onclick = function () {
        var tim = 60;
        var time = setInterval(function () {
            tim--;
            yanz.innerHTML = '(' + tim + ')' + '后重发';
            if (tim == 0) {
                clearInterval(time);
            }
        }, 1000)
    }






