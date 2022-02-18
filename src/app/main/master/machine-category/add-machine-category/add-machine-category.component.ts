import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MachineCategory } from 'src/app/models/machine-category.model';
import { machineGroup } from 'src/app/models/machinegroup.models';
import { MachineCategoryApiService } from 'src/app/services/machinecategory-api.service';
import { MachineGroupApiService } from 'src/app/services/machinegroup-api.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-add-machine-category',
  templateUrl: './add-machine-category.component.html',
  styleUrls: ['./add-machine-category.component.scss']
})
export class AddMachineCategoryComponent implements OnInit {

  machineCategory: MachineCategory;
  machineCategoryForm: FormGroup;
  machineGroupData: machineGroup[] = [];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { machineCategory: MachineCategory },
    public machineGroupService: MachineGroupApiService,
    public machineCategoryService: MachineCategoryApiService,
    public dialogRef: MatDialogRef<AddMachineCategoryComponent>,
    public notification: NotificationService,
    private fb: FormBuilder) {
    this.machineCategoryForm = this.fb.group({
      machineCategoryName: ['',Validators.required],
      machinegroup: ['',Validators.required],
    });
  }

  ngOnInit() {

    this.machineGroupService.get().subscribe(data => {
      this.machineGroupData = data;
    })

    this.machineCategory = this.data?.machineCategory;

    if (this.machineCategory) {
      this.machineCategoryForm.patchValue(this.data.machineCategory);
      this.machineCategoryForm.get('machineGroup')?.setValue(this.data.machineCategory.machinegroup._id);
    }
  }
  onSubmit() {

    if (this.machineCategory) {
      this.machineCategoryService.updateMachineCategory(this.machineCategoryForm.value, this.machineCategory._id).subscribe(data => {
        this.dialogRef.close(data);
        this.notification.success("Edited successfully!!");
      });
    } else {
      this.machineCategoryService.addMachineCategory(this.machineCategoryForm.value).subscribe(data => {
        this.dialogRef.close(data);
        console.log(data);
        this.notification.success("Added successfully!!");
      });
    }
}


}
