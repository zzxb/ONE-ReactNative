__d(function(e,t,i,n){function a(e,t,i,n){this.x=e,this.y=t,this.width=i,this.height=n}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=t(377),r=babelHelpers.interopRequireDefault(u),o=t(12),h=babelHelpers.interopRequireDefault(o),s=t(38),l=t(650),m=babelHelpers.interopRequireDefault(l),d=4,p=20,c={spring:{friction:7,tension:100},timing:{duration:150,easing:s.Easing.inOut(s.Easing.ease),delay:0}};a.prototype.containsPoint=function(e,t){return e>=this.x&&t>=this.y&&e<=this.x+this.width&&t<=this.y+this.height};var b=function(e){function t(e){babelHelpers.classCallCheck(this,t);var i=babelHelpers.possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return i.state={containerSize:{width:0,height:0},trackSize:{width:0,height:0},thumbSize:{width:0,height:0},allMeasured:!1,value:new s.Animated.Value(e.value)},i}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"componentWillMount",value:function(){this.panResponder=s.PanResponder.create({onStartShouldSetPanResponder:this.handleStartShouldSetPanResponder.bind(this),onMoveShouldSetPanResponder:this.handleMoveShouldSetPanResponder.bind(this),onPanResponderGrant:this.handlePanResponderGrant.bind(this),onPanResponderMove:this.handlePanResponderMove.bind(this),onPanResponderRelease:this.handlePanResponderEnd.bind(this),onPanResponderTerminationRequest:this.handlePanResponderRequestEnd.bind(this),onPanResponderTerminate:this.handlePanResponderEnd.bind(this)})}},{key:"componentWillReceiveProps",value:function(e){var t=e.value;this.props.value!==t&&(this.props.animateTransitions?this.setCurrentValueAnimated(t):this.setCurrentValue(t))}},{key:"setCurrentValue",value:function(e){this.state.value.setValue(e)}},{key:"setCurrentValueAnimated",value:function(e){var t=this.props.animationType,i=babelHelpers.extends({},c[t],this.props.animationConfig,{toValue:e});s.Animated[t](this.state.value,i).start()}},{key:"handleMoveShouldSetPanResponder",value:function(){return!1}},{key:"handlePanResponderGrant",value:function(){this._previousLeft=this.getThumbLeft(this.getCurrentValue()),this.fireChangeEvent("onSlidingStart")}},{key:"handlePanResponderMove",value:function(e,t){this.props.disabled||(this.setCurrentValue(this.getValue(t)),this.fireChangeEvent("onValueChange"))}},{key:"handlePanResponderRequestEnd",value:function(){return!1}},{key:"handlePanResponderEnd",value:function(e,t){this.props.disabled||(this.setCurrentValue(this.getValue(t)),this.fireChangeEvent("onSlidingComplete"))}},{key:"thumbHitTest",value:function(e){var t=e.nativeEvent,i=this.getThumbTouchRect();return i.containsPoint(t.locationX,t.locationY)}},{key:"handleStartShouldSetPanResponder",value:function(e){return this.thumbHitTest(e)}},{key:"fireChangeEvent",value:function(e){this.props[e]&&this.props[e](this.getCurrentValue())}},{key:"getTouchOverflowSize",value:function(){var e=this.state,t=this.props,i={};return e.allMeasured===!0&&(i.width=Math.max(0,t.thumbTouchSize.width-e.thumbSize.width),i.height=Math.max(0,t.thumbTouchSize.height-e.containerSize.height)),i}},{key:"getTouchOverflowStyle",value:function(){var e=this.getTouchOverflowSize(),t=e.width,i=e.height,n={};if(void 0!==t&&void 0!==i){var a=-i/2;n.marginTop=a,n.marginBottom=a;var u=-t/2;n.marginLeft=u,n.marginRight=u}return this.props.debugTouchArea===!0&&(n.backgroundColor="orange",n.opacity=.5),n}},{key:"handleMeasure",value:function(e,t){var i=t.nativeEvent.layout,n=i.width,a=i.height,u={width:n,height:a},r="_"+e,o=this[r];o&&n===o.width&&a===o.height||(this[r]=u,this._containerSize&&this._trackSize&&this._thumbSize&&this.setState({containerSize:this._containerSize,trackSize:this._trackSize,thumbSize:this._thumbSize,allMeasured:!0}))}},{key:"measureContainer",value:function(e){this.handleMeasure("containerSize",e)}},{key:"measureTrack",value:function(e){this.handleMeasure("trackSize",e)}},{key:"measureThumb",value:function(e){this.handleMeasure("thumbSize",e)}},{key:"getValue",value:function(e){var t=this.state.containerSize.width-this.state.thumbSize.width,i=this._previousLeft+e.dx,n=i/t;return this.props.step?Math.max(this.props.minimumValue,Math.min(this.props.maximumValue,this.props.minimumValue+Math.round(n*(this.props.maximumValue-this.props.minimumValue)/this.props.step)*this.props.step)):Math.max(this.props.minimumValue,Math.min(this.props.maximumValue,n*(this.props.maximumValue-this.props.minimumValue)+this.props.minimumValue))}},{key:"getCurrentValue",value:function(){return this.state.value.__getValue()}},{key:"getRatio",value:function(e){return(e-this.props.minimumValue)/(this.props.maximumValue-this.props.minimumValue)}},{key:"getThumbLeft",value:function(e){var t=this.getRatio(e);return t*(this.state.containerSize.width-this.state.thumbSize.width)}},{key:"getThumbTouchRect",value:function(){var e=this.state,t=this.props,i=this.getTouchOverflowSize();return new a(i.width/2+this.getThumbLeft(this.getCurrentValue())+(e.thumbSize.width-t.thumbTouchSize.width)/2,i.height/2+(e.containerSize.height-t.thumbTouchSize.height)/2,t.thumbTouchSize.width,t.thumbTouchSize.height)}},{key:"renderDebugThumbTouchRect",value:function(e){var t=this.getThumbTouchRect(),i={left:e,top:t.y,width:t.width,height:t.height};return h.default.createElement(s.Animated.View,{style:i,pointerEvents:"none"})}},{key:"render",value:function(){var e=this.props,t=e.minimumValue,i=e.maximumValue,n=e.minimumTrackTintColor,a=e.maximumTrackTintColor,u=e.thumbTintColor,r=e.containerStyle,o=e.style,l=e.trackStyle,m=e.thumbStyle,d=e.debugTouchArea,p=babelHelpers.objectWithoutProperties(e,["minimumValue","maximumValue","minimumTrackTintColor","maximumTrackTintColor","thumbTintColor","containerStyle","style","trackStyle","thumbStyle","debugTouchArea"]),c=this.state,b=c.value,g=c.containerSize,v=c.trackSize,S=c.thumbSize,y=c.allMeasured,T=r||f,k=b.interpolate({inputRange:[t,i],outputRange:[0,g.width-S.width]}),C={};y||(C.opacity=0);var V=babelHelpers.extends({position:"absolute",width:s.Animated.add(k,S.width/2),marginTop:-v.height,backgroundColor:n},C),R=this.getTouchOverflowStyle();return h.default.createElement(s.View,babelHelpers.extends({},p,{style:[T.container,o],onLayout:this.measureContainer.bind(this)}),h.default.createElement(s.View,{style:[{backgroundColor:a},T.track,l],onLayout:this.measureTrack.bind(this)}),h.default.createElement(s.Animated.View,{style:[T.track,l,V]}),h.default.createElement(s.Animated.View,{onLayout:this.measureThumb.bind(this),style:[{backgroundColor:u},T.thumb,m,babelHelpers.extends({transform:[{translateX:k},{translateY:-(v.height+S.height)/2}]},C)]}),h.default.createElement(s.View,babelHelpers.extends({style:[f.touchArea,R]},this.panResponder.panHandlers),d===!0&&this.renderDebugThumbTouchRect(k)))}}]),t}(o.Component);n.default=b,b.propTypes={value:r.default.number,disabled:r.default.bool,minimumValue:r.default.number,maximumValue:r.default.number,step:r.default.number,minimumTrackTintColor:r.default.string,maximumTrackTintColor:r.default.string,thumbTintColor:r.default.string,thumbTouchSize:r.default.shape({width:r.default.number,height:r.default.number}),onValueChange:r.default.func,onSlidingStart:r.default.func,onSlidingComplete:r.default.func,style:m.default.style,trackStyle:m.default.style,thumbStyle:m.default.style,debugTouchArea:r.default.bool,animateTransitions:r.default.bool,animationType:r.default.oneOf(["spring","timing"]),animationConfig:r.default.object,containerStyle:m.default.style},b.defaultProps={value:0,minimumValue:0,maximumValue:1,step:0,minimumTrackTintColor:"#3f3f3f",maximumTrackTintColor:"#b3b3b3",thumbTintColor:"red",thumbTouchSize:{width:40,height:40},debugTouchArea:!1,animationType:"timing"};var f=s.StyleSheet.create({container:{height:40,justifyContent:"center"},track:{height:d,borderRadius:d/2},thumb:{position:"absolute",width:p,height:p,borderRadius:p/2,top:22},touchArea:{position:"absolute",backgroundColor:"transparent",top:0,left:0,right:0,bottom:0},debugThumbTouchArea:{position:"absolute",backgroundColor:"green",opacity:.5}})},659);