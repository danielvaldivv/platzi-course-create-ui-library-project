"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _templateObject,_defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty")),_objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties")),_taggedTemplateLiteral2=_interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral")),_react=require("react"),_css=require("@emotion/css"),_propTypes=_interopRequireDefault(require("prop-types")),_excluded=["component","fontWeight","lineHeight","fontSize","className"];function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(Object(b),!0).forEach(function(c){(0,_defineProperty2["default"])(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}var TextStyles=function(a,b,c){return(0,_css.css)(_templateObject||(_templateObject=(0,_taggedTemplateLiteral2["default"])(["\n  font-weight: ",";\n  font-size: ",";\n  line-height: ",";\n"])),a||700,b||"20px",c||"25px")},Text=/*#__PURE__*/(0,_react.forwardRef)(function(a,b){var c=a.component,d=a.fontWeight,e=a.lineHeight,f=a.fontSize,g=a.className,h=(0,_objectWithoutProperties2["default"])(a,_excluded),i=/*#__PURE__*/(0,_react.createElement)(c,_objectSpread(_objectSpread({},h),{},{ref:b,className:(0,_css.cx)(TextStyles(d,f,e),g)}));return i});Text.propTypes={className:_propTypes["default"].string,component:_propTypes["default"].oneOf(["h1","h2","h3","h4","h5","h6","span","textarea","p"])},Text.defaultProps={component:"p"};var _default=Text;exports["default"]=_default;