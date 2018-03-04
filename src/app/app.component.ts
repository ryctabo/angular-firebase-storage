import { Component } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  uploadProgress: Observable<number>;

  uploadURL: Observable<string>;

  constructor(private _storage: AngularFireStorage) { }

  upload(event) {
    // Get input file
    const file = event.target.files[0];

    // Generate a random ID
    const randomId = Math.random().toString(36).substring(2);
    console.log(randomId);

    // Upload image
    const task = this._storage.upload(`images/${randomId}`, file);
    this.uploadProgress = task.percentageChanges();
    this.uploadURL = task.downloadURL();
  }

}
