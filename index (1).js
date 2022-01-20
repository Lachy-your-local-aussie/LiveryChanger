let lastLivId = 0;
let lastMpLId = 0;
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
newDiv5.setAttribute("data-livery", 12);

newDiv5.innerHTML = 'Qatar';

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
// master livery function

if (geofs.version == 2.9){
  function updateLivery(){
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
javascript: (() => {let lastLivId=0,lastMpLId=0;if(newDiv=document.createElement("div"),newDiv.setAttribute("data-aircraft",4),newDiv.setAttribute("data-livery",7),newDiv.innerHTML='<img src="https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/screenshot_2022-01-10_8.15.06_am__1_.png">RyanAir',newDiv1=document.createElement("div"),newDiv1.setAttribute("data-aircraft",4),newDiv1.setAttribute("data-livery",8),newDiv1.innerHTML='<img src="https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/screenshot_2022-01-10_11.52.42_am__1_.png">Delta',newDiv2=document.createElement("div"),newDiv2.setAttribute("data-aircraft",4),newDiv2.setAttribute("data-livery",9),newDiv2.innerHTML='<img src="https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/6473892164984.png">Air Canada',newDiv3=document.createElement("div"),newDiv3.setAttribute("data-aircraft",4),newDiv3.setAttribute("data-livery",10),newDiv3.innerHTML='<img src="https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/8437210984781.png">Bare Metal',newDiv4=document.createElement("div"),newDiv4.setAttribute("data-aircraft",10),newDiv4.setAttribute("data-livery",11),newDiv4.innerHTML='<img src="https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/screenshot_2022-01-12_6.04.22_pm__1_.png">Airbus',newDiv5=document.createElement("div"),newDiv5.setAttribute("data-aircraft",2973),newDiv5.setAttribute("data-livery",12),newDiv5.innerHTML="Qatar",7==document.getElementsByClassName("geofs-aircraft-list")[0].children[5].childElementCount&&(document.getElementsByClassName("geofs-aircraft-list")[0].children[5].appendChild(newDiv),document.getElementsByClassName("geofs-aircraft-list")[0].children[5].appendChild(newDiv1),document.getElementsByClassName("geofs-aircraft-list")[0].children[5].appendChild(newDiv2),document.getElementsByClassName("geofs-aircraft-list")[0].children[5].appendChild(newDiv3)),7==document.getElementsByClassName("geofs-aircraft-list")[0].children[4].childElementCount&&(document.getElementsByClassName("geofs-aircraft-list")[0].children[4].appendChild(newDiv),document.getElementsByClassName("geofs-aircraft-list")[0].children[4].appendChild(newDiv1),document.getElementsByClassName("geofs-aircraft-list")[0].children[4].appendChild(newDiv2),document.getElementsByClassName("geofs-aircraft-list")[0].children[4].appendChild(newDiv3)),4==document.getElementsByClassName("geofs-aircraft-list")[0].children[10].childElementCount&&document.getElementsByClassName("geofs-aircraft-list")[0].children[10].appendChild(newDiv4),4==document.getElementsByClassName("geofs-aircraft-list")[0].children[11].childElementCount&&document.getElementsByClassName("geofs-aircraft-list")[0].children[11].appendChild(newDiv4),document.getElementsByClassName("geofs-list-collapsible-item geofs-notstudent-role")[0].children[0].children[50].appendChild(newDiv5),2.9==geofs.version)function updateLivery(){4==parseInt(geofs.aircraft.instance.id)&&7==parseInt(geofs.aircraft.instance.liveryId)&&geofs.api.Model.prototype.changeTexture("https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/texture_0__2_.jpg",3,geofs.aircraft.instance.definition.parts[0]["3dmodel"]),4==parseInt(geofs.aircraft.instance.id)&&8==parseInt(geofs.aircraft.instance.liveryId)&&geofs.api.Model.prototype.changeTexture("https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/texture_4.png",3,geofs.aircraft.instance.definition.parts[0]["3dmodel"]),4==parseInt(geofs.aircraft.instance.id)&&9==parseInt(geofs.aircraft.instance.liveryId)&&geofs.api.Model.prototype.changeTexture("https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/texture_0__6_.png",3,geofs.aircraft.instance.definition.parts[0]["3dmodel"]),4==parseInt(geofs.aircraft.instance.id)&&10==parseInt(geofs.aircraft.instance.liveryId)&&geofs.api.Model.prototype.changeTexture("https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/texture_0.png",3,geofs.aircraft.instance.definition.parts[0]["3dmodel"]),10==parseInt(geofs.aircraft.instance.id)&&11==parseInt(geofs.aircraft.instance.liveryId)&&geofs.api.Model.prototype.changeTexture("https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/a380house.png",3,geofs.aircraft.instance.definition.parts[0]["3dmodel"]),2973==parseInt(geofs.aircraft.instance.id)&&12==parseInt(geofs.aircraft.instance.liveryId)&&geofs.api.Model.prototype.changeTexture("https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/a350_1000_xwb_texture__3_.png",0,geofs.aircraft.instance.definition.parts[0]["3dmodel"])}if(3==geofs.version)function updateLivery(){4==parseInt(geofs.aircraft.instance.id)&&7==parseInt(geofs.aircraft.instance.liveryId)&&geofs.api.changeModelTexture(geofs.aircraft.instance.definition.parts[0]["3dmodel"]._model,"https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/texture_0__2_.jpg",3),4==parseInt(geofs.aircraft.instance.id)&&8==parseInt(geofs.aircraft.instance.liveryId)&&geofs.api.changeModelTexture(geofs.aircraft.instance.definition.parts[0]["3dmodel"]._model,"https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/texture_4.png",3),4==parseInt(geofs.aircraft.instance.id)&&9==parseInt(geofs.aircraft.instance.liveryId)&&geofs.api.changeModelTexture(geofs.aircraft.instance.definition.parts[0]["3dmodel"]._model,"https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/texture_0__6_.png",3),4==parseInt(geofs.aircraft.instance.id)&&10==parseInt(geofs.aircraft.instance.liveryId)&&geofs.api.changeModelTexture(geofs.aircraft.instance.definition.parts[0]["3dmodel"]._model,"https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/texture_0.png",3),10==parseInt(geofs.aircraft.instance.id)&&11==parseInt(geofs.aircraft.instance.liveryId)&&geofs.api.changeModelTexture(geofs.aircraft.instance.definition.parts[0]["3dmodel"]._model,"https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/a380house.png",3),2973==parseInt(geofs.aircraft.instance.id)&&12==parseInt(geofs.aircraft.instance.liveryId)&&geofs.api.changeModelTexture(geofs.aircraft.instance.definition.parts[0]["3dmodel"]._model,"https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/a350_1000_xwb_texture__3_.png",0)}let arr1=[];function convertUsers(){arr1=$.map(multiplayer.visibleUsers,function(e){return e})}if(2.9==geofs.version)function updateMultiplayer(){arr1=[],convertUsers(),arr1.forEach(function(e,t){e.lastLivery!=e.currentLivery&&(7==e.currentLivery&&geofs.api.Model.prototype.changeTexture("https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/texture_0__2_low.png",0,multiplayer.visibleUsers[e.id].model),8==e.currentLivery&&geofs.api.Model.prototype.changeTexture("https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/texture_4_low.png",0,multiplayer.visibleUsers[e.id].model),9==e.currentLivery&&geofs.api.Model.prototype.changeTexture("https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/texture_0__5__low.png",0,multiplayer.visibleUsers[e.id].model),10==e.currentLivery&&geofs.api.Model.prototype.changeTexture("https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/texture_0low.png",0,multiplayer.visibleUsers[e.id].model),11==e.currentLivery&&geofs.api.Model.prototype.changeTexture("https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/a380house__1_.png",0,multiplayer.visibleUsers[e.id].model)),e.lastLivery=e.currentLivery})}if(3==geofs.version)function updateMultiplayer(){arr1=[],convertUsers(),arr1.forEach(function(e,t){e.lastLivery!=e.currentLivery&&(7==e.currentLivery&&geofs.api.changeModelTexture(multiplayer.visibleUsers[e.id].model._model,"https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/texture_0__2_low.png",0),8==e.currentLivery&&geofs.api.changeModelTexture(multiplayer.visibleUsers[e.id].model._model,"https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/texture_4_low.png",0),9==e.currentLivery&&geofs.api.changeModelTexture(multiplayer.visibleUsers[e.id].model._model,"https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/texture_0__5__low.png",0),10==e.currentLivery&&geofs.api.changeModelTexture(multiplayer.visibleUsers[e.id].model,"https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/texture_0low.png",0),11==e.currentLivery&&geofs.api.changeModelTexture(multiplayer.visibleUsers[e.id].model._model,"https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/a380house__1_.png",0)),e.lastLivery=e.currentLivery})}setInterval(function(){lastLivId!=parseInt(geofs.aircraft.instance.liveryId)&&updateLivery(),lastLivId=parseInt(geofs.aircraft.instance.liveryId)},500),setInterval(function(){updateMultiplayer()},1e4);})();
*/
