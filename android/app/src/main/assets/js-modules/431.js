__d(function(n,t,e,i){function o(n){var t=n.position,e=n.scene,i=e.index;return{opacity:t.interpolate({inputRange:[i-1,i-.5,i,i+.5,i+1],outputRange:[0,0,1,0,0]})}}function a(n){var t=n.position,e=n.scene,i=e.index;return{opacity:t.interpolate({inputRange:[i-1,i,i+1],outputRange:[0,1,0]}),transform:[{translateX:t.interpolate({inputRange:[i-1,i+1],outputRange:u.I18nManager.isRTL?[-200,200]:[200,-200]})}]}}function r(n){var t=n.position,e=n.scene,i=e.index;return{opacity:t.interpolate({inputRange:[i-1,i,i+1],outputRange:[0,1,0]})}}Object.defineProperty(i,"__esModule",{value:!0});var u=t(38);i.default={forLeft:o,forCenter:a,forRight:r}},431);