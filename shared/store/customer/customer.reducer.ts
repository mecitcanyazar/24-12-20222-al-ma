import { createReducer, on } from "@ngrx/store";
import { Customer } from "src/app/features/models/customers/customers";
import { addCustomer } from "./customer.actions";

const initialState: Customer = {firstName:'',lastName:'',birthDate:'',gender:'',nationalityId:0}

export const customerReducer = createReducer(
  initialState,
  on(addCustomer,(state:Customer, action:Customer)=>{
    return action

  })
)
