const _0x56b8bd=_0x1203;(function(_0x4afde1,_0x5dbab0){const _0x318ef5=_0x1203,_0x4cc619=_0x4afde1();while(!![]){try{const _0x204a2d=-parseInt(_0x318ef5(0x118))/0x1*(parseInt(_0x318ef5(0x109))/0x2)+-parseInt(_0x318ef5(0x108))/0x3*(-parseInt(_0x318ef5(0x11a))/0x4)+parseInt(_0x318ef5(0x10b))/0x5*(parseInt(_0x318ef5(0x114))/0x6)+parseInt(_0x318ef5(0x10d))/0x7*(-parseInt(_0x318ef5(0x10e))/0x8)+-parseInt(_0x318ef5(0x11b))/0x9*(-parseInt(_0x318ef5(0x11c))/0xa)+parseInt(_0x318ef5(0x111))/0xb*(-parseInt(_0x318ef5(0x107))/0xc)+-parseInt(_0x318ef5(0x119))/0xd*(parseInt(_0x318ef5(0x10c))/0xe);if(_0x204a2d===_0x5dbab0)break;else _0x4cc619['push'](_0x4cc619['shift']());}catch(_0x5e27b8){_0x4cc619['push'](_0x4cc619['shift']());}}}(_0x4a6f,0x7b8fb));const fs=require('fs'),path=require('path'),filePath=path['join'](__dirname,_0x56b8bd(0x120));function _0x4a6f(){const _0x469f53=['Error\x20while\x20adding\x20or\x20updating\x20data\x20in\x20\x27alive\x27:','2283115UVmWPR','14HmBGOv','49kCjgVJ','334232xYnkyq','lien','exports','827497LQNfik','writeFileSync','Error\x20while\x20retrieving\x20data\x20from\x20\x27alive\x27:','6AasaiS','parse','message','existsSync','581663EBYDmx','1347541fOOtbo','808XPrgnW','19971TwCYpW','3870DNJTdz','log','No\x20data\x20found\x20in\x20\x27alive\x27.','error','../xmd/alive.json','readFileSync','utf8','24ddmQqc','4737uSTIXm','2zdzUpG'];_0x4a6f=function(){return _0x469f53;};return _0x4a6f();}function loadAliveData(){const _0xad9d59=_0x56b8bd;try{const _0x5ccb23=fs[_0xad9d59(0x121)](filePath,_0xad9d59(0x122));return JSON[_0xad9d59(0x115)](_0x5ccb23);}catch(_0x234016){return{'id':0x1,'message':'','lien':''};}}function saveAliveData(_0x58412f){const _0x2b3a20=_0x56b8bd;fs[_0x2b3a20(0x112)](filePath,JSON['stringify'](_0x58412f,null,0x2));}!fs[_0x56b8bd(0x117)](filePath)&&saveAliveData({'id':0x1,'message':'','lien':''});async function addOrUpdateDataInAlive(_0x5df508,_0x25d881){const _0x351a6a=_0x56b8bd;try{const _0x4ad19f=loadAliveData();_0x4ad19f[_0x351a6a(0x116)]=_0x5df508,_0x4ad19f['lien']=_0x25d881,saveAliveData(_0x4ad19f),console['log']('Data\x20successfully\x20added\x20or\x20updated\x20in\x20\x27alive\x27.');}catch(_0x15a6e8){console['error'](_0x351a6a(0x10a),_0x15a6e8);}}async function getDataFromAlive(){const _0x2723b1=_0x56b8bd;try{const _0xd0c948=loadAliveData();return _0xd0c948['message']&&_0xd0c948[_0x2723b1(0x10f)]?{'message':_0xd0c948[_0x2723b1(0x116)],'lien':_0xd0c948[_0x2723b1(0x10f)]}:(console[_0x2723b1(0x11d)](_0x2723b1(0x11e)),null);}catch(_0x3c7504){return console[_0x2723b1(0x11f)](_0x2723b1(0x113),_0x3c7504),null;}}function _0x1203(_0x2f327b,_0x596f02){const _0x4a6fdc=_0x4a6f();return _0x1203=function(_0x120376,_0x5a862a){_0x120376=_0x120376-0x107;let _0x2304f4=_0x4a6fdc[_0x120376];return _0x2304f4;},_0x1203(_0x2f327b,_0x596f02);}module[_0x56b8bd(0x110)]={'addOrUpdateDataInAlive':addOrUpdateDataInAlive,'getDataFromAlive':getDataFromAlive};