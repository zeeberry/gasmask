var apps = [
      { "name": "wandertab",
        "id": "fobdcmnamenjmkffajcbljjpgiolooeh"
      },
      { "name": "animatedtab",
        "id": "kenhfdoiondldpcoajdbackbnmehgahl"
      },
    ],
    counter = 0,
    i, randomApp;
function getAllCallback(list) {
  var random = getRandomInt(0, apps.length);
  randomApp = apps[random];
  
  if(counter === 0 ) {
    chrome.management.setEnabled(apps[0].id, false);
    chrome.management.setEnabled(apps[1].id, false);

    for( i in list ) {
      if (list[i].id === randomApp.id) {
        chrome.management.setEnabled(list[i].id, true);
        counter += 1;
        break;
      }
    }
  }else {
    counter = 0;
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

chrome.tabs.onCreated.addListener(function(tab) {
  console.log('Tab created... getting list of apps.');
  chrome.management.getAll(getAllCallback);
});


