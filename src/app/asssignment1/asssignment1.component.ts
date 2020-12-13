import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-asssignment1',
  templateUrl: './asssignment1.component.html',
  styleUrls: ['./asssignment1.component.css']
})
export class Asssignment1Component implements OnInit {
  // @HostListener('window:resize', ['$event'])
  rowsVal = 18;
  output:any[] = [];
  input:any;
  clicked:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  getData() {
    this.clicked = true;
    this.output = [];
    let final:any = [];
    //Check if input data is valid or not
    if(this.IsJsonString(this.input)){
      //Parse json
      const parsed = JSON.parse(this.input);
      //Form one single array from parsed data
      for (const key in parsed) {
          const element = parsed[key];
          element.forEach((val: any) =>{
            final.push(val)
          })
      }
      
      //loop through each element in final array to check for parent_Id is equal to id
      final.forEach((node: any) => {
        // If No parent_id, it means its means it is a root
        if (!node.parent_id) return this.output.push(node);
        
        // Insert node as child of parent in final array
        const parentIndex = final.findIndex((el: { id: any; }) => el.id === node.parent_id);
        if (!final[parentIndex].children) {
          return final[parentIndex].children = [node];
        }
        
        final[parentIndex].children.push(node);
      });
      //console.log(root);

    }
  }

  IsJsonString(str:any) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

reset() {
  this.clicked = false;
}

  onResize(event:any) {
    const width = event.target.innerWidth;
    if (width < 768) {
      this.rowsVal = 7;
    } else {
      this.rowsVal = 18;
    }
  }

}
