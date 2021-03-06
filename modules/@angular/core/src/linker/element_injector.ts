/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {Injector, THROW_IF_NOT_FOUND} from '../di/injector';
import {AppView} from './view';

export class ElementInjector extends Injector {
  constructor(private _view: AppView<any>, private _nodeIndex: number) { super(); }

  get(token: any, notFoundValue: any = THROW_IF_NOT_FOUND): any {
    return this._view.injectorGet(token, this._nodeIndex, notFoundValue);
  }
}
