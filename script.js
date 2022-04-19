const audio1 = document.querySelector(".audio1");
const audio2 = document.querySelector(".audio2");
const ghost1 = document.querySelector(".ghost-2-box");
const ghost2touch = document.querySelector(".ghost-touch");
const ghost2 = document.querySelector(".ghost-3");
const ghost1HAHA = document.querySelector(".ghost-2-talk");
const fullZizizik = document.querySelector(".full-zizizik");
const fullZizizikDiv = document.querySelector(".full-zizizik-div")
const radioBtn = document.querySelector(".section-4-contents-1-item-text-button");
const weaponBtn = document.querySelector(".section-4-contents-2-item-text-button");
const weaponBox = document.querySelector(".section-4-contents-2-item-image");
const missileBtn = document.querySelector(".section-4-contents-3-item-text-button");
const missile = document.querySelector(".section-4-contents-3");
const boom = document.querySelector(".boom");

audio1.volume = 0.2;
audio1.loop= true;

audio2.volume = 0.2;
audio2.duration = 3000;

ghost1.onclick = function(){
    audio1.play();
    ghost1HAHA.src = "img/talk2.png";
    radioBtn.innerText = "사용하기";
    radioBtn.style.backgroundColor = "#D81E1E";
};

function goZizizik(){
    fullZizizik.style.display = "block";
    setTimeout(
        function(){
            fullZizizik.style.display = "none";
        },500
    )
};

setInterval(goZizizik, 12000);

radioBtn.onclick = function(){
    if(audio1.currentTime !== 0){
        setTimeout(function(){
            audio1.pause();
        },4000);
        ghost1HAHA.src = "img/talk1.png";
        audio2.play();
        setTimeout(function(){
            audio1.currentTime =0;
        },4000);
        radioBtn.innerText = "사용중";
        setTimeout(function(){
            radioBtn.innerText = "사용완료";
            radioBtn.style.backgroundColor = "rgba(255,255,255,0.5)";
        },16219.425);
    }else{}
};

weaponBtn.onclick = function(){
    if(weaponBtn.innerText === "장착하기"){
        document.body.style.cursor = "url(img/cursor.png),auto";
        weaponBtn.innerText = "해제하기";
        weaponBox.style.backgroundImage="url(img/item_bat_none.png)";
    }else if(weaponBtn.innerText === "해제하기"){
        document.body.style.cursor = "auto";
        weaponBtn.innerText = "장착하기";
        weaponBox.style.backgroundImage="url(img/item_bat.png)";
    }
};

ghost2touch.onclick = function(){
    if(weaponBtn.innerText === "해제하기"){
        ghost2.src = "img/hitghost.png";
        ghost2.style.width = "16.8rem"
        ghost2.style.height = "21.2rem"
        setTimeout(
            function(){
                ghost2.src = "img/2-귀신.svg";
                ghost2.style.width = "14rem"
                ghost2.style.height = "15rem"
            },2000
        )
    }else{}
};

missileBtn.onclick = function(){
    boom.style.display = "block";
    setTimeout(
        function(){
            boom.style.display = "none";
        },9000
    );
    fullZizizikDiv.removeChild(fullZizizik);
    missileBtn.innerText = "발사완료";
    missileBtn.style.backgroundColor = "rgba(255,255,255,0.5)";
    setTimeout(
        function(){
            alert("Solution-Code-22003 : 중간중간 화면이 지직거리는 현상을 해결했습니다.");
        },9500
    );
}