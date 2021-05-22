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
			"id": [9,2,4,,3,2]
			,"title":"Parc HB"
			,"_items": [
				{
					"media": "content/02-8-Parc HB.mp3"
					,"path": p[2]
					,"description": "« Je ne venais pas ici toute seule, parce que je me sentais surveillée, et c’était bizarre comme ambiance, puisque tu savais qu’il y avait des gens après l’école qui dealaient dans cet endroit-là, ce n’était pas que je traversais, surtout pas seule [...] Des fois je vais rentrer dans cette partie du parc, mais je vais faire un détour pour les éviter »"
				}
				,{
					"media": "content/02-9-Parc HB.mp3"
					,"path": p[2]
					,"description": "[transcription à refaire]"
				}
				,{
					"media": "content/02-10-Parc HB.mp3"
					,"path": p[2]
					,"description": "« Je me sens bien en ce moment, il y a beaucoup d’activités parce que c’est l’été. C’est un endroit que j’aime plus fréquenter [...]»"
				}
				,{
					"media": "content/01-vocal-13_2.m4a"
					,"path": p[1]
					,"description": "« Là on est sur la place de l’espoir qui est en fait supposée s’appeler la place Freddy. [pourquoi c’est pas le cas ?] heuu.. beaucoup de problèmes…Les personnes concernées à la ville, puis surtout les autorités, pensaient que c’était une façon de se battre passif agressivement genre.. pis il y a eu beaucoup de choses,  beaucoup de débats, pis à la fin ils ont fait une sorte de compromis. Sauf, je pense que c’est un compromis dans lequel les gens qui voulaient appeler la place Freddy, ont perdu. À la fin ça s’est appelé la place de l’espoir pis tout ça »."
					,"caption": ""
				}
				,{
					"media": "content/01-vocal-13_4.m4a"
					,"path": p[1]
					,"description": "« Juste que c’est une des histoires qu’on connaît le plus à Montréal-Nord et aussi à l’extérieur de Montréal-Nord. Quand Freddy s’est fait tiré dessus justement par la police. Pis... c’est un des trucs que les jeunes vont se souvenir toujours, qu’il faut toujours faire attention avec l’autorité, pis tout ça vu qu’ils sont partout. Pis avec le fait que certains jeunes ont subi du profilage et d’autres trucs comme ça. C’est un rappel pour nous dire qu’il faut faire attention quand ils sont la ; pis il faut que tu joues le jeu, de mettre une façade, rester calme, puis tout ça. Mais [c’est aussi de] ne pas trop te soumettre, de garder un peu un esprit de liberté."
					,"caption": ""
				}
				,{
					"media": "content/01-vocal-13_6.m4a"
					,"path": p[1]
					,"description": "« Certains d’entre nous vont là-bas pour fumer ou juste pour relaxer. C’est un coin pour nous vraiment, vu que tout le reste du terrain est pris par les personnes, pis y a beaucoup d’activités qui se passent genre. pis la plupart du temps y’a des jeunes enfants qui prennent l’espace où il y a les bancs dans le parc en tant que tel. Donc nous on va là-bas, dans le coin pour relaxer, on est toujours proche des autres, mais quand même dans notre propre espace personnel. Fait que ouai,  Parfois on y va pour boire aussi. la police passe extrêmement rarement dans ces coins-là »."
					,"caption": ""
				}
				,{
					"media": "content/01-vocal-13_8.m4a"
					,"path": p[1]
					,"description": "« Ouais, je dirais quand même que c’est important, si on peut pas aller super loin ou des trucs comme ça, ou on veut juste boire une petite bière ou d’autres truc comme ça, c’est facile à accéder pour nous, ce n’est pas trop loin vu qu’encore tous les jeunes vivent proches de Montréal-Nord. Pis c’est juste là, et personne n’utilise cet espace »"
					,"caption": ""
				}
				,{
					"media": "content/01-vocal-13_10.m4a"
					,"path": p[1]
					,"description": "« Honnêtement je voudrais que…Montréal-Nord en gros, soit beaucoup mieux entretenue. Parfois ya des moments tu fais juste marcher pis c’est extrêmement sale dans les rues, pis ça fait laid. Surtout durant le temps d’hiver où la neige se mélange avec les déchets au sol. Tu peux juste pas marcher sur le trottoir, c'est extrêmement énervant »."
					,"caption": ""
				}
				,{
					"media": "content/01-vocal-13_12.m4a"
					,"path": p[1]
					,"description": "« Il y a des moments ou ce que dans une semaine complète, ça va être extrêmement rare de voir la police [au niveau du parc].  vue que la police ont l'habitude de traîner sur la place pascal. La plupart du temps, ils sont juste en auto. Ceux que tu vois ici dans le parc, ceux qui vont plus être en vélo. Mais même là ils vont faire genre le tour rapide, surveiller un peu, parler avec des personnes, socialiser ou peu importe ; puis après ils vont juste repartir. Puis après tu les verras pas genre pour très longtemps»."
					,"caption": ""
				}
				,{
					"media": "content/01-vocal-13_14.m4a"
					,"path": p[1]
					,"description": "« Durant les événements de IUPT, c’est beaucoup plus surveillé, il y a beaucoup plus de policiers dans le coin. Beaucoup de voitures. Il y a des moments donnés que c’est vraiment plus surveillés. Genre, c’est le fait que parfois la gang  qui reste sur pascal, vont se déplacer un peu et marcher. Fait que là, parfois y’a la police. Je ne sais pas ils roulent pas trop loin d’eux, mais assez proche pour les surveiller pis tout ça »."
					,"caption": ""
				}
				,{
					"media": "content/01-vocal-14_2.m4a"
					,"path": p[1]
					,"description": "« Je dirais que la police passe vraiment rarement, et puis s’ils passent, c’est juste pour de grands événements ou quand y a un truc qui se passe. Mais à part de ça, la police est rarement là , vu qu’ils ont l’habitude de juste patrouiller en auto. Pis ils ne peuvent pas entrer dans le parc avec leur voiture, fait qu’ils sont obligés de rester dans des extrémités du fond. Aussi vue qu’ils soient rarement là, les jeunes vont venir en soirée, et puis c’est un peu plus difficile de nous voir vu qu’il y a plusieurs arbres sur le côté. Pis c’est Pis c’est quand même loin, fait que ça m'étonnerais qu’ils voient »."
					,"caption": ""
				}
				,{
					"media": "content/01-vocal-14_4.m4a"
					,"path": p[1]
					,"description": "«Ya une sorte de camaraderie, s’il y a deux groupes de jeunes qui veulent pogner cette place la, il va y avoir une entente, sans se le dire, qu’okay on peut partager la place à deux. Soit que chacun va être dans son coin faisant comme si l’autre n’était pas là, où la plupart du temps ce qui se passe c’est que le groupe fait juste s’agrandir, pis tout le monde (apprend à se) connaître. ça crée du lien, des relations pis tout ça. À part de ça j’ai pas grand-chose à ajouter ; cette place-là c’est très facile à partager, plusieurs jeunes la fréquentent »."
					,"caption": ""
				}
				,{
					"media": "content/01-vocal-14_6.m4a"
					,"path": p[1]
					,"description": "« Le parc est important, comme je l’ai dit tout à l'heure, c’est un des lieux qu’on fréquente le plus. Je dirais aussi souvent que la MCC pis la bibliothèque. C’est encore un coin pour se rassembler, jouer au basket, des trucs comme ça. Malheureusement ils ont enlevé le terrain de tennis. Il y a plusieurs événements qui se passent ici, comme j’ai dit 95% du temps, les événements que la ville va organiser, ça va se passer ici. Pis si ça se passe pas ici ça va se passer dans l'autre parc à la place dijon. Un autre espace qu’on a créé pour les jeunes. Aussi que IUPT soutien beaucoup pour que les jeunes l’utilisent  vu que au moins la-bas ya encore le terrain de tennis. C'est juste la distance est un peu plus grande à marché. A part de ça. Le parc est plutôt correct. Ça pourrait toujours être mieux. Ça pourrait être parfois beaucoup plus propre. On a pas de personnel de la ville qui s'en occupe la. C’est plus les jeunes quand on travaille comme bénévole.  Ou IUPT qui s'en occupe de la ?? »"
					,"caption": ""
				}
				,{
					"media": "content/01-vocal-14_8.m4a"
					,"path": p[1]
					,"description": "Pis aussi là bas le pavillon est en train de se faire construire. Un autre lieu que les jeunes…je dirais qu’on à pas de super grande attente mais on veut au moin que ça devienne quelque chose vue qu’on voit que c’est un autre lieu [ou] qu’on pourra traîner ensemble, pis non seulement ça, ça nous permet d'être dans une place à l'intérieur autre que la mcc ou la bibliothèque. s'il pleut la température est extrêmement mauvaise. C'est juste qu’on se demande si après que c’est terminé comment va être l’entretien est ce que ça va être super bien entretenu.. ou si vue que ça va être un nouvel établissement, on se demande si la police va venir dans le coin pour surveiller un peu plus. Vu que c’est quand même beaucoup d’argent que la ville a investi. Pis que ça  à l’air de de devenir super beau. A part de ça si ça marche bien c’est bon on a une autre place pour traîner, on veut juste que ça dure un peu plus longtemps. Au moins pas de grafitti ou des trucs comme ça, ou des vitres pété pour sa première semaine d’ouverture »."
					,"caption": ""
				}
				,{
					"media": "content/01-vocal-14_10.m4a"
					,"path": p[1]
					,"description": "« Je sais qu’on a une gang de jeunes qui ont l'habitude de poser beaucoup de problèmes. Pis je sais que d’autres, font beaucoup de graffiti parce qu’ils aiment juste laisser leur marque sur les trucs. Ça peut signifier beaucoup de choses. Un des plus grand problème si ça arrive, les vitres pété arrivent. Pis les trucs comme ça, ça poussera moins la ville de rajouter plus de trucs à Montréal nord. Pis en ce moment on a vraiment besoin de truc à Montréal nord. Vu qu’a la MCC on avait une sorte de café étudiant mais vu que c’est plus financé, ya plus personne qui s'en occupe de ça. On n'a pas trop d’endroit a y aller. Pis les restes des endroits, soit que c’est extrêmement loin en dehors de Montréal-nord,  soit que  les places qui sont à l'intérieur coûtent beaucoup d'argent, puis c’est pas tout le monde qui a les moyens  pour se les payer »."
					,"caption": ""
				}
				,{
					"media": "content/04-vocal-4_2.m4a"
					,"path": p[4]
					,"description": "«  Ces endroits-là, c’est toute mon enfance. C’est là où on venait jouer avec mon père à 11h, parce que c’était plus calme (...) cet endroit-là c’est ou j’ai passé toute mon enfance, à  jouer au soccer, aller au skate parc, aller dans les balançoires (…). On a eu des combats territoriaux voila, des tensions des conflits tribaux (rire) ou chacun prenait possession de la balançoire. Puis en tout cas.. ha les fameuses toilettes, tu rentrait la dedans ya quelqu’un qui te lançait de l’eau ya rouya c’était terrible.  c’est ici  qu’on se cachait quand y’avais de la pluie. Tu pouvais continuer à jouer au soccer et puis en même temps t’etais protéger»"
				}
				,{
					"media": "content/04-vocal-4_4.m4a"
					,"path": p[4]
					,"description": "« Le parc, vraiment bizarrement, il n’y a pas beaucoup de tontons, pas beaucoup de criminalité qui se passait ici, c’était plus des endroits ou des gens chillaient. Il a été épargné. [Tu sais pourquoi ?] peut-être  parce qu’il y a des enfants et les parents… qu’il y a un certain respect, vraiment  moi cet endroit là,  je n’ai jamais rien vu rien qui se passait »."
				}
				,{
					"media": "content/04-vocal-4_6.m4a"
					,"path": p[4]
					,"description": "«  nan mais dans mon souvenir à moi il était parfait ce parc. Maintenant wallah quand ils vont lui apporter du changement.. chez pas en tout cas pour moi ça va le pourrir. ( dans quel sens ?) je sais pas ici les aménagements qu’ils font ça reflètent pas la réalité des personnes.  On dirait que les personnes qui ont les idées de ces projets là, ils nous consultent pas. Ils créent des choses bizarres, genre pas adaptés pour nous.  L’exemple du parc Carignan, ou ils ont installé pleins de trucs, des bancs genre  pour les enfants pis tout. Ça n’a pas marché. Les gens ont détourné ça pis maintenant c’est l’endroit où tout le monde fument pis tout. C’est partir d’une bonne intention tu comprends mais c’est pas la réalité »"
				}
				,{
					"media": "content/6_2_1.mp3"
					,"path": p[5]
					,"description": "« Ici c’est le Skate parc, ou on bataillait… et où il y a eu, des bagarres et des bagarres et des bagarres et des bagarres. Il y a eu plein de bagarres ici, des fois c’était des bagarres un peu raciste, mais la plupart du temps ça ne dégénérait pas. »"
				}
				,{
					"media": "content/6_2_2.mp3"
					,"path": p[5]
					,"description": "« Après l’école c’est ici que toute la gang se retrouve, quand ils veulent chiller ici. Ici c’est le parc Hb, c’est le terrain de basket. Quand on parle du parc Hb, on parle d’ici. On joue au basket ici, c’est vraiment souvent au basket »"
				}
				,{
					"media": "content/6_2_3.mp3"
					,"path": p[5]
					,"description": "« Ici on fait la fête, on vient fumer, et il y a des jours où les gens amènent de ‘alcool, etc. Ici c’est le côté dégelasse, parce qu’il y a des gens qui pissent [...] »"
				}
				,{
					"media": "content/6_2_4.mp3"
					,"path": p[5]
					,"description": "« En ce moment c’est les plus grands qui viennent ici, des gens de 18 à 24, c’est leur spot. »"
				}
			]
		},
		"geometry": {
			"type": "Point",
			"coordinates": [ -73.62313249840463, 45.61572186806679 ]
			}
		}
		,{"type": "Feature",
		"properties": {
			"id": [10,,,,4,]
			,"title": "Centre commercial"
			,"_items": [
				{
					"media": "content/04-vocal-4_8.m4a"
					,"path": p[4]
					,"description": "« Moi ce qui me fait mal  genre c’es que ya beaucoup de mère monoparentale  qui … même ma mère en fait partie. Qui transporte leur propre provision. Et ça c'est dur, parce que tu peux pas transporter beaucoup. Et puis si tu transporte beaucoup c’est vraiment lourd pour toi tu comprends, tu souffres le et puis les endroits ils sont pas tres proches. Ya marché unique mais c’est juste pour les trucs vite fait, tu dois  aller à super C et pis tout transporter. Donc ça crée vraiment une précarité. A chaque semaine t’es obligé de ressortir. En plus l’hiver approche, oh l’hiver c’est fuckin chaud ! »"
				}
			]
			},
		"geometry": {
			"type": "Point",
			"coordinates": [ -73.61841892535509, 45.606393687087184 ]
			}
		}
		,{"type": "Feature",
		"properties": {
			"id": [11,,,,,4]
			,"title": "Parc Carignan"
			,"_items": [
				{
					"media": "content/10_1.mp3"
					,"path": p[5]
					,"description": "« J’aime pas parler quand il y a des gangsta »"
				}
				,{
					"media": "content/10_2.mp3"
					,"path": p[5]
					,"description": "« Là c’est le parc Carignan, on aime bien se poser ici la nuit parce que c’est relax, c’est vraiment relax, on vient ici pour parler de tout. »"
				}
			]
			},
		"geometry": {
			"type": "Point",
			"coordinates": [-73.61583990697166, 45.60996572393539]
			}
		}
		,{"type": "Feature",
		"properties": {
			"id": [12,,3,,2,]
			,"title": "Rue Pascal"
			,"_items": [
				{
					"media": "content/02-6-Pascal2.mp3"
					,"path": p[2]
					,"description": "« Je n’aime pas l’ambiance [...] Même quand j’étais plus jeune, il y avait beaucoup de gens qui avaient besoin d’aide qui se retrouvaient là-bas. J’imagine comme c’est difficile pour eux. »"
				}
				,{
					"media": "content/02-6-Rue Pascal.mp3"
					,"path": p[2]
					,"description": "« [...] le soir vient par ici, je n’aime pas aller vers cet endroit-là. Vers l’allée Pascal où il y a les marchés, parce que des fois, il y a des femmes qui se font sifflées là-bas quand elles sont seules. Surtout le soir. Tu te fais beaucoup regarder, parfois, c’est un peu intimidant. Je ne me sens pas vraiment à l’aise là-bas. »"
				}
				,{
					"media": "content/04-vocal-2_4.m4a"
					,"path": p[4]
					,"description": "putain en hiver ils restaient sur le trottoir la, il fait froid.(C’est qui eux ?) bah c’est les gens.. les tontons qui vendent de la drogue (rire). [C'est des tontons ?] bah oui !  ils ont pas notre ages. D’ailleurs j’ai jamais vu quelqu’un de mon âge faire ça [là-bas]."
				}
				,{
					"media": "content/04-vocal-2_8.m4a"
					,"path": p[4]
					,"description": "«ouai ouai nan mais c’est comme je t’ai dit genre. Tu ne deviens pas insensible, mais tu t’acclimates à ton milieu tu comprends, même encore moi, maintenant, je me sens plus en danger à Westmount qu’ici… parce que tu t’habitues. Tu comprends vite que ces personnes la sont comme toi en fait. C’est pas des barbares ni rien »"
				}
				,{
					"media": "content/04-vocal-2_10.m4a"
					,"path": p[4]
					,"description": "« Ici tu sais très bien les endroits qui sont chaud les endroits qui sont calme. Là-bas [dans le nord-est] je suis totalement dans mon environnement.  eh ho j’ai passé toute mon  enfance ici les “tontons” ils m’ont vu grandir… »"
				}
			]
		},
		"geometry": {
			"type": "Point",
			"coordinates": [ -73.62107496976267,45.61734485472491 ]
			}
		}
		,{"type": "Feature",
		"properties": {
			"id": [13,,,,,3]
			,"title": "Rue Pierre"
			,"_items": [
				{
					"media": "content/8_1.mp3"
					,"path": p[5]
					,"description": "« [...] Je t’amène dans l’endroit qui a donné à Montréal-Nord vraiment tous ses mauvais côtés. C’est la rue Pierre, c’est là où on trouve les gens les plus fous »"
				}
			]
		},
		"geometry": {
			"type": "Point",
			"coordinates": [ -73.621887242827,45.61857745287741 ]
			}
		}
		,{"type": "Feature",
		"properties": {
			"id": [14,4,7,,,]
			,"title": "Cégep Marie-Victorin"
			,"_items": [
				{
					"media": "content/02-14-CEGEP Marie Vic.mp3"
					,"path": p[2]
					,"description": "[transcription à refaire]"

				}
				,{
					"media": "content/02-15-Cégep MARIE VIC 1.mp3"
					,"path": p[2]
					,"description": "[transcription à refaire]"

				}
				,{
					"media": "content/02-16-Cégep MARIE VIC 2.mp3"
					,"path": p[2]
					,"description": "[transcription à refaire]"

				}
				,{
					"media": "content/02-17-CEGEP Marie Vic 4.mp3"
					,"path": p[2]
					,"description": "[transcription à refaire]"

				}
				,{
					"media": "content/01-vocal-19_2.m4a"
					,"path": p[1]
					,"description": "« La plupart du temps quand on va parler du quartier c’est plus qu’est ce qui devrait ajouter de plus dans le quartier pour que ce soit plus intéressant, ou au moin que d’autres jeune, admettons des petits de secondaire un qui viennent d’arriver ont une place pour socialiser ensemble; à la place de soi toujours rester chez eux parce que ya pas grand chose à faire à l'extérieur de chez eux. Je veux dire ouai y’a la MCC, y’a le secteur jeunesse, y’a le parc mais c’est juste trois endroits sur tout Montréal nord. Fait que ouai parfois on se dit que peut-être la ville devrait rajouter ça, ou ça serait nice si quelqu’un commence un commerce pis fait ça »."
					,"caption": ""
				}
			]
		},
		"geometry": {
			"type": "Point",
			"coordinates": [-73.606224773077,45.617625698384074]
			}
		}
		,{"type": "Feature",
		"properties": {
			"id": [1,1,1,,,]
			,"title": "Maison culturelle et communautaire (MCC)"
			,"intro":""
			,"_items": [
				{
					"media": "content/02-1-MCC.mp3"
					,"path": p[2]
					,"description": "« C’est une des places que j’ai le plus fréquenté quand j’étais jeune. Parce que j’adore lire. C’est aussi une place qui était facile d’accès. Parce que quand j’étais au secondaire, même depuis le primaire, c’était la place où je venais le plus souvent après l’école. »"

				}
				,{
					"media": "content/02-2-MCC.mp3"
					,"path": p[2]
					,"description": "[transcription à refaire]"
				}
				,{
					"media": "content/02-3-MCC.mp3"
					,"path": p[2]
					,"description": "« Un itinéraire pour tous, c’était aussi un endroit pour relaxer, on était comme une famille et… je faisais beaucoup de bénévolat là-bas. Au début je venais pour mes devoirs, puis après je venais pour relaxer et aider. C’est un endroit que j’aimerais fréquenter aujourd’hui, mais c’est plus pareil… »"
				}
				,{
					"media": "content/02-4-MCC.mp3"
					,"path": p[2]
					,"description": "« J’ai l’impression qu’il y a plus de surveillance. Au moment où j’y allais, j’avais l’impression qu’il n’y avait pas tant de gardiens de sécurité et maintenant il y’en a beaucoup. C’est bizarre… »"
				}
				,{
					"media": "content/01-vocal-12_2.m4a"
					,"path": p[1]
					,"description": "Avant y’avait des problèmes que, je sais que quand tu rentres dans la mcc, y’avait ces affiches, « tu ne peux pas manger, « pas de flânages » puis des trucs comme ça. Mais  après quelques années, quand je suis sortie de secondaire 3, quand j’allais à l’école  Henri-Bourassa, ils ont changé les règles, fait que la c’est plus un lieu accessible aux jeunes. Puis ils nous permettent d’apporter de la bouffe de l’extérieur puis de manger à l’intérieur ou de faire nos devoirs de temps à autre, pis de discuter avec des amies tant qu’on ne fait pas trop de bruit on qu’on cause trop des pb »."
					,"caption": ""
				}
				,{
					"media": "content/01-vocal-12_4.m4a"
					,"path": p[1]
					,"description": "C’est juste...certains jeunes ont l’habitude d’essayer de chercher le trouble pis tester les limites des personnels. Pis heu. Ça, ça fait longtemps de ça mais c’est une façon de voir les jeunes de HB fait qu’il s’était plus habitués de voir les jeunes plus dérangeant pis de penser que toutes les autres jeunes seront comme eux. Fait qu’ils ont mis des règles. Pareil pour la bibliothèque on se fait carter maintenant. Pis si tu veux emprunter un document faut que tu retournes au comptoir, que tu demandes ta carte pour que t’aille chercher les documents fait que c’est beaucoup de problème ; les règles en tout c’est juste pas crier ou des trucs simples comme ça, heu.. pas se battre ou autre chose de même. »"
					,"caption": ""
				}
				,{
					"media": "content/01-vocal-12_6.m4a"
					,"path": p[1]
					,"description": "« Honnêtement la MCC  je dirais que la MCC…Ce n’est pas que ça me rapporte beaucoup mais, c’est plus un lieu auquel je suis très familier avec. Pis je sais que si ici, je sais que si je serais la tard, disons que je sais que je ne me ferais pas déranger par des personnes à l’extérieur, ou par quelque policier ou des trucs comme ça… Aussi, je me sens beaucoup plus en sécurité, à la MCC, ou à la bibliothèque de la MCC, ou aussi dans le sous-sol de la MCC. Que si je fais juste trainer à un certains endroits durant l’heure  du jour ou du soir. Fait que ouais, la MCC j’y vais très souvent, car je suis très familier avec »."
					,"caption": ""
				}
				,{
					"media": "content/01-vocal-12_8.m4a"
					,"path": p[1]
					,"description": "« Honnêtement la MCC  je dirais que la MCC…Ce n’est pas que ça me rapporte beaucoup mais, c’est plus un lieu auquel je suis très familier avec. Pis je sais que si ici, je sais que si je serais la tard, disons que je sais que je ne me ferais pas déranger par des personnes à l’extérieur, ou par quelque policier ou des trucs comme ça… Aussi, je me sens beaucoup plus en sécurité, à la MCC, ou à la bibliothèque de la MCC, ou aussi dans le sous-sol de la MCC. Que si je fais juste trainer à un certains endroits durant l’heure  du jour ou du soir. Fait que ouais, la MCC j’y vais très souvent, car je suis très familier avec »."
					,"caption": ""
				}
				,{
					"media": "content/01-vocal-12_10.m4a"
					,"path": p[1]
					,"description": "« j’sais que avant dans la MCC, il y avait ce petit resto-café genre qui avait l’habitude d’être ouvert durant le temps de de l’école, vraiment tôt le matin, je sais que  la mcc était ouverte et que les jeunes pouvaient rentrer, se pogner des muffins, cafés, puis des trucs comme ça genre pis attendre plus proche que l’heure d’école ouvre.  Certains d’entre nous faisaient nos devoirs dans la MCC pendant qu’on mangeait autour du café pis tout ça. Puis quand c’était l’heure d’aller à l’école, on y allait directement. Et quand c’était l’heure d’y aller de l’école, on pouvait juste sortir et y aller vu que c’était proche. À part de ça, ça a juste fermé et on a aucune nouvelle de quand ça va rouvrir… [okay ça marche]. c’était l’endroit le plus proche qu’on avait d’un café étudiant à Montréal nord, vu que c'est plus la je pense que c’est un peu laid genre, vu qu’il y a pas d’autres lieux comme ça à Montréal-Nord, fait ça nous pousse à aller vers l’extérieur »."
					,"caption": ""
				}
			]
		},
		"geometry": {
			"type": "Point",
			"coordinates": [-73.62090519385454,45.61655098609252]
			}
		}
		,{"type": "Feature",
		"properties": {
			"id": [2,,2,,,]
			,"title": "La Bibliothèque de la MCC"
			,"intro":""
			,"_items": [
				{
					"media": "content/02-5-Rue Pascal.mp3"
					,"path": p[2]
					,"description": "« Comparé à [la rue] Pascal, c’est que moi c’est depuis que je suis au collégial, je vois souvent la police passer. Chaque jour je vois au moins une voiture de police. Je me sentais souvent surveillée, comparé à la bibliothèque où ce n’était pas le cas. Mais maintenant qu’ils ont mis des gardiens dans les bibliothèques, je me sens aussi surveillée là-bas…Et je me dis… la bibliothèque ce n’est pas un lieu pour te sentir surveillée… justement tu te sens en sécurité et à l’aise »"
				}
			]
		},
		"geometry": {
			"type": "Point",
			"coordinates": [-73.62050989333156, 45.616059443956324]
			}
		}
		,{"type": "Feature",
		"properties": {
			"id": [3,,9,,,]
			,"title": "BANQ"
			,"intro":""
			,"_items": [
				{
					"media": "content/02-19 Centre ville BANQ.mp3"
					,"path": p[2]
					,"description": "« C’est pour ça que j’ai commencé à aller plus souvent au centre-ville, à la grande bibliothèque. Mais tu vois, même à la grande bibliothèque, en tout cas je ne sais pas depuis quand ils ont ça, mais il y a des gens qui surveillent aux alentours. Mais c’est parce que Berri-UQAM est réputée pour avoir beaucoup d’itinérants (…) donc il y a beaucoup de surveillants qui viennent roder à la bibliothèque. C’est dommage je trouve [...] J’ai l’impression que tu es moins regardé (à la BANQ) aussi [...] comparé à Montréal-Nord, le rapport n’est pas le même là-bas. C’est plus facile de se faire petit, parce que les gens ne savent pas tu viens d’où. »"

				}
			]
		},
		"geometry": {
			"type": "Point",
			"coordinates": [-73.56230909710129,45.5154973969346]
			}
		}
		,{"type": "Feature",
		"properties": {
			"id": [4,,5,,5,1]
			,"title": "École HB"
			,"_items": [
				{
					"media": "content/02-7-école HB.mp3"
					,"path": p[2]
					,"description": "[transcription à refaire]"

				}
				,{
					"media": "content/02-8-HB école.mp3"
					,"path": p[2]
					,"description": "[transcription à refaire]"

				}
				,{
					"media": "content/04-vocal-5_2.m4a"
					,"path": p[4]
					,"description": "« Mais a HB c’est là ou tu atteint l'âge de l’esprit critique tu comprends. Là ou tu commences à remettre en ordre, les questions pis tout ça. Moi cette ecole c’est la ou j’ai connus du racisme de la discrimination. C’est là ou j’ai compris que wallah la réalité des choses est beaucoup plus  différente  de ce qu’on veut.»"
				}
				,{
					"media": "content/04-vocal-5_4.m4a"
					,"path": p[4]
					,"description": "« des fois je m'absentais mais comme n’importe quel élève. On appelle ça foxé l'école mais comme n’importe quel élève qui foxais l'école. Moi on croyait que j’allais prier etc, on se posait des questions, on a voulus m’envoyer chez le psychologue. Un certain temps j’ai arrêté de fréquenter l'école parce que j’avais des problèmes personnels. Pis là plein de questions. (quel question ?] ylias qu'est ce qu'il fait ?  Est ce qu’il va toujours à la mosquée ? est ce que c’est s’est parent quil l’ont…ils ont même cru que j'avais eu un mariage forcé. Wallah ils ont cru qu’ils m'avaient marié par la force  genre. Ils étaient là ouai alias tu as le choix etc. De quoi tu m' parle, poto   je mangeais des doritos et le monsieur il est là mariage forcé et tout.»"
				}
				,{
					"media": "content/04-vocal-5_6.m4a"
					,"path": p[4]
					,"description": "« ça reprimende sans comprendre genre. Wallah genre leur système est fait d’une manière genre ou tu peux pas te défendre. Pis ça je leur est souvent reprocher ça.  Genre selon eux le professeur est infaillible d’accord.  Ce que le professeur dit, Dieu l'a dit. d’accord ; pis genre il appliquait tout ça selon la vision du professeur. Si le professeur il t'aimait pas t’était mort. On t’envoyait au local de retrait, on t’empêchais d’aller a l’école pis tout ça. Ça crée un cercle vicieux. Pourquoi toi tu envies d’aller dans la classe d’un professeur que t'as des problème avec, pis la t’avais des mauvaise note pis tout ça.  Ça c’était terrible. Je leur ai toujours reproché ça. Une chance: le TES il était compréhensif. »"
				}
				,{
					"media": "content/2_5_1.mp3"
					,"path": p[5]
					,"description": "« On est à Hb, ici on appelait ça le côté des filles et là, c’était le côté des garçons. Avant c’était le chilling spot de tout le monde. Quand l’école finissait tu voyais tout le monde ici, tout le monde restait ici, jusqu’à que la sécurité vienne nous dire bye bye, ils doivent partir. »"

				}
				,{
					"media": "content/2_8_1.mp3"
					,"path": p[5]
					,"description": "« Ici c’était un stationnement, on aimait ça…les grands avaient des voitures et on écoutait de la musique… Ici tu vois, là où il y a les tags, là où il y a le numéro 12, là c’était notre chilling spot pour fumer… Ça c’était quand on voulait que personne ne nous voit, parce que de l’autre côté, tout le monde peut te voir. Alors que là t’es plus tranquille, t’es loin, tu ne déranges personne »"

				}
			]
		},
		"geometry": {
			"type": "Point",
			"coordinates": [-73.62232525883371,45.61450352948237 ]
			}
		}
		,{"type": "Feature",
		"properties": {
			"id": [5,5,,,,]
			,"title": "Rue Henri-Bourassa"
			,"_items": [
				{
					"media": "content/01-vocal-22_2.m4a"
					,"path": p[1]
					,"description": "« Gouin c’est beaucoup plus calme, pis c’est beaucoup plus actif ironiquement que Montréal-Nord. La plupart du temps quand je vais sur Gouin, c’est juste pour m’asseoir sur le banc ou aller dans le parc., pis ya toujours ces super maisons à voir. Tu verras toujours des personnes à vélo ou des personnes en train de courir pis tout ça. Y’a des moments où ce que  j’aime Gouin et des moments où j’aime beaucoup moins la place. [pourquoi ?] À un moment donné quand j’étais avec des ami.e.s sur Gouin... la façon dont les policiers m’ont regardé... ils m’ont regardé d’un mauvais œil. Pis à un moment donné ils ont convoqué l’autorité pour nous dire c’était quoi qu’on fait ici dans le coin pis tout ça ?[c'est a dire ? ils ont appelé la police , ouai.  tu veux m'en parler ?  ça c’est passé quand on prenait des photos pour un projet »."
					,"caption": ""
				}
				,{
					"media": "content/01-vocal-22_4.m4a"
					,"path": p[1]
					,"description": "« pis je sais pas, les résidents de Gouin (ne trouvaient pas notre présence normale…). Vu que Gouin pis Montréal-Nord il y a une division, que tu peux constater, genre ça frappe à l’œil. [pourquoi ?] Quand tu descends sur Gouin, il y a pas d’effet de dégradé ; tu vois que les bâtiments changent. C’est genre une ligne que tu peux constater, un mur. Du moment que tu passes cette barrière, tu peux voir une différence phénoménale entre goin et Montréal  nord. Tu peux voir que Gouin, c’est beaucoup mieux entretenu, tout est beaucoup plus beau, plus propre, les personnes sont beaucoup plus actives. Comparé à Montréal-Nord où tout a l’air désorganisé…pis tout rassemblé ensemble dans un espace. Gouin tu peux voir que malgré le fait que les maisons soient les unes à côté des autres, il y a assez de liberté genre entre ces espaces-là »."
					,"caption": ""
				}
				,{
					"media": "content/01-vocal-22_6.m4a"
					,"path": p[1]
					,"description": "« Il y a beaucoup moins de bruit sur Gouin, pis la circulation est beaucoup mieux que celle de Montréal-Nord. [c’est-à-dire] À Montréal-Nord il y a toujours un trottoir au complet qui sera en réparation, des camions partout des autobus, des petits embouteillages, des autos, des motos qui font juste du bruit à longueur de journée. Pis tu peux aller sur Gouin et tu verras juste des autos, mais elles ne feront même pas autant de bruit (limitation de vitesse), tu vois rarement des camions, et si tu en vois c’est juste pour bâtir une nouvelle maison, sinon à part de ça c’est extrêmement calme »."
					,"caption": ""
				}
				,{
					"media": "content/01-vocal-22_8.m4a"
					,"path": p[1]
					,"description": "« Pis...À un moment donné, quand on prenait des photos, les résidents ont appelé la police. La police est venue pis heu… apparemment, la police nous a dit que les résidents ont dit que  les résidents se sentaient menacés par notre présence, parce qu’on était en gang pis tout ça. Pis ils auraient préféré qu’on ne soit pas à Gouin mais qu’on traîne à Montréal-Nord parce que c’est là que la plupart des jeunes sont. Fait qu’ils auraient préféré qu’on traîne à Montréal-Nord. et la police était perplexe après qu’elle ait entendu ça. Parce que quand ils ont vérifié, Gouin est en fait un espace public où tout le monde peut accéder.  Mais je pense que c’est devenu tellement une habitude, que les personnes de Montréal-Nord restent à Montréal-Nord et que les personnes de Gouin restent à Gouin. c’est devenu une règle non écrite que tu restes chez toi et puis tu viens pas ici »."
					,"caption": ""
				}
				,{
					"media": "content/01-vocal-23_2.m4a"
					,"path": p[1]
					,"description": "«Comme je disais la police était perplexe, parce que comme ils avaient vu que gouin est un espace public accessible à tout le monde. Fait qu’ils comprenaient pas pourquoi les résidents avaient dit que, non seulement ils se sentaient menacés par notre présence, mais aussi, qu’on ne devrait pas être dans le coin vu qu’il y avait un parc beaucoup plus haut. En fait, la police avait dit qu’on pouvait rester pis tout ça. Fait que ouais c’était un des moments où vraiment je me suis senti vraiment, insulté par les résidents de Gouin. Arg..d’une façon crass à dire je me suis senti comme un animal qui devait rester dans son enclos genre pis je pouvais pas sortir »."
					,"caption": ""
				}
				,{
					"media": "content/01-vocal-23_4.m4a"
					,"path": p[1]
					,"description": "«Puis après ça j’ai quand même continué à aller à Gouin, mais je m’assure de rester un peu plus loin des rues résidentielles, puis rester plus dans les zones plus isolées et fréquentées par les jeunes. Parce que si tu vas dans ces coins-là il y a des petits espaces entre les maisons. Pis sur les poteaux tu peux voir tous les jeunes qui ont écrit leur marque dessus… genre moi j’etais ici bla bla bla pis d’autres trucs comme ça . On s’est approprié la place, fait que ouai. pis le seul parc à Gouin  est extrêmement loin, surtout à pied de la distance que tu dois faire de Montréal-Nord jusque-là bas. Fait que c’est pour ça qu’on a l’habitude de plus rester beaucoup plus proche des coins résidentiels »"
					,"caption": ""
				}
			]
		},
		"geometry": {
			"type": "Point",
			"coordinates": [ -73.6214753376206,45.606195202667394 ]
			}
		}
		,{"type": "Feature",
		"properties": {
			"id": [6,,,,1,]
			,"title": "Pizza New York"
			,"_items": [
				{
					"media": "content/04-vocal-2_2.m4a"
					,"path": p[4]
					,"description": "« C’est un lieu populaire où je vais manger. C’est là où tout le monde mange, En tout cas tous les jeunes du quartier, dès que tu sors de l’étude, tu viens la pour manger. Y’a aussi le marché unique genre ou je fais mon marché vite fait bien fait genre, quand je suis dans l’urgence et qu’il faut acheter des trucs."
				}
				,{
					"media": "content/04-vocal-2_6.m4a"
					,"path": p[4]
					,"description": "« bin justement, comme j’était assez précaire financièrement genre, c’était des repas des repas rapides pis à bas prix. En fait mon alimentation était basé sur pizza New york. Si pizza new faisait faillite je mourrais (rire)."
				}
				,{
					"media": "content/04-vocal-2_12.m4a"
					,"path": p[4]
					,"description": "« ha jte dit c’est les habitudes là. T’es juste habitué. Les habitudes c’est difficile à enlever et puis tu veux aller ou, d’autre ? y’a pas d’autres pizzeria en tout cas !  Bah je sais pas pizza ny on dirait qu’ils ont un esprit. Wallah t'as vu ce magasins-là ? Le magasin haïtien, y'a plein de pizzeria qui sont passé par là, plein !  à chaque fois ils ont essayé de concurrencer mais ils arrivaient jamais ! Non pizza NY ils ont quelques choses »"
				}
			]
		},
		"geometry": {
			"type": "Point",
			"coordinates": [ -73.6201302380395, 45.617586239290894]
			}
		}
		,{"type": "Feature",
		"properties": {
			"id": [7,,8,,,]
			,"title": "Centre-Ville"
			,"intro":""
			,"_items": [
				{
					"media": "content/02-18-Centre ville.mp3"
					,"path": p[2]
					,"description": "« Il y a beaucoup de services qu’il serait important d’avoir ici (À Mtl-Nord) quand j’étais jeune j’aurais aimé avoir de l’aide sur l’emploi, etc. Au centre-ville tu trouves ces ressources-là, mais ici il n’y’en a pas. »"

				}
			]
		},
		"geometry": {
			"type": "Point",
			"coordinates": [ -73.56918167800406,45.50381097217946 ]
			}
		}
		,{"type": "Feature",
		"properties": {
			"id": [8,3,5.5,,,]
			,"title": "Avenue Monty"
			,"place_type": "street"
			,"_items": [
				{
					"media": "content/02-11-Monty.mp3"
					,"path": p[2]
					,"description": "[transcription à refaire]"
				}
				,{
					"media": "content/02-11-Monty2.mp3"
					,"path": p[2]
					,"description": "[transcription à refaire]"
				}
				,{
					"media": "content/02-12-Monty.mp3"
					,"path": p[2]
					,"description": "[transcription à refaire]"
				}
				,{
					"media": "content/02-13 Chez soi Gouin.mp3"
					,"path": p[2]
					,"description": "« c’est à partir du moment où il y a eu les révoltes, avec Freddy, que mes parents ont commencé à avoir peur et ils ont décidé de déménager. » [transcription à refaire] "
				}
				,{
					"media": "content/01-vocal-15_2.m4a"
					,"path": p[1]
					,"description": "« Je sais que proche des arrêts de bus… Pour commencer, le campus est extrêmement grand, pas aussi grand que l’université, mais quand même c’est quelque chose.. Aussi…y avais le terrain de soccer, où la plupart des jeunes avaient l’habitude de trainer là bas. Pas forcément pour jouer au soccer mais ils se prenaient des couvertures et puis des affaires comme ça, pis ils faisaient juste socialiser ensemble et puis ils font des activités. Y’a aussi la forêt à côté du cégep. Où ils nous permettent de marcher à l’intérieur. Certains d’entre nous vont hors du sentier et explorent plus loin »"
					,"caption": ""
				}
				,{
					"media": "content/01-vocal-16_2.m4a"
					,"path": p[1]
					,"description": "« Pis une fois arrivé sur cette petite île, on se crée un petit feu de camp, on ramène la bouffe, la bière pis tout ça. Fait que c’est une façon genre…une sorte d’initiation pis des trucs comme ça, pour dire  okay, on a gradué on a réussi. Pis c’est tout entre nous genre. Vu que..c’est techniquement pas une place où l'on peut être mais personne s’en occupe depuis super longtemps, les gens s'en foutent carrément. Pis pour moi c’est quelque chose  qui est dans nos moyens vu que nous qui organisent l'événement. Fait qu’on a pas besoin de dire à quelqu’un est ce que tu veux faire ça pour nous, ou aller dans une place pour dépenser de l’argent. Ça sort de tous les moyens qu’on peut contrôler »."
					,"caption": ""
				}
				,{
					"media": "content/01-vocal-16_4.m4a"
					,"path": p[1]
					,"description": "« Qu’elles sont vos motivations pour aller là-bas ? Honnêtement ça va sonner un peu bizarre, mais quand t'es à la MCC. Ça, c’est des espaces contrôlés par des adultes puis tout ça. Y’a déjà un truc là parce que c’est ceux qui ont mis ça là, y’a ça parce que c’est eux qui ont établis ça. [Les îles] C’est comme si on colonisait une plage. On contrôle une place et ça nous appartient maintenant. Je pense que c’est le fait de créer notre petite ambiance et puis notre propre place. Je dirais que c’est vraiment ça. C’est devenu beaucoup plus personnel. Et puis au cours des années, c'est devenu une tradition.»"
					,"caption": ""
				}
			]
		},
		"geometry": {
			"type": "Point",
			"coordinates": [ -73.61711711481252, 45.61755077141478 ]
			}
		}
	]
};
//when including html in JSON, change all double-quotations to single-quotes, here is an online tool for doing this: https://jsfiddle.net/Mottie/ZAHPg/
//polygons require extra square brackets around coordinate field

//to add: contextualizing data, such as a polygon representing the CdN-NdG borough and other contextualizing geo-features
