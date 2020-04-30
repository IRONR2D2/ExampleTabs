import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VacanciesComponent } from './pages/vacancies/vacancies.component';
import { RhComponent } from './pages/rh/rh.component';
import { FormComponent } from './pages/form/form.component';


const routes: Routes = [
  { path: 'vacancies', component: VacanciesComponent },
  { path: 'rh', component: RhComponent },
  { path: 'formu', component: FormComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'vacancies' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
