import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'main-v6-templates-ngtemplateoutlet-demo',
  templateUrl: './v6-templates-ngtemplateoutlet-demo.component.html',
  styleUrls: ['./v6-templates-ngtemplateoutlet-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class V6TemplatesNgtemplateoutletDemoComponent implements OnInit {
  myContext = {$implicit: 'World', localSk: 'Svet'};

  constructor() { }

  ngOnInit() {
  }

}
