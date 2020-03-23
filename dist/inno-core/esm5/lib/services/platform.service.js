import { __awaiter, __decorate, __generator } from "tslib";
import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Device } from '@ionic-native/device/ngx';
import { AppVersion } from '@ionic-native/app-version/ngx';
import * as i0 from "@angular/core";
import * as i1 from "@ionic/angular";
import * as i2 from "@ionic-native/device/ngx/index";
import * as i3 from "@ionic-native/app-version/ngx/index";
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
    PlatformService.ɵprov = i0.ɵɵdefineInjectable({ factory: function PlatformService_Factory() { return new PlatformService(i0.ɵɵinject(i1.Platform), i0.ɵɵinject(i2.Device), i0.ɵɵinject(i3.AppVersion)); }, token: PlatformService, providedIn: "root" });
    PlatformService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], PlatformService);
    return PlatformService;
}());
export { PlatformService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhdGZvcm0uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lubm8tY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9wbGF0Zm9ybS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QyxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDaEQsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLCtCQUErQixDQUFDOzs7OztBQUt6RDtJQUVFLHlCQUNVLFFBQWtCLEVBQ2xCLE1BQWMsRUFDZCxVQUFzQjtRQUZ0QixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxlQUFVLEdBQVYsVUFBVSxDQUFZO0lBR2hDLENBQUM7SUFFRCxtQ0FBUyxHQUFUO1FBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUssdUNBQWEsR0FBbkI7Ozs7OzZCQUNNLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUEzQix3QkFBMkI7d0JBQ3RCLHFCQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsRUFBQTs0QkFBL0Msc0JBQU8sU0FBd0MsRUFBQzs0QkFFbEQsc0JBQU8sS0FBSyxFQUFDOzs7O0tBQ2Q7SUFFSyx3Q0FBYyxHQUFwQjs7O2dCQUNFLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUU7b0JBQy9CLHNCQUFPLEtBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFPLEVBQUM7aUJBQy9CO2dCQUNELHNCQUFPLFNBQVMsRUFBQzs7O0tBQ2xCOztnQkF2Qm1CLFFBQVE7Z0JBQ1YsTUFBTTtnQkFDRixVQUFVOzs7SUFMckIsZUFBZTtRQUgzQixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csZUFBZSxDQTJCM0I7MEJBbkNEO0NBbUNDLEFBM0JELElBMkJDO1NBM0JZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1BsYXRmb3JtfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XHJcbmltcG9ydCB7RGV2aWNlfSBmcm9tICdAaW9uaWMtbmF0aXZlL2RldmljZS9uZ3gnO1xyXG5pbXBvcnQge0FwcFZlcnNpb259IGZyb20gJ0Bpb25pYy1uYXRpdmUvYXBwLXZlcnNpb24vbmd4JztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBsYXRmb3JtU2VydmljZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0sXHJcbiAgICBwcml2YXRlIGRldmljZTogRGV2aWNlLFxyXG4gICAgcHJpdmF0ZSBhcHBWZXJzaW9uOiBBcHBWZXJzaW9uLFxyXG4gICkge1xyXG5cclxuICB9XHJcblxyXG4gIGlzQW5kcm9pZCgpIHtcclxuICAgIHJldHVybiB0aGlzLnBsYXRmb3JtLmlzKCdhbmRyb2lkJyk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBnZXRBcHBWZXJzaW9uKCkge1xyXG4gICAgaWYgKHRoaXMucGxhdGZvcm0uaXMoJ2NvcmRvdmEnKSkge1xyXG4gICAgICByZXR1cm4gYXdhaXQgdGhpcy5hcHBWZXJzaW9uLmdldFZlcnNpb25OdW1iZXIoKTtcclxuICAgIH1cclxuICAgIHJldHVybiAnZGV2JztcclxuICB9XHJcblxyXG4gIGFzeW5jIGdldERldmljZU1vZGVsKCkge1xyXG4gICAgaWYgKHRoaXMucGxhdGZvcm0uaXMoJ2NvcmRvdmEnKSkge1xyXG4gICAgICByZXR1cm4gYCR7dGhpcy5kZXZpY2UubW9kZWx9YDtcclxuICAgIH1cclxuICAgIHJldHVybiAnQnJvd3Nlcic7XHJcbiAgfVxyXG59XHJcbiJdfQ==