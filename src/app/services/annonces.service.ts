import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AnnoncesService { 

  apiUrl = 'http://127.0.0.1:8000/api/annonces'; // URL de base de l'API 

  constructor(private http: HttpClient, private authService: AuthService) {}

  // Méthode pour récupérer toutes les annonces
  getAnnonces(): Observable<any> {
    const token = this.authService.getToken(); // Récupère le token d'authentification de l'utilisateur
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`); // Crée les headers pour l'autorisation

    // Effectue une requête GET vers l'API pour obtenir les annonces propres à l'utilisateur
    return this.http.get('http://127.0.0.1:8000/api/propres_annonces', { headers });
  }

  // Méthode pour récupérer une annonce par son ID
  getAnnonceById(id: number): Observable<any> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    // Effectue une requête GET vers l'API pour obtenir une annonce spécifique par son ID
    return this.http.get(`${this.apiUrl}/${id}`, { headers });
  }

  // Méthode pour créer une nouvelle annonce
  createAnnonce(annonceData: any): Observable<any> {
    const token = this.authService.getToken(); 
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`); 
    // Effectue une requête POST vers l'API pour créer une nouvelle annonce avec les données fournies
    return this.http.post(this.apiUrl, annonceData, { headers });
  }

  // Méthode pour mettre à jour une annonce existante
  updateAnnonce(id: number, annonceData: any): Observable<any> {
    const token = this.authService.getToken(); 
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    // Effectue une requête PUT vers l'API pour mettre à jour une annonce spécifique par son ID et les nouvelles données
    return this.http.put(`${this.apiUrl}/${id}`, annonceData, { headers });
  }

  // Méthode pour supprimer une annonce par son ID
  deleteAnnonce(id: number): Observable<any> {
    const token = this.authService.getToken(); 
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    // Effectue une requête DELETE vers l'API pour supprimer une annonce spécifique par son ID
    return this.http.delete(`${this.apiUrl}/${id}`, { headers });
  }
}
