import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstModuleComponentComponent } from './first-module-component/first-module-component.component';



@NgModule({
  declarations: [
    FirstModuleComponentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FirstModuleModule { }
