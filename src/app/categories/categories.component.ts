import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  dataRef1 = new FormGroup({
    category_name: new FormControl(),
    description: new FormControl()
  });

  dataRef2 = new FormGroup({
    id: new FormControl(),
    category_name: new FormControl(),
    description: new FormControl(),
    is_active: new FormControl()
  });

  is_active: 1;
  data: any;
  updatedata: any;
  status: boolean;
  message: string = '';
  addflag: boolean = false;
  updateflag: boolean = false;

  constructor(private categoryService: CategoriesService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.categoryService.getData().subscribe(
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
    this.categoryService.saveData(data).subscribe(
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
          this.getCategories();
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
  }

  updateData(){
    let data = this.dataRef2.value;
    this.categoryService.updateData(data).subscribe(
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
          this.getCategories();
          this.updateflag = false;
        }
        
      }
    );
  }

  deleteData(id: string){
    this.categoryService.deleteData(id).subscribe(
      (result) => {
        console.log(result);
        this.status = result.status;
        this.message = result.message;
      },
      (error) => {
        console.log(error);
      },
      () => {
        this.getCategories();
        this.addflag = false;
        this.updateflag = false;
        
      }
    );
  }

}
