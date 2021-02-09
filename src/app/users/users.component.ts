import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  allUsers:any = [];
  pagination = {};
  pages = [1,2,3,4,5];
  disableNext = false;
  disablePrevious = true;

  constructor( private mainService: MainService) { }

  ngOnInit(): void {
    this.mainService.getDetails().subscribe(resp=>{
      this.allUsers = resp[0];
      this.pagination = this.allUsers.meta.pagination;
    });
      
  }
  pageMove(page: any[],action:string) {
    
      this.pages = this.pages.map(data => {
        if(this.pages[0]=== 1 && action ==='back') {
          this.disablePrevious = false;
          return data;
        }
        if(action ==='back') {
          return data = data - 5 ;
        } else {
          return data = data + 5 ;
        }
        
      })
    
  }
  

  showList(index:number) {
    this.mainService.getUseryPage(index).subscribe(data => {
      this.allUsers = data;
    })
  }

}
