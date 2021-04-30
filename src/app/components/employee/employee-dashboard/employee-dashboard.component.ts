import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';


@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {
  //userCount:any = "";
  productCount:any = "";
  ///transactionCount:any = "";
  inventoryCount:any = "";
  // reservationCount:any = "";

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  
    this.numberOfProducts();
       this.numberOfInventories();
   
  }


 

  numberOfProducts(){
    this.employeeService.numberOfProducts().subscribe(data => {
      this.productCount = data.response;
    });
  }


  numberOfInventories(){
    this.employeeService.numberOfInventories().subscribe(data => {
      this.inventoryCount = data.response;
    })
  }
  // numberOfReservations(){
  //   this.adminService.numberOfReservations().subscribe(data => {
  //     this.reservationCount = data.response;
  //   })
  // }

}
