import { PlatformService } from '@inno/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'hybrid-library-core';
  version = '';
  device = '';

  constructor(
    private platformService: PlatformService
  ) {

  }

  async ngOnInit() {
      this.version = await this.platformService.getAppVersion();
      this.device = await this.platformService.getDeviceModel();
  }
}
