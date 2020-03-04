import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-location-view',
  templateUrl: './location-view.component.html',
  styleUrls: ['./location-view.component.css']
})
export class LocationViewComponent implements OnInit {
  @Input() latitude:any;
  @Input() longitude:any;
  @Input() cityName:any;
  @Input() showData:boolean;
  constructor() { }

  ngOnInit() {
  }

}
