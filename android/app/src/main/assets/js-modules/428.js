__d(function(e,t,i,r){Object.defineProperty(r,"__esModule",{value:!0});var a,n,l=t(12),o=babelHelpers.interopRequireDefault(l),s=t(38),c=t(429),u=babelHelpers.interopRequireDefault(c),d=(n=a=function(e){function i(){var e,t,r,a;babelHelpers.classCallCheck(this,i);for(var n=arguments.length,l=Array(n),o=0;o<n;o++)l[o]=arguments[o];return t=r=babelHelpers.possibleConstructorReturn(this,(e=i.__proto__||Object.getPrototypeOf(i)).call.apply(e,[this].concat(l))),r.state={},r._onTextLayout=function(e){r.state.initialTextWidth||r.setState({initialTextWidth:e.nativeEvent.layout.x+e.nativeEvent.layout.width})},a=t,babelHelpers.possibleConstructorReturn(r,a)}return babelHelpers.inherits(i,e),babelHelpers.createClass(i,[{key:"render",value:function(){var e=this.props,i=e.onPress,r=e.pressColorAndroid,a=e.width,n=e.title,l=e.titleStyle,c=e.tintColor,d=e.truncatedTitle,b=!(!this.state.initialTextWidth||!a)&&this.state.initialTextWidth>a,h=b?d:n,p=t(430);return o.default.createElement(u.default,{accessibilityComponentType:"button",accessibilityLabel:h,accessibilityTraits:"button",testID:"header-back",delayPressIn:0,onPress:i,pressColor:r,style:f.container,borderless:!0},o.default.createElement(s.View,{style:f.container},o.default.createElement(s.Image,{style:[f.icon,n&&f.iconWithTitle,{tintColor:c}],source:p}),"ios"===s.Platform.OS&&n&&o.default.createElement(s.Text,{onLayout:this._onTextLayout,style:[f.title,{color:c},l],numberOfLines:1},h)))}}]),i}(o.default.PureComponent),a.defaultProps={pressColorAndroid:"rgba(0, 0, 0, .32)",tintColor:s.Platform.select({ios:"#037aff"}),truncatedTitle:"Back"},n),f=s.StyleSheet.create({container:{alignItems:"center",flexDirection:"row",backgroundColor:"transparent"},title:{fontSize:17,paddingRight:10},icon:"ios"===s.Platform.OS?{height:20,width:12,marginLeft:10,marginRight:22,marginVertical:12,resizeMode:"contain",transform:[{scaleX:s.I18nManager.isRTL?-1:1}]}:{height:24,width:24,margin:16,resizeMode:"contain",transform:[{scaleX:s.I18nManager.isRTL?-1:1}]},iconWithTitle:"ios"===s.Platform.OS?{marginRight:5}:{}});r.default=d},428);