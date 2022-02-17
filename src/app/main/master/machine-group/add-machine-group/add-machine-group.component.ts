import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { machineGroup } from 'src/app/models/machinegroup.models';
import { MachineGroupApiService } from 'src/app/services/machinegroup-api.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-add-machine-group',
  templateUrl: './add-machine-group.component.html',
  styleUrls: ['./add-machine-group.component.scss']
})
export class AddMachineGroupComponent implements OnInit {

  machineGroup: machineGroup;
  dataMachineGroup: machineGroup[] = [];
  machineGroupFrom: FormGroup;
  _id: string;


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { machineGroup: machineGroup },
    public machineGroupService: MachineGroupApiService,
    public dialogRef: MatDialogRef<AddMachineGroupComponent>,
    public notification: NotificationService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {

    this.machineGroupFrom = this.fb.group({
      name: ['',Validators.required],    
    });
    this.machineGroup = this.data?.machineGroup;
    console.log(this.machineGroup)
    if (this.machineGroup) {
      this.machineGroupFrom.patchValue(this.machineGroup);
    }

  }

  onSubmit() {
    if (this.machineGroup) {
      this.machineGroupService.updateMachineGroup(this.machineGroupFrom.value, this.machineGroup._id).subscribe(data => {
        this.dialogRef.close(data);
        this.notification.success(" Machinegroup edited successfullly!!");
      });
    } else {
      this.machineGroupService.addMachineGroup(this.machineGroupFrom.value).subscribe(data => {
        this.dialogRef.close(data);
        this.notification.success(" Machinegroup added successfullly!!");
      });

    }
  }
}
