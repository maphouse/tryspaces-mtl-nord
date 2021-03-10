//onload, if url contains reference to json object, make that object appear in "leftPane" div
//will not properly push id to url if id arg is passed. id arg is only used for development so far
function fetchJsonObjectFromUrl(id) {
	if (id === undefined) {
		console.log("fetching JSON object from URL")
		var fetchedId = location.href.split("#")[1];
		console.log("fetchedid: ",fetchedId)
	} else {
		var fetchedId = id;
		console.log("fetchedid: ",fetchedId)
	}
	for (var i = 0; i < geojsonData.features.length; i++) {
		if (fetchedId == geojsonData.features[i].properties.id[0]) {
			pushToHtml(geojsonData.features[i]);
			zoom(geojsonData.features[i], mymap, true);
			return;
		}
	};
};

//functions that are not necessary for loading map (but related)

function loadFeatureIDlist() {
	let list = [];
	for (let path in p){
		list.push([])
	}
	console.log("there are ",list.length," paths")
	newlists = [];
	for (let j = 0; j < list.length; j++) {
		for (let i = 0; i < geojsonData.features.length; i++) {
			if (geojsonData.features[i].properties.id[j] === undefined) {
				continue;
			} else {
				list[j].push(geojsonData.features[i].properties.id[j])
			}
		}
		
		list[j].sort(function(a, b){return a-b});
		
		featureIdListMin = Math.min(...list[j])
		featureIdListMax = Math.max(...list[j])
	
		//for export from function, package it all in a new array
		newlists[j] = [list[j], featureIdListMax, featureIdListMin]
	}
	console.log("feature id lists: ",newlists)
	return newlists;
};

// navigation function
// dir is either 1 (next item) or -1 (prev item)
// list refers to which navigation path/vector is passed
//a?
//restart?
function nav(dir, restart){
	console.log("NAVIGATION")
	console.log("direction: ",dir)
	console.log("GLOBAL PATH VAR for nav: ",path)
	console.log("restart: ",restart)
	var slidePane = false;
	// fetch feature number from url based on the chosen path list
	var fetchedId = location.href.split("#")[path+1];
	
	// loop through i, where i is equal to the number of features
	for (var i = 0; i < newlists[path][0].length; i++) {
		if (fetchedId == newlists[path][0][i]) {
			// if next feature and reached end of features, OR if restart arg 0 is passed (meaning the user wishes to restart the path)
			if((dir == 1 && fetchedId == newlists[path][1]) || (restart === 0)){
				// go to first feature
				for (var i1 = 0; i1 < geojsonData.features.length; i1++) {
					if (geojsonData.features[i1].properties.id[path] == newlists[path][2]){
						console.log("i1 ", i1)
						pushToHtml(geojsonData.features[i1]);
						zoom(geojsonData.features[i1], mymap, slidePane);
						pushIDtoURL(geojsonData.features[i1], mymap);
					}
				}
			}
			// if prev feature and reached min id, go to last feature
			else if ( dir == -1 && fetchedId == newlists[path][2]){		
				// go to last feature
				for (var i1 = 0; i1 < geojsonData.features.length; i1++) {
					if (geojsonData.features[i1].properties.id[path] == newlists[path][1]){
						pushToHtml(geojsonData.features[i1]);
						zoom(geojsonData.features[i1], mymap, slidePane);
						pushIDtoURL(geojsonData.features[i1], mymap);
					}
				}
			}
			else {
				// simply go next or prev
				// console.log(featureIdList[i])
				// next feature needs to be in ascending or descending order from the current feature ID
				// FIX
				for (var i1 = 0; i1 < geojsonData.features.length; i1++) {
					if (geojsonData.features[i1].properties.id[path] == newlists[path][0][i+dir]){
						pushToHtml(geojsonData.features[i1]);
						zoom(geojsonData.features[i1], mymap, slidePane);
						pushIDtoURL(geojsonData.features[i1], mymap);
					}
				}
			}
			
		}
	}
	console.log("nav function ended")
}
	
//function sortAscending(x) {
//	x.sort((a,b)=>a-b);
//	return x;
//}



function slideshow(imgArray, elementID) {
	curIndex = 0;
	imgDuration = 5000;
	console.log(imgArray.split(","))
	
	
	document.getElementById(elementID).src = imgArray[curIndex];
	curIndex++;
	if (curIndex == imgArray.length) {
		curIndex = 0;
	}
	
	setTimeout("slideshow()", imgDuration);
}

