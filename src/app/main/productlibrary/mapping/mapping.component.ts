import { ChangeDetectorRef, Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Observable } from 'rxjs';
import { MappingDataService } from 'src/app/data-services/mapping-data.service';
import { Mapping } from 'src/app/models/mapping.model';
import { MappingApiService } from 'src/app/services/mapping-api.service';
import { map } from 'rxjs/operators';
import { MatAccordion } from '@angular/material/expansion';
import { MatSort } from '@angular/material/sort';



@Component({
  selector: 'app-mapping',
  templateUrl: './mapping.component.html',
  styleUrls: ['./mapping.component.scss'],


animations: [
  trigger('detailExpand', [
    state('collapsed', style({height: '0px', minHeight: '0'})),
    state('expanded', style({height: '*'})),
    transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
  ]),
],

})

export class MappingComponent {

  
// dataSource = ELEMENT_DATA;
// columnsToDisplay = ['serialNo','productName','customerName', 'process', 'status'];
// expandedElement: PeriodicElement ;
}

// export interface PeriodicElement {
// productName: string;
// serialNo: number;
// customerName :string;
// process: number;
// status: string;
// description: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
// {
//   serialNo: 1,
//   productName: 'Product1',
//   customerName: 'Sample',
//   process: 9,
//   status: 'true',
//   description: `Hydrogen is a chemical element with status H atomic number 1. With a standard
//       atomic process of 1.008, hydrogen is the lightest element on the periodic table.`,
// },
// {
//   serialNo: 2,
//   productName: 'Product2',
//   customerName: 'Sample',
//   process: 4,
//   status: 'true',
//   description: `Helium is a chemical element with status Hd atomic number 2. It is a
//       colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
//       group in the periodic table. Its boiling point is the lowest among all the elements.`,
// },
// {
//   serialNo: 3,
//   productName: 'Product3',
//   customerName: 'Sample',
//   process: 6,
//   status: 'true',
//   description: `Lithium is a chemical element with status Ld atomic number 3. It is a soft,
//       silvery-white alkali metal. Under standard conditions, it is the lightest metal and the
//       lightest solid element.`,
// },
// {
//   serialNo: 4,
//   productName: 'Product4',
//   customerName: 'Sample',
//   process: 2,
//   status: 'ok',
//   description: `Beryllium is a chemical element with status Bd atomic number 4. It is a
//       relatively rare element in the universe, usually occurring as a product of the spallation of
//       larger atomic nuclei that have collided with cosmic rays.`,
// },
// {
//   serialNo: 5,
//   productName: 'Product5',
//   customerName: 'Sample',
//   process: 1,
//   status: 'true',
//   description: `Boron is a chemical element with status B atomic number 5. Produced entirely
//       by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a
//       low-abundance element in the Solar system and in the Earth's crust.`,
// },
// {
//   serialNo: 6,
//   productName: 'Product6',
//   customerName: 'Sample',
//   process: 7,
//   status: 'ok',
//   description: `Carbon is a chemical element with status C atomic number 6. It is nonmetallic
//       and tetravalent—making four electrons available to form covalent chemical bonds. It belongs
//       to group 14 of the periodic table.`,
// },
// {
//   serialNo: 7,
//   productName: 'Product7',
//   customerName: 'Sample',
//   process: 3,
//   status: 'true',
//   description: `Nitrogen is a chemical element with status N atomic number 7. It was first
//       discovered and isolated by Scottish physician Daniel Rutherford in 1772.`,
// },
// {
//   serialNo: 8,
//   productName: 'Product8',
//   customerName: 'Sample',
//   process: 4,
//   status: 'ok',
//   description: `Oxygen is a chemical element with status O'true' atomic number 8. It is a member of
//        the chalcogen group on the periodic table, a highly reactive nonmetal, and an oxidizing
//        agent that readily forms oxides with most elements as well as with other compounds.`,
// },
// {
//   serialNo: 9,
//   productName: 'Product9',
//   customerName: 'Sample',
//   process: 8,
//   status: 'true',
//   description: `Fluorine is a chemical element with status F'true' atomic number 9. It is the
//       lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard
//       conditions.`,
// },
// {
//   serialNo: 10,
//   productName: 'Product10',
//   customerName: 'Sample',
//   process: 2,
//   status: 'ok',
//   description: `Neon is a chemical element with status N'true'd atomic number 10. It is a noble gas.
//       Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
//       two-thirds the density of air.`,
// },
// ];




