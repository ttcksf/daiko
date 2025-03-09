// ------------------------------------------
//  ハンバーガーメニュー
// ------------------------------------------
document.querySelector('.drawer-icon').addEventListener('click', function () {
    const body = document.querySelector('body');
    const siteMenu = document.querySelector('.drawer-content');
    const drawerIcon = document.querySelector('.drawer-icon');

    if (!body.classList.contains('is-active')) {
        scrollsPos = window.scrollY;
    }
    body.style.top = `-${window.scrollY}px`;

    // クリックした時に is-active クラスを付与/削除
    drawerIcon.classList.toggle('is-active');
    siteMenu.classList.toggle('is-active');
    body.classList.toggle('is-active');

    window.scrollTo({ top: scrollsPos, behavior: "instant" });
});

document.querySelectorAll('.drawer-menu a').forEach(link => {
    link.addEventListener('click', function () {
        document.querySelector('.drawer-icon').classList.remove('is-active');
        document.querySelector('.drawer-content')?.classList.remove('is-active'); // `.drawer-content` が存在する場合のみ処理
        document.querySelector('.drawer-menu').classList.remove('is-active');
        document.querySelector('body').classList.toggle('is-active');
    });
});

// ------------------------------------------
//  サービススライダー
// ------------------------------------------
const mySwiper = new Swiper('.serviceSwiper', {
    loop: false,
    slidesPerView: 1.2, 
    slidesPerView: 'auto', 
    spaceBetween: 30, // スライド間の余白（px）
    breakpoints: { // ブレークポイント
        768: { // 画面幅768px以上で適用
            // slidesPerView: 4.35,
            spaceBetween: 20,
        }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });