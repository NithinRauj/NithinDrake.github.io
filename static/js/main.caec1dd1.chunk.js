(this.webpackJsonphackernews_clone=this.webpackJsonphackernews_clone||[]).push([[0],{33:function(e,t,a){e.exports=a(62)},38:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(30),l=a.n(c),s=(a(38),a(12)),o=function(){return r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",{className:"nav-container"},r.a.createElement("h1",null,"HackerNews Clone"),r.a.createElement("ul",{className:"links-container"},r.a.createElement("li",null,r.a.createElement(s.b,{to:"/",style:i},"Home"," ")),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/show",style:i},"Show")),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/job",style:i},"Job")))))},i={textDecoration:"none",color:"beige"},u=a(1),m=a(8),p=a(9),h=a(11),E=a(10),f=a(14),v=a.n(f),b=a(32),g=a(19),d=function(e){var t=e.post,a=t.by,n=t.descendants,c=t.score,l=t.title,s=t.url,o=t.time,i=t.type,u=new Date(1e3*o).toUTCString().slice(-11,-4);return r.a.createElement("div",{className:"post-item"},null!==s&&""!==s?r.a.createElement("a",{href:s,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("h3",null,l)):r.a.createElement("h3",null,l),r.a.createElement("div",{className:"row"},r.a.createElement("p",null,"Score: ",r.a.createElement("span",{className:"black-text"},c)," \xa0 | \xa0"),r.a.createElement("p",null,"Time: ",r.a.createElement("span",{className:"black-text"},u)," \xa0 | \xa0"),r.a.createElement("p",null,"By: ",r.a.createElement("span",{className:"black-text"},a)," \xa0 | \xa0"),"job"!==i&&r.a.createElement("p",null,r.a.createElement("span",{className:"black-text"},n," Comments")," ")))},k=function(e){var t=e.posts,a=e.loading;return null===t||a?r.a.createElement("h4",{style:{textAlign:"center"}},"Loading News..."):r.a.createElement("div",null,t.map((function(e){return r.a.createElement(d,{key:e.id,post:e})})))},P=a(15),j=a.n(P),y=function(e){for(var t=e.postsPerPage,a=e.totalPosts,n=e.paginate,c=[],l=1;l<=Math.ceil(a/t);l++)c.push(l);return r.a.createElement("div",null,r.a.createElement("ul",{className:"pagination"},c.map((function(e){return r.a.createElement("li",{className:"page-item",key:e},r.a.createElement("a",{href:"#!",className:"page-link",onClick:function(){return n(e)}},e))}))))},w=function(e){Object(h.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).signal=j.a.CancelToken.source(),e.state={posts:null,postsPerPage:10,loading:!1,currentPage:1},e.fetchPosts=function(){var t=Object(g.a)(v.a.mark((function t(a,n){var r;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({loading:!0,posts:[]}),t.next=3,j.a.get("https://hacker-news.firebaseio.com/"+e.props.pathURL).catch((function(e){console.log(e)}));case 3:r=t.sent,r.data.slice(a,n).map(function(){var t=Object(g.a)(v.a.mark((function t(a){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.a.get("https://hacker-news.firebaseio.com/v0/item/".concat(a,".json?print=pretty"),{cancelToken:e.signal.token}).then((function(t){e.setState({posts:[].concat(Object(b.a)(e.state.posts),[t.data])})})).catch((function(e){j.a.isCancel(e)&&console.log(e)}));case 2:t.sent;case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),e.setState({loading:!1});case 7:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.paginate=function(t){e.setState({currentPage:t});var a=e.state.currentPage*e.state.postsPerPage,n=a-e.state.postsPerPage;e.fetchPosts(n,a)},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.fetchPosts(0,10)}},{key:"componentWillUnmount",value:function(){this.signal.cancel("API requests are being cancelled")}},{key:"render",value:function(){return r.a.createElement("div",{className:"posts-container"},r.a.createElement(k,{posts:this.state.posts,loading:this.state.loading}),r.a.createElement(y,{totalPosts:this.props.totalPosts,postsPerPage:this.state.postsPerPage,paginate:this.paginate}))}}]),a}(n.Component),N=function(e){Object(h.a)(a,e);var t=Object(E.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Top Stories"),r.a.createElement(w,{pathURL:"v0/topstories.json?",totalPosts:100}),";")}}]),a}(n.Component),O=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Show Stories"),r.a.createElement(w,{pathURL:"v0/showstories.json?",totalPosts:100}))},x=function(e){Object(h.a)(a,e);var t=Object(E.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Job Stories"),r.a.createElement(w,{pathURL:"v0/jobstories.json?",totalPosts:60}))}}]),a}(n.Component);var S=function(){return r.a.createElement(s.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(o,null),r.a.createElement("div",{className:"container"},r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/",component:N}),r.a.createElement(u.a,{exact:!0,path:"/show",component:O}),r.a.createElement(u.a,{exact:!0,path:"/job",component:x})))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.caec1dd1.chunk.js.map