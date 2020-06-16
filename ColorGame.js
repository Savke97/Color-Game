var mod = 6;
var boje = generisiBoje(mod);
var kocke = document.querySelectorAll(".kocka");
var izabranaBoja = izaberiBoju();
var BojaKojaSeBira = document.getElementById("Trazena");
var Poruka = document.getElementById("poruka")
var h1 = document.querySelector("h1");
var dugmeNovaBoja = document.querySelector("#noveBoje");
var DugmeTesko = document.querySelector("#Tesko");
var LakoTesko = document.querySelector("#Lako");

DugmeTesko.addEventListener("click", function(){

	LakoTesko.classList.remove("izabran");
	DugmeTesko.classList.add("izabran");
	mod = 6;

	boje = generisiBoje(mod);

	izabranaBoja = izaberiBoju();

	BojaKojaSeBira.textContent = izabranaBoja;

	for( var i = 0; i<kocke.length; i++){
			kocke[i].style.background = boje[i];
			kocke[i].style.display = "block"
	}
	h1.style.background = "steelblue";

	Poruka.textContent = "";
	
})

LakoTesko.addEventListener("click", function(){
	 
	LakoTesko.classList.add("izabran");
	DugmeTesko.classList.remove("izabran");
	mod = 3;
	boje = generisiBoje(mod);

	izabranaBoja = izaberiBoju();

	BojaKojaSeBira.textContent = izabranaBoja;

	for( var i = 0; i<kocke.length; i++){
		if(boje[i]){
			kocke[i].style.background = boje[i];
		}else{
			kocke[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";

	Poruka.textContent = "";

})


dugmeNovaBoja.addEventListener("click", function(){
	
		boje = generisiBoje(mod);

		izabranaBoja = izaberiBoju();

		BojaKojaSeBira.textContent = izabranaBoja;

		for(var i = 0; i<kocke.length; i++){
			kocke[i].style.background = boje[i];
		}
		h1.style.background = "steelblue";

		dugmeNovaBoja.textContent = "Nove Boje";

		Poruka.textContent = "";
})

BojaKojaSeBira.textContent = izabranaBoja;

for(var i = 0; i< kocke.length; i++){
	kocke[i].style.background = boje[i];

	/* kad se klikne kocka sledece radi */
	kocke[i].addEventListener("click", function(){
	var pretisnutaKocka = this.style.background;

	if(pretisnutaKocka === izabranaBoja){
		Poruka.textContent = "Tacno"
		BojaKoci(pretisnutaKocka);
		dugmeNovaBoja.textContent = "Igraj ponovo?"
		h1.style.background = pretisnutaKocka;
	}else{
		this.style.background ="#232323"
		Poruka.textContent = "Probaj ponovo!"
	}
	})
}

// Funkcija koja menja boje kocke u jednu koja se trazi
function BojaKoci(trazenaBoja){
	for(var i =0; i < kocke.length; i++){
		kocke[i].style.background = trazenaBoja;
	}
}

//Funkscija koja bira boju za sledece biranje
function izaberiBoju(){
	var rendom =	Math.floor(Math.random()* boje.length);
	return boje[rendom];
}

//Funkcija koja generise boje
function generisiBoje(brojBoja){
	var arr = [];

	for( var i = 0; i < brojBoja; i++){
		var r = Math.floor(Math.random() * 256);
		var g = Math.floor(Math.random() * 256);
		var b = Math.floor(Math.random() * 256);

		arr.push("rgb(" + r +", " + g +", "+  b +")");
	}

	return arr;
}