function pushToHtml(feature) {
	
	//print media/theme html IF it exists
	console.log("navigate to FEATURE with path IDs: ",feature.properties.id)
	
	//generate list of paths for path selection box
	let paths_list = []
	if (feature.properties._items) {
		for (let i = 0;i < feature.properties._items.length; i++){
			paths_list.push(feature.properties._items[i].path)
		}
		console.log("paths retrieved from geojson feature: ",paths_list)
	}
	console.log("GLOBAL PATH VAR = ",path)
	document.getElementById("leftPane").innerHTML = generateHTML(feature,paths_list);
	
	
	selectPath(undefined)
	//add mouseover details pane fade-in
	addListeners();
	
	// &curarr; &cularr; &larrhk; &rarrhk; &rsh; &lsh;
	/*
	<div class='mediaWrapper'>"+feature.properties.media2+"</div><p class='caption'>"+feature.properties.caption2+"</p><div class='mediaWrapper'>"+feature.properties.media3+"</div><p class='caption'>"+feature.properties.caption3+"</p><p class='caption'>"+feature.properties.caption+"</p>
	*/
}

function generateLegend(p) {
	document.getElementById("legend").innerHTML = "<p class='path_tags'>Parcourir avec ... "+chunkify(p,1)+"</p>"
}


function generateHTML(feature,paths) {
	let html = "<header><div id='paneNavigator'><div class='restart'>&#10226;</div><div class='prevPlace'>&#10132;</div><div class='exitX'>&#10006;</div><div class='nextPlace'>&#10132;</div><div class='projectTitle'><h1>"+feature.properties.title+"</h1></div></div><div class='introContainer'><p>"+((feature.properties.intro) ? feature.properties.intro : '')+"</p><p class='path_tags'>Parcourir avec ... "+chunkify(paths,1)+"</p></div></header><main class='scroller'>"
	//&#10140; rounded arrow
	//&#11071; squiggle arrow left
	//&#10554; jump arrow
	//&#8635; old refresh arrow
	//&#128473; old X
	//nav popups removed
	//<span class='popuptext' id='prev'>popup text!</span><span class='popuptext' id='next'>popup text!</span><span class='popuptext' id='restart'>popup text!</span>
	//add function above that would turn an array of images into a slideshow https://www.w3schools.com/w3css/w3css_slideshow.asp
	let html_features = [];
	if (feature.properties._items) {
		for (let i = 0;i < feature.properties._items.length;i++){
			let html_feature = '';
			if (feature.properties._items[i].path){
				html_feature += String("<div class='contentContainer "+feature.properties._items[i].path+"' id='item"+i+"'>")
			} else {
				html_feature += "<div class='contentContainer' id='item"+i+"'>"
			} if (feature.properties._items[i].media) {
				html_feature += String(mediaProcessing(feature.properties._items[i].media,i))+"<div class='annotationContainer'>"
			} if (feature.properties._items[i].description) {
				html_feature += String("<p class='quotation'>"+feature.properties._items[i].description+"</p>")
			} if (feature.properties._items[i].path) {
				html_feature += String("<h2>  — "+chunkify([feature.properties._items[i].path],1)+"</h2>")
			} if (feature.properties._items[i].caption) {
				html_feature += String("<p class='caption'>"+feature.properties._items[i].caption+"</p>")
			} if (feature.properties._items[i].themes) {
				html_feature += String("<p class='theme_tags'>Tags de carte : "+chunkify(feature.properties._items[i].themes,2)+"</p>")
			}
			html_feature += String("</div></div>")
			
			//add audio/img/slideshow class tags to contentContainer to enable appropriate formatting
			if (html_feature.includes("<audio")) {
				html_feature = html_feature.replace("contentContainer","contentContainer audio");
			} else if (html_feature.includes("slideshow")) {
				html_feature = html_feature.replace("contentContainer","contentContainer slideshow");
			} else if (html_feature.includes("<img")) {
				html_feature = html_feature.replace("contentContainer","contentContainer img");
			}
			
			html_features.push(html_feature);
		}
		html += html_features.join("");
	}
	html += String("</div></main>")//close grid-container
	
	return html
	//setTimeout(slideshow(feature.properties.media[media_item],j), 3000)
}

