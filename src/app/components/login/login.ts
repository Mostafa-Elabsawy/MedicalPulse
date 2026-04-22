import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type AuthMode = 'login' | 'register';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
})
export class Login {
  mode: AuthMode = 'login';

  name = '';
  email = '';
  password = '';
  remember = false;

  toggleMode() {
    this.mode = this.mode === 'login' ? 'register' : 'login';
  }

  onSubmit() {
    if (this.mode === 'login') {
      console.log('LOGIN', {
        email: this.email,
        password: this.password,
        remember: this.remember,
      });
    } else {
      console.log('REGISTER', {
        name: this.name,
        email: this.email,
        password: this.password,
      });
    }
  }
}
