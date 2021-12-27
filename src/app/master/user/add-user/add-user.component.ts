import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserApiService } from 'src/app/services/user-api.service';
import { MatDialogRef } from '@angular/material/dialog';
import { NotificationService } from 'src/app/services/notification.service';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  userForm: FormGroup;

  

  constructor(public userService : UserApiService,
    public dialogRef:MatDialogRef<AddUserComponent>,
    public notification : NotificationService) { }

  ngOnInit(): void {
  }

  onClear(){
    this.userService.userForm.reset();
    this.userService.initializeFormGroup();
  }

  onSave(){
    console.log(this.userService.userForm.value);
    this.userService.addUser(this.userService.userForm.value).subscribe((data) => {
      this.dialogRef.close(data);
      this.notification.success("successfullly data added!!");
    })
  }

}
