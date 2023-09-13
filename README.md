
# Tema 6 HTML + CSS + JS

- Pentru imaginea de background am folosit Bootstrap Carousel si sunt 2 imagini care se interschimba o data la 2 secunde.

- Pentru a popula cele 2 dropdown-uri am folosit JS astfel:
	- Am luat elementele cu ID-ul "leaveFrom" respectiv "to"
	> var  leaveFromDropdown  =  document.getElementById("leaveFrom");
	> var  toDropdown  =  document.getElementById("to");
	-	Dupa care am populat dropdown-ul si cu array-ul definit static
	> var  destinations  = ["Bucuresti", "Contanta", "Timisoara", "Brasov", "Sibiu"];
- Am introdus si un DatePicker
- Pentru a se schimba pozele cand se da hover cu mouse-ul am implementat in CSS prin schimbarea opacitatii celei de-a doua poze
- Am implementat 3 animatii:
	 - Tranzitia pozelor cand se da hover cu mouse-ul
	 - Butonul de Search pulseaza
	 - Butoanele de "Mai multe informatii" se fac mai mari cand se da hover pe ele
- Pentru icontiele cu "Facebook", "Twitter" si "Instagram" am folosit biblioteca "Font Awesome"
- Cand se apasa pe butonul Search se filtreaza random cele 6 destinatii hard-codate:
	- Am definit functia care se va apela cand se va apasa pe buton
		>  $(".pulse").click(function()
	- In aceasta functie ascundem toate elementele cu clasa "destination-cell"
		> var  accommodations  =  $(".destination-cell");
		> accommodations.hide();
	- Generam un numar random care va reprezenta cate destinatii vor fi afisate
		> var  randomCount  =  Math.floor(Math.random() *  accommodations.length) +  1;
	- Dupa care vom adauga intr-un vector randomIndexes pana cand size-ul acestuia va fi cat randomCount
	- In final afisam doar destinatiile cu ID-urile respective
- Exista si cel putin 5 tag-uri html
- Daca se apasa dublu-click pe textul de copyright **©**TravelBook se va afisa o imagine pe tot ecranul cu Joker. Acesta este Easter Egg-ul

