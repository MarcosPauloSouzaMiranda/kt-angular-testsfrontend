import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingService } from './loading/loading.service';

import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [
    LoadingComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    LoadingService
  ],
  exports: [
    LoadingComponent
  ]
})
export class SharedComponentsModule { }
