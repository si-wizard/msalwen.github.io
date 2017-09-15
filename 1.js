webpackJsonp([1],{374:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),r=n.n(o),i=n(65),a=(n.n(i),n(390)),s=n.n(a),u=n(107),l=n.n(u),c=n(397),p=(n.n(c),n(395));n.n(p),t.default=function(){return r.a.createElement(l.a,{title:"Sharper Insight LLC | Panorama"},r.a.createElement("div",{className:"modalWrapper"},r.a.createElement(s.a,{transitionName:"modal",transitionAppear:!0,transitionAppearTimeout:500,transitionEnter:!1,transitionLeave:!1},r.a.createElement("section",{className:"panorama modal container"},r.a.createElement("section",{className:"box-cont flex"},r.a.createElement("p",{className:"overview-tease title-font highlight-font"}," Know what your organization already does well that can be further built out to keep your customers and partners loyal"),r.a.createElement("div",{className:"overview-box"},r.a.createElement("p",{className:"box-top bold"},"Know"),r.a.createElement("ul",{className:"box-bottom overview-list"},r.a.createElement("li",null,"The reasons repeat customers return"),r.a.createElement("li",null,"How your current customers discovered your company"),r.a.createElement("li",null,"What motivates your customers to refer you to friends and family"),r.a.createElement("li",null,"What motivates your partners to introduce you to new customers"),r.a.createElement("li",null,"What you are not doing that your customers wish you were")))),r.a.createElement("section",{className:"box-cont box-rev flex"},r.a.createElement("p",{className:"overview-tease title-font highlight-font"},"Learn how you can broaden your customer base and identify new ways to promote your organization"),r.a.createElement("div",{className:"overview-box"},r.a.createElement("p",{className:"box-top bold"},"Learn"),r.a.createElement("ul",{className:"box-bottom overview-list"},r.a.createElement("li",null,"Which service or product options your competitors offer that you can adopt to broaden your appeal to more customers"),r.a.createElement("li",null,"Which companies having complementary offerings to your products and services can be a source of untapped customers"),r.a.createElement("li",null,"Whether misperceptions about your organization or offerings may be limiting your growth among certain demographic groups")))),r.a.createElement("section",{className:"box-cont flex"},r.a.createElement("p",{className:"overview-tease title-font highlight-font"},"Investigate which avenues for expansion or improvement you should explore"),r.a.createElement("div",{className:"overview-box"},r.a.createElement("p",{className:"box-top bold"},"Investigate"),r.a.createElement("ul",{className:"box-bottom overview-list"},r.a.createElement("li",null,"Innovative approaches to improve efficiency"),r.a.createElement("li",null,"Avenues for expanding your offerings to current and new customers"),r.a.createElement("li",null,"Options for new partnerships"),r.a.createElement("li",null,"New locations where people are waiting for your products or services"),r.a.createElement("li",null,"Alternative pricing structures that can optimize your revenue")))),r.a.createElement("p",null,r.a.createElement(i.Link,{to:"/business"},"← ",r.a.createElement("span",{className:"italic smaller-font"},"back to Business Services overview")))))))}},382:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=!("undefined"==typeof window||!window.document||!window.document.createElement),e.exports=t.default},383:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e){var t="transition"+e+"Timeout",n="transition"+e;return function(e){if(e[n]){if(null==e[t])return new Error(t+" wasn't supplied to CSSTransitionGroup: this can cause unreliable animations and won't be supported in a future version of React. See https://fb.me/react-animation-transition-group-timeout for more information.");if("number"!=typeof e[t])return new Error(t+" must be a number (in milliseconds)")}return null}}t.__esModule=!0,t.nameShape=void 0,t.transitionTimeout=r;var i=n(0),a=(o(i),n(174)),s=o(a);t.nameShape=s.default.oneOfType([s.default.string,s.default.shape({enter:s.default.string,leave:s.default.string,active:s.default.string}),s.default.shape({enter:s.default.string,enterActive:s.default.string,leave:s.default.string,leaveActive:s.default.string,appear:s.default.string,appearActive:s.default.string})])},384:function(e,t){e.exports=function(){for(var e=arguments.length,t=[],n=0;n<e;n++)t[n]=arguments[n];if(t=t.filter(function(e){return null!=e}),0!==t.length)return 1===t.length?t[0]:t.reduce(function(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}})}},385:function(e,t,n){"use strict";function o(e,t){e.classList?e.classList.add(t):(0,i.default)(e)||(e.className=e.className+" "+t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var r=n(386),i=function(e){return e&&e.__esModule?e:{default:e}}(r);e.exports=t.default},386:function(e,t,n){"use strict";function o(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+e.className+" ").indexOf(" "+t+" ")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o,e.exports=t.default},387:function(e,t,n){"use strict";e.exports=function(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}},388:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.animationEnd=t.animationDelay=t.animationTiming=t.animationDuration=t.animationName=t.transitionEnd=t.transitionDuration=t.transitionDelay=t.transitionTiming=t.transitionProperty=t.transform=void 0;var o=n(382),r=function(e){return e&&e.__esModule?e:{default:e}}(o),i="transform",a=void 0,s=void 0,u=void 0,l=void 0,c=void 0,p=void 0,f=void 0,d=void 0,m=void 0,h=void 0,v=void 0;if(r.default){var y=function(){for(var e=document.createElement("div").style,t={O:function(e){return"o"+e.toLowerCase()},Moz:function(e){return e.toLowerCase()},Webkit:function(e){return"webkit"+e},ms:function(e){return"MS"+e}},n=Object.keys(t),o=void 0,r=void 0,i="",a=0;a<n.length;a++){var s=n[a];if(s+"TransitionProperty"in e){i="-"+s.toLowerCase(),o=t[s]("TransitionEnd"),r=t[s]("AnimationEnd");break}}return!o&&"transitionProperty"in e&&(o="transitionend"),!r&&"animationName"in e&&(r="animationend"),e=null,{animationEnd:r,transitionEnd:o,prefix:i}}();a=y.prefix,t.transitionEnd=s=y.transitionEnd,t.animationEnd=u=y.animationEnd,t.transform=i=a+"-"+i,t.transitionProperty=l=a+"-transition-property",t.transitionDuration=c=a+"-transition-duration",t.transitionDelay=f=a+"-transition-delay",t.transitionTiming=p=a+"-transition-timing-function",t.animationName=d=a+"-animation-name",t.animationDuration=m=a+"-animation-duration",t.animationTiming=h=a+"-animation-delay",t.animationDelay=v=a+"-animation-timing-function"}t.transform=i,t.transitionProperty=l,t.transitionTiming=p,t.transitionDelay=f,t.transitionDuration=c,t.transitionEnd=s,t.animationName=d,t.animationDuration=m,t.animationTiming=h,t.animationDelay=v,t.animationEnd=u,t.default={transform:i,end:s,property:l,timing:p,delay:f,duration:c}},389:function(e,t,n){"use strict";function o(e){var t=(new Date).getTime(),n=Math.max(0,16-(t-p)),o=setTimeout(e,n);return p=t,o}Object.defineProperty(t,"__esModule",{value:!0});var r=n(382),i=function(e){return e&&e.__esModule?e:{default:e}}(r),a=["","webkit","moz","o","ms"],s="clearTimeout",u=o,l=void 0,c=function(e,t){return e+(e?t[0].toUpperCase()+t.substr(1):t)+"AnimationFrame"};i.default&&a.some(function(e){var t=c(e,"request");if(t in window)return s=c(e,"cancel"),u=function(e){return window[t](e)}});var p=(new Date).getTime();l=function(e){return u(e)},l.cancel=function(e){window[s]&&"function"==typeof window[s]&&window[s](e)},t.default=l,e.exports=t.default},390:function(e,t,n){"use strict";e.exports=n(391)},391:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},u=n(0),l=o(u),c=n(174),p=o(c),f=n(393),d=o(f),m=n(392),h=o(m),v=n(383),y=(v.nameShape.isRequired,p.default.bool,p.default.bool,p.default.bool,(0,v.transitionTimeout)("Appear"),(0,v.transitionTimeout)("Enter"),(0,v.transitionTimeout)("Leave"),{transitionAppear:!1,transitionEnter:!0,transitionLeave:!0}),g=function(e){function t(){var n,o,a;r(this,t);for(var s=arguments.length,u=Array(s),c=0;c<s;c++)u[c]=arguments[c];return n=o=i(this,e.call.apply(e,[this].concat(u))),o._wrapChild=function(e){return l.default.createElement(h.default,{name:o.props.transitionName,appear:o.props.transitionAppear,enter:o.props.transitionEnter,leave:o.props.transitionLeave,appearTimeout:o.props.transitionAppearTimeout,enterTimeout:o.props.transitionEnterTimeout,leaveTimeout:o.props.transitionLeaveTimeout},e)},a=n,i(o,a)}return a(t,e),t.prototype.render=function(){return l.default.createElement(d.default,s({},this.props,{childFactory:this._wrapChild}))},t}(l.default.Component);g.displayName="CSSTransitionGroup",g.propTypes={},g.defaultProps=y,t.default=g,e.exports=t.default},392:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t){return T.length?T.forEach(function(n){return e.addEventListener(n,t,!1)}):setTimeout(t,0),function(){T.length&&T.forEach(function(n){return e.removeEventListener(n,t,!1)})}}t.__esModule=!0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},l=n(385),c=o(l),p=n(387),f=o(p),d=n(389),m=o(d),h=n(388),v=n(0),y=o(v),g=n(174),E=o(g),b=n(49),w=n(383),T=[];h.transitionEnd&&T.push(h.transitionEnd),h.animationEnd&&T.push(h.animationEnd);var _=(E.default.node,w.nameShape.isRequired,E.default.bool,E.default.bool,E.default.bool,E.default.number,E.default.number,E.default.number,function(e){function t(){var n,o,a;r(this,t);for(var s=arguments.length,u=Array(s),l=0;l<s;l++)u[l]=arguments[l];return n=o=i(this,e.call.apply(e,[this].concat(u))),o.componentWillAppear=function(e){o.props.appear?o.transition("appear",e,o.props.appearTimeout):e()},o.componentWillEnter=function(e){o.props.enter?o.transition("enter",e,o.props.enterTimeout):e()},o.componentWillLeave=function(e){o.props.leave?o.transition("leave",e,o.props.leaveTimeout):e()},a=n,i(o,a)}return a(t,e),t.prototype.componentWillMount=function(){this.classNameAndNodeQueue=[],this.transitionTimeouts=[]},t.prototype.componentWillUnmount=function(){this.unmounted=!0,this.timeout&&clearTimeout(this.timeout),this.transitionTimeouts.forEach(function(e){clearTimeout(e)}),this.classNameAndNodeQueue.length=0},t.prototype.transition=function(e,t,n){var o=(0,b.findDOMNode)(this);if(!o)return void(t&&t());var r=this.props.name[e]||this.props.name+"-"+e,i=this.props.name[e+"Active"]||r+"-active",a=null,u=void 0;(0,c.default)(o,r),this.queueClassAndNode(i,o);var l=function(e){e&&e.target!==o||(clearTimeout(a),u&&u(),(0,f.default)(o,r),(0,f.default)(o,i),u&&u(),t&&t())};n?(a=setTimeout(l,n),this.transitionTimeouts.push(a)):h.transitionEnd&&(u=s(o,l))},t.prototype.queueClassAndNode=function(e,t){var n=this;this.classNameAndNodeQueue.push({className:e,node:t}),this.rafHandle||(this.rafHandle=(0,m.default)(function(){return n.flushClassNameAndNodeQueue()}))},t.prototype.flushClassNameAndNodeQueue=function(){this.unmounted||this.classNameAndNodeQueue.forEach(function(e){e.node.scrollTop,(0,c.default)(e.node,e.className)}),this.classNameAndNodeQueue.length=0,this.rafHandle=null},t.prototype.render=function(){var e=u({},this.props);return delete e.name,delete e.appear,delete e.enter,delete e.leave,delete e.appearTimeout,delete e.enterTimeout,delete e.leaveTimeout,delete e.children,y.default.cloneElement(y.default.Children.only(this.props.children),e)},t}(y.default.Component));_.displayName="CSSTransitionGroupChild",_.propTypes={},t.default=_,e.exports=t.default},393:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},u=n(384),l=o(u),c=n(0),p=o(c),f=n(174),d=o(f),m=n(10),h=(o(m),n(394)),v=(d.default.any,d.default.func,d.default.node,{component:"span",childFactory:function(e){return e}}),y=function(e){function t(n,o){r(this,t);var a=i(this,e.call(this,n,o));return a.performAppear=function(e,t){a.currentlyTransitioningKeys[e]=!0,t.componentWillAppear?t.componentWillAppear(a._handleDoneAppearing.bind(a,e,t)):a._handleDoneAppearing(e,t)},a._handleDoneAppearing=function(e,t){t.componentDidAppear&&t.componentDidAppear(),delete a.currentlyTransitioningKeys[e];var n=(0,h.getChildMapping)(a.props.children);n&&n.hasOwnProperty(e)||a.performLeave(e,t)},a.performEnter=function(e,t){a.currentlyTransitioningKeys[e]=!0,t.componentWillEnter?t.componentWillEnter(a._handleDoneEntering.bind(a,e,t)):a._handleDoneEntering(e,t)},a._handleDoneEntering=function(e,t){t.componentDidEnter&&t.componentDidEnter(),delete a.currentlyTransitioningKeys[e];var n=(0,h.getChildMapping)(a.props.children);n&&n.hasOwnProperty(e)||a.performLeave(e,t)},a.performLeave=function(e,t){a.currentlyTransitioningKeys[e]=!0,t.componentWillLeave?t.componentWillLeave(a._handleDoneLeaving.bind(a,e,t)):a._handleDoneLeaving(e,t)},a._handleDoneLeaving=function(e,t){t.componentDidLeave&&t.componentDidLeave(),delete a.currentlyTransitioningKeys[e];var n=(0,h.getChildMapping)(a.props.children);n&&n.hasOwnProperty(e)?a.keysToEnter.push(e):a.setState(function(t){var n=s({},t.children);return delete n[e],{children:n}})},a.childRefs=Object.create(null),a.state={children:(0,h.getChildMapping)(n.children)},a}return a(t,e),t.prototype.componentWillMount=function(){this.currentlyTransitioningKeys={},this.keysToEnter=[],this.keysToLeave=[]},t.prototype.componentDidMount=function(){var e=this.state.children;for(var t in e)e[t]&&this.performAppear(t,this.childRefs[t])},t.prototype.componentWillReceiveProps=function(e){var t=(0,h.getChildMapping)(e.children),n=this.state.children;this.setState({children:(0,h.mergeChildMappings)(n,t)});for(var o in t){var r=n&&n.hasOwnProperty(o);!t[o]||r||this.currentlyTransitioningKeys[o]||this.keysToEnter.push(o)}for(var i in n){var a=t&&t.hasOwnProperty(i);!n[i]||a||this.currentlyTransitioningKeys[i]||this.keysToLeave.push(i)}},t.prototype.componentDidUpdate=function(){var e=this,t=this.keysToEnter;this.keysToEnter=[],t.forEach(function(t){return e.performEnter(t,e.childRefs[t])});var n=this.keysToLeave;this.keysToLeave=[],n.forEach(function(t){return e.performLeave(t,e.childRefs[t])})},t.prototype.render=function(){var e=this,t=[];for(var n in this.state.children)!function(n){var o=e.state.children[n];if(o){var r="string"!=typeof o.ref,i=e.props.childFactory(o),a=function(t){e.childRefs[n]=t};i===o&&r&&(a=(0,l.default)(o.ref,a)),t.push(p.default.cloneElement(i,{key:n,ref:a}))}}(n);var o=s({},this.props);return delete o.transitionLeave,delete o.transitionName,delete o.transitionAppear,delete o.transitionEnter,delete o.childFactory,delete o.transitionLeaveTimeout,delete o.transitionEnterTimeout,delete o.transitionAppearTimeout,delete o.component,p.default.createElement(this.props.component,o,t)},t}(p.default.Component);y.displayName="TransitionGroup",y.propTypes={},y.defaultProps=v,t.default=y,e.exports=t.default},394:function(e,t,n){"use strict";function o(e){if(!e)return e;var t={};return i.Children.map(e,function(e){return e}).forEach(function(e){t[e.key]=e}),t}function r(e,t){function n(n){return t.hasOwnProperty(n)?t[n]:e[n]}e=e||{},t=t||{};var o={},r=[];for(var i in e)t.hasOwnProperty(i)?r.length&&(o[i]=r,r=[]):r.push(i);var a=void 0,s={};for(var u in t){if(o.hasOwnProperty(u))for(a=0;a<o[u].length;a++){var l=o[u][a];s[o[u][a]]=n(l)}s[u]=n(u)}for(a=0;a<r.length;a++)s[r[a]]=n(r[a]);return s}t.__esModule=!0,t.getChildMapping=o,t.mergeChildMappings=r;var i=n(0)},395:function(e,t){},397:function(e,t){}});