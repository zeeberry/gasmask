function getAllCallback(list) {
  var apps = [
        { "name": "wandertab",
          "id": "fobdcmnamenjmkffajcbljjpgiolooeh"
        },
        { "name": "animatedtab",
          "id": "kenhfdoiondldpcoajdbackbnmehgahl"
        }
      ],
      ext, i, random;

    random = getRandomInt(0, apps.length);
    randomApp = apps[random];
    for( i in list ) {
      if (randomApp.id === list[i].id) {
        chrome.management.launchApp(randomApp.id);
      } 
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

document.addEventListener("DOMContentLoaded", function() {
  chrome.management.getAll(getAllCallback);
});

