import { Component, OnInit } from '@angular/core';
import { Subject,of, from } from 'rxjs';
import { ObervableService } from '../obervable.service';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.scss']
})
export class ObservableDemoComponent implements OnInit {

  constructor(private service:ObervableService) { }
userData:any[]=[];

  ngOnInit(): void {
  
    
  
  }

  getData() {
    this.service.getData().subscribe((success:any)=>{
      this.userData = success["data"];
    })
  }


}
