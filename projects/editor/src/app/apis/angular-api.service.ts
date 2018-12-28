import { Injectable } from '@angular/core';
import { DocGen } from '@ngx-kit/docgen/meta';
import { angularApi } from './apis';
import TsFile = DocGen.TsFile;

@Injectable({
  providedIn: 'root',
})
export class AngularApiService {
  private angularApi = angularApi;

  getDeclar(fileName: string, declarName: string): DocGen.InterfaceDeclar | undefined {
    const file: TsFile = angularApi.files.find(f => f.fileName === fileName) as TsFile;
    if (file) {
      const declar = file.declars
        .filter(this.isNamedDeclar)
        .find(d => d.name && d.name === declarName);
      if (declar) {
        return declar;
      } else {
        alert(`Angular API: declar "${declarName}" not found in file "${fileName}"`);
      }
    } else {
      alert(`Angular API: file "${fileName}" not found!`);
    }
  }

  private isNamedDeclar(declar: DocGen.Declar): declar is DocGen.InterfaceDeclar {
    return !!declar['name'];
  }
}
