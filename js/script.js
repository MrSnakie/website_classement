/*
|--------------------------------------------------------------------------
| JAVASCRIPT POUR CLASSEMENT COURSE INDIVIDUEL 2016 - VIN'SCENE
|--------------------------------------------------------------------------
|
| 1 fonction pour afficher le classement à l'ouverture de la page
| 1 fonction pour trier les places dans l'ordre croissant/décroissant
| 1 fonction pour trier les noms normalement ou inversement
| 1 fonction pour trier les dossards dans l'ordre croissant/décroissant
|
*/

// ------------------------------------------------------------------------
// LISTES PARTICIPANTS
// ------------------------------------------------------------------------

var liste = [[1,"MULOT Cyrille",3],[2,"AMIOT Antoine",2],[3,"BRUNET Xavier",36],[4,"FONTENAY Karine",1],[5,"PRIVAT Nicolas",61],[6,"KAMINSKI Stephan",98],[7,"GARDENT Thierry",51],[8,"HENNENFENT Roland",17],[9,"BENOIT Philippe",39],[10,"LANGEVIN Samuel",58],[11,"REVILLER Thierry",86],[12,"SAVART Jerome",65],[13,"MOULIN Franck",68],[14,"ALENDOURO Victor",66],[15,"PECOT Stève",95],[16,"VASTESAEGER Sven",75],[17,"GARNIER Dominique",23],[18,"FLOURET Michel",46],[19,"MINARD Anne laure",76],[20,"PASQUET Frederic",79],[21,"DEVILLERT Christophe",28],[22,"LAPIERRE Michael",85],[23,"ROUX Thierry",82],[24,"ROULET David",59],[25,"DORDAIN Tony",93],[26,"MENDER Miloud",96],[27,"FONTAINE Julien",29],[28,"FOUQUET Arnaud",48],[29,"GICQUEL Fabrice",97],[30,"ARAR Didier",84],[31,"BRAJON Bertrand",57],[32,"SCIACCA Aurélia",50],[33,"LOPES LELO Maria",5],[34,"FORESTIER David",33],[35,"HUET Jérôme",53],[36,"MARSURA Philippe",42],[37,"LINVAL Philippe",69],[38,"HERNOT Laurent",89],[39,"LAKAS Patrice",67],[40,"MARCHAND Eric",40],[41,"BOURNAT Thierry",38],[42,"CAMBONI Mario",25],[43,"BARICHARD Jérôme",47],[44,"SANSELME Philippe",87],[45,"ANDRE Serge",71],[46,"CARTON Noël",24],[47,"PETITJEAN Rémy",64],[48,"TEISSEDRE Christian",37],[49,"AMY Jérôme",99],[50,"MOYNAULT Christophe",35],[51,"VéNIANT Romu",92],[52,"LEBIGUE Tristan",88],[53,"JUGE Fabrice",26],[54,"VINCENT Jérémy",90],[55,"IVART Yann",30],[56,"DESJOUR Patrick",70],[57,"GALLON Fabrice",77],[58,"GUYOT Jean-joseph",27],[59,"CHATARD Benoit",80],[60,"ROUX Claude",9],[61,"KOWALSKI Dany",63],[62,"PERRETTE Christophe",34],[63,"DUBOURDIEU Stephane",81],[64,"LAMBERT Guillaume",54],[65,"FAMBRINI Cyril",52],[66,"MOUNIER Christian",72],[67,"BROSSARD Remy",13],[68,"FOUQUET Arnaud",94],[69,"ARNAUD Christian",44]];

var liste2 = [[70,"MOSNIER Bernard",55],[71,"BERGERET Lise",8],[72,"BERGERET Christophe",7],[73,"LEFEBVRE Michel",91],[74,"FLEURY Stephanie",15],[75,"AUBARD Nicolas",74],[76,"VALLEE Nelly",45],[77,"BERNABEU Julien",73],[78,"DUPRE Alain",78],[79,"SALIGNAT Jean-claude",4],[80,"VOLAT Marc",21],[81,"BENIGAUD Sylviane",18],[82,"LEPAIN Laurent",22]];

var listeglobal = liste.concat(liste2); // On additionne les deux listes pour n'en faire qu'une
var trier = false; // Dire si OUI ou NON le tri est actif

// ------------------------------------------------------------------------
// AFFICHER CLASSEMENT A L'OUVERTURE DE LA PAGE (ORDRE CROISSANT)
// ------------------------------------------------------------------------

