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






    // first = 0;

    // rows = 5;


    // next() {
    //     this.first = this.first + this.rows;
    // }

    // prev() {
    //     this.first = this.first - this.rows;
    // }

    // reset() {
    //     this.first = 0;
    // }

    // isLastPage(): boolean {
    //     return this.services ? this.first === (this.services.length - this.rows): true;
    // }

    // isFirstPage(): boolean {
    //     return this.services ? this.first === 0 : true;
    // }

}