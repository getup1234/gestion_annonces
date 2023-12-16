import { Component, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.page.html',
  styleUrls: ['navbar.page.scss']
})
export class NavbarPage {
  @Input() titre : string ="";

  constructor(private authService: AuthService, private router: Router,private navCtrl: NavController) { 
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  goBack() {
    this.navCtrl.back(); // Cette fonction retourne à la page précédente dans l'historique de navigation
  }
}
