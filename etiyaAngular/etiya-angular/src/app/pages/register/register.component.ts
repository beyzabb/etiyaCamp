import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Customer } from 'src/app/models/customer';
import { CustomersService } from 'src/app/services/customers/customers.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!:FormGroup;
  // companyName= new FormControl("",Validators.required);
  constructor(private formBuilder:FormBuilder, private customerService:CustomersService) { }

  ngOnInit(): void {
    this.createRegisterForm()
  }
  createRegisterForm() {
    this.registerForm=this.formBuilder.group({
      companyName:['',[Validators.required,Validators.minLength(3)]],
      contactName:['',Validators.required],
      contactTitle:['',Validators.required],
      street:['',Validators.required],
      city:['',Validators.required],
      region:['',Validators.required],
      postalCode:['',Validators.required],
      country:['',Validators.required],
      phone:['',Validators.required],
      customerKey:['',Validators.required]
    }  
    )

  }

 
  
  register(){
    if(this.registerForm.invalid){
      console.warn("Gerekli alanları Doldurunuz.");
      return;
    }

    const customer: Customer ={
      ...this.registerForm.value,
      city: this.registerForm.value.city.toUpperCase()
    }
    this.customerService.add(this.registerForm.value).subscribe(response=>{
      console.info(response)
    })
  }

}
