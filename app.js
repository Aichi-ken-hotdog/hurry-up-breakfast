var Pf=0,Fh=1,Lf=2;var od=1,vl=2,Wn=3,dn=0,Jt=1,Xt=2,mi=0,xs=1,Bh=2,kh=3,zh=4,Df=5,Oi=100,Nf=101,Uf=102,Of=103,Ff=104,Bf=200,kf=201,zf=202,Hf=203,Qa=204,ec=205,Vf=206,Gf=207,Wf=208,Xf=209,qf=210,Yf=211,$f=212,Zf=213,Kf=214,tc=0,nc=1,ic=2,Ms=3,sc=4,rc=5,oc=6,ac=7,ad=0,Jf=1,jf=2,gi=0,Qf=1,ep=2,tp=3,Ml=4,np=5,ip=6,sp=7,Hh="attached",rp="detached",cd=300,Ss=301,bs=302,cc=303,lc=304,jo=306,Zn=1e3,qn=1001,hr=1002,zt=1003,Sl=1004;var ms=1005;var Kt=1006,sr=1007;var In=1008;var Kn=1009,ld=1010,hd=1011,ur=1012,bl=1013,Bi=1014,Tn=1015,br=1016,El=1017,Tl=1018,Es=1020,ud=35902,dd=1021,fd=1022,un=1023,pd=1024,md=1025,_s=1026,Ts=1027,wl=1028,Al=1029,gd=1030,Rl=1031;var Cl=1033,uo=33776,fo=33777,po=33778,mo=33779,hc=35840,uc=35841,dc=35842,fc=35843,pc=36196,mc=37492,gc=37496,xc=37808,_c=37809,yc=37810,vc=37811,Mc=37812,Sc=37813,bc=37814,Ec=37815,Tc=37816,wc=37817,Ac=37818,Rc=37819,Cc=37820,Ic=37821,go=36492,Pc=36494,Lc=36495,xd=36283,Dc=36284,Nc=36285,Uc=36286;var ws=2300,As=2301,xa=2302,Vh=2400,Gh=2401,Wh=2402,op=2500;var _d=0,Qo=1,Er=2,ap=3200,cp=3201;var yd=0,lp=1,di="",mt="srgb",Vt="srgb-linear",ea="linear",ot="srgb";var Ki=7680;var Xh=519,hp=512,up=513,dp=514,vd=515,fp=516,pp=517,mp=518,gp=519,Oc=35044;var qh="300 es",Yn=2e3,xo=2001,xi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yh=1234567,rr=Math.PI/180,Rs=180/Math.PI;function wn(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Bt[s&255]+Bt[s>>8&255]+Bt[s>>16&255]+Bt[s>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]).toLowerCase()}function Tt(s,e,t){return Math.max(e,Math.min(t,s))}function Il(s,e){return(s%e+e)%e}function xp(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function _p(s,e,t){return s!==e?(t-s)/(e-s):0}function or(s,e,t){return(1-t)*s+t*e}function yp(s,e,t,n){return or(s,e,1-Math.exp(-t*n))}function vp(s,e=1){return e-Math.abs(Il(s,e*2)-e)}function Mp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Sp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function bp(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Ep(s,e){return s+Math.random()*(e-s)}function Tp(s){return s*(.5-Math.random())}function wp(s){s!==void 0&&(Yh=s);let e=Yh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ap(s){return s*rr}function Rp(s){return s*Rs}function Cp(s){return(s&s-1)===0&&s!==0}function Ip(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Pp(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Lp(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*h,c*u,c*d,a*l);break;case"YZY":s.set(c*d,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*d,a*h,a*l);break;case"XZX":s.set(a*h,c*g,c*f,a*l);break;case"YXY":s.set(c*f,a*h,c*g,a*l);break;case"ZYZ":s.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function En(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function st(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Md={DEG2RAD:rr,RAD2DEG:Rs,generateUUID:wn,clamp:Tt,euclideanModulo:Il,mapLinear:xp,inverseLerp:_p,lerp:or,damp:yp,pingpong:vp,smoothstep:Mp,smootherstep:Sp,randInt:bp,randFloat:Ep,randFloatSpread:Tp,seededRandom:wp,degToRad:Ap,radToDeg:Rp,isPowerOfTwo:Cp,ceilPowerOfTwo:Ip,floorPowerOfTwo:Pp,setQuaternionFromProperEuler:Lp,normalize:st,denormalize:En},se=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Be=class s{constructor(e,t,n,i,r,o,a,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],x=i[0],m=i[3],p=i[6],y=i[1],b=i[4],_=i[7],P=i[2],A=i[5],R=i[8];return r[0]=o*x+a*y+c*P,r[3]=o*m+a*b+c*A,r[6]=o*p+a*_+c*R,r[1]=l*x+h*y+u*P,r[4]=l*m+h*b+u*A,r[7]=l*p+h*_+u*R,r[2]=d*x+f*y+g*P,r[5]=d*m+f*b+g*A,r[8]=d*p+f*_+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(i*l-h*n)*x,e[2]=(a*n-i*o)*x,e[3]=d*x,e[4]=(h*t-i*c)*x,e[5]=(i*r-a*t)*x,e[6]=f*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(_a.makeScale(e,t)),this}rotate(e){return this.premultiply(_a.makeRotation(-e)),this}translate(e,t){return this.premultiply(_a.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},_a=new Be;function Sd(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function dr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Dp(){let s=dr("canvas");return s.style.display="block",s}var $h={};function nr(s){s in $h||($h[s]=!0,console.warn(s))}function Np(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Up(s){let e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Op(s){let e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Xe={enabled:!0,workingColorSpace:Vt,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===ot&&(s.r=$n(s.r),s.g=$n(s.g),s.b=$n(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===ot&&(s.r=ys(s.r),s.g=ys(s.g),s.b=ys(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===di?ea:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function $n(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ys(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Zh=[.64,.33,.3,.6,.15,.06],Kh=[.2126,.7152,.0722],Jh=[.3127,.329],jh=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qh=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Xe.define({[Vt]:{primaries:Zh,whitePoint:Jh,transfer:ea,toXYZ:jh,fromXYZ:Qh,luminanceCoefficients:Kh,workingColorSpaceConfig:{unpackColorSpace:mt},outputColorSpaceConfig:{drawingBufferColorSpace:mt}},[mt]:{primaries:Zh,whitePoint:Jh,transfer:ot,toXYZ:jh,fromXYZ:Qh,luminanceCoefficients:Kh,outputColorSpaceConfig:{drawingBufferColorSpace:mt}}});var Ji,Fc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ji===void 0&&(Ji=dr("canvas")),Ji.width=e.width,Ji.height=e.height;let n=Ji.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ji}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=dr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=$n(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor($n(t[n]/255)*255):t[n]=$n(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Fp=0,_o=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fp++}),this.uuid=wn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(ya(i[o].image)):r.push(ya(i[o]))}else r=ya(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function ya(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Fc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Bp=0,It=class s extends xi{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=qn,i=qn,r=Kt,o=In,a=un,c=Kn,l=s.DEFAULT_ANISOTROPY,h=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=wn(),this.name="",this.source=new _o(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zn:e.x=e.x-Math.floor(e.x);break;case qn:e.x=e.x<0?0:1;break;case hr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zn:e.y=e.y-Math.floor(e.y);break;case qn:e.y=e.y<0?0:1;break;case hr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=cd;It.DEFAULT_ANISOTROPY=1;var et=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(l+1)/2,_=(f+1)/2,P=(p+1)/2,A=(h+d)/4,R=(u+x)/4,C=(g+m)/4;return b>_&&b>P?b<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(b),i=A/n,r=R/n):_>P?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=A/i,r=C/i):P<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(P),n=R/r,i=C/r),this.set(n,i,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-x)/y,this.z=(d-h)/y,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Bc=class extends xi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new et(0,0,e,t),this.scissorTest=!1,this.viewport=new et(0,0,e,t);let i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new It(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new _o(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jn=class extends Bc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},yo=class extends It{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=zt,this.minFilter=zt,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var kc=class extends It{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=zt,this.minFilter=zt,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var An=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],d=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(u!==x||c!==d||l!==f||h!==g){let m=1-a,p=c*d+l*f+h*g+u*x,y=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){let P=Math.sqrt(b),A=Math.atan2(P,p*y);m=Math.sin(m*A)/P,a=Math.sin(a*A)/P}let _=a*y;if(c=c*m+d*_,l=l*m+f*_,h=h*m+g*_,u=u*m+x*_,m===1-a){let P=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=P,l*=P,h*=P,u*=P}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-a*f,e[t+2]=l*g+h*f+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),d=c(n/2),f=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-i)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},w=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(eu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(eu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return va.copy(this).projectOnVector(e),this.sub(va)}reflect(e){return this.sub(va.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},va=new w,eu=new An,jt=class{constructor(e=new w(1/0,1/0,1/0),t=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Mn):Mn.fromBufferAttribute(r,o),Mn.applyMatrix4(e.matrixWorld),this.expandByPoint(Mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Nr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Nr.copy(n.boundingBox)),Nr.applyMatrix4(e.matrixWorld),this.union(Nr)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mn),Mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xs),Ur.subVectors(this.max,Xs),ji.subVectors(e.a,Xs),Qi.subVectors(e.b,Xs),es.subVectors(e.c,Xs),oi.subVectors(Qi,ji),ai.subVectors(es,Qi),Ci.subVectors(ji,es);let t=[0,-oi.z,oi.y,0,-ai.z,ai.y,0,-Ci.z,Ci.y,oi.z,0,-oi.x,ai.z,0,-ai.x,Ci.z,0,-Ci.x,-oi.y,oi.x,0,-ai.y,ai.x,0,-Ci.y,Ci.x,0];return!Ma(t,ji,Qi,es,Ur)||(t=[1,0,0,0,1,0,0,0,1],!Ma(t,ji,Qi,es,Ur))?!1:(Or.crossVectors(oi,ai),t=[Or.x,Or.y,Or.z],Ma(t,ji,Qi,es,Ur))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Bn=[new w,new w,new w,new w,new w,new w,new w,new w],Mn=new w,Nr=new jt,ji=new w,Qi=new w,es=new w,oi=new w,ai=new w,Ci=new w,Xs=new w,Ur=new w,Or=new w,Ii=new w;function Ma(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ii.fromArray(s,r);let a=i.x*Math.abs(Ii.x)+i.y*Math.abs(Ii.y)+i.z*Math.abs(Ii.z),c=e.dot(Ii),l=t.dot(Ii),h=n.dot(Ii);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var kp=new jt,qs=new w,Sa=new w,on=class{constructor(e=new w,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):kp.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qs.subVectors(e,this.center);let t=qs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(qs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qs.copy(e.center).add(Sa)),this.expandByPoint(qs.copy(e.center).sub(Sa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},kn=new w,ba=new w,Fr=new w,ci=new w,Ea=new w,Br=new w,Ta=new w,Cs=class{constructor(e=new w,t=new w(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(kn.copy(this.origin).addScaledVector(this.direction,t),kn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ba.copy(e).add(t).multiplyScalar(.5),Fr.copy(t).sub(e).normalize(),ci.copy(this.origin).sub(ba);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Fr),a=ci.dot(this.direction),c=-ci.dot(Fr),l=ci.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(ba).addScaledVector(Fr,d),f}intersectSphere(e,t){kn.subVectors(e.center,this.origin);let n=kn.dot(this.direction),i=kn.dot(kn)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,kn)!==null}intersectTriangle(e,t,n,i,r){Ea.subVectors(t,e),Br.subVectors(n,e),Ta.crossVectors(Ea,Br);let o=this.direction.dot(Ta),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ci.subVectors(this.origin,e);let c=a*this.direction.dot(Br.crossVectors(ci,Br));if(c<0)return null;let l=a*this.direction.dot(Ea.cross(ci));if(l<0||c+l>o)return null;let h=-a*ci.dot(Ta);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},De=class s{constructor(e,t,n,i,r,o,a,c,l,h,u,d,f,g,x,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,h,u,d,f,g,x,m)}set(e,t,n,i,r,o,a,c,l,h,u,d,f,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/ts.setFromMatrixColumn(e,0).length(),r=1/ts.setFromMatrixColumn(e,1).length(),o=1/ts.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,g=a*h,x=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-x*l,t[9]=-a*c,t[2]=x-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,g=l*h,x=l*u;t[0]=d+x*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=x+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,g=l*h,x=l*u;t[0]=d-x*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=x-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*h,f=o*u,g=a*h,x=a*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+x,t[1]=c*u,t[5]=x*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,f=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=x-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-x*u}else if(e.order==="XZY"){let d=o*c,f=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+x,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zp,e,Hp)}lookAt(e,t,n){let i=this.elements;return sn.subVectors(e,t),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),li.crossVectors(n,sn),li.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),li.crossVectors(n,sn)),li.normalize(),kr.crossVectors(sn,li),i[0]=li.x,i[4]=kr.x,i[8]=sn.x,i[1]=li.y,i[5]=kr.y,i[9]=sn.y,i[2]=li.z,i[6]=kr.z,i[10]=sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],y=n[3],b=n[7],_=n[11],P=n[15],A=i[0],R=i[4],C=i[8],E=i[12],M=i[1],I=i[5],z=i[9],k=i[13],G=i[2],K=i[6],W=i[10],ne=i[14],V=i[3],ae=i[7],fe=i[11],Ee=i[15];return r[0]=o*A+a*M+c*G+l*V,r[4]=o*R+a*I+c*K+l*ae,r[8]=o*C+a*z+c*W+l*fe,r[12]=o*E+a*k+c*ne+l*Ee,r[1]=h*A+u*M+d*G+f*V,r[5]=h*R+u*I+d*K+f*ae,r[9]=h*C+u*z+d*W+f*fe,r[13]=h*E+u*k+d*ne+f*Ee,r[2]=g*A+x*M+m*G+p*V,r[6]=g*R+x*I+m*K+p*ae,r[10]=g*C+x*z+m*W+p*fe,r[14]=g*E+x*k+m*ne+p*Ee,r[3]=y*A+b*M+_*G+P*V,r[7]=y*R+b*I+_*K+P*ae,r[11]=y*C+b*z+_*W+P*fe,r[15]=y*E+b*k+_*ne+P*Ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+r*c*u-i*l*u-r*a*d+n*l*d+i*a*f-n*c*f)+x*(+t*c*f-t*l*d+r*o*d-i*o*f+i*l*h-r*c*h)+m*(+t*l*u-t*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-i*a*h-t*c*u+t*a*d+i*o*u-n*o*d+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],y=u*m*l-x*d*l+x*c*f-a*m*f-u*c*p+a*d*p,b=g*d*l-h*m*l-g*c*f+o*m*f+h*c*p-o*d*p,_=h*x*l-g*u*l+g*a*f-o*x*f-h*a*p+o*u*p,P=g*u*c-h*x*c-g*a*d+o*x*d+h*a*m-o*u*m,A=t*y+n*b+i*_+r*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/A;return e[0]=y*R,e[1]=(x*d*r-u*m*r-x*i*f+n*m*f+u*i*p-n*d*p)*R,e[2]=(a*m*r-x*c*r+x*i*l-n*m*l-a*i*p+n*c*p)*R,e[3]=(u*c*r-a*d*r-u*i*l+n*d*l+a*i*f-n*c*f)*R,e[4]=b*R,e[5]=(h*m*r-g*d*r+g*i*f-t*m*f-h*i*p+t*d*p)*R,e[6]=(g*c*r-o*m*r-g*i*l+t*m*l+o*i*p-t*c*p)*R,e[7]=(o*d*r-h*c*r+h*i*l-t*d*l-o*i*f+t*c*f)*R,e[8]=_*R,e[9]=(g*u*r-h*x*r-g*n*f+t*x*f+h*n*p-t*u*p)*R,e[10]=(o*x*r-g*a*r+g*n*l-t*x*l-o*n*p+t*a*p)*R,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*f-t*a*f)*R,e[12]=P*R,e[13]=(h*x*i-g*u*i+g*n*d-t*x*d-h*n*m+t*u*m)*R,e[14]=(g*a*i-o*x*i-g*n*c+t*x*c+o*n*m-t*a*m)*R,e[15]=(o*u*i-h*a*i+h*n*c-t*u*c-o*n*d+t*a*d)*R,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,x=o*h,m=o*u,p=a*u,y=c*l,b=c*h,_=c*u,P=n.x,A=n.y,R=n.z;return i[0]=(1-(x+p))*P,i[1]=(f+_)*P,i[2]=(g-b)*P,i[3]=0,i[4]=(f-_)*A,i[5]=(1-(d+p))*A,i[6]=(m+y)*A,i[7]=0,i[8]=(g+b)*R,i[9]=(m-y)*R,i[10]=(1-(d+x))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=ts.set(i[0],i[1],i[2]).length(),o=ts.set(i[4],i[5],i[6]).length(),a=ts.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Sn.copy(this);let l=1/r,h=1/o,u=1/a;return Sn.elements[0]*=l,Sn.elements[1]*=l,Sn.elements[2]*=l,Sn.elements[4]*=h,Sn.elements[5]*=h,Sn.elements[6]*=h,Sn.elements[8]*=u,Sn.elements[9]*=u,Sn.elements[10]*=u,t.setFromRotationMatrix(Sn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Yn){let c=this.elements,l=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i),f,g;if(a===Yn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===xo)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Yn){let c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(o-r),d=(t+e)*l,f=(n+i)*h,g,x;if(a===Yn)g=(o+r)*u,x=-2*u;else if(a===xo)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ts=new w,Sn=new De,zp=new w(0,0,0),Hp=new w(1,1,1),li=new w,kr=new w,sn=new w,tu=new De,nu=new An,Pn=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Tt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Tt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return tu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return nu.setFromEuler(this),this.setFromQuaternion(nu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Pn.DEFAULT_ORDER="XYZ";var vo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Vp=0,iu=new w,ns=new An,zn=new De,zr=new w,Ys=new w,Gp=new w,Wp=new An,su=new w(1,0,0),ru=new w(0,1,0),ou=new w(0,0,1),au={type:"added"},Xp={type:"removed"},is={type:"childadded",child:null},wa={type:"childremoved",child:null},gt=class s extends xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vp++}),this.uuid=wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new w,t=new Pn,n=new An,i=new w(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new De},normalMatrix:{value:new Be}}),this.matrix=new De,this.matrixWorld=new De,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ns.setFromAxisAngle(e,t),this.quaternion.multiply(ns),this}rotateOnWorldAxis(e,t){return ns.setFromAxisAngle(e,t),this.quaternion.premultiply(ns),this}rotateX(e){return this.rotateOnAxis(su,e)}rotateY(e){return this.rotateOnAxis(ru,e)}rotateZ(e){return this.rotateOnAxis(ou,e)}translateOnAxis(e,t){return iu.copy(e).applyQuaternion(this.quaternion),this.position.add(iu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(su,e)}translateY(e){return this.translateOnAxis(ru,e)}translateZ(e){return this.translateOnAxis(ou,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?zr.copy(e):zr.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(Ys,zr,this.up):zn.lookAt(zr,Ys,this.up),this.quaternion.setFromRotationMatrix(zn),i&&(zn.extractRotation(i.matrixWorld),ns.setFromRotationMatrix(zn),this.quaternion.premultiply(ns.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(au),is.child=e,this.dispatchEvent(is),is.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Xp),wa.child=e,this.dispatchEvent(wa),wa.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(au),is.child=e,this.dispatchEvent(is),is.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,e,Gp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,Wp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};gt.DEFAULT_UP=new w(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var bn=new w,Hn=new w,Aa=new w,Vn=new w,ss=new w,rs=new w,cu=new w,Ra=new w,Ca=new w,Ia=new w,Pa=new et,La=new et,Da=new et,fi=class s{constructor(e=new w,t=new w,n=new w){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),bn.subVectors(e,t),i.cross(bn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){bn.subVectors(i,t),Hn.subVectors(n,t),Aa.subVectors(e,t);let o=bn.dot(bn),a=bn.dot(Hn),c=bn.dot(Aa),l=Hn.dot(Hn),h=Hn.dot(Aa),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,Vn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Vn.x),c.addScaledVector(o,Vn.y),c.addScaledVector(a,Vn.z),c)}static getInterpolatedAttribute(e,t,n,i,r,o){return Pa.setScalar(0),La.setScalar(0),Da.setScalar(0),Pa.fromBufferAttribute(e,t),La.fromBufferAttribute(e,n),Da.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Pa,r.x),o.addScaledVector(La,r.y),o.addScaledVector(Da,r.z),o}static isFrontFacing(e,t,n,i){return bn.subVectors(n,t),Hn.subVectors(e,t),bn.cross(Hn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),bn.cross(Hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;ss.subVectors(i,n),rs.subVectors(r,n),Ra.subVectors(e,n);let c=ss.dot(Ra),l=rs.dot(Ra);if(c<=0&&l<=0)return t.copy(n);Ca.subVectors(e,i);let h=ss.dot(Ca),u=rs.dot(Ca);if(h>=0&&u<=h)return t.copy(i);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(ss,o);Ia.subVectors(e,r);let f=ss.dot(Ia),g=rs.dot(Ia);if(g>=0&&f<=g)return t.copy(r);let x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(rs,a);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return cu.subVectors(r,i),a=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(cu,a);let p=1/(m+x+d);return o=x*p,a=d*p,t.copy(n).addScaledVector(ss,o).addScaledVector(rs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},bd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},Hr={h:0,s:0,l:0};function Na(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Te=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xe.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Xe.workingColorSpace){if(e=Il(e,1),t=Tt(t,0,1),n=Tt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Na(o,r,e+1/3),this.g=Na(o,r,e),this.b=Na(o,r,e-1/3)}return Xe.toWorkingColorSpace(this,i),this}setStyle(e,t=mt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mt){let n=bd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$n(e.r),this.g=$n(e.g),this.b=$n(e.b),this}copyLinearToSRGB(e){return this.r=ys(e.r),this.g=ys(e.g),this.b=ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mt){return Xe.fromWorkingColorSpace(kt.copy(this),e),Math.round(Tt(kt.r*255,0,255))*65536+Math.round(Tt(kt.g*255,0,255))*256+Math.round(Tt(kt.b*255,0,255))}getHexString(e=mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.fromWorkingColorSpace(kt.copy(this),t);let n=kt.r,i=kt.g,r=kt.b,o=Math.max(n,i,r),a=Math.min(n,i,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Xe.workingColorSpace){return Xe.fromWorkingColorSpace(kt.copy(this),t),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=mt){Xe.fromWorkingColorSpace(kt.copy(this),e);let t=kt.r,n=kt.g,i=kt.b;return e!==mt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(hi),this.setHSL(hi.h+e,hi.s+t,hi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(hi),e.getHSL(Hr);let n=or(hi.h,Hr.h,t),i=or(hi.s,Hr.s,t),r=or(hi.l,Hr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},kt=new Te;Te.NAMES=bd;var qp=0,Qt=class extends xi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=wn(),this.name="",this.blending=xs,this.side=dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qa,this.blendDst=ec,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=Ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ki,this.stencilZFail=Ki,this.stencilZPass=Ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==xs&&(n.blending=this.blending),this.side!==dn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Qa&&(n.blendSrc=this.blendSrc),this.blendDst!==ec&&(n.blendDst=this.blendDst),this.blendEquation!==Oi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ms&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ki&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ki&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ki&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},xt=class extends Qt{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=ad,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var bt=new w,Vr=new se,St=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Oc,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Vr.fromBufferAttribute(this,t),Vr.applyMatrix3(e),this.setXY(t,Vr.x,Vr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=En(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=st(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=En(t,this.array)),t}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=En(t,this.array)),t}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=En(t,this.array)),t}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=En(t,this.array)),t}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array),r=st(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Oc&&(e.usage=this.usage),e}};var Mo=class extends St{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var So=class extends St{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var je=class extends St{constructor(e,t,n){super(new Float32Array(e),t,n)}},Yp=0,hn=new De,Ua=new gt,os=new w,rn=new jt,$s=new jt,Ct=new w,vt=class s extends xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yp++}),this.uuid=wn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sd(e)?So:Mo)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Be().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hn.makeRotationFromQuaternion(e),this.applyMatrix4(hn),this}rotateX(e){return hn.makeRotationX(e),this.applyMatrix4(hn),this}rotateY(e){return hn.makeRotationY(e),this.applyMatrix4(hn),this}rotateZ(e){return hn.makeRotationZ(e),this.applyMatrix4(hn),this}translate(e,t,n){return hn.makeTranslation(e,t,n),this.applyMatrix4(hn),this}scale(e,t,n){return hn.makeScale(e,t,n),this.applyMatrix4(hn),this}lookAt(e){return Ua.lookAt(e),Ua.updateMatrix(),this.applyMatrix4(Ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(os).negate(),this.translate(os.x,os.y,os.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new je(n,3))}else{for(let n=0,i=t.count;n<i;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];rn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new on);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(e){let n=this.boundingSphere.center;if(rn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];$s.setFromBufferAttribute(a),this.morphTargetsRelative?(Ct.addVectors(rn.min,$s.min),rn.expandByPoint(Ct),Ct.addVectors(rn.max,$s.max),rn.expandByPoint(Ct)):(rn.expandByPoint($s.min),rn.expandByPoint($s.max))}rn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Ct.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Ct));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ct.fromBufferAttribute(a,l),c&&(os.fromBufferAttribute(e,l),Ct.add(os)),i=Math.max(i,n.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new St(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<n.count;C++)a[C]=new w,c[C]=new w;let l=new w,h=new w,u=new w,d=new se,f=new se,g=new se,x=new w,m=new w;function p(C,E,M){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,C),f.fromBufferAttribute(r,E),g.fromBufferAttribute(r,M),h.sub(l),u.sub(l),f.sub(d),g.sub(d);let I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(I),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(I),a[C].add(x),a[E].add(x),a[M].add(x),c[C].add(m),c[E].add(m),c[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let C=0,E=y.length;C<E;++C){let M=y[C],I=M.start,z=M.count;for(let k=I,G=I+z;k<G;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let b=new w,_=new w,P=new w,A=new w;function R(C){P.fromBufferAttribute(i,C),A.copy(P);let E=a[C];b.copy(E),b.sub(P.multiplyScalar(P.dot(E))).normalize(),_.crossVectors(A,E);let I=_.dot(c[C])<0?-1:1;o.setXYZW(C,b.x,b.y,b.z,I)}for(let C=0,E=y.length;C<E;++C){let M=y[C],I=M.start,z=M.count;for(let k=I,G=I+z;k<G;k+=3)R(e.getX(k+0)),R(e.getX(k+1)),R(e.getX(k+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new St(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new w,r=new w,o=new w,a=new w,c=new w,l=new w,h=new w,u=new w;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),f=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new St(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},lu=new De,Pi=new Cs,Gr=new on,hu=new w,Wr=new w,Xr=new w,qr=new w,Oa=new w,Yr=new w,uu=new w,$r=new w,te=class extends gt{constructor(e=new vt,t=new xt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){Yr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Oa.fromBufferAttribute(u,e),o?Yr.addScaledVector(Oa,h):Yr.addScaledVector(Oa.sub(t),h))}t.add(Yr)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Gr.copy(n.boundingSphere),Gr.applyMatrix4(r),Pi.copy(e.ray).recast(e.near),!(Gr.containsPoint(Pi.origin)===!1&&(Pi.intersectSphere(Gr,hu)===null||Pi.origin.distanceToSquared(hu)>(e.far-e.near)**2))&&(lu.copy(r).invert(),Pi.copy(e.ray).applyMatrix4(lu),!(n.boundingBox!==null&&Pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Pi)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),b=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let _=y,P=b;_<P;_+=3){let A=a.getX(_),R=a.getX(_+1),C=a.getX(_+2);i=Zr(this,p,e,n,l,h,u,A,R,C),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let y=a.getX(m),b=a.getX(m+1),_=a.getX(m+2);i=Zr(this,o,e,n,l,h,u,y,b,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),b=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let _=y,P=b;_<P;_+=3){let A=_,R=_+1,C=_+2;i=Zr(this,p,e,n,l,h,u,A,R,C),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let y=m,b=m+1,_=m+2;i=Zr(this,o,e,n,l,h,u,y,b,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function $p(s,e,t,n,i,r,o,a){let c;if(e.side===Jt?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===dn,a),c===null)return null;$r.copy(a),$r.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo($r);return l<t.near||l>t.far?null:{distance:l,point:$r.clone(),object:s}}function Zr(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,Wr),s.getVertexPosition(c,Xr),s.getVertexPosition(l,qr);let h=$p(s,e,t,n,Wr,Xr,qr,uu);if(h){let u=new w;fi.getBarycoord(uu,Wr,Xr,qr,u),i&&(h.uv=fi.getInterpolatedAttribute(i,a,c,l,u,new se)),r&&(h.uv1=fi.getInterpolatedAttribute(r,a,c,l,u,new se)),o&&(h.normal=fi.getInterpolatedAttribute(o,a,c,l,u,new w),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new w,materialIndex:0};fi.getNormal(Wr,Xr,qr,d.normal),h.face=d,h.barycoord=u}return h}var qt=class s extends vt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new je(l,3)),this.setAttribute("normal",new je(h,3)),this.setAttribute("uv",new je(u,2));function g(x,m,p,y,b,_,P,A,R,C,E){let M=_/R,I=P/C,z=_/2,k=P/2,G=A/2,K=R+1,W=C+1,ne=0,V=0,ae=new w;for(let fe=0;fe<W;fe++){let Ee=fe*I-k;for(let Ve=0;Ve<K;Ve++){let ct=Ve*M-z;ae[x]=ct*y,ae[m]=Ee*b,ae[p]=G,l.push(ae.x,ae.y,ae.z),ae[x]=0,ae[m]=0,ae[p]=A>0?1:-1,h.push(ae.x,ae.y,ae.z),u.push(Ve/R),u.push(1-fe/C),ne+=1}}for(let fe=0;fe<C;fe++)for(let Ee=0;Ee<R;Ee++){let Ve=d+Ee+K*fe,ct=d+Ee+K*(fe+1),q=d+(Ee+1)+K*(fe+1),ie=d+(Ee+1)+K*fe;c.push(Ve,ct,ie),c.push(ct,q,ie),V+=6}a.addGroup(f,V,E),f+=V,d+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Is(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Wt(s){let e={};for(let t=0;t<s.length;t++){let n=Is(s[t]);for(let i in n)e[i]=n[i]}return e}function Zp(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Ed(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}var Kp={clone:Is,merge:Wt},Jp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ln=class extends Qt{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jp,this.fragmentShader=jp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Is(e.uniforms),this.uniformsGroups=Zp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},bo=class extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new De,this.projectionMatrix=new De,this.projectionMatrixInverse=new De,this.coordinateSystem=Yn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ui=new w,du=new se,fu=new se,wt=class extends bo{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Rs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(rr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rs*2*Math.atan(Math.tan(rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ui.x,ui.y).multiplyScalar(-e/ui.z),ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ui.x,ui.y).multiplyScalar(-e/ui.z)}getViewSize(e,t){return this.getViewBounds(e,du,fu),t.subVectors(fu,du)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(rr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},as=-90,cs=1,zc=class extends gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new wt(as,cs,e,t);i.layers=this.layers,this.add(i);let r=new wt(as,cs,e,t);r.layers=this.layers,this.add(r);let o=new wt(as,cs,e,t);o.layers=this.layers,this.add(o);let a=new wt(as,cs,e,t);a.layers=this.layers,this.add(a);let c=new wt(as,cs,e,t);c.layers=this.layers,this.add(c);let l=new wt(as,cs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===Yn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===xo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Eo=class extends It{constructor(e,t,n,i,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Ss,super(e,t,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Hc=class extends Jn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Eo(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Kt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new qt(5,5,5),r=new Ln({name:"CubemapFromEquirect",uniforms:Is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Jt,blending:mi});r.uniforms.tEquirect.value=t;let o=new te(i,r),a=t.minFilter;return t.minFilter===In&&(t.minFilter=Kt),new zc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}},Fa=new w,Qp=new w,em=new Be,Xn=class{constructor(e=new w(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Fa.subVectors(n,t).cross(Qp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Fa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||em.getNormalMatrix(e),i=this.coplanarPoint(Fa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Li=new on,Kr=new w,fr=class{constructor(e=new Xn,t=new Xn,n=new Xn,i=new Xn,r=new Xn,o=new Xn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Yn){let n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],x=i[10],m=i[11],p=i[12],y=i[13],b=i[14],_=i[15];if(n[0].setComponents(c-r,d-l,m-f,_-p).normalize(),n[1].setComponents(c+r,d+l,m+f,_+p).normalize(),n[2].setComponents(c+o,d+h,m+g,_+y).normalize(),n[3].setComponents(c-o,d-h,m-g,_-y).normalize(),n[4].setComponents(c-a,d-u,m-x,_-b).normalize(),t===Yn)n[5].setComponents(c+a,d+u,m+x,_+b).normalize();else if(t===xo)n[5].setComponents(a,u,x,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Li.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Li)}intersectsSprite(e){return Li.center.set(0,0,0),Li.radius=.7071067811865476,Li.applyMatrix4(e.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Kr.x=i.normal.x>0?e.max.x:e.min.x,Kr.y=i.normal.y>0?e.max.y:e.min.y,Kr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Kr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Td(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function tm(s){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(s.bindBuffer(l,a),u.length===0)s.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let x=u[f];s.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(s.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var Et=class s extends vt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=e/a,d=t/c,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let y=p*d-o;for(let b=0;b<l;b++){let _=b*u-r;g.push(_,-y,0),x.push(0,0,1),m.push(b/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<a;y++){let b=y+l*p,_=y+l*(p+1),P=y+1+l*(p+1),A=y+1+l*p;f.push(b,_,A),f.push(_,P,A)}this.setIndex(f),this.setAttribute("position",new je(g,3)),this.setAttribute("normal",new je(x,3)),this.setAttribute("uv",new je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},nm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,im=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,sm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,om=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,am=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,lm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,um=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,mm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,gm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,xm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,_m=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ym=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Em=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Tm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,wm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Am=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Rm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Im=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Um=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Om=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Fm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,km=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Wm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ym=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,$m=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Zm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Km=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,e0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,t0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,n0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,i0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,s0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,r0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,o0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,a0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,c0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,l0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,h0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,u0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,d0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,f0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,p0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,m0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,g0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,x0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,_0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,y0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,v0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,M0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,S0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,E0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,T0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,w0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,A0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,R0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,C0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,I0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,P0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,L0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,D0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,N0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,U0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,O0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,F0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,B0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,k0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,z0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,H0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,V0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,G0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,W0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,X0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,q0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Y0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Z0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,K0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,J0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,j0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,eg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,tg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ng=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,og=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ag=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,cg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,lg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,hg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ug=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,gg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_g=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,vg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Sg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,bg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Eg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,wg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ag=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ig=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Dg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ng=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:nm,alphahash_pars_fragment:im,alphamap_fragment:sm,alphamap_pars_fragment:rm,alphatest_fragment:om,alphatest_pars_fragment:am,aomap_fragment:cm,aomap_pars_fragment:lm,batching_pars_vertex:hm,batching_vertex:um,begin_vertex:dm,beginnormal_vertex:fm,bsdfs:pm,iridescence_fragment:mm,bumpmap_pars_fragment:gm,clipping_planes_fragment:xm,clipping_planes_pars_fragment:_m,clipping_planes_pars_vertex:ym,clipping_planes_vertex:vm,color_fragment:Mm,color_pars_fragment:Sm,color_pars_vertex:bm,color_vertex:Em,common:Tm,cube_uv_reflection_fragment:wm,defaultnormal_vertex:Am,displacementmap_pars_vertex:Rm,displacementmap_vertex:Cm,emissivemap_fragment:Im,emissivemap_pars_fragment:Pm,colorspace_fragment:Lm,colorspace_pars_fragment:Dm,envmap_fragment:Nm,envmap_common_pars_fragment:Um,envmap_pars_fragment:Om,envmap_pars_vertex:Fm,envmap_physical_pars_fragment:$m,envmap_vertex:Bm,fog_vertex:km,fog_pars_vertex:zm,fog_fragment:Hm,fog_pars_fragment:Vm,gradientmap_pars_fragment:Gm,lightmap_pars_fragment:Wm,lights_lambert_fragment:Xm,lights_lambert_pars_fragment:qm,lights_pars_begin:Ym,lights_toon_fragment:Zm,lights_toon_pars_fragment:Km,lights_phong_fragment:Jm,lights_phong_pars_fragment:jm,lights_physical_fragment:Qm,lights_physical_pars_fragment:e0,lights_fragment_begin:t0,lights_fragment_maps:n0,lights_fragment_end:i0,logdepthbuf_fragment:s0,logdepthbuf_pars_fragment:r0,logdepthbuf_pars_vertex:o0,logdepthbuf_vertex:a0,map_fragment:c0,map_pars_fragment:l0,map_particle_fragment:h0,map_particle_pars_fragment:u0,metalnessmap_fragment:d0,metalnessmap_pars_fragment:f0,morphinstance_vertex:p0,morphcolor_vertex:m0,morphnormal_vertex:g0,morphtarget_pars_vertex:x0,morphtarget_vertex:_0,normal_fragment_begin:y0,normal_fragment_maps:v0,normal_pars_fragment:M0,normal_pars_vertex:S0,normal_vertex:b0,normalmap_pars_fragment:E0,clearcoat_normal_fragment_begin:T0,clearcoat_normal_fragment_maps:w0,clearcoat_pars_fragment:A0,iridescence_pars_fragment:R0,opaque_fragment:C0,packing:I0,premultiplied_alpha_fragment:P0,project_vertex:L0,dithering_fragment:D0,dithering_pars_fragment:N0,roughnessmap_fragment:U0,roughnessmap_pars_fragment:O0,shadowmap_pars_fragment:F0,shadowmap_pars_vertex:B0,shadowmap_vertex:k0,shadowmask_pars_fragment:z0,skinbase_vertex:H0,skinning_pars_vertex:V0,skinning_vertex:G0,skinnormal_vertex:W0,specularmap_fragment:X0,specularmap_pars_fragment:q0,tonemapping_fragment:Y0,tonemapping_pars_fragment:$0,transmission_fragment:Z0,transmission_pars_fragment:K0,uv_pars_fragment:J0,uv_pars_vertex:j0,uv_vertex:Q0,worldpos_vertex:eg,background_vert:tg,background_frag:ng,backgroundCube_vert:ig,backgroundCube_frag:sg,cube_vert:rg,cube_frag:og,depth_vert:ag,depth_frag:cg,distanceRGBA_vert:lg,distanceRGBA_frag:hg,equirect_vert:ug,equirect_frag:dg,linedashed_vert:fg,linedashed_frag:pg,meshbasic_vert:mg,meshbasic_frag:gg,meshlambert_vert:xg,meshlambert_frag:_g,meshmatcap_vert:yg,meshmatcap_frag:vg,meshnormal_vert:Mg,meshnormal_frag:Sg,meshphong_vert:bg,meshphong_frag:Eg,meshphysical_vert:Tg,meshphysical_frag:wg,meshtoon_vert:Ag,meshtoon_frag:Rg,points_vert:Cg,points_frag:Ig,shadow_vert:Pg,shadow_frag:Lg,sprite_vert:Dg,sprite_frag:Ng},re={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},Cn={basic:{uniforms:Wt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Wt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Te(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Wt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Wt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Wt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Te(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Wt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Wt([re.points,re.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Wt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Wt([re.common,re.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Wt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Wt([re.sprite,re.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Wt([re.common,re.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Wt([re.lights,re.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Cn.physical={uniforms:Wt([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};var Jr={r:0,b:0,g:0},Di=new Pn,Ug=new De;function Og(s,e,t,n,i,r,o){let a=new Te(0),c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(y){let b=y.isScene===!0?y.background:null;return b&&b.isTexture&&(b=(y.backgroundBlurriness>0?t:e).get(b)),b}function x(y){let b=!1,_=g(y);_===null?p(a,c):_&&_.isColor&&(p(_,1),b=!0);let P=s.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(y,b){let _=g(b);_&&(_.isCubeTexture||_.mapping===jo)?(h===void 0&&(h=new te(new qt(1,1,1),new Ln({name:"BackgroundCubeMaterial",uniforms:Is(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Di.copy(b.backgroundRotation),Di.x*=-1,Di.y*=-1,Di.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ug.makeRotationFromEuler(Di)),h.material.toneMapped=Xe.getTransfer(_.colorSpace)!==ot,(u!==_||d!==_.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=s.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new te(new Et(2,2),new Ln({name:"BackgroundMaterial",uniforms:Is(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=Xe.getTransfer(_.colorSpace)!==ot,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=_,d=_.version,f=s.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,b){y.getRGB(Jr,Ed(s)),n.buffers.color.setClear(Jr.r,Jr.g,Jr.b,b,o)}return{getClearColor:function(){return a},setClearColor:function(y,b=1){a.set(y),c=b,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(a,c)},render:x,addToRenderList:m}}function Fg(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,o=!1;function a(M,I,z,k,G){let K=!1,W=u(k,z,I);r!==W&&(r=W,l(r.object)),K=f(M,k,z,G),K&&g(M,k,z,G),G!==null&&e.update(G,s.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,_(M,I,z,k),G!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function c(){return s.createVertexArray()}function l(M){return s.bindVertexArray(M)}function h(M){return s.deleteVertexArray(M)}function u(M,I,z){let k=z.wireframe===!0,G=n[M.id];G===void 0&&(G={},n[M.id]=G);let K=G[I.id];K===void 0&&(K={},G[I.id]=K);let W=K[k];return W===void 0&&(W=d(c()),K[k]=W),W}function d(M){let I=[],z=[],k=[];for(let G=0;G<t;G++)I[G]=0,z[G]=0,k[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:z,attributeDivisors:k,object:M,attributes:{},index:null}}function f(M,I,z,k){let G=r.attributes,K=I.attributes,W=0,ne=z.getAttributes();for(let V in ne)if(ne[V].location>=0){let fe=G[V],Ee=K[V];if(Ee===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(Ee=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(Ee=M.instanceColor)),fe===void 0||fe.attribute!==Ee||Ee&&fe.data!==Ee.data)return!0;W++}return r.attributesNum!==W||r.index!==k}function g(M,I,z,k){let G={},K=I.attributes,W=0,ne=z.getAttributes();for(let V in ne)if(ne[V].location>=0){let fe=K[V];fe===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(fe=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(fe=M.instanceColor));let Ee={};Ee.attribute=fe,fe&&fe.data&&(Ee.data=fe.data),G[V]=Ee,W++}r.attributes=G,r.attributesNum=W,r.index=k}function x(){let M=r.newAttributes;for(let I=0,z=M.length;I<z;I++)M[I]=0}function m(M){p(M,0)}function p(M,I){let z=r.newAttributes,k=r.enabledAttributes,G=r.attributeDivisors;z[M]=1,k[M]===0&&(s.enableVertexAttribArray(M),k[M]=1),G[M]!==I&&(s.vertexAttribDivisor(M,I),G[M]=I)}function y(){let M=r.newAttributes,I=r.enabledAttributes;for(let z=0,k=I.length;z<k;z++)I[z]!==M[z]&&(s.disableVertexAttribArray(z),I[z]=0)}function b(M,I,z,k,G,K,W){W===!0?s.vertexAttribIPointer(M,I,z,G,K):s.vertexAttribPointer(M,I,z,k,G,K)}function _(M,I,z,k){x();let G=k.attributes,K=z.getAttributes(),W=I.defaultAttributeValues;for(let ne in K){let V=K[ne];if(V.location>=0){let ae=G[ne];if(ae===void 0&&(ne==="instanceMatrix"&&M.instanceMatrix&&(ae=M.instanceMatrix),ne==="instanceColor"&&M.instanceColor&&(ae=M.instanceColor)),ae!==void 0){let fe=ae.normalized,Ee=ae.itemSize,Ve=e.get(ae);if(Ve===void 0)continue;let ct=Ve.buffer,q=Ve.type,ie=Ve.bytesPerElement,ve=q===s.INT||q===s.UNSIGNED_INT||ae.gpuType===bl;if(ae.isInterleavedBufferAttribute){let ce=ae.data,Ie=ce.stride,Ne=ae.offset;if(ce.isInstancedInterleavedBuffer){for(let Ge=0;Ge<V.locationSize;Ge++)p(V.location+Ge,ce.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Ge=0;Ge<V.locationSize;Ge++)m(V.location+Ge);s.bindBuffer(s.ARRAY_BUFFER,ct);for(let Ge=0;Ge<V.locationSize;Ge++)b(V.location+Ge,Ee/V.locationSize,q,fe,Ie*ie,(Ne+Ee/V.locationSize*Ge)*ie,ve)}else{if(ae.isInstancedBufferAttribute){for(let ce=0;ce<V.locationSize;ce++)p(V.location+ce,ae.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ce=0;ce<V.locationSize;ce++)m(V.location+ce);s.bindBuffer(s.ARRAY_BUFFER,ct);for(let ce=0;ce<V.locationSize;ce++)b(V.location+ce,Ee/V.locationSize,q,fe,Ee*ie,Ee/V.locationSize*ce*ie,ve)}}else if(W!==void 0){let fe=W[ne];if(fe!==void 0)switch(fe.length){case 2:s.vertexAttrib2fv(V.location,fe);break;case 3:s.vertexAttrib3fv(V.location,fe);break;case 4:s.vertexAttrib4fv(V.location,fe);break;default:s.vertexAttrib1fv(V.location,fe)}}}}y()}function P(){C();for(let M in n){let I=n[M];for(let z in I){let k=I[z];for(let G in k)h(k[G].object),delete k[G];delete I[z]}delete n[M]}}function A(M){if(n[M.id]===void 0)return;let I=n[M.id];for(let z in I){let k=I[z];for(let G in k)h(k[G].object),delete k[G];delete I[z]}delete n[M.id]}function R(M){for(let I in n){let z=n[I];if(z[M.id]===void 0)continue;let k=z[M.id];for(let G in k)h(k[G].object),delete k[G];delete z[M.id]}}function C(){E(),o=!0,r!==i&&(r=i,l(r.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:E,dispose:P,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function Bg(s,e,t){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function c(l,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*d[x];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function kg(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(R){return!(R!==un&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let C=R===br&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Kn&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Tn&&!C)}function c(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:_,vertexTextures:P,maxSamples:A}}function zg(s){let e=this,t=null,n=0,i=!1,r=!1,o=new Xn,a=new Be,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{let y=r?0:n,b=y*4,_=p.clippingState||null;c.value=_,_=h(g,d,b,f);for(let P=0;P!==b;++P)_[P]=t[P];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=f+x*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,_=f;b!==x;++b,_+=4)o.copy(u[b]).applyMatrix4(y,a),o.normal.toArray(m,_),m[_+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Hg(s){let e=new WeakMap;function t(o,a){return a===cc?o.mapping=Ss:a===lc&&(o.mapping=bs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===cc||a===lc)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Hc(c.height);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Ps=class extends bo{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},gs=4,pu=[.125,.215,.35,.446,.526,.582],Fi=20,Ba=new Ps,mu=new Te,ka=null,za=0,Ha=0,Va=!1,Ui=(1+Math.sqrt(5))/2,ls=1/Ui,gu=[new w(-Ui,ls,0),new w(Ui,ls,0),new w(-ls,0,Ui),new w(ls,0,Ui),new w(0,Ui,-ls),new w(0,Ui,ls),new w(-1,1,-1),new w(1,1,-1),new w(-1,1,1),new w(1,1,1)],To=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ka=this._renderer.getRenderTarget(),za=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel(),Va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_u(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ka,za,Ha),this._renderer.xr.enabled=Va,e.scissorTest=!1,jr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ss||e.mapping===bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ka=this._renderer.getRenderTarget(),za=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel(),Va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:br,format:un,colorSpace:Vt,depthBuffer:!1},i=xu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xu(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vg(r)),this._blurMaterial=Gg(r,e,t)}return i}_compileMaterial(e){let t=new te(this._lodPlanes[0],e);this._renderer.compile(t,Ba)}_sceneToCubeUV(e,t,n,i){let a=new wt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(mu),h.toneMapping=gi,h.autoClear=!1;let f=new xt({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1}),g=new te(new qt,f),x=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,x=!0):(f.color.copy(mu),x=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):y===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let b=this._cubeSize;jr(i,y*b,p>2?b:0,b,b),h.setRenderTarget(i),x&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Ss||e.mapping===bs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=yu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_u());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new te(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;jr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Ba)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=gu[(i-r-1)%gu.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new te(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Fi-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Fi;m>Fi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Fi}`);let p=[],y=0;for(let R=0;R<Fi;++R){let C=R/x,E=Math.exp(-C*C/2);p.push(E),R===0?y+=E:R<m&&(y+=2*E)}for(let R=0;R<p.length;R++)p[R]=p[R]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-n;let _=this._sizeLods[i],P=3*_*(i>b-gs?i-b+gs:0),A=4*(this._cubeSize-_);jr(t,P,A,3*_,2*_),c.setRenderTarget(t),c.render(u,Ba)}};function Vg(s){let e=[],t=[],n=[],i=s,r=s-gs+1+pu.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);t.push(a);let c=1/a;o>s-gs?c=pu[o-s+gs-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,m=2,p=1,y=new Float32Array(x*g*f),b=new Float32Array(m*g*f),_=new Float32Array(p*g*f);for(let A=0;A<f;A++){let R=A%3*2/3-1,C=A>2?0:-1,E=[R,C,0,R+2/3,C,0,R+2/3,C+1,0,R,C,0,R+2/3,C+1,0,R,C+1,0];y.set(E,x*g*A),b.set(d,m*g*A);let M=[A,A,A,A,A,A];_.set(M,p*g*A)}let P=new vt;P.setAttribute("position",new St(y,x)),P.setAttribute("uv",new St(b,m)),P.setAttribute("faceIndex",new St(_,p)),e.push(P),i>gs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function xu(s,e,t){let n=new Jn(s,e,t);return n.texture.mapping=jo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function jr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Gg(s,e,t){let n=new Float32Array(Fi),i=new w(0,1,0);return new Ln({name:"SphericalGaussianBlur",defines:{n:Fi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function _u(){return new Ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function yu(){return new Ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Pl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Wg(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===cc||c===lc,h=c===Ss||c===bs;if(l||h){let u=e.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new To(s)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return l&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new To(s)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Xg(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&nr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function qg(s,e,t,n){let i={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)e.remove(x[m])}d.removeEventListener("dispose",o),delete i[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)e.update(d[g],s.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let x=f[g];for(let m=0,p=x.length;m<p;m++)e.update(x[m],s.ARRAY_BUFFER)}}function l(u){let d=[],f=u.index,g=u.attributes.position,x=0;if(f!==null){let y=f.array;x=f.version;for(let b=0,_=y.length;b<_;b+=3){let P=y[b+0],A=y[b+1],R=y[b+2];d.push(P,A,A,R,R,P)}}else if(g!==void 0){let y=g.array;x=g.version;for(let b=0,_=y.length/3-1;b<_;b+=3){let P=b+0,A=b+1,R=b+2;d.push(P,A,A,R,R,P)}}else return;let m=new(Sd(d)?So:Mo)(d,1);m.version=x;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Yg(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){s.drawElements(n,f,r,d*o),t.update(f,n,1)}function l(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,g);let p=0;for(let y=0;y<g;y++)p+=f[y]*x[y];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function $g(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Zg(s,e,t){let n=new WeakMap,i=new et;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let E=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],b=0;f===!0&&(b=1),g===!0&&(b=2),x===!0&&(b=3);let _=a.attributes.position.count*b,P=1;_>e.maxTextureSize&&(P=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let A=new Float32Array(_*P*4*u),R=new yo(A,_,P,u);R.type=Tn,R.needsUpdate=!0;let C=b*4;for(let M=0;M<u;M++){let I=m[M],z=p[M],k=y[M],G=_*P*4*M;for(let K=0;K<I.count;K++){let W=K*C;f===!0&&(i.fromBufferAttribute(I,K),A[G+W+0]=i.x,A[G+W+1]=i.y,A[G+W+2]=i.z,A[G+W+3]=0),g===!0&&(i.fromBufferAttribute(z,K),A[G+W+4]=i.x,A[G+W+5]=i.y,A[G+W+6]=i.z,A[G+W+7]=0),x===!0&&(i.fromBufferAttribute(k,K),A[G+W+8]=i.x,A[G+W+9]=i.y,A[G+W+10]=i.z,A[G+W+11]=k.itemSize===4?i.w:1)}}d={count:u,texture:R,size:new se(_,P)},n.set(a,d),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(s,"morphTargetBaseInfluence",g),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Kg(s,e,t,n){let i=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function o(){i=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var wo=class extends It{constructor(e,t,n,i,r,o,a,c,l,h=_s){if(h!==_s&&h!==Ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===_s&&(n=Bi),n===void 0&&h===Ts&&(n=Es),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:zt,this.minFilter=c!==void 0?c:zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},wd=new It,vu=new wo(1,1),Ad=new yo,Rd=new kc,Cd=new Eo,Mu=[],Su=[],bu=new Float32Array(16),Eu=new Float32Array(9),Tu=new Float32Array(4);function Os(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=Mu[i];if(r===void 0&&(r=new Float32Array(i),Mu[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function At(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Rt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function ta(s,e){let t=Su[e];t===void 0&&(t=new Int32Array(e),Su[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Jg(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function jg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;s.uniform2fv(this.addr,e),Rt(t,e)}}function Qg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;s.uniform3fv(this.addr,e),Rt(t,e)}}function ex(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;s.uniform4fv(this.addr,e),Rt(t,e)}}function tx(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(At(t,n))return;Tu.set(n),s.uniformMatrix2fv(this.addr,!1,Tu),Rt(t,n)}}function nx(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(At(t,n))return;Eu.set(n),s.uniformMatrix3fv(this.addr,!1,Eu),Rt(t,n)}}function ix(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(At(t,n))return;bu.set(n),s.uniformMatrix4fv(this.addr,!1,bu),Rt(t,n)}}function sx(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function rx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;s.uniform2iv(this.addr,e),Rt(t,e)}}function ox(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;s.uniform3iv(this.addr,e),Rt(t,e)}}function ax(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;s.uniform4iv(this.addr,e),Rt(t,e)}}function cx(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function lx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;s.uniform2uiv(this.addr,e),Rt(t,e)}}function hx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;s.uniform3uiv(this.addr,e),Rt(t,e)}}function ux(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;s.uniform4uiv(this.addr,e),Rt(t,e)}}function dx(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(vu.compareFunction=vd,r=vu):r=wd,t.setTexture2D(e||r,i)}function fx(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Rd,i)}function px(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Cd,i)}function mx(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Ad,i)}function gx(s){switch(s){case 5126:return Jg;case 35664:return jg;case 35665:return Qg;case 35666:return ex;case 35674:return tx;case 35675:return nx;case 35676:return ix;case 5124:case 35670:return sx;case 35667:case 35671:return rx;case 35668:case 35672:return ox;case 35669:case 35673:return ax;case 5125:return cx;case 36294:return lx;case 36295:return hx;case 36296:return ux;case 35678:case 36198:case 36298:case 36306:case 35682:return dx;case 35679:case 36299:case 36307:return fx;case 35680:case 36300:case 36308:case 36293:return px;case 36289:case 36303:case 36311:case 36292:return mx}}function xx(s,e){s.uniform1fv(this.addr,e)}function _x(s,e){let t=Os(e,this.size,2);s.uniform2fv(this.addr,t)}function yx(s,e){let t=Os(e,this.size,3);s.uniform3fv(this.addr,t)}function vx(s,e){let t=Os(e,this.size,4);s.uniform4fv(this.addr,t)}function Mx(s,e){let t=Os(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Sx(s,e){let t=Os(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function bx(s,e){let t=Os(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Ex(s,e){s.uniform1iv(this.addr,e)}function Tx(s,e){s.uniform2iv(this.addr,e)}function wx(s,e){s.uniform3iv(this.addr,e)}function Ax(s,e){s.uniform4iv(this.addr,e)}function Rx(s,e){s.uniform1uiv(this.addr,e)}function Cx(s,e){s.uniform2uiv(this.addr,e)}function Ix(s,e){s.uniform3uiv(this.addr,e)}function Px(s,e){s.uniform4uiv(this.addr,e)}function Lx(s,e,t){let n=this.cache,i=e.length,r=ta(t,i);At(n,r)||(s.uniform1iv(this.addr,r),Rt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||wd,r[o])}function Dx(s,e,t){let n=this.cache,i=e.length,r=ta(t,i);At(n,r)||(s.uniform1iv(this.addr,r),Rt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Rd,r[o])}function Nx(s,e,t){let n=this.cache,i=e.length,r=ta(t,i);At(n,r)||(s.uniform1iv(this.addr,r),Rt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Cd,r[o])}function Ux(s,e,t){let n=this.cache,i=e.length,r=ta(t,i);At(n,r)||(s.uniform1iv(this.addr,r),Rt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Ad,r[o])}function Ox(s){switch(s){case 5126:return xx;case 35664:return _x;case 35665:return yx;case 35666:return vx;case 35674:return Mx;case 35675:return Sx;case 35676:return bx;case 5124:case 35670:return Ex;case 35667:case 35671:return Tx;case 35668:case 35672:return wx;case 35669:case 35673:return Ax;case 5125:return Rx;case 36294:return Cx;case 36295:return Ix;case 36296:return Px;case 35678:case 36198:case 36298:case 36306:case 35682:return Lx;case 35679:case 36299:case 36307:return Dx;case 35680:case 36300:case 36308:case 36293:return Nx;case 36289:case 36303:case 36311:case 36292:return Ux}}var Vc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=gx(t.type)}},Gc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ox(t.type)}},Wc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},Ga=/(\w+)(\])?(\[|\.)?/g;function wu(s,e){s.seq.push(e),s.map[e.id]=e}function Fx(s,e,t){let n=s.name,i=n.length;for(Ga.lastIndex=0;;){let r=Ga.exec(n),o=Ga.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){wu(t,l===void 0?new Vc(a,s,e):new Gc(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new Wc(a),wu(t,u)),t=u}}}var vs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);Fx(r,o,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function Au(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var Bx=37297,kx=0;function zx(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Ru=new Be;function Hx(s){Xe._getMatrix(Ru,Xe.workingColorSpace,s);let e=`mat3( ${Ru.elements.map(t=>t.toFixed(4))} )`;switch(Xe.getTransfer(s)){case ea:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Cu(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+zx(s.getShaderSource(e),o)}else return i}function Vx(s,e){let t=Hx(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Gx(s,e){let t;switch(e){case Qf:t="Linear";break;case ep:t="Reinhard";break;case tp:t="Cineon";break;case Ml:t="ACESFilmic";break;case ip:t="AgX";break;case sp:t="Neutral";break;case np:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Qr=new w;function Wx(){Xe.getLuminanceCoefficients(Qr);let s=Qr.x.toFixed(4),e=Qr.y.toFixed(4),t=Qr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Xx(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ir).join(`
`)}function qx(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Yx(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function ir(s){return s!==""}function Iu(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Pu(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var $x=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xc(s){return s.replace($x,Kx)}var Zx=new Map;function Kx(s,e){let t=ze[e];if(t===void 0){let n=Zx.get(e);if(n!==void 0)t=ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Xc(t)}var Jx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lu(s){return s.replace(Jx,jx)}function jx(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Du(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Qx(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===od?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===vl?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Wn&&(e="SHADOWMAP_TYPE_VSM"),e}function e_(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ss:case bs:e="ENVMAP_TYPE_CUBE";break;case jo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function t_(s){let e="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===bs&&(e="ENVMAP_MODE_REFRACTION"),e}function n_(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ad:e="ENVMAP_BLENDING_MULTIPLY";break;case Jf:e="ENVMAP_BLENDING_MIX";break;case jf:e="ENVMAP_BLENDING_ADD";break}return e}function i_(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function s_(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=Qx(t),l=e_(t),h=t_(t),u=n_(t),d=i_(t),f=Xx(t),g=qx(r),x=i.createProgram(),m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ir).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ir).join(`
`),p.length>0&&(p+=`
`)):(m=[Du(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ir).join(`
`),p=[Du(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gi?"#define TONE_MAPPING":"",t.toneMapping!==gi?ze.tonemapping_pars_fragment:"",t.toneMapping!==gi?Gx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,Vx("linearToOutputTexel",t.outputColorSpace),Wx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ir).join(`
`)),o=Xc(o),o=Iu(o,t),o=Pu(o,t),a=Xc(a),a=Iu(a,t),a=Pu(a,t),o=Lu(o),a=Lu(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===qh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===qh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let b=y+m+o,_=y+p+a,P=Au(i,i.VERTEX_SHADER,b),A=Au(i,i.FRAGMENT_SHADER,_);i.attachShader(x,P),i.attachShader(x,A),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function R(I){if(s.debug.checkShaderErrors){let z=i.getProgramInfoLog(x).trim(),k=i.getShaderInfoLog(P).trim(),G=i.getShaderInfoLog(A).trim(),K=!0,W=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(K=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,P,A);else{let ne=Cu(i,P,"vertex"),V=Cu(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+z+`
`+ne+`
`+V)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(k===""||G==="")&&(W=!1);W&&(I.diagnostics={runnable:K,programLog:z,vertexShader:{log:k,prefix:m},fragmentShader:{log:G,prefix:p}})}i.deleteShader(P),i.deleteShader(A),C=new vs(i,x),E=Yx(i,x)}let C;this.getUniforms=function(){return C===void 0&&R(this),C};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(x,Bx)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=kx++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=A,this}var r_=0,qc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Yc(e),t.set(e,n)),n}},Yc=class{constructor(e){this.id=r_++,this.code=e,this.usedTimes=0}};function o_(s,e,t,n,i,r,o){let a=new vo,c=new qc,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,M,I,z,k){let G=z.fog,K=k.geometry,W=E.isMeshStandardMaterial?z.environment:null,ne=(E.isMeshStandardMaterial?t:e).get(E.envMap||W),V=ne&&ne.mapping===jo?ne.image.height:null,ae=g[E.type];E.precision!==null&&(f=i.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));let fe=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Ee=fe!==void 0?fe.length:0,Ve=0;K.morphAttributes.position!==void 0&&(Ve=1),K.morphAttributes.normal!==void 0&&(Ve=2),K.morphAttributes.color!==void 0&&(Ve=3);let ct,q,ie,ve;if(ae){let it=Cn[ae];ct=it.vertexShader,q=it.fragmentShader}else ct=E.vertexShader,q=E.fragmentShader,c.update(E),ie=c.getVertexShaderID(E),ve=c.getFragmentShaderID(E);let ce=s.getRenderTarget(),Ie=s.state.buffers.depth.getReversed(),Ne=k.isInstancedMesh===!0,Ge=k.isBatchedMesh===!0,_t=!!E.map,Ke=!!E.matcap,Mt=!!ne,U=!!E.aoMap,cn=!!E.lightMap,Ye=!!E.bumpMap,$e=!!E.normalMap,Ae=!!E.displacementMap,dt=!!E.emissiveMap,we=!!E.metalnessMap,T=!!E.roughnessMap,v=E.anisotropy>0,O=E.clearcoat>0,$=E.dispersion>0,J=E.iridescence>0,X=E.sheen>0,Se=E.transmission>0,le=v&&!!E.anisotropyMap,pe=O&&!!E.clearcoatMap,Je=O&&!!E.clearcoatNormalMap,Q=O&&!!E.clearcoatRoughnessMap,me=J&&!!E.iridescenceMap,Ce=J&&!!E.iridescenceThicknessMap,Pe=X&&!!E.sheenColorMap,ge=X&&!!E.sheenRoughnessMap,Ze=!!E.specularMap,ke=!!E.specularColorMap,lt=!!E.specularIntensityMap,L=Se&&!!E.transmissionMap,oe=Se&&!!E.thicknessMap,H=!!E.gradientMap,Z=!!E.alphaMap,de=E.alphaTest>0,he=!!E.alphaHash,Oe=!!E.extensions,yt=gi;E.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(yt=s.toneMapping);let Ft={shaderID:ae,shaderType:E.type,shaderName:E.name,vertexShader:ct,fragmentShader:q,defines:E.defines,customVertexShaderID:ie,customFragmentShaderID:ve,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:Ge,batchingColor:Ge&&k._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&k.instanceColor!==null,instancingMorph:Ne&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ce===null?s.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Vt,alphaToCoverage:!!E.alphaToCoverage,map:_t,matcap:Ke,envMap:Mt,envMapMode:Mt&&ne.mapping,envMapCubeUVHeight:V,aoMap:U,lightMap:cn,bumpMap:Ye,normalMap:$e,displacementMap:d&&Ae,emissiveMap:dt,normalMapObjectSpace:$e&&E.normalMapType===lp,normalMapTangentSpace:$e&&E.normalMapType===yd,metalnessMap:we,roughnessMap:T,anisotropy:v,anisotropyMap:le,clearcoat:O,clearcoatMap:pe,clearcoatNormalMap:Je,clearcoatRoughnessMap:Q,dispersion:$,iridescence:J,iridescenceMap:me,iridescenceThicknessMap:Ce,sheen:X,sheenColorMap:Pe,sheenRoughnessMap:ge,specularMap:Ze,specularColorMap:ke,specularIntensityMap:lt,transmission:Se,transmissionMap:L,thicknessMap:oe,gradientMap:H,opaque:E.transparent===!1&&E.blending===xs&&E.alphaToCoverage===!1,alphaMap:Z,alphaTest:de,alphaHash:he,combine:E.combine,mapUv:_t&&x(E.map.channel),aoMapUv:U&&x(E.aoMap.channel),lightMapUv:cn&&x(E.lightMap.channel),bumpMapUv:Ye&&x(E.bumpMap.channel),normalMapUv:$e&&x(E.normalMap.channel),displacementMapUv:Ae&&x(E.displacementMap.channel),emissiveMapUv:dt&&x(E.emissiveMap.channel),metalnessMapUv:we&&x(E.metalnessMap.channel),roughnessMapUv:T&&x(E.roughnessMap.channel),anisotropyMapUv:le&&x(E.anisotropyMap.channel),clearcoatMapUv:pe&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:Je&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:ge&&x(E.sheenRoughnessMap.channel),specularMapUv:Ze&&x(E.specularMap.channel),specularColorMapUv:ke&&x(E.specularColorMap.channel),specularIntensityMapUv:lt&&x(E.specularIntensityMap.channel),transmissionMapUv:L&&x(E.transmissionMap.channel),thicknessMapUv:oe&&x(E.thicknessMap.channel),alphaMapUv:Z&&x(E.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&($e||v),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!K.attributes.uv&&(_t||Z),fog:!!G,useFog:E.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ie,skinning:k.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:Ve,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:yt,decodeVideoTexture:_t&&E.map.isVideoTexture===!0&&Xe.getTransfer(E.map.colorSpace)===ot,decodeVideoTextureEmissive:dt&&E.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(E.emissiveMap.colorSpace)===ot,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Xt,flipSided:E.side===Jt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Oe&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&E.extensions.multiDraw===!0||Ge)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ft.vertexUv1s=l.has(1),Ft.vertexUv2s=l.has(2),Ft.vertexUv3s=l.has(3),l.clear(),Ft}function p(E){let M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(let I in E.defines)M.push(I),M.push(E.defines[I]);return E.isRawShaderMaterial===!1&&(y(M,E),b(M,E),M.push(s.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function y(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function b(E,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),E.push(a.mask)}function _(E){let M=g[E.type],I;if(M){let z=Cn[M];I=Kp.clone(z.uniforms)}else I=E.uniforms;return I}function P(E,M){let I;for(let z=0,k=h.length;z<k;z++){let G=h[z];if(G.cacheKey===M){I=G,++I.usedTimes;break}}return I===void 0&&(I=new s_(s,M,E,r),h.push(I)),I}function A(E){if(--E.usedTimes===0){let M=h.indexOf(E);h[M]=h[h.length-1],h.pop(),E.destroy()}}function R(E){c.remove(E)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:P,releaseProgram:A,releaseShaderCache:R,programs:h,dispose:C}}function a_(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function c_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Nu(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Uu(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,f,g,x,m){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},s[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),e++,p}function a(u,d,f,g,x,m){let p=o(u,d,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function c(u,d,f,g,x,m){let p=o(u,d,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||c_),n.length>1&&n.sort(d||Nu),i.length>1&&i.sort(d||Nu)}function h(){for(let u=e,d=s.length;u<d;u++){let f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function l_(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new Uu,s.set(n,[o])):i>=r.length?(o=new Uu,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function h_(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new w,color:new Te};break;case"SpotLight":t={position:new w,direction:new w,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new w,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new w,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new w,halfWidth:new w,halfHeight:new w};break}return s[e.id]=t,t}}}function u_(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var d_=0;function f_(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function p_(s){let e=new h_,t=u_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new w);let i=new w,r=new De,o=new De;function a(l){let h=0,u=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,y=0,b=0,_=0,P=0,A=0,R=0;l.sort(f_);for(let E=0,M=l.length;E<M;E++){let I=l[E],z=I.color,k=I.intensity,G=I.distance,K=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=z.r*k,u+=z.g*k,d+=z.b*k;else if(I.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(I.sh.coefficients[W],k);R++}else if(I.isDirectionalLight){let W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let ne=I.shadow,V=t.get(I);V.shadowIntensity=ne.intensity,V.shadowBias=ne.bias,V.shadowNormalBias=ne.normalBias,V.shadowRadius=ne.radius,V.shadowMapSize=ne.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=K,n.directionalShadowMatrix[f]=I.shadow.matrix,y++}n.directional[f]=W,f++}else if(I.isSpotLight){let W=e.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(z).multiplyScalar(k),W.distance=G,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,n.spot[x]=W;let ne=I.shadow;if(I.map&&(n.spotLightMap[P]=I.map,P++,ne.updateMatrices(I),I.castShadow&&A++),n.spotLightMatrix[x]=ne.matrix,I.castShadow){let V=t.get(I);V.shadowIntensity=ne.intensity,V.shadowBias=ne.bias,V.shadowNormalBias=ne.normalBias,V.shadowRadius=ne.radius,V.shadowMapSize=ne.mapSize,n.spotShadow[x]=V,n.spotShadowMap[x]=K,_++}x++}else if(I.isRectAreaLight){let W=e.get(I);W.color.copy(z).multiplyScalar(k),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=W,m++}else if(I.isPointLight){let W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){let ne=I.shadow,V=t.get(I);V.shadowIntensity=ne.intensity,V.shadowBias=ne.bias,V.shadowNormalBias=ne.normalBias,V.shadowRadius=ne.radius,V.shadowMapSize=ne.mapSize,V.shadowCameraNear=ne.camera.near,V.shadowCameraFar=ne.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=I.shadow.matrix,b++}n.point[g]=W,g++}else if(I.isHemisphereLight){let W=e.get(I);W.skyColor.copy(I.color).multiplyScalar(k),W.groundColor.copy(I.groundColor).multiplyScalar(k),n.hemi[p]=W,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=re.LTC_FLOAT_1,n.rectAreaLTC2=re.LTC_FLOAT_2):(n.rectAreaLTC1=re.LTC_HALF_1,n.rectAreaLTC2=re.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let C=n.hash;(C.directionalLength!==f||C.pointLength!==g||C.spotLength!==x||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==y||C.numPointShadows!==b||C.numSpotShadows!==_||C.numSpotMaps!==P||C.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=_+P-A,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=R,C.directionalLength=f,C.pointLength=g,C.spotLength=x,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=y,C.numPointShadows=b,C.numSpotShadows=_,C.numSpotMaps=P,C.numLightProbes=R,n.version=d_++)}function c(l,h){let u=0,d=0,f=0,g=0,x=0,m=h.matrixWorldInverse;for(let p=0,y=l.length;p<y;p++){let b=l[p];if(b.isDirectionalLight){let _=n.directional[u];_.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),u++}else if(b.isSpotLight){let _=n.spot[f];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),f++}else if(b.isRectAreaLight){let _=n.rectArea[g];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(b.width*.5,0,0),_.halfHeight.set(0,b.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){let _=n.point[d];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){let _=n.hemi[x];_.direction.setFromMatrixPosition(b.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function Ou(s){let e=new p_(s),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function m_(s){let e=new WeakMap;function t(i,r=0){let o=e.get(i),a;return o===void 0?(a=new Ou(s),e.set(i,[a])):r>=o.length?(a=new Ou(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var $c=class extends Qt{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ap,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Zc=class extends Qt{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},g_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,x_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function __(s,e,t){let n=new fr,i=new se,r=new se,o=new et,a=new $c({depthPacking:cp}),c=new Zc,l={},h=t.maxTextureSize,u={[dn]:Jt,[Jt]:dn,[Xt]:Xt},d=new Ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:g_,fragmentShader:x_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new vt;g.setAttribute("position",new St(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new te(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=od;let p=this.type;this.render=function(A,R,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let E=s.getRenderTarget(),M=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),z=s.state;z.setBlending(mi),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let k=p!==Wn&&this.type===Wn,G=p===Wn&&this.type!==Wn;for(let K=0,W=A.length;K<W;K++){let ne=A[K],V=ne.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);let ae=V.getFrameExtents();if(i.multiply(ae),r.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ae.x),i.x=r.x*ae.x,V.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ae.y),i.y=r.y*ae.y,V.mapSize.y=r.y)),V.map===null||k===!0||G===!0){let Ee=this.type!==Wn?{minFilter:zt,magFilter:zt}:{};V.map!==null&&V.map.dispose(),V.map=new Jn(i.x,i.y,Ee),V.map.texture.name=ne.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();let fe=V.getViewportCount();for(let Ee=0;Ee<fe;Ee++){let Ve=V.getViewport(Ee);o.set(r.x*Ve.x,r.y*Ve.y,r.x*Ve.z,r.y*Ve.w),z.viewport(o),V.updateMatrices(ne,Ee),n=V.getFrustum(),_(R,C,V.camera,ne,this.type)}V.isPointLightShadow!==!0&&this.type===Wn&&y(V,C),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(E,M,I)};function y(A,R){let C=e.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Jn(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(R,null,C,d,x,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(R,null,C,f,x,null)}function b(A,R,C,E){let M=null,I=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(I!==void 0)M=I;else if(M=C.isPointLight===!0?c:a,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let z=M.uuid,k=R.uuid,G=l[z];G===void 0&&(G={},l[z]=G);let K=G[k];K===void 0&&(K=M.clone(),G[k]=K,R.addEventListener("dispose",P)),M=K}if(M.visible=R.visible,M.wireframe=R.wireframe,E===Wn?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:u[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let z=s.properties.get(M);z.light=C}return M}function _(A,R,C,E,M){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===Wn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);let k=e.update(A),G=A.material;if(Array.isArray(G)){let K=k.groups;for(let W=0,ne=K.length;W<ne;W++){let V=K[W],ae=G[V.materialIndex];if(ae&&ae.visible){let fe=b(A,ae,E,M);A.onBeforeShadow(s,A,R,C,k,fe,V),s.renderBufferDirect(C,null,k,fe,A,V),A.onAfterShadow(s,A,R,C,k,fe,V)}}}else if(G.visible){let K=b(A,G,E,M);A.onBeforeShadow(s,A,R,C,k,K,null),s.renderBufferDirect(C,null,k,K,A,null),A.onAfterShadow(s,A,R,C,k,K,null)}}let z=A.children;for(let k=0,G=z.length;k<G;k++)_(z[k],R,C,E,M)}function P(A){A.target.removeEventListener("dispose",P);for(let C in l){let E=l[C],M=A.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}var y_={[tc]:nc,[ic]:oc,[sc]:ac,[Ms]:rc,[nc]:tc,[oc]:ic,[ac]:sc,[rc]:Ms};function v_(s,e){function t(){let L=!1,oe=new et,H=null,Z=new et(0,0,0,0);return{setMask:function(de){H!==de&&!L&&(s.colorMask(de,de,de,de),H=de)},setLocked:function(de){L=de},setClear:function(de,he,Oe,yt,Ft){Ft===!0&&(de*=yt,he*=yt,Oe*=yt),oe.set(de,he,Oe,yt),Z.equals(oe)===!1&&(s.clearColor(de,he,Oe,yt),Z.copy(oe))},reset:function(){L=!1,H=null,Z.set(-1,0,0,0)}}}function n(){let L=!1,oe=!1,H=null,Z=null,de=null;return{setReversed:function(he){if(oe!==he){let Oe=e.get("EXT_clip_control");oe?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT);let yt=de;de=null,this.setClear(yt)}oe=he},getReversed:function(){return oe},setTest:function(he){he?ce(s.DEPTH_TEST):Ie(s.DEPTH_TEST)},setMask:function(he){H!==he&&!L&&(s.depthMask(he),H=he)},setFunc:function(he){if(oe&&(he=y_[he]),Z!==he){switch(he){case tc:s.depthFunc(s.NEVER);break;case nc:s.depthFunc(s.ALWAYS);break;case ic:s.depthFunc(s.LESS);break;case Ms:s.depthFunc(s.LEQUAL);break;case sc:s.depthFunc(s.EQUAL);break;case rc:s.depthFunc(s.GEQUAL);break;case oc:s.depthFunc(s.GREATER);break;case ac:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Z=he}},setLocked:function(he){L=he},setClear:function(he){de!==he&&(oe&&(he=1-he),s.clearDepth(he),de=he)},reset:function(){L=!1,H=null,Z=null,de=null,oe=!1}}}function i(){let L=!1,oe=null,H=null,Z=null,de=null,he=null,Oe=null,yt=null,Ft=null;return{setTest:function(it){L||(it?ce(s.STENCIL_TEST):Ie(s.STENCIL_TEST))},setMask:function(it){oe!==it&&!L&&(s.stencilMask(it),oe=it)},setFunc:function(it,yn,On){(H!==it||Z!==yn||de!==On)&&(s.stencilFunc(it,yn,On),H=it,Z=yn,de=On)},setOp:function(it,yn,On){(he!==it||Oe!==yn||yt!==On)&&(s.stencilOp(it,yn,On),he=it,Oe=yn,yt=On)},setLocked:function(it){L=it},setClear:function(it){Ft!==it&&(s.clearStencil(it),Ft=it)},reset:function(){L=!1,oe=null,H=null,Z=null,de=null,he=null,Oe=null,yt=null,Ft=null}}}let r=new t,o=new n,a=new i,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,y=null,b=null,_=null,P=null,A=null,R=new Te(0,0,0),C=0,E=!1,M=null,I=null,z=null,k=null,G=null,K=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,ne=0,V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(V)[1]),W=ne>=1):V.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),W=ne>=2);let ae=null,fe={},Ee=s.getParameter(s.SCISSOR_BOX),Ve=s.getParameter(s.VIEWPORT),ct=new et().fromArray(Ee),q=new et().fromArray(Ve);function ie(L,oe,H,Z){let de=new Uint8Array(4),he=s.createTexture();s.bindTexture(L,he),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Oe=0;Oe<H;Oe++)L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY?s.texImage3D(oe,0,s.RGBA,1,1,Z,0,s.RGBA,s.UNSIGNED_BYTE,de):s.texImage2D(oe+Oe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,de);return he}let ve={};ve[s.TEXTURE_2D]=ie(s.TEXTURE_2D,s.TEXTURE_2D,1),ve[s.TEXTURE_CUBE_MAP]=ie(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[s.TEXTURE_2D_ARRAY]=ie(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ve[s.TEXTURE_3D]=ie(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ce(s.DEPTH_TEST),o.setFunc(Ms),Ye(!1),$e(Fh),ce(s.CULL_FACE),U(mi);function ce(L){h[L]!==!0&&(s.enable(L),h[L]=!0)}function Ie(L){h[L]!==!1&&(s.disable(L),h[L]=!1)}function Ne(L,oe){return u[L]!==oe?(s.bindFramebuffer(L,oe),u[L]=oe,L===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=oe),L===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=oe),!0):!1}function Ge(L,oe){let H=f,Z=!1;if(L){H=d.get(oe),H===void 0&&(H=[],d.set(oe,H));let de=L.textures;if(H.length!==de.length||H[0]!==s.COLOR_ATTACHMENT0){for(let he=0,Oe=de.length;he<Oe;he++)H[he]=s.COLOR_ATTACHMENT0+he;H.length=de.length,Z=!0}}else H[0]!==s.BACK&&(H[0]=s.BACK,Z=!0);Z&&s.drawBuffers(H)}function _t(L){return g!==L?(s.useProgram(L),g=L,!0):!1}let Ke={[Oi]:s.FUNC_ADD,[Nf]:s.FUNC_SUBTRACT,[Uf]:s.FUNC_REVERSE_SUBTRACT};Ke[Of]=s.MIN,Ke[Ff]=s.MAX;let Mt={[Bf]:s.ZERO,[kf]:s.ONE,[zf]:s.SRC_COLOR,[Qa]:s.SRC_ALPHA,[qf]:s.SRC_ALPHA_SATURATE,[Wf]:s.DST_COLOR,[Vf]:s.DST_ALPHA,[Hf]:s.ONE_MINUS_SRC_COLOR,[ec]:s.ONE_MINUS_SRC_ALPHA,[Xf]:s.ONE_MINUS_DST_COLOR,[Gf]:s.ONE_MINUS_DST_ALPHA,[Yf]:s.CONSTANT_COLOR,[$f]:s.ONE_MINUS_CONSTANT_COLOR,[Zf]:s.CONSTANT_ALPHA,[Kf]:s.ONE_MINUS_CONSTANT_ALPHA};function U(L,oe,H,Z,de,he,Oe,yt,Ft,it){if(L===mi){x===!0&&(Ie(s.BLEND),x=!1);return}if(x===!1&&(ce(s.BLEND),x=!0),L!==Df){if(L!==m||it!==E){if((p!==Oi||_!==Oi)&&(s.blendEquation(s.FUNC_ADD),p=Oi,_=Oi),it)switch(L){case xs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Bh:s.blendFunc(s.ONE,s.ONE);break;case kh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case zh:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case xs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Bh:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case kh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case zh:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}y=null,b=null,P=null,A=null,R.set(0,0,0),C=0,m=L,E=it}return}de=de||oe,he=he||H,Oe=Oe||Z,(oe!==p||de!==_)&&(s.blendEquationSeparate(Ke[oe],Ke[de]),p=oe,_=de),(H!==y||Z!==b||he!==P||Oe!==A)&&(s.blendFuncSeparate(Mt[H],Mt[Z],Mt[he],Mt[Oe]),y=H,b=Z,P=he,A=Oe),(yt.equals(R)===!1||Ft!==C)&&(s.blendColor(yt.r,yt.g,yt.b,Ft),R.copy(yt),C=Ft),m=L,E=!1}function cn(L,oe){L.side===Xt?Ie(s.CULL_FACE):ce(s.CULL_FACE);let H=L.side===Jt;oe&&(H=!H),Ye(H),L.blending===xs&&L.transparent===!1?U(mi):U(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);let Z=L.stencilWrite;a.setTest(Z),Z&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),dt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ce(s.SAMPLE_ALPHA_TO_COVERAGE):Ie(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(L){M!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),M=L)}function $e(L){L!==Pf?(ce(s.CULL_FACE),L!==I&&(L===Fh?s.cullFace(s.BACK):L===Lf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ie(s.CULL_FACE),I=L}function Ae(L){L!==z&&(W&&s.lineWidth(L),z=L)}function dt(L,oe,H){L?(ce(s.POLYGON_OFFSET_FILL),(k!==oe||G!==H)&&(s.polygonOffset(oe,H),k=oe,G=H)):Ie(s.POLYGON_OFFSET_FILL)}function we(L){L?ce(s.SCISSOR_TEST):Ie(s.SCISSOR_TEST)}function T(L){L===void 0&&(L=s.TEXTURE0+K-1),ae!==L&&(s.activeTexture(L),ae=L)}function v(L,oe,H){H===void 0&&(ae===null?H=s.TEXTURE0+K-1:H=ae);let Z=fe[H];Z===void 0&&(Z={type:void 0,texture:void 0},fe[H]=Z),(Z.type!==L||Z.texture!==oe)&&(ae!==H&&(s.activeTexture(H),ae=H),s.bindTexture(L,oe||ve[L]),Z.type=L,Z.texture=oe)}function O(){let L=fe[ae];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function $(){try{s.compressedTexImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{s.compressedTexImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function X(){try{s.texSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Se(){try{s.texSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function le(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Je(){try{s.texStorage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{s.texStorage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function me(){try{s.texImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ce(){try{s.texImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Pe(L){ct.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),ct.copy(L))}function ge(L){q.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),q.copy(L))}function Ze(L,oe){let H=l.get(oe);H===void 0&&(H=new WeakMap,l.set(oe,H));let Z=H.get(L);Z===void 0&&(Z=s.getUniformBlockIndex(oe,L.name),H.set(L,Z))}function ke(L,oe){let Z=l.get(oe).get(L);c.get(oe)!==Z&&(s.uniformBlockBinding(oe,Z,L.__bindingPointIndex),c.set(oe,Z))}function lt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},ae=null,fe={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,y=null,b=null,_=null,P=null,A=null,R=new Te(0,0,0),C=0,E=!1,M=null,I=null,z=null,k=null,G=null,ct.set(0,0,s.canvas.width,s.canvas.height),q.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ce,disable:Ie,bindFramebuffer:Ne,drawBuffers:Ge,useProgram:_t,setBlending:U,setMaterial:cn,setFlipSided:Ye,setCullFace:$e,setLineWidth:Ae,setPolygonOffset:dt,setScissorTest:we,activeTexture:T,bindTexture:v,unbindTexture:O,compressedTexImage2D:$,compressedTexImage3D:J,texImage2D:me,texImage3D:Ce,updateUBOMapping:Ze,uniformBlockBinding:ke,texStorage2D:Je,texStorage3D:Q,texSubImage2D:X,texSubImage3D:Se,compressedTexSubImage2D:le,compressedTexSubImage3D:pe,scissor:Pe,viewport:ge,reset:lt}}function Fu(s,e,t,n){let i=M_(n);switch(t){case dd:return s*e;case pd:return s*e;case md:return s*e*2;case wl:return s*e/i.components*i.byteLength;case Al:return s*e/i.components*i.byteLength;case gd:return s*e*2/i.components*i.byteLength;case Rl:return s*e*2/i.components*i.byteLength;case fd:return s*e*3/i.components*i.byteLength;case un:return s*e*4/i.components*i.byteLength;case Cl:return s*e*4/i.components*i.byteLength;case uo:case fo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case po:case mo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case uc:case fc:return Math.max(s,16)*Math.max(e,8)/4;case hc:case dc:return Math.max(s,8)*Math.max(e,8)/2;case pc:case mc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case gc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case xc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case _c:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case yc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case vc:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Mc:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Sc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case bc:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Ec:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Tc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case wc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Ac:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Rc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Cc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Ic:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case go:case Pc:case Lc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case xd:case Dc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Nc:case Uc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function M_(s){switch(s){case Kn:case ld:return{byteLength:1,components:1};case ur:case hd:case br:return{byteLength:2,components:1};case El:case Tl:return{byteLength:2,components:4};case Bi:case bl:case Tn:return{byteLength:4,components:1};case ud:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function S_(s,e,t,n,i,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new se,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,v){return f?new OffscreenCanvas(T,v):dr("canvas")}function x(T,v,O){let $=1,J=we(T);if((J.width>O||J.height>O)&&($=O/Math.max(J.width,J.height)),$<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let X=Math.floor($*J.width),Se=Math.floor($*J.height);u===void 0&&(u=g(X,Se));let le=v?g(X,Se):u;return le.width=X,le.height=Se,le.getContext("2d").drawImage(T,0,0,X,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+X+"x"+Se+")."),le}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){s.generateMipmap(T)}function y(T){return T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?s.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(T,v,O,$,J=!1){if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let X=v;if(v===s.RED&&(O===s.FLOAT&&(X=s.R32F),O===s.HALF_FLOAT&&(X=s.R16F),O===s.UNSIGNED_BYTE&&(X=s.R8)),v===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(X=s.R8UI),O===s.UNSIGNED_SHORT&&(X=s.R16UI),O===s.UNSIGNED_INT&&(X=s.R32UI),O===s.BYTE&&(X=s.R8I),O===s.SHORT&&(X=s.R16I),O===s.INT&&(X=s.R32I)),v===s.RG&&(O===s.FLOAT&&(X=s.RG32F),O===s.HALF_FLOAT&&(X=s.RG16F),O===s.UNSIGNED_BYTE&&(X=s.RG8)),v===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&(X=s.RG8UI),O===s.UNSIGNED_SHORT&&(X=s.RG16UI),O===s.UNSIGNED_INT&&(X=s.RG32UI),O===s.BYTE&&(X=s.RG8I),O===s.SHORT&&(X=s.RG16I),O===s.INT&&(X=s.RG32I)),v===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&(X=s.RGB8UI),O===s.UNSIGNED_SHORT&&(X=s.RGB16UI),O===s.UNSIGNED_INT&&(X=s.RGB32UI),O===s.BYTE&&(X=s.RGB8I),O===s.SHORT&&(X=s.RGB16I),O===s.INT&&(X=s.RGB32I)),v===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&(X=s.RGBA8UI),O===s.UNSIGNED_SHORT&&(X=s.RGBA16UI),O===s.UNSIGNED_INT&&(X=s.RGBA32UI),O===s.BYTE&&(X=s.RGBA8I),O===s.SHORT&&(X=s.RGBA16I),O===s.INT&&(X=s.RGBA32I)),v===s.RGB&&O===s.UNSIGNED_INT_5_9_9_9_REV&&(X=s.RGB9_E5),v===s.RGBA){let Se=J?ea:Xe.getTransfer($);O===s.FLOAT&&(X=s.RGBA32F),O===s.HALF_FLOAT&&(X=s.RGBA16F),O===s.UNSIGNED_BYTE&&(X=Se===ot?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT_4_4_4_4&&(X=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(X=s.RGB5_A1)}return(X===s.R16F||X===s.R32F||X===s.RG16F||X===s.RG32F||X===s.RGBA16F||X===s.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function _(T,v){let O;return T?v===null||v===Bi||v===Es?O=s.DEPTH24_STENCIL8:v===Tn?O=s.DEPTH32F_STENCIL8:v===ur&&(O=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Bi||v===Es?O=s.DEPTH_COMPONENT24:v===Tn?O=s.DEPTH_COMPONENT32F:v===ur&&(O=s.DEPTH_COMPONENT16),O}function P(T,v){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==zt&&T.minFilter!==Kt?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function A(T){let v=T.target;v.removeEventListener("dispose",A),C(v),v.isVideoTexture&&h.delete(v)}function R(T){let v=T.target;v.removeEventListener("dispose",R),M(v)}function C(T){let v=n.get(T);if(v.__webglInit===void 0)return;let O=T.source,$=d.get(O);if($){let J=$[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&E(T),Object.keys($).length===0&&d.delete(O)}n.remove(T)}function E(T){let v=n.get(T);s.deleteTexture(v.__webglTexture);let O=T.source,$=d.get(O);delete $[v.__cacheKey],o.memory.textures--}function M(T){let v=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(v.__webglFramebuffer[$]))for(let J=0;J<v.__webglFramebuffer[$].length;J++)s.deleteFramebuffer(v.__webglFramebuffer[$][J]);else s.deleteFramebuffer(v.__webglFramebuffer[$]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[$])}else{if(Array.isArray(v.__webglFramebuffer))for(let $=0;$<v.__webglFramebuffer.length;$++)s.deleteFramebuffer(v.__webglFramebuffer[$]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let $=0;$<v.__webglColorRenderbuffer.length;$++)v.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[$]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let O=T.textures;for(let $=0,J=O.length;$<J;$++){let X=n.get(O[$]);X.__webglTexture&&(s.deleteTexture(X.__webglTexture),o.memory.textures--),n.remove(O[$])}n.remove(T)}let I=0;function z(){I=0}function k(){let T=I;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),I+=1,T}function G(T){let v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function K(T,v){let O=n.get(T);if(T.isVideoTexture&&Ae(T),T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){let $=T.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(O,T,v);return}}t.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+v)}function W(T,v){let O=n.get(T);if(T.version>0&&O.__version!==T.version){q(O,T,v);return}t.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+v)}function ne(T,v){let O=n.get(T);if(T.version>0&&O.__version!==T.version){q(O,T,v);return}t.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+v)}function V(T,v){let O=n.get(T);if(T.version>0&&O.__version!==T.version){ie(O,T,v);return}t.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+v)}let ae={[Zn]:s.REPEAT,[qn]:s.CLAMP_TO_EDGE,[hr]:s.MIRRORED_REPEAT},fe={[zt]:s.NEAREST,[Sl]:s.NEAREST_MIPMAP_NEAREST,[ms]:s.NEAREST_MIPMAP_LINEAR,[Kt]:s.LINEAR,[sr]:s.LINEAR_MIPMAP_NEAREST,[In]:s.LINEAR_MIPMAP_LINEAR},Ee={[hp]:s.NEVER,[gp]:s.ALWAYS,[up]:s.LESS,[vd]:s.LEQUAL,[dp]:s.EQUAL,[mp]:s.GEQUAL,[fp]:s.GREATER,[pp]:s.NOTEQUAL};function Ve(T,v){if(v.type===Tn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Kt||v.magFilter===sr||v.magFilter===ms||v.magFilter===In||v.minFilter===Kt||v.minFilter===sr||v.minFilter===ms||v.minFilter===In)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(T,s.TEXTURE_WRAP_S,ae[v.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,ae[v.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,ae[v.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,fe[v.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,fe[v.minFilter]),v.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,Ee[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===zt||v.minFilter!==ms&&v.minFilter!==In||v.type===Tn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");s.texParameterf(T,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function ct(T,v){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",A));let $=v.source,J=d.get($);J===void 0&&(J={},d.set($,J));let X=G(v);if(X!==T.__cacheKey){J[X]===void 0&&(J[X]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,O=!0),J[X].usedTimes++;let Se=J[T.__cacheKey];Se!==void 0&&(J[T.__cacheKey].usedTimes--,Se.usedTimes===0&&E(v)),T.__cacheKey=X,T.__webglTexture=J[X].texture}return O}function q(T,v,O){let $=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&($=s.TEXTURE_3D);let J=ct(T,v),X=v.source;t.bindTexture($,T.__webglTexture,s.TEXTURE0+O);let Se=n.get(X);if(X.version!==Se.__version||J===!0){t.activeTexture(s.TEXTURE0+O);let le=Xe.getPrimaries(Xe.workingColorSpace),pe=v.colorSpace===di?null:Xe.getPrimaries(v.colorSpace),Je=v.colorSpace===di||le===pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);let Q=x(v.image,!1,i.maxTextureSize);Q=dt(v,Q);let me=r.convert(v.format,v.colorSpace),Ce=r.convert(v.type),Pe=b(v.internalFormat,me,Ce,v.colorSpace,v.isVideoTexture);Ve($,v);let ge,Ze=v.mipmaps,ke=v.isVideoTexture!==!0,lt=Se.__version===void 0||J===!0,L=X.dataReady,oe=P(v,Q);if(v.isDepthTexture)Pe=_(v.format===Ts,v.type),lt&&(ke?t.texStorage2D(s.TEXTURE_2D,1,Pe,Q.width,Q.height):t.texImage2D(s.TEXTURE_2D,0,Pe,Q.width,Q.height,0,me,Ce,null));else if(v.isDataTexture)if(Ze.length>0){ke&&lt&&t.texStorage2D(s.TEXTURE_2D,oe,Pe,Ze[0].width,Ze[0].height);for(let H=0,Z=Ze.length;H<Z;H++)ge=Ze[H],ke?L&&t.texSubImage2D(s.TEXTURE_2D,H,0,0,ge.width,ge.height,me,Ce,ge.data):t.texImage2D(s.TEXTURE_2D,H,Pe,ge.width,ge.height,0,me,Ce,ge.data);v.generateMipmaps=!1}else ke?(lt&&t.texStorage2D(s.TEXTURE_2D,oe,Pe,Q.width,Q.height),L&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Q.width,Q.height,me,Ce,Q.data)):t.texImage2D(s.TEXTURE_2D,0,Pe,Q.width,Q.height,0,me,Ce,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){ke&&lt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,oe,Pe,Ze[0].width,Ze[0].height,Q.depth);for(let H=0,Z=Ze.length;H<Z;H++)if(ge=Ze[H],v.format!==un)if(me!==null)if(ke){if(L)if(v.layerUpdates.size>0){let de=Fu(ge.width,ge.height,v.format,v.type);for(let he of v.layerUpdates){let Oe=ge.data.subarray(he*de/ge.data.BYTES_PER_ELEMENT,(he+1)*de/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,H,0,0,he,ge.width,ge.height,1,me,Oe)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,H,0,0,0,ge.width,ge.height,Q.depth,me,ge.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,H,Pe,ge.width,ge.height,Q.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?L&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,H,0,0,0,ge.width,ge.height,Q.depth,me,Ce,ge.data):t.texImage3D(s.TEXTURE_2D_ARRAY,H,Pe,ge.width,ge.height,Q.depth,0,me,Ce,ge.data)}else{ke&&lt&&t.texStorage2D(s.TEXTURE_2D,oe,Pe,Ze[0].width,Ze[0].height);for(let H=0,Z=Ze.length;H<Z;H++)ge=Ze[H],v.format!==un?me!==null?ke?L&&t.compressedTexSubImage2D(s.TEXTURE_2D,H,0,0,ge.width,ge.height,me,ge.data):t.compressedTexImage2D(s.TEXTURE_2D,H,Pe,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?L&&t.texSubImage2D(s.TEXTURE_2D,H,0,0,ge.width,ge.height,me,Ce,ge.data):t.texImage2D(s.TEXTURE_2D,H,Pe,ge.width,ge.height,0,me,Ce,ge.data)}else if(v.isDataArrayTexture)if(ke){if(lt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,oe,Pe,Q.width,Q.height,Q.depth),L)if(v.layerUpdates.size>0){let H=Fu(Q.width,Q.height,v.format,v.type);for(let Z of v.layerUpdates){let de=Q.data.subarray(Z*H/Q.data.BYTES_PER_ELEMENT,(Z+1)*H/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Z,Q.width,Q.height,1,me,Ce,de)}v.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,me,Ce,Q.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Pe,Q.width,Q.height,Q.depth,0,me,Ce,Q.data);else if(v.isData3DTexture)ke?(lt&&t.texStorage3D(s.TEXTURE_3D,oe,Pe,Q.width,Q.height,Q.depth),L&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,me,Ce,Q.data)):t.texImage3D(s.TEXTURE_3D,0,Pe,Q.width,Q.height,Q.depth,0,me,Ce,Q.data);else if(v.isFramebufferTexture){if(lt)if(ke)t.texStorage2D(s.TEXTURE_2D,oe,Pe,Q.width,Q.height);else{let H=Q.width,Z=Q.height;for(let de=0;de<oe;de++)t.texImage2D(s.TEXTURE_2D,de,Pe,H,Z,0,me,Ce,null),H>>=1,Z>>=1}}else if(Ze.length>0){if(ke&&lt){let H=we(Ze[0]);t.texStorage2D(s.TEXTURE_2D,oe,Pe,H.width,H.height)}for(let H=0,Z=Ze.length;H<Z;H++)ge=Ze[H],ke?L&&t.texSubImage2D(s.TEXTURE_2D,H,0,0,me,Ce,ge):t.texImage2D(s.TEXTURE_2D,H,Pe,me,Ce,ge);v.generateMipmaps=!1}else if(ke){if(lt){let H=we(Q);t.texStorage2D(s.TEXTURE_2D,oe,Pe,H.width,H.height)}L&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,me,Ce,Q)}else t.texImage2D(s.TEXTURE_2D,0,Pe,me,Ce,Q);m(v)&&p($),Se.__version=X.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function ie(T,v,O){if(v.image.length!==6)return;let $=ct(T,v),J=v.source;t.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+O);let X=n.get(J);if(J.version!==X.__version||$===!0){t.activeTexture(s.TEXTURE0+O);let Se=Xe.getPrimaries(Xe.workingColorSpace),le=v.colorSpace===di?null:Xe.getPrimaries(v.colorSpace),pe=v.colorSpace===di||Se===le?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let Je=v.isCompressedTexture||v.image[0].isCompressedTexture,Q=v.image[0]&&v.image[0].isDataTexture,me=[];for(let Z=0;Z<6;Z++)!Je&&!Q?me[Z]=x(v.image[Z],!0,i.maxCubemapSize):me[Z]=Q?v.image[Z].image:v.image[Z],me[Z]=dt(v,me[Z]);let Ce=me[0],Pe=r.convert(v.format,v.colorSpace),ge=r.convert(v.type),Ze=b(v.internalFormat,Pe,ge,v.colorSpace),ke=v.isVideoTexture!==!0,lt=X.__version===void 0||$===!0,L=J.dataReady,oe=P(v,Ce);Ve(s.TEXTURE_CUBE_MAP,v);let H;if(Je){ke&&lt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,oe,Ze,Ce.width,Ce.height);for(let Z=0;Z<6;Z++){H=me[Z].mipmaps;for(let de=0;de<H.length;de++){let he=H[de];v.format!==un?Pe!==null?ke?L&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de,0,0,he.width,he.height,Pe,he.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de,Ze,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?L&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de,0,0,he.width,he.height,Pe,ge,he.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de,Ze,he.width,he.height,0,Pe,ge,he.data)}}}else{if(H=v.mipmaps,ke&&lt){H.length>0&&oe++;let Z=we(me[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,oe,Ze,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(Q){ke?L&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,me[Z].width,me[Z].height,Pe,ge,me[Z].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ze,me[Z].width,me[Z].height,0,Pe,ge,me[Z].data);for(let de=0;de<H.length;de++){let Oe=H[de].image[Z].image;ke?L&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de+1,0,0,Oe.width,Oe.height,Pe,ge,Oe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de+1,Ze,Oe.width,Oe.height,0,Pe,ge,Oe.data)}}else{ke?L&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Pe,ge,me[Z]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ze,Pe,ge,me[Z]);for(let de=0;de<H.length;de++){let he=H[de];ke?L&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de+1,0,0,Pe,ge,he.image[Z]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de+1,Ze,Pe,ge,he.image[Z])}}}m(v)&&p(s.TEXTURE_CUBE_MAP),X.__version=J.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function ve(T,v,O,$,J,X){let Se=r.convert(O.format,O.colorSpace),le=r.convert(O.type),pe=b(O.internalFormat,Se,le,O.colorSpace),Je=n.get(v),Q=n.get(O);if(Q.__renderTarget=v,!Je.__hasExternalTextures){let me=Math.max(1,v.width>>X),Ce=Math.max(1,v.height>>X);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?t.texImage3D(J,X,pe,me,Ce,v.depth,0,Se,le,null):t.texImage2D(J,X,pe,me,Ce,0,Se,le,null)}t.bindFramebuffer(s.FRAMEBUFFER,T),$e(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,J,Q.__webglTexture,0,Ye(v)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,J,Q.__webglTexture,X),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ce(T,v,O){if(s.bindRenderbuffer(s.RENDERBUFFER,T),v.depthBuffer){let $=v.depthTexture,J=$&&$.isDepthTexture?$.type:null,X=_(v.stencilBuffer,J),Se=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=Ye(v);$e(v)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,le,X,v.width,v.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,le,X,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,X,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Se,s.RENDERBUFFER,T)}else{let $=v.textures;for(let J=0;J<$.length;J++){let X=$[J],Se=r.convert(X.format,X.colorSpace),le=r.convert(X.type),pe=b(X.internalFormat,Se,le,X.colorSpace),Je=Ye(v);O&&$e(v)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Je,pe,v.width,v.height):$e(v)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Je,pe,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,pe,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ie(T,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=n.get(v.depthTexture);$.__renderTarget=v,(!$.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),K(v.depthTexture,0);let J=$.__webglTexture,X=Ye(v);if(v.depthTexture.format===_s)$e(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0,X):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0);else if(v.depthTexture.format===Ts)$e(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0,X):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Ne(T){let v=n.get(T),O=T.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==T.depthTexture){let $=T.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),$){let J=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,$.removeEventListener("dispose",J)};$.addEventListener("dispose",J),v.__depthDisposeCallback=J}v.__boundDepthTexture=$}if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Ie(v.__webglFramebuffer,T)}else if(O){v.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[$]),v.__webglDepthbuffer[$]===void 0)v.__webglDepthbuffer[$]=s.createRenderbuffer(),ce(v.__webglDepthbuffer[$],T,!1);else{let J=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer[$];s.bindRenderbuffer(s.RENDERBUFFER,X),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,X)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=s.createRenderbuffer(),ce(v.__webglDepthbuffer,T,!1);else{let $=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,J=v.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,J),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,J)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ge(T,v,O){let $=n.get(T);v!==void 0&&ve($.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&Ne(T)}function _t(T){let v=T.texture,O=n.get(T),$=n.get(v);T.addEventListener("dispose",R);let J=T.textures,X=T.isWebGLCubeRenderTarget===!0,Se=J.length>1;if(Se||($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=v.version,o.memory.textures++),X){O.__webglFramebuffer=[];for(let le=0;le<6;le++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[le]=[];for(let pe=0;pe<v.mipmaps.length;pe++)O.__webglFramebuffer[le][pe]=s.createFramebuffer()}else O.__webglFramebuffer[le]=s.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let le=0;le<v.mipmaps.length;le++)O.__webglFramebuffer[le]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(Se)for(let le=0,pe=J.length;le<pe;le++){let Je=n.get(J[le]);Je.__webglTexture===void 0&&(Je.__webglTexture=s.createTexture(),o.memory.textures++)}if(T.samples>0&&$e(T)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let le=0;le<J.length;le++){let pe=J[le];O.__webglColorRenderbuffer[le]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[le]);let Je=r.convert(pe.format,pe.colorSpace),Q=r.convert(pe.type),me=b(pe.internalFormat,Je,Q,pe.colorSpace,T.isXRRenderTarget===!0),Ce=Ye(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ce,me,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.RENDERBUFFER,O.__webglColorRenderbuffer[le])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),ce(O.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(X){t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),Ve(s.TEXTURE_CUBE_MAP,v);for(let le=0;le<6;le++)if(v.mipmaps&&v.mipmaps.length>0)for(let pe=0;pe<v.mipmaps.length;pe++)ve(O.__webglFramebuffer[le][pe],T,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+le,pe);else ve(O.__webglFramebuffer[le],T,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(v)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let le=0,pe=J.length;le<pe;le++){let Je=J[le],Q=n.get(Je);t.bindTexture(s.TEXTURE_2D,Q.__webglTexture),Ve(s.TEXTURE_2D,Je),ve(O.__webglFramebuffer,T,Je,s.COLOR_ATTACHMENT0+le,s.TEXTURE_2D,0),m(Je)&&p(s.TEXTURE_2D)}t.unbindTexture()}else{let le=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(le=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(le,$.__webglTexture),Ve(le,v),v.mipmaps&&v.mipmaps.length>0)for(let pe=0;pe<v.mipmaps.length;pe++)ve(O.__webglFramebuffer[pe],T,v,s.COLOR_ATTACHMENT0,le,pe);else ve(O.__webglFramebuffer,T,v,s.COLOR_ATTACHMENT0,le,0);m(v)&&p(le),t.unbindTexture()}T.depthBuffer&&Ne(T)}function Ke(T){let v=T.textures;for(let O=0,$=v.length;O<$;O++){let J=v[O];if(m(J)){let X=y(T),Se=n.get(J).__webglTexture;t.bindTexture(X,Se),p(X),t.unbindTexture()}}}let Mt=[],U=[];function cn(T){if(T.samples>0){if($e(T)===!1){let v=T.textures,O=T.width,$=T.height,J=s.COLOR_BUFFER_BIT,X=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Se=n.get(T),le=v.length>1;if(le)for(let pe=0;pe<v.length;pe++)t.bindFramebuffer(s.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Se.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let pe=0;pe<v.length;pe++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),le){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Se.__webglColorRenderbuffer[pe]);let Je=n.get(v[pe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Je,0)}s.blitFramebuffer(0,0,O,$,0,0,O,$,J,s.NEAREST),c===!0&&(Mt.length=0,U.length=0,Mt.push(s.COLOR_ATTACHMENT0+pe),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Mt.push(X),U.push(X),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,U)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Mt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),le)for(let pe=0;pe<v.length;pe++){t.bindFramebuffer(s.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.RENDERBUFFER,Se.__webglColorRenderbuffer[pe]);let Je=n.get(v[pe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Se.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.TEXTURE_2D,Je,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){let v=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function Ye(T){return Math.min(i.maxSamples,T.samples)}function $e(T){let v=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Ae(T){let v=o.render.frame;h.get(T)!==v&&(h.set(T,v),T.update())}function dt(T,v){let O=T.colorSpace,$=T.format,J=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||O!==Vt&&O!==di&&(Xe.getTransfer(O)===ot?($!==un||J!==Kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}function we(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=z,this.setTexture2D=K,this.setTexture2DArray=W,this.setTexture3D=ne,this.setTextureCube=V,this.rebindTextures=Ge,this.setupRenderTarget=_t,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=cn,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=$e}function b_(s,e){function t(n,i=di){let r,o=Xe.getTransfer(i);if(n===Kn)return s.UNSIGNED_BYTE;if(n===El)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Tl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===ud)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===ld)return s.BYTE;if(n===hd)return s.SHORT;if(n===ur)return s.UNSIGNED_SHORT;if(n===bl)return s.INT;if(n===Bi)return s.UNSIGNED_INT;if(n===Tn)return s.FLOAT;if(n===br)return s.HALF_FLOAT;if(n===dd)return s.ALPHA;if(n===fd)return s.RGB;if(n===un)return s.RGBA;if(n===pd)return s.LUMINANCE;if(n===md)return s.LUMINANCE_ALPHA;if(n===_s)return s.DEPTH_COMPONENT;if(n===Ts)return s.DEPTH_STENCIL;if(n===wl)return s.RED;if(n===Al)return s.RED_INTEGER;if(n===gd)return s.RG;if(n===Rl)return s.RG_INTEGER;if(n===Cl)return s.RGBA_INTEGER;if(n===uo||n===fo||n===po||n===mo)if(o===ot)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===uo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===uo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===po)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===mo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===hc||n===uc||n===dc||n===fc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===hc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===uc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===dc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===pc||n===mc||n===gc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===pc||n===mc)return o===ot?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===gc)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===xc||n===_c||n===yc||n===vc||n===Mc||n===Sc||n===bc||n===Ec||n===Tc||n===wc||n===Ac||n===Rc||n===Cc||n===Ic)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===xc)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===_c)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===yc)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===vc)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Mc)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Sc)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===bc)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ec)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Tc)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===wc)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ac)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Rc)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Cc)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ic)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===go||n===Pc||n===Lc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===go)return o===ot?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Pc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Lc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xd||n===Dc||n===Nc||n===Uc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===go)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Dc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Nc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Uc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Es?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var Kc=class extends wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},qe=class extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}},E_={type:"move"},ar=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(E_)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new qe;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},T_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,w_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Jc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let i=new It,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ln({vertexShader:T_,fragmentShader:w_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new te(new Et(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},jc=class extends xi{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null,x=new Jc,m=t.getContextAttributes(),p=null,y=null,b=[],_=[],P=new se,A=null,R=new wt;R.viewport=new et;let C=new wt;C.viewport=new et;let E=[R,C],M=new Kc,I=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ie=b[q];return ie===void 0&&(ie=new ar,b[q]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(q){let ie=b[q];return ie===void 0&&(ie=new ar,b[q]=ie),ie.getGripSpace()},this.getHand=function(q){let ie=b[q];return ie===void 0&&(ie=new ar,b[q]=ie),ie.getHandSpace()};function k(q){let ie=_.indexOf(q.inputSource);if(ie===-1)return;let ve=b[ie];ve!==void 0&&(ve.update(q.inputSource,q.frame,l||o),ve.dispatchEvent({type:q.type,data:q.inputSource}))}function G(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",K);for(let q=0;q<b.length;q++){let ie=_[q];ie!==null&&(_[q]=null,b[q].disconnect(ie))}I=null,z=null,x.reset(),e.setRenderTarget(p),f=null,d=null,u=null,i=null,y=null,ct.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",G),i.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(P),i.renderState.layers===void 0){let ie={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,ie),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Jn(f.framebufferWidth,f.framebufferHeight,{format:un,type:Kn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ie=null,ve=null,ce=null;m.depth&&(ce=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=m.stencil?Ts:_s,ve=m.stencil?Es:Bi);let Ie={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:r};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(Ie),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Jn(d.textureWidth,d.textureHeight,{format:un,type:Kn,depthTexture:new wo(d.textureWidth,d.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),ct.setContext(i),ct.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function K(q){for(let ie=0;ie<q.removed.length;ie++){let ve=q.removed[ie],ce=_.indexOf(ve);ce>=0&&(_[ce]=null,b[ce].disconnect(ve))}for(let ie=0;ie<q.added.length;ie++){let ve=q.added[ie],ce=_.indexOf(ve);if(ce===-1){for(let Ne=0;Ne<b.length;Ne++)if(Ne>=_.length){_.push(ve),ce=Ne;break}else if(_[Ne]===null){_[Ne]=ve,ce=Ne;break}if(ce===-1)break}let Ie=b[ce];Ie&&Ie.connect(ve)}}let W=new w,ne=new w;function V(q,ie,ve){W.setFromMatrixPosition(ie.matrixWorld),ne.setFromMatrixPosition(ve.matrixWorld);let ce=W.distanceTo(ne),Ie=ie.projectionMatrix.elements,Ne=ve.projectionMatrix.elements,Ge=Ie[14]/(Ie[10]-1),_t=Ie[14]/(Ie[10]+1),Ke=(Ie[9]+1)/Ie[5],Mt=(Ie[9]-1)/Ie[5],U=(Ie[8]-1)/Ie[0],cn=(Ne[8]+1)/Ne[0],Ye=Ge*U,$e=Ge*cn,Ae=ce/(-U+cn),dt=Ae*-U;if(ie.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(dt),q.translateZ(Ae),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ie[10]===-1)q.projectionMatrix.copy(ie.projectionMatrix),q.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{let we=Ge+Ae,T=_t+Ae,v=Ye-dt,O=$e+(ce-dt),$=Ke*_t/T*we,J=Mt*_t/T*we;q.projectionMatrix.makePerspective(v,O,$,J,we,T),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ae(q,ie){ie===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ie.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let ie=q.near,ve=q.far;x.texture!==null&&(x.depthNear>0&&(ie=x.depthNear),x.depthFar>0&&(ve=x.depthFar)),M.near=C.near=R.near=ie,M.far=C.far=R.far=ve,(I!==M.near||z!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),I=M.near,z=M.far),R.layers.mask=q.layers.mask|2,C.layers.mask=q.layers.mask|4,M.layers.mask=R.layers.mask|C.layers.mask;let ce=q.parent,Ie=M.cameras;ae(M,ce);for(let Ne=0;Ne<Ie.length;Ne++)ae(Ie[Ne],ce);Ie.length===2?V(M,R,C):M.projectionMatrix.copy(R.projectionMatrix),fe(q,M,ce)};function fe(q,ie,ve){ve===null?q.matrix.copy(ie.matrixWorld):(q.matrix.copy(ve.matrixWorld),q.matrix.invert(),q.matrix.multiply(ie.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ie.projectionMatrix),q.projectionMatrixInverse.copy(ie.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Rs*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(q){c=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let Ee=null;function Ve(q,ie){if(h=ie.getViewerPose(l||o),g=ie,h!==null){let ve=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let ce=!1;ve.length!==M.cameras.length&&(M.cameras.length=0,ce=!0);for(let Ne=0;Ne<ve.length;Ne++){let Ge=ve[Ne],_t=null;if(f!==null)_t=f.getViewport(Ge);else{let Mt=u.getViewSubImage(d,Ge);_t=Mt.viewport,Ne===0&&(e.setRenderTargetTextures(y,Mt.colorTexture,d.ignoreDepthValues?void 0:Mt.depthStencilTexture),e.setRenderTarget(y))}let Ke=E[Ne];Ke===void 0&&(Ke=new wt,Ke.layers.enable(Ne),Ke.viewport=new et,E[Ne]=Ke),Ke.matrix.fromArray(Ge.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(Ge.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(_t.x,_t.y,_t.width,_t.height),Ne===0&&(M.matrix.copy(Ke.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ce===!0&&M.cameras.push(Ke)}let Ie=i.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")){let Ne=u.getDepthInformation(ve[0]);Ne&&Ne.isValid&&Ne.texture&&x.init(e,Ne,i.renderState)}}for(let ve=0;ve<b.length;ve++){let ce=_[ve],Ie=b[ve];ce!==null&&Ie!==void 0&&Ie.update(ce,ie,l||o)}Ee&&Ee(q,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),g=null}let ct=new Td;ct.setAnimationLoop(Ve),this.setAnimationLoop=function(q){Ee=q},this.dispose=function(){}}},Ni=new Pn,A_=new De;function R_(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Ed(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,y,b,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,y,b):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Jt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Jt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=e.get(p),b=y.envMap,_=y.envMapRotation;b&&(m.envMap.value=b,Ni.copy(_),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),m.envMapRotation.value.setFromMatrix4(A_.makeRotationFromEuler(Ni)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Jt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function C_(s,e,t,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,b){let _=b.program;n.uniformBlockBinding(y,_)}function l(y,b){let _=i[y.id];_===void 0&&(g(y),_=h(y),i[y.id]=_,y.addEventListener("dispose",m));let P=b.program;n.updateUBOMapping(y,P);let A=e.render.frame;r[y.id]!==A&&(d(y),r[y.id]=A)}function h(y){let b=u();y.__bindingPointIndex=b;let _=s.createBuffer(),P=y.__size,A=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,P,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,_),_}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let b=i[y.id],_=y.uniforms,P=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let A=0,R=_.length;A<R;A++){let C=Array.isArray(_[A])?_[A]:[_[A]];for(let E=0,M=C.length;E<M;E++){let I=C[E];if(f(I,A,E,P)===!0){let z=I.__offset,k=Array.isArray(I.value)?I.value:[I.value],G=0;for(let K=0;K<k.length;K++){let W=k[K],ne=x(W);typeof W=="number"||typeof W=="boolean"?(I.__data[0]=W,s.bufferSubData(s.UNIFORM_BUFFER,z+G,I.__data)):W.isMatrix3?(I.__data[0]=W.elements[0],I.__data[1]=W.elements[1],I.__data[2]=W.elements[2],I.__data[3]=0,I.__data[4]=W.elements[3],I.__data[5]=W.elements[4],I.__data[6]=W.elements[5],I.__data[7]=0,I.__data[8]=W.elements[6],I.__data[9]=W.elements[7],I.__data[10]=W.elements[8],I.__data[11]=0):(W.toArray(I.__data,G),G+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,z,I.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(y,b,_,P){let A=y.value,R=b+"_"+_;if(P[R]===void 0)return typeof A=="number"||typeof A=="boolean"?P[R]=A:P[R]=A.clone(),!0;{let C=P[R];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return P[R]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function g(y){let b=y.uniforms,_=0,P=16;for(let R=0,C=b.length;R<C;R++){let E=Array.isArray(b[R])?b[R]:[b[R]];for(let M=0,I=E.length;M<I;M++){let z=E[M],k=Array.isArray(z.value)?z.value:[z.value];for(let G=0,K=k.length;G<K;G++){let W=k[G],ne=x(W),V=_%P,ae=V%ne.boundary,fe=V+ae;_+=ae,fe!==0&&P-fe<ne.storage&&(_+=P-fe),z.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=_,_+=ne.storage}}}let A=_%P;return A>0&&(_+=P-A),y.__size=_,y.__cache={},this}function x(y){let b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),b}function m(y){let b=y.target;b.removeEventListener("dispose",m);let _=o.indexOf(b.__bindingPointIndex);o.splice(_,1),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function p(){for(let y in i)s.deleteBuffer(i[y]);o=[],i={},r={}}return{bind:c,update:l,dispose:p}}var Ao=class{constructor(e={}){let{canvas:t=Dp(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,y=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mt,this.toneMapping=gi,this.toneMappingExposure=1;let _=this,P=!1,A=0,R=0,C=null,E=-1,M=null,I=new et,z=new et,k=null,G=new Te(0),K=0,W=t.width,ne=t.height,V=1,ae=null,fe=null,Ee=new et(0,0,W,ne),Ve=new et(0,0,W,ne),ct=!1,q=new fr,ie=!1,ve=!1,ce=new De,Ie=new De,Ne=new w,Ge=new et,_t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ke=!1;function Mt(){return C===null?V:1}let U=n;function cn(S,D){return t.getContext(S,D)}try{let S={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",Z,!1),t.addEventListener("webglcontextrestored",de,!1),t.addEventListener("webglcontextcreationerror",he,!1),U===null){let D="webgl2";if(U=cn(D,S),U===null)throw cn(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Ye,$e,Ae,dt,we,T,v,O,$,J,X,Se,le,pe,Je,Q,me,Ce,Pe,ge,Ze,ke,lt,L;function oe(){Ye=new Xg(U),Ye.init(),ke=new b_(U,Ye),$e=new kg(U,Ye,e,ke),Ae=new v_(U,Ye),$e.reverseDepthBuffer&&d&&Ae.buffers.depth.setReversed(!0),dt=new $g(U),we=new a_,T=new S_(U,Ye,Ae,we,$e,ke,dt),v=new Hg(_),O=new Wg(_),$=new tm(U),lt=new Fg(U,$),J=new qg(U,$,dt,lt),X=new Kg(U,J,$,dt),Pe=new Zg(U,$e,T),Q=new zg(we),Se=new o_(_,v,O,Ye,$e,lt,Q),le=new R_(_,we),pe=new l_,Je=new m_(Ye),Ce=new Og(_,v,O,Ae,X,f,c),me=new __(_,X,$e),L=new C_(U,dt,$e,Ae),ge=new Bg(U,Ye,dt),Ze=new Yg(U,Ye,dt),dt.programs=Se.programs,_.capabilities=$e,_.extensions=Ye,_.properties=we,_.renderLists=pe,_.shadowMap=me,_.state=Ae,_.info=dt}oe();let H=new jc(_,U);this.xr=H,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let S=Ye.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=Ye.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(S){S!==void 0&&(V=S,this.setSize(W,ne,!1))},this.getSize=function(S){return S.set(W,ne)},this.setSize=function(S,D,F=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=S,ne=D,t.width=Math.floor(S*V),t.height=Math.floor(D*V),F===!0&&(t.style.width=S+"px",t.style.height=D+"px"),this.setViewport(0,0,S,D)},this.getDrawingBufferSize=function(S){return S.set(W*V,ne*V).floor()},this.setDrawingBufferSize=function(S,D,F){W=S,ne=D,V=F,t.width=Math.floor(S*F),t.height=Math.floor(D*F),this.setViewport(0,0,S,D)},this.getCurrentViewport=function(S){return S.copy(I)},this.getViewport=function(S){return S.copy(Ee)},this.setViewport=function(S,D,F,B){S.isVector4?Ee.set(S.x,S.y,S.z,S.w):Ee.set(S,D,F,B),Ae.viewport(I.copy(Ee).multiplyScalar(V).round())},this.getScissor=function(S){return S.copy(Ve)},this.setScissor=function(S,D,F,B){S.isVector4?Ve.set(S.x,S.y,S.z,S.w):Ve.set(S,D,F,B),Ae.scissor(z.copy(Ve).multiplyScalar(V).round())},this.getScissorTest=function(){return ct},this.setScissorTest=function(S){Ae.setScissorTest(ct=S)},this.setOpaqueSort=function(S){ae=S},this.setTransparentSort=function(S){fe=S},this.getClearColor=function(S){return S.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor.apply(Ce,arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha.apply(Ce,arguments)},this.clear=function(S=!0,D=!0,F=!0){let B=0;if(S){let N=!1;if(C!==null){let ee=C.texture.format;N=ee===Cl||ee===Rl||ee===Al}if(N){let ee=C.texture.type,ue=ee===Kn||ee===Bi||ee===ur||ee===Es||ee===El||ee===Tl,xe=Ce.getClearColor(),_e=Ce.getClearAlpha(),Le=xe.r,Fe=xe.g,ye=xe.b;ue?(g[0]=Le,g[1]=Fe,g[2]=ye,g[3]=_e,U.clearBufferuiv(U.COLOR,0,g)):(x[0]=Le,x[1]=Fe,x[2]=ye,x[3]=_e,U.clearBufferiv(U.COLOR,0,x))}else B|=U.COLOR_BUFFER_BIT}D&&(B|=U.DEPTH_BUFFER_BIT),F&&(B|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Z,!1),t.removeEventListener("webglcontextrestored",de,!1),t.removeEventListener("webglcontextcreationerror",he,!1),pe.dispose(),Je.dispose(),we.dispose(),v.dispose(),O.dispose(),X.dispose(),lt.dispose(),L.dispose(),Se.dispose(),H.dispose(),H.removeEventListener("sessionstart",Ch),H.removeEventListener("sessionend",Ih),Ri.stop()};function Z(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let S=dt.autoReset,D=me.enabled,F=me.autoUpdate,B=me.needsUpdate,N=me.type;oe(),dt.autoReset=S,me.enabled=D,me.autoUpdate=F,me.needsUpdate=B,me.type=N}function he(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Oe(S){let D=S.target;D.removeEventListener("dispose",Oe),yt(D)}function yt(S){Ft(S),we.remove(S)}function Ft(S){let D=we.get(S).programs;D!==void 0&&(D.forEach(function(F){Se.releaseProgram(F)}),S.isShaderMaterial&&Se.releaseShaderCache(S))}this.renderBufferDirect=function(S,D,F,B,N,ee){D===null&&(D=_t);let ue=N.isMesh&&N.matrixWorld.determinant()<0,xe=Rf(S,D,F,B,N);Ae.setMaterial(B,ue);let _e=F.index,Le=1;if(B.wireframe===!0){if(_e=J.getWireframeAttribute(F),_e===void 0)return;Le=2}let Fe=F.drawRange,ye=F.attributes.position,Qe=Fe.start*Le,ht=(Fe.start+Fe.count)*Le;ee!==null&&(Qe=Math.max(Qe,ee.start*Le),ht=Math.min(ht,(ee.start+ee.count)*Le)),_e!==null?(Qe=Math.max(Qe,0),ht=Math.min(ht,_e.count)):ye!=null&&(Qe=Math.max(Qe,0),ht=Math.min(ht,ye.count));let ft=ht-Qe;if(ft<0||ft===1/0)return;lt.setup(N,B,xe,F,_e);let Zt,tt=ge;if(_e!==null&&(Zt=$.get(_e),tt=Ze,tt.setIndex(Zt)),N.isMesh)B.wireframe===!0?(Ae.setLineWidth(B.wireframeLinewidth*Mt()),tt.setMode(U.LINES)):tt.setMode(U.TRIANGLES);else if(N.isLine){let be=B.linewidth;be===void 0&&(be=1),Ae.setLineWidth(be*Mt()),N.isLineSegments?tt.setMode(U.LINES):N.isLineLoop?tt.setMode(U.LINE_LOOP):tt.setMode(U.LINE_STRIP)}else N.isPoints?tt.setMode(U.POINTS):N.isSprite&&tt.setMode(U.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)tt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Ye.get("WEBGL_multi_draw"))tt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let be=N._multiDrawStarts,Fn=N._multiDrawCounts,nt=N._multiDrawCount,vn=_e?$.get(_e).bytesPerElement:1,Zi=we.get(B).currentProgram.getUniforms();for(let nn=0;nn<nt;nn++)Zi.setValue(U,"_gl_DrawID",nn),tt.render(be[nn]/vn,Fn[nn])}else if(N.isInstancedMesh)tt.renderInstances(Qe,ft,N.count);else if(F.isInstancedBufferGeometry){let be=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,Fn=Math.min(F.instanceCount,be);tt.renderInstances(Qe,ft,Fn)}else tt.render(Qe,ft)};function it(S,D,F){S.transparent===!0&&S.side===Xt&&S.forceSinglePass===!1?(S.side=Jt,S.needsUpdate=!0,Dr(S,D,F),S.side=dn,S.needsUpdate=!0,Dr(S,D,F),S.side=Xt):Dr(S,D,F)}this.compile=function(S,D,F=null){F===null&&(F=S),p=Je.get(F),p.init(D),b.push(p),F.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),S!==F&&S.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();let B=new Set;return S.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let ee=N.material;if(ee)if(Array.isArray(ee))for(let ue=0;ue<ee.length;ue++){let xe=ee[ue];it(xe,F,N),B.add(xe)}else it(ee,F,N),B.add(ee)}),b.pop(),p=null,B},this.compileAsync=function(S,D,F=null){let B=this.compile(S,D,F);return new Promise(N=>{function ee(){if(B.forEach(function(ue){we.get(ue).currentProgram.isReady()&&B.delete(ue)}),B.size===0){N(S);return}setTimeout(ee,10)}Ye.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let yn=null;function On(S){yn&&yn(S)}function Ch(){Ri.stop()}function Ih(){Ri.start()}let Ri=new Td;Ri.setAnimationLoop(On),typeof self<"u"&&Ri.setContext(self),this.setAnimationLoop=function(S){yn=S,H.setAnimationLoop(S),S===null?Ri.stop():Ri.start()},H.addEventListener("sessionstart",Ch),H.addEventListener("sessionend",Ih),this.render=function(S,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(D),D=H.getCamera()),S.isScene===!0&&S.onBeforeRender(_,S,D,C),p=Je.get(S,b.length),p.init(D),b.push(p),Ie.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),q.setFromProjectionMatrix(Ie),ve=this.localClippingEnabled,ie=Q.init(this.clippingPlanes,ve),m=pe.get(S,y.length),m.init(),y.push(m),H.enabled===!0&&H.isPresenting===!0){let ee=_.xr.getDepthSensingMesh();ee!==null&&ga(ee,D,-1/0,_.sortObjects)}ga(S,D,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(ae,fe),Ke=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,Ke&&Ce.addToRenderList(m,S),this.info.render.frame++,ie===!0&&Q.beginShadows();let F=p.state.shadowsArray;me.render(F,S,D),ie===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();let B=m.opaque,N=m.transmissive;if(p.setupLights(),D.isArrayCamera){let ee=D.cameras;if(N.length>0)for(let ue=0,xe=ee.length;ue<xe;ue++){let _e=ee[ue];Lh(B,N,S,_e)}Ke&&Ce.render(S);for(let ue=0,xe=ee.length;ue<xe;ue++){let _e=ee[ue];Ph(m,S,_e,_e.viewport)}}else N.length>0&&Lh(B,N,S,D),Ke&&Ce.render(S),Ph(m,S,D);C!==null&&(T.updateMultisampleRenderTarget(C),T.updateRenderTargetMipmap(C)),S.isScene===!0&&S.onAfterRender(_,S,D),lt.resetDefaultState(),E=-1,M=null,b.pop(),b.length>0?(p=b[b.length-1],ie===!0&&Q.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function ga(S,D,F,B){if(S.visible===!1)return;if(S.layers.test(D.layers)){if(S.isGroup)F=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(D);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||q.intersectsSprite(S)){B&&Ge.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Ie);let ue=X.update(S),xe=S.material;xe.visible&&m.push(S,ue,xe,F,Ge.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||q.intersectsObject(S))){let ue=X.update(S),xe=S.material;if(B&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ge.copy(S.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),Ge.copy(ue.boundingSphere.center)),Ge.applyMatrix4(S.matrixWorld).applyMatrix4(Ie)),Array.isArray(xe)){let _e=ue.groups;for(let Le=0,Fe=_e.length;Le<Fe;Le++){let ye=_e[Le],Qe=xe[ye.materialIndex];Qe&&Qe.visible&&m.push(S,ue,Qe,F,Ge.z,ye)}}else xe.visible&&m.push(S,ue,xe,F,Ge.z,null)}}let ee=S.children;for(let ue=0,xe=ee.length;ue<xe;ue++)ga(ee[ue],D,F,B)}function Ph(S,D,F,B){let N=S.opaque,ee=S.transmissive,ue=S.transparent;p.setupLightsView(F),ie===!0&&Q.setGlobalState(_.clippingPlanes,F),B&&Ae.viewport(I.copy(B)),N.length>0&&Lr(N,D,F),ee.length>0&&Lr(ee,D,F),ue.length>0&&Lr(ue,D,F),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function Lh(S,D,F,B){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[B.id]===void 0&&(p.state.transmissionRenderTarget[B.id]=new Jn(1,1,{generateMipmaps:!0,type:Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float")?br:Kn,minFilter:In,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace}));let ee=p.state.transmissionRenderTarget[B.id],ue=B.viewport||I;ee.setSize(ue.z,ue.w);let xe=_.getRenderTarget();_.setRenderTarget(ee),_.getClearColor(G),K=_.getClearAlpha(),K<1&&_.setClearColor(16777215,.5),_.clear(),Ke&&Ce.render(F);let _e=_.toneMapping;_.toneMapping=gi;let Le=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),p.setupLightsView(B),ie===!0&&Q.setGlobalState(_.clippingPlanes,B),Lr(S,F,B),T.updateMultisampleRenderTarget(ee),T.updateRenderTargetMipmap(ee),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let ye=0,Qe=D.length;ye<Qe;ye++){let ht=D[ye],ft=ht.object,Zt=ht.geometry,tt=ht.material,be=ht.group;if(tt.side===Xt&&ft.layers.test(B.layers)){let Fn=tt.side;tt.side=Jt,tt.needsUpdate=!0,Dh(ft,F,B,Zt,tt,be),tt.side=Fn,tt.needsUpdate=!0,Fe=!0}}Fe===!0&&(T.updateMultisampleRenderTarget(ee),T.updateRenderTargetMipmap(ee))}_.setRenderTarget(xe),_.setClearColor(G,K),Le!==void 0&&(B.viewport=Le),_.toneMapping=_e}function Lr(S,D,F){let B=D.isScene===!0?D.overrideMaterial:null;for(let N=0,ee=S.length;N<ee;N++){let ue=S[N],xe=ue.object,_e=ue.geometry,Le=B===null?ue.material:B,Fe=ue.group;xe.layers.test(F.layers)&&Dh(xe,D,F,_e,Le,Fe)}}function Dh(S,D,F,B,N,ee){S.onBeforeRender(_,D,F,B,N,ee),S.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),N.onBeforeRender(_,D,F,B,S,ee),N.transparent===!0&&N.side===Xt&&N.forceSinglePass===!1?(N.side=Jt,N.needsUpdate=!0,_.renderBufferDirect(F,D,B,N,S,ee),N.side=dn,N.needsUpdate=!0,_.renderBufferDirect(F,D,B,N,S,ee),N.side=Xt):_.renderBufferDirect(F,D,B,N,S,ee),S.onAfterRender(_,D,F,B,N,ee)}function Dr(S,D,F){D.isScene!==!0&&(D=_t);let B=we.get(S),N=p.state.lights,ee=p.state.shadowsArray,ue=N.state.version,xe=Se.getParameters(S,N.state,ee,D,F),_e=Se.getProgramCacheKey(xe),Le=B.programs;B.environment=S.isMeshStandardMaterial?D.environment:null,B.fog=D.fog,B.envMap=(S.isMeshStandardMaterial?O:v).get(S.envMap||B.environment),B.envMapRotation=B.environment!==null&&S.envMap===null?D.environmentRotation:S.envMapRotation,Le===void 0&&(S.addEventListener("dispose",Oe),Le=new Map,B.programs=Le);let Fe=Le.get(_e);if(Fe!==void 0){if(B.currentProgram===Fe&&B.lightsStateVersion===ue)return Uh(S,xe),Fe}else xe.uniforms=Se.getUniforms(S),S.onBeforeCompile(xe,_),Fe=Se.acquireProgram(xe,_e),Le.set(_e,Fe),B.uniforms=xe.uniforms;let ye=B.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(ye.clippingPlanes=Q.uniform),Uh(S,xe),B.needsLights=If(S),B.lightsStateVersion=ue,B.needsLights&&(ye.ambientLightColor.value=N.state.ambient,ye.lightProbe.value=N.state.probe,ye.directionalLights.value=N.state.directional,ye.directionalLightShadows.value=N.state.directionalShadow,ye.spotLights.value=N.state.spot,ye.spotLightShadows.value=N.state.spotShadow,ye.rectAreaLights.value=N.state.rectArea,ye.ltc_1.value=N.state.rectAreaLTC1,ye.ltc_2.value=N.state.rectAreaLTC2,ye.pointLights.value=N.state.point,ye.pointLightShadows.value=N.state.pointShadow,ye.hemisphereLights.value=N.state.hemi,ye.directionalShadowMap.value=N.state.directionalShadowMap,ye.directionalShadowMatrix.value=N.state.directionalShadowMatrix,ye.spotShadowMap.value=N.state.spotShadowMap,ye.spotLightMatrix.value=N.state.spotLightMatrix,ye.spotLightMap.value=N.state.spotLightMap,ye.pointShadowMap.value=N.state.pointShadowMap,ye.pointShadowMatrix.value=N.state.pointShadowMatrix),B.currentProgram=Fe,B.uniformsList=null,Fe}function Nh(S){if(S.uniformsList===null){let D=S.currentProgram.getUniforms();S.uniformsList=vs.seqWithValue(D.seq,S.uniforms)}return S.uniformsList}function Uh(S,D){let F=we.get(S);F.outputColorSpace=D.outputColorSpace,F.batching=D.batching,F.batchingColor=D.batchingColor,F.instancing=D.instancing,F.instancingColor=D.instancingColor,F.instancingMorph=D.instancingMorph,F.skinning=D.skinning,F.morphTargets=D.morphTargets,F.morphNormals=D.morphNormals,F.morphColors=D.morphColors,F.morphTargetsCount=D.morphTargetsCount,F.numClippingPlanes=D.numClippingPlanes,F.numIntersection=D.numClipIntersection,F.vertexAlphas=D.vertexAlphas,F.vertexTangents=D.vertexTangents,F.toneMapping=D.toneMapping}function Rf(S,D,F,B,N){D.isScene!==!0&&(D=_t),T.resetTextureUnits();let ee=D.fog,ue=B.isMeshStandardMaterial?D.environment:null,xe=C===null?_.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Vt,_e=(B.isMeshStandardMaterial?O:v).get(B.envMap||ue),Le=B.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Fe=!!F.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),ye=!!F.morphAttributes.position,Qe=!!F.morphAttributes.normal,ht=!!F.morphAttributes.color,ft=gi;B.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ft=_.toneMapping);let Zt=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,tt=Zt!==void 0?Zt.length:0,be=we.get(B),Fn=p.state.lights;if(ie===!0&&(ve===!0||S!==M)){let ln=S===M&&B.id===E;Q.setState(B,S,ln)}let nt=!1;B.version===be.__version?(be.needsLights&&be.lightsStateVersion!==Fn.state.version||be.outputColorSpace!==xe||N.isBatchedMesh&&be.batching===!1||!N.isBatchedMesh&&be.batching===!0||N.isBatchedMesh&&be.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&be.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&be.instancing===!1||!N.isInstancedMesh&&be.instancing===!0||N.isSkinnedMesh&&be.skinning===!1||!N.isSkinnedMesh&&be.skinning===!0||N.isInstancedMesh&&be.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&be.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&be.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&be.instancingMorph===!1&&N.morphTexture!==null||be.envMap!==_e||B.fog===!0&&be.fog!==ee||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==Q.numPlanes||be.numIntersection!==Q.numIntersection)||be.vertexAlphas!==Le||be.vertexTangents!==Fe||be.morphTargets!==ye||be.morphNormals!==Qe||be.morphColors!==ht||be.toneMapping!==ft||be.morphTargetsCount!==tt)&&(nt=!0):(nt=!0,be.__version=B.version);let vn=be.currentProgram;nt===!0&&(vn=Dr(B,D,N));let Zi=!1,nn=!1,Gs=!1,pt=vn.getUniforms(),Rn=be.uniforms;if(Ae.useProgram(vn.program)&&(Zi=!0,nn=!0,Gs=!0),B.id!==E&&(E=B.id,nn=!0),Zi||M!==S){Ae.buffers.depth.getReversed()?(ce.copy(S.projectionMatrix),Up(ce),Op(ce),pt.setValue(U,"projectionMatrix",ce)):pt.setValue(U,"projectionMatrix",S.projectionMatrix),pt.setValue(U,"viewMatrix",S.matrixWorldInverse);let si=pt.map.cameraPosition;si!==void 0&&si.setValue(U,Ne.setFromMatrixPosition(S.matrixWorld)),$e.logarithmicDepthBuffer&&pt.setValue(U,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&pt.setValue(U,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,nn=!0,Gs=!0)}if(N.isSkinnedMesh){pt.setOptional(U,N,"bindMatrix"),pt.setOptional(U,N,"bindMatrixInverse");let ln=N.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),pt.setValue(U,"boneTexture",ln.boneTexture,T))}N.isBatchedMesh&&(pt.setOptional(U,N,"batchingTexture"),pt.setValue(U,"batchingTexture",N._matricesTexture,T),pt.setOptional(U,N,"batchingIdTexture"),pt.setValue(U,"batchingIdTexture",N._indirectTexture,T),pt.setOptional(U,N,"batchingColorTexture"),N._colorsTexture!==null&&pt.setValue(U,"batchingColorTexture",N._colorsTexture,T));let Ws=F.morphAttributes;if((Ws.position!==void 0||Ws.normal!==void 0||Ws.color!==void 0)&&Pe.update(N,F,vn),(nn||be.receiveShadow!==N.receiveShadow)&&(be.receiveShadow=N.receiveShadow,pt.setValue(U,"receiveShadow",N.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Rn.envMap.value=_e,Rn.flipEnvMap.value=_e.isCubeTexture&&_e.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&D.environment!==null&&(Rn.envMapIntensity.value=D.environmentIntensity),nn&&(pt.setValue(U,"toneMappingExposure",_.toneMappingExposure),be.needsLights&&Cf(Rn,Gs),ee&&B.fog===!0&&le.refreshFogUniforms(Rn,ee),le.refreshMaterialUniforms(Rn,B,V,ne,p.state.transmissionRenderTarget[S.id]),vs.upload(U,Nh(be),Rn,T)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(vs.upload(U,Nh(be),Rn,T),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&pt.setValue(U,"center",N.center),pt.setValue(U,"modelViewMatrix",N.modelViewMatrix),pt.setValue(U,"normalMatrix",N.normalMatrix),pt.setValue(U,"modelMatrix",N.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){let ln=B.uniformsGroups;for(let si=0,ri=ln.length;si<ri;si++){let Oh=ln[si];L.update(Oh,vn),L.bind(Oh,vn)}}return vn}function Cf(S,D){S.ambientLightColor.needsUpdate=D,S.lightProbe.needsUpdate=D,S.directionalLights.needsUpdate=D,S.directionalLightShadows.needsUpdate=D,S.pointLights.needsUpdate=D,S.pointLightShadows.needsUpdate=D,S.spotLights.needsUpdate=D,S.spotLightShadows.needsUpdate=D,S.rectAreaLights.needsUpdate=D,S.hemisphereLights.needsUpdate=D}function If(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(S,D,F){we.get(S.texture).__webglTexture=D,we.get(S.depthTexture).__webglTexture=F;let B=we.get(S);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=F===void 0,B.__autoAllocateDepthBuffer||Ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,D){let F=we.get(S);F.__webglFramebuffer=D,F.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(S,D=0,F=0){C=S,A=D,R=F;let B=!0,N=null,ee=!1,ue=!1;if(S){let _e=we.get(S);if(_e.__useDefaultFramebuffer!==void 0)Ae.bindFramebuffer(U.FRAMEBUFFER,null),B=!1;else if(_e.__webglFramebuffer===void 0)T.setupRenderTarget(S);else if(_e.__hasExternalTextures)T.rebindTextures(S,we.get(S.texture).__webglTexture,we.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let ye=S.depthTexture;if(_e.__boundDepthTexture!==ye){if(ye!==null&&we.has(ye)&&(S.width!==ye.image.width||S.height!==ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(S)}}let Le=S.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(ue=!0);let Fe=we.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Fe[D])?N=Fe[D][F]:N=Fe[D],ee=!0):S.samples>0&&T.useMultisampledRTT(S)===!1?N=we.get(S).__webglMultisampledFramebuffer:Array.isArray(Fe)?N=Fe[F]:N=Fe,I.copy(S.viewport),z.copy(S.scissor),k=S.scissorTest}else I.copy(Ee).multiplyScalar(V).floor(),z.copy(Ve).multiplyScalar(V).floor(),k=ct;if(Ae.bindFramebuffer(U.FRAMEBUFFER,N)&&B&&Ae.drawBuffers(S,N),Ae.viewport(I),Ae.scissor(z),Ae.setScissorTest(k),ee){let _e=we.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+D,_e.__webglTexture,F)}else if(ue){let _e=we.get(S.texture),Le=D||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,_e.__webglTexture,F||0,Le)}E=-1},this.readRenderTargetPixels=function(S,D,F,B,N,ee,ue){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=we.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ue!==void 0&&(xe=xe[ue]),xe){Ae.bindFramebuffer(U.FRAMEBUFFER,xe);try{let _e=S.texture,Le=_e.format,Fe=_e.type;if(!$e.textureFormatReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$e.textureTypeReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=S.width-B&&F>=0&&F<=S.height-N&&U.readPixels(D,F,B,N,ke.convert(Le),ke.convert(Fe),ee)}finally{let _e=C!==null?we.get(C).__webglFramebuffer:null;Ae.bindFramebuffer(U.FRAMEBUFFER,_e)}}},this.readRenderTargetPixelsAsync=async function(S,D,F,B,N,ee,ue){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=we.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ue!==void 0&&(xe=xe[ue]),xe){let _e=S.texture,Le=_e.format,Fe=_e.type;if(!$e.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$e.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=S.width-B&&F>=0&&F<=S.height-N){Ae.bindFramebuffer(U.FRAMEBUFFER,xe);let ye=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ye),U.bufferData(U.PIXEL_PACK_BUFFER,ee.byteLength,U.STREAM_READ),U.readPixels(D,F,B,N,ke.convert(Le),ke.convert(Fe),0);let Qe=C!==null?we.get(C).__webglFramebuffer:null;Ae.bindFramebuffer(U.FRAMEBUFFER,Qe);let ht=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Np(U,ht,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ye),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ee),U.deleteBuffer(ye),U.deleteSync(ht),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,D=null,F=0){S.isTexture!==!0&&(nr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,S=arguments[1]);let B=Math.pow(2,-F),N=Math.floor(S.image.width*B),ee=Math.floor(S.image.height*B),ue=D!==null?D.x:0,xe=D!==null?D.y:0;T.setTexture2D(S,0),U.copyTexSubImage2D(U.TEXTURE_2D,F,0,0,ue,xe,N,ee),Ae.unbindTexture()},this.copyTextureToTexture=function(S,D,F=null,B=null,N=0){S.isTexture!==!0&&(nr("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,S=arguments[1],D=arguments[2],N=arguments[3]||0,F=null);let ee,ue,xe,_e,Le,Fe,ye,Qe,ht,ft=S.isCompressedTexture?S.mipmaps[N]:S.image;F!==null?(ee=F.max.x-F.min.x,ue=F.max.y-F.min.y,xe=F.isBox3?F.max.z-F.min.z:1,_e=F.min.x,Le=F.min.y,Fe=F.isBox3?F.min.z:0):(ee=ft.width,ue=ft.height,xe=ft.depth||1,_e=0,Le=0,Fe=0),B!==null?(ye=B.x,Qe=B.y,ht=B.z):(ye=0,Qe=0,ht=0);let Zt=ke.convert(D.format),tt=ke.convert(D.type),be;D.isData3DTexture?(T.setTexture3D(D,0),be=U.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(T.setTexture2DArray(D,0),be=U.TEXTURE_2D_ARRAY):(T.setTexture2D(D,0),be=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,D.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,D.unpackAlignment);let Fn=U.getParameter(U.UNPACK_ROW_LENGTH),nt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),vn=U.getParameter(U.UNPACK_SKIP_PIXELS),Zi=U.getParameter(U.UNPACK_SKIP_ROWS),nn=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,ft.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ft.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,_e),U.pixelStorei(U.UNPACK_SKIP_ROWS,Le),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Fe);let Gs=S.isDataArrayTexture||S.isData3DTexture,pt=D.isDataArrayTexture||D.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){let Rn=we.get(S),Ws=we.get(D),ln=we.get(Rn.__renderTarget),si=we.get(Ws.__renderTarget);Ae.bindFramebuffer(U.READ_FRAMEBUFFER,ln.__webglFramebuffer),Ae.bindFramebuffer(U.DRAW_FRAMEBUFFER,si.__webglFramebuffer);for(let ri=0;ri<xe;ri++)Gs&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,we.get(S).__webglTexture,N,Fe+ri),S.isDepthTexture?(pt&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,we.get(D).__webglTexture,N,ht+ri),U.blitFramebuffer(_e,Le,ee,ue,ye,Qe,ee,ue,U.DEPTH_BUFFER_BIT,U.NEAREST)):pt?U.copyTexSubImage3D(be,N,ye,Qe,ht+ri,_e,Le,ee,ue):U.copyTexSubImage2D(be,N,ye,Qe,ht+ri,_e,Le,ee,ue);Ae.bindFramebuffer(U.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else pt?S.isDataTexture||S.isData3DTexture?U.texSubImage3D(be,N,ye,Qe,ht,ee,ue,xe,Zt,tt,ft.data):D.isCompressedArrayTexture?U.compressedTexSubImage3D(be,N,ye,Qe,ht,ee,ue,xe,Zt,ft.data):U.texSubImage3D(be,N,ye,Qe,ht,ee,ue,xe,Zt,tt,ft):S.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,N,ye,Qe,ee,ue,Zt,tt,ft.data):S.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,N,ye,Qe,ft.width,ft.height,Zt,ft.data):U.texSubImage2D(U.TEXTURE_2D,N,ye,Qe,ee,ue,Zt,tt,ft);U.pixelStorei(U.UNPACK_ROW_LENGTH,Fn),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,nt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,vn),U.pixelStorei(U.UNPACK_SKIP_ROWS,Zi),U.pixelStorei(U.UNPACK_SKIP_IMAGES,nn),N===0&&D.generateMipmaps&&U.generateMipmap(be),Ae.unbindTexture()},this.copyTextureToTexture3D=function(S,D,F=null,B=null,N=0){return S.isTexture!==!0&&(nr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,B=arguments[1]||null,S=arguments[2],D=arguments[3],N=arguments[4]||0),nr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,D,F,B,N)},this.initRenderTarget=function(S){we.get(S).__webglFramebuffer===void 0&&T.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?T.setTextureCube(S,0):S.isData3DTexture?T.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?T.setTexture2DArray(S,0):T.setTexture2D(S,0),Ae.unbindTexture()},this.resetState=function(){A=0,R=0,C=null,Ae.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=Xe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Xe._getUnpackColorSpace()}},Ro=class s{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Te(e),this.density=t}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Co=class extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentIntensity=1,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ls=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Oc,this.updateRanges=[],this.version=0,this.uuid=wn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Gt=new w,ki=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=En(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=st(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=En(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=En(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=En(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=En(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array),r=st(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new St(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},pr=class extends Qt{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},hs,Zs=new w,us=new w,ds=new w,fs=new se,Ks=new se,Id=new De,eo=new w,Js=new w,to=new w,Bu=new se,Wa=new se,ku=new se,Io=class extends gt{constructor(e=new pr){if(super(),this.isSprite=!0,this.type="Sprite",hs===void 0){hs=new vt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ls(t,5);hs.setIndex([0,1,2,0,2,3]),hs.setAttribute("position",new ki(n,3,0,!1)),hs.setAttribute("uv",new ki(n,2,3,!1))}this.geometry=hs,this.material=e,this.center=new se(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),us.setFromMatrixScale(this.matrixWorld),Id.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ds.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&us.multiplyScalar(-ds.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;no(eo.set(-.5,-.5,0),ds,o,us,i,r),no(Js.set(.5,-.5,0),ds,o,us,i,r),no(to.set(.5,.5,0),ds,o,us,i,r),Bu.set(0,0),Wa.set(1,0),ku.set(1,1);let a=e.ray.intersectTriangle(eo,Js,to,!1,Zs);if(a===null&&(no(Js.set(-.5,.5,0),ds,o,us,i,r),Wa.set(0,1),a=e.ray.intersectTriangle(eo,to,Js,!1,Zs),a===null))return;let c=e.ray.origin.distanceTo(Zs);c<e.near||c>e.far||t.push({distance:c,point:Zs.clone(),uv:fi.getInterpolation(Zs,eo,Js,to,Bu,Wa,ku,new se),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function no(s,e,t,n,i,r){fs.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Ks.x=r*fs.x-i*fs.y,Ks.y=i*fs.x+r*fs.y):Ks.copy(fs),s.copy(e),s.x+=Ks.x,s.y+=Ks.y,s.applyMatrix4(Id)}var zu=new w,Hu=new et,Vu=new et,I_=new w,Gu=new De,io=new w,Xa=new on,Wu=new De,qa=new Cs,Po=class extends te{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Hh,this.bindMatrix=new De,this.bindMatrixInverse=new De,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new jt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,io),this.boundingBox.expandByPoint(io)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new on),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,io),this.boundingSphere.expandByPoint(io)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xa.copy(this.boundingSphere),Xa.applyMatrix4(i),e.ray.intersectsSphere(Xa)!==!1&&(Wu.copy(i).invert(),qa.copy(e.ray).applyMatrix4(Wu),!(this.boundingBox!==null&&qa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,qa)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new et,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Hh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===rp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Hu.fromBufferAttribute(i.attributes.skinIndex,e),Vu.fromBufferAttribute(i.attributes.skinWeight,e),zu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=Vu.getComponent(r);if(o!==0){let a=Hu.getComponent(r);Gu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(I_.copy(zu).applyMatrix4(Gu),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},mr=class extends gt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Lo=class extends It{constructor(e=null,t=1,n=1,i,r,o,a,c,l=zt,h=zt,u,d){super(null,o,a,c,l,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Xu=new De,P_=new De,Do=class s{constructor(e=[],t=[]){this.uuid=wn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new De)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new De;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:P_;Xu.multiplyMatrices(a,t[r]),Xu.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Lo(t,e,e,un,Tn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new mr),this.bones.push(o),this.boneInverses.push(new De().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},zi=class extends St{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ps=new De,qu=new De,so=[],Yu=new jt,L_=new De,js=new te,Qs=new on,No=class extends te{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new zi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,L_)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new jt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ps),Yu.copy(e.boundingBox).applyMatrix4(ps),this.boundingBox.union(Yu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new on),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ps),Qs.copy(e.boundingSphere).applyMatrix4(ps),this.boundingSphere.union(Qs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(js.geometry=this.geometry,js.material=this.material,js.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qs.copy(this.boundingSphere),Qs.applyMatrix4(n),e.ray.intersectsSphere(Qs)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ps),qu.multiplyMatrices(n,ps),js.matrixWorld=qu,js.raycast(e,so);for(let o=0,a=so.length;o<a;o++){let c=so[o];c.instanceId=r,c.object=this,t.push(c)}so.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new zi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Lo(new Float32Array(i*this.count),i,this.count,wl,Tn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Ds=class extends Qt{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Uo=new w,Oo=new w,$u=new De,er=new Cs,ro=new on,Ya=new w,Zu=new w,_i=class extends gt{constructor(e=new vt,t=new Ds){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Uo.fromBufferAttribute(t,i-1),Oo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Uo.distanceTo(Oo);e.setAttribute("lineDistance",new je(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ro.copy(n.boundingSphere),ro.applyMatrix4(i),ro.radius+=r,e.ray.intersectsSphere(ro)===!1)return;$u.copy(i).invert(),er.copy(e.ray).applyMatrix4($u);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=l){let p=h.getX(x),y=h.getX(x+1),b=oo(this,e,er,c,p,y);b&&t.push(b)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(f),p=oo(this,e,er,c,x,m);p&&t.push(p)}}else{let f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=l){let p=oo(this,e,er,c,x,x+1);p&&t.push(p)}if(this.isLineLoop){let x=oo(this,e,er,c,g-1,f);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function oo(s,e,t,n,i,r){let o=s.geometry.attributes.position;if(Uo.fromBufferAttribute(o,i),Oo.fromBufferAttribute(o,r),t.distanceSqToSegment(Uo,Oo,Ya,Zu)>n)return;Ya.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Ya);if(!(c<e.near||c>e.far))return{distance:c,point:Zu.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}var Ku=new w,Ju=new w,Fo=class extends _i{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Ku.fromBufferAttribute(t,i),Ju.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ku.distanceTo(Ju);e.setAttribute("lineDistance",new je(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Bo=class extends _i{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},gr=class extends Qt{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ju=new De,Qc=new Cs,ao=new on,co=new w,ko=class extends gt{constructor(e=new vt,t=new gr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ao.copy(n.boundingSphere),ao.applyMatrix4(i),ao.radius+=r,e.ray.intersectsSphere(ao)===!1)return;ju.copy(i).invert(),Qc.copy(e.ray).applyMatrix4(ju);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,x=f;g<x;g++){let m=l.getX(g);co.fromBufferAttribute(u,m),Qu(co,m,c,i,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,x=f;g<x;g++)co.fromBufferAttribute(u,g),Qu(co,g,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Qu(s,e,t,n,i,r,o){let a=Qc.distanceSqToPoint(s);if(a<t){let c=new w;Qc.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Hi=class extends It{constructor(e,t,n,i,r,o,a,c,l){super(e,t,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},fn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);let h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),c=t||(o.isVector2?new se:new w);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new w,i=[],r=[],o=[],a=new w,c=new De;for(let f=0;f<=e;f++){let g=f/e;i[f]=this.getTangentAt(g,new w)}r[0]=new w,o[0]=new w;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Tt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(Tt(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},xr=class extends fn{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new se){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},el=class extends xr{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Ll(){let s=0,e=0,t=0,n=0;function i(r,o,a,c){s=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return s+e*r+t*o+n*a}}}var lo=new w,$a=new Ll,Za=new Ll,Ka=new Ll,tl=class extends fn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new w){let n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%r]:(lo.subVectors(i[0],i[1]).add(i[0]),l=lo);let u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(lo.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=lo),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),$a.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,x,m),Za.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,x,m),Ka.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&($a.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Za.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Ka.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set($a.calc(c),Za.calc(c),Ka.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new w().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ed(s,e,t,n,i){let r=(n-e)*.5,o=(i-t)*.5,a=s*s,c=s*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*s+t}function D_(s,e){let t=1-s;return t*t*e}function N_(s,e){return 2*(1-s)*s*e}function U_(s,e){return s*s*e}function cr(s,e,t,n){return D_(s,e)+N_(s,t)+U_(s,n)}function O_(s,e){let t=1-s;return t*t*t*e}function F_(s,e){let t=1-s;return 3*t*t*s*e}function B_(s,e){return 3*(1-s)*s*s*e}function k_(s,e){return s*s*s*e}function lr(s,e,t,n,i){return O_(s,e)+F_(s,t)+B_(s,n)+k_(s,i)}var zo=class extends fn{constructor(e=new se,t=new se,n=new se,i=new se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new se){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(lr(e,i.x,r.x,o.x,a.x),lr(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},nl=class extends fn{constructor(e=new w,t=new w,n=new w,i=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new w){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(lr(e,i.x,r.x,o.x,a.x),lr(e,i.y,r.y,o.y,a.y),lr(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ho=class extends fn{constructor(e=new se,t=new se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new se){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},il=class extends fn{constructor(e=new w,t=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new w){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new w){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Vo=class extends fn{constructor(e=new se,t=new se,n=new se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new se){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(cr(e,i.x,r.x,o.x),cr(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},sl=class extends fn{constructor(e=new w,t=new w,n=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new w){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(cr(e,i.x,r.x,o.x),cr(e,i.y,r.y,o.y),cr(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Go=class extends fn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new se){let n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(ed(a,c.x,l.x,h.x,u.x),ed(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new se().fromArray(i))}return this}},td=Object.freeze({__proto__:null,ArcCurve:el,CatmullRomCurve3:tl,CubicBezierCurve:zo,CubicBezierCurve3:nl,EllipseCurve:xr,LineCurve:Ho,LineCurve3:il,QuadraticBezierCurve:Vo,QuadraticBezierCurve3:sl,SplineCurve:Go}),rl=class extends fn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new td[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new td[i.type]().fromJSON(i))}return this}},ol=class extends rl{constructor(e){super(),this.type="Path",this.currentPoint=new se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ho(this.currentPoint.clone(),new se(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new Vo(this.currentPoint.clone(),new se(e,t),new se(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){let a=new zo(this.currentPoint.clone(),new se(e,t),new se(n,i),new se(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Go(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,r,o,a,c),this}absellipse(e,t,n,i,r,o,a,c){let l=new xr(e,t,n,i,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},al=class s extends vt{constructor(e=[new se(0,-.5),new se(.5,0),new se(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Tt(i,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/t,u=new w,d=new se,f=new w,g=new w,x=new w,m=0,p=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,f.x=p*1,f.y=-m,f.z=p*0,x.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(x.x,x.y,x.z);break;default:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),c.push(f.x,f.y,f.z),x.copy(g)}for(let y=0;y<=t;y++){let b=n+y*h*i,_=Math.sin(b),P=Math.cos(b);for(let A=0;A<=e.length-1;A++){u.x=e[A].x*_,u.y=e[A].y,u.z=e[A].x*P,o.push(u.x,u.y,u.z),d.x=y/t,d.y=A/(e.length-1),a.push(d.x,d.y);let R=c[3*A+0]*_,C=c[3*A+1],E=c[3*A+0]*P;l.push(R,C,E)}}for(let y=0;y<t;y++)for(let b=0;b<e.length-1;b++){let _=b+y*e.length,P=_,A=_+e.length,R=_+e.length+1,C=_+1;r.push(P,A,C),r.push(R,C,A)}this.setIndex(r),this.setAttribute("position",new je(o,3)),this.setAttribute("uv",new je(a,2)),this.setAttribute("normal",new je(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.points,e.segments,e.phiStart,e.phiLength)}},_r=class s extends al{constructor(e=1,t=1,n=4,i=8){let r=new ol;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new s(e.radius,e.length,e.capSegments,e.radialSegments)}},jn=class s extends vt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new w,h=new se;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*i;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new je(o,3)),this.setAttribute("normal",new je(a,3)),this.setAttribute("uv",new je(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Nt=class s extends vt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,x=[],m=n/2,p=0;y(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new je(u,3)),this.setAttribute("normal",new je(d,3)),this.setAttribute("uv",new je(f,2));function y(){let _=new w,P=new w,A=0,R=(t-e)/n;for(let C=0;C<=r;C++){let E=[],M=C/r,I=M*(t-e)+e;for(let z=0;z<=i;z++){let k=z/i,G=k*c+a,K=Math.sin(G),W=Math.cos(G);P.x=I*K,P.y=-M*n+m,P.z=I*W,u.push(P.x,P.y,P.z),_.set(K,R,W).normalize(),d.push(_.x,_.y,_.z),f.push(k,1-M),E.push(g++)}x.push(E)}for(let C=0;C<i;C++)for(let E=0;E<r;E++){let M=x[E][C],I=x[E+1][C],z=x[E+1][C+1],k=x[E][C+1];(e>0||E!==0)&&(h.push(M,I,k),A+=3),(t>0||E!==r-1)&&(h.push(I,z,k),A+=3)}l.addGroup(p,A,0),p+=A}function b(_){let P=g,A=new se,R=new w,C=0,E=_===!0?e:t,M=_===!0?1:-1;for(let z=1;z<=i;z++)u.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;let I=g;for(let z=0;z<=i;z++){let G=z/i*c+a,K=Math.cos(G),W=Math.sin(G);R.x=E*W,R.y=m*M,R.z=E*K,u.push(R.x,R.y,R.z),d.push(0,M,0),A.x=K*.5+.5,A.y=W*.5*M+.5,f.push(A.x,A.y),g++}for(let z=0;z<i;z++){let k=P+z,G=I+z;_===!0?h.push(G,G+1,k):h.push(G+1,G,k),C+=3}l.addGroup(p,C,_===!0?1:2),p+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Vi=class s extends Nt{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},cl=class s extends vt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],o=[];a(i),l(n),h(),this.setAttribute("position",new je(r,3)),this.setAttribute("normal",new je(r.slice(),3)),this.setAttribute("uv",new je(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let b=new w,_=new w,P=new w;for(let A=0;A<t.length;A+=3)f(t[A+0],b),f(t[A+1],_),f(t[A+2],P),c(b,_,P,y)}function c(y,b,_,P){let A=P+1,R=[];for(let C=0;C<=A;C++){R[C]=[];let E=y.clone().lerp(_,C/A),M=b.clone().lerp(_,C/A),I=A-C;for(let z=0;z<=I;z++)z===0&&C===A?R[C][z]=E:R[C][z]=E.clone().lerp(M,z/I)}for(let C=0;C<A;C++)for(let E=0;E<2*(A-C)-1;E++){let M=Math.floor(E/2);E%2===0?(d(R[C][M+1]),d(R[C+1][M]),d(R[C][M])):(d(R[C][M+1]),d(R[C+1][M+1]),d(R[C+1][M]))}}function l(y){let b=new w;for(let _=0;_<r.length;_+=3)b.x=r[_+0],b.y=r[_+1],b.z=r[_+2],b.normalize().multiplyScalar(y),r[_+0]=b.x,r[_+1]=b.y,r[_+2]=b.z}function h(){let y=new w;for(let b=0;b<r.length;b+=3){y.x=r[b+0],y.y=r[b+1],y.z=r[b+2];let _=m(y)/2/Math.PI+.5,P=p(y)/Math.PI+.5;o.push(_,1-P)}g(),u()}function u(){for(let y=0;y<o.length;y+=6){let b=o[y+0],_=o[y+2],P=o[y+4],A=Math.max(b,_,P),R=Math.min(b,_,P);A>.9&&R<.1&&(b<.2&&(o[y+0]+=1),_<.2&&(o[y+2]+=1),P<.2&&(o[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,b){let _=y*3;b.x=e[_+0],b.y=e[_+1],b.z=e[_+2]}function g(){let y=new w,b=new w,_=new w,P=new w,A=new se,R=new se,C=new se;for(let E=0,M=0;E<r.length;E+=9,M+=6){y.set(r[E+0],r[E+1],r[E+2]),b.set(r[E+3],r[E+4],r[E+5]),_.set(r[E+6],r[E+7],r[E+8]),A.set(o[M+0],o[M+1]),R.set(o[M+2],o[M+3]),C.set(o[M+4],o[M+5]),P.copy(y).add(b).add(_).divideScalar(3);let I=m(P);x(A,M+0,y,I),x(R,M+2,b,I),x(C,M+4,_,I)}}function x(y,b,_,P){P<0&&y.x===1&&(o[b]=y.x-1),_.x===0&&_.z===0&&(o[b]=P/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.details)}};var yr=class s extends cl{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var vr=class s extends vt{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],c=[],l=[],h=[],u=e,d=(t-e)/i,f=new w,g=new se;for(let x=0;x<=i;x++){for(let m=0;m<=n;m++){let p=r+m/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<i;x++){let m=x*(n+1);for(let p=0;p<n;p++){let y=p+m,b=y,_=y+n+1,P=y+n+2,A=y+1;a.push(b,_,A),a.push(_,P,A)}}this.setIndex(a),this.setAttribute("position",new je(c,3)),this.setAttribute("normal",new je(l,3)),this.setAttribute("uv",new je(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Ut=class s extends vt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new w,d=new w,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let y=[],b=p/n,_=0;p===0&&o===0?_=.5/t:p===n&&c===Math.PI&&(_=-.5/t);for(let P=0;P<=t;P++){let A=P/t;u.x=-e*Math.cos(i+A*r)*Math.sin(o+b*a),u.y=e*Math.cos(o+b*a),u.z=e*Math.sin(i+A*r)*Math.sin(o+b*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(A+_,1-b),y.push(l++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){let b=h[p][y+1],_=h[p][y],P=h[p+1][y],A=h[p+1][y+1];(p!==0||o>0)&&f.push(b,_,A),(p!==n-1||c<Math.PI)&&f.push(_,P,A)}this.setIndex(f),this.setAttribute("position",new je(g,3)),this.setAttribute("normal",new je(x,3)),this.setAttribute("uv",new je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Wo=class s extends vt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],c=[],l=[],h=new w,u=new w,d=new w;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){let x=g/i*r,m=f/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(x),u.y=(e+t*Math.cos(m))*Math.sin(x),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){let x=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,y=(i+1)*f+g;o.push(x,m,y),o.push(m,p,y)}this.setIndex(o),this.setAttribute("position",new je(a,3)),this.setAttribute("normal",new je(c,3)),this.setAttribute("uv",new je(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Ht=class extends Qt{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yd,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},an=class extends Ht{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new se(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Tt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Xo=class extends Ds{static get type(){return"LineDashedMaterial"}constructor(e){super(),this.isLineDashedMaterial=!0,this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function ho(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function z_(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function H_(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function nd(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function Pd(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}var yi=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ll=class extends yi{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vh,endingEnd:Vh}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Gh:r=e,a=2*t-n;break;case Wh:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Gh:o=e,c=2*n-t;break;case Wh:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,y=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,b=(-1-f)*m+(1.5+f)*x+.5*g,_=f*m-f*x;for(let P=0;P!==a;++P)r[P]=p*o[h+P]+y*o[l+P]+b*o[c+P]+_*o[u+P];return r}},hl=class extends yi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},ul=class extends yi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},pn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ho(t,this.TimeBufferType),this.values=ho(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ho(e.times,Array),values:ho(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ul(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new hl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ll(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ws:t=this.InterpolantFactoryMethodDiscrete;break;case As:t=this.InterpolantFactoryMethodLinear;break;case xa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ws;case this.InterpolantFactoryMethodLinear:return As;case this.InterpolantFactoryMethodSmooth:return xa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&z_(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===xa,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(i)c=!0;else{let u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let x=t[u+g];if(x!==t[d+g]||x!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};pn.prototype.TimeBufferType=Float32Array;pn.prototype.ValueBufferType=Float32Array;pn.prototype.DefaultInterpolation=As;var vi=class extends pn{constructor(e,t,n){super(e,t,n)}};vi.prototype.ValueTypeName="bool";vi.prototype.ValueBufferType=Array;vi.prototype.DefaultInterpolation=ws;vi.prototype.InterpolantFactoryMethodLinear=void 0;vi.prototype.InterpolantFactoryMethodSmooth=void 0;var qo=class extends pn{};qo.prototype.ValueTypeName="color";var Qn=class extends pn{};Qn.prototype.ValueTypeName="number";var dl=class extends yi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t),l=e*a;for(let h=l+a;l!==h;l+=4)An.slerpFlat(r,0,o,l-a,o,l,c);return r}},ei=class extends pn{InterpolantFactoryMethodLinear(e){return new dl(this.times,this.values,this.getValueSize(),e)}};ei.prototype.ValueTypeName="quaternion";ei.prototype.InterpolantFactoryMethodSmooth=void 0;var Mi=class extends pn{constructor(e,t,n){super(e,t,n)}};Mi.prototype.ValueTypeName="string";Mi.prototype.ValueBufferType=Array;Mi.prototype.DefaultInterpolation=ws;Mi.prototype.InterpolantFactoryMethodLinear=void 0;Mi.prototype.InterpolantFactoryMethodSmooth=void 0;var ti=class extends pn{};ti.prototype.ValueTypeName="vector";var Yo=class{constructor(e="",t=-1,n=[],i=op){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=wn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(G_(n[o]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(pn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=H_(c);c=nd(c,1,h),l=nd(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Qn(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=i[u];d||(i[u]=d=[]),d.push(l)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,f,g,x){if(f.length!==0){let m=[],p=[];Pd(f,m,p,g),m.length!==0&&x.push(new u(d,m,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let x=0;x<d[g].morphTargets.length;x++)f[d[g].morphTargets[x]]=-1;for(let x in f){let m=[],p=[];for(let y=0;y!==d[g].morphTargets.length;++y){let b=d[g];m.push(b.time),p.push(b.morphTarget===x?1:0)}i.push(new Qn(".morphTargetInfluence["+x+"]",m,p))}c=f.length*o}else{let f=".bones["+t[u].name+"]";n(ti,f+".position",d,"pos",i),n(ei,f+".quaternion",d,"rot",i),n(ti,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function V_(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Qn;case"vector":case"vector2":case"vector3":case"vector4":return ti;case"color":return qo;case"quaternion":return ei;case"bool":case"boolean":return vi;case"string":return Mi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function G_(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=V_(s.type);if(s.times===void 0){let t=[],n=[];Pd(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var pi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},fl=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},W_=new fl,ni=class{constructor(e){this.manager=e!==void 0?e:W_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};ni.DEFAULT_MATERIAL_NAME="__DEFAULT";var Gn={},pl=class extends Error{constructor(e,t){super(e),this.response=t}},Mr=class extends ni{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=pi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Gn[e]!==void 0){Gn[e].push({onLoad:t,onProgress:n,onError:i});return}Gn[e]=[],Gn[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Gn[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,x=0,m=new ReadableStream({start(p){y();function y(){u.read().then(({done:b,value:_})=>{if(b)p.close();else{x+=_.byteLength;let P=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let A=0,R=h.length;A<R;A++){let C=h[A];C.onProgress&&C.onProgress(P)}p.enqueue(_),y()}},b=>{p.error(b)})}}});return new Response(m)}else throw new pl(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{pi.add(e,l);let h=Gn[e];delete Gn[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=Gn[e];if(h===void 0)throw this.manager.itemError(e),l;delete Gn[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var ml=class extends ni{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=pi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=dr("img");function c(){h(),pi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var $o=class extends ni{constructor(e){super(e)}load(e,t,n,i){let r=new It,o=new ml(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},Ns=class extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Zo=class extends Ns{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Te(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Ja=new De,id=new w,sd=new w,Sr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new se(512,512),this.map=null,this.mapPass=null,this.matrix=new De,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fr,this._frameExtents=new se(1,1),this._viewportCount=1,this._viewports=[new et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;id.setFromMatrixPosition(e.matrixWorld),t.position.copy(id),sd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(sd),t.updateMatrixWorld(),Ja.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ja),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ja)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},gl=class extends Sr{constructor(){super(new wt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Rs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Ko=class extends Ns{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new gl}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},rd=new De,tr=new w,ja=new w,xl=class extends Sr{constructor(){super(new wt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new se(4,2),this._viewportCount=6,this._viewports=[new et(2,1,1,1),new et(0,1,1,1),new et(3,1,1,1),new et(1,1,1,1),new et(3,0,1,1),new et(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),tr.setFromMatrixPosition(e.matrixWorld),n.position.copy(tr),ja.copy(n.position),ja.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ja),n.updateMatrixWorld(),i.makeTranslation(-tr.x,-tr.y,-tr.z),rd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rd)}},Us=class extends Ns{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new xl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},_l=class extends Sr{constructor(){super(new Ps(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Gi=class extends Ns{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new _l}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Si=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Jo=class extends ni{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=pi.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return pi.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),pi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});pi.add(e,c),r.manager.itemStart(e)}};var Dl="\\[\\]\\.:\\/",X_=new RegExp("["+Dl+"]","g"),Nl="[^"+Dl+"]",q_="[^"+Dl.replace("\\.","")+"]",Y_=/((?:WC+[\/:])*)/.source.replace("WC",Nl),$_=/(WCOD+)?/.source.replace("WCOD",q_),Z_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Nl),K_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Nl),J_=new RegExp("^"+Y_+$_+Z_+K_+"$"),j_=["material","materials","bones","map"],yl=class{constructor(e,t,n){let i=n||ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ut=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(X_,"")}static parseTrackName(e){let t=J_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);j_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[i];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ut.Composite=yl;ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ut.prototype.GetterByBindingType=[ut.prototype._getValue_direct,ut.prototype._getValue_array,ut.prototype._getValue_arrayElement,ut.prototype._getValue_toArray];ut.prototype.SetterByBindingTypeAndVersioning=[[ut.prototype._setValue_direct,ut.prototype._setValue_direct_setNeedsUpdate,ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_array,ut.prototype._setValue_array_setNeedsUpdate,ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_arrayElement,ut.prototype._setValue_arrayElement_setNeedsUpdate,ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_fromArray,ut.prototype._setValue_fromArray_setNeedsUpdate,ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Gy=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var mn={prep:30,rush:150,startCash:120,customerStep:6,patienceStep:5,rentStep:10,utilities:10,prepSkip:!0},en={easy:{key:"easy",name:"\u60A0\u95F2",tag:"\u6162\u4E00\u70B9\uFF0C\u4E5F\u80FD\u6D3B",desc:"\u5BA2\u4EBA\u5C11\u56DB\u5206\u4E4B\u4E00\uFF0C\u8010\u5FC3\u591A\u4E24\u6210\uFF0C\u98DF\u7269\u53D8\u8D28\u6162\u4E00\u534A\uFF0C\u6253\u626B\u4E0D\u6263\u58F0\u671B\u3002\u9002\u5408\u7B2C\u4E00\u6B21\u6446\u644A\u3002",customers:.75,patience:1.2,rent:.85,tip:1.15,burn:1.5,cleanPenalty:0},normal:{key:"normal",name:"\u6807\u51C6",tag:"\u539F\u6C41\u539F\u5473\u7684\u65E9\u9AD8\u5CF0",desc:"\u6309\u8FD9\u4E2A\u5730\u533A\u672C\u6765\u7684\u8282\u594F\u8425\u4E1A\uFF0C\u5BA2\u4EBA\u548C\u623F\u79DF\u90FD\u4E0D\u6253\u6298\u3002",customers:1,patience:1,rent:1,tip:1,burn:1,cleanPenalty:1},hard:{key:"hard",name:"\u786C\u6838",tag:"\u4E00\u79D2\u90FD\u4E0D\u80FD\u505C",desc:"\u5BA2\u4EBA\u591A\u56DB\u5206\u4E4B\u4E00\uFF0C\u8010\u5FC3\u53EA\u5269\u516B\u6210\uFF0C\u623F\u79DF\u66F4\u8D35\u2014\u2014\u4F46\u5C0F\u8D39\u4E5F\u66F4\u9AD8\u3002",customers:1.25,patience:.8,rent:1.15,tip:1.4,burn:1,cleanPenalty:1}},gn={short:{key:"short",name:"\u77ED\u573A",tag:"2 \u5206\u949F",rush:90,rent:.9,desc:"\u5907\u6599 30 \u79D2 + \u65E9\u9AD8\u5CF0 90 \u79D2\u3002\u9002\u5408\u6478\u7D22\u64CD\u4F5C\u3002"},normal:{key:"normal",name:"\u6807\u51C6",tag:"3 \u5206\u949F",rush:150,rent:1,desc:"\u5907\u6599 30 \u79D2 + \u65E9\u9AD8\u5CF0 150 \u79D2\u3002\u9ED8\u8BA4\u8282\u594F\u3002"},long:{key:"long",name:"\u957F\u573A",tag:"5 \u5206\u949F",rush:270,rent:1.2,desc:"\u5907\u6599 30 \u79D2 + \u65E9\u9AD8\u5CF0 270 \u79D2\u3002\u5BA2\u4EBA\u66F4\u4ECE\u5BB9\uFF0C\u623F\u79DF\u4E5F\u66F4\u9AD8\u3002"}},Pt={speed:7.2,lift:4,gravity:18,floorPenalty:2,trashReward:1,dirtyRepPenalty:3},Lt={soy:{id:"soy",name:"\u8C46\u6D46",role:"drink",kind:"cup",price:3,cost:.8,cook:8,capacity:4,burn:45,burnLabel:"\u51C9\u4E86",color:16050898},baozi:{id:"baozi",name:"\u5305\u5B50",role:"steam",kind:"bun",price:3,cost:1,cook:10,capacity:5,burn:100,burnLabel:"\u6CE1\u70C2\u4E86",color:16312776},youtiao:{id:"youtiao",name:"\u6CB9\u6761",role:"fry",kind:"stick",price:2,cost:.6,cook:6,capacity:4,burn:30,burnLabel:"\u70B8\u7CCA\u4E86",color:14262335},teaegg:{id:"teaegg",name:"\u8336\u53F6\u86CB",role:"boil",kind:"egg",price:2,cost:.5,cook:5,capacity:6,burn:120,burnLabel:"\u716E\u8001\u4E86",color:9067067},yacai:{id:"yacai",name:"\u82BD\u83DC\u5305\u5B50",role:"steam",kind:"bun",price:4,cost:1.2,cook:11,capacity:5,burn:90,burnLabel:"\u584C\u4E86",color:15983555},tangyou:{id:"tangyou",name:"\u7CD6\u6CB9\u679C\u5B50",role:"fry",kind:"ball",price:4,cost:.9,cook:7,capacity:4,burn:30,burnLabel:"\u7126\u4E86",color:11031852},dandan:{id:"dandan",name:"\u62C5\u62C5\u9762",role:"boil",kind:"bowl",price:8,cost:2.2,cook:9,capacity:3,burn:60,burnLabel:"\u5768\u4E86",color:12603439},changfen:{id:"changfen",name:"\u80A0\u7C89",role:"steam",kind:"roll",price:6,cost:1.6,cook:9,capacity:4,burn:70,burnLabel:"\u84B8\u70C2\u4E86",color:16249572},congee:{id:"congee",name:"\u8247\u4ED4\u7CA5",role:"boil",kind:"bowl",price:6,cost:1.4,cook:12,capacity:4,burn:55,burnLabel:"\u71AC\u5E72\u4E86",color:15392968},hongdou:{id:"hongdou",name:"\u94B5\u4ED4\u7CD5",role:"fry",kind:"ball",price:3,cost:.7,cook:8,capacity:5,burn:30,burnLabel:"\u714E\u8001\u4E86",color:11027258},yenai:{id:"yenai",name:"\u6930\u5976",role:"drink",kind:"cup",price:4,cost:1.1,cook:7,capacity:4,burn:50,burnLabel:"\u9178\u4E86",color:16511192},yezi:{id:"yezi",name:"\u6930\u5B50\u996D",role:"steam",kind:"bun",price:5,cost:1.6,cook:12,capacity:4,burn:120,burnLabel:"\u786C\u4E86",color:16183257},jiandui:{id:"jiandui",name:"\u714E\u5806",role:"fry",kind:"ball",price:3,cost:.8,cook:6,capacity:4,burn:30,burnLabel:"\u7126\u4E86",color:12945983},hainanfen:{id:"hainanfen",name:"\u6D77\u5357\u7C89",role:"boil",kind:"bowl",price:7,cost:1.9,cook:8,capacity:3,burn:55,burnLabel:"\u5768\u4E86",color:13350287},shandongbao:{id:"shandongbao",name:"\u5C71\u4E1C\u5927\u5305",role:"steam",kind:"bun",price:5,cost:1.4,cook:12,capacity:5,burn:110,burnLabel:"\u51C9\u4E86",color:15984335},jianbing:{id:"jianbing",name:"\u714E\u997C",role:"fry",kind:"bing",price:6,cost:1.2,cook:9,capacity:3,burn:30,burnLabel:"\u7CCA\u4E86",color:14263361},sangtang:{id:"sangtang",name:"\u7CC1\u6C64",role:"boil",kind:"bowl",price:8,cost:2,cook:10,capacity:4,burn:60,burnLabel:"\u51C9\u4E86",color:11565124},xiaolong:{id:"xiaolong",name:"\u5C0F\u7B3C\u5305",role:"steam",kind:"bun",price:6,cost:1.5,cook:11,capacity:5,burn:100,burnLabel:"\u51C9\u4E86",color:16182488},shengjian:{id:"shengjian",name:"\u751F\u714E",role:"fry",kind:"pan",price:5,cost:1.1,cook:8,capacity:4,burn:30,burnLabel:"\u7126\u4E86",color:14463859},duckblood:{id:"duckblood",name:"\u9E2D\u8840\u7C89\u4E1D\u6C64",role:"boil",kind:"bowl",price:9,cost:2.2,cook:9,capacity:4,burn:55,burnLabel:"\u5768\u4E86",color:9060143}},Ld=[{id:"drink",type:"machine",role:"drink",pos:[-2.4,-3.05]},{id:"steam",type:"machine",role:"steam",pos:[-.3,-3]},{id:"fry",type:"machine",role:"fry",pos:[2,-3]},{id:"boil",type:"machine",role:"boil",pos:[4.15,-3]},{id:"serve",type:"serve",name:"\u51FA\u9910\u7A97\u53E3",pos:[3.1,2.5]},{id:"trash",type:"trash",name:"\u5783\u573E\u6876",pos:[-4.3,1.7]}],Q_={key:"base",patienceMul:1,name:"\u5DF7\u53E3\u65E9\u9910",sub:"\u5DF7\u53E3\u65E9\u9910 \xB7 THREE.JS \u5782\u76F4\u5207\u7247 v0.2",tagline:"\u8C46\u6D46\u3001\u5305\u5B50\u3001\u6CB9\u6761\uFF0C\u6700\u7A33\u7684\u4E00\u53E3\u3002",desc:"\u516D\u70B9\u56DB\u5341\u4E94\uFF0C\u5377\u5E18\u95E8\u62C9\u5F00\u3002\u56DB\u53E3\u9505\u3001\u4E00\u4E2A\u7A97\u53E3\u3001\u4E00\u6761\u8857\u7684\u56F0\u610F\u2014\u2014\u90FD\u7B49\u7740\u4F60\u5582\u9971\u3002",goal:"\u76EE\u6807\uFF1A\u6491\u8FC7 18 \u4F4D\u5BA2\u4EBA\u7684\u65E9\u9AD8\u5CF0\uFF0C\u4EA4\u5B8C\u623F\u79DF\u6C34\u7535\uFF0C\u522B\u8BA9\u73B0\u91D1\u53D8\u6210\u8D1F\u6570\u3002",difficulty:"\u6807\u51C6",sign:{title:"\u5DF7\u53E3\u65E9\u9910",sub:"ZAO GAO FENG \xB7 6:00\u20149:30",bg:"#a9382b"},awning:["#f2e3c8","#b8463a"],broth:7031338,menu:["soy","baozi","youtiao","teaegg"],stationNames:{drink:"\u8C46\u6D46\u673A",steam:"\u84B8\u7B3C",fry:"\u6CB9\u9505",boil:"\u6C64\u9505"},stationRecipes:{drink:"soy",steam:"baozi",fry:"youtiao",boil:"teaegg"},day:{customers:18,patience:60,rent:60},hint:"\u5907\u6599\u65F6\u95F4\uFF1A\u5148\u5728\u84B8\u7B3C\u3001\u6CB9\u9505\u3001\u8C46\u6D46\u673A\u3001\u6C64\u9505\u524D\u6309 E \u63D0\u524D\u505A\u4E00\u6279\uFF0C\u5BA2\u4EBA 7 \u70B9\u5C31\u5230\u3002"},Ot={base:Q_,sichuan:{key:"sichuan",patienceMul:.95,name:"\u8700\u9999\u65E9\u70B9",sub:"\u56DB\u5DDD\u65E9\u9910 \xB7 \u7EA2\u6CB9\u4E0E\u82B1\u6912\u5473\u7684\u6E05\u6668",tagline:"\u82BD\u83DC\u5305\u5B50\u914D\u62C5\u62C5\u9762\uFF0C\u7EA2\u6CB9\u8981\u4EAE\u3002",desc:"\u6210\u90FD\u5DF7\u5B50\u91CC\u7684\u6E05\u6668\uFF1A\u84B8\u7B3C\u767D\u6C7D\u6DF7\u7740\u7EA2\u6CB9\u9999\uFF0C\u4E00\u7897\u62C5\u62C5\u9762\u4E0B\u809A\uFF0C\u624D\u6709\u529B\u6C14\u6324\u65E9\u9AD8\u5CF0\u3002",goal:"\u76EE\u6807\uFF1A20 \u4F4D\u5BA2\u4EBA\u5634\u66F4\u6025\u3001\u8010\u5FC3\u66F4\u77ED\uFF0C\u4F46\u5BA2\u5355\u4EF7\u66F4\u9AD8\u3002",difficulty:"\u504F\u96BE \xB7 \u5BA2\u5355\u4EF7\u9AD8",sign:{title:"\u8700\u9999\u65E9\u70B9",sub:"SHU XIANG \xB7 6:00\u20149:30",bg:"#9e3524"},awning:["#f4e2c2","#a33b2b"],broth:8007455,menu:["soy","yacai","tangyou","dandan"],stationNames:{drink:"\u8C46\u6D46\u673A",steam:"\u84B8\u7B3C",fry:"\u6CB9\u9505",boil:"\u9762\u9505"},stationRecipes:{drink:"soy",steam:"yacai",fry:"tangyou",boil:"dandan"},day:{customers:20,patience:60,rent:66},hint:"\u56DB\u5DDD\u7684\u5BA2\u4EBA\u6027\u5B50\u6025\uFF1A\u5148\u5907\u4E00\u9505\u62C5\u62C5\u9762\uFF0C\u82BD\u83DC\u5305\u5B50\u4E5F\u522B\u65AD\u6863\u3002"},hainan:{key:"hainan",patienceMul:1.1,patienceTag:"\u8010\u5FC3 +10%",name:"\u6930\u57CE\u65E9\u8336",sub:"\u6D77\u5357\u65E9\u9910 \xB7 \u6930\u5976\u4E0E\u7C89\u7684\u6162\u6E05\u6668",tagline:"\u6930\u5976\u3001\u6930\u5B50\u996D\u3001\u6D77\u5357\u7C89\uFF0C\u6162\u6162\u5403\u3002",desc:"\u6D77\u53E3\u9A91\u697C\u4E0B\u7684\u65E9\u8336\u644A\uFF1A\u4E00\u7897\u814C\u7C89\u3001\u4E00\u676F\u6930\u5976\uFF0C\u5BA2\u4EBA\u7684\u8010\u5FC3\u6BD4\u522B\u5904\u90FD\u957F\u3002",goal:"\u76EE\u6807\uFF1A16 \u4F4D\u5BA2\u4EBA\uFF0C\u8010\u5FC3\u66F4\u8DB3\u3001\u5B9A\u4EF7\u66F4\u9AD8\uFF0C\u9002\u5408\u7EC3\u624B\u3002",difficulty:"\u8F7B\u677E \xB7 \u5BA2\u5355\u4EF7\u9AD8",sign:{title:"\u6930\u57CE\u65E9\u8336",sub:"YE CHENG \xB7 6:00\u20149:30",bg:"#1f6f6a"},awning:["#eaf0e3","#2c7d73"],broth:9067050,menu:["yenai","yezi","jiandui","hainanfen"],stationNames:{drink:"\u6930\u5976\u644A",steam:"\u84B8\u7B3C",fry:"\u6CB9\u9505",boil:"\u7C89\u9505"},stationRecipes:{drink:"yenai",steam:"yezi",fry:"jiandui",boil:"hainanfen"},day:{customers:16,patience:60,rent:56},hint:"\u6D77\u5357\u5BA2\u4EBA\u4E0D\u8D76\u65F6\u95F4\uFF1A\u5148\u628A\u6930\u5B50\u996D\u548C\u6D77\u5357\u7C89\u5907\u4E0A\uFF0C\u6162\u6162\u4EA4\u4ED8\u3002"},shandong:{key:"shandong",patienceMul:.95,name:"\u9F50\u9C81\u65E9\u70B9",sub:"\u5C71\u4E1C\u65E9\u9910 \xB7 \u93CA\u5B50\u4E0A\u7684\u6C82\u8499\u6E05\u6668",tagline:"\u714E\u997C\u5377\u5927\u8471\u3001\u7CC1\u6C64\u914D\u5927\u5305\uFF0C\u5B9E\u5B9E\u5728\u5728\u3002",desc:"\u6D4E\u5357\u8001\u5DF7\u7684\u6E05\u6668\uFF1A\u93CA\u5B50\u4E00\u644A\uFF0C\u714E\u997C\u8FB9\u89D2\u7FD8\u8D77\u7126\u9999\uFF1B\u7CC1\u6C64\u6EDA\u7740\u80E1\u6912\u5473\uFF0C\u4E00\u7897\u4E0B\u809A\u80FD\u9876\u5230\u664C\u5348\u3002",goal:"\u76EE\u6807\uFF1A21 \u4F4D\u5BA2\u4EBA\u3001\u5206\u91CF\u66F4\u5927\uFF0C\u714E\u997C\u5F97\u73B0\u644A\u73B0\u5377\u624D\u597D\u5403\u3002",difficulty:"\u504F\u96BE \xB7 \u91CF\u5927\u5B9E\u5728",sign:{title:"\u9F50\u9C81\u65E9\u70B9",sub:"QI LU \xB7 6:00\u20149:30",bg:"#26536b"},awning:["#eef0e6","#2f5d7c"],broth:9067051,menu:["soy","shandongbao","jianbing","sangtang"],stationNames:{drink:"\u8C46\u6D46\u673A",steam:"\u84B8\u7B3C",fry:"\u93CA\u5B50",boil:"\u7CC1\u6C64\u9505"},stationRecipes:{drink:"soy",steam:"shandongbao",fry:"jianbing",boil:"sangtang"},day:{customers:21,patience:60,rent:64},hint:"\u5C71\u4E1C\u5BA2\u4EBA\u8981\u5B9E\u5728\uFF1A\u5148\u644A\u51E0\u5F20\u714E\u997C\u3001\u84B8\u4E00\u7B3C\u5927\u5305\uFF0C\u7CC1\u6C64\u522B\u65AD\u706B\u3002"},guangdong:{key:"guangdong",patienceMul:1.1,patienceTag:"\u8010\u5FC3 +10%",name:"\u6995\u57CE\u65E9\u8336",sub:"\u5E7F\u4E1C\u65E9\u9910 \xB7 \u4E00\u76C5\u4E24\u4EF6\u7684\u9A91\u697C\u6E05\u6668",tagline:"\u80A0\u7C89\u3001\u8247\u4ED4\u7CA5\u3001\u94B5\u4ED4\u7CD5\uFF0C\u914D\u4E00\u676F\u8C46\u6D46\u3002",desc:"\u8001\u57CE\u9A91\u697C\u4E0B\uFF0C\u84B8\u67DC\u5192\u7740\u767D\u6C7D\uFF0C\u80A0\u7C89\u4E00\u62C9\u5C31\u8584\u3002\u963F\u5A46\u8981\u4E00\u7897\u8247\u4ED4\u7CA5\uFF0C\u540E\u751F\u4ED4\u53FC\u7740\u94B5\u4ED4\u7CD5\u8D76\u5DF4\u58EB\u3002",goal:"\u76EE\u6807\uFF1A22 \u4F4D\u5BA2\u4EBA\u3001\u70B9\u5355\u82B1\u6837\u591A\uFF0C\u522B\u8BA9\u84B8\u67DC\u7A7A\u7740\u3002",difficulty:"\u504F\u96BE \xB7 \u70B9\u5355\u82B1\u6837\u591A",sign:{title:"\u6995\u57CE\u65E9\u8336",sub:"RONG CHENG \xB7 6:00\u20149:30",bg:"#2f6b4f"},awning:["#f2f0e2","#3b7a58"],broth:9071162,menu:["soy","changfen","congee","hongdou"],stationNames:{drink:"\u8C46\u6D46\u673A",steam:"\u80A0\u7C89\u67DC",fry:"\u714E\u6863",boil:"\u7CA5\u9505"},stationRecipes:{drink:"soy",steam:"changfen",fry:"hongdou",boil:"congee"},day:{customers:22,patience:60,rent:63},hint:"\u5E7F\u4E1C\u5BA2\u4EBA\u8BB2\u65B0\u9C9C\uFF1A\u80A0\u7C89\u73B0\u62C9\u73B0\u51FA\uFF0C\u7CA5\u522B\u65AD\u706B\uFF0C\u94B5\u4ED4\u7CD5\u4E00\u6B21\u591A\u714E\u51E0\u4E2A\u3002"},jiangsu:{key:"jiangsu",patienceMul:1,name:"\u91D1\u9675\u65E9\u70B9",sub:"\u6C5F\u82CF\u65E9\u9910 \xB7 \u79E6\u6DEE\u6CB3\u8FB9\u7684\u65E9\u5E02",tagline:"\u5C0F\u7B3C\u5305\u3001\u751F\u714E\u3001\u9E2D\u8840\u7C89\u4E1D\u6C64\uFF0C\u6C64\u6C34\u8981\u70EB\u3002",desc:"\u5357\u4EAC\u7684\u6E05\u6668\uFF1A\u79E6\u6DEE\u6CB3\u4E0A\u96FE\u8FD8\u6CA1\u6563\uFF0C\u5C0F\u7B3C\u5305\u7684\u6C64\u5148\u70EB\u4E86\u5634\uFF0C\u9E2D\u8840\u7C89\u4E1D\u6C64\u6EDA\u7740\u9E2D\u6CB9\u9999\u3002",goal:"\u76EE\u6807\uFF1A20 \u4F4D\u5BA2\u4EBA\uFF0C\u6C64\u6C34\u8BB2\u7A76\u3001\u5BA2\u5355\u4EF7\u9AD8\uFF0C\u522B\u8BA9\u5C0F\u7B3C\u5305\u51C9\u5728\u7B3C\u91CC\u3002",difficulty:"\u6807\u51C6 \xB7 \u6C64\u6C34\u8BB2\u7A76",sign:{title:"\u91D1\u9675\u65E9\u70B9",sub:"JIN LING \xB7 6:00\u20149:30",bg:"#3b4a7a"},awning:["#eef0e6","#3d4f7d"],broth:8010287,menu:["soy","xiaolong","shengjian","duckblood"],stationNames:{drink:"\u8C46\u6D46\u673A",steam:"\u84B8\u7B3C",fry:"\u751F\u714E\u9505",boil:"\u9E2D\u8840\u6C64\u9505"},stationRecipes:{drink:"soy",steam:"xiaolong",fry:"shengjian",boil:"duckblood"},day:{customers:20,patience:60,rent:62},hint:"\u6C5F\u82CF\u5BA2\u4EBA\u8BB2\u7A76\u6C64\u6C34\uFF1A\u5C0F\u7B3C\u5305\u548C\u751F\u714E\u522B\u65AD\u6863\uFF0C\u9E2D\u8840\u7C89\u4E1D\u6C64\u8981\u70ED\u3002"}},Yt={speed:4.4,sprintSpeed:7.4,staminaMax:100,drain:14,regen:10,regenDelay:.5,radius:.34},Tr={url:"./assets/player.glb",height:1.72,rotationY:-Math.PI/2},ia={height:1.5,tints:["#ffffff","#cfe4ff","#ffdccf","#e6d6ff","#d2ffdf"]},Fs={maxActive:3,tipMax:3,repWin:1,repTimeout:-3},sa=[{from:0,to:.3,label:"\u7B2C\u4E00\u6CE2"},{from:.27,to:.73,label:"\u9AD8\u5CF0"},{from:.7,to:.98,label:"\u6536\u5C3E"}],Bs=[4943242,10115919,6258522,9071258,11569738,5599354];var He=(s,e={})=>new Ht({color:s,roughness:.82,metalness:.04,...e});function bi(s,e,t,n=1,i=1){let r=document.createElement("canvas");r.width=s,r.height=e;let o=r.getContext("2d");t(o,s,e);let a=new Hi(r);return a.colorSpace=mt,a.wrapS=a.wrapT=Zn,a.repeat.set(n,i),a.anisotropy=4,a}function ey(s,e="",t="#a9382b",n="#f7e7c6"){return bi(1024,320,(i,r,o)=>{i.fillStyle=t,i.fillRect(0,0,r,o),i.strokeStyle="rgba(255,240,210,0.55)",i.lineWidth=10,i.strokeRect(18,18,r-36,o-36),i.fillStyle=n,i.font='bold 150px "Microsoft YaHei", "PingFang SC", sans-serif',i.textAlign="center",i.textBaseline="middle",i.fillText(s,r/2,o/2-(e?26:0)),e&&(i.font='52px "Microsoft YaHei", sans-serif',i.fillStyle="rgba(247,231,198,0.8)",i.fillText(e,r/2,o-62))})}function Wi(s,e=1.15,t=.34){let n=bi(512,160,(r,o,a)=>{r.fillStyle="rgba(42,30,22,0.82)",r.beginPath(),r.roundRect(4,4,o-8,a-8,22),r.fill(),r.fillStyle="#f6e3bf",r.font='bold 86px "Microsoft YaHei", sans-serif',r.textAlign="center",r.textBaseline="middle",r.fillText(s,o/2,a/2+4)}),i=new te(new Et(e,t),new xt({map:n,transparent:!0,depthWrite:!1}));return i.renderOrder=3,i}function Me(s,e,t,n,i,r,o,a,c={}){let l=new te(new qt(e,t,n),He(a,c));return l.position.set(i,r,o),l.castShadow=!0,l.receiveShadow=!0,s.add(l),l}function Ue(s,e,t,n,i,r,o,a,c=16,l={}){let h=new te(new Nt(e,t,n,c),He(a,l));return h.position.set(i,r,o),h.castShadow=!0,h.receiveShadow=!0,s.add(h),h}function ty(s){let e=bi(512,512,(r,o,a)=>{r.fillStyle="#c99a67",r.fillRect(0,0,o,a);for(let c=0;c<900;c++)r.fillStyle=`rgba(${120+Math.random()*50},${80+Math.random()*40},${45+Math.random()*30},0.10)`,r.fillRect(Math.random()*o,Math.random()*a,3,3);r.strokeStyle="rgba(88,56,32,0.45)",r.lineWidth=8,r.strokeRect(0,0,o,a)},5,4),t=new te(new Et(10.2,7.4),new Ht({map:e,roughness:.75}));t.rotation.x=-Math.PI/2,t.position.set(0,0,0),t.receiveShadow=!0,s.add(t);let n=bi(256,256,(r,o,a)=>{r.fillStyle="#e9ddc6",r.fillRect(0,0,o,a),r.strokeStyle="rgba(120,100,76,0.35)",r.lineWidth=4,r.strokeRect(0,0,o/2,a/2),r.strokeRect(o/2,0,o/2,a/2),r.strokeRect(0,a/2,o/2,a/2),r.strokeRect(o/2,a/2,o/2,a/2)},8,2),i=new te(new Et(10,1.3),new Ht({map:n,roughness:.6}));i.position.set(0,.65,-3.48),s.add(i)}function ny(s,e){let t=He("#e7d7ba",{roughness:.95}),n=new te(new qt(10.4,4.4,.24),t);n.position.set(0,2.2,-3.62),n.receiveShadow=!0,s.add(n);let i=new qt(.24,4.4,7.6),r=new te(i,t);r.position.set(-5.12,2.2,-.1),r.receiveShadow=!0,s.add(r);let o=r.clone();o.position.x=5.12,s.add(o);let a=new te(new Et(3.6,1.12),new xt({map:ey(e.sign.title,e.sign.sub,e.sign.bg)}));a.position.set(0,3.55,-3.47),s.add(a);let c=bi(256,64,(d,f,g)=>{for(let x=0;x<8;x++)d.fillStyle=x%2?e.awning[0]:e.awning[1],d.fillRect(x*f/8,0,f/8,g);d.fillStyle="rgba(0,0,0,0.06)";for(let x=0;x<8;x++)d.fillRect(x*f/8,g*.6,f/8,g*.4)},3,1),l=new te(new Et(10.1,2.5),new Ht({map:c,side:dn,roughness:.9}));l.position.set(0,3.45,2.4),l.rotation.x=Math.PI/2-.32,l.castShadow=!0,s.add(l),Me(s,.26,3.3,.26,-5,1.65,2.05,"#8a5b3f"),Me(s,.26,3.3,.26,5,1.65,2.05,"#8a5b3f");let h=He("#3c4548",{metalness:.4,roughness:.5}),u=new xt({color:16766874});for(let d of[-3,0,3]){let f=new te(new Nt(.012,.012,.7,6),He("#2a2622"));f.position.set(d,3.95,-1),s.add(f);let g=new te(new Vi(.34,.28,16,1,!0),h);g.position.set(d,3.55,-1),s.add(g);let x=new te(new Ut(.1,12,8),u);x.position.set(d,3.46,-1),s.add(x)}sy(s,e)}function iy(s,e){let t=new te(new Et(80,80),He("#57534d",{roughness:1}));t.rotation.x=-Math.PI/2,t.position.set(0,-.06,0),t.receiveShadow=!0,s.add(t);let n=Me(s,34,.12,6.4,0,-.02,4.6,"#9c9384");n.receiveShadow=!0;let i=Me(s,34,.16,.22,0,-.02,7.7,"#b3a893");for(let l of[-2.6,.2]){Me(s,.9,.06,.9,l,.62,6.2,"#8d6b4a");for(let[h,u]of[[-.4,-.4],[.4,-.4],[-.4,.4],[.4,.4]])Me(s,.06,.62,.06,l+h,.31,6.2+u,"#6f5238");for(let h of[-1,1])Ue(s,.17,.17,.08,l+h*.75,.4,6.2,"#b8463a",12),Ue(s,.04,.04,.36,l+h*.75,.2,6.2,"#6f5238",8)}Ue(s,.09,.12,6.2,-7.4,3.1,5.6,"#6d6a63",8),Me(s,1.6,.1,.1,-7.4,5.4,5.6,"#585550");let r=new qe;Me(r,.28,.32,1.25,0,.55,0,"#3f6a72"),Me(r,.3,.5,.18,0,.75,-.5,"#3f6a72"),Ue(r,.24,.24,.09,0,.28,-.55,"#2b2723",16).rotation.z=Math.PI/2,Ue(r,.24,.24,.09,0,.28,.55,"#2b2723",16).rotation.z=Math.PI/2,Me(r,.5,.04,.1,0,.95,-.5,"#22201d"),r.position.set(-6.4,0,5.2),r.rotation.y=.5,s.add(r);let o=bi(256,512,(l,h,u)=>{l.fillStyle="#8d7f70",l.fillRect(0,0,h,u);for(let d=40;d<u-40;d+=88)for(let f=26;f<h-40;f+=78)l.fillStyle=Math.random()>.35?"#e8c98a":"#4d4a45",l.fillRect(f,d,44,54),l.fillStyle="rgba(0,0,0,0.25)",l.fillRect(f,d+46,44,8)},1,1),a=new Ht({map:o,emissive:16763001,emissiveIntensity:.18,emissiveMap:o,roughness:.9}),c=[[-17,-10,10,6],[-10,-13,12,7],[-3.5,-11,11,8],[4,-14,13,8],[11,-11,10,7],[18,-13,12,8],[-24,-12,11,7]];for(let[l,h,u,d]of c){let f=new te(new qt(d,u,6),a);f.position.set(l,u/2-.1,h),s.add(f)}for(let[l,h,u]of[[-9,-7,1.4],[8.6,-8,1.1],[16,-7,1.6]]){Ue(s,.12,.18,2.4,l,1.2,h,"#5a4632",7);let d=new te(new yr(1.6*u,0),He("#4e6647",{roughness:1}));d.position.set(l,3,h),s.add(d)}ry(s,e)}function sy(s,e){let t=bi(512,360,(d,f,g)=>{d.fillStyle="#2f3d35",d.fillRect(0,0,f,g),d.strokeStyle="rgba(244,230,200,0.55)",d.lineWidth=8,d.strokeRect(12,12,f-24,g-24),d.fillStyle="#f6e8c8",d.textAlign="center",d.font='bold 44px "Microsoft YaHei", sans-serif',d.fillText("\u4ECA\u65E5\u83DC\u5355",f/2,64),d.font='27px "Microsoft YaHei", sans-serif',e.menu.forEach((x,m)=>{let p=Lt[x];d.textAlign="left",d.fillStyle="#ead8b2",d.fillText(p.name,40,126+m*50),d.textAlign="right",d.fillStyle="#ffd58a",d.fillText(`${p.price} \u5143`,f-40,126+m*50)})}),n=new te(new Et(1.2,.84),He("#ffffff",{map:t,roughness:.9}));n.position.set(3.95,2.55,-3.44),s.add(n);let i=new te(new jn(.26,24),He("#f5ead4"));i.position.set(2.55,2.2,-3.435),s.add(i);let r=new te(new Wo(.27,.022,6,24),He("#5a4b3c"));r.position.copy(i.position),s.add(r);let o=Me(s,.022,.13,.012,2.55,2.25,-3.428,"#3a3028");o.rotation.z=-.5;let a=Me(s,.018,.18,.012,2.55,2.26,-3.426,"#3a3028");a.rotation.z=1.9,Me(s,1.3,.05,.3,-2.95,2.25,-3.34,"#9a744d"),Me(s,.05,.16,.28,-3.52,2.17,-3.35,"#7a5a3a"),Me(s,.05,.16,.28,-2.38,2.17,-3.35,"#7a5a3a");for(let[d,f,g]of[[-3.42,"#c7a45f",.24],[-3.16,"#7d3f2e",.2],[-2.9,"#6d8a4e",.26],[-2.62,"#c7a45f",.18]])Ue(s,.09,.08,g,d,2.28+g/2,-3.34,f,10),Ue(s,.085,.085,.03,d,2.28+g+.02,-3.34,"#8f6e4c",10);let c=Ue(s,.018,.018,1.1,1.55,2.28,-3.36,"#4a4038",6);c.rotation.z=Math.PI/2;for(let[d,f]of[[1.2,!0],[1.55,!1],[1.9,!0]])if(Ue(s,.012,.012,.34,d,2.1,-3.36,"#6b6258",5),f){let g=new te(new Ut(.07,10,8,0,Math.PI*2,0,Math.PI/2),He("#9aa1a0",{metalness:.4,roughness:.5}));g.rotation.x=Math.PI,g.position.set(d,1.93,-3.36),s.add(g)}else Me(s,.14,.03,.02,d,1.93,-3.36,"#9aa1a0");for(let[d,f,g]of[[2.55,2.35,3],[2.74,2.58,2],[3.45,2.32,3]])for(let x=0;x<g;x++)Ue(s,.11,.08,.05,d,1.08+x*.05,f,"#f1e7d2",14);for(let[d,f,g]of[[3.6,2.52,"#7a2e22"],[3.73,2.38,"#c8902e"],[3.5,2.64,"#3d5a3a"]])Ue(s,.045,.055,.18,d,1.14,f,g,10),Ue(s,.02,.02,.05,d,1.25,f,"#e8dcc2",8);let l=new qe;Ue(l,.18,.13,.28,0,.14,0,"#a3563f",12);for(let d=0;d<5;d++){let f=new te(new Vi(.09,.5,5),He("#4f7346"));f.position.set(Math.cos(d*1.25)*.12,.5,Math.sin(d*1.25)*.12),f.rotation.z=Math.cos(d*1.25)*.35,f.rotation.x=Math.sin(d*1.25)*.35,l.add(f)}l.position.set(4.72,0,.9),s.add(l);let h=new te(new Et(1.9,.9),He("#7d4636",{roughness:1}));h.rotation.x=-Math.PI/2,h.position.set(0,.006,1.5),s.add(h);let u=new te(new Et(1.6,.66),He("#9c6048",{roughness:1}));u.rotation.x=-Math.PI/2,u.position.set(0,.008,1.5),s.add(u)}function ry(s,e){for(let[i,r,o]of[[-4.55,3.5,1],[4.5,3.45,.9]]){let a=new qe;Ue(a,.3,.22,.5,0,.25,0,"#a66a4a",12);for(let c=0;c<5;c++){let l=new te(new Vi(.13,.7,5),He("#557a4a"));l.position.set(Math.cos(c*1.3)*.16,.65,Math.sin(c*1.3)*.16),l.rotation.z=Math.cos(c*1.3)*.3,l.rotation.x=Math.sin(c*1.3)*.3,a.add(l)}a.position.set(i,0,r),a.scale.setScalar(o),s.add(a)}for(let[i,r,o]of[[4.3,3.05,.4],[-4.6,3.95,-.3]]){let a=new qe;Ue(a,.19,.17,.06,0,.42,0,"#b8463a",14);for(let[c,l]of[[-.13,-.13],[.13,-.13],[-.13,.13],[.13,.13]])Me(a,.04,.4,.04,c,.2,l,"#8f3a30");a.position.set(i,0,r),a.rotation.y=o,s.add(a)}for(let[i,r,o]of[[-4.62,.16,3.15],[-4.32,.16,2.98],[-4.47,.44,3.06]])Me(s,.5,.32,.42,i,r,o,"#b08352");let t=bi(256,360,(i,r,o)=>{i.fillStyle="#2e4539",i.fillRect(0,0,r,o),i.strokeStyle="rgba(243,236,215,0.5)",i.lineWidth=6,i.strokeRect(10,10,r-20,o-20),i.fillStyle="#f3ecd7",i.textAlign="center",i.font='bold 32px "Microsoft YaHei", sans-serif',i.fillText("\u4ECA\u65E5\u63A8\u8350",r/2,58),i.font='24px "Microsoft YaHei", sans-serif',e.menu.slice(0,3).forEach((a,c)=>{let l=Lt[a];i.textAlign="left",i.fillText(l.name,28,126+c*58),i.textAlign="right",i.fillStyle="#ffd58a",i.fillText(`${l.price} \u5143`,r-28,126+c*58),i.fillStyle="#f3ecd7"})}),n=new qe;for(let[i,r]of[[-.09,-.18],[.09,.18]]){let o=new te(new Et(.64,.9),new Ht({map:t,roughness:.95,side:Xt}));o.position.set(0,.5,i),o.rotation.x=r,o.castShadow=!0,n.add(o)}Me(n,.7,.05,.34,0,.02,.02,"#6f5238"),n.position.set(-3.85,0,3.45),n.rotation.y=.45,s.add(n),Ue(s,.16,.26,2.4,-6.35,1.2,4.9,"#6b4c34",8);for(let[i,r,o,a]of[[0,2.8,0,1.05],[-.8,2.5,.2,.72],[.7,2.95,-.3,.68]]){let c=new te(new yr(a,0),He("#557a4a",{roughness:1}));c.position.set(-6.35+i,r,4.9+o),s.add(c)}for(let[i,r,o]of[[-.5,.3,2.1],[.3,-.2,1.9],[.6,.4,2.2]])Ue(s,.02,.02,o,-6.35+i,o/2,4.9+r,"#5f4632",5);for(let i=0;i<3;i++)Ue(s,.24,.24,.1,-2.9,.7+i*.11,6.15,"#d3b07c",18);Ue(s,.26,.28,.08,-2.9,1.02,6.15,"#c19a67",18),Ue(s,.1,.14,.12,-2.25,.71,6.25,"#7d8a6a",12),Me(s,.16,.02,.03,-2.12,.76,6.25,"#7d8a6a")}function oy(s){let e=new qe;Me(e,1.25,2,.75,0,1,0,"#dfe6e2",{roughness:.4,metalness:.2}),Me(e,1.1,.02,.68,0,1.25,.02,"#b9c3bf"),Me(e,1.1,.02,.68,0,.62,.02,"#b9c3bf"),Me(e,.05,.5,.05,-.44,1.55,.4,"#7d8884"),Me(e,.5,.3,.4,-.25,2.15,0,"#c9a06a"),Me(e,.36,.24,.3,.3,2.12,.05,"#b58c55"),e.position.set(-4.28,0,-3),s.add(e);let t=Wi("\u51B0\u67DC");return t.position.set(-4.28,2.45,-2.6),s.add(t),e}function ay(s,e){let t=new qe;Me(t,1.05,.16,.8,0,.08,0,"#8f9b94"),Me(t,.95,1.05,.7,0,.68,0,"#eef1ec",{roughness:.5,metalness:.1}),Me(t,.55,.34,.05,0,.95,.36,"#3f4d48");let n=new te(new jn(.035,12),new xt({color:9306032}));n.position.set(.16,.98,.39),t.add(n);let i=n.clone();i.material=new xt({color:16743786}),i.position.x=-.16,t.add(i),Ue(t,.3,.3,.16,0,1.28,0,"#cfd8d1",20),Me(t,.12,.1,.22,0,1.05,.42,"#b9c3bf"),Ue(t,.07,.06,.18,.24,1.36,.1,"#f7f3e6",12),t.position.set(-2.4,0,-3.05),s.add(t);let r=Wi(e);return r.position.set(-2.4,1.72,-2.75),s.add(r),t}function cy(s,e){let t=new qe;Me(t,1.5,.82,.95,0,.41,0,"#8a6a4a"),Me(t,1.56,.06,1,0,.83,0,"#6f5238");for(let i=0;i<3;i++)Ue(t,.48,.48,.14,0,.93+i*.16,0,"#d3b07c",22),Ue(t,.47,.47,.05,0,.93+i*.16+.07,0,"#b58c55",22);Ue(t,.5,.54,.1,0,1.4,0,"#c19a67",22),Ue(t,.06,.06,.06,0,1.48,0,"#7c5c38",10),t.position.set(-.3,0,-3),s.add(t);let n=Wi(e);return n.position.set(-.3,1.85,-2.75),s.add(n),t}function ly(s,e){let t=new qe;if(e.key==="shandong")Me(t,1.5,.8,.95,0,.4,0,"#5d5348",{roughness:.72}),Me(t,1.5,.08,.95,0,.82,0,"#3a332c",{roughness:.6}),Ue(t,.68,.64,.06,0,.88,-.02,"#2f2b27",32,{metalness:.5,roughness:.5}),Ue(t,.52,.52,.012,0,.915,-.02,"#e6c98f",30),Me(t,.4,.025,.035,.3,.96,.32,"#c9a46a"),Me(t,.03,.02,.16,.49,.97,.3,"#b08a52"),Ue(t,.2,.16,.16,-.5,.9,.28,"#d9d2c2",16),Ue(t,.17,.17,.015,-.5,.985,.28,"#e8d5a8",16),Me(t,.32,.03,.03,.4,.87,-.32,"#5f8a4a");else if(e.key==="jiangsu"){Me(t,1.5,.8,.95,0,.4,0,"#5f6462",{roughness:.5,metalness:.35}),Me(t,1.5,.08,.95,0,.82,0,"#3c4240",{metalness:.4}),Ue(t,.58,.54,.14,0,.9,-.02,"#2e3230",28,{metalness:.5,roughness:.5}),Ue(t,.5,.5,.012,0,.975,-.02,"#c9a865",28);for(let[i,r]of[[-.22,.1],[.05,-.12],[.26,.08]]){let o=new te(new Ut(.1,12,9),He("#efe2c6"));o.scale.set(1,.62,1),o.position.set(i,1,r),o.castShadow=!0,t.add(o),Me(t,.04,.012,.04,i+.02,1.06,r-.02,"#5f8a4a")}Ue(t,.6,.58,.05,0,1.09,.52,"#3a3f3d",24)}else{Me(t,1.5,.8,.95,0,.4,0,"#6e7472",{roughness:.45,metalness:.45}),Me(t,1.42,.1,.86,0,.84,0,"#4a4f4d",{metalness:.6});let i=new te(new Et(1.12,.56),new Ht({color:9069600,roughness:.18,metalness:.1}));i.rotation.x=-Math.PI/2,i.position.set(0,.86,0),t.add(i),Me(t,.5,.04,.3,.36,.94,-.18,"#3c403e"),Me(t,.04,.16,.04,.36,1,-.18,"#3c403e"),Me(t,.34,.05,.06,-.34,.9,-.2,"#e0c795")}t.position.set(2,0,-3),s.add(t);let n=Wi(e.stationNames.fry);return n.position.set(2,1.32,-2.75),s.add(n),t}function hy(s,e){let t=new qe;Me(t,1.42,.8,.95,0,.4,0,"#6d7470",{roughness:.45,metalness:.4}),Me(t,1.48,.07,1,0,.83,0,"#3f4542"),Ue(t,.55,.46,.34,0,1.03,0,"#9aa2a0",26,{metalness:.45,roughness:.4});let n=new te(new jn(.47,26),He(e.broth,{roughness:.3}));n.rotation.x=-Math.PI/2,n.position.set(0,1.2,0),t.add(n);let i=Ue(t,.028,.028,.62,.48,1.34,-.08,"#c8c2b2",8);i.rotation.z=.42,Ue(t,.1,.08,.05,.66,1.5,-.08,"#8f948e",12),Ue(t,.08,.08,.12,-.48,1.2,.1,"#7a807c",10),t.position.set(4.15,0,-3),s.add(t);let r=Wi(e.stationNames.boil);return r.position.set(4.15,1.62,-2.7),s.add(r),t}function uy(s){let e=new qe;Me(e,3.5,1.02,.8,0,.51,0,"#b08756"),Me(e,3.6,.07,.9,0,1.05,0,"#d2ac79"),Me(e,3.5,.3,.06,0,.86,-.38,"#8a6238"),Ue(e,.05,.07,.05,1.3,1.11,.1,"#d8c27a",14),Ue(e,.09,.09,.05,1.3,1.15,.1,"#e6d493",14),Me(e,.3,.38,.12,-1.35,1.24,.12,"#d8c9a8"),e.position.set(3.1,0,2.5),s.add(e);let t=Wi("\u51FA\u9910\u7A97\u53E3",1.4,.4);return t.position.set(3.1,1.75,2.35),s.add(t),e}function dy(s){let e=new qe;Ue(e,.36,.32,.9,0,.45,0,"#3f5f4c",18),Ue(e,.4,.4,.08,0,.94,0,"#2f4a3a",18),Me(e,.1,.06,.1,.3,1,.12,"#25392d"),e.position.set(-4.3,0,1.7),s.add(e);let t=Wi("\u5783\u573E\u6876",.9,.28);return t.position.set(-4.3,1.42,1.7),s.add(t),e}function Dd(s,e){ty(s),ny(s,e),iy(s,e),oy(s);let t={drink:ay(s,e.stationNames.drink),steam:cy(s,e.stationNames.steam),fry:ly(s,e),boil:hy(s,e),serve:uy(s),trash:dy(s)},n=Ld.map(r=>({...r,name:r.name||e.stationNames[r.role]||r.id,worldPos:new w(r.pos[0],0,r.pos[1]),mesh:t[r.id],radius:r.type==="serve"?1.2:r.type==="trash"?.9:1.1}));n.push({id:"fridge",type:"fridge",name:"\u51B0\u67DC",worldPos:new w(-4.28,0,-3),mesh:null,radius:1.05});let i=[{minX:-5.25,maxX:-5,minZ:-3.9,maxZ:3.8,top:4.4},{minX:5,maxX:5.25,minZ:-3.9,maxZ:3.8,top:4.4},{minX:-5.2,maxX:5.2,minZ:-3.75,maxZ:-3.5,top:4.4},{minX:-5.2,maxX:5.2,minZ:2.03,maxZ:2.2,top:.12},{minX:-4.78,maxX:-3.78,minZ:-3.45,maxZ:-2.6,top:2.9},{minX:-4.65,maxX:-3.95,minZ:1.35,maxZ:2.05,top:.95},{minX:1.95,maxX:4.25,minZ:2.05,maxZ:2.95,top:1.3}];for(let r of n)r.type==="machine"&&i.push({minX:r.worldPos.x-.56,maxX:r.worldPos.x+.56,minZ:r.worldPos.z-.45,maxZ:r.worldPos.z+.42,top:1.55});return{stations:n,colliders:i,bounds:{minX:-5,maxX:5,minZ:-3.5,maxZ:2.05},playerStart:new w(.2,0,1.1),customerSlots:[new w(2,0,4.1),new w(2.9,0,4.1),new w(3.8,0,4.1)],customerSpawn:new w(3.1,0,9.5)}}function Nd(s=null){let e=new qe,t=new qe;t.position.set(0,1.02,.34);let n=null,i=null;if(s)s.traverse(a=>{a.isMesh&&(a.castShadow=!0)}),e.add(s),e.add(t);else{let a=He("#d9a06a"),c=He("#c9463c",{roughness:.9}),l=He("#f0e3c8"),h=He("#3e4a58");for(let m of[-.12,.12])Me(e,.16,.5,.18,m,.27,0,"#3e4a58"),Me(e,.18,.08,.26,m,.04,.04,"#2b2622");n=new te(new Nt(.28,.34,.72,14),c),n.position.y=.84,n.castShadow=!0,e.add(n);let u=new te(new qt(.44,.5,.08),l);u.position.set(0,.82,.3),e.add(u),i=new te(new Ut(.22,16,12),a),i.position.y=1.36,i.castShadow=!0,e.add(i);let d=new te(new Ut(.225,16,10,0,Math.PI*2,0,Math.PI/2),He("#2e2621"));d.position.y=1.38,e.add(d);let f=new te(new Nt(.24,.2,.26,16),He("#f7f1e2"));f.position.y=1.62,f.castShadow=!0,e.add(f);let g=new te(new Nt(.245,.24,.05,16),He("#c9463c"));g.position.y=1.5,e.add(g);for(let m of[-.34,.34]){let p=new te(new _r(.07,.36,4,8),c);p.position.set(m,.92,.02),p.rotation.z=m>0?-.18:.18,e.add(p)}for(let m of[-.075,.075]){let p=new te(new Ut(.025,6,6),new xt({color:2103830}));p.position.set(m,1.38,.195),e.add(p)}let x=new te(new Ut(.028,6,6),He("#c98d59"));x.position.set(0,1.33,.21),e.add(x),e.add(t)}let r=new qe;r.position.y=.9;let o=new qe;for(o.position.y=-.9;e.children.length;)o.add(e.children[0]);return r.add(o),e.add(r),e.traverse(a=>{a.isMesh&&(a.castShadow=!0)}),{group:e,anchor:t,body:n,head:i,pivot:r,custom:!!s,animator:s?s.userData.animator:null}}function Ud(s,e=!1){let t=Lt[s.id],n=new qe,i=e||s.burnt,r=i?3814188:t?t.color:16777215,o=He(r,{roughness:.7}),a=t?t.kind:"cup";if(a==="cup"){let c=new te(new Nt(.085,.07,.2,14),He(i?5918789:16118244));c.position.y=.1,n.add(c);let l=new te(new Nt(.09,.09,.025,14),o);l.position.y=.21,n.add(l)}else if(a==="bun"){let c=new te(new Ut(.12,14,10),o);c.scale.set(1,.82,1),c.position.y=.1,n.add(c);let l=new te(new Vi(.02,.05,6),He(i?2762015:15259053));l.position.y=.19,n.add(l)}else if(a==="stick"){let c=new te(new qt(.4,.06,.06),o);c.position.y=.08,c.rotation.z=.12,n.add(c);let l=c.clone();l.position.z=.07,l.rotation.z=-.1,n.add(l)}else if(a==="ball")for(let[c,l,h]of[[0,.1,0],[-.075,.09,.05],[.07,.09,-.045]]){let u=new te(new Ut(.07,10,8),o);u.position.set(c,l,h),n.add(u)}else if(a==="bing"){let c=new te(new Nt(.17,.17,.028,20),o);c.position.y=.08,n.add(c);let l=new te(new qt(.3,.03,.1),o);l.position.set(.02,.1,.02),l.rotation.y=.5,n.add(l);let h=new te(new Nt(.02,.02,.22,6),He("#5f8a4a"));h.rotation.z=Math.PI/2,h.rotation.y=.4,h.position.set(.1,.13,.03),n.add(h)}else if(a==="pan"){let c=new te(new Ut(.13,14,10),o);c.scale.set(1,.66,1),c.position.y=.09,n.add(c);let l=new te(new Nt(.1,.1,.03,14),He(i?2762015:13081166));l.position.y=.03,n.add(l),Me(n,.04,.012,.04,.03,.16,.02,"#5f8a4a")}else if(a==="roll"){let c=new te(new _r(.075,.24,6,12),o);c.rotation.z=Math.PI/2,c.position.y=.09,n.add(c);let l=new te(new Nt(.17,.17,.02,18),He(i?4867388:16052710,{roughness:.6}));l.position.y=.03,n.add(l);let h=new te(new qt(.2,.008,.05),He(i?3812124:5911576));h.position.set(.02,.045,.05),n.add(h),Me(n,.04,.012,.04,-.06,.05,-.06,"#5f8a4a")}else if(a==="bowl"){let c=new te(new Nt(.16,.11,.11,16),He(i?4537652:15985368,{roughness:.5}));c.position.y=.055,n.add(c);let l=new te(new jn(.125,18),o);l.rotation.x=-Math.PI/2,l.position.y=.112,n.add(l);let h=new te(new qt(.34,.012,.012),He("#8a7052"));h.position.set(.08,.16,.02),h.rotation.z=.18,n.add(h)}else{let c=new te(new Ut(.095,12,9),o);c.scale.set(1,.88,1),c.position.y=.095,n.add(c)}return n.traverse(c=>{c.isMesh&&(c.castShadow=!0)}),n}function Od(s){let e=new qe,t=Bs[s%Bs.length],n=He("#dfae7d"),i=new te(new Nt(.23,.3,.78,12),He(t));i.position.y=.75,i.castShadow=!0,e.add(i);for(let a of[-.1,.1])Me(e,.14,.4,.16,a,.22,0,"#3a3f4a");let r=new te(new Ut(.2,14,10),n);r.position.y=1.3,r.castShadow=!0,e.add(r);let o=new te(new Ut(.205,14,8,0,Math.PI*2,0,Math.PI/2),He("#28221d"));o.position.y=1.32,e.add(o);for(let a of[-.07,.07]){let c=new te(new Ut(.022,6,6),new xt({color:2103830}));c.position.set(a,1.33,.18),e.add(c)}return e}var ra=class{constructor(){this.ctx=null,this.master=null,this.muted=!1,this.ambient=null,this.lastAlarm=0}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e,this.master=this.ctx.createGain(),this.master.gain.value=this.muted?0:.28,this.master.connect(this.ctx.destination),this.startAmbient())}setMuted(e){this.muted=e,this.master&&this.master.gain.setTargetAtTime(e?0:.28,this.ctx.currentTime,.05)}startAmbient(){let e=this.ctx,t=e.sampleRate*3,n=e.createBuffer(1,t,e.sampleRate),i=n.getChannelData(0),r=0;for(let l=0;l<t;l++)r=(r+(Math.random()*2-1)*.02)*.995,i[l]=r;let o=e.createBufferSource();o.buffer=n,o.loop=!0;let a=e.createBiquadFilter();a.type="lowpass",a.frequency.value=500;let c=e.createGain();c.gain.value=.5,o.connect(a).connect(c).connect(this.master),o.start(),this.ambient={src:o,gain:c}}tone(e,t=.12,n="sine",i=.5,r=null){let o=this.ctx;if(!o)return;let a=o.currentTime,c=o.createOscillator(),l=o.createGain();c.type=n,c.frequency.setValueAtTime(e,a),r&&c.frequency.exponentialRampToValueAtTime(Math.max(20,r),a+t),l.gain.setValueAtTime(1e-4,a),l.gain.exponentialRampToValueAtTime(i,a+.008),l.gain.exponentialRampToValueAtTime(1e-4,a+t),c.connect(l).connect(this.master),c.start(a),c.stop(a+t+.02)}noise(e=.12,t=.3,n=1800){let i=this.ctx;if(!i)return;let r=i.currentTime,o=Math.floor(i.sampleRate*e),a=i.createBuffer(1,o,i.sampleRate),c=a.getChannelData(0);for(let d=0;d<o;d++)c[d]=(Math.random()*2-1)*(1-d/o);let l=i.createBufferSource();l.buffer=a;let h=i.createBiquadFilter();h.type="lowpass",h.frequency.value=n;let u=i.createGain();u.gain.value=t,l.connect(h).connect(u).connect(this.master),l.start()}pickup(){this.tone(520,.06,"triangle",.18,620)}drop(){this.tone(330,.08,"triangle",.15,260)}startCook(){this.noise(.25,.18,900),this.tone(180,.2,"sine",.1,120)}ready(){this.tone(660,.09,"sine",.3),setTimeout(()=>this.tone(880,.12,"sine",.3),90)}serve(){this.tone(784,.09,"sine",.32),setTimeout(()=>this.tone(1046,.14,"sine",.28),80),setTimeout(()=>this.noise(.12,.12,3200),40)}error(){this.tone(150,.18,"square",.2,110)}coin(){this.tone(1180,.05,"square",.12),setTimeout(()=>this.tone(1560,.08,"square",.1),55)}burn(){let e=performance.now();e-this.lastAlarm<900||(this.lastAlarm=e,this.tone(240,.12,"sawtooth",.18,200),setTimeout(()=>this.tone(240,.12,"sawtooth",.18,200),180))}clean(){this.noise(.16,.08,1800),this.tone(520,.08,"sine",.08,760)}trash(){this.noise(.18,.22,700)}throw(){this.noise(.14,.12,2600),this.tone(420,.12,"triangle",.14,760)}jump(){this.tone(300,.12,"triangle",.2,620)}flip(){this.noise(.42,.09,1500),this.tone(240,.4,"sine",.12,760)}land(){this.noise(.09,.12,380),this.tone(120,.08,"sine",.16,90)}dance(){this.tone(523,.1,"triangle",.22),setTimeout(()=>this.tone(659,.1,"triangle",.22),90),setTimeout(()=>this.tone(784,.16,"triangle",.2),180)}dayEnd(){this.tone(523,.15,"sine",.3),setTimeout(()=>this.tone(659,.15,"sine",.3),140),setTimeout(()=>this.tone(784,.3,"sine",.3),280)}click(){this.tone(440,.04,"triangle",.12)}};function Ul(s,e){if(e===_d)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Er||e===Qo){let t=s.getIndex();if(t===null){let o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===Er)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var oa=class extends ni{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Vl(t)}),this.register(function(t){return new Gl(t)}),this.register(function(t){return new jl(t)}),this.register(function(t){return new Ql(t)}),this.register(function(t){return new eh(t)}),this.register(function(t){return new Xl(t)}),this.register(function(t){return new ql(t)}),this.register(function(t){return new Yl(t)}),this.register(function(t){return new $l(t)}),this.register(function(t){return new Hl(t)}),this.register(function(t){return new Zl(t)}),this.register(function(t){return new Wl(t)}),this.register(function(t){return new Jl(t)}),this.register(function(t){return new Kl(t)}),this.register(function(t){return new kl(t)}),this.register(function(t){return new th(t)}),this.register(function(t){return new nh(t)})}load(e,t,n,i){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=Si.extractUrlBase(e);o=Si.resolveURL(l,this.path)}else o=Si.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Mr(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Hd){try{o[We.KHR_BINARY_GLTF]=new ih(e)}catch(u){i&&i(u);return}r=JSON.parse(o[We.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new hh(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case We.KHR_MATERIALS_UNLIT:o[u]=new zl;break;case We.KHR_DRACO_MESH_COMPRESSION:o[u]=new sh(r,this.dracoLoader);break;case We.KHR_TEXTURE_TRANSFORM:o[u]=new rh;break;case We.KHR_MESH_QUANTIZATION:o[u]=new oh;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function fy(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var We={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},kl=class{constructor(e){this.parser=e,this.name=We.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new Te(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Vt);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Gi(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Us(h),l.distance=u;break;case"spot":l=new Ko(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,ii(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},zl=class{constructor(){this.name=We.KHR_MATERIALS_UNLIT}getMaterialType(){return xt}extendParams(e,t,n){let i=[];e.color=new Te(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Vt),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,mt))}return Promise.all(i)}},Hl=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Vl=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:an}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new se(a,a)}return Promise.all(r)}},Gl=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:an}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Wl=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:an}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},Xl=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:an}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Te(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Vt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,mt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},ql=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:an}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},Yl=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:an}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Te().setRGB(a[0],a[1],a[2],Vt),Promise.all(r)}},$l=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:an}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Zl=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:an}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Te().setRGB(a[0],a[1],a[2],Vt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,mt)),Promise.all(r)}},Kl=class{constructor(e){this.parser=e,this.name=We.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:an}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},Jl=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:an}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},jl=class{constructor(e){this.parser=e,this.name=We.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Ql=class{constructor(e){this.parser=e,this.name=We.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},eh=class{constructor(e){this.parser=e,this.name=We.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},th=class{constructor(e){this.name=We.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}},nh=class{constructor(e){this.name=We.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==xn.TRIANGLES&&l.mode!==xn.TRIANGLE_STRIP&&l.mode!==xn.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(let g of u){let x=new De,m=new w,p=new An,y=new w(1,1,1),b=new No(g.geometry,g.material,d);for(let _=0;_<d;_++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,_),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,_),c.SCALE&&y.fromBufferAttribute(c.SCALE,_),b.setMatrixAt(_,x.compose(m,p,y));for(let _ in c)if(_==="_COLOR_0"){let P=c[_];b.instanceColor=new zi(P.array,P.itemSize,P.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&g.geometry.setAttribute(_,c[_]);gt.prototype.copy.call(b,g),this.parser.assignFinalMaterial(b),f.push(b)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Hd="glTF",wr=12,Fd={JSON:1313821514,BIN:5130562},ih=class{constructor(e){this.name=We.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,wr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Hd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-wr,r=new DataView(e,wr),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===Fd.JSON){let l=new Uint8Array(e,wr+o,a);this.content=n.decode(l)}else if(c===Fd.BIN){let l=wr+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},sh=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=We.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let u=ch[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=ch[h]||h.toLowerCase();if(o[h]!==void 0){let d=n.accessors[e.attributes[h]],f=ks[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(let g in f.attributes){let x=f.attributes[g],m=c[g];m!==void 0&&(x.normalized=m)}u(f)},a,l,Vt,d)})})}},rh=class{constructor(){this.name=We.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},oh=class{constructor(){this.name=We.KHR_MESH_QUANTIZATION}},aa=class extends yi{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,g=e*l,x=g-l,m=-2*f+3*d,p=f-d,y=1-m,b=p-d+u;for(let _=0;_!==a;_++){let P=o[x+_+a],A=o[x+_+c]*h,R=o[g+_+a],C=o[g+_]*h;r[_]=y*P+b*A+m*R+p*C}return r}},py=new An,ah=class extends aa{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return py.fromArray(r).normalize().toArray(r),r}},xn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ks={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Bd={9728:zt,9729:Kt,9984:Sl,9985:sr,9986:ms,9987:In},kd={33071:qn,33648:hr,10497:Zn},Ol={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ch={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ei={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},my={CUBICSPLINE:void 0,LINEAR:As,STEP:ws},Fl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function gy(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Ht({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:dn})),s.DefaultMaterial}function Xi(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ii(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function xy(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(d)}if(i){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function _y(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function yy(s){let e,t=s.extensions&&s.extensions[We.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Bl(t.attributes):e=s.indices+":"+Bl(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Bl(s.targets[n]);return e}function Bl(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function lh(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function vy(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var My=new De,hh=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new fy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new $o(this.options.manager):this.textureLoader=new Jo(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Mr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Xi(r,a,i),ii(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[We.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(Si.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=Ol[i.type],a=ks[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new St(l,o,c))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=Ol[i.type],l=ks[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,x,m;if(f&&f!==u){let p=Math.floor(d/f),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,b=t.cache.get(y);b||(x=new l(a,p*f,i.count*f/h),b=new Ls(x,f/h),t.cache.add(y,b)),m=new ki(b,c,d%f/h,g)}else a===null?x=new l(i.count*c):x=new l(a,d,i.count*c),m=new St(x,c,g);if(i.sparse!==void 0){let p=Ol.SCALAR,y=ks[i.sparse.indices.componentType],b=i.sparse.indices.byteOffset||0,_=i.sparse.values.byteOffset||0,P=new y(o[1],b,i.sparse.count*p),A=new l(o[2],_,i.sparse.count*c);a!==null&&(m=new St(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,C=P.length;R<C;R++){let E=P[R];if(m.setX(E,A[R*c]),c>=2&&m.setY(E,A[R*c+1]),c>=3&&m.setZ(E,A[R*c+2]),c>=4&&m.setW(E,A[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let i=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return h.magFilter=Bd[d.magFilter]||Kt,h.minFilter=Bd[d.minFilter]||In,h.wrapS=kd[d.wrapS]||Zn,h.wrapT=kd[d.wrapT]||Zn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==zt&&h.minFilter!==Kt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=i.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;let d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(x){let m=new It(x);m.needsUpdate=!0,d(m)}),t.load(Si.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),ii(u,o),u.userData.mimeType=o.mimeType||vy(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[We.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[We.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[We.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new gr,Qt.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Ds,Qt.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Ht}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[We.KHR_MATERIALS_UNLIT]){let u=i[We.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new Te(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Vt),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,mt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Xt);let h=r.alphaMode||Fl.OPAQUE;if(h===Fl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Fl.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==xt&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new se(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==xt&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==xt){let u=r.emissiveFactor;a.emissive=new Te().setRGB(u[0],u[1],u[2],Vt)}return r.emissiveTexture!==void 0&&o!==xt&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,mt)),Promise.all(l).then(function(){let u=new o(a);return r.name&&(u.name=r.name),ii(u,r),t.associations.set(u,{materials:e}),r.extensions&&Xi(i,u,r),u})}createUniqueName(e){let t=ut.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[We.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return zd(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],h=yy(l),u=i[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[We.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=zd(new vt,l,t),i[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?gy(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let x=h[f],m=o[f],p,y=l[f];if(m.mode===xn.TRIANGLES||m.mode===xn.TRIANGLE_STRIP||m.mode===xn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Po(x,y):new te(x,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===xn.TRIANGLE_STRIP?p.geometry=Ul(p.geometry,Qo):m.mode===xn.TRIANGLE_FAN&&(p.geometry=Ul(p.geometry,Er));else if(m.mode===xn.LINES)p=new Fo(x,y);else if(m.mode===xn.LINE_STRIP)p=new _i(x,y);else if(m.mode===xn.LINE_LOOP)p=new Bo(x,y);else if(m.mode===xn.POINTS)p=new ko(x,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&_y(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),ii(p,r),m.extensions&&Xi(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Xi(i,u[0],r),u[0];let d=new qe;r.extensions&&Xi(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new wt(Md.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Ps(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ii(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let u=o[l];if(u){a.push(u);let d=new De;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Do(a,c)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){let f=i.channels[u],g=i.samplers[f.sampler],x=f.target,m=x.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,y=i.parameters!==void 0?i.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",y)),l.push(g),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],x=u[3],m=u[4],p=[];for(let y=0,b=d.length;y<b;y++){let _=d[y],P=f[y],A=g[y],R=x[y],C=m[y];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();let E=n._createAnimationTracks(_,P,A,R,C);if(E)for(let M=0;M<E.length;M++)p.push(E[M])}return new Yo(r,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,My)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new mr:l.length>1?h=new qe:l.length===1?h=l[0]:h=new gt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),ii(h,r),r.extensions&&Xi(n,h,r),r.matrix!==void 0){let u=new De;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new qe;n.name&&(r.name=i.createUniqueName(n.name)),ii(r,n),n.extensions&&Xi(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[d,f]of i.associations)(d instanceof Qt||d instanceof It)&&u.set(d,f);return h.traverse(d=>{let f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){let o=[],a=e.name?e.name:e.uuid,c=[];Ei[r.path]===Ei.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(Ei[r.path]){case Ei.weights:l=Qn;break;case Ei.rotation:l=ei;break;case Ei.position:case Ei.scale:l=ti;break;default:n.itemSize===1?l=Qn:l=ti;break}let h=i.interpolation!==void 0?my[i.interpolation]:As,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){let g=new l(c[d]+"."+Ei[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=lh(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof ei?ah:aa;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Sy(s,e,t){let n=e.attributes,i=new jt;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new w(c[0],c[1],c[2]),new w(l[0],l[1],l[2])),a.normalized){let h=lh(ks[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new w,c=new w;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let x=lh(ks[d.componentType]);c.multiplyScalar(x)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;let o=new on;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function zd(s,e,t){let n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(let o in n){let a=ch[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){let o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return Xe.workingColorSpace!==Vt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Xe.workingColorSpace}" not supported.`),ii(s,e),Sy(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?xy(s,e.targets,t):s})}function uh(s){let e=new Map,t=new Map,n=s.clone();return Vd(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let r=i,o=e.get(i),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Vd(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)Vd(s.children[n],e.children[n],t)}function Gd(s){let e={};s.traverse(g=>{g.isBone&&(e[g.name]=g)});let t=new Map;for(let g of Object.values(e))t.set(g,{q:g.quaternion.clone(),p:g.position.clone()});let n=0,i=0,r=0;function o(){for(let[g,x]of t)g.quaternion.copy(x.q),g.position.copy(x.p)}function a(g,x=0,m=0,p=0){let y=e[g];y&&(x&&y.rotateX(x),m&&y.rotateY(m),p&&y.rotateZ(p))}function c(g){let x=Math.sin(g*1.5);a("Spine01",.015+x*.012),a("Head",0,Math.sin(g*.6)*.05,Math.sin(g*.9)*.02),a("L_Upperarm",0,0,.05+x*.02),a("R_Upperarm",0,0,-.05-x*.02)}function l(g,x,m){let p=Math.sin(g),y=.55+.3*x,b=m?.55:1;a("L_Thigh",y*p*b),a("R_Thigh",-y*p*b),a("L_Calf",-Math.max(0,-p)*.85*b),a("R_Calf",-Math.max(0,p)*.85*b),a("Spine01",-.16-x*.1),a("Head",.1),m||(a("L_Upperarm",-y*.8*p,0,.08),a("R_Upperarm",y*.8*p,0,-.08),a("L_Forearm",.25+Math.max(0,-p)*.25),a("R_Forearm",.25+Math.max(0,p)*.25))}function h(){a("L_Upperarm",1.05,0,.22),a("R_Upperarm",1.05,0,-.22),a("L_Forearm",.5,0,.18),a("R_Forearm",.5,0,-.18),a("Spine01",.05)}function u(g){let x=Math.sin(Math.min(1,g)*Math.PI);a("L_Thigh",.55*x),a("R_Thigh",.4*x),a("L_Calf",-.95*x),a("R_Calf",-.8*x),a("L_Upperarm",.5*x,0,1*x+.1),a("R_Upperarm",.5*x,0,-1*x-.1),a("L_Forearm",.25*x),a("R_Forearm",.25*x),a("Spine01",-.06*x)}let d=["\u6447\u6446","\u8F6C\u5708","\u673A\u68B0\u821E","\u592A\u7A7A\u6B65"];function f(g,x){let m=Math.sin(x*6.4),p=Math.sin(x*3.2);if(g===1)a("Hip",0,0,m*.3),a("Spine01",0,0,-m*.22),a("Spine02",0,Math.sin(x*3.2)*.25,0),a("Head",0,p*.2,-m*.12),a("L_Upperarm",.25,0,.75+m*.4),a("R_Upperarm",.25,0,-.75+m*.4),a("L_Forearm",.35+m*.3),a("R_Forearm",.35-m*.3);else if(g===2)a("Spine01",.04),a("Head",.1,0,0),a("L_Upperarm",.2,0,1.15+m*.08),a("R_Upperarm",.2,0,-1.15-m*.08),a("L_Forearm",.2),a("R_Forearm",.2);else if(g===3){let y=Math.floor(x/.16)%4,b=[1.35,.25,1,.25][y],_=[.25,1.35,.25,1][y];a("L_Upperarm",b,0,.2),a("R_Upperarm",_,0,-.2),a("L_Forearm",.55*(y%2)),a("R_Forearm",.55*((y+1)%2)),a("Head",0,y%2?.45:-.45,0),a("Hip",0,0,y%2?.08:-.08)}else a("Spine01",.1),a("Head",-.04),a("L_Thigh",-.3+m*.3),a("R_Thigh",-.3-m*.3),a("L_Calf",-.4-Math.max(0,m)*.35),a("R_Calf",-.4-Math.max(0,-m)*.35),a("L_Upperarm",m*.3,0,.12),a("R_Upperarm",-m*.3,0,-.12)}return{styles:d,update(g,x){o();let m=x.dance|0;m!==r&&(i=0,r=m),m>0?(i+=g,f(m,i)):x.airborne?u(x.jump01||.5):x.moving?(n+=g*(7.5+(x.speed01||0)*7),l(n,x.speed01||0,x.carrying)):c(x.t),x.carrying&&!x.airborne&&!m&&h();let p=e.Hip;p&&!x.airborne&&(p.position.y+=Math.sin(x.t*1.8)*.008)}}}var dh=new Map;function Wd(s){if(dh.has(s))return dh.get(s);let e=new Promise(t=>{let n=!1,i=a=>{if(n)return;if(n=!0,clearTimeout(r),!a)return t(null);a.updateWorldMatrix(!0,!0);let c=new jt().setFromObject(a);t({scene:a,box:c})},r=setTimeout(()=>{console.info(`[model] ${s} \u8F7D\u5165\u8D85\u65F6`),i(null)},8e3);new oa().load(s,a=>i(a.scene),void 0,()=>{console.info(`[model] \u6CA1\u6709\u627E\u5230 ${s}`),i(null)})});return dh.set(s,e),e}async function Xd(s){if(!s)return null;let e=await Wd(s);if(!e)return null;try{let t=uh(e.scene),n=$d(t,e.box,Tr.height);return n.userData.animator=Gd(t),n}catch(t){return console.warn("[player] \u6A21\u578B\u5904\u7406\u5931\u8D25\uFF1A",t),null}}async function qd(s){return s?Wd(s):null}function Yd(s,e){if(!s)return null;let t=uh(s.scene),n=$d(t,s.box,ia.height),i=new qe;i.add(n);let r=ia.tints[e%ia.tints.length];return i.traverse(o=>{if(!o.isMesh)return;let c=(Array.isArray(o.material)?o.material:[o.material]).map(l=>{if(!l)return l;let h=l.clone();return h.color&&h.color.multiply(new Te(r)),h.envMapIntensity=.6,h});o.material=Array.isArray(o.material)?c:c[0],o.castShadow=!0,o.receiveShadow=!0,o.frustumCulled=!1}),i}function $d(s,e,t){let n=e.getSize(new w),i=e.getCenter(new w),r=t/Math.max(.001,n.y);s.scale.multiplyScalar(r),s.position.set(-i.x*r,-e.min.y*r,-i.z*r);let o=new qe;return o.rotation.y=Tr.rotationY||0,o.add(s),o.traverse(a=>{if(!a.isMesh)return;a.castShadow=!0,a.receiveShadow=!0,a.frustumCulled=!1;let c=Array.isArray(a.material)?a.material:[a.material];for(let l of c)l&&"envMapIntensity"in l&&(l.envMapIntensity=.6)}),o}var Kd="zaogaofeng.save.v2",Zd="zaogaofeng.save.v1",Jd=[1,2,3];function ca(){return{v:2,auto:null,manual:{1:null,2:null,3:null}}}function qi(s){if(!s||typeof s!="object"||!Ot[s.region]||!Number.isFinite(s.day)||!Number.isFinite(s.cash))return null;let e=en[s.difficulty]?s.difficulty:"normal",t=gn[s.durationKey]?s.durationKey:"normal";return{v:2,region:s.region,difficulty:e,durationKey:t,day:Math.max(1,Math.round(s.day)),cash:Math.round(s.cash*10)/10,rep:Number.isFinite(s.rep)?s.rep:50,totalServed:Number.isFinite(s.totalServed)?s.totalServed:0,updatedAt:Number.isFinite(s.updatedAt)?s.updatedAt:Date.now(),snap:s.snap&&typeof s.snap=="object"?s.snap:null}}function zs(){try{let s=localStorage.getItem(Kd);if(s){let t=JSON.parse(s);return!t||t.v!==2?ca():{v:2,auto:qi(t.auto),manual:{1:qi(t.manual&&t.manual[1]),2:qi(t.manual&&t.manual[2]),3:qi(t.manual&&t.manual[3])}}}let e=localStorage.getItem(Zd);if(e){let t=JSON.parse(e),n=ca();return n.auto=qi({...t,difficulty:"normal",updatedAt:t.updatedAt||Date.now()}),Ar(n),localStorage.removeItem(Zd),n}return ca()}catch{return ca()}}function Ar(s){try{return localStorage.setItem(Kd,JSON.stringify(s)),!0}catch{return!1}}function la(){return zs().auto}function jd(){let s=zs();return{auto:s.auto,manual:s.manual}}function Qd(s){let e=zs();return e.auto=qi({...s,updatedAt:Date.now(),snap:null}),Ar(e)}function ef(s,e){let t=Number(s);if(!Jd.includes(t))return!1;let n=qi({...e,updatedAt:Date.now()});if(!n)return!1;let i=zs();return i.manual[t]=n,Ar(i)}function ha(){let s=zs();s.auto=null,Ar(s)}function tf(s){let e=Number(s);if(!Jd.includes(e))return;let t=zs();t.manual[e]=null,Ar(t)}var Yi={fresh:0,slightly_long:15,long:40,overtime:80},Ti={fresh:["\u8001\u677F\uFF0C\u6765\u5566\uFF1F","\u95FB\u7740\u633A\u9999\u3002","\u6211\u8D76\u65F6\u95F4\uFF0C\u5FEB\u70B9\u513F\u54C8\u3002","\u524D\u9762\u8FD8\u6709\u51E0\u4F4D\uFF1F","\u8001\u6837\u5B50\uFF0C\u8C22\u8C22\u3002","\u4ECA\u5929\u4EBA\u4E5F\u592A\u591A\u4E86\u3002","\u8C46\u6D46\u5148\u6765\u4E00\u53E3\u4E5F\u884C\u3002","\u6211\u770B\u770B\u5403\u5565\u3002","\u8FD9\u961F\u6392\u5F97\u503C\u3002","\u8001\u677F\u65E9\u554A\u3002"],slightly_long:["\u6211\u7684\u597D\u4E86\u6CA1\uFF1F","\u8001\u677F\uFF0C\u522B\u5FD8\u4E86\u6211\u7684\u3002","\u8FD8\u8981\u591A\u4E45\u5440\uFF1F","\u6211\u5FEB\u8FDF\u5230\u4E86\u3002","\u5148\u7ED9\u6211\u88C5\u4E2A\u5305\u5B50\uFF1F","\u8C46\u6D46\u4E0D\u8981\u7CD6\uFF01","\u6211\u7684\u6CB9\u6761\u522B\u51C9\u4E86\u3002","\u524D\u9762\u597D\u4E86\u5417\uFF1F","\u5FEB\u70B9\u5FEB\u70B9\u3002","\u6211\u5730\u94C1\u8981\u8D76\u4E0D\u4E0A\u4E86\u3002"],long:["\u8001\u677F\uFF0C\u6211\u7684\u5355\u5462\uFF1F","\u518D\u7B49\u5C31\u8FDF\u5230\u4E86\u3002","\u8981\u4E0D\u6211\u5148\u4ED8\u94B1\uFF1F","\u8FD9\u9505\u8FD8\u6CA1\u597D\u5417\uFF1F","\u6211\u90FD\u7B49\u4E24\u8F6E\u4E86\u3002","\u6211\u90FD\u7B49{wait}\u79D2\u4E86\u3002","\u5148\u7ED9\u6211\u4E2A\u80FD\u62FF\u7684\u3002","\u540E\u9762\u90FD\u62FF\u8D70\u4E86\u3002","\u662F\u4E0D\u662F\u6F0F\u5355\u4E86\uFF1F","\u6211\u4E0A\u73ED\u8981\u6253\u5361\u7684\u3002"],overtime:["\u518D\u4E0D\u6765\u6211\u8D70\u4E86\u3002","\u6211\u771F\u6765\u4E0D\u53CA\u4E86\u3002","\u9000\u4E86\u5427\u3002","\u4E0B\u6B21\u518D\u6765\u3002","\u8001\u677F\uFF0C\u6211\u7684\u8FD8\u6CA1\u505A\uFF1F","\u6211\u7B49\u4E0D\u4E86\u4E86\u3002","\u5148\u7ED9\u6211\u9000\u94B1\u5427\u3002","\u6211\u8D76\u8F66\uFF0C\u5148\u8D70\u4E86\u3002","\u8FD9\u5355\u4E0D\u8981\u4E86\u3002","\u54CE\uFF0C\u7B97\u4E86\u7B97\u4E86\u3002"],office:["\u6253\u5361\u8981\u8FDF\u5230\u4E86\u3002","\u80FD\u6253\u5305\u5FEB\u70B9\u5417\uFF1F","\u6211\u5730\u94C1\u8FD8\u67095\u5206\u949F\u3002","\u5496\u5561\u4E0D\u7528\u4E86\uFF0C\u8C46\u6D46\u5C31\u884C\u3002","\u8001\u677F\uFF0C\u6211\u8D76\u4F1A\u3002"],student:["\u4E0A\u8BFE\u8981\u8FDF\u5230\u4E86\u3002","\u963F\u59E8\uFF0C\u6211\u7684\u5FEB\u70B9\u3002","\u6211\u8BFE\u95F4\u5C3110\u5206\u949F\u3002","\u540C\u5B66\u5E2E\u6211\u5360\u5EA7\u5462\u3002","\u5305\u5B50\u5148\u7ED9\u6211\u5427\u3002"],elder:["\u4E0D\u6025\uFF0C\u6162\u6162\u6765\u3002","\u6211\u7684\u7CA5\u522B\u592A\u70EB\u3002","\u59D1\u5A18\uFF0C\u6211\u7684\u597D\u4E86\u5417\uFF1F","\u6211\u7B49\u4F1A\u513F\u6CA1\u4E8B\u3002","\u6CB9\u6761\u8981\u8106\u70B9\u3002"],parent:["\u5B69\u5B50\u997F\u4E86\u3002","\u5148\u7ED9\u4E2A\u5305\u5B50\u884C\u5417\uFF1F","\u5B9D\u5B9D\u522B\u6025\uFF0C\u9A6C\u4E0A\u597D\u3002","\u8C46\u6D46\u6E29\u4E00\u70B9\u3002","\u6211\u4EEC\u6253\u5305\u5E26\u8D70\u3002"],regular:["\u8001\u89C4\u77E9\uFF0C\u4F60\u61C2\u7684\u3002","\u4ECA\u5929\u8FD8\u662F\u90A3\u51E0\u6837\u3002","\u6211\u4FE1\u4F60\u5BB6\u901F\u5EA6\u3002","\u8001\u677F\uFF0C\u7ED9\u6211\u7559\u4E2A\u8336\u53F6\u86CB\u3002","\u4E0D\u6025\uFF0C\u5148\u5FD9\u522B\u4EBA\u7684\u3002"],rider:["\u53D6\u9910\uFF0C\u51E0\u53F7\u597D\u4E86\uFF1F","\u6211\u8FD9\u5355\u8981\u8D85\u65F6\u4E86\u3002","\u5148\u7ED9\u6211\u88C5\u4E00\u4E0B\u5427\u3002","\u8FD8\u6709\u51E0\u5206\u949F\uFF1F","\u6211\u8F66\u5728\u5916\u9762\u7B49\u7740\u3002"],dish_bun:["\u5305\u5B50\u597D\u4E86\u5417\uFF1F","\u7ED9\u6211\u62FF\u4FE9\u8089\u5305\u3002","\u5305\u5B50\u522B\u62FF\u51C9\u7684\u3002","\u83DC\u5305\u8FD8\u6709\u5417\uFF1F","\u9992\u5934\u5148\u88C5\u3002"],dish_drink:["\u8C46\u6D46\u4E0D\u8981\u7CD6\u3002","\u7CA5\u6E29\u4E00\u70B9\u3002","\u8C46\u6D46\u522B\u6D12\u4E86\u3002","\u518D\u6765\u6839\u5438\u7BA1\u3002","\u7CA5\u597D\u4E86\u6211\u5148\u7AEF\u3002"],dish_fried:["\u6CB9\u6761\u8981\u8106\u7684\u3002","\u714E\u997C\u5C11\u8FA3\u3002","\u6CB9\u6761\u522B\u8F6F\u4E86\u3002","\u714E\u997C\u52A0\u4E2A\u86CB\u3002","\u6211\u7684\u6CB9\u6761\u5462\uFF1F"],dish_side:["\u8336\u53F6\u86CB\u7ED9\u6211\u7559\u4E00\u4E2A\u3002","\u5C0F\u83DC\u591A\u6765\u70B9\u3002","\u86CB\u5165\u5473\u4E86\u5417\uFF1F","\u54B8\u83DC\u5C11\u4E00\u70B9\u3002","\u5148\u7ED9\u6211\u4E2A\u86CB\u3002"],easter:["\u5E97\u4E3B\u600E\u4E48\u662F\u5976\u5A03\uFF1F","\u6211\u6211\u6211\u6211\u6211\u2026\u2026\u6211\u53BB\uFF0C\u53C8\u5728\u5708\u7C73\uFF1F","kskbl\uFF0Czdjd","\u8FD9\u5E97\u957F\u4E5F\u592A\u9EC4\u4E86\u5427\u3002","\u5976\u5A03\u8FD8\u4F1A\u98A0\u52FA\uFF1F","\u5706\u6EDA\u6EDA\u7684\uFF0C\u624B\u591F\u5F97\u7740\u9505\u5417\uFF1F","\u6211\u4ECA\u5929\u8981\u662F\u8FDF\u5230\uFF0C\u5C31\u662F\u88AB\u8FD9\u53EA\u5976\u5A03\u5BB3\u7684\u3002","zdjd\uFF0C\u8FD9\u961F\u6392\u5F97\u6211\u6000\u7591\u4EBA\u751F\u3002","kskbl\uFF0C\u53C8\u6CA1\u8D76\u4E0A\u70ED\u4E4E\u7684\u3002","\u5B83\u7B11\u4EC0\u4E48\u554A\uFF0C\u6211\u7684\u5355\u8FD8\u6CA1\u597D\u3002","\u5708\u7C73\u5F52\u5708\u7C73\uFF0C\u5305\u5B50\u662F\u771F\u9999\u3002","\u5976\u5A03\u8001\u677F\u662F\u4E0D\u662F\u4E0D\u4F1A\u8BF4\u8BDD\uFF1F"],happy:["\u4F60\u5BB6\u5305\u5B50\u771F\u9999\u3002","\u660E\u5929\u8FD8\u6765\u3002","\u8001\u677F\u8BB0\u6027\u597D\u3002","\u8FD9\u901F\u5EA6\u53EF\u4EE5\u3002","\u8C46\u6D46\u771F\u4E0D\u9519\u3002","\u6392\u961F\u4E5F\u503C\u4E86\u3002","\u8FD8\u662F\u8001\u5473\u9053\u3002","\u7ED9\u4F60\u4E2A\u597D\u8BC4\u3002","\u4E0B\u6B21\u5E26\u540C\u4E8B\u6765\u3002","\u8001\u677F\u8F9B\u82E6\u4E86\u3002"]};var fh="zaogaofeng.stats.v1",wi=[{id:"first_order",name:"\u5F00\u95E8\u5927\u5409",desc:"\u5B8C\u6210\u7B2C\u4E00\u7B14\u8BA2\u5355",rarity:"\u94DC",points:5,reward:"",goal:1,stat:"orders"},{id:"newbie",name:"\u65E9\u9910\u65B0\u624B",desc:"\u7D2F\u8BA1\u5B8C\u6210 20 \u5355",rarity:"\u94DC",points:5,reward:"",goal:20,stat:"orders"},{id:"hundred",name:"\u767E\u5355\u5C0F\u5E97",desc:"\u7D2F\u8BA1\u5B8C\u6210 100 \u5355",rarity:"\u94F6",points:15,reward:"",goal:100,stat:"orders"},{id:"thousand",name:"\u5343\u5355\u8001\u5E97",desc:"\u7D2F\u8BA1\u5B8C\u6210 1000 \u5355",rarity:"\u91D1",points:40,reward:"\u79F0\u53F7\u300C\u65E9\u9910\u8001\u5B57\u53F7\u300D",goal:1e3,stat:"orders"},{id:"menu5",name:"\u83DC\u5355\u521D\u63A2",desc:"\u89E3\u9501 5 \u79CD\u65E9\u9910",rarity:"\u94DC",points:5,reward:"",goal:5,stat:"dishes"},{id:"menu15",name:"\u83DC\u5355\u5C0F\u6210",desc:"\u89E3\u9501 15 \u79CD\u65E9\u9910",rarity:"\u94F6",points:15,reward:"\u88C5\u9970\uFF1A\u83DC\u5355\u677F\u52A0\u6302\u300C\u672C\u5E97\u62DB\u724C\u300D",goal:15,stat:"dishes"},{id:"combo10",name:"\u5957\u9910\u5F00\u5356",desc:"\u7D2F\u8BA1\u552E\u51FA 10 \u4EFD\u5957\u9910\uFF08\u4E00\u4EFD\u8BA2\u5355\u4EA4\u9F50 2 \u6837\uFF09",rarity:"\u94DC",points:5,reward:"",goal:10,stat:"combos"},{id:"good10",name:"\u597D\u8BC4\u521D\u6765",desc:"\u7D2F\u8BA1\u6536\u5230 10 \u6761\u597D\u8BC4",rarity:"\u94DC",points:5,reward:"",goal:10,stat:"praises"},{id:"good200",name:"\u597D\u8BC4\u5982\u6F6E",desc:"\u7D2F\u8BA1\u6536\u5230 200 \u6761\u597D\u8BC4",rarity:"\u94F6",points:15,reward:"",goal:200,stat:"praises"},{id:"fast",name:"\u51FA\u9910\u5FEB\u624B",desc:"\u5355\u65E5\u51FA\u9910 30 \u5355\uFF0C\u4E14\u5E73\u5747\u51FA\u9910\u4E0D\u8D85\u8FC7 20 \u79D2",rarity:"\u94F6",points:15,reward:"",goal:1,stat:"fastDays"},{id:"regular3",name:"\u719F\u5BA2\u6765\u4E86",desc:"3 \u4F4D\u719F\u5BA2\u597D\u611F\u6EE1\u7EA7",rarity:"\u94F6",points:15,reward:"\u88C5\u9970\uFF1A\u95E8\u53E3\u6302\u300C\u719F\u5BA2\u5E38\u6765\u300D",goal:3,stat:"regulars"},{id:"brave",name:"\u52C7\u54E5\u521B\u4E1A\u8BF4",desc:"\u4E00\u5929\u4E2D\u5B8C\u6210 0 \u4E2A\u8BA2\u5355",rarity:"\u91D1",points:0,coin:688,reward:"688 \u91D1\u5E01",goal:1,stat:"zeroDays"},{id:"destroyer",name:"\u98DF\u7269\u6BC1\u706D\u8005",desc:"\u4E00\u5929\u4E2D\u7D2F\u8BA1\u629B\u6295 10 \u4E2A\u98DF\u7269",rarity:"\u94DC",points:0,coin:100,reward:"100 \u91D1\u5E01",goal:1,stat:"throwDays"},{id:"soycp",name:"\u8C46\u6D46\u6CB9\u6761 CP",desc:"\u540C\u4E00\u4F4D\u987E\u5BA2\u8FDE\u7EED 3 \u5929\u4E70\u8C46\u6D46 + \u6CB9\u6761",rarity:"\u91D1",points:30,reward:"\u5F69\u86CB\u88C5\u9970\uFF1A\u95E8\u53E3\u5899\u4E0A\u6302\u4E00\u5757\u300C\u8C46\u6D46\u6CB9\u6761\u300D\u6728\u724C",hidden:!0,goal:1,stat:"cpDone"}];function by(){return{v:1,orders:0,dishes:[],combos:0,praises:0,fastDays:0,zeroDays:0,throwDays:0,pendingCoins:0,cpDone:0,cpStreak:{},regulars:{},unlocked:{},points:0,today:{orders:0,waitSum:0}}}var Hs=null;function _n(){if(Hs)return Hs;let s=by();try{let e=localStorage.getItem(fh);if(e){let t=JSON.parse(e);t&&t.v===1&&(Object.assign(s,t),s.dishes=Array.isArray(t.dishes)?t.dishes:[],s.cpStreak=t.cpStreak&&typeof t.cpStreak=="object"?t.cpStreak:{},s.regulars=t.regulars&&typeof t.regulars=="object"?t.regulars:{},s.unlocked=t.unlocked&&typeof t.unlocked=="object"?t.unlocked:{},s.today=t.today||{orders:0,waitSum:0})}}catch{}return Hs=s,s}function $i(s){Hs=s;try{localStorage.setItem(fh,JSON.stringify(s))}catch{}}function ph(){return Hs=null,_n()}function mh(s,e=_n()){if(s.id==="fast")return e.fastDays||0;let t=e[s.stat];return s.stat==="dishes"?t.length:s.stat==="regulars"?Object.values(e.regulars).filter(n=>n>=100).length:s.id==="soycp"?e.cpDone||0:t||0}function Vs(s){let e=[];for(let t of wi){if(s.unlocked[t.id])continue;mh(t,s)>=t.goal&&(s.unlocked[t.id]={at:Date.now()},s.points+=t.points,t.coin&&(s.pendingCoins=(s.pendingCoins||0)+t.coin),e.push(t))}return e}function nf({dishes:s=[],waited:e=0,isCombo:t=!1}={}){let n=_n();n.orders+=1,n.today.orders+=1,n.today.waitSum+=Math.max(0,e),t&&(n.combos+=1);for(let r of s)n.dishes.includes(r)||n.dishes.push(r);let i=Vs(n);return $i(n),i}function sf(){let s=_n();s.praises+=1;let e=Vs(s);return $i(s),e}function rf(s,e){let t=_n(),n=Math.min(100,(t.regulars[s]||0)+e);t.regulars[s]=n;let i=Vs(t);return $i(t),i}function of(s,e){let t=_n(),n=e.includes("soy"),i=e.includes("youtiao");if(n&&i){let o=(t.cpStreak[s]||0)+1;t.cpStreak[s]=o,o>=3&&!t.cpDone&&(t.cpDone=1)}else t.cpStreak[s]=0;let r=Vs(t);return $i(t),r}function af(){let s=_n();s.today.orders>=30&&s.today.waitSum/s.today.orders<=20&&(s.fastDays=(s.fastDays||0)+1),s.today={orders:0,waitSum:0};let e=Vs(s);return $i(s),e}function cf({served:s=0,thrown:e=0}={}){let t=_n();s===0&&(t.zeroDays=1),e>=10&&(t.throwDays=1);let n=Vs(t);return $i(t),n}function lf(){let s=_n(),e=s.pendingCoins||0;return e&&(s.pendingCoins=0,$i(s)),e}function hf(){Hs=null;try{localStorage.removeItem(fh)}catch{}}var uf=["office","student","elder","parent","regular","rider"],$t=(s,e,t)=>Math.max(e,Math.min(t,s)),Ey=(s,e,t)=>{let n=e-s;for(;n>Math.PI;)n-=Math.PI*2;for(;n<-Math.PI;)n+=Math.PI*2;return s+n*t};function Ty(){let s=document.createElement("canvas");s.width=s.height=64;let e=s.getContext("2d"),t=e.createRadialGradient(32,32,2,32,32,30);return t.addColorStop(0,"rgba(255,255,255,0.9)"),t.addColorStop(.5,"rgba(255,255,255,0.35)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new Hi(s)}var gh=class{constructor(e,t=18){this.tex=Ty(),this.items=[];for(let n=0;n<t;n++){let i=new pr({map:this.tex,transparent:!0,opacity:0,depthWrite:!1,color:16777215}),r=new Io(i);r.visible=!1,r.scale.set(.4,.4,1),e.add(r),this.items.push({s:r,life:0,max:1,vy:0,size:.4,vx:0,vz:0})}this.cursor=0}emit(e,t,n,i,r=1){for(let o=0;o<r;o++){let a=this.items[this.cursor];this.cursor=(this.cursor+1)%this.items.length,a.s.position.set(e+(Math.random()-.5)*.3,t,n+(Math.random()-.5)*.3),a.s.material.color.set(i),a.s.material.opacity=.5,a.s.visible=!0,a.life=a.max=.9+Math.random()*.5,a.vy=.35+Math.random()*.3,a.vx=(Math.random()-.5)*.16,a.vz=(Math.random()-.5)*.16,a.size=.28+Math.random()*.16,a.s.scale.set(a.size,a.size,1)}}update(e){for(let t of this.items){if(t.life<=0)continue;if(t.life-=e,t.life<=0){t.s.visible=!1,t.s.material.opacity=0;continue}let n=t.life/t.max;t.s.position.x+=t.vx*e,t.s.position.z+=t.vz*e,t.s.position.y+=t.vy*e,t.s.material.opacity=.42*n;let i=t.size*(1.7-n*.7);t.s.scale.set(i,i,1)}}},ua=class{constructor({scene:e,camera:t,world:n,sound:i,ui:r,regionKey:o="base",difficultyKey:a="normal",durationKey:c="normal",resume:l=null,playerModel:h=null,customerTemplate:u=null}){this.scene=e,this.camera=t,this.world=n,this.sound=i,this.ui=r,this.region=Ot[o]||Ot.base,this.menu=this.region.menu.map(d=>Lt[d]),this.difficultyKey=en[a]?a:"normal",this.difficulty=en[this.difficultyKey],this.durationKey=gn[c]?c:"normal",this.duration=gn[this.durationKey],this.resume=l,this.paused=!1,this.time=0,this.day=l?.day??1,this.cash=l?.cash??mn.startCash,this.rep=l?.rep??50,this.totalServed=l?.totalServed??0,this.stamina=Yt.staminaMax,this.phase="intro",this.prepTime=0,this.rushTime=0,this.served=0,this.revenue=0,this.ingredientCost=0,this.complaints=0,this.waste=0,this.lostOrders=0,this.orders=[],this.customers=[],this.schedule=[],this.spawnIndex=0,this.held=null,this.heldMesh=null,this.ingredients=0,this.projectiles=[],this.throwCd=0,this.throwCount=0,this.lastCoins=0,this.stains=[],this.cleanT=0,this.cleanTarget=null,this.faceDir=new w(0,0,0),this.keys={},this.interactCd=0,this.near=null,this.regenCd=0,this.exhausted=!1,this.jumpY=0,this.jumpVel=0,this.jumpT=0,this.flipT=0,this.flipDur=.88,this.dance=0,this.moving=!1,this.speed01=0,this.dayStart={cash:this.cash,rep:this.rep},this.toastAt={},this.hudAt=0,this.hintFlags={},this.steam=new gh(e,20),this.murmurAt=0,this.dayMenu={},this.cpStreak={},this.customerTemplate=u,this.player=Nd(h),this.animator=this.player.animator||null,this.player.group.position.copy(n.playerStart),this.player.group.position.y=0,e.add(this.player.group),this.buildStations(),this.buildRing(),this.buildThrowArc(),this.bindInput()}buildStations(){let e={drink:1.78,steam:1.95,fry:1.32,boil:1.62};this.stations=this.world.stations.map(t=>{let n=t.role?this.region.stationRecipes[t.role]:null,i=n?Lt[n]:null,r={...t,recipe:i,state:"empty",progress:0,ready:0,burnt:0,readyAge:0,capacity:i?i.capacity:0,cook:i?i.cook:0,burn:i?i.burn*(this.difficulty.burn??1):0,steamAcc:Math.random()};if(t.type==="machine"){let o=this.makeBar(t,e[t.id]||1.8);r.bar=o,r.warn=this.makeWarn(t,(e[t.id]||1.8)+.32)}return r})}makeBar(e,t){let n=new qe,i=new te(new Et(1.12,.15),new xt({color:2168850,transparent:!0,opacity:.7,depthTest:!1}));i.renderOrder=20;let r=new Et(1.04,.09);r.translate(.52,0,.001);let o=new te(r,new xt({color:15773770,depthTest:!1}));return o.position.x=-.52,o.scale.x=.001,o.renderOrder=21,n.add(i),n.add(o),n.position.set(e.worldPos.x,t,e.worldPos.z+.28),n.visible=!1,this.scene.add(n),{group:n,fill:o}}makeWarn(e,t){let n=document.createElement("canvas");n.width=256,n.height=128;let i=n.getContext("2d");i.fillStyle="rgba(120,20,14,0.9)",i.beginPath(),i.roundRect(6,6,244,116,18),i.fill(),i.fillStyle="#ffe9c9",i.font='bold 64px "Microsoft YaHei", sans-serif',i.textAlign="center",i.textBaseline="middle",i.fillText("\u7CCA\u4E86\uFF01",128,68);let r=new Hi(n);r.colorSpace=mt;let o=new te(new Et(.62,.31),new xt({map:r,transparent:!0,depthTest:!1}));return o.position.set(e.worldPos.x,t,e.worldPos.z+.3),o.renderOrder=22,o.visible=!1,this.scene.add(o),o}buildRing(){let e=new vr(.42,.56,32);e.rotateX(-Math.PI/2),this.ring=new te(e,new xt({color:16765562,transparent:!0,opacity:.85,depthWrite:!1})),this.ring.position.y=.02,this.ring.visible=!1,this.scene.add(this.ring)}bindInput(){window.addEventListener("keydown",e=>{if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(e.code)&&e.preventDefault(),e.repeat){this.keys[e.code]=!0;return}this.keys[e.code]=!0,e.code==="KeyE"&&this.interact(),e.code==="KeyQ"&&this.throwHeld(),e.code==="KeyV"&&this.cleanStain(),e.code==="Space"&&this.jump(),e.code==="KeyF"&&this.backflip();let t={Digit1:1,Digit2:2,Digit3:3,Digit4:4}[e.code];t&&this.toggleDance(t)}),window.addEventListener("keyup",e=>{this.keys[e.code]=!1}),window.addEventListener("blur",()=>{this.keys={}})}startNewRun(){this.day=1,this.cash=mn.startCash,this.rep=50,this.totalServed=0,this.startDay(!0)}continueRun(){this.resume?.snap?this.restoreRun(this.resume.snap):this.startDay(!1)}startDay(e=!1){this.clearEntities(),this.player.group.position.copy(this.world.playerStart),this.player.group.rotation.y=Math.PI,this.stamina=Yt.staminaMax,this.exhausted=!1,this.served=0,this.revenue=0,this.ingredientCost=0,this.complaints=0,this.waste=0,this.lostOrders=0,this.ingredients=0,this.throwCount=0,this.lastCoins=0,this.clearStains(),this.cleanT=0,this.cleanTarget=null;for(let t of this.projectiles)this.scene.remove(t.mesh);this.projectiles=[],this.rushTime=0,this.spawnIndex=0,this.prepTime=mn.prep,this.schedule=[],this.phase="prep",this.dayStart={cash:this.cash,rep:this.rep,totalServed:this.totalServed};for(let t of this.stations)t.state="empty",t.progress=0,t.ready=0,t.burnt=0,t.readyAge=0,t.capacity=t.recipe?t.recipe.capacity:0,t.bar&&(t.bar.group.visible=!1),t.warn&&(t.warn.visible=!1);this.hintFlags={},this.murmurAt=0,this.ui.setScreen(null),this.ui.region(this.region.name,this.day,this.difficulty.name),this.ui.hint("\u5148\u5230\u5DE6\u8FB9\u51B0\u67DC\u6309 E \u62FF\u98DF\u6750\uFF0C\u518D\u5230\u7076\u53F0\u5F00\u9505\uFF1B\u5907\u6599\u7ED3\u675F\u524D\u5C3D\u91CF\u591A\u505A\u51E0\u9505\u3002"),this.hintTimeout=9,this.sound.init(),this.persist()}persist(){Qd({region:this.region.key,difficulty:this.difficultyKey,durationKey:this.durationKey,day:this.day,cash:this.cash,rep:this.rep,totalServed:this.totalServed})}snapshot(){return{v:1,phase:this.phase,prepTime:this.prepTime,rushTime:this.rushTime,schedule:this.schedule.slice(),spawnIndex:this.spawnIndex,stamina:this.stamina,ingredients:this.ingredients,dayMenu:{...this.dayMenu},durationKey:this.durationKey,dayStart:{...this.dayStart},stats:{served:this.served,revenue:this.revenue,ingredientCost:this.ingredientCost,complaints:this.complaints,waste:this.waste,lostOrders:this.lostOrders},stains:this.stains.map(e=>({x:+e.x.toFixed(2),z:+e.z.toFixed(2)})),player:{x:this.player.group.position.x,z:this.player.group.position.z,rot:this.player.group.rotation.y},held:this.held?{id:this.held.id,burnt:!!this.held.burnt}:null,stations:this.stations.filter(e=>e.type==="machine").map(e=>({id:e.id,state:e.state,progress:e.progress,ready:e.ready,burnt:e.burnt,readyAge:e.readyAge,capacity:e.capacity})),orders:this.orders.map(e=>({id:e.id,lines:e.lines.map(t=>({id:t.id,need:t.need,done:t.done})),patience:e.patience,max:e.max,colorIdx:e.customer?e.customer.colorIdx:0}))}}saveToSlot(e){return this.phase!=="prep"&&this.phase!=="rush"?!1:ef(e,{region:this.region.key,difficulty:this.difficultyKey,day:this.day,cash:this.cash,rep:this.rep,totalServed:this.totalServed,snap:this.snapshot()})}canManualSave(){return this.phase==="prep"||this.phase==="rush"}restoreRun(e){this.clearEntities(),this.dayStart=e.dayStart?{cash:Number.isFinite(e.dayStart.cash)?e.dayStart.cash:this.cash,rep:Number.isFinite(e.dayStart.rep)?e.dayStart.rep:this.rep,totalServed:e.dayStart.totalServed||0}:{cash:this.cash,rep:this.rep,totalServed:this.totalServed},this.phase=e.phase==="rush"?"rush":"prep",this.prepTime=Number.isFinite(e.prepTime)?e.prepTime:mn.prep,this.rushTime=Number.isFinite(e.rushTime)?e.rushTime:0,this.schedule=Array.isArray(e.schedule)?e.schedule.slice():[],this.spawnIndex=Number.isFinite(e.spawnIndex)?e.spawnIndex:0,this.stamina=Number.isFinite(e.stamina)?e.stamina:Yt.staminaMax,this.ingredients=Number.isFinite(e.ingredients)?e.ingredients:0;let t=e.stats||{};this.served=t.served||0,this.revenue=t.revenue||0,this.ingredientCost=t.ingredientCost||0,this.complaints=t.complaints||0,this.waste=t.waste||0,this.lostOrders=t.lostOrders||0,this.clearStains();for(let o of e.stains||[])Number.isFinite(o.x)&&Number.isFinite(o.z)&&this.addStain(o.x,o.z);let n=e.player||{},i=Number.isFinite(n.x)?n.x:this.world.playerStart.x,r=Number.isFinite(n.z)?n.z:this.world.playerStart.z;this.player.group.position.set(i,0,r),this.player.group.rotation.y=Number.isFinite(n.rot)?n.rot:Math.PI;for(let o of this.stations){o.state="empty",o.progress=0,o.ready=0,o.burnt=0,o.readyAge=0,o.capacity=o.recipe?o.recipe.capacity:0,o.bar&&(o.bar.group.visible=!1),o.warn&&(o.warn.visible=!1);let a=(e.stations||[]).find(c=>c.id===o.id);!a||o.type!=="machine"||(o.state=a.state||"empty",o.progress=a.progress||0,o.ready=a.ready||0,o.burnt=a.burnt||0,o.readyAge=a.readyAge||0,Number.isFinite(a.capacity)&&(o.capacity=a.capacity))}for(let o of e.orders||[]){if(this.orders.length>=Fs.maxActive)break;let a=this.orders.length,c={id:o.id||"o"+Math.random().toString(36).slice(2,8),lines:(o.lines||[]).map(u=>({id:u.id,need:Math.max(1,Math.round(u.need||1)),done:Math.min(Math.round(u.done||0),Math.max(1,Math.round(u.need||1)))})),patience:Number.isFinite(o.patience)?o.patience:this.patienceForDay(),max:Number.isFinite(o.max)?o.max:this.patienceForDay(),customer:null};if(!c.lines.length)continue;let l=this.makeCustomer(a,o.colorIdx),h=this.world.customerSlots[a%this.world.customerSlots.length];l.group.position.set(h.x,0,h.z),c.customer=l,l.order=c,this.orders.push(c)}e.held&&this.giveItem({...e.held}),this.dance=0,this.ui.setScreen(null),this.ui.region(this.region.name,this.day,this.difficulty.name),this.ui.hint(`\u7EE7\u7EED\u8425\u4E1A\uFF1A\u7B2C ${this.day} \u5929 \xB7 ${this.phase==="rush"?"\u65E9\u9AD8\u5CF0":"\u5907\u6599"} \xB7 ${this.difficulty.name}\u96BE\u5EA6`),this.hintTimeout=5,this.sound.init(),this.setHandUI(),e.dayMenu&&(this.dayMenu={...e.dayMenu})}clearEntities(){for(let e of this.orders)e.customer&&this.scene.remove(e.customer.group);for(let e of this.customers)this.scene.remove(e.group);this.orders=[],this.customers=[],this.clearHeld(),this.setHandUI()}beginRush(){this.phase==="prep"&&(this.phase="rush",this.rushTime=0,this.schedule=this.buildSchedule(this.customersForDay()),this.spawnIndex=0,this.ui.hint("\u5F00\u95E8\uFF01\u8BA2\u5355\u4ECE\u7A97\u53E3\u9012\u8FDB\u6765\uFF1A\u505A\u597D\u4E00\u6837\u5C31\u5728\u51FA\u9910\u7A97\u53E3\u6309 E \u4EA4\u4ED8\u3002"),this.hintTimeout=8,this.sound.tone(880,.12,"sine",.3),setTimeout(()=>this.sound.tone(1174,.2,"sine",.3),120))}skipPrep(){this.phase==="prep"&&(this.prepTime=0,this.beginRush())}customersForDay(){let e=this.region.day.customers+(this.day-1)*mn.customerStep;return Math.max(4,Math.round(e*this.difficulty.customers))}patienceForDay(){let e=this.region.day.patience-(this.day-1)*mn.patienceStep,t=this.region.patienceMul??1;return $t(Math.round(e*t*this.difficulty.patience),30,220)}rentForDay(){let e=this.region.day.rent+(this.day-1)*mn.rentStep;return Math.round(e*this.difficulty.rent*(this.duration?.rent??1))}rushForDay(){return this.duration?.rush??mn.rush}buildSchedule(e){let t=this.rushForDay(),n=sa.map(c=>c.to-c.from),i=n.reduce((c,l)=>c+l,0),r=[],o=0,a=Math.min(4,t*.03);return sa.forEach((c,l)=>{let h=l===sa.length-1?e-o:Math.max(1,Math.round(n[l]/i*e));o+=h;let u=c.from*t,d=Math.max(1,(c.to-c.from)*t);for(let f=0;f<h;f++){let g=u+d*(f+.5)/h+(Math.random()-.5)*a;r.push($t(g,1,t*.78))}}),r.sort((c,l)=>c-l)}endDay(){if(this.phase!=="rush")return;this.phase="settle";let e=this.rentForDay(),t=mn.utilities;this.lostOrders=this.orders.length;for(let u of this.orders)this.dismissCustomer(u,!1);this.orders=[],this.clearHeld();let n=this.revenue-this.ingredientCost-e-t;this.cash+=n,this.totalServed+=this.served;let i=[],r=_n();i.push(...af());let o=Object.values(r.regulars||{}).filter(u=>u>=100).length,a=null,c=0;for(let[u,d]of Object.entries(this.dayMenu)){if(!d.includes("soy")||!d.includes("youtiao"))continue;let f=(this.cpStreak[u]||0)+1;f>c&&(c=f,a=u)}a&&(this.cpStreak[a]=c,i.push(...of(a,this.dayMenu[a])));for(let u of Object.keys(this.dayMenu))i.push(...rf(u,6));i.push(...cf({served:this.served,thrown:this.throwCount}));let l=lf();this.lastCoins=l,l>0&&(this.cash+=l,this.toast(`\u6210\u5C31\u5956\u52B1 ${l} \u91D1\u5E01\u5165\u8D26`,"ok")),this.dayMenu={};let h=Object.values(_n().regulars||{}).filter(u=>u>=100).length;if(this.lastDirty=this.stains.length,this.lastDirty>0){let u=this.difficulty.cleanPenalty??1;this.rep=$t(this.rep-this.lastDirty*Pt.dirtyRepPenalty*u,0,100)}this.clearStains(),this.lastSettle={rent:e,utilities:t,net:n},this.cash<0?this.showGameOver():(this.ui.showSettle(this.settleData(n,e,t),i,{regulars:h,cp:c,regularsBefore:o}),this.sound.dayEnd()),this.ui.hint("");for(let u of i)this.ui.achievement?.(u)}settleData(e,t,n){let i=[e>=90+this.day*20,this.complaints<=1&&this.lostOrders===0,this.rep>=65&&this.stamina>=40];return{day:this.day,revenue:this.revenue,cost:this.ingredientCost,rent:t,utilities:n,net:e,served:this.served,complaints:this.complaints,lost:this.lostOrders,waste:this.waste,dirty:this.lastDirty||0,dirtyRep:(this.lastDirty||0)*Pt.dirtyRepPenalty*(this.difficulty.cleanPenalty??1),coins:this.lastCoins||0,rep:this.rep,stamina:Math.round(this.stamina),cash:this.cash,stars:i.map(r=>r?"\u2605":"\u2606").join(" "),verdict:e>=80?"\u4ECA\u5929\u8D5A\u5230\u4E86\uFF0C\u660E\u5929\u623F\u79DF\u6709\u7740\u843D\u3002":e>=0?"\u521A\u591F\u7CCA\u53E3\uFF0C\u660E\u5929\u5F97\u518D\u5FEB\u4E00\u70B9\u3002":"\u5012\u8D34\u94B1\u7684\u4E00\u5929\u3002"}}nextDay(){this.day+=1,this.rep=$t(this.rep,0,100),this.startDay()}retryDay(){this.cash=this.dayStart.cash,this.rep=this.dayStart.rep,this.totalServed=this.dayStart.totalServed,this.startDay()}showGameOver(){this.phase="over",ha(),this.ui.showGameOver({day:this.day,cash:this.cash,served:this.totalServed,complaints:this.complaints,rep:this.rep,region:this.region.name})}interact(){if(this.paused||this.phase!=="prep"&&this.phase!=="rush"||this.interactCd>0)return;this.interactCd=.16;let e=this.near;if(e){if(e.type==="machine")return this.useMachine(e);if(e.type==="serve")return this.useServe();if(e.type==="trash")return this.useTrash();if(e.type==="fridge")return this.takeIngredients()}}takeIngredients(){if(this.ingredients>=6)return this.toast("\u98DF\u6750\u7BB1\u5DF2\u7ECF\u6EE1\u6EE1\u5F53\u5F53\u3002","info");this.ingredients=Math.min(6,this.ingredients+3),this.sound.pickup(),this.toast(`\u4ECE\u51B0\u67DC\u62FF\u4E86 3 \u4EFD\u98DF\u6750\uFF08\u5171 ${this.ingredients} \u4EFD\uFF09`,"ok"),this.ui.pantry(this.ingredients)}useMachine(e){if(e.state==="empty"){if(this.held)return this.toast("\u624B\u4E0A\u8FD8\u6709\u4E1C\u897F\uFF0C\u5148\u9001\u51FA\u53BB\u3002","warn");if(this.ingredients<=0)return this.ui.hint("\u9505\u662F\u7A7A\u7684\uFF1A\u5148\u53BB\u5DE6\u8FB9\u51B0\u67DC\u6309 E \u53D6\u98DF\u6750\u3002"),this.hintTimeout=4,this.toast("\u6CA1\u6709\u98DF\u6750\uFF0C\u5148\u53BB\u51B0\u67DC\u62FF\u3002","warn");this.ingredients-=1,this.ui.pantry(this.ingredients),e.state="cooking",e.progress=0,e.capacity=e.recipe.capacity,this.cash-=e.recipe.cost*e.capacity,this.ingredientCost+=e.recipe.cost*e.capacity,this.sound.startCook(),this.toast(`\u5F00\u59CB\u505A ${e.recipe.name} \xD7${e.capacity}\uFF08${e.cook} \u79D2\uFF09`,"ok");return}if(e.state==="cooking"){let t=Math.max(0,e.cook-e.progress);return this.toast(`${e.recipe.name}\u8FD8\u8981 ${t.toFixed(1)} \u79D2`,"info")}if(this.held)return this.toast("\u624B\u4E0A\u8FD8\u6709\u4E1C\u897F\u3002","warn");e.ready>0?(e.ready-=1,this.giveItem({id:e.recipe.id,burnt:!1}),this.sound.pickup(),this.toast(`\u62FF\u8D77 ${e.recipe.name}`,"ok")):e.burnt>0&&(e.burnt-=1,this.giveItem({id:e.recipe.id,burnt:!0}),this.sound.pickup(),this.toast(`${e.recipe.burnLabel}\uFF0C\u5F97\u6254\u6389`,"warn")),e.ready<=0&&e.burnt<=0&&(e.state="empty")}useServe(){if(!this.held)return this.toast("\u5148\u628A\u505A\u597D\u7684\u9910\u62FF\u8FC7\u6765\u3002","info");let e=this.held,t=e.burnt&&e.id==="soy";if(e.burnt&&!t)return this.toast("\u8FD9\u4EFD\u5DF2\u7ECF\u574F\u4E86\uFF0C\u62FF\u53BB\u5783\u573E\u6876\u3002","warn");let n=null;for(let o of this.orders)if(o.lines.some(a=>a.id===e.id&&a.done<a.need)){n=o;break}if(!n)return this.toast("\u6CA1\u6709\u5BA2\u4EBA\u70B9\u8FD9\u4E2A\u3002","warn");let i=n.lines.find(o=>o.id===e.id&&o.done<o.need);i.done+=1;let r=Lt[e.id].price-(t?1:0);this.cash+=r,this.revenue+=r,this.served+=1,this.clearHeld(),this.serveFx(n),this.sound.serve(),this.toast(t?`\u8C46\u6D46\u51C9\u4E86\uFF0C\u6309 ${r} \u5143\u6536`:`\u4EA4\u4ED8 ${Lt[e.id].name} +${r} \u5143`,"ok"),n.lines.every(o=>o.done>=o.need)&&this.completeOrder(n)}useTrash(){if(!this.held)return this.toast("\u5783\u573E\u6876\uFF1A\u624B\u91CC\u6CA1\u4E1C\u897F\u3002","info");let e=this.held.burnt;this.waste+=1,this.clearHeld(),this.sound.trash(),this.toast(e?"\u6254\u6389\u4E86\u7CCA\u6389\u7684\u9910\u3002":"\u628A\u597D\u597D\u7684\u9910\u6254\u4E86\uFF0C\u6D6A\u8D39\u3002",e?"info":"warn")}throwHeld(){if(this.paused||this.phase!=="prep"&&this.phase!=="rush"||this.throwCd>0)return;if(!this.held||!this.heldMesh)return this.toast("\u624B\u4E0A\u6CA1\u4E1C\u897F\u53EF\u6254\u3002","info");this.throwCd=.35;let e=this.heldMesh;this.player.anchor.remove(e),this.player.anchor.getWorldPosition(e.position),e.rotation.set(0,0,0),this.scene.add(e);let t=this.faceDir.clone();t.lengthSq()<.01&&t.set(Math.sin(this.player.group.rotation.y),0,Math.cos(this.player.group.rotation.y)),t.normalize(),this.projectiles.push({mesh:e,item:this.held,vel:new w(t.x*Pt.speed,Pt.lift,t.z*Pt.speed),landed:!1,life:0,age:0,spin:(Math.random()-.5)*10}),this.held=null,this.heldMesh=null,this.throwCount+=1,this.setHandUI(),this.sound.throw()}updateProjectiles(e){if(this.throwCd>0&&(this.throwCd=Math.max(0,this.throwCd-e)),!this.projectiles.length)return;let t=this.stations.find(i=>i.type==="trash"),n=this.player.group.position;for(let i of[...this.projectiles]){if(i.landed){if(i.life-=e,Math.hypot(n.x-i.mesh.position.x,n.z-i.mesh.position.z)<.9){this.scene.remove(i.mesh),this.projectiles=this.projectiles.filter(a=>a!==i),this.giveItem(i.item),this.sound.pickup(),this.toast("\u6361\u56DE\u4E86\u6389\u5728\u5730\u4E0A\u7684\u9910\u3002","info");continue}i.life<=0&&(this.scene.remove(i.mesh),this.projectiles=this.projectiles.filter(a=>a!==i),this.waste+=1);continue}if(i.age+=e,i.vel.y-=18*e,i.mesh.position.addScaledVector(i.vel,e),i.mesh.rotation.x+=i.spin*e,i.mesh.rotation.z+=i.spin*.7*e,t&&Math.hypot(i.mesh.position.x-t.worldPos.x,i.mesh.position.z-t.worldPos.z)<.75&&i.mesh.position.y<1.6){this.scene.remove(i.mesh),this.projectiles=this.projectiles.filter(a=>a!==i),this.waste+=1,this.cash+=Pt.trashReward,this.sound.trash(),this.steam.emit(t.worldPos.x,1,t.worldPos.z,10477706,3),this.toast(`\u6295\u8FDB\u5783\u573E\u6876\uFF1A+${Pt.trashReward} \u5143`,"ok");continue}let r=null;for(let a of this.customers){if(a.leaving)continue;let c=a.group.position;if(!(i.mesh.position.y>1.75||i.mesh.position.y<.15)&&!(Math.hypot(i.mesh.position.x-c.x,i.mesh.position.z-c.z)>.55)){r=a;break}}if(r){let a=r.group.position;r.order&&(r.order.patience=Math.max(0,r.order.patience-15)),this.rep=$t(this.rep-2,0,100),this.cash-=Pt.floorPenalty,this.addStain(a.x,a.z),this.scene.remove(i.mesh),this.projectiles=this.projectiles.filter(c=>c!==i),this.sound.error(),this.ui.murmur?.(r.slotIndex,"\u54CE\u54DF\uFF01\u4F60\u6254\u6211\uFF1F"),this.toast(`\u7838\u5230\u5BA2\u4EBA\u4E86\uFF1A-${Pt.floorPenalty} \u5143\uFF0C\u58F0\u671B -2\uFF0C\u5BA2\u4EBA\u66F4\u6025\u4E86\u3002`,"bad");continue}let o=(this.world.colliders||[]).find(a=>(a.top>=3||i.age>.14)&&i.mesh.position.x>a.minX-.1&&i.mesh.position.x<a.maxX+.1&&i.mesh.position.z>a.minZ-.1&&i.mesh.position.z<a.maxZ+.1&&i.mesh.position.y<(a.top??4.4)+.06);if(o){let a=$t(i.mesh.position.x,o.minX,o.maxX),c=$t(i.mesh.position.z,o.minZ,o.maxZ),l=i.mesh.position.x-a,h=i.mesh.position.z-c,u=Math.hypot(l,h)||1;i.mesh.position.set(a+l/u*.14,.06,c+h/u*.14),i.landed=!0,i.life=5,this.cash-=Pt.floorPenalty,this.addStain(i.mesh.position.x,i.mesh.position.z),this.sound.drop(),this.toast(`\u7838\u5728\u5899\u4E0A\u4E86\uFF1A-${Pt.floorPenalty} \u5143\uFF0C\u6309 V \u6253\u626B\u3002`,"warn");continue}i.mesh.position.y<=.06&&(i.mesh.position.y=.06,i.mesh.rotation.x=0,i.landed=!0,i.life=5,i.mesh.position.x=$t(i.mesh.position.x,this.world.bounds.minX,this.world.bounds.maxX),i.mesh.position.z=$t(i.mesh.position.z,this.world.bounds.minZ,this.world.bounds.maxZ),this.cash-=Pt.floorPenalty,this.addStain(i.mesh.position.x,i.mesh.position.z),this.sound.drop(),this.toast(`\u9910\u6389\u5730\u4E0A\u4E86\uFF1A-${Pt.floorPenalty} \u5143\uFF0C\u6309 V \u6253\u626B\u3002`,"warn"))}}serveFx(e){if(e.customer){let t=e.customer.group.position;this.steam.emit(t.x,1.6,t.z,16770728,3)}}completeOrder(e){let t=Math.round(e.patience/e.max*Fs.tipMax*this.difficulty.tip);this.cash+=t,this.revenue+=t,this.rep=$t(this.rep+Fs.repWin,0,100),this.orders=this.orders.filter(a=>a!==e);let n=e.max-e.patience,i=e.lines.map(a=>a.id),r=e.customer?e.customer.key:null;if(r){let a=this.dayMenu[r]||[];for(let c of i)a.includes(c)||a.push(c);this.dayMenu[r]=a}let o=nf({dishes:i,waited:n,isCombo:e.lines.length>1});n<e.max*.45&&o.push(...sf()),this.dismissCustomer(e,!0),this.toast(`\u8BA2\u5355\u5B8C\u6210\uFF01\u5C0F\u8D39 +${t} \u5143`,"ok"),t>0&&this.sound.coin(),this.restackCustomers(),this.announce(o)}announce(e){if(!(!e||!e.length))for(let t of e)setTimeout(()=>this.ui.achievement?.(t),350)}pickMurmur(e){let t=e.order;if(!t)return"\u8001\u677F\uFF0C\u6765\u5566\uFF1F";let n=Math.min(t.max,Math.max(0,t.max-t.patience)),i=n>=Yi.overtime?"overtime":n>=Yi.long?"long":n>=Yi.slightly_long?"slightly_long":"fresh",r=[...Ti[i]||[]],o={bun:"dish_bun",pan:"dish_bun",bing:"dish_fried",stick:"dish_fried",cup:"dish_drink",bowl:"dish_drink",ball:"dish_side",egg:"dish_side"};for(let u of t.lines||[]){let d=Lt[u.id],f=d?o[d.kind]:null;f&&Ti[f]&&r.push(...Ti[f])}if(Ti[e.type]&&r.push(...Ti[e.type]),Ti.easter){let d=this.day<=2&&this.served<6?3:1;for(let f=0;f<d;f++)r.push(...Ti.easter)}let a=e.said||[],c=r.filter(u=>!a.includes(u));c.length||(e.said=[],c=r);let l=c[Math.floor(Math.random()*c.length)]||"\u8001\u677F\uFF0C\u6765\u5566\uFF1F",h=t.lines&&t.lines[0]?Lt[t.lines[0].id]:null;return l.replace(/\{wait\}/g,String(Math.round(n))).replace(/\{dish\}/g,h?h.name:"\u4E1C\u897F")}updateMurmurs(e){if(this.phase!=="rush")return;this.murmurAt=(this.murmurAt||0)-e;let t=[Yi.slightly_long,Yi.long,Yi.overtime];for(let c of this.orders){let l=c.customer;if(!l)continue;let h=Math.max(0,c.max-c.patience);for(l.murmurMarks=l.murmurMarks||[];l.murmurMarks.length<3&&h>=t[l.murmurMarks.length];)l.murmurMarks.push({waited:h,pending:!0,done:!1});if(!l.murmurPending){let u=l.murmurMarks.find(d=>d.pending&&!d.done);u&&h-u.waited>=6&&(l.murmurPending=u)}}if(this.murmurAt>0)return;let n=this.orders.filter(c=>c.customer&&c.customer.murmurPending);if(!n.length)return;let r=n[Math.floor(Math.random()*n.length)].customer,o=r.murmurPending;r.murmurPending=null,o.done=!0;let a=this.pickMurmur(r);a&&(r.said=r.said||[],r.said.push(a),this.ui.murmur?.(r.slotIndex,a),this.murmurAt=2.4+Math.random()*2.6)}failOrder(e){this.rep=$t(this.rep+Fs.repTimeout,0,100),this.complaints+=1,this.orders=this.orders.filter(t=>t!==e),this.dismissCustomer(e,!1),this.toast("\u5BA2\u4EBA\u7B49\u592A\u4E45\uFF0C\u8D70\u4E86\u3002\u58F0\u671B -3","bad"),this.sound.error(),this.restackCustomers()}dismissCustomer(e,t){let n=e.customer;n&&(n.leaving=!0,n.exit=new w(n.group.position.x+(Math.random()-.5)*1.6,0,9.6),n.happy=t,n.leaveTimer=0,e.customer=null,t&&this.steam.emit(n.group.position.x,1.7,n.group.position.z,10477706,2))}restackCustomers(){this.customers.forEach(e=>{if(e.leaving)return;let t=this.orders.findIndex(n=>n.customer===e);e.slotIndex=t>=0?t:0})}giveItem(e){this.held=e,this.heldMesh=Ud(e,e.burnt),this.player.anchor.add(this.heldMesh),this.setHandUI()}clearHeld(){this.heldMesh&&(this.player.anchor.remove(this.heldMesh),this.heldMesh=null),this.held=null,this.setHandUI()}setHandUI(){this.ui&&this.ui.hand(this.held?`${Lt[this.held.id].name}${this.held.burnt?this.held.id==="soy"?"\uFF08\u51C9\u4E86\uFF09":"\uFF08\u574F\u4E86\uFF09":""}`:"\u7A7A\u624B")}spawnOrder(){let e=this.customersForDay();if(this.orders.length>=Fs.maxActive)return!1;let t=this.patienceForDay(),n=this.region.menu,i=Math.random()<.62?1:2,r=[];for(;r.length<i;){let u=n[Math.floor(Math.random()*n.length)];r.includes(u)||r.push(u)}let o=[],a=0;for(let u of r){let d=r.length===1?1+Math.floor(Math.random()*2):1;o.push({id:u,need:d,done:0}),a+=d}a>3&&(o[0].need=Math.max(1,3-(a-o[0].need)));let c={id:"o"+Math.random().toString(36).slice(2,8),lines:o,patience:t,max:t,customer:null},l=this.orders.length,h=this.makeCustomer(l);return c.customer=h,h.order=c,this.orders.push(c),this.startSpawnSpark(c),this.sound.tone(523,.07,"sine",.18),!0}startSpawnSpark(){}makeCustomer(e,t=null){let n=t==null?Math.floor(Math.random()*Bs.length):t%Bs.length,i=Yd(this.customerTemplate,n)||Od(n);i.position.copy(this.world.customerSpawn),i.position.x+=(Math.random()-.5)*1.2,i.rotation.y=Math.PI,this.scene.add(i);let r={group:i,colorIdx:n,slotIndex:e,leaving:!1,exit:null,leaveTimer:0,bob:Math.random()*Math.PI*2,order:null,type:uf[Math.floor(Math.random()*uf.length)],key:"c"+Math.random().toString(36).slice(2,7),said:[],lastMurmur:0,murmurPending:null,murmurMarks:[]};return this.customers.push(r),r}update(e,t){this.time+=e,this.interactCd=Math.max(0,this.interactCd-e),this.updateStations(e),this.updateProjectiles(e),this.updateThrowArc(),this.updateCleaning(e),this.updateOrders(e),this.updateMurmurs(e),this.updateCustomers(e),this.steam.update(e),this.updateBars(t),this.updatePlayer(e),this.updateNear(),this.updatePhase(e),this.updateHint(e),this.time-this.hudAt>.08&&(this.hudAt=this.time,this.updateHUD())}updatePhase(e){if(this.phase==="prep")this.prepTime-=e,this.prepTime<=0&&this.beginRush();else if(this.phase==="rush"){for(this.rushTime+=e;this.spawnIndex<this.schedule.length&&this.rushTime>=this.schedule[this.spawnIndex]&&this.spawnOrder();)this.spawnIndex+=1;this.rushTime>=this.rushForDay()&&this.endDay()}}updateStations(e){if(!(this.phase!=="prep"&&this.phase!=="rush"))for(let t of this.stations)t.type==="machine"&&(t.state==="cooking"?(t.progress+=e,t.steamAcc+=e,t.steamAcc>.45&&(t.steamAcc=0,this.steam.emit(t.worldPos.x,t.worldPos.y+1.3,t.worldPos.z+.1,16773592,1)),t.progress>=t.cook&&(t.state="ready",t.ready=t.capacity,t.readyAge=0,this.sound.ready(),this.toast(`${t.recipe.name}\u597D\u4E86\uFF01`,"ok"))):t.state==="ready"&&(t.readyAge+=e,t.ready>0?(t.steamAcc+=e,t.steamAcc>1.1&&(t.steamAcc=0,this.steam.emit(t.worldPos.x,t.worldPos.y+1.4,t.worldPos.z+.1,15918802,1)),t.readyAge>=t.burn&&(t.burnt+=t.ready,t.ready=0,this.sound.burn(),this.toast(`${t.recipe.name}${t.recipe.burnLabel}\uFF01`,"bad"))):t.burnt>0&&(t.steamAcc+=e,t.steamAcc>.35&&(t.steamAcc=0,this.steam.emit(t.worldPos.x,t.worldPos.y+1.35,t.worldPos.z+.1,5525320,1))),t.ready<=0&&t.burnt<=0&&(t.state="empty")))}updateBars(e){for(let t of this.stations){if(!t.bar)continue;let n=t.state!=="empty";if(t.bar.group.visible=n,t.warn&&(t.warn.visible=t.burnt>0),!n)continue;t.bar.group.quaternion.copy(e.quaternion),t.warn&&t.warn.quaternion.copy(e.quaternion);let i=0,r=15773770;t.state==="cooking"?(i=t.progress/t.cook,r=15773770):t.state==="ready"&&(i=1,r=(t.ready>0?t.readyAge/t.burn:1)>.7?14711354:6472826,t.ready<=0&&(r=14240314)),t.bar.fill.scale.x=Math.max(.02,i),t.bar.fill.material.color.setHex(r)}if(this.ring.visible&&this.near){let t=.6+Math.sin(this.time*6)*.2;this.ring.material.opacity=t}}updateOrders(e){if(this.phase==="rush")for(let t of[...this.orders])t.patience-=e,t.patience<=0&&this.failOrder(t)}updateCustomers(e){for(let t of[...this.customers]){let n=t.leaving?t.exit:this.world.customerSlots[t.slotIndex%this.world.customerSlots.length];if(n&&(t.group.position.x+=(n.x-t.group.position.x)*Math.min(1,e*4.5),t.group.position.z+=(n.z-t.group.position.z)*Math.min(1,e*4.5),t.leaving&&t.group.position.z>8.8)){this.scene.remove(t.group),this.customers=this.customers.filter(i=>i!==t);continue}t.group.rotation.y=Math.PI,t.group.position.y=Math.sin(this.time*2.4+t.bob)*.02,t.leaving&&(t.leaveTimer+=e)}}backflip(){this.paused||this.phase!=="prep"&&this.phase!=="rush"||this.flipT>0||this.jumpY>.01||(this.flipT=1e-4,this.dance=0,this.jumpY=0,this.jumpVel=0,this.sound.flip())}jump(){this.paused||this.jumpY>.01||this.phase!=="prep"&&this.phase!=="rush"||(this.jumpVel=5.2,this.jumpY=.001,this.jumpT=0,this.dance=0,this.sound.jump())}toggleDance(e){if(this.paused||this.phase!=="prep"&&this.phase!=="rush")return;if(this.dance===e){this.dance=0,this.ui.toast("\u6B47\u4E00\u4F1A\u513F","info");return}this.dance=e,this.player.group.rotation.y=0,this.sound.dance();let t=this.animator?.styles?.[e-1]||["\u6447\u6446","\u8F6C\u5708","\u673A\u68B0\u821E","\u592A\u7A7A\u6B65"][e-1];this.ui.toast(`\u8DF3\u821E \xB7 ${t}\uFF08\u518D\u6309 ${e} \u505C\u4E0B\uFF09`,"ok")}updatePlayer(e){let t=this.player.group,n=this.phase==="prep"||this.phase==="rush",i=!1,r=!1,o=0,a=0;if(this.flipT>0){this.flipT+=e;let c=Math.min(1,this.flipT/this.flipDur),l=c<.5?2*c*c:1-Math.pow(-2*c+2,2)/2;this.player.pivot.rotation.x=-Math.PI*2*l,a=Math.sin(Math.PI*c)*.95,c>=1&&(this.flipT=0,this.player.pivot.rotation.x=0,a=0,this.sound.land())}else this.player.pivot.rotation.x!==0&&(this.player.pivot.rotation.x=0);if(this.cleanT>0&&this.flipT===0&&(this.player.pivot.rotation.x=.32*Math.min(1,(.9-this.cleanT)*4)),(this.jumpY>.001||this.jumpVel!==0)&&(this.jumpVel-=24*e,this.jumpY+=this.jumpVel*e,this.jumpT+=e,this.jumpY<=0&&(this.jumpY=0,this.jumpVel=0,this.sound.land())),n){let c=this.keys,l=(c.KeyD||c.ArrowRight?1:0)-(c.KeyA||c.ArrowLeft?1:0),h=(c.KeyS||c.ArrowDown?1:0)-(c.KeyW||c.ArrowUp?1:0);if(l||h){this.dance&&(this.dance=0),r=!0;let u=Math.hypot(l,h),d=l/u,f=h/u;this.faceDir.set(d,0,f),i=(c.ShiftLeft||c.ShiftRight)&&!this.exhausted&&this.stamina>.5,i&&(this.stamina=Math.max(0,this.stamina-Yt.drain*e),this.regenCd=Yt.regenDelay,this.stamina<=0&&(this.exhausted=!0,this.toast("\u4F53\u529B\u89C1\u5E95\uFF0C\u8DD1\u4E0D\u52A8\u4E86","warn")));let x=i?Yt.sprintSpeed:Yt.speed;o=x/Yt.sprintSpeed,t.position.x+=d*x*e,t.position.z+=f*x*e;let m=this.world.bounds;t.position.x=$t(t.position.x,m.minX,m.maxX),t.position.z=$t(t.position.z,m.minZ,m.maxZ),this.resolveCollisions(t.position,.3);let p=Math.atan2(d,f);t.rotation.y=Ey(t.rotation.y,p,Math.min(1,e*14)),this.player.body&&(this.player.body.rotation.z=Math.sin(this.time*11)*.03)}else this.dance===2&&(t.rotation.y+=e*5.2);i||(this.regenCd-=e,this.regenCd<=0&&this.stamina<Yt.staminaMax&&(this.stamina=Math.min(Yt.staminaMax,this.stamina+Yt.regen*e))),this.stamina>18&&(this.exhausted=!1)}r?t.position.y=this.jumpY+a+Math.abs(Math.sin(this.time*11))*.035:t.position.y+=(this.jumpY+a-t.position.y)*Math.min(1,e*14),this.moving=r,this.speed01=o,this.animator&&this.animator.update(e,{t:this.time,moving:r,speed01:o,carrying:!!this.held,airborne:this.jumpY>.01||a>.02,jump01:a>.02?1:Math.min(1,this.jumpT/.45),dance:this.dance}),this.heldMesh&&(this.heldMesh.rotation.y=Math.sin(this.time*3)*.12)}updateNear(){let e=this.player.group.position,t=null,n=1/0;for(let i of this.stations){let r=Math.hypot(e.x-i.worldPos.x,e.z-i.worldPos.z);r<i.radius+.55&&r<n&&(t=i,n=r)}if(this.near=t,t){this.ring.visible=!0,this.ring.position.set(t.worldPos.x,.02,t.worldPos.z);let i=t.type==="serve"?1.5:1;this.ring.scale.set(i,1,i)}else this.ring.visible=!1}updateHint(e){this.hintTimeout>0&&(this.hintTimeout-=e,this.hintTimeout<=0&&this.ui.hint(""))}updateHUD(){let e=this.ui;if(e.stats({cash:Math.round(this.cash),rep:Math.round(this.rep),stamina:this.stamina/Yt.staminaMax,staminaRaw:Math.round(this.stamina)}),this.phase==="prep")e.phase(`\u5907\u6599\u4E2D \xB7 ${Math.ceil(Math.max(0,this.prepTime))} \u79D2`,"6:45");else if(this.phase==="rush"){let t=this.rushTime/this.rushForDay(),n=420+t*120,i=Math.floor(n/60),r=Math.floor(n%60);e.phase(`${this.waveLabel()} \xB7 7:00\u20149:00`,`${i}:${String(r).padStart(2,"0")}`),t>.92&&!this.hintFlags.closing&&(this.hintFlags.closing=!0,e.hint("\u5FEB\u6253\u70CA\u4E86\uFF0C\u628A\u624B\u4E0A\u7684\u5355\u505A\u5B8C\u3002"),this.hintTimeout=6)}else this.phase==="settle"&&e.phase("\u6253\u70CA\u7ED3\u7B97","9:00");e.orders(this.orders),e.pantry(this.ingredients),e.dirty?.(this.stains.length),e.cookers(this.stations.filter(t=>t.type==="machine").map(t=>{let n="\u7A7A\u9505",i=0,r="idle";return t.state==="cooking"?(n=`\u8FD8\u5269 ${t.cook-t.progress<0?0:(t.cook-t.progress).toFixed(1)} \u79D2`,i=Math.min(1,t.progress/t.cook),r="cook"):t.state==="ready"&&(t.ready>0?(n=`\u53EF\u51FA\u9910 \xD7${t.ready}`,i=1-Math.min(1,t.readyAge/t.burn),r="ready"):(n=`${t.recipe.burnLabel} \xD7${t.burnt}`,i=1,r="burnt")),{station:t.name,dish:t.recipe.name,status:n,frac:i,tone:r}})),this.updatePrompt()}waveLabel(){let e=this.rushForDay();return this.rushTime>e*.25&&this.rushTime<e*.72?"\u65E9\u9AD8\u5CF0":this.rushTime<=e*.25?"\u7B2C\u4E00\u6CE2":"\u6536\u5C3E"}updatePrompt(){let e=this.near,t="",n=this.player.group.position,i=null,r=1.25;for(let o of this.stains){let a=Math.hypot(n.x-o.x,n.z-o.z);a<r&&(i=o,r=a)}if(e)if(e.type==="machine")if(e.state==="empty")t=`E \xB7 \u505A\u4E00\u9505${e.recipe.name}\uFF08\u9700 1 \u4EFD\u98DF\u6750\uFF0C\u51FA ${e.capacity} \u4EFD\uFF0C${e.cook} \u79D2\uFF09`;else if(e.state==="cooking"){let o=Math.max(0,e.cook-e.progress);t=`${e.recipe.name}\u5236\u4F5C\u4E2D ${Math.round(e.progress/e.cook*100)}% \xB7 \u8FD8\u5269 ${o.toFixed(1)} \u79D2`}else e.state==="ready"&&(t=e.ready>0?`E \xB7 \u53D6${e.recipe.name}\uFF08\u5269 ${e.ready}\uFF09`:`E \xB7 \u53D6\u51FA${e.recipe.burnLabel}\u7684${e.recipe.name}`);else e.type==="serve"?t=this.held?`E \xB7 \u4EA4\u4ED8 ${Lt[this.held.id].name}`:"\u51FA\u9910\u7A97\u53E3\uFF1A\u628A\u624B\u4E0A\u7684\u9910\u9001\u8FC7\u6765":e.type==="trash"?t=this.held?`E \xB7 \u4E22\u6389 ${Lt[this.held.id].name}\uFF08\u79FB\u52A8\u4E2D\u6309 Q \u6295\u63B7\uFF09`:"\u5783\u573E\u6876":e.type==="fridge"&&(t=`E \xB7 \u4ECE\u51B0\u67DC\u62FF 3 \u4EFD\u98DF\u6750\uFF08\u73B0\u6709 ${this.ingredients}\uFF09`);i&&!this.held&&(t=`V \xB7 \u6253\u626B\u5730\u9762\uFF08\u8FD8\u5269 ${this.stains.length} \u5904\uFF09`),this.ui.prompt(t)}throwDir(){let e=this.faceDir.clone();return e.lengthSq()<.01&&e.set(Math.sin(this.player.group.rotation.y),0,Math.cos(this.player.group.rotation.y)),e.normalize()}buildThrowArc(){let e=new vt;e.setAttribute("position",new St(new Float32Array(144),3));let t=new Xo({color:16765562,dashSize:.11,gapSize:.08,transparent:!0,opacity:.9,depthWrite:!1});this.arcLine=new _i(e,t),this.arcLine.frustumCulled=!1,this.arcLine.visible=!1,this.scene.add(this.arcLine);let n=new xt({color:16765562,transparent:!0,opacity:.85,side:Xt,depthWrite:!1});this.arcRing=new te(new vr(.13,.22,20),n),this.arcRing.rotation.x=-Math.PI/2,this.arcRing.visible=!1,this.scene.add(this.arcRing)}updateThrowArc(){if(!(this.held&&this.heldMesh&&!this.paused&&(this.phase==="prep"||this.phase==="rush"))){this.arcLine&&(this.arcLine.visible=!1),this.arcRing&&(this.arcRing.visible=!1);return}let t=new w;this.player.anchor.getWorldPosition(t);let n=this.throwDir(),i=t.clone(),r=new w(n.x*Pt.speed,Pt.lift,n.z*Pt.speed),o=this.stations.find(f=>f.type==="trash"),a=[],c=!1;for(let f=0;f<48;f++){if(a.push(i.clone()),r.y-=Pt.gravity*.035,i.addScaledVector(r,.035),o&&Math.hypot(i.x-o.worldPos.x,i.z-o.worldPos.z)<.75&&i.y<1.6){c=!0;break}if(i.y<=.06)break}if(!a.length)return;let l=this.arcLine.geometry.attributes.position,h=Math.min(48,a.length);for(let f=0;f<48;f++){let g=a[Math.min(f,h-1)];l.setXYZ(f,g.x,Math.max(.04,g.y),g.z)}l.needsUpdate=!0,this.arcLine.geometry.setDrawRange(0,h),this.arcLine.computeLineDistances();let u=c?9429130:16765562;this.arcLine.material.color.setHex(u),this.arcLine.visible=!0;let d=a[a.length-1];this.arcRing.position.set(d.x,.03,d.z),this.arcRing.material.color.setHex(u),this.arcRing.visible=!0}addStain(e,t){let n=new Ht({color:3811868,roughness:.95,transparent:!0,opacity:.88,depthWrite:!1}),i=new te(new jn(.3,18),n);i.rotation.x=-Math.PI/2,i.position.set(e,.012,t),i.receiveShadow=!0,this.scene.add(i),this.stains.push({x:e,z:t,mesh:i})}clearStains(){for(let e of this.stains)this.scene.remove(e.mesh),e.mesh.geometry.dispose(),e.mesh.material.dispose();this.stains=[],this.cleanT=0,this.cleanTarget=null,this.arcRing&&(this.arcRing.visible=!1)}cleanStain(){if(this.paused||this.phase!=="prep"&&this.phase!=="rush"||this.cleanT>0)return;if(!this.stains.length)return this.toast("\u5730\u4E0A\u5F88\u5E72\u51C0\u3002","info");if(this.held)return this.toast("\u5148\u628A\u624B\u4E0A\u7684\u9910\u9001\u51FA\u53BB\u3002","warn");let e=this.player.group.position,t=null,n=1.25;for(let i of this.stains){let r=Math.hypot(e.x-i.x,e.z-i.z);r<n&&(t=i,n=r)}if(!t)return this.toast("\u8D70\u8FD1\u4E00\u70B9\u518D\u6253\u626B\u3002","info");this.cleanT=.9,this.cleanTarget=t,this.sound.clean?.(),this.toast("\u6253\u626B\u4E2D\u2026\u2026","info")}updateCleaning(e){if(this.cleanT<=0)return;if(this.cleanTarget){let n=this.player.group.position;if(Math.hypot(n.x-this.cleanTarget.x,n.z-this.cleanTarget.z)>1.8){this.cleanT=0,this.cleanTarget=null,this.toast("\u8D70\u8FDC\u4E86\uFF0C\u6253\u626B\u4E2D\u65AD\u3002","info");return}}if(this.cleanT-=e,this.cleanT>0)return;this.cleanT=0;let t=this.cleanTarget;this.cleanTarget=null,t&&(this.scene.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose(),this.stains=this.stains.filter(n=>n!==t),this.sound.clean?.(),this.toast(this.stains.length?`\u6253\u626B\u5E72\u51C0\u4E00\u5904\uFF0C\u8FD8\u5269 ${this.stains.length} \u5904\u3002`:"\u5730\u9762\u5E72\u51C0\u4E86\u3002","ok"))}resolveCollisions(e,t=.3){for(let n of this.world.colliders||[]){let i=$t(e.x,n.minX,n.maxX),r=$t(e.z,n.minZ,n.maxZ),o=e.x-i,a=e.z-r,c=o*o+a*a;if(!(c>=t*t))if(c>1e-6){let l=Math.sqrt(c);e.x=i+o/l*t,e.z=r+a/l*t}else{let l=e.x-n.minX,h=n.maxX-e.x,u=e.z-n.minZ,d=n.maxZ-e.z,f=Math.min(l,h,u,d);f===l?e.x=n.minX-t:f===h?e.x=n.maxX+t:f===u?e.z=n.minZ-t:e.z=n.maxZ+t}}}toast(e,t="info"){let n=performance.now();this.toastAt[e]&&n-this.toastAt[e]<1600||(this.toastAt[e]=n,this.ui.toast(e,t))}};var Rr="zaogaofeng.story.v1",xh=`\u300A\u5976\u86D9\u65E9\u9910\u5E97\uFF1A\u4E00\u4E2A\u9519\u8BEF\u88AB\u6D3E\u6765\u62EF\u6551\u9519\u8BEF\u300B

\u6D0B\u8471\u738B\u56FD\u7684\u6863\u6848\u91CC\u6CA1\u6709\u8FD9\u4E00\u9875\u3002

\u6B63\u53F2\u8BB0\u8F7D\uFF1A\u56FD\u738B\u7FFB\u5F00\u300A\u6B7B\u7075\u4E4B\u4E66\u300B\uFF0C\u5FF5\u9519\u4E86\u5492\u8BED\uFF0C\u9762\u5305\u4ECE\u575F\u91CC\u722C\u8D77\u6765\uFF0C\u7EFF\u773C\u775B\uFF0C\u6210\u7FA4\u7ED3\u961F\uFF0C\u89C1\u4EC0\u4E48\u5403\u4EC0\u4E48\u3002\u4E8E\u662F\u738B\u56FD\u5411\u6240\u6709\u53A8\u5B50\u53D1\u51FA\u5F81\u53EC\uFF1A\u6765\u505A\u996D\uFF0C\u5582\u9971\u5B83\u4EEC\uFF0C\u62EF\u6551\u738B\u56FD\u3002

\u4F46\u738B\u56FD\u6536\u5230\u7684\u4E0D\u662F\u53A8\u5B50\u3002\u662F\u4E00\u4E2A\u9519\u8BEF\u3002

\u5728\u5F81\u53EC\u4EE4\u53D1\u51FA\u7684\u540C\u4E00\u65F6\u523B\uFF0C\u738B\u5BAB\u7684\u201C\u5E94\u6025\u53A8\u795E\u53EC\u5524\u9635\u201D\u88AB\u542F\u52A8\u4E86\u4E00\u4E00\u636E\u8BF4\u80FD\u53EC\u6765\u53F2\u4E0A\u6700\u5F3A\u7684\u6599\u7406\u5B58\u5728\u3002\u9635\u786E\u5B9E\u4EAE\u4E86\u3002\u5149\u786E\u5B9E\u95EA\u4E86\u3002\u4ECE\u91CC\u9762\u8D70\u51FA\u6765\u7684\u662F\u4E00\u4E2A\u8179\u90E8\u81A8\u5927\u3001\u56DB\u80A2\u7EC6\u5982\u706B\u67F4\u68CD\u3001\u773C\u775B\u6CDB\u7740\u7EFF\u5149\u3001\u6CA1\u6709\u9AD8\u5149\u7684\u9EC4\u8272\u751F\u7269\u3002\u5B83\u6CA1\u6709\u62FF\u5200\u3002\u6CA1\u6709\u62FF\u9505\u3002\u5B83\u770B\u4E86\u56FD\u738B\u4E00\u773C\uFF0C\u7136\u540E\u6367\u8179\u5927\u7B11\uFF0C\u7B11\u4E86\u6574\u6574\u56DB\u5341\u5206\u949F\u3002

\u56FD\u738B\u95EE\uFF1A\u201C\u4F60\u4F1A\u505A\u996D\u5417\uFF1F\u201D

\u5976\u86D9\u4E0D\u56DE\u7B54\u3002\u5976\u86D9\u53EA\u4F1A\u5927\u7B11\u3002

\u4F46\u50F5\u5C38\u9762\u5305\u5DF2\u7ECF\u5728\u649E\u57CE\u95E8\u4E86\u3002\u56FD\u738B\u6CA1\u6709\u9009\u62E9\u3002\u5976\u86D9\u88AB\u63A8\u8FDB\u4E86\u53A8\u623F\u3002

\u4F60\u88AB\u53EC\u5524\u6765\u62EF\u6551\u4E00\u573A\u707E\u96BE\u3002\u4F60\u5C31\u662F\u7B2C\u4E8C\u573A\u707E\u96BE\u3002

\u5976\u86D9\u7684\u8BDE\u751F\uFF0C\u672C\u8EAB\u5C31\u662F\u4E00\u6B21\u53EC\u5524\u4E8B\u6545\u3002\u5B83\u662F\u67D0\u4E2A\u66F4\u53E4\u8001\u7684\u201C\u5976\u9F99\u201D\u5728\u7B97\u6CD5\u4E2D\u88AB\u7578\u53D8\u51FA\u6765\u7684\u9519\u8BEF\u54C1\uFF0C\u672C\u4E0D\u8BE5\u5B58\u5728\uFF0C\u5374\u56E0\u4E3A\u4E00\u573A\u8BEF\u4F1A\u83B7\u5F97\u4E86\u5F62\u4F53\u3002\u6D0B\u8471\u738B\u56FD\u73B0\u5728\u6709\u4E24\u4E2A\u7531\u201C\u5FF5\u9519\u4E1C\u897F\u201D\u9020\u6210\u7684\u95EE\u9898\uFF1A\u57CE\u95E8\u5916\u9762\u5305\u5728\u54AC\u4EBA\uFF0C\u53A8\u623F\u91CC\u9762\u5976\u86D9\u5728\u7B11\u3002\u533A\u522B\u5728\u4E8E\uFF0C\u9762\u5305\u81F3\u5C11\u77E5\u9053\u81EA\u5DF1\u8981\u4EC0\u4E48\u3002\u5976\u86D9\u4EC0\u4E48\u90FD\u4E0D\u77E5\u9053\uFF0C\u4E5F\u4EC0\u4E48\u90FD\u4E0D\u8BF4\u3002

\u800C\u4F60\uFF0C\u4F5C\u4E3A\u73A9\u5BB6\uFF0C\u8981\u64CD\u63A7\u8FD9\u4E2A\u8FDE\u201C\u62FF\u201D\u8FD9\u4E2A\u52A8\u4F5C\u5728\u7269\u7406\u4E0A\u90FD\u65E0\u6CD5\u5B8C\u6210\u7684\u8EAB\u4F53\uFF0C\u53BB\u5B8C\u6210\u300A\u80E1\u95F9\u53A8\u623F\u300B\u6700\u7ECF\u5178\u7684\u4EFB\u52A1\uFF1A\u5728\u6709\u9650\u65F6\u95F4\u5185\u5207\u83DC\u3001\u70F9\u996A\u3001\u88C5\u76D8\u3001\u51FA\u9910\uFF0C\u5582\u9971\u90A3\u4E9B\u5982\u679C\u4E0D\u5403\u5C31\u4F1A\u62C6\u6389\u6574\u4E2A\u738B\u56FD\u7684\u9965\u997F\u602A\u7269\u3002

\u56DB\u80A2\u7EA4\u7EC6\uFF0C\u8179\u90E8\u81A8\u5927\u3002\u8FD9\u662F\u4F60\u8981\u9762\u5BF9\u7684\u5168\u90E8\u5DE5\u5177\u3002

\u5976\u86D9\u7684\u624B\u591F\u4E0D\u5230\u7827\u677F\u3002\u5976\u86D9\u7684\u811A\u8FFD\u4E0D\u4E0A\u6EDA\u843D\u7684\u756A\u8304\u3002\u5976\u86D9\u552F\u4E00\u5360\u636E\u7A7A\u95F4\u4F18\u52BF\u7684\u5668\u5B98\uFF0C\u662F\u90A3\u4E2A\u81A8\u80C0\u5230\u51E0\u4E4E\u8FDD\u53CD\u51E0\u4F55\u5B66\u7684\u809A\u5B50\u3002\u5B83\u4E0D\u80FD\u201C\u62FF\u201D\u8D77\u5377\u5FC3\u83DC\u3002\u5B83\u53EA\u80FD\u7528\u809A\u5B50\u628A\u5377\u5FC3\u83DC\u649E\u8FDB\u9505\u91CC\uFF0C\u7136\u540E\u7AD9\u5728\u65C1\u8FB9\uFF0C\u7528\u7A7A\u6D1E\u7684\u7EFF\u773C\u775B\u51DD\u89C6\u7740\u9505\uFF0C\u7B49\u5F85\u67D0\u79CD\u5947\u8FF9\u3002

\u5947\u8FF9\u5F88\u5C11\u53D1\u751F\u3002

\u66F4\u9EBB\u70E6\u7684\u662F\u6C9F\u901A\u3002\u5976\u86D9\u4E0D\u4F1A\u558A\u201C\u9505\u7740\u706B\u4E86\u201D\uFF0C\u4E0D\u4F1A\u8BF4\u201C\u76D8\u5B50\u4E0D\u591F\u4E86\u201D\uFF0C\u4E0D\u4F1A\u5411\u961F\u53CB\u53D1\u51FA\u4EFB\u4F55\u6709\u4FE1\u606F\u91CF\u7684\u58F0\u97F3\u3002\u5B83\u53EA\u4F1A\u5728\u5927\u706B\u4E2D\u8F6C\u8FC7\u8EAB\u6765\uFF0C\u770B\u7740\u4F60\uFF0C\u53D1\u51FA\u90A3\u79CD\u6807\u5FD7\u6027\u7684\u3001\u6367\u8179\u7684\u3001\u98A4\u6296\u7684\u7B11\u58F0\u3002\u7B11\u58F0\u5728\u53A8\u623F\u91CC\u56DE\u8361\uFF0C\u706B\u7130\u5728\u7076\u53F0\u4E0A\u8513\u5EF6\uFF0C\u50F5\u5C38\u9762\u5305\u5728\u7A97\u5916\u6572\u73BB\u7483\uFF0C\u800C\u5976\u86D9\u5728\u7B11\u3002

\u8FD9\u662F\u4E00\u79CD\u5728\u300A\u80E1\u95F9\u53A8\u623F\u300B\u7684\u5386\u53F2\u4E0A\u4ECE\u672A\u51FA\u73B0\u8FC7\u7684\u961F\u53CB\u7C7B\u578B\uFF1A\u5B83\u4E0D\u5236\u9020\u566A\u97F3\uFF0C\u5B83\u5236\u9020\u6C89\u9ED8\u7684\u7EDD\u671B\u3002

\u4F46\u4E5F\u8BB8\uFF0C\u8FD9\u6B63\u662F\u6D0B\u8471\u738B\u56FD\u9700\u8981\u7684\u3002

\u6B63\u53F2\u7684\u53A8\u5B50\u4EEC\u662F\u6765\u201C\u505A\u996D\u201D\u7684\u3002\u4ED6\u4EEC\u5207\u83DC\u3001\u716E\u6C64\u3001\u6D17\u7897\uFF0C\u5728\u6DF7\u4E71\u4E2D\u8FFD\u6C42\u6548\u7387\uFF0C\u5728\u5012\u8BA1\u65F6\u91CC\u7EF4\u6301\u79E9\u5E8F\u3002\u5976\u86D9\u4E0D\u662F\u3002\u5976\u86D9\u662F\u4E00\u4E2A\u88AB\u7B97\u6CD5\u8BEF\u8BFB\u3001\u88AB\u738B\u56FD\u8BEF\u53EC\u3001\u88AB\u53A8\u623F\u8BEF\u7528\u7684\u5B58\u5728\u3002\u5B83\u90A3\u201C\u4EC0\u4E48\u90FD\u6CA1\u505A\uFF0C\u4F46\u770B\u8D77\u6765\u5DF2\u7ECF\u770B\u900F\u4E86\u4E00\u5207\u201D\u7684\u51DD\u89C6\uFF0C\u5728\u300A\u80E1\u95F9\u53A8\u623F\u300B\u7684\u4E16\u754C\u91CC\u83B7\u5F97\u4E86\u4E00\u79CD\u5168\u65B0\u7684\u610F\u4E49\u3002

\u5F53\u53A8\u623F\u7740\u706B\u3001\u8BA2\u5355\u5806\u79EF\u3001\u50F5\u5C38\u9762\u5305\u5F00\u59CB\u5543\u95E8\u6846\u7684\u65F6\u5019\uFF0C\u4E00\u4E2A\u6B63\u5E38\u7684\u53A8\u5B50\u4F1A\u614C\u4E71\u3002\u5976\u86D9\u4E0D\u4F1A\u3002\u5976\u86D9\u7684\u7EFF\u773C\u775B\u672C\u6765\u5C31\u7A7A\u6D1E\uFF0C\u7A7A\u6D1E\u5230\u706B\u7130\u7684\u5012\u5F71\u5728\u91CC\u9762\u70E7\u4E0D\u51FA\u4EFB\u4F55\u6D9F\u6F2A\u3002\u5B83\u7EE7\u7EED\u7528\u809A\u5B50\u63A8\u7740\u9505\uFF0C\u7EE7\u7EED\u628A\u98DF\u6750\u649E\u5230\u5730\u4E0A\uFF0C\u7EE7\u7EED\u5728\u4E00\u5207\u5F7B\u5E95\u5931\u63A7\u7684\u65F6\u523B\uFF0C\u6367\u8179\u5927\u7B11\u3002

\u5B83\u4E0D\u662F\u5728\u5632\u7B11\u3002\u5B83\u662F\u5728\u9648\u8FF0\u4E00\u4E2A\u5B83\u4ECE\u4E00\u5F00\u59CB\u5C31\u77E5\u9053\u7684\u4E8B\u5B9E\uFF1A\u8FD9\u4EF6\u4E8B\u4ECE\u4E00\u5F00\u59CB\u5C31\u4E0D\u53EF\u80FD\u6210\u529F\u3002\u4F46\u65E2\u7136\u4F60\u5DF2\u7ECF\u5728\u8FD9\u91CC\u4E86\uFF0C\u4E3A\u4EC0\u4E48\u4E0D\u7B11\u7740\u628A\u83DC\u505A\u5B8C\u5462\uFF1F

\u6B63\u53F2\u91CC\uFF0C\u6D0B\u8471\u738B\u56FD\u5F97\u6551\u4E86\u3002\u53A8\u5B50\u4EEC\u505A\u51FA\u4E86\u8DB3\u591F\u591A\u7684\u6C64\u3001\u8DB3\u591F\u591A\u7684\u62AB\u8428\u3001\u8DB3\u591F\u591A\u7684\u86CB\u7CD5\uFF0C\u50F5\u5C38\u9762\u5305\u88AB\u5582\u9971\u4E86\uFF0C\u57CE\u95E8\u91CD\u65B0\u5173\u4E0A\uFF0C\u56FD\u738B\u5199\u4E86\u4E00\u672C\u56DE\u5FC6\u5F55\u3002

\u5976\u86D9\u7684\u7248\u672C\u6CA1\u6709\u5199\u8FDB\u6B63\u53F2\u3002\u90A3\u4E2A\u7248\u672C\u7684\u7ED3\u5C40\u662F\uFF1A\u57CE\u95E8\u6700\u540E\u6709\u6CA1\u6709\u5B88\u4F4F\uFF0C\u6CA1\u4EBA\u77E5\u9053\u3002\u4F46\u6240\u6709\u5728\u90A3\u95F4\u53A8\u623F\u91CC\u5F85\u8FC7\u7684\u4EBA\u2014\u2014\u5305\u62EC\u90A3\u4E9B\u672C\u8BE5\u5403\u6389\u4E00\u5207\u7684\u50F5\u5C38\u9762\u5305\u2014\u2014\u90FD\u8BB0\u4F4F\u4E86\u4E00\u4E2A\u9EC4\u8272\u7684\u3001\u5927\u809A\u5B50\u7684\u3001\u56DB\u80A2\u7EC6\u5C0F\u7684\u751F\u7269\uFF0C\u5728\u6D53\u70DF\u548C\u706B\u5149\u4E2D\u7F13\u7F13\u8F6C\u8FC7\u8EAB\u6765\uFF0C\u7528\u90A3\u5F20\u4ECE\u51FA\u751F\u8D77\u5C31\u6CA1\u8BF4\u8FC7\u4E00\u53E5\u8BDD\u7684\u5634\uFF0C\u53D1\u51FA\u4E86\u6574\u573A\u707E\u96BE\u4E2D\u6700\u54CD\u4EAE\u3001\u6700\u4E0D\u5408\u65F6\u5B9C\u3001\u4E5F\u6700\u8BA9\u4EBA\u65E0\u6CD5\u53CD\u9A73\u7684\u4E00\u58F0\u5927\u7B11\u3002

\u201C\u5976\u86D9\u53EF\u4EE5\u9009\u62E9\u8BF4\u7406\uFF0C\u4F46\u5976\u86D9\u9009\u62E9\u4E86\u6367\u8179\u5927\u7B11\u3002\u201D

\u73B0\u5728\u8F6E\u5230\u4F60\u9009\u62E9\u4E86\u3002\u628A\u624B\u653E\u5728\u809A\u5B50\u4E0A\u3002\u9505\u5728\u5DE6\u8FB9\uFF0C\u706B\u5728\u53F3\u8FB9\uFF0C\u9762\u5305\u5728\u95E8\u5916\u3002\u5976\u86D9\u5728\u770B\u7740\u4F60\u3002

\u5B83\u4EC0\u4E48\u90FD\u4E0D\u4F1A\u8BF4\u3002\u4F46\u5B83\u4F1A\u4E00\u76F4\u7B11\u5230\u4F60\u901A\u5173\uFF0C\u6216\u8005\u5012\u95ED\u3002`;function _h(){try{let s=localStorage.getItem(Rr);return s&&s.trim()?s:xh}catch{return xh}}function yh(){try{return!!localStorage.getItem(Rr)}catch{return!1}}function df(s){let e=(s||"").trim();try{return!e||e===xh.trim()?(localStorage.removeItem(Rr),!1):(localStorage.setItem(Rr,e),!0)}catch{return!1}}function ff(){try{localStorage.removeItem(Rr)}catch{}}var wy=document.getElementById("app"),Dn=new Ao({antialias:!0,powerPreference:"high-performance"});Dn.setPixelRatio(Math.min(window.devicePixelRatio||1,2));Dn.setSize(window.innerWidth,window.innerHeight);Dn.shadowMap.enabled=!0;Dn.shadowMap.type=vl;Dn.toneMapping=Ml;Dn.toneMappingExposure=1.08;Dn.outputColorSpace=mt;wy.appendChild(Dn.domElement);var Nn=new Co;Nn.background=new Te(14727567);Nn.fog=new Ro(14727567,.0135);var Ai=new wt(36,window.innerWidth/window.innerHeight,.1,160);Ai.position.set(.35,9.9,9.7);Ai.lookAt(0,1,1.1);var Ay=new Zo(16771014,4469800,.85);Nn.add(Ay);var tn=new Gi(16766883,2.5);tn.position.set(8.5,14,9);tn.target.position.set(0,0,.6);tn.castShadow=!0;tn.shadow.mapSize.set(1024,1024);tn.shadow.camera.left=-12;tn.shadow.camera.right=12;tn.shadow.camera.top=12;tn.shadow.camera.bottom=-12;tn.shadow.camera.near=1;tn.shadow.camera.far=46;tn.shadow.bias=-5e-4;tn.shadow.normalBias=.035;Nn.add(tn);Nn.add(tn.target);var mf=new Gi(11060448,.55);mf.position.set(-9,7,-7);Nn.add(mf);var gf=new Us(16756838,26,15,2);gf.position.set(0,2.7,-.4);Nn.add(gf);var pa=la(),bh=pa?pa.region:"base",xf={},_f={};for(let s of Object.keys(Ot)){let e=new qe;e.visible=s===bh,Nn.add(e),xf[s]=e,_f[s]=Dd(e,Ot[s]),e.traverse(t=>{t.isMesh&&(t.updateMatrix(),t.matrixAutoUpdate=!1)})}function Ry(s){bh=s;for(let[e,t]of Object.entries(xf))t.visible=e===s}var at=new ra,j=s=>document.getElementById(s),Y={cash:j("cash"),rep:j("rep"),stamText:j("stamina-text"),stamFill:j("stamina-fill"),hudRegion:j("hud-region"),hudDay:j("hud-day"),clock:j("clock"),phase:j("phase"),hint:j("hint"),orders:j("orders"),hand:j("hand"),prompt:j("prompt"),toasts:j("toasts"),skip:j("btn-skip"),tipsMenu:j("menu-tips"),regions:j("regions"),diffs:j("diffs"),durations:j("durations"),diffRegion:j("diff-region"),startDesc:j("start-desc"),startGoal:j("start-goal"),saveRow:j("save-row"),saveMeta:j("save-meta"),saveList:j("save-list"),saveDialogList:j("save-dialog-list"),saveCurrent:j("save-current"),screenSave:j("screen-save"),screenPause:j("screen-pause"),storyBody:j("story-body"),storyEdit:j("story-edit"),storyStatus:j("story-status"),storyActions:j("story-actions"),storyEditBtn:j("btn-story-edit"),storyResetBtn:j("btn-story-reset"),cookers:j("cookers"),pantry:j("pantry"),dirty:j("dirty"),hudSave:j("btn-save"),hud:j("hud"),achBadge:j("ach-badge"),achList:j("ach-list"),achSummary:j("ach-summary"),screens:{start:j("screen-start"),settle:j("screen-settle"),over:j("screen-over"),ach:j("screen-ach")}};function yf(){let s=ph(),e=wi.filter(t=>s.unlocked[t.id]);return{stats:s,unlocked:e}}function Eh(s){if(!Y.achBadge)return;let{stats:e,unlocked:t}=yf(),n=t.length,i=t.reduce((r,o)=>r+o.points,0)+(s?s.points:0);s&&!e.unlocked[s.id]&&(n+=1),Y.achBadge.textContent=`${n}/${wi.length}`,Y.achBadge.title=`\u5DF2\u89E3\u9501 ${n} \u9879 \xB7 \u6210\u5C31\u70B9 ${i}`}function Cy(){if(!Y.achList)return;let{stats:s,unlocked:e}=yf(),t=wi.filter(n=>s.unlocked[n.id]).reduce((n,i)=>n+i.points,0);Y.achSummary.innerHTML=`<b>${e.length} / ${wi.length}</b><span>\u5DF2\u89E3\u9501 \xB7 \u6210\u5C31\u70B9 ${t}</span><span>\u7D2F\u8BA1\u51FA\u9910 ${s.orders} \xB7 \u597D\u8BC4 ${s.praises} \xB7 \u89E3\u9501\u83DC\u54C1 ${s.dishes.length}</span>`,Y.achList.innerHTML=wi.map(n=>{let i=!!s.unlocked[n.id],r=Math.min(mh(n,s),n.goal),a=i||!n.hidden?n.name+(n.hidden?'<span class="hid">\u9690\u85CF</span>':""):"\uFF1F\uFF1F\uFF1F",c=i?n.desc:n.hidden?"\u7EE7\u7EED\u8425\u4E1A\uFF0C\u81EA\u5DF1\u53D1\u73B0\u5B83":n.desc,l=n.goal>1?`<b>${r}</b>/${n.goal}`:i?"\u5DF2\u8FBE\u6210":"\u672A\u8FBE\u6210";return`<div class="ach-row ${i?"on":"locked"}"><span class="r ${n.rarity}">${n.rarity}</span><span class="n">${a}</span><span class="p">${l}</span><span class="d">${c}${n.reward?" \xB7 "+n.reward:""}</span></div>`}).join("")}function Iy(){Vy()}var Py=s=>"#"+s.toString(16).padStart(6,"0"),Dt={setScreen(s){for(let[e,t]of Object.entries(Y.screens))t.classList.toggle("hidden",e!==s);Y.hud&&Y.hud.classList.toggle("hidden",s!==null)},region(s,e,t){Y.hudRegion.textContent=s,Y.hudDay.textContent=`\u7B2C ${e} \u5929${t?" \xB7 "+t:""}`},stats({cash:s,rep:e,stamina:t,staminaRaw:n}){Y.cash.textContent=`${s.toFixed(1)} \u5143`,Y.rep.textContent=`${e}`,Y.stamText.textContent=`${n}`;let i=Math.max(0,Math.min(1,t))*100;Y.stamFill.style.width=i+"%",Y.stamFill.classList.toggle("low",t<.3)},phase(s,e){e&&(Y.clock.textContent=e),Y.phase.textContent=s},orders(s){let e=s.map(n=>n.id).join("|");e!==this._orderKey&&(this._orderKey=e,this._orderViews=new Map,Y.orders.innerHTML="",s.forEach((n,i)=>{let r=document.createElement("div");r.className="ticket";let o=document.createElement("div");o.className="no",o.textContent=`\u7A97\u53E3 ${i+1}`;let a=document.createElement("div");a.className="lines";let c=[];for(let u of n.lines){let d=Lt[u.id],f=document.createElement("div");f.className="chip";let g=document.createElement("i");g.style.background=Py(d.color);let x=document.createElement("span");x.textContent=d.name;let m=document.createElement("b");f.append(g,x,m),a.appendChild(f),c.push({chip:f,num:m})}let l=document.createElement("div");l.className="pat";let h=document.createElement("span");l.appendChild(h),r.append(o,a,l),Y.orders.appendChild(r),this._orderViews.set(n.id,{card:r,chips:c,bar:h})}));let t=this._orderViews||new Map;for(let n of s){let i=t.get(n.id);if(!i)continue;let r=Math.max(0,n.patience/n.max),o=r>.55?"#6f9c46":r>.28?"#d79a3c":"#c2493a";i.bar.style.width=`${(r*100).toFixed(1)}%`,i.bar.style.background=o,i.card.style.borderTopColor=o,n.lines.forEach((a,c)=>{let l=i.chips[c];l&&(l.num.textContent=`${a.done}/${a.need}`,l.chip.classList.toggle("done",a.done>=a.need))})}},hand(s){let e=!s||s==="\u7A7A\u624B";Y.hand.textContent=`\u624B\u4E0A\uFF1A${e?"\u7A7A\u624B":s}`,Y.hand.classList.toggle("has",!e)},pantry(s){Y.pantry.innerHTML=`\u98DF\u6750\u7BB1 <b>${s}</b> / 6`,Y.pantry.classList.toggle("empty",s<=0)},dirty(s){Y.dirty&&(Y.dirty.textContent=s?`\u5730\u9762\u810F\u6C61 \xD7${s}\uFF08V \u6253\u626B\uFF09`:"\u5730\u9762\u5E72\u51C0",Y.dirty.classList.toggle("on",s>0))},cookers(s){let e=s.map(t=>t.station).join("|");e!==this._cookerKey&&(this._cookerKey=e,Y.cookers.innerHTML=s.map(()=>'<div class="cooker idle"><div class="top"><span class="dish"></span><span class="status"></span></div><div class="bar"><i></i></div></div>').join(""),this._cookerViews=[...Y.cookers.children].map(t=>({node:t,dish:t.querySelector(".dish"),status:t.querySelector(".status"),fill:t.querySelector(".bar i")}))),s.forEach((t,n)=>{let i=this._cookerViews&&this._cookerViews[n];i&&(i.node.className=`cooker ${t.tone}`,i.dish.textContent=t.dish,i.status.textContent=t.status,i.fill.style.width=`${Math.max(0,Math.min(1,t.frac))*100}%`)})},prompt(s){Y.prompt.textContent=s||""},achievement(s){if(!s||Y.hud&&[...Y.hud.querySelectorAll(".ach-pop")].some(t=>t.dataset.id===s.id))return;let e=document.createElement("div");e.dataset.id=s.id,e.className=`ach-pop r-${s.rarity}`,e.innerHTML=`<span class="ach-k">\u6210\u5C31\u89E3\u9501 \xB7 ${s.rarity}</span><b>${s.name}</b><span class="ach-d">${s.desc}${s.reward?" \xB7 "+s.reward:""}</span>`,Y.hud?Y.hud.appendChild(e):document.body.appendChild(e),at.coin(),Eh(s),requestAnimationFrame(()=>e.classList.add("show")),setTimeout(()=>{e.classList.remove("show"),setTimeout(()=>e.remove(),500)},2800)},murmur(s,e){if(!Y.hud)return;let t=document.createElement("div");t.className="murmur",t.dataset.slot=String(s),t.innerHTML=`<span>${e}</span>`,Y.hud.appendChild(t),Iy(),t.classList.add("show"),setTimeout(()=>{t.classList.remove("show"),setTimeout(()=>t.remove(),400)},3600)},hint(s){Y.hint.textContent=s||"",Y.hint.classList.toggle("show",!!s)},toast(s,e="info"){let t=document.createElement("div");for(t.className=`toast ${e}`,t.textContent=s,Y.toasts.appendChild(t);Y.toasts.childElementCount>4;)Y.toasts.firstElementChild.remove();setTimeout(()=>{t.style.transition="opacity .35s, transform .35s",t.style.opacity="0",t.style.transform="translateX(10px)",setTimeout(()=>t.remove(),380)},2300)},showSettle(s,e=[],t={}){Y.screenPause.classList.add("hidden"),Cr=!1,j("settle-title").textContent=`\u7B2C ${s.day} \u5929 \xB7 \u6253\u70CA`,j("settle-sub").textContent="9:00 \xB7 \u8857\u4E0A\u7684\u56F0\u610F\u6563\u4E86\uFF0C\u8D26\u672C\u8FD8\u70ED\u7740";let n=[["\u8425\u4E1A\u989D",`+${s.revenue.toFixed(1)} \u5143`,"pos"],["\u98DF\u6750\u6210\u672C",`-${s.cost.toFixed(1)} \u5143`,""],["\u623F\u79DF",`-${s.rent} \u5143`,""],["\u6C34\u7535",`-${s.utilities} \u5143`,""],["\u4ECA\u65E5\u51C0\u5229",`${s.net>=0?"+":""}${s.net.toFixed(1)} \u5143`,s.net>=0?"pos":"neg"],["\u51FA\u9910",`${s.served} \u4EFD`,""],["\u5DEE\u8BC4",`${s.complaints} \u4F4D`,s.complaints>0?"neg":""],["\u6253\u70CA\u672A\u5B8C\u6210",`${s.lost} \u5355`,s.lost>0?"neg":""],["\u6D6A\u8D39",`${s.waste} \u4EFD`,""],...s.dirty>0?[["\u5730\u9762\u810F\u6C61",s.dirtyRep>0?`${s.dirty} \u5904 \xB7 \u58F0\u671B -${s.dirtyRep}`:`${s.dirty} \u5904 \xB7 \u60A0\u95F2\u6A21\u5F0F\u4E0D\u6263\u58F0\u671B`,s.dirtyRep>0?"neg":""]]:[],...s.coins>0?[["\u6210\u5C31\u91D1\u5E01",`+${s.coins} \u5143`,"pos"]]:[],["\u58F0\u671B",`${s.rep}`,""],["\u73B0\u91D1\u4F59\u989D",`${s.cash.toFixed(1)} \u5143`,s.cash<0?"neg":"pos"]];j("settle-grid").innerHTML=n.map(([r,o,a])=>`<div class="srow"><span class="k">${r}</span><span class="v ${a}">${o}</span></div>`).join(""),j("settle-verdict").textContent=s.verdict,j("settle-stars").textContent=s.stars;let i=j("settle-ach");i&&(e.length?(i.classList.remove("hidden"),i.innerHTML="<b>\u89E3\u9501\u6210\u5C31</b>"+e.map(r=>`<span class="ach-chip r-${r.rarity}">${r.name}</span>`).join("")):(i.classList.add("hidden"),i.innerHTML="")),j("btn-next").textContent=`\u8FDB\u5165\u7B2C ${s.day+1} \u5929`,j("settle-save").textContent="\u8FDB\u5165\u4E0B\u4E00\u5929\u65F6\u81EA\u52A8\u5B58\u6863",Dt.setScreen("settle")},showGameOver(s){Y.screenPause.classList.add("hidden"),Cr=!1,j("over-body").innerHTML=[`${s.region} \xB7 \u6491\u5230\u7B2C <b>${s.day}</b> \u5929\uFF0C\u73B0\u91D1 <b>${s.cash.toFixed(1)} \u5143</b>\u3002`,`\u4E00\u5171\u51FA\u9910 <b>${s.served}</b> \u4EFD\uFF0C\u6536\u5230 <b>${s.complaints}</b> \u4E2A\u5DEE\u8BC4\uFF0C\u58F0\u671B <b>${s.rep}</b>\u3002`,"\u623F\u79DF\u3001\u6C34\u7535\u3001\u98DF\u6750\u2014\u2014\u4E09\u5F20\u8D26\u5355\u540C\u65F6\u538B\u4E0B\u6765\u7684\u65F6\u5019\uFF0C\u8FD9\u6761\u8857\u4E0D\u4F1A\u7B49\u4F60\u3002"].join("<br />"),Dt.setScreen("over")}};function vf(s){return s.menu.map(e=>`${Lt[e].name} ${Lt[e].price} \u5143`).join(" \xB7 ")}var Ly={main:j("pane-main"),region:j("pane-region"),diff:j("pane-diff"),saves:j("pane-saves"),story:j("pane-story"),ach:null},rt={pane:"main",region:bh,difficulty:pa?pa.difficulty:"normal",duration:"normal",pick:"difficulty"},ma=!1;function Ir(){let s=_h();ma=!1,Y.storyBody.textContent=s,Y.storyBody.scrollTop=0,Y.storyBody.classList.remove("hidden"),Y.storyEdit.classList.add("hidden"),Y.storyActions.classList.add("hidden"),Y.storyEditBtn.classList.remove("hidden"),Y.storyResetBtn.classList.toggle("hidden",!yh()),Y.storyStatus.textContent=yh()?`\u81EA\u5B9A\u4E49\u6545\u4E8B \xB7 ${s.length} \u5B57\uFF08\u53EA\u4FDD\u5B58\u5728\u8FD9\u53F0\u6D4F\u89C8\u5668\uFF09`:`\u9ED8\u8BA4\u6545\u4E8B \xB7 ${s.length} \u5B57`}function Dy(){ma=!0,Y.storyEdit.value=_h(),Y.storyBody.classList.add("hidden"),Y.storyEdit.classList.remove("hidden"),Y.storyActions.classList.remove("hidden"),Y.storyEditBtn.classList.add("hidden"),Y.storyResetBtn.classList.add("hidden"),Y.storyStatus.textContent="\u7F16\u8F91\u4E2D \xB7 \u6700\u591A 4000 \u5B57",Y.storyEdit.focus()}function Mf(){Ir()}function Ny(){let s=Y.storyEdit.value.trim();if(!s){Dt.toast("\u6545\u4E8B\u4E0D\u80FD\u4E3A\u7A7A\uFF1B\u8981\u6062\u590D\u539F\u6587\u8BF7\u70B9\u300C\u6062\u590D\u9ED8\u8BA4\u300D\u3002","warn");return}let e=df(s);Ir(),Dt.toast(e?"\u80CC\u666F\u6545\u4E8B\u5DF2\u4FDD\u5B58":"\u5DF2\u6062\u590D\u4E3A\u9ED8\u8BA4\u6545\u4E8B",e?"ok":"info"),at.click()}function Uy(){ff(),Ir(),Dt.toast("\u5DF2\u6062\u590D\u9ED8\u8BA4\u6545\u4E8B","info"),at.click()}function Un(s){rt.pane=s;for(let[e,t]of Object.entries(Ly))t&&t.classList.toggle("hidden",e!==s);s==="saves"&&Th(Y.saveList,"manage"),s==="story"&&Ir()}function Pr(){let s=Ot[rt.region],e=en[rt.difficulty],t=Math.max(4,Math.round(s.day.customers*e.customers)),n=Math.round(s.day.patience*e.patience),i=Math.round(s.day.rent*e.rent);Y.diffRegion.textContent=`${s.name} \xB7 \u7B2C 1 \u5929`,Y.startGoal.innerHTML=`\u76EE\u6807\uFF1A\u6491\u8FC7 <b>${t}</b> \u4F4D\u5BA2\u4EBA\uFF08\u8010\u5FC3\u7EA6 ${n} \u79D2\uFF09\uFF0C\u4EA4\u5B8C\u623F\u79DF <b>${i}</b> \u5143\u548C\u6C34\u7535\uFF0C\u522B\u8BA9\u73B0\u91D1\u53D8\u6210\u8D1F\u6570\u3002<br />\u5F53\u524D\u5206\u7EA7\uFF1A${e.name} \xB7 \u5BA2\u4EBA \xD7${e.customers}\u3001\u8010\u5FC3 \xD7${e.patience}\u3001\u623F\u79DF \xD7${e.rent}\u3001\u5C0F\u8D39 \xD7${e.tip}`,Y.tipsMenu.textContent=vf(s);for(let o of Y.regions.children)o.classList.toggle("selected",o.dataset.region===s.key);for(let o of Y.diffs.children)o.classList.toggle("selected",o.dataset.diff===rt.difficulty);for(let o of Y.durations.children)o.classList.toggle("selected",o.dataset.dur===rt.duration);let r=gn[rt.duration];Y.startGoal.innerHTML+=`<br />\u4E00\u5C40\u65F6\u957F\uFF1A<b>${r.tag}</b>\uFF08\u65E9\u9AD8\u5CF0 ${r.rush} \u79D2\uFF0C\u623F\u79DF \xD7${r.rent}\uFF09`}function Sf(s){let e=Ot[s]||Ot.base;rt.region=e.key,Ry(e.key),Y.startDesc.textContent=e.desc,Pr(),at.click()}for(let s of Object.values(Ot)){let e=document.createElement("button");e.type="button",e.className="region-card",e.dataset.region=s.key,e.innerHTML=`
    <span class="rname">${s.name}</span>
    <span class="rtag">${s.tagline}</span>
    <span class="rmeta">${s.difficulty}${s.patienceTag?` \xB7 ${s.patienceTag}`:""} \xB7 ${s.day.customers} \u4F4D\u5BA2\u4EBA \xB7 \u623F\u79DF ${s.day.rent}</span>
    <span class="rmenu">${vf(s)}</span>`,e.addEventListener("click",()=>Sf(s.key)),Y.regions.appendChild(e)}for(let s of Object.values(gn)){let e=document.createElement("button");e.type="button",e.className="dur-btn",e.dataset.dur=s.key,e.innerHTML=`<b>${s.name}</b><span>${s.tag} \xB7 \u623F\u79DF \xD7${s.rent}</span>`,e.title=s.desc,e.addEventListener("click",()=>{rt.duration=s.key,Pr(),at.click()}),Y.durations.appendChild(e)}for(let s of Object.values(en)){let e=document.createElement("button");e.type="button",e.className="diff-card",e.dataset.diff=s.key,e.innerHTML=`
    <span class="dname">${s.name}</span>
    <span class="dtag">${s.tag}</span>
    <span class="dmeta">\u5BA2\u4EBA \xD7${s.customers} \xB7 \u8010\u5FC3 \xD7${s.patience} \xB7 \u623F\u79DF \xD7${s.rent}</span>
    <span class="ddesc">${s.desc}</span>`,e.addEventListener("click",()=>{rt.difficulty=s.key,Pr(),at.click()}),Y.diffs.appendChild(e)}function Oy(s){try{return new Date(s).toLocaleString("zh-CN",{month:"numeric",day:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return""}}function Fy(s){if(!s)return null;let e=Ot[s.region],t=en[s.difficulty]||en.normal;return{main:`${e.name} \xB7 ${t.name}\u96BE\u5EA6 \xB7 ${(gn[s.durationKey]||gn.normal).name} \xB7 \u7B2C ${s.day} \u5929`,sub:`\u73B0\u91D1 ${s.cash.toFixed(1)} \u5143 \xB7 \u7D2F\u8BA1\u51FA\u9910 ${s.totalServed} \u4EFD \xB7 ${s.snap?"\u8425\u4E1A\u4E2D":"\u5F53\u5929\u65E9\u4E0A"} \xB7 ${Oy(s.updatedAt)}`}}var da={key:null,until:0};function Th(s,e){let t=jd(),n=[{key:"auto",label:"\u81EA\u52A8\u5B58\u6863",rec:t.auto}];for(let i of[1,2,3])n.push({key:i,label:`\u624B\u52A8 ${i}`,rec:t.manual[i]});s.innerHTML="";for(let i of n){let r=document.createElement("div");r.className="save-item"+(i.rec?"":" empty");let o=document.createElement("span");o.className="slot",o.textContent=i.label;let a=document.createElement("span");a.className="meta";let c=Fy(i.rec);if(a.innerHTML=c?`${c.main}<em>${c.sub}</em>`:i.key==="auto"?"\u8FD8\u6CA1\u6709\u81EA\u52A8\u5B58\u6863":"\u7A7A\u69FD\u4F4D",r.append(o,a),e==="manage"){if(i.rec){let l=document.createElement("button");l.type="button",l.className="mini",l.textContent="\u8BFB\u53D6",l.addEventListener("click",()=>{at.click(),Rh(i.rec.region,i.rec.difficulty,i.rec.durationKey||"normal",i.rec)});let h=document.createElement("button");h.type="button",h.className="mini",h.textContent="\u5220\u9664",h.addEventListener("click",()=>{let u=Date.now();if(da.key!==i.key||u>=da.until){da={key:i.key,until:u+2600},h.textContent="\u518D\u70B9\u4E00\u6B21",setTimeout(()=>{h.isConnected&&(h.textContent="\u5220\u9664")},2600);return}da={key:null,until:0},at.click(),i.key==="auto"?ha():tf(i.key),Th(s,"manage"),wh()}),r.append(l,h)}}else if(i.key!=="auto"){let l=document.createElement("button");l.type="button",l.className="mini",l.textContent=i.rec?"\u8986\u76D6":"\u4FDD\u5B58",l.addEventListener("click",()=>By(i.key,i.label)),r.append(l)}s.appendChild(r)}}function wh(){let s=la();if(Y.saveRow.classList.toggle("hidden",!s),s){let e=en[s.difficulty]||en.normal;Y.saveMeta.textContent=`${Ot[s.region].name} \xB7 ${e.name} \xB7 \u7B2C ${s.day} \u5929 \xB7 \u73B0\u91D1 ${s.cash.toFixed(1)} \u5143`}}function By(s,e){if(!Re||!Re.canManualSave()){Dt.toast("\u53EA\u80FD\u5728\u672C\u65E5\u8425\u4E1A\u4E2D\u5B58\u6863\u3002","warn");return}if(!Re.saveToSlot(s)){Dt.toast("\u5B58\u6863\u5931\u8D25\uFF1A\u6D4F\u89C8\u5668\u5B58\u50A8\u4E0D\u53EF\u7528\u3002","bad");return}at.click(),Ah(),Dt.toast(`\u5DF2\u4FDD\u5B58\u5230${e}`,"ok"),wh()}function bf(){if(!Re||!Re.canManualSave()){Dt.toast("\u73B0\u5728\u662F\u7ED3\u7B97\u548C\u6536\u5C3E\u9636\u6BB5\uFF0C\u4E0D\u80FD\u5B58\u6863\u3002","warn");return}Cr=!Y.screenPause.classList.contains("hidden"),Y.screenPause.classList.add("hidden"),Re.paused=!0,Y.saveCurrent.textContent=`${Ot[Re.region.key].name} \xB7 ${Re.difficulty.name}\u96BE\u5EA6 \xB7 \u7B2C ${Re.day} \u5929 \xB7 \u73B0\u91D1 ${Re.cash.toFixed(1)} \u5143 \xB7 ${Re.phase==="rush"?"\u65E9\u9AD8\u5CF0":"\u5907\u6599"}`,Th(Y.saveDialogList,"save"),Y.screenSave.classList.remove("hidden")}function Ah(){if(Y.screenSave.classList.add("hidden"),Cr){Cr=!1,Y.screenPause.classList.remove("hidden"),Re&&(Re.paused=!0);return}Re&&(Re.paused=!1)}var Cr=!1;function ky(){!Re||Re.paused||Re.phase!=="prep"&&Re.phase!=="rush"||(Re.paused=!0,Y.screenPause.classList.remove("hidden"),at.click())}function Ef(){Y.screenPause.classList.add("hidden"),Re&&(Re.paused=!1),at.click()}j("btn-new").addEventListener("click",()=>{at.click(),Un("region")});j("btn-saves").addEventListener("click",()=>{at.click(),Un("saves")});j("btn-story").addEventListener("click",()=>{at.click(),Un("story")});j("btn-ach-menu").addEventListener("click",()=>{at.click(),Eh(),Tf()});j("btn-ach").addEventListener("click",()=>{Tf()});j("btn-ach-back").addEventListener("click",()=>{at.click(),Mh()});j("btn-story-back").addEventListener("click",()=>{at.click(),ma&&Ir(),Un("main")});j("btn-story-edit").addEventListener("click",()=>{at.click(),Dy()});j("btn-story-save").addEventListener("click",Ny);j("btn-story-cancel").addEventListener("click",()=>{at.click(),Mf()});j("btn-story-reset").addEventListener("click",Uy);j("btn-region-back").addEventListener("click",()=>Un("main"));j("btn-saves-back").addEventListener("click",()=>Un("main"));j("btn-region-next").addEventListener("click",()=>{at.click(),Pr(),Un("diff")});j("btn-diff-back").addEventListener("click",()=>Un("region"));j("btn-save").addEventListener("click",()=>bf());j("btn-resume").addEventListener("click",Ef);j("btn-pause-save").addEventListener("click",()=>bf());j("btn-quit").addEventListener("click",()=>location.reload());j("btn-save-cancel").addEventListener("click",()=>{at.click(),Ah()});Y.startDesc.textContent=Ot[rt.region].desc;Pr();wh();Dt.setScreen("start");Eh();Dt.hand("\u7A7A\u624B");Dt.stats({cash:mn.startCash,rep:50,stamina:1,staminaRaw:Yt.staminaMax});Dt.region(Ot[rt.region].name,1,en[rt.difficulty].name);Y.skip.classList.add("hidden");Y.hudSave.classList.add("hidden");Un("main");var Re=null;function Tf(){Cy(),at.click(),Re&&(Re.phase==="prep"||Re.phase==="rush")&&!Re.paused&&(Re.paused=!0,Sh=!0),Y.screenPause.classList.add("hidden"),Y.screens.ach.classList.remove("hidden")}function Mh(){Y.screens.ach.classList.add("hidden"),Sh&&(Y.screenPause.classList.remove("hidden"),Sh=!1)}var Sh=!1,vh=!1,wf=new URLSearchParams(location.search).get("model")||Tr.url,zy=Xd(wf),Hy=qd(wf);async function Rh(s,e,t=rt.duration,n=null){if(Re||vh)return;vh=!0,at.init(),rt.difficulty=en[e]?e:"normal",rt.duration=gn[t]?t:"normal",Sf(s);let[i,r]=await Promise.all([zy,Hy]);Y.screenPause.classList.add("hidden"),Dt.setScreen(null),Re=new ua({scene:Nn,camera:Ai,world:_f[rt.region],sound:at,ui:Dt,regionKey:rt.region,difficultyKey:rt.difficulty,durationKey:n&&gn[n.durationKey]?n.durationKey:rt.duration,resume:n,playerModel:i,customerTemplate:r}),vh=!1,window.__game=Re,n?Re.continueRun():Re.startNewRun(),Y.skip.classList.toggle("hidden",Re.phase!=="prep"),Y.hudSave.classList.toggle("hidden",!Re.canManualSave())}var wv=new w,fa=null;function Vy(){if(!Y.hud||!Re)return;fa||(fa=[new w(2,1.9,4.1),new w(2.9,1.9,4.1),new w(3.8,1.9,4.1)]);let s=Y.hud.clientWidth||window.innerWidth,e=Y.hud.clientHeight||window.innerHeight;for(let t of Y.hud.querySelectorAll(".murmur")||[]){let n=Number(t.dataset.slot)||0,i=fa[n%fa.length].clone();i.project(Ai);let r=(i.x*.5+.5)*s,o=(-i.y*.5+.5)*e,a=(t.offsetWidth||120)/2+8;t.style.left=`${Math.max(a,Math.min(s-a,r))}px`,t.style.top=`${Math.max(52,o)}px`}}j("btn-start").addEventListener("click",()=>Rh(rt.region,rt.difficulty,rt.duration));j("btn-continue").addEventListener("click",()=>{let s=la();s&&Rh(s.region,s.difficulty,s.durationKey||"normal",s)});j("btn-skip").addEventListener("click",()=>{at.click(),Re&&Re.skipPrep()});j("btn-next").addEventListener("click",()=>{at.click(),Dt.setScreen(null),Re&&Re.nextDay()});j("btn-retry").addEventListener("click",()=>{at.click(),Dt.setScreen(null),Re&&Re.retryDay()});j("btn-restart").addEventListener("click",()=>{at.click(),Dt.setScreen(null),Re&&Re.startNewRun()});window.addEventListener("keydown",s=>{if(s.code==="Escape"||s.code==="KeyP"){if(!Y.screens.ach.classList.contains("hidden")){Mh();return}if(!Y.screenSave.classList.contains("hidden")){Ah();return}if(!Y.screenPause.classList.contains("hidden")){Ef();return}if(!Y.screens.start.classList.contains("hidden")){if(s.code==="Escape"&&rt.pane==="story"&&ma){Mf();return}s.code==="Escape"&&rt.pane!=="main"&&Un(rt.pane==="diff"?"region":"main");return}if(!Y.screens.settle.classList.contains("hidden")||!Y.screens.over.classList.contains("hidden"))return;ky();return}if(s.code==="Enter"){if(!Y.screens.ach.classList.contains("hidden")){Mh();return}if(Y.screenPause.classList.contains("hidden")&&Y.screenSave.classList.contains("hidden"))if(Y.screens.start.classList.contains("hidden"))Y.screens.settle.classList.contains("hidden")?Y.screens.over.classList.contains("hidden")||j("btn-restart").click():j("btn-next").click();else if(rt.pane==="diff")j("btn-start").click();else if(rt.pane==="region")j("btn-region-next").click();else if(rt.pane==="saves")j("btn-saves-back").click();else{if(rt.pane==="story")return;j("btn-new").click()}}});var pf=performance.now();function Af(s){requestAnimationFrame(Af);let e=Math.min(.05,Math.max(0,(s-pf)/1e3));pf=s,Re&&!Re.paused&&!document.hidden&&Re.update(e,Ai),Re&&(Y.skip.classList.toggle("hidden",Re.phase!=="prep"),Y.hudSave.classList.toggle("hidden",!Re.canManualSave())),Dn.render(Nn,Ai)}requestAnimationFrame(Af);window.addEventListener("resize",()=>{Ai.aspect=window.innerWidth/window.innerHeight,Ai.updateProjectionMatrix(),Dn.setSize(window.innerWidth,window.innerHeight)});window.__game=null;window.__ach={peekStats:ph,ACHIEVEMENTS:wi,resetAchievements:hf};
