
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnnoncesService } from '../services/annonces.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-annonce', 
  templateUrl: './update-annonce.page.html',
  styleUrls: ['./update-annonce.page.scss'], 
})
export class UpdateAnnoncePage { 

  annonceId: number; // Un numéro pour l'ID de l'annonce à mettre à jour
  titre: string; 
  updatedAnnonceData: any = {}; // Données pour la mise à jour de l'annonce

  constructor(
    private annoncesService: AnnoncesService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.titre = "Modifier l'annonce"; 

    // Récupère l'ID de l'annonce depuis l'URL
    const id = this.route.snapshot.paramMap.get('id');
    this.annonceId = id ? +id : 1;

    this.fetchAnnonce(); // Récupère les données de l'annonce à mettre à jour
  }

  // Méthode pour récupérer les données de l'annonce à mettre à jour depuis le service
  fetchAnnonce() {
    this.annoncesService.getAnnonceById(this.annonceId).subscribe((data: any) => {
      this.updatedAnnonceData = data; // Stocke les données de l'annonce dans 'updatedAnnonceData'
    });
  }

  // Méthode pour mettre à jour l'annonce
  updateAnnonce() {
    this.annoncesService.updateAnnonce(this.annonceId, this.updatedAnnonceData).subscribe(() => {
      this.router.navigate(['/annonces']).then(() => {
        // Rechargement de la page actuelle
        window.location.reload();
      });
    });
  }
}
