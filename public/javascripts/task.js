$(document).ready(function(){
    //展开收起
    $(".btn-nav").click(function () {
      $(".lvc-wrap").toggleClass("lvc-close")
      $("ol").toggleClass("small-ol")
      $(".next-layer ol").hide()

      if($("#lvc-nav").hasClass('lvc-close')){
        $(".next-layer ").removeClass("arrow")
      }
    })

    //选中状态
    $(".lvc-nav li").click(function () {
      $(this).siblings().find('ol').hide()
      $(this).addClass("active").siblings().removeClass("active")
    })

    //选中子集清除父级active
    $("ol>li").click(function (e) {
      console.log('ol>li clicked')
      e.stopPropagation()
     $(this).parent().parent().removeClass("active")
    })

    //二级导航展开收起
    $(".next-layer").click(function () {
      $(this).children("ol").toggle();
      $(this).toggleClass("arrow").siblings().removeClass("arrow")
    })


     $("ol li").click(function () {
       if($("ol").hasClass('small-ol')) {
         $(".small-ol").hide();
         $(this).parent().parent().addClass("active")
       }
     })
})
