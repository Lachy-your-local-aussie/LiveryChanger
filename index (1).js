let lastLivId = 0;
let lastMpLId = 0;
let a321id = null
let b747id = null
//find id of the 747 and a321 automatically
document.querySelectorAll('[data-aircraft]').forEach(function(e){
  if (e.innerText.includes("A321"))
    a321id = e.attributes["data-aircraft"].value
})

document.querySelectorAll('[data-aircraft]').forEach(function(e){
  if (e.innerText.includes("747"))
    b747id = e.attributes["data-aircraft"].value
})

//737 ryanair livery
newDiv = document.createElement("div");

newDiv.setAttribute("data-aircraft", 4);
newDiv.setAttribute("data-livery", 7);

newDiv.innerHTML = '<img src="https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/screenshot_2022-01-10_8.15.06_am__1_.png">RyanAir';



//737 delta livery
newDiv1 = document.createElement("div");

newDiv1.setAttribute("data-aircraft", 4);
newDiv1.setAttribute("data-livery", 8);

newDiv1.innerHTML = '<img src="https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/screenshot_2022-01-10_11.52.42_am__1_.png">Delta';


//737 canada livery
newDiv2 = document.createElement("div");

newDiv2.setAttribute("data-aircraft", 4);
newDiv2.setAttribute("data-livery", 9);

newDiv2.innerHTML = '<img src="https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/6473892164984.png">Air Canada';


//737 bare
newDiv3 = document.createElement("div");

newDiv3.setAttribute("data-aircraft", 4);
newDiv3.setAttribute("data-livery", 10);

newDiv3.innerHTML = '<img src="https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/8437210984781.png">Bare Metal';

//A380 House
newDiv4 = document.createElement("div");

newDiv4.setAttribute("data-aircraft", 10);
newDiv4.setAttribute("data-livery", 11);

newDiv4.innerHTML = '<img src="https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/screenshot_2022-01-12_6.04.22_pm__1_.png">Airbus';
//A350K Qatar
newDiv5 = document.createElement("div");

newDiv5.setAttribute("data-aircraft", 2973);
newDiv5.setAttribute("data-livery", 13);

newDiv5.innerHTML = 'Qatar';

//A321Neo United
newDiv6 = document.createElement("div");

newDiv6.setAttribute("data-aircraft", a321id);
newDiv6.setAttribute("data-livery", 13);

newDiv6.innerHTML = 'United';

//748F Lufthansa
newDiv7 = document.createElement("div");

newDiv7.setAttribute("data-aircraft", b747id);
newDiv7.setAttribute("data-livery", 14);

newDiv7.innerHTML = 'Lufthansa';

//A10 Bare
newDiv8 = document.createElement("div");

newDiv8.setAttribute("data-aircraft", 2310);
newDiv8.setAttribute("data-livery", 15);

newDiv8.innerHTML = 'Solid Gray';

if (document.getElementsByClassName("geofs-aircraft-list")[0].children[5].childElementCount == 7){
  document.getElementsByClassName("geofs-aircraft-list")[0].children[5].appendChild(newDiv);
  document.getElementsByClassName("geofs-aircraft-list")[0].children[5].appendChild(newDiv1);
  document.getElementsByClassName("geofs-aircraft-list")[0].children[5].appendChild(newDiv2);
  document.getElementsByClassName("geofs-aircraft-list")[0].children[5].appendChild(newDiv3);
}

if (document.getElementsByClassName("geofs-aircraft-list")[0].children[4].childElementCount == 7){
  document.getElementsByClassName("geofs-aircraft-list")[0].children[4].appendChild(newDiv);
  document.getElementsByClassName("geofs-aircraft-list")[0].children[4].appendChild(newDiv1);
  document.getElementsByClassName("geofs-aircraft-list")[0].children[4].appendChild(newDiv2);
  document.getElementsByClassName("geofs-aircraft-list")[0].children[4].appendChild(newDiv3);
}


  if (document.getElementsByClassName("geofs-aircraft-list")[0].children[10].childElementCount == 4){
document.getElementsByClassName("geofs-aircraft-list")[0].children[10].appendChild(newDiv4)
  }
  if (document.getElementsByClassName("geofs-aircraft-list")[0].children[11].childElementCount == 4){
document.getElementsByClassName("geofs-aircraft-list")[0].children[11].appendChild(newDiv4)
  }

