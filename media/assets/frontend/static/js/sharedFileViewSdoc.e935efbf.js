"use strict";(self.webpackChunkseahub_frontend=self.webpackChunkseahub_frontend||[]).push([[500],{22183:function(e,n,a){var o=a(72791),s=a(54164),r=a(32775),c=a(39230),t=a(50906),i=a(63446),d=a(95996),p=a(80184),l=window.app.config,u=l.serviceURL,h=l.siteRoot,w=l.avatarURL,f=window.app.pageOptions.username,m=window.shared.pageOptions,U=m.repoID,k=m.filePerm,v=m.canDownload,L=m.canEdit,R=m.trafficOverLimit,S=m.zipped,g=m.docPath,O=m.docName,P=m.docUuid,b=m.seadocAccessToken,x=m.seadocServerUrl,j=m.assetsUrl,_={can_edit:L,can_download:v,can_upload:!1},I=d.c.getShareLinkPermissionStr(_),y=d.c.getShareLinkPermissionObject(I).text;window.seafile={repoID:U,docPath:g,docName:O,docUuid:P,isOpenSocket:!0,serviceUrl:u,accessToken:b,sdocServer:x,username:f,avatarURL:w,siteRoot:h,sharePermissionText:y,downloadURL:v&&!R?"?".concat(S?"p="+encodeURIComponent(g)+"&":"","dl=1"):"",docPerm:k,historyURL:d.c.generateHistoryURL(h,U,g),assetsUrl:j},s.render((0,p.jsx)(c.a3,{i18n:t.Z,children:(0,p.jsx)(o.Suspense,{fallback:(0,p.jsx)(i.Z,{}),children:(0,p.jsx)(r.S4,{})})}),document.getElementById("wrapper"))}},function(e){e.O(0,[351],(function(){return n=22183,e(e.s=n);var n}));e.O()}]);
//# sourceMappingURL=sharedFileViewSdoc.e935efbf.js.map