import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IpGeolocationService } from 'src/app/services/ip-geolocation.service';
import Swiper from 'swiper';

interface Slide {
  image: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-galeria-nacional',
  templateUrl: './galeria-nacional.page.html',
  styleUrls: ['./galeria-nacional.page.scss'],
})
export class GaleriaNacionalPage implements OnInit {
  slides: Slide[] = [];
  country!: string;

  constructor(private ipGeolocationService: IpGeolocationService) { }

  ngOnInit() {
    this.ipGeolocationService.getGeolocation().subscribe(
      (data) => {
        this.country = data.country;
        this.loadGalleryContent(this.country);
      },
      (error) => {
        console.error('Error fetching geolocation data:', error);
      }
    );
  }

  loadGalleryContent(country: string) {
    if (country === 'Chile') {
      this.slides = [
        { image: 'assets/images/ChileM/art1.jpg', title: '"Iglesia Divina Providencia" - Alfredo Helsby', description: 'Óleo sobre tela\r\n55 x 76 cm' },
        { image: 'assets/images/ChileM/art2.jpg', title: '"Lección de geografía" - Alfredo Valenzuela Puelma', description: 'Óleo sobre tela\r\n82 x 111 cm' },
        { image: 'assets/images/ChileM/art3.jpg', title: '"Fango original, ojo con los desarrolladores" - Roberto Matta', description: 'Óleo sobre tela\r\n265 x 486 cm' }
      ];
    } else if (country === 'United States') {
      this.slides = [
        { image: 'assets/images/SpainM/art1.jpg', title: '"San Francisco de Asís en éxtasis" - Francisco de Zurbarán', description: 'Óleo sobre lienzo\r\n101,2 cm × 75,5 cm' },
        { image: 'assets/images/SpainM/art2.jpg', title: '"Las Meninas" - Diego Velázquez', description: 'Óleo sobre lienzo\r\n318 x 276 cm' }
      ];
    }
    // Agrega más condiciones según tus necesidades
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