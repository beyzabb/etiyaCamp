import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../../services/loading/loading.service';

@Component({
  selector: 'etiya-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
  isLoading:boolean=false;
  constructor(private loadingService:LoadingService) { }

  ngOnInit(): void {
    this.subscribeLoadingStatus();
  }

  subscribeLoadingStatus(){
    this.loadingService.isLoading.subscribe((value)=>{
      this.isLoading=value;
    })
  }
}
