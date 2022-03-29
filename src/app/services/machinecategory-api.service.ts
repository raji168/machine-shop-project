import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MachineCategoryDataService } from '../data-services/machinecategory-data.service';
import { MachineCategory } from '../models/machine-category.model';


@Injectable({
  providedIn: 'root'
})
export class MachineCategoryApiService {

  url: string = 'http://192.168.0.17:3002/machinecategorys';
  machineCategories: MachineCategory[] = [];
  constructor(
    private http: HttpClient,
    private machineCategoryDataService: MachineCategoryDataService
  ) { }


  get(): Observable<any> {
    return this.http.get<MachineCategory[]>(this.url)
    .pipe(
      tap((machineCategories) => {
        this.machineCategoryDataService.loadMachineCategory(machineCategories)
      })
    )
  }

  addMachineCategory(machineCategory: MachineCategory) {
    return this.http.post<MachineCategory>(this.url, machineCategory)
      .pipe(
        tap((machineCategory) => {
          this.machineCategoryDataService.addMachineCategory(machineCategory)
        })
      );
  }

  updateMachineCategory(machineCategory: Partial<MachineCategory>, id) {
    return this.http.patch<MachineCategory>(`${this.url}/${id}`, machineCategory)
      .pipe(
        tap(machineCategory => {
          this.machineCategoryDataService.updateMachineCategory(machineCategory)
        })
      );
  }

  deleteMachineCategory(_id: string) {
    return this.http.delete<MachineCategory>(`${this.url}/${_id}`)
    .pipe(
      tap(machineCategory => {
        this.machineCategoryDataService.deleteMachineCategory(machineCategory._id)
      })
    );

  }
}
