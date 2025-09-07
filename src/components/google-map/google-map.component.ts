import { Component, ElementRef, Input, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { Coordinates } from 'src/models/coordinates';
import { LocationKPI } from 'src/models/locationKPI';
import { MapStateCoordinates } from 'src/models/mapStateCoordinates';
import { CommonService } from 'src/services/common/common';
import { GmapsService } from 'src/services/gmaps/gmaps.service';

@Component({
    selector: 'google-map',
    templateUrl: './google-map.component.html',
    styleUrls: ['./google-map.component.scss'],
    standalone: false
})
export class GoogleMapComponent implements OnInit, OnDestroy {
  @Input() loationsToAdd: LocationKPI[];
  @Input() addStateBoundaries: boolean = false;
  @Input() stateFilter: string = 'all';
  @Input() mode: string = 'brand';
  @Input() changedAt: Date = null;

  @ViewChild('map', {static: true}) mapElementRef: ElementRef;
  googleMaps: any;
  stateCoords: MapStateCoordinates[];
  center = { lat: 39.8283, lng: -98.5795 };
  map: any;
  mapClickListener: any;
  markerClickListener: any;
  markers: any[] = [];
  mapZoom = 4;
  mapTypeId = 'roadmap';

  constructor(
    public router: Router
    , private gmaps: GmapsService
    , private renderer: Renderer2
    , private actionSheetCtrl: ActionSheetController
    , private common: CommonService
  ) {
    
  }

  ngOnInit() {
    console.log('In Map Page');
    this.stateCoords = this.loadStateCoords();
    this.loadMap();
  }

  ngOnChanges() {
    console.log('changedAt', this.changedAt);
    this.loadMap();
  }


  async loadMap() {
    try {
      let googleMaps: any = await this.gmaps.loadGoogleMaps();
      this.googleMaps = googleMaps;
      const mapEl = this.mapElementRef.nativeElement;
      
      if (this.loationsToAdd != null && this.loationsToAdd.length == 1) {
        this.mapZoom = 20;
        let locVal = { lat: +this.loationsToAdd[0].lat, lng: +this.loationsToAdd[0].lng };
        this.center = locVal;
        this.mapTypeId = 'satellite';
      }
      else if (this.mode == 'label') {
        this.mapZoom = 5.2;
        this.center = this.center;
        this.mapTypeId = 'roadmap';
      }
      else if (this.stateFilter.toLowerCase() != 'all') {
        let statesArr = this.stateFilter.split(',');
        if (statesArr.length == 1) {
          let stateCoordsObj = this.stateCoords.find(c => c.stateName == this.stateFilter);
          if (stateCoordsObj != null) {
            this.center = stateCoordsObj.stateCenter;
            this.mapZoom = stateCoordsObj.zoomLevel;
            this.mapTypeId = 'roadmap';
          } 
        }
      }
      else {
        this.center = this.center;
        this.mapZoom = 4;
        this.mapTypeId = 'roadmap';
      }
      
      const location = new googleMaps.LatLng(this.center.lat, this.center.lng);
      console.log('location', location);
      this.map = new googleMaps.Map(mapEl, {
        center: location,
        zoom: this.mapZoom,
        mapTypeId: this.mapTypeId
      });
      this.renderer.addClass(mapEl, 'visible');
      //this.addMarker(location);
      
      this.loadMarkers();

      if (this.addStateBoundaries) {
        if (this.stateFilter.toLowerCase() != 'all') {
          let statesArr = this.stateFilter.split(',');
          for (let i = 0; i < statesArr.length; i++) {
            let currState = statesArr[i];
            let currStatePolygon = this.stateCoords.find(c => c.stateName == currState).polygonCoordinates;
            this.drawPolygon(currStatePolygon);
          }
        }
      }
      //this.onMapClick();
    } catch(e) {
      console.log(e);
    }
  }

  drawPolygon(polygonCoords: Coordinates[]) {
    
    let googleMaps: any = this.googleMaps;
    // Construct the polygon.
    const polygon = new googleMaps.Polygon({
      paths: polygonCoords,
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35
    });
    polygon.setMap(this.map);
  }

  loadMarkers() {
    this.markers = [];
    if (this.loationsToAdd != null && this.loationsToAdd != undefined) {
      for(let i = 0; i < this.loationsToAdd.length; i++) {
        if (i < 10000) {
          let currLoc = this.loationsToAdd[i];
          let locVal = null;
          if (this.mode == 'label') {
            let currMSC = this.stateCoords.find(s=>s.stateName == currLoc.state);
            if (currMSC != null) {
              locVal = currMSC.stateCenter;
            }
          } else {
            locVal = { lat: +currLoc.lat, lng: +currLoc.lng };
          } 
          //console.log('locVal', locVal);

          if (this.mode == 'brand') {
            this.addMarkerLogos(locVal, 
              currLoc.brand.toLowerCase() == 'chevron', 
              currLoc.brand.toLowerCase() == 'texaco', 
              currLoc.extramile == '1',
              currLoc.name, 
              currLoc.address + ', ' + currLoc.city + ', ' + currLoc.state + ' ' + currLoc.zipcode
            );
          }
          else if (this.mode == 'kpi') {
            this.addMarkerKPIs(locVal, 
              currLoc.color,
              currLoc.isPercent,
              currLoc.kpi,
              currLoc.name, 
              currLoc.address + ', ' + currLoc.city + ', ' + currLoc.state + ' ' + currLoc.zipcode
            );
          }
          else if (this.mode == 'label') {
            if (locVal != null) {
              this.addMarkerLabels(locVal, 
                currLoc.label,
                currLoc.state
              );
            }
          }
        }
      }
      
    }
    else {
      const locVal = { lat: 37.7979, lng: -121.9222 };
      
      console.log('locVal', locVal);
      this.addMarker(locVal);
    }
  }

  onMapClick() {
    this.mapClickListener = this.googleMaps.event.addListener(this.map, "click", (mapsMouseEvent) => {
      console.log(mapsMouseEvent.latLng.toJSON());
      this.addMarker(mapsMouseEvent.latLng);
    });
  }

  addMarker(location) {
    let googleMaps: any = this.googleMaps;
    const icon = {
      url: 'assets/icon/map-pin.png',
      scaledSize: new googleMaps.Size(50, 50), 
    };
    const marker = new googleMaps.Marker({
      position: location,
      map: this.map,
      icon: icon,
      // draggable: true,
      animation: googleMaps.Animation.DROP
    });
    this.markers.push(marker);
    // this.presentActionSheet();
    
    this.markerClickListener = this.googleMaps.event.addListener(marker, 'click', () => {
      console.log('markerclick', marker);
      this.checkAndRemoveMarker(marker);
      console.log('markers: ', this.markers);
    });
    
  }

  addMarkerLogos(location, isChevron: boolean = false, isTexaco: boolean = false, isExtraMile: boolean = false, name: string = '', address: string = '') {
    if (isExtraMile) {
      if (isChevron) {
        this.addMarkerLogo(location, 'chevron-extramile', name, address);
      }
      else if (isTexaco) {
        this.addMarkerLogo(location, 'texaco-extramile', name, address);
      }
    } 
    else if (isChevron) {
      this.addMarkerLogo(location, 'chevron', name, address);
    }
    else if (isTexaco) {
      this.addMarkerLogo(location, 'texaco', name, address);
    }

    
  }

  addMarkerLogo(location, logoName: string, name: string = '', address: string = '') {
    let googleMaps: any = this.googleMaps;
    const icon = {
      url: 'assets/icon/map-' + logoName + '.png',
      scaledSize: new googleMaps.Size(60, 60), 
    };

    const marker = new googleMaps.Marker({
      position: location,
      map: this.map,
      icon: icon,
      // draggable: true,
      //animation: googleMaps.Animation.DROP
    });

    this.markers.push(marker);

    // this.presentActionSheet();
    
    this.markerClickListener = this.googleMaps.event.addListener(marker, 'click', () => {
      console.log('markerclick', marker);
      this.showLocationInfo(marker, name, address);
      console.log('markers: ', this.markers);
    });
    
  }

  addMarkerKPIs(location, color: string, isPercent: boolean, kpi: number, name: string = '', address: string = '') {
    this.addMarkerKPI(location, color, isPercent, kpi, name, address);
  }

  addMarkerKPI(location, imgColor: string = 'question', isPercent: boolean, kpi: number, name: string = '', address: string = '') {
    let googleMaps: any = this.googleMaps;
    const icon = {
      url: 'assets/icon/' + imgColor + 'Small.png',
      scaledSize: new googleMaps.Size(30, 30)
    };

    const marker = new googleMaps.Marker({
      position: location,
      map: this.map,
      icon: icon
      // draggable: true,
      //animation: googleMaps.Animation.DROP
    });

    this.markers.push(marker);

    // this.presentActionSheet();
    
    this.markerClickListener = this.googleMaps.event.addListener(marker, 'click', () => {
      console.log('markerclick', marker);
      this.showLocationInfo(marker, name, address, isPercent, kpi);
      console.log('markers: ', this.markers);
    });
    
  }

  addMarkerLabels(location, label: string, state: string) {
    this.addMarkerLabel(location, label, state);
  }

  addMarkerLabel(location, label: string, state: string) {
    let googleMaps: any = this.googleMaps;

    const icon = {
      url: 'assets/icon/frame.png',
      scaledSize: new googleMaps.Size(80,80)
    };
    
    let  markerLabel = {
      text: label,
      color: 'black',
      fontSize: "16px",
      fontWeight: "bold"
    };

    const marker = new googleMaps.Marker({
      position: location,
      map: this.map,
      icon: icon,
      label: markerLabel
    });

    this.markers.push(marker);

    this.markerClickListener = this.googleMaps.event.addListener(marker, 'click', () => {
      console.log('markerclick', marker);
      this.showLocationInfo(marker, state + ' ( ' + label + ' )', '', false, null);
      console.log('markers: ', this.markers);
    });
  }


  showLocationInfo(marker, name: string = '', address: string = '', isPercent: boolean = false, kpi: number = 0) {
    const index = this.markers.findIndex(x => x.position.lat() == marker.position.lat() && x.position.lng() == marker.position.lng());
    console.log('is marker already: ', index);
    let msg = name;
    if (address != null && address != '') {
      msg += ' ( ' + address + ' )';
    } 
    if (this.mode == 'kpi') {
      if (isPercent) {
        msg += ' - ( ' + kpi.toFixed(2) + '% )';
      }
      else {
        msg += ' - ( ' + kpi.toFixed(2) + ' )';
      }
    }
    this.common.presentToastMiddle(msg);
  }

  checkAndRemoveMarker(marker) {
    const index = this.markers.findIndex(x => x.position.lat() == marker.position.lat() && x.position.lng() == marker.position.lng());
    console.log('is marker already: ', index);
    if(index >= 0) {
      this.markers[index].setMap(null);
      this.markers.splice(index, 1);
      return;
    }
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Added Marker',
      subHeader: '',
      buttons: [
        {
          text: 'Remove',
          role: 'destructive',
          data: {
            action: 'delete',
          },
        },
        {
          text: 'Save',
          data: {
            action: 'share',
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();
  }

  ngOnDestroy() {
    // this.googleMaps.event.removeAllListeners();
    if(this.mapClickListener) this.googleMaps.event.removeListener(this.mapClickListener);
    if(this.markerClickListener) this.googleMaps.event.removeListener(this.markerClickListener);
  }

  loadStateCoords(): MapStateCoordinates[] {
    return [
      {
        stateName: 'CA',
        stateCenter: {
          lat: 36.7783,
          lng: -119.4179
        },
        polygonCoordinates: [
        ],
        zoomLevel: 6.5
      },
      {
        stateName: 'AZ',
        stateCenter: {
          lat: 33.4525,
          lng: -112.0689
        },
        polygonCoordinates: [
        ],
        zoomLevel: 7.5
      },
      {
        stateName: 'FL',
        stateCenter: {
          lat: 28.681389, 
          lng: -82.46
        },
        polygonCoordinates: [
        ],
        zoomLevel: 7.5
      },
      {
        stateName: 'TX',
        stateCenter: {
          lat: 31.391533, 
          lng: -99.17065
        },
        polygonCoordinates: [
        ],
        zoomLevel: 7.5
      }, 
      {
        stateName: 'NV',
        stateCenter: {
          lat: 38.8026, 
          lng: -116.4194
        },
        polygonCoordinates: [
        ],
        zoomLevel: 7.5
      },
      {
        stateName: 'GA',
        stateCenter: {
          lat: 32.1574, 
          lng: -82.9071
        },
        polygonCoordinates: [
        ],
        zoomLevel: 7.5
      },
      {
        stateName: 'UT',
        stateCenter: {
          lat: 40.7607, 
          lng: -111.8939
        },
        polygonCoordinates: [
        ],
        zoomLevel: 7.5
      },
      {
        stateName: 'AL',
        stateCenter: {
          lat: 32.3182, 
          lng: -86.9023
        },
        polygonCoordinates: [
        ],
        zoomLevel: 7.5
      },
      {
        stateName: 'LA',
        stateCenter: {
          lat: 30.5191, 
          lng: -91.5209
        },
        polygonCoordinates: [
        ],
        zoomLevel: 7.5
      },
      {
        stateName: 'OR',
        stateCenter: {
          lat: 42.0167, 
          lng: -93.1635
        },
        polygonCoordinates: [
        ],
        zoomLevel: 7.5
      },
      {
        stateName: 'WA',
        stateCenter: {
          lat: 47.7511, 
          lng: -120.7401
        },
        polygonCoordinates: [
        ],
        zoomLevel: 7.5
      },
      {
        stateName: 'ID',
        stateCenter: {
          lat: 44.0682, 
          lng: -114.7420
        },
        polygonCoordinates: [
        ],
        zoomLevel: 7.5
      },
      {
        stateName: 'MS',
        stateCenter: {
          lat: 33.4577, 
          lng: -88.7942
        },
        polygonCoordinates: [
        ],
        zoomLevel: 7.5
      },
      {
        stateName: 'HI',
        stateCenter: {
          lat: 19.8987, 
          lng: -155.6659
        },
        polygonCoordinates: [
        ],
        zoomLevel: 7.5
      },
      {
        stateName: 'NM',
        stateCenter: {
          lat: 34.9727, 
          lng: -105.0324
        },
        polygonCoordinates: [
        ],
        zoomLevel: 7.5
      },
      {
        stateName: 'AK',
        stateCenter: {
          lat: 63.5888, 
          lng: -154.4931
        },
        polygonCoordinates: [
        ],
        zoomLevel: 7.5
      },
      {
        stateName: 'SC',
        stateCenter: {
          lat: 33.8361, 
          lng: -81.1637
        },
        polygonCoordinates: [
        ],
        zoomLevel: 7.5
      },
      {
        stateName: 'TN',
        stateCenter: {
          lat: 35.5175, 
          lng: -86.5804
        },
        polygonCoordinates: [
        ],
        zoomLevel: 7.5
      },
      {
        stateName: 'WY',
        stateCenter: {
          lat: 43.0760, 
          lng: -107.2903
        },
        polygonCoordinates: [
        ],
        zoomLevel: 7.5
      },
      {
        stateName: 'CO',
        stateCenter: {
          lat: 37.7531, 
          lng: -106.1086
        },
        polygonCoordinates: [
        ],
        zoomLevel: 7.5
      },
      {
        stateName: 'MT',
        stateCenter: {
          lat: 46.8797, 
          lng: -110.3626
        },
        polygonCoordinates: [
        ],
        zoomLevel: 7.5
      },
      {
        stateName: 'NC',
        stateCenter: {
          lat: 35.7596, 
          lng: -79.0193
        },
        polygonCoordinates: [
        ],
        zoomLevel: 7.5
      },
      {
        stateName: 'AR',
        stateCenter: {
          lat: 35.2010, 
          lng: -91.8318
        },
        polygonCoordinates: [
        ],
        zoomLevel: 7.5
      }
    ];
  }
}
