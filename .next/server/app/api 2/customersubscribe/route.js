(()=>{var e={};e.id=494,e.ids=[494],e.modules={56037:e=>{"use strict";e.exports=require("mongoose")},10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},44870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},63709:(e,t,r)=>{"use strict";r.r(t),r.d(t,{patchFetch:()=>g,routeModule:()=>d,serverHooks:()=>y,workAsyncStorage:()=>l,workUnitAsyncStorage:()=>m});var s={};r.r(s),r.d(s,{POST:()=>p});var o=r(42706),i=r(28203),n=r(45994),a=r(34625),u=r(93829),c=r(81755);async function p(e){try{let{name:t,phone:r,email:s,favfood:o,location_id:i}=await e.json();await (0,c.x)();let n=await a.A.findOne({email:s});if(!n){let e=Math.floor(1e3+9e3*Math.random());n=await a.A.create({name:t,phone:r,email:s,favfood:o,code:e})}let p=await u.A.findOne({customer_id:n._id,location_id:i});if(p){if(!p.subscription)return p.subscription=!0,await p.save(),new Response(JSON.stringify({message:"Subscription reactivated successfully.",customer:n,locationCustomer:p}),{status:200,headers:{"Content-Type":"application/json"}});return new Response(JSON.stringify({message:"Customer already subscribed to this location."}),{status:400,headers:{"Content-Type":"application/json"}})}let d=await u.A.create({location_id:i,customer_id:n._id,subscription:!0});return new Response(JSON.stringify({message:"Customer subscribed successfully.",customer:n,locationCustomer:d}),{status:201,headers:{"Content-Type":"application/json"}})}catch(e){return console.error(e),new Response(JSON.stringify({message:"An error occurred while subscribing.",error:e.message}),{status:500,headers:{"Content-Type":"application/json"}})}}let d=new o.AppRouteRouteModule({definition:{kind:i.RouteKind.APP_ROUTE,page:"/api/customersubscribe/route",pathname:"/api/customersubscribe",filename:"route",bundlePath:"app/api/customersubscribe/route"},resolvedPagePath:"/Users/vamsitejchowdary/Documents/GitHub/FoodieAlert/app/api/customersubscribe/route.js",nextConfigOutput:"",userland:s}),{workAsyncStorage:l,workUnitAsyncStorage:m,serverHooks:y}=d;function g(){return(0,n.patchFetch)({workAsyncStorage:l,workUnitAsyncStorage:m})}},96487:()=>{},78335:()=>{},81755:(e,t,r)=>{"use strict";r.d(t,{x:()=>i});var s=r(56037),o=r.n(s);let i=async()=>{try{await o().connect(process.env.MONGODB_URI),console.log("Connected to MongoDB")}catch(e){console.log("Error connecting to MongoDB: ",e)}}},34625:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});var s=r(56037),o=r.n(s);let i=new(o()).Schema({name:{type:String,required:!0},phone:{type:Number,required:!0},email:{type:String,unique:!0,required:!0,lowercase:!0},favfood:{type:String},code:{type:Number,required:!0,default:0}},{timestamps:!0});i.pre("save",function(e){this.email=this.email.toLowerCase(),e()});let n=o().models.Customer||o().model("Customer",i)},93829:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});var s=r(56037),o=r.n(s);let i=new(o()).Schema({location_id:{type:o().Schema.Types.ObjectId,ref:"Location",required:!0},customer_id:{type:o().Schema.Types.ObjectId,ref:"Customer",required:!0},subscription:{type:Boolean,default:!0}},{timestamps:!0}),n=o().models.LocationCustomer||o().model("LocationCustomer",i)},42706:(e,t,r)=>{"use strict";e.exports=r(44870)}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[994],()=>r(63709));module.exports=s})();