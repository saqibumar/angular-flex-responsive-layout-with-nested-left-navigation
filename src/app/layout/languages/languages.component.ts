import { AddLanguageComponent } from './add-language/add-language.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatFormField, MatSelect } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit {
  
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedColumns: string[] = ['name', 'code', 'associatedFacilities', 'actions'];
  dataSource = LANGUAGE_DATA;

  states: string[] = [
    'Draft', 'Published'
  ];
  selected = 'Draft';

  
  animal: string;
  name: string;


  constructor(public dialog: MatDialog) { }
  
  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddLanguageComponent, {
      width: '1250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}

export interface Languages {
  name: string;
  code: string;
  associatedFacilities: string;
  actions: string;
}
const LANGUAGE_DATA: Languages[] = [
  {name: "English (default)", code: 'en_US:English (United States)', associatedFacilities: "All", actions: 'published'},
  {name: "Japanese - Japan", code: 'ja-JP:Japanese (Japan)', associatedFacilities: "Tokyo", actions: 'draft'},
  {name: "Spanish - México", code: 'es-MX:Spanish (Mexico)', associatedFacilities: "Santa Fe, Mexico City, Cuicuilco, Mexico City, Guadalajara, Mexico", actions: 'draft'},
  {name: "Spanish - Chile", code: 'es-CL:Spanish (Chile)', associatedFacilities: "Santiago, Chile", actions: 'draft'},
];


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];



export interface DialogData {
  animal: string;
  name: string;
}