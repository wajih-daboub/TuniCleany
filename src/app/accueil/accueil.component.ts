import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-routing-machine';
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
const tiles = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
  maxZoom: 20,
  subdomains:['mt0','mt1','mt2','mt3']
});

tiles.addTo(this.map);


  
  var greenIcon = L.icon({
    iconUrl: 'assets/mylocation.png',
   
    iconSize:     [35, 35], // size of the icon
   
    iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
   
});
var test = L.icon({
  iconUrl: 'assets/recyclage.png',
 
  iconSize:     [35, 35], // size of the icon
 
  iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
 
});
if (!navigator.geolocation) {
  console.log('location is not supported');
}
navigator.geolocation.getCurrentPosition((position) => {
  const coords = position.coords;
  const latLong : [number, number]=[coords.latitude, coords.longitude];
  console.log(
    `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
  );
  let marker = L.marker((latLong),{icon:greenIcon}).addTo(this.map);

let popup = L.popup()
.setLatLng(latLong)
.setContent('Votre position actuel')
.openOn(this.map);

});
var recy = L.icon({
  iconUrl: 'assets/recyclage.png',
 
  iconSize:     [35, 35], // size of the icon
 
  iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
 
});

var greenIcon = L.icon({
  iconUrl: 'assets/mylocation.png',
 
  iconSize:     [35, 35], // size of the icon
 
  iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
 
});
let marker1 = L.marker([37.07948364339938,9.420727781260458],{icon:recy}).addTo(this.map);

this.map.on('click',<LeafletMouseEvent>(e)=>{
  console.log(e);
  navigator.geolocation.getCurrentPosition((position) => {
    const coords = position.coords;
    const latLong : [number, number]=[coords.latitude, coords.longitude];
    console.log(
      `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
    );
    let marker = L.marker((latLong),{icon:greenIcon}).addTo(this.map);
  
L.Routing.control({
    waypoints: [
      L.latLng(e.latlng.lat,e.latlng.lng),
    L.latLng(latLong),
     
    ],

  }).addTo(this.map);
});
});
this.watchPosition();

}


watchPosition() {
let desLat = 0;
let desLon = 0;
let id = navigator.geolocation.watchPosition(
  (position) => {
    console.log(
      `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
    );
    if (position.coords.latitude === desLat) {
      navigator.geolocation.clearWatch(id);
    }
  },
  (err) => {
    console.log(err);
  },
  {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  }
);


}
  
  ajouterCommande(){
    this.newGouvernorat=this.commandeService.consulterGouvernorat(this.newIdgouv);
    this.newCommande.gouvernorat=this.newGouvernorat;
    this.newRegion=this.commandeService.consulterRegion(this.newIdreg);
    
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