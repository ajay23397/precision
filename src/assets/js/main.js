$(document).ready(function () {
    // $(".tabs li a").click(function(){
    // 	content = $(this).data("tabs");
    // 	$(this).parent().parent().parent().parent().find(".tab_content").fadeOut(0);
    // 	$("#"+content).fadeIn(0);
    // 	$(this).parent().parent().find("a").removeClass("active");
    // 	$(this).addClass("active");
    // });

    $(".tabs li a").click(function () {
        var index = $(this).parent().index();
        var index = index - 1;
        $(".bg_tabs").animate({ left: 105 * index });
        content = $(this).data("tabs");
        $(this)
            .parent()
            .parent()
            .parent()
            .parent()
            .find(".tab_content")
            .fadeOut(0);
        $("#" + content).fadeIn(0);
        $(this).parent().parent().find("a").removeClass("active");
        $(this).addClass("active");
    });

    $(".month_year_links a").click(function () {
        $(this).parent().parent().find("a").removeClass("current");
        $(this).addClass("current");
    });

    $(".scroller").niceScroll({
        cursorfixedheight: 110,
        cursorcolor: "#dcdee5",
    });

    /*$(".all_strategies").click(function(){
		$("#Strategies").fadeIn();
		$('.overlayerCom').show();
	});*/

    $(".overlayerCom").click(function () {
        $("#Strategies").fadeOut();
        $(".overlayerCom").hide();
    });

    $("#Strategies li").click(function () {
        text = $(this).text();
        //$("#Strategies li").removeClass("active");
        $(this).toggleClass("active");
        //$("#Strategies").fadeOut();
        $(".all_strategies").text(text);
    });

    $("#beneficiarCheckbx li").click(function () {
        text = $(this).text();
        //$("#Strategies li").removeClass("active");
        $(this).toggleClass("active");
        //$("#Strategies").fadeOut();
        $(".all_strategies").text(text);
    });

    $(".open-data").click(function () {
        content = $(this).data("content");
        $(".hidden_data").animate({ bottom: "-800px" }, 0);
        $("#" + content).animate({ bottom: "0px" }, 600);
        $("html, body").css("overflowY", "hidden");
        $(".tooltip.show").animate({ opacity: 0 });
    });

    $(".close_icon").click(function () {
        $(".hidden_data").animate({ bottom: "-100%" }, 600);
        $("html, body").css("overflowY", "auto");
        $(".tooltip").animate({ opacity: 0.9 });
    });

    $(".tabs_large a.active").parent().prev().addClass("no_border");

    $(".tabs_large a").hover(
        function () {
            $(this).parent().prev().addClass("no_border");
        },
        function () {
            $(this).parent().prev().removeClass("no_border");
        }
    );

    $(".tabs_large a").click(function () {
        content = $(this).data("tabs");
        $(".profile_content").fadeOut(0);
        $("#" + content).fadeIn(0);
        $(".tabs_large a").removeClass("active");
        $(this).addClass("active");
        $(".tabs_large li").removeClass("no_border");
        $(this).parent().prev().addClass("no_border");
    });

    if ($("#status").length) {
        $("#status").multiselect({
            columns: 1,
            placeholder: "All",
        });
    }

    if ($("#banks").length) {
        $("#banks").multiselect({
            columns: 1,
            placeholder: "Select Bank",
            search: true,
        });
    }

    if ($("#searchBlock").length) {
        document
            .querySelector("#searchBlock")
            .addEventListener("keyup", function calculate(e) {
                const div = document.querySelector(".searchClear");
                if (e.target.value !== "") {
                    div.style.display = "block";
                } else {
                    div.style.display = "none";
                }
            });
    }

    $(".searchClear").click(function () {
        document.getElementById("searchBlock").value = "";
        document.querySelector(".searchClear").style.display = "none";
    });

    $("#filterApply").click(function () {
        $(".filterBtn a").addClass("selected");
    });

    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });

    $(".historyPopupShow").click(function () {
        // $('historyPopupShow').parents('.historyPopup').show();
        $(".historyPopup").hide(0);
        $(this).parent().parent().find(".historyPopup").show();
    });

    $(".historyPopclose").click(function () {
        $(".historyPopup").hide();
    });

    $(".viewLog").click(function () {
        $(".historyBlock").show();
    });

    if ($(".customDatePicker").length) {
        $(".customDatePicker").daterangepicker({
            opens: "right",
        });
    }

    //

    var tabs = $(".tabsAnimation");
    var selector = $(".tabsAnimation").find("a").length;
    //var selector = $(".tabsAnimation").find(".selector");
    var activeItem = tabs.find(".active");
    var activeWidth = activeItem.innerWidth();
    $(".selector").css({
        left: activeItem.position.left + "px",
        width: activeWidth + "px",
    });

    $(".tabsAnimation").on("click", "a", function (e) {
        e.preventDefault();
        $(".tabsAnimation a").removeClass("active");
        $(this).addClass("active");
        var activeWidth = $(this).innerWidth();
        var itemPos = $(this).position();
        $(".selector").css({
            left: itemPos.left + "px",
            width: activeWidth + "px",
        });
    });

    // Sateesh - July 2022
    if ($("#showing_dropdown").length) {
        $("#showing_dropdown").selectBox({
            keepInViewport: false,
            mobile: true,
        });
    }

    if ($(".multiselect_default").length) {
        $(".multiselect_default").multiselect({
            columns: 1,
            placeholder: "Select",
            search: false,
        });
    }
    if ($(".multiselect_default_search").length) {
        $(".multiselect_default_search").multiselect({
            columns: 1,
            placeholder: "Select",
            search: true,
        });
    }

    if ($(".selectbox_with_search").length) {
        $(".selectbox_with_search").select2({
            searchInputPlaceholder: "Search...",
            placeholder: "Select",
        });
    }

    $(".show_cutoff_time").click(function () {
        $(".hidden_data").animate({ bottom: "-800px" }, 0);
        $("html, body").css("overflowY", "hidden");
        $("#cutoff_popup").fadeIn();
        $(".tooltip.show").animate({ opacity: 0 });
    });
    $(".cutoff a").click(function () {
        $("html, body").css("overflowY", "scroll");
        $("#cutoff_popup").fadeOut();
        $(".tooltip").animate({ opacity: 0.9 });
        $("#Success_Alert_Single").fadeIn();
        $(".modalFooter .appr_rejct_btns a").addClass("disabled");
        setTimeout(function () {
            $("#Success_Alert_Single").fadeOut();
        }, 4000);
    });

    if ($("#checkbox_child_level").length) {
        $('#checkbox_child_level input[type="checkbox"]').ezMark();
    }

    $(".delete_on").click(function () {
        $(this).parent(".row").fadeOut();
    });

    $(".child_tabs a").click(function () {
        content = $(this).data("tabs");
        // alert(content);
        $(".child_hidden").fadeOut(0);
        $("#" + content).fadeIn();
        if (content == "Add-Child") {
            $("#Reset_Allocation_Btn").fadeIn(0);
        }
        if (content == "Upload-Child") {
            $("#Reset_Allocation_Btn").fadeOut(0);
        }
        $(".scroller").getNiceScroll().resize();
    });

    $("#Child_Submit_Btn").click(function () {
        $("#Successful_Upload").fadeIn();
        $(".modalFooter .filterBtns a").addClass("disabled");
        setTimeout(function () {
            $("#Successful_Upload").fadeOut();
            $(".modalFooter .filterBtns a").removeClass("disabled");
        }, 4000);
    });

    $(".reject_popup_inner textarea").keyup(function () {
        var btnSubmit = $(".reject_popup_inner input");
        if ($(this).val().trim() != "") {
            btnSubmit.removeAttr("disabled");
        } else {
            btnSubmit.attr("disabled", "disabled");
        }
    });

    $("#footer_selected_rows .show_approved").click(function () {
        $("#Success_Alert").fadeIn();
        $("#footer_selected_rows a").addClass("disabled");
        setTimeout(function () {
            $("#Success_Alert").fadeOut();
            $("#footer_selected_rows").fadeOut();
            $("#footer_selected_rows a").removeClass("disabled");
        }, 4000);
    });

    /*$(".modalFooter .show_approved").click(function(){
		$("#Success_Alert_Single").fadeIn();
		$(".modalFooter .appr_rejct_btns a").addClass('disabled');
		setTimeout(function(){
			$("#Success_Alert_Single").fadeOut();
			$(".modalFooter .appr_rejct_btns a").removeClass('disabled');
		}, 4000);
	});*/

    $(".modalFooter .show_approved").click(function () {
        $("#cutoff_popup").fadeIn();
    });

    $(".show_reject_popup").click(function () {
        $("#reject_popup").fadeIn();
    });

    $(".close_popup").click(function () {
        $("#reject_popup").fadeOut();
    });

    $(".checker_table tbody input[type='checkbox']").change(function () {
        count = $(".checker_table input:checkbox:checked").length;
        if ($(".checker_table input:checkbox:checked").length > 0) {
            $("#footer_selected_rows").fadeIn();
            $("#footer_selected_rows p span").text(count);
            // alert(count);
        } else {
            $("#footer_selected_rows").fadeOut();
        }
    });

    $("#reject_popup form").submit(function (e) {
        $("#Error_Alert").fadeIn();
        $("#reject_popup").fadeOut();

        if ($(".hidden_data").is(":visible")) {
            $(".appr_rejct_btns a").addClass("disabled");
        }
        if ($("#footer_selected_rows").is(":visible")) {
            $("#footer_selected_rows a").addClass("disabled");
        }

        setTimeout(function () {
            $("#Error_Alert, #footer_selected_rows").fadeOut();
            $("#footer_selected_rows a").removeClass("disabled");
            $(".appr_rejct_btns a").removeClass("disabled");
        }, 4000);
        return false;
    });

    if ($(".default_selectbox").length) {
        $(".default_selectbox select").selectBox({
            keepInViewport: false,
            mobile: true,
        });
    }

    if ($(".radio_btns").length) {
        $('.radio_btns input[type="radio"]').ezMark();
    }

    /*$(".form_footer input[type='submit']").click(function(){
		$("#Success_Alert_Single").fadeIn();
		$(".form_footer input").attr("disabled", "disabled");
	});*/

    $(".show_success_approved").click(function () {
        $("#Success_Alert_Single").fadeIn();
        $(".form_footer input").attr("disabled", "disabled");
    });

    $(".show_cutoff_time_approval").click(function () {
        $("html, body").css("overflowY", "hidden");
        $("#cutoff_popup").fadeIn();
        $(".tooltip.show").animate({ opacity: 0 });
    });

    $(".notiIcon").click(function () {
        setTimeout(function () {
            $("#Notifications_Header .scroller").niceScroll({
                cursorfixedheight: 110,
                cursorcolor: "#dcdee5",
            });
            $("#Notifications_Header .scroller").getNiceScroll().resize();
        }, 800);
    });

    // Sateesh - July 2022
});