document.getElementsByClassName("geofs-list-collapsible-item geofs-notstudent-role")[0].children[0].children[50].appendChild(newDiv5)

document.querySelectorAll('[data-aircraft]').forEach(function(e){
  if (e.innerText.includes("A321"))
    e.appendChild(newDiv6)
})

document.querySelectorAll('[data-aircraft]').forEach(function(e){
  if (e.innerText.includes("747"))
    e.appendChild(newDiv7)
})

document.getElementsByClassName("geofs-list-collapsible-item geofs-notstudent-role")[0].children[0].children[14].appendChild(newDiv8)
// master livery function

if (geofs.version == 2.9){
  function updateLivery(){
          if (parseInt(geofs.aircraft.instance.liveryId) == 14){

Object.values(geofs.api.models._primitives).forEach(function(e){
if (e._apiLla[0] - geofs.aircraft.instance.llaLocation[0] == 0){
console.log(e);
geofs.api.Model.prototype.changeTexture("https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/id181__1_.png", 0, e)
  if (!e._resource._url.includes("748f.gltf")) {
          geofs.api.Model.prototype.changeTexture("https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/id163__1_.png", 0, e)
        }
}})
            
  }
              if (parseInt(geofs.aircraft.instance.id) == 2310 && parseInt(geofs.aircraft.instance.liveryId) == 15){
geofs.api.Model.prototype.changeTexture("https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/livercomposit.jpg", 1, geofs.aircraft.instance.definition.parts[0]["3dmodel"]);
  }
      if (parseInt(geofs.aircraft.instance.id) == 4 && parseInt(geofs.aircraft.instance.liveryId) == 7){
geofs.api.Model.prototype.changeTexture("https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/texture_0__2_.jpg", 3, geofs.aircraft.instance.definition.parts[0]["3dmodel"]);
  }
    if (parseInt(geofs.aircraft.instance.id) == 4 && parseInt(geofs.aircraft.instance.liveryId) == 8){
geofs.api.Model.prototype.changeTexture("https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/texture_4.png", 3, geofs.aircraft.instance.definition.parts[0]["3dmodel"]);
      }
  if (parseInt(geofs.aircraft.instance.id) == 4 && parseInt(geofs.aircraft.instance.liveryId) == 9){
geofs.api.Model.prototype.changeTexture("https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/texture_0__6_.png", 3, geofs.aircraft.instance.definition.parts[0]["3dmodel"]);
  }
      
    if (parseInt(geofs.aircraft.instance.id) == 4 && parseInt(geofs.aircraft.instance.liveryId)
 == 10){
geofs.api.Model.prototype.changeTexture("https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/texture_0.png", 3, geofs.aircraft.instance.definition.parts[0]["3dmodel"]);
}
        if (parseInt(geofs.aircraft.instance.id) == 10 && parseInt(geofs.aircraft.instance.liveryId)
 == 11){
geofs.api.Model.prototype.changeTexture("https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/a380house.png", 3, geofs.aircraft.instance.definition.parts[0]["3dmodel"]);
}
            if (parseInt(geofs.aircraft.instance.id) == 2973 && parseInt(geofs.aircraft.instance.liveryId)
 == 12){
geofs.api.Model.prototype.changeTexture("https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/a350_1000_xwb_texture__3_.png", 0, geofs.aircraft.instance.definition.parts[0]["3dmodel"]);
}
                if (parseInt(geofs.aircraft.instance.liveryId)
 == 13){
Object.values(geofs.api.models._primitives).forEach(function(e){
  if (e._apiLla[0] - geofs.aircraft.instance.llaLocation[0] > -0.01 && e._apiLla[0] - geofs.aircraft.instance.llaLocation[0] < 0.01) {
console.log(e);
geofs.api.Model.prototype.changeTexture("https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/id8__1_.png", 0, e)
        if (!e._resource._url.includes("/backend/aircraft/repository/D02_933_242/A321neo.gltf")) {
          geofs.api.Model.prototype.changeTexture("https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/texture__1___1_.png", 0, e)
        }
}})
}
}
}
if (geofs.version == 3){
  function updateLivery(){
      if (parseInt(geofs.aircraft.instance.id) == 4 && parseInt(geofs.aircraft.instance.liveryId) == 7){
geofs.api.changeModelTexture(geofs.aircraft.instance.definition.parts[0]["3dmodel"]._model, "https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/texture_0__2_.jpg", 3);
  }
    if (parseInt(geofs.aircraft.instance.id) == 4 && parseInt(geofs.aircraft.instance.liveryId) == 8){
geofs.api.changeModelTexture(geofs.aircraft.instance.definition.parts[0]["3dmodel"]._model, "https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/texture_4.png", 3);
      }
  if (parseInt(geofs.aircraft.instance.id) == 4 && parseInt(geofs.aircraft.instance.liveryId) == 9){
geofs.api.changeModelTexture(geofs.aircraft.instance.definition.parts[0]["3dmodel"]._model, "https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/texture_0__6_.png", 3);
  }
      
    if (parseInt(geofs.aircraft.instance.id) == 4 && parseInt(geofs.aircraft.instance.liveryId) == 10){
geofs.api.changeModelTexture(geofs.aircraft.instance.definition.parts[0]["3dmodel"]._model, "https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/texture_0.png", 3);
    }
            if (parseInt(geofs.aircraft.instance.id) == 10 && parseInt(geofs.aircraft.instance.liveryId)
 == 11){
geofs.api.changeModelTexture(geofs.aircraft.instance.definition.parts[0]["3dmodel"]._model, "https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/a380house.png", 3);
 }
if (parseInt(geofs.aircraft.instance.id) == 2973 && parseInt(geofs.aircraft.instance.liveryId)
 == 12){
geofs.api.changeModelTexture(geofs.aircraft.instance.definition.parts[0]["3dmodel"]._model, "https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/a350_1000_xwb_texture__3_.png", 0);
 }
    if (parseInt(geofs.aircraft.instance.id) == 242 && parseInt(geofs.aircraft.instance.liveryId)
 == 13){
geofs.api.changeModelTexture(geofs.aircraft.instance.definition.parts[0]["3dmodel"]._model, "https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/texture__1___1_.png", 0);
      geofs.api.changeModelTexture(geofs.aircraft.instance.definition.parts[1]["3dmodel"]._model, "https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/texture__1___1_.png", 0);
 }
  }
}

