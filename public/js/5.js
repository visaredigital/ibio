(window.webpackJsonp=window.webpackJsonp||[]).push([[5,10,11],{12:function(e,t,a){"use strict";a.r(t);var s=a(3),n=a.n(s);function r(e,t,a,s,n,r,i){try{var o=e[r](i),c=o.value}catch(e){return void a(e)}o.done?t(c):Promise.resolve(c).then(s,n)}function i(e){return function(){var t=this,a=arguments;return new Promise((function(s,n){var i=e.apply(t,a);function o(e){r(i,s,n,o,c,"next",e)}function c(e){r(i,s,n,o,c,"throw",e)}o(void 0)}))}}var o={name:"Username",data:function(){return{searchQuery:this.$page.props.user.username,isTyping:!1,isLoading:!1,keyUp:!1,saving:!1}},watch:{searchQuery:_.debounce((function(){this.isTyping=!1}),700),isTyping:function(e){!e&&this.keyUp&&this.searchQuery.length>0&&this.search(this.searchQuery)}},methods:{search:function(e){var t=this;return i(n.a.mark((function a(){return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.isLoading=!0,a.next=3,t.$inertia.post(route("page-settings.info.check-username"),{username:e});case 3:t.keyUp=!1,t.isLoading=!1;case 5:case"end":return a.stop()}}),a)})))()},save:function(){var e=this;return i(n.a.mark((function t(){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.saving=!0,t.next=3,e.$inertia.post(route("page-settings.info.username"),{username:e.searchQuery},{preserveScroll:!0});case 3:e.saving=!1;case 4:case"end":return t.stop()}}),t)})))()}}},c=a(1),u=Object(c.a)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",[a("v-title",{staticClass:"mb-5",attrs:{small:""}},[e._v("Edit Username")]),e._v(" "),a("form",[a("v-input",{staticClass:"mb-2",attrs:{name:"username",label:"Username"},on:{keyup:function(t){e.keyUp=!0},input:function(t){e.isTyping=!0}},model:{value:e.searchQuery,callback:function(t){e.searchQuery=t},expression:"searchQuery"}}),e._v(" "),a("div",{staticClass:"text-sm mb-5"},[e.isLoading?a("span",{staticClass:"text-gray-500"},[e._v("Checking...")]):e.$page.props.errors.username?a("span",{staticClass:"text-red-500"},[e._v(e._s(e.$page.props.errors.username.username))]):a("span",{staticClass:"text-green-500"},[e._v("This username is available")])]),e._v(" "),a("v-button",{attrs:{loading:e.saving,disabled:e.saving||e.isLoading},on:{click:e.save}},[e._v("Save")])],1)],1)}),[],!1,null,null,null);t.default=u.exports},13:function(e,t,a){"use strict";a.r(t);var s=a(3),n=a.n(s);function r(e,t,a,s,n,r,i){try{var o=e[r](i),c=o.value}catch(e){return void a(e)}o.done?t(c):Promise.resolve(c).then(s,n)}var i={name:"Info",data:function(){return{form:{name:this.$page.props.user.name,bio:this.$page.props.user.bio},saving:!1}},methods:{save:function(){var e,t=this;return(e=n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.saving=!0,e.next=3,t.$inertia.post(route("page-settings.info"),t.form,{preserveScroll:!0});case 3:t.saving=!1;case 4:case"end":return e.stop()}}),e)})),function(){var t=this,a=arguments;return new Promise((function(s,n){var i=e.apply(t,a);function o(e){r(i,s,n,o,c,"next",e)}function c(e){r(i,s,n,o,c,"throw",e)}o(void 0)}))})()}}},o=a(1),c=Object(o.a)(i,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",[a("v-title",{staticClass:"mb-5",attrs:{small:""}},[e._v("Public info")]),e._v(" "),a("div",{staticClass:"flex items-center mb-5"},[a("v-avatar",{ref:"avatar",staticClass:"mr-3 md:mr-5",attrs:{user:e.$page.props.user,size:"w-16 h-16 md:w-20 md:h-20",font:"text-md md:text-2xl",upload:""}}),e._v(" "),a("div",{staticClass:"flex items-center"},[a("v-button",{attrs:{type:"secondary",small:""},on:{click:function(t){return e.$refs.avatar.selectFile()}}},[e._v("Upload")]),e._v(" "),e.$page.props.user.avatar?a("v-button",{staticClass:"ml-2",attrs:{type:"color",color:"red",small:""},on:{click:function(t){e.$inertia.visit(e.route("page-settings.info.avatar"),{method:"delete"})}}},[a("span",{staticClass:"md:hidden"},[e._v("Delete")]),e._v(" "),a("span",{staticClass:"hidden md:block"},[e._v("Delete Avatar")])]):e._e()],1)],1),e._v(" "),a("form",[a("v-input",{staticClass:"mb-3",attrs:{name:"name",label:"Name",error:e.$page.props.errors.info&&e.$page.props.errors.info.name},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),e._v(" "),a("v-textarea",{attrs:{name:"bio",label:"Bio",error:e.$page.props.errors.bio&&e.$page.props.errors.info.bio},model:{value:e.form.bio,callback:function(t){e.$set(e.form,"bio",t)},expression:"form.bio"}}),e._v(" "),a("v-button",{staticClass:"mt-5",attrs:{loading:e.saving},on:{click:e.save}},[e._v("Save")])],1)],1)}),[],!1,null,null,null);t.default=c.exports},27:function(e,t,a){"use strict";a.r(t);var s=a(12),n={name:"PageInfo",components:{Info:a(13).default,Username:s.default}},r=a(1),i=Object(r.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("page-settings",[t("username",{staticClass:"mb-5"}),this._v(" "),t("info",{staticClass:"mb-5"})],1)}),[],!1,null,null,null);t.default=i.exports}}]);