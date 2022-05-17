import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { UseradminComponent } from './modules/useradmin/useradmin.component';
import { SeConnecterComponent } from './se-connecter/se-connecter.component';
import { CreerUnCompteComponent } from './creer-un-compte/creer-un-compte.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MinistereComponent } from './modules/ministere/ministere.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


const routes: Routes = [
 
  {path:"",component:SeConnecterComponent},
  {path:"creeruncompte",component:CreerUnCompteComponent},
  {path:"accueil",component:AccueilComponent},
  {path:"contactus",component:ContactUsComponent},
  
   {path: 'dashboard',component: DefaultComponent,
   children: [
   {path: 'societe',component: DashboardComponent},
   {path: 'posts',component: PostsComponent},
   {path: 'useradmin',component: UseradminComponent},
   {path: 'ministere',component: MinistereComponent}]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
