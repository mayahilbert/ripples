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
                    }, 10000);
                }
            );
            $("#project-title-ripple").click(
                function () {
                    $(this).attr("src", projectTitleStatic);
                    projectTitleRippled = 0;
                }
            );
        });