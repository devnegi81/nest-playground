import { Controller, Get } from '@nestjs/common';
import { CustomerService } from 'src/customer/customer.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly customerService: CustomerService) {
  }

  @Get()
  getCustomers() {
    console.log("in cat controller")
    return this.customerService.getAllCusomerts()
  }
}

