(this.webpackJsonptmd=this.webpackJsonptmd||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a(26)},,,,,function(e,t,a){},,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(9),c=a.n(s),r=(a(16),a(6)),l=a(2),o=a(3),u=a(1),m=a(5),h=a(4),d=a(7),v=a.n(d),b=(a(20),{}),p=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={num:e.value},n.name=e.name,n.total=e.callback.total,n.partial=e.callback.partial,n.partial(n.name,n.state.num),n}return Object(o.a)(a,[{key:"changeNum",value:function(e){var t=this.state.num+this.total(e,this.state.num);this.partial(this.name,t),this.setState({num:t})}},{key:"render",value:function(){return i.a.createElement("tr",null,i.a.createElement("td",{className:"propItem"},i.a.createElement("div",{className:"propName"},this.name),i.a.createElement("div",{className:"propCtrl"},i.a.createElement("button",{className:"propBtn propBtn-left",value:"sub",onClick:this.changeNum.bind(this)}," - "),i.a.createElement("div",{className:"propNum"},this.state.num),i.a.createElement("button",{className:"propBtn propBtn-right",value:"add",onClick:this.changeNum.bind(this)}," + "))))}}]),a}(i.a.Component),f=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).items=e.items,n.submit=e.callback.submit,n.name=e.name,n.callback={total:e.callback.cost,partial:n.handleCost.bind(Object(u.a)(n))},n.name in b||(b[n.name]={}),n.state=b[n.name],n.res=n.items.map((function(e){return i.a.createElement(p,{name:e,value:e in n.state?n.state[e]:0,key:v()(e),callback:n.callback})})),n}return Object(o.a)(a,[{key:"componentWillUnmount",value:function(){for(var e in this.state)b[this.name][e]=this.state[e];this.submit(this.state,this.name)}},{key:"handleCost",value:function(e,t){this.setState(Object(r.a)({},e,t)),this.submit(this.state,this.name)}},{key:"render",value:function(){return i.a.createElement("div",{className:"propArea"},i.a.createElement("div",{className:"title"},a.transName[this.name]),i.a.createElement("table",null,i.a.createElement("tbody",null,this.res)))}}]),a}(i.a.Component);function g(e){return i.a.createElement(f,{items:["\u4f1a\u8ba1","\u4eba\u7c7b\u5b66","\u8003\u53e4\u5b66","\u5efa\u7b51\u5b66","\u827a\u672f\u53f2","\u751f\u7269\u5b66","\u5bc6\u7801\u5b66","\u5730\u8d28\u5b66","\u514b\u82cf\u9c81\u795e\u8bdd","\u5386\u53f2","\u8bed\u8a00","\u6cd5\u5f8b","\u6587\u732e\u67e5\u9605","\u533b\u5b66","\u795e\u79d8\u5b66","\u7269\u7406\u5b66","\u795e\u5b66"],callback:e.callback,name:"Academic"})}function E(e){return i.a.createElement(f,{items:["\u5bdf\u8a00\u89c2\u8272","\u8bae\u4ef7","\u5b98\u50da","\u8b66\u65b9\u4ea4\u8c08","\u4fe1\u8a89","\u5949\u627f","\u5ba1\u8baf","\u5a01\u80c1","\u53e3\u8ff0\u91c7\u8bbf","\u5b89\u629a","\u5e95\u5c42\u793e\u4f1a"],callback:e.callback,name:"Social"})}function k(e){return i.a.createElement(f,{items:["\u8fd0\u52a8","\u85cf\u533f","\u4f2a\u88c5","\u9a7e\u9a76","\u7535\u5668\u7ef4\u4fee","\u7206\u7834","\u5077\u7a83","\u67aa\u68b0","\u6025\u6551","\u9003\u8131","\u5065\u5eb7","\u50ac\u7720","\u673a\u68b0\u7ef4\u4fee","\u5bfc\u822a","\u7269\u54c1\u6574\u5907","\u7cbe\u795e\u5206\u6790","\u9a91\u672f","\u5fc3\u667a","\u575a\u6bc5","\u640f\u51fb","\u8b66\u89c9","\u8ffd\u8e2a","\u6f5c\u884c","\u8fd1\u6218\u6b66\u5668"],callback:e.callback,name:"Normal"})}f.transName={Academic:"\u5b66\u672f\u80fd\u529b",Social:"\u793e\u4ea4\u80fd\u529b",Normal:"\u666e\u901a\u80fd\u529b"};a(21);function N(){return i.a.createElement("div",{className:"topButton",onClick:function(){window.scrollTo(0,0)}})}var w=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={isShow:!0,num:e.num},n.change=e.change,n.name=["\u57fa\u672c\u4fe1\u606f","\u5b66\u672f\u80fd\u529b","\u793e\u4ea4\u80fd\u529b","\u666e\u901a\u80fd\u529b","\u7ed3\u679c"].map((function(e,t){return i.a.createElement("div",{className:"jumpItems",onClick:function(e){n.change(t)}},e)})),n}return Object(o.a)(a,[{key:"handleResize",value:function(e){e.innerWidth<=1050?this.setState({isShow:!1}):this.setState({isShow:!0})}},{key:"componentWillMount",value:function(){window.addEventListener("resize",this.handleResize.bind(this))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize.bind(this))}},{key:"componentWillReceiveProps",value:function(e){this.setState({num:e.num})}},{key:"render",value:function(){return window.innerWidth<=1050&&this.state.isShow?i.a.createElement("div",null):i.a.createElement("div",{className:"jump"},this.name,i.a.createElement("div",{className:"jumpPoint"},"\u5269\u4f59\u603b\u70b9\u6570",i.a.createElement("div",{className:"jumpPointNum"},this.state.num)))}}]),a}(i.a.Component),y=(i.a.Component,a(10)),j=(a(22),a(23),function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={data:e.data},n.handleData=n.handleData.bind(Object(u.a)(n)),n}return Object(o.a)(a,[{key:"componentWillReceiveProps",value:function(e){this.setState({data:e.data})}},{key:"handleData",value:function(e){if(e in this.state.data){var t=[i.a.createElement("div",{className:"resultTitle"},a.transName[e])],n=this.state.data[e];for(var s in n)t.push(i.a.createElement("div",{className:"resultItems",id:v()(s)},i.a.createElement("p",null,s),i.a.createElement("p",{className:"resultItemsNum"},n[s])));return t}}},{key:"render",value:function(){var e=Object(y.a)({},this.state.data.Basic);return i.a.createElement("div",{className:"result"},i.a.createElement("div",{className:"title"},"\u7ed3\u679c"),i.a.createElement("div",{className:"resultBasic"},i.a.createElement("div",{className:"resultBasicTable"},i.a.createElement("div",{className:"resultBasicItems"},"\u59d3\u540d\uff1a",i.a.createElement("p",null,e.name)),i.a.createElement("div",{className:"resultBasicItems"},"\u804c\u4e1a\uff1a",i.a.createElement("p",null,e.occupation)),i.a.createElement("div",{className:"resultBasicItems"},"\u6027\u683c\uff1a",i.a.createElement("p",null,e.character))),i.a.createElement("img",{src:e.image})),i.a.createElement("div",{className:"resultTable"},this.handleData("Academic"),this.handleData("Social"),this.handleData("Normal")),i.a.createElement("div",{className:"backgroundStory"},i.a.createElement("h2",null,"\u80cc\u666f\u6545\u4e8b"),i.a.createElement("article",null,e.background)))}}]),a}(i.a.Component));j.transName={Academic:"\u5b66\u672f\u80fd\u529b",Social:"\u793e\u4ea4\u80fd\u529b",Normal:"\u666e\u901a\u80fd\u529b"};var S=j,O=(a(24),function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var i;return Object(l.a)(this,a),(i=t.call(this,e)).state=a.temp,i.submit=e.submit,i.fileInput=Object(n.createRef)(),i.handleSubmit=i.handleSubmit.bind(Object(u.a)(i)),i.handleImage=i.handleImage.bind(Object(u.a)(i)),i}return Object(o.a)(a,[{key:"handleSubmit",value:function(e){"textarea"==e.target.type&&(e.target.style.height="auto",e.target.style.height=e.target.scrollHeight+"px"),this.setState(Object(r.a)({},e.target.name,e.target.value))}},{key:"handleImage",value:function(e){var t=e.target.files[0]?window.URL.createObjectURL(e.target.files[0]):" ";this.fileInput.current.src=t,this.setState({image:t})}},{key:"componentWillUnmount",value:function(){for(var e in this.state)a.temp[e]=this.state[e];this.submit(this.state,"Basic")}},{key:"geneInput",value:function(e,t){var a,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return 0===n&&(a=i.a.createElement("input",{className:"input",name:t,value:this.state[t],onChange:this.handleSubmit})),1===n&&(a=i.a.createElement("textarea",{className:"input inputTextarea",name:t,value:this.state[t],onChange:this.handleSubmit})),i.a.createElement("div",{className:"inputField",key:v()(t)},i.a.createElement("div",{className:"itemName"},e,"\uff1a"),a)}},{key:"render",value:function(){return i.a.createElement("div",{className:"basicInput"},i.a.createElement("div",{className:"title"},"\u57fa\u672c\u4fe1\u606f"),[this.geneInput("\u8c03\u67e5\u5458\u59d3\u540d","name"),this.geneInput("\u804c\u4e1a","occupation"),this.geneInput("\u6027\u683c\u7279\u5f81","character"),this.geneInput("\u80cc\u666f\u6545\u4e8b","background",1)],i.a.createElement("div",{className:"inputField"},i.a.createElement("div",{className:"itemName"},"\u5934\u50cf\uff1a"),i.a.createElement("div",{className:"input imgInput"},i.a.createElement("p",null,"\u70b9\u51fb\u6b64\u5904\u4e0a\u4f20\u56fe\u7247"),i.a.createElement("input",{type:"file",accept:"image/*",id:"rawImgInput",name:"image",onChange:this.handleImage})),i.a.createElement("img",{id:"preview",ref:this.fileInput})))}}]),a}(i.a.Component));O.temp={name:"",occupation:"",character:"",background:"",image:" "};var I=O,C=(a(25),function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={ser:0,point:20,isPress:!1},n.callback={cost:n.changePoint.bind(Object(u.a)(n)),submit:n.handleSubmit.bind(Object(u.a)(n))},n.pageNum=5,n.handleKeyPress=n.handleKeyPress.bind(Object(u.a)(n)),n}return Object(o.a)(a,[{key:"componentWillMount",value:function(){var e=this;window.addEventListener("keydown",(function(t){return e.handleKeyPress(!0,t)})),window.addEventListener("keyup",(function(t){return e.handleKeyPress(!1,t)}))}},{key:"componentWillUnmount",value:function(){var e=this;window.removeEventListener("keydown",(function(t){return e.handleKeyPress(!0,t)})),window.removeEventListener("keyup",(function(t){return e.handleKeyPress(!1,t)}))}},{key:"handleKeyPress",value:function(e,t){e?this.state.isPress||17!=t.keyCode||this.setState({isPress:!0}):this.setState({isPress:!1})}},{key:"changeSer",value:function(e){window.scrollTo(0,0),this.state.ser>this.pageNum||this.state.ser<0||("add"===e.target.value&&this.setState({ser:this.state.ser+1}),"sub"===e.target.value&&this.setState({ser:this.state.ser-1}))}},{key:"jumpSer",value:function(e){window.scrollTo(0,0),this.setState({ser:e})}},{key:"changePoint",value:function(e,t){var a=this.state.isPress,n=this.state.point;if("add"===e.target.value){if(0===this.state.point)return 0;var i=a?n>10?10:n:1;return this.setState({point:n-i}),i}if("sub"===e.target.value){if(0===t)return 0;var s=a?t>10?10:t:1;return this.setState({point:n+s}),-s}}},{key:"handleSubmit",value:function(e,t){this.setState(Object(r.a)({},t,e))}},{key:"render",value:function(){var e=[i.a.createElement(I,{submit:this.handleSubmit.bind(this)}),i.a.createElement(g,{callback:this.callback}),i.a.createElement(E,{callback:this.callback}),i.a.createElement(k,{callback:this.callback}),i.a.createElement(S,{data:this.state})];return i.a.createElement("div",{className:"App"},i.a.createElement(w,{change:this.jumpSer.bind(this),num:this.state.point}),i.a.createElement("div",{className:"inputArea"},e[this.state.ser]),i.a.createElement("div",{className:"buttonArea"},this.state.ser>0&&i.a.createElement("button",{className:"button button-left",value:"sub",onClick:this.changeSer.bind(this)},"\u4e0a\u4e00\u6b65"),this.state.ser<4&&i.a.createElement("button",{className:"button button-right",value:"add",onClick:this.changeSer.bind(this)},"\u4e0b\u4e00\u6b65")),i.a.createElement(N,null))}}]),a}(i.a.Component)),P=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function W(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(C,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="./service-worker.js";P?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):W(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):W(t,e)}))}}()}],[[11,1,2]]]);
//# sourceMappingURL=main.7d1811e5.chunk.js.map