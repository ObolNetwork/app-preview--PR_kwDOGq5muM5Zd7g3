(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[489],{84679:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/confirm-configuration",function(){return s(19742)}])},98064:function(e,t,s){"use strict";s.d(t,{I:function(){return l}});var r=s(85893),a=s(39618),n=s(63029),i=s(62971);let l=e=>{let{recipients:t}=e,s=(0,n.Z)(t.map(e=>e.address));return(0,r.jsx)(a.iA,{columns:[{accessorKey:"operator",header:"Address"},{accessorKey:"split",header:"Split",css:{width:"70px"}}],rows:t.map((e,t)=>({operator:(0,r.jsx)(i.M,{ensName:s[t],address:e.address}),split:"".concat(e.split||e.percentAllocation," %")}))})}},19742:function(e,t,s){"use strict";s.r(t);var r=s(85893),a=s(71866),n=s(64146),i=s(4010),l=s(39618),o=s(9324),c=s(41518),d=s(87536),u=s(2504),p=s(61279),h=s(80050),y=s(11163),m=s(67294),f=s(98064),x=s(37005),g=s(4579),w=s(28106);let j=()=>{let{account:e,provider:t,chainId:s}=(0,u.kR)(),{handleSubmit:j}=(0,d.cI)({mode:"onChange"}),v=(0,y.useRouter)(),[S,_]=(0,m.useState)(),[b,C]=(0,m.useState)(),[A,T]=(0,m.useState)(!1),[k,E]=(0,m.useState)(""),[N,R]=(0,m.useState)(),[I,M]=(0,m.useState)(),[F,$]=(0,m.useState)(!1),[D,O]=(0,m.useState)(""),[W,K]=(0,m.useState)(null),[V,H]=(0,m.useState)("Deploy Validator Reward Splitter"),L="v1.7.0",[X,Y]=(0,m.useState)(!1),[z,P]=(0,m.useState)(""),U=(0,c.o)(e=>e.clusterDefinition),Z=null==U?void 0:U.operators.some(t=>t.address===e),B=(0,c.o)(e=>e.updateClusterDefinition),q=(0,c.o)(e=>e.completeLeaderStep),J=(0,c.o)(e=>e.enableLeaderStep),Q=()=>{_(null),C(null),E(""),R(""),M(""),T(!1)},G=e=>{console.log(e),Q()};(0,m.useEffect)(()=>{t&&K(new n.Contract(o.tm,i.Mt,null==t?void 0:t.getSigner(0)))},[t]);let ee=async e=>{let t=await (0,h.c0)({token:e,data:S});if(!t.data.config_hash)throw"no config hash returned";E(t.data.config_hash)};if((0,m.useEffect)(()=>{if(S){let r=async()=>{try{let r={creator_config_hash:S.config_hash},a=await (0,p.L6)(t,s,e,r);if(await ee(a),Z){let r={operator_config_hash:S.config_hash},a=await (0,p.AM)(t,s,e,r);M(a);let n={enr:null==U?void 0:U.enr},i=await (0,p.Ol)(t,s,e,n);R(i)}}catch(e){G(e)}};r()}},[S]),(0,m.useEffect)(()=>{if(Z&&b&&k||!Z&&k){q("confirm-configuration");let e=J("invite-group");T(!1),v.push({pathname:e.href,query:{configHash:k}})}},[b,k]),(0,m.useEffect)(()=>{if(Z&&N&&I&&k){let t=async()=>{let t={address:e,enr:null==U?void 0:U.enr,enr_signature:N,fork_version:o.se,version:L},{data:s}=await (0,h.R)({token:I,data:t,configHash:k});C(s)};t().catch(G)}},[N,k]),!U)return(0,r.jsx)(l.xv,{children:"No cluster data ..."});let et=async()=>{try{let e=[...U.recipients];e.sort((e,t)=>e.address.localeCompare(t.address));let r=e.map(e=>e.address),a=e.map(e=>{let t=(1e4*parseFloat(e.split)).toFixed(0);return parseInt(t)}),n=await W.predictImmutableSplitAddress(r,a,o.Uu);console.log("predictedSplitAddress",n);let i=await (0,g.Kv)(n,s);if(i){P(o.Oy);return}let l=await (0,g.u_)({accounts:r,percentAllocations:a},U.principal,U.validatorsSize,t.getSigner(0));if(console.log(l,"validatorRewardSplitterAddresses"),Array.isArray(l)){let e=l[0].map(e=>({feeRecipientAddress:l[1],withdrawalAddress:e}));B({...U,validators:e}),H("Validator Reward Splitter Deployed Successfully"),O(l[1])}}catch(t){let e=(null==t?void 0:t.message).match(/^(.*?)(?=\s*\()/)?(null==t?void 0:t.message).match(/^(.*?)(?=\s*\()/)[0]:null==t?void 0:t.message;P(e)}},es=async e=>{if(e.preventDefault(),!F){$(!0);try{await et(),$(!1)}catch(e){console.log(e,"errr"),$(!1)}}},er=async()=>{if(A)return;console.log(JSON.stringify(U),"currentClusterData");let e=(0,p.KH)(U,L);console.log(e.config_hash,"config_hashconfig_hash"),_(e),T(!0)};(0,p.zT)(null==U?void 0:U.clusterSize);let ea=()=>(0,r.jsx)(l.W2,{className:"cluster-details",alignItems:"start",children:(0,r.jsxs)(l.kC,{direction:"column",css:{gap:"$2xl"},children:[(0,r.jsx)(w.uo,{}),(0,r.jsx)(a.VL,{operators:[...null==U?void 0:U.operators],currentAccount:e})]})}),en=()=>(0,r.jsxs)(l.W2,{className:"enr-section",alignItems:"start",css:{gap:"$lg"},children:[(0,r.jsxs)(l.kC,{direction:"column",css:{gap:"$sm"},children:[(0,r.jsxs)(l.kC,{css:{alignItems:"center",gap:"$xxxs"},children:[(0,r.jsx)(l.xv,{variant:"subline",color:"body",css:{textTransform:"uppercase"},children:"Your Charon client ENR"}),(0,r.jsx)(l.KZ,{content:'An ENR is an "Ethereum Node Record" used to identify your client to the other clients in the cluster"',children:(0,r.jsx)(l.xu,{css:{display:"flex"},children:(0,r.jsx)(l.by,{})})})]}),(0,r.jsx)(a.Kx,{css:{minHeight:"115px"},placeholder:"Your enr",value:null==U?void 0:U.enr,readOnly:!0})]}),(0,r.jsxs)(l.rU,{href:"https://docs.obol.tech/docs/next/int/faq/errors#enrs-keys",target:"_blank",children:["More on Ethereum Node Records ",(0,r.jsx)(l.ZJ,{})]})]});return(0,r.jsxs)(l.kC,{direction:"column",css:{gap:"$2xl"},children:[(0,r.jsx)(l.xv,{variant:"h3",children:"Confirm Configuration"}),(0,r.jsxs)(a.l0,{onSubmit:j(er),children:[(0,r.jsx)(x.T,{name:"reward_split_withdrawal_flow",children:(null==U?void 0:U.principal)&&!(null==U?void 0:U.singleAddress)&&(0,r.jsxs)(l.kC,{direction:"column",css:{gap:"$2xl"},children:[(0,r.jsx)(ea,{}),(0,r.jsx)(w.XD,{}),Z&&(0,r.jsx)(en,{}),(0,r.jsxs)(l.W2,{className:"withdrawal-section",css:{gap:"$xl"},alignItems:"start",children:[(0,r.jsx)(l.xv,{variant:"h4",children:"Split Addresses"}),(0,r.jsx)(f.I,{recipients:U.recipients}),D&&(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(a.VL,{operators:U.validators.map(e=>({address:e.withdrawalAddress})),currentAccount:e,header:"Validator Withdrawal Contract Addresses"})}),(0,r.jsx)(a.fl,{color:"primary",type:"button",onClick:es,disabled:"Validator Reward Splitter Deployed Successfully"==V||!!z,children:(0,r.jsxs)(r.Fragment,{children:[F&&(0,r.jsx)(l.yC,{}),V]})}),z&&(0,r.jsx)(l.xv,{variant:"metadata",color:"test",children:z})]}),(0,r.jsx)(l.kC,{direction:"column",children:(0,r.jsxs)(l.W2,{className:"enr-section",alignItems:"start",css:{gap:"$lg"},children:[(0,r.jsx)(l.kC,{direction:"column",css:{gap:"$xs"},children:(0,r.jsx)(l.xv,{variant:"h4",children:"Confirm Details "})}),(0,r.jsxs)(l.kC,{direction:"column",css:{gap:"$xl"},children:[(0,r.jsxs)(l.kC,{css:{gap:"$xs",width:"$full"},children:[(0,r.jsx)(l.xu,{children:(0,r.jsx)(l.XZ,{checked:X,onCheckedChange:()=>Y(!X)})}),(0,r.jsx)(l.xv,{variant:"body",children:"You will be prompted to sign a message with your wallet. This signature is attesting to the fact that:"})]}),(0,r.jsx)(l.sQ,{heading:"You have confirmed the withdrawal address for the validators to be created is correct. If this address is a contract, you have confirmed the contract implementation is correct. If this address is an externally-owned account, you have confirmed that the EOA custody is secure."}),(0,r.jsx)(l.sQ,{heading:"You have submitted your charon node's Ethereum Node Record (ENR) correctly. This signature is the authorisation of this charon client to act on your behalf."})]}),(0,r.jsx)(a.fl,{color:"primary",type:"submit",disabled:!D||!X,children:(0,r.jsxs)(r.Fragment,{children:[A&&(0,r.jsx)(l.yC,{}),"Confirm and Sign"]})})]})})]})}),!(null==U?void 0:U.principal)&&(null==U?void 0:U.singleAddress)&&(0,r.jsx)(x.T,{name:"single_reward_address_flow",children:(0,r.jsxs)(l.kC,{direction:"column",css:{gap:"$2xl"},children:[(0,r.jsx)(ea,{}),(0,r.jsx)(w.XD,{}),Z&&(0,r.jsx)(en,{}),(0,r.jsxs)(l.W2,{className:"withdrawal-section",css:{gap:"$lg"},alignItems:"start",children:[(0,r.jsx)(l.xv,{variant:"h4",children:"Withdrawal Addresses"}),(0,r.jsx)(w.nB,{heading:"Principal Address",description:"The withdrawal address or contract will receive 100%.",value:null==U?void 0:U.singleAddress,className:"single-address-section"}),(0,r.jsx)(w.nB,{heading:"Fee Recipient Address",description:"Address to receive transaction fees from block proposals.",value:null==U?void 0:U.feeRecipientAddress,className:"fee-recipient-address-section"})]}),(0,r.jsx)(l.kC,{direction:"column",children:(0,r.jsx)(l.zx,{color:"primary",type:"submit",css:{"& div":{m:0}},"data-testid":"confirm-config-button",children:(0,r.jsxs)(r.Fragment,{children:[A&&(0,r.jsx)(l.yC,{}),"Confirm and Sign"]})})})]})})]})]})};t.default=j,j.layout="ProgressTrackerLayout"},4579:function(e,t,s){"use strict";s.d(t,{Kv:function(){return u},u_:function(){return d},Np:function(){return p},h_:function(){return h}});var r=s(9279),a=s(64146),n=s(34858),i={abi:[{inputs:[{internalType:"address",name:"_waterfallFactoryModule",type:"address"},{internalType:"address",name:"_splitMain",type:"address"},{internalType:"string",name:"_ensName",type:"string"},{internalType:"address",name:"_ensReverseRegistrar",type:"address"},{internalType:"address",name:"_ensOwner",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{inputs:[{components:[{internalType:"address[]",name:"accounts",type:"address[]"},{internalType:"uint32[]",name:"percentAllocations",type:"uint32[]"},{internalType:"uint32",name:"distributorFee",type:"uint32"},{internalType:"address",name:"controller",type:"address"}],internalType:"struct SplitConfiguration",name:"_split",type:"tuple"},{internalType:"address payable",name:"_principal",type:"address"},{internalType:"uint256",name:"_numberOfValidators",type:"uint256"}],name:"createETHRewardSplit",outputs:[{internalType:"address[]",name:"withdrawalAddresses",type:"address[]"},{internalType:"address",name:"rewardSplitContract",type:"address"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"splitMain",outputs:[{internalType:"contract ISplitMain",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"waterfallFactoryModule",outputs:[{internalType:"contract IWaterfallFactoryModule",name:"",type:"address"}],stateMutability:"view",type:"function"}]},l=s(9324),o=s(80050);let c=r.d;async function d(e,t,s,r){try{let n=new a.Contract(l.AB,i.abi,r),o=await n.callStatic.createETHRewardSplit({accounts:e.accounts,percentAllocations:e.percentAllocations,distributorFee:l.Uu,controller:c},t,s),d=await n.createETHRewardSplit({accounts:e.accounts,percentAllocations:e.percentAllocations,distributorFee:l.Uu,controller:c},t,s);return await d.wait(),o}catch(e){throw Error(e)}}async function u(e,t){try{let s=await (0,o.er)({chainId:t,splitId:e});if(console.log(s,"splitMetadata"),s)return!0;return!1}catch(e){return Error(e)}}let p=async e=>{let{chainId:t,splitId:s,provider:a}=e,i=new n.SplitsClient({chainId:t,provider:a,signer:a.getSigner(0)});try{let e=await i.distributeToken({splitId:s,token:r.d}),{transactionHash:t}=e.event;return t}catch(e){throw Error(e)}},h=async e=>{let{chainId:t,provider:s,address:a}=e,i=new n.SplitsClient({chainId:t,provider:s,signer:s.getSigner(0)});try{let e=await i.withdrawFunds({address:a,tokens:[r.d]}),{transactionHash:t}=e.event;return t}catch(e){throw Error(e)}}}},function(e){e.O(0,[10,774,888,179],function(){return e(e.s=84679)}),_N_E=e.O()}]);