webpackJsonp([1],{390:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),r=n.n(o),i=n(65),a=(n.n(i),n(406)),s=n.n(a),l=n(107),u=n.n(l),c=n(416),p=(n.n(c),n(412));n.n(p),t.default=function(){return r.a.createElement(u.a,{title:"Sharper Insight LLC | Panorama"},r.a.createElement("div",{className:"modalWrapper"},r.a.createElement(s.a,{transitionName:"modal",transitionAppear:!0,transitionAppearTimeout:750,transitionEnter:!1,transitionLeave:!1},r.a.createElement("section",{className:"panorama modal container"},r.a.createElement("section",{className:"box-cont flex"},r.a.createElement("p",{className:"overview-tease title-font highlight-font"}," Know what your organization already does well that can be further built out to keep your customers and partners loyal"),r.a.createElement("div",{className:"overview-box"},r.a.createElement("p",{className:"box-top bold"},"Know"),r.a.createElement("ul",{className:"box-bottom overview-list"},r.a.createElement("li",null,"The reasons repeat customers return"),r.a.createElement("li",null,"How your current customers discovered your company"),r.a.createElement("li",null,"What motivates your customers to refer you to friends and family"),r.a.createElement("li",null,"What motivates your partners to introduce you to new customers"),r.a.createElement("li",null,"What you are not doing that your customers wish you were")))),r.a.createElement("section",{className:"box-cont box-rev flex"},r.a.createElement("p",{className:"overview-tease title-font highlight-font"},"Learn how you can broaden your customer base and identify new ways to promote your organization"),r.a.createElement("div",{className:"overview-box"},r.a.createElement("p",{className:"box-top bold"},"Learn"),r.a.createElement("ul",{className:"box-bottom overview-list"},r.a.createElement("li",null,"Which service or product options your competitors offer that you can adopt to broaden your appeal to more customers"),r.a.createElement("li",null,"Which companies having complementary offerings to your products and services can be a source of untapped customers"),r.a.createElement("li",null,"Whether misperceptions about your organization or offerings may be limiting your growth among certain demographic groups")))),r.a.createElement("section",{className:"box-cont flex"},r.a.createElement("p",{className:"overview-tease title-font highlight-font"},"Investigate which avenues for expansion or improvement you should explore"),r.a.createElement("div",{className:"overview-box"},r.a.createElement("p",{className:"box-top bold"},"Investigate"),r.a.createElement("ul",{className:"box-bottom overview-list"},r.a.createElement("li",null,"Innovative approaches to improve efficiency"),r.a.createElement("li",null,"Avenues for expanding your offerings to current and new customers"),r.a.createElement("li",null,"Options for new partnerships"),r.a.createElement("li",null,"New locations where people are waiting for your products or services"),r.a.createElement("li",null,"Alternative pricing structures that can optimize your revenue")))),r.a.createElement("p",null,r.a.createElement(i.Link,{to:"/business"},"← ",r.a.createElement("span",{className:"italic smaller-font"},"back to Business Services overview")))))))}},398:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=!("undefined"==typeof window||!window.document||!window.document.createElement),e.exports=t.default},399:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e){var t="transition"+e+"Timeout",n="transition"+e;return function(e){if(e[n]){if(null==e[t])return new Error(t+" wasn't supplied to CSSTransitionGroup: this can cause unreliable animations and won't be supported in a future version of React. See https://fb.me/react-animation-transition-group-timeout for more information.");if("number"!=typeof e[t])return new Error(t+" must be a number (in milliseconds)")}return null}}t.__esModule=!0,t.nameShape=void 0,t.transitionTimeout=r;var i=n(0),a=(o(i),n(174)),s=o(a);t.nameShape=s.default.oneOfType([s.default.string,s.default.shape({enter:s.default.string,leave:s.default.string,active:s.default.string}),s.default.shape({enter:s.default.string,enterActive:s.default.string,leave:s.default.string,leaveActive:s.default.string,appear:s.default.string,appearActive:s.default.string})])},400:function(e,t){e.exports=function(){for(var e=arguments.length,t=[],n=0;n<e;n++)t[n]=arguments[n];if(t=t.filter(function(e){return null!=e}),0!==t.length)return 1===t.length?t[0]:t.reduce(function(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}})}},401:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){e.classList?e.classList.add(t):(0,a.default)(e)||(e.className=e.className+" "+t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var i=n(402),a=o(i);e.exports=t.default},402:function(e,t,n){"use strict";function o(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+e.className+" ").indexOf(" "+t+" ")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o,e.exports=t.default},403:function(e,t,n){"use strict";e.exports=function(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}},404:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(){for(var e=document.createElement("div").style,t={O:function(e){return"o"+e.toLowerCase()},Moz:function(e){return e.toLowerCase()},Webkit:function(e){return"webkit"+e},ms:function(e){return"MS"+e}},n=Object.keys(t),o=void 0,r=void 0,i="",a=0;a<n.length;a++){var s=n[a];if(s+"TransitionProperty"in e){i="-"+s.toLowerCase(),o=t[s]("TransitionEnd"),r=t[s]("AnimationEnd");break}}return!o&&"transitionProperty"in e&&(o="transitionend"),!r&&"animationName"in e&&(r="animationend"),e=null,{animationEnd:r,transitionEnd:o,prefix:i}}Object.defineProperty(t,"__esModule",{value:!0}),t.animationEnd=t.animationDelay=t.animationTiming=t.animationDuration=t.animationName=t.transitionEnd=t.transitionDuration=t.transitionDelay=t.transitionTiming=t.transitionProperty=t.transform=void 0;var i=n(398),a=o(i),s="transform",l=void 0,u=void 0,c=void 0,p=void 0,d=void 0,f=void 0,m=void 0,h=void 0,v=void 0,y=void 0,b=void 0;if(a.default){var g=r();l=g.prefix,t.transitionEnd=u=g.transitionEnd,t.animationEnd=c=g.animationEnd,t.transform=s=l+"-"+s,t.transitionProperty=p=l+"-transition-property",t.transitionDuration=d=l+"-transition-duration",t.transitionDelay=m=l+"-transition-delay",t.transitionTiming=f=l+"-transition-timing-function",t.animationName=h=l+"-animation-name",t.animationDuration=v=l+"-animation-duration",t.animationTiming=y=l+"-animation-delay",t.animationDelay=b=l+"-animation-timing-function"}t.transform=s,t.transitionProperty=p,t.transitionTiming=f,t.transitionDelay=m,t.transitionDuration=d,t.transitionEnd=u,t.animationName=h,t.animationDuration=v,t.animationTiming=y,t.animationDelay=b,t.animationEnd=c,t.default={transform:s,end:u,property:p,timing:f,delay:m,duration:d}},405:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=(new Date).getTime(),n=Math.max(0,16-(t-d)),o=setTimeout(e,n);return d=t,o}Object.defineProperty(t,"__esModule",{value:!0});var i=n(398),a=o(i),s=["","webkit","moz","o","ms"],l="clearTimeout",u=r,c=void 0,p=function(e,t){return e+(e?t[0].toUpperCase()+t.substr(1):t)+"AnimationFrame"};a.default&&s.some(function(e){var t=p(e,"request");if(t in window)return l=p(e,"cancel"),u=function(e){return window[t](e)}});var d=(new Date).getTime();c=function(e){return u(e)},c.cancel=function(e){window[l]&&"function"==typeof window[l]&&window[l](e)},t.default=c,e.exports=t.default},406:function(e,t,n){"use strict";e.exports=n(407)},407:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},l=n(0),u=o(l),c=n(174),p=o(c),d=n(409),f=o(d),m=n(408),h=o(m),v=n(399),y=(v.nameShape.isRequired,p.default.bool,p.default.bool,p.default.bool,(0,v.transitionTimeout)("Appear"),(0,v.transitionTimeout)("Enter"),(0,v.transitionTimeout)("Leave"),{transitionAppear:!1,transitionEnter:!0,transitionLeave:!0}),b=function(e){function t(){var n,o,a;r(this,t);for(var s=arguments.length,l=Array(s),c=0;c<s;c++)l[c]=arguments[c];return n=o=i(this,e.call.apply(e,[this].concat(l))),o._wrapChild=function(e){return u.default.createElement(h.default,{name:o.props.transitionName,appear:o.props.transitionAppear,enter:o.props.transitionEnter,leave:o.props.transitionLeave,appearTimeout:o.props.transitionAppearTimeout,enterTimeout:o.props.transitionEnterTimeout,leaveTimeout:o.props.transitionLeaveTimeout},e)},a=n,i(o,a)}return a(t,e),t.prototype.render=function(){return u.default.createElement(f.default,s({},this.props,{childFactory:this._wrapChild}))},t}(u.default.Component);b.displayName="CSSTransitionGroup",b.propTypes={},b.defaultProps=y,t.default=b,e.exports=t.default},408:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t){return T.length?T.forEach(function(n){return e.addEventListener(n,t,!1)}):setTimeout(t,0),function(){T.length&&T.forEach(function(n){return e.removeEventListener(n,t,!1)})}}t.__esModule=!0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},u=n(401),c=o(u),p=n(403),d=o(p),f=n(405),m=o(f),h=n(404),v=n(0),y=o(v),b=n(174),g=o(b),w=n(49),E=n(399),T=[];h.transitionEnd&&T.push(h.transitionEnd),h.animationEnd&&T.push(h.animationEnd);var x=(g.default.node,E.nameShape.isRequired,g.default.bool,g.default.bool,g.default.bool,g.default.number,g.default.number,g.default.number,function(e){function t(){var n,o,a;r(this,t);for(var s=arguments.length,l=Array(s),u=0;u<s;u++)l[u]=arguments[u];return n=o=i(this,e.call.apply(e,[this].concat(l))),o.componentWillAppear=function(e){o.props.appear?o.transition("appear",e,o.props.appearTimeout):e()},o.componentWillEnter=function(e){o.props.enter?o.transition("enter",e,o.props.enterTimeout):e()},o.componentWillLeave=function(e){o.props.leave?o.transition("leave",e,o.props.leaveTimeout):e()},a=n,i(o,a)}return a(t,e),t.prototype.componentWillMount=function(){this.classNameAndNodeQueue=[],this.transitionTimeouts=[]},t.prototype.componentWillUnmount=function(){this.unmounted=!0,this.timeout&&clearTimeout(this.timeout),this.transitionTimeouts.forEach(function(e){clearTimeout(e)}),this.classNameAndNodeQueue.length=0},t.prototype.transition=function(e,t,n){var o=(0,w.findDOMNode)(this);if(!o)return void(t&&t());var r=this.props.name[e]||this.props.name+"-"+e,i=this.props.name[e+"Active"]||r+"-active",a=null,l=void 0;(0,c.default)(o,r),this.queueClassAndNode(i,o);var u=function(e){e&&e.target!==o||(clearTimeout(a),l&&l(),(0,d.default)(o,r),(0,d.default)(o,i),l&&l(),t&&t())};n?(a=setTimeout(u,n),this.transitionTimeouts.push(a)):h.transitionEnd&&(l=s(o,u))},t.prototype.queueClassAndNode=function(e,t){var n=this;this.classNameAndNodeQueue.push({className:e,node:t}),this.rafHandle||(this.rafHandle=(0,m.default)(function(){return n.flushClassNameAndNodeQueue()}))},t.prototype.flushClassNameAndNodeQueue=function(){this.unmounted||this.classNameAndNodeQueue.forEach(function(e){e.node.scrollTop,(0,c.default)(e.node,e.className)}),this.classNameAndNodeQueue.length=0,this.rafHandle=null},t.prototype.render=function(){var e=l({},this.props);return delete e.name,delete e.appear,delete e.enter,delete e.leave,delete e.appearTimeout,delete e.enterTimeout,delete e.leaveTimeout,delete e.children,y.default.cloneElement(y.default.Children.only(this.props.children),e)},t}(y.default.Component));x.displayName="CSSTransitionGroupChild",x.propTypes={},t.default=x,e.exports=t.default},409:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},l=n(400),u=o(l),c=n(0),p=o(c),d=n(174),f=o(d),m=n(10),h=(o(m),n(410)),v=(f.default.any,f.default.func,f.default.node,{component:"span",childFactory:function(e){return e}}),y=function(e){function t(n,o){r(this,t);var a=i(this,e.call(this,n,o));return a.performAppear=function(e,t){a.currentlyTransitioningKeys[e]=!0,t.componentWillAppear?t.componentWillAppear(a._handleDoneAppearing.bind(a,e,t)):a._handleDoneAppearing(e,t)},a._handleDoneAppearing=function(e,t){t.componentDidAppear&&t.componentDidAppear(),delete a.currentlyTransitioningKeys[e];var n=(0,h.getChildMapping)(a.props.children);n&&n.hasOwnProperty(e)||a.performLeave(e,t)},a.performEnter=function(e,t){a.currentlyTransitioningKeys[e]=!0,t.componentWillEnter?t.componentWillEnter(a._handleDoneEntering.bind(a,e,t)):a._handleDoneEntering(e,t)},a._handleDoneEntering=function(e,t){t.componentDidEnter&&t.componentDidEnter(),delete a.currentlyTransitioningKeys[e];var n=(0,h.getChildMapping)(a.props.children);n&&n.hasOwnProperty(e)||a.performLeave(e,t)},a.performLeave=function(e,t){a.currentlyTransitioningKeys[e]=!0,t.componentWillLeave?t.componentWillLeave(a._handleDoneLeaving.bind(a,e,t)):a._handleDoneLeaving(e,t)},a._handleDoneLeaving=function(e,t){t.componentDidLeave&&t.componentDidLeave(),delete a.currentlyTransitioningKeys[e];var n=(0,h.getChildMapping)(a.props.children);n&&n.hasOwnProperty(e)?a.keysToEnter.push(e):a.setState(function(t){var n=s({},t.children);return delete n[e],{children:n}})},a.childRefs=Object.create(null),a.state={children:(0,h.getChildMapping)(n.children)},a}return a(t,e),t.prototype.componentWillMount=function(){this.currentlyTransitioningKeys={},this.keysToEnter=[],this.keysToLeave=[]},t.prototype.componentDidMount=function(){var e=this.state.children;for(var t in e)e[t]&&this.performAppear(t,this.childRefs[t])},t.prototype.componentWillReceiveProps=function(e){var t=(0,h.getChildMapping)(e.children),n=this.state.children;this.setState({children:(0,h.mergeChildMappings)(n,t)});for(var o in t){var r=n&&n.hasOwnProperty(o);!t[o]||r||this.currentlyTransitioningKeys[o]||this.keysToEnter.push(o)}for(var i in n){var a=t&&t.hasOwnProperty(i);!n[i]||a||this.currentlyTransitioningKeys[i]||this.keysToLeave.push(i)}},t.prototype.componentDidUpdate=function(){var e=this,t=this.keysToEnter;this.keysToEnter=[],t.forEach(function(t){return e.performEnter(t,e.childRefs[t])});var n=this.keysToLeave;this.keysToLeave=[],n.forEach(function(t){return e.performLeave(t,e.childRefs[t])})},t.prototype.render=function(){var e=this,t=[],n=function(n){var o=e.state.children[n];if(o){var r="string"!=typeof o.ref,i=e.props.childFactory(o),a=function(t){e.childRefs[n]=t};i===o&&r&&(a=(0,u.default)(o.ref,a)),t.push(p.default.cloneElement(i,{key:n,ref:a}))}};for(var o in this.state.children)n(o);var r=s({},this.props);return delete r.transitionLeave,delete r.transitionName,delete r.transitionAppear,delete r.transitionEnter,delete r.childFactory,delete r.transitionLeaveTimeout,delete r.transitionEnterTimeout,delete r.transitionAppearTimeout,delete r.component,p.default.createElement(this.props.component,r,t)},t}(p.default.Component);y.displayName="TransitionGroup",y.propTypes={},y.defaultProps=v,t.default=y,e.exports=t.default},410:function(e,t,n){"use strict";function o(e){if(!e)return e;var t={};return i.Children.map(e,function(e){return e}).forEach(function(e){t[e.key]=e}),t}function r(e,t){function n(n){return t.hasOwnProperty(n)?t[n]:e[n]}e=e||{},t=t||{};var o={},r=[];for(var i in e)t.hasOwnProperty(i)?r.length&&(o[i]=r,r=[]):r.push(i);var a=void 0,s={};for(var l in t){if(o.hasOwnProperty(l))for(a=0;a<o[l].length;a++){var u=o[l][a];s[o[l][a]]=n(u)}s[l]=n(l)}for(a=0;a<r.length;a++)s[r[a]]=n(r[a]);return s}t.__esModule=!0,t.getChildMapping=o,t.mergeChildMappings=r;var i=n(0)},411:function(e,t,n){t=e.exports=n(175)(),t.push([e.i,".overview-list li{margin-bottom:.5em}.overview-tease{text-align:center;margin-bottom:.365em}.overview-box,.overview-tease{flex-basis:47%;width:100%}.box-cont{justify-content:space-between;align-items:center}.box-rev{flex-direction:row-reverse}.box-top{padding:.6em 0;border-radius:2px 2px 0 0;text-align:center}.box-bottom{padding:.625em .625em .3125em 1.875em;border-radius:0 0 2px 2px;border-top:1px solid #fdfdfa}",""])},412:function(e,t,n){var o=n(411);"string"==typeof o&&(o=[[e.i,o,""]]),n(176)(o,{}),o.locals&&(e.exports=o.locals)},414:function(e,t,n){t=e.exports=n(175)(),t.push([e.i,"@media only screen and (max-width:639px){.introspect>section,.panorama>section,.select>section{flex-direction:column}}.introspect .overview-box{background-color:#6497b1;background-color:rgba(100,151,177,.5)}.select .overview-box{background-color:#005b96;background-color:rgba(0,91,150,.5)}.panorama .overview-box{background-color:#b3cde0;background-color:rgba(179,205,224,.6)}.introspect .box-cont,.panorama .box-cont,.select .box-cont{margin-bottom:3em}.videoLink{margin:1em auto}.videoLink a,.videoLink a:active,.videoLink a:visited{color:#374192;text-decoration:underline}.videoLink a:hover{color:#419237}",""])},416:function(e,t,n){var o=n(414);"string"==typeof o&&(o=[[e.i,o,""]]),n(176)(o,{}),o.locals&&(e.exports=o.locals)}});