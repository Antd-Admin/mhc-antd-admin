webpackHotUpdate(1,{

/***/ 669:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(670);
__webpack_require__(872);

/* eslint-disable no-unused-vars */
var React = __webpack_require__(0);
/* eslint-enable no-unused-vars */
var ReactDOM = __webpack_require__(10);
var ReactRouter = __webpack_require__(154);
var history = __webpack_require__(880);
var data = __webpack_require__(892);
var createElement = __webpack_require__(1654);
var routes = __webpack_require__(1655)(data);

var _window$location = window.location,
    pathname = _window$location.pathname,
    search = _window$location.search,
    hash = _window$location.hash;

var location = '' + pathname + search + hash;
var basename = '/mhc-antd-admin/';
ReactRouter.match({ routes: routes, location: location, basename: basename }, function () {
  var router = React.createElement(ReactRouter.Router, {
    history: ReactRouter.useRouterHistory(history.createHistory)({ basename: basename }),
    routes: routes,
    createElement: createElement
  });
  ReactDOM.render(router, document.getElementById('react-content'));
});

/***/ })

})