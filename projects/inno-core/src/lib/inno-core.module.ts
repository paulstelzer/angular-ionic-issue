import {ModuleWithProviders, NgModule} from '@angular/core';
import {Device} from '@ionic-native/device/ngx';
import {AppVersion} from '@ionic-native/app-version/ngx';

@NgModule()
export class InnoCoreModule {
  static forRoot(): ModuleWithProviders<InnoCoreModule> {
    return {
      ngModule: InnoCoreModule,
      providers: [
        Device,
        AppVersion,
      ]
    };
  }
}
