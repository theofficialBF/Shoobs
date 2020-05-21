


function clickCounter() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount) + 1;
    } else {
      localStorage.clickcount = 1;
    }
    document.getElementById("button").innerHTML = "Total 'Your Mads' : " + localStorage.clickcount;

    var audio = new Audio('https://raw.githubusercontent.com/theofficialBF/Shoobs/master/Your%20Mad.mp3');
    audio.play();


  } else {
    document.getElementById("button").innerHTML = "Sorry, your browser does not support web storage...";
  }
};
