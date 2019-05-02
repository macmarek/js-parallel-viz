
function sleep(milliseconds) {
    console.log("sleeping");
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        console.log("waking up");
        break;
      }
    }
  }

sleep(3000);