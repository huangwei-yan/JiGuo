$('.applyfor :button').click(function() {
    let a = $('.applyfor').children('ul').children('li').html().split('人');
    let b = Number(a[0]) + 1;
    $('.applyfor').children('ul').children('li').eq(0).html(b + '人' + a[1]);
});