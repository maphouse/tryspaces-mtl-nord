//initialize pathways
var p = ["places","Sam","Léana","Pierre","Rayan","Liam"]
//initial pathway always equal to 0 until another is selected by user
var path = 0;

/*objects are ordered based on initial media ordering*/

var geojsonData = {
	"type": "FeatureCollection",
	"features": [
		{"type": "Feature",
		"properties": {
			"id": [2,2,,,5.5,]
			,"title":"Parc HB"
			,"_items": [
				{
					"media": "imgs/IMG_20190508_232246_068.jpg"
					,"path": p[1]
					,"caption": "Capture écran d'un affichage Instagram"
				}
				,{
					"media": "imgs/Screenshot_20190522-084021.png"
					,"path": p[1]
					,"caption": "Capture écran d'un affichage Instagram"
				}
				,{
					"media": "imgs/Screenshot_20190522-084535.png"
					,"path": p[1]
					,"caption": "Capture écran d'un affichage Instagram"
				}
				,{
					"media": "imgs/Screenshot_20190522-084138.png"
					,"path": p[1]
					,"caption": "Capture écran d'un affichage Instagram"
				}
				,{
					"media": "imgs/Screenshot_20190522-083953.png"
					,"path": p[4]
					,"caption": "Capture écran d'un affichage Instagram"
				}
			]
		},
		"geometry": {
			"type": "MultiPolygon",
			"coordinates": [ [ [ [ -73.642779399432996, 45.589469920227252 ], [ -73.642955573949109, 45.589350568777654 ], [ -73.646203557315459, 45.589324337655817 ], [ -73.646139927122775, 45.590183633844617 ], [ -73.648218319068988, 45.590231927345741 ], [ -73.647965302476678, 45.596676441253635 ], [ -73.647597959868591, 45.596833807184098 ], [ -73.642700683159831, 45.596726273846016 ], [ -73.642492647295043, 45.596613494757882 ], [ -73.642779399432996, 45.589469920227252 ] ] ] ]
			}
		},
		{"type": "Feature",
		"properties": {
			"id": [5,3,,,,]
			,"title": "Centre commercial"
			,"_items": [
				{
					"media": "imgs/Screenshot_20190515-123046.png"
					,"path": p[1]
				}
			]
			},
		"geometry": {
			"type": "MultiPolygon",
			"coordinates": [ [ [ [ -73.636449594499595, 45.586613225180841 ], [ -73.636142601034265, 45.586739927505398 ], [ -73.624528014929325, 45.586522329858767 ], [ -73.624189534954724, 45.586279941613739 ], [ -73.624102947054283, 45.583161854044782 ], [ -73.636579476350278, 45.58316460861554 ], [ -73.636449594499595, 45.586613225180841 ] ] ] ]
			}
		},
	
		{"type": "Feature",
		"properties": {
			"id": [7,,,,4,9.1]
			,"title": "Librairie Racines"
			,"_items": [
				{
					"media": "imgs/IMG_20190504_214217_434.jpg"
					,"path": p[5]
				}
			]
		},
		"geometry": {
			"type": "MultiPolygon",
			"coordinates": [ [ [ [ -73.634278993267216, 45.596230771079995 ], [ -73.631153957222722, 45.596236278938754 ], [ -73.63109885583151, 45.59619772391607 ], [ -73.631083112576874, 45.594559110965214 ], [ -73.634349837913064, 45.59459215909412 ], [ -73.634336062565268, 45.596161922799858 ], [ -73.634278993267216, 45.596230771079995 ] ] ] ]
			}
		},
		{"type": "Feature",
		"properties": {
			"id": [8,,,,2,]
			,"title": "Rue Pascale"
			,"_items": [
				{
					"media": "imgs/Screenshot_20190522-083932.png"
					,"path": p[4]
					,"description":""
				}
				,{
					"media": "imgs/Screenshot_20190522-083944.png"
					,"path": p[4]
					,"description":""
				}
			]
		},
		"geometry": {
			"type": "MultiPolygon",
			"coordinates": [ [ [ [ -73.651012746766213, 45.587282207195621 ], [ -73.651013683864861, 45.588408863824142 ], [ -73.650117135618245, 45.588515149943056 ], [ -73.649659027833408, 45.588558866311189 ], [ -73.648774046885464, 45.588493291746225 ], [ -73.648367996803486, 45.588471433540875 ], [ -73.64796194672148, 45.588500577812788 ], [ -73.646223219447293, 45.588551580252201 ], [ -73.646208242808072, 45.589237774866859 ], [ -73.642758783266316, 45.589235151749946 ], [ -73.642320221172994, 45.589220724604772 ], [ -73.636489594368157, 45.589145965702272 ], [ -73.634233061204242, 45.588745938304029 ], [ -73.625394348246473, 45.58859641913471 ], [ -73.623656967645999, 45.588553137195568 ], [ -73.621942077409258, 45.588561006641541 ], [ -73.621677815635081, 45.588785285387644 ], [ -73.617811803508161, 45.588976376551507 ], [ -73.616368069883279, 45.588976376551507 ], [ -73.616283876726598, 45.588975462569664 ], [ -73.616283876726612, 45.588509855223073 ], [ -73.623064721400297, 45.586159462844527 ], [ -73.624489111105092, 45.586691982240538 ], [ -73.636289055291257, 45.586928072967289 ], [ -73.637451057418843, 45.586849376168708 ], [ -73.639651364673398, 45.586872985219863 ], [ -73.639917500644557, 45.586691982240545 ], [ -73.640322327192237, 45.585960094677382 ], [ -73.643036164419286, 45.587266467944005 ], [ -73.651012746766213, 45.587282207195621 ] ] ] ]
			}
		},
		
		{"type": "Feature",
		"properties": {
			"id": [9,,,9,,]
			,"title": "Bibliothèque de Montréal-Nord"
			
			,"_items": [
				{
					"media": "imgs/Screenshot_20190522-084437.png"
					,"path": p[3]
					,"description":"de la créativité dans le nord"
					,"caption":"Capture d'écran d'un affichage Instagram"
				}
			]
		},
		"geometry": {
			"type": "MultiPolygon",
			"coordinates": [ [ [ [ -73.626651386397924, 45.591466270768173 ], [ -73.625439155791227, 45.591444237457218 ], [ -73.625510000437075, 45.589229845588427 ], [ -73.626737974298393, 45.589229845588427 ], [ -73.626651386397924, 45.591466270768173 ] ] ] ],
			}
		}
		,{"type": "Feature",
		"properties": {
			"id": [3,,17,,7,]
			,"title": "Cégep Marie-Victorin"
			,"_items": [
				{
					"media": "imgs/IMG_20190504_214150_660.jpg"
					,"path": p[2]
				}
				,{
					"media": "imgs/IMG_20190504_214157_508.jpg"
					,"path": p[2]
				}
				,{
					"media": ["imgs/Screenshot_20190528-120742.png","imgs/Screenshot_20190528-120758.png"]
					,"path": p[4]
				}
			]
		},
		"geometry": {
			"type": "MultiPolygon",
			"coordinates": [ [ [ [ -73.632523620375764, 45.593454741465841 ], [ -73.63247639061187, 45.592545892409376 ], [ -73.63174432927147, 45.59251835129912 ], [ -73.631791559035364, 45.593454741465841 ], [ -73.63015426055361, 45.593460249597065 ], [ -73.62825719837042, 45.591675586790885 ], [ -73.628162738842647, 45.589180268651191 ], [ -73.633995614683897, 45.589279422481837 ], [ -73.633948384919947, 45.593366611292659 ], [ -73.633806695628252, 45.593468511792913 ], [ -73.632523620375764, 45.593454741465841 ] ] ] ]
			}
		}
		,{"type": "Feature",
		"properties": {
			"id": [1,1,1,1,1,]
			,"title": "Maison culturelle et communautaire (MCC)"
			,"intro":""
			,"_items": [
				{
					"media": "imgs/IMG_20190504_214154_165.jpg"
					,"path": p[2]
					,"description": "Hier après-midi, pause lecture en compagnie de Célia"
					,"caption": "Capture d'écran d'un story Instagram"
				}
				,{
					"media": "imgs/Screenshot_20190528-120202.png"
					,"path": p[3]
					,"description": "Ma cousine qui avait performé une dance chorégraphique"
					,"caption": "Capture d'écran d'un affichage Instagram"
				}
				,{
					"media": "imgs/IMG_20190514_111843_264.jpg"
					,"path": p[4]
					,"caption": "Capture d'écran d'un story Instagram"
				}
				,{
					"media": "imgs/Screenshot_20190528-121005.png"
					,"path": p[1]
					,"description": ""
					,"caption": "Capture d'écran d'un affichage Instagram"
				}
				,{
					"media": "imgs/Screenshot_20190515-123115.png"
					,"path": p[1]
					,"caption": "Capture d'écran d'un affichage Instagram"
				}
				,{
					"media": ["imgs/Screenshot_20190528-120934.png","imgs/Screenshot_20190528-120927.png"]
					,"path": p[4]
					,"description": "la bibliothèque c'est l'endroit où je me sens le plus en sécurité"
					,"caption": "Capture d'écran d'un affichage Instagram"
				}
				,{
					"media": ["imgs/Screenshot_20190528-121214.png","imgs/Screenshot_20190528-121233.png","imgs/Screenshot_20190528-121226.png"]
					,"path": p[4]
					,"caption": "Capture d'écran d'un affichage Instagram"
				}
				,{
					"media": "imgs/IMG_20190522_083748_325.jpg"
					,"path": p[4]
					,"caption": ""
				}
			]
		},
		"geometry": {
			"type": "Polygon",
			"coordinates": [[[ -73.641642536646629, 45.596153442331698 ], [ -73.63722877583173, 45.596128980082092 ], [ -73.63727247643385, 45.595572461022563 ], [ -73.638574754377245, 45.594918085398014 ], [ -73.638583494497681, 45.592930449097146 ], [ -73.637307436915563, 45.592912101357221 ], [ -73.637246256072572, 45.589664456899747 ], [ -73.637386097999382, 45.589523782554672 ], [ -73.64197466122279, 45.589603294184336 ], [ -73.641642536646629, 45.596153442331698 ]]]
			}
		}
		,{"type": "Feature",
		"properties": {
			"id": [13,,12,,,5.1]
			,"title": "BANQ"
			,"_items": [
				{
					"media": "imgs/IMG_20190504_214203_730.jpg"
					,"path": p[2]
					,"description": "à la BANQ"
				}
				,{
					"media": "imgs/IMG_20190504_214206_564.jpg"
					,"path": p[2]
					,"description": ""
					,"caption": "Capture d'écran d'un story Instagram"
				}
				,{
					"media": "imgs/Screenshot_20190602-144247.png"
					,"path": p[5]
					,"description": ""
					,"caption": "Capture d'écran d'un story Instagram"
				}
			]
		},
		"geometry": {
			"type": "Polygon",
			"coordinates": [[[ -73.644133470967901, 45.586691871839811 ], [ -73.64328567928662, 45.586704105022712 ], [ -73.640890886290023, 45.585603107883884 ], [ -73.640873406049181, 45.584581607893966 ], [ -73.644185911690442, 45.584642776081225 ], [ -73.644133470967901, 45.586691871839811 ]]]
			}
		}
		,{"type": "Feature",
		"properties": {
			"id": [4,,,2,,]
			,"title": "École HB"
			,"_items": [
				{
					"media": "imgs/Screenshot_20190607-131601.png"
					,"path": p[3]
					,"description": "nouveau projet de réaménagement de l'école HB et du parc Hb"
				}
				,{
					"media": ["imgs/Screenshot_20190528-120607.png","imgs/Screenshot_20190528-120638.png"]
					,"path": p[5]
				}
				,{
					"media": "imgs/Screenshot_20190528-120645.png"
					,"path": p[5]
				}
				,{
					"media": "imgs/Screenshot_20190522-084359.png"
					,"path": p[5]
				}
				,{
					"media": "imgs/Screenshot_20190528-120624.png"
					,"path": p[5]
				}
				,{
					"media": "imgs/IMG_20190514_111508_302.jpg"
					,"path": p[5]
				}
			]
		},
		"geometry": {
			"type": "Polygon",
			"coordinates": [[[ -73.646139927122775, 45.590183633844617 ], [ -73.646244042528409, 45.588770161610512 ], [ -73.646223219447293, 45.588551580252201 ], [ -73.64796194672148, 45.588500577812788 ], [ -73.648367996803486, 45.588471433540875 ], [ -73.648774046885464, 45.588493291746225 ], [ -73.649659027833408, 45.588558866311189 ], [ -73.650117135618245, 45.588515149943056 ], [ -73.650163369979282, 45.59027635856215 ], [ -73.646139927122775, 45.590183633844617 ]]]
			}
		}
		,{"type": "Feature",
		"properties": {
			"id": [18,4,,,,,]
			,"title": "Soccer"
			,"_items":[
				{
					"media": "imgs/Screenshot_20190528-121114.png"
					,"path": p[1]
					,"caption": "Capture écran d'un affichage Instagram"
				}
			]
		},
		"geometry": {
			"type": "Polygon",
			"coordinates": [ [ [ -73.643087379828415, 45.5943974719872 ], [ -73.643341314602651, 45.591868798131088 ], [ -73.647550771821457, 45.591957645359955 ], [ -73.647433571156427, 45.594486315212976 ], [ -73.646515499280412, 45.594452144758165 ], [ -73.646173664007421, 45.594493149301435 ], [ -73.643087379828415, 45.5943974719872 ] ] ]
			}
		}
		,{"type": "Feature",
		"properties": {
			"id": [20,5,10.5,3,,]
			,"title": "Station Henri-Bourassa"
			,"_items": [
				{
					"media": "imgs/IMG_20190504_214200_407.jpg"
					,"path": p[2]
					,"description": "en route vers la BANQ"
					,"caption": "Capture d'écran d'un story Instagram"
				}
				,{
					"media": "imgs/IMG_20190508_151936_474.jpg"
					,"path": p[1]
					,"caption": "Capture écran d'un affichage Instagram"
				}
				,{
					"media": "imgs/Screenshot_20190528-120843.png"
					,"path": p[3]
					,"description": "STM"
					,"caption": "Capture d'écran d'un affichage Instagram"
				}
			]
		},
		"geometry": {
			"type": "Polygon",
			"coordinates": [ [ [ -73.651017958161773, 45.599461311379777 ], [ -73.646681533555849, 45.599345142048399 ], [ -73.646662000111689, 45.597896421949407 ], [ -73.646828034387141, 45.597698245065324 ], [ -73.647052668995101, 45.597609406924576 ], [ -73.647951207426956, 45.597547903513963 ], [ -73.649416215739762, 45.597527402362111 ], [ -73.651027724883861, 45.597506901202784 ], [ -73.651017958161773, 45.599461311379777 ] ] ]
			}
		}
		,{"type": "Feature",
		"properties": {
			"id": [21,,,,4,]
			,"title": "McDonald"
			,"_items": [
				{
					"media": "imgs/IMG_20190518_171348_673.jpg"
					,"path": p[4]
					,"caption": "Capture d'écran d'un affichage Instagram"
				}
			]
		},
		"geometry": {
			"type": "Polygon",
			"coordinates": [ [ [ -73.635581653905788, 45.586493279122415 ], [ -73.633183923633823, 45.586506949245141 ], [ -73.633159506828619, 45.585098909117264 ], [ -73.635581653905788, 45.585112579579544 ], [ -73.635610954072035, 45.586267721616842 ], [ -73.635581653905788, 45.586493279122415 ] ] ]
			}
		}
		,{"type": "Feature",
		"properties": {
			"id": [22,3.2,,,,]
			,"title": "Allo Mon Coco"
			,"_items": [
				{
					"media": ["imgs/Screenshot_20190602-144500.png","imgs/Screenshot_20190602-144407.png","imgs/Screenshot_20190602-144421.png"]
					,"path": p[1]
					,"description": "Date"
					,"caption": "Capture d'écran d'un affichage Instagram"
				}
			]
		},
		"geometry": {
			"type": "Polygon",
			"coordinates": [ [ [ -73.629221076147672, 45.585375735329649 ], [ -73.628429971658747, 45.584452975979644 ], [ -73.62968011208568, 45.583735263776596 ], [ -73.630847235374887, 45.584511076089861 ], [ -73.629221076147672, 45.585375735329649 ] ] ]
			}
		}
		,{"type": "Feature",
		"properties": {
			"id": [26,3.3,,,,]
			,"title": "Cinéma Guzzo"
			,"_items": [
				{
					"media": "imgs/Screenshot_20190522-084554.png"
					,"path": p[1]
					,"caption": "Capture d'écran d'un affichage Instagram"
				}
				,{
					"media": "imgs/Screenshot_20190522-084547.png"
					,"path": p[1]
					,"caption": "Capture d'écran d'un affichage Instagram"
				}
			]
		},
		"geometry": {
			"type": "Polygon",
			"coordinates": [ [ [ -73.627443532728137, 45.58602780945715 ], [ -73.627443532728137, 45.58602780945715 ], [ -73.627346109675329, 45.586074459124049 ], [ -73.626218053274471, 45.586034986331491 ], [ -73.626156522925314, 45.585948863778661 ], [ -73.626151395396221, 45.584387869608214 ], [ -73.627499935548173, 45.584452463331345 ], [ -73.627443532728137, 45.58602780945715 ] ] ]
			}
		}
		,{"type": "Feature",
		"properties": {
			"id": [33,,,4]
			,"title": "École Louis Fréchette"
			,"_items": [
				{
					"media": "imgs/Screenshot_20190522-084635.png"
					,"path": p[3]
					,"caption": "Capture d'écran d'un story Instagram"
				}
				,{
					"media": "imgs/Screenshot_20190607-131611.png"
					,"path": p[3]
					,"caption": "Capture d'écran d'un story Instagram"
				}
				,{
					"media": "imgs/Screenshot_20190522-084639.png"
					,"path": p[3]
					,"caption": "Capture d'écran d'un story Instagram"
				}
				,{
					"media": "imgs/Screenshot_20190522-084608.png"
					,"path": p[3]
					,"caption": "Capture d'écran d'un story Instagram"
				}
				,{
					"media": "imgs/Screenshot_20190528-120456.png"
					,"path": p[3]
					,"caption": "Capture d'écran d'un story Instagram"
				}
				,{
					"media": "imgs/VID_121430907_073700_562.mp4"
					,"path": p[3]
					,"caption": "Capture d'écran d'un story Instagram"
				}
				,{
					"media": "imgs/VID_121431014_230436_980.mp4"
					,"path": p[3]
					,"caption": "Capture d'écran d'un story Instagram"
				}
				,{
					"media": "imgs/VID_121430802_110759_268.mp4"
					,"path": p[3]
					,"caption": "Capture d'écran d'un story Instagram"
				}
			]
		},
		"geometry": {
			"type": "Polygon",
			"coordinates": [ [ [ -73.628643276208237, 45.593435234080978 ], [ -73.628053288909612, 45.59340609237136 ], [ -73.627428596475781, 45.593338094990081 ], [ -73.627137073339981, 45.593357522821705 ], [ -73.626463793716837, 45.593512945232632 ], [ -73.626116742364715, 45.593503231344563 ], [ -73.625811337174824, 45.593333238031114 ], [ -73.625561460201297, 45.59308553256686 ], [ -73.625498990957908, 45.592915537988183 ], [ -73.625519814039038, 45.592706686800902 ], [ -73.625582283282426, 45.592575547286081 ], [ -73.626061214148379, 45.592152984542743 ], [ -73.626505439879097, 45.591822703401725 ], [ -73.626748375825585, 45.59171584732232 ], [ -73.627026016907308, 45.59167213341302 ], [ -73.627359186205354, 45.591686704719898 ], [ -73.627657650368178, 45.59171584732232 ], [ -73.627851999125369, 45.591812989221097 ], [ -73.628219873558635, 45.592099556842889 ], [ -73.628726568532755, 45.592366694833572 ], [ -73.628851507019505, 45.592449264500722 ], [ -73.629143030155305, 45.592818397997746 ], [ -73.629226322479823, 45.593100103506785 ], [ -73.629191617344603, 45.593299239306639 ], [ -73.629087501938969, 45.593376950646608 ], [ -73.628802919830207, 45.59338666455654 ], [ -73.628643276208237, 45.593435234080978 ] ] ]
			}
		}
		,{"type": "Feature",
		"properties": {
			"id": [31,,,,,3]
			,"title": "Parc Carignan"
			,"_items": [
				{
					"media": "imgs/IMG_20190506_204556_766.jpg"
					,"path": p[5]
					,"caption": "Capture écran d'un affichage Instagram"
				}
			]
			,"place_type": "park"
		},
		"geometry": {
			"type": "Polygon",
			"coordinates": [ [ [ -73.634911023627765, 45.599860611516029 ], [ -73.630857463834843, 45.599889749873853 ], [ -73.630357709887789, 45.599661498999211 ], [ -73.624568893334214, 45.597417792042584 ], [ -73.624568893334214, 45.596805856392443 ], [ -73.62576274998554, 45.596815569708859 ], [ -73.626318032148973, 45.596873849572006 ], [ -73.627248129772681, 45.596834996336632 ], [ -73.628067170963718, 45.596893276179607 ], [ -73.629733017453944, 45.596932129374636 ], [ -73.630614527888369, 45.596941842669203 ], [ -73.630871345888949, 45.596893276179621 ], [ -73.631759797350412, 45.596898132830475 ], [ -73.632773187298625, 45.596951555962072 ], [ -73.634897141573688, 45.596970982542764 ], [ -73.634904082600727, 45.597170104607152 ], [ -73.63489020054665, 45.597548920242275 ], [ -73.634938787735933, 45.598126851989349 ], [ -73.634931846708909, 45.599302123399873 ], [ -73.634911023627765, 45.599695493869184 ], [ -73.634911023627765, 45.599860611516029 ] ] ]
			}
		}
		,{"type": "Feature",
		"properties": {
			"id": [32,,11,,,]
			,"title": "Centre-Ville"
			,"_items": [
				{
					"media": "imgs/IMG_20190514_111849_920.jpg"
					,"path": p[2]
					,"description": "Date"
					,"caption": "Capture d'écran d'un story Instagram"
					,"lieu":"Quartier des Spectacles"
				}
				,{
					"media": "imgs/IMG_20190514_111913_295.jpg"
					,"path": p[2]
					,"description": "Happy"
					,"caption": "Capture d'écran d'un story Instagram"
				}
			]
		},
		"geometry": {
			"type": "MultiPolygon",
			"coordinates": [
				[
					[ [ -73.650400086010677, 45.586764717057143 ], [ -73.647739475977815, 45.5867867522051 ], [ -73.647833935505616, 45.583867019744794 ], [ -73.650407957637995, 45.583839474375878 ], [ -73.650400086010677, 45.586764717057143 ] ]
				],
				[
					[ [ -73.646664998849147, 45.586450715258898 ], [ -73.644437328318702, 45.586445206439734 ], [ -73.644539659473807, 45.584599721596895 ], [ -73.646869661159386, 45.584643793583844 ], [ -73.646664998849147, 45.586450715258898 ] ]
				],
				[
					[ [ -73.647546621108575, 45.584957805489374 ], [ -73.647192397879337, 45.584968823419082 ], [ -73.647200269506655, 45.584373852120734 ], [ -73.647546621108575, 45.584379361143156 ], [ -73.647546621108575, 45.584957805489374 ] ]
				],
				[
					[ [ -73.64733408717106, 45.583167363186092 ], [ -73.64731834391641, 45.58376785635344 ], [ -73.644421585064094, 45.583789892677771 ], [ -73.644421585064094, 45.583172872326912 ], [ -73.64733408717106, 45.583167363186092 ] ]
				]
			]
			}
		}
		,{"type": "Feature",
		"properties": {
			"id": [41,7,,6,,8]
			,"title": "La rue"
			,"_items": [
				{
					"media": "imgs/Screenshot_20190522-084120.png"
					,"path": p[1]
					,"caption": "Capture écran d'un affichage Instagram"
				}
				,{
					"media": "imgs/IMG_20190528_121528_172.jpg"
					,"path": p[5]
					,"caption": "Capture écran d'un affichage Instagram"
				}
				,{
					"media": "imgs/Screenshot_20190515-123051.png"
					,"path": p[1]
					,"caption": "Capture écran d'un affichage Instagram"
				}
				,{
					"media": "imgs/Screenshot_20190522-084255.png"
					,"path": p[5]
					,"caption": "Capture écran d'un affichage Instagram"
					,"themes":[]
				}
				,{
					"media": "imgs/Screenshot_20190522-084253.png"
					,"path": p[5]
					,"caption": "Capture écran d'un affichage Instagram"
				}
				,{
					"media": "imgs/Screenshot_20190528-121044.png"
					,"path": p[1]
					,"caption": "Capture écran d'un affichage Instagram"
				}
				,{
					"media": "imgs/Screenshot_20190528-121032.png"
					,"path": p[1]
					,"caption": "Capture écran d'un affichage Instagram"
				}
				,{
					"media": "imgs/Screenshot_20190528-121256.png"
					,"path": p[1]
					,"caption": "Capture écran d'un affichage Instagram"
				}
				,{
					"media": "imgs/Screenshot_20190528-121320.png"
					,"path": p[1]
					,"caption": "Capture écran d'un affichage Instagram"
				}
				,{
					"media": "imgs/Screenshot_20190528-121327.png"
					,"path": p[1]
					,"caption": "Capture écran d'un affichage Instagram"
				}
				,{
					"media": "imgs/Screenshot_20190528-121356.png"
					,"path": p[1]
					,"caption": "Capture écran d'un affichage Instagram"
				}
				,{
					"media": "imgs/Screenshot_20190528-121303.png"
					,"path": p[1]
					,"caption": "Capture écran d'un affichage Instagram"
				}
				,{
					"media": "imgs/Screenshot_20190522-084423.png"
					,"path": p[3]
					,"caption": "Capture écran d'un affichage Instagram"
					,"description":"C'est un espace public, mais j'y vais pas"
				}
				,{
					"media": "imgs/Screenshot_20190528-120855.png"
					,"path": p[3]
					,"caption": "Capture écran d'un affichage Instagram"
					,"lieu":"Rue Langelier"
				}
				,{
					"media": "imgs/IMG_20190522_083745_523.jpg"
					,"path": p[4]
				}
				,{
					"media": "imgs/Screenshot_20190522-084335.png"
					,"path": p[5]
					,"description":"journée du drapeau haitien, plein de jeunes, c'est stimulant"
				}
				,{
					"media": "imgs/Screenshot_20190522-084346.png"
					,"path": p[5]
					,"description": "fête du drapeau, avec mes amis"
					,"caption": "Capture d'écran d'un affichage Instagram"
				}
			]
		},
		"geometry": {
			"type": "MultiPolygon",
			"coordinates": [ [ [ [ -73.637049042166936, 45.596816759229704 ], [ -73.635101751504692, 45.596975436144284 ], [ -73.634768144442248, 45.596770860864957 ], [ -73.634472021319411, 45.596317120724926 ], [ -73.634591969926134, 45.596238437090356 ], [ -73.634561982774457, 45.594557203735704 ], [ -73.634352072712687, 45.593812304213124 ], [ -73.634442034167733, 45.58886266790504 ], [ -73.634233061204242, 45.588745938304029 ], [ -73.636489594368157, 45.589145965702272 ], [ -73.636241263268545, 45.589371553666432 ], [ -73.636083830722228, 45.59596566630308 ], [ -73.637049042166936, 45.596816759229704 ] ] ] ]
			}
		}
		,{"type": "Feature",
		"properties": {
			"id": [43,,,7,,]
			,"title": "Boulevard Gouin"
			,"place_type": "street"
			,"_items": [
				{
					"media": "imgs/VID_19931020_005937_355.mp4"
					,"path": p[3]
					,"caption": "Clip vidéo d'un story Instagram"
				}
			]
		},
		"geometry": {
			"type": "MultiPolygon",
			"coordinates": [ [ [ [ -73.651019306456163, 45.600122654134516 ], [ -73.629915848461209, 45.600217067946922 ], [ -73.626377364562984, 45.59887427878823 ], [ -73.625342807830023, 45.598549067205035 ], [ -73.623318675091596, 45.59778323893466 ], [ -73.62076976719878, 45.597048873242208 ], [ -73.620005094830944, 45.596818070611093 ], [ -73.618168381790525, 45.596298761220133 ], [ -73.616369152689714, 45.595952552289567 ], [ -73.616369152689742, 45.59563781504464 ], [ -73.621054645139779, 45.596881016877376 ], [ -73.626362370987181, 45.598685446485547 ], [ -73.629990816340481, 45.600101673265748 ], [ -73.639001955420383, 45.600017749712208 ], [ -73.647638255104312, 45.599986278347259 ], [ -73.651019306456249, 45.599975787888361 ], [ -73.651019306456163, 45.600122654134516 ] ] ] ]
			}
		}
		,{"type": "Feature",
		"properties": {
			"id": [44,6,9.9,,,]
			,"title": "Rue anonyme"
			,"_items": [
				{
					"media": "imgs/IMG_20190504_214146_301.jpg"
					,"path": p[2]
					,"description": "en marchant vers l'arret de bus"
					,"caption": "Capture d'écran d'un story Instagram"
				}
				,{
					"media": "imgs/Screenshot_20190515-123041.png"
					,"path": p[1]
					,"caption": "Capture écran d'un affichage Instagram"
				}
				,{
					"media": "imgs/IMG_20190504_214238_327.jpg"
					,"path": p[2]
					,"description": "j'attends le bus, je suis fatiguée"
					,"caption": "Capture d'écran d'un story Instagram"
				}
				,{
					"media": "imgs/IMG_20190508_131839_076.jpg"
					,"path": p[1]
					,"caption": "Capture écran d'un affichage Instagram"
				}
				,{
					"media": "imgs/IMG_20190522_083752_078.jpg"
					,"path": p[1]
					,"caption": "Capture écran d'un affichage Instagram"
				}
				,{
					"media": "imgs/IMG_20190518_171404_195.jpg"
					,"path": p[1]
					,"caption": "Capture écran d'un affichage Instagram"
				}
			]
		},
		"geometry": {
			"type": "MultiPolygon",
			"coordinates": [ [ [ [ -73.650117135618245, 45.588515149943056 ], [ -73.651013683864861, 45.588408863824142 ], [ -73.651019306456277, 45.597463266493037 ], [ -73.648091810773494, 45.597479002885279 ], [ -73.648106804349325, 45.596791842979322 ], [ -73.648532247063798, 45.59024110809154 ], [ -73.650163369979282, 45.59027635856215 ], [ -73.650117135618245, 45.588515149943056 ] ] ] ]
			}
		}
		,{"type": "Feature",
		"properties": {
			"id": [45,,,,,100]
			,"title": "Ruelle"
			,"place_type": "street"
			,"_items": [
				{
					"media": "imgs/Screenshot_20190522-084204.png"
					,"path": p[5]
					,"description":"ruelle réaménagée dans le nord-est"
				}
			]
		},
		"geometry": {
			"type": "MultiPolygon",
			"coordinates": [ [ [ [ -73.642758783266316, 45.589235151749946 ], [ -73.642624778182793, 45.589351880333652 ], [ -73.642654765334498, 45.590338161595881 ], [ -73.642557307091536, 45.590883756550795 ], [ -73.642609784606975, 45.591455576340174 ], [ -73.642594791031144, 45.591828042977909 ], [ -73.642519823151957, 45.592148047551682 ], [ -73.642497332788196, 45.592583460680743 ], [ -73.64255730709155, 45.592814280728525 ], [ -73.642497332788196, 45.593118542068339 ], [ -73.642512326364027, 45.593443785124727 ], [ -73.64248233921235, 45.594104757141324 ], [ -73.642444855272757, 45.594330325174823 ], [ -73.642489836000266, 45.594854898490944 ], [ -73.64240362293917, 45.595237833915405 ], [ -73.642377384181458, 45.595578801614714 ], [ -73.64240737133315, 45.595956486493989 ], [ -73.642377384181458, 45.596639722473228 ], [ -73.642662262122442, 45.596841675469243 ], [ -73.641998796391505, 45.596852166514118 ], [ -73.642103751422383, 45.596715782777835 ], [ -73.642139361165022, 45.595573555973495 ], [ -73.64218809028651, 45.593519849761137 ], [ -73.642300542105289, 45.591211635582937 ], [ -73.642368013196574, 45.589845023131133 ], [ -73.642401748742216, 45.589349257222082 ], [ -73.642320221172994, 45.589220724604772 ], [ -73.642758783266316, 45.589235151749946 ] ] ] ]
			}
		}
		,{"type": "Feature",
		"properties": {
			"id": [49,6.5,13,8,15,5]
			,"title": "Chez soi"
			
			,"_items": [
				{
					"media": "imgs/IMG_20190522_083725_272.jpg"
					,"path": p[2]
					,"description": "décompresser"
					,"caption": "Capture d'écran d'un story Instagram"
				}
				,{
					"media": "imgs/IMG_20190506_204552_784.jpg"
					,"path": p[5]
				}
				,{
					"media": "imgs/IMG_20190510_151621_129.jpg"
					,"path": p[3]
				}
				,{
					"media": "imgs/VID_104240219_161920_007.mp4"
					,"path": p[1]
				}
				,{
					"media": "imgs/IMG_20190522_083810_831.jpg"
					,"path": p[1]
				}
				,{
					"media": "imgs/VID_77590716_030041_004.mp4"
					,"path": p[2]
					,"caption": "Capture d'écran d'un story Instagram"
				}
				,{
					"media": "imgs/Screenshot_20190506-204530.png"
					,"path": p[5]
				}
				,{
					"media": "imgs/VID_65380126_133215_941.mp4"
					,"path": p[5]
				}
				,{
					"media": "imgs/IMG_20190514_112052_377.jpg"
					,"path": p[4]
				}
				,{
					"media": "imgs/IMG_20190514_112057_223.jpg"
					,"path": p[4]
				}
				,{
					"media": "imgs/IMG_20190514_112054_962.jpg"
					,"path": p[4]
				}
				,{
					"media": "imgs/IMG_20190510_151642_438.jpg"
					,"path": p[3]
					,"caption": "Capture d'écran d'un story Instagram"
				}
				,{
					"media": "imgs/VID_19940913_051756_410.mp4"
					,"path": p[3]
					,"caption": "Capture d'écran d'un story Instagram"
				}
			]
		},
		"geometry": {
			"type": "MultiPolygon",
			"coordinates": [ [ [ [ -73.639706318806958, 45.599046156844651 ], [ -73.639567628230424, 45.599124836542202 ], [ -73.63939145371431, 45.599182534916956 ], [ -73.639211530804246, 45.599221874683906 ], [ -73.639005369136427, 45.599237610582961 ], [ -73.63883669140823, 45.599216629383243 ], [ -73.638593045800832, 45.599166799002454 ], [ -73.638394380920943, 45.599101232644514 ], [ -73.638225703192759, 45.599009439614704 ], [ -73.638094509404141, 45.598912401105608 ], [ -73.637989554373277, 45.598781267718586 ], [ -73.637925831675958, 45.598602925820408 ], [ -73.637895844524266, 45.598435074104323 ], [ -73.637910838100112, 45.598243617627674 ], [ -73.638012044737039, 45.598065274020648 ], [ -73.638218206404829, 45.597897420696221 ], [ -73.638518077921617, 45.597747925906425 ], [ -73.63883669140823, 45.597663998832324 ], [ -73.639091582197509, 45.597661376109237 ], [ -73.63939520210829, 45.597711207826954 ], [ -73.639691325231112, 45.597834475570124 ], [ -73.639871248141205, 45.597944629494471 ], [ -73.639991196747914, 45.598070519428944 ], [ -73.640118642142568, 45.59830393960177 ], [ -73.640129887324434, 45.598484905134946 ], [ -73.640051171051283, 45.598707832887982 ], [ -73.639934970838524, 45.598878306454466 ], [ -73.63981127383785, 45.59897272236072 ], [ -73.639706318806958, 45.599046156844651 ] ] ] ]
			}
		}
	]
};
//when including html in JSON, change all double-quotations to single-quotes, here is an online tool for doing this: https://jsfiddle.net/Mottie/ZAHPg/
//polygons require extra square brackets around coordinate field

//to add: contextualizing data, such as a polygon representing the CdN-NdG borough and other contextualizing geo-features
