(this.webpackJsonpinsta4=this.webpackJsonpinsta4||[]).push([[0],{20:function(t,n,e){},24:function(t,n,e){"use strict";e.r(n);var o,a,i=e(0),r=e.n(i),s=e(12),c=e.n(s),u=(e(20),e(4)),m=e(5),l=e(7),d=e(6),h=e(2),p=e(3),j=e(1),b=p.a.div(o||(o=Object(h.a)(["\n\tdisplay: flex;\n"]))),O=p.a.img(a||(a=Object(h.a)(["\n\tmargin-right: 5px;\n"])));function g(t){return Object(j.jsxs)(b,{children:[Object(j.jsx)(O,{alt:"Icone",src:t.icone,onClick:t.onClickIcone}),Object(j.jsx)("p",{children:t.valorContador})]})}var C,f,v,x,y,k,w,I,U=e.p+"static/media/favorite-white.caaea4ca.svg",E=e.p+"static/media/favorite.8a6e6069.svg",P=e.p+"static/media/comment_icon.cf803b65.svg",S=p.a.div(C||(C=Object(h.a)(["\n    display: flex;\n    justify-content: center;\n    padding: 5px;\n"]))),V=p.a.input(f||(f=Object(h.a)(["\n    width: 100%;\n    margin-right: 5px;\n"]))),A=function(t){Object(l.a)(e,t);var n=Object(d.a)(e);function e(){var t;Object(u.a)(this,e);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(t=n.call.apply(n,[this].concat(a))).state={ValorInputComentario:""},t.onChangeComentario=function(n){console.log(n.target.value),t.setState({ValorInputComentario:n.target.value})},t}return Object(m.a)(e,[{key:"render",value:function(){return Object(j.jsxs)(S,{children:[Object(j.jsx)(V,{placeholder:"Coment\xe1rio",value:this.state.ValorInputComentario,onChange:this.onChangeComentario}),Object(j.jsx)("button",{onClick:this.props.aoEnviar,children:"Enviar"})]})}}]),e}(i.Component),B=p.a.div(v||(v=Object(h.a)(["\n  background-color: gray;\n  border: 1rem solid gray;\n  width: 25rem;\n  margin-bottom: 1rem;\n  \n"]))),J=p.a.div(x||(x=Object(h.a)(["\n  height: 40px;\n  display: flex;\n  align-items: center;\n  padding-left: 10px;\n  \n"]))),W=p.a.div(y||(y=Object(h.a)(["\n  height: 40px;\n  display: flex;\n  align-items: center;\n  padding: 0 10px;\n  justify-content: space-between;\n"]))),L=p.a.img(k||(k=Object(h.a)(["\n  height: 2rem;\n  width:  2rem;\n  margin-right: 1rem;\n  border-radius: 50%;\n"]))),M=p.a.img(w||(w=Object(h.a)(["\n  width: 100%;\n"]))),$=function(t){Object(l.a)(e,t);var n=Object(d.a)(e);function e(){var t;Object(u.a)(this,e);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(t=n.call.apply(n,[this].concat(a))).state={curtido:!1,numeroCurtidas:0,comentando:!1,numeroComentarios:0},t.onClickCurtida=function(){var n;n=t.state.curtido?t.state.numeroCurtidas-1:t.state.numeroCurtidas+1,t.setState({curtido:!t.state.curtido,numeroCurtidas:n}),console.log("Curtiu!")},t.onClickComentario=function(){t.setState({comentando:!t.state.comentando})},t.aoEnviarComentario=function(){t.setState({comentando:!1,numeroComentarios:t.state.numeroComentarios+1})},t}return Object(m.a)(e,[{key:"render",value:function(){var t,n;return t=this.state.curtido?E:U,this.state.comentando&&(n=Object(j.jsx)(A,{aoEnviar:this.aoEnviarComentario})),Object(j.jsxs)(B,{children:[Object(j.jsxs)(J,{children:[Object(j.jsx)(L,{src:this.props.fotoUsuario,alt:"Imagem do usuario"}),Object(j.jsx)("p",{children:this.props.nomeUsuario})]}),Object(j.jsx)(M,{src:this.props.fotoPost,alt:"Imagem do post"}),Object(j.jsxs)(W,{children:[Object(j.jsx)(g,{icone:t,onClickIcone:this.onClickCurtida,valorContador:this.state.numeroCurtidas}),Object(j.jsx)(g,{icone:P,onClickIcone:this.onClickComentario,valorContador:this.state.numeroComentarios})]}),n]})}}]),e}(r.a.Component),_=p.a.div(I||(I=Object(h.a)(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 5%;\n"]))),q=function(t){Object(l.a)(e,t);var n=Object(d.a)(e);function e(){return Object(u.a)(this,e),n.apply(this,arguments)}return Object(m.a)(e,[{key:"render",value:function(){return Object(j.jsxs)(_,{children:[Object(j.jsx)($,{nomeUsuario:"Luis Carlos",fotoUsuario:"https://picsum.photos/50/50",fotoPost:"https://picsum.photos/200/151"}),Object(j.jsx)($,{nomeUsuario:"Marina",fotoUsuario:"https://picsum.photos/49/49",fotoPost:"https://picsum.photos/200/150"}),Object(j.jsx)($,{nomeUsuario:"Paulinha",fotoUsuario:"https://picsum.photos/51/51",fotoPost:"https://picsum.photos/200/152"})]})}}]),e}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(j.jsx)(q,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.462a84ca.chunk.js.map