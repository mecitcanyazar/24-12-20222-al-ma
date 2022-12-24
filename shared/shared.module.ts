import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { ButtonComponent } from './components/button/button.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './components/input/input.component';
import { NgModule } from '@angular/core';
import { PopUpComponent } from './components/pop-up/pop-up.component';
import { SharedRoutingModule } from './shared-routing.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LoginComponent } from './pages/login/login.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { SelectOptionComponent } from './components/select-option/select-option.component';
import { BackgroundTemplateComponent } from './components/background-template/background-template.component';
import { DemographicInfoComponent } from '../features/customer/components/demographic-info/demographic-info.component';
import { CustomerModule } from '../features/customer/customer.module';
import { commonReducers } from './store/commonReducers';
import { StoreModule } from '@ngrx/store';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    PopUpComponent,
    LoginComponent,
    NavbarComponent,
    SidebarComponent,
    MainLayoutComponent,
    SelectOptionComponent,
    BackgroundTemplateComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedRoutingModule,
    FormsModule,
    TranslateModule.forRoot({
      defaultLanguage: localStorage.getItem('language') || 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    StoreModule.forRoot(commonReducers),
  ],
  exports: [
    InputComponent,
    ButtonComponent,
    PopUpComponent,
    TranslateModule,
    NavbarComponent,
    SidebarComponent,
    SelectOptionComponent,
    BackgroundTemplateComponent,
    MainLayoutComponent,
  ],
})
export class SharedModule {}
