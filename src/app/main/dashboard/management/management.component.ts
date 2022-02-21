import { Component, OnInit} from '@angular/core';
import { Admin } from 'src/app/models/dashboard/admin.model';
import { AdminApiService} from 'src/app/services/dashboard/admin-api.service';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {


   data : Admin[] =[] ;

  constructor(
    private adminApi: AdminApiService,
  ) { }

  ngOnInit() {

      this.adminApi.get().subscribe(res =>{
        this.data = res;
      })
      console.log(this.data);
    }
    applyFilter(event: Event) {

      const filterValue = (event.target as HTMLInputElement).value;
      // this.data.filter = filterValue.trim().toLocaleLowerCase();
  
    }


}
