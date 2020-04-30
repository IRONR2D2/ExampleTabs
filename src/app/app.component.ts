import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
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
