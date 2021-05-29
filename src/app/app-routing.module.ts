import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationComponent } from './application/application.component';
import { HomeComponent } from './home/home.component';
import { ServerComponent } from './server/server.component';

const routes: Routes = [
  {path :'', component: HomeComponent },
  {path :'server', component: ServerComponent },
  {path :'application', component: ApplicationComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
