var RelatedSearchesLGW;(function(n){function o(n,t,o,h,l){if(!f){var a=t&&!o&&!h&&!l;a?(e&&c||r&&!i&&c||(n===null||n===void 0?void 0:n.classList.add(y)),b||(b=!0,LGUtility.instLog(u,"Render",s,"",""))):n===null||n===void 0?void 0:n.classList.remove(y)}}function tt(){var n=document.documentElement,t=document.body,i="scrollTop",r="scrollHeight";return(n[i]||t[i])/((n[r]||t[r])-n.clientHeight)}function it(){var t=document.documentElement,i=document.body,n="scrollTop";return t[n]||i[n]}function rt(n,t){var i=0;return function(){var r=arguments;sb_ct(i);i=sb_st(function(){n&&n.apply(null,r)},t)}}function ut(){var i=_ge("b_content"),u=_G.RTL?"padding-right":"padding-left",t=i&&_w.getComputedStyle(i,null),r=t&&t.getPropertyValue(u),n=0;return t&&r&&(n=parseInt(r.split("px")[0]),n=isNaN(n)?0:n),n}function ft(){var n,ot,c,at,et,st,ht,vt,ct,yt,lt,pt;if(!e)if(r){if(i&&(document.querySelector(".b_rrsr")||document.querySelector(".richrswrapper")))return}else if(document.querySelector(".b_rrsr")||document.querySelector(".richrswrapper"))return;if(document.querySelector(".b_rs")&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window){if(n=_ge(l),a=!0,_G.RTL&&(n===null||n===void 0?void 0:n.classList.add("rtl")),!t){if(!n)return;for(n.style.visibility="visible",ot=n.querySelectorAll("#".concat(v," > a")),c=_ge(v),c&&(sj_be(c,"mouseover",function(){var n;(n=c.classList)===null||n===void 0?void 0:n.add(w)}),sj_be(c,"mouseleave",function(){var n;(n=c.classList)===null||n===void 0?void 0:n.remove(w)})),at=function(n){var t=ot[n],i=LGUtility.getInstVals(t);sj_be(t,"click",function(){if(LGUtility.instLogClick(u,s,i.appNS,i.kValue),!Lib.CssClass.contains(t,"more-rs-btn")){var n=document.documentElement.scrollTop||document.body.scrollTop;Log&&Log.Log&&Log.Log("Click",u,"LGWRSClick",!1,"click",n.toString(),"Text",k?k.offsetTop.toString():"0")}})},et=0;et<ot.length;et++)at(et);st=function(){if(!f){var t=ut();t>=p?n.style.visibility="visible":t<p&&(n.style.visibility="collapse")}};sj_be(_w,"resize",rt(st,100));sj_evt.bind("hideminitp",st);ht=n.querySelector(".more-rs-btn");ht&&ht.addEventListener("click",function(n){var t;n.preventDefault();(t=document.querySelector(".b_rs"))===null||t===void 0?void 0:t.scrollIntoView()})}var y=!1,b=!1,nt=!1,ft=!1;window.addEventListener("scroll",function(){var u=tt(),f=it();y=r&&!i?f>=d:u>=1/g;o(n,y,b,nt,ft,t)});vt=new IntersectionObserver(function(i){i.forEach(function(i){b=i.isIntersecting;o(n,y,b,nt,ft,t)})},{rootMargin:"20px 0px 0px 0px"});vt.observe(document.querySelector(".b_rs"));(e&&h||h&&r&&!i)&&(ct=document.querySelector(".b_rrsr"),ct&&(yt=new IntersectionObserver(function(i){i.forEach(function(i){nt=i.isIntersecting;o(n,y,b,nt,ft,t)})}),yt.observe(ct)),lt=document.querySelector(".richrswrapper"),lt&&(pt=new IntersectionObserver(function(i){i.forEach(function(i){ft=i.isIntersecting;o(n,y,b,nt,ft,t)})}),pt.observe(lt)));LGUtility.instLog(u,"Available",s,"","")}}function nt(){f=!0;var n=_ge(l);n&&(n.style.visibility="collapse");sj_evt&&sj_evt.unbind&&sj_evt.unbind("lgRender",nt)}function et(n,u,o,s,l,v,y,p){t=n;i=u;r=o;h=s;d=l;c=v;e=y;g=p;a||setTimeout(function(){f||ft()},3e3)}var u="relatedSearchesLGW",s="LeftGutterWidget",l="relatedSearchesLGWContainer",t=!1,a=!1,v="rs_lgw_list",y="lgw-slide-in",f=!1,p=160,w="child-hover",b=!1,k=document.querySelector(".b_rs"),i=!0,r=!1,h=!1,d=400,c=!1,e=!1,g=3;n.setData=et;sj_evt.bind("lgRender",nt,!0,0)})(RelatedSearchesLGW||(RelatedSearchesLGW={}))