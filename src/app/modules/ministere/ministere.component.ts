import { Component, OnInit } from '@angular/core';
import { CommandeService } from 'src/app/services/commande.service';
import { SocieteService } from 'src/app/services/societe.service';
import { Societe } from 'src/app/model/societe.model';
import { Commande } from 'src/app/model/commande.model';
export interface PeriodicElement {
  societe: string;
  typedech: string;
  position: number;
  poids: number;
  transporteur: string;
  date: string;
}
@Component({
  selector: 'app-ministere',
  templateUrl: './ministere.component.html',
  styleUrls: ['./ministere.component.scss']
})
export class MinistereComponent implements OnInit {
  societes: Societe[];
  commandes: Commande[];
  
  constructor(private societeService: SocieteService, private commandeService: CommandeService) { 
    this.societes = societeService.listeSociete();
    this.commandes = commandeService.listeCommande();
  }

  ngOnInit() {
  }

}
