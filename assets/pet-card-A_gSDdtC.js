import{g as b,a as y,s as h,b as g,u as S,c as M,_ as p,j as r,h as C,e as $,f as j,r as so,E as io,F as _,H as Z,n as ro,o as ao,C as lo,I as co,J as po}from"./index-B0Gbrs0W.js";import{B as uo,M as mo,u as q,F as go}from"./Modal-CtmRLc4X.js";import{u as xo,r as fo}from"./pet-actions-DXBBJ53h.js";import{C as ho}from"./Card-CxPAX7l9.js";import{T as v,c as E}from"./Button-Dn9MVDW7.js";import{P as Q,e as Co,c as vo,F as bo}from"./header-CgT53OD4.js";function ko(o){return y("MuiCardContent",o)}b("MuiCardContent",["root"]);const yo=["className","component"],So=o=>{const{classes:e}=o;return $({root:["root"]},ko,e)},Mo=h("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(o,e)=>e.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),$o=g.forwardRef(function(e,t){const n=S({props:e,name:"MuiCardContent"}),{className:s,component:i="div"}=n,a=M(n,yo),l=p({},n,{component:i}),c=So(l);return r.jsx(Mo,p({as:i,className:C(c.root,s),ownerState:l,ref:t},a))});function Do(o){return y("MuiCardMedia",o)}b("MuiCardMedia",["root","media","img"]);const wo=["children","className","component","image","src","style"],Wo=o=>{const{classes:e,isMediaComponent:t,isImageComponent:n}=o;return $({root:["root",t&&"media",n&&"img"]},Do,e)},jo=h("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o,{isMediaComponent:n,isImageComponent:s}=t;return[e.root,n&&e.media,s&&e.img]}})(({ownerState:o})=>p({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},o.isMediaComponent&&{width:"100%"},o.isImageComponent&&{objectFit:"cover"})),No=["video","audio","picture","iframe","img"],Po=["picture","img"],Ro=g.forwardRef(function(e,t){const n=S({props:e,name:"MuiCardMedia"}),{children:s,className:i,component:a="div",image:l,src:c,style:u}=n,d=M(n,wo),m=No.indexOf(a)!==-1,x=!m&&l?p({backgroundImage:`url("${l}")`},u):u,f=p({},n,{component:a,isMediaComponent:m,isImageComponent:Po.indexOf(a)!==-1}),k=Wo(f);return r.jsx(jo,p({className:C(k.root,i),as:a,role:!m&&l?"img":void 0,ref:t,style:x,ownerState:f,src:m?l||c:void 0},d,{children:s}))});function Bo(o){return y("MuiDialog",o)}const X=b("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),To=g.createContext({}),Fo=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],Io=h(uo,{name:"MuiDialog",slot:"Backdrop",overrides:(o,e)=>e.backdrop})({zIndex:-1}),Ao=o=>{const{classes:e,scroll:t,maxWidth:n,fullWidth:s,fullScreen:i}=o,a={root:["root"],container:["container",`scroll${j(t)}`],paper:["paper",`paperScroll${j(t)}`,`paperWidth${j(String(n))}`,s&&"paperFullWidth",i&&"paperFullScreen"]};return $(a,Bo,e)},Go=h(mo,{name:"MuiDialog",slot:"Root",overridesResolver:(o,e)=>e.root})({"@media print":{position:"absolute !important"}}),Oo=h("div",{name:"MuiDialog",slot:"Container",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.container,e[`scroll${j(t.scroll)}`]]}})(({ownerState:o})=>p({height:"100%","@media print":{height:"auto"},outline:0},o.scroll==="paper"&&{display:"flex",justifyContent:"center",alignItems:"center"},o.scroll==="body"&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&::after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})),zo=h(Q,{name:"MuiDialog",slot:"Paper",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.paper,e[`scrollPaper${j(t.scroll)}`],e[`paperWidth${j(String(t.maxWidth))}`],t.fullWidth&&e.paperFullWidth,t.fullScreen&&e.paperFullScreen]}})(({theme:o,ownerState:e})=>p({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},e.scroll==="paper"&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},e.scroll==="body"&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!e.maxWidth&&{maxWidth:"calc(100% - 64px)"},e.maxWidth==="xs"&&{maxWidth:o.breakpoints.unit==="px"?Math.max(o.breakpoints.values.xs,444):`max(${o.breakpoints.values.xs}${o.breakpoints.unit}, 444px)`,[`&.${X.paperScrollBody}`]:{[o.breakpoints.down(Math.max(o.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}},e.maxWidth&&e.maxWidth!=="xs"&&{maxWidth:`${o.breakpoints.values[e.maxWidth]}${o.breakpoints.unit}`,[`&.${X.paperScrollBody}`]:{[o.breakpoints.down(o.breakpoints.values[e.maxWidth]+32*2)]:{maxWidth:"calc(100% - 64px)"}}},e.fullWidth&&{width:"calc(100% - 64px)"},e.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${X.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})),Eo=g.forwardRef(function(e,t){const n=S({props:e,name:"MuiDialog"}),s=q(),i={enter:s.transitions.duration.enteringScreen,exit:s.transitions.duration.leavingScreen},{"aria-describedby":a,"aria-labelledby":l,BackdropComponent:c,BackdropProps:u,children:d,className:m,disableEscapeKeyDown:x=!1,fullScreen:f=!1,fullWidth:k=!1,maxWidth:U="sm",onBackdropClick:I,onClick:D,onClose:P,open:A,PaperComponent:V=Q,PaperProps:R={},scroll:G="paper",TransitionComponent:O=go,transitionDuration:B=i,TransitionProps:L}=n,w=M(n,Fo),z=p({},n,{disableEscapeKeyDown:x,fullScreen:f,fullWidth:k,maxWidth:U,scroll:G}),K=Ao(z),Y=g.useRef(),eo=W=>{Y.current=W.target===W.currentTarget},to=W=>{D&&D(W),Y.current&&(Y.current=null,I&&I(W),P&&P(W,"backdropClick"))},H=Co(l),no=g.useMemo(()=>({titleId:H}),[H]);return r.jsx(Go,p({className:C(K.root,m),closeAfterTransition:!0,components:{Backdrop:Io},componentsProps:{backdrop:p({transitionDuration:B,as:c},u)},disableEscapeKeyDown:x,onClose:P,open:A,ref:t,onClick:to,ownerState:z},w,{children:r.jsx(O,p({appear:!0,in:A,timeout:B,role:"presentation"},L,{children:r.jsx(Oo,{className:C(K.container),onMouseDown:eo,ownerState:z,children:r.jsx(zo,p({as:V,elevation:24,role:"dialog","aria-describedby":a,"aria-labelledby":H},R,{className:C(K.paper,R.className),ownerState:z,children:r.jsx(To.Provider,{value:no,children:d})}))})}))}))});function _o(o){return y("MuiDialogActions",o)}b("MuiDialogActions",["root","spacing"]);const Uo=["className","disableSpacing"],Vo=o=>{const{classes:e,disableSpacing:t}=o;return $({root:["root",!t&&"spacing"]},_o,e)},Lo=h("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,!t.disableSpacing&&e.spacing]}})(({ownerState:o})=>p({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!o.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})),Ko=g.forwardRef(function(e,t){const n=S({props:e,name:"MuiDialogActions"}),{className:s,disableSpacing:i=!1}=n,a=M(n,Uo),l=p({},n,{disableSpacing:i}),c=Vo(l);return r.jsx(Lo,p({className:C(c.root,s),ownerState:l,ref:t},a))});function Yo(o){return y("MuiDialogContent",o)}b("MuiDialogContent",["root","dividers"]);const Ho=b("MuiDialogTitle",["root"]),Xo=["className","dividers"],Zo=o=>{const{classes:e,dividers:t}=o;return $({root:["root",t&&"dividers"]},Yo,e)},Jo=h("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,t.dividers&&e.dividers]}})(({theme:o,ownerState:e})=>p({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},e.dividers?{padding:"16px 24px",borderTop:`1px solid ${(o.vars||o).palette.divider}`,borderBottom:`1px solid ${(o.vars||o).palette.divider}`}:{[`.${Ho.root} + &`]:{paddingTop:0}})),qo=g.forwardRef(function(e,t){const n=S({props:e,name:"MuiDialogContent"}),{className:s,dividers:i=!1}=n,a=M(n,Xo),l=p({},n,{dividers:i}),c=Zo(l);return r.jsx(Jo,p({className:C(c.root,s),ownerState:l,ref:t},a))});function Qo(o){return y("MuiDialogContentText",o)}b("MuiDialogContentText",["root"]);const oe=["children","className"],ee=o=>{const{classes:e}=o,n=$({root:["root"]},Qo,e);return p({},e,n)},te=h(v,{shouldForwardProp:o=>so(o)||o==="classes",name:"MuiDialogContentText",slot:"Root",overridesResolver:(o,e)=>e.root})({}),ne=g.forwardRef(function(e,t){const n=S({props:e,name:"MuiDialogContentText"}),{className:s}=n,i=M(n,oe),a=ee(i);return r.jsx(te,p({component:"p",variant:"body1",color:"text.secondary",ref:t,ownerState:i,className:C(a.root,s)},n,{classes:a}))}),J=g.createContext();function se(o){return y("MuiGrid",o)}const ie=[0,1,2,3,4,5,6,7,8,9,10],re=["column-reverse","column","row-reverse","row"],ae=["nowrap","wrap-reverse","wrap"],T=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],F=b("MuiGrid",["root","container","item","zeroMinWidth",...ie.map(o=>`spacing-xs-${o}`),...re.map(o=>`direction-xs-${o}`),...ae.map(o=>`wrap-xs-${o}`),...T.map(o=>`grid-xs-${o}`),...T.map(o=>`grid-sm-${o}`),...T.map(o=>`grid-md-${o}`),...T.map(o=>`grid-lg-${o}`),...T.map(o=>`grid-xl-${o}`)]),le=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function N(o){const e=parseFloat(o);return`${e}${String(o).replace(String(e),"")||"px"}`}function ce({theme:o,ownerState:e}){let t;return o.breakpoints.keys.reduce((n,s)=>{let i={};if(e[s]&&(t=e[s]),!t)return n;if(t===!0)i={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(t==="auto")i={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const a=_({values:e.columns,breakpoints:o.breakpoints.values}),l=typeof a=="object"?a[s]:a;if(l==null)return n;const c=`${Math.round(t/l*1e8)/1e6}%`;let u={};if(e.container&&e.item&&e.columnSpacing!==0){const d=o.spacing(e.columnSpacing);if(d!=="0px"){const m=`calc(${c} + ${N(d)})`;u={flexBasis:m,maxWidth:m}}}i=p({flexBasis:c,flexGrow:0,maxWidth:c},u)}return o.breakpoints.values[s]===0?Object.assign(n,i):n[o.breakpoints.up(s)]=i,n},{})}function de({theme:o,ownerState:e}){const t=_({values:e.direction,breakpoints:o.breakpoints.values});return Z({theme:o},t,n=>{const s={flexDirection:n};return n.indexOf("column")===0&&(s[`& > .${F.item}`]={maxWidth:"none"}),s})}function oo({breakpoints:o,values:e}){let t="";Object.keys(e).forEach(s=>{t===""&&e[s]!==0&&(t=s)});const n=Object.keys(o).sort((s,i)=>o[s]-o[i]);return n.slice(0,n.indexOf(t))}function pe({theme:o,ownerState:e}){const{container:t,rowSpacing:n}=e;let s={};if(t&&n!==0){const i=_({values:n,breakpoints:o.breakpoints.values});let a;typeof i=="object"&&(a=oo({breakpoints:o.breakpoints.values,values:i})),s=Z({theme:o},i,(l,c)=>{var u;const d=o.spacing(l);return d!=="0px"?{marginTop:`-${N(d)}`,[`& > .${F.item}`]:{paddingTop:N(d)}}:(u=a)!=null&&u.includes(c)?{}:{marginTop:0,[`& > .${F.item}`]:{paddingTop:0}}})}return s}function ue({theme:o,ownerState:e}){const{container:t,columnSpacing:n}=e;let s={};if(t&&n!==0){const i=_({values:n,breakpoints:o.breakpoints.values});let a;typeof i=="object"&&(a=oo({breakpoints:o.breakpoints.values,values:i})),s=Z({theme:o},i,(l,c)=>{var u;const d=o.spacing(l);return d!=="0px"?{width:`calc(100% + ${N(d)})`,marginLeft:`-${N(d)}`,[`& > .${F.item}`]:{paddingLeft:N(d)}}:(u=a)!=null&&u.includes(c)?{}:{width:"100%",marginLeft:0,[`& > .${F.item}`]:{paddingLeft:0}}})}return s}function me(o,e,t={}){if(!o||o<=0)return[];if(typeof o=="string"&&!Number.isNaN(Number(o))||typeof o=="number")return[t[`spacing-xs-${String(o)}`]];const n=[];return e.forEach(s=>{const i=o[s];Number(i)>0&&n.push(t[`spacing-${s}-${String(i)}`])}),n}const ge=h("div",{name:"MuiGrid",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o,{container:n,direction:s,item:i,spacing:a,wrap:l,zeroMinWidth:c,breakpoints:u}=t;let d=[];n&&(d=me(a,u,e));const m=[];return u.forEach(x=>{const f=t[x];f&&m.push(e[`grid-${x}-${String(f)}`])}),[e.root,n&&e.container,i&&e.item,c&&e.zeroMinWidth,...d,s!=="row"&&e[`direction-xs-${String(s)}`],l!=="wrap"&&e[`wrap-xs-${String(l)}`],...m]}})(({ownerState:o})=>p({boxSizing:"border-box"},o.container&&{display:"flex",flexWrap:"wrap",width:"100%"},o.item&&{margin:0},o.zeroMinWidth&&{minWidth:0},o.wrap!=="wrap"&&{flexWrap:o.wrap}),de,pe,ue,ce);function xe(o,e){if(!o||o<=0)return[];if(typeof o=="string"&&!Number.isNaN(Number(o))||typeof o=="number")return[`spacing-xs-${String(o)}`];const t=[];return e.forEach(n=>{const s=o[n];if(Number(s)>0){const i=`spacing-${n}-${String(s)}`;t.push(i)}}),t}const fe=o=>{const{classes:e,container:t,direction:n,item:s,spacing:i,wrap:a,zeroMinWidth:l,breakpoints:c}=o;let u=[];t&&(u=xe(i,c));const d=[];c.forEach(x=>{const f=o[x];f&&d.push(`grid-${x}-${String(f)}`)});const m={root:["root",t&&"container",s&&"item",l&&"zeroMinWidth",...u,n!=="row"&&`direction-xs-${String(n)}`,a!=="wrap"&&`wrap-xs-${String(a)}`,...d]};return $(m,se,e)},Me=g.forwardRef(function(e,t){const n=S({props:e,name:"MuiGrid"}),{breakpoints:s}=q(),i=io(n),{className:a,columns:l,columnSpacing:c,component:u="div",container:d=!1,direction:m="row",item:x=!1,rowSpacing:f,spacing:k=0,wrap:U="wrap",zeroMinWidth:I=!1}=i,D=M(i,le),P=f||k,A=c||k,V=g.useContext(J),R=d?l||12:V,G={},O=p({},D);s.keys.forEach(w=>{D[w]!=null&&(G[w]=D[w],delete O[w])});const B=p({},i,{columns:R,container:d,direction:m,item:x,rowSpacing:P,columnSpacing:A,wrap:U,zeroMinWidth:I,spacing:k},G,{breakpoints:s.keys}),L=fe(B);return r.jsx(J.Provider,{value:R,children:r.jsx(ge,p({ownerState:B,className:C(L.root,a),as:u,ref:t},O))})}),he=vo(r.jsx("path",{d:"m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z"}),"FavoriteOutlined"),$e=({isFavorite:o,pet:e})=>{const t=ro(ao),n=xo(),[s,i]=g.useState(!1),[a,l]=g.useState(o),c=()=>{i(!1)},u=()=>{t?(o?(console.log("Deleted from Favorites: ",e.id),n(co(e.id))):n(po(e)),l(!o)):i(!0)};g.useEffect(()=>{console.log("CurrentUser: ",t==null?void 0:t.uid)},[t]);const d=()=>{n(fo(e.id))};return r.jsxs(ho,{elevation:6,sx:{maxWidth:345},children:[r.jsx(Ro,{component:"img",image:e.image,sx:{height:200,width:200}}),r.jsxs($o,{children:[r.jsxs("div",{style:{alignItems:"center",display:"flex",justifyContent:"space-between"},children:[r.jsx(v,{component:"div",sx:{marginBottom:1},variant:"h5",children:e.name}),t&&a?r.jsx(he,{color:"primary",onClick:u}):r.jsx(bo,{color:"primary",onClick:u})]}),r.jsxs(v,{color:"text.secondary",children:["Owner: ",r.jsx("b",{children:e.ownerId})]}),r.jsxs(v,{color:"text.secondary",children:["CurrentUser: ",r.jsx("b",{children:t==null?void 0:t.email})]}),r.jsxs(v,{color:"text.secondary",children:["Age: ",r.jsx("b",{children:e.age})]}),r.jsxs(v,{color:"text.secondary",children:["Weight, kg: ",r.jsx("b",{children:e.weight})]}),r.jsxs(v,{color:"text.secondary",children:["Sex: ",r.jsx("b",{children:e.sex?"male":"female"})]}),r.jsxs(v,{color:"text.secondary",children:["Available: ",r.jsx("b",{children:e.isAvailable?"Yes":"No"})]}),e.ownerId===(t==null?void 0:t.uid)?r.jsx(E,{variant:"contained",onClick:d,children:"Delete"}):r.jsx(E,{variant:"contained",disabled:!0,children:"Delete"}),!t&&r.jsxs(Eo,{"aria-describedby":"alert-dialog-description","aria-labelledby":"alert-dialog-title",onClose:c,open:s,children:[r.jsx(qo,{children:r.jsx(ne,{id:"alert-dialog-description",children:"...you should be logged in"})}),r.jsxs(Ko,{children:[r.jsx(E,{onClick:c,children:"Cancel"}),r.jsx(E,{autoFocus:!0,component:lo,onClick:c,to:"/login",children:"Login"})]})]})]})]})};export{Eo as D,Me as G,$e as P,qo as a,ne as b,Ko as c};
