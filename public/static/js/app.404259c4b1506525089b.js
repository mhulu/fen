webpackJsonp([2,0],{0:function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}var i=n(43),a=s(i),r=n(84),o=s(r),u=n(41),c=s(u),l=n(75),d=s(l);n(38),new a.default({el:"#app",render:function(t){return t(o.default)}}),a.default.use(c.default),window._=d.default},38:function(t,e){},39:function(t,e){},40:function(t,e){},80:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.API_ROOT="http://jtj.wemesh.cn/api/",e.AREA=["请选择您所在辖区","胶州市","市南区","市北区","四方区","黄岛区","崂山区","李沧区","城阳区"]},81:function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}function i(t){if(Array.isArray(t)){if(0!==t.length){for(var e=!0,n=0,s=t.length;n<s&&(e=i(t[n]),e);n++);return e}return!1}return"number"==typeof t||"function"==typeof t||("boolean"==typeof t?t:"string"==typeof t?t.length>0:null!==t&&"object"===("undefined"==typeof t?"undefined":(0,b.default)(t))?(0,f.default)(t).length>0:null!==t&&void 0!==t&&void 0)}function a(t,e){return"string"==typeof t?c(e,10)&&t.length>=parseInt(e,10):!!Array.isArray(t)&&t.length>=parseInt(e,10)}function r(t,e){return"string"==typeof t?c(e,10)&&t.length<=parseInt(e,10):!!Array.isArray(t)&&t.length<=parseInt(e,10)}function o(t,e){return!isNaN(+t)&&!isNaN(+e)&&+t>=+e}function u(t,e){return!isNaN(+t)&&!isNaN(+e)&&+t<=+e}function c(t){return/^(-?[1-9]\d*|0)$/.test(t)}function l(t){return/^1[3|4|5|7|8]\d{9}$/.test(t)}function d(t){return/^[\u4e00-\u9fa5]+$/.test(t)}function h(t){return/^[0-9]{6}$/.test(t)}function p(t){return/^(0[0-9]{2,3}-)?([2-9][0-9]{6,7})+(-[0-9]{1,4})?$/.test(t)}Object.defineProperty(e,"__esModule",{value:!0});var v=n(76),f=s(v),m=n(79),b=s(m);e.required=i,e.minlength=a,e.maxlength=r,e.min=o,e.max=u,e.isMobile=l,e.isChinese=d,e.isPostcode=h,e.isPhone=p},82:function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(85),a=s(i),r=n(81),o=n(80);e.default={data:function(){return{currentStep:1,areas:o.AREA,showAddressInput:!1,area:0,address:"",checkbox:{bulk:{},packet:{}},products:{},mobile:"",authcode:""}},methods:{productChecked:function(t){var e=t.target.id,n=this.checkbox[e].visible;this.checkbox[e]={name:t.target.nextElementSibling.textContent,visible:!n,quantity:1},this.products=window._.reject(this.checkbox,function(t){return!t.visible})},onNextStep:function(){this.currentStep+=1},areaSelected:function(){this.showAddressInput=!0},getSms:function(t){this.$http.post(o.API_ROOT+"getsms",{mobile:this.mobile}).then(function(t){window.alert("验证码已发，请查收")},function(t){window.alert(t.body),window.location.reload()})},submit:function(){this.$http.post(o.API_ROOT+"submit",{mobile:this.mobile,authcode:this.authcode,detail:this.productsForSubmit,address:this.theAddress,device:this.device}).then(function(t){window.alert(t.body),window.location.reload()},function(t){window.alert(t.body)})},goto:function(t){this.currentStep=t}},computed:{nextEnabled:function(){return this.stepCheck["step"+this.currentStep]},prevEnabled:function(){return this.currentStep>1},stepCheck:function(){return{step1:!1,step2:this.checkbox.bulk.visible||this.checkbox.packet.visible,step3:(0,r.minlength)(this.address,2),step4:r.isMobile&&""!==this.authcode,step5:!1}},productsForSubmit:function(){var t=window._.map(this.products,function(t){return t.name+"："+t.quantity+"件"});return window._.join(t,"&")},theAddress:function(){return this.areas[this.area]+this.address},isMobile:function(){return(0,r.isMobile)(this.mobile)},device:function(){return navigator.userAgent}},components:{Number:a.default}}},83:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{min:{type:Number,default:1},max:{type:Number,default:255},step:{type:Number,default:1},value:{type:Number,default:1},price:{type:Number,default:75}},data:function(){return{quantity:1,onUp:!0,onDown:!0}},methods:{quantityUp:function(t){t.target.parentNode.parentNode.firstChild.stepUp(),this.updateVal()},quantityDown:function(t){t.target.parentNode.parentNode.firstChild.stepDown(),this.updateVal()},updateVal:function(){this.$emit("input",Number(this.$refs.input.value)),this.quantity=Number(this.$refs.input.value)}}}},84:function(t,e,n){var s,i;n(39),s=n(82);var a=n(86);i=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(i=s=s.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=s},85:function(t,e,n){var s,i;n(40),s=n(83);var a=n(87);i=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(i=s=s.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=s},86:function(t,e){t.exports={render:function(){var t=this;return t._h("div",{staticClass:"container vcenter"},[t._h("div",{staticClass:"u-full-width",attrs:{id:"content"}},[t._h("div",[t._h("h5",{directives:[{name:"show",rawName:"v-show",value:5!==t.currentStep,expression:"currentStep!==5"}],staticClass:"text-error"},["正宗大相家粉条预约"])," ",t._h("div",{directives:[{name:"show",rawName:"v-show",value:1===t.currentStep,expression:"currentStep===1"}],staticClass:"row"},[t._m(0)," ",t._h("button",{staticClass:"button button-primary u-pull-right",on:{click:t.onNextStep}},["点击预约"])])])," "," ",t._h("div",{directives:[{name:"show",rawName:"v-show",value:2===t.currentStep,expression:"currentStep===2"}]},[t._h("div",{staticClass:"row"},[t._h("div",{staticClass:"columns xs-twelve"},[t._h("label",{staticClass:"block"},["第1步：请选择下面的商品"])," ",t._h("input",{attrs:{type:"checkbox",id:"packet",value:"packet"},on:{click:t.productChecked}})," ",t._h("label",{attrs:{for:"packet"}},["礼盒(450克×4包)"])," ",t._h("input",{attrs:{type:"checkbox",id:"bulk",value:"bulk"},on:{click:t.productChecked}})," ",t._h("label",{attrs:{for:"bulk"}},["散装(5斤包)"])])])," ",t._h("div",{directives:[{name:"show",rawName:"v-show",value:t.checkbox.packet.visible,expression:"checkbox.packet.visible"}],staticClass:"row item"},[t._m(1)," ",t._h("div",{staticClass:"columns xs-seven"},[t._h("number",{directives:[{name:"model",rawName:"v-model",value:t.checkbox.packet.quantity,expression:"checkbox.packet.quantity"}],attrs:{price:75},domProps:{value:t.checkbox.packet.quantity},on:{input:function(e){t.checkbox.packet.quantity=e}}})])])," ",t._h("div",{directives:[{name:"show",rawName:"v-show",value:t.checkbox.bulk.visible,expression:"checkbox.bulk.visible"}],staticClass:"row item"},[t._m(2)," ",t._h("div",{staticClass:"columns xs-seven"},[t._h("number",{directives:[{name:"model",rawName:"v-model",value:t.checkbox.bulk.quantity,expression:"checkbox.bulk.quantity"}],attrs:{price:75},domProps:{value:t.checkbox.bulk.quantity},on:{input:function(e){t.checkbox.bulk.quantity=e}}})])])])," "," "," ",t._h("div",{directives:[{name:"show",rawName:"v-show",value:3===t.currentStep,expression:"currentStep===3"}]},[t._h("label",{attrs:{for:"address"}},["第2步：约定接货地点"])," ",t._h("select",{directives:[{name:"model",rawName:"v-model",value:t.area,expression:"area"}],staticClass:"u-full-width",staticStyle:{"margin-top":"15px"},attrs:{name:"address"},on:{change:[function(e){t.area=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e})[0]},t.areaSelected]}},[t._l(t.areas,function(e,n){return t._h("option",{attrs:{disabled:0===n},domProps:{value:n}},[t._s(e)])})])," ",t._h("div",{directives:[{name:"show",rawName:"v-show",value:t.showAddressInput,expression:"showAddressInput"}]},[t._h("label",["您在"+t._s(t.areas[t.area])+"的位置"])," ",t._h("input",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"address"}],staticClass:"u-full-width",attrs:{type:"text",placeholder:"建议填写您附近的地标"},domProps:{value:t._s(t.address)},on:{input:function(e){e.target.composing||(t.address=e.target.value)}}})])])," "," "," ",t._h("div",{directives:[{name:"show",rawName:"v-show",value:4===t.currentStep,expression:"currentStep===4"}]},[t._h("label",{attrs:{for:"phone"}},["第3步：填写并验证手机 "])," ",t._h("div",{staticClass:"row"},[t._h("div",{staticClass:"columns twelve"},[t._h("input",{directives:[{name:"model",rawName:"v-model",value:t.mobile,expression:"mobile"}],staticClass:"u-full-width",attrs:{type:"number",maxlength:"11",placeholder:"您的手机号码"},domProps:{value:t._s(t.mobile)},on:{input:function(e){e.target.composing||(t.mobile=t._n(e.target.value))}}})])])," ",t._h("div",{staticClass:"row"},[t._h("div",{staticClass:"columns xs-six"},[t._h("input",{directives:[{name:"model",rawName:"v-model",value:t.authcode,expression:"authcode"}],staticClass:"u-full-width",attrs:{type:"number",placeholder:"您收到的短信码",id:"authcode"},domProps:{value:t._s(t.authcode)},on:{input:function(e){e.target.composing||(t.authcode=t._n(e.target.value))}}})])," ",t._h("div",{staticClass:"columns xs-six"},[t._h("button",{staticClass:"button button-primary",attrs:{disabled:!t.isMobile},on:{click:function(e){e.preventDefault(),t.getSms(e)}}},["获取验证码"])])])])," "," "," ",t._h("div",{directives:[{name:"show",rawName:"v-show",value:5===t.currentStep,expression:"currentStep===5"}]},[t._h("h5",["信息核对"])," ",t._h("ul",{staticClass:"card"},[t._l(t.products,function(e){return t._h("li",[t._s(e.name)+" × "+t._s(e.quantity)])})," ",t._h("li",["您的手机："+t._s(t.mobile)])," ",t._h("li",["送货地址："+t._s(t.theAddress)])])," ",t._h("div",{staticClass:"row"},[t._h("div",{staticClass:"columns xs-six"},[t._h("a",{staticClass:"button button-success",attrs:{href:"#"},on:{click:function(e){t.goto(2)}}},["修改一下"])])," ",t._h("div",{staticClass:"columns xs-six"},[t._h("button",{staticClass:"button button-primary",on:{click:function(e){e.preventDefault(),t.submit(e)}}},["提交预订"])])])])," "," ",t._h("div",{staticClass:"row",staticStyle:{"margin-top":"25px"}},[t._h("a",{directives:[{name:"show",rawName:"v-show",value:t.nextEnabled,expression:"nextEnabled"}],staticClass:"button button-primary u-pull-right",staticStyle:{"margin-left":"10px"},attrs:{href:"#"},on:{click:t.onNextStep}},["下一步"])])," ",t._h("p",{directives:[{name:"show",rawName:"v-show",value:t.currentStep>1,expression:"currentStep>1"}],staticClass:"text-silence",staticStyle:{"text-indent":"0"}},["注：请认真填选相关信息，送货前我们会再次与您核实地址与数量。有疑问请",t._h("a",{attrs:{href:"tel://18669783161"}},["点击通话"])])," "])])},staticRenderFns:[function(){var t=this;return t._h("div",{staticClass:"columns xs-twelve"},[t._h("p",["我们承诺所有商品均为2016年12月份出品，均为精选正宗大相家粉条。您可以通过公众号（ifentiao）或",t._h("a",{attrs:{href:""}},["点击这里"]),"了解更多情况。"])," ",t._h("p",["我们为胶州市区的朋友提供当天送货上门服务。青岛其他市区的朋友需要根据您的下单时间与接货地点统一协调。"])," ",t._h("p",["有疑问请",t._h("a",{attrs:{href:"tel://18669783161"}},["致电我们"])])])},function(){var t=this;return t._h("div",{staticClass:"columns xs-five"},[t._h("span",{staticClass:"text-error"},["精品礼盒"])])},function(){var t=this;return t._h("div",{staticClass:"columns xs-five"},[t._h("span",{staticClass:"text-error"},["实惠散装"])])}]}},87:function(t,e){t.exports={render:function(){var t=this;return t._h("div",{staticClass:"quantity"},[t._h("input",{ref:"input",attrs:{type:"number",min:t.min,max:t.max,step:t.step,price:t.price},domProps:{value:t.value},on:{input:function(e){t.updateVal()}}})," ",t._h("div",{staticClass:"quantity-nav"},[t._h("a",{directives:[{name:"show",rawName:"v-show",value:t.onUp,expression:"onUp"}],staticClass:"quantity-button quantity-up",on:{click:t.quantityUp}},["+"])," ",t._h("a",{directives:[{name:"show",rawName:"v-show",value:t.onDown,expression:"onDown"}],staticClass:"quantity-button quantity-down",on:{click:t.quantityDown}},["-"])])," ",t._h("span",{staticStyle:{"margin-left":"10px","line-height":"40px"}},["\n    ￥"+t._s(t.quantity*t.price)+"\n  "])])},staticRenderFns:[]}}});
//# sourceMappingURL=app.404259c4b1506525089b.js.map