import { DialogData } from './../languages.component';
import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-add-language',
  templateUrl: './add-language.component.html',
  styleUrls: ['./add-language.component.scss']
})
export class AddLanguageComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddLanguageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
    languages: string[] = [
      'English', 'Espanol'
    ];
    selected = 'English';
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }

}
