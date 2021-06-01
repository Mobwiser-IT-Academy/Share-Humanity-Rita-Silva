import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about';
import { ContactComponent } from './contact';
import { HomeComponent } from './home';
import { WorkComponent } from './work';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'work', component: WorkComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
