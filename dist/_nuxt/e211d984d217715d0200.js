(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{307:function(t,n,e){var content=e(311);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(12).default)("501f1a8e",content,!0,{sourceMap:!1})},308:function(t,n,e){var content=e(313);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(12).default)("36980f98",content,!0,{sourceMap:!1})},309:function(t,n,e){"use strict";var r=e(51),o={props:{heading:{type:String,default:"HIPPO SLURRY PUMP RANGE & PUMP SYSTEMS"}},data:function(){return{strSplit:r.a}},computed:{sectionHead:function(){return Object(r.a)(this.$props.heading)}}},c=(e(310),e(2)),component=Object(c.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h2",[t._v("\n    "+t._s(t.sectionHead[0])+"\n    "),e("br"),t._v(" "),t._t("sec-head-pt",[t._v("\n      "+t._s(t.sectionHead[1])+"\n    ")])],2)])}),[],!1,null,"36817b21",null);n.a=component.exports},310:function(t,n,e){"use strict";var r=e(307);e.n(r).a},311:function(t,n,e){(t.exports=e(11)(!1)).push([t.i,"div[data-v-36817b21]{margin-bottom:2rem}h2[data-v-36817b21]{border-left:4px solid var(--main-clr);padding-left:.5rem}",""])},312:function(t,n,e){"use strict";var r=e(308);e.n(r).a},313:function(t,n,e){(t.exports=e(11)(!1)).push([t.i,"div[data-v-61d36c3a]{margin-top:3rem;margin-bottom:3rem}h6[data-v-61d36c3a]{color:var(--main-clr);font-weight:700;margin-bottom:.5rem}h3[data-v-61d36c3a]{font-size:16px}",""])},314:function(t,n,e){"use strict";var r={},o=(e(312),e(2)),component=Object(o.a)(r,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"container"},[n("h6",[this._t("cta",[this._v("\n      Let's solve problems together\n    ")])],2),this._v(" "),n("h3",[this._t("link",[n("a",{attrs:{href:"mailto:info@hipposlurrypumps.com"}},[this._v("\n        info@hipposlurrypumps.com\n      ")]),this._v(" "),n("a",{attrs:{href:"tel:+27(0)126668203"}},[this._v("\n        +27(0)12 666 8203\n      ")])])],2)])}),[],!1,null,"61d36c3a",null);n.a=component.exports},316:function(t,n,e){var content=e(324);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(12).default)("11ea2e40",content,!0,{sourceMap:!1})},321:function(t,n,e){"use strict";e(322)("link",(function(t){return function(n){return t(this,"a","href",n)}}))},322:function(t,n,e){var r=e(7),o=e(13),c=e(24),l=/"/g,d=function(t,n,e,r){var o=String(c(t)),d="<"+n;return""!==e&&(d+=" "+e+'="'+String(r).replace(l,"&quot;")+'"'),d+">"+o+"</"+n+">"};t.exports=function(t,n){var e={};e[t]=n(d),r(r.P+r.F*o((function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3})),"String",e)}},323:function(t,n,e){"use strict";var r=e(316);e.n(r).a},324:function(t,n,e){(t.exports=e(11)(!1)).push([t.i,".card[data-v-efcd91a6]{display:flex;align-items:center;background-color:var(--card-bg);height:150px;padding:.5rem}.card img[data-v-efcd91a6]{height:90%;margin:auto 1rem auto 0;width:auto}.card h4[data-v-efcd91a6]{text-transform:uppercase}",""])},325:function(t,n,e){var content=e(343);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(12).default)("4f4fdab6",content,!0,{sourceMap:!1})},337:function(t,n,e){"use strict";e(321),e(108),e(109),e(52);var r=e(51),o={props:{img:{type:String,default:"/img/awards/placeholder.png"},title:{type:String,default:"product - Title"},id:{type:String,default:"product-name"}},data:function(){return{strSplit:r.a,link:this.$route.name}},computed:{sectionHead:function(){return Object(r.a)(this.$props.title)},productLink:function(){return this.link.includes("Range")?"/pump-range/":"/pump-systems/"}}},c=(e(323),e(2)),component=Object(c.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("nuxt-link",{attrs:{to:t.productLink+t.id}},[e("div",{staticClass:"card"},[e("img",{staticClass:"framed",attrs:{src:t.img,alt:t.title}}),t._v(" "),t.title?e("div",{staticClass:"title-wrapper"},[e("h4",[t._v("\n        "+t._s(t.sectionHead[0])+"\n      ")]),t._v(" "),e("h4",[t._v("\n        "+t._s(t.sectionHead[1])+"\n      ")])]):t._e()])])}),[],!1,null,"efcd91a6",null);n.a=component.exports},342:function(t,n,e){"use strict";var r=e(325);e.n(r).a},343:function(t,n,e){(t.exports=e(11)(!1)).push([t.i,".grid[data-v-6d6d14ec]{display:grid;grid-gap:1rem}@media screen and (min-width:550px){.grid[data-v-6d6d14ec]{grid-template-columns:1fr 1fr}}",""])},367:function(t,n,e){"use strict";e.r(n);e(52);var r=e(107),o=e(309),c=e(337),l=e(314),d={components:{AppHero:r.a,AppSectionHeading:o.a,ProductPreview:c.a,AppCallToAction:l.a},head:function(){return{title:"Pump Range",meta:[{hid:"description",name:"description",content:"The Award winning Hippo Pump Range consist of submersible and vertical configurations"}]}},data:function(){return{tagline:"THE HIPPO SLURRY PUMP RANGE",slogan:"THE AWARD WINNING HEAVY DUTY PUMP RANGE",submersibleHeading:"SUBMERSIBLE CONFIGURATIONS",verticalHeading:"Vertical CONFIGURATIONS"}},computed:{submersibleConfig:function(){return this.pumps.filter((function(t){return"submersible"===t.configuration}))},verticalConfig:function(){return this.pumps.filter((function(t){return"vertical"===t.configuration}))}},asyncData:function(t){var n=t.query._storyblok||t.isDev?"draft":"published";return t.app.$storyapi.get("cdn/stories",{version:n,starts_with:"pump-range/"}).then((function(t){return console.log(t),{pumps:t.data.stories.map((function(t){return{id:t.slug,title:t.content.title,img:t.content.img,slug:t.full_slug,configuration:t.content.configuration,description:t.content.description,type:t.content.type,tagline:t.content.hero.tagline,slogan:t.content.hero.slogan,benefits:t.content.benefits,designFeatures:t.content.design_features,name:t.name,application:t.content.application}}))}}))}},f=(e(342),e(2)),component=Object(f.a)(d,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("AppHero",{attrs:{tagline:t.tagline,slogan:t.slogan}}),t._v(" "),e("main",[e("section",[e("AppSectionHeading",{attrs:{heading:t.submersibleHeading}}),t._v(" "),t.pumps?e("div",{staticClass:"grid"},t._l(t.submersibleConfig,(function(t){return e("ProductPreview",{key:t.id,attrs:{id:t.id,title:t.title,img:t.img}})})),1):t._e()],1),t._v(" "),e("section",[e("AppSectionHeading",{attrs:{heading:t.verticalHeading}}),t._v(" "),e("div",{staticClass:"grid"},t._l(t.verticalConfig,(function(t){return e("ProductPreview",{key:t.id,attrs:{id:t.id,title:t.title,img:t.img}})})),1)],1)]),t._v(" "),e("AppCallToAction")],1)}),[],!1,null,"6d6d14ec",null);n.default=component.exports}}]);