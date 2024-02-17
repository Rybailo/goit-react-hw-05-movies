(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[651],{73:function(n,e,t){"use strict";t.d(e,{Z:function(){return h}});var r,a,o,i=t(689),u=t(168),c=t(686),s=t(87),p=c.Z.ul(r||(r=(0,u.Z)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 30px;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),f=c.Z.li(a||(a=(0,u.Z)(["\n  font-weight: 600;\n  text-align: center;\n  font-size: 20px;\n  margin: 10px;\n"]))),l=(0,c.Z)(s.rU)(o||(o=(0,u.Z)(["\n  text-decoration: none;\n  color: #191d1e;\n  display: flex;\n  flex-direction: column;\n\n  &:hover {\n    color: #0069ef;\n  }\n"]))),d=t(184),h=function(n){var e=n.films,t=(n.poster_path,(0,i.TH)());return(0,d.jsx)(p,{children:e.map((function(n){return(0,d.jsx)(f,{children:(0,d.jsxs)(l,{to:"/movies/".concat(n.id),state:{from:t},children:[(0,d.jsx)("img",{src:"http://image.tmdb.org/t/p/w300"+n.poster_path,alt:n.title}),n.title]})},n.id)}))})}},651:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return b}});var r,a,o,i=t(439),u=t(791),c=t(940),s=t(73),p=t(7),f=t.n(p),l=t(168),d=t(686),h=d.Z.form(r||(r=(0,l.Z)(["\n  display: flex;\n  align-items: center;\n"]))),x=d.Z.input(a||(a=(0,l.Z)(["\n  padding: 12px 14px;\n  font: inherit;\n  cursor: pointer;\n  border-radius: 4px;\n  border: 3px solid #191d1e;\n  font-weight: 600;\n  font-size: 20px;\n  margin-right: 10px;\n  border-radius: 4px 8px;\n  outline: none;\n\n  &:hover {\n    color: #0069ef;\n    border: 3px solid #0069ef;\n  }\n"]))),g=d.Z.button(o||(o=(0,l.Z)(["\n  padding: 12px 12px;\n  font: inherit;\n  cursor: pointer;\n  border-radius: 4px;\n  border: 3px solid #191d1e;\n  color: #191d1e;\n  font-weight: 600;\n  font-size: 20px;\n  border-radius: 4px 8px;\n\n  &:hover {\n    color: #0069ef;\n    border: 3px solid #0069ef;\n  }\n"]))),v=t(184),m=function(n){var e=n.searchMovies,t=(0,u.useState)(""),r=(0,i.Z)(t,2),a=r[0],o=r[1];return(0,v.jsxs)(h,{onSubmit:function(n){n.preventDefault(),e(a.toLowerCase())},children:[(0,v.jsx)(x,{type:"text",name:"query",autoFocus:!0,value:a,onChange:function(n){o(n.target.value)}}),(0,v.jsx)(g,{type:"submit",children:"Search"})]})};m.prototype={searchMovies:f().func.isRequired};var y=m,Z=t(476),b=function(){var n=(0,u.useState)([]),e=(0,i.Z)(n,2),t=e[0],r=e[1],a=(0,u.useState)(!1),o=(0,i.Z)(a,2),p=o[0],f=o[1],l=(0,u.useState)(!1),d=(0,i.Z)(l,2),h=d[0],x=d[1];return(0,v.jsxs)("main",{children:[(0,v.jsx)(y,{searchMovies:function(n){f(!0),(0,Z.Ml)(n).then((function(n){r(n),x(0===n.length)})).catch((function(n){console.log(n)})).finally((function(){f(!1)}))}}),p&&(0,v.jsx)(c.Z,{}),h&&(0,v.jsx)("p",{children:"There is no movies with this request. Please, try again"}),t&&(0,v.jsx)(s.Z,{films:t})]})}},476:function(n,e,t){"use strict";t.d(e,{Bt:function(){return l},Ml:function(){return s},Tg:function(){return c},Y5:function(){return p},wL:function(){return f}});var r=t(861),a=t(687),o=t.n(a),i=t(294);i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u="63a82337917a31c35dd7954063a86f96",c=function(){var n=(0,r.Z)(o().mark((function n(){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("trending/movie/day?api_key=".concat(u));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("search/movie?api_key=".concat(u,"&language=en-US&page=1&include_adult=false&query=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"?api_key=").concat(u,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},888:function(n,e,t){"use strict";var r=t(47);function a(){}function o(){}o.resetWarningCache=a,n.exports=function(){function n(n,e,t,a,o,i){if(i!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function e(){return n}n.isRequired=n;var t={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:o,resetWarningCache:a};return t.PropTypes=t,t}},7:function(n,e,t){n.exports=t(888)()},47:function(n){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=651.7b638779.chunk.js.map