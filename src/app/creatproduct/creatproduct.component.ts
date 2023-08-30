import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { ProductService } from '../services/product.service'
import { FormBuilder, FormGroup } from '@angular/forms'; // Import FormBuilder and FormGroup
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-creatproduct',
  templateUrl: './creatproduct.component.html',
  styleUrls: ['./creatproduct.component.css']
})
export class CreatproductComponent implements OnInit {

  productName = "";
  productPrice = "";
  productQuantity = "";
  creatproductform: FormGroup; // Change 'any' to 'FormGroup'
  productNameError = "";
  productPriceError = "";
  ProductQuantityError = "";
  productData = {}
  productId: any;
  constructor(public http: HttpService, private fb: FormBuilder, private ps: ProductService, private router: Router, private ActivatedRoute: ActivatedRoute) { // Inject FormBuilder
  }

  ngOnInit() {
    this.createForm();
    this.ActivatedRoute.params.subscribe(params => {
      this.productId = params['id'];
      console.log(this.productId)
      this.editproduct(this.productId) // 'id' corresponds to the parameter name in your route
      // Now you can use the productId to fetch or process data
    });
  }

  editproduct(id: any) {
    this.ps.getProductbyid(id).subscribe((data: any) => {

      this.productName = data.productName;
      this.productQuantity = data.productQuantity;
      this.productPrice = data.productPrice
      let test ="";
      console.log(test);


    })


  }
  createForm() {
    this.creatproductform = this.fb.group({
      'productName': "",
      'productPrice': "", // Change 'Product Price' to 'productPrice'
      'productQuantity': "" // Change 'Product Quantity' to 'productQuantity'
    });
  }

  SaveProduct() {
    console.log('Saving product...');
    console.log(this.creatproductform.value);
    let body = this.creatproductform.value;
    this.productName = (body.productName[0]).trim();
    this.productPrice = (body.productPrice[0]).trim();
    this.productQuantity = (body.productQuantity[0]).trim();
    this.productNameError = "";
    this.productPriceError = "";
    this.ProductQuantityError = "";
    if (this.productName == "") {
      this.productNameError = "Please Enter product Name";
    }
    if (this.productPrice == "") {
      this.productPriceError = "Please Enter product Price";
    }
    if (this.productQuantity == "") {
      this.ProductQuantityError = "Please Enter product Quantity";
    }





    // this.ps.addProduct(body)
    // You can add code here to save the product using your HTTP service
    if (this.productName !== "" && this.productPrice !== "" && this.productQuantity !== "") {
      if (this.productId) {
        this.ps.updateProduct(this.productId, body).subscribe((data: any) => {
          console.log(data)
          this.router.navigate(['/listingproduct'])
        })

      } else {
        this.ps.addProduct(body).subscribe((data: any) => {
          console.log(data);
          this.router.navigate(['/listingproduct']);
          //this.product = data;
        });
      }


    }

  }
}
