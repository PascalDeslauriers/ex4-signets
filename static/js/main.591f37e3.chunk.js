(this["webpackJsonpex4-signets"]=this["webpackJsonpex4-signets"]||[]).push([[0],{157:function(e,t,a){},158:function(e,t,a){},159:function(e,t,a){},166:function(e,t,a){},167:function(e,t,a){},179:function(e,t,a){},287:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(14),i=a.n(r),s=(a(157),a(48)),o=a(28),l=a(17),u=(a(158),a(159),a(343)),j=a(329),d=a(9),b=a(7);function h(e){var t=e.utilisateur;return Object(b.jsxs)("header",{className:"Entete",children:[Object(b.jsxs)("div",{className:"logo",children:["Signets",Object(b.jsx)(j.a,{variant:"outlined",size:"small",className:"btn-deconnexion",onClick:function(){return d.a.auth().signOut()},children:"D\xe9connexion"})]}),Object(b.jsxs)("div",{className:"utilisateur",children:[t.displayName," ",Object(b.jsx)(u.a,{className:"avatar",alt:t.displayName,src:t.photoURL})]})]})}var O=a(96),m=a.n(O),f=a(132),p=(a(166),a(167),a(333)),x=a(133),g=a.n(x),v=a(134),N=a.n(v),C=a(143),D=a(344),A=["Modifier","Supprimer"];function y(e){e.id;var t=e.nom,a=e.couleur,n=e.datemodif,r=e.couverture,i=c.a.useState(null),s=Object(l.a)(i,2),o=s[0],u=s[1],j=Boolean(o),d=function(){u(null)};return""==r&&(r="../images/couverture.webp"),Object(b.jsxs)("article",{className:"Dossier",style:{backgroundColor:a},children:[Object(b.jsxs)("div",{className:"couverture",children:[Object(b.jsx)(p.a,{className:"deplacer","aria-label":"d\xe9placer",disableRipple:!0,children:Object(b.jsx)(g.a,{})}),Object(b.jsx)("img",{src:r,alt:t})]}),Object(b.jsxs)("div",{className:"info",children:[Object(b.jsx)("h2",{children:t}),Object(b.jsxs)("p",{children:["Modifi\xe9 : ",w(n)]})]}),Object(b.jsx)(p.a,{className:"modifier","aria-label":"modifier",size:"small","aria-controls":"long-menu","aria-haspopup":"true",onClick:function(e){u(e.currentTarget)},children:Object(b.jsx)(N.a,{})}),Object(b.jsx)(C.a,{id:"long-menu",anchorEl:o,keepMounted:!0,open:j,onClose:d,PaperProps:{style:{maxHeight:216,width:"20ch"}},children:A.map((function(e){return Object(b.jsx)(D.a,{selected:"Pyxis"===e,onClick:d,children:e},e)}))})]})}function w(e){var t=e?new Date(1e3*e.seconds):new Date;return"".concat(t.getDate()," ").concat(["janvier","f\xe9vrier","mars","avril","mai","juin","juillet","ao\xfbt","septembre","octobre","novembre","d\xe9cembre"][t.getMonth()]," ").concat(t.getFullYear())}var S=a(135);a(289);d.a.apps.length||d.a.initializeApp({apiKey:"AIzaSyCYeJ6tuiyK3qDQ_9U5RXmlBRB1PjK1nvw",authDomain:"firestore-48864.firebaseapp.com",projectId:"firestore-48864",storageBucket:"firestore-48864.appspot.com",messagingSenderId:"1068277369514",appId:"1:1068277369514:web:607063896317a7d19a5ed3"});var k=new S.a.AuthUI(d.a.auth()),I=d.a.firestore();function F(e){var t=e.utilisateur,a=e.etatDossiers,c=Object(l.a)(a,2),r=c[0],i=c[1];return Object(n.useEffect)((function(){function e(){return(e=Object(f.a)(m.a.mark((function e(){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],e.next=3,I.collection("utilisateurs-ex4").doc(t.uid).collection("dossiers").get();case 3:e.sent.forEach((function(e){a.push(Object(s.a)({id:e.id},e.data()))})),i(a);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(b.jsx)("ul",{className:"ListeDossiers",children:0!=r.length?r.map((function(e){return Object(b.jsx)("li",{children:Object(b.jsx)(y,Object(s.a)({},e))},e.id)})):Object(b.jsxs)("div",{class:"ntfDosVid",children:[" ",Object(b.jsx)("h2",{children:"Votre liste de dossier est vide"})," ",Object(b.jsx)("h1",{children:";-("})," "]})})}var R=a(338),E=a(141),P=a.n(E);a(179),a(180);function B(){return Object(n.useEffect)((function(){return k.start("#firebaseui-widget",{signInOptions:[d.a.auth.GoogleAuthProvider.PROVIDER_ID,d.a.auth.FacebookAuthProvider.PROVIDER_ID,d.a.auth.GithubAuthProvider.PROVIDER_ID],signInFlow:"popup"},[])})),Object(b.jsxs)("div",{className:"Accueil",children:[Object(b.jsxs)("h3",{className:"logo",children:["Signets ",Object(b.jsx)("span",{children:"beta"})]}),Object(b.jsxs)("h2",{className:"amorce",children:["Organisez vos signets Web, ",Object(b.jsx)("br",{}),"Simple comme bonjour !"]}),Object(b.jsx)("h4",{className:"connexion-etiquette",children:"Connexion \xe0 Signets"}),Object(b.jsx)("div",{id:"firebaseui-widget"})]})}var V=a(339),z=a(341),M=a(337),_=a(336),J=a(342),K=a(142),T=a(335),U=Object(T.a)({ajt:{backgroundColor:"green",color:"white"},anu:{backgroundColor:"red",color:"white"}});function W(e){var t=e.ouvert,a=e.setOuvert,c=e.gererAjout,r=Object(n.useState)(""),i=Object(l.a)(r,2),s=i[0],o=i[1],u=Object(n.useState)(""),d=Object(l.a)(u,2),h=d[0],O=d[1],m=Object(n.useState)("#537169"),f=Object(l.a)(m,2),p=f[0],x=f[1];var g=U();return Object(b.jsx)("div",{className:"AjouterDossier",children:Object(b.jsxs)(z.a,{open:t,onClose:function(){return a(!1)},"aria-labelledby":"form-dialog-title",children:[Object(b.jsx)(J.a,{id:"form-dialog-title",children:"Ajouter un dossier"}),Object(b.jsxs)(_.a,{children:[Object(b.jsx)(V.a,{autoFocus:!0,margin:"normal",id:"nomDossier",label:"Nom du dossier",type:"text",fullWidth:!0,onChange:function(e){return o(e.target.value)},defaultValue:s}),Object(b.jsx)(V.a,{margin:"normal",id:"urlImage",label:"Adresse de l'image de couverture",type:"text",fullWidth:!0,onChange:function(e){return O(e.target.value)},defaultValue:h}),Object(b.jsx)(K.a,{width:"100%",triangle:"hide",colors:["#ffffff","#BF8ABC","#262559","#C4D4F2","#F2A488","#F29B9B"],onChangeComplete:function(e,t){return x(e.hex)},color:p})]}),Object(b.jsxs)(M.a,{children:[Object(b.jsx)(j.a,{onClick:function(){return a(!1)},color:"primary",className:g.anu,children:"Annuler"}),Object(b.jsx)(j.a,{onClick:function(){""!==s&&c(s,h,p),o(""),O(""),x("#537169")},color:"primary",className:g.ajt,children:"Ajouter"})]})]})})}function q(){var e=Object(n.useState)(null),t=Object(l.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)([]),i=Object(l.a)(r,2),u=i[0],j=i[1],O=Object(n.useState)(!1),m=Object(l.a)(O,2),f=m[0],p=m[1];return Object(n.useEffect)((function(){d.a.auth().onAuthStateChanged((function(e){c(e),e&&I.collection("utilisateurs-ex4").doc(e.uid).set({nom:e.displayName,courriel:e.email,datecompte:d.a.firestore.FieldValue.serverTimestamp()},{merge:!0})}))}),[]),Object(b.jsx)("div",{className:"Appli",children:a?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(h,{utilisateur:a}),Object(b.jsxs)("section",{className:"contenu-principal",children:[Object(b.jsx)(F,{utilisateur:a,etatDossiers:r}),Object(b.jsx)(W,{ouvert:f,setOuvert:p,gererAjout:function(e,t,n){var c={nom:e,couverture:t,couleur:n,datemodif:d.a.firestore.FieldValue.serverTimestamp(),signets:[]};I.collection("utilisateurs-ex4").doc(a.uid).collection("dossiers").add(c).then((function(e){e.get().then((function(e){return j([].concat(Object(o.a)(u),[Object(s.a)(Object(s.a)({},e.data()),{},{id:e.id})]))})),p(!1)}))}}),Object(b.jsx)(R.a,{onClick:function(){return p(!0)},className:"ajoutRessource",color:"primary","aria-label":"Ajouter dossier",children:Object(b.jsx)(P.a,{})})]})]}):Object(b.jsx)(B,{})})}i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(q,{})}),document.getElementById("racine"))}},[[287,1,2]]]);
//# sourceMappingURL=main.591f37e3.chunk.js.map