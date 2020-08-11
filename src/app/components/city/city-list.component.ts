import { Component, OnInit } from '@angular/core';
// import { CityService } from '../services/city.service';
import { CityService  } from '../../services/city.service';
import { City } from '../../models/city'

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {

  displayedColumns: string[] = ['CityId', 'Name', 'Description', 'IsCapital'];
  data: City[] = [];
  isLoadingResults = true;

  constructor(public service: CityService) { }

  ngOnInit(): void {
    this.getdata();
 }
  getdata() {
    this.service.getData().subscribe((res: any[]) => {
      this.data = res;
      console.log(this.data);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

}
