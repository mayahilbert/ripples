var projectTitleRippled = 0;
var projectTitleGif;
var projectTitleStatic;
        $(function () {
            $("#project-title-ripple").hover(
                function () {
                    if (projectTitleRippled == 0) {
                        $(this).attr("src", projectTitleGif);
                        projectTitleRippled++;
                    }
                    setTimeout(() => {
                        $(this).attr("src", projectTitleStatic);
                        projectTitleRippled = 0;
                    }, 15000);
                }
            );
            $("#project-title-ripple").click(
                function () {
                    $(this).attr("src", projectTitleStatic);
                    projectTitleRippled = 0;
                }
            );
        });

        function setupVideo () {
            // get video
              var video = document.getElementById('myVideo')
              // Play the video, this is optional
              video.play();
              // Add a listener to this video, so that when the video ends, the video is "hidden".
              video.addEventListener('ended', function() {
              // hide video
                video.style.display = "none";
              })
            }
            document.addEventListener('DOMContentLoaded', e => {
                var video = document.getElementById("myVideo");
                var main = document.getElementById("main-content");
              
                video.addEventListener('ended', e => {
                  main.style.display = "block";
                  video.style.display = "none";
                });
              });