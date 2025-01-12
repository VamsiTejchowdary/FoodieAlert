(()=>{var e={};e.id=89,e.ids=[89],e.modules={56037:e=>{"use strict";e.exports=require("mongoose")},10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},44870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},67820:(e,t,r)=>{"use strict";r.r(t),r.d(t,{patchFetch:()=>x,routeModule:()=>p,serverHooks:()=>g,workAsyncStorage:()=>l,workUnitAsyncStorage:()=>m});var o={};r.r(o),r.d(o,{POST:()=>d});var s=r(42706),n=r(28203),i=r(45994),a=r(81755),c=r(93829),u=r(39187);async function d(e){try{await (0,a.x)();let{customerId:t}=await e.json(),r=await c.A.find({customer_id:t,subscription:!0}).select("location_id");if(!(r.length>0))return u.NextResponse.json({message:"No locations found for the provided customer ID"},{status:404});{let e=r.map(e=>e.location_id);return u.NextResponse.json({locationIds:e})}}catch(e){return console.error("Error in fetching locations:",e),u.NextResponse.json({message:"An error occurred while fetching locations",error:e.message},{status:500})}}let p=new s.AppRouteRouteModule({definition:{kind:n.RouteKind.APP_ROUTE,page:"/api/fetchlocationsusingcustomerid/route",pathname:"/api/fetchlocationsusingcustomerid",filename:"route",bundlePath:"app/api/fetchlocationsusingcustomerid/route"},resolvedPagePath:"/Users/vamsitejchowdary/Documents/GitHub/FoodieAlert/app/api/fetchlocationsusingcustomerid/route.js",nextConfigOutput:"",userland:o}),{workAsyncStorage:l,workUnitAsyncStorage:m,serverHooks:g}=p;function x(){return(0,i.patchFetch)({workAsyncStorage:l,workUnitAsyncStorage:m})}},96487:()=>{},78335:()=>{},81755:(e,t,r)=>{"use strict";r.d(t,{x:()=>n});var o=r(56037),s=r.n(o);let n=async()=>{try{await s().connect(process.env.MONGODB_URI),console.log("Connected to MongoDB")}catch(e){console.log("Error connecting to MongoDB: ",e)}}},93829:(e,t,r)=>{"use strict";r.d(t,{A:()=>i});var o=r(56037),s=r.n(o);let n=new(s()).Schema({location_id:{type:s().Schema.Types.ObjectId,ref:"Location",required:!0},customer_id:{type:s().Schema.Types.ObjectId,ref:"Customer",required:!0},subscription:{type:Boolean,default:!0},code:{type:Number,required:!0,default:0}},{timestamps:!0}),i=s().models.LocationCustomer||s().model("LocationCustomer",n)}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),o=t.X(0,[994,452],()=>r(67820));module.exports=o})();