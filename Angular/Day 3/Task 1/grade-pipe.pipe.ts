import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gradePipe'
})
export class GradePipePipe implements PipeTransform {

  transform(input:number): string {
    if(input==1){
      return "Outstanding";
    }
    else if(input==2) {
      return "Excellent";
    }
    else if(input==3) {
      return "Good";
    }
    else if(input==4) {
      return "Average";
    }
    else {
      return "Needs Improvement";
    }
  }

}
