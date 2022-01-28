var Bezier=(()=>{var Y=Object.defineProperty;var B=Object.getOwnPropertyDescriptor;var tt=Object.getOwnPropertyNames;var nt=Object.prototype.hasOwnProperty;var et=o=>Y(o,"__esModule",{value:!0});var it=(o,n)=>{for(var e in n)Y(o,e,{get:n[e],enumerable:!0})},rt=(o,n,e,i)=>{if(n&&typeof n=="object"||typeof n=="function")for(let r of tt(n))!nt.call(o,r)&&(e||r!=="default")&&Y(o,r,{get:()=>n[r],enumerable:!(i=B(n,r))||i.enumerable});return o};var st=(o=>(n,e)=>o&&o.get(n)||(e=rt(et({}),n,1),o&&o.set(n,e),e))(typeof WeakMap!="undefined"?new WeakMap:0);var yt={};it(yt,{Bezier:()=>v});var{abs:J,cos:N,sin:P,acos:ot,atan2:L,sqrt:F,pow:T}=Math;function D(o){return o<0?-T(-o,1/3):T(o,1/3)}var V=Math.PI,W=2*V,U=V/2,ct=1e-6,Z=Number.MAX_SAFE_INTEGER||9007199254740991,Q=Number.MIN_SAFE_INTEGER||-9007199254740991,ut={x:0,y:0,z:0},h={Tvalues:[-.06405689286260563,.06405689286260563,-.1911188674736163,.1911188674736163,-.3150426796961634,.3150426796961634,-.4337935076260451,.4337935076260451,-.5454214713888396,.5454214713888396,-.6480936519369755,.6480936519369755,-.7401241915785544,.7401241915785544,-.820001985973903,.820001985973903,-.8864155270044011,.8864155270044011,-.9382745520027328,.9382745520027328,-.9747285559713095,.9747285559713095,-.9951872199970213,.9951872199970213],Cvalues:[.12793819534675216,.12793819534675216,.1258374563468283,.1258374563468283,.12167047292780339,.12167047292780339,.1155056680537256,.1155056680537256,.10744427011596563,.10744427011596563,.09761865210411388,.09761865210411388,.08619016153195327,.08619016153195327,.0733464814110803,.0733464814110803,.05929858491543678,.05929858491543678,.04427743881741981,.04427743881741981,.028531388628933663,.028531388628933663,.0123412297999872,.0123412297999872],arcfn:function(o,n){let e=n(o),i=e.x*e.x+e.y*e.y;return typeof e.z!="undefined"&&(i+=e.z*e.z),F(i)},compute:function(o,n,e){if(o===0)return n[0].t=0,n[0];let i=n.length-1;if(o===1)return n[i].t=1,n[i];let r=1-o,c=n;if(i===0)return n[0].t=o,n[0];if(i===1){let u={x:r*c[0].x+o*c[1].x,y:r*c[0].y+o*c[1].y,t:o};return e&&(u.z=r*c[0].z+o*c[1].z),u}if(i<4){let u=r*r,f=o*o,l,y,a,x=0;i===2?(c=[c[0],c[1],c[2],ut],l=u,y=r*o*2,a=f):i===3&&(l=u*r,y=u*o*3,a=r*f*3,x=o*f);let p={x:l*c[0].x+y*c[1].x+a*c[2].x+x*c[3].x,y:l*c[0].y+y*c[1].y+a*c[2].y+x*c[3].y,t:o};return e&&(p.z=l*c[0].z+y*c[1].z+a*c[2].z+x*c[3].z),p}let s=JSON.parse(JSON.stringify(n));for(;s.length>1;){for(let u=0;u<s.length-1;u++)s[u]={x:s[u].x+(s[u+1].x-s[u].x)*o,y:s[u].y+(s[u+1].y-s[u].y)*o},typeof s[u].z!="undefined"&&(s[u]=s[u].z+(s[u+1].z-s[u].z)*o);s.splice(s.length-1,1)}return s[0].t=o,s[0]},computeWithRatios:function(o,n,e,i){let r=1-o,c=e,s=n,u=c[0],f=c[1],l=c[2],y=c[3],a;if(u*=r,f*=o,s.length===2)return a=u+f,{x:(u*s[0].x+f*s[1].x)/a,y:(u*s[0].y+f*s[1].y)/a,z:i?(u*s[0].z+f*s[1].z)/a:!1,t:o};if(u*=r,f*=2*r,l*=o*o,s.length===3)return a=u+f+l,{x:(u*s[0].x+f*s[1].x+l*s[2].x)/a,y:(u*s[0].y+f*s[1].y+l*s[2].y)/a,z:i?(u*s[0].z+f*s[1].z+l*s[2].z)/a:!1,t:o};if(u*=r,f*=1.5*r,l*=3*r,y*=o*o*o,s.length===4)return a=u+f+l+y,{x:(u*s[0].x+f*s[1].x+l*s[2].x+y*s[3].x)/a,y:(u*s[0].y+f*s[1].y+l*s[2].y+y*s[3].y)/a,z:i?(u*s[0].z+f*s[1].z+l*s[2].z+y*s[3].z)/a:!1,t:o}},derive:function(o,n){let e=[];for(let i=o,r=i.length,c=r-1;r>1;r--,c--){let s=[];for(let u=0,f;u<c;u++)f={x:c*(i[u+1].x-i[u].x),y:c*(i[u+1].y-i[u].y)},n&&(f.z=c*(i[u+1].z-i[u].z)),s.push(f);e.push(s),i=s}return e},between:function(o,n,e){return n<=o&&o<=e||h.approximately(o,n)||h.approximately(o,e)},approximately:function(o,n,e){return J(o-n)<=(e||ct)},length:function(o){let n=.5,e=h.Tvalues.length,i=0;for(let r=0,c;r<e;r++)c=n*h.Tvalues[r]+n,i+=h.Cvalues[r]*h.arcfn(c,o);return n*i},map:function(o,n,e,i,r){let c=e-n,s=r-i,u=o-n,f=u/c;return i+s*f},lerp:function(o,n,e){let i={x:n.x+o*(e.x-n.x),y:n.y+o*(e.y-n.y)};return n.z!==void 0&&e.z!==void 0&&(i.z=n.z+o*(e.z-n.z)),i},pointToString:function(o){let n=o.x+"/"+o.y;return typeof o.z!="undefined"&&(n+="/"+o.z),n},pointsToString:function(o){return"["+o.map(h.pointToString).join(", ")+"]"},copy:function(o){return JSON.parse(JSON.stringify(o))},angle:function(o,n,e){let i=n.x-o.x,r=n.y-o.y,c=e.x-o.x,s=e.y-o.y,u=i*s-r*c,f=i*c+r*s;return L(u,f)},round:function(o,n){let e=""+o,i=e.indexOf(".");return parseFloat(e.substring(0,i+1+n))},dist:function(o,n){let e=o.x-n.x,i=o.y-n.y;return F(e*e+i*i)},closest:function(o,n){let e=T(2,63),i,r;return o.forEach(function(c,s){r=h.dist(n,c),r<e&&(e=r,i=s)}),{mdist:e,mpos:i}},abcratio:function(o,n){if(n!==2&&n!==3)return!1;if(typeof o=="undefined")o=.5;else if(o===0||o===1)return o;let e=T(o,n)+T(1-o,n),i=e-1;return J(i/e)},projectionratio:function(o,n){if(n!==2&&n!==3)return!1;if(typeof o=="undefined")o=.5;else if(o===0||o===1)return o;let e=T(1-o,n),i=T(o,n)+e;return e/i},lli8:function(o,n,e,i,r,c,s,u){let f=(o*i-n*e)*(r-s)-(o-e)*(r*u-c*s),l=(o*i-n*e)*(c-u)-(n-i)*(r*u-c*s),y=(o-e)*(c-u)-(n-i)*(r-s);return y==0?!1:{x:f/y,y:l/y}},lli4:function(o,n,e,i){let r=o.x,c=o.y,s=n.x,u=n.y,f=e.x,l=e.y,y=i.x,a=i.y;return h.lli8(r,c,s,u,f,l,y,a)},lli:function(o,n){return h.lli4(o,o.c,n,n.c)},makeline:function(o,n){return new v(o.x,o.y,(o.x+n.x)/2,(o.y+n.y)/2,n.x,n.y)},findbbox:function(o){let n=Z,e=Z,i=Q,r=Q;return o.forEach(function(c){let s=c.bbox();n>s.x.min&&(n=s.x.min),e>s.y.min&&(e=s.y.min),i<s.x.max&&(i=s.x.max),r<s.y.max&&(r=s.y.max)}),{x:{min:n,mid:(n+i)/2,max:i,size:i-n},y:{min:e,mid:(e+r)/2,max:r,size:r-e}}},shapeintersections:function(o,n,e,i,r){if(!h.bboxoverlap(n,i))return[];let c=[],s=[o.startcap,o.forward,o.back,o.endcap],u=[e.startcap,e.forward,e.back,e.endcap];return s.forEach(function(f){f.virtual||u.forEach(function(l){if(l.virtual)return;let y=f.intersects(l,r);y.length>0&&(y.c1=f,y.c2=l,y.s1=o,y.s2=e,c.push(y))})}),c},makeshape:function(o,n,e){let i=n.points.length,r=o.points.length,c=h.makeline(n.points[i-1],o.points[0]),s=h.makeline(o.points[r-1],n.points[0]),u={startcap:c,forward:o,back:n,endcap:s,bbox:h.findbbox([c,o,n,s])};return u.intersections=function(f){return h.shapeintersections(u,u.bbox,f,f.bbox,e)},u},getminmax:function(o,n,e){if(!e)return{min:0,max:0};let i=Z,r=Q,c,s;e.indexOf(0)===-1&&(e=[0].concat(e)),e.indexOf(1)===-1&&e.push(1);for(let u=0,f=e.length;u<f;u++)c=e[u],s=o.get(c),s[n]<i&&(i=s[n]),s[n]>r&&(r=s[n]);return{min:i,mid:(i+r)/2,max:r,size:r-i}},align:function(o,n){let e=n.p1.x,i=n.p1.y,r=-L(n.p2.y-i,n.p2.x-e),c=function(s){return{x:(s.x-e)*N(r)-(s.y-i)*P(r),y:(s.x-e)*P(r)+(s.y-i)*N(r)}};return o.map(c)},roots:function(o,n){n=n||{p1:{x:0,y:0},p2:{x:1,y:0}};let e=o.length-1,i=h.align(o,n),r=function(d){return 0<=d&&d<=1};if(e===2){let d=i[0].y,z=i[1].y,A=i[2].y,k=d-2*z+A;if(k!==0){let j=-F(z*z-d*A),C=-d+z,R=-(j+C)/k,I=-(-j+C)/k;return[R,I].filter(r)}else if(z!==A&&k===0)return[(2*z-A)/(2*z-2*A)].filter(r);return[]}let c=i[0].y,s=i[1].y,u=i[2].y,f=i[3].y,l=-c+3*s-3*u+f,y=3*c-6*s+3*u,a=-3*c+3*s,x=c;if(h.approximately(l,0)){if(h.approximately(y,0))return h.approximately(a,0)?[]:[-x/a].filter(r);let d=F(a*a-4*y*x),z=2*y;return[(d-a)/z,(-a-d)/z].filter(r)}y/=l,a/=l,x/=l;let p=(3*a-y*y)/3,g=p/3,_=(2*y*y*y-9*y*a+27*x)/27,q=_/2,O=q*q+g*g*g,M,w,S,m,E;if(O<0){let d=-p/3,z=d*d*d,A=F(z),k=-_/(2*A),j=k<-1?-1:k>1?1:k,C=ot(j),R=D(A),I=2*R;return S=I*N(C/3)-y/3,m=I*N((C+W)/3)-y/3,E=I*N((C+2*W)/3)-y/3,[S,m,E].filter(r)}else{if(O===0)return M=q<0?D(-q):-D(q),S=2*M-y/3,m=-M-y/3,[S,m].filter(r);{let d=F(O);return M=D(-q+d),w=D(q+d),[M-w-y/3].filter(r)}}},droots:function(o){if(o.length===3){let n=o[0],e=o[1],i=o[2],r=n-2*e+i;if(r!==0){let c=-F(e*e-n*i),s=-n+e,u=-(c+s)/r,f=-(-c+s)/r;return[u,f]}else if(e!==i&&r===0)return[(2*e-i)/(2*(e-i))];return[]}if(o.length===2){let n=o[0],e=o[1];return n!==e?[n/(n-e)]:[]}return[]},curvature:function(o,n,e,i,r){let c,s,u,f,l=0,y=0,a=h.compute(o,n),x=h.compute(o,e),p=a.x*a.x+a.y*a.y;if(i?(c=F(T(a.y*x.z-x.y*a.z,2)+T(a.z*x.x-x.z*a.x,2)+T(a.x*x.y-x.x*a.y,2)),s=T(p+a.z*a.z,3/2)):(c=a.x*x.y-a.y*x.x,s=T(p,3/2)),c===0||s===0)return{k:0,r:0};if(l=c/s,y=s/c,!r){let g=h.curvature(o-.001,n,e,i,!0).k,_=h.curvature(o+.001,n,e,i,!0).k;f=(_-l+(l-g))/2,u=(J(_-l)+J(l-g))/2}return{k:l,r:y,dk:f,adk:u}},inflections:function(o){if(o.length<4)return[];let n=h.align(o,{p1:o[0],p2:o.slice(-1)[0]}),e=n[2].x*n[1].y,i=n[3].x*n[1].y,r=n[1].x*n[2].y,c=n[3].x*n[2].y,s=18*(-3*e+2*i+3*r-c),u=18*(3*e-i-3*r),f=18*(r-e);if(h.approximately(s,0)){if(!h.approximately(u,0)){let x=-f/u;if(0<=x&&x<=1)return[x]}return[]}let l=2*s;if(h.approximately(l,0))return[];let y=u*u-4*s*f;if(y<0)return[];let a=Math.sqrt(y);return[(a-u)/l,-(u+a)/l].filter(function(x){return 0<=x&&x<=1})},bboxoverlap:function(o,n){let e=["x","y"],i=e.length;for(let r=0,c,s,u,f;r<i;r++)if(c=e[r],s=o[c].mid,u=n[c].mid,f=(o[c].size+n[c].size)/2,J(s-u)>=f)return!1;return!0},expandbox:function(o,n){n.x.min<o.x.min&&(o.x.min=n.x.min),n.y.min<o.y.min&&(o.y.min=n.y.min),n.z&&n.z.min<o.z.min&&(o.z.min=n.z.min),n.x.max>o.x.max&&(o.x.max=n.x.max),n.y.max>o.y.max&&(o.y.max=n.y.max),n.z&&n.z.max>o.z.max&&(o.z.max=n.z.max),o.x.mid=(o.x.min+o.x.max)/2,o.y.mid=(o.y.min+o.y.max)/2,o.z&&(o.z.mid=(o.z.min+o.z.max)/2),o.x.size=o.x.max-o.x.min,o.y.size=o.y.max-o.y.min,o.z&&(o.z.size=o.z.max-o.z.min)},pairiteration:function(o,n,e){let i=o.bbox(),r=n.bbox(),c=1e5,s=e||.5;if(i.x.size+i.y.size<s&&r.x.size+r.y.size<s)return[(c*(o._t1+o._t2)/2|0)/c+"/"+(c*(n._t1+n._t2)/2|0)/c];let u=o.split(.5),f=n.split(.5),l=[{left:u.left,right:f.left},{left:u.left,right:f.right},{left:u.right,right:f.right},{left:u.right,right:f.left}];l=l.filter(function(a){return h.bboxoverlap(a.left.bbox(),a.right.bbox())});let y=[];return l.length===0||(l.forEach(function(a){y=y.concat(h.pairiteration(a.left,a.right,s))}),y=y.filter(function(a,x){return y.indexOf(a)===x})),y},getccenter:function(o,n,e){let i=n.x-o.x,r=n.y-o.y,c=e.x-n.x,s=e.y-n.y,u=i*N(U)-r*P(U),f=i*P(U)+r*N(U),l=c*N(U)-s*P(U),y=c*P(U)+s*N(U),a=(o.x+n.x)/2,x=(o.y+n.y)/2,p=(n.x+e.x)/2,g=(n.y+e.y)/2,_=a+u,q=x+f,O=p+l,M=g+y,w=h.lli8(a,x,_,q,p,g,O,M),S=h.dist(w,o),m=L(o.y-w.y,o.x-w.x),E=L(n.y-w.y,n.x-w.x),d=L(e.y-w.y,e.x-w.x),z;return m<d?((m>E||E>d)&&(m+=W),m>d&&(z=d,d=m,m=z)):d<E&&E<m?(z=d,d=m,m=z):d+=W,w.s=m,w.e=d,w.r=S,w},numberSort:function(o,n){return o-n}};var b=class{constructor(n){this.curves=[],this._3d=!1,n&&(this.curves=n,this._3d=this.curves[0]._3d)}valueOf(){return this.toString()}toString(){return"["+this.curves.map(function(n){return h.pointsToString(n.points)}).join(", ")+"]"}addCurve(n){this.curves.push(n),this._3d=this._3d||n._3d}length(){return this.curves.map(function(n){return n.length()}).reduce(function(n,e){return n+e})}curve(n){return this.curves[n]}bbox(){let n=this.curves;for(var e=n[0].bbox(),i=1;i<n.length;i++)h.expandbox(e,n[i].bbox());return e}offset(n){let e=[];return this.curves.forEach(function(i){e.push(...i.offset(n))}),new b(e)}};var{abs:G,min:H,max:K,cos:ft,sin:lt,acos:at,sqrt:X}=Math,ht=Math.PI;var v=class{constructor(n){let e=n&&n.forEach?n:Array.from(arguments).slice(),i=!1;if(typeof e[0]=="object"){i=e.length;let p=[];e.forEach(function(g){["x","y","z"].forEach(function(_){typeof g[_]!="undefined"&&p.push(g[_])})}),e=p}let r=!1,c=e.length;if(i){if(i>4){if(arguments.length!==1)throw new Error("Only new Bezier(point[]) is accepted for 4th and higher order curves");r=!0}}else if(c!==6&&c!==8&&c!==9&&c!==12&&arguments.length!==1)throw new Error("Only new Bezier(point[]) is accepted for 4th and higher order curves");let s=this._3d=!r&&(c===9||c===12)||n&&n[0]&&typeof n[0].z!="undefined",u=this.points=[];for(let p=0,g=s?3:2;p<c;p+=g){var f={x:e[p],y:e[p+1]};s&&(f.z=e[p+2]),u.push(f)}let l=this.order=u.length-1,y=this.dims=["x","y"];s&&y.push("z"),this.dimlen=y.length;let a=h.align(u,{p1:u[0],p2:u[l]}),x=h.dist(u[0],u[l]);this._linear=a.reduce((p,g)=>p+G(g.y),0)<x/50,this._lut=[],this._t1=0,this._t2=1,this.update()}static quadraticFromPoints(n,e,i,r){if(typeof r=="undefined"&&(r=.5),r===0)return new v(e,e,i);if(r===1)return new v(n,e,e);let c=v.getABC(2,n,e,i,r);return new v(n,c.A,i)}static cubicFromPoints(n,e,i,r,c){typeof r=="undefined"&&(r=.5);let s=v.getABC(3,n,e,i,r);typeof c=="undefined"&&(c=h.dist(e,s.C));let u=c*(1-r)/r,f=h.dist(n,i),l=(i.x-n.x)/f,y=(i.y-n.y)/f,a=c*l,x=c*y,p=u*l,g=u*y,_={x:e.x-a,y:e.y-x},q={x:e.x+p,y:e.y+g},O=s.A,M={x:O.x+(_.x-O.x)/(1-r),y:O.y+(_.y-O.y)/(1-r)},w={x:O.x+(q.x-O.x)/r,y:O.y+(q.y-O.y)/r},S={x:n.x+(M.x-n.x)/r,y:n.y+(M.y-n.y)/r},m={x:i.x+(w.x-i.x)/(1-r),y:i.y+(w.y-i.y)/(1-r)};return new v(n,S,m,i)}static getUtils(){return h}getUtils(){return v.getUtils()}static get PolyBezier(){return b}valueOf(){return this.toString()}toString(){return h.pointsToString(this.points)}toSVG(){if(this._3d)return!1;let n=this.points,e=n[0].x,i=n[0].y,r=["M",e,i,this.order===2?"Q":"C"];for(let c=1,s=n.length;c<s;c++)r.push(n[c].x),r.push(n[c].y);return r.join(" ")}setRatios(n){if(n.length!==this.points.length)throw new Error("incorrect number of ratio values");this.ratios=n,this._lut=[]}verify(){let n=this.coordDigest();n!==this._print&&(this._print=n,this.update())}coordDigest(){return this.points.map(function(n,e){return""+e+n.x+n.y+(n.z?n.z:0)}).join("")}update(){this._lut=[],this.dpoints=h.derive(this.points,this._3d),this.computedirection()}computedirection(){let n=this.points,e=h.angle(n[0],n[this.order],n[1]);this.clockwise=e>0}length(){return h.length(this.derivative.bind(this))}static getABC(n=2,e,i,r,c=.5){let s=h.projectionratio(c,n),u=1-s,f={x:s*e.x+u*r.x,y:s*e.y+u*r.y},l=h.abcratio(c,n);return{A:{x:i.x+(i.x-f.x)/l,y:i.y+(i.y-f.y)/l},B:i,C:f,S:e,E:r}}getABC(n,e){e=e||this.get(n);let i=this.points[0],r=this.points[this.order];return v.getABC(this.order,i,e,r,n)}getLUT(n){if(this.verify(),n=n||100,this._lut.length===n)return this._lut;this._lut=[],n++,this._lut=[];for(let e=0,i,r;e<n;e++)r=e/(n-1),i=this.compute(r),i.t=r,this._lut.push(i);return this._lut}on(n,e){e=e||5;let i=this.getLUT(),r=[];for(let c=0,s,u=0;c<i.length;c++)s=i[c],h.dist(s,n)<e&&(r.push(s),u+=c/i.length);return r.length?t/=r.length:!1}project(n){let e=this.getLUT(),i=e.length-1,r=h.closest(e,n),c=r.mpos,s=(c-1)/i,u=(c+1)/i,f=.1/i,l=r.mdist,y=s,a=y,x;l+=1;for(let p;y<u+f;y+=f)x=this.compute(y),p=h.dist(n,x),p<l&&(l=p,a=y);return a=a<0?0:a>1?1:a,x=this.compute(a),x.t=a,x.d=l,x}get(n){return this.compute(n)}point(n){return this.points[n]}compute(n){return this.ratios?h.computeWithRatios(n,this.points,this.ratios,this._3d):h.compute(n,this.points,this._3d,this.ratios)}raise(){let n=this.points,e=[n[0]],i=n.length;for(let r=1,c,s;r<i;r++)c=n[r],s=n[r-1],e[r]={x:(i-r)/i*c.x+r/i*s.x,y:(i-r)/i*c.y+r/i*s.y};return e[i]=n[i-1],new v(e)}derivative(n){return h.compute(n,this.dpoints[0],this._3d)}dderivative(n){return h.compute(n,this.dpoints[1],this._3d)}align(){let n=this.points;return new v(h.align(n,{p1:n[0],p2:n[n.length-1]}))}curvature(n){return h.curvature(n,this.dpoints[0],this.dpoints[1],this._3d)}inflections(){return h.inflections(this.points)}normal(n){return this._3d?this.__normal3(n):this.__normal2(n)}__normal2(n){let e=this.derivative(n),i=X(e.x*e.x+e.y*e.y);return{t:n,x:-e.y/i,y:e.x/i}}__normal3(n){let e=this.derivative(n),i=this.derivative(n+.01),r=X(e.x*e.x+e.y*e.y+e.z*e.z),c=X(i.x*i.x+i.y*i.y+i.z*i.z);e.x/=r,e.y/=r,e.z/=r,i.x/=c,i.y/=c,i.z/=c;let s={x:i.y*e.z-i.z*e.y,y:i.z*e.x-i.x*e.z,z:i.x*e.y-i.y*e.x},u=X(s.x*s.x+s.y*s.y+s.z*s.z);s.x/=u,s.y/=u,s.z/=u;let f=[s.x*s.x,s.x*s.y-s.z,s.x*s.z+s.y,s.x*s.y+s.z,s.y*s.y,s.y*s.z-s.x,s.x*s.z-s.y,s.y*s.z+s.x,s.z*s.z];return{t:n,x:f[0]*e.x+f[1]*e.y+f[2]*e.z,y:f[3]*e.x+f[4]*e.y+f[5]*e.z,z:f[6]*e.x+f[7]*e.y+f[8]*e.z}}hull(n){let e=this.points,i=[],r=[],c=0;for(r[c++]=e[0],r[c++]=e[1],r[c++]=e[2],this.order===3&&(r[c++]=e[3]);e.length>1;){i=[];for(let s=0,u,f=e.length-1;s<f;s++)u=h.lerp(n,e[s],e[s+1]),r[c++]=u,i.push(u);e=i}return r}split(n,e){if(n===0&&!!e)return this.split(e).left;if(e===1)return this.split(n).right;let i=this.hull(n),r={left:this.order===2?new v([i[0],i[3],i[5]]):new v([i[0],i[4],i[7],i[9]]),right:this.order===2?new v([i[5],i[4],i[2]]):new v([i[9],i[8],i[6],i[3]]),span:i};return r.left._t1=h.map(0,0,1,this._t1,this._t2),r.left._t2=h.map(n,0,1,this._t1,this._t2),r.right._t1=h.map(n,0,1,this._t1,this._t2),r.right._t2=h.map(1,0,1,this._t1,this._t2),e?(e=h.map(e,n,1,0,1),r.right.split(e).left):r}extrema(){let n={},e=[];return this.dims.forEach(function(i){let r=function(s){return s[i]},c=this.dpoints[0].map(r);n[i]=h.droots(c),this.order===3&&(c=this.dpoints[1].map(r),n[i]=n[i].concat(h.droots(c))),n[i]=n[i].filter(function(s){return s>=0&&s<=1}),e=e.concat(n[i].sort(h.numberSort))}.bind(this)),n.values=e.sort(h.numberSort).filter(function(i,r){return e.indexOf(i)===r}),n}bbox(){let n=this.extrema(),e={};return this.dims.forEach(function(i){e[i]=h.getminmax(this,i,n[i])}.bind(this)),e}overlaps(n){let e=this.bbox(),i=n.bbox();return h.bboxoverlap(e,i)}offset(n,e){if(typeof e!="undefined"){let i=this.get(n),r=this.normal(n),c={c:i,n:r,x:i.x+r.x*e,y:i.y+r.y*e};return this._3d&&(c.z=i.z+r.z*e),c}if(this._linear){let i=this.normal(0),r=this.points.map(function(c){let s={x:c.x+n*i.x,y:c.y+n*i.y};return c.z&&i.z&&(s.z=c.z+n*i.z),s});return[new v(r)]}return this.reduce().map(function(i){return i._linear?i.offset(n)[0]:i.scale(n)})}simple(){if(this.order===3){let r=h.angle(this.points[0],this.points[3],this.points[1]),c=h.angle(this.points[0],this.points[3],this.points[2]);if(r>0&&c<0||r<0&&c>0)return!1}let n=this.normal(0),e=this.normal(1),i=n.x*e.x+n.y*e.y;return this._3d&&(i+=n.z*e.z),G(at(i))<ht/3}reduce(){let n,e=0,i=0,r=.01,c,s=[],u=[],f=this.extrema().values;for(f.indexOf(0)===-1&&(f=[0].concat(f)),f.indexOf(1)===-1&&f.push(1),e=f[0],n=1;n<f.length;n++)i=f[n],c=this.split(e,i),c._t1=e,c._t2=i,s.push(c),e=i;return s.forEach(function(l){for(e=0,i=0;i<=1;)for(i=e+r;i<=1+r;i+=r)if(c=l.split(e,i),!c.simple()){if(i-=r,G(e-i)<r)return[];c=l.split(e,i),c._t1=h.map(e,0,1,l._t1,l._t2),c._t2=h.map(i,0,1,l._t1,l._t2),u.push(c),e=i;break}e<1&&(c=l.split(e,1),c._t1=h.map(e,0,1,l._t1,l._t2),c._t2=l._t2,u.push(c))}),u}translate(n,e,i){i=typeof i=="number"?i:e;let r=this.order,c=this.points.map((s,u)=>(1-u/r)*e+u/r*i);return new v(this.points.map((s,u)=>({x:s.x+n.x*c[u],y:s.y+n.y*c[u]})))}scale(n){let e=this.order,i=!1;if(typeof n=="function"&&(i=n),i&&e===2)return this.raise().scale(i);let r=this.clockwise,c=this.points;if(this._linear)return this.translate(this.normal(0),i?i(0):n,i?i(1):n);let s=i?i(0):n,u=i?i(1):n,f=[this.offset(0,10),this.offset(1,10)],l=[],y=h.lli4(f[0],f[0].c,f[1],f[1].c);if(!y)throw new Error("cannot scale this curve. Try reducing it first.");return[0,1].forEach(function(a){let x=l[a*e]=h.copy(c[a*e]);x.x+=(a?u:s)*f[a].n.x,x.y+=(a?u:s)*f[a].n.y}),i?([0,1].forEach(function(a){if(!(e===2&&!!a)){var x=c[a+1],p={x:x.x-y.x,y:x.y-y.y},g=i?i((a+1)/e):n;i&&!r&&(g=-g);var _=X(p.x*p.x+p.y*p.y);p.x/=_,p.y/=_,l[a+1]={x:x.x+g*p.x,y:x.y+g*p.y}}}),new v(l)):([0,1].forEach(a=>{if(e===2&&!!a)return;let x=l[a*e],p=this.derivative(a),g={x:x.x+p.x,y:x.y+p.y};l[a+1]=h.lli4(x,g,y,c[a+1])}),new v(l))}outline(n,e,i,r){if(e=e===void 0?n:e,this._linear){let m=this.normal(0),E=this.points[0],d=this.points[this.points.length-1],z,A,k;i===void 0&&(i=n,r=e),z={x:E.x+m.x*n,y:E.y+m.y*n},k={x:d.x+m.x*i,y:d.y+m.y*i},A={x:(z.x+k.x)/2,y:(z.y+k.y)/2};let j=[z,A,k];z={x:E.x-m.x*e,y:E.y-m.y*e},k={x:d.x-m.x*r,y:d.y-m.y*r},A={x:(z.x+k.x)/2,y:(z.y+k.y)/2};let C=[k,A,z],R=h.makeline(C[2],j[0]),I=h.makeline(j[2],C[0]),$=[R,new v(j),I,new v(C)];return new b($)}let c=this.reduce(),s=c.length,u=[],f=[],l,y=0,a=this.length(),x=typeof i!="undefined"&&typeof r!="undefined";function p(m,E,d,z,A){return function(k){let j=z/d,C=(z+A)/d,R=E-m;return h.map(k,0,1,m+j*R,m+C*R)}}c.forEach(function(m){let E=m.length();x?(u.push(m.scale(p(n,i,a,y,E))),f.push(m.scale(p(-e,-r,a,y,E)))):(u.push(m.scale(n)),f.push(m.scale(-e))),y+=E}),f=f.map(function(m){return l=m.points,l[3]?m.points=[l[3],l[2],l[1],l[0]]:m.points=[l[2],l[1],l[0]],m}).reverse();let g=u[0].points[0],_=u[s-1].points[u[s-1].points.length-1],q=f[s-1].points[f[s-1].points.length-1],O=f[0].points[0],M=h.makeline(q,g),w=h.makeline(_,O),S=[M].concat(u).concat([w]).concat(f);return new b(S)}outlineshapes(n,e,i){e=e||n;let r=this.outline(n,e).curves,c=[];for(let s=1,u=r.length;s<u/2;s++){let f=h.makeshape(r[s],r[u-s],i);f.startcap.virtual=s>1,f.endcap.virtual=s<u/2-1,c.push(f)}return c}intersects(n,e){return n?n.p1&&n.p2?this.lineIntersects(n):(n instanceof v&&(n=n.reduce()),this.curveintersects(this.reduce(),n,e)):this.selfintersects(e)}lineIntersects(n){let e=H(n.p1.x,n.p2.x),i=H(n.p1.y,n.p2.y),r=K(n.p1.x,n.p2.x),c=K(n.p1.y,n.p2.y);return h.roots(this.points,n).filter(s=>{var u=this.get(s);return h.between(u.x,e,r)&&h.between(u.y,i,c)})}selfintersects(n){let e=this.reduce(),i=e.length-2,r=[];for(let c=0,s,u,f;c<i;c++)u=e.slice(c,c+1),f=e.slice(c+2),s=this.curveintersects(u,f,n),r.push(...s);return r}curveintersects(n,e,i){let r=[];n.forEach(function(s){e.forEach(function(u){s.overlaps(u)&&r.push({left:s,right:u})})});let c=[];return r.forEach(function(s){let u=h.pairiteration(s.left,s.right,i);u.length>0&&(c=c.concat(u))}),c}arcs(n){return n=n||.5,this._iterate(n,[])}_error(n,e,i,r){let c=(r-i)/4,s=this.get(i+c),u=this.get(r-c),f=h.dist(n,e),l=h.dist(n,s),y=h.dist(n,u);return G(l-f)+G(y-f)}_iterate(n,e){let i=0,r=1,c;do{c=0,r=1;let s=this.get(i),u,f,l,y,a=!1,x=!1,p,g=r,_=1,q=0;do if(x=a,y=l,g=(i+r)/2,q++,u=this.get(g),f=this.get(r),l=h.getccenter(s,u,f),l.interval={start:i,end:r},a=this._error(l,s,i,r)<=n,p=x&&!a,p||(_=r),a){if(r>=1){if(l.interval.end=_=1,y=l,r>1){let M={x:l.x+l.r*ft(l.e),y:l.y+l.r*lt(l.e)};l.e+=h.angle({x:l.x,y:l.y},M,this.get(1))}break}r=r+(r-i)/2}else r=g;while(!p&&c++<100);if(c>=100)break;y=y||l,e.push(y),i=_}while(r<1);return e}};return st(yt);})();