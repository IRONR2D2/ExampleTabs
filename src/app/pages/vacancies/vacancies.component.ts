import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.scss']
})
export class VacanciesComponent implements OnInit {
  users: any[] = [];

  constructor(
    protected dataservice: DataService
  ) {
  }

  ngOnInit() {
    this.dataservice.getUsers()
      .subscribe(
        (data) => { // Success
          this.users = data['results'];
        },
        (error) => {
          console.error(error);
        }
      );
  }

}
