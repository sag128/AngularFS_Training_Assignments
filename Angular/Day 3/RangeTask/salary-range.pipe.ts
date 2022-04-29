import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salaryRange'
})
export class SalaryRangePipe implements PipeTransform {

  transform(inputData: any[],minRange:number,maxRange:number): any[] {
    return inputData.filter(item=>item.salary >= minRange && item.salary <= maxRange);
  }

}
