__d(function(e,t,n,i){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a,o,r,s=t(12),u=babelHelpers.interopRequireDefault(s),l=t(377),d=babelHelpers.interopRequireDefault(l),p=t(38),c=t(451),h=void 0;switch(p.Platform.OS){case"android":h=t(452).default;break;case"ios":h=t(453).default;break;default:h=t(454).default}var f=(o=a=function(e){function t(e){babelHelpers.classCallCheck(this,t);var n=babelHelpers.possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.call(n),n.state={loaded:[n.props.navigationState.index],layout:babelHelpers.extends({},n.props.initialLayout,{measured:!1}),position:new p.Animated.Value(n.props.navigationState.index)},n}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"componentDidMount",value:function(){this._mounted=!0,this._positionListener=this.state.position.addListener(this._trackPosition)}},{key:"componentWillUnmount",value:function(){this._mounted=!1,this.state.position.removeListener(this._positionListener)}},{key:"render",value:function(){var e=this,t=this.props,n=t.navigationState,i=(t.onRequestChangeTab,t.onChangePosition,t.canJumpToTab,t.lazy,t.initialLayout,t.renderScene,t.renderPager),a=t.renderHeader,o=t.renderFooter,r=babelHelpers.objectWithoutProperties(t,["navigationState","onRequestChangeTab","onChangePosition","canJumpToTab","lazy","initialLayout","renderScene","renderPager","renderHeader","renderFooter"]),s=this._buildSceneRendererProps();return u.default.createElement(p.View,{onLayout:this._handleLayout,loaded:this.state.loaded,style:[b.container,this.props.style]},a&&u.default.createElement(p.View,{collapsable:!1},a(s)),i(babelHelpers.extends({},s,r,{children:n.routes.map(function(t,i){return e._renderScene(babelHelpers.extends({},s,{route:t,index:i,focused:i===n.index}))})})),o&&u.default.createElement(p.View,{collapsable:!1},o(s)))}}]),t}(s.PureComponent),a.propTypes={navigationState:c.NavigationStatePropType.isRequired,onRequestChangeTab:d.default.func.isRequired,onChangePosition:d.default.func,initialLayout:d.default.shape({height:d.default.number.isRequired,width:d.default.number.isRequired}),canJumpToTab:d.default.func,renderPager:d.default.func.isRequired,renderScene:d.default.func.isRequired,renderHeader:d.default.func,renderFooter:d.default.func,lazy:d.default.bool},a.defaultProps={renderPager:function(e){return u.default.createElement(h,e)},initialLayout:{height:0,width:0}},r=function(){var e=this;this._mounted=!1,this._subscriptions={},this._renderScene=function(t){var n=e.props,i=n.renderScene,a=n.lazy,o=t.navigationState,r=e.state.loaded;return a?r.includes(o.routes.indexOf(t.route))?i(t):null:i(t)},this._handleChangePosition=function(t){var n=e.props,i=n.onChangePosition,a=n.navigationState,o=n.lazy;i&&i(t);var r=e.state.loaded;if(o){var s=Math.ceil(t);if(s===a.index&&(s=Math.floor(t)),r.includes(s))return;e.setState({loaded:[].concat(babelHelpers.toConsumableArray(r),[s])})}},this._trackPosition=function(t){e._handleChangePosition(t.value),e._triggerEvent("position",t.value),e._lastPosition=t.value;var n=e.props.onChangePosition;n&&n(t.value)},this._getLastPosition=function(){return"number"==typeof e._lastPosition?e._lastPosition:e.props.navigationState.index},this._handleLayout=function(t){var n=t.nativeEvent.layout,i=n.height,a=n.width;e.state.layout.width===a&&e.state.layout.height===i||e.setState({layout:{measured:!0,height:i,width:a}})},this._buildSceneRendererProps=function(){return{layout:e.state.layout,navigationState:e.props.navigationState,position:e.state.position,jumpToIndex:e._jumpToIndex,getLastPosition:e._getLastPosition,subscribe:e._addSubscription}},this._jumpToIndex=function(t){if(e._mounted){var n=e.props,i=n.canJumpToTab,a=n.navigationState;return i&&!i(a.routes[t])?void e._triggerEvent("reset",a.index):void(t!==a.index&&e.props.onRequestChangeTab(t))}},this._addSubscription=function(t,n){return e._subscriptions[t]||(e._subscriptions[t]=[]),e._subscriptions[t].push(n),{remove:function(){var i=e._subscriptions[t].indexOf(n);i>-1&&e._subscriptions[t].splice(i,1)}}},this._triggerEvent=function(t,n){e._subscriptions[t]&&e._subscriptions[t].forEach(function(e){return e(n)})}},o);i.default=f;var b=p.StyleSheet.create({container:{flex:1,overflow:"hidden"}})},450);