/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {NgModuleFactory, NgModuleRef} from '@angular/core';
import {ComponentFixture} from '@angular/core/testing';
import {serverPlatform} from '@angular/platform-server';

import {MainModule} from '../src/module';
import {MainModuleNgFactory} from '../src/module.ngfactory';

let mainModuleRef: NgModuleRef<MainModule> = null;
beforeEach((done) => {
  serverPlatform().bootstrapModuleFactory(MainModuleNgFactory).then((moduleRef) => {
    mainModuleRef = moduleRef;
    done();
  });
});

export function createModule(): NgModuleRef<MainModule> {
  return mainModuleRef;
}

export function createComponent<C>(comp: {new (...args: any[]): C}): ComponentFixture<C> {
  const moduleRef = createModule();
  const compRef =
      moduleRef.componentFactoryResolver.resolveComponentFactory(comp).create(moduleRef.injector);
  return new ComponentFixture(compRef, null, null);
}
