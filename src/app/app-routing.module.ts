import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import {ConsultaPComponent} from "../app/consulta-p/consulta-p.component"



const routes: Routes = [


    {
      path:'',
      redirectTo:'consultaI',
      pathMatch:'full'
    },
    {
      path:'consultaI',
      component: ConsultaPComponent,
    },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
