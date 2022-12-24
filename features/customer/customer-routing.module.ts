import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemographicInfoComponent } from './components/demographic-info/demographic-info.component';
import { AddressInfoComponent } from './components/address-info/address-info.component';

const routes: Routes = [
  // {path:"customer",pathMatch:'full',
  // children:[
  //   {path:'demographic_info',component:DemographicInfoComponent},
  //   {path:'address_info',component:AddressInfoComponent},
  //   ]
  // }
  {path:'customer',
  children:[
    {path:'',pathMatch:'full',component:DemographicInfoComponent},
    {path:'demographic_info',component:DemographicInfoComponent},
    {path:'address_info',component:AddressInfoComponent},
  ]}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }


