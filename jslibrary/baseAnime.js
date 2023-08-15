/**
 * @author Marek
 * 
 * used HTML ID: 
 *  - myDIV : pro animacni promennou co se bude posouvat
 *  - from : animacni promenna kde zacina
 *  - to : animacni promenna kde konci
 */
var colorOfMediateStep="mediateStep";
var colorOfAnimeStep="animeStep";
var colorOfOlder="olderVariables";
var colorOfImported="imported";

//pro všechny potřeby
/***
 * count distance for animate middle two objects
 * @param from @type HTMLObject - textarea, where will be added symbols
 * @param to @type string
 * @return nothing
 * @exception nothing
 */
function countDistance(from,to)
{ 	
	//kontrola ID
	{
		var oldID="";
		var oldID2="";
		if(from.getAttribute("id")!=null)
		{
			oldID=from.getAttribute("id");
		}
		//document.getElementById("control").innerHTML += "staré ID je "+ oldID;	
		if(to.getAttribute("id")!=null)
		{
			oldID2=to.getAttribute("id");
		}
		//document.getElementById("control").innerHTML += "staré ID2 je "+ oldID2;
	}
	
	//získání pozice
	from.setAttribute("id","from");
	to.setAttribute("id","to");	
	var from1=$("#from");
	var to1 = $("#to");
	var fromPosition = from1.position();
	var toPosition = to1.position();
  
	//zohlednit styly textu a velikost pole a podle toho dopočítat potřebný posun
	var widthFrom = $("#from").width();
	var widthTo = $("#to").width();
	//document.getElementById("control").innerHTML += "<br> sirka vychozi pozice je: "+ sirkafrom + " sirka nasledujici pozice je: " + sirkato;//pro kontrolu
	//paddingRight, borderRight, marginRight a pa..Left ...(odsazeni, ramecek, okraj)

		
//	var x = fromPosition.left-toPosition.left; //při formátování zleva
	var x = (fromPosition.left-toPosition.left)+(widthFrom/2)-(widthTo/2); //při formátování na střed
	//pri formatovani zprava??
	var y = ((fromPosition.top-toPosition.top));	
	var xy = [x,y];
	
	//uklid id
	{ 
		if(oldID=="")
		{
			from.removeAttribute("id");
		}
		else
		{
			from.setAttribute("id",oldID);
		}
		if(oldID2=="")
		{
			to.removeAttribute("id");
		}
		else
		{
			to.setAttribute("id",oldID2);
		}
	}	
	return xy ;
}

/**
 * anime to and create. After remove in from
 *
 * //prevzato z netu a pozmeneny promenne
 * @param textarea @type HTMLObject - textarea, where will be added symbols
 * @param text @type string
 * @return nothing
 * @exception nothing
 */
function animeFromInTable(table,fromRow,fromCell,toRow,toCell, speed) 
{	
	var from = table.rows[fromRow].cells[fromCell];
	var to = table.rows[toRow].cells[toCell];
	var distance = countDistance(to,from);
	from.innerHTML="<span id='myDiv' style='position:relative;'>"+to.innerHTML+"</div>";
	$("#myDiv")		.animate({left:distance[0]+'px',top:distance[1]+'px'},speed-750)
  					.hide(120);				
  	setTimeout(function()
  		{
  			from.innerHTML="";	//smazani relativni pozice po case 
  		}
  	,speed-5);
}

/**
 * copy from object and anime to
 * 
 * @param {HTMLTableObject} table - table where will be animate
 * @param {Integer} fromRow - number of row where will started animation
 * @param {Integer} fromCell -number of cell/column where will started animation
 * @param {Integer} toRow - number of row where will finished animation
 * @param {Integer} toCell - number of cell/column where will finished animation
 * @param {Integer} speed -
 * @return nothing
 * @exception nothing
 */
function animeThereInTable(table,fromRow,fromCell,toRow,toCell, speed) 
{	
	var from = table.rows[fromRow].cells[fromCell];
	var to = table.rows[toRow].cells[toCell];
	var distance = countDistance(from,to);
	to.innerHTML="<span id='myDiv' style='position:relative;'>"+from.innerHTML+"</div>";
	$("#myDiv")	.hide()
  					.animate({left:distance[0]+'px',top:distance[1]+'px'})
  					.show(120)
  					.animate({left:'0px',top:'0px'}, speed-750);
  	setTimeout(function()
  		{
  			to.innerHTML=from.innerHTML;	//smazani relativni pozice po case 
  		}
  	,speed-5);
}

/**
 * copy from object and anime to (in diferent two tables)
 * 
 * @param {HTMLTableObject} table - table where will be animate
 * @param {Integer} fromRow - number of row where will started animation
 * @param {Integer} fromCell -number of cell/column where will started animation
 * @param {Integer} toRow - number of row where will finished animation
 * @param {Integer} toCell - number of cell/column where will finished animation
 * @param {Integer} speed -
 * @return nothing
 * @exception nothing
 */
function animeThereInTable2(table,table2,fromRow,fromCell,toRow,toCell, speed) 
{	
	var from = table.rows[fromRow].cells[fromCell];
	var to = table2.rows[toRow].cells[toCell];
	var distance = countDistance(from,to);
	to.innerHTML="<span id='myDiv' style='position:relative;'>"+from.innerHTML+"</div>";
	$("#myDiv")	.hide()
  					.animate({left:distance[0]+'px',top:distance[1]+'px'})
  					.show(120)
  					.animate({left:'0px',top:'0px'}, speed-750);
  	setTimeout(function()
  		{
  			to.innerHTML=from.innerHTML;	//smazani relativni pozice po case 
  		}
  	,speed-5);
}

/**
 * copy from object and anime to (in especialy to spans)
 * 
 * @param {HTMLTableObject} table - table where will be animate
 * @param {Integer} fromRow - number of row where will started animation
 * @param {Integer} fromCell -number of cell/column where will started animation
 * @param {Integer} toRow - number of row where will finished animation
 * @param {Integer} toCell - number of cell/column where will finished animation
 * @param {Integer} speed -
 * @return nothing
 * @exception nothing
 */
function animeThereInTableSpan(table,fromRow,fromCell,fromSpan,toRow,toCell,toSpan, speed) 
{	
	var from = table.rows[fromRow].cells[fromCell].getElementsByTagName("span")[fromSpan];
	var to = table.rows[toRow].cells[toCell].getElementsByTagName("span")[toSpan];
	var distance = countDistance(from,to);
	to.innerHTML="<span id='myDiv' style='position:relative;'>"+from.innerHTML+"</div>";
	$("#myDiv")	.hide()
  					.animate({left:distance[0]+'px',top:distance[1]+'px'})
  					.show(120)
  					.animate({left:'0px',top:'0px'}, speed-750);
  	setTimeout(function()
  		{
  			to.innerHTML=from.innerHTML;	//smazani relativni pozice po case 
  		}
  	,speed-5);
}

/**
 * copy from object and anime there and back and remove
 * 
 * @param {HTMLTableObject} table - table where will be animate
 * @param {Integer} fromRow - number of row where will started animation
 * @param {Integer} fromCell -number of cell/column where will started animation
 * @param {Integer} toRow - number of row where will finished animation
 * @param {Integer} toCell - number of cell/column where will finished animation
 * @param {Integer} speed 
 * @return nothing
 * @exception nothing
 */
function animeTravelInTable(table,fromRow,fromCell,toRow,toCell, speed)
{	
	var from = table.rows[fromRow].cells[fromCell];
	var to = table.rows[toRow].cells[toCell];
	var distance = countDistance(to,from); //opacne protoze animacni pochyb je obrácený
	var oldFrom = from.innerHTML;
	from.innerHTML="<span id='myDiv' style='position:relative;'>"+oldFrom+"</div>";
	$("#myDiv")		.animate({left:distance[0]+'px',top:distance[1]+'px'}, (speed/3)-2)
  					.delay((speed/3)-2)
  					.animate({left:'0px',top:'0px'}, (speed/3)-2);
  	setTimeout(function()
  		{
  			from.innerHTML=oldFrom;	//smazani relativni pozice po case 
  		}
  	,speed+10);
}

/***
 * create from object and anime show
 * 
 * @param {HTMLTableObject} table - table where will be animate
 * @param {Integer} what- number of row where will started animation
 * @param {Integer} row - number of row where will finished animation
 * @param {Integer} cell - number of cell/column where will finished animation
 * @param {Integer} speed 
 * @return nothing
 * @exception nothing
 */
function animeShowInTable(table,what,row,cell,speed) 
{	
	var where = table.rows[row].cells[cell];
	where.innerHTML="<span id='myDiv' style='position:relative;'>"+what+"</div>";
	$("#myDiv")	.hide()
  				//.show(speed); /*1 typ zobrazeni*/
  				.fadeIn(speed); /*2 typ zobrazeni*/
  	setTimeout(function()
  		{
  			where.innerHTML=what;	//smazani relativni pozice po case 
  		}
  	,speed-5);
}


//pro klasicke pravdivostni tabulky

/***
 * create from object and anime show
 * 
 * @param {HTMLTableObject} table - table where will be animate
 * @param {Integer} what- number of row where will started animation
 * @param {Integer} row - number of row where will finished animation
 * @param {Integer} cell - number of cell/column where will finished animation
 * @param {Integer} speed 
 * @return nothing
 * @exception nothing
 */
function baseTable(tabulka,cells,rows,numOfVariables){
	//TODO udělat vynulovaci tabulku univerzalne pro ruzne velikosti
	if(numOfVariables!=null){
		var variablesNumColumn= Math.pow(2,numOfVariables);//vypocet potrebne delky sloupce
		var variablesNumColumn2= variablesNumColumn; //promenna pro odcykleni 0 a 1
		//tabulka s promennymi
		//pro sloupce promennych
		for(k=0;k<numOfVariables;k++){
			variablesNumColumn2=variablesNumColumn2/2;
			for(l=1;l<=variablesNumColumn;l++){	//ok
				if(l<=variablesNumColumn2*2){	//ok
					
					
					
					
					if((l>variablesNumColumn2)&&(l<=variablesNumColumn2*2)){ //ok
						tabulka.rows[l].cells[k].innerHTML="1";
						tabulka.rows[l].cells[k].removeAttribute("class");
					}
					else{
						tabulka.rows[l].cells[k].innerHTML="0";
						tabulka.rows[l].cells[k].removeAttribute("class");
					}
				}
				else{
					
					//slozity vzorec pro vypocet mensiho cyklu v sloupci pro pravidelne zobrazeni 0 a 1 
					var m=1;
					while(variablesNumColumn==variablesNumColumn2*(2*m)){
						if((l>variablesNumColumn2*m)&&(l<=variablesNumColumn2*(2*m))){ //ok
							tabulka.rows[l].cells[k].innerHTML="1";
							tabulka.rows[l].cells[k].removeAttribute("class");
						}
						else{
							tabulka.rows[l].cells[k].innerHTML="0";
							tabulka.rows[l].cells[k].removeAttribute("class");
						}
						m++;
					}
					
				}
			}
			
		}
		
		//tabulka napravo od promennych
		for(i=1;i<=rows;i++){
			for(j=numOfVariables;j<cells+numOfVariables;j++){
				tabulka.rows[i].cells[j].innerHTML="";
  				tabulka.rows[i].cells[j].removeAttribute("class");
		}
	}
	}
	else
	for(i=1;i<=rows;i++){
		for(j=0;j<cells;j++){
			tabulka.rows[i].cells[j].innerHTML="";
  			tabulka.rows[i].cells[j].removeAttribute("class");
		}
	}
	
}

/*function baseResolut(tabulka,cells,rows,numOfVariables){
	//TODO pozdeji to udelat pokud je mozne, a bude jeste potrebne
	if(numOfVariables!=null){
		var variablesNumColumn= Math.pow(2,numOfVariables);//vypocet potrebne delky sloupce
		var variablesNumColumn2= variablesNumColumn; //promenna pro odcykleni 0 a 1
		//tabulka s promennymi
		//pro sloupce promennych
		for(k=0;k<numOfVariables;k++){
			variablesNumColumn2=variablesNumColumn2/2;
			for(l=1;l<=variablesNumColumn;l++){	//ok
				if(l<=variablesNumColumn2*2){	//ok
					
					
					
					
					if((l>variablesNumColumn2)&&(l<=variablesNumColumn2*2)){ //ok
						tabulka.rows[l].cells[k].innerHTML="1";
						tabulka.rows[l].cells[k].removeAttribute("class");
					}
					else{
						tabulka.rows[l].cells[k].innerHTML="0";
						tabulka.rows[l].cells[k].removeAttribute("class");
					}
				}
				else{
					
					//slozity vzorec pro vypocet mensiho cyklu v sloupci pro pravidelne zobrazeni 0 a 1 
					var m=1;
					while(variablesNumColumn==variablesNumColumn2*(2*m)){
						if((l>variablesNumColumn2*m)&&(l<=variablesNumColumn2*(2*m))){ //ok
							tabulka.rows[l].cells[k].innerHTML="1";
							tabulka.rows[l].cells[k].removeAttribute("class");
						}
						else{
							tabulka.rows[l].cells[k].innerHTML="0";
							tabulka.rows[l].cells[k].removeAttribute("class");
						}
						m++;
					}
					
				}
			}
			
		}
		
		//tabulka napravo od promennych
		for(i=1;i<=rows;i++){
			for(j=numOfVariables;j<cells+numOfVariables;j++){
				tabulka.rows[i].cells[j].innerHTML="";
  				tabulka.rows[i].cells[j].removeAttribute("class");
		}
	}
	}
	else
	for(i=1;i<=rows;i++){
		for(j=0;j<cells;j++){
			tabulka.rows[i].cells[j].innerHTML="";
  			tabulka.rows[i].cells[j].removeAttribute("class");
		}
	}
	
}*/

/**
 * instert the symbol into the textarea
 *
 * korekce casovani hotovo
 * 
 * //prevzato z netu a pozmeneny promenne
 * @param textarea @type HTMLObject - textarea, where will be added symbols
 * @param text @type string
 * @return nothing
 * @exception nothing
 */
function animeVariables(table,fromCell,toCell,myTime)
{	
	//vypocet univerzalni vzdalenosti
	var from = table.rows[0].cells[fromCell]; //univerzalni od (v celem sloupci)
	var to = table.rows[0].cells[toCell];	//univerzalni do (v celem sloupci)
	var distance = countDistance(from,to);	//vzdalenost	
	var numOfRows= table.rows.length;	//pocet radku

  	from.setAttribute("class",colorOfImported);
  	to.setAttribute("class",colorOfImported);


	var varID = "myDiv";//promenna pro operaci s DOM
	//od 1 do pocetRadku-1	
	for(i=1;i<numOfRows;i++)
	{
		var tempFrom = table.rows[i].cells[fromCell];//lokalni promenna od (konkretni uzel)
		tempFrom.setAttribute("class",colorOfMediateStep);//obarveni
		
		var tempTo = table.rows[i].cells[toCell];	//lokalni promenna do (konkretni uzel)
		var tempVarID = varID + i;					//odliseni ID aby mohla fungovat animace
		tempTo.innerHTML="<span id='" + tempVarID + "' style='position:relative;'>"+tempFrom.innerHTML+"</div>";
		tempTo.setAttribute("class",colorOfMediateStep);
		
		$("#"+tempVarID)	.hide()
  							.animate({left:distance[0]+'px',top:distance[1]+'px'})
  							.show(120)
  							.animate({left:'0px',top:'0px'},myTime-750);
	}
		
	setTimeout(function() //úklid ID
  		{
  			for(i=1;i<numOfRows;i++)
  			{
  				var tempFrom = table.rows[i].cells[fromCell];
  				tempFrom.removeAttribute("class");
				var tempTo = table.rows[i].cells[toCell];
				tempTo.innerHTML=tempFrom.innerHTML;
				tempTo.removeAttribute("class");
  			}
  			
  			from.removeAttribute("class");
  			to.removeAttribute("class");
  			//kontrola puvodni id?
  		}
  	,myTime-5);
};

/***
 * count distance for animate middle two objects
 * @param from @type HTMLObject - textarea, where will be added symbols
 * @param to @type string
 * @return nothing
 * @exception nothing
 */
function simpleNot(table,row,fromCell,toCell,myTime){
	var from = table.rows[row].cells[fromCell];
	var into = table.rows[row].cells[toCell];
	var connection = table.rows[0].cells[toCell]; //spojka
			
			time=setTimeout(function(){
				into.setAttribute("class",colorOfImported); //zvyrazneni not
				
				if(from.innerHTML==1){
					from.setAttribute("class",colorOfMediateStep);		//barva odkud se bere
					into.setAttribute("class",colorOfAnimeStep);			//barva vkladajici									
					time=setTimeout(function(){
						animeShowInTable(table,0,row,toCell,(myTime/3)-5);
						
					},myTime/3);
							
				}
				else if(from.innerHTML==0){
					from.setAttribute("class",colorOfMediateStep);	//barva odkud se bere
					into.setAttribute("class",colorOfAnimeStep);		//barva kam se dava
								time=setTimeout(function(){
									animeShowInTable(table,1,row,toCell,(myTime/3)-5);									
								},myTime/3);					
				}
			},myTime/3);		
			
			time=setTimeout(function(){
  					from.setAttribute("class",colorOfOlder);
					into.removeAttribute("class");	
 
  			},myTime+240);	
}

/***
 * count distance for animate middle two objects
 * @param from @type HTMLObject - textarea, where will be added symbols
 * @param to @type string
 * @return nothing
 * @exception nothing
 */
function simpleAnd(table,row,fromCell1,fromCell2,toCell,myTime){
	var from = table.rows[row].cells[fromCell1];
	var from2 = table.rows[row].cells[fromCell2];
	var into = table.rows[row].cells[toCell];
	var connection = table.rows[0].cells[toCell]; //spojka
			connection.setAttribute("class",colorOfImported);//možná nemusí
			
				from.setAttribute("class",colorOfMediateStep); //zvyrazneni promennych k vypoctu
				from2.setAttribute("class",colorOfMediateStep); //zvyrazneni promennych k vypoctu
				into.setAttribute("class",colorOfAnimeStep); //zvyrazneni vypoctene promene
				if(from.innerHTML==1){

					if(from2.innerHTML==1){
						animeShowInTable(table,"1",row,toCell,myTime-230); //zjeveni 1							
					}
					else if(from2.innerHTML==0){
						animeShowInTable(table,"0",row,toCell,myTime-230); //zjeveni 0						
					}
				}
				else if(from.innerHTML==0){
					
					if(from2.innerHTML==1){
						animeShowInTable(table,"0",row,toCell,myTime-230); //zjeveni 0					
					}
					else if(from2.innerHTML==0){
						animeShowInTable(table,"0",row,toCell,myTime-230); //zjeveni 0					
					}				
				}
			
			time=setTimeout(function(){
  										from.setAttribute("class",colorOfOlder);
										from2.setAttribute("class",colorOfOlder);
										
										time=setTimeout(function(){
										into.removeAttribute("class");		
										},160);
  			},myTime-160);	
}

/***
 * count distance for animate middle two objects
 * @param from @type HTMLObject - textarea, where will be added symbols
 * @param to @type string
 * @return nothing
 * @exception nothing
 */
function simpleOr (table,row,fromCell1,fromCell2,toCell,myTime){
		var from = table.rows[row].cells[fromCell1];
	var from2 = table.rows[row].cells[fromCell2];
	var into = table.rows[row].cells[toCell];
	var connection = table.rows[0].cells[toCell]; //spojka
			connection.setAttribute("class",colorOfImported);//možná nemusí
			
				from.setAttribute("class",colorOfMediateStep); //zvyrazneni promennych k vypoctu
				from2.setAttribute("class",colorOfMediateStep); //zvyrazneni promennych k vypoctu
				into.setAttribute("class",colorOfAnimeStep); //zvyrazneni vypoctene promene
				if(from.innerHTML==1){

					if(from2.innerHTML==1){						
								animeShowInTable(table,"1",row,toCell,myTime-230); //zjeveni 1													
					}
					else if(from2.innerHTML==0){
								animeShowInTable(table,"1",row,toCell,myTime-230); //zjeveni 0					
					}
				}
				else if(from.innerHTML==0){
					if(from2.innerHTML==1){
								animeShowInTable(table,"1",row,toCell,myTime-230); //zjeveni 0						
					}
					else if(from2.innerHTML==0){
								animeShowInTable(table,"0",row,toCell,myTime-230); //zjeveni 0					
					}
					
				}
			
			time=setTimeout(function(){
  										from.setAttribute("class",colorOfOlder);
										from2.setAttribute("class",colorOfOlder);
										time=setTimeout(function(){
											into.removeAttribute("class");	
										},160);
  			},myTime-160);	
}

/***
 * count distance for animate middle two objects
 * @param from @type HTMLObject - textarea, where will be added symbols
 * @param to @type string
 * @return nothing
 * @exception nothing
 */
function simpleImpl (table,row,fromCell1,fromCell2,toCell,myTime){
	var from = table.rows[row].cells[fromCell1];
	var from2 = table.rows[row].cells[fromCell2];
	var into = table.rows[row].cells[toCell];
	var connection = table.rows[0].cells[toCell]; //spojka
			connection.setAttribute("class",colorOfImported);//možná nemusí
			
				from.setAttribute("class",colorOfMediateStep); //zvyrazneni promennych k vypoctu
				from2.setAttribute("class",colorOfMediateStep); //zvyrazneni promennych k vypoctu
				into.setAttribute("class",colorOfAnimeStep); //zvyrazneni vypoctene promene
				if(from.innerHTML==1){
					if(from2.innerHTML==1){						
								animeShowInTable(table,"1",row,toCell,myTime-230); //zjeveni 1							
						
					}
					else if(from2.innerHTML==0){
								animeShowInTable(table,"0",row,toCell,myTime-230); //zjeveni 0					
					}
				}
				else if(from.innerHTML==0){
					animeShowInTable(table,"1",row,toCell,myTime-230); //zjeveni 1					
				}
			
			time=setTimeout(function(){
  										from.setAttribute("class",colorOfOlder);
										from2.setAttribute("class",colorOfOlder);
										time=setTimeout(function(){
											into.removeAttribute("class");	
										},160);
  			},myTime-160);	
}

