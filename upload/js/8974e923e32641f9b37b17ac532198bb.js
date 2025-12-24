$(function(){
    // 页面高亮
    $('[data-id=' + pageObj._detailId + ']').addClass('active');

  	// 默认控件——图片放大【勿改】
      $(".fancyImg").each(function(){
        let fancyImg = $(this).find("img").attr("src");
        $(this).parents(".fancyboxHz").attr("data-src",fancyImg)
    });  

  	
  	// 无控件——图片放大
    $('.fancyImg-02 img').each(function(){
      let iText = $(this).attr('alt');
      $(this).parent().append('<p>'+ iText +'</p>');
      $(this).parents(".fancyboxHz").attr("data-caption",iText)
    });


    // ==> 效果组件JS
    // 图片放大-02 图集参数
    $require(['swiper'], function () {
        var imgTuBox = new Swiper ('.imgTuBig', {
          slidesPerGroup : 1,	//滚动个数
          slidesPerView : 2,  //列
          spaceBetween : 15,  //右边距
          grid: {
              fill: 'row',
              rows: 1, //行
          },
          pagination: {
            el: '.imgTuBig .swiper-pagination',
            clickable :true,
          },
          navigation: {
            nextEl: '.imgTuBig .swiper-button-next',
            prevEl: '.imgTuBig .swiper-button-prev',
          },
          breakpoints: { 
            768: {  //当屏幕宽度大于等于768 
              slidesPerView: 5,
              spaceBetween : 20,  //右边距
            },
          }
        })  
      })

    // 图片放大-03 参数参考https://www.dowebok.com/214.html*/

})


$(document).scroll(function(){
    // 页面往下滚动后添加的类名
    if(window.scrollY >= 50){
        $('body > .main > div:nth-child(1)').addClass('downClass');
    }else{
        $('body > .main > div:nth-child(1)').removeClass('downClass');
    }
    // 【使用方法】
    // 1、使用时可自由设置距离顶部的高度
    // 2、downClass类名如不满足可自由编辑为其他类名
    // 3、具体实现的样式需要自行到样式文件里定义downClass或者已修改为其他的类名样式
});