import { CalculateServiceService } from './calculate-service.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-calculate-sale',
  templateUrl: './calculate-sale.component.html',
  styleUrls: ['./calculate-sale.component.css']
})
export class CalculateSaleComponent implements OnInit {
  model = {
    cus_id: "",
    name: "",
    address: "",
    credit: "",
    pic: "",
    tel: "",

    rm_id: "",
    h: 0,
    rm_name: "",
    rm_type: "",
    rm_price: 0,

    w: 0,
    l: 0,
    cost: 0,
    profit: 0,
    saleprice: 0,

    newmodel_no: 0,
  }

  data: any;
  data2: any;
  cus_name: any;
  rm_id: any;

  constructor(private HttpClient: HttpClient,
    private CalculateServiceService: CalculateServiceService) { }

  ngOnInit(): void {
    this.HttpClient.get('http://localhost/api_aqpweb/customer.php')
      .subscribe(result => {
        this.data = result;
        // console.log(result);

      })
    this.HttpClient.get('http://localhost/api_aqpweb/rawmaterial.php')
      .subscribe(result => {
        this.data2 = result;
        // console.log(result);

      })
  }

  //     })
  // }
  Search() {
    if (this.cus_name == "") {
      this.ngOnInit();
    } else {
      this.data = this.data.filter((res: {
        cus_name: any; firstname: { toLowerCase: () => string; };
      }) => {
        return res.cus_name.toLowerCase().match(this.cus_name.toLowerCase());
      })
    }
  }
  Search2() {
    if (this.rm_id == "") {
      this.ngOnInit();
    } else {
      this.data2 = this.data2.filter((res: {
        rm_id: any; firstname: { toLowerCase: () => string; };
      }) => {
        return res.rm_id.toLowerCase().match(this.rm_id.toLowerCase());
      })
    }
  }
  cal() {
    this.model.cost = ((((30 + (this.model.w * 2) + (this, this.model.l * 2)) % 25.4)
      * ((this.model.h + this.model.w) % 25.4)) % 144)
      * this.model.rm_price
    this.model.saleprice = this.model.cost + ((this.model.cost * this.model.profit) % 100);
  }
  cls() {
    this.model = {
      cus_id: "",
      name: "",
      address: "",
      credit: "",
      pic: "",
      tel: "",

      rm_id: "",
      h: 0,
      rm_name: "",
      rm_type: "",
      rm_price: 0,

      w: 0,
      l: 0,
      cost: 0,
      profit: 0,
      saleprice: 0,

      newmodel_no: 0,
    }
  }
  save() {
    this.CalculateServiceService.postnewitem(this.model)
      .subscribe(result => {
        console.log(result);

        // location.reload();
      });
  }
  temp(item: any) {
    this.model.cus_id = item.cus_id;
    this.model.name = item.cus_name;
    this.model.address = item.cus_address;
    this.model.credit = item.cus_credit;
    this.model.pic = item.cus_picName;
    this.model.tel = item.cus_tel;
  }
  temp2(item: any) {
    this.model.rm_id = item.rm_id;
    this.model.rm_name = item.rm_name;
    this.model.rm_type = item.rm_type;
    this.model.rm_price = item.rm_price;

  }






  onSubmit() {

  }
  print(){
    
  }

}