function mediaProcessing(media, id) {
	if (typeof media === "string" && ((media.slice(-3) === 'jpg') || (media.slice(-3) === 'png'))){
		var returnVal = "<img class='mediaWrapper' id='image"+id+"' src='"+media+"' alt='image' />";
	} else if (typeof media === "object") {
		console.log("slideshow Id ", id)
		var returnVal = "<img class='mediaWrapper' id='slideshow"+id+"' src='"+media[0]+"' alt='image slideshow' />";
	} else if (typeof media === "string" && ((media.slice(-3) === 'm4a') || (media.slice(-3) === 'mp3'))){
		//when media is audio
		var returnVal = "<audio class='mediaWrapper' id='audio"+id+"' src='"+media+"' alt='audio' type='audio/aac' controls></audio>";
		//<audio class="player" src="content/Vocal 035.m4a" type="audio/aac" controls />
	} else if (typeof media === "string" && ((media.slice(-3) === 'mp4'))){
		//when media is audio
		
		var returnVal = "<video class='mediaWrapper' id='video"+id+"' src='"+media+"' alt='video' type='video/mp4' controls></video>";
		//console.log("returnVal ",returnVal)
		//console.log("returnVal.height ",returnVal.duration)
		//<audio class="player" src="content/Vocal 035.m4a" type="audio/aac" controls />
	}
	return returnVal;
}

//add json object id to url
function pushIDtoURL(feature, map) {
	console.log("selected feature ", feature.properties.id);
	var hashSymbol = "#";	
	stringOfIds = feature.properties.id.toString()
	console.log(stringOfIds)
	finalStringOfIds = stringOfIds.replace(/,/g,"#")
	var uri = hashSymbol.concat(finalStringOfIds)
	console.log(uri)
	/*
	var uri = encodeURIComponent(","+feature.properties.id);
	console.log(uri)
	*/
	
	location.href = uri;
	console.log(location.href)
}

function styleAll(feature, latlng) {
	
	var obj = {dashArray:null, dashOffset:null, lineJoin:null, lineCap:null, stroke:false, color:'black', opacity:1, weight:3, fillColor:null, fillOpacity:0 }
	/*
	if (feature.properties.theme == "Family") {
		obj.stroke = true
		,obj.color = 'red'
	}
	if (feature.properties.theme == "Work") {
		obj.stroke = true
		,obj.color = 'blue'
	}
	if (feature.properties.place_type == "street") {
		obj.fillColor = 'gray'
		,obj.fillOpacity = 0.8
	}
	if (feature.properties.place_type == "park") {
		obj.fillColor = 'green'
		,obj.fillOpacity = 0.8
	}
	if (feature.properties.place_type == "area") {
		obj.fillColor = 'black'
		,obj.fillOpacity = 0.8
	}
	*/
	if (feature.geometry.type == "Point") {
		obj.fillColor = 'null'
		,obj.fillOpacity = 0.0
		,obj.stroke=true
		,obj.radius=12
	}
	
	return obj;
}

function stylePoints(feature, latlng) {
	var markerOptions = {
		//radius: 9,
    };
	return L.circleMarker(latlng, markerOptions);
}
/*
function featureSelect(layer,kw) {
	layer.onEachFeature
	for (var i = 0; i < layer.features.length; i++) {
		
	}
}
*/
//https://groups.google.com/g/leaflet-js/c/-9r2NN5CV7I?pli=1


function displayFeatureProperties(feature, layer) {
  
	layer.bindPopup("<h3>"+feature.properties.title+"</h3>", {closeButton: false, autoPan: false, offset: L.point(0, -20)});
	
    layer.on('click', function () {
		pushIDtoURL(feature, mymap); //for sharing the individual vignette url
		zoom(feature, mymap, true); //to zoom into the feature
		pushToHtml(feature); //change html on left pane based on feature properties
		
		//layer.setStyle({fillColor: "yellow",fillOpacity:1});
		
		layer.openPopup();
		console.log(layer)
		layer.removeEventListener('mouseout')
	});

	layer.on('mouseover', function() {
		layer.openPopup();
	});	
	layer.on('mouseout', function() {
		layer.closePopup();
	});

}


