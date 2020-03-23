import {Injectable} from '@angular/core';
import {Platform} from '@ionic/angular';
import {Device} from '@ionic-native/device/ngx';
import {AppVersion} from '@ionic-native/app-version/ngx';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {

  constructor(
    private platform: Platform,
    private device: Device,
    private appVersion: AppVersion,
  ) {

  }

  isAndroid() {
    return this.platform.is('android');
  }

  async getAppVersion() {
    if (this.platform.is('cordova')) {
      return await this.appVersion.getVersionNumber();
    }
    return 'dev';
  }

  async getDeviceModel() {
    if (this.platform.is('cordova')) {
      return `${this.device.model}`;
    }
    return 'Browser';
  }
}
