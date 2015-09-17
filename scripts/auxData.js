function ulAuxilaryData(route, data){

	var url, path, i;

	//extract the base URL where this page is found.
	url = window.location.protocol + "//" + window.location.host 
	path = window.location.pathname.split('/').slice(0,-1);
	for(i=0; i<path.length; i++){
		url += path[i] + '/'
	}

	if(route == "{{species}}/{{A}}"){
		return {'chargeStates': [species2z('He'),chemCase('he'),3]}
	}
	return {}
}

function ulCallback(){
	
}

function species2z(species){
	chem = chemCase(species);
	return parseInt(dataStore.elements[chem].Z) 
}

function chemCase(string){
	//take a string and ensure that the first, and only the first, character is capitalized.
	str = string.toLowerCase()
	return str.charAt(0).toUpperCase() + str.slice(1);
}

//global datastore for interesting facts
dataStore = {}
dataStore.elements = {"Ru": {"Z": "44"}, "Re": {"Z": "75"}, "Rf": {"Z": "104"}, "Ra": {"Z": "88"}, "Rb": {"Z": "37"}, "Rn": {"Z": "86"}, "Rh": {"Z": "45"}, "Be": {"Z": "4"}, "Ba": {"Z": "56"}, "Bh": {"Z": "107"}, "Bi": {"Z": "83"}, "Bk": {"Z": "97"}, "Br": {"Z": "35"}, "H": {"Z": "1"}, "P": {"Z": "15"}, "Os": {"Z": "76"}, "Hg": {"Z": "80"}, "Ge": {"Z": "32"}, "Gd": {"Z": "64"}, "Ga": {"Z": "31"}, "Uub": {"Z": "112"}, "Pr": {"Z": "59"}, "Pt": {"Z": "78"}, "Pu": {"Z": "94"}, "C": {"Z": "6"}, "Pb": {"Z": "82"}, "Pa": {"Z": "91"}, "Pd": {"Z": "46"}, "Xe": {"Z": "54"}, "Po": {"Z": "84"}, "Pm": {"Z": "61"}, "Uuu": {"Z": "111"}, "Hs": {"Z": "108"}, "Uun": {"Z": "110"}, "Ho": {"Z": "67"}, "Hf": {"Z": "72"}, "Mo": {"Z": "42"}, "He": {"Z": "2"}, "Md": {"Z": "101"}, "Mg": {"Z": "12"}, "K": {"Z": "19"}, "Mn": {"Z": "25"}, "O": {"Z": "8"}, "Mt": {"Z": "109"}, "S": {"Z": "16"}, "W": {"Z": "74"}, "Zn": {"Z": "30"}, "Eu": {"Z": "63"}, "Es": {"Z": "99"}, "Er": {"Z": "68"}, "Ni": {"Z": "28"}, "No": {"Z": "102"}, "Na": {"Z": "11"}, "Nb": {"Z": "41"}, "Nd": {"Z": "60"}, "Ne": {"Z": "10"}, "Np": {"Z": "93"}, "Fr": {"Z": "87"}, "Fe": {"Z": "26"}, "Fm": {"Z": "100"}, "B": {"Z": "5"}, "F": {"Z": "9"}, "Sr": {"Z": "38"}, "N": {"Z": "7"}, "Kr": {"Z": "36"}, "Si": {"Z": "14"}, "Sn": {"Z": "50"}, "Sm": {"Z": "62"}, "V": {"Z": "23"}, "Sc": {"Z": "21"}, "Sb": {"Z": "51"}, "Sg": {"Z": "106"}, "Se": {"Z": "34"}, "Co": {"Z": "27"}, "Cm": {"Z": "96"}, "Cl": {"Z": "17"}, "Ca": {"Z": "20"}, "Cf": {"Z": "98"}, "Ce": {"Z": "58"}, "Cd": {"Z": "48"}, "Tm": {"Z": "69"}, "Cs": {"Z": "55"}, "Cr": {"Z": "24"}, "Cu": {"Z": "29"}, "La": {"Z": "57"}, "Li": {"Z": "3"}, "Tl": {"Z": "81"}, "Lu": {"Z": "71"}, "Lr": {"Z": "103"}, "Th": {"Z": "90"}, "Ti": {"Z": "22"}, "Te": {"Z": "52"}, "Tb": {"Z": "65"}, "Tc": {"Z": "43"}, "Ta": {"Z": "73"}, "Yb": {"Z": "70"}, "Db": {"Z": "105"}, "Zr": {"Z": "40"}, "Dy": {"Z": "66"}, "I": {"Z": "53"}, "U": {"Z": "92"}, "Y": {"Z": "39"}, "Ac": {"Z": "89"}, "Ag": {"Z": "47"}, "Ir": {"Z": "77"}, "Am": {"Z": "95"}, "Al": {"Z": "13"}, "As": {"Z": "33"}, "Ar": {"Z": "18"}, "Au": {"Z": "79"}, "At": {"Z": "85"}, "In": {"Z": "49"}}

