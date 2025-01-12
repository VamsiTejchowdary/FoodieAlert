(()=>{var e={};e.id=56,e.ids=[56],e.modules={56037:e=>{"use strict";e.exports=require("mongoose")},10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},44870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},88801:(e,t,s)=>{"use strict";s.r(t),s.d(t,{patchFetch:()=>y,routeModule:()=>d,serverHooks:()=>m,workAsyncStorage:()=>l,workUnitAsyncStorage:()=>g});var r={};s.r(r),s.d(r,{GET:()=>p});var n=s(42706),i=s(28203),o=s(45994),a=s(81755),u=s(16148),c=s.n(u);async function p(e){try{await (0,a.x)();let t=new URL(e.url).searchParams.get("business_id");if(!t)return new Response(JSON.stringify({message:"Missing business_id parameter."}),{status:400,headers:{"Content-Type":"application/json"}});let s=await c().find({business_id:t,activestatus:!0});return new Response(JSON.stringify({locations:s}),{status:200,headers:{"Content-Type":"application/json"}})}catch(e){return console.error("Error while fetching locations:",e),new Response(JSON.stringify({message:"An error occurred while fetching locations."}),{status:500,headers:{"Content-Type":"application/json"}})}}let d=new n.AppRouteRouteModule({definition:{kind:i.RouteKind.APP_ROUTE,page:"/api/fetchlocationsbybusinessid/route",pathname:"/api/fetchlocationsbybusinessid",filename:"route",bundlePath:"app/api/fetchlocationsbybusinessid/route"},resolvedPagePath:"/Users/vamsitejchowdary/Documents/GitHub/FoodieAlert/app/api/fetchlocationsbybusinessid/route.js",nextConfigOutput:"",userland:r}),{workAsyncStorage:l,workUnitAsyncStorage:g,serverHooks:m}=d;function y(){return(0,o.patchFetch)({workAsyncStorage:l,workUnitAsyncStorage:g})}},96487:()=>{},78335:()=>{},81755:(e,t,s)=>{"use strict";s.d(t,{x:()=>i});var r=s(56037),n=s.n(r);let i=async()=>{try{await n().connect(process.env.MONGODB_URI),console.log("Connected to MongoDB")}catch(e){console.log("Error connecting to MongoDB: ",e)}}},16148:(e,t,s)=>{"use strict";let r=s(56037),{Schema:n}=r,i=new n({business_id:{type:r.Schema.Types.ObjectId,ref:"User",required:!0},name:{type:String,required:!0,trim:!0},address:{type:String,required:!0,trim:!0},adminstatus:{type:String,default:"pending"},activestatus:{type:Boolean,default:!0}},{timestamps:!0}),o=r.models.Location||r.model("Location",i);e.exports=o},42706:(e,t,s)=>{"use strict";e.exports=s(44870)}};var t=require("../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[994],()=>s(88801));module.exports=r})();