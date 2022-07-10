import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CategoriesService } from '../categories.service';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  dataRef1 = new FormGroup({
    product_name: new FormControl(),
    category_id: new FormControl(),
    price: new FormControl(),
    image_url: new FormControl(),
    description: new FormControl()
  });

  dataRef2 = new FormGroup({
    id: new FormControl(),
    product_name: new FormControl(),
    category_id: new FormControl(),
    price: new FormControl(),
    image_url: new FormControl(),
    description: new FormControl(),
    is_active: new FormControl()
  });

  is_active: 1;
  category_id: any = '';
  data: any;
  updatedata: any;
  status: boolean;
  message: string = '';
  addflag: boolean = false;
  updateflag: boolean = false;
  categories: any;

  constructor(private productService: ProductsService, private categoryService: CategoriesService) { }

  ngOnInit(): void {
    this.getData();
    this.categoryService.getData().subscribe(
      (result) => {
        if(result.status && result.data.length > 0){
          this.categories = result.data;
          console.log(this.categories);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getData(){
    this.productService.getData().subscribe(
      (result) => {
        if(result.status && result.data.length > 0){
          this.data = result.data;
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  addData(){
    let data = this.dataRef1.value;
    this.productService.saveData(data).subscribe(
      (result) => {
        console.log(result);
        this.status = result.status;
        this.message = result.message;
      },
      (error) => {
        console.log(error);
        this.status = error.status;
        this.message = error.message;
      },
      () => {
        if(this.status){
          this.dataRef1.reset();
          this.getData();
          this.addflag = false;
        }
        
      }
    );
  }

  addAction(){
    this.addflag = true;
    this.updateflag = false;
  }

  updateAction(data: any){
    this.addflag = false;
    this.updateflag = true;
    this.updatedata = data;
    this.is_active = data.is_active;
    this.category_id = data.category_id;
  }

  updateData(){
    let data = this.dataRef2.value;
    this.productService.updateData(data).subscribe(
      (result) => {
        console.log(result);
        this.status = result.status;
        this.message = result.message;
      },
      (error) => {
        console.log(error);
        this.status = error.status;
        this.message = error.message;
      },
      () => {
        if(this.status){
          this.dataRef1.reset();
          this.getData();
          this.updateflag = false;
        }
        
      }
    );
  }

  deleteData(id: string){
    this.productService.deleteData(id).subscribe(
      (result) => {
        console.log(result);
        this.status = result.status;
        this.message = result.message;
      },
      (error) => {
        console.log(error);
      },
      () => {
        this.getData();
        this.addflag = false;
        this.updateflag = false;
        
      }
    );
  }

}
