//Layers
const layerUrl = 'https://api.mapbox.com/styles/v1/{user}/{id}/tiles/256/{z}/{x}/{y}?access_token={accessToken}';
const imageUrl_bw = 'imgs/drawing-4_white.png';
const imageUrl_color = 'imgs/drawing-4_coloured_credits.png';
const imageBounds = [[45.6023716076707473, -73.6510221845416027],[45.5831569024521457, -73.6163640421708720]];
let geojsonLayer;
//var imgOverlay = L.imageOverlay(imageUrl, imageBounds).addTo(mymap);// overlay image on basemap

//initialize pathways
const p = ["places","Sam","Léana","Pierre","Rayan","Liam"]
//initial pathway always equal to 0 until another is selected by user
let path = 0;


const whiteTiles = L.tileLayer(layerUrl, {
		id: 'MapID',
		attribution: '',
		opacity: 0,
		user: 'treebrain',
		id: 'cj7f0urc62azd2slck52d7iu5', //whiteTiles
		accessToken: 'pk.eyJ1IjoidHJlZWJyYWluIiwiYSI6ImNpd2N4a2tjcjAxeHEyeW9iamtna2drcGMifQ.rNAIi-ocVjzPImGpnmTbyw'
	}),
	labels = L.tileLayer(layerUrl, {
		id: 'MapID',
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a> | <a href="http://www.openstreetmap.org/#map=7/45.356/-73.586">améliorez cette carte / improve this map</a>',
		user: 'treebrain',
		id: 'cj7f0l91m2bz72rn34u0ewqwu', //satellite-streets
		accessToken: 'pk.eyJ1IjoidHJlZWJyYWluIiwiYSI6ImNpd2N4a2tjcjAxeHEyeW9iamtna2drcGMifQ.rNAIi-ocVjzPImGpnmTbyw'
	}),
	standard = L.tileLayer(layerUrl, {
		id: 'MapID',
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a> | <a href="http://www.openstreetmap.org/#map=7/45.356/-73.586">améliorez cette carte / improve this map</a>',
		user: 'treebrain',
		id: 'cj7c8azq583cw2rqibncn3bu9', //standard
		accessToken: 'pk.eyJ1IjoidHJlZWJyYWluIiwiYSI6ImNpd2N4a2tjcjAxeHEyeW9iamtna2drcGMifQ.rNAIi-ocVjzPImGpnmTbyw'
	}),
	normal = L.tileLayer(layerUrl, {
		id: 'MapID',
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a> | <a href="http://www.openstreetmap.org/#map=7/45.356/-73.586">améliorez cette carte / improve this map</a>',
		user: 'treebrain',
		id: 'cj5h12qez3r4j2rpeqpnicyz9', //AmplifierCdN
		accessToken: 'pk.eyJ1IjoidHJlZWJyYWluIiwiYSI6ImNpd2N4a2tjcjAxeHEyeW9iamtna2drcGMifQ.rNAIi-ocVjzPImGpnmTbyw'
	}),
	normal2 = L.tileLayer(layerUrl, {
		id: 'MapID',
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a> | <a href="http://www.openstreetmap.org/#map=7/45.356/-73.586">améliorez cette carte / improve this map</a>',
		user: 'mapbox',
		id: 'streets-v11', //mapbox 2021 default streets
		accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA'
	}),
	CartoDB_Positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
		subdomains: 'abcd'
	}),
	mentalmap_bw = L.imageOverlay(imageUrl_bw,
		imageBounds
	),
	mentalmap_color = L.imageOverlay(imageUrl_color,
		imageBounds
	);



