import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import 'firebase/storage';

import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  uploadProgress: Observable<number>;

  uploadURL: Observable<string>;

  constructor(private storage: AngularFireStorage) { }

  upload(event) {
    // Get input file
    const file = event.target.files[0];

    // Generate a random ID
    const randomId = Math.random().toString(36).substring(2);
    console.log(randomId);
    const filepath = `images/${randomId}`;

    const fileRef = this.storage.ref(filepath);

    // Upload Image
    const task = this.storage.upload(filepath, file);

    // Observe percentage changes
    this.uploadProgress = task.percentageChanges();

    // Get notified when the download URL is available
    task.snapshotChanges().pipe(
      finalize(() => this.uploadURL = fileRef.getDownloadURL())
    ).subscribe();
  }

}
