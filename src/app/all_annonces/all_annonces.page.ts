import { Component } from '@angular/core';

import { AnnoncesService } from '../services/annonces.service';

@Component({
  selector: 'app-all-annonces', // Sélecteur du composant
  templateUrl: 'all_annonces.page.html', // URL du template HTML associé au composant
  styleUrls: ['all_annonces.page.scss'] // Fichiers de style associés au composant
})
export class AllAnnoncesPage { 

  // Déclaration des propriétés de la classe
  titre: string; // Une chaîne de caractères pour le titre
  annonces: any[] = []; // Un tableau vide pour stocker les annonces
  filteredAnnonces: any[] = []; // Un tableau vide pour stocker les annonces filtrées
  prixFilter: number | null = 1000; // Un nombre ou null pour filtrer par prix, avec une valeur par défaut de 1000
  categorieFilter: string | null = null; // Une chaîne de caractères ou null pour filtrer par catégorie, initialement null
  locationFilter: string | null = null; // Une chaîne de caractères ou null pour filtrer par localisation, initialement null

  // Constructeur du composant, injecte le service 'AnnoncesService'
  constructor(private annoncesService: AnnoncesService) { 
    this.titre = "Tous les annonces"; // Initialise la propriété 'titre' avec une valeur
  }

  // Méthode appelée avant que la vue soit affichée
  ionViewWillEnter() {
    this.fetchAnnonces(); // Appelle la méthode pour récupérer les annonces
  }

  // Méthode pour récupérer les annonces depuis le service
  fetchAnnonces() {
    this.annoncesService.getAnnonces().subscribe((data: any) => {
      this.annonces = data; // Stocke les annonces reçues dans la propriété 'annonces'
      this.applyFilters(); // Applique les filtres aux annonces
    });
  }

  // Méthode appelée lorsqu'un filtre est modifié
  filterAnnonces() {
    this.applyFilters(); // Applique les filtres aux annonces
  }

  // Méthode pour appliquer les filtres aux annonces
  applyFilters() {
    this.filteredAnnonces = this.annonces.filter(annonce => {
      const passesPrixFilter = this.prixFilter ? annonce.price <= this.prixFilter : true;
      const passesCategorieFilter = this.categorieFilter ? annonce.categorie === this.categorieFilter : true;
      const passesLocationFilter = this.locationFilter ? annonce.location === this.locationFilter : true;
      return passesPrixFilter && passesCategorieFilter && passesLocationFilter;
    });
  }
}