function AfficherClassement() { // Nom de la fonction
	document.location.href = '#tri_place_croissant';
	for (a=0; a<=listeglobal.length-1; a++) { // Boucle (pour a allant de 0 à taille de la liste au pas de 1)
		listeglobal.sort(function(a,b){return a[0] - b[0]}); // Tri les 1ères valeurs de la liste dans l'ordre croissant
		var insertline = document.getElementById('liste').insertRow(-1); // Insère une nouvelle ligne dans le tableau (HTML)
		var place = insertline.insertCell(0); // Insère une nouvelle cellule dans « Place »
		place.innerHTML += listeglobal[a][0]; // Remplace le contenu de la cellule par une 1ère valeur de la liste
		var nom = insertline.insertCell(1); // Insère une nouvelle cellule dans « Nom/prénom »
		nom.innerHTML += listeglobal[a][1]; // Remplace le contenu de la cellule par une 2ère valeur de la liste
		var dossard = insertline.insertCell(2); // Insère une nouvelle cellule dans « Dossard »
		dossard.innerHTML += listeglobal[a][2]; // Remplace le contenu de la cellule par une 3ère valeur de la liste
	}
}

AfficherClassement(); // Active la fonction immédiatement à l'ouverture

// ------------------------------------------------------------------------
// TRIER PLACES PAR ORDRE DECROISSANT OU CROISSANT AU SECOND CLIQUE
// ------------------------------------------------------------------------

document.getElementById('place').onclick = function() {
	if (trier == false) {
		document.location.href = '#tri_place_decroissant';
		document.getElementById('liste').innerHTML = '';
		for (a=0; a<=listeglobal.length-1; a++) {
			listeglobal.sort(function(a,b){return b[0] - a[0]});
			var insertline = document.getElementById('liste').insertRow(-1);
			var place = insertline.insertCell(0);
			place.innerHTML += listeglobal[a][0];
			var nom = insertline.insertCell(1);
			nom.innerHTML += listeglobal[a][1];
			var dossard = insertline.insertCell(2);
			dossard.innerHTML += listeglobal[a][2];
		}
		trier = true;
	}
	else {
		document.getElementById('liste').innerHTML = '';
		AfficherClassement();
		trier = false;
	}
}

// ------------------------------------------------------------------------
// TRIER NOM NORMALEMENT OU INVERSEMENT
// ------------------------------------------------------------------------

document.getElementById('nom').onclick = function() {
	if (trier == false) {
		document.location.href = '#tri_nom';
		document.getElementById('liste').innerHTML = '';
		for (a=0; a<=listeglobal.length-1; a++) {
			listeglobal.sort(function(a,b){return a[1].localeCompare(b[1])});
			var insertline = document.getElementById('liste').insertRow(-1);
			var place = insertline.insertCell(0);
			place.innerHTML += listeglobal[a][0];
			var nom = insertline.insertCell(1);
			nom.innerHTML += listeglobal[a][1];
			var dossard = insertline.insertCell(2);
			dossard.innerHTML += listeglobal[a][2];
		}
		trier = true;
	}
	else {
		document.location.href = '#tri_nom_inverse';
		document.getElementById('liste').innerHTML = '';
		for (a=0; a<=listeglobal.length-1; a++) {
			listeglobal.sort(function(a,b){return b[1].localeCompare(a[1])});
			var insertline = document.getElementById('liste').insertRow(-1);
			var place = insertline.insertCell(0);
			place.innerHTML += listeglobal[a][0];
			var nom = insertline.insertCell(1);
			nom.innerHTML += listeglobal[a][1];
			var dossard = insertline.insertCell(2);
			dossard.innerHTML += listeglobal[a][2];
		}
		trier = false;
	}
}

// ------------------------------------------------------------------------
// TRIER DOSSARDS PAR ORDRE CROISSANT OU DECROISSANT AU SECOND CLIQUE
// ------------------------------------------------------------------------

document.getElementById('dossard').onclick = function() {
	if (trier == false) {
		document.location.href = '#tri_dossard_croissant';
		document.getElementById('liste').innerHTML = '';
		for (a=0; a<=listeglobal.length-1; a++) {
			listeglobal.sort(function(a,b){return a[2] - b[2]});
			var insertline = document.getElementById('liste').insertRow(-1);
			var place = insertline.insertCell(0);
			place.innerHTML += listeglobal[a][0];
			var nom = insertline.insertCell(1);
			nom.innerHTML += listeglobal[a][1];
			var dossard = insertline.insertCell(2);
			dossard.innerHTML += listeglobal[a][2];
		}
		trier = true;
	}
	else {
		document.location.href = '#tri_dossard_decroissant';
		document.getElementById('liste').innerHTML = '';
		for (a=0; a<=listeglobal.length-1; a++) {
			listeglobal.sort(function(a,b){return b[2] - a[2]});
			var insertline = document.getElementById('liste').insertRow(-1);
			var place = insertline.insertCell(0);
			place.innerHTML += listeglobal[a][0];
			var nom = insertline.insertCell(1);
			nom.innerHTML += listeglobal[a][1];
			var dossard = insertline.insertCell(2);
			dossard.innerHTML += listeglobal[a][2];
		}
		trier = false;
	}
}