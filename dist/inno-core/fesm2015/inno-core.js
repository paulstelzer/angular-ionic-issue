import { __decorate, __awaiter } from 'tslib';
import { NgModule, ɵɵdefineInjectable, ɵɵinject, Injectable } from '@angular/core';
import { Device } from '@ionic-native/device/ngx';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { Platform } from '@ionic/angular';
import { Device as Device$1 } from '@ionic-native/device/ngx/index';
import { AppVersion as AppVersion$1 } from '@ionic-native/app-version/ngx/index';

var InnoCoreModule_1;
let InnoCoreModule = InnoCoreModule_1 = class InnoCoreModule {
    static forRoot() {
        return {
            ngModule: InnoCoreModule_1,
            providers: [
                Device,
                AppVersion,
            ]
        };
    }
};
InnoCoreModule = InnoCoreModule_1 = __decorate([
    NgModule()
], InnoCoreModule);

let PlatformService = class PlatformService {
    constructor(platform, device, appVersion) {
        this.platform = platform;
        this.device = device;
        this.appVersion = appVersion;
    }
    isAndroid() {
        return this.platform.is('android');
    }
    getAppVersion() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.platform.is('cordova')) {
                return yield this.appVersion.getVersionNumber();
            }
            return 'dev';
        });
    }
    getDeviceModel() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.platform.is('cordova')) {
                return `${this.device.model}`;
            }
            return 'Browser';
        });
    }
};
PlatformService.ctorParameters = () => [
    { type: Platform },
    { type: Device },
    { type: AppVersion }
];
PlatformService.ɵprov = ɵɵdefineInjectable({ factory: function PlatformService_Factory() { return new PlatformService(ɵɵinject(Platform), ɵɵinject(Device$1), ɵɵinject(AppVersion$1)); }, token: PlatformService, providedIn: "root" });
PlatformService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], PlatformService);

/*
 * Public API Surface of inno-core
 */

/**
 * Generated bundle index. Do not edit.
 */

export { InnoCoreModule, PlatformService };
//# sourceMappingURL=inno-core.js.map
