import { Component, OnInit } from '@angular/core';
import { IonicSlides } from '@ionic/angular';


@Component({
  selector: 'app-galeria-nacional',
  templateUrl: './galeria-nacional.page.html',
  styleUrls: ['./galeria-nacional.page.scss'],
})
export class GaleriaNacionalPage implements OnInit {
  slides = [
    { image: 'assets/images/art1.jpg', title: 'Artwork 1' },
    { image: 'assets/images/art2.jpg', title: 'Artwork 2' },
    { image: 'assets/images/art3.jpg', title: 'Artwork 3' }
  ];
  swiperModules = [IonicSlides];

  constructor() { }

  ngOnInit() {
  }

}
