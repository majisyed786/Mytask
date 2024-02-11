import { Component, ElementRef,Output, ViewChild } from '@angular/core';
import { ItemService } from '../item.service';
import Items from '../Interfaces/item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-additems',
  templateUrl: './additems.component.html',
  styleUrls: ['./additems.component.css']
})
export class AdditemsComponent {

  constructor(private itemsservices:ItemService,private router: Router){}
  Name=""
  Desctiption=""
  Images=""
  isValidated=false;
  message=""
  @ViewChild("ingName")
  ingName!: ElementRef;
  @ViewChild("ingDescription")
  ingDescription!: ElementRef;
  @ViewChild("ingImages")
  ingImages!: ElementRef;
  item!: Items;

  Validateurl(value:string):boolean {

    if(value==null ||value=="")
    return false;
  
    let valid = true;
    try {
        if (value) {
           let validUrl =  new URL(value);
           if(validUrl.host == "" && validUrl.origin == "null"){
            valid = false;
           }
        }
    } catch {
        valid = false;
    }
    return valid;
}


addItems()
  {
   this.item=
   {
    Id:parseInt("0"),
    Name:this.ingName.nativeElement.value,
    Description:this.ingDescription.nativeElement.value,
    Images:this.ingImages.nativeElement.value
   }
   this.isValidated=true;
   this.message=""

    if(this.item.Name==null || this.item.Name=="")
    {      
      this.message="Item Name is required\n.";    
      this.isValidated=false;
    }
    if(this.item.Description==null || this.item.Description=="")
    {      
      this.message=this.message+"Item Description is required\n.";        
      this.isValidated=false;
    }
    if(this.Validateurl(this.item.Images)==false)
    {
      this.message=this.message+"Url is Not Valid\n.";  
      this.isValidated=false;
    }      
    if(this.isValidated)
    {
      this.itemsservices.addItems(this.item)!.subscribe(e=>
        {
          this.itemsservices.getItem();
          this.router.navigate(['/data'])
       });  
    }else
    {
      alert(this.message);
    
    }
  }
}
