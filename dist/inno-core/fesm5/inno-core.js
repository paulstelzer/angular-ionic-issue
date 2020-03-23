import { __decorate, __awaiter, __generator } from 'tslib';
import { NgModule, ɵɵdefineInjectable, ɵɵinject, Injectable } from '@angular/core';
import { Device } from '@ionic-native/device/ngx';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { Platform } from '@ionic/angular';
import { Device as Device$1 } from '@ionic-native/device/ngx/index';
import { AppVersion as AppVersion$1 } from '@ionic-native/app-version/ngx/index';

var InnoCoreModule = /** @class */ (function () {
    function InnoCoreModule() {
    }
    InnoCoreModule_1 = InnoCoreModule;
    InnoCoreModule.forRoot = function () {
        return {
            ngModule: InnoCoreModule_1,
            providers: [
                Device,
                AppVersion,
            ]
        };
    };
    var InnoCoreModule_1;
    InnoCoreModule = InnoCoreModule_1 = __decorate([
        NgModule()
    ], InnoCoreModule);
    return InnoCoreModule;
}());

var PlatformService = /** @class */ (function () {
    function PlatformService(platform, device, appVersion) {
        this.platform = platform;
        this.device = device;
        this.appVersion = appVersion;
    }
    PlatformService.prototype.isAndroid = function () {
        return this.platform.is('android');
    };
    PlatformService.prototype.getAppVersion = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.platform.is('cordova')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.appVersion.getVersionNumber()];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [2 /*return*/, 'dev'];
                }
            });
        });
    };
    PlatformService.prototype.getDeviceModel = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.platform.is('cordova')) {
                    return [2 /*return*/, "" + this.device.model];
                }
                return [2 /*return*/, 'Browser'];
            });
        });
    };
    PlatformService.ctorParameters = function () { return [
        { type: Platform },
        { type: Device },
        { type: AppVersion }
    ]; };
    PlatformService.ɵprov = ɵɵdefineInjectable({ factory: function PlatformService_Factory() { return new PlatformService(ɵɵinject(Platform), ɵɵinject(Device$1), ɵɵinject(AppVersion$1)); }, token: PlatformService, providedIn: "root" });
    PlatformService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], PlatformService);
    return PlatformService;
}());

/*
 * Public API Surface of inno-core
 */

/**
 * Generated bundle index. Do not edit.
 */

export { InnoCoreModule, PlatformService };
//# sourceMappingURL=inno-core.js.map
