import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Machine } from "../models/machine.model";

@Injectable({
  providedIn: 'root'
})

export class MachineDataService {

  private machines: Machine[] = [];

  machineUpdated$ = new Subject<Machine[]>()

  getMachine() {

    return [...this.machines]
  }

  loadMachine(machines: Machine[]) {

    this.machines = machines;

  }

  addMachine(machine: Machine) {

    this.machines = [...this.machines, machine]
    this.machineUpdated$.next(this.machines);

  }

  updateMachine(machineResponse: Machine) {

    const updateMachine = this.machines.find(machine => machine._id === machine._id)
    const updateMachineIndex = this.machines.findIndex(machine => machine._id === machine._id)
    const updatedMachine = { ...updateMachine, machineResponse }
    this.machines[updateMachineIndex] = updatedMachine
    this.machineUpdated$.next(this.machines);
  }

}