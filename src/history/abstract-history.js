/* @flow */
import { AbstractHistory } from './abstract'
import { getLocation } from './html5'
export class AbstractHTML5History extends AbstractHistory {
  index: number
  stack: Array<Route>
  getCurrentLocation (): string {
    if (this.stack.length === 0) {
      return getLocation(this.base)
    } else {
      const current = this.stack[this.stack.length - 1]
      return current ? current.fullPath : '/'
    }
  }
}
