import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from '../../models/service';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'etiya-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {

  services!: Service[];

  constructor(private serviceService: ServicesService,private router:Router) { }

  ngOnInit() {
      this.getServices();
  }

  getServices(){
    this.serviceService.getAll().subscribe(data => this.services = data);
  }

  deleteService(id:number){
    if(confirm("Are you sure want to delete?")){
      this.serviceService.delete(id).subscribe(()=>{
        setTimeout(() => {
          this.getServices();
        }, 1000);
      })
    } 
  }

  selectedServiceId(selectedService: Service):void{
     this.router.navigateByUrl(`service/${selectedService.id}`);
  }

}
