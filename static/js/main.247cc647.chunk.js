(this.webpackJsonpmyportfoliosite=this.webpackJsonpmyportfoliosite||[]).push([[0],{102:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(14),c=a.n(l),o=(a(48),a(49),a(1)),i=a(4),s=a(6),m=a(7),u=a(9),p=a(8),d=a(18),h=a.n(d),E=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:{width:"100%",amrgin:"auto"}},r.a.createElement(o.Grid,{className:"landing-grid"},r.a.createElement(o.Cell,{col:12},r.a.createElement("img",{src:h.a,alt:"avatar",className:"avatar-img"}),r.a.createElement("div",{className:"banner-text"},r.a.createElement("h1",null,"Software Developer"),r.a.createElement("hr",null),r.a.createElement("p",null," Python | C++ | Java | JavaScript | HTML | CSS | React | Angular"),r.a.createElement("div",{className:"social-links"},r.a.createElement("a",{href:"https://www.linkedin.com/in/caleb-habtegebriel/",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("i",{className:"fa fa-linkedin-square","aria-hidden":"true"})),r.a.createElement("a",{href:"https://github.com/CalebHabtegebriel",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("i",{className:"fa fa-github-square","aria-hidden":"true"})))))))}}]),a}(n.Component),b=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"contact-body"},r.a.createElement(o.Grid,{className:"contact-grid"},r.a.createElement(o.Cell,{col:6},r.a.createElement("h2",null,"Caleb Habtegebriel"),r.a.createElement("img",{src:h.a,alt:"avatar",style:{height:"250px"}}),r.a.createElement("p",{style:{width:"75%",margin:"auto",paddingTop:"1em"}},"Hi, my name is Caleb and I am a Computer Engineering major at the University of Texas at Austin. My interests are Data Science, Machine Learning, and Web Development.")),r.a.createElement(o.Cell,{col:6},r.a.createElement("h2",null,"Contact Me"),r.a.createElement("hr",null),r.a.createElement("div",{className:"contact-list"},r.a.createElement(o.List,null,r.a.createElement(o.ListItem,null,r.a.createElement(o.ListItemContent,{style:{fontSize:"30px",fontFamily:"Anton"}},r.a.createElement("i",{className:"fa fa-phone-square","aria-hidden":"true"}),"(469) 235-5021")),r.a.createElement(o.ListItem,null,r.a.createElement(o.ListItemContent,{style:{fontSize:"30px",fontFamily:"Anton"}},r.a.createElement("i",{className:"fa fa-envelope","aria-hidden":"true"}),"habtegebrielc@gmail.com")))))))}}]),a}(n.Component),y=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={activeTab:0},n}return Object(m.a)(a,[{key:"toggleCategories",value:function(){return 0===this.state.activeTab?r.a.createElement("div",{className:"projects-grid"},r.a.createElement(o.Card,{shadow:5,style:{minWidth:"450",margin:"auto"}},r.a.createElement(o.CardTitle,{style:{color:"#fff",height:"176px",background:"url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ8yV7X25H2CyiqP-JiWnSN2FBqv51m96rMsQ&usqp=CAU) center / cover"}},"Exercise Tracker"),r.a.createElement(o.CardText,null,"Utilized APIs"),r.a.createElement(o.CardActions,{border:!0},r.a.createElement(o.Button,{colored:!0},"GitHub")),r.a.createElement(o.CardMenu,{style:{color:"#fff"}},r.a.createElement(o.IconButton,{name:"share"}))),r.a.createElement(o.Card,{shadow:5,style:{minWidth:"450",margin:"auto"}},r.a.createElement(o.CardTitle,{style:{color:"#fff",height:"176px",background:"url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ8yV7X25H2CyiqP-JiWnSN2FBqv51m96rMsQ&usqp=CAU) center / cover"}},"Exercise Tracker"),r.a.createElement(o.CardText,null,"Lorem Ipsuming versions of Lorem Ipsum."),r.a.createElement(o.CardActions,{border:!0},r.a.createElement(o.Button,{colored:!0},"GitHub")),r.a.createElement(o.CardMenu,{style:{color:"#fff"}},r.a.createElement(o.IconButton,{name:"share"})))):1===this.state.activeTab?r.a.createElement("div",null,r.a.createElement("h1",null,"This is Academic")):2===this.state.activeTab?r.a.createElement("div",null,r.a.createElement("h1",null,"This is Hackathons")):void 0}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"category-tabs"},r.a.createElement(o.Tabs,{activeTab:this.state.activeTab,onChange:function(t){return e.setState({activeTab:t})},ripple:!0},r.a.createElement(o.Tab,null,"Personal"),r.a.createElement(o.Tab,null,"Academic"),r.a.createElement(o.Tab,null,"Hackathons")),r.a.createElement(o.Grid,null,r.a.createElement(o.Cell,{col:12},r.a.createElement("div",{className:"content"},this.toggleCategories()))))}}]),a}(n.Component),g=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"About Me Page"))}}]),a}(n.Component),f=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(o.Grid,null,r.a.createElement(o.Cell,{col:4},r.a.createElement("p",null,this.props.startYear," - ",this.props.endYear)),r.a.createElement(o.Cell,{col:8},r.a.createElement("h4",{style:{marginTop:"0px"}},this.props.schoolName),r.a.createElement("p",null,this.props.schoolDescription)))}}]),a}(n.Component),v=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(o.Grid,null,r.a.createElement(o.Cell,{col:4},r.a.createElement("p",null,this.props.startYear," - ",this.props.endYear)),r.a.createElement(o.Cell,{col:8},r.a.createElement("h4",{style:{marginTop:"0px"}},this.props.jobName),r.a.createElement("p",null,this.props.jobDescription)))}}]),a}(n.Component),k=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(o.Grid,null,r.a.createElement(o.Cell,{col:12},r.a.createElement("div",{style:{display:"flex"}},this.props.skill," ",r.a.createElement(o.ProgressBar,{style:{margin:"auto",width:"75%"},progress:this.props.progress}))))}}]),a}(n.Component),C=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(o.Grid,null,r.a.createElement(o.Cell,{col:4},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("img",{src:h.a,alt:"avatar",style:{height:"200px"}})),r.a.createElement("h2",{style:{paddingTop:"2em"}},"Caleb Habtegebriel"),r.a.createElement("h4",{style:{color:"grey"}},"Software Developer"),r.a.createElement("hr",{style:{borderTop:"3px solid #833fb2",width:"50%"}}),r.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five c"),r.a.createElement("hr",{style:{borderTop:"3px solid #833fb2",width:"50%"}}),r.a.createElement("h3",null,"Address"),r.a.createElement("p",null,"1 hacker way"),r.a.createElement("h5",null,"Phone"),r.a.createElement("p",null,"(469) 235-5021"),r.a.createElement("h5",null,"Email"),r.a.createElement("p",null,"habtegebrielc@gmail.com"),r.a.createElement("h5",null,"Web"),r.a.createElement("p",null,"calebhabtegebriel.github.io"),r.a.createElement("hr",{style:{borderTop:"3px solid #833fb2",width:"50%"}})),r.a.createElement(o.Cell,{className:"resume-right-col",col:8},r.a.createElement("h2",null,"Education"),r.a.createElement(f,{startYear:2018,endYear:2022,schoolName:"University of Texas at Austin",schoolDescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five c"}),r.a.createElement(f,{startYear:2014,endYear:2018,schoolName:"L. V. Berkner High School",schoolDescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five c"}),r.a.createElement("hr",{style:{borderTop:"3px solid #e22947"}}),r.a.createElement("h2",null,"Experience"),r.a.createElement(v,{startYear:2020,endYear:2020,jobName:"Software Engineering Intern @ DTCC",jobDescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five c"}),r.a.createElement(v,{startYear:2020,endYear:2020,jobName:"Computer Science Instructor @ Juni Learning",jobDescription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five c"}),r.a.createElement("hr",{style:{borderTop:"3px solid #e22947"}}),r.a.createElement("h2",null,"Skills"),r.a.createElement(k,{skill:"JavaScript, HTML, CSS",progress:89}),r.a.createElement(k,{skill:"Python, Django",progress:94}),r.a.createElement(k,{skill:"ReactJS Angular",progress:89}),r.a.createElement(k,{skill:"TypeScript",progress:89}))))}}]),a}(n.Component),j=function(){return r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:E}),r.a.createElement(i.a,{path:"/MySite",component:E}),r.a.createElement(i.a,{path:"/aboutme",component:g}),r.a.createElement(i.a,{path:"/resume",component:C}),r.a.createElement(i.a,{path:"/projects",component:y}),r.a.createElement(i.a,{path:"/contact",component:b}))},x=a(10);var w=function(){return r.a.createElement("div",{style:{height:"100vh",position:"relative"}},r.a.createElement(o.Layout,{fixedHeader:!0},r.a.createElement(o.Header,{className:"header-color",title:r.a.createElement(x.b,{style:{textDecoration:"none",color:"white"},to:"/"},"My Potfolio"),scroll:!0},r.a.createElement(o.Navigation,null,r.a.createElement(x.b,{to:"/resume"},"Resume"),r.a.createElement(x.b,{to:"/aboutme"},"About Me"),r.a.createElement(x.b,{to:"/projects"},"Projects"),r.a.createElement(x.b,{to:"/contact"},"Contact"))),r.a.createElement(o.Drawer,{title:r.a.createElement(x.b,{style:{textDecoration:"none",color:"black"},to:"/"},"My Potfolio")},r.a.createElement(o.Navigation,null,r.a.createElement(x.b,{to:"/resume"},"Resume"),r.a.createElement(x.b,{to:"/aboutme"},"About Me"),r.a.createElement(x.b,{to:"/projects"},"Projects"),r.a.createElement(x.b,{to:"/contact"},"Contact"))),r.a.createElement(o.Content,null,r.a.createElement("div",{className:"page-content"}),r.a.createElement(j,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(100),a(101);c.a.render(r.a.createElement(x.a,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},18:function(e,t,a){e.exports=a.p+"static/media/Avatar-Maker.97381e30.png"},43:function(e,t,a){e.exports=a(102)},48:function(e,t,a){},49:function(e,t,a){}},[[43,1,2]]]);
//# sourceMappingURL=main.247cc647.chunk.js.map