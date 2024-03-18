"use strict";(self.webpackChunkseahub_frontend=self.webpackChunkseahub_frontend||[]).push([[539],{1631:function(e,t,i){var n=i(15671),a=i(43144),r=i(60136),s=i(29388),o=i(47313),c=i(42995),l=i(12756),d=i(12213),u=i(74073),h=i(54105),f=i(85951),g=i(5684),p=i(93869),m=i(7764),S=i(21303),D=i(61805),N=i(83854),b=i(46417),v=function(e){(0,r.Z)(i,e);var t=(0,s.Z)(i);function i(e){var a;return(0,n.Z)(this,i),(a=t.call(this,e)).handleChange=function(e){e.target.value.trim()?a.setState({isSubmitBtnActive:!0}):a.setState({isSubmitBtnActive:!1}),a.setState({childName:e.target.value})},a.handleSubmit=function(){if(a.state.isSubmitBtnActive){var e=a.checkDuplicatedName(),t=a.state.childName;if(e){var i=(0,D.ih)('The name "{name}" is already taken. Please choose a different name.');i=i.replace("{name}",N.c.HTMLescape(t)),a.setState({errMessage:i})}else{var n=a.state.parentPath+t,r=a.state,s=r.isMarkdownDraft,o=r.isSdocDraft;a.props.onAddFile(n,s,o),a.props.toggleDialog()}}},a.handleKeyDown=function(e){"Enter"===e.key&&(a.handleSubmit(),e.preventDefault())},a.handleCheck=function(){var e=a.state.childName.lastIndexOf(".");if(a.state.isMarkdownDraft){var t=a.state.childName.substring(e-7,e),i=a.state.childName.substring(0,e-7),n=a.state.childName.substring(e);"(draft)"===t?a.setState({childName:i+n,isMarkdownDraft:!a.state.isMarkdownDraft}):a.setState({isMarkdownDraft:!a.state.isMarkdownDraft})}if(!a.state.isMarkdownDraft)if(e>0){var r=a.state.childName.substring(0,e),s=a.state.childName.substring(e);a.setState({childName:r+"(draft)"+s,isMarkdownDraft:!a.state.isMarkdownDraft})}else 0===e?a.setState({childName:"(draft)"+a.state.childName,isMarkdownDraft:!a.state.isMarkdownDraft}):a.setState({isMarkdownDraft:!a.state.isMarkdownDraft})},a.checkDuplicatedName=function(){return a.props.checkDuplicatedName(a.state.childName)},a.onAfterModelOpened=function(){a.newInput.current&&(a.newInput.current.focus(),a.newInput.current.setSelectionRange(0,0))},a.toggleMarkSdocDraft=function(e){a.setState({isSdocDraft:e.target.checked})},a.state={parentPath:"",childName:e.fileType||"",isMarkdownDraft:!1,isSdocDraft:!1,errMessage:"",isSubmitBtnActive:!!e.fileType.slice(0,-5)},a.newInput=o.createRef(),a}return(0,a.Z)(i,[{key:"componentDidMount",value:function(){var e=this.props.parentPath;"/"===e[e.length-1]?this.setState({parentPath:e}):this.setState({parentPath:e+"/"})}},{key:"render",value:function(){var e=this.props.toggleDialog;return(0,b.jsxs)(c.Z,{isOpen:!0,toggle:e,onOpened:this.onAfterModelOpened,children:[(0,b.jsx)(l.Z,{toggle:e,children:(0,D.ih)("New File")}),(0,b.jsxs)(d.Z,{children:[(0,b.jsx)(u.Z,{children:(0,b.jsxs)(h.Z,{children:[(0,b.jsx)(f.Z,{for:"fileName",children:(0,D.ih)("Name")}),(0,b.jsx)(g.Z,{id:"fileName",onKeyDown:this.handleKeyDown,innerRef:this.newInput,value:this.state.childName,onChange:this.handleChange})]})}),this.state.errMessage&&(0,b.jsx)(p.Z,{color:"danger",className:"mt-2",children:this.state.errMessage})]}),(0,b.jsxs)(m.Z,{children:[(0,b.jsx)(S.Z,{color:"secondary",onClick:e,children:(0,D.ih)("Cancel")}),(0,b.jsx)(S.Z,{color:"primary",onClick:this.handleSubmit,disabled:!this.state.isSubmitBtnActive,children:(0,D.ih)("Submit")})]})]})}}]),i}(o.Component);t.Z=v},60658:function(e,t,i){var n=i(47313),a=i(1168),r=i(72970),s=i(12409),o=i(83854),c=i(51282),l=i(15671),d=i(43144),u=i(60136),h=i(29388),f=i(63036),g=i(4514),p=i(68396),m=i(13884),S=i(63876),D=i(1631),N=i(46417),b=function(e){(0,u.Z)(i,e);var t=(0,h.Z)(i);function i(e){var n;return(0,l.Z)(this,i),(n=t.call(this,e)).onInternalLinkToggle=function(e){e&&e.internalLink&&n.setState({internalLink:e.internalLink}),n.setState({isShowInternalLinkDialog:!n.state.isShowInternalLinkDialog})},n.unmark=function(){var e=n.props,t=e.repoID,i=e.docPath;g.I.sdocUnmarkAsDraft(t,i).then((function(e){n.props.unmarkDraft()})).catch((function(e){var t=o.c.getErrorMsg(e);p.Z.danger(t)}))},n.toggleStar=function(){var e=n.props,t=e.isStarred,i=e.repoID,a=e.docPath;t?g.I.unstarItem(i,a).then((function(e){n.props.toggleStar(!1)})).catch((function(e){var t=o.c.getErrorMsg(e);p.Z.danger(t)})):g.I.starItem(i,a).then((function(e){n.props.toggleStar(!0)})).catch((function(e){var t=o.c.getErrorMsg(e);p.Z.danger(t)}))},n.onShareToggle=function(){n.setState({isShowShareDialog:!n.state.isShowShareDialog})},n.onFreezeDocument=function(){var e=n.props,t=e.repoID,i=e.docPath;g.I.lockfile(t,i,-1).then((function(e){f.Nd.getInstance().dispatch(f.dK.REFRESH_DOCUMENT)})).catch((function(e){var t=o.c.getErrorMsg(e);p.Z.danger(t)}))},n.unFreeze=function(){var e=n.props,t=e.repoID,i=e.docPath;g.I.unlockfile(t,i).then((function(e){f.Nd.getInstance().dispatch(f.dK.REFRESH_DOCUMENT)})).catch((function(e){var t=o.c.getErrorMsg(e);p.Z.danger(t)}))},n.onNewNotification=function(){n.props.onNewNotification()},n.onClearNotification=function(){n.props.onClearNotification()},n.onCreateSdocFile=function(e){null!==e&&void 0!==e&&e.newFileName&&n.setState({fileType:"".concat(e.newFileName,".sdoc")}),n.setState({isShowCreateFileDialog:!n.state.isShowCreateFileDialog})},n.checkDuplicatedName=function(e){return n.props.direntList.some((function(t){return t.name===e}))},n.onAddFile=function(e,t){var i=n.props.repoID;g.I.createFile(i,e,t).then((function(e){f.Nd.getInstance().dispatch(f.dK.INSERT_LINK,{data:e.data})})).catch((function(e){var t=o.c.getErrorMsg(e);p.Z.danger(t)}))},n.state={isShowInternalLinkDialog:!1,isShowShareDialog:!1,internalLink:"",isShowCreateFileDialog:!1,fileType:".sdoc"},n}return(0,d.Z)(i,[{key:"componentDidMount",value:function(){var e=f.Nd.getInstance();this.unsubscribeInternalLinkEvent=e.subscribe(f.dK.INTERNAL_LINK_CLICK,this.onInternalLinkToggle),this.unsubscribeStar=e.subscribe(f.dK.TOGGLE_STAR,this.toggleStar),this.unsubscribeUnmark=e.subscribe(f.dK.UNMARK_AS_DRAFT,this.unmark),this.unsubscribeShare=e.subscribe(f.dK.SHARE_SDOC,this.onShareToggle),this.unsubscribeFreezeDocument=e.subscribe(f.dK.FREEZE_DOCUMENT,this.onFreezeDocument),this.unsubscribeUnfreeze=e.subscribe(f.dK.UNFREEZE,this.unFreeze),this.unsubscribeNewNotification=e.subscribe(f.dK.NEW_NOTIFICATION,this.onNewNotification),this.unsubscribeClearNotification=e.subscribe(f.dK.CLEAR_NOTIFICATION,this.onClearNotification),this.unsubscribeCreateSdocFile=e.subscribe(f.dK.CREATE_SDOC_FILE,this.onCreateSdocFile)}},{key:"componentWillUnmount",value:function(){this.unsubscribeInternalLinkEvent(),this.unsubscribeStar(),this.unsubscribeUnmark(),this.unsubscribeShare(),this.unsubscribeFreezeDocument(),this.unsubscribeUnfreeze(),this.unsubscribeNewNotification(),this.unsubscribeCreateSdocFile(),this.unsubscribeClearNotification()}},{key:"render",value:function(){var e=this.props,t=e.repoID,i=e.docPath,n=e.docName,a=e.docPerm,r=e.dirPath,s=this.state,o=s.isShowInternalLinkDialog,c=s.isShowShareDialog,l=s.internalLink,d=s.isShowCreateFileDialog,u=s.fileType;return(0,N.jsxs)(N.Fragment,{children:[o&&(0,N.jsx)(m.Z,{repoID:t,path:i,internalLink:l,onInternalLinkDialogToggle:this.onInternalLinkToggle}),c&&(0,N.jsx)(S.Z,{itemType:"file",itemPath:i,itemName:n,repoID:t,userPerm:a,toggleDialog:this.onShareToggle}),d&&(0,N.jsx)(D.Z,{parentPath:r,fileType:u,onAddFile:this.onAddFile,checkDuplicatedName:this.checkDuplicatedName,toggleDialog:this.onCreateSdocFile})]})}}]),i}(n.Component),v=b,k=i(55668),w=function(e){(0,u.Z)(i,e);var t=(0,h.Z)(i);function i(e){var n;(0,l.Z)(this,i),(n=t.call(this,e)).toggleStar=function(e){n.setState({isStarred:e})},n.unmarkDraft=function(){n.setState({isDraft:!1})},n.onSetFavicon=function(e){var t=window.seafile.docName;e&&(t+=e);var i=o.c.getFileIconUrl(t,192);document.getElementById("favicon").href=i},n.onNewNotification=function(){n.onSetFavicon("_notification")},n.onClearNotification=function(){n.onSetFavicon()},n.getDirPath=function(){var e=window.seafile.docPath,t=e.lastIndexOf("/");return t?e.slice(0,t):"/"},n.getDirentList=function(){var e=window.seafile.repoID,t=n.getDirPath();g.I.listDir(e,t,{with_thumbnail:!0}).then((function(e){var t=[];e.data.dirent_list.forEach((function(e){var i=new k.Z(e);t.push(i)})),n.setState({direntList:t})})).catch((function(e){o.c.getErrorMsg(e,!0)}))};var a=window.app.pageOptions,r=a.isStarred,s=a.isSdocDraft;return n.state={isStarred:r,isDraft:s,direntList:[]},n}return(0,d.Z)(i,[{key:"componentDidMount",value:function(){this.onSetFavicon(),this.getDirentList()}},{key:"render",value:function(){var e=window.seafile,t=e.repoID,i=e.docPath,a=e.docName,r=e.docPerm,s=this.state,o=s.isStarred,c=s.isDraft,l=s.direntList,d=this.getDirPath();return(0,N.jsxs)(n.Fragment,{children:[(0,N.jsx)(f.Qo,{isStarred:o,isDraft:c}),(0,N.jsx)(v,{repoID:t,docPath:i,docName:a,docPerm:r,isStarred:o,direntList:l,dirPath:d,toggleStar:this.toggleStar,unmarkDraft:this.unmarkDraft,onNewNotification:this.onNewNotification,onClearNotification:this.onClearNotification})]})}}]),i}(n.Component),I=window.app.config,F=I.serviceURL,C=I.avatarURL,L=I.siteRoot,Z=I.lang,P=I.mediaUrl,M=I.isPro,E=window.app.userInfo,T=E.username,U=E.name,R=window.app.pageOptions,y=R.repoID,x=R.repoName,A=R.parentDir,j=R.filePerm,O=R.docPath,K=R.docName,_=R.docUuid,z=R.seadocAccessToken,B=R.seadocServerUrl,H=R.assetsUrl,G=R.isSdocRevision,V=R.isPublished,W=R.originFilename,Q=R.revisionCreatedAt,q=R.originFileVersion,J=R.originFilePath,X=R.originDocUuid,Y=R.revisionId,$=R.isFreezed;window.seafile={repoID:y,docPath:O,docName:K,docUuid:_,isOpenSocket:!0,serviceUrl:F,accessToken:z,sdocServer:B,name:U,username:T,avatarURL:C,siteRoot:L,docPerm:j,historyURL:o.c.generateHistoryURL(L,y,O),parentFolderURL:"".concat(L,"library/").concat(y,"/").concat(o.c.encodePath(x+A)),assetsUrl:H,isShowInternalLink:!0,isStarIconShown:!0,isSdocRevision:G,isPublished:V,originFilename:W,originFileVersion:q,originFilePath:J,originDocUuid:X,revisionCreatedAt:Q,lang:Z,revisionId:Y,mediaUrl:P,isFreezed:$,isPro:"True"===M},a.render((0,N.jsx)(r.I18nextProvider,{i18n:s.Z,children:(0,N.jsx)(n.Suspense,{fallback:(0,N.jsx)(c.Z,{}),children:(0,N.jsx)(w,{})})}),document.getElementById("wrapper"))}},function(e){e.O(0,[351],(function(){return t=60658,e(e.s=t);var t}));e.O()}]);