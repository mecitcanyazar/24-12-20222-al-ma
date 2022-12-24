import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { DemographicInfoComponent } from './components/demographic-info/demographic-info.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddressInfoComponent } from './components/address-info/address-info.component';


@NgModule({
  declarations: [
    DemographicInfoComponent,
    AddressInfoComponent,

  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[DemographicInfoComponent,AddressInfoComponent],
  providers: [DatePipe],
})
export class CustomerModule { }