let arr1 = [];
function convertUsers(){
  arr1 = $.map(multiplayer.visibleUsers, function (value) { return value; });
};

if (geofs.version == 2.9){
function updateMultiplayer(){
  arr1 = [];
  convertUsers();
  arr1.forEach(function(e, i){
if (e.lastLivery != e.currentLivery){
    if (e.currentLivery == 7){
     geofs.api.Model.prototype.changeTexture("https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/texture_0__2_low.png", 0, multiplayer.visibleUsers[e.id].model); 
    }

        if (e.currentLivery == 8){
     geofs.api.Model.prototype.changeTexture("https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/texture_4_low.png", 0, multiplayer.visibleUsers[e.id].model); 
    }
        if (e.currentLivery == 9){
     geofs.api.Model.prototype.changeTexture("https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/texture_0__5__low.png", 0, multiplayer.visibleUsers[e.id].model); 
    }
        if (e.currentLivery == 10){
     geofs.api.Model.prototype.changeTexture("https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/texture_0low.png", 0, multiplayer.visibleUsers[e.id].model); 
        }
        if (e.currentLivery == 11){
     geofs.api.Model.prototype.changeTexture("https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/a380house__1_.png", 0, multiplayer.visibleUsers[e.id].model); 
    }    
}
   e.lastLivery = e.currentLivery
  })
}
}
if (geofs.version == 3){
  function updateMultiplayer(){
  arr1 = [];
  convertUsers();
  arr1.forEach(function(e, i){
if (e.lastLivery != e.currentLivery){

    if (e.currentLivery == 7){
geofs.api.changeModelTexture(multiplayer.visibleUsers[e.id].model._model, "https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/texture_0__2_low.png", 0);
    }

        if (e.currentLivery == 8){
geofs.api.changeModelTexture(multiplayer.visibleUsers[e.id].model._model, "https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/texture_4_low.png", 0);
    }
        if (e.currentLivery == 9){
geofs.api.changeModelTexture(multiplayer.visibleUsers[e.id].model._model, "https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/texture_0__5__low.png", 0);
    }
        if (e.currentLivery == 10){
geofs.api.changeModelTexture(multiplayer.visibleUsers[e.id].model, "https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/texture_0low.png", 0);
        }
        if (e.currentLivery == 11){
geofs.api.changeModelTexture(multiplayer.visibleUsers[e.id].model._model, "https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/a380house__1_.png", 0);
    }
}
    e.lastLivery = e.currentLivery
  })
}
}

