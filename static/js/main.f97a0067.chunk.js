(this["webpackJsonpwild-winnies"]=this["webpackJsonpwild-winnies"]||[]).push([[0],{140:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return y}));var r=n(19),a=n(1),i=n.n(a),c=n(4),s=n(28),o=n(41),u=n(29),l=n(213),p=n(83),d=new s.d.PublicKey("cndy3Z4yapfJBmL3ShUp5exZKqR3z33thTzeNMm2gRZ"),f=new s.d.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),b=function(){var e=Object(c.a)(i.a.mark((function e(t,n,r){var a,s,o,u,l=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=l.length>3&&void 0!==l[3]&&l[3],s=!1,o={slot:0,confirmations:0,err:null},u=0,e.next=6,new Promise(function(){var e=Object(c.a)(i.a.mark((function e(u,l){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){s||(s=!0,console.log("Rejecting for timeout..."),l({timeout:!0}))}),n);case 1:if(s||!a){e.next=7;break}return Object(c.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.getSignatureStatuses([t]);case 3:n=e.sent,o=n&&n.value[0],s||(o?o.err?(console.log("REST error for",t,o),s=!0,l(o.err)):o.confirmations?(console.log("REST confirmation for",t,o),s=!0,u(o)):console.log("REST no confirmations for",t,o):console.log("REST null result for",t,o)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),s||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=5,j(2e3);case 5:e.next=1;break;case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 6:return o=e.sent,r._signatureSubscriptions[u]&&r.removeSignatureListener(u),s=!0,console.log("Returning status",o),e.abrupt("return",o);case 11:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),g=function(t,n,r,a){var i=[{pubkey:n,isSigner:!0,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:r,isSigner:!1,isWritable:!1},{pubkey:a,isSigner:!1,isWritable:!1},{pubkey:s.d.SystemProgram.programId,isSigner:!1,isWritable:!1},{pubkey:o.b,isSigner:!1,isWritable:!1},{pubkey:s.d.SYSVAR_RENT_PUBKEY,isSigner:!1,isWritable:!1}];return new s.d.TransactionInstruction({keys:i,programId:p.b,data:e.from([])})},m=function(){var e=Object(c.a)(i.a.mark((function e(t,n,r){var a,c,o,u,l,p,f,b;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new s.b(r,t,{preflightCommitment:"recent"}),e.next=3,s.a.fetchIdl(d,a);case 3:return c=e.sent,o=new s.a(c,d,a),e.next=7,o.account.candyMachine.fetch(n);case 7:return u=e.sent,l=u.data.itemsAvailable.toNumber(),p=u.itemsRedeemed.toNumber(),f=l-p,b=u.data.whitelistMintSettings&&u.data.whitelistMintSettings.presale&&(!u.data.goLiveDate||u.data.goLiveDate.toNumber()>(new Date).getTime()/1e3),e.abrupt("return",{id:n,program:o,state:{itemsAvailable:l,itemsRedeemed:p,itemsRemaining:f,isSoldOut:0===f,isActive:(b||u.data.goLiveDate.toNumber()<(new Date).getTime()/1e3)&&(!u.endSettings||(u.endSettings.endSettingType.date?u.endSettings.number.toNumber()>(new Date).getTime()/1e3:p<u.endSettings.number.toNumber())),isPresale:b,goLiveDate:u.data.goLiveDate,treasury:u.wallet,tokenMint:u.tokenMint,gatekeeper:u.data.gatekeeper,endSettings:u.data.endSettings,whitelistMintSettings:u.data.whitelistMintSettings,hiddenSettings:u.data.hiddenSettings,price:u.data.price}});case 13:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),h=function(){var t=Object(c.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.d.PublicKey.findProgramAddress([e.from("metadata"),f.toBuffer(),n.toBuffer(),e.from("edition")],f);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),x=function(){var t=Object(c.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.d.PublicKey.findProgramAddress([e.from("metadata"),f.toBuffer(),n.toBuffer()],f);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=Object(c.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.d.PublicKey.findProgramAddress([e.from("candy_machine"),n.toBuffer()],d);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),y=function(){var e=Object(c.a)(i.a.mark((function e(t,n){var a,c,d,b,m,y,j,k,O,w,S,T,P,A,E,R,K,M;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=s.d.Keypair.generate(),e.next=3,Object(p.c)(a.publicKey,n);case 3:if(c=e.sent[0],!t.state.tokenMint){e.next=10;break}return e.next=7,Object(p.c)(t.state.tokenMint,n);case 7:e.t0=e.sent[0],e.next=11;break;case 10:e.t0=n;case 11:return d=e.t0,b=t.id,m=[],y=[a],j=[],e.t1=s.d.SystemProgram,e.t2=n,e.t3=a.publicKey,e.t4=o.a.span,e.next=22,t.program.provider.connection.getMinimumBalanceForRentExemption(o.a.span);case 22:if(e.t5=e.sent,e.t6=o.b,e.t7={fromPubkey:e.t2,newAccountPubkey:e.t3,space:e.t4,lamports:e.t5,programId:e.t6},e.t8=e.t1.createAccount.call(e.t1,e.t7),e.t9=o.c.createInitMintInstruction(o.b,a.publicKey,0,n,n),e.t10=g(c,n,n,a.publicKey),e.t11=o.c.createMintToInstruction(o.b,a.publicKey,c,n,[],1),k=[e.t8,e.t9,e.t10,e.t11],!t.state.gatekeeper){e.next=45;break}return e.t12=m,e.next=34,Object(p.e)(n,t.state.gatekeeper.gatekeeperNetwork);case 34:if(e.t13=e.sent[0],e.t14={pubkey:e.t13,isWritable:!0,isSigner:!1},e.t12.push.call(e.t12,e.t14),!t.state.gatekeeper.expireOnUse){e.next=45;break}return m.push({pubkey:p.a,isWritable:!1,isSigner:!1}),e.t15=m,e.next=42,Object(p.d)(t.state.gatekeeper.gatekeeperNetwork);case 42:e.t16=e.sent[0],e.t17={pubkey:e.t16,isWritable:!1,isSigner:!1},e.t15.push.call(e.t15,e.t17);case 45:if(!t.state.whitelistMintSettings){e.next=60;break}return O=new s.d.PublicKey(t.state.whitelistMintSettings.mint),e.next=49,Object(p.c)(O,n);case 49:if(w=e.sent[0],m.push({pubkey:w,isWritable:!0,isSigner:!1}),!t.state.whitelistMintSettings.mode.burnEveryTime){e.next=60;break}return S=s.d.Keypair.generate(),m.push({pubkey:O,isWritable:!0,isSigner:!1}),m.push({pubkey:S.publicKey,isWritable:!1,isSigner:!0}),y.push(S),e.next=58,t.program.provider.connection.getAccountInfo(w);case 58:e.sent&&(k.push(o.c.createApproveInstruction(o.b,w,S.publicKey,n,[],1)),j.push(o.c.createRevokeInstruction(o.b,w,n,[])));case 60:return t.state.tokenMint&&(T=s.d.Keypair.generate(),y.push(T),m.push({pubkey:d,isWritable:!0,isSigner:!1}),m.push({pubkey:T.publicKey,isWritable:!1,isSigner:!0}),k.push(o.c.createApproveInstruction(o.b,d,T.publicKey,n,[],t.state.price.toNumber())),j.push(o.c.createRevokeInstruction(o.b,d,n,[]))),e.next=63,x(a.publicKey);case 63:return P=e.sent,e.next=66,h(a.publicKey);case 66:return A=e.sent,e.next=69,v(b);case 69:return E=e.sent,R=Object(r.a)(E,2),K=R[0],M=R[1],e.t18=k,e.next=76,t.program.instruction.mintNft(M,{accounts:{candyMachine:b,candyMachineCreator:K,payer:n,wallet:t.state.treasury,mint:a.publicKey,metadata:P,masterEdition:A,mintAuthority:n,updateAuthority:n,tokenMetadataProgram:f,tokenProgram:o.b,systemProgram:u.SystemProgram.programId,rent:s.d.SYSVAR_RENT_PUBKEY,clock:s.d.SYSVAR_CLOCK_PUBKEY,recentBlockhashes:s.d.SYSVAR_RECENT_BLOCKHASHES_PUBKEY,instructionSysvarAccount:s.d.SYSVAR_INSTRUCTIONS_PUBKEY},remainingAccounts:m.length>0?m:void 0});case 76:return e.t19=e.sent,e.t18.push.call(e.t18,e.t19),e.prev=78,e.next=81,Object(l.a)(t.program.provider.connection,t.program.provider.wallet,[k,j],[y,[]]);case 81:return e.abrupt("return",e.sent.txs.map((function(e){return e.txid})));case 84:e.prev=84,e.t20=e.catch(78),console.log(e.t20);case 87:return e.abrupt("return",[]);case 88:case"end":return e.stop()}}),e,null,[[78,84]])})));return function(t,n){return e.apply(this,arguments)}}(),j=function(e){return new Promise((function(t){return setTimeout(t,e)}))}}).call(this,n(5).Buffer)},213:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r,a=n(11),i=n(1),c=n.n(i),s=n(4),o=n(29),u=n(102);!function(e){e[e.Sequential=0]="Sequential",e[e.Parallel=1]="Parallel",e[e.StopOnFailure=2]="StopOnFailure"}(r||(r={}));var l=function(){var e=Object(s.a)(c.a.mark((function e(t,n,i,s){var l,p,d,b,g,m,h,x,v,y,j,k,O,w,S=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l=S.length>4&&void 0!==S[4]?S[4]:r.Parallel,p=S.length>5&&void 0!==S[5]?S[5]:"singleGossip",d=S.length>6&&void 0!==S[6]?S[6]:function(e,t){},b=S.length>7&&void 0!==S[7]?S[7]:function(e,t){return!1},g=S.length>8?S[8]:void 0,n.publicKey){e.next=7;break}throw new u.e;case 7:if(m=[],g){e.next=12;break}return e.next=11,t.getRecentBlockhash(p);case 11:g=e.sent;case 12:h=function(e){var t=i[e],r=s[e];if(0===t.length)return"continue";var c=new o.Transaction;t.forEach((function(e){return c.add(e)})),c.recentBlockhash=g.blockhash,c.setSigners.apply(c,[n.publicKey].concat(Object(a.a)(r.map((function(e){return e.publicKey}))))),r.length>0&&c.partialSign.apply(c,Object(a.a)(r)),m.push(c)},x=0;case 14:if(!(x<i.length)){e.next=21;break}if("continue"!==h(x)){e.next=18;break}return e.abrupt("continue",18);case 18:x++,e.next=14;break;case 21:return e.next=23,n.signAllTransactions(m);case 23:v=e.sent,y=[],j={breakEarly:!1,i:0},console.log("Signed txns length",v.length,"vs handed in length",i.length),k=c.a.mark((function e(n){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((a=f({connection:t,signedTransaction:v[n]})).then((function(e){var t=e.txid;e.slot;d(t,n)})).catch((function(e){b(v[n],n),l===r.StopOnFailure&&(j.breakEarly=!0,j.i=n)})),l===r.Parallel){e.next=21;break}return e.prev=3,e.next=6,a;case 6:e.next=19;break;case 8:if(e.prev=8,e.t0=e.catch(3),console.log("Caught failure",e.t0),!j.breakEarly){e.next=19;break}return console.log("Died on ",j.i),e.t1=j.i,e.next=16,Promise.all(y);case 16:return e.t2=e.sent,e.t3={number:e.t1,txs:e.t2},e.abrupt("return",{v:e.t3});case 19:e.next=22;break;case 21:y.push(a);case 22:case"end":return e.stop()}}),e,null,[[3,8]])})),O=0;case 29:if(!(O<v.length)){e.next=37;break}return e.delegateYield(k(O),"t0",31);case 31:if("object"!==typeof(w=e.t0)){e.next=34;break}return e.abrupt("return",w.v);case 34:O++,e.next=29;break;case 37:if(l===r.Parallel){e.next=40;break}return e.next=40,Promise.all(y);case 40:return e.t1=v.length,e.next=43,Promise.all(y);case 43:return e.t2=e.sent,e.abrupt("return",{number:e.t1,txs:e.t2});case 45:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),p=function(){return(new Date).getTime()/1e3},d=15e3;function f(e){return b.apply(this,arguments)}function b(){return(b=Object(s.a)(c.a.mark((function e(t){var n,r,a,i,o,u,l,f,b,m,x,y,j;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.signedTransaction,r=t.connection,a=t.timeout,i=void 0===a?d:a,o=n.serialize(),u=p(),l=0,e.next=6,r.sendRawTransaction(o,{skipPreflight:!0});case 6:return f=e.sent,console.log("Started awaiting confirmation for",f),b=!1,Object(s.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(b||!(p()-u<i)){e.next=6;break}return r.sendRawTransaction(o,{skipPreflight:!0}),e.next=4,v(500);case 4:e.next=0;break;case 6:case"end":return e.stop()}}),e)})))(),e.prev=10,e.next=13,h(f,i,r,"recent",!0);case 13:if(m=e.sent){e.next=16;break}throw new Error("Timed out awaiting confirmation on transaction");case 16:if(!m.err){e.next=19;break}throw console.error(m.err),new Error("Transaction failed: Custom instruction error");case 19:l=(null===m||void 0===m?void 0:m.slot)||0,e.next=47;break;case 22:if(e.prev=22,e.t0=e.catch(10),console.error("Timeout Error caught",e.t0),!e.t0.timeout){e.next=27;break}throw new Error("Timed out awaiting confirmation on transaction");case 27:return x=null,e.prev=28,e.next=31,g(r,n,"single");case 31:x=e.sent.value,e.next=36;break;case 34:e.prev=34,e.t1=e.catch(28);case 36:if(!x||!x.err){e.next=47;break}if(!x.logs){e.next=46;break}y=x.logs.length-1;case 39:if(!(y>=0)){e.next=46;break}if(!(j=x.logs[y]).startsWith("Program log: ")){e.next=43;break}throw new Error("Transaction failed: "+j.slice("Program log: ".length));case 43:--y,e.next=39;break;case 46:throw new Error(JSON.stringify(x.err));case 47:return e.prev=47,b=!0,e.finish(47);case 50:return console.log("Latency",f,p()-u),e.abrupt("return",{txid:f,slot:l});case 52:case"end":return e.stop()}}),e,null,[[10,22,47,50],[28,34]])})))).apply(this,arguments)}function g(e,t,n){return m.apply(this,arguments)}function m(){return(m=Object(s.a)(c.a.mark((function e(t,n,r){var a,i,s,o,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._recentBlockhash(t._disableBlockhashCaching);case 2:return n.recentBlockhash=e.sent,a=n.serializeMessage(),i=n._serialize(a),s=i.toString("base64"),o=[s,{encoding:"base64",commitment:r}],e.next=10,t._rpcRequest("simulateTransaction",o);case 10:if(!(u=e.sent).error){e.next=13;break}throw new Error("failed to simulate transaction: "+u.error.message);case 13:return e.abrupt("return",u.result);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e,t,n){return x.apply(this,arguments)}function x(){return(x=Object(s.a)(c.a.mark((function e(t,n,r){var a,i,o,u,l,p=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=p.length>3&&void 0!==p[3]?p[3]:"recent",i=p.length>4&&void 0!==p[4]&&p[4],o=!1,u={slot:0,confirmations:0,err:null},l=0,e.next=7,new Promise(function(){var e=Object(s.a)(c.a.mark((function e(p,d){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){o||(o=!0,console.log("Rejecting for timeout..."),d({timeout:!0}))}),n);try{l=r.onSignature(t,(function(e,t){o=!0,u={err:e.err,slot:t.slot,confirmations:0},e.err?(console.log("Rejected via websocket",e.err),d(u)):(console.log("Resolved via websocket",e),p(u))}),a)}catch(f){o=!0,console.error("WS error in setup",t,f)}case 2:if(o||!i){e.next=8;break}return Object(s.a)(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.getSignatureStatuses([t]);case 3:n=e.sent,u=n&&n.value[0],o||(u?u.err?(console.log("REST error for",t,u),o=!0,d(u.err)):u.confirmations?(console.log("REST confirmation for",t,u),o=!0,p(u)):console.log("REST no confirmations for",t,u):console.log("REST null result for",t,u)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),o||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=6,v(2e3);case 6:e.next=2;break;case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 7:return u=e.sent,r._signatureSubscriptions[l]&&r.removeSignatureListener(l),o=!0,console.log("Returning status",u),e.abrupt("return",u);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return new Promise((function(t){return setTimeout(t,e)}))}},233:function(e,t,n){},234:function(e,t,n){},235:function(e,t){},236:function(e,t){},266:function(e,t){},267:function(e,t){},334:function(e,t,n){"use strict";n.r(t);var r,a,i,c=n(3),s=n.n(c),o=n(35),u=n.n(o),l=(n(233),n(234),n(28)),p=n(8),d=n(1),f=n.n(d),b=n(4),g=n(19),m=n(109),h=n(88),x=n(371),v=n(380),y=n(367),j=n(378),k=n(203),O=n(137),w=n(140),S=n(365),T=n(370),P=n(141),A=n(27),E=Object(h.default)(S.a)(r||(r=Object(m.a)(["all: none;"]))),R=function(e){var t=e.onMint,n=e.candyMachine,r=e.isMinting,a=Object(P.useGateway)(),i=a.requestGatewayToken,s=a.gatewayStatus,o=Object(c.useState)(!1),u=Object(g.a)(o,2),l=u[0],p=u[1];Object(c.useEffect)((function(){s===P.GatewayStatus.ACTIVE&&l&&(t(),p(!1))}),[s,l,p,t]);return Object(A.jsx)(E,{disabled:(null===n||void 0===n?void 0:n.state.isSoldOut)||r||!(null===n||void 0===n?void 0:n.state.isActive),onClick:Object(b.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(p(!0),!(null===n||void 0===n?void 0:n.state.isActive)||!(null===n||void 0===n?void 0:n.state.gatekeeper)){e.next=10;break}if(s!==P.GatewayStatus.ACTIVE){e.next=6;break}p(!0),e.next=8;break;case 6:return e.next=8,i();case 8:e.next=13;break;case 10:return e.next=12,t();case 12:p(!1);case 13:case"end":return e.stop()}}),e)}))),variant:"contained",children:(null===n||void 0===n?void 0:n.state.isSoldOut)?"SOLD OUT":r?Object(A.jsx)(T.a,{}):(null===n||void 0===n?void 0:n.state.isPresale)?"PRESALE MINT":"MINT"})},K=Object(h.default)(O.a)(a||(a=Object(m.a)(["all: none;"]))),M=h.default.div(i||(i=Object(m.a)(["all: none;"]))),B=function(e){var t=Object(c.useState)(!1),n=Object(g.a)(t,2),r=n[0],a=n[1],i=Object(c.useState)(),s=Object(g.a)(i,2),o=s[0],u=s[1],l=Object(c.useState)({open:!1,message:"",severity:void 0}),d=Object(g.a)(l,2),m=d[0],h=d[1],O=(e.rpcHost,Object(k.b)()),S=Object(c.useMemo)((function(){if(O&&O.publicKey&&O.signAllTransactions&&O.signTransaction)return{publicKey:O.publicKey,signAllTransactions:O.signAllTransactions,signTransaction:O.signTransaction}}),[O]),T=Object(c.useCallback)(Object(b.a)(f.a.mark((function t(){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(S){t.next=2;break}return t.abrupt("return");case 2:if(!e.candyMachineId){t.next=14;break}return t.prev=3,t.next=6,Object(w.b)(S,e.candyMachineId,e.connection);case 6:n=t.sent,u(n),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(3),console.log("There was a problem fetching Candy Machine state"),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[3,10]])}))),[S,e.candyMachineId,e.connection]),P=function(){var t=Object(b.a)(f.a.mark((function t(){var n,r,i,c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,a(!0),null===(n=document.getElementById("#identity"))||void 0===n||n.click(),!(O.connected&&(null===o||void 0===o?void 0:o.program)&&O.publicKey)){t.next=13;break}return t.next=6,Object(w.c)(o,O.publicKey);case 6:if(r=t.sent[0],i={err:!0},!r){t.next=12;break}return t.next=11,Object(w.a)(r,e.txTimeout,e.connection,!0);case 11:i=t.sent;case 12:i&&!i.err?h({open:!0,message:"Congratulations! Mint succeeded!",severity:"success"}):h({open:!0,message:"Mint failed! Please try again!",severity:"error"});case 13:t.next=20;break;case 15:t.prev=15,t.t0=t.catch(0),c=t.t0.msg||"Minting failed! Please try again!",t.t0.msg?311===t.t0.code?(c="SOLD OUT!",window.location.reload()):312===t.t0.code&&(c="Minting period hasn't started yet."):t.t0.message?t.t0.message.indexOf("0x137")?c="SOLD OUT!":t.t0.message.indexOf("0x135")&&(c="Insufficient funds to mint. Please fund your wallet."):c="Transaction Timeout! Please try again.",h({open:!0,message:c,severity:"error"});case 20:return t.prev=20,T(),a(!1),t.finish(20);case 24:case"end":return t.stop()}}),t,null,[[0,15,20,24]])})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){T()}),[S,e.candyMachineId,e.connection,T]),Object(A.jsx)("main",{style:{position:"relative"},children:Object(A.jsxs)(x.a,{children:[Object(A.jsx)(x.a,{children:Object(A.jsx)(y.a,{children:O.connected?Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)("main",{style:{position:"relative"},children:O&&Object(A.jsx)("div",{style:{width:"100%",display:"flex",flexDirection:"row",justifyContent:"space-between",margin:"auto"},children:Object(A.jsxs)("div",{style:{margin:"auto"},children:[Object(A.jsx)("p",{children:"Drop Date: 02/12/2022 @ 8:00:00 PM"}),Object(A.jsxs)("p",{style:{margin:"0% 0% 5% 20%"},children:["Items Minted: ",null===o||void 0===o?void 0:o.state.itemsRedeemed," / ",null===o||void 0===o?void 0:o.state.itemsAvailable]})]})})}),Object(A.jsxs)("div",{className:"mintingButtonEnabled",children:[Object(A.jsx)(M,{children:((null===o||void 0===o?void 0:o.state.isActive)&&(null===o||void 0===o?void 0:o.state.gatekeeper)&&O.publicKey&&O.signTransaction,Object(A.jsx)(R,{candyMachine:o,isMinting:r,onMint:P}))}),Object(A.jsx)("div",{children:Object(A.jsx)("p",{style:{width:"100%",fontSize:"25px",marginTop:"-60px"},children:"Minted Items \u2728"})}),Object(A.jsx)("img",{src:"./assets/mario.png",style:{height:"60%",margin:"10% 0% 0% 15%"}})]})]}):Object(A.jsx)("div",{className:"connectButton",children:Object(A.jsx)(K,{children:" "})})})}),Object(A.jsx)(v.a,{open:m.open,autoHideDuration:6e3,onClose:function(){return h(Object(p.a)(Object(p.a)({},m),{},{open:!1}))},children:Object(A.jsx)(j.a,{onClose:function(){return h(Object(p.a)(Object(p.a)({},m),{},{open:!1}))},severity:m.severity,children:m.message})})]})})},_=n(29),I=n(382),C=n(383),N=n(384),D=n(374),L=n(375),W=n(385),U=n(379),F=n(218),Y=n(376),H=Object(F.a)({palette:{type:"dark"},overrides:{MuiButtonBase:{root:{justifyContent:"flex-start"}},MuiButton:{root:{textTransform:void 0,padding:"12px 16px"},startIcon:{marginRight:8},endIcon:{marginLeft:8}}}}),X=function(){try{return new l.d.PublicKey("8mLBZcn57sX5Bjft3bXB4KSjXXJJX6Ah2o56i7TR6qjU")}catch(e){return void console.log("Failed to construct CandyMachineId",e)}}(),q="mainnet-beta",J="https://api.mainnet-beta.solana.com",V=new l.d.Connection(J),z=parseInt(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_CANDY_MACHINE_ID:"8mLBZcn57sX5Bjft3bXB4KSjXXJJX6Ah2o56i7TR6qjU",REACT_APP_SOLANA_NETWORK:"mainnet-beta",REACT_APP_SOLANA_RPC_HOST:"https://api.mainnet-beta.solana.com"}).REACT_APP_CANDY_START_DATE,10),G=function(){var e=Object(c.useMemo)((function(){return Object(_.clusterApiUrl)(q)}),[]),t=Object(c.useMemo)((function(){return[Object(I.a)(),Object(C.a)(),Object(N.a)(),Object(D.a)({network:q}),Object(L.a)({network:q})]}),[]);return Object(A.jsx)(Y.a,{theme:H,children:Object(A.jsx)(W.a,{endpoint:e,children:Object(A.jsx)(U.a,{wallets:t,autoConnect:!0,children:Object(A.jsx)(O.b,{children:Object(A.jsx)(B,{candyMachineId:X,connection:V,startDate:z,txTimeout:3e4,rpcHost:J})})})})})},Z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,386)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),i(e),c(e)}))};u.a.render(Object(A.jsx)(s.a.StrictMode,{children:Object(A.jsx)(G,{})}),document.getElementById("root")),Z()},83:function(e,t,n){"use strict";(function(e){n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return p})),n.d(t,"e",(function(){return d}));var r=n(1),a=n.n(r),i=n(4),c=n(28),s=n(41),o=(n(29),new Intl.NumberFormat("en-US",{style:"decimal",minimumFractionDigits:2,maximumFractionDigits:2}),new c.d.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL")),u=new c.d.PublicKey("gatem74V238djXdzWnJf94Wo1DcnuGkfijbf3AuBhfs"),l=function(){var e=Object(i.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.d.PublicKey.findProgramAddress([n.toBuffer(),s.b.toBuffer(),t.toBuffer()],o);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),p=function(){var t=Object(i.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.d.PublicKey.findProgramAddress([n.toBuffer(),e.from("expire")],u);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=Object(i.a)(a.a.mark((function t(n,r){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.d.PublicKey.findProgramAddress([n.toBuffer(),e.from("gateway"),e.from([0,0,0,0,0,0,0,0]),r.toBuffer()],u);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}).call(this,n(5).Buffer)}},[[334,1,2]]]);
//# sourceMappingURL=main.f97a0067.chunk.js.map