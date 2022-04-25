import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Societe } from 'src/app/model/societe.model';
import { SocieteService } from 'src/app/services/societe.service';
import { Commande } from 'src/app/model/commande.model';
import { CommandeService } from 'src/app/services/commande.service';


export interface PeriodicElement {
  societe: string;
  typedech: string;
  position: number;
  poids: number;
  transporteur: string;
  date: string;
  

}

@Component({
  selector: 'app-useradmin',
  templateUrl: './useradmin.component.html',
  styleUrls: ['./useradmin.component.scss']
})
export class UseradminComponent implements OnInit {
  societes: Societe[];
  commandes: Commande[];
  bigChart = [];
  cards = [];
  pieChart = [];

 
 
  constructor(private dashboardService: DashboardService , private societeService: SocieteService, private commandeService: CommandeService) { 
    this.societes = societeService.listeSociete();
    this.commandes = commandeService.listeCommande();
  }

  ngOnInit() {
    this.bigChart = this.dashboardService.bigChart();
    this.cards = this.dashboardService.cards();
    this.pieChart = this.dashboardService.pieChart();
    
  }
  supprimerSociete(societe:Societe){
    this.societeService.deleteSociete(societe);
  }
  
  
}
