(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[393],{754:function(e,t,r){Promise.resolve().then(r.bind(r,7408))},7408:function(e,t,r){"use strict";r.d(t,{WorkAllPage:function(){return u}});var n=r(7437),s=r(6648),l=r(6463),i=r(5785),a=r(9726),o=r(9522),c=r(6523);let u=()=>{let e=(0,l.useRouter)();return(0,n.jsxs)("div",{className:"flex flex-col justify-center items-center w-full h-full pt-6 max-sm:p-3",children:[(0,n.jsx)("div",{className:"flex w-full max-w-6xl",children:(0,n.jsxs)("div",{className:"flex justify-between items-end w-full mb-3 sm:px-6",children:[(0,n.jsxs)("div",{className:"flex flex-col",children:[(0,n.jsxs)("div",{className:"flex justify-start items-center cursor-pointer text-gray-500 hover:text-black hover:font-medium transition",onClick:()=>{e.back()},children:[(0,n.jsx)(a.yKR,{}),(0,n.jsx)("p",{className:"max-sm:text-sm",children:"메인으로"})]}),(0,n.jsx)("p",{className:"text-3xl font-medium max-sm:text-xl",children:"모든 프로젝트"})]}),(0,n.jsx)("p",{className:"text-sm max-sm:text-xs text-gray-600",children:"이 곳에서 모든 프로젝트를 보실 수 있습니다."})]})}),(0,n.jsx)("div",{className:"grid grid-cols-4 gap-6 max-sm:grid-cols-1 p-6 w-full max-w-6xl place-items-center",children:Object.keys(o.m).map((e,t)=>{let r=o.m[e];return(0,n.jsx)(m,{title:r.title,pid:r.pid,summary:r.summary,stacks:r.stacks,demo:!!r.detail.demo},t)})})]})},m=e=>{let{pid:t,title:r,summary:o,stacks:u,demo:m}=e,f=(0,l.useRouter)();return(0,n.jsxs)("div",{className:"relative flex flex-col cursor-pointer ",style:{width:"259px"},onClick:()=>{f.push(c.O+"/work/work-detail/"+t)},children:[m&&(0,n.jsx)("div",{className:"absolute flex justify-end items-center w-full -translate-x-2 -translate-y-3 z-40",children:(0,n.jsx)(i.Z,{icon:a.s2,iconSize:"50",bgColor:"bg-green-500",fontColor:"text-white",fontSize:"text-sm",context:"실행 가능"})}),(0,n.jsx)("div",{className:"overflow-hidden shadow-lg transition-transform transform rounded-xl",style:{width:"259px",height:"259px"},children:(0,n.jsx)(s.default,{src:"workall/unit/".concat(t,"_unit.svg"),alt:r,width:0,height:0,className:"w-full h-full hover:scale-110 transition"})}),(0,n.jsx)("div",{className:"flex justify-start items-center gap-2 mt-3",children:u.map((e,t)=>(0,n.jsx)(s.default,{src:"stack/".concat(e,".svg"),alt:e,width:20,height:20},t))}),(0,n.jsx)("p",{className:"text-base font-medium  mt-2 max-sm:text-sm truncate",children:r}),(0,n.jsx)("p",{className:"text-sm font-light text-gray-600 max-sm:text-xs truncate",children:o})]})}},6523:function(e,t,r){"use strict";r.d(t,{O:function(){return n}});let n="/portfolio"},6463:function(e,t,r){"use strict";var n=r(1169);r.o(n,"useRouter")&&r.d(t,{useRouter:function(){return n.useRouter}})},1810:function(e,t,r){"use strict";r.d(t,{w_:function(){return u}});var n=r(2265),s={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=n.createContext&&n.createContext(s),i=["attr","size","title"];function a(){return(a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach(function(t){var n,s;n=t,s=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(n))in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function u(e){return t=>n.createElement(m,a({attr:c({},e.attr)},t),function e(t){return t&&t.map((t,r)=>n.createElement(t.tag,c({key:r},t.attr),e(t.child)))}(e.child))}function m(e){var t=t=>{var r,{attr:s,size:l,title:o}=e,u=function(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}(e,i),m=l||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,s,u,{className:r,style:c(c({color:e.color||t.color},t.style),e.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),o&&n.createElement("title",null,o),e.children)};return void 0!==l?n.createElement(l.Consumer,null,e=>t(e)):t(s)}}},function(e){e.O(0,[217,648,344,971,23,744],function(){return e(e.s=754)}),_N_E=e.O()}]);