"use strict";(self.webpackChunkgithub_devops_frontend=self.webpackChunkgithub_devops_frontend||[]).push([[6604],{16604:(e,t,a)=>{a.r(t),a.d(t,{default:()=>x});var i=a(65043),s=a(34496),n=a(16569),r=a(20547),d=a(2761),o=a(10898),l=a(27732),c=a(18951),g=a(22238),h=a(43716),u=a(33958),p=a(75337),m=a(82907),y=a(52532),A=a(87288),v=a(70579);const x=()=>{const[e,t]=(0,i.useState)(!1),[a]=s.A.useForm(),x=(0,m.useQueryClient)(),{data:w,isLoading:b}=(0,m.useQuery)(["workItems"],(()=>y.x.getWorkItems())),j=(0,m.useMutation)((e=>y.x.createWorkItem(e)),{onSuccess:()=>{x.invalidateQueries(["workItems"]),t(!1),a.resetFields(),n.Ay.success("\u5de5\u4f5c\u9879\u521b\u5efa\u6210\u529f")},onError:()=>{n.Ay.error("\u521b\u5efa\u5931\u8d25")}}),k=[{title:"ID",dataIndex:"id",key:"id",width:80},{title:"\u6807\u9898",dataIndex:"title",key:"title",width:"30%"},{title:"\u72b6\u6001",dataIndex:"status",key:"status",width:100,render:e=>{const{color:t,text:a}=A.R[e];return(0,v.jsx)(r.A,{color:t,children:a})}},{title:"\u8d1f\u8d23\u4eba",dataIndex:"assignees",key:"assignees",width:200,render:e=>(0,v.jsx)(d.A.Group,{maxCount:3,children:null===e||void 0===e?void 0:e.map((e=>{var t,a,i,s;return(0,v.jsx)(d.A,{src:null===(a=e.user)||void 0===a?void 0:a.avatarUrl,alt:(null===(i=e.user)||void 0===i?void 0:i.name)||(null===(s=e.user)||void 0===s?void 0:s.login)},null===(t=e.user)||void 0===t?void 0:t.id)}))})},{title:"\u521b\u5efa\u4eba",dataIndex:"createdBy",key:"createdBy",width:150,render:e=>(0,v.jsxs)(o.A,{children:[(0,v.jsx)(d.A,{src:null===e||void 0===e?void 0:e.avatarUrl,size:"small"}),(null===e||void 0===e?void 0:e.name)||(null===e||void 0===e?void 0:e.login)]})},{title:"\u521b\u5efa\u65f6\u95f4",dataIndex:"createdAt",key:"createdAt",width:150,render:e=>new Date(e).toLocaleString()},{title:"\u64cd\u4f5c",key:"action",render:(e,t)=>(0,v.jsxs)(o.A,{size:"middle",children:[(0,v.jsx)(l.Ay,{type:"link",size:"small",children:"\u7f16\u8f91"}),(0,v.jsx)(l.Ay,{type:"link",size:"small",danger:!0,children:"\u5220\u9664"})]})}],{data:I,isLoading:$}=(0,m.useQuery)("orgMembers",(()=>y.x.getOrganizationMembers()));return(0,v.jsxs)("div",{className:"card-container",children:[(0,v.jsxs)("div",{className:"page-header",children:[(0,v.jsx)("h2",{className:"page-title",children:"\u5de5\u4f5c\u9879\u5217\u8868"}),(0,v.jsx)(l.Ay,{type:"primary",icon:(0,v.jsx)(p.A,{}),size:"large",onClick:()=>t(!0),children:"\u65b0\u5efa\u5de5\u4f5c\u9879"})]}),(0,v.jsx)(c.A,{columns:k,dataSource:w,loading:b,rowKey:"id",pagination:{pageSize:10,showSizeChanger:!0,showQuickJumper:!0},bordered:!1,rowClassName:()=>"table-row"}),(0,v.jsx)(g.A,{title:"\u65b0\u5efa\u5de5\u4f5c\u9879",visible:e,onCancel:()=>{t(!1),a.resetFields()},footer:null,children:(0,v.jsxs)(s.A,{form:a,layout:"vertical",onFinish:e=>{j.mutate(e)},children:[(0,v.jsx)(s.A.Item,{name:"title",label:"\u6807\u9898",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6807\u9898"}],children:(0,v.jsx)(h.A,{placeholder:"\u8bf7\u8f93\u5165\u5de5\u4f5c\u9879\u6807\u9898"})}),(0,v.jsx)(s.A.Item,{name:"description",label:"\u63cf\u8ff0",children:(0,v.jsx)(h.A.TextArea,{rows:4,placeholder:"\u8bf7\u8f93\u5165\u5de5\u4f5c\u9879\u63cf\u8ff0"})}),(0,v.jsx)(s.A.Item,{name:"assigneeIds",label:"\u8d1f\u8d23\u4eba",rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u8d1f\u8d23\u4eba"}],children:(0,v.jsx)(u.A,{mode:"multiple",placeholder:"\u8bf7\u9009\u62e9\u8d1f\u8d23\u4eba",optionFilterProp:"children",loading:$,children:null===I||void 0===I?void 0:I.map((e=>(0,v.jsx)(u.A.Option,{value:null===e||void 0===e?void 0:e.id,children:(0,v.jsxs)(o.A,{children:[(0,v.jsx)(d.A,{size:"small",src:null===e||void 0===e?void 0:e.avatarUrl}),e.name||e.login]})},null===e||void 0===e?void 0:e.id)))})}),(0,v.jsx)(s.A.Item,{children:(0,v.jsxs)(o.A,{children:[(0,v.jsx)(l.Ay,{type:"primary",htmlType:"submit",loading:j.isLoading,children:"\u521b\u5efa"}),(0,v.jsx)(l.Ay,{onClick:()=>{t(!1),a.resetFields()},children:"\u53d6\u6d88"})]})})]})})]})}},52532:(e,t,a)=>{a.d(t,{x:()=>s});var i=a(30301);const s={getRepositories:async()=>(await i.A.get("/github/repos")).data,getBranches:async e=>(await i.A.get(`/github/repos/${e}/branches`)).data,getRepository:async e=>(await i.A.get(`/github/repos/${e}`)).data,createWorkItem:async e=>(await i.A.post("/github/work-items/create",e)).data,updateWorkItem:async(e,t)=>(await i.A.put(`/github/work-items/${e}`,t)).data,deleteWorkItem:async e=>{await i.A.delete(`/github/work-items/${e}`)},getWorkItems:async()=>(await i.A.get("/github/work-items")).data,getChangeList:async e=>(await i.A.get(`/github/repos/${e}/changes`)).data,createChange:async(e,t)=>(await i.A.post(`/github/repos/${e}/changes`,t)).data,deployChange:async(e,t,a)=>(await i.A.post(`/github/repos/${e}/changes/${t}/deploy`,{environment:a})).data,editChange:async(e,t,a)=>(await i.A.put(`/github/repos/${e}/changes/${t}`,a)).data,deleteChange:async function(e,t){let a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];await i.A.delete(`/github/repos/${e}/changes/${t}`,{data:{deleteRemoteBranch:a}})},getOrganizationMembers:async()=>(await i.A.get("/github/org/members")).data,updateChange:async(e,t)=>(await i.A.put(`/github/changes/${e}`,t)).data,addChangeToPendingDeploy:async(e,t,a)=>(await i.A.post(`/github/repos/${e}/environments/${a}/changes/${t}`)).data,removeChangeFromPendingDeploy:async(e,t,a)=>(await i.A.delete(`/github/repos/${e}/environments/${a}/changes/${t}`)).data,getDeployHistory:async function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10;return(await i.A.get(`/github/repos/${e}/environments/${t}/history`,{params:{limit:a}})).data},dispatch:async e=>(await i.A.post("/github/dispatch",{...e})).data,crateReleaseAndMerge:async e=>(await i.A.post(`/github/env/${e}/merge`)).data}},87288:(e,t,a)=>{a.d(t,{R:()=>s,v:()=>i});let i=function(e){return e.Open="open",e.InProgress="in_progress",e.Done="done",e}({});const s={[i.Open]:{color:"blue",text:"\u5f85\u5904\u7406"},[i.InProgress]:{color:"orange",text:"\u8fdb\u884c\u4e2d"},[i.Done]:{color:"green",text:"\u5df2\u5b8c\u6210"}}}}]);
//# sourceMappingURL=6604.5535db29.chunk.js.map