var maxPDFx = 800;
var maxPDFy = 900;
var offsetY = 7;
var pafHeight=0;

function renderPdfFile(objpdf = null, objpageno = 1) {
	var pdfData = atob(objpdf.replace('data:application/pdf;base64,', ''));

	'use strict';


	// The workerSrc property shall be specified.
	pdfjsLib.GlobalWorkerOptions.workerSrc = 'src/assets/js/pdf.worker.min.js';

	//
	// Asynchronous download PDF
	//
	var loadingTask = pdfjsLib.getDocument({ data: pdfData });
	loadingTask.promise.then(function (pdf) {
		//
		// Fetch the first page
		//
		pdf.getPage(objpageno).then(function (page) {
			var scale = 1.0;
			var viewport = page.getViewport(scale);
			//
			// Prepare canvas using PDF page dimensions
			//
			var canvas = document.getElementById('the-canvas');
			var context = canvas.getContext('2d');
			canvas.height = viewport.height;
			canvas.width = viewport.width;
            pafHeight = viewport.height;
            maxPDFy = viewport.height;
            maxPDFx = viewport.width;
            //alert("canvas.height : "+canvas.height+" , canvas.width : "+canvas.width);
            //document.getElementById('the-container').style.width=(canvas.width+5)+"px";
			//
			// Render PDF page into canvas context
			//
			var renderContext = {
				canvasContext: context,
				viewport: viewport
			};
			//page.render(renderContext);

			page.render(renderContext).then(function () {
				$(document).trigger("pagerendered");
			}, function () {
				console.log("ERROR");
			});

		});
	});

	/* The dragging code for '.draggable' from the demo above
	 * applies to this demo as well so it doesn't have to be repeated. */

	// enable draggables to be dropped into this
	interact('.dropzone').dropzone({
		// only accept elements matching this CSS selector
		accept: '.drag-drop',
		// Require a 100% element overlap for a drop to be possible
		overlap: 1,

		// listen for drop related events:

		ondropactivate: function (event) {
			// add active dropzone feedback
			event.target.classList.add('drop-active');
		},
		ondragenter: function (event) {
			var draggableElement = event.relatedTarget,
				dropzoneElement = event.target;

			// feedback the possibility of a drop
			dropzoneElement.classList.add('drop-target');
			draggableElement.classList.add('can-drop');
			draggableElement.classList.remove('dropped-out');
			//draggableElement.textContent = 'Dragged in';
		},
		ondragleave: function (event) {
			// remove the drop feedback style
			event.target.classList.remove('drop-target');
			event.relatedTarget.classList.remove('can-drop');
			event.relatedTarget.classList.add('dropped-out');
			//event.relatedTarget.textContent = 'Dragged out';
		},
		ondrop: function (event) {
			//event.relatedTarget.textContent = 'Dropped';
		},
		ondropdeactivate: function (event) {
			// remove active dropzone feedback
			event.target.classList.remove('drop-active');
			event.target.classList.remove('drop-target');
		}
	});

	interact('.drag-drop')
		.draggable({
			inertia: true,
			restrict: {
				restriction: "#selectorContainer",
				endOnly: true,
				elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
			},
			autoScroll: true,
			// dragMoveListener from the dragging demo above
			onmove: dragMoveListener,
		});

	// this is used later in the resizing demo
	window.dragMoveListener = dragMoveListener;

	$(document).bind('pagerendered', function (e) {
		$('#pdfManager').show();
	});
}


function dragMoveListener(event) {
    //debugger;
	var target = event.target,
		// keep the dragged position in the data-x/data-y attributes
		x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
		y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

	// translate the element
	target.style.webkitTransform =
		target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';

	// update the position attributes
	target.setAttribute('data-x', x);
	target.setAttribute('data-y', y);

}

