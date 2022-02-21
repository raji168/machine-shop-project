import { Component, OnInit} from '@angular/core';
import { Admin } from 'src/app/models/dashboard/admin.model';
import { AdminApiService} from 'src/app/services/dashboard/admin-api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {


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
