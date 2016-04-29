import { provide, ReflectiveInjector } from 'angular2/core';
import { isBlank, isPresent } from 'angular2/src/facade/lang';
import { EventEmitter } from 'angular2/src/facade/async';
import { StringMapWrapper } from 'angular2/src/facade/collection';
import { BaseException } from 'angular2/src/facade/exceptions';
import { recognize } from './recognize';
import { equalSegments, routeSegmentComponentFactory, RouteSegment, rootNode } from './segments';
import { hasLifecycleHook } from './lifecycle_reflector';
import { DEFAULT_OUTLET_NAME } from './constants';
export class RouterOutletMap {
    constructor() {
        /** @internal */
        this._outlets = {};
    }
    registerOutlet(name, outlet) { this._outlets[name] = outlet; }
}
export class Router {
    constructor(_componentType, _componentResolver, _urlSerializer, _routerOutletMap, _location) {
        this._componentType = _componentType;
        this._componentResolver = _componentResolver;
        this._urlSerializer = _urlSerializer;
        this._routerOutletMap = _routerOutletMap;
        this._location = _location;
        this._changes = new EventEmitter();
        this.navigateByUrl(this._location.path());
    }
    get urlTree() { return this._urlTree; }
    navigate(url) {
        this._urlTree = url;
        return recognize(this._componentResolver, this._componentType, url)
            .then(currTree => {
            new _LoadSegments(currTree, this._prevTree).load(this._routerOutletMap);
            this._prevTree = currTree;
            this._location.go(this._urlSerializer.serialize(this._urlTree));
            this._changes.emit(null);
        });
    }
    serializeUrl(url) { return this._urlSerializer.serialize(url); }
    navigateByUrl(url) {
        return this.navigate(this._urlSerializer.parse(url));
    }
    get changes() { return this._changes; }
}
class _LoadSegments {
    constructor(currTree, prevTree) {
        this.currTree = currTree;
        this.prevTree = prevTree;
    }
    load(parentOutletMap) {
        let prevRoot = isPresent(this.prevTree) ? rootNode(this.prevTree) : null;
        let currRoot = rootNode(this.currTree);
        this.loadChildSegments(currRoot, prevRoot, parentOutletMap);
    }
    loadSegments(currNode, prevNode, parentOutletMap) {
        let curr = currNode.value;
        let prev = isPresent(prevNode) ? prevNode.value : null;
        let outlet = this.getOutlet(parentOutletMap, currNode.value);
        if (equalSegments(curr, prev)) {
            this.loadChildSegments(currNode, prevNode, outlet.outletMap);
        }
        else {
            let outletMap = new RouterOutletMap();
            this.loadNewSegment(outletMap, curr, prev, outlet);
            this.loadChildSegments(currNode, prevNode, outletMap);
        }
    }
    loadNewSegment(outletMap, curr, prev, outlet) {
        let resolved = ReflectiveInjector.resolve([provide(RouterOutletMap, { useValue: outletMap }), provide(RouteSegment, { useValue: curr })]);
        let ref = outlet.load(routeSegmentComponentFactory(curr), resolved, outletMap);
        if (hasLifecycleHook("routerOnActivate", ref.instance)) {
            ref.instance.routerOnActivate(curr, prev, this.currTree, this.prevTree);
        }
    }
    loadChildSegments(currNode, prevNode, outletMap) {
        let prevChildren = isPresent(prevNode) ?
            prevNode.children.reduce((m, c) => {
                m[c.value.outlet] = c;
                return m;
            }, {}) :
            {};
        currNode.children.forEach(c => {
            this.loadSegments(c, prevChildren[c.value.outlet], outletMap);
            StringMapWrapper.delete(prevChildren, c.value.outlet);
        });
        StringMapWrapper.forEach(prevChildren, (v, k) => this.unloadOutlet(outletMap._outlets[k]));
    }
    getOutlet(outletMap, segment) {
        let outlet = outletMap._outlets[segment.outlet];
        if (isBlank(outlet)) {
            if (segment.outlet == DEFAULT_OUTLET_NAME) {
                throw new BaseException(`Cannot find default outlet`);
            }
            else {
                throw new BaseException(`Cannot find the outlet ${segment.outlet}`);
            }
        }
        return outlet;
    }
    unloadOutlet(outlet) {
        StringMapWrapper.forEach(outlet.outletMap._outlets, (v, k) => { this.unloadOutlet(v); });
        outlet.unload();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGlmZmluZ19wbHVnaW5fd3JhcHBlci1vdXRwdXRfcGF0aC1XeHFianp3NS50bXAvYW5ndWxhcjIvc3JjL2FsdF9yb3V0ZXIvcm91dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJPQUFPLEVBQVMsT0FBTyxFQUFFLGtCQUFrQixFQUFvQixNQUFNLGVBQWU7T0FFN0UsRUFBTyxPQUFPLEVBQUUsU0FBUyxFQUFDLE1BQU0sMEJBQTBCO09BQzFELEVBQUMsWUFBWSxFQUFhLE1BQU0sMkJBQTJCO09BQzNELEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxnQ0FBZ0M7T0FDeEQsRUFBQyxhQUFhLEVBQUMsTUFBTSxnQ0FBZ0M7T0FFckQsRUFBQyxTQUFTLEVBQUMsTUFBTSxhQUFhO09BRTlCLEVBQ0wsYUFBYSxFQUNiLDRCQUE0QixFQUM1QixZQUFZLEVBRVosUUFBUSxFQUlULE1BQU0sWUFBWTtPQUNaLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSx1QkFBdUI7T0FDL0MsRUFBQyxtQkFBbUIsRUFBQyxNQUFNLGFBQWE7QUFFL0M7SUFBQTtRQUNFLGdCQUFnQjtRQUNoQixhQUFRLEdBQW1DLEVBQUUsQ0FBQztJQUVoRCxDQUFDO0lBREMsY0FBYyxDQUFDLElBQVksRUFBRSxNQUFvQixJQUFVLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUM1RixDQUFDO0FBRUQ7SUFNRSxZQUFvQixjQUFvQixFQUFVLGtCQUFxQyxFQUNuRSxjQUFtQyxFQUNuQyxnQkFBaUMsRUFBVSxTQUFtQjtRQUY5RCxtQkFBYyxHQUFkLGNBQWMsQ0FBTTtRQUFVLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFDbkUsbUJBQWMsR0FBZCxjQUFjLENBQXFCO1FBQ25DLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFVO1FBSjFFLGFB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TUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7QUFDSCxDQUFDO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09uSW5pdCwgcHJvdmlkZSwgUmVmbGVjdGl2ZUluamVjdG9yLCBDb21wb25lbnRSZXNvbHZlcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JvdXRlck91dGxldH0gZnJvbSAnLi9kaXJlY3RpdmVzL3JvdXRlcl9vdXRsZXQnO1xuaW1wb3J0IHtUeXBlLCBpc0JsYW5rLCBpc1ByZXNlbnR9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5pbXBvcnQge0V2ZW50RW1pdHRlciwgT2JzZXJ2YWJsZX0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9hc3luYyc7XG5pbXBvcnQge1N0cmluZ01hcFdyYXBwZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvY29sbGVjdGlvbic7XG5pbXBvcnQge0Jhc2VFeGNlcHRpb259IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvZXhjZXB0aW9ucyc7XG5pbXBvcnQge1JvdXRlclVybFNlcmlhbGl6ZXJ9IGZyb20gJy4vcm91dGVyX3VybF9zZXJpYWxpemVyJztcbmltcG9ydCB7cmVjb2duaXplfSBmcm9tICcuL3JlY29nbml6ZSc7XG5pbXBvcnQge0xvY2F0aW9ufSBmcm9tICdhbmd1bGFyMi9wbGF0Zm9ybS9jb21tb24nO1xuaW1wb3J0IHtcbiAgZXF1YWxTZWdtZW50cyxcbiAgcm91dGVTZWdtZW50Q29tcG9uZW50RmFjdG9yeSxcbiAgUm91dGVTZWdtZW50LFxuICBUcmVlLFxuICByb290Tm9kZSxcbiAgVHJlZU5vZGUsXG4gIFVybFNlZ21lbnQsXG4gIHNlcmlhbGl6ZVJvdXRlU2VnbWVudFRyZWVcbn0gZnJvbSAnLi9zZWdtZW50cyc7XG5pbXBvcnQge2hhc0xpZmVjeWNsZUhvb2t9IGZyb20gJy4vbGlmZWN5Y2xlX3JlZmxlY3Rvcic7XG5pbXBvcnQge0RFRkFVTFRfT1VUTEVUX05BTUV9IGZyb20gJy4vY29uc3RhbnRzJztcblxuZXhwb3J0IGNsYXNzIFJvdXRlck91dGxldE1hcCB7XG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX291dGxldHM6IHtbbmFtZTogc3RyaW5nXTogUm91dGVyT3V0bGV0fSA9IHt9O1xuICByZWdpc3Rlck91dGxldChuYW1lOiBzdHJpbmcsIG91dGxldDogUm91dGVyT3V0bGV0KTogdm9pZCB7IHRoaXMuX291dGxldHNbbmFtZV0gPSBvdXRsZXQ7IH1cbn1cblxuZXhwb3J0IGNsYXNzIFJvdXRlciB7XG4gIHByaXZhdGUgX3ByZXZUcmVlOiBUcmVlPFJvdXRlU2VnbWVudD47XG4gIHByaXZhdGUgX3VybFRyZWU6IFRyZWU8VXJsU2VnbWVudD47XG5cbiAgcHJpdmF0ZSBfY2hhbmdlczogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NvbXBvbmVudFR5cGU6IFR5cGUsIHByaXZhdGUgX2NvbXBvbmVudFJlc29sdmVyOiBDb21wb25lbnRSZXNvbHZlcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfdXJsU2VyaWFsaXplcjogUm91dGVyVXJsU2VyaWFsaXplcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfcm91dGVyT3V0bGV0TWFwOiBSb3V0ZXJPdXRsZXRNYXAsIHByaXZhdGUgX2xvY2F0aW9uOiBMb2NhdGlvbikge1xuICAgIHRoaXMubmF2aWdhdGVCeVVybCh0aGlzLl9sb2NhdGlvbi5wYXRoKCkpO1xuICB9XG5cbiAgZ2V0IHVybFRyZWUoKTogVHJlZTxVcmxTZWdtZW50PiB7IHJldHVybiB0aGlzLl91cmxUcmVlOyB9XG5cbiAgbmF2aWdhdGUodXJsOiBUcmVlPFVybFNlZ21lbnQ+KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5fdXJsVHJlZSA9IHVybDtcbiAgICByZXR1cm4gcmVjb2duaXplKHRoaXMuX2NvbXBvbmVudFJlc29sdmVyLCB0aGlzLl9jb21wb25lbnRUeXBlLCB1cmwpXG4gICAgICAgIC50aGVuKGN1cnJUcmVlID0+IHtcbiAgICAgICAgICBuZXcgX0xvYWRTZWdtZW50cyhjdXJyVHJlZSwgdGhpcy5fcHJldlRyZWUpLmxvYWQodGhpcy5fcm91dGVyT3V0bGV0TWFwKTtcbiAgICAgICAgICB0aGlzLl9wcmV2VHJlZSA9IGN1cnJUcmVlO1xuICAgICAgICAgIHRoaXMuX2xvY2F0aW9uLmdvKHRoaXMuX3VybFNlcmlhbGl6ZXIuc2VyaWFsaXplKHRoaXMuX3VybFRyZWUpKTtcbiAgICAgICAgICB0aGlzLl9jaGFuZ2VzLmVtaXQobnVsbCk7XG4gICAgICAgIH0pO1xuICB9XG5cbiAgc2VyaWFsaXplVXJsKHVybDogVHJlZTxVcmxTZWdtZW50Pik6IHN0cmluZyB7IHJldHVybiB0aGlzLl91cmxTZXJpYWxpemVyLnNlcmlhbGl6ZSh1cmwpOyB9XG5cbiAgbmF2aWdhdGVCeVVybCh1cmw6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLm5hdmlnYXRlKHRoaXMuX3VybFNlcmlhbGl6ZXIucGFyc2UodXJsKSk7XG4gIH1cblxuICBnZXQgY2hhbmdlcygpOiBPYnNlcnZhYmxlPHZvaWQ+IHsgcmV0dXJuIHRoaXMuX2NoYW5nZXM7IH1cbn1cblxuY2xhc3MgX0xvYWRTZWdtZW50cyB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY3VyclRyZWU6IFRyZWU8Um91dGVTZWdtZW50PiwgcHJpdmF0ZSBwcmV2VHJlZTogVHJlZTxSb3V0ZVNlZ21lbnQ+KSB7fVxuXG4gIGxvYWQocGFyZW50T3V0bGV0TWFwOiBSb3V0ZXJPdXRsZXRNYXApOiB2b2lkIHtcbiAgICBsZXQgcHJldlJvb3QgPSBpc1ByZXNlbnQodGhpcy5wcmV2VHJlZSkgPyByb290Tm9kZSh0aGlzLnByZXZUcmVlKSA6IG51bGw7XG4gICAgbGV0IGN1cnJSb290ID0gcm9vdE5vZGUodGhpcy5jdXJyVHJlZSk7XG4gICAgdGhpcy5sb2FkQ2hpbGRTZWdtZW50cyhjdXJyUm9vdCwgcHJldlJvb3QsIHBhcmVudE91dGxldE1hcCk7XG4gIH1cblxuICBsb2FkU2VnbWVudHMoY3Vyck5vZGU6IFRyZWVOb2RlPFJvdXRlU2VnbWVudD4sIHByZXZOb2RlOiBUcmVlTm9kZTxSb3V0ZVNlZ21lbnQ+LFxuICAgICAgICAgICAgICAgcGFyZW50T3V0bGV0TWFwOiBSb3V0ZXJPdXRsZXRNYXApOiB2b2lkIHtcbiAgICBsZXQgY3VyciA9IGN1cnJOb2RlLnZhbHVlO1xuICAgIGxldCBwcmV2ID0gaXNQcmVzZW50KHByZXZOb2RlKSA/IHByZXZOb2RlLnZhbHVlIDogbnVsbDtcbiAgICBsZXQgb3V0bGV0ID0gdGhpcy5nZXRPdXRsZXQocGFyZW50T3V0bGV0TWFwLCBjdXJyTm9kZS52YWx1ZSk7XG5cbiAgICBpZiAoZXF1YWxTZWdtZW50cyhjdXJyLCBwcmV2KSkge1xuICAgICAgdGhpcy5sb2FkQ2hpbGRTZWdtZW50cyhjdXJyTm9kZSwgcHJldk5vZGUsIG91dGxldC5vdXRsZXRNYXApO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgb3V0bGV0TWFwID0gbmV3IFJvdXRlck91dGxldE1hcCgpO1xuICAgICAgdGhpcy5sb2FkTmV3U2VnbWVudChvdXRsZXRNYXAsIGN1cnIsIHByZXYsIG91dGxldCk7XG4gICAgICB0aGlzLmxvYWRDaGlsZFNlZ21lbnRzKGN1cnJOb2RlLCBwcmV2Tm9kZSwgb3V0bGV0TWFwKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGxvYWROZXdTZWdtZW50KG91dGxldE1hcDogUm91dGVyT3V0bGV0TWFwLCBjdXJyOiBSb3V0ZVNlZ21lbnQsIHByZXY6IFJvdXRlU2VnbWVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICBvdXRsZXQ6IFJvdXRlck91dGxldCk6IHZvaWQge1xuICAgIGxldCByZXNvbHZlZCA9IFJlZmxlY3RpdmVJbmplY3Rvci5yZXNvbHZlKFxuICAgICAgICBbcHJvdmlkZShSb3V0ZXJPdXRsZXRNYXAsIHt1c2VWYWx1ZTogb3V0bGV0TWFwfSksIHByb3ZpZGUoUm91dGVTZWdtZW50LCB7dXNlVmFsdWU6IGN1cnJ9KV0pO1xuICAgIGxldCByZWYgPSBvdXRsZXQubG9hZChyb3V0ZVNlZ21lbnRDb21wb25lbnRGYWN0b3J5KGN1cnIpLCByZXNvbHZlZCwgb3V0bGV0TWFwKTtcbiAgICBpZiAoaGFzTGlmZWN5Y2xlSG9vayhcInJvdXRlck9uQWN0aXZhdGVcIiwgcmVmLmluc3RhbmNlKSkge1xuICAgICAgcmVmLmluc3RhbmNlLnJvdXRlck9uQWN0aXZhdGUoY3VyciwgcHJldiwgdGhpcy5jdXJyVHJlZSwgdGhpcy5wcmV2VHJlZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBsb2FkQ2hpbGRTZWdtZW50cyhjdXJyTm9kZTogVHJlZU5vZGU8Um91dGVTZWdtZW50PiwgcHJldk5vZGU6IFRyZWVOb2RlPFJvdXRlU2VnbWVudD4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGV0TWFwOiBSb3V0ZXJPdXRsZXRNYXApOiB2b2lkIHtcbiAgICBsZXQgcHJldkNoaWxkcmVuID0gaXNQcmVzZW50KHByZXZOb2RlKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2Tm9kZS5jaGlsZHJlbi5yZWR1Y2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG0sIGMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1bYy52YWx1ZS5vdXRsZXRdID0gYztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge30pIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHt9O1xuXG4gICAgY3Vyck5vZGUuY2hpbGRyZW4uZm9yRWFjaChjID0+IHtcbiAgICAgIHRoaXMubG9hZFNlZ21lbnRzKGMsIHByZXZDaGlsZHJlbltjLnZhbHVlLm91dGxldF0sIG91dGxldE1hcCk7XG4gICAgICBTdHJpbmdNYXBXcmFwcGVyLmRlbGV0ZShwcmV2Q2hpbGRyZW4sIGMudmFsdWUub3V0bGV0KTtcbiAgICB9KTtcblxuICAgIFN0cmluZ01hcFdyYXBwZXIuZm9yRWFjaChwcmV2Q2hpbGRyZW4sICh2LCBrKSA9PiB0aGlzLnVubG9hZE91dGxldChvdXRsZXRNYXAuX291dGxldHNba10pKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0T3V0bGV0KG91dGxldE1hcDogUm91dGVyT3V0bGV0TWFwLCBzZWdtZW50OiBSb3V0ZVNlZ21lbnQpOiBSb3V0ZXJPdXRsZXQge1xuICAgIGxldCBvdXRsZXQgPSBvdXRsZXRNYXAuX291dGxldHNbc2VnbWVudC5vdXRsZXRdO1xuICAgIGlmIChpc0JsYW5rKG91dGxldCkpIHtcbiAgICAgIGlmIChzZWdtZW50Lm91dGxldCA9PSBERUZBVUxUX09VVExFVF9OQU1FKSB7XG4gICAgICAgIHRocm93IG5ldyBCYXNlRXhjZXB0aW9uKGBDYW5ub3QgZmluZCBkZWZhdWx0IG91dGxldGApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEJhc2VFeGNlcHRpb24oYENhbm5vdCBmaW5kIHRoZSBvdXRsZXQgJHtzZWdtZW50Lm91dGxldH1gKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG91dGxldDtcbiAgfVxuXG4gIHByaXZhdGUgdW5sb2FkT3V0bGV0KG91dGxldDogUm91dGVyT3V0bGV0KTogdm9pZCB7XG4gICAgU3RyaW5nTWFwV3JhcHBlci5mb3JFYWNoKG91dGxldC5vdXRsZXRNYXAuX291dGxldHMsICh2LCBrKSA9PiB7IHRoaXMudW5sb2FkT3V0bGV0KHYpOyB9KTtcbiAgICBvdXRsZXQudW5sb2FkKCk7XG4gIH1cbn0iXX0=