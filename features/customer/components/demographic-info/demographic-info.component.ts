
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  NG_VALUE_ACCESSOR,
  Validators,
} from '@angular/forms';
import { DatePipe } from '@angular/common';
import { PopUpService } from 'src/app/shared/services/pop-up.service';
import { PopupModel } from 'src/app/shared/models/popupModel';
import { CustomerService } from '../../services/customer.service';
import { Customer } from 'src/app/features/models/customers/customers';
import { Store, USER_RUNTIME_CHECKS } from '@ngrx/store';

@Component({
  selector: 'etiya-demographic-info',
  templateUrl: './demographic-info.component.html',
  styleUrls: ['./demographic-info.component.scss'],
})

export class DemographicInfoComponent implements OnInit {
  demographicInfoForm!: FormGroup;
  show: boolean = false;
  isCustomer!:Customer

  constructor(
    private formBuilder: FormBuilder,
    private datePipe: DatePipe,
    private popService: PopUpService,
    private customerService:CustomerService,
  ) {}
  ngOnInit(): void {
    this.createDemographicInfoForm();
    this.subs();
  }

  createDemographicInfoForm(): void {
    let date = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.demographicInfoForm = this.formBuilder.group({
      // can be changed
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      middleName: [''],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      birthDate: [date, [Validators.required]],
      gender: ['', Validators.required],
      fatherName: [''],
      motherName: [''],
      nationalityID: ['', [Validators.required,Validators.minLength(11)]],
    });
  }

  subs() {
    this.popService.isPopUp.subscribe((response) => {
      this.show = response.isOpen;
      console.log(this.show);
    });
  }
  onDemographicInfoSubmit() {
    if (this.demographicInfoForm.invalid) {
      console.log(this.demographicInfoForm);
      let p: PopupModel = { isOpen: true, title: 'Warning',icon:'fa-sharp fa-solid fa-circle-exclamation' };
      this.popService.startPopUp(p);
      console.log('çalıştı');
      return;
    }

    let currentNationalityId = this.demographicInfoForm.value.nationalityId
    this.customerService.getByNationalityId(currentNationalityId).subscribe((response)=>{
    this.isCustomer  = response

    })

    if(this.isCustomer.nationalityId != currentNationalityId){

        let customer = this.getDataFromForm()

        this.customerService.addState(customer)

        return
    }

    console.log("Bu TC kullanılıyor...")


    console.log('çalışmadı');
    console.log(this.demographicInfoForm);
  }

  getDataFromForm():Customer{
    const customer:Customer = {
      ...this.demographicInfoForm.value,
        firstName: this.demographicInfoForm.value.firstName,
        middleName:this.demographicInfoForm.value.middleName,
        lastName : this.demographicInfoForm.value.lastName ,
        birthDate:this.demographicInfoForm.value.birthDate,
        gender:this.demographicInfoForm.value.gender,
        fatherName:this.demographicInfoForm.value.fatherName,
        motherName:this.demographicInfoForm.value.motherName,
        nationalityId:Number(this.demographicInfoForm.value.nationalityId),
        // name:this.demographicInfoForm.value.name.trim()
      }
      return customer
  }


}

