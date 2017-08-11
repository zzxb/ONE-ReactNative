__d(function(e,t,l,n){Object.defineProperty(n,"__esModule",{value:!0});var a=t(377),r=babelHelpers.interopRequireDefault(a),u=t(12),i=babelHelpers.interopRequireDefault(u),o=t(38),f=t(654),s=babelHelpers.interopRequireDefault(f),d=t(655),c=babelHelpers.interopRequireDefault(d),y=t(651),p=babelHelpers.interopRequireDefault(y),b=t(473),h=babelHelpers.interopRequireDefault(b),g=t(472),m=babelHelpers.interopRequireDefault(g),I=t(474),x=babelHelpers.interopRequireDefault(I),C=t(475),S=babelHelpers.interopRequireDefault(C),T=t(650),w=babelHelpers.interopRequireDefault(T),O=function(e){var t=e.onPress,l=e.title,n=e.leftIcon,a=e.rightIcon,r=e.leftIconOnPress,u=e.leftIconOnLongPress,f=e.leftIconUnderlayColor,d=e.leftIconContainerStyle,y=e.avatarStyle,b=e.avatarContainerStyle,g=e.avatarOverlayContainerStyle,I=e.underlayColor,x=e.subtitle,C=e.subtitleStyle,S=e.containerStyle,T=e.wrapperStyle,w=e.titleNumberOfLines,O=e.titleStyle,E=e.titleContainerStyle,L=e.hideChevron,P=e.chevronColor,V=e.roundAvatar,R=e.component,F=e.fontFamily,H=e.rightTitle,A=e.rightTitleContainerStyle,D=e.rightTitleStyle,N=e.rightTitleNumberOfLines,j=e.subtitleContainerStyle,B=e.subtitleNumberOfLines,q=e.badge,z=e.label,K=e.onLongPress,M=e.switchButton,U=e.onSwitch,_=e.switchDisabled,W=e.switchOnTintColor,k=e.switchThumbTintColor,G=e.switchTintColor,J=e.switched,Q=e.textInput,X=e.textInputAutoCapitalize,Y=e.textInputAutoCorrect,Z=e.textInputAutoFocus,$=e.textInputEditable,ee=e.textInputKeyboardType,te=e.textInputMaxLength,le=e.textInputMultiline,ne=e.textInputOnChangeText,ae=e.textInputOnFocus,re=e.textInputOnBlur,ue=e.textInputSelectTextOnFocus,ie=e.textInputReturnKeyType,oe=e.textInputValue,fe=e.textInputSecure,se=e.textInputStyle,de=e.textInputContainerStyle,ce=e.onPressRightIcon,ye=babelHelpers.objectWithoutProperties(e,["onPress","title","leftIcon","rightIcon","leftIconOnPress","leftIconOnLongPress","leftIconUnderlayColor","leftIconContainerStyle","avatarStyle","avatarContainerStyle","avatarOverlayContainerStyle","underlayColor","subtitle","subtitleStyle","containerStyle","wrapperStyle","titleNumberOfLines","titleStyle","titleContainerStyle","hideChevron","chevronColor","roundAvatar","component","fontFamily","rightTitle","rightTitleContainerStyle","rightTitleStyle","rightTitleNumberOfLines","subtitleContainerStyle","subtitleNumberOfLines","badge","label","onLongPress","switchButton","onSwitch","switchDisabled","switchOnTintColor","switchThumbTintColor","switchTintColor","switched","textInput","textInputAutoCapitalize","textInputAutoCorrect","textInputAutoFocus","textInputEditable","textInputKeyboardType","textInputMaxLength","textInputMultiline","textInputOnChangeText","textInputOnFocus","textInputOnBlur","textInputSelectTextOnFocus","textInputReturnKeyType","textInputValue","textInputSecure","textInputStyle","textInputContainerStyle","onPressRightIcon"]),pe=e.avatar,be=t||K?o.TouchableHighlight:o.View,he=r||u?o.TouchableHighlight:o.View;return R&&(be=R),"string"==typeof pe&&(pe={uri:pe}),i.default.createElement(be,babelHelpers.extends({onLongPress:K,onPress:t,underlayColor:I,style:[v.container,S&&S]},ye),i.default.createElement(o.View,{style:[v.wrapper,T&&T]},i.default.isValidElement(n)?n:n&&n.name&&i.default.createElement(he,{onLongPress:u,onPress:r,underlayColor:f,style:[v.iconStyle,{flex:H&&""!==H?.3:.15},d&&d]},i.default.createElement(o.View,null,i.default.createElement(p.default,{type:n.type,iconStyle:[v.icon,n.style&&n.style],name:n.name,color:n.color||m.default.grey4,size:n.size||24}))),pe&&i.default.createElement(o.View,{style:v.avatar},i.default.isValidElement(pe)?pe:i.default.createElement(s.default,{avatarStyle:y&&y,containerStyle:b&&b,overlayContainerStyle:g&&g,rounded:V,source:pe})),i.default.createElement(o.View,{style:v.titleSubtitleContainer},i.default.createElement(o.View,{style:E},null===l||"string"!=typeof l&&"number"!=typeof l?i.default.createElement(o.View,null,l):i.default.createElement(h.default,{numberOfLines:w,style:[v.title,!n&&{marginLeft:10},O&&O,F&&{fontFamily:F}]},l)),i.default.createElement(o.View,{style:j},null===x||"string"!=typeof x&&"number"!=typeof x?i.default.createElement(o.View,null,x):i.default.createElement(h.default,{numberOfLines:B,style:[v.subtitle,!n&&{marginLeft:10},C&&C,F&&{fontFamily:F}]},x))),H&&""!==H&&!Q&&i.default.createElement(o.View,{style:[v.rightTitleContainer,A]},i.default.createElement(h.default,{numberOfLines:N,style:[v.rightTitleStyle,D]},H)),Q&&i.default.createElement(o.View,{style:[v.rightTitleContainer,de]},i.default.createElement(o.TextInput,{style:[v.textInputStyle,se],defaultValue:H,value:oe,autoCapitalize:X,autoCorrect:Y,autoFocus:Z,editable:$,keyboardType:ee,maxLength:te,multiline:le,onChangeText:ne,onFocus:ae,onBlur:re,secureTextEntry:fe,selectTextOnFocus:ue,returnKeyType:ie})),q&&!H&&i.default.createElement(c.default,q),!L&&(i.default.isValidElement(a)?a:i.default.createElement(o.TouchableOpacity,{onPress:ce,disabled:!ce,style:v.chevronContainer},i.default.createElement(p.default,{type:a.type,iconStyle:a.style,size:28,name:a.name||"chevron-right",color:a.color||P}))),M&&L&&i.default.createElement(o.View,{style:v.switchContainer},i.default.createElement(o.Switch,{onValueChange:U,disabled:_,onTintColor:W,thumbTintColor:k,tintColor:G,value:J})),z&&z))};O.defaultProps={underlayColor:"white",leftIconUnderlayColor:"white",chevronColor:m.default.grey4,rightIcon:{name:"chevron-right"},hideChevron:!1,roundAvatar:!1,switchButton:!1,textInputEditable:!0,titleNumberOfLines:1,subtitleNumberOfLines:1,rightTitleNumberOfLines:1},O.propTypes={title:r.default.oneOfType([r.default.string,r.default.number,r.default.object]),avatar:r.default.any,icon:r.default.any,onPress:r.default.func,rightIcon:r.default.oneOfType([r.default.element,r.default.object]),underlayColor:r.default.string,subtitle:r.default.oneOfType([r.default.string,r.default.number,r.default.object]),subtitleStyle:r.default.any,subtitleNumberOfLines:r.default.number,containerStyle:r.default.any,wrapperStyle:r.default.any,titleStyle:r.default.any,titleContainerStyle:r.default.any,titleNumberOfLines:r.default.number,hideChevron:r.default.bool,chevronColor:r.default.string,roundAvatar:r.default.bool,badge:r.default.any,switchButton:r.default.bool,onSwitch:r.default.func,switchDisabled:r.default.bool,switchOnTintColor:r.default.string,switchThumbTintColor:r.default.string,switchTintColor:r.default.string,switched:r.default.bool,textInput:r.default.bool,textInputAutoCapitalize:r.default.bool,textInputAutoCorrect:r.default.bool,textInputAutoFocus:r.default.bool,textInputEditable:r.default.bool,textInputKeyboardType:r.default.oneOf(["default","email-address","numeric","phone-pad","ascii-capable","numbers-and-punctuation","url","number-pad","name-phone-pad","decimal-pad","twitter","web-search"]),textInputMaxLength:r.default.number,textInputMultiline:r.default.bool,textInputOnChangeText:r.default.func,textInputOnFocus:r.default.func,textInputOnBlur:r.default.func,textInputSelectTextOnFocus:r.default.bool,textInputReturnKeyType:r.default.string,textInputValue:r.default.string,textInputSecure:r.default.bool,textInputStyle:r.default.any,textInputContainerStyle:r.default.any,component:r.default.any,fontFamily:r.default.string,rightTitle:r.default.string,rightTitleContainerStyle:w.default.style,rightTitleStyle:h.default.propTypes.style,rightTitleNumberOfLines:r.default.number,subtitleContainerStyle:w.default.style,label:r.default.any,onLongPress:r.default.func,leftIcon:r.default.oneOfType([r.default.element,r.default.object]),leftIconOnPress:r.default.func,leftIconOnLongPress:r.default.func,leftIconUnderlayColor:r.default.string,leftIconContainerStyle:w.default.style,avatarStyle:w.default.style,avatarContainerStyle:w.default.style,avatarOverlayContainerStyle:w.default.style,onPressRightIcon:r.default.func};var v=o.StyleSheet.create({avatar:{width:34,height:34},container:{paddingTop:10,paddingRight:10,paddingBottom:10,borderBottomColor:m.default.greyOutline,borderBottomWidth:1,backgroundColor:"transparent"},wrapper:{flexDirection:"row",marginLeft:10},iconStyle:{justifyContent:"center",alignItems:"center"},icon:{marginRight:8},title:{fontSize:(0,S.default)(14),color:m.default.grey1},subtitle:babelHelpers.extends({color:m.default.grey3,fontSize:(0,S.default)(12),marginTop:1},o.Platform.select({ios:{fontWeight:"600"},android:babelHelpers.extends({},x.default.android.bold)})),titleSubtitleContainer:{justifyContent:"center",flex:1},chevronContainer:{flex:.15,alignItems:"flex-end",justifyContent:"center"},switchContainer:{flex:.15,alignItems:"flex-end",justifyContent:"center",marginRight:5},rightTitleContainer:{flex:1,alignItems:"flex-end",justifyContent:"center"},rightTitleStyle:{marginRight:5,color:m.default.grey4},textInputStyle:{height:20,textAlign:"right"}});n.default=O},653);