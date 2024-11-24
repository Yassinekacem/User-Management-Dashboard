import { Component } from '@angular/core';
import { AuthentificationService } from '../services/authentification.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private authService: AuthentificationService) {}
  isAdmin(): boolean {
    return this.authService.isAdmin();
  }
}


