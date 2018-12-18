var musicSun = document.getElementById('sun');
var musicVenus = document.getElementById('venus');
var musicMerury = document.getElementById('mercury');
var musicEarth = document.getElementById('earth');
var musicMars = document.getElementById('mars');
var musicJupiter = document.getElementById('jupiter');
var musicSaturn = document.getElementById('saturn');
var musicUranus = document.getElementById('uranus');
var musicNeptune = document.getElementById("neptune");



musicSun.addEventListener('click',function(){
  document.getElementById('soundSun').play()
})
document.getElementById('mercury').addEventListener('click',function(){
  document.getElementById('soundMercury').play()
})
document.getElementById('venus').addEventListener('click',function(){
  document.getElementById('soundVenus').play()
})
document.getElementById('earth').addEventListener('click',function(){
  document.getElementById('soundEarth').play()
})
document.getElementById('mars').addEventListener('click',function(){
  document.getElementById('soundMars').play()
})
document.getElementById('jupiter').addEventListener('click',function(){
  document.getElementById('soundJupiter').play()
})
document.getElementById('saturn').addEventListener('click',function(){
  document.getElementById('soundSaturn').play()
})
document.getElementById('uranus').addEventListener('click',function(){
  document.getElementById('soundUranus').play()
})
document.getElementById("neptune").addEventListener('click',function(){
  document.getElementById('soundNeptune').play()
})

var flagAnim = true;
function pausedAnim(){
	if(flagAnim){
		$("li").css("-webkit-animation-play-state", "paused");
       	$("span").css("-webkit-animation-play-state", "paused");
       document.getElementById("imgPause").src = "images/play.png";
        flagAnim = false;
	}
	else{
		$("li").css("-webkit-animation-play-state", "running");
       	$("span").css("-webkit-animation-play-state", "running");
       	document.getElementById("imgPause").src ="images/pause.png";
        flagAnim = true;
	}

}

