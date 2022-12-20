/**JS for selecting drink sizes */
var drinks = document.getElementById("drink-size");
var choices = drinks.getElementsByClassName("cradio");

for(var i = 0; i < choices.length; i++) {
    choices[i].addEventListener("click", function(){
        var current = document.getElementsByClassName("active");
        
        if(current.length > 0){
            current[0].className = current[0].className.replace("active", "");
        }
        this.className += " active";
    });
}


var drinks2 = document.getElementById("drink-size2");
var choices2 = drinks2.getElementsByClassName("cradio");

for(var i = 0; i < choices2.length; i++) {
    choices2[i].addEventListener("click", function(){
        var current2 = document.getElementsByClassName("active");
       
        if(current2.length > 0){
            current2[0].className = current2[0].className.replace("active", "");
        }
        this.className += " active";
    });
}

var drinks3 = document.getElementById("drink-size3");
var choices3 = drinks3.getElementsByClassName("cradio");

for(var i = 0; i < choices3.length; i++) {
    choices3[i].addEventListener("click", function(){
        var current3 = document.getElementsByClassName("active");
       
        if(current3.length > 0){
            current3[0].className = current3[0].className.replace("active", "");
        }
        this.className += " active";
    });
}

var drinks4 = document.getElementById("drink-size4");
var choices4 = drinks4.getElementsByClassName("cradio");

for(var i = 0; i < choices4.length; i++) {
    choices4[i].addEventListener("click", function(){
        var current4 = document.getElementsByClassName("active");
       
        if(current4.length > 0){
            current4[0].className = current4[0].className.replace("active", "");
        }
        this.className += " active";
    });
}

var drinks5 = document.getElementById("drink-size5");
var choices5 = drinks5.getElementsByClassName("cradio");

for(var i = 0; i < choices2.length; i++) {
    choices5[i].addEventListener("click", function(){
        var current5 = document.getElementsByClassName("active");
       
        if(current5.length > 0){
            current5[0].className = current5[0].className.replace("active", "");
        }
        this.className += " active";
    });
}

var drinks6 = document.getElementById("drink-size6");
var choices6 = drinks6.getElementsByClassName("cradio");

for(var i = 0; i < choices2.length; i++) {
    choices6[i].addEventListener("click", function(){
        var current6 = document.getElementsByClassName("active");
       
        if(current6.length > 0){
            current6[0].className = current6[0].className.replace("active", "");
        }
        this.className += " active";
    });
}

var drinks7 = document.getElementById("drink-size7");
var choices7 = drinks7.getElementsByClassName("cradio");

for(var i = 0; i < choices2.length; i++) {
    choices7[i].addEventListener("click", function(){
        var current7 = document.getElementsByClassName("active");
       
        if(current7.length > 0){
            current7[0].className = current7[0].className.replace("active", "");
        }
        this.className += " active";
    });
}