import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  email!:string;
  password!:string;
  constructor() { }

  ngOnInit(): void {
  }
  onEmailChange(event:string){
    if(!event.includes("@")){
      console.log("Email giriniz!")
    }
    //console.log(`email değişti: ${this.email}`)
  }

}
