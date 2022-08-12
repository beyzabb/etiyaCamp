import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from '../../models/service';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-service-dashboard',
  templateUrl: './service-dashboard.component.html',
  styleUrls: ['./service-dashboard.component.css']
})
export class ServiceDashboardComponent implements OnInit {

  services!: Service[];
  fetchStatus = 'pending';
  pageSize = 5

  constructor(private serviceService: ServicesService,private router:Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.getServicesList();
    }, 1500);
  }

  deleteService(id:number){
    if(confirm("Are you sure want to delete?")){
      this.serviceService.delete(id).subscribe(()=>{
        setTimeout(() => {
          this.getServicesList();
        }, 1000);
      })
    } 
  }

  selectedServiceId(selectedService: Service):void{
     this.router.navigateByUrl(`service/${selectedService.id}`);
  }

  getServicesList(){
    this.fetchStatus = 'pending'
   setTimeout(() => {
     this.serviceService.getAll().subscribe((data =>{
       this.services = data
       this.fetchStatus = 'loaded'
     }),
     (error) =>{
       this.fetchStatus = 'error'
     })
   }, 1000);
 
 }
}


