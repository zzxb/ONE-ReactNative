__d(function(e,t,n,o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var r=t(12),i=babelHelpers.interopRequireDefault(r),a=t(38),l=function(e){function t(){return babelHelpers.classCallCheck(this,t),babelHelpers.possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"render",value:function(){var e=this.props,t=e.position,n=e.scene,o=e.navigation,r=e.activeTintColor,l=e.inactiveTintColor,s=e.style,p=n.route,c=n.index,d=o.state.routes,f=[-1].concat(babelHelpers.toConsumableArray(d.map(function(e,t){return t}))),b=t.interpolate({inputRange:f,outputRange:f.map(function(e){return e===c?1:0})}),y=t.interpolate({inputRange:f,outputRange:f.map(function(e){return e===c?0:1})});return i.default.createElement(a.View,{style:s},i.default.createElement(a.Animated.View,{style:[u.icon,{opacity:b}]},this.props.renderIcon({route:p,index:c,focused:!0,tintColor:r})),i.default.createElement(a.Animated.View,{style:[u.icon,{opacity:y}]},this.props.renderIcon({route:p,index:c,focused:!1,tintColor:l})))}}]),t}(r.PureComponent);o.default=l;var u=a.StyleSheet.create({icon:{position:"absolute",top:0,left:0,right:0,bottom:0,alignItems:"center",justifyContent:"center"}})},460);