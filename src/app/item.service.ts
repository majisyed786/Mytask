import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import Items from './Interfaces/item';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ItemService {
  constructor(private client:HttpClient ) { }
  getItem(){ 
    try {
      return this.client.get<Items[]>(environment.BaseURL+"Items/GetItems")
    } catch (error) {
      alert(error);
      return null;
    }
   
  }
  addItems(item:Items){
    try {
      return this.client.post<any>(environment.BaseURL+"Items/AddItems",item)
    } catch (error ) {
      alert(error);
      return null;
    }
  }

  deleteItems(Id:any){
    try {
      return this.client.delete<any>(environment.BaseURL+"Items/DeleteItems?id="+Id)
    } catch (error ) {
      alert(error);
      return null;
    }
  }
}
