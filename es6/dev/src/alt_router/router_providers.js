import { ROUTER_PROVIDERS_COMMON } from './router_providers_common';
import { Provider } from 'angular2/core';
import { BrowserPlatformLocation } from 'angular2/src/platform/browser/location/browser_platform_location';
import { PlatformLocation } from 'angular2/platform/common';
import { CONST_EXPR } from 'angular2/src/facade/lang';
export const ROUTER_PROVIDERS = CONST_EXPR([
    ROUTER_PROVIDERS_COMMON,
    CONST_EXPR(new Provider(PlatformLocation, { useClass: BrowserPlatformLocation })),
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyX3Byb3ZpZGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtV3hxYmp6dzUudG1wL2FuZ3VsYXIyL3NyYy9hbHRfcm91dGVyL3JvdXRlcl9wcm92aWRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ik9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLDJCQUEyQjtPQUMxRCxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWU7T0FDL0IsRUFDTCx1QkFBdUIsRUFDeEIsTUFBTSxrRUFBa0U7T0FDbEUsRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDBCQUEwQjtPQUNsRCxFQUFDLFVBQVUsRUFBQyxNQUFNLDBCQUEwQjtBQUVuRCxPQUFPLE1BQU0sZ0JBQWdCLEdBQVUsVUFBVSxDQUFDO0lBQ2hELHVCQUF1QjtJQUN2QixVQUFVLENBQUMsSUFBSSxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsRUFBQyxRQUFRLEVBQUUsdUJBQXVCLEVBQUMsQ0FBQyxDQUFDO0NBQ2hGLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Uk9VVEVSX1BST1ZJREVSU19DT01NT059IGZyb20gJy4vcm91dGVyX3Byb3ZpZGVyc19jb21tb24nO1xuaW1wb3J0IHtQcm92aWRlcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1xuICBCcm93c2VyUGxhdGZvcm1Mb2NhdGlvblxufSBmcm9tICdhbmd1bGFyMi9zcmMvcGxhdGZvcm0vYnJvd3Nlci9sb2NhdGlvbi9icm93c2VyX3BsYXRmb3JtX2xvY2F0aW9uJztcbmltcG9ydCB7UGxhdGZvcm1Mb2NhdGlvbn0gZnJvbSAnYW5ndWxhcjIvcGxhdGZvcm0vY29tbW9uJztcbmltcG9ydCB7Q09OU1RfRVhQUn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcblxuZXhwb3J0IGNvbnN0IFJPVVRFUl9QUk9WSURFUlM6IGFueVtdID0gQ09OU1RfRVhQUihbXG4gIFJPVVRFUl9QUk9WSURFUlNfQ09NTU9OLFxuICBDT05TVF9FWFBSKG5ldyBQcm92aWRlcihQbGF0Zm9ybUxvY2F0aW9uLCB7dXNlQ2xhc3M6IEJyb3dzZXJQbGF0Zm9ybUxvY2F0aW9ufSkpLFxuXSk7Il19