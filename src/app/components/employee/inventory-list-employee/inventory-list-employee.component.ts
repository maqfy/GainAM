import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource, MatSort} from '@angular/material';
import { Inventory } from 'src/app/model/inventory';

import { ChefService } from 'src/app/services/chef.service';
import { EmployeeService } from 'src/app/services/employee.service';
//import {Inventory} from '../../../model/Inventory';
declare var $: any;


@Component({
  selector: 'app-inventory-list-employee',
  templateUrl: './inventory-list-employee.component.html',
  styleUrls: ['./inventory-list-employee.component.css']
})
export class InventoryListEmployeeComponent implements OnInit {
  //[x: string]: any;
  inventorytList: Array<Inventory>;
  dataSource: MatTableDataSource<Inventory> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'name', 'quantity', 'action'];
  selectedInventory: Inventory = new Inventory();
  errorMessage: string;
  infoMessage: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  inventoryList: any;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.findAllInventories();
  }

  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  findAllInventories(){
    this.employeeService.findAllInventories().subscribe(data => {
      this.inventoryList = data;
      this.dataSource.data = data;
    });
  }

  // createNewInventoryRequest(){
  //   this.selectedInventory = new Inventory();
  //   $('#inventorytModal').modal('show');
  // }

  // editInventoryRequest(inventory: Inventory){
  //   this.selectedInventory = inventory;
  //   $('#inventoryModal').modal('show');
  // }

  // saveInventory(){
  //   if(!this.selectedInventory.id){
  //     this.saveInventory();
  //   }else{
  //     this.saveInventory();
  //   }
  // }

  // createInventory(){
  //   this.employeeService.createInventory(this.selectedInventory).subscribe(data => {
  //     this.inventoryList.push(data);
  //     this.dataSource = new MatTableDataSource(this.inventoryList);
  //     this.infoMessage = "Mission is completed";
  //     $('#inventoryModal').modal('hide');
  //   },err => {
  //     this.errorMessage = "Unexpected error occurred.";
  //   });
  // }

  // updateInventory(){
  //   this.chefService.updateInventory(this.selectedInventory).subscribe(data => {
  //     let itemIndex = this.inventoryList.findIndex(item => item.id == this.selectedInventory.id);
  //     this.inventoryList[itemIndex] = this.selectedInventory;
  //     this.dataSource = new MatTableDataSource(this.inventoryList);
  //     this.infoMessage = "Mission is completed";
  //     $('#inventoryModal').modal('hide');
  //   },err => {
  //     this.errorMessage = "Unexpected error occurred.";
  //   });
  // }

  // deleteInventoryRequest(inventory: Inventory){
  //   this.selectedInventory = inventory;
  //   $('#deleteModal').modal('show');
  // }

  // deleteInventory(){
  //   this.chefService.deleteInventory(this.selectedInventory).subscribe(data => {
  //     let itemIndex = this.inventoryList.findIndex(item => item.id == this.selectedInventory.id);
  //     if(itemIndex !== -1){
  //       this.inventoryList.splice(itemIndex, 1);
  //     }
  //     this.dataSource = new MatTableDataSource(this.inventoryList);
  //     this.infoMessage = "Mission is completed";
  //     $('#deleteModal').modal('hide');
  //   },err => {
  //     this.errorMessage = "Unexpected error occurred.";
  //   });
  //}
}
