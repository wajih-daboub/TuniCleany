import { Component, OnInit } from '@angular/core';
import { CreerService } from '../creer.service';
import { User } from '../user';
import { Societe } from '../model/societe.model';
import { SocieteService } from '../services/societe.service';
import { Activite } from '../model/typeactivite';
import { Autorisation } from '../model/typeautorisation';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

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
  reactiveForm: FormGroup;
  alert:boolean=false;


user:User=new User();
  constructor(private creerService:CreerService,private societeService: SocieteService,private formBuilder: FormBuilder) {

    this.reactiveForm = this.formBuilder.group({
      username: new FormControl (null, [Validators.required]),
      
      password: new FormControl(['']),
      confirmPassword: new FormControl(['', Validators.required]),
      }, {
      validator: this.MustMatch('password', 'confirmPassword')
      });
   }
   submitted:boolean = false;
   get f() { return this.reactiveForm.controls; } 
   MustMatch(controlName: string, matchingControlName: string) {
   return (formGroup: FormGroup) => {
   const control = formGroup.controls[controlName];
   const matchingControl = formGroup.controls[matchingControlName];
   if (matchingControl.errors && !matchingControl.errors.mustMatch) {
   return;
   }
   if (control.value !== matchingControl.value) {
   matchingControl.setErrors({ mustMatch: true });
   } else {
   matchingControl.setErrors(null);
   }
   }
   }






  ngOnInit(): void {
    this.activites = this.societeService.listeActivite();
    this.autorisations = this.societeService.listeAutorisation();
    
  }


    onSubmit(){
    this.submitted = true;
    if (this.reactiveForm.invalid) {
    return;
    }
    }
  

  userRegister(){
    console.log(this.newSociete);
    this.societeService.registerUser(this.newSociete).subscribe(data=>{
      alert("sucess login")}
     , error=>alert("sorry"));
    }
   ajouterSociete(){
     console.log(this.newSociete);
     this.newActivite=this.societeService.consulterActivite(this.newIdact);
     this.newSociete.activite = this.newActivite;
     this.newAutorisation=this.societeService.consulterAutorisation(this.newIdauto);
     this.newSociete.autorisation=this.newAutorisation;
     this.alert=true
     this.societeService.addSociete(this.newSociete);
     
   }
    
  
  }