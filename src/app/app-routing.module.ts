import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { CreatproductComponent } from './creatproduct/creatproduct.component';
import { ListingProductComponent } from './listing-product/listing-product.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'sing-up',component:SignUpComponent},
  {path:'creatproduct',component:CreatproductComponent},
  {path:'creatproduct/:id',component:CreatproductComponent},
  {path:'listingproduct',component:ListingProductComponent}

  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
