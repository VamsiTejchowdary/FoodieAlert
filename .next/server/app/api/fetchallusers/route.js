(()=>{var e={};e.id=445,e.ids=[445],e.modules={56037:e=>{"use strict";e.exports=require("mongoose")},10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},44870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},41480:(e,r,t)=>{"use strict";t.r(r),t.d(r,{patchFetch:()=>x,routeModule:()=>l,serverHooks:()=>m,workAsyncStorage:()=>d,workUnitAsyncStorage:()=>g});var s={};t.r(s),t.d(s,{GET:()=>c});var o=t(42706),n=t(28203),a=t(45994),i=t(81755),u=t(53253),p=t(39187);async function c(e){try{await (0,i.x)();let e=await u.A.find({role:"user"});if(!e||0===e.length)return p.NextResponse.json({users:[]});return p.NextResponse.json({users:e})}catch(e){return console.log(e),p.NextResponse.json({error:"An error occurred while fetching users."},{status:500})}}let l=new o.AppRouteRouteModule({definition:{kind:n.RouteKind.APP_ROUTE,page:"/api/fetchallusers/route",pathname:"/api/fetchallusers",filename:"route",bundlePath:"app/api/fetchallusers/route"},resolvedPagePath:"/Users/vamsitejchowdary/Documents/GitHub/FoodieAlert/app/api/fetchallusers/route.js",nextConfigOutput:"",userland:s}),{workAsyncStorage:d,workUnitAsyncStorage:g,serverHooks:m}=l;function x(){return(0,a.patchFetch)({workAsyncStorage:d,workUnitAsyncStorage:g})}},96487:()=>{},78335:()=>{},81755:(e,r,t)=>{"use strict";t.d(r,{x:()=>n});var s=t(56037),o=t.n(s);let n=async()=>{try{await o().connect(process.env.MONGODB_URI),console.log("Connected to MongoDB"),console.log("process.env.MONGODB_URI:",process.env.REACT_APP_SERVICE_ID)}catch(e){console.log("Error connecting to MongoDB: ",e)}}},53253:(e,r,t)=>{"use strict";t.d(r,{A:()=>a});var s=t(56037),o=t.n(s);let n=new s.Schema({name:{type:String,required:!0},email:{type:String,required:!0,unique:!0,lowercase:!0},number:{type:Number,required:!0},password:{type:String,required:!0},role:{type:String,default:"user"},status:{type:String,default:"pending"}},{timestamps:!0});n.pre("save",function(e){this.email=this.email.toLowerCase(),e()});let a=s.models.User||o().model("User",n)}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[994,452],()=>t(41480));module.exports=s})();