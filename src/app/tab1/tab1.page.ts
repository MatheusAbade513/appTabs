
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss']
})
export class Tab1Page {
  showForm: boolean = false;
  email: string = '';
  password: string = '';

  openForm() {
    this.showForm = !this.showForm;
  }

  closeForm() {
    this.showForm = false;
  }

  submitForm() {
    // Handle login logic here using this.email and this.password
    console.log('Login submitted:', this.email, this.password);
  }

  register() {
    // Handle registration logic here using this.email and this.password
    console.log('Registration submitted:', this.email, this.password);
  }
}