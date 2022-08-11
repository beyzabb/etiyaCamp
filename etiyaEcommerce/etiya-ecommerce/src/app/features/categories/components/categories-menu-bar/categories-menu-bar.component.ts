import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Category } from '../../models/category';
import { CategoriesService } from '../../services/categories.service';
import { MegaMenuItem,MenuItem} from 'primeng/api';

@Component({
  selector: 'etiya-categories-menu-bar',
  templateUrl: './categories-menu-bar.component.html',
  styleUrls: ['./categories-menu-bar.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class CategoriesMenuBarComponent implements OnInit {
  categories!: Category[]
  items!: MegaMenuItem[];
  constructor(private categoryService: CategoriesService) { }

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories() {
    this.categoryService.getList().subscribe(response => {
      
      this.categories = response
      
      this.configureItems()
      
    })
    
  }

  configureItems() {
    this.items = this.categories.map(category=>{
      return {label: category.name, 
        routerLink:[''],
        queryParams: {categoryId:category.id}
      }
    })
    this.items.unshift({ //arrayin en başına ekleme yapar
      label:'All',
      routerLink:[''],
      queryParams:{categoryId:0}
    })
  }
}


