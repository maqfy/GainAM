import { Component, OnInit, ViewChild } from '@angular/core';

import {Product} from '../../../model/product';
import {MatPaginator, MatTableDataSource, MatSort} from '@angular/material';
import { ChefService } from 'src/app/services/chef.service';

declare var $: any;

@Component({
  selector: 'app-product-list-chef',
  templateUrl: './product-list-chef.component.html',
  styleUrls: ['./product-list-chef.component.css']
})
export class ProductListChefComponent implements OnInit {
  productList: Array<Product>;
  dataSource: MatTableDataSource<Product> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'name', 'price', 'action'];
  selectedProduct: Product = new Product();
  errorMessage: string;
  infoMessage: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private chefService: ChefService) { }

  ngOnInit() {
    this.findAllProducts();
  }

  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  findAllProducts(){
    this.chefService.findAllProducts().subscribe(data => {
      this.productList = data;
      this.dataSource.data = data;
    });
  }

  createNewProductRequest(){
    this.selectedProduct = new Product();
    $('#productModal').modal('show');
  }

  editProductRequest(product: Product){
    this.selectedProduct = product;
    $('#productModal').modal('show');
  }

  saveProduct(){
    if(!this.selectedProduct.id){
      this.createProduct();
    }else{
      this.updateProduct();
    }
  }

  createProduct(){
    this.chefService.createProduct(this.selectedProduct).subscribe(data => {
      this.productList.push(data);
      this.dataSource = new MatTableDataSource(this.productList);
      this.infoMessage = "Mission is completed";
      $('#productModal').modal('hide');
    },err => {
      this.errorMessage = "Unexpected error occurred.";
    });
  }

  updateProduct(){
    this.chefService.updateProduct(this.selectedProduct).subscribe(data => {
      let itemIndex = this.productList.findIndex(item => item.id == this.selectedProduct.id);
      this.productList[itemIndex] = this.selectedProduct;
      this.dataSource = new MatTableDataSource(this.productList);
      this.infoMessage = "Mission is completed";
      $('#productModal').modal('hide');
    },err => {
      this.errorMessage = "Unexpected error occurred.";
    });
  }

  deleteProductRequest(product: Product){
    this.selectedProduct = product;
    $('#deleteModal').modal('show');
  }

  deleteProduct(){
    this.chefService.deleteProduct(this.selectedProduct).subscribe(data => {
      let itemIndex = this.productList.findIndex(item => item.id == this.selectedProduct.id);
      if(itemIndex !== -1){
        this.productList.splice(itemIndex, 1);
      }
      this.dataSource = new MatTableDataSource(this.productList);
      this.infoMessage = "Mission is completed";
      $('#deleteModal').modal('hide');
    },err => {
      this.errorMessage = "Unexpected error occurred.";
    });
  }
}
