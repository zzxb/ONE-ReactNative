__d(function(e,r,t,n){Object.defineProperty(n,"__esModule",{value:!0});var o,a,i=r(12),s=babelHelpers.interopRequireDefault(i),l=r(38),u=r(421),p=babelHelpers.interopRequireDefault(u),d=r(434),f=babelHelpers.interopRequireDefault(d),b=r(435),c=babelHelpers.interopRequireDefault(b),v=r(433),h=babelHelpers.interopRequireDefault(v),g=l.NativeModules&&l.NativeModules.NativeAnimatedModule,H=(a=o=function(e){function r(){var e,t,n,o;babelHelpers.classCallCheck(this,r);for(var a=arguments.length,i=Array(a),l=0;l<a;l++)i[l]=arguments[l];return t=n=babelHelpers.possibleConstructorReturn(this,(e=r.__proto__||Object.getPrototypeOf(r)).call.apply(e,[this].concat(i))),n._configureTransition=function(e,r){var t="modal"===n.props.mode,o=babelHelpers.extends({},h.default.getTransitionConfig(n.props.transitionConfig,e,r,t).transitionSpec);return g&&f.default.canUseNativeDriver(t)&&(o.useNativeDriver=!0),o},n._render=function(e){var r=n.props,t=r.screenProps,o=r.headerMode,a=r.mode,i=r.router,l=r.cardStyle,u=r.transitionConfig,d=r.style;return s.default.createElement(p.default,babelHelpers.extends({screenProps:t,headerMode:o,mode:a,router:i,cardStyle:l,transitionConfig:u,style:d},e))},o=t,babelHelpers.possibleConstructorReturn(n,o)}return babelHelpers.inherits(r,e),babelHelpers.createClass(r,[{key:"render",value:function(){return s.default.createElement(c.default,{configureTransition:this._configureTransition,navigation:this.props.navigation,render:this._render,style:this.props.style,onTransitionStart:this.props.onTransitionStart,onTransitionEnd:this.props.onTransitionEnd})}}]),r}(i.Component),o.defaultProps={mode:"card"},a);n.default=H},420);