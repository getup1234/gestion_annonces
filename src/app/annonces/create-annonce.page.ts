
import { Component } from '@angular/core';
import { AnnoncesService } from '../services/annonces.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-annonce', 
  templateUrl: './create-annonce.page.html', 
  styleUrls: ['./create-annonce.page.scss'], 
})
export class CreateAnnoncePage { 

  // Initialisation des données pour une nouvelle annonce
  newAnnonceData: any = {
    titre: '',
    categorie: '',
    price: null,
    location: '',
    description: ''
  };

  titre: string; // Une chaîne de caractères pour le titre

  // Constructeur du composant, injecte le service 'AnnoncesService' et 'Router'
  constructor(private annoncesService: AnnoncesService, private router: Router) {
    this.titre = "Créer une annonce"; // Initialise la propriété 'titre' avec une valeur
  }

  // Méthode pour créer une nouvelle annonce
  createAnnonce() {
    this.annoncesService.createAnnonce(this.newAnnonceData).subscribe(() => {
      this.router.navigate(['/annonces']).then(() => {
        // Rechargement de la page actuelle
        window.location.reload();
      });
    });
  }
}