/***
 * count distance for animate middle two objects
 * @param from @type HTMLObject - textarea, where will be added symbols
 * @param to @type string
 * @return nothing
 * @exception nothing
 */
function simpleEque (table,row,fromCell1,fromCell2,toCell,myTime){
	var from = table.rows[row].cells[fromCell1];
	var from2 = table.rows[row].cells[fromCell2];
	var into = table.rows[row].cells[toCell];
	var connection = table.rows[0].cells[toCell]; //spojka
			connection.setAttribute("class",colorOfImported);//možná nemusí
			
				from.setAttribute("class",colorOfMediateStep); //zvyrazneni promennych k vypoctu
				from2.setAttribute("class",colorOfMediateStep); //zvyrazneni promennych k vypoctu
				into.setAttribute("class",colorOfAnimeStep); //zvyrazneni vypoctene promene
				if(from.innerHTML==1){
					if(from2.innerHTML==1){						
								animeShowInTable(table,"1",row,toCell,myTime-230); //zjeveni 1											
					}
					else if(from2.innerHTML==0){
								animeShowInTable(table,"0",row,toCell,myTime-230); //zjeveni 0						
					}
				}
				else if(from.innerHTML==0){
					if(from2.innerHTML==1){
								animeShowInTable(table,"0",row,toCell,myTime-230); //zjeveni 0				
					}
					else if(from2.innerHTML==0){
								animeShowInTable(table,"1",row,toCell,myTime-230); //zjeveni 1						
					}
					
				}
			
			time=setTimeout(function(){
  										from.setAttribute("class",colorOfOlder);
										from2.setAttribute("class",colorOfOlder);
										time=setTimeout(function(){
											into.removeAttribute("class");	
										},160);
  			},myTime-160);	
}

/***
 * count distance for animate middle two objects
 * @param from @type HTMLObject - textarea, where will be added symbols
 * @param to @type string
 * @return nothing
 * @exception nothing
 */
function animeColumn(table,fromCell1,fromCell2,toCell,row,what,speed)
{	
	var numOfRows= table.rows.length;
	var timeForColumn= (speed*2)/numOfRows; //výpočet pro čas negace každého řádku
	if(row==0){
		var where = table.rows[0].cells[toCell]; //pro zvyrazneni hlavicky sloupce
  		where.setAttribute("class",colorOfImported);
  		setTimeout(function(){animeColumn(table,fromCell1,fromCell2,toCell,row+1,what,speed);},timeForColumn);//rekurze
  		
	}
	else if(row<numOfRows){
		switch(what){
			case "not":
				{
					simpleNot(table,row,fromCell1,toCell,timeForColumn);
					//alert("delam not");
					break;
					
				}
			case "and": 
				{
					simpleAnd(table,row,fromCell1,fromCell2,toCell,timeForColumn);
					//alert("delam and");
					break;
				}
			case "or":
				{
					simpleOr(table,row,fromCell1,fromCell2,toCell,timeForColumn);
					//alert("delam or");
					break;
				}
			case "impl":
				{
					simpleImpl(table,row,fromCell1,fromCell2,toCell,timeForColumn);
					//alert("delam impl");
					break;
				}
			case "eque":
				{
					simpleEque(table,row,fromCell1,fromCell2,toCell,timeForColumn);
					//alert("delam eque");
					break;
				}
		}
		
		setTimeout(function(){animeColumn(table,fromCell1,fromCell2,toCell,row+1,what,speed);},timeForColumn);//rekurze
	}
	else{
		var where = table.rows[0].cells[toCell]; 
		where.removeAttribute("class");//smazani zvyrazneni v hlavicce
		var temp = table.rows[numOfRows-1].cells[toCell];
		temp.removeAttribute("class"); //smazani barveni posledniho radku
	}
}

//vložit sem i časovací funkce?