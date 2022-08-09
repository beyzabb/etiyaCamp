import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Service } from '../../models/service';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'etiya-service-form',
  templateUrl: './service-form.component.html',
  styleUrls: ['./service-form.component.css']
})
export class ServiceFormComponent implements OnInit {

  serviceForm! : FormGroup;
  service!: Service;  
  
  constructor(private formBuilder:FormBuilder,private activatedRoute:ActivatedRoute,
    private serviceService:ServicesService,private router:Router,private messageService: MessageService) { }

  ngOnInit(): void {
    this.getProductIdFromRoute();
  }

  createProductForm(): void{
    this.serviceForm = this.formBuilder.group({
      name: [this.service?.name  || '',Validators.required]
    })   
  }
  
  getProductIdFromRoute(){
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) this.getProductById(params['id']);
      else{
        this.createProductForm();
      };
    });
  }

  getProductById(id:number) {
    this.serviceService.getById(id).subscribe((data) => {
      this.service = data;
      this.createProductForm();
    });
  }

  
  save(){
    if(this.service) this.update();
    else{
      this.add();
    }
  }

  update() {
    if (this.serviceForm.invalid) {
      this.messageService.add({severity:'warning', summary:'Update', detail:'Please fill the required areas!!!'});
      return;
    }
    const service:Service = Object.assign({id:this.service.id}, this.serviceForm.value); 
      this.serviceService.update(service).subscribe(() => {
        setTimeout(() => {
          this.router.navigateByUrl("services");
          this.messageService.add({severity:'success', summary:'Update', detail:'Service succesfully updated!'});
        }, 1000);
      });
  }

  add(){
    if (this.serviceForm.invalid) {
      this.messageService.add({severity:'warning', summary:'Add', detail:'Please fill the required areas!!!'});
      return;
    }

    const service:Service = {
      ...this.serviceForm.value,
    }

    this.serviceService.add(service).subscribe(() =>{
      setTimeout(() => {
        this.messageService.add({severity:'success', summary:'Add', detail:'Service succesfully added!'});
        this.router.navigateByUrl("services");
      }, 1000);
    })
  }

}
