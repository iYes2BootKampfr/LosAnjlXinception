var __awaiter=this&&this.__awaiter||function(n,t,i,r){function u(n){return n instanceof i?n:new i(function(t){t(n)})}return new(i||(i=Promise))(function(i,f){function o(n){try{e(r.next(n))}catch(t){f(t)}}function s(n){try{e(r["throw"](n))}catch(t){f(t)}}function e(n){n.done?i(n.value):u(n.value).then(o,s)}e((r=r.apply(n,t||[])).next())})},__generator=this&&this.__generator||function(n,t){function o(n){return function(t){return s([n,t])}}function s(o){if(e)throw new TypeError("Generator is already executing.");while(f&&(f=0,o[0]&&(r=0)),r)try{if(e=1,u&&(i=o[0]&2?u["return"]:o[0]?u["throw"]||((i=u["return"])&&i.call(u),0):u.next)&&!(i=i.call(u,o[1])).done)return i;(u=0,i)&&(o=[o[0]&2,i.value]);switch(o[0]){case 0:case 1:i=o;break;case 4:return r.label++,{value:o[1],done:!1};case 5:r.label++;u=o[1];o=[0];continue;case 7:o=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(o[0]===6||o[0]===2)){r=0;continue}if(o[0]===3&&(!i||o[1]>i[0]&&o[1]<i[3])){r.label=o[1];break}if(o[0]===6&&r.label<i[1]){r.label=i[1];i=o;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(o);break}i[2]&&r.ops.pop();r.trys.pop();continue}o=t.call(n,r)}catch(s){o=[6,s];u=0}finally{e=i=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},e,u,i,f;return f={next:o(0),"throw":o(1),"return":o(2)},typeof Symbol=="function"&&(f[Symbol.iterator]=function(){return this}),f},__spreadArray=this&&this.__spreadArray||function(n,t,i){if(i||arguments.length===2)for(var r=0,f=t.length,u;r<f;r++)!u&&r in t||(u||(u=Array.prototype.slice.call(t,0,r)),u[r]=t[r]);return n.concat(u||Array.prototype.slice.call(t))},GlobalActionMenuV2Wrapper;(function(n){var t;(function(){function ni(t){var i=t[1];i&&!n&&(n=i,o={Facebook:n.facebookFormCode,Twitter:n.twitterFormCode,Email:n.mailFormCode,Sms:n.smsFormCode,WhatsApp:n.whatsAppFormCode,Pinterest:n.pinterestFormCode,Weibo:n.weiboFormCode,Qzone:n.qzoneFormCode,GetUrl:n.getUrlFormCode})}function ti(n){var i=n.querySelectorAll("[data-type='shareMedium'], .ga_cpy_link, .shareclosebtn"),r,t;if(i)for(r=function(){var r=i[t];if(r.getAttribute(k)==="1")return"continue";sj_be(r,"click",function(t){st(t);ft(n,r)});AccessibilityHelpers.activateButtonByKey(r,[13,32],function(t){st(t);ft(n,r)});r.setAttribute(k,"1")},t=0;t<i.length;t++)r()}function ft(n,t){return __awaiter(this,void 0,void 0,function(){var i,f,c,v,o,r,s,h,u;return __generator(this,function(y){switch(y.label){case 0:return!n||!t?[2]:(i=t.getAttribute(l),!i)?[2]:(f=sb_gt(),i==="Close")?(sj_evt.fire("GlobalActionMenuV2Wrapper.HideActionMenuContent",n),u={OverallDT:(sb_gt()-f).toString(),GetShareLinkDT:"0",UploadScreenshotDT:"0",GetShortShareLinkDT:"0"},e(n,"ShareActionClickHandlerSuccess",i,u),[2]):(i==="CopyUrl"||i==="GetUrl")&&(c=t.parentElement,c&&(v=c.getElementsByClassName(a),o=v[0],o&&o.innerText))?(s=ot(n,o.innerText),t.focus(),h=s?"ShareActionClickHandlerSuccess":"ShareActionClickHandlerFailure",u={OverallDT:(sb_gt()-f).toString(),GetShareLinkDT:"0",UploadScreenshotDT:"0",GetShortShareLinkDT:"0"},e(n,h,i,u),[2]):[4,et(n,t,!1)];case 1:return r=y.sent(),r?(s=ii(n,t,r.shareUrl,r.shareThumbnailId,r.isLoading),h=s?"ShareActionClickHandlerSuccess":"ShareActionClickHandlerFailure",u={OverallDT:(sb_gt()-f).toString(),GetShareLinkDT:r.GetShareLinkDT,UploadScreenshotDT:r.UploadScreenshotDT,GetShortShareLinkDT:r.GetShortShareLinkDT},e(n,h,i,u)):e(n,"ShareActionClickHandlerFailure",i),[2]}})})}function et(i,r,u){var f=this;return new Promise(function(e){return __awaiter(f,void 0,void 0,function(){var s,f,a,v,h,o,y,p;return __generator(this,function(w){switch(w.label){case 0:return!i||!r?(e(null),[2,null]):(s=r.getAttribute(l),!s)?(e(null),[2,null]):(f=null,a=0,v=ri(s),h=fi(i,s),!h)?(e(null),[2,null]):(o=i.getAttribute(d)||i.getAttribute(c),!(u||s!==t[t.GetUrl]||n.enableGetShareLinkFromServerForGetUrl))?[3,2]:(y=sb_gt(),[4,hi(i,s,h,!!o)]);case 1:f=w.sent();f&&f.ShortShareLink&&(h=f.ShortShareLink);f&&f.ThumbnailId&&(i.setAttribute(c,f.ThumbnailId),o||(o=f.ThumbnailId));a=sb_gt()-y;w.label=2;case 2:return o||(o=rt),p={shareUrl:h,shareThumbnailId:o,isLoading:v,GetShareLinkDT:a.toString(),UploadScreenshotDT:f&&f.UploadScreenshotDT?f.UploadScreenshotDT:"0",GetShortShareLinkDT:f&&f.GetShortShareLinkDT?f.GetShortShareLinkDT:"0"},e(p),[2]}})})})}function ii(i,r,u,e,o){var s=v(i),c,it,ut,b,ft,et,w,st;if(!s||(c=r.getAttribute(l),!c))return!1;var g=!0,a,nt=!0,p=0,tt=0,k=location.protocol+"//"+location.hostname+Shared.formatString(n.thumbnailUrlFormat,e),d=e!==rt&&ai(i);if(d&&(k+="&w=".concat(d.width,"&h=").concat(d.height,"&c=0&rs=1&qlt=100&pid=16.1")),c===t[t.Facebook])it=location.protocol+"//www.bing.com"+n.closeRedirectUrl,a=Shared.formatString(n.facebookShareFormat,encodeURIComponent(u),encodeURIComponent(it),pi(s.shareKey),n.facebookAppId),p=n.fbInitialHeight;else if(c===t[t.FacebookMessenger])ut=location.protocol+"//www.bing.com"+n.closeRedirectUrl,a=Shared.formatString(n.facebookMessengerUrlFormat,n.facebookAppId,encodeURIComponent(u),encodeURIComponent(ut)),p=n.fbInitialHeight;else if(c===t[t.Twitter])w=s.shareTwitterText!=null&&s.shareTwitterText.length>2?s.shareTwitterText:s.shareDescription,a=Shared.formatString(n.twitterApi,s.shareHashtags,encodeURIComponent(w),encodeURIComponent(u)),p=n.defaultInitialHeight;else if(c===t[t.Pinterest])a=Shared.formatString(n.pinterestUrlFormat,encodeURIComponent(u),encodeURIComponent(k),encodeURIComponent(s.shareDescription)),p=n.defaultInitialHeight;else if(c===t[t.OneNote])a=Shared.formatString(n.oneNoteUrlFormat,encodeURIComponent(u),encodeURIComponent(k),encodeURIComponent(s.shareTitle),encodeURIComponent(s.shareDescription)),p=n.defaultInitialHeight;else if(c===t[t.Skype])a=Shared.formatString(n.skypeUrlFormat,encodeURIComponent(u),encodeURIComponent(s.shareDescription)),p=n.skypeInitialHeight,tt=n.skypeInitialWidth;else if(c===t[t.LinkedIn])a=Shared.formatString(n.linkedInUrlFormat,encodeURIComponent(u),encodeURIComponent(s.shareTitle),encodeURIComponent(s.shareDescription)),p=n.defaultInitialHeight;else if(c===t[t.Email])b=h(s.shareEmailBody,u),a=Shared.formatString(n.mailLauncherUrl,encodeURIComponent(s.shareEmailSubject),encodeURIComponent(b)),nt=n.isUnderside;else if(c===t[t.OutlookCom])b=h(s.shareEmailBody,u),a=Shared.formatString(n.outlookComLauncherUrl,encodeURIComponent(s.shareEmailSubject),encodeURIComponent(b));else if(c===t[t.Gmail])b=h(s.shareEmailBody,u),a=Shared.formatString(n.gmailLauncherUrl,encodeURIComponent(s.shareEmailSubject),encodeURIComponent(b));else if(c===t[t.Sms]){if(n.smsProtocol){var ht=s.shareIMText?s.shareIMText.replace("%","%25"):"",ct=h(ht,u),lt=Shared.formatString(n.smsProtocol,encodeURIComponent(ct));_w.sj_lc&&_w.sj_lc(lt)}}else c===t[t.WhatsApp]?(ft=h(s.shareIMText,u),et=Shared.formatString(n.whatsAppSchema,encodeURIComponent(ft)),wi(et,n.whatsAppStoreUrl)):c===t[t.GetUrl]||c==="CopyUrl"?r.getAttribute("data-skipstep1")!=="true"?y(i,u,!0):(g=ot(i,u),r.focus()):c===t[t.Weibo]?(w=s.shareTwitterText!=null&&s.shareTwitterText.length>2?s.shareTwitterText:s.shareDescription,a=Shared.formatString(n.weiboShareFormat,encodeURIComponent(w),encodeURIComponent(u),encodeURIComponent(k)),p=n.defaultInitialHeight):c===t[t.Qzone]?(w=s.shareTwitterText!=null&&s.shareTwitterText.length>2?s.shareTwitterText:s.shareDescription,a=Shared.formatString(n.qzoneShareFormat,encodeURIComponent(s.shareTitle),encodeURIComponent(w),encodeURIComponent(u),encodeURIComponent(k)),p=n.defaultInitialHeight):c===t[t.Reddit]&&(st=s.shareTitle,a=Shared.formatString(n.redditShareFormat,encodeURIComponent(u),encodeURIComponent(st)));return a&&f(!o,a,nt,p,tt),g}function ri(i){var e=i===t[t.Facebook],o=i===t[t.FacebookMessenger],s=i===t[t.Twitter],h=i===t[t.Pinterest],c=i===t[t.Skype],l=i===t[t.LinkedIn],a=i===t[t.OneNote],v=i===t[t.OutlookCom],y=i===t[t.Gmail],p=i===t[t.Weibo],w=i===t[t.Qzone],b=i===t[t.Reddit],r=n.useBlankLoadingPage?"about:blank":n.loadingUrl,u=!0;return e?f(!0,r,!0,n.fbInitialHeight):o?f(!0,r,!0,n.fbInitialHeight,n.fbmInitialWidth):c?f(!0,r,!0,n.skypeInitialHeight,n.skypeInitialWidth):a?f(!0,r,!0,n.oneNoteInitialHeight,n.oneNoteInitialWidth):s||h||l||p||w?f(!0,r,!0,n.defaultInitialHeight):v||y||b?f(!0,r,!0,0):u=!1,u&&n.useBlankLoadingPage&&ui(),u}function f(t,i,u,f,e){if(e===void 0&&(e=0),u)if(t||r==null)if(f>0){var o=e>0?e:550;r=_w.open(i,"shareW","toolbar=yes, scrollbars=yes, resizable=yes, top=500, left=500, width="+o+", height="+f)}else r=_w.open(i,"shareW");else{_w.location.origin||(_w.location.origin=_w.location.protocol+"//"+_w.location.hostname+(_w.location.port?":"+_w.location.port:""));try{n.useLocationReplace?r.location.replace(i):r.location.href=i}catch(s){}r.postMessage({source:"sharing",url:i},_w.location.origin)}else _w.sj_lc&&_w.sj_lc(i)}function ui(){if(r){var u=_w.location.protocol+"//"+_w.location.hostname+n.loadingUrl,i=r.window.document,t=i.createElement("iframe");t.src=u;t.style.width="100%";t.style.height="300px";t.style.border="0";i.body.appendChild(t)}}function fi(n,t){var r=v(n),i,u,f;return r?(i=_d.location.href,r.urlOverride&&(i=r.urlOverride),i=ei(i),u=oi(n,t),f=si(i,u),f.replace(gt,"%20")):null}function ei(n){var r=n.indexOf("?"),u,e,o;if(r<0)return n;var s=n.substring(0,r+1),t=n.substring(r+1),f=t.indexOf("#");f!==-1&&(t=t.substring(0,f));for(u in i)i.hasOwnProperty(u)&&(e=i[u],o=new RegExp("(&)?"+e+"=[^&]*","gi"),t=t.replace(o,""));return s+t}function oi(t,r){var u=v(t),f,e,o;return u?(f={},u.cropSetting&&(f[i.Crop]=u.cropSetting),e=t.getAttribute(d)||t.getAttribute(c),e&&(f[i.ThumbnailId]=e),o=t.getAttribute(w),o&&(f[i.Scenario]=o),n.isCNEnglishSearch&&(f[i.EnSearch]="1"),f[i.FormCode]=yi(u,r),u.sharingGuid&&(f[i.Guid]=u.sharingGuid),!r||(f[i.ShareType]=r),u.shareTitle&&u.shareDescription&&u.hash&&(f[i.Title]=encodeURIComponent(Base64Encoder.stringToBase64(u.shareTitle)),f[i.Description]=encodeURIComponent(Base64Encoder.stringToBase64(u.shareDescription)),f[i.Hash]=encodeURIComponent(u.hash)),f):null}function si(n,t){var r,i,f,u;if(!t)return n;r=n;i=n.indexOf("?");i==-1?r+="?":(f=n.substring(i).indexOf("#"),f>0?(i+=f,r=n.substring(0,i)):i=-1);for(u in t)t.hasOwnProperty(u)&&(r+="&".concat(u,"=").concat(t[u]));return i!=-1&&(r+=n.substring(i)),r}function hi(n,t,i,r){return new Promise(function(u){var h=ci(n,i,r),e,f;if(!h)return u(null),null;var o,s=dt,c=s.indexOf("?")===-1?"?":"&",l=["addloginsource","client","clientip","corpnet","features","hose","hoseassistant","logjserror","msamock","setvar","testhooks","theme","uncrunched","ptn","webthemedark","darkschemeovr"];for(e=0;e<l.length;e++)(o=location.href.match(new RegExp("[?&]"+l[e]+"=[^?&#]*","i")))&&o[0]&&(s+=c+o[0].substring(1),c="&");f=sj_gx();f.open("POST",s,!0);f.setRequestHeader("Content-type","application/json");f.onreadystatechange=function(){f.readyState===4&&u(li(f,n,t))};f.send(JSON.stringify(h))})}function ci(n,t,i){if(i)return{OriginalShareLink:t,EnableAddThumbnailId:!1};var r=n.querySelector(".".concat(it));return!r||Lib.CssClass.contains(r,"b-hidden")?{OriginalShareLink:t,EnableAddThumbnailId:!0}:{OriginalShareLink:t,EnableAddThumbnailId:!0,ScreenshotBase64Url:r.src}}function li(n,t,i){var u,r;try{return n.status===200&&n.responseText?(u=JSON.parse(n.responseText),r={ErrorMessage:u.ErrorMessage},e(t,"GetShareLinkSuccess",i,r),u):(r={ErrorMessage:n.statusText},e(t,"GetShareLinkFailure",i,r),null)}catch(f){return r={ErrorMessage:f.message},e(t,"GetShareLinkFailure",i,r),null}}function ai(n){var t=n.querySelector(".".concat(it)),i,r;return t?(i=Math.min(Math.max(t.naturalWidth,200),2e3),r=Math.min(Math.max(t.naturalHeight,200),2e3),{width:i,height:r}):null}function v(n){var t=vi(n);if(t){var i=t.getAttribute("data-cs"),l=i!=null&&i!==""?i:null,r=t.getAttribute("data-fc"),a=r!=null&&r!==""?JSON.parse(r):o,u=t.getAttribute(wt),v=u!=null&&u!==""?u:null,f=t.getAttribute(pt)||"",s=t.getAttribute(ht)||"",h=t.getAttribute(ct),c=t.getAttribute(lt),y=h==null?f:h,p=c==null?s:c,e=t.getAttribute(yt);e=e||f;var w=t.getAttribute("data-mw"),b=parseInt(w),k=t.getAttribute("data-mh"),d=parseInt(k),g=t.getAttribute(bt),nt=t.getAttribute(at);return{shareKey:t.getAttribute("data-sk").toString(),hash:t.getAttribute(vt).toString(),shareTitle:f,shareDescription:s,shareTwitterText:v,shareEmailSubject:y,shareEmailBody:p,shareIMText:e,shareHashtags:t.getAttribute("data-sh").toString(),cropSetting:l,formCodes:a,maxWidth:b,maxHeight:d,urlOverride:g,sharingGuid:nt}}return null}function vi(n){if(n!==null&&n!==void 0)return n.querySelector(kt)}function yi(i,r){var e,u,f;if(r){e=t[r];for(u in i.formCodes)if(i.formCodes.hasOwnProperty(u)&&(f=t[u],f&e))return i.formCodes[u];for(u in o)if(o.hasOwnProperty(u)&&(f=t[u],f&e))return o[u]}return n.defaultFormCode}function pi(n){for(var i=n.split("_"),r=[],t=0;t<5&&t<i.length;t++)r.push(i[t].substring(0,15));return r.join(",")}function h(n,t){var i=new RegExp("{share-url}","g");return n.indexOf("{share-url}")!=-1?n.replace(i,t):Shared.formatString("{0} {1}",n,t)}function wi(t,i){var r,e;if(_w.sj_lc&&_w.sj_lc(t),!!i)if(n.checkAppInstall=="visibility"){if(typeof _d.hidden!="undefined"?r="hidden":typeof _d.msHidden!="undefined"?r="msHidden":typeof _d.webkitHidden!="undefined"&&(r="webkitHidden"),r)var u=!1,o=10,f=0,s=setInterval(function(){_d[r]&&(u=!0);f++;(u||f>=o)&&(clearInterval(s),u||_w.sj_lc(i))},100)}else n.checkAppInstall=="timeout"&&(e=sb_gt(),setTimeout(function(){var t=sb_gt();t-e-n.checkAppTimeout<100&&_w.sj_lc(i)},n.checkAppTimeout))}function y(n,t,i){return __awaiter(this,void 0,void 0,function(){var u,e,r,s,o,f;return __generator(this,function(h){switch(h.label){case 0:return(u=n.querySelectorAll(".ga_cpy_link"),!(u&&u[0]))?[3,3]:(e=u[0],r=e.parentElement,!r)?[3,3]:(s=r.getElementsByClassName(a),o=s[0],!o)?[3,3]:!t?[4,et(n,e,!0)]:[3,2];case 1:if(f=h.sent(),!f||!f.shareUrl)return[2];t=f.shareUrl;h.label=2;case 2:i&&(Lib.CssClass.remove(r,g),Lib.CssClass.remove(r,tt),Lib.CssClass.add(r,nt));o.innerText=t;h.label=3;case 3:return[2]}})})}function ot(n,t){var u=n.querySelectorAll(".ga_cpy_link"),f,i,e,r;if(u&&u[0]&&(f=u[0],i=f.parentElement,i)){if(!t){if(e=i.getElementsByClassName(a),r=e[0],!r||!r.innerText)return!1;t=r.innerText}return Lib.CssClass.remove(i,g),Lib.CssClass.remove(i,nt),Lib.CssClass.add(i,tt),bi(t)}return!1}function bi(n){var t=!0,i=function(){var i=document.createElement("textarea");i.value=n;document.body.appendChild(i);i.select();try{t=document.execCommand("copy")}catch(r){t=!1}document.body.removeChild(i)};return navigator&&navigator.clipboard?navigator.clipboard.writeText(n)["catch"](i):i(),t}function st(n){sj_pd(n);sj_sp(n)}function e(n,t,i,r){var o,u,s,c,h,e,f,l;if(i===void 0&&(i=null),r===void 0&&(r=null),o=typeof n=="string"?n:n===null||n===void 0?void 0:n.getAttribute(w),Log&&Log.Log&&o){if(t="GAMV2."+t,u=["Namespace",ki(o),"Scenario",o],i&&(u.push("ShareType"),u.push(i)),r)for(f in r)r.hasOwnProperty(f)&&r[f]&&(u.push(f),u.push(r[f]));if(s=o.indexOf("Codex_")===0?"Codex":"CI",s==="Codex"){for(c=["Namespace"],h={},e=0;e<u.length&&e+1<u.length;e+=2)f=u[e],l=u[e+1],c.indexOf(f)===-1&&(h[f]=l);u.push("CustomData");u.push(JSON.stringify(h))}Log.Log.apply(Log,__spreadArray(["SystemEvent",s,t,!1],u,!1))}}function ki(n){switch(n){case"Codex_ConversationMode":return"Conversation";case"Codex_SemanticSerp":return"RightRail";case"Codex_CreatorMode":return"Creator";case"Codex_Others":return"Codex_Others";default:return"Others"}}var p=this,u,t,n;(function(n){n[n.Visible=0]="Visible";n[n.Init=1]="Init";n[n.Ready=2]="Ready";n[n.Complete=3]="Complete";n[n.Error=4]="Error"})(u||(u={})),function(n){n[n.None=0]="None";n[n.Facebook=1]="Facebook";n[n.Twitter=2]="Twitter";n[n.LinkedIn=4]="LinkedIn";n[n.Email=8]="Email";n[n.Sms=16]="Sms";n[n.WhatsApp=32]="WhatsApp";n[n.Pinterest=64]="Pinterest";n[n.Skype=128]="Skype";n[n.FacebookMessenger=256]="FacebookMessenger";n[n.OneNote=512]="OneNote";n[n.Weibo=1024]="Weibo";n[n.Qzone=2048]="Qzone";n[n.Reddit=4096]="Reddit";n[n.OutlookCom=1073741824]="OutlookCom";n[n.Gmail=536870912]="Gmail";n[n.GetUrl=268435456]="GetUrl";n[n.All=1023]="All"}(t||(t={}));var i={ShareType:"shtp",Title:"shtk",Description:"shdk",Hash:"shhk",ThumbnailId:"shth",Crop:"shtc",FormCode:"form",EnSearch:"ensearch",Guid:"shid",Scenario:"shsc"},ht="data-sd",ct="data-es",lt="data-eb",at="data-gd",vt="data-ht",yt="data-im",pt="data-st",wt="data-tt",bt="data-uo",w="data-scenario",b="GlobalActionMenuV2Wrapper.Sharing.Binded",k="data-initialized",kt=".b_sharedata",dt="/sharing/getsharelink",d="data-thumbnailid",c="data-s-thumbnailid",l="data-medium",g="ga_cpy_block_step0",nt="ga_cpy_block_step1",tt="ga_cpy_block_step2",a="ga_cpy_title_step1",it="image-screenshot",rt="OBFB.107AF8B2FB79BD01FFDCABA4D756224A",gt=/%C2%A0/gi,o,ut=!1,r=null,s={};s[u.Visible]="Social share is visible.";s[u.Init]="Social share is initiated.";s[u.Ready]="Social share is ready.";s[u.Complete]="Social share is completed.";s[u.Error]="Social share error occurred.";n=null;sj_evt.bind(b,function(){ut=!0},!0);ut||(sj_evt.fire(b),sj_evt.bind("GlobalActionMenuV2Wrapper.InitSharingGlobalConfig",ni,!0),sj_evt.bind("GlobalActionMenuV2Wrapper.InitShareActions",function(n){var t=n[1];t&&ti(t)},!0),sj_evt.bind("GlobalActionMenuV2Wrapper:ScreenshotSkipped",function(n){return __awaiter(p,void 0,void 0,function(){var t;return __generator(this,function(){return(t=n[1],!t)?[2]:(t.getAttribute("data-gtlfcos")==="true"&&y(t,"",!1),[2])})})},!0),sj_evt.bind("GlobalActionMenuV2Wrapper:ScreenshotCompleted",function(n){return __awaiter(p,void 0,void 0,function(){var t;return __generator(this,function(){return(t=n[1],!t)?[2]:(t.getAttribute("data-gtlfcos")==="true"&&y(t,"",!1),[2])})})},!0))})(t=n.Sharing||(n.Sharing={}))})(GlobalActionMenuV2Wrapper||(GlobalActionMenuV2Wrapper={}))