//function that toggles map features styles and clicked tag
function styleFeatures(layer, element){
	if (element) {
		kw = element.innerHTML
		if (element.style.backgroundColor === ""){
			console.log("color is blank, toggle to selected")
			element.style.backgroundColor = "var(--map-selection-color)";
			element.style.borderColor = "var(--map-selection-color)";
			element.style.color = "var(--hover-color)";
		} else {
			console.log("color is selected, toggle blank")
			element.style.backgroundColor = "";
			element.style.borderColor = "";
			element.style.color = "";
		}
		
		for (let key in layer._layers) {
			let obj = layer._layers[key];
			let multiplier = 0;
			for (var key2 in obj.feature.properties._items) {
				var item = obj.feature.properties._items[key2]
				if (item.hasOwnProperty('themes')){
					//console.log("found 'themes' property")
					//console.log("looping through arrays contained inside themes property of type object")
					//console.log(obj.feature.properties.themes[mediaTheme])
					if (item.themes.includes(kw)){
						multiplier += 1;
						var id = obj._leaflet_id;
						//console.log("object found ",id)
						//console.log("leaflet id is ",id)
						//console.log("fillColor is ",obj.options.fillColor)
					}
				}
			}
			if (multiplier > 0){
				console.log("kw: ",kw,", multiplier: ",multiplier)
				if (element.style.backgroundColor === ""){
					console.log("color was toggled blank, unselecting map features")
					layer._layers[id].setStyle({fillColor: null,fillOpacity:0});
				} else {
					console.log("color was toggled yellow, selecting map features")
					layer._layers[id].setStyle({fillColor: 'var(--map-selection-color)',fillOpacity:0.5*multiplier});
				}
			}
		}
	} else {
		//layer.setStyle(styleAll())
	}
}

function chunkify(arrayInput, type) {
	var arrayInput = [...new Set(arrayInput)];
	console.log("arrayInput: ",arrayInput)
	let html = "";
	if (type === 2){
		//themes
		for (let i=0;i<arrayInput.length;i++) {
			html += String("<span class='theme_tag'>"+arrayInput[i]+"</span>")
		}
	} else if (type === 1){
		//persons
		for (let i=0;i<arrayInput.length;i++) {
			if (find_path(path) === arrayInput[i]) {
				console.log("path: ",path)
				//insert color coding difference if = path, 'style='background-color:red;color:var(--hover-color)'
				html += String("<span class='path_tag highlight'>"+arrayInput[i]+"</span>")
			} else {
				html += String("<span class='path_tag'>"+arrayInput[i]+"</span>")
			}
		}
	}
	return html;
}

//hide elements not related to the clicked pathname and set up arrows for navigation down that path
function selectPath(element) {
	console.log(path, " <-- GLOBAL PATH VAR for selectPath")
	console.log(element, " <-- element")
	
	//if element is an actual element (i.e. passed from place_tag click)
	if (element !== undefined){
		//if clicked path is already selected, toggle off and reveal all
		if (element.firstChild.data === find_path(path)){
			
			let els = document.querySelectorAll(".path_tag");
			console.log("els", els)
			for(let i = 0; i < els.length; i++){
				els[i].classList.remove('highlight');
			}
				
			//highlight nav buttons
			document.querySelector(".prevPlace").classList.remove('highlight');
			document.querySelector(".nextPlace").classList.remove('highlight');
			
			//show all content
			$(".contentContainer").show();
			
			//reset global path var
			path = 0;
			console.log("GLOBAL PATH VAR reset to ",path)
		
		//if clicked path isn't already selected, toggle all else off and reveal clicked path only
		} else if (element.firstChild.data !== find_path(path)){
			
			let els = document.querySelectorAll(".path_tag")
			for(let i = 0; i < els.length; i++){
				if (element.firstChild.data === els[i].firstChild.data){
					els[i].classList.add('highlight');
				} else {
					els[i].classList.remove('highlight');
				}
			}
			
			//highlight nav buttons
			document.querySelector(".prevPlace").classList.add('highlight');
			document.querySelector(".nextPlace").classList.add('highlight');
			
			//show only content related to clicked path tag
			$( ".contentContainer."+element.firstChild.data).show();
			$( ".contentContainer:not(."+element.firstChild.data+")").hide();
			
			path = find_path(element.firstChild.data)
			console.log("GLOBAL PATH VAR set to ",path)
		}
	//if this function was called from pushToHtml, then the pane is being generated after navigation and place_tag is being styled inline by chunkify function
	} else {
		if (path === 0){
			return;
		} else {
			$( ".contentContainer:not(."+find_path(path)+")").hide();
			
			//highlight nav buttons
			document.querySelector(".prevPlace").classList.add('highlight');
			document.querySelector(".nextPlace").classList.add('highlight');
		}
	}
};
//this function returns the array position (path number) if the pathname (value) is passed, and the pathname if the number (position) is passed.
function find_path(a){
	if (typeof a === 'string'){
		return p.indexOf(a);
	} else if (typeof a === 'number'){
		return p[a];
	}
};

