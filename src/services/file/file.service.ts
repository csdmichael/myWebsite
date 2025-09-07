import { Injectable } from '@angular/core';
import { FileOpener } from '@ionic-native/file-opener/ngx';

import { File } from '@ionic-native/file/ngx';
import {
  FileTransfer,
  FileTransferObject
} from '@ionic-native/file-transfer/ngx';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  private fileTransfer: FileTransferObject;

  constructor(
    private fileOpener: FileOpener
    , private transfer: FileTransfer
    , private file: File
    ) { 
    
  }

  public b64toBlob(b64Data, contentType='', sliceSize=512) {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];
  
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);
  
      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
  
      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
  
    const blob = new Blob(byteArrays, {type: contentType});
    return blob;
  }

  getMIMEtype(extn){
    let ext=extn.toLowerCase();
    console.log('Ext', ext);
    let MIMETypes={
      'txt' :'text/plain',
      'docx':'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'doc' : 'application/msword',
      'pdf' : 'application/pdf',
      'jpg' : 'image/jpeg',
      'bmp' : 'image/bmp',
      'png' : 'image/png',
      'xls' : 'application/vnd.ms-excel',
      'xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'rtf' : 'application/rtf',
      'ppt' : 'application/vnd.ms-powerpoint',
      'pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
    }
    console.log('File Ext', MIMETypes[ext]);
    return MIMETypes[ext];
  }

  decodeFileUrl(fileUrl: string): string {
    return decodeURIComponent(fileUrl).replace(/^file:\/\//, '');
  }

  public openFile(fileUrl: string, fileExt: string): Promise<boolean> {
    return new Promise<boolean>(async (resolve, reject) => {
      //let fileExtn=fileUrl.split('.').reverse()[0];
      //let fileMIMEType=this.getMIMEtype(fileExtn);
      let fileMIMEType=this.getMIMEtype(fileExt);
     // let decodedFileUrl = this.decodeFileUrl(fileUrl);
      this.fileOpener.open(fileUrl, fileMIMEType)
                .then(
                  () => {
                    console.log('File is opened');
                    resolve(true);
                  }
                )
                .catch(
                  (e) => {
                    console.log('Error openening file', e);
                    reject('Error openening file. Error: ' + e);
                  }
                );
    });
  }

  public downloadFile(fileUrl: string, fileName: string): Promise<any>{
    return new Promise<any> ((resolve, reject) => {
      this.fileTransfer = this.transfer.create();  
      let decodedUrl = this.decodeFileUrl(fileUrl);
      let url = encodeURI(decodedUrl);
      //let url = fileUrl;
      
      let targetPath = this.file.dataDirectory + fileName;
      //let targetPath = "FV"  + fileId;

      console.log('File Src: ', url);
      console.log('File Dest: ', targetPath);
      this.fileTransfer.download(url, targetPath, true).then((entry) => {
          console.log('download complete: ' + entry.toURL()); 
          resolve(entry.toURL());
      })
      .catch(
        (err) => {
          console.log('Error in fileTransfer download', err);
          reject(err);
        }
      );
    });
    
  }
}
