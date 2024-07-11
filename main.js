
function setupVideo() {
  // get video
  var video = document.getElementById('myVideo')
  // Play the video, this is optional
  video.play();
  // Add a listener to this video, so that when the video ends, the video is "hidden".
}
document.addEventListener('DOMContentLoaded', e => {
  var video = document.getElementById("myVideo");
  var main = document.getElementById("main-content");

  if (video != null) {
    //video.addEventListener('ended', e => {
    setTimeout(() => {

      video.style.opacity = "0";
      setTimeout(() => {
        video.style.display = "none";
      }, 250);
      main.classList.add("loaded");
    }, 1250);
  }
  //});
});

function toggleDropdown() {
  document.getElementById("artistList").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropdown-btn')) {
    var dropdowns = document.getElementsByClassName("artist-list");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


var projectTitleRippled = 0;
var projectTitleRippleReset = 0;
var projectTitleGif;
var projectTitleStatic;
$(function () {
  $(".artist-list li").hover(
    function () {
      $(this).toggleClass("artist-hovered")
    });
  $("#hexagonsBlob").hover(
    function () {
      $("#artist-1").toggleClass("artist-hovered")
    });
  $("#metabolizationBlob").hover(
    function () {
      $("#artist-2").toggleClass("artist-hovered")
    });
  $("#naturesimBlob").hover(
    function () {
      $("#artist-3").toggleClass("artist-hovered")
    });
  $("#smallaspirationsBlob").hover(
    function () {
      $("#artist-4").toggleClass("artist-hovered")
    });
  $("#glitchBlob").hover(
    function () {
      $("#artist-5").toggleClass("artist-hovered")
    });
  $("#liesBlob").hover(
    function () {
      $("#artist-6").toggleClass("artist-hovered")
    });
  $("#ourhomeBlob").hover(
    function () {
      $("#artist-7").toggleClass("artist-hovered")
    });
  $("#lemonBlob").hover(
    function () {
      $("#artist-8").toggleClass("artist-hovered")
    });
  $("#signalBlob").hover(
    function () {
      $("#artist-9").toggleClass("artist-hovered")
    });
  $("#sacredBlob").hover(
    function () {
      $("#artist-10").toggleClass("artist-hovered")
    });
  $("#thinkBlob").hover(
    function () {
      $("#artist-11").toggleClass("artist-hovered")
    });
  $("#sepsisBlob").hover(
    function () {
      $("#artist-12").toggleClass("artist-hovered")
    });
  $("#honeyBlob").hover(
    function () {
      $("#artist-13").toggleClass("artist-hovered")
    });
  $("#psBlob").hover(
    function () {
      $("#artist-14").toggleClass("artist-hovered")
    });
  $("#artist-1").hover(
    function () {
      $("#hexagonsBlob").toggleClass("artist-hovered")
    });
  $("#artist-2").hover(
    function () {
      $("#metabolizationBlob").toggleClass("artist-hovered")
    });
  $("#artist-3").hover(
    function () {
      $("#naturesimBlob").toggleClass("artist-hovered")
    });
  $("#artist-4").hover(
    function () {
      $("#smallaspirationsBlob").toggleClass("artist-hovered")
    });
  $("#artist-5").hover(
    function () {
      $("#glitchBlob").toggleClass("artist-hovered")
    });
  $("#artist-6").hover(
    function () {
      $("#liesBlob").toggleClass("artist-hovered")
    });
  $("#artist-7").hover(
    function () {
      $("#ourhomeBlob").toggleClass("artist-hovered")
    });
  $("#artist-8").hover(
    function () {
      $("#lemonBlob").toggleClass("artist-hovered")
    });
  $("#artist-9").hover(
    function () {
      $("#signalBlob").toggleClass("artist-hovered")
    });
  $("#artist-10").hover(
    function () {
      $("#sacredBlob").toggleClass("artist-hovered")
    });
  $("#artist-11").hover(
    function () {
      $("#thinkBlob").toggleClass("artist-hovered")
    });
  $("#artist-12").hover(
    function () {
      $("#sepsisBlob").toggleClass("artist-hovered")
    });
  $("#artist-13").hover(
    function () {
      $("#honeyBlob").toggleClass("artist-hovered")
    });
  $("#artist-14").hover(
    function () {
      $("#psBlob").toggleClass("artist-hovered")
    });

  function rippleTitleGif(title) {
    if (projectTitleRippled == 0) {
      $(title).attr("src", projectTitleGif);
      projectTitleRippled++;
      setTimeout(() => {
        $(title).attr("src", projectTitleStatic);
        projectTitleRippleReset++;
        console.log("ripple timeout reset");
      }, 11000);
    }
  }
  $("#project-title-ripple").hover(
    function () {
      rippleTitleGif(this);
    }
  );
  $("#project-title-ripple").click(
    function () {
      if (projectTitleRippleReset == 1) {
        projectTitleRippled = 0;
        projectTitleRippleReset = 0;
        rippleTitleGif(this);
      }
    }
  );

  var unmuteBtn = document.getElementById("unmute");

  $("#unmute").click(function () {
    var player = new Vimeo.Player($("#sacred-video")[0]);
    player.setMuted(false);
    unmuteBtn.style.display = "none";
  });
});