function zoom(feature, map, slidePane){
	if(map != null){
		myMap = map;
		if(feature.geometry.type=='Point'){
			var lat = feature.geometry.coordinates[1];
			var lng = feature.geometry.coordinates[0];
			console.log(lat,lng)
			myMap.flyTo([lat, lng], 18)
		}
		if(feature.geometry.type=='LineString'){
			//retrieve lat and long centroid
			//lat = (feature.geometry.coordinates[0][1] + feature.geometry.coordinates[1][1]) / 2;
			//lng = (feature.geometry.coordinates[0][0] + feature.geometry.coordinates[1][0]) / 2;
			//console.log(lat,lng)
			var bounds = [[feature.geometry.coordinates[0][1],feature.geometry.coordinates[0][0]],[feature.geometry.coordinates[1][1], feature.geometry.coordinates[1][0]]]
			console.log(bounds)
			var fitBounds = {maxZoom:16.5};
			myMap.flyToBounds(bounds,fitBounds);
		}
		if(feature.geometry.type=='Polygon'){
			var lats = [];
			var lngs = [];
			for (var i = 0; i < feature.geometry.coordinates[0].length; i++) {
				lats[i] = feature.geometry.coordinates[0][i][1]
				lngs[i] = feature.geometry.coordinates[0][i][0]
			}
			
			var minLat = Math.min.apply(Math, lats);
			var minLng = Math.min.apply(Math, lngs);
			var maxLat = Math.max.apply(Math, lats);
			var maxLng = Math.max.apply(Math, lngs);
			var bounds = [[minLat,minLng],[maxLat,maxLng]];
			var fitBounds = {maxZoom:16.5};
			myMap.flyToBounds(bounds,fitBounds);
		}
		if(feature.geometry.type=='MultiPolygon'){
			var lats = [];
			var lngs = [];
			for (var i = 0; i < feature.geometry.coordinates[0][0].length; i++) {
				lats[i] = feature.geometry.coordinates[0][0][i][1]
				lngs[i] = feature.geometry.coordinates[0][0][i][0]
			}
			
			var minLat = Math.min.apply(Math, lats);
			var minLng = Math.min.apply(Math, lngs);
			var maxLat = Math.max.apply(Math, lats);
			var maxLng = Math.max.apply(Math, lngs);
			var bounds = [[minLat,minLng],[maxLat,maxLng]];
			var fitBounds = {maxZoom:16.5};
			myMap.flyToBounds(bounds,fitBounds);
		}
		//myMap.setView([lat, lng], 18, {animation: true});
		//myMap.flyTo([lat, lng], 18)
		console.log("zoomed on ", feature)
	};
	
	
	//delay leftSlide until some zooming animation ihas completed
	if (slidePane === true){
		setTimeout(function(){
			leftSlide();
			console.log("leftSlide");
		}, 700);
	}
}

//this leaflet-sourced function is called after jquery map click slide from left
function recenterMap() { 
	mymap.invalidateSize({animate: true});
}

//Layers
//var mybounds = L.latLngBounds([45.404355, -73.955570], [45.702860, -73.476158]);
	
var layerUrl = 'https://api.mapbox.com/styles/v1/{user}/{id}/tiles/256/{z}/{x}/{y}?access_token={accessToken}';
var imageUrl_bw = 'drawing-4_white.png';
var imageUrl_color = 'drawing-4_coloured.png';
var imageBounds = [[45.6023716076707473, -73.6510221845416027],[45.5831569024521457, -73.6163640421708720]];

//var imgOverlay = L.imageOverlay(imageUrl, imageBounds).addTo(mymap);// overlay image on basemap


