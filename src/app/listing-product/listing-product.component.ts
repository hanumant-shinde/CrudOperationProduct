import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-listing-product',
  templateUrl: './listing-product.component.html',
  styleUrls: ['./listing-product.component.css']
})
export class ListingProductComponent {
  [x: string]: any;
  product = [];
  productData:any;

  constructor(private ps: ProductService,private router: Router) {
    this.ps.getAllProduct().subscribe((data: any) => {
      this.product = data;
    });
  }
  deleteProduct(id:any){
    this.ps.deleteProduct(id).subscribe((data:any)=>{
      console.log(data)
      this.ps.getAllProduct().subscribe((data: any) => {
        this.product = data;
        this.router.navigate(['/listingproduct']);
      });

     
    })
    

    }
    editproduct(id:any){
     
        this.router.navigate(['/creatproduct/'+id]);

   

  }
}
