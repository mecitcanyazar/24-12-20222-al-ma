import { createAction, props } from "@ngrx/store";
import { Customer } from "src/app/features/models/customers/customers";

export const addCustomer = createAction(
  '[Customer] Add Customer',
  props<Customer>()
)

