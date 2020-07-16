import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user: any[] = []

  constructor(protected userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser(100).subscribe(
      (data) =>  {
        console.log(data)
        this.user = data['results']
      },
      (error) => {
        console.error(error)
      }
    )
  }
  

}
