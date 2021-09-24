import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';



const MaterialComponent=[
  MatToolbarModule,
  MatButtonModule,
  MatGridListModule,
  MatCardModule,
  MatTabsModule,
  MatDialogModule
]

@NgModule({
  imports: [
     MaterialComponent
  ],
  exports: [
    MaterialComponent
  ]
})
export class MaterialModule { }
