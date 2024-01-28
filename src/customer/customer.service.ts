import { Injectable } from "@nestjs/common";

@Injectable()
export class CustomerService {
    customers = [];

    getAllCusomerts() {
        console.log("return customers:-", this.customers)
        return this.customers;
    }

    createCustomer(customer) {
        return this.customers.push(customer);
    }

}