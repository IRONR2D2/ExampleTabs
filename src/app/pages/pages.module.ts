import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VacanciesComponent } from './vacancies/vacancies.component';
import { RhComponent } from './rh/rh.component';
import { FormComponent } from './form/form.component';




@NgModule({
  declarations: [VacanciesComponent, RhComponent, FormComponent],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
