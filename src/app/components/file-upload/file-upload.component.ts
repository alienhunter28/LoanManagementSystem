import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {
  selectedFile: File | null = null;

  constructor(private http: HttpClient) {}

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  onUpload(): void {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);

      // Add any additional data if needed
      // formData.append('key', 'value');

      this.http.post('http://localhost:8080/upload', formData)
        .subscribe(
          response => {
            console.log('File uploaded successfully', response);
          },
          error => {
            console.error('Error uploading file', error);
          }
        );
    } else {
      console.warn('No file selected');
    }
  }

}
