import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  homeForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private navCtrl: NavController) {}

  ngOnInit() {
    this.homeForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit() {
    if (this.homeForm.valid) {
      const loginData = this.homeForm.value;
      console.log('Login successful with data:', loginData);
      this.navCtrl.navigateForward('/hall');
    }
  }
}
