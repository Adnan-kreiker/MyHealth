(window.webpackJsonp=window.webpackJsonp||[]).push([[5,7],{291:function(t,e,r){var content=r(293);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(55).default)("0bf91240",content,!0,{sourceMap:!1})},292:function(t,e,r){"use strict";r(291)},293:function(t,e,r){var n=r(54)((function(i){return i[1]}));n.push([t.i,".spinner[data-v-28596d63]{width:40px;height:40px;background-color:#fbff0a;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);margin:100px auto;-webkit-animation:sk-rotateplane-data-v-28596d63 1.2s ease-in-out infinite;animation:sk-rotateplane-data-v-28596d63 1.2s ease-in-out infinite}@-webkit-keyframes sk-rotateplane-data-v-28596d63{0%{-webkit-transform:perspective(120px)}50%{-webkit-transform:perspective(120px) rotateY(180deg)}to{-webkit-transform:perspective(120px) rotateY(180deg) rotateX(180deg)}}@keyframes sk-rotateplane-data-v-28596d63{0%{transform:perspective(120px) rotateX(0deg) rotateY(0deg);-webkit-transform:perspective(120px) rotateX(0deg) rotateY(0deg)}50%{transform:perspective(120px) rotateX(-180.1deg) rotateY(0deg);-webkit-transform:perspective(120px) rotateX(-180.1deg) rotateY(0deg)}to{transform:perspective(120px) rotateX(-180deg) rotateY(-179.9deg);-webkit-transform:perspective(120px) rotateX(-180deg) rotateY(-179.9deg)}}",""]),n.locals={},t.exports=n},294:function(t,e,r){"use strict";r.r(e);var n={},o=(r(292),r(34)),component=Object(o.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"spinner"})}),[],!1,null,"28596d63",null);e.default=component.exports},295:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));r(46);function n(t){var e=t.indexOf("_")+1;return t.slice(e)}},309:function(t,e,r){"use strict";r.r(e);var n=r(7),o=(r(40),r(56),r(209),{data:function(){return{recipes:null}},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.$get("".concat("https://api.edamam.com/api","/recipes/v2?type=public&q=chicken&app_id=").concat("62a41cdc","&app_key=").concat("b7397dea4e6cc1880c515e471a24ee0a"),{params:{diet:"high-protein",imageSize:"REGULAR",limit:6}});case 3:r=e.sent,t.recipes=r.hits.splice(0,6),console.log(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},methods:{getRecipeId:r(295).a}}),l=r(34),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("client-only",[r("div",{staticClass:"bg-gray-200 pb-12 relative min-h-[700px]"},[r("h2",{staticClass:"text-purple-700 font-bold text-5xl mx-auto px-8 sm:mr-20 py-10"},[t._v("\n      High Protein Recipes\n    ")]),t._v(" "),t.recipes?r("div",{staticClass:"grid grid-cols-12 bg-gray-200 justify-center items-stretch"},t._l(t.recipes,(function(e){return r("nuxt-link",{key:e.id,staticClass:"py-5 col-span-12 sm:col-span-6 w-5/6 mx-auto max-w-[300px] lg:col-span-4 flex flex-col justify-center",attrs:{"data-aos":"zoom-in","data-aos-duration":"500","data-aos-offset":"300",to:"/recipes/"+t.getRecipeId(e.recipe.uri)}},[r("div",[r("div",{staticClass:"relative pl-1 flex justify-center rounded-xl hover:scale-105 duration-500 transform transition cursor-pointer"},[r("div",{staticClass:"top-0 left-0 mt-3 px-2 rounded-lg absolute z-30 bg-green-500 text-gray-100 text-xs md:text-sm font-medium md:block"},[t._v("\n              "+t._s(Math.round(e.recipe.digest[2].daily/10))+"g Protein\n            ")]),t._v(" "),r("div",{staticClass:"top-0 left-0 h-2 md:h-3 mt-5 px-2 absolute z-20 bg-green-500"}),t._v(" "),r("div",{staticClass:"top-0 left-0 h-2 md:h-3 mt-6 pl-5 rounded-3xl absolute z-0 bg-green-600"}),t._v(" "),r("div",{staticClass:"w-full pb-2 bg-white rounded-xl shadow-xl z-10"},[r("div",{staticClass:"relative"},[r("img",{staticClass:"max-h-96 object-cover rounded-t-xl",attrs:{src:e.recipe.image,alt:""}}),t._v(" "),r("div",{staticClass:"bottom-0 right-0 mb-2 mr-2 px-2 rounded-lg absolute bg-yellow-500 text-gray-100 text-xs font-medium"},[t._v("\n                  Recommended\n                ")])]),t._v(" "),r("div",{staticClass:"px-2 py-1"},[r("div",{staticClass:"text-sm md:text-base line-clamp-1 font-bold pr-2"},[t._v("\n                  "+t._s(e.recipe.label)+"\n                ")]),t._v(" "),r("div",{staticClass:"flex py-2 h-full"},[r("div",{staticClass:"bg-gray-200 p-1 mr-2 rounded-full text-xs font-medium text-gray-900"},[t._v("\n                    "+t._s(Math.round(e.recipe.calories/3))+" Kcals\n                  ")]),t._v(" "),r("div",{staticClass:"flex justify-between item-center"},[r("div",{staticClass:"flex items-center"},[r("svg",{staticClass:"h-3 md:h-5 md:w-5 text-yellow-500",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[r("path",{attrs:{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"}})]),t._v(" "),r("p",{staticClass:"text-gray-600 font-bold text-xs md:text-sm ml-1"},[t._v("\n                        4.96\n                        "),t._v(" "),r("span",{staticClass:"text-gray-500 font-normal"},[t._v("(76 rewiews)")])])])])]),t._v(" "),r("button",{staticClass:"mt-auto bottom-0 flex justify-center bg-purple-500 hover:bg-white text-sm md:text-base border hover:outline-2 hover:outline-purple-500 rounded-xl w-32 md:w-36 p-1 text-gray-100 hover:text-purple-900"},[t._v("\n                  More Information\n                ")])])])])])])})),1):r("spinner")],1)])}),[],!1,null,"985402e8",null);e.default=component.exports;installComponents(component,{Spinner:r(294).default})}}]);