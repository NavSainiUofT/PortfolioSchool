import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"test", component:HomeComponent},
  {path:"", component:HomeComponent},
  {path:"contact", component:ContactComponent},
  {path:"contactus", component:ContactComponent},
  {path:"services", component:ServicesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingPages = [HomeComponent,ContactComponent,ServicesComponent]