var satellite = L.tileLayer(
	layerUrl, {
		id: 'MapID',
		attribution: '',
		maxZoom: 19,
		minZoom: 0,
		opacity: 0,
		user: 'treebrain',
		id: 'cj7f0urc62azd2slck52d7iu5', //satellite
		accessToken: 'pk.eyJ1IjoidHJlZWJyYWluIiwiYSI6ImNpd2N4a2tjcjAxeHEyeW9iamtna2drcGMifQ.rNAIi-ocVjzPImGpnmTbyw'
	}),
	labels = L.tileLayer(layerUrl, {
		id: 'MapID',
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a> | <a href="http://www.openstreetmap.org/#map=7/45.356/-73.586">améliorez cette carte / improve this map</a>',
		maxZoom: 19,
		minZoom: 13,
		user: 'treebrain',
		id: 'cj7f0l91m2bz72rn34u0ewqwu', //satellite-streets
		accessToken: 'pk.eyJ1IjoidHJlZWJyYWluIiwiYSI6ImNpd2N4a2tjcjAxeHEyeW9iamtna2drcGMifQ.rNAIi-ocVjzPImGpnmTbyw'
	}),
	standard = L.tileLayer(layerUrl, {
		id: 'MapID',
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a> | <a href="http://www.openstreetmap.org/#map=7/45.356/-73.586">améliorez cette carte / improve this map</a>',
		maxZoom: 19,
		minZoom: 13,
		user: 'treebrain',
		id: 'cj7c8azq583cw2rqibncn3bu9', //standard
		accessToken: 'pk.eyJ1IjoidHJlZWJyYWluIiwiYSI6ImNpd2N4a2tjcjAxeHEyeW9iamtna2drcGMifQ.rNAIi-ocVjzPImGpnmTbyw'
	}),
	normal = L.tileLayer(layerUrl, {
		id: 'MapID',
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a> | <a href="http://www.openstreetmap.org/#map=7/45.356/-73.586">améliorez cette carte / improve this map</a>',
		maxZoom: 19,
		minZoom: 13,
		user: 'treebrain',
		id: 'cj5h12qez3r4j2rpeqpnicyz9', //AmplifierCdN
		accessToken: 'pk.eyJ1IjoidHJlZWJyYWluIiwiYSI6ImNpd2N4a2tjcjAxeHEyeW9iamtna2drcGMifQ.rNAIi-ocVjzPImGpnmTbyw'
	}),
	normal2 = L.tileLayer(layerUrl, {
		id: 'MapID',
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a> | <a href="http://www.openstreetmap.org/#map=7/45.356/-73.586">améliorez cette carte / improve this map</a>',
		maxZoom: 19,
		minZoom: 13,
		user: 'mapbox',
		id: 'streets-v11', //mapbox 2021 default streets
		accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA'
	}),
	CartoDB_Positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
		subdomains: 'abcd',
		maxZoom: 19,
		minZoom: 13
	}),
	mentalmap_bw = L.imageOverlay(imageUrl_bw,
		imageBounds
	),
	mentalmap_color = L.imageOverlay(imageUrl_color,
		imageBounds
	);



var baseLayers = {
	"Fond blanc": satellite
	,"Satellite avec étiquettes": labels
	,"Classique": standard
	,"Normal": normal
	,"Mapbox Streets": normal2
	,"CartoDB": CartoDB_Positron
};

var overlays = {
	"Carte mentale n&b": mentalmap_bw
	,"Carte mentale coloré": mentalmap_color
};


/* popup function adapted from https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_popup
function popup(c) {
	console.log("mouse-over/out popup: ", c)
	
	var popup = document.getElementById(c);
	popup.classList.toggle("show");
}*/

// popover function, more complex than popup because avoids mousing out over child elements
function popover(c) {
	console.log("mouse-over/out popover: ", c)
	var popover = document.getElementById(c);
	popover.children[1].classList.toggle("show");
}

//exit leftpane function
function exitX() {
	console.log("exiting pane");
	$("#mapid").animate({right:"0px", width: "100%"}, 500, 'swing');
	
	setTimeout(function(){
		recenterMap();
	}, 1000);
	
	console.log("map recentered");
	//zoom out to map extent
	//reset global path var
	path = 0;
};

function leftSlide() {
	console.log("leftslide");
	//slide pane from left (map is actually just being resized)
	$("#mapid").animate({right:"60%", width: "60%"}, 500, 'swing');
	//call the recenter map function, time it so that it animates back after the slide is complete
	
	setTimeout(function(){
		recenterMap();
	}, 700);
	
	console.log("map recentered");
};

