(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{41:function(t,e,n){t.exports=n(73)},73:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(18),o=n.n(c),i=n(3),l=n(2),s=n(34),u=n.n(s),d=n(37),m=new(n.n(d).a)({bodyFontFamily:["Open Sans","Helvetica","sans-serif"],googleFonts:[{name:"Nunito",styles:["400","700"]},{name:"Open Sans",styles:["400","600"]}],headerFontFamily:["Nunito","Helvetica","sans-serif"],includeNormalize:!1}).toString(),p=n(75),f=n(76),h=n(77),b="https://js-bitcoin.herokuapp.com",g="blocks",x="transactions",v=n(4),E=n.n(v),k=n(15),j=n(6),O=n(7),y=n(9),w=n(8),S=n(10),P=n(11),D=n.n(P),C=n(74);function A(){var t=Object(i.a)(["\n  color: #2196f3;\n"]);return A=function(){return t},t}function F(){var t=Object(i.a)(["\n  color: #000;\n"]);return F=function(){return t},t}function T(){var t=Object(i.a)(["\n  margin-bottom: 12px;\n  font-size: 18px;\n"]);return T=function(){return t},t}var L=l.default.div(T()),B=l.default.span(F()),N=Object(l.default)(C.a)(A()),H=function(t){var e=t.address,n=t.balance;return r.a.createElement(r.a.Fragment,null,r.a.createElement(L,null,r.a.createElement(B,null,"Address:")," ",e),r.a.createElement(L,null,r.a.createElement(B,null,"Balance:")," ",n))},_=function(t){function e(){var t,n;Object(j.a)(this,e);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(y.a)(this,(t=Object(w.a)(e)).call.apply(t,[this].concat(r)))).state={balance:"",isLoading:!1},n._getBlockData=function(){var t=Object(k.a)(E.a.mark(function t(e){var a,r;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D.a.get("".concat(b,"/address/").concat(e));case 2:a=t.sent,r=a.data,n.setState({balance:r,isLoading:!1});case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),n}return Object(S.a)(e,t),Object(O.a)(e,[{key:"componentDidMount",value:function(){var t=this.props.match.params.address;this._getBlockData(t)}},{key:"render",value:function(){var t=this.props.match.params.address;return r.a.createElement(H,Object.assign({},this.state,{address:t}))}}]),e}(a.Component),z=function(t){var e=new Date(0);return e.setSeconds(t),e.toUTCString()};function M(){var t=Object(i.a)(["\n  ",";\n  color: #2196f3;\n"]);return M=function(){return t},t}function I(){var t=Object(i.a)(["\n  ",";\n"]);return I=function(){return t},t}function J(){var t=Object(i.a)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 15px;\n  width: 100%;\n  font-size: 14px;\n  text-align: center;\n\n  & + & {\n    border-top: 1px solid rgba(0, 0, 0, 0.15);\n  }\n\n  & * {\n    width: 15%;\n    padding-right: 10px;\n  }\n\n  & *:nth-child(2) {\n    width: 40%;\n  }\n"]);return J=function(){return t},t}function U(){var t=Object(i.a)(["\n  font-weight: 600;\n  color: #333333;\n  ",";\n"]);return U=function(){return t},t}function R(){var t=Object(i.a)(["\n  width: 100%;\n"]);return R=function(){return t},t}function q(){var t=Object(i.a)(["\n  border-bottom: 2px solid rgba(0, 0, 0, 0.15);\n"]);return q=function(){return t},t}function G(){var t=Object(i.a)(["\n  background-color: #fff;\n  width: 100%;\n  margin-bottom: 40px;\n  box-shadow: ",";\n  &:last-child {\n    margin-bottom: 0;\n  }\n"]);return G=function(){return t},t}var K=l.default.div(G(),function(t){return t.theme.boxShadow}),W=l.default.header(q()),Q=l.default.div(R()),V=l.default.span(U(),function(t){return t.theme.textEllipsis}),X=l.default.div(J()),Y=l.default.div(I(),function(t){return t.theme.textEllipsis}),Z=Object(l.default)(N)(M(),function(t){return t.theme.textEllipsis}),$=function(t){var e=t.title,n=t.headers,a=t.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,e),r.a.createElement(K,null,r.a.createElement(W,null,r.a.createElement(X,null,n.map(function(t,e){return r.a.createElement(V,{key:e},t)}))),r.a.createElement(Q,null,a)))},tt=function(t){var e=t.title,n=t.headers,a=t.data;return r.a.createElement($,{title:e,headers:n},a.map(function(t,e){var n=t.from,a=t.to,c=t.amount,o=t.timeStamp,i=t.id;return r.a.createElement(X,{key:e},r.a.createElement(Z,{to:"/bitcoin.explorer/".concat("address","/").concat(n)},n),r.a.createElement(Y,null,c),r.a.createElement(Z,{to:"/bitcoin.explorer/".concat("address","/").concat(a)},a),r.a.createElement(Y,null,z(o)),r.a.createElement(Z,{to:"/bitcoin.explorer/".concat(x,"/").concat(i)},"Link"))}))},et=function(t){var e=t.block,n=e.index,a=e.hash,c=e.timeStamp,o=e.difficulty,i=e.nonce,l=e.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement(L,null,"Block #",n),r.a.createElement(L,null,r.a.createElement(B,null,"Hash:")," ",a),r.a.createElement(L,null,r.a.createElement(B,null,"TimeStamp:")," ",z(c)),r.a.createElement(L,null,r.a.createElement(B,null,"Difficulty:")," ",o),r.a.createElement(L,null,r.a.createElement(B,null,"Nonce:")," ",i),r.a.createElement(tt,{title:"Transactions",headers:["From","Amount","To","Timestamp","See detail"],data:l}))},nt=function(t){function e(){var t,n;Object(j.a)(this,e);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(y.a)(this,(t=Object(w.a)(e)).call.apply(t,[this].concat(r)))).state={block:{amount:0,data:[],difficulty:0,hash:"",index:0,nonce:0,prevHash:"",timeStamp:0},isLoading:!1},n._getBlockData=function(){var t=Object(k.a)(E.a.mark(function t(e){var a,r;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D.a.get("".concat(b,"/").concat(g,"/").concat(e));case 2:a=t.sent,r=a.data,n.setState({block:r,isLoading:!1});case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),n}return Object(S.a)(e,t),Object(O.a)(e,[{key:"componentDidMount",value:function(){var t=this.props.match.params.index;this._getBlockData(t)}},{key:"render",value:function(){return r.a.createElement(et,this.state)}}]),e}(a.Component),at=n(16),rt=n(17),ct=function(t){if("string"===typeof t.data){var e=function(t){try{return JSON.parse(t)}catch(e){console.error(e)}}(t.data);if(null!==e)return"BLOCKCHAIN_RESPONSE"===e.type?e.data:null}},ot=function(t){new WebSocket("ws:js-bitcoin.herokuapp.com").addEventListener("message",function(e){var n=ct(e);null!==n&&void 0!==n&&t(n)})},it=n(38),lt=n.n(it);function st(){var t=Object(i.a)(["\n  & .paginated-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 0;\n\n    & li {\n      margin: 0;\n      border: 1px solid #dadada;\n      background: #fff;\n      color: #768a94;\n\n      &:not(:last-child) {\n        border-right: none;\n      }\n\n      & a {\n        cursor: pointer;\n        display: flex;\n        justify-content: center;\n        padding: 10px 10px;\n        width: 100%;\n        height: 100%;\n        user-select: none;\n      }\n\n      &.selected {\n        background: #3582b4;\n        color: #fff\n      }\n    }\n  }\n"]);return st=function(){return t},t}var ut=l.default.div(st()),dt=function(t){var e=t.pageCount,n=t.onPageChange;return r.a.createElement(ut,null,r.a.createElement(lt.a,{pageCount:e,pageRangeDisplayed:2,marginPagesDisplayed:3,onPageChange:function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(t){var e=t.selected;return n(e+1)}),previousLabel:"Prev",nextLabel:"Next",containerClassName:"paginated-container"}))},mt=function(t){var e=t.title,n=t.headers,a=t.data,c=t.selected,o=t.linkPages,i=t.linkParams;return r.a.createElement($,{title:e,headers:n},a.map(function(t,e){return r.a.createElement(X,{key:e},c.map(function(e,n){return o[n]?r.a.createElement(Z,{to:"/bitcoin.explorer/".concat(o[n],"/").concat(t[i[n]])},t[e]):r.a.createElement(Y,{key:n},"timeStamp"===e?z(t[e]):t[e])}))}))},pt=function(t){var e=t.blocks,n=t.total,a=t.totalPages,c=t.setCurrentPage;return r.a.createElement(r.a.Fragment,null,r.a.createElement(mt,{title:"All Blocks (".concat(n||0,")"),data:e.slice(0,15),headers:["Index","Hash","Difficulty","Amount","TimeStamp"],selected:["index","hash","difficulty","amount","timeStamp"],linkPages:["blocks","blocks"],linkParams:["index","index"]}),r.a.createElement(dt,{pageCount:a,onPageChange:c}))},ft=function(t){function e(){var t,n;Object(j.a)(this,e);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(y.a)(this,(t=Object(w.a)(e)).call.apply(t,[this].concat(r)))).state={blocks:[],currentPage:1,isLoading:!0,total:0,totalPages:0},n.setStateFromSocket=function(t){n.setState(function(e){return Object(rt.a)({},e,{blocks:[].concat(Object(at.a)(t),Object(at.a)(e.blocks)),total:e.total+=1})})},n.getBlocksData=Object(k.a)(E.a.mark(function t(){var e,a,r,c,o,i;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D.a.get("".concat(b,"/").concat(g,"?page=").concat(n.state.currentPage));case 2:e=t.sent,a=e.data,r=a.currentPage,c=a.total,o=a.totalPages,i=a.data,n.setState({blocks:i,currentPage:r,isLoading:!1,total:c,totalPages:o});case 9:case"end":return t.stop()}},t)})),n.setCurrentPage=function(t){n.setState({currentPage:t})},n}return Object(S.a)(e,t),Object(O.a)(e,[{key:"componentDidMount",value:function(){this.getBlocksData(),ot(this.setStateFromSocket)}},{key:"componentDidUpdate",value:function(t,e){e.currentPage!==this.state.currentPage&&this.getBlocksData()}},{key:"render",value:function(){return r.a.createElement(pt,Object.assign({},this.state,{setCurrentPage:this.setCurrentPage}))}}]),e}(a.Component),ht=function(t){var e=t.blocks,n=t.txs;return r.a.createElement(r.a.Fragment,null,r.a.createElement(mt,{title:"Latest Blocks",headers:["Index","Hash","Amount","Difficulty","TimeStamp"],data:e.slice(0,5),selected:["index","hash","amount","difficulty","timeStamp"],linkPages:["blocks","blocks"],linkParams:["index","index"]}),r.a.createElement(mt,{title:"Latest Transactions",headers:["Amount","Transaction ID","TimeStamp"],data:n.slice(0,5),selected:["amount","id","timeStamp"],linkPages:["transactions","transactions"],linkParams:["id","id"]}))},bt=function(t){function e(){var t,n;Object(j.a)(this,e);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(y.a)(this,(t=Object(w.a)(e)).call.apply(t,[this].concat(r)))).state={blocks:[],isLoading:!0,txs:[]},n.setStateFromSocket=function(t){n.setState(function(e){return Object(rt.a)({},e,{blocks:[].concat(Object(at.a)(t),Object(at.a)(e.blocks)),txs:[].concat(Object(at.a)(t[0].data),Object(at.a)(e.txs))})})},n.getHomeData=Object(k.a)(E.a.mark(function t(){var e,a,r,c;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D.a.get("".concat(b,"/").concat(g,"/latest"));case 2:return e=t.sent,a=e.data,t.next=6,D.a.get("".concat(b,"/").concat(x,"/latest"));case 6:r=t.sent,c=r.data,n.setState({blocks:a,isLoading:!1,txs:c});case 9:case"end":return t.stop()}},t)})),n}return Object(S.a)(e,t),Object(O.a)(e,[{key:"componentDidMount",value:function(){this.getHomeData(),ot(this.setStateFromSocket)}},{key:"render",value:function(){return r.a.createElement(ht,this.state)}}]),e}(a.Component),gt=function(t){var e=t.tx,n=e.amount,a=e.from,c=e.id,o=e.timeStamp,i=e.to;return r.a.createElement(r.a.Fragment,null,r.a.createElement(L,null,r.a.createElement(B,null,"Transaction:")," ",c),r.a.createElement(L,null,r.a.createElement(B,null,"Amount:")," ",n),r.a.createElement(L,null,r.a.createElement(B,null,"Timestamp:")," ",z(o)),r.a.createElement(L,null,r.a.createElement(B,null,"From:"),r.a.createElement(N,{to:"/bitcoin.explorer/".concat("address","/").concat(a)},a)),r.a.createElement(L,null,r.a.createElement(B,null,"To:"),r.a.createElement(N,{to:"/bitcoin.explorer/".concat("address","/").concat(i)},i)))},xt=function(t){function e(){var t,n;Object(j.a)(this,e);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(y.a)(this,(t=Object(w.a)(e)).call.apply(t,[this].concat(r)))).state={isLoading:!1,tx:{amount:0,from:"",id:"",timeStamp:0,to:"",txIns:[],txOuts:[]}},n._getTransactionData=function(){var t=Object(k.a)(E.a.mark(function t(e){var a,r;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D.a.get("".concat(b,"/").concat(x,"/").concat(e));case 2:a=t.sent,r=a.data,n.setState({isLoading:!1,tx:r});case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),n}return Object(S.a)(e,t),Object(O.a)(e,[{key:"componentDidMount",value:function(){var t=this.props.match.params.id;this._getTransactionData(t)}},{key:"render",value:function(){return r.a.createElement(gt,this.state)}}]),e}(a.Component),vt=function(t){var e=t.txs,n=t.total,a=t.totalPages,c=t.setCurrentPage;return r.a.createElement(r.a.Fragment,null,r.a.createElement(mt,{title:"All Transactions (".concat(n||0,")"),data:e.slice(0,15),headers:["Amount","Transaction ID","Timestamp"],selected:["amount","id","timeStamp"],linkPages:["transactions","transactions"],linkParams:["id","id"]}),r.a.createElement(dt,{pageCount:a,onPageChange:c}))},Et=function(t){function e(){var t,n;Object(j.a)(this,e);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(y.a)(this,(t=Object(w.a)(e)).call.apply(t,[this].concat(r)))).state={currentPage:1,isLoading:!0,total:0,totalPages:0,txs:[]},n.setStateFromSocket=function(t){n.setState(function(e){return Object(rt.a)({},e,{total:e.total+=1,txs:[].concat(Object(at.a)(t[0].data),Object(at.a)(e.txs))})})},n.getBlocksData=Object(k.a)(E.a.mark(function t(){var e,a,r,c,o,i;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D.a.get("".concat(b,"/").concat(x,"?page=").concat(n.state.currentPage));case 2:e=t.sent,a=e.data,r=a.currentPage,c=a.total,o=a.totalPages,i=a.data,n.setState({currentPage:r,isLoading:!1,total:c,totalPages:o,txs:i});case 9:case"end":return t.stop()}},t)})),n.setCurrentPage=function(t){n.setState({currentPage:t})},n}return Object(S.a)(e,t),Object(O.a)(e,[{key:"componentDidMount",value:function(){this.getBlocksData(),ot(this.setStateFromSocket)}},{key:"componentDidUpdate",value:function(t,e){e.currentPage!==this.state.currentPage&&this.getBlocksData()}},{key:"render",value:function(){return r.a.createElement(vt,Object.assign({},this.state,{setCurrentPage:this.setCurrentPage}))}}]),e}(a.Component);function kt(){var t=Object(i.a)(["\n  width: calc(100% - 50px);\n  height: 100%;\n  transition: all 0.15s ease-in-out;\n  margin-left: 50px;\n  padding: 30px;\n"]);return kt=function(){return t},t}function jt(){var t=Object(i.a)(["\n  opacity: 0;\n  padding-left: 25px;\n  line-height: 50px;\n  transition: opacity 0.1s ease-in-out;\n"]);return jt=function(){return t},t}function Ot(){var t=Object(i.a)(["\n  position: relative;\n  display: block;\n  white-space: nowrap;\n  width: 100%;\n  height: 50px;\n  background: ",";\n  color: ",";\n  transition: all 0.15s ease-in-out;\n\n  &:hover {\n    background: #4c515d;\n    color: #fff;\n  }\n\n  & * {\n    height: 100%;\n    display: inline-block;\n  }\n\n  & i {\n    text-align: center;\n    width: 50px;\n    z-index: 999999;\n\n    &.fas {\n      line-height: 50px;\n    }\n  }\n"]);return Ot=function(){return t},t}function yt(){var t=Object(i.a)(["\n  border: 1px solid #2f343e;\n  position: relative;\n  margin: 0;\n\n  &:not(:last-child) {\n    border-bottom: none;\n  }\n"]);return yt=function(){return t},t}function wt(){var t=Object(i.a)(["\n  overflow: hidden;\n  display: block;\n  list-style-type: none;\n  width: 50px;\n  margin: 0;\n  padding: 0;\n"]);return wt=function(){return t},t}function St(){var t=Object(i.a)(["\n  position: fixed;\n  z-index: 9;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  background: #383e49;\n  color: #9aa3a8;\n  width: 50px;\n  transition: all 0.15s ease-in-out;\n"]);return St=function(){return t},t}function Pt(){var t=Object(i.a)(['\n  position: absolute;\n  z-index: 1;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 50%;\n  right: -13px;\n  width: 25px;\n  height: 25px;\n  background: #fff;\n  border: 1px solid #ddd;\n  border-radius: 50%;\n  font-size: 10px;\n  box-shadow: 0 1px 3px rgba(0,0,0,0.12),\n              0 1px 2px rgba(0,0,0,0.24);\n  transition: width 0.15s ease-in-out;\n\n  &::before {\n    line-height: 25px;\n    content: "\f054";\n  }\n\n  &:hover {\n    box-shadow: 0 10px 20px rgba(0,0,0,0.19),\n                0 6px 6px rgba(0,0,0,0.23);\n  }\n'],['\n  position: absolute;\n  z-index: 1;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 50%;\n  right: -13px;\n  width: 25px;\n  height: 25px;\n  background: #fff;\n  border: 1px solid #ddd;\n  border-radius: 50%;\n  font-size: 10px;\n  box-shadow: 0 1px 3px rgba(0,0,0,0.12),\n              0 1px 2px rgba(0,0,0,0.24);\n  transition: width 0.15s ease-in-out;\n\n  &::before {\n    line-height: 25px;\n    content: "\\f054";\n  }\n\n  &:hover {\n    box-shadow: 0 10px 20px rgba(0,0,0,0.19),\n                0 6px 6px rgba(0,0,0,0.23);\n  }\n']);return Pt=function(){return t},t}function Dt(){var t=Object(i.a)(['\n  display: none;\n\n  &:checked {\n    & ~ nav {\n      width: 250px;\n\n      & label[class="menu_state"] i::before {\n        margin-right: 3px;\n        content: "\f053";\n      }\n\n      & ul {\n        width: 100%;\n        & li a i {\n          border-right: 1px solid #2f343e;\n        }\n        & li a span {\n          opacity: 1;\n          transition: opacity 0.25s ease-in-out;\n        }\n      }\n    }\n\n    & ~ main {\n      margin-left: 250px;\n      width: calc(100% - 250px);\n    }\n  }\n'],['\n  display: none;\n\n  &:checked {\n    & ~ nav {\n      width: 250px;\n\n      & label[class="menu_state"] i::before {\n        margin-right: 3px;\n        content: "\\f053";\n      }\n\n      & ul {\n        width: 100%;\n        & li a i {\n          border-right: 1px solid #2f343e;\n        }\n        & li a span {\n          opacity: 1;\n          transition: opacity 0.25s ease-in-out;\n        }\n      }\n    }\n\n    & ~ main {\n      margin-left: 250px;\n      width: calc(100% - 250px);\n    }\n  }\n']);return Dt=function(){return t},t}var Ct=l.default.input(Dt()),At=l.default.i(Pt()),Ft=l.default.nav(St()),Tt=l.default.ul(wt()),Lt=l.default.li(yt()),Bt=Object(l.default)(C.a)(Ot(),function(t){return t.isActive&&"#4c515d"},function(t){return t.isActive?"#fff":"#9aa3a8"}),Nt=l.default.span(jt()),Ht=l.default.main(kt()),_t=function(t){function e(){var t,n;Object(j.a)(this,e);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(y.a)(this,(t=Object(w.a)(e)).call.apply(t,[this].concat(r)))).state={menuStatus:!0},n.handleMenuStatus=function(){var t=n.state.menuStatus;n.setState({menuStatus:!t})},n}return Object(S.a)(e,t),Object(O.a)(e,[{key:"render",value:function(){var t=this.props.children,e=this.state.menuStatus;return"undefined"===typeof window?null:r.a.createElement(r.a.Fragment,null,r.a.createElement(Ct,{type:"checkbox",checked:e,readOnly:!0}),r.a.createElement(Ft,null,r.a.createElement("label",{className:"menu_state",onClick:this.handleMenuStatus},r.a.createElement(At,{className:"fa"})),r.a.createElement(Tt,null,r.a.createElement(Lt,null,r.a.createElement(Bt,{isActive:"/"===window.location.pathname,to:"/bitcoin.explorer/"},r.a.createElement("i",{className:"fas fa-home"}),r.a.createElement(Nt,null,"Home"))),r.a.createElement(Lt,null,r.a.createElement(Bt,{isActive:window.location.pathname==="/".concat(g),to:"/bitcoin.explorer/".concat(g)},r.a.createElement("i",{className:"fas fa-square"}),r.a.createElement(Nt,null,"Blocks"))),r.a.createElement(Lt,null,r.a.createElement(Bt,{isActive:window.location.pathname==="/".concat(x),to:"/bitcoin.explorer/".concat(x)},r.a.createElement("i",{className:"fas fa-dollar-sign"}),r.a.createElement(Nt,null,"Transactions"))))),r.a.createElement(Ht,null,t))}}]),e}(a.Component);function zt(){var t=Object(i.a)(["\n  background-color: #fafafa;\n  min-height: 100vh;\n"]);return zt=function(){return t},t}var Mt=l.default.div(zt()),It=function(){return r.a.createElement(p.a,null,r.a.createElement(Mt,null,r.a.createElement(_t,null,r.a.createElement(f.a,null,r.a.createElement(h.a,{component:bt,exact:!0,path:"/bitcoin.explorer/"}),r.a.createElement(h.a,{component:ft,exact:!0,path:"/bitcoin.explorer/".concat(g)}),r.a.createElement(h.a,{component:Et,exact:!0,path:"/bitcoin.explorer/".concat(x)}),r.a.createElement(h.a,{component:nt,path:"/bitcoin.explorer/".concat(g,"/:index")}),r.a.createElement(h.a,{component:xt,path:"/bitcoin.explorer/".concat(x,"/:id")}),r.a.createElement(h.a,{component:_,path:"/bitcoin.explorer/".concat("address","/:address")})))))};function Jt(){var t=Object(i.a)(["\n  ",";\n  ",";\n  a {\n    text-decoration: none !important;\n  }\n"]);return Jt=function(){return t},t}var Ut=Object(l.createGlobalStyle)(Jt(),u.a,m),Rt={boxShadow:"0 7px 14px rgba(50,50,93,.1), 0 3px 6px rgba(0,0,0,.08)",textEllipsis:{overflow:"hidden","text-overflow":"ellipsis","white-space":"nowrap"}},qt=function(){return r.a.createElement(l.ThemeProvider,{theme:Rt},r.a.createElement(r.a.Fragment,null,r.a.createElement(Ut,null),r.a.createElement(It,null)))};o.a.render(r.a.createElement(qt,null),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.999f4d0b.chunk.js.map