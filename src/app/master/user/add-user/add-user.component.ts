import { Component, OnInit } from '@angular/core';
import { UserApiService } from 'src/app/services/user-api.service';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  

  constructor(public userService : UserApiService) { }

  ngOnInit(): void {
  }

}
