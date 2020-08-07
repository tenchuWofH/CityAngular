import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { CityService } from '../services/city.service';
import { CityService  } from '../../services/city.service';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {

  constructor(private CityService: CityService) { }
  data: any;
  EmpForm: FormGroup;
  submitted = false;
  EventValue: any = "Save";

  ngOnInit(): void {
    this.getdata();

    this.EmpForm = new FormGroup({
      empId: new FormControl(null),
      empName: new FormControl("", [Validators.required]),
      empContact: new FormControl("", [Validators.required]),
      empEmail: new FormControl("", [Validators.required]),
      empAddress: new FormControl("", [Validators.required]),
    })
  }
  getdata() {
    this.CityService.getData().subscribe((data: any[]) => {
      this.data = data;
    })
  }
  deleteData(id) {
    this.CityService.deleteData(id).subscribe((data: any[]) => {
      this.data = data;
      this.getdata();
    })
  }
  Save() {
    this.submitted = true;

    if (this.EmpForm.invalid) {
      return;
    }
    this.CityService.postData(this.EmpForm.value).subscribe((data: any[]) => {
      this.data = data;
      this.resetFrom();

    })
  }
  Update() {
    this.submitted = true;

    if (this.EmpForm.invalid) {
      return;
    }
    this.CityService.putData(this.EmpForm.value.empId, this.EmpForm.value).subscribe((data: any[]) => {
      this.data = data;
      this.resetFrom();
    })
  }

  EditData(Data) {
    this.EmpForm.controls["empId"].setValue(Data.empId);
    this.EmpForm.controls["empName"].setValue(Data.empName);
    this.EmpForm.controls["empContact"].setValue(Data.empContact);
    this.EmpForm.controls["empEmail"].setValue(Data.empEmail);
    this.EmpForm.controls["empAddress"].setValue(Data.empAddress);
    this.EventValue = "Update";
  }

  resetFrom() {
    this.getdata();
    this.EmpForm.reset();
    this.EventValue = "Save";
    this.submitted = false;
  }

}
