import { Module } from '@nestjs/common';
import { CustomerModule } from './customer/customer.module';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [CustomerModule, CatsModule],
  controllers: [],
  providers: [],
  exports: []
})
export class AppModule {}
