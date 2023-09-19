import { Component, OnInit } from '@angular/core';
import { KitServiceService } from 'src/app/servieses/kit-service.service';

@Component({
  selector: 'app-kits',
  templateUrl: './kits.component.html',
  styleUrls: ['./kits.component.css'],
})
export class KitsComponent implements OnInit {
  kitimageArray: any = [];
  constructor(private kitServ: KitServiceService) {}
  ngOnInit(): void {
    this.kitImageFun();
  }
  kitImageFun() {
    this.kitServ.kitImage().subscribe((result) => {
      console.log(`kits`, result);
      this.kitimageArray = result;
    });
  }
}
