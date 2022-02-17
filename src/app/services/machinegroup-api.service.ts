import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MachineGroupDataService } from "../data-services/machinegroup-data.service";
import { machineGroup } from "../models/machinegroup.models";
import { tap } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
  })
  export class MachineGroupApiService {
    url: string = 'http://192.168.0.17:3002/machinegroups';


    machinegroups: machineGroup[] = [];
  
    // roleUpdated = new Subject();
  
    constructor(
      private http: HttpClient,
      private machinegroupDataService: MachineGroupDataService
    ) { }
  
  
    get(): Observable<any> {
      return this.http.get<machineGroup[]>(this.url).pipe(
        tap((machinegroups) => {
          this.machinegroupDataService.loadMachineGroups(machinegroups)
        })
      )
    }
    addMachineGroup(machinegroup: machineGroup) {
      return this.http.post<machineGroup>(this.url, machinegroup)
        .pipe(
          tap((machinegroup) => {
            this.machinegroupDataService.addMachineGroup(machinegroup)
          })
        );
    }
    updateMachineGroup(machinegroup: Partial<machineGroup>, id) {
      return this.http.patch<machineGroup>(`${this.url}/${id}`, machinegroup)
        .pipe(
          tap(machinegroup => {
            this.machinegroupDataService.updateMachineGroup(machinegroup)
          })
        );
    }
    deleteMachineGroup(_id: string) {
      return this.http.delete<machineGroup>(`${this.url}/${_id}`).pipe(
        tap(machinegroup => {
          this.machinegroupDataService.deleteMachineGroup(machinegroup._id)
        })
      );
    }
  }