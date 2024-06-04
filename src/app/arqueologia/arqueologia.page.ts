import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arqueologia',
  templateUrl: './arqueologia.page.html',
  styleUrls: ['./arqueologia.page.scss'],
})
export class ArqueologiaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  navigateTo(gallery: string) {
    alert(`Navegar a la galería de ${gallery}`); // Aquí puedes implementar la lógica de navegación real
  }

}
