import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import Items from '../Interfaces/item';



@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit 
{
 
  constructor(private itemService:ItemService) {    
  }
    items:Items[] |undefined;
    seletecitem:Items|undefined;  

  ngOnInit(): void {
    this.getItemsResponce()
  }

  getItemsResponce(){

   this.itemService.getItem()!.subscribe(items=>{
      this.items=items;
   })

  }


 
  deleteItems(seletecitem:Items) 
  {
      if(confirm("Are you sure to delete "+seletecitem.Name)) 
      {
          this.itemService.deleteItems(seletecitem.Id)!.subscribe(()=>{
                this.getItemsResponce();
          })
        } 
  }
   

  SelectdItems(seletecitem:Items) 
  {
      alert("you client on item "+seletecitem.Name);
  }
   
 
}
