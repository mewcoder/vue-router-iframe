# vue-router-iframe

> fork form vue-router-3.6.5

iframe 存在共享 history 的问题，为了解决该问题，基于 abstract 模式使用内存管理 iframe 内部的历史记录

## 使用

```sh
npm i vue-router-iframe
```

```js
const router = new Router({
  mode: 'abstract-history'
  ...
});
```

## 原理

新增`abstact-history`模式

> 基于 `abstact` 修改，使其支持 url 路由初始化

```js
// router.js
// ....
if (history instanceof AbstractHTML5History) {
  history.push(history.getCurrentLocation())
}
// ...

// abstract-history
export class AbstractHTML5History extends AbstractHistory {
  index: number
  stack: Array<Route>
  getCurrentLocation(): string {
    if (this.stack.length === 0) {
      return getLocation(this.base)
    } else {
      const current = this.stack[this.stack.length - 1]
      return current ? current.fullPath : '/'
    }
  }
}
```

相关资料:

- https://github.com/vuejs/vue-router/issues/729
- https://www.cnblogs.com/NaN-prototype/p/14308503.html
