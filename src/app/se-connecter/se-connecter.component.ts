import { Component, OnInit } from '@angular/core';
import { CreerService } from '../creer.service';
import { User } from '../user';

@Component({
  selector: 'app-se-connecter',
  templateUrl: './se-connecter.component.html',
  styleUrls: ['./se-connecter.component.scss']
})
export class SeConnecterComponent implements OnInit {
  user:User=new User();

  constructor(private creerService:CreerService) { }

  ngOnInit(): void {
  }
  userLogin(){
    console.log(this.user);
    this.creerService.loginUser(this.user).subscribe(data=>{
      alert("sucess login")}
     , error=>alert("sorry"));
    }
}