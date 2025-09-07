////////////////////////////////////////////////////////////////////////////
////////// AUTHOR: MICHAEL YAACOUB /////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
// Reference: https://github.com/ionic-team/ionic-native-google-maps/blob/master/documents/README.md
//////////////////////////////////////////////////////////////////////////////////////////////////////

import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from 'src/services/common/common';
import { MouseEvent } from '@agm/core';
import { Site } from 'src/models/site';

@Component({
    selector: 'map-location',
    templateUrl: './map-location.component.html',
    styleUrls: ['./map-location.component.scss'],
    standalone: false
})
export class MapLocationComponent implements OnInit {
  @Input() CurrentSite: Site
  
  // google maps zoom level
  zoom: number = 10;
  public lat: number;
  public lng: number;
  public markers: marker[];
  

  constructor(
    private common: CommonService
    ) {
      
   }

  ngOnInit() {
    if (this.CurrentSite !== undefined && this.CurrentSite !== null 
          && this.CurrentSite.name !== undefined && this.CurrentSite.name !== '') {
      this.lat = +this.CurrentSite.latitude;
      this.lng = +this.CurrentSite.longitude;
      console.log('Lat', this.lat);
      console.log('Lng', this.lng);
      
      this.loadMap();
    }
  }

  loadMap() {
    console.log('Current Site', this.CurrentSite);

    this.markers = [];
    this.markers.push(
      {
        //lat: this.CurrentSite.latitude,
        //lng: this.CurrentSite.longitude,
        
        lat: this.lat,
        lng: this.lng,
        label: '', //this.CurrentSite.name + ' Site',
        popupLabel: this.CurrentSite.name + ' Site',
        draggable: false
      }
    );

  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
  
  
  mapClicked($event: MouseEvent) {
    /*
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
    */
  }
  
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
  

}
// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
  label?: string;
  popupLabel?: string;
	draggable: boolean;
}