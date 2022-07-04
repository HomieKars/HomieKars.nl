var statusIcon = document.getElementById("statusIcon");
var statusContent = document.getElementById("statusContent");
var spotifyListening = document.getElementById("spotifyListening");

const lanyard = new WebSocket("wss://api.lanyard.rest/socket");

var api = {};
var received = false;

lanyard.onopen = function () {
  lanyard.send(
    JSON.stringify({
      op: 2,
      d: {
        subscribe_to_id: "804044315986755635",
      },
    })
  );
};

setInterval(() => {
  if (received) {
    lanyard.send(
      JSON.stringify({
        op: 3,
      })
    );
  }
}, 30000);

lanyard.onmessage = function (event) {
  received = true;
  api = JSON.parse(event.data);

  if (api.t === "INIT_STATE" || api.t === "PRESENCE_UPDATE") {
    update_presence();
  }
};

function update_presence() {
  if (statusIcon != null) {
    update_status(api.d.discord_status);
  }

  setInterval(function () {

    if (api.d.listening_to_spotify == true) {

    var countDownDate = new Date(api.d.spotify.timestamps.end).getTime();
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    var spotify_time = minutes + "m " + seconds + "s "

      var artist = `${
        api.d.spotify.artist.split(";")[0].split(",")[0]
      }`;https://homiekars.nl
      var song = `${
        api.d.spotify.song.split("(")[0]
      }`;
    
    } else {
      spotifyListening.innerHTML = ``;
      document.getElementById("spotifyListening").style.display = "none";
    }

  }, 1000); //removed: animate__animated animate__flash

  if (api.d.discord_status === "dnd") {
    statusContent.innerHTML = `<span class="w-3 h-3 bg-red-500 rounded-full inline-flex ml-1 mr-2"></span>Online`;

  } else if (api.d.discord_status === "idle") {
    statusContent.innerHTML = `<span class="w-3 h-3 bg-yellow-500 rounded-full inline-flex ml-1 mr-2"></span>Online`;

  } else if (api.d.discord_status === "online") {
    statusContent.innerHTML = `<span class="w-3 h-3 bg-green-500 rounded-full inline-flex ml-1 mr-2"></span>Online`;

  } else if (api.d.discord_status === "offline") {
    statusContent.innerHTML = `<span class="w-3 h-3 bg-gray-500 rounded-full inline-flex ml-1 mr-2"></span>Offline`;

  } else {
    statusContent.innerHTML = `<span class="w-3 h-3 bg-gray-500 rounded-full inline-flex ml-1 mr-2"></span>Loading`;

  }

}