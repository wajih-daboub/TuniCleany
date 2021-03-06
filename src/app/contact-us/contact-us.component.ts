import { Component, AfterViewInit  } from '@angular/core';

import * as L from 'leaflet';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements AfterViewInit {

  private map: L.Map | undefined;
  constructor() { }
  ngAfterViewInit(): void {
    this.initMap();
  }
   private initMap():void{

   
this.map= L.map('map').setView([36.81897  ,  10.16579], 7);
const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 20,
  attribution: '&copy; <a href="https:// stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https:// openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http:// openstreetmap.org">0penStreetMap</a> contributors'});

tiles.addTo(this.map);
   }
}