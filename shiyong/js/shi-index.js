 function ff() {
     let ul = document.getElementById('lis');
     let xhr = new XMLHttpRequest();
     xhr.open('get', 'http://1.15.132.9:3000/useing/master');
     xhr.send();
     xhr.onreadystatechange = function() {
         if (xhr.readyState == 4) {
             if (xhr.status == 200) {
                 let str = JSON.parse(xhr.response);
                 let tmpText = doT.template(document.getElementById('do').innerHTML);
                 ul.innerHTML = tmpText(str);
             }
         }
     }
 }
 ff();
 //  体验师专想
 $('#drawing').click(function() {
     //  alert(123)
     let ul = document.getElementById('lis');
     let xhr = new XMLHttpRequest();
     xhr.open('get', 'http://1.15.132.9:3000/useing/public');
     xhr.send();
     xhr.onreadystatechange = function() {
             if (xhr.readyState == 4) {
                 if (xhr.status == 200) {
                     let str = JSON.parse(xhr.response);
                     let tmpText = doT.template(document.getElementById('do').innerHTML);
                     ul.innerHTML = tmpText(str);
                 }
             }
         }
         // style="border-bottom: 4px red solid; color: #fe5431;"
     $(this).css({ borderBottom: '4px red solid', color: '#fe5431' })
         .prev().css({ borderBottom: 'none', color: '#a3a3a3' });


     $('#apply-3').css('color', '#000').siblings().css('color', '#a3a3a3');

     $('.goods').css('height', '980px');

     $('.loading').html('点击看查更多').css('color', 'red');


     setTimeout(function() {
         $('.Com-4').each(function() {
             let b = $(this).html();
             if (b == '体验师转享') {
                 $(this).css('backgroundColor', '#FBF4CB');
                 $(this).css('color', '#C4A96A');
             }
         })

     }, 1000);
 })

 $('#drawing-1').click(function() {
     ff();
     // style="border-bottom: 4px red solid; color: #fe5431;"
     $(this).css({ borderBottom: '4px red solid', color: '#fe5431' })
         .siblings('#drawing').css({ borderBottom: 'none', color: '#a3a3a3' });

     $('#apply-3').css('color', '#000').siblings().css('color', '#a3a3a3');

     $('.goods').css('height', '1297px');
     $('.loading').html('<img src="../img/more.png" alt=""> 点击看查更多').css('color', 'red');

     setTimeout(function() {
         $('.Com-4').each(function() {
             let b = $(this).html();
             if (b == '体验师转享') {
                 $(this).css('backgroundColor', '#FBF4CB');
                 $(this).css('color', '#C4A96A');
             }
         })

     }, 1000);
 })
 $('#apply-3').click(function() {
     ff();
     $('#apply-3').css('color', '#000').siblings().css('color', '#a3a3a3');

     $('.goods').css('height', '1297px');

     $('.loading').html('<img src="../img/more.png" alt=""> 点击看查更多').css('color', 'red');
     setTimeout(function() {
         $('.Com-4').each(function() {
             let b = $(this).html();
             if (b == '体验师转享') {
                 $(this).css('backgroundColor', '#FBF4CB');
                 $(this).css('color', '#C4A96A');
             }
         })

     }, 1000);
 })

 //
 setTimeout(function() {
     $('.Com-4').each(function() {
         let b = $(this).html();
         if (b == '体验师转享') {
             $(this).css('backgroundColor', '#FBF4CB');
             $(this).css('color', '#C4A96A');
         }
     })

 }, 1000);

 //  申请
 $('#apply').click(function() {
     //  alert(123)
     let ul = document.getElementById('lis');
     let xhr = new XMLHttpRequest();
     xhr.open('get', 'http://1.15.132.9:3000/useing/public');
     xhr.send();
     xhr.onreadystatechange = function() {
         if (xhr.readyState == 4) {
             if (xhr.status == 200) {
                 let str = JSON.parse(xhr.response);
                 let tmpText = doT.template(document.getElementById('do').innerHTML);
                 ul.innerHTML = tmpText(str);
             }
         }
     }
     $(this).css('color', '#000').siblings().css('color', '#a3a3a3');


     $('.goods').css('height', '980px');

     $('.loading').html('没有更多了').css('color', '#a3a3a3');

     setTimeout(function() {
         $('.Com-1').children('span').css({ border: 'red 1px solid ', color: 'red' });
         $('.Com-3').css('color', 'red');
         $('.Com-4').each(function() {
             let b = $(this).html();
             if (b == '体验师转享') {
                 $(this).css('backgroundColor', '#FBF4CB');
                 $(this).css('color', '#C4A96A');
             }
         })

     }, 1000);
 })

 //  试用


 $('#apply-1').click(function() {
     //  alert(123)
     let ul = document.getElementById('lis');
     let xhr = new XMLHttpRequest();
     xhr.open('get', 'http://1.15.132.9:3000/useing/master');
     xhr.send();
     xhr.onreadystatechange = function() {
         if (xhr.readyState == 4) {
             if (xhr.status == 200) {
                 let str = JSON.parse(xhr.response);
                 let tmpText = doT.template(document.getElementById('do').innerHTML);
                 ul.innerHTML = tmpText(str);
             }
         }
     }
     $(this).css('color', '#000').siblings().css('color', '#a3a3a3');

     $('.goods').css('height', '1297px');

     $('.loading').html('没有更多了').css('color', '#a3a3a3');




     setTimeout(function() {
         $('.Com-1').children('span').css({ border: '#7FC068 1px solid ', color: '#7FC068' });
         $('.Com-3').css('color', '#7FC068');
         $('.Com-4').each(function() {
             let b = $(this).html();
             if (b == '体验师转享') {
                 $(this).css('backgroundColor', '#FBF4CB');
                 $(this).css('color', '#C4A96A');
             }
         })

     }, 1000);

 })


 $('#apply-2').click(function() {
     //  alert(123)
     let ul = document.getElementById('lis');
     let xhr = new XMLHttpRequest();
     xhr.open('get', 'http://1.15.132.9:3000/useing/public');
     xhr.send();
     xhr.onreadystatechange = function() {
         if (xhr.readyState == 4) {
             if (xhr.status == 200) {
                 let str = JSON.parse(xhr.response);
                 let tmpText = doT.template(document.getElementById('do').innerHTML);
                 ul.innerHTML = tmpText(str);
             }
         }
     }
     $(this).css('color', '#000').siblings().css('color', '#a3a3a3');


     $('.goods').css('height', '980px');


     $('.loading').html('没有更多了').css('color', '#a3a3a3');
     setTimeout(function() {
         $('.Com-4').each(function() {
             let b = $(this).html();
             if (b == '体验师转享') {
                 $(this).css('backgroundColor', '#FBF4CB');
                 $(this).css('color', '#C4A96A');
             }
         })

     }, 1000);
 })