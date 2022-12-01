// 3D swiper 
var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    effect: 'coverflow',
    loop: true,
    centerMode: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflow: {
        rotate: 0,
        stretch: 94,
        depth: 174,
        modifier: 1.5,
        slideShadows: false
    },
    breakpoints: {
        1024.9: {
            slidesPerView: '2',
            coverflow: {
                rotate: 0,
                stretch: 48,
                depth: 100,
                modifier: 2,
                slideShadows: false
            }
        },
        420: {
            slidesPerView: '1.5',
            coverflow: {
                rotate: 0,
                stretch: 82,
                depth: 100,
                modifier: 2,
                slideShadows: false
          }
        },
        375: {
            slidesPerView: '1.4',
            coverflow: {
                rotate: 0,
                stretch: 62,
                depth: 100,
                modifier: 2,
                slideShadows: false
            }
        }
    }
  });
