import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/models/user';
import { CommonService } from 'src/services/common/common';

@Component({
    selector: 'copy-clipboard',
    templateUrl: './copy-clipboard.component.html',
    styleUrls: ['./copy-clipboard.component.scss'],
    standalone: false
})
export class CopyClipboardComponent implements OnInit {
@Input() msg: string

  constructor(
    private common: CommonService
    ) {
   }

  ngOnInit() {}

  copyMessage(val: string){
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.common.presentToastTop('Copied to clipboard. Value: ' + val);
  }

}
