import { __awaiter, __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Device } from '@ionic-native/device/ngx';
import { AppVersion } from '@ionic-native/app-version/ngx';
import * as i0 from "@angular/core";
import * as i1 from "@ionic/angular";
import * as i2 from "@ionic-native/device/ngx/index";
import * as i3 from "@ionic-native/app-version/ngx/index";
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
PlatformService.ɵprov = i0.ɵɵdefineInjectable({ factory: function PlatformService_Factory() { return new PlatformService(i0.ɵɵinject(i1.Platform), i0.ɵɵinject(i2.Device), i0.ɵɵinject(i3.AppVersion)); }, token: PlatformService, providedIn: "root" });
PlatformService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], PlatformService);
export { PlatformService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhdGZvcm0uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lubm8tY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9wbGF0Zm9ybS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QyxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDaEQsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLCtCQUErQixDQUFDOzs7OztBQUt6RCxJQUFhLGVBQWUsR0FBNUIsTUFBYSxlQUFlO0lBRTFCLFlBQ1UsUUFBa0IsRUFDbEIsTUFBYyxFQUNkLFVBQXNCO1FBRnRCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGVBQVUsR0FBVixVQUFVLENBQVk7SUFHaEMsQ0FBQztJQUVELFNBQVM7UUFDUCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFSyxhQUFhOztZQUNqQixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFO2dCQUMvQixPQUFPLE1BQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2FBQ2pEO1lBQ0QsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDO0tBQUE7SUFFSyxjQUFjOztZQUNsQixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFO2dCQUMvQixPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUMvQjtZQUNELE9BQU8sU0FBUyxDQUFDO1FBQ25CLENBQUM7S0FBQTtDQUNGLENBQUE7O1lBeEJxQixRQUFRO1lBQ1YsTUFBTTtZQUNGLFVBQVU7OztBQUxyQixlQUFlO0lBSDNCLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7R0FDVyxlQUFlLENBMkIzQjtTQTNCWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtQbGF0Zm9ybX0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xyXG5pbXBvcnQge0RldmljZX0gZnJvbSAnQGlvbmljLW5hdGl2ZS9kZXZpY2Uvbmd4JztcclxuaW1wb3J0IHtBcHBWZXJzaW9ufSBmcm9tICdAaW9uaWMtbmF0aXZlL2FwcC12ZXJzaW9uL25neCc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQbGF0Zm9ybVNlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtLFxyXG4gICAgcHJpdmF0ZSBkZXZpY2U6IERldmljZSxcclxuICAgIHByaXZhdGUgYXBwVmVyc2lvbjogQXBwVmVyc2lvbixcclxuICApIHtcclxuXHJcbiAgfVxyXG5cclxuICBpc0FuZHJvaWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wbGF0Zm9ybS5pcygnYW5kcm9pZCcpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZ2V0QXBwVmVyc2lvbigpIHtcclxuICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzKCdjb3Jkb3ZhJykpIHtcclxuICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuYXBwVmVyc2lvbi5nZXRWZXJzaW9uTnVtYmVyKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gJ2Rldic7XHJcbiAgfVxyXG5cclxuICBhc3luYyBnZXREZXZpY2VNb2RlbCgpIHtcclxuICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzKCdjb3Jkb3ZhJykpIHtcclxuICAgICAgcmV0dXJuIGAke3RoaXMuZGV2aWNlLm1vZGVsfWA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gJ0Jyb3dzZXInO1xyXG4gIH1cclxufVxyXG4iXX0=