import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { versionsDigest } from '../content/versionsDigest';

@Component({
  selector: 'main-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  versions = versionsDigest;

  versionUrl?: string;

  constructor(
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(({versionUrl}) => {
        this.versionUrl = versionUrl;
      });
  }
}
