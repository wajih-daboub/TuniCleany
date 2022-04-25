import { Injectable } from '@angular/core';
import { Societe } from '../model/societe.model';
import { Activite } from '../model/typeactivite';
import { Autorisation } from '../model/typeautorisation';

@Injectable({
  providedIn: 'root'
})
export class SocieteService {
  societes: Societe[];
  activites: Activite[];
  activite = new Activite();
  autorisations: Autorisation[];
  autorisation = new Autorisation();

  constructor() {
    this.autorisations=[
      {idauto:1,nomAuto:"la gestion des Boues de fonds de cuves"},
      {idauto:2,nomAuto:"la gestion des Catalyseurs des Véhicules"},
      {idauto:3,nomAuto:"la gestion des Cartouches d'impression"},
      {idauto:4,nomAuto:"la gestion des Déchets d'étains"},
      {idauto:5,nomAuto:"la gestion des Déchets Electrique & Electronique"},
      {idauto:6,nomAuto:"la gestion des Films radiologiques et fixateur"},
      {idauto:7,nomAuto:"la gestion des Huiles lubrifiantes"},
      {idauto:8,nomAuto:"la gestion des transporteurs DD"},
      {idauto:9,nomAuto:"la gestion des déchets de soins"},
      {idauto:10,nomAuto:"la gestion des Batteries"},
      {idauto:11,nomAuto:"la gestion des déchets d'activités pétrolières"},
      {idauto:12,nomAuto:"la gestion des Déchets Industriels"},

    ]
    this.activites=[
      {idact:1,nomAct:"Productive"},
      {idact:2,nomAct:"Collecte et Transport"},
      {idact:3,nomAct:"Recyclage"},
      {idact:4,nomAct:"Collecte,Transport et Recyclage"},

    ]
    this.societes =[
      { idnom: 'tunicleany', idmf: 'a125a25', idmail: 'lil@lil.com', idmp: '000000',idrmp:'00000', idadr: '14rue', idtel: 2525, activite:{idact:1,nomAct:"Productive"},
      autorisation:{idauto:1,nomAuto:"la gestion des Boues de fonds de cuves"}},
    ];
   }
   listeSociete():Societe[]{
     return this.societes;
   }

   addSociete(societe: Societe){
     this.societes.push(societe);
   }

   listeActivite():Activite[]{
     return this.activites;
   }
   consulterActivite(id:number):Activite{
     this.activite = this.activites.find(act => act.idact == id);
     return this.activite;
   }

   listeAutorisation():Autorisation[]{
    return this.autorisations;
  }
  consulterAutorisation(id:number):Autorisation{
    this.autorisation = this.autorisations.find(aut => aut.idauto == id);
    return this.autorisation;
  }
  deleteSociete(societe:Societe){
    const index =this.societes.indexOf(societe,0);
    if(index>-1){
      this.societes.splice(index,1);
    }
  }
}
