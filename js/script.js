document.addEventListener(`DOMContentLoaded`, function () {
  // const headerArea = document.querySelector(`.header_area`)
  // headerArea.addEventListener(`mouseenter`, function () {
  //   headerArea.classList.add(`scroll`);
  // });

  const headerArea = document.querySelector(`.header_area`)
  const submenuBox = document.querySelector(`.sub_menu_box`);
  const submenuContent = document.querySelector(`.sub_menu_box .container`);
  headerArea.addEventListener(`click`, function () {
    headerArea.classList.toggle(`scroll`);
    submenuBox.classList.toggle(`active`);
    submenuContent.classList.add(`active`);
  });


  // 배너스와이퍼
  var swiper = new Swiper(".bannerSwiper", {
      loop:true,
  });

  // 프리미엄스와이퍼
  var swiper = new Swiper(".premiumSwiper", {
    loop: true,
      autoplay: {
      delay: 2200,
      disableOnInteraction: false, 
    },
  });

  //서브메뉴
  const hamburgerMenu = document.querySelector(`#hamburger`);
  // const submenuBox = document.querySelector(`.sub_menu_box`);
  // const submenuContent = document.querySelector(`.sub_menu_box .container`);
  // hamburgerMenu.addEventListener(`mouseenter`, function () { 
  //   submenuBox.classList.add(`active`);
  //   submenuContent.classList.add(`active`);
  // });

  // submenuBox.addEventListener(`mouseleave`, function () {
  //   this.classList.remove(`active`);
  // });

  // hamburgerMenu.addEventListener(`click`, function () {
  //   submenuBox.classList.toggle(`active`);
  // });
  
  
  // 작은그리드 서브메뉴
  // 햄버거버튼 클릭하면 서브메뉴박스 출력 / 햄버거버튼 위치 변경되도록 처리

  hamburgerMenu.addEventListener(`click`, function () { 
    this.classList.toggle(`on`);
    const hasClass = this.classList.contain(`active`);
    
    if (hasClass) {
      submenuBox.classList.add(`on`);
    } else {
      submenuBox.classList.remove(`on`);
    }
  });





    //마우스휠이벤트
  // window.addEventListener(`wheel`, (event) => {
  //   const headerArea = document.querySelector(`.header_area`);

  //   if (event.deltaY > 0) {
  //     headerArea.classList.remove(`scroll`);
  //     submenuBox.classList.remove(`active`);

  //   } else {
  //     headerArea.classList.add(`scroll`);
  //   }

  // });
  
  // .sec4 . container_border들에 마우스호버했을때(마우스엔터) border 안보이게 반복문
  // const roomcontentBox = document.querySelectorAll(`.content_box`); 
  // const roomcontainBorder = document.querySelectorAll(`.container_border`);

  //   for (let borderLine of roomcontainBorder) {
  //   borderLine.addEventListener(`mouseenter`, function () {
  //     borderLine.style.border = 'none';


  //     for (let siblings of roomcontainBorder) {
  //       if (siblings != this) {
  //         siblings.style.borderTop = '1px solid #7A7269';
  //       }
  //     }
  //   });
  // }

  
  const borderContainer1 = document.querySelector(`.box1 .con_bor1`);
  const borderContainer2 = document.querySelector(`.box2 .con_bor2`);
  const borderContainer3 = document.querySelector(`.box3 .con_bor3`);

  borderContainer1.addEventListener(`mouseenter`, function () {
    borderContainer1.style.borderTop = 'none';
    borderContainer2.style.borderTop = 'none';
    borderContainer3.style.borderTop = '1px solid #7A7269';
  });
  borderContainer1.addEventListener(`mouseleave`, function () {
    borderContainer1.style.borderTop = '1px solid #7A7269';
    borderContainer2.style.borderTop = '1px solid #7A7269';
  });
    
  borderContainer2.addEventListener(`mouseenter`, function () {
    borderContainer2.style.borderTop = 'none';
    borderContainer3.style.borderTop = 'none';
    
  });

  borderContainer2.addEventListener(`mouseleave`, function () {
    borderContainer3.style.borderTop = '1px solid #7A7269';
  });
  
  borderContainer3.addEventListener(`mouseenter`, function () {
    borderContainer3.style.borderTop = 'none';
    borderContainer2.style.borderTop = '1px solid #7A7269';
    
  });

  borderContainer3.addEventListener(`mouseleave`, function () {
    borderContainer3.style.borderBottom = '1px solid #7A7269';
    borderContainer3.style.borderTop = '1px solid #7A7269';
  });


  

  

  

  

  



});
