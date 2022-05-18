import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SituationAvrilComponent} from "./view/situation-avril/situation-avril.component";
import {MyProjectComponent} from "./view/my-project/my-project.component";

const routes: Routes = [
  { path: '', component: SituationAvrilComponent },
  { path: 'project', component: MyProjectComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
