"use strict";(function(){var t,e,n,o=function(t,e){return function(){return t.apply(e,arguments)}},r=function(t,e){function n(){this.constructor=t}for(var o in e)i.call(e,o)&&(t[o]=e[o]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},i={}.hasOwnProperty;e=require("react"),n=require("lodash"),module.exports=t=function(t){function i(){return this.handleClick=o(this.handleClick,this),i.__super__.constructor.apply(this,arguments)}return r(i,t),i.propExamples={onClick:{type:"oneOfType",like:["http://some.url/"]},newTab:{type:"bool",like:[!0,!1]}},i.defaultProps={newTab:!1},i.prototype.handleClick=function(t){var e;return"function"==typeof(e=this.props).onClick?e.onClick(t,this.props.callbackValue):void 0},i.prototype.render=function(){return n.isString(this.props.onClick)?e.createElement("a",{style:{textDecoration:"none"},href:this.props.onClick,target:this.props.newTab?"_blank":void 0},this.props.children):e.createElement("a",{style:{textDecoration:"none"},onClick:this.handleClick},this.props.children)},i}(e.Component)}).call(void 0);