import { Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { GmapsService } from 'src/services/gmaps/gmaps.service';
import { ActionSheetController } from '@ionic/angular';

@Component({
    selector: 'app-map',
    templateUrl: './map.page.html',
    styleUrls: ['./map.page.scss'],
    standalone: false
})

export class MapPage  implements OnInit, OnDestroy {
  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    
  }
}
