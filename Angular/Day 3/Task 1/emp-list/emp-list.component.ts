import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/emp.model';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.scss']
})
export class EmpListComponent implements OnInit {


  employeeData:Employee[] = [{"id":1,"first_name":"Sutherlan","last_name":"Ferrar","grade":1,"salary":32541},
  {"id":2,"first_name":"Kile","last_name":"Slay","grade":4,"salary":62794},
  {"id":3,"first_name":"Virgie","last_name":"Gumly","grade":1,"salary":19340},
  {"id":4,"first_name":"Gael","last_name":"Chappelow","grade":3,"salary":17291},
  {"id":5,"first_name":"Emmit","last_name":"Spiers","grade":1,"salary":73745},
  {"id":6,"first_name":"Esme","last_name":"Greenslade","grade":4,"salary":12986},
  {"id":7,"first_name":"Demetria","last_name":"Saller","grade":3,"salary":32072},
  {"id":8,"first_name":"Chloette","last_name":"Steggles","grade":1,"salary":59809},
  {"id":9,"first_name":"Jasmin","last_name":"Gallamore","grade":3,"salary":36657},
  {"id":10,"first_name":"Ericka","last_name":"Schollick","grade":1,"salary":36809},
  {"id":11,"first_name":"Thane","last_name":"Doul","grade":4,"salary":74677},
  {"id":12,"first_name":"Augustine","last_name":"Denerley","grade":3,"salary":23034},
  {"id":13,"first_name":"Eloise","last_name":"Proffitt","grade":4,"salary":27412},
  {"id":14,"first_name":"Carmina","last_name":"Geldeford","grade":2,"salary":48097},
  {"id":15,"first_name":"Windy","last_name":"Langran","grade":2,"salary":75151},
  {"id":16,"first_name":"Devin","last_name":"Bowring","grade":1,"salary":66828},
  {"id":17,"first_name":"Estele","last_name":"Monck","grade":3,"salary":64433},
  {"id":18,"first_name":"Sansone","last_name":"Standish-Brooks","grade":3,"salary":11702},
  {"id":19,"first_name":"Lotta","last_name":"Feldmann","grade":2,"salary":77328},
  {"id":20,"first_name":"Evered","last_name":"Moretto","grade":2,"salary":55888},
  {"id":21,"first_name":"Kristan","last_name":"Jennins","grade":3,"salary":88450},
  {"id":22,"first_name":"Hunter","last_name":"Coysh","grade":2,"salary":80144},
  {"id":23,"first_name":"Fayth","last_name":"Whitsun","grade":3,"salary":19879},
  {"id":24,"first_name":"Kellen","last_name":"Surtees","grade":3,"salary":77150},
  {"id":25,"first_name":"Shayne","last_name":"Kasting","grade":1,"salary":79927},
  {"id":26,"first_name":"Caron","last_name":"Gerald","grade":1,"salary":77411},
  {"id":27,"first_name":"Alvis","last_name":"Klus","grade":4,"salary":81512},
  {"id":28,"first_name":"Brier","last_name":"Bretland","grade":2,"salary":18280},
  {"id":29,"first_name":"Towney","last_name":"Gillbanks","grade":4,"salary":75195},
  {"id":30,"first_name":"Miran","last_name":"Litzmann","grade":4,"salary":17213},
  {"id":31,"first_name":"Nedda","last_name":"Fordy","grade":4,"salary":62709},
  {"id":32,"first_name":"Salmon","last_name":"Vella","grade":2,"salary":40205},
  {"id":33,"first_name":"Carmon","last_name":"Mayoh","grade":4,"salary":54020},
  {"id":34,"first_name":"Shana","last_name":"Stopp","grade":3,"salary":62126},
  {"id":35,"first_name":"Romy","last_name":"Vignal","grade":3,"salary":34762},
  {"id":36,"first_name":"Barry","last_name":"Lorent","grade":3,"salary":33430},
  {"id":37,"first_name":"Roma","last_name":"Kroger","grade":4,"salary":12131},
  {"id":38,"first_name":"Thorvald","last_name":"Purveys","grade":4,"salary":35168},
  {"id":39,"first_name":"Kippie","last_name":"Charte","grade":3,"salary":32623},
  {"id":40,"first_name":"Enid","last_name":"Camacho","grade":1,"salary":34378},
  {"id":41,"first_name":"Chance","last_name":"Midden","grade":1,"salary":11642},
  {"id":42,"first_name":"Siffre","last_name":"Peatt","grade":4,"salary":88770},
  {"id":43,"first_name":"Quinton","last_name":"Davis","grade":1,"salary":84234},
  {"id":44,"first_name":"Luciana","last_name":"Brunning","grade":3,"salary":51661},
  {"id":45,"first_name":"Aggie","last_name":"Esmead","grade":4,"salary":26217},
  {"id":46,"first_name":"Dode","last_name":"Giorgione","grade":1,"salary":52990},
  {"id":47,"first_name":"Kessia","last_name":"Fockes","grade":2,"salary":44427},
  {"id":48,"first_name":"Sid","last_name":"Krzyzanowski","grade":3,"salary":72854},
  {"id":49,"first_name":"Timoteo","last_name":"Lepope","grade":4,"salary":37029},
  {"id":50,"first_name":"Elmore","last_name":"Redhills","grade":1,"salary":21734},
  {"id":51,"first_name":"Aaren","last_name":"Leathard","grade":1,"salary":41139},
  {"id":52,"first_name":"Massimiliano","last_name":"Gouinlock","grade":1,"salary":45761}]
  
  end: number=4;
  start: number=0;

  
  constructor() { }

  ngOnInit(): void {
  }
  load_more(isMore:boolean) {
    if(isMore) {
      this.start = this.end;
      this.end += 4;
    }
    else {
      this.start-=4;
      this.end-=4;
    }
    
  }

}
