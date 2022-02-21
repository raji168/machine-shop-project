import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddRoleComponent } from './add-role/add-role.component';
import { DialogsService } from 'src/app/services/dialogs.service';
import { RoleDataService } from 'src/app/data-services/role-data.service';
import { Observable } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { Role } from 'src/app/models/role.model';
import { RoleApiService } from 'src/app/services/role-api.service';
import { Store } from '@ngrx/store';
import { selectRoles } from 'src/app/store/selectors/role.selectors';
import { RoleActions } from 'src/app/store/actions/action-types';


@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss'],
})



export class RoleComponent implements OnInit {

  displayedColumns: string[] = ['serialno', 'name', 'actions'];

  roleForm: FormGroup = new FormGroup({
    serialno: new FormControl(''),
    name: new FormControl('')
  });

  role$: Observable<Role[]>;


  constructor(
    private roleService: RoleApiService,
    private roleDataService: RoleDataService,
    private dialog: MatDialog,
    private notification: NotificationService,
    private dialogService: DialogsService,
    private store: Store
    ) {

  }


  ngOnInit(): void {

    this.role$ = this.store.select(selectRoles);

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
        if (res) {
          this.roleService.deleteRole(id).subscribe(res => {
            this.notification.success(' deleted Suceessfully');
          })
          // this.store.dispatch(RoleActions.deleteRole({}));
          
        }
      });
  }

}
