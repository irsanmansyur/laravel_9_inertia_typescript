import{f as g,R as k,e as m,j as a,L as j,F as q,d as u}from"./index.aa1d9ee1.js";import{g as O,C as V,a as $,B as z}from"./card-related.produk.a4d2a231.js";import{s as L,b as R}from"./index.1770b955.js";import{h as C}from"./index.m.4f4de470.js";import{i as B,$ as P,S as T,N as I,P as E,a as D,A as F,b as _}from"./scrollbar.min.e1d37436.js";import{e as M,f as H}from"./index.esm.07281619.js";import{N as G}from"./react-number-format.es.69123eb4.js";import"./axios.91e25212.js";import"./hoist-non-react-statics.cjs.1781be09.js";function A({swiper:e,extendParams:c,on:n}){c({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let s=!1,r=!1;e.thumbs={swiper:null};function x(){const i=e.thumbs.swiper;if(!i||i.destroyed)return;const t=i.clickedIndex,p=i.clickedSlide;if(p&&P(p).hasClass(e.params.thumbs.slideThumbActiveClass)||typeof t>"u"||t===null)return;let d;if(i.params.loop?d=parseInt(P(i.clickedSlide).attr("data-swiper-slide-index"),10):d=t,e.params.loop){let f=e.activeIndex;e.slides.eq(f).hasClass(e.params.slideDuplicateClass)&&(e.loopFix(),e._clientLeft=e.$wrapperEl[0].clientLeft,f=e.activeIndex);const b=e.slides.eq(f).prevAll(`[data-swiper-slide-index="${d}"]`).eq(0).index(),v=e.slides.eq(f).nextAll(`[data-swiper-slide-index="${d}"]`).eq(0).index();typeof b>"u"?d=v:typeof v>"u"?d=b:v-f<f-b?d=v:d=b}e.slideTo(d)}function h(){const{thumbs:i}=e.params;if(s)return!1;s=!0;const t=e.constructor;if(i.swiper instanceof t)e.thumbs.swiper=i.swiper,Object.assign(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1});else if(B(i.swiper)){const p=Object.assign({},i.swiper);Object.assign(p,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper=new t(p),r=!0}return e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",x),!0}function y(i){const t=e.thumbs.swiper;if(!t||t.destroyed)return;const p=t.params.slidesPerView==="auto"?t.slidesPerViewDynamic():t.params.slidesPerView;let d=1;const f=e.params.thumbs.slideThumbActiveClass;if(e.params.slidesPerView>1&&!e.params.centeredSlides&&(d=e.params.slidesPerView),e.params.thumbs.multipleActiveThumbs||(d=1),d=Math.floor(d),t.slides.removeClass(f),t.params.loop||t.params.virtual&&t.params.virtual.enabled)for(let l=0;l<d;l+=1)t.$wrapperEl.children(`[data-swiper-slide-index="${e.realIndex+l}"]`).addClass(f);else for(let l=0;l<d;l+=1)t.slides.eq(e.realIndex+l).addClass(f);const b=e.params.thumbs.autoScrollOffset,v=b&&!t.params.loop;if(e.realIndex!==t.realIndex||v){let l=t.activeIndex,o,S;if(t.params.loop){t.slides.eq(l).hasClass(t.params.slideDuplicateClass)&&(t.loopFix(),t._clientLeft=t.$wrapperEl[0].clientLeft,l=t.activeIndex);const N=t.slides.eq(l).prevAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index(),w=t.slides.eq(l).nextAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index();typeof N>"u"?o=w:typeof w>"u"?o=N:w-l===l-N?o=t.params.slidesPerGroup>1?w:l:w-l<l-N?o=w:o=N,S=e.activeIndex>e.previousIndex?"next":"prev"}else o=e.realIndex,S=o>e.previousIndex?"next":"prev";v&&(o+=S==="next"?b:-1*b),t.visibleSlidesIndexes&&t.visibleSlidesIndexes.indexOf(o)<0&&(t.params.centeredSlides?o>l?o=o-Math.floor(p/2)+1:o=o+Math.floor(p/2)-1:o>l&&t.params.slidesPerGroup,t.slideTo(o,i?0:void 0))}}n("beforeInit",()=>{const{thumbs:i}=e.params;!i||!i.swiper||(h(),y(!0))}),n("slideChange update resize observerUpdate",()=>{y()}),n("setTransition",(i,t)=>{const p=e.thumbs.swiper;!p||p.destroyed||p.setTransition(t)}),n("beforeDestroy",()=>{const i=e.thumbs.swiper;!i||i.destroyed||r&&i.destroy()}),Object.assign(e.thumbs,{init:h,update:y})}function K(){const[e,c]=g.exports.useState(),n=k.useRef(null),s=k.useRef(null),[r,x]=g.exports.useState(3);return g.exports.useEffect(()=>{function h(){window.innerWidth<400?x(3):window.innerWidth<768?x(4):x(5)}return O().then(y=>{c(y.data.produks)}),h(),window.addEventListener("resize",h),()=>{window.removeEventListener("resize",h)}},[]),m("div",{className:"card-product",children:[m("div",{className:"card-product-header py-3 text-amber-400",children:[a("span",{className:" font-bold text-2xl font-sweetly_scentedregular tracking-widest ",children:"You May Also Like"}),a("div",{className:"link-all top-4",children:a(j,{href:"#link",className:"border-b hover:border-b-brown-500 transition-colors duration-300",children:"see all"})})]}),m(W,{className:"relative md:px-[20px]",children:[a(T,{navigation:{prevEl:n.current,nextEl:s.current},slidesPerView:r,spaceBetween:20,modules:[I,E,D,F],pagination:{clickable:!0,enabled:!1},scrollbar:{draggable:!0,hide:!0},loop:!0,children:e==null?void 0:e.data.map(h=>a(_,{children:a(V,{produk:h})},h.id))}),a("div",{className:"hidden md:flex md:absolute top-0 -left-3 h-full z-10   items-center",children:a("div",{ref:n,children:a("div",{className:"rounded-full border p-1 border-primary cursor-pointer swipper-back",children:a(M,{className:"h-5 w-5 text-primary"})})})}),a("div",{className:"absolute top-0 -right-3 h-full z-10 hidden md:flex items-center ",children:a("div",{ref:s,children:a("div",{className:"rounded-full border p-1 border-primary cursor-pointer swipper-next",children:a(H,{className:"h-5 w-5 text-primary"})})})})]})]})}const W=L.div`
  .swiper-scrollbar-horizontal {
    display: none;
  }
`;function U({images:e}){const[c,n]=g.exports.useState();return m(q,{children:[a(T,{loop:!0,spaceBetween:10,navigation:!0,modules:[I,A],grabCursor:!0,thumbs:{swiper:c},className:"product-images-slider h-[400px]",children:e.map((s,r)=>a(_,{children:a(R.exports.LazyLoadImage,{src:s.image_link,alt:s.name,title:s.name,className:"slide-image w-full h-[400px]",effect:"opacity",placeholderSrc:"https://via.placeholder.com/150/0000FF/808080?Text=Digital.com"})},r))}),a(T,{onSwiper:s=>n(s),loop:!0,spaceBetween:10,slidesPerView:3,modules:[I,A],className:"product-images-slider-thumbs mt-1 ",children:e.map((s,r)=>a(_,{children:a("div",{className:"product-images-slider-thumbs-wrapper",children:a(u.Avatar,{src:s.image_link,alt:"avatar",size:"xxl",className:"rounded"})})},r))})]})}function Y({links:e}){return m("div",{className:"link-belanja mt-5",children:[a("div",{className:"title",children:"Dapatkan segera"}),a("div",{className:"link-list flex gap-2 flex-wrap",children:e.map((c,n)=>a("a",{target:"_blank",href:c.link,children:a(u.Tooltip,{content:c.toko.name,children:a("img",{src:c.toko.logo_url,className:"w-[200px] h-[50px] rounded shadow"})})},n))})]})}function Z({variants:e}){const[c,n]=g.exports.useState(e[0]);return m("div",{className:"produk-variants",children:[a("div",{className:"variant-price",children:a(G,{className:"text-lg",value:c.price_after_diskon,allowLeadingZeros:!0,thousandSeparator:",",displayType:"text",prefix:"Rp. "})}),e.length>0&&m("div",{className:"vairants-list mt-3",children:[a("span",{className:"uppercase text-[12px]",children:"Variant"}),a("div",{className:"flex gap-2 items-center",children:e.map((s,r)=>c.id==s.id?a(u.Button,{size:"sm",className:"bg-primary",onClick:x=>n(s),children:s.name_variant},r):a(u.Button,{size:"sm",color:c.id==s.id?"blue":"gray",onClick:x=>n(s),children:s.name_variant},r))})]})]})}function ne({produk:e}){const[c,n]=g.exports.useState([]);g.exports.useEffect(()=>(e.data.kategori.root_parent==null||e.data.kategori.root_parent==0?n([e.data.kategori]):$(e.data.kategori.root_parent).then(r=>{n(r.data.data)}),()=>{}),[]);const s=c.map(r=>r.id==e.data.kategori_id?{text:r.name,active:!0,link:C("produk.all")+`?kategori_id=${r.id}`}:{text:r.name,active:!1,link:C("produk.all")+`?kategori_id=${e.data.kategori_id}`});return m("div",{className:"py-3",children:[m("div",{className:"max-w-screen-xl w-full mx-auto ",children:[a(z,{breadcrumb:s}),m("div",{className:"flex w-full sm:flex-row  flex-col",children:[a("div",{className:"md:w-2/5",children:a(U,{images:e.data.images})}),a("div",{className:"md:w-3/5 pt-10 ",children:m("div",{className:"products-detail-desc md:ml-10 pr-2",children:[a("h1",{className:"title text-xl font-bold font-sweetly_scentedregular tracking-widest",children:e.data.name}),a("div",{className:"text-lg mb-2 product-desc text-gray-800",children:e.data.alias}),a(Z,{variants:e.data.variants}),a(Y,{links:e.data.links})]})})]})]}),a("div",{className:"mt-10 p-4 bg-gradient-to-b to-amber-50 from-blue-gray-50 ",children:a(J,{className:"max-w-screen-xl w-full mx-auto",children:m(u.Tabs,{id:"custom-animation",value:"details",children:[m(u.TabsHeader,{className:"flex w-fit mx-auto justify-center gap-2 bg-transparent border-b border-b-primary !rounded",children:[a(u.Tab,{value:"details",className:"flex w-auto items-center justify-center px-2",children:"Details"}),a(u.Tab,{value:"how_to_apply",className:"flex w-auto items-center justify-center px-2",children:"How to apply"}),a(u.Tab,{value:"faq",className:"flex w-auto items-center justify-center px-2",children:"faq"})]}),m(u.TabsBody,{animate:{mount:{y:0},unmount:{y:250}},className:"py-3 min-h-[250px]",children:[a(u.TabPanel,{value:"details",children:a("div",{dangerouslySetInnerHTML:{__html:e.data.details+""}})}),a(u.TabPanel,{value:"how_to_apply",children:a("div",{dangerouslySetInnerHTML:{__html:e.data.how_to_apply+""}})}),a(u.TabPanel,{value:"faq",children:a("div",{dangerouslySetInnerHTML:{__html:e.data.faq+""}})})]})]})})}),a("div",{className:"max-w-screen-xl w-full mx-auto py-4",children:a(K,{})})]})}const J=L.div`
  li div.absolute {
  }
`;export{ne as default};
