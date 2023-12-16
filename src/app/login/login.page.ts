import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service'; 

@Component({
  selector: 'app-login', 
  templateUrl: 'login.page.html', 
  styleUrls: ['login.page.scss'],
})
export class LoginPage { 

  // Données pour les identifiants de connexion
  credentials = {
    email: '',
    password: ''
  };

  errorMessage: string | null = null; // Une chaîne de caractères pour stocker les messages d'erreur

  constructor(private authService: AuthService, private router: Router) {}

  // Méthode pour effectuer la connexion
  login() {
    this.authService.login(this.credentials).subscribe(
      () => {
        this.router.navigate(['/annonces']); // Redirige vers la page des annonces après la connexion réussie
      },
      error => {
        this.errorMessage = error; // Afficher l'erreur sur la page si la connexion échoue
      }
    );
  }
}