var baseLayers = {
	"Fond blanc": whiteTiles
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


//load map options
let maps = {
	"Leurs yeux (Affichages photos)": {
		center:[45.592297, -73.634139],
		zoom:16,
		maxZoom:17,
		minZoom:15,
		bottomLeft:[45.57692974974479, -73.65749050375052],
		topRight:[45.608733052315095, -73.6102227495604],
		baselayer:whiteTiles,
		baseLayers:{"Fond blanc": whiteTiles},
		data:"https://raw.githubusercontent.com/maphouse/tryspaces-mtl-nord/refactor/data/data_images.geojson",
		overlays:[mentalmap_bw]
	},
	"Leurs lieux (Parcours commentés)": {
		center:[45.61469199132161, -73.62145777673409],
		zoom:15,
		maxZoom:18,
		minZoom:11,
		bottomLeft:[45.404355, -73.955570],
		topRight:[45.702860, -73.476158],
		baselayer:normal2,
		baseLayers:{
			"Satellite avec étiquettes": labels,
			"Classique": standard,
			"Normal": normal,
			"Mapbox Streets": normal2,
			"CartoDB": CartoDB_Positron
		},
		data:"https://raw.githubusercontent.com/maphouse/tryspaces-mtl-nord/refactor/data/data_sons.geojson"
	},
	"Tous": {
		center:[45.592297, -73.634139],
		zoom:13,
		maxZoom:18,
		minZoom:3,
		bottomLeft:[45.404355, -73.955570],
		topRight:[45.702860, -73.476158],
		baselayer:normal2,
		data:"data/data_all.js"
	}
}

/*add functionality to nav map dropdown

const selectDropdown = document.getElementById("mapdropdown");

selectDropdown.addEventListener("change", function(e) {
	console.log("change event fired")
    const value = e.target.value;
    launchMap(value);
});

function toggleEventListener(action, event, id, callback, ...args) {
	const element = document.getElementById(id);
	if (action == "add") {
		console.log("adding event listener")
		element.addEventListener(event, function(e){
			console.log("event listener fired: ",event,e.target)
			if (args.length > 0) {
				callback(e.target.value);
			} else
				callback();
		});
	} else if (action == "remove") {
		element.removeEventListener(event, callback);
	}
};
*/
//add options to dropdown
for (const key in maps) {
	if (maps.hasOwnProperty(key)) {
		const element = document.getElementById("mapdropdown");
		const option = document.createElement("option");
		option.value = key;
		option.text = key;
		element.appendChild(option);
	}
}

//add event listeners to dropdown, which onChange basically launches the app

const element = document.getElementById("mapdropdown");
element.addEventListener("change", function(e) {
	console.log("change event fired")
	const value = e.target.value;
	location.href = '#';
	document.getElementById('mapid').classList.remove('scroller2');
	if (!document.getElementById("splash-grid").classList.contains("hide")) {
		document.getElementById("splash-grid").classList.toggle("hide");
	}
	exitX();
	//loadjscssfile(maps[value].geojson,maps[value].geojson, "js");
	setTimeout(function(){
		loadMap(maps[value]);
		console.log('loading done')
	},100);
	loadjscssfile("functions","js/functions.js", "js");
	//fetchJsonObjectFromUrl(undefined);
	//generateLegend(p.slice(1,6));
	var timer;
	var timer_switch = 0;
});

//function adapted from http://www.javascriptkit.com/javatutors/loadjavascriptcss.shtml and https://cleverbeagle.com/blog/articles/tutorial-how-to-load-third-party-scripts-dynamically-in-javascript
function loadjscssfile(id, filename, filetype){
	
	let loaded = false;
	let existingScript = document.getElementById(id);
	if (!existingScript){
		if (filetype=="js"){ //if filename is a external JavaScript file
			console.log('loading script: ',filename)
			var fileref=document.createElement('script')
			fileref.setAttribute("type","text/javascript")
			fileref.setAttribute("src", filename)
			fileref.setAttribute("id", id)
			fileref.setAttribute("onload", "loaded=true;")
			console.log('loaded script: ',filename)
		}
		else if (filetype=="css"){ //if filename is an external CSS file
			console.log('linking stylesheet: ',filename)
			var fileref=document.createElement("link")
			fileref.setAttribute("rel", "stylesheet")
			fileref.setAttribute("type", "text/css")
			fileref.setAttribute("href", filename)
			fileref.setAttribute("id", id)
			fileref.setAttribute("onload", "loaded=true;")
			console.log('loaded stylesheet: ',filename)
		}
		if (typeof fileref!="undefined"){
			document.getElementsByTagName("head")[0].appendChild(fileref)
		}
	} else {
		console.log('script or stylesheet already loaded')
	}
	
	//existingScript = document.getElementById(id);
	//console.log(existingScript.src)
	//return existingScript.src
	
	/*
	return new Promise(function(resolve,reject) {
		//I need a condition to be met (e.g. loaded === true) for this 
		
		setTimeout(function(){
			resolve('script loaded');
		}, 1);
		
	});
	*/
}

function fetchData(url){
    //load the data
	console.log('fetching data: ',url)
    return fetch(url).then(function(response){
			console.log('response: ',response)
            return response.json();
        }).then(function(json){
            //create a Leaflet GeoJSON layer and add it to the map
			console.log('json: ',json)
			return(json)            
        }).catch(function(error) {
			console.log("error fetching data: ",error);
	});
};

function loadMap(options){
	try {
		mymap.remove()
	} catch(e) {
		console.log(e)
		console.log("no map to delete")
	} finally {
		mymap = L.map('mapid', {
			center: options.center
			,zoom: options.zoom
			,maxZoom: options.maxZoom
			,minZoom: options.minZoom
			,maxBounds: L.latLngBounds(options.bottomLeft,options.topRight)
			,maxBoundsViscosity: 0.2
			,layers: [options.baselayer]
		});
		
		fetchData(options.data).then(function(data) {
			console.log('data: ',data)
			// parse json object (var geojsonData, located in data.js) and turn into loadable layer
			geojsonLayer = L.geoJSON(data, {style: styleAll, pointToLayer: stylePoints, onEachFeature: displayFeatureProperties});
			
			//add layers to map
			geojsonLayer.addTo(mymap);// add json element to map
			var lcontrol = L.control.layers(options.baseLayers,overlays,{position:'topleft'});
			lcontrol.addTo(mymap);
			//mentalmap_color.addTo(mymap);
			if (options.overlays) {
				for (let i = 0; i < options.overlays.length; i++){
					options.overlays[i].addTo(mymap);
				}
			}
			loadFeatureIDlist(data);
			addTopListeners();
			//lcontrol.addTo(mymap);// add basemap legend
			window.geojsonData = data;
		}).catch(function(error) {
			console.log("There was an error loading the fetched data: ",error);
		});
	}
}

function resetFeatureStyles() {
	if (geojsonLayer != null){
		keys = Object.keys(geojsonLayer._layers)
		//console.log(keys)
		//open popup of zoomed feature
		for (let k in keys) {
			//console.log(keys[k])
			geojsonLayer._layers[keys[k]].setStyle({fillColor: null,fillOpacity:0});
		}
	}
}

function resetPaths(){
	let els = document.querySelectorAll(".path_tag");
	console.log("els", els)
	
	//if there was actually any .path_tag selected (only null if func is called from exitX in launchMap
	if (els.length != 0){
		for(let i = 0; i < els.length; i++){
			els[i].classList.remove('highlight');
			els[i].classList.remove('highlight2');
		}
		//highlight nav buttons
		document.querySelector(".prevPlace").classList.remove('highlight');
		document.querySelector(".nextPlace").classList.remove('highlight');
		document.querySelector(".restart").classList.remove('highlight');
		document.querySelector(".exitX").classList.remove('highlight');
		document.getElementsByTagName("body")[0].classList.remove('changeBackground');
		//document.getElementById("leftPane").classList.remove('highlight');
		//document.querySelector(".scroller").classList.remove('highlight');
		
		//show all content
		$(".contentContainer").show();
	}
	
	//reset global path var
	path = 0;
	console.log("Global path var reset to ",path)
	resetFeatureStyles()
}

//exit leftpane function
function exitX() {
	console.log("exiting pane");
	$("#mapid").animate({right:"0px", width: "100%"}, 500, 'swing');
	//document.getElementById('leftPane').classList.toggle("show");
	//$( "#leftPane").show();
	//zoom out to map extent
	
	setTimeout(function(){
		recenterMap();
	}, 700);
	//$( "#leftPane").hide();
	if (!document.getElementById("leftPane").classList.contains("hide")) {
		document.getElementById("leftPane").classList.toggle("hide");
	}
	//only if a path is highlighted/selected
	if (path != 0){
		resetPaths();
	}
	
	//reset global path var
	path = 0;
};

//this leaflet-sourced function is called after jquery map click slide from left
function recenterMap() { 
	mymap.invalidateSize({animate: true});
	console.log("map recentered");
}

//basic slider function



/*
slides.forEach(function(img){
    new Image().src = img; 
    // caches images, avoiding white flash between background replacements
});

function preloadImages(array) {
    if (!preloadImages.list) {
        preloadImages.list = [];
    }
    var list = preloadImages.list;
    for (var i = 0; i < array.length; i++) {
        var img = new Image();
        img.onload = function() {
            var index = list.indexOf(this);
            if (index !== -1) {
                // remove image from the array once it's loaded
                // for memory consumption reasons
                list.splice(index, 1);
            }
        }
        list.push(img);
        img.src = array[i];
    }
}

preloadImages(slides);
*/



function slideshow(s){
	const time = 5000
	//create fade effect
	let i=0
	
	function changePic(){
		document.getElementById("splash-item5").style.backgroundImage = "url(" + s[i] + ")"
		if (i < s.length-1) {
			i++
		} else {
			i=0
		}
		setTimeout(function(){ changePic() }, time)
	}
	changePic();
}

let slides=['imgs/cover_3.jpg', 'imgs/cover_1.jpg', 'imgs/cover_2.jpg', 'imgs/cover_4.jpg', 'imgs/cover_5.jpg', 'imgs/cover_6.jpg', 'imgs/cover_7.jpg','imgs/cover_8.jpg']
slideshow(slides);
/*

secs = 4;
slides.forEach(function(img){
    new Image().src = img; 
    // caches images, avoiding white flash between background replacements
});

function backgroundSequence() {
	window.clearTimeout();
	
	var k = 0;
	
	for (i = 0; i < slides.length; i++) {
		setTimeout(function(){ 
			document.getElementById("splash-item5").style.backgroundImage = slides[i]
			if ((k + 1) === slides.length) {
				setTimeout(function() {
					backgroundSequence()
					}, (secs * 1000))
			} else {
				k++;
			}			
		}, (secs * 1000) * i)	
	}
}
window.onload = backgroundSequence
*/