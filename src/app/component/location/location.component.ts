import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LocationService } from "../../location.service";

@Component({
  selector: "app-location",
  templateUrl: "./location.component.html",
  styleUrls: ["./location.component.css"]
})
export class LocationComponent implements OnInit {
  locationForm: FormGroup;
  submitted = false;
  httpData: any;
  latitude: any;
  longitude: any;
  cityName: any;
  errorMsg: string;
  showData: boolean = false;
  spinner: boolean = false;

  constructor(
    private service: LocationService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.locationForm = this.formBuilder.group({
      locationName: ["", Validators.required]
    });
  }
  getLocation() {
    this.spinner = true;
    this.service
      .getLocationDetails(this.locationForm.controls.locationName.value)
      .subscribe(
        data => {
          this.httpData = data;
          if (this.httpData.results.length == 0) {
            alert("please enter valid city name");
            this.locationForm.reset();
            this.spinner = false;
          } else if (this.httpData.results.length > 0) {
            this.spinner = false;
            this.showData = true;
            this.longitude = this.httpData.results[0].geometry.location.lng;
            this.latitude = this.httpData.results[0].geometry.location.lat;
            this.cityName = this.httpData.results[0].address_components[0].short_name;
            this.locationForm.reset();
          }
        },
        err => {
          this.errorMsg = err;
          this.spinner = false;
        }
      );
  }

  get f() {
    return this.locationForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.locationForm.invalid) {
      return;
    }
    if (this.locationForm.valid) {
      this.getLocation();
    }
  }
}
