import { Platform } from '@ionic/angular';
import { Device } from '@ionic-native/device/ngx';
import { AppVersion } from '@ionic-native/app-version/ngx';
import * as ɵngcc0 from '@angular/core';
export declare class PlatformService {
    private platform;
    private device;
    private appVersion;
    constructor(platform: Platform, device: Device, appVersion: AppVersion);
    isAndroid(): boolean;
    getAppVersion(): Promise<string>;
    getDeviceModel(): Promise<string>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PlatformService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhdGZvcm0uc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJwbGF0Zm9ybS5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFHQTs7Ozs7Ozs7O0FBUUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcclxuaW1wb3J0IHsgRGV2aWNlIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9kZXZpY2Uvbmd4JztcclxuaW1wb3J0IHsgQXBwVmVyc2lvbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvYXBwLXZlcnNpb24vbmd4JztcclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgUGxhdGZvcm1TZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgcGxhdGZvcm07XHJcbiAgICBwcml2YXRlIGRldmljZTtcclxuICAgIHByaXZhdGUgYXBwVmVyc2lvbjtcclxuICAgIGNvbnN0cnVjdG9yKHBsYXRmb3JtOiBQbGF0Zm9ybSwgZGV2aWNlOiBEZXZpY2UsIGFwcFZlcnNpb246IEFwcFZlcnNpb24pO1xyXG4gICAgaXNBbmRyb2lkKCk6IGJvb2xlYW47XHJcbiAgICBnZXRBcHBWZXJzaW9uKCk6IFByb21pc2U8c3RyaW5nPjtcclxuICAgIGdldERldmljZU1vZGVsKCk6IFByb21pc2U8c3RyaW5nPjtcclxufVxyXG4iXX0=