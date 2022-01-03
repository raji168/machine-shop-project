import { Component, OnDestroy, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';
import { Role } from '../../models/role.model';
import { RoleApiService } from '../../services/role-api.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { AddRoleComponent } from './add-role/add-role.component';
import { DialogsService } from 'src/app/services/dialogs.service';
import { RoleDataService } from 'src/app/data-services/role-data.service';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss'],
})



export class RoleComponent implements OnInit, OnDestroy {

  roleData: Role[] = [];

  displayedColumns: string[] = ['serialno', 'name', 'actions'];

  // subscription: Subscription;

  destroyed$ = new Subject();


  constructor(
    private roleService: RoleApiService,
    private roleDataService: RoleDataService,
    private dialog: MatDialog,
    private notification: NotificationService,
    private dialogService: DialogsService) {

  }





  ngOnInit(): void {
    // this.roleService.getRoleAll().subscribe(data => {
    //   this.roleData = data;
    // });
    // this.roleService.getreFreshAll()
    // .subscribe(() =>{
    //   this.getData();
    // })
    // this.getData();

    this.roleData = this.roleDataService.getRoles()
    this.roleDataService.roleUpdated$.pipe(takeUntil(this.destroyed$)).subscribe(roles => {
      this.roleData = roles
    })

  }

  ngOnDestroy(): void {
    // if (this.subscription) {
    //   this.subscription.unsubscribe()
    // }
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  getData() {
    // this.roleService.getRoleAll().subscribe(data => {
    //   this.roleData = data;
    // });

  }

  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "20%";
    this.dialog.open(AddRoleComponent, dialogConfig);
  }

  onEdit(role: Role) {
    this.dialog.open(AddRoleComponent, { data: { role } });
  }

  onDelete(id) {
    this.dialogService.openConfirmDialog('Are you sure to delete this record ?')
      .afterClosed().subscribe(res => {
        // console.log(res);
        if (res) {
          this.roleService.deleteRole(id).subscribe(res => {
            this.roleData = this.roleData.filter(item => item._id !== id);
            this.ngOnInit();
            this.notification.success(' deleted Suceessfully');
          })
        }
      });
  }

}
