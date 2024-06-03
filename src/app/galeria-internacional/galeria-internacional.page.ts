import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria-internacional',
  templateUrl: './galeria-internacional.page.html',
  styleUrls: ['./galeria-internacional.page.scss'],
})
export class GaleriaInternacionalPage implements OnInit {
  novedades = [
    { image: 'assets/images/novedad1.jpg', title: 'Novedad 1' },
    { image: 'assets/images/novedad2.jpg', title: 'Novedad 2' },
    { image: 'assets/images/novedad3.jpg', title: 'Novedad 3' },
    { image: 'assets/images/novedad4.jpg', title: 'Novedad 4' }
  ];

  galerias = [
    'Galería 1',
    'Galería 2',
    'Galería 3',
    'Galería 4',
    'Galería 5',
    'Galería 6'
  ];

  constructor() { }

  ngOnInit() { }

  filterGalerias(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.galerias = this.galerias.filter(galeria => galeria.toLowerCase().includes(searchTerm));
  }
}
