import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { CityService } from '../services/city.service';
import { CityService  } from '../../services/city.service';

@Component({
  selector: 'app-city-edit',
  templateUrl: './city-edit.component.html',
  styleUrls: ['./city-edit.component.css']
})
export class CityEditComponent implements OnInit {

  data: any;
  CityEditForm: FormGroup;
  submitted = false;
  EventValue: any = "Save";

  constructor(public service: CityService) { }

  ngOnInit(): void {
    this.getdata();
    this.CityEditForm = new FormGroup({
      CityId: new FormControl(null),
      Name: new FormControl("", [Validators.required]),
      Description: new FormControl("", [Validators.required]),
      IsCapital: new FormControl("", [Validators.required]),
    });

  }


  getdata() {
    this.service.getData().subscribe((data: any[]) => {
      this.data = data;
    })
  }
  deleteData(id) {
    this.service.deleteData(id).subscribe((data: any[]) => {
      this.data = data;
      this.getdata();
    })
  }
  Save() {
    this.submitted = true;

    if (this.CityEditForm.invalid) {
      return;
    }
    this.service.postData(this.CityEditForm.value).subscribe((data: any[]) => {
      this.data = data;
      this.resetForm();

    })
  }
  Update() {
    this.submitted = true;

    if (this.CityEditForm.invalid) {
      return;
    }
    this.service.putData(this.CityEditForm.value.empId, this.CityEditForm.value).subscribe((data: any[]) => {
      this.data = data;
      this.resetForm();
    })
  }

  EditData(data) {
    this.CityEditForm.controls["CityId"].setValue(data.CityId);
    this.CityEditForm.controls["Name"].setValue(data.Name);
    this.CityEditForm.controls["Description"].setValue(data.Description);
    this.CityEditForm.controls["IsCapital"].setValue(data.IsCapital);
    this.EventValue = "Update";
  }

  resetForm() {
    this.getdata();
    this.CityEditForm.reset();
    this.EventValue = "Save";
    this.submitted = false;
  }
}