function addTopListeners() {
	//add click listeners to nav controls
	document.getElementById("leftPane").addEventListener("click", function (e){
		if (e.target && e.target.matches(".nextPlace")) {
			nav(1,undefined);
			console.log("item ", e.target.className, " was clicked!");
		}
		if (e.target && e.target.matches(".prevPlace")) {
			nav(-1,undefined);
			console.log("item ", e.target.className, " was clicked!");
		}
		if (e.target && e.target.matches(".theme_tag")) {
			styleFeatures(geojsonLayer_1, e.target);
			console.log("item ", e.target.className, " was clicked!");
		}
		if (e.target && e.target.matches(".path_tag")) {
			selectPath(e.target);
			console.log("item ", e.target.className, " was clicked!");
			console.log("path ", path, " was clicked!");
		}
		if (e.target && e.target.matches(".restart")) {
			nav(1,0);
		}
		if (e.target && e.target.matches(".exitX")) {
			exitX();
			console.log("item ", e.target.className, " was clicked!");
		}
	});
	
	document.getElementById("legend").addEventListener("click", function (e){
		if (e.target && e.target.matches(".theme_tag")) {
			styleFeatures(geojsonLayer_1, e.target);
			console.log("item ", e.target.className, " was clicked!");
		}
		if (e.target && e.target.matches(".path_tag")) {
			selectPath(e.target);
			console.log("item ", e.target.className, " was clicked!");
			console.log("path ", path, " was clicked!");
		}
	});
	

	/*
	//add hover listeners to nav controls
	document.getElementById("leftPane").addEventListener("mouseover", function (e){
		if (e.target && e.target.matches(".popup")) {
			popup(e.target.firstChild.id);
		}
	});
	document.getElementById("leftPane").addEventListener("mouseout", function (e){
		if (e.target && e.target.matches(".popup")) {
			popup(e.target.firstChild.id);
		}
	});
	*/
	//add mouseenter/mouseleave listeners to media items
}


//add audio fading https://stackoverflow.com/a/26869192



//listeners that cannot be added through child element event detection
function addListeners() {
	for (let i = 0;; i++) {
		try {
			let id = String("item"+i)
			console.log('added mouseover listener to ', id)
			
			document.getElementById(id).addEventListener("mouseenter", function (e){
				if (e.target.classList[1] == "audio"){
					/*do nothing*/
				} else {
					timer_switch = 1;
					timer = setTimeout(function() {
						popover(e.target.id);
						timer_switch = 0;
					},1000);
				}
			});
			
			document.getElementById(id).addEventListener("mouseleave", function (e){
				if (timer_switch === 1) {
					clearTimeout(timer);
					timer_switch = 0;
				} else {
					if (e.target.classList[1] == "audio"){
					/*do nothing*/
					} else {
						popover(e.target.id);
					}
				}
			});
			try {
				//autoplay next html audio elements after playback ends, using sequential IDs
				document.getElementById("audio"+i).addEventListener("ended", function (e){
					nextPlay = "audio"+String(Number(e.target.id.slice(-1))+1)
					setTimeout(function(){
						document.getElementById(nextPlay).play()
					}, 2000);
				});
			} catch(error) {
				/*do nothing*/
			}
			
		} catch(error) {
			console.log('PRINT ERROR ',error)
			console.log('add eventlisteners break')
			break;
		}
	};
	return;
}

// alternative d3 load json func
var loadjson = (path) => {
	d3.json(path, function(data) {
		return(data);
	});
};

//jquery
$(document).ready(function() {
    
	fetchJsonObjectFromUrl(undefined);
	loadFeatureIDlist();
	addTopListeners();
	generateLegend(p.slice(1,6));
	var timer;
	var timer_switch = 0;
	
	var el = document.getElementById('legend');
	L.DomEvent.disableScrollPropagation(el);
	L.DomEvent.disableClickPropagation(el);
	
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        $("#mapid").css("height", "100%");
    }
    
    //forces vertical splitscreen when window is resized to mobile dimensions
    $(window).resize(function() {
        var viewp_width = window.innerWidth;
        if (viewp_width < 768) {
            $("#mapid").css("width", "100%");
        }
    });
	
	//search function with autofill
	var availableTags = [];
	for (var i = 0; i < geojsonData.features.length; i++) {
		availableTags.push(geojsonData.features[i].properties.title)
	};
	$( "#tags" ).autocomplete({
	source: availableTags,
	select: function( event, ui ) {
		for (var i = 0; i < geojsonData.features.length; i++) {
			if (ui.item.value == geojsonData.features[i].properties.title) {
				pushToHtml(geojsonData.features[i]);
				zoom(geojsonData.features[i], mymap, true);
				pushIDtoURL(geojsonData.features[i], mymap);
				}
			};
		}
	});
});