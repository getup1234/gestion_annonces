import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService { 

  private apiUrl = 'http://127.0.0.1:8000/api'; // URL de base de l'API Laravel

  constructor(private http: HttpClient) {}

  // Méthode pour gérer l'authentification en effectuant une requête POST vers l'API pour se connecter
  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials).pipe(
      // Utilisation de pipe() pour exécuter des opérations après la requête
      tap(response => {
        console.log(response.token); 
        localStorage.setItem('token', response.token); // Stocke le token dans le localStorage
      }),
      catchError(this.handleError) // Gère les erreurs potentielles avec la méthode handleError
    );
  }

  // Méthode pour gérer les erreurs d'appel HTTP
  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Une erreur est survenue'; // Message d'erreur par défaut

    if (error.error instanceof ErrorEvent) {
      errorMessage = `Erreur: ${error.error.message}`; // Erreur côté client
    } else {
      errorMessage = `Code d'erreur: ${error.status}\nMessage: ${error.error.message}`; // Erreur côté serveur
    }

    console.error(errorMessage); // Affiche l'erreur dans la console
    return throwError(errorMessage); // Renvoie l'erreur pour être capturée par l'observable
  }

  // Méthode pour se déconnecter, supprime le token du localStorage
  logout(): void {
    localStorage.removeItem('token');
  }

  // Méthode pour récupérer le token depuis le localStorage
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Méthode pour vérifier si l'utilisateur est authentifié en vérifiant la présence du token
  isAuthenticated(): boolean {
    return !!this.getToken(); // Renvoie vrai si le token est présent, sinon faux
  }
}
