import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../../models/admin';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Ensure styleUrls is correct, not styleUrl
  })export class LoginComponent {
    admin: Admin=new Admin();
  errorMessage: string | undefined;

  constructor(private router: Router) {
      // Initialize with default values
  }

  onSubmit() {
    // Mock authentication
    if (this.admin.adminName === 'admin' && this.admin.adminpassword === 'password' && this.admin.adminemail==='admin123@gmail.com' ) {
      localStorage.setItem('admin', JSON.stringify(this.admin));
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage = 'Invalid credentials';
    }
  }
}
