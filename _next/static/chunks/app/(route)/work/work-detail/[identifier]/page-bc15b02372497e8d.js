(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[780],{5959:function(e,l,s){Promise.resolve().then(s.bind(s,7277))},5785:function(e,l,s){"use strict";var t=s(7437),a=s(2265);l.Z=e=>{let{icon:l,bgColor:s,fontColor:c,fontSize:i,context:r}=e;return(0,t.jsxs)("div",{className:"flex justify-center items-center gap-1 px-2 py-1 rounded-3xl ".concat(s," ").concat(c," ").concat(i),children:[l&&(0,t.jsx)("div",{className:"flex justify-center items-center",children:a.createElement(l,{size:"1em"})}),(0,t.jsx)("p",{className:"max-sm:text-xs",children:r})]})}},7277:function(e,l,s){"use strict";s.d(l,{WorkDetailPage:function(){return p}});var t=s(7437),a=s(2265),c=s(6648),i=s(4839),r=s(6164);function n(){for(var e=arguments.length,l=Array(e),s=0;s<e;s++)l[s]=arguments[s];return(0,r.m6)((0,i.W)(l))}let d=e=>{let{className:l,children:s}=e;return(0,t.jsx)("div",{className:n("flex justify-center items-center",l),children:s})},x=e=>{let{className:l,children:s}=e;return(0,t.jsx)("div",{className:n("w-2/3 max-sm:w-full max-sm:px-3",l),children:s})},m=e=>{let{className:l,children:s}=e;return(0,t.jsx)("div",{className:n("flex flex-row w-full",l),children:s})},o=e=>{let{className:l,children:s}=e;return(0,t.jsx)("div",{className:n("w-1/2",l),children:s})},h=e=>{let{className:l,children:s}=e;return(0,t.jsx)("p",{className:n("text-3xl font-medium max-sm:text-base",l),children:s})};var j=s(5785),u=s(9522),f=s(9726);let p=e=>{let{params:l}=e,s=u.m[l.identifier],[i,r]=(0,a.useState)(0),n=s.detail.func,p=Object.keys(s.detail.func),b=e=>{let l;"left"===e?r((l=i-1)<0?p.length-1:l):"right"===e?r(l=(i+1)%p.length):r(parseInt(e))},v=e=>{if(""===e)return alert("준비되지 않았거나 실행할 수 없습니다.");window.open(e,"_blank")};return(0,t.jsxs)(d,{className:"flex-col w-full p-6 max-sm:p-3 text-gray-800",children:[(0,t.jsx)("div",{className:"flex justify-center items-center rounded-3xl overflow-hidden mb-8 shadow-lg max-sm:w-96",style:{width:"930px",height:"580px"},children:(0,t.jsx)(c.default,{src:"workall/detail_main/".concat(s.pid,"_detail_main.png"),alt:"",width:0,height:0,className:"w-full h-full hover:scale-110 transition"})}),(0,t.jsxs)(x,{children:[(0,t.jsx)(h,{className:"text-4xl font-bold mb-4",children:s.title}),(0,t.jsx)(N,{}),(0,t.jsxs)(m,{className:"gap-6 max-sm:flex-col",children:[(0,t.jsx)(o,{className:"max-sm:w-full",children:(0,t.jsx)("table",{className:"w-full text-left",children:(0,t.jsx)("tbody",{children:Object.keys(s.detail.header).map((e,l)=>(0,t.jsxs)("tr",{className:"align-top",children:[(0,t.jsx)("th",{className:"pr-4 pb-2 font-medium break-keep",children:s.detail.header[e].title}),(0,t.jsx)("td",{className:"pb-2",children:s.detail.header[e].content.map((e,l)=>(0,t.jsx)("p",{children:e},l))})]},l))})})}),(0,t.jsxs)(o,{className:"max-sm:w-full",children:[(0,t.jsx)("p",{className:"text-xl font-semibold mb-2",children:"개요"}),s.detail.long_summary.map((e,l)=>(0,t.jsx)("p",{className:"mb-2",children:e},l))]})]})]}),(0,t.jsxs)(x,{className:"mt-8",children:[(0,t.jsx)(h,{className:"text-3xl font-bold mb-4",children:"구현 기능"}),(0,t.jsx)(N,{}),(0,t.jsx)("table",{className:"w-full text-left mb-4",children:(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{className:"align-top",children:[(0,t.jsx)("th",{className:"pr-2 pb-2 font-medium w-12",children:"명칭"}),(0,t.jsx)("td",{className:"pb-2",children:n[p[i]].name})]}),(0,t.jsxs)("tr",{className:"align-top",children:[(0,t.jsx)("th",{className:"pr-2 pb-2 font-medium",children:"설명"}),(0,t.jsx)("td",{className:"pb-2",children:n[p[i]].desc})]}),(0,t.jsxs)("tr",{className:"align-top",children:[(0,t.jsx)("th",{className:"pr-2 pb-2 font-medium",children:"기능"}),(0,t.jsx)("td",{className:"pb-2",children:n[p[i]].func.map((e,l)=>(0,t.jsx)("p",{children:""===e?"-":"\xb7 "+e},l))})]})]})}),(0,t.jsxs)("div",{className:"relative flex justify-center items-center mb-6",children:[(0,t.jsx)("div",{className:"absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer",onClick:()=>b("left"),children:(0,t.jsx)(f.yKR,{size:30,className:"text-gray-600 hover:text-black"})}),(0,t.jsx)(c.default,{src:n[p[i]].ui?"/workall/".concat(s.pid,"/").concat(p[i],".png"):"",alt:s.pid,width:1200,height:580,className:"rounded-xl shadow-lg"}),(0,t.jsx)("div",{className:"absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer",onClick:()=>b("right"),children:(0,t.jsx)(f.UKx,{size:30,className:"text-gray-600 hover:text-black"})})]}),(0,t.jsx)("div",{className:"flex justify-center items-center gap-2",children:p.map((e,l)=>(0,t.jsx)("div",{className:"cursor-pointer",onClick:()=>b(l.toString()),children:l===i?(0,t.jsx)(f.O6Y,{size:15,className:"text-gray-600"}):(0,t.jsx)(f.Vjj,{size:15,className:"text-gray-400"})},l))})]}),0!==Object.keys(s.detail.trouble).length&&(0,t.jsxs)(x,{className:"mt-8",children:[(0,t.jsx)(h,{className:"text-3xl font-bold mb-4",children:"트러블 슈팅"}),(0,t.jsx)(N,{}),Object.keys(s.detail.trouble).map((e,l)=>{var a,c,i,r,n,d;return(0,t.jsxs)("div",{className:"flex flex-col gap-4 mb-4",children:[(0,t.jsx)("p",{className:"text-xl font-medium",children:e}),(0,t.jsxs)("div",{className:"flex flex-col",children:[(0,t.jsx)("p",{className:"text-lg",children:"문제점"}),s.detail.trouble[e].problem.map((e,l)=>(0,t.jsxs)("p",{className:"pl-4",children:["\xb7 ",e]},l))]}),(0,t.jsxs)("div",{className:"flex flex-col",children:[(0,t.jsx)("p",{className:"text-lg",children:(null===(a=s.detail.trouble[e])||void 0===a?void 0:a.solve)!==null&&"해결 방안"}),null===(i=s.detail.trouble[e])||void 0===i?void 0:null===(c=i.solve)||void 0===c?void 0:c.map((e,l)=>(0,t.jsxs)("p",{className:"pl-4",children:["\xb7 ",e]},l))]}),(0,t.jsxs)("div",{className:"flex flex-col",children:[(0,t.jsx)("p",{className:"text-lg",children:(null===(r=s.detail.trouble[e])||void 0===r?void 0:r.result)!==null&&"결과"}),null===(d=s.detail.trouble[e])||void 0===d?void 0:null===(n=d.result)||void 0===n?void 0:n.map((e,l)=>(0,t.jsxs)("p",{className:"pl-4",children:["\xb7 ",e]},l))]})]},l)})]}),(0,t.jsxs)(x,{className:"mt-8",children:[(0,t.jsx)(h,{className:"text-3xl font-bold mb-4",children:"회고"}),(0,t.jsx)(N,{}),s.detail.review.map((e,l)=>(0,t.jsx)("p",{className:"mb-4",children:e},l))]}),(0,t.jsxs)(x,{className:"mt-8 mb-6",children:[(0,t.jsx)(h,{className:"text-3xl font-bold mb-4",children:"링크"}),(0,t.jsx)(N,{}),(0,t.jsxs)(m,{className:"gap-4",children:[(0,t.jsx)("div",{className:" ".concat(s.detail.github?"cursor-pointer":"cursor-not-allowed"),onClick:()=>v(s.detail.github),children:(0,t.jsx)(j.Z,{icon:f.s2,iconSize:"50",bgColor:"bg-black",fontColor:"text-white",fontSize:"text-base",context:"Github 레포지토리 "})}),(0,t.jsx)("div",{className:" ".concat(s.detail.demo?"cursor-pointer":"cursor-not-allowed"),onClick:()=>v(s.detail.demo),children:(0,t.jsx)(j.Z,{icon:f.$XF,iconSize:"50",bgColor:"bg-blue-500",fontColor:"text-white",fontSize:"text-base",context:"Demo 사이트 "})})]})]})]})},N=()=>(0,t.jsx)("div",{className:"w-full border-b-2 border-gray-300 my-6"})}},function(e){e.O(0,[217,49,868,975,971,23,744],function(){return e(e.s=5959)}),_N_E=e.O()}]);