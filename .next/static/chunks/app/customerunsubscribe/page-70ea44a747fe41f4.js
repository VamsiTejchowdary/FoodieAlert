(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[152],{3509:(e,t,o)=>{Promise.resolve().then(o.bind(o,3855))},3855:(e,t,o)=>{"use strict";o.d(t,{default:()=>s});var r=o(5155),i=o(2115),n=o(2110);function s(){let[e,t]=(0,i.useState)(""),[o,s]=(0,i.useState)(""),[l,c]=(0,i.useState)(""),[d,u]=(0,i.useState)(""),[p,f]=(0,i.useState)([]),[h,m]=(0,i.useState)(""),[x,b]=(0,i.useState)(null),y=async e=>{try{let t=await fetch("api/findcustomerbyemail",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e})}),o=(await t.json()).customer;b(o),(null==o?void 0:o._id)?g(o._id):(f([]),n.oR.error("No customer found with this email."))}catch(e){n.oR.error("Error fetching user data."),console.error("Error fetching user:",e)}},g=async e=>{try{let t=await fetch("/api/fetchlocationsusingcustomerid",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({customerId:e})}),o=(await t.json()).locationIds;o&&o.length>0?j(o):(f([]),n.oR.info("No locations found for this customer."))}catch(e){n.oR.error("Error fetching locations."),console.error("Error fetching locations:",e)}},j=async e=>{try{let t=await fetch("/api/fetchlocationsbyids",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({locationIds:e})}),o=await t.json();f(o.locations||[])}catch(e){n.oR.error("Error fetching location details."),console.error("Error fetching location details:",e)}},S=async r=>{if(r.preventDefault(),!e||!o||!l||!h){u("All fields are required.");return}try{let e=await fetch("/api/unsubscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({customer_id:x._id,location_id:h._id,code:l})}),o=await e.json();console.log(o),200===e.status?(c(""),t(""),s(""),f([]),n.oR.success("Successfully unsubscribed from notifications!")):n.oR.error("Please verify to match email and code.")}catch(e){n.oR.error("Error during unsubscribe process."),console.error("Error unsubscribing:",e)}};return(0,r.jsxs)("div",{style:a.container,children:[(0,r.jsx)("h2",{style:a.title,children:"Unsubscribe from Notifications"}),(0,r.jsxs)("form",{onSubmit:S,style:a.form,children:[(0,r.jsxs)("div",{style:a.formGroup,children:[(0,r.jsx)("label",{htmlFor:"name",style:a.label,children:"Name:"}),(0,r.jsx)("input",{type:"text",id:"name",value:e,onChange:e=>t(e.target.value),style:a.input,required:!0})]}),(0,r.jsxs)("div",{style:a.formGroup,children:[(0,r.jsx)("label",{htmlFor:"email",style:a.label,children:"Email:"}),(0,r.jsx)("input",{type:"email",id:"email",value:o,onChange:e=>{let t=e.target.value;s(t),y(t)},style:a.input,required:!0})]}),(0,r.jsxs)("div",{style:a.formGroup,children:[(0,r.jsx)("label",{htmlFor:"location",style:a.label,children:"Select Location:"}),(0,r.jsxs)("select",{id:"location",value:h?h._id:"",onChange:e=>{m(p.find(t=>t._id===e.target.value))},style:a.input,required:!0,children:[(0,r.jsx)("option",{value:"",children:"-- Select a Location --"}),p.map(e=>(0,r.jsxs)("option",{value:e._id,children:[e.name," - ",e.address]},e._id))]})]}),(0,r.jsxs)("div",{style:a.formGroup,children:[(0,r.jsx)("label",{htmlFor:"code",style:a.label,children:"Code:"}),(0,r.jsx)("input",{type:"text",id:"code",value:l,onChange:e=>c(e.target.value),style:a.input,required:!0})]}),(0,r.jsx)("button",{type:"submit",style:a.button,children:"Unsubscribe"})]}),d&&(0,r.jsx)("p",{style:a.message,children:d}),(0,r.jsx)(n.N9,{})]})}o(5716);let a={container:{maxWidth:"400px",margin:"50px auto",padding:"20px",backgroundColor:"#f9f9f9",borderRadius:"8px",boxShadow:"0 4px 6px rgba(0, 0, 0, 0.1)",textAlign:"center",fontFamily:"'Arial', sans-serif"},title:{fontSize:"24px",fontWeight:"bold",marginBottom:"20px",color:"#333"},form:{display:"flex",flexDirection:"column",gap:"15px"},formGroup:{display:"flex",flexDirection:"column",alignItems:"flex-start"},label:{fontSize:"16px",fontWeight:"bold",marginBottom:"5px",color:"#555"},input:{width:"100%",padding:"10px",fontSize:"14px",borderRadius:"4px",border:"1px solid #ddd",outline:"none",boxSizing:"border-box"},button:{padding:"10px 20px",fontSize:"16px",fontWeight:"bold",color:"#fff",backgroundColor:"#ff5c5c",border:"none",borderRadius:"4px",cursor:"pointer",transition:"background-color 0.3s"},message:{marginTop:"20px",fontSize:"14px",color:"#ff5c5c"}}}},e=>{var t=t=>e(e.s=t);e.O(0,[797,27,441,517,358],()=>t(3509)),_N_E=e.O()}]);