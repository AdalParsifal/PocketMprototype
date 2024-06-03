import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import Swiper from 'swiper';;

@Component({
  selector: 'app-galeria-nacional',
  templateUrl: './galeria-nacional.page.html',
  styleUrls: ['./galeria-nacional.page.scss'],
})
export class GaleriaNacionalPage implements OnInit {
  slides = [
    { image: 'assets/images/art1.jpg', title: '"Iglesia Divina Providencia" - Alfredo Helsby', description: 'Óleo sobre tela\r\n55 x 76 cm' },
    { image: 'assets/images/art2.jpg', title: '"Lección de geografía" - Alfredo Valenzuela Puelma', description: 'Óleo sobre tela\r\n82 x 111 cm' },
    { image: 'assets/images/art3.jpg', title: '"Fango original, ojo con los desarrolladores" - Roberto Matta', description: 'Óleo sobre tela\r\n265 x 486 cm' }
  ];

  constructor() { }

  ngOnInit() {
  }
  toggleZoom(swiperSlide: any) {
    const swiper = (swiperSlide.target as HTMLElement).closest('swiper-container')?.swiper as Swiper;
    if (swiper) {
      const nextButton = swiper.el.querySelector('.swiper-button-next') as HTMLElement;
      const prevButton = swiper.el.querySelector('.swiper-button-prev') as HTMLElement;
      const paginationBullets = swiper.el.querySelector('.swiper-pagination') as HTMLElement;
  
      if (swiper.zoom.enabled) {
        swiper.zoom.out();
        swiper.zoom.disable();
        if (nextButton && prevButton) {
          nextButton.style.display = 'block';
          prevButton.style.display = 'block';
        }
        if (paginationBullets) {
          paginationBullets.style.display = 'block';
        }
      } else {
        swiper.zoom.enable();
        swiper.zoom.in();
        if (nextButton && prevButton) {
          nextButton.style.display = 'none';
          prevButton.style.display = 'none';
        }
        if (paginationBullets) {
          paginationBullets.style.display = 'none';
        }
      }
    }
  }  
}