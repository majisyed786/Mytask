import { Routes } from "@angular/router";
import { DataComponent } from "./data/data.component";
import { HomeComponent } from "./home/home.component";
import { AdditemsComponent } from "./additems/additems.component";
export const appRoutes: Routes = [
{path:'',component:HomeComponent},
{path:'home',component:HomeComponent},
{path:'data',component:DataComponent},
{path:'additems',component:AdditemsComponent}
]