webpackJsonp([6],{388:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),o=n.n(i),r=n(65),a=(n.n(r),n(406)),s=n.n(a),l=n(107),u=n.n(l);t.default=function(){return o.a.createElement(u.a,{title:"Sharper Insight LLC | Introspect"},o.a.createElement("div",{className:"modalWrapper"},o.a.createElement(s.a,{transitionName:"modal",transitionAppear:!0,transitionAppearTimeout:1e3,transitionEnter:!1,transitionLeave:!1},o.a.createElement("section",{className:"introspect modal container"},o.a.createElement("section",{className:"box-cont introspect-Discover flex"},o.a.createElement("p",{className:"overview-tease title-font highlight-font"},"Discover which policies and processes work well to improve efficiency and further organizational goals"),o.a.createElement("div",{className:"overview-box"},o.a.createElement("p",{className:"box-top bold"},"Discover"),o.a.createElement("ul",{className:"box-bottom overview-list"},o.a.createElement("li",null,"Inefficiencies in service delivery"),o.a.createElement("li",null,"Innovations to routine processes"),o.a.createElement("li",null,"New opportunities to expand or improve services"),o.a.createElement("li",null,"Potential misalignment of goals as understood by management and employees")))),o.a.createElement("section",{className:"box-cont box-rev introspect-Pinpoint flex"},o.a.createElement("p",{className:"overview-tease title-font highlight-font"},"Pinpoint what makes employees happy and motivated in their jobs to improve job satisfaction and employee productivity"),o.a.createElement("div",{className:"overview-box"},o.a.createElement("p",{className:"box-top bold"},"Pinpoint"),o.a.createElement("ul",{className:"box-bottom overview-list"},o.a.createElement("li",null,"Opportunities for achievement and gratification"),o.a.createElement("li",null,"Causes of frustration and discontent"),o.a.createElement("li",null,"Counterproductive incentives"),o.a.createElement("li",null,"Mismatched talents and responsibilities"),o.a.createElement("li",null,"Ways to instill pride in the organization")))),o.a.createElement("section",{className:"box-cont introspect-Identify flex"},o.a.createElement("p",{className:"overview-tease title-font highlight-font"},"Identify who works well together to create teams that enjoy their work and work efficiently and productively"),o.a.createElement("div",{className:"overview-box"},o.a.createElement("p",{className:"box-top bold"},"Identify"),o.a.createElement("ul",{className:"box-bottom overview-list"},o.a.createElement("li",null,"Natural leaders and mentors within the organization"),o.a.createElement("li",null,"Hidden employee talents that could benefit the organization"),o.a.createElement("li",null,"Suboptimal teaming"),o.a.createElement("li",null,"Organizational strengths that could be shared more broadly")))),o.a.createElement("p",null,o.a.createElement(r.Link,{to:"/business"},"← ",o.a.createElement("span",{className:"italic smaller-font"},"back to Business Services overview")))))))}},398:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=!("undefined"==typeof window||!window.document||!window.document.createElement),e.exports=t.default},399:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e){var t="transition"+e+"Timeout",n="transition"+e;return function(e){if(e[n]){if(null==e[t])return new Error(t+" wasn't supplied to CSSTransitionGroup: this can cause unreliable animations and won't be supported in a future version of React. See https://fb.me/react-animation-transition-group-timeout for more information.");if("number"!=typeof e[t])return new Error(t+" must be a number (in milliseconds)")}return null}}t.__esModule=!0,t.nameShape=void 0,t.transitionTimeout=o;var r=n(0),a=(i(r),n(175)),s=i(a);t.nameShape=s.default.oneOfType([s.default.string,s.default.shape({enter:s.default.string,leave:s.default.string,active:s.default.string}),s.default.shape({enter:s.default.string,enterActive:s.default.string,leave:s.default.string,leaveActive:s.default.string,appear:s.default.string,appearActive:s.default.string})])},400:function(e,t){e.exports=function(){for(var e=arguments.length,t=[],n=0;n<e;n++)t[n]=arguments[n];if(t=t.filter(function(e){return null!=e}),0!==t.length)return 1===t.length?t[0]:t.reduce(function(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}})}},401:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){e.classList?e.classList.add(t):(0,a.default)(e)||(e.className=e.className+" "+t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var r=n(402),a=i(r);e.exports=t.default},402:function(e,t,n){"use strict";function i(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+e.className+" ").indexOf(" "+t+" ")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i,e.exports=t.default},403:function(e,t,n){"use strict";e.exports=function(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}},404:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(){for(var e=document.createElement("div").style,t={O:function(e){return"o"+e.toLowerCase()},Moz:function(e){return e.toLowerCase()},Webkit:function(e){return"webkit"+e},ms:function(e){return"MS"+e}},n=Object.keys(t),i=void 0,o=void 0,r="",a=0;a<n.length;a++){var s=n[a];if(s+"TransitionProperty"in e){r="-"+s.toLowerCase(),i=t[s]("TransitionEnd"),o=t[s]("AnimationEnd");break}}return!i&&"transitionProperty"in e&&(i="transitionend"),!o&&"animationName"in e&&(o="animationend"),e=null,{animationEnd:o,transitionEnd:i,prefix:r}}Object.defineProperty(t,"__esModule",{value:!0}),t.animationEnd=t.animationDelay=t.animationTiming=t.animationDuration=t.animationName=t.transitionEnd=t.transitionDuration=t.transitionDelay=t.transitionTiming=t.transitionProperty=t.transform=void 0;var r=n(398),a=i(r),s="transform",l=void 0,u=void 0,c=void 0,p=void 0,f=void 0,d=void 0,m=void 0,h=void 0,v=void 0,y=void 0,g=void 0;if(a.default){var E=o();l=E.prefix,t.transitionEnd=u=E.transitionEnd,t.animationEnd=c=E.animationEnd,t.transform=s=l+"-"+s,t.transitionProperty=p=l+"-transition-property",t.transitionDuration=f=l+"-transition-duration",t.transitionDelay=m=l+"-transition-delay",t.transitionTiming=d=l+"-transition-timing-function",t.animationName=h=l+"-animation-name",t.animationDuration=v=l+"-animation-duration",t.animationTiming=y=l+"-animation-delay",t.animationDelay=g=l+"-animation-timing-function"}t.transform=s,t.transitionProperty=p,t.transitionTiming=d,t.transitionDelay=m,t.transitionDuration=f,t.transitionEnd=u,t.animationName=h,t.animationDuration=v,t.animationTiming=y,t.animationDelay=g,t.animationEnd=c,t.default={transform:s,end:u,property:p,timing:d,delay:m,duration:f}},405:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=(new Date).getTime(),n=Math.max(0,16-(t-f)),i=setTimeout(e,n);return f=t,i}Object.defineProperty(t,"__esModule",{value:!0});var r=n(398),a=i(r),s=["","webkit","moz","o","ms"],l="clearTimeout",u=o,c=void 0,p=function(e,t){return e+(e?t[0].toUpperCase()+t.substr(1):t)+"AnimationFrame"};a.default&&s.some(function(e){var t=p(e,"request");if(t in window)return l=p(e,"cancel"),u=function(e){return window[t](e)}});var f=(new Date).getTime();c=function(e){return u(e)},c.cancel=function(e){window[l]&&"function"==typeof window[l]&&window[l](e)},t.default=c,e.exports=t.default},406:function(e,t,n){"use strict";e.exports=n(407)},407:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},l=n(0),u=i(l),c=n(175),p=i(c),f=n(409),d=i(f),m=n(408),h=i(m),v=n(399),y=(v.nameShape.isRequired,p.default.bool,p.default.bool,p.default.bool,(0,v.transitionTimeout)("Appear"),(0,v.transitionTimeout)("Enter"),(0,v.transitionTimeout)("Leave"),{transitionAppear:!1,transitionEnter:!0,transitionLeave:!0}),g=function(e){function t(){var n,i,a;o(this,t);for(var s=arguments.length,l=Array(s),c=0;c<s;c++)l[c]=arguments[c];return n=i=r(this,e.call.apply(e,[this].concat(l))),i._wrapChild=function(e){return u.default.createElement(h.default,{name:i.props.transitionName,appear:i.props.transitionAppear,enter:i.props.transitionEnter,leave:i.props.transitionLeave,appearTimeout:i.props.transitionAppearTimeout,enterTimeout:i.props.transitionEnterTimeout,leaveTimeout:i.props.transitionLeaveTimeout},e)},a=n,r(i,a)}return a(t,e),t.prototype.render=function(){return u.default.createElement(d.default,s({},this.props,{childFactory:this._wrapChild}))},t}(u.default.Component);g.displayName="CSSTransitionGroup",g.propTypes={},g.defaultProps=y,t.default=g,e.exports=t.default},408:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t){return T.length?T.forEach(function(n){return e.addEventListener(n,t,!1)}):setTimeout(t,0),function(){T.length&&T.forEach(function(n){return e.removeEventListener(n,t,!1)})}}t.__esModule=!0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},u=n(401),c=i(u),p=n(403),f=i(p),d=n(405),m=i(d),h=n(404),v=n(0),y=i(v),g=n(175),E=i(g),b=n(49),w=n(399),T=[];h.transitionEnd&&T.push(h.transitionEnd),h.animationEnd&&T.push(h.animationEnd);var _=(E.default.node,w.nameShape.isRequired,E.default.bool,E.default.bool,E.default.bool,E.default.number,E.default.number,E.default.number,function(e){function t(){var n,i,a;o(this,t);for(var s=arguments.length,l=Array(s),u=0;u<s;u++)l[u]=arguments[u];return n=i=r(this,e.call.apply(e,[this].concat(l))),i.componentWillAppear=function(e){i.props.appear?i.transition("appear",e,i.props.appearTimeout):e()},i.componentWillEnter=function(e){i.props.enter?i.transition("enter",e,i.props.enterTimeout):e()},i.componentWillLeave=function(e){i.props.leave?i.transition("leave",e,i.props.leaveTimeout):e()},a=n,r(i,a)}return a(t,e),t.prototype.componentWillMount=function(){this.classNameAndNodeQueue=[],this.transitionTimeouts=[]},t.prototype.componentWillUnmount=function(){this.unmounted=!0,this.timeout&&clearTimeout(this.timeout),this.transitionTimeouts.forEach(function(e){clearTimeout(e)}),this.classNameAndNodeQueue.length=0},t.prototype.transition=function(e,t,n){var i=(0,b.findDOMNode)(this);if(!i)return void(t&&t());var o=this.props.name[e]||this.props.name+"-"+e,r=this.props.name[e+"Active"]||o+"-active",a=null,l=void 0;(0,c.default)(i,o),this.queueClassAndNode(r,i);var u=function(e){e&&e.target!==i||(clearTimeout(a),l&&l(),(0,f.default)(i,o),(0,f.default)(i,r),l&&l(),t&&t())};n?(a=setTimeout(u,n),this.transitionTimeouts.push(a)):h.transitionEnd&&(l=s(i,u))},t.prototype.queueClassAndNode=function(e,t){var n=this;this.classNameAndNodeQueue.push({className:e,node:t}),this.rafHandle||(this.rafHandle=(0,m.default)(function(){return n.flushClassNameAndNodeQueue()}))},t.prototype.flushClassNameAndNodeQueue=function(){this.unmounted||this.classNameAndNodeQueue.forEach(function(e){e.node.scrollTop,(0,c.default)(e.node,e.className)}),this.classNameAndNodeQueue.length=0,this.rafHandle=null},t.prototype.render=function(){var e=l({},this.props);return delete e.name,delete e.appear,delete e.enter,delete e.leave,delete e.appearTimeout,delete e.enterTimeout,delete e.leaveTimeout,delete e.children,y.default.cloneElement(y.default.Children.only(this.props.children),e)},t}(y.default.Component));_.displayName="CSSTransitionGroupChild",_.propTypes={},t.default=_,e.exports=t.default},409:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},l=n(400),u=i(l),c=n(0),p=i(c),f=n(175),d=i(f),m=n(10),h=(i(m),n(410)),v=(d.default.any,d.default.func,d.default.node,{component:"span",childFactory:function(e){return e}}),y=function(e){function t(n,i){o(this,t);var a=r(this,e.call(this,n,i));return a.performAppear=function(e,t){a.currentlyTransitioningKeys[e]=!0,t.componentWillAppear?t.componentWillAppear(a._handleDoneAppearing.bind(a,e,t)):a._handleDoneAppearing(e,t)},a._handleDoneAppearing=function(e,t){t.componentDidAppear&&t.componentDidAppear(),delete a.currentlyTransitioningKeys[e];var n=(0,h.getChildMapping)(a.props.children);n&&n.hasOwnProperty(e)||a.performLeave(e,t)},a.performEnter=function(e,t){a.currentlyTransitioningKeys[e]=!0,t.componentWillEnter?t.componentWillEnter(a._handleDoneEntering.bind(a,e,t)):a._handleDoneEntering(e,t)},a._handleDoneEntering=function(e,t){t.componentDidEnter&&t.componentDidEnter(),delete a.currentlyTransitioningKeys[e];var n=(0,h.getChildMapping)(a.props.children);n&&n.hasOwnProperty(e)||a.performLeave(e,t)},a.performLeave=function(e,t){a.currentlyTransitioningKeys[e]=!0,t.componentWillLeave?t.componentWillLeave(a._handleDoneLeaving.bind(a,e,t)):a._handleDoneLeaving(e,t)},a._handleDoneLeaving=function(e,t){t.componentDidLeave&&t.componentDidLeave(),delete a.currentlyTransitioningKeys[e];var n=(0,h.getChildMapping)(a.props.children);n&&n.hasOwnProperty(e)?a.keysToEnter.push(e):a.setState(function(t){var n=s({},t.children);return delete n[e],{children:n}})},a.childRefs=Object.create(null),a.state={children:(0,h.getChildMapping)(n.children)},a}return a(t,e),t.prototype.componentWillMount=function(){this.currentlyTransitioningKeys={},this.keysToEnter=[],this.keysToLeave=[]},t.prototype.componentDidMount=function(){var e=this.state.children;for(var t in e)e[t]&&this.performAppear(t,this.childRefs[t])},t.prototype.componentWillReceiveProps=function(e){var t=(0,h.getChildMapping)(e.children),n=this.state.children;this.setState({children:(0,h.mergeChildMappings)(n,t)});for(var i in t){var o=n&&n.hasOwnProperty(i);!t[i]||o||this.currentlyTransitioningKeys[i]||this.keysToEnter.push(i)}for(var r in n){var a=t&&t.hasOwnProperty(r);!n[r]||a||this.currentlyTransitioningKeys[r]||this.keysToLeave.push(r)}},t.prototype.componentDidUpdate=function(){var e=this,t=this.keysToEnter;this.keysToEnter=[],t.forEach(function(t){return e.performEnter(t,e.childRefs[t])});var n=this.keysToLeave;this.keysToLeave=[],n.forEach(function(t){return e.performLeave(t,e.childRefs[t])})},t.prototype.render=function(){var e=this,t=[],n=function(n){var i=e.state.children[n];if(i){var o="string"!=typeof i.ref,r=e.props.childFactory(i),a=function(t){e.childRefs[n]=t};r===i&&o&&(a=(0,u.default)(i.ref,a)),t.push(p.default.cloneElement(r,{key:n,ref:a}))}};for(var i in this.state.children)n(i);var o=s({},this.props);return delete o.transitionLeave,delete o.transitionName,delete o.transitionAppear,delete o.transitionEnter,delete o.childFactory,delete o.transitionLeaveTimeout,delete o.transitionEnterTimeout,delete o.transitionAppearTimeout,delete o.component,p.default.createElement(this.props.component,o,t)},t}(p.default.Component);y.displayName="TransitionGroup",y.propTypes={},y.defaultProps=v,t.default=y,e.exports=t.default},410:function(e,t,n){"use strict";function i(e){if(!e)return e;var t={};return r.Children.map(e,function(e){return e}).forEach(function(e){t[e.key]=e}),t}function o(e,t){function n(n){return t.hasOwnProperty(n)?t[n]:e[n]}e=e||{},t=t||{};var i={},o=[];for(var r in e)t.hasOwnProperty(r)?o.length&&(i[r]=o,o=[]):o.push(r);var a=void 0,s={};for(var l in t){if(i.hasOwnProperty(l))for(a=0;a<i[l].length;a++){var u=i[l][a];s[i[l][a]]=n(u)}s[l]=n(l)}for(a=0;a<o.length;a++)s[o[a]]=n(o[a]);return s}t.__esModule=!0,t.getChildMapping=i,t.mergeChildMappings=o;var r=n(0)}});