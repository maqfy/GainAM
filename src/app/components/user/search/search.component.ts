import { Component, OnInit } from '@angular/core';
import { UserRegisterService } from 'src/app/user-register.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

 
  name : string;
  product : any;

  constructor(private service : UserRegisterService) { }

  ngOnInit() {
  }

  public findProductByname(){
    let response = this.service.getProductByname(this.name);
    response.subscribe(data => this.product = data);
  }
  

}

 

