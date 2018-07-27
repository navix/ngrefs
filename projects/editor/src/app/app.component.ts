import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { saveAs } from 'file-saver';
import { DataService } from './data.service';
import { UiFileSelect } from './ui/ui-file/meta';
import { UiFileComponent } from './ui/ui-file/ui-file/ui-file.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  file: UiFileSelect;

  @ViewChild('uiFile') uiFile: UiFileComponent;

  constructor(
    private data: DataService,
    private router: Router,
  ) {
    this.router.navigate(['/versions']);
  }

  open(files: UiFileSelect) {
    this.file = files[0];
    this.router.navigate(['/versions']);
    this.data.data = JSON.parse(this.file.data);
    this.uiFile.reset();
  }

  save() {
    const blob = new Blob([JSON.stringify(this.data.data)], {type: 'text/plain;charset=utf-8'});
    saveAs(blob, 'content.json');
  }
}
