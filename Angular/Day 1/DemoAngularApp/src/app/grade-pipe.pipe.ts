import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gradePipe'
})
export class GradePipePipe implements PipeTransform {

  gradeKeyValue:any[] = [{key:1,value:"Outstanding"},
  {key:2,value:"Excellent"},
  {key:3,value:"Good"},
  {key:4,value:"Average"},
]

  transform(input:number): string {
    return this.gradeKeyValue.find(item=>item.key==input).value;
  }

}