// this is used later in the resizing demo
function renderizzaPlaceholder(currentPage, parametri) {
    //debugger;
	var maxHTMLx = $('#the-canvas').width();
	var maxHTMLy = $('#the-canvas').height();

	var paramContainerWidth = $('#parametriContainer').width();
	var yCounterOfGenerated = 0;
	var numOfMaxItem = 25;
	var notValidHeight = 30;
	var y = 0;
	var x = 6;
	var page = 0;


	var totalPages = Math.ceil(parametri.length / numOfMaxItem);

	for (i = 0; i < parametri.length; i++) {
		var param = parametri[i];
		var page = Math.floor(i / numOfMaxItem);
		var display = currentPage == page ? "block" : "none";

		if (i > 0 && i % numOfMaxItem == 0) {
			yCounterOfGenerated = 0;
		}

		var classStyle = "";
		var placeholdervalue = param.placeholdervalue;

		if (i > 0 && i % numOfMaxItem == 0) {
			yCounterOfGenerated = 0;
		}

        console.log("parametri",JSON.stringify(parametri));
		var classStyle = "";
		var placeholdervalue = param.placeholdervalue;
        var samplevalue = param.samplevalue;
        var placeholderid = param.placeholderid;
		y = yCounterOfGenerated;
		yCounterOfGenerated += notValidHeight;
		classStyle = "drag-drop dropped-out";



		//$("#parametriContainer").append('<div class="' + classStyle + '" data-id="-1" data-page="' + page + '" data-toggle="' + placeholdervalue + '" data-placeholdervalue="' + placeholdervalue + '" data-x="' + x + '" data-y="' + y + '" style="transform: translate(' + x + 'px, ' + y + 'px); display:' + display + '">  <span ></span><span class="placeholderId">' + param.placeholdervalue + ' </span></div>');
        $("#parametriContainer").append('<div class="' + classStyle + '" data-id="-1" data-page="' + page + '" data-toggle="' + placeholdervalue + '" data-placeholdervalue="' + placeholdervalue +'" data-placeholderid="'+placeholderid+'" data-samplevalue="' + samplevalue + '" data-x="' + x + '" data-y="' + y + '" style="transform: translate(' + x + 'px, ' + y + 'px); display:' + display + '">  <span ></span><span class="placeholderId">' + param.placeholdervalue + ' </span></div>');
	}

	y = notValidHeight * (numOfMaxItem + 1);
	var prevStyle = "";
	var nextStyle = "";
	var prevDisabled = false;
	var nextDisabled = false;
	if (currentPage == 0) {
		prevStyle = "disabled";
		prevDisabled = true;
	}

	if (currentPage >= totalPages - 1 || totalPages == 1) {
		nextDisabled = true;
		nextStyle = "disabled";
	}

	$("#parametriContainer").append('<ul id="pager" class="pager" style="transform: translate(' + x + 'px, ' + y + 'px); width:200px;"><li onclick="changePage(' + prevDisabled + ',' + currentPage + ',-1)" class="page-item ' + prevStyle + '"><span>«</span></li><li onclick="changePage(' + nextDisabled + ',' + currentPage + ',1)" class="page-item ' + nextStyle + '" style="margin-left:10px;"><span>&raquo;</span></li></ul>');

}

function renderizzaInPagina(parametri) {
    //debugger;
	var maxHTMLx = $('#the-canvas').width();
	var maxHTMLy = $('#the-canvas').height();

	var paramContainerWidth = $('#parametriContainer').width();
	var yCounterOfGenerated = 0;
	var numOfMaxItem = 26;
	var notValidHeight = 30;
	var y = 0;
	var x = 6;
	for (i = 0; i < parametri.length; i++) {
		var param = parametri[i];

		var classStyle = "drag-drop can-drop";
		var placeholdervalue = param.placeholdervalue;
        var samplevalue = param.samplevalue;
        var placeholderid = param.placeholderid;

		var pdfY = maxPDFy - param.posizioneY - offsetY;
		y = (pdfY * maxHTMLy) / maxPDFy;
        //y = 0;
		x = ((param.posizioneX * maxHTMLx) / maxPDFx) + paramContainerWidth;

		//$("#parametriContainer").append('<div class="' + classStyle + '" data-id="' + param.idModulo + '" data-toggle="' + placeholdervalue + '" data-placeholdervalue="' + placeholdervalue + '" data-x="' + x + '" data-y="' + y + '" style="transform: translate(' + x + 'px, ' + y + 'px);">  <span ></span><span class="placeholderId">' + param.placeholdervalue + ' </span></div>');
        $("#parametriContainer").append('<div class="' + classStyle + '" data-id="' + param.idModulo + '" data-toggle="' + placeholdervalue + '" data-placeholdervalue="' + placeholdervalue + '" data-placeholderid="'+placeholderid+'" data-samplevalue="' + samplevalue +'" data-x="' + x + '" data-y="' + y + '" style="transform: translate(' + x + 'px, ' + y + 'px);">  <span ></span><span class="placeholderId">' + param.placeholdervalue + ' </span></div>');
	}
}