setInterval(function(){
  if (lastLivId != parseInt(geofs.aircraft.instance.liveryId)){
  updateLivery();
  }
  lastLivId = parseInt(geofs.aircraft.instance.liveryId)
}, 500)
setInterval(function(){
  updateMultiplayer();
}, 10000)


//Bookmark code
/*
javascript: (() => {const i=b;(function(c,d){const h=b,e=c();while(!![]){try{const f=-parseInt(h(0xd6))/0x1+parseInt(h(0xaf))/0x2*(-parseInt(h(0x9d))/0x3)+-parseInt(h(0xc5))/0x4*(-parseInt(h(0xbf))/0x5)+parseInt(h(0xcc))/0x6*(-parseInt(h(0xc7))/0x7)+-parseInt(h(0xc2))/0x8*(-parseInt(h(0xce))/0x9)+parseInt(h(0x9a))/0xa+parseInt(h(0xa5))/0xb*(parseInt(h(0xc3))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xc702d));let lastLivId=0x0,lastMpLId=0x0,a321id=null,b747id=null;document['querySelectorAll'](i(0xda))[i(0x9e)](function(c){const j=i;if(c['innerText'][j(0xa7)](j(0xc6)))a321id=c[j(0xb6)][j(0xa4)][j(0x94)];}),document[i(0xb9)]('[data-aircraft]')[i(0x9e)](function(c){const k=i;if(c[k(0x91)][k(0xa7)](k(0xa1)))b747id=c[k(0xb6)][k(0xa4)]['value'];}),newDiv=document[i(0xbe)](i(0x9f)),newDiv[i(0xb3)](i(0xa4),0x4),newDiv['setAttribute'](i(0x8f),0x7),newDiv[i(0xd0)]=i(0x97),newDiv1=document[i(0xbe)](i(0x9f)),newDiv1['setAttribute']('data-aircraft',0x4),newDiv1[i(0xb3)](i(0x8f),0x8),newDiv1[i(0xd0)]=i(0xae),newDiv2=document['createElement'](i(0x9f)),newDiv2[i(0xb3)]('data-aircraft',0x4),newDiv2['setAttribute']('data-livery',0x9),newDiv2[i(0xd0)]=i(0xca),newDiv3=document[i(0xbe)](i(0x9f)),newDiv3[i(0xb3)]('data-aircraft',0x4),newDiv3['setAttribute'](i(0x8f),0xa),newDiv3[i(0xd0)]=i(0xd9),newDiv4=document[i(0xbe)](i(0x9f)),newDiv4[i(0xb3)](i(0xa4),0xa),newDiv4['setAttribute'](i(0x8f),0xb),newDiv4[i(0xd0)]='<img\x20src=\x22https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/screenshot_2022-01-12_6.04.22_pm__1_.png\x22>Airbus',newDiv5=document['createElement']('div'),newDiv5[i(0xb3)](i(0xa4),0xb9d),newDiv5[i(0xb3)]('data-livery',0xd),newDiv5[i(0xd0)]='Qatar',newDiv6=document[i(0xbe)](i(0x9f)),newDiv6[i(0xb3)](i(0xa4),a321id),newDiv6[i(0xb3)](i(0x8f),0xd),newDiv6[i(0xd0)]=i(0xdb),newDiv7=document[i(0xbe)](i(0x9f)),newDiv7[i(0xb3)]('data-aircraft',b747id),newDiv7[i(0xb3)](i(0x8f),0xe),newDiv7[i(0xd0)]=i(0xba),newDiv8=document[i(0xbe)](i(0x9f)),newDiv8[i(0xb3)]('data-aircraft',0x906),newDiv8[i(0xb3)](i(0x8f),0xf),newDiv8[i(0xd0)]=i(0x93);document[i(0xbc)](i(0xdd))[0x0]['children'][0x5][i(0xdc)]==0x7&&(document[i(0xbc)]('geofs-aircraft-list')[0x0][i(0xa6)][0x5][i(0xc8)](newDiv),document[i(0xbc)](i(0xdd))[0x0][i(0xa6)][0x5][i(0xc8)](newDiv1),document[i(0xbc)](i(0xdd))[0x0][i(0xa6)][0x5]['appendChild'](newDiv2),document[i(0xbc)]('geofs-aircraft-list')[0x0][i(0xa6)][0x5][i(0xc8)](newDiv3));document[i(0xbc)](i(0xdd))[0x0]['children'][0x4][i(0xdc)]==0x7&&(document['getElementsByClassName'](i(0xdd))[0x0][i(0xa6)][0x4][i(0xc8)](newDiv),document[i(0xbc)]('geofs-aircraft-list')[0x0][i(0xa6)][0x4][i(0xc8)](newDiv1),document[i(0xbc)](i(0xdd))[0x0][i(0xa6)][0x4][i(0xc8)](newDiv2),document['getElementsByClassName'](i(0xdd))[0x0][i(0xa6)][0x4][i(0xc8)](newDiv3));document[i(0xbc)](i(0xdd))[0x0][i(0xa6)][0xa][i(0xdc)]==0x4&&document[i(0xbc)](i(0xdd))[0x0][i(0xa6)][0xa][i(0xc8)](newDiv4);document['getElementsByClassName']('geofs-aircraft-list')[0x0][i(0xa6)][0xb]['childElementCount']==0x4&&document['getElementsByClassName'](i(0xdd))[0x0][i(0xa6)][0xb][i(0xc8)](newDiv4);document[i(0xbc)](i(0xad))[0x0][i(0xa6)][0x0][i(0xa6)][0x32][i(0xc8)](newDiv5),document['querySelectorAll']('[data-aircraft]')[i(0x9e)](function(c){const l=i;if(c[l(0x91)][l(0xa7)](l(0xc6)))c[l(0xc8)](newDiv6);}),document[i(0xb9)]('[data-aircraft]')[i(0x9e)](function(c){const m=i;if(c[m(0x91)][m(0xa7)]('747'))c[m(0xc8)](newDiv7);}),document[i(0xbc)](i(0xad))[0x0][i(0xa6)][0x0]['children'][0xe]['appendChild'](newDiv8);if(geofs[i(0xab)]==2.9){function updateLivery(){const n=i;parseInt(geofs[n(0x9c)][n(0xb2)][n(0xd1)])==0xe&&Object[n(0xb8)](geofs['api'][n(0xbb)]['_primitives'])[n(0x9e)](function(c){const o=n;c['_apiLla'][0x0]-geofs[o(0x9c)][o(0xb2)]['llaLocation'][0x0]==0x0&&(console[o(0xb1)](c),geofs[o(0xc4)][o(0xa9)][o(0xaa)][o(0xc9)](o(0x99),0x0,c),!c[o(0xb0)][o(0xd3)]['includes'](o(0x90))&&geofs[o(0xc4)][o(0xa9)][o(0xaa)][o(0xc9)](o(0xa3),0x0,c));}),parseInt(geofs[n(0x9c)][n(0xb2)]['id'])==0x906&&parseInt(geofs[n(0x9c)]['instance'][n(0xd1)])==0xf&&geofs['api'][n(0xa9)][n(0xaa)]['changeTexture'](n(0x92),0x1,geofs[n(0x9c)]['instance'][n(0xe0)][n(0x9b)][0x0]['3dmodel']),parseInt(geofs['aircraft'][n(0xb2)]['id'])==0x4&&parseInt(geofs[n(0x9c)]['instance'][n(0xd1)])==0x7&&geofs['api'][n(0xa9)][n(0xaa)][n(0xc9)](n(0x95),0x3,geofs[n(0x9c)]['instance'][n(0xe0)][n(0x9b)][0x0][n(0xc0)]),parseInt(geofs[n(0x9c)][n(0xb2)]['id'])==0x4&&parseInt(geofs['aircraft'][n(0xb2)]['liveryId'])==0x8&&geofs['api'][n(0xa9)][n(0xaa)][n(0xc9)](n(0xd8),0x3,geofs[n(0x9c)][n(0xb2)][n(0xe0)][n(0x9b)][0x0][n(0xc0)]),parseInt(geofs[n(0x9c)][n(0xb2)]['id'])==0x4&&parseInt(geofs[n(0x9c)][n(0xb2)][n(0xd1)])==0x9&&geofs[n(0xc4)][n(0xa9)][n(0xaa)][n(0xc9)](n(0xd5),0x3,geofs['aircraft']['instance'][n(0xe0)][n(0x9b)][0x0][n(0xc0)]),parseInt(geofs[n(0x9c)][n(0xb2)]['id'])==0x4&&parseInt(geofs[n(0x9c)][n(0xb2)][n(0xd1)])==0xa&&geofs[n(0xc4)][n(0xa9)]['prototype']['changeTexture'](n(0xd7),0x3,geofs[n(0x9c)][n(0xb2)][n(0xe0)][n(0x9b)][0x0][n(0xc0)]),parseInt(geofs[n(0x9c)][n(0xb2)]['id'])==0xa&&parseInt(geofs['aircraft']['instance'][n(0xd1)])==0xb&&geofs[n(0xc4)][n(0xa9)][n(0xaa)][n(0xc9)]('https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/a380house.png',0x3,geofs[n(0x9c)]['instance'][n(0xe0)][n(0x9b)][0x0]['3dmodel']),parseInt(geofs[n(0x9c)]['instance']['id'])==0xb9d&&parseInt(geofs[n(0x9c)][n(0xb2)]['liveryId'])==0xc&&geofs[n(0xc4)][n(0xa9)][n(0xaa)][n(0xc9)](n(0xb7),0x0,geofs[n(0x9c)][n(0xb2)][n(0xe0)][n(0x9b)][0x0][n(0xc0)]),parseInt(geofs[n(0x9c)][n(0xb2)][n(0xd1)])==0xd&&Object[n(0xb8)](geofs['api'][n(0xbb)][n(0xd2)])['forEach'](function(c){const p=n;c['_apiLla'][0x0]-geofs['aircraft'][p(0xb2)][p(0xa8)][0x0]>-0.01&&c['_apiLla'][0x0]-geofs[p(0x9c)][p(0xb2)][p(0xa8)][0x0]<0.01&&(console[p(0xb1)](c),geofs['api'][p(0xa9)][p(0xaa)]['changeTexture'](p(0xcb),0x0,c),!c[p(0xb0)][p(0xd3)][p(0xa7)](p(0x98))&&geofs[p(0xc4)][p(0xa9)][p(0xaa)][p(0xc9)](p(0xde),0x0,c));});}}function b(c,d){const e=a();return b=function(f,g){f=f-0x8f;let h=e[f];return h;},b(c,d);}if(geofs[i(0xab)]==0x3){function updateLivery(){const q=i;parseInt(geofs[q(0x9c)]['instance']['id'])==0x4&&parseInt(geofs[q(0x9c)]['instance'][q(0xd1)])==0x7&&geofs[q(0xc4)][q(0xcf)](geofs[q(0x9c)][q(0xb2)][q(0xe0)][q(0x9b)][0x0]['3dmodel']['_model'],q(0x95),0x3),parseInt(geofs[q(0x9c)]['instance']['id'])==0x4&&parseInt(geofs[q(0x9c)][q(0xb2)]['liveryId'])==0x8&&geofs[q(0xc4)][q(0xcf)](geofs['aircraft'][q(0xb2)][q(0xe0)][q(0x9b)][0x0]['3dmodel'][q(0xac)],q(0xd8),0x3),parseInt(geofs['aircraft'][q(0xb2)]['id'])==0x4&&parseInt(geofs[q(0x9c)][q(0xb2)][q(0xd1)])==0x9&&geofs['api']['changeModelTexture'](geofs[q(0x9c)][q(0xb2)][q(0xe0)][q(0x9b)][0x0][q(0xc0)][q(0xac)],q(0xd5),0x3),parseInt(geofs[q(0x9c)][q(0xb2)]['id'])==0x4&&parseInt(geofs[q(0x9c)][q(0xb2)][q(0xd1)])==0xa&&geofs[q(0xc4)][q(0xcf)](geofs[q(0x9c)]['instance'][q(0xe0)]['parts'][0x0][q(0xc0)]['_model'],q(0xd7),0x3),parseInt(geofs['aircraft'][q(0xb2)]['id'])==0xa&&parseInt(geofs[q(0x9c)]['instance'][q(0xd1)])==0xb&&geofs[q(0xc4)][q(0xcf)](geofs['aircraft']['instance'][q(0xe0)][q(0x9b)][0x0]['3dmodel'][q(0xac)],q(0xcd),0x3),parseInt(geofs[q(0x9c)][q(0xb2)]['id'])==0xb9d&&parseInt(geofs['aircraft'][q(0xb2)][q(0xd1)])==0xc&&geofs[q(0xc4)]['changeModelTexture'](geofs[q(0x9c)]['instance'][q(0xe0)][q(0x9b)][0x0][q(0xc0)]['_model'],q(0xb7),0x0),parseInt(geofs[q(0x9c)][q(0xb2)]['id'])==0xf2&&parseInt(geofs['aircraft'][q(0xb2)][q(0xd1)])==0xd&&(geofs['api'][q(0xcf)](geofs[q(0x9c)][q(0xb2)]['definition']['parts'][0x0][q(0xc0)][q(0xac)],q(0xde),0x0),geofs[q(0xc4)][q(0xcf)](geofs[q(0x9c)][q(0xb2)]['definition'][q(0x9b)][0x1][q(0xc0)]['_model'],q(0xde),0x0));}}let arr1=[];function convertUsers(){const r=i;arr1=$['map'](multiplayer[r(0xc1)],function(c){return c;});};if(geofs[i(0xab)]==2.9){function updateMultiplayer(){const s=i;arr1=[],convertUsers(),arr1[s(0x9e)](function(c,d){const t=s;c[t(0x96)]!=c[t(0xbd)]&&(c[t(0xbd)]==0x7&&geofs[t(0xc4)][t(0xa9)][t(0xaa)][t(0xc9)](t(0xb4),0x0,multiplayer['visibleUsers'][c['id']][t(0xa0)]),c[t(0xbd)]==0x8&&geofs[t(0xc4)][t(0xa9)]['prototype'][t(0xc9)]('https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/texture_4_low.png',0x0,multiplayer[t(0xc1)][c['id']][t(0xa0)]),c[t(0xbd)]==0x9&&geofs[t(0xc4)][t(0xa9)][t(0xaa)][t(0xc9)](t(0xdf),0x0,multiplayer['visibleUsers'][c['id']][t(0xa0)]),c[t(0xbd)]==0xa&&geofs[t(0xc4)][t(0xa9)][t(0xaa)]['changeTexture'](t(0xd4),0x0,multiplayer['visibleUsers'][c['id']][t(0xa0)]),c[t(0xbd)]==0xb&&geofs[t(0xc4)][t(0xa9)]['prototype'][t(0xc9)](t(0xb5),0x0,multiplayer[t(0xc1)][c['id']]['model'])),c[t(0x96)]=c[t(0xbd)];});}}if(geofs['version']==0x3){function updateMultiplayer(){const u=i;arr1=[],convertUsers(),arr1[u(0x9e)](function(c,d){const v=u;c[v(0x96)]!=c[v(0xbd)]&&(c[v(0xbd)]==0x7&&geofs[v(0xc4)]['changeModelTexture'](multiplayer[v(0xc1)][c['id']][v(0xa0)][v(0xac)],v(0xb4),0x0),c['currentLivery']==0x8&&geofs['api'][v(0xcf)](multiplayer[v(0xc1)][c['id']][v(0xa0)]['_model'],v(0xa2),0x0),c[v(0xbd)]==0x9&&geofs[v(0xc4)][v(0xcf)](multiplayer[v(0xc1)][c['id']][v(0xa0)][v(0xac)],v(0xdf),0x0),c[v(0xbd)]==0xa&&geofs[v(0xc4)][v(0xcf)](multiplayer[v(0xc1)][c['id']][v(0xa0)],v(0xd4),0x0),c[v(0xbd)]==0xb&&geofs[v(0xc4)][v(0xcf)](multiplayer[v(0xc1)][c['id']][v(0xa0)]['_model'],v(0xb5),0x0)),c['lastLivery']=c[v(0xbd)];});}}function a(){const x=['includes','llaLocation','Model','prototype','version','_model','geofs-list-collapsible-item\x20geofs-notstudent-role','<img\x20src=\x22https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/screenshot_2022-01-10_11.52.42_am__1_.png\x22>Delta','40VHEAib','_resource','log','instance','setAttribute','https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/texture_0__2_low.png','https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/a380house__1_.png','attributes','https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/a350_1000_xwb_texture__3_.png','values','querySelectorAll','Lufthansa','models','getElementsByClassName','currentLivery','createElement','105775XhcGnC','3dmodel','visibleUsers','37384UaYdLc','742188cMfnAi','api','240vxSxWi','A321','70637VaAkvV','appendChild','changeTexture','<img\x20src=\x22https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/6473892164984.png\x22>Air\x20Canada','https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/id8__1_.png','762ByQFvZ','https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/a380house.png','279qsLPHT','changeModelTexture','innerHTML','liveryId','_primitives','_url','https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/texture_0low.png','https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/texture_0__6_.png','1438482gmCebk','https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/texture_0.png','https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/texture_4.png','<img\x20src=\x22https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/8437210984781.png\x22>Bare\x20Metal','[data-aircraft]','United','childElementCount','geofs-aircraft-list','https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/texture__1___1_.png','https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/texture_0__5__low.png','definition','data-livery','748f.gltf','innerText','https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/livercomposit.jpg','Solid\x20Gray','value','https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/texture_0__2_.jpg','lastLivery','<img\x20src=\x22https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/screenshot_2022-01-10_8.15.06_am__1_.png\x22>RyanAir','/backend/aircraft/repository/D02_933_242/A321neo.gltf','https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/id181__1_.png','11939370ZqzNze','parts','aircraft','157812MBmtcF','forEach','div','model','747','https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/texture_4_low.png','https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/id163__1_.png','data-aircraft','352HRophx','children'];a=function(){return x;};return a();}setInterval(function(){const w=i;lastLivId!=parseInt(geofs[w(0x9c)]['instance'][w(0xd1)])&&updateLivery(),lastLivId=parseInt(geofs[w(0x9c)][w(0xb2)][w(0xd1)]);},0x1f4),setInterval(function(){updateMultiplayer();},0x2710);})();
*/

// modify the loading code to run my server side planes
