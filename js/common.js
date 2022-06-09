$(function(){
  // console.log($("body"));
  // console.log(window.location.href);
  // console.log($(location).attr("href"));
  // console.log($("#lnb ul li a").attr("href"));
  // 실습:
  // #lnb의 메뉴와 같은 서브페이지의 주소값을 매칭하여
  // 해당 메뉴에 on class 추가하시오.

  // 내 코드
  // let split_str = $(location).attr("href").split('/');
  // let x = split_str[split_str.length-1];
  // console.log(x);
  // $("#lnb ul li a").each(function (index, item) {
  //   let split_str2 = $(item).attr("href").split('/');
  //   let y = split_str2[split_str2.length-1];
  //   console.log(y);
  //   if(x == y){
  //     $(item).addClass("on");
  //   }
  // });

  // 강사님 코드
  // let currentHref = $(location).attr("href").split('/');
  // currentHref = currentHref[currentHref.length-1].split('.');
  // currentHref = currentHref[0]
  // console.log(currentHref);
  //
  // $("#lnb a").each(function(){
  //   let matchHref = $(this).attr("href").split('/');
  //   matchHref = matchHref[matchHref.length-1].split('.');
  //   matchHref = matchHref[0];
  //   console.log(matchHref);
  //   if(currentHref == matchHref){
  //     $(this).addClass("on");
  //   }
  // });

  // 실습:
  // location href split 코드에서 공통부분을 함수화 하시오.

  let currentHref = splitFunc(location);

  $("#lnb a").each(function(){
    let matchHref = splitFunc(this);
    if(currentHref == matchHref){
      $(this).addClass("on");
    }
  });

  function splitFunc(href){
    let funcHref = $(href).attr("href").split('/');
    funcHref = funcHref[funcHref.length-1].split('.');
    funcHref = funcHref[0];
    return funcHref;
    console.log(funcHref);
  }

  $(".accordion dd:not(:first)").css({
    "display":"none",
    "height": 0
  })

  $(".accordion dl dt").click(function(){
    let thisElem = $(this);
    // console.log($("+dd", this).text());
    // console.log(thisElem);
    if($("+dd", thisElem).css("display") == "none"){
      // $("dd").slideUp("slow");
      // $("+dd", this).slideDown("slow");
      let isAni = $(".accordion dd").is(":animated");
      if( !isAni ){
        $("dd").each(function(){
          console.log($(this));
          // 1.
          // if($(this).css("display") == "block"){
          //   $(this).animate({ height: 0 },"slow",function(){
          //     console.log($(this).text());
          //     $(this).css("display", "none");
          //   });
          // }
          // 2.
          if(parseInt($(this).css("height")) == 200){
            $(this).animate({ height: 0 },200,function(){
              $(this).css("display", "none");
            });
          }
        });
        $("+dd", thisElem).css("display", "block").animate({ height: 200 },400);
      }
    }
  });

});
