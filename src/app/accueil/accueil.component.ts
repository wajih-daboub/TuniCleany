import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { Commande } from '../model/commande.model';
import { Gouvernorat } from '../model/gouvernorat';
import { Region } from '../model/region';
import { Societe } from '../model/societe.model';
import { Sous_typedech } from '../model/sous_typedechets';
import { Activite } from '../model/typeactivite';
import { Dechet } from '../model/typedechets';
import { CommandeService } from '../services/commande.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements AfterViewInit {
  newCommande= new Commande;
  newGouvernorat= new Gouvernorat();
  gouvernorats: Gouvernorat[];
  newIdgouv:number;
  newRegion= new Region();
  regions:Region[];
  newIdreg:number;
  newDechet=new Dechet();
  dechets:Dechet[];
  newIddech:number;
  newSous_typedech=new Sous_typedech();
  sous_typedechs:Sous_typedech[];
  newIdstdech:number;
  newActivite= new Activite();
  activites : Activite[];
  newIdact:number;
  newSociete=new Societe();
  societes: Societe [];
  newIdsoc:string;

  private map: L.Map | undefined;
  constructor(private commandeService:CommandeService) { }

  ngOnInit(): void {
    this.gouvernorats=this.commandeService.listeGouvernorat();
    this.regions=this.commandeService.listeRegion();
    this.dechets=this.commandeService.listeDechet();
    this.sous_typedechs=this.commandeService.listeSous_typedech();
    this.activites=this.commandeService.listeActivite();
    this.societes=this.commandeService.listeSociete();
   
  }

  ngAfterViewInit(): void {
    this.initMap();
  }
   private initMap():void{

   
this.map= L.map('map').setView([36.81897  ,  10.16579], 7);
const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 20,
  attribution: '&copy; <a href="https:// stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https:// openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http:// openstreetmap.org">0penStreetMap</a> contributors'});

tiles.addTo(this.map);
  }

  ajouterCommande(){
    this.newGouvernorat=this.commandeService.consulterGouvernorat(this.newIdgouv);
    this.newCommande.gouvernorat=this.newGouvernorat;
    this.newRegion=this.commandeService.consulterRegion(this.newIdreg);
    this.newCommande.region=this.newRegion;
    this.newDechet=this.commandeService.consulterDechet(this.newIddech);
    this.newCommande.dechet=this.newDechet;
    this.newSous_typedech=this.commandeService.consulterSous_typedech(this.newIdstdech);
    this.newCommande.sous_typedech=this.newSous_typedech;
    this.newActivite=this.commandeService.consulterActivite(this.newIdact);
    this.newCommande.activite=this.newActivite;
    this.newSociete=this.commandeService.consulterSociete(this.newIdsoc);
    this.newCommande.nomSociete=this.newSociete;
    this.commandeService.addCommande(this.newCommande);
  }

}