function changePage(disabled, currentPage, delta) {
	if (disabled) {
		return;
	}

	var parametri = [];
	$(".drag-drop.dropped-out").each(function () {
		var placeholdervalue = $(this).data("placeholdervalue");
		//var placeholderId = $(this).find(".placeholderId").text();
        var placeholderid = $(this).data("placeholderid");
        var samplevalue = $(this).data("samplevalue");
		parametri.push({ placeholdervalue: placeholdervalue, placeholderid: placeholderid,samplevalue:samplevalue, posizioneX: -1000, posizioneY: -1000 });
		$(this).remove();
	});

	$('#pager').remove();
	currentPage += delta;
	renderizzaPlaceholder(currentPage, parametri);

}


function showCoordinates() {
    //debugger;
	var validi = [];
	var nonValidi = [];

	var maxHTMLx = $('#the-canvas').width();
	var maxHTMLy = $('#the-canvas').height();
	var paramContainerWidth = $('#parametriContainer').width();
	var paramContainerHeight = $('#parametriContainer').height();

	$('.drag-drop.can-drop').each(function (index) {
        // console.log("Position X",$(this).attr('data-x'));
        // console.log("Position Y",$(this).attr('data-y'));
		var x = parseFloat($(this).position().left);
		var y = parseFloat($(this).position().top);
		var placeholdervalue = $(this).data("placeholdervalue");
		var placeholderid = $(this).data("placeholderid");
        //var placeholderId = $(this).find(".placeholderId").text();

        //old logic
		// var pdfY = (y * maxPDFy / maxHTMLy);
		// var posizioneY = pdfY-offsetY;
		// var posizioneX = (x * maxPDFx / maxHTMLx);

        ///var posizioneY = parseFloat($(this).attr('data-y'))-68;
        //debugger;
        // var getHeight = pafHeight;
        // var posizioneY = parseFloat(getHeight)-parseFloat($(this).attr('data-y'));
        var posizioneY = parseFloat($(this).attr('data-y'))+offsetY;
		var posizioneX = parseFloat($(this).attr('data-x'))-240;

		var val = { "placeholderid": placeholderid, "Position_X": posizioneX, "Position_Y": posizioneY, "placeholdervalue": placeholdervalue };
		validi.push(val);

	});


	return validi;
}

function getPDFHeight()
{
    return pafHeight;
}


function previewTemplate()
{
    $('.drag-drop.can-drop').each(function (index) {
        $(this).find(".placeholderId").text($(this).data("samplevalue"));
    });
}

function vewdraft(data)
{
    var placeholderid;
    $(".drag-drop.dropped-out").each(function () {
        placeholderid = $(this).data("placeholderid");
        data.forEach(i => {
            if(i.placeholderid==placeholderid)
            {
                $(this).addClass("can-drop").removeClass("dropped-out");
                $(this).css( { transform: 'translate('+(i.Position_X+240)+'px, '+(i.Position_Y-offsetY)+'px)'} );
                $(this).attr("data-x", (i.Position_X+240));
                $(this).attr("data-y", i.Position_Y-offsetY);
            }
        });
	});
}

function clearCanvas()
{
    var canvas = document.getElementById('the-canvas');
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
}


function countpdfpage(event) {
	return new Promise((resolve, reject) => {
	const reader = new FileReader();
	const fileInfo = event.target.files[0];
	if (fileInfo) {
		reader.readAsBinaryString(event.target.files[0]);
		reader.onloadend = () => {
			resolve(reader.result.match(/\/Type[\s]*\/Page[^s]/g).length);
		}
	}
});
}

function countpdfpageBase64(obj) {
	return new Promise((resolve, reject) => {
	const reader = new FileReader();
    var arr = b64toBlob(obj);
	const fileInfo = arr;
	if (fileInfo) {
		reader.readAsBinaryString(arr);
		reader.onloadend = () => {
			resolve(reader.result.match(/\/Type[\s]*\/Page[^s]/g).length);
		}
	}
});
}

function b64toBlob(dataURI) {

    var byteString = atob(dataURI.split(',')[1]);
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);

    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: 'application/pdf' });
}
