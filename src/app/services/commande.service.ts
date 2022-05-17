import { Injectable } from '@angular/core';
import { Commande } from '../model/commande.model';
import { Gouvernorat } from '../model/gouvernorat';
import { Region } from '../model/region';
import { Societe } from '../model/societe.model';
import { Sous_typedech } from '../model/sous_typedechets';
import { Activite } from '../model/typeactivite';
import { Dechet } from '../model/typedechets';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  commandes: Commande[];
  commande=new Commande();
  gouvernorat= new Gouvernorat();
  gouvernorats: Gouvernorat[];
  region= new Region();
  regions:Region[];
  dechet=new Dechet();
  dechets:Dechet[];
  sous_typedech=new Sous_typedech();
  sous_typedechs:Sous_typedech[];
  activites:Activite[];
  activite=new Activite();
  nomSocietes: Societe [];
  nomSociete= new Societe();

  constructor() { 
    this.gouvernorats=[
      {idgouv:1,nomgouv:"Ariana"},
      {idgouv:2,nomgouv:"Béja"},
      {idgouv:3,nomgouv:"Ben arous"},
      {idgouv:4,nomgouv:"Bizerte"},
      {idgouv:5,nomgouv:"Gabés"},
      {idgouv:6,nomgouv:"Gafsa"},{idgouv:7,nomgouv:"Jendouba"},{idgouv:8,nomgouv:"Kairouen"},{idgouv:9,nomgouv:"Kasserine"},{idgouv:10,nomgouv:"Kébili"},
      {idgouv:11,nomgouv:"kef"},{idgouv:12,nomgouv:"Mahdia"},{idgouv:13,nomgouv:"Manouba"},{idgouv:14,nomgouv:"Médenine"},
      {idgouv:15,nomgouv:"Monastir"},{idgouv:16,nomgouv:"Nabeul"},{idgouv:17,nomgouv:"Sfax"},{idgouv:18,nomgouv:"Sidi Bouzid"},
      {idgouv:19,nomgouv:"Siliana"},{idgouv:20,nomgouv:"Sousse"},{idgouv:21,nomgouv:"Tataouine"},{idgouv:22,nomgouv:"Tozeur"},
      {idgouv:23,nomgouv:"Tunis"},{idgouv:24,nomgouv:"Zaghouen"}
    ]
   
    this.dechets=[
      {iddech:1,nomdech:"Dasr"}
    ]
    this.sous_typedechs=[
      {idstdech:1,nomstdech:"Dasri"}
    ]

    this.activites=[
      {idact:1,nomAct:"Productive"},{idact:2,nomAct:"Collecte et traitement"},{idact:3,nomAct:"Recyclage"}
    ]

    this.nomSocietes=[
      { idnom: 'tunicleany', idmf: 'a125a25', idmail: 'lil@lil.com', idmp: '000000',idrmp:'00000', idadr: '14rue', idtel: 2525, activite:{idact:1,nomAct:"Productive"},
      autorisation:{idauto:1,nomAuto:"la gestion des Boues de fonds de cuves"}},

      { idnom: 'Anged', idmf: 'a125a25', idmail: 'lil@lil.com', idmp: '000000',idrmp:'00000', idadr: '14rue', idtel: 2525, activite:{idact:1,nomAct:"Productive"},
      autorisation:{idauto:1,nomAuto:"la gestion des Boues de fonds de cuves"}},

      { idnom: 'Hôpital', idmf: 'a125a25', idmail: 'lil@lil.com', idmp: '000000',idrmp:'00000', idadr: '14rue', idtel: 2525, activite:{idact:1,nomAct:"Productive"},
      autorisation:{idauto:1,nomAuto:"la gestion des Boues de fonds de cuves"}},

      { idnom: 'Usine', idmf: 'a125a25', idmail: 'lil@lil.com', idmp: '000000',idrmp:'00000', idadr: '14rue', idtel: 2525, activite:{idact:1,nomAct:"Productive"},
      autorisation:{idauto:1,nomAuto:"la gestion des Boues de fonds de cuves"}}

    ]

    this.commandes=[
      {idpoids:100,nomSociete:{ idnom: 'Anged', idmf: 'a125a25', idmail: 'Anged@gmail.com', idmp: '000000',idrmp:'00000', idadr: 'Tunis', idtel: 717171771, activite:{idact:1,nomAct:"Traitement"},
      autorisation:{idauto:1,nomAuto:"la gestion des Boues de fonds de cuves"}},gouvernorat:{idgouv:1,nomgouv:"Ariana"},dechet:{iddech:1,nomdech:"Dasr"},
       sous_typedech:{idstdech:1,nomstdech:"Dasri"},activite:{idact:1,nomAct:"Productive"}
     },
     {idpoids:50,nomSociete:{ idnom: 'Hôpital', idmf: 'a125a25', idmail: 'lil@lil.com', idmp: '000000',idrmp:'00000', idadr: '14rue', idtel: 2525, activite:{idact:1,nomAct:"Productive"},
      autorisation:{idauto:1,nomAuto:"la gestion des Boues de fonds de cuves"}},gouvernorat:{idgouv:1,nomgouv:"Ariana"},dechet:{iddech:1,nomdech:"Dasr"},
       sous_typedech:{idstdech:1,nomstdech:"Dasri"},activite:{idact:1,nomAct:"Productive"}
     },
     {idpoids:50,nomSociete:{ idnom: 'Usine', idmf: 'a125a25', idmail: 'lil@lil.com', idmp: '000000',idrmp:'00000', idadr: '14rue', idtel: 2525, activite:{idact:1,nomAct:"Productive"},
      autorisation:{idauto:1,nomAuto:"la gestion des Boues de fonds de cuves"}},gouvernorat:{idgouv:1,nomgouv:"Ariana"},dechet:{iddech:1,nomdech:"Dasr"},
       sous_typedech:{idstdech:1,nomstdech:"Dasri"},activite:{idact:1,nomAct:"Productive"}
     },
     {idpoids:50,nomSociete:{ idnom: 'Client', idmf: 'a125a25', idmail: 'lil@lil.com', idmp: '000000',idrmp:'00000', idadr: '14rue', idtel: 2525, activite:{idact:1,nomAct:"Productive"},
      autorisation:{idauto:1,nomAuto:"la gestion des Boues de fonds de cuves"}},gouvernorat:{idgouv:1,nomgouv:"Ariana"},dechet:{iddech:1,nomdech:"Dasr"},
       sous_typedech:{idstdech:1,nomstdech:"Dasri"},activite:{idact:1,nomAct:"Productive"}
     }
    ];
  }
  listeCommande():Commande[]{
    return this.commandes;
  }

  addCommande(commande: Commande){
    this.commandes.push(commande);
  }
  listeGouvernorat():Gouvernorat[]{
    return this.gouvernorats;
  }
  consulterGouvernorat(id:number):Gouvernorat{
    this.gouvernorat = this.gouvernorats.find(gouv => gouv.idgouv == id);
    return this.gouvernorat;
  }
  listeRegion():Region[]{
    return this.regions;
  }
  consulterRegion(id:number):Region{
    this.region = this.regions.find(reg => reg.idreg == id);
    return this.region;
  }
  listeDechet():Dechet[]{
    return this.dechets;
  }
  consulterDechet(id:number):Dechet{
    this.dechet = this.dechets.find(dech => dech.iddech == id);
    return this.dechet;
  }
  listeSous_typedech():Sous_typedech[]{
    return this.sous_typedechs;
  }
  consulterSous_typedech(id:number):Sous_typedech{
    this.sous_typedech = this.sous_typedechs.find(sous_typedech => sous_typedech.idstdech == id);
    return this.sous_typedech;
  }
  listeActivite():Activite[]{
    return this.activites;
  }
  consulterActivite(id:number): Activite{
    this.activite=this.activites.find(act =>act.idact==id)
    return this.activite;

  }
  listeSociete():Societe[]{
    return this.nomSocietes;
  }
  consulterSociete(id:string): Societe{
    this.nomSociete=this.nomSocietes.find(soc =>soc.idnom==id)
    return this.nomSociete;

  }
  deleteCommande(commande:Commande){
    const index =this.commandes.indexOf(commande,0);
    if(index>-1){
      this.commandes.splice(index,1);
    }
  }

}
