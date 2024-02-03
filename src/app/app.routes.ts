import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProducsComponent } from './producs/producs.component';
import { UsersComponent } from './users/users.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './producs/product/product.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'products',component:ProducsComponent},
    {path:'products/:id',component:ProductComponent},
    {path:'users',component:UsersComponent},
    {path:'category',component:CategoryComponent},
    //{path:'**',component:ErrorPageCompoenet}
];
