(window.webpackJsonp=window.webpackJsonp||[]).push([[4,16],{11:function(t,s,e){var a={"./bitbucket.svg":192,"./discord.svg":193,"./dribble.svg":194,"./email.svg":195,"./facebook.svg":196,"./github.svg":197,"./gitlab.svg":198,"./instagram.svg":199,"./linkedin.svg":200,"./logo.svg":22,"./medium.svg":201,"./phone.svg":202,"./pinterest.svg":203,"./reddit.svg":204,"./skype.svg":205,"./snapchat.svg":206,"./soundcloud.svg":207,"./spotify.svg":208,"./telegram.svg":209,"./tiktok.svg":210,"./tumblr.svg":211,"./twitch.svg":212,"./twitter.svg":213,"./viber.svg":214,"./vimeo.svg":215,"./vk.svg":216,"./website.svg":217,"./whatsapp.svg":218,"./youtube.svg":219};function i(t){var s=c(t);return e(s)}function c(t){if(!e.o(a,t)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return a[t]}i.keys=function(){return Object.keys(a)},i.resolve=c,t.exports=i,i.id=11},192:function(t,s){t.exports="/images/bitbucket.svg?89d343f5efe6c351fcd6c00871221bb0"},193:function(t,s){t.exports="/images/discord.svg?fee2b0c7763cd68020f7d8fd9ea2c593"},194:function(t,s){t.exports="/images/dribble.svg?f47f43587ec131c9a510b2b742d6437d"},195:function(t,s){t.exports="/images/email.svg?3a49bb5efe3d406cc94e42b7b2f244f5"},196:function(t,s){t.exports="/images/facebook.svg?60f532b73b8720aba4a9f3fb2d39c56d"},197:function(t,s){t.exports="/images/github.svg?aac90947fcba994b3530d3ff120bfda2"},198:function(t,s){t.exports="/images/gitlab.svg?db66f1db8b42d15252ca0f283abc420c"},199:function(t,s){t.exports="/images/instagram.svg?825269601201a0ece278db25a848c8d3"},200:function(t,s){t.exports="/images/linkedin.svg?4b475fb3f54b3e35daa04295ec48df4c"},201:function(t,s){t.exports="/images/medium.svg?bad5a888d252fc08e4d77a10edbbc105"},202:function(t,s){t.exports="/images/phone.svg?5ebfa455397b1a579c3fcb180f94aeaf"},203:function(t,s){t.exports="/images/pinterest.svg?d8a44cc58536d5f706da07bea0dd7faa"},204:function(t,s){t.exports="/images/reddit.svg?fc79ce079da64ad3142465da62848597"},205:function(t,s){t.exports="/images/skype.svg?d45d32fa41d87042155762dc9f30bcae"},206:function(t,s){t.exports="/images/snapchat.svg?830fa7f3ccd1a1e67205a65cf7c29cd4"},207:function(t,s){t.exports="/images/soundcloud.svg?0b309ed60e3a8bd6e2bb8097209c8abc"},208:function(t,s){t.exports="/images/spotify.svg?74d9e294ebad9bf3dc2f4268db77b670"},209:function(t,s){t.exports="/images/telegram.svg?c55528d4703de7ee1676b1d86e92af68"},210:function(t,s){t.exports="/images/tiktok.svg?acc1c1a7cfd070fa838b381212a91d2e"},211:function(t,s){t.exports="/images/tumblr.svg?f832c382c60e73a28d2d1b37d4a8b4e5"},212:function(t,s){t.exports="/images/twitch.svg?e1f7813a81c4579705af8aec19b9aac0"},213:function(t,s){t.exports="/images/twitter.svg?c4f438fa6064cce71e3a97aae3d9684a"},214:function(t,s){t.exports="/images/viber.svg?99384e5805cd787c02d98b9869e14105"},215:function(t,s){t.exports="/images/vimeo.svg?a94f73209b5a70895ece832166f02331"},216:function(t,s){t.exports="/images/vk.svg?9eaa3aa7f4f9c1ae745d6649a0fbd8dc"},217:function(t,s){t.exports="/images/website.svg?82c43677d4e0c40659e07987ed1af959"},218:function(t,s){t.exports="/images/whatsapp.svg?8242a1532ce559c68370b20a10f7af56"},219:function(t,s){t.exports="/images/youtube.svg?7a8202a8aa5df17bb4ce198158886a80"},31:function(t,s,e){"use strict";e.r(s);var a={name:"Clicks",components:{ClicksChart:e(9).default}},i=e(1),c=Object(i.a)(a,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("stats",[t.$page.props.links.length>0?a("v-card",{attrs:{padding:"0"}},t._l(t.$page.props.links,(function(s,i){return a("div",{key:i,staticClass:"p-4 border-gray-100",class:{"border-b-2":i!==t.$page.props.links.length-1}},[a("div",{staticClass:"flex w-full items-center justify-between"},[a("div",{staticClass:"flex items-center"},[["social","contact"].includes(s.type)&&s.title?a("img",{staticClass:"mr-1",attrs:{src:e(11)("./"+s.title+".svg"),width:"20",alt:""}}):t._e(),t._v(" "),a("a",{staticClass:"text-gray-700 w-28 md:w-62 truncate",class:{capitalize:["social","contact"].includes(s.type)},attrs:{href:s.real_url,rel:"noreferrer",target:"_blank"}},[t._v(t._s(s.title))]),t._v(" "),a("span",{staticClass:"text-sm ml-1 text-gray-400"},[t._v("("+t._s(s.clicks)+" Clicks)")])]),t._v(" "),a("div",{staticClass:"flex items-center"},[a("v-button",{attrs:{type:"secondary",small:""},on:{click:function(e){t.$inertia.visit(t.route("stats.clicks.show",{link:s.id}))}}},[a("fa-icon",{staticClass:"mr-2",attrs:{icon:["fas","chart-bar"]}}),t._v(" "),a("span",{staticClass:"hidden md:block"},[t._v("View Stats")])],1)],1)]),t._v(" "),t.$page.props.link&&t.$page.props.link.id===s.id?a("div",{staticClass:"line-chart flex w-full items-center justify-between"},[a("clicks-chart",{staticClass:"h-20 md:h-40 mx-auto",attrs:{"chart-data":t.$page.props.link.stats,"border-width":"4","show-detail":!0}})],1):t._e()])})),0):a("v-card",{staticClass:"text-center"},[a("p",{staticClass:"text-lg font-semibold mb-3"},[t._v("You don't have any links yet")]),t._v(" "),a("p",{staticClass:"text-gray-500 mb-3"},[t._v("Add your first link here 🎉")]),t._v(" "),a("v-button",{attrs:{type:"secondary",small:""},on:{click:function(s){t.$inertia.visit(t.route("page-settings.links"))}}},[t._v("Add a Link")])],1)],1)}),[],!1,null,null,null);s.default=c.exports},9:function(t,s,e){"use strict";e.r(s);var a={extends:e(7).a,name:"ClicksChart",props:["chartData","borderWidth","showDetail"],mounted:function(){this.renderChart({labels:this.getLabels(),datasets:[{label:"Clicks",backgroundColor:"#e9d3f6",data:this.getData(),borderWidth:this.borderWidth,borderColor:["#cb55ee"],fill:!0}]},{legend:{display:this.showDetail},title:"Views stats",responsive:!0,maintainAspectRatio:!1,scales:{yAxes:[{ticks:{display:this.showDetail,beginAtZero:!0,callback:function(t){if(t%1==0)return t},max:Math.max.apply(Math,this.getData())+1},gridLines:{display:this.showDetail}}],xAxes:[{ticks:{display:!1},gridLines:{display:!1}}]},layout:{padding:{bottom:this.showDetail?0:-20,left:this.showDetail?0:-10}}})},methods:{getLabels:function(){var t=[];return this.chartData.map((function(s){t.push(s.date)})),t},getData:function(){var t=[];return this.chartData.map((function(s){t.push(s.clicks)})),t}}},i=e(1),c=Object(i.a)(a,void 0,void 0,!1,null,null,null);s.default=c.exports}}]);