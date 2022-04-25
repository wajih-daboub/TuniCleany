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
      {idgouv:1,nomgouv:"Tunis"}
    ]
    this.regions=[
      {idreg:1,nomreg:"Ben arous"}
    ]
    this.dechets=[
      {iddech:1,nomdech:"Dasr"}
    ]
    this.sous_typedechs=[
      {idstdech:1,nomstdech:"Dasri"}
    ]

    this.activites=[
      {idact:1,nomAct:"Productive"}
    ]

    this.nomSocietes=[
      { idnom: 'tunicleany', idmf: 'a125a25', idmail: 'lil@lil.com', idmp: '000000',idrmp:'00000', idadr: '14rue', idtel: 2525, activite:{idact:1,nomAct:"Productive"},
      autorisation:{idauto:1,nomAuto:"la gestion des Boues de fonds de cuves"}}

    ]

    this.commandes=[
      {idpoids:50,nomSociete:{ idnom: 'tunicleany', idmf: 'a125a25', idmail: 'lil@lil.com', idmp: '000000',idrmp:'00000', idadr: '14rue', idtel: 2525, activite:{idact:1,nomAct:"Productive"},
      autorisation:{idauto:1,nomAuto:"la gestion des Boues de fonds de cuves"}},gouvernorat:{idgouv:1,nomgouv:"Tunis"},region:{idreg:1,nomreg:"Ben arous"},dechet:{iddech:1,nomdech:"Dasr"},
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

}
