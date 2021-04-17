import { Component } from '@angular/core';
import { Photo, PhotoService } from '../services/photo.service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public photos: Photo[] = [];
  constructor(public photoService: PhotoService) {
    this.photos = photoService.getPhotos();
   }
  
  async ngOnInit() {
    await this.photoService.loadSaved();
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

}


