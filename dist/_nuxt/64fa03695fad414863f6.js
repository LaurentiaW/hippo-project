(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{307:function(t,e,n){var content=n(311);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("501f1a8e",content,!0,{sourceMap:!1})},308:function(t,e,n){var content=n(313);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("36980f98",content,!0,{sourceMap:!1})},309:function(t,e,n){"use strict";var r=n(51),o={props:{heading:{type:String,default:"HIPPO SLURRY PUMP RANGE & PUMP SYSTEMS"}},data:function(){return{strSplit:r.a}},computed:{sectionHead:function(){return Object(r.a)(this.$props.heading)}}},c=(n(310),n(2)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("\n    "+t._s(t.sectionHead[0])+"\n    "),n("br"),t._v(" "),t._t("sec-head-pt",[t._v("\n      "+t._s(t.sectionHead[1])+"\n    ")])],2)])}),[],!1,null,"36817b21",null);e.a=component.exports},310:function(t,e,n){"use strict";var r=n(307);n.n(r).a},311:function(t,e,n){(t.exports=n(11)(!1)).push([t.i,"div[data-v-36817b21]{margin-bottom:2rem}h2[data-v-36817b21]{border-left:4px solid var(--main-clr);padding-left:.5rem}",""])},312:function(t,e,n){"use strict";var r=n(308);n.n(r).a},313:function(t,e,n){(t.exports=n(11)(!1)).push([t.i,"div[data-v-61d36c3a]{margin-top:3rem;margin-bottom:3rem}h6[data-v-61d36c3a]{color:var(--main-clr);font-weight:700;margin-bottom:.5rem}h3[data-v-61d36c3a]{font-size:16px}",""])},314:function(t,e,n){"use strict";var r={},o=(n(312),n(2)),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("h6",[this._t("cta",[this._v("\n      Let's solve problems together\n    ")])],2),this._v(" "),e("h3",[this._t("link",[e("a",{attrs:{href:"mailto:info@hipposlurrypumps.com"}},[this._v("\n        info@hipposlurrypumps.com\n      ")]),this._v(" "),e("a",{attrs:{href:"tel:+27(0)126668203"}},[this._v("\n        +27(0)12 666 8203\n      ")])])],2)])}),[],!1,null,"61d36c3a",null);e.a=component.exports},315:function(t,e,n){var content=n(318);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("4e12d5a2",content,!0,{sourceMap:!1})},317:function(t,e,n){"use strict";var r=n(315);n.n(r).a},318:function(t,e,n){(t.exports=n(11)(!1)).push([t.i,"h4[data-v-8a36596e]{padding:.25rem .75rem;background-color:var(--grey);opacity:.84}h4[data-v-8a36596e],p[data-v-8a36596e]{color:var(--white)}p[data-v-8a36596e]{padding:0 .75rem .25rem}.bg-img[data-v-8a36596e]{background-color:#ccc;background-position:50%;background-repeat:no-repeat;background-size:cover;margin-bottom:1rem}",""])},319:function(t,e,n){var content=n(339);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("4b31ed7e",content,!0,{sourceMap:!1})},336:function(t,e,n){"use strict";n(111);var r={props:{id:{type:[Number,String]},heading:{type:String},details:{type:String},img:{type:String}}},o=(n(317),n(2)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-img",style:{backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url( "+t.img+")"}},[n("h4",[t._v(t._s(t.id+1)+". "+t._s(t.heading))]),t._v(" "),n("p",[t._v(t._s(t.details))])])}),[],!1,null,"8a36596e",null);e.a=component.exports},338:function(t,e,n){"use strict";var r=n(319);n.n(r).a},339:function(t,e,n){(t.exports=n(11)(!1)).push([t.i,".flex[data-v-4e119af1]{display:flex}.flex>*[data-v-4e119af1]{flex:1}.flex[data-v-4e119af1]>:first-child{margin-right:.5rem}.about img[data-v-4e119af1]{max-width:330px;display:block;margin-right:auto;margin-left:auto}.grid[data-v-4e119af1]{display:grid}@media (min-width:400px){.grid[data-v-4e119af1]{grid-template-columns:repeat(auto-fit,minmax(300px,1fr));grid-gap:1rem}}p[data-v-4e119af1]{white-space:pre-line}",""])},370:function(t,e,n){"use strict";n.r(e);var r=n(107),o=n(309),c=n(336),d=n(314),l={components:{AppHero:r.a,AppSectionHeading:o.a,AppBoxes:c.a,AppCallToAction:d.a},head:function(){return{title:"About",meta:[{hid:"description",name:"description",content:"Want to know more about Hippo Slurry Pump brand - find more information regarding our profile, history, news and awards"}]}},data:function(){return{tagline:"WHO WE ARE",slogan:"THE HIPPO STORY, in short",heading:"ABOUT HIPPO SLURRY PUMPS",headingHistory:"THE HIPPO TIME LINE",headingAwards:"Our Awards",headingNews:"The News Room ",story:{content:{}}}},asyncData:function(t){var e=t.query._storyblok||t.isDev?"draft":"published";return t.app.$storyapi.get("cdn/stories/about",{version:e}).then((function(t){return console.log(t.data),{blok:t.data.story.content.body,intro_paragraph:[t.data.story.content.body[0],t.data.story.content.body[1]],intro_images:[t.data.story.content.body[2],t.data.story.content.body[3]],boxes:[t.data.story.content.body[4],t.data.story.content.body[5],t.data.story.content.body[6]],awards_room:t.data.story.content.body[10],awards_room_content:t.data.story.content.body[7].text,news_room:t.data.story.content.body[9]}})).catch((function(e){t.error({statusCode:e.response.status,message:e.response.data})}))},mounted:function(){var t=this;this.$storybridge.on(["input","published","change"],(function(e){"input"===e.action?e.story.id===t.story.id&&(t.story.content=e.story.content):window.location.reload()}))}},m=(n(338),n(2)),component=Object(m.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("AppHero",{attrs:{tagline:t.tagline,slogan:t.slogan}}),t._v(" "),n("main",{directives:[{name:"editable",rawName:"v-editable",value:t.blok,expression:"blok"}]},[n("section",{staticClass:"profile"},[n("AppSectionHeading",{attrs:{heading:t.heading}}),t._v(" "),n("div",{staticClass:"about flex"},[n("div",{staticClass:"text-wrapper"},t._l(t.intro_paragraph,(function(p,i){return n("p",{key:i},[t._v("\n            "+t._s(p.text)+"\n          ")])})),0),t._v(" "),n("div",{staticClass:"images-wrapper"},t._l(t.intro_images,(function(img,i){return n("div",{key:i,staticClass:"images"},[n("div",{staticClass:"img"},[n("h4",{staticClass:"upper center"},[t._v(t._s(img.image_title))]),t._v(" "),n("img",{staticClass:"framed",attrs:{src:img.image,alt:img.image_title}}),t._v(" "),n("br")])])})),0)])],1),t._v(" "),n("section",{staticClass:"history"},[n("AppSectionHeading",{attrs:{heading:t.headingHistory}}),t._v(" "),n("div",{staticClass:"grid"},t._l(t.boxes,(function(t,i){return n("AppBoxes",{key:i,attrs:{id:i,heading:t.heading,img:t.img,details:t.details}})})),1)],1),t._v(" "),n("section",{staticClass:"awards"},[n("AppSectionHeading",{attrs:{heading:t.headingAwards}}),t._v(" "),n("div",{staticClass:"flex"},[n("div",{staticClass:"img-wrapper"},[n("h4",{staticClass:"upper center"},[t._v(t._s(t.awards_room.image_title))]),t._v(" "),n("figure",{staticClass:"framed"},[n("img",{attrs:{src:t.awards_room.image,alt:t.awards_room.image_title}})])]),t._v(" "),n("p",[n("nuxt-link",{attrs:{to:"/about/awards"}},[n("p",[t._v("\n              "+t._s(t.awards_room_content)+"\n            ")])])],1)])],1),t._v(" "),n("section",{staticClass:"news"},[n("AppSectionHeading",{attrs:{heading:t.headingNews}}),t._v(" "),n("p",[t._v("\n        "+t._s(t.news_room.text)+"\n      ")]),t._v(" "),t._m(0)],1)]),t._v(" "),n("AppCallToAction")],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"http://www.miningweekly.com/page/press-office-home/company:hazleton-pumps-2017-01-31",target:"_blank"}},[this._v("Visit our parent company, Hazleton Pumps Intl,\n        "),e("span",{staticClass:"emphasize"},[this._v("news' room")]),this._v(" for more updates")])}],!1,null,"4e119af1",null);e.default=component.exports}}]);