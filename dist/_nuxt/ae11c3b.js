(window.webpackJsonp=window.webpackJsonp||[]).push([[11,7],{280:function(t,e,r){var content=r(282);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(41).default)("db03d3ac",content,!0,{sourceMap:!1})},281:function(t,e,r){"use strict";r(280)},282:function(t,e,r){var n=r(40)((function(i){return i[1]}));n.push([t.i,".spinner[data-v-2fdfb436]{width:40px;height:40px;background-color:#fbff0a;margin:100px auto;-webkit-animation:sk-rotateplane-data-v-2fdfb436 1.2s ease-in-out infinite;animation:sk-rotateplane-data-v-2fdfb436 1.2s ease-in-out infinite}@-webkit-keyframes sk-rotateplane-data-v-2fdfb436{0%{-webkit-transform:perspective(120px)}50%{-webkit-transform:perspective(120px) rotateY(180deg)}to{-webkit-transform:perspective(120px) rotateY(180deg) rotateX(180deg)}}@keyframes sk-rotateplane-data-v-2fdfb436{0%{transform:perspective(120px) rotateX(0deg) rotateY(0deg);-webkit-transform:perspective(120px) rotateX(0deg) rotateY(0deg)}50%{transform:perspective(120px) rotateX(-180.1deg) rotateY(0deg);-webkit-transform:perspective(120px) rotateX(-180.1deg) rotateY(0deg)}to{transform:perspective(120px) rotateX(-180deg) rotateY(-179.9deg);-webkit-transform:perspective(120px) rotateX(-180deg) rotateY(-179.9deg)}}",""]),n.locals={},t.exports=n},283:function(t,e,r){"use strict";r.r(e);var n={},o=(r(281),r(56)),component=Object(o.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"spinner"})}),[],!1,null,"2fdfb436",null);e.default=component.exports},285:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));r(42);function n(t){var e=t.indexOf("_")+1;return t.slice(e)}},292:function(t,e,r){"use strict";r.r(e);var n=r(9),o=(r(47),r(64),r(198),{data:function(){return{recipe:null,suggestions:null,kcal:null,protein:null,fat:null,carbs:null,chartOptions:{chart:{width:380,type:"pie"},labels:["Protein","Fat","Carbs"],responsive:[{breakpoint:880,options:{chart:{width:300},legend:{position:"bottom"}}},{breakpoint:639,options:{chart:{width:400},legend:{position:"right"}}},{breakpoint:499,options:{chart:{width:300},legend:{position:"bottom"}}}]}}},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.$get("".concat("https://api.edamam.com/api","/recipes/v2/").concat(t.$route.params.id,"?type=public&app_id=").concat("62a41cdc","&app_key=").concat("b7397dea4e6cc1880c515e471a24ee0a"));case 3:return r=e.sent,e.next=6,t.$axios.$get("".concat("https://api.edamam.com/api","/recipes/v2?type=public&q=meat&app_id=").concat("62a41cdc","&app_key=").concat("b7397dea4e6cc1880c515e471a24ee0a","&diet=high-protein"));case 6:n=e.sent,t.suggestions=n.hits.splice(0,2),t.recipe=r,t.kcal=Math.round(t.recipe.recipe.totalNutrients.ENERC_KCAL.quantity),t.protein=Math.round(t.recipe.recipe.totalNutrients.PROCNT.quantity),t.fat=Math.round(t.recipe.recipe.totalNutrients.FAT.quantity),t.carbs=Math.round(t.recipe.recipe.totalNutrients.CHOCDF.quantity),console.log(r),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),console.log(e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,16]])})))()},methods:{getRecipeId:r(285).a}}),c=r(56),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bg-gradient-to-r px-6 grid grid-cols-12 min-h-screen from-red-400 via-pink-500 my-0 py-8 to-purple-500"},[t.recipe?r("div",{staticClass:"mt-12 border-2 px-2 md:px-6 col-span-12 lg:col-span-8 shadow-2xl drop-shadow-2xl bg-gray-100 rounded-md border-gray-300 w-fit h-fit md:mx-auto pb-5"},[r("h2",{staticClass:"text-purple-700 bg-gradient-to-r from-red-400 via-pink-500 my-0 text-transparent bg-clip-text to-purple-500 px-0 font-bold text-2xl md:text-5xl mx-auto py-5"},[t._v("\n      "+t._s(t.recipe.recipe.label)+"\n    ")]),t._v(" "),r("div",{staticClass:"grid grid-cols-1 sm:grid-cols-2 gap-8"},[r("img",{staticClass:"shadow-2xl col-span-2 mx-auto sm:col-span-1 transition hover:cursor-pointer duration-500 ease-in-out transform hover:scale-105 rounded-lg",attrs:{height:"300",src:t.recipe.recipe.image,alt:""}}),t._v(" "),r("div",{staticClass:"col-span-2 sm:col-span-1",attrs:{height:"250"}},[r("h2",{staticClass:"pb-4 text-2xl underline decoration-2 decoration-red-500"},[t._v("\n          Nutrition\n        ")]),t._v(" "),r("client-only",[r("div",{staticClass:"mx-auto flex flex-row justify-center",attrs:{id:"chart"}},[r("apexchart",{attrs:{type:"pie",width:"380",options:t.chartOptions,series:[t.protein,t.fat,t.carbs]}})],1)])],1)]),t._v(" "),r("div",[r("div",[r("h2",{staticClass:"pb-4 pt-0 pl-0 lg:pl-10 text-2xl underline decoration-2 decoration-purple-500"},[t._v("\n          Ingredients\n        ")]),t._v(" "),r("ul",{staticClass:"pl-4 lg:pl-16"},t._l(t.recipe.recipe.ingredients,(function(e,i){return r("li",{key:i,staticClass:"list-disc"},[t._v("\n            "+t._s(e.text)+"\n          ")])})),0)])])]):r("spinner"),t._v(" "),r("div",{staticClass:"col-span-12 lg:col-span-4"},[r("h2",{staticClass:"font-bold text-3xl ml-8 lg:ml-0 mt-10 lg:text-center mb-4 text-white"},[t._v("\n      Suggestions\n    ")]),t._v(" "),r("div",{staticClass:"lg:col-span-4 justify-evenly content-center flex flex-row flex-wrap lg:flex-col"},t._l(t.suggestions,(function(e,i){return r("nuxt-link",{key:i,attrs:{to:"/recipes/"+t.getRecipeId(e.recipe.uri)}},[r("div",{staticClass:"mx-auto mb-4 min-w-[250px] p-1 shadow-2xl drop-shadow-2xl bg-gray-100 rounded-md border-gray-300 max-w-[300px] h-fit"},[r("img",{staticClass:"h-auto object-cover",attrs:{height:"250",src:e.recipe.image,alt:""}}),t._v(" "),r("h2",{staticClass:"font-bold underline decoration-2 decoration-red-500"},[t._v("\n            "+t._s(e.recipe.label)+"\n          ")]),t._v(" "),r("p",[t._v("\n            "+t._s(Math.round(e.recipe.totalNutrients.ENERC_KCAL.quantity))+"\n            Kcals | "+t._s(Math.round(e.recipe.digest[2].total))+"g\n            protein\n          ")])])])})),1)])],1)}),[],!1,null,"25e9924a",null);e.default=component.exports;installComponents(component,{Spinner:r(283).default})}}]);