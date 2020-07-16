import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  user: any[] = []
  info: any ;

  constructor(protected userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser(300).subscribe(
      (data) =>  {
        this.user = data['results']
        this.info = data['info']
        console.log(this.info)
      },
      (error) => {
        console.error(error)
      }
    )
  }

}
