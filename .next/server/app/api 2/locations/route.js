(()=>{var e={};e.id=850,e.ids=[850],e.modules={56037:e=>{"use strict";e.exports=require("mongoose")},10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},44870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},29995:(e,t,r)=>{"use strict";r.r(t),r.d(t,{patchFetch:()=>h,routeModule:()=>m,serverHooks:()=>y,workAsyncStorage:()=>g,workUnitAsyncStorage:()=>f});var o={};r.r(o),r.d(o,{GET:()=>l});var i=r(42706),s=r(28203),n=r(45994),a=r(81755),c=r(34625),d=r(93829),u=r(16148),p=r.n(u);async function l(e){try{await (0,a.x)();let t=new URL(e.url).searchParams.get("email"),r=[];if(t){let e=await c.A.findOne({email:t});if(console.log("Fetched customer:",e),e){let t=await d.A.find({customer_id:e._id});t.filter(e=>!0===e.subscription).map(e=>e.location_id.toString()),r=(await p().find({$and:[{$or:[{_id:{$nin:t.map(e=>e.location_id)}},{_id:{$in:t.filter(e=>!e.subscription).map(e=>e.location_id)}}]},{adminstatus:"approved"}]})).map(e=>({...e._doc}))}else console.log("No customer found for the given email."),r=(await p().find({adminstatus:"approved"})).map(e=>({...e._doc}))}else r=(await p().find({adminstatus:"approved"})).map(e=>({...e._doc}));return new Response(JSON.stringify({locations:r}),{status:200,headers:{"Content-Type":"application/json"}})}catch(e){return console.error("Error while fetching locations:",e),new Response(JSON.stringify({message:"An error occurred while fetching locations."}),{status:500,headers:{"Content-Type":"application/json"}})}}let m=new i.AppRouteRouteModule({definition:{kind:s.RouteKind.APP_ROUTE,page:"/api/locations/route",pathname:"/api/locations",filename:"route",bundlePath:"app/api/locations/route"},resolvedPagePath:"/Users/vamsitejchowdary/Documents/GitHub/FoodieAlert/app/api/locations/route.js",nextConfigOutput:"",userland:o}),{workAsyncStorage:g,workUnitAsyncStorage:f,serverHooks:y}=m;function h(){return(0,n.patchFetch)({workAsyncStorage:g,workUnitAsyncStorage:f})}},96487:()=>{},78335:()=>{},81755:(e,t,r)=>{"use strict";r.d(t,{x:()=>s});var o=r(56037),i=r.n(o);let s=async()=>{try{await i().connect(process.env.MONGODB_URI),console.log("Connected to MongoDB")}catch(e){console.log("Error connecting to MongoDB: ",e)}}},34625:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});var o=r(56037),i=r.n(o);let s=new(i()).Schema({name:{type:String,required:!0},phone:{type:Number,required:!0},email:{type:String,unique:!0,required:!0,lowercase:!0},favfood:{type:String}},{timestamps:!0});s.pre("save",function(e){this.email=this.email.toLowerCase(),e()});let n=i().models.Customer||i().model("Customer",s)},93829:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});var o=r(56037),i=r.n(o);let s=new(i()).Schema({location_id:{type:i().Schema.Types.ObjectId,ref:"Location",required:!0},customer_id:{type:i().Schema.Types.ObjectId,ref:"Customer",required:!0},subscription:{type:Boolean,default:!0},code:{type:Number,required:!0,default:0}},{timestamps:!0}),n=i().models.LocationCustomer||i().model("LocationCustomer",s)},16148:(e,t,r)=>{"use strict";let o=r(56037),{Schema:i}=o,s=new i({business_id:{type:o.Schema.Types.ObjectId,ref:"User",required:!0},name:{type:String,required:!0,trim:!0},address:{type:String,required:!0,trim:!0},adminstatus:{type:String,default:"pending"},activestatus:{type:Boolean,default:!0}},{timestamps:!0}),n=o.models.Location||o.model("Location",s);e.exports=n},42706:(e,t,r)=>{"use strict";e.exports=r(44870)}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),o=t.X(0,[994],()=>r(29995));module.exports=o})();