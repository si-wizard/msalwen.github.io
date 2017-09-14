webpackJsonp([5],{395:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),i=n.n(o),a=n(65),r=(n.n(a),n(406)),s=n.n(r),l=n(107),u=n.n(l),c=n(415);n.n(c),t.default=function(){return i.a.createElement(u.a,{title:"Sharper Insight LLC | Social Network Analysis"},i.a.createElement("div",{className:"modalWrapper"},i.a.createElement(s.a,{transitionName:"modal",transitionAppear:!0,transitionAppearTimeout:750,transitionEnter:!1,transitionLeave:!1},i.a.createElement("section",{className:"modal container"},i.a.createElement("section",{className:"methodIntro"},i.a.createElement("p",null,i.a.createElement("span",{className:"dropcap"},"S"),"ocial network analysis is a set of methods for collecting and analyzing information about who knows and interacts with whom. No person is an island; each of us as we go through our daily routines interacts with other people in a variety of ways and for all sorts of reasons. For the most part, people can identify who they interact with directly, but while most of us are aware those we engage also interact with others, few have much insight into the further connections our contacts make.")),i.a.createElement("section",{className:"methodBottom flex"},i.a.createElement("aside",{className:"methodCallout"},i.a.createElement("p",{className:"highlight-font bold"},"Recognizing Leaders"),i.a.createElement("p",{className:"calloutText"},"Social Network Analysis often reveals surprising and useful information about how groups and organizations function and which individuals play critical roles. For instance, in one mid-sized manufacturing company, social network analysis revealed that one soon-to-be-promoted manager was largely successful because of one of her assistants, who was for the most part unrecognized as important by senior managers. Both of these employees received excellent evaluations, but the manager alone received credit for the success of her team. In fact, social network analysis revealed that the success was due to the dedication and leadership skills of the assistant. The team loved her and went to her for advice and technical assistance. The manager was liked and respected in her official role, but her assistant inspired, coordinated and motivated the excellent work the unit consistently produced. The social network analysis made evident the value of this individual, who was soon promoted and asked to lead a new team troubled by low morale and low productivity. Within nine months, productivity and morale improved, and a second network analysis revealed that her new team valued her as much as the old.")),i.a.createElement("div",{className:"methodDescription"},i.a.createElement("p",null,"At first glance this does not seem important. Why should anyone be concerned with whom their friends or acquaintances know? In fact, understanding the world beyond our direct experience helps us understand how we fit in and helps us make better choices about how to allocate our time to reduce redundancy and improve efficiency in acquiring information and completing tasks. Knowing something about the strangers our connections interact with can expand our horizons and reveal pathways to new knowledge, resources, and experiences."),i.a.createElement("p",null,"Social network analysis is a formal way to measure and map patterns of communication and interaction. In an organization, a social network analysis can reveal how work gets accomplished, which often surprises almost everyone within the organization, and rarely resembles the organizational chart."),i.a.createElement("p",null,"The benefits of understanding the interconnectedness of relationships in our organizations and our lives are many. Studies reveal that small changes in how people are connected to one another often result in huge gains in productivity and well being. The people of Sharper Insight have decades of experience conducting network analysis that can help your firm discover the information latent in the organization's social network and identify strategies for optimizing those connections."))),i.a.createElement("p",null,i.a.createElement(a.Link,{to:"/approach#methods"},"← ",i.a.createElement("span",{className:"italic smaller-font"},"back to Approach overview")))))))}},398:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=!("undefined"==typeof window||!window.document||!window.document.createElement),e.exports=t.default},399:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e){var t="transition"+e+"Timeout",n="transition"+e;return function(e){if(e[n]){if(null==e[t])return new Error(t+" wasn't supplied to CSSTransitionGroup: this can cause unreliable animations and won't be supported in a future version of React. See https://fb.me/react-animation-transition-group-timeout for more information.");if("number"!=typeof e[t])return new Error(t+" must be a number (in milliseconds)")}return null}}t.__esModule=!0,t.nameShape=void 0,t.transitionTimeout=i;var a=n(0),r=(o(a),n(174)),s=o(r);t.nameShape=s.default.oneOfType([s.default.string,s.default.shape({enter:s.default.string,leave:s.default.string,active:s.default.string}),s.default.shape({enter:s.default.string,enterActive:s.default.string,leave:s.default.string,leaveActive:s.default.string,appear:s.default.string,appearActive:s.default.string})])},400:function(e,t){e.exports=function(){for(var e=arguments.length,t=[],n=0;n<e;n++)t[n]=arguments[n];if(t=t.filter(function(e){return null!=e}),0!==t.length)return 1===t.length?t[0]:t.reduce(function(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}})}},401:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){e.classList?e.classList.add(t):(0,r.default)(e)||(e.className=e.className+" "+t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var a=n(402),r=o(a);e.exports=t.default},402:function(e,t,n){"use strict";function o(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+e.className+" ").indexOf(" "+t+" ")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o,e.exports=t.default},403:function(e,t,n){"use strict";e.exports=function(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}},404:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(){for(var e=document.createElement("div").style,t={O:function(e){return"o"+e.toLowerCase()},Moz:function(e){return e.toLowerCase()},Webkit:function(e){return"webkit"+e},ms:function(e){return"MS"+e}},n=Object.keys(t),o=void 0,i=void 0,a="",r=0;r<n.length;r++){var s=n[r];if(s+"TransitionProperty"in e){a="-"+s.toLowerCase(),o=t[s]("TransitionEnd"),i=t[s]("AnimationEnd");break}}return!o&&"transitionProperty"in e&&(o="transitionend"),!i&&"animationName"in e&&(i="animationend"),e=null,{animationEnd:i,transitionEnd:o,prefix:a}}Object.defineProperty(t,"__esModule",{value:!0}),t.animationEnd=t.animationDelay=t.animationTiming=t.animationDuration=t.animationName=t.transitionEnd=t.transitionDuration=t.transitionDelay=t.transitionTiming=t.transitionProperty=t.transform=void 0;var a=n(398),r=o(a),s="transform",l=void 0,u=void 0,c=void 0,d=void 0,p=void 0,f=void 0,m=void 0,h=void 0,y=void 0,v=void 0,g=void 0;if(r.default){var w=i();l=w.prefix,t.transitionEnd=u=w.transitionEnd,t.animationEnd=c=w.animationEnd,t.transform=s=l+"-"+s,t.transitionProperty=d=l+"-transition-property",t.transitionDuration=p=l+"-transition-duration",t.transitionDelay=m=l+"-transition-delay",t.transitionTiming=f=l+"-transition-timing-function",t.animationName=h=l+"-animation-name",t.animationDuration=y=l+"-animation-duration",t.animationTiming=v=l+"-animation-delay",t.animationDelay=g=l+"-animation-timing-function"}t.transform=s,t.transitionProperty=d,t.transitionTiming=f,t.transitionDelay=m,t.transitionDuration=p,t.transitionEnd=u,t.animationName=h,t.animationDuration=y,t.animationTiming=v,t.animationDelay=g,t.animationEnd=c,t.default={transform:s,end:u,property:d,timing:f,delay:m,duration:p}},405:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=(new Date).getTime(),n=Math.max(0,16-(t-p)),o=setTimeout(e,n);return p=t,o}Object.defineProperty(t,"__esModule",{value:!0});var a=n(398),r=o(a),s=["","webkit","moz","o","ms"],l="clearTimeout",u=i,c=void 0,d=function(e,t){return e+(e?t[0].toUpperCase()+t.substr(1):t)+"AnimationFrame"};r.default&&s.some(function(e){var t=d(e,"request");if(t in window)return l=d(e,"cancel"),u=function(e){return window[t](e)}});var p=(new Date).getTime();c=function(e){return u(e)},c.cancel=function(e){window[l]&&"function"==typeof window[l]&&window[l](e)},t.default=c,e.exports=t.default},406:function(e,t,n){"use strict";e.exports=n(407)},407:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},l=n(0),u=o(l),c=n(174),d=o(c),p=n(409),f=o(p),m=n(408),h=o(m),y=n(399),v=(y.nameShape.isRequired,d.default.bool,d.default.bool,d.default.bool,(0,y.transitionTimeout)("Appear"),(0,y.transitionTimeout)("Enter"),(0,y.transitionTimeout)("Leave"),{transitionAppear:!1,transitionEnter:!0,transitionLeave:!0}),g=function(e){function t(){var n,o,r;i(this,t);for(var s=arguments.length,l=Array(s),c=0;c<s;c++)l[c]=arguments[c];return n=o=a(this,e.call.apply(e,[this].concat(l))),o._wrapChild=function(e){return u.default.createElement(h.default,{name:o.props.transitionName,appear:o.props.transitionAppear,enter:o.props.transitionEnter,leave:o.props.transitionLeave,appearTimeout:o.props.transitionAppearTimeout,enterTimeout:o.props.transitionEnterTimeout,leaveTimeout:o.props.transitionLeaveTimeout},e)},r=n,a(o,r)}return r(t,e),t.prototype.render=function(){return u.default.createElement(f.default,s({},this.props,{childFactory:this._wrapChild}))},t}(u.default.Component);g.displayName="CSSTransitionGroup",g.propTypes={},g.defaultProps=v,t.default=g,e.exports=t.default},408:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t){return T.length?T.forEach(function(n){return e.addEventListener(n,t,!1)}):setTimeout(t,0),function(){T.length&&T.forEach(function(n){return e.removeEventListener(n,t,!1)})}}t.__esModule=!0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},u=n(401),c=o(u),d=n(403),p=o(d),f=n(405),m=o(f),h=n(404),y=n(0),v=o(y),g=n(174),w=o(g),b=n(49),E=n(399),T=[];h.transitionEnd&&T.push(h.transitionEnd),h.animationEnd&&T.push(h.animationEnd);var _=(w.default.node,E.nameShape.isRequired,w.default.bool,w.default.bool,w.default.bool,w.default.number,w.default.number,w.default.number,function(e){function t(){var n,o,r;i(this,t);for(var s=arguments.length,l=Array(s),u=0;u<s;u++)l[u]=arguments[u];return n=o=a(this,e.call.apply(e,[this].concat(l))),o.componentWillAppear=function(e){o.props.appear?o.transition("appear",e,o.props.appearTimeout):e()},o.componentWillEnter=function(e){o.props.enter?o.transition("enter",e,o.props.enterTimeout):e()},o.componentWillLeave=function(e){o.props.leave?o.transition("leave",e,o.props.leaveTimeout):e()},r=n,a(o,r)}return r(t,e),t.prototype.componentWillMount=function(){this.classNameAndNodeQueue=[],this.transitionTimeouts=[]},t.prototype.componentWillUnmount=function(){this.unmounted=!0,this.timeout&&clearTimeout(this.timeout),this.transitionTimeouts.forEach(function(e){clearTimeout(e)}),this.classNameAndNodeQueue.length=0},t.prototype.transition=function(e,t,n){var o=(0,b.findDOMNode)(this);if(!o)return void(t&&t());var i=this.props.name[e]||this.props.name+"-"+e,a=this.props.name[e+"Active"]||i+"-active",r=null,l=void 0;(0,c.default)(o,i),this.queueClassAndNode(a,o);var u=function(e){e&&e.target!==o||(clearTimeout(r),l&&l(),(0,p.default)(o,i),(0,p.default)(o,a),l&&l(),t&&t())};n?(r=setTimeout(u,n),this.transitionTimeouts.push(r)):h.transitionEnd&&(l=s(o,u))},t.prototype.queueClassAndNode=function(e,t){var n=this;this.classNameAndNodeQueue.push({className:e,node:t}),this.rafHandle||(this.rafHandle=(0,m.default)(function(){return n.flushClassNameAndNodeQueue()}))},t.prototype.flushClassNameAndNodeQueue=function(){this.unmounted||this.classNameAndNodeQueue.forEach(function(e){e.node.scrollTop,(0,c.default)(e.node,e.className)}),this.classNameAndNodeQueue.length=0,this.rafHandle=null},t.prototype.render=function(){var e=l({},this.props);return delete e.name,delete e.appear,delete e.enter,delete e.leave,delete e.appearTimeout,delete e.enterTimeout,delete e.leaveTimeout,delete e.children,v.default.cloneElement(v.default.Children.only(this.props.children),e)},t}(v.default.Component));_.displayName="CSSTransitionGroupChild",_.propTypes={},t.default=_,e.exports=t.default},409:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},l=n(400),u=o(l),c=n(0),d=o(c),p=n(174),f=o(p),m=n(10),h=(o(m),n(410)),y=(f.default.any,f.default.func,f.default.node,{component:"span",childFactory:function(e){return e}}),v=function(e){function t(n,o){i(this,t);var r=a(this,e.call(this,n,o));return r.performAppear=function(e,t){r.currentlyTransitioningKeys[e]=!0,t.componentWillAppear?t.componentWillAppear(r._handleDoneAppearing.bind(r,e,t)):r._handleDoneAppearing(e,t)},r._handleDoneAppearing=function(e,t){t.componentDidAppear&&t.componentDidAppear(),delete r.currentlyTransitioningKeys[e];var n=(0,h.getChildMapping)(r.props.children);n&&n.hasOwnProperty(e)||r.performLeave(e,t)},r.performEnter=function(e,t){r.currentlyTransitioningKeys[e]=!0,t.componentWillEnter?t.componentWillEnter(r._handleDoneEntering.bind(r,e,t)):r._handleDoneEntering(e,t)},r._handleDoneEntering=function(e,t){t.componentDidEnter&&t.componentDidEnter(),delete r.currentlyTransitioningKeys[e];var n=(0,h.getChildMapping)(r.props.children);n&&n.hasOwnProperty(e)||r.performLeave(e,t)},r.performLeave=function(e,t){r.currentlyTransitioningKeys[e]=!0,t.componentWillLeave?t.componentWillLeave(r._handleDoneLeaving.bind(r,e,t)):r._handleDoneLeaving(e,t)},r._handleDoneLeaving=function(e,t){t.componentDidLeave&&t.componentDidLeave(),delete r.currentlyTransitioningKeys[e];var n=(0,h.getChildMapping)(r.props.children);n&&n.hasOwnProperty(e)?r.keysToEnter.push(e):r.setState(function(t){var n=s({},t.children);return delete n[e],{children:n}})},r.childRefs=Object.create(null),r.state={children:(0,h.getChildMapping)(n.children)},r}return r(t,e),t.prototype.componentWillMount=function(){this.currentlyTransitioningKeys={},this.keysToEnter=[],this.keysToLeave=[]},t.prototype.componentDidMount=function(){var e=this.state.children;for(var t in e)e[t]&&this.performAppear(t,this.childRefs[t])},t.prototype.componentWillReceiveProps=function(e){var t=(0,h.getChildMapping)(e.children),n=this.state.children;this.setState({children:(0,h.mergeChildMappings)(n,t)});for(var o in t){var i=n&&n.hasOwnProperty(o);!t[o]||i||this.currentlyTransitioningKeys[o]||this.keysToEnter.push(o)}for(var a in n){var r=t&&t.hasOwnProperty(a);!n[a]||r||this.currentlyTransitioningKeys[a]||this.keysToLeave.push(a)}},t.prototype.componentDidUpdate=function(){var e=this,t=this.keysToEnter;this.keysToEnter=[],t.forEach(function(t){return e.performEnter(t,e.childRefs[t])});var n=this.keysToLeave;this.keysToLeave=[],n.forEach(function(t){return e.performLeave(t,e.childRefs[t])})},t.prototype.render=function(){var e=this,t=[],n=function(n){var o=e.state.children[n];if(o){var i="string"!=typeof o.ref,a=e.props.childFactory(o),r=function(t){e.childRefs[n]=t};a===o&&i&&(r=(0,u.default)(o.ref,r)),t.push(d.default.cloneElement(a,{key:n,ref:r}))}};for(var o in this.state.children)n(o);var i=s({},this.props);return delete i.transitionLeave,delete i.transitionName,delete i.transitionAppear,delete i.transitionEnter,delete i.childFactory,delete i.transitionLeaveTimeout,delete i.transitionEnterTimeout,delete i.transitionAppearTimeout,delete i.component,d.default.createElement(this.props.component,i,t)},t}(d.default.Component);v.displayName="TransitionGroup",v.propTypes={},v.defaultProps=y,t.default=v,e.exports=t.default},410:function(e,t,n){"use strict";function o(e){if(!e)return e;var t={};return a.Children.map(e,function(e){return e}).forEach(function(e){t[e.key]=e}),t}function i(e,t){function n(n){return t.hasOwnProperty(n)?t[n]:e[n]}e=e||{},t=t||{};var o={},i=[];for(var a in e)t.hasOwnProperty(a)?i.length&&(o[a]=i,i=[]):i.push(a);var r=void 0,s={};for(var l in t){if(o.hasOwnProperty(l))for(r=0;r<o[l].length;r++){var u=o[l][r];s[o[l][r]]=n(u)}s[l]=n(l)}for(r=0;r<i.length;r++)s[i[r]]=n(i[r]);return s}t.__esModule=!0,t.getChildMapping=o,t.mergeChildMappings=i;var a=n(0)},413:function(e,t,n){t=e.exports=n(175)(),t.push([e.i,"@media only screen and (max-width:639px){.methodCallout{order:1;border-radius:10px!important;border:none!important}.methodDescription{order:0}.methodBottom{flex-direction:column}}.methodDescription{flex-basis:50%}.methodDescription p,.methodIntro p{margin-bottom:1.5em}.methodBottom{justify-content:space-between;align-content:flex-start;margin-bottom:1.25em}.methodCallout{flex-basis:40%;background-color:rgba(100,151,177,.5);border-radius:0 10px 10px 0;border-left:4px solid #333;padding:1em 2%}.calloutText{margin-top:1em;letter-spacing:.6px}",""])},415:function(e,t,n){var o=n(413);"string"==typeof o&&(o=[[e.i,o,""]]),n(176)(o,{}),o.locals&&(e.exports=o.locals)}});