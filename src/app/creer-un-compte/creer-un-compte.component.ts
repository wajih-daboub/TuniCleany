import { Component, OnInit } from '@angular/core';
import { CreerService } from '../creer.service';
import { User } from '../user';
import { Societe } from '../model/societe.model';
import { SocieteService } from '../services/societe.service';
import { Activite } from '../model/typeactivite';
import { Autorisation } from '../model/typeautorisation';

@Component({
  selector: 'app-creer-un-compte',
  templateUrl: './creer-un-compte.component.html',
  styleUrls: ['./creer-un-compte.component.scss']
})
export class CreerUnCompteComponent implements OnInit {
  
  newSociete = new Societe();
  activites : Activite[];
  newIdact:number;
  newActivite= new Activite();
  autorisations : Autorisation[];
  newIdauto:number;
  newAutorisation= new Autorisation();


user:User=new User();
  constructor(private creerService:CreerService,private societeService: SocieteService) { }

  ngOnInit(): void {
    this.activites = this.societeService.listeActivite();
    this.autorisations = this.societeService.listeAutorisation();
    
  }
  userRegister(){
    console.log(this.user);
    this.creerService.registerUser(this.user).subscribe(data=>{
      alert("sucess login")}
     , error=>alert("sorry"));
    }
   ajouterSociete(){
     this.newActivite=this.societeService.consulterActivite(this.newIdact);
     this.newSociete.activite = this.newActivite;
     this.newAutorisation=this.societeService.consulterAutorisation(this.newIdauto);
     this.newSociete.autorisation=this.newAutorisation;
     this.societeService.addSociete(this.newSociete);
   }
    
  
  }