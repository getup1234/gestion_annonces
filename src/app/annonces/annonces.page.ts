import { Component, OnInit } from '@angular/core';

import { AnnoncesService } from '../services/annonces.service';


@Component({
  selector: 'app-annonces', 
  templateUrl: './annonces.page.html', 
  styleUrls: ['./annonces.page.scss'], 
})
export class AnnoncesPage implements OnInit { 

  annonces: any[] = []; // Un tableau vide pour stocker les annonces
  titre: string; // Une chaîne de caractères pour le titre

  // Constructeur du composant, injecte le service 'AnnoncesService'
  constructor(private annoncesService: AnnoncesService) {
    this.titre = "Mes annonces"; // Initialise la propriété 'titre' avec une valeur
  }

  // Méthode appelée lors de l'initialisation du composant
  ngOnInit() {
    this.fetchAnnonces(); // Appelle la méthode pour récupérer les annonces lors de l'initialisation
  }

  // Méthode pour récupérer les annonces depuis le service
  fetchAnnonces() {
    this.annoncesService.getAnnonces().subscribe((data: any) => {
      console.log(data);

      this.annonces = data; // Stocke les annonces reçues dans la propriété 'annonces'
    });
  }

  // Méthode pour supprimer une annonce par son ID
  deleteAnnonce(id: number) {
    this.annoncesService.deleteAnnonce(id).subscribe(() => {
      this.fetchAnnonces(); // Après la suppression, récupère à nouveau les annonces
    });
  }
}
