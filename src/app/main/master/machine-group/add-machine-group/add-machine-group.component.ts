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

  machinegroup: machineGroup;
  dataMachineGroup: machineGroup[] = [];
  machineGroupFrom: FormGroup;
  _id: string;


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { machinegroup: machineGroup },
    public machineGroupService: MachineGroupApiService,
    public dialogRef: MatDialogRef<AddMachineGroupComponent>,
    public notification: NotificationService,
    private fb: FormBuilder) {
      this.machineGroupFrom = this.fb.group({
        name: ['',Validators.required],    
      });
   }

  ngOnInit(): void {
    this.machinegroup = this.data?.machinegroup;
    console.log(this.machinegroup)
    if (this.machinegroup) {
      this.machineGroupFrom.patchValue(this.machinegroup);
    }
  }

  onSubmit() {
    if (this.machinegroup) {
      this.machineGroupService.updateMachineGroup(this.machineGroupFrom.value, this.machinegroup._id).subscribe(data => {
        this.dialogRef.close(data);
        this.notification.success("Machinegroup edited successfullly!!");
      });
    } else {
      this.machineGroupService.addMachineGroup(this.machineGroupFrom.value).subscribe(data => {
        this.dialogRef.close(data);
        this.notification.success(" Machinegroup added successfullly!!");
      });

    }
  }
}

