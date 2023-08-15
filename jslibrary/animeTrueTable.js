/**
 *
 * library for text formula for logic
 *
 * @author Marek Bartošek
 * @version 1.0.0 18.11.2014
 */
var time;				//time in animation - TODO pozor na to dát to pak do jednoho místa


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

  	from.setAttribute("class","mediateStep");
  	to.setAttribute("class","mediateStep");


	var varID = "myDiv";//promenna pro operaci s DOM
	//od 1 do pocetRadku-1	
	for(i=1;i<numOfRows;i++)
	{
		var tempFrom = table.rows[i].cells[fromCell];//lokalni promenna od (konkretni uzel)
		var tempTo = table.rows[i].cells[toCell];	//lokalni promenna do (konkretni uzel)
		var tempVarID = varID + i;					//odliseni ID aby mohla fungovat animace
		tempTo.innerHTML="<span id='" + tempVarID + "' style='position:relative;'>"+tempFrom.innerHTML+"</div>";
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
				var tempTo = table.rows[i].cells[toCell];
				tempTo.innerHTML=tempFrom.innerHTML;
  			}
  			
  			from.removeAttribute("class");
  			to.removeAttribute("class");
  			//kontrola puvodni id?
  		}
  	,myTime-5);
};

/***
 * 
 */
function simpleNot(table,row,fromCell,toCell,myTime){
	var from = table.rows[row].cells[fromCell];
	var into = table.rows[row].cells[toCell];
	var connection = table.rows[0].cells[toCell]; //spojka
			
			time=setTimeout(function(){
				into.setAttribute("class","imported"); //zvyrazneni not
				
				if(from.innerHTML==1){
					from.setAttribute("class","correct");													
					time=setTimeout(function(){
						animeShowInTable(table,0,row,toCell,(myTime/3)-5);
					},myTime/3);
							
				}
				else if(from.innerHTML==0){
					from.setAttribute("class","correct");
								time=setTimeout(function(){
									animeShowInTable(table,1,row,toCell,(myTime/3)-5);
								},myTime/3);					
				}
			},myTime/3);		
			
			time=setTimeout(function(){
  					from.setAttribute("class","olderVariables");
					into.removeAttribute("class");	
 
  			},myTime+30);	
}

/***
 * 
 */
function simpleAnd(table,row,fromCell1,fromCell2,toCell,myTime){
	var from = table.rows[row].cells[fromCell1];
	var from2 = table.rows[row].cells[fromCell2];
	var into = table.rows[row].cells[toCell];
	var connection = table.rows[0].cells[toCell]; //spojka
			connection.setAttribute("class","imported");//možná nemusí
			
				from.setAttribute("class","correct"); //zvyrazneni promennych k vypoctu
				from2.setAttribute("class","correct"); //zvyrazneni promennych k vypoctu
				if(from.innerHTML==1){

					if(from2.innerHTML==1){
						animeShowInTable(table,"1",row,toCell,myTime); //zjeveni 1							
					}
					else if(from2.innerHTML==0){
						animeShowInTable(table,"0",row,toCell,myTime); //zjeveni 0						
					}
				}
				else if(from.innerHTML==0){
					
					if(from2.innerHTML==1){
						animeShowInTable(table,"0",row,toCell,myTime); //zjeveni 0					
					}
					else if(from2.innerHTML==0){
						animeShowInTable(table,"0",row,toCell,myTime); //zjeveni 0					
					}				
				}
			
			time=setTimeout(function(){
  										from.setAttribute("class","olderVariables");
										from2.setAttribute("class","olderVariables");
										time=setTimeout(function(){
											into.removeAttribute("class");	
										},myTime+10);
  			},myTime+5);	
}

/***
 * 
 */
function simpleOr (table,row,fromCell1,fromCell2,toCell,myTime){
		var from = table.rows[row].cells[fromCell1];
	var from2 = table.rows[row].cells[fromCell2];
	var into = table.rows[row].cells[toCell];
	var connection = table.rows[0].cells[toCell]; //spojka
			connection.setAttribute("class","imported");//možná nemusí
			
				from.setAttribute("class","correct"); //zvyrazneni promennych k vypoctu
				from2.setAttribute("class","correct"); //zvyrazneni promennych k vypoctu
				if(from.innerHTML==1){
					//from.setAttribute("class","correct");
					if(from2.innerHTML==1){
						//from2.setAttribute("class","correct");
						//time=setTimeout(function(){							
								animeShowInTable(table,"1",row,toCell,myTime); //zjeveni 1							
						//},timeOfSteps/2);
						
					}
					else if(from2.innerHTML==0){
						//from2.setAttribute("class","wrong");					
							//time=setTimeout(function(){
								//into.innerHTML=0;
								//animeThereInTable(table,row,fromCell2,row,toCell,myTime); //posune se 0 zprava
								animeShowInTable(table,"1",row,toCell,myTime); //zjeveni 0
							//},timeOfSteps);						
					}
				}
				else if(from.innerHTML==0){
					//from.setAttribute("class","wrong");
					if(from2.innerHTML==1){
						//from2.setAttribute("class","correct");

							//time=setTimeout(function(){
								//into.innerHTML=0;
								//animeThereInTable(table,row,fromCell1,row,toCell,myTime); //posune se 0 zleva
								animeShowInTable(table,"1",row,toCell,myTime); //zjeveni 0
							//},timeOfSteps);
						
					}
					else if(from2.innerHTML==0){
						//from2.setAttribute("class","wrong");

							//time=setTimeout(function(){
								animeShowInTable(table,"0",row,toCell,myTime); //zjeveni 0
							//},timeOfSteps);
						
					}
					
				}
			
			time=setTimeout(function(){
  										from.setAttribute("class","olderVariables");
										from2.setAttribute("class","olderVariables");
										time=setTimeout(function(){
											into.removeAttribute("class");	
										},myTime+10);
  			},myTime+5);	
}

/***
 * 
 */
function simpleImpl (table,row,fromCell1,fromCell2,toCell,myTime){
	var from = table.rows[row].cells[fromCell1];
	var from2 = table.rows[row].cells[fromCell2];
	var into = table.rows[row].cells[toCell];
	var connection = table.rows[0].cells[toCell]; //spojka
			connection.setAttribute("class","imported");//možná nemusí
			
				from.setAttribute("class","correct"); //zvyrazneni promennych k vypoctu
				from2.setAttribute("class","correct"); //zvyrazneni promennych k vypoctu
				if(from.innerHTML==1){
					if(from2.innerHTML==1){						
								animeShowInTable(table,"1",row,toCell,myTime); //zjeveni 1							
						
					}
					else if(from2.innerHTML==0){
								animeShowInTable(table,"0",row,toCell,myTime); //zjeveni 0					
					}
				}
				else if(from.innerHTML==0){
					animeShowInTable(table,"1",row,toCell,myTime); //zjeveni 1					
				}
			
			time=setTimeout(function(){
  										from.setAttribute("class","olderVariables");
										from2.setAttribute("class","olderVariables");
										time=setTimeout(function(){
											into.removeAttribute("class");	
										},myTime+10);
  			},myTime+5);	
}

/***
 * 
 */
function simpleEque (table,row,fromCell1,fromCell2,toCell,myTime){
	var from = table.rows[row].cells[fromCell1];
	var from2 = table.rows[row].cells[fromCell2];
	var into = table.rows[row].cells[toCell];
	var connection = table.rows[0].cells[toCell]; //spojka
			connection.setAttribute("class","imported");//možná nemusí
			
				from.setAttribute("class","correct"); //zvyrazneni promennych k vypoctu
				from2.setAttribute("class","correct"); //zvyrazneni promennych k vypoctu
				if(from.innerHTML==1){
					if(from2.innerHTML==1){						
								animeShowInTable(table,"1",row,toCell,myTime); //zjeveni 1											
					}
					else if(from2.innerHTML==0){
								animeShowInTable(table,"0",row,toCell,myTime); //zjeveni 0						
					}
				}
				else if(from.innerHTML==0){
					if(from2.innerHTML==1){
								animeShowInTable(table,"0",row,toCell,myTime); //zjeveni 0				
					}
					else if(from2.innerHTML==0){
								animeShowInTable(table,"1",row,toCell,myTime); //zjeveni 1						
					}
					
				}
			
			time=setTimeout(function(){
  										from.setAttribute("class","olderVariables");
										from2.setAttribute("class","olderVariables");
										time=setTimeout(function(){
											into.removeAttribute("class");	
										},myTime+10);
  			},myTime+5);	
}

/***
 * 
 */
function animeColumn(table,fromCell1,fromCell2,toCell,row,what,speed)
{	
	var numOfRows= table.rows.length;
	var timeForColumn= (speed*2)/numOfRows; //výpočet pro čas negace každého řádku
	if(row==0){
		var where = table.rows[0].cells[toCell]; //pro zvyrazneni hlavicky sloupce
  		where.setAttribute("class","mediateStep");
  		setTimeout(function(){animeColumn(table,fromCell1,fromCell2,toCell,row+1,what,speed);},timeForColumn);//rekurze
  		
	}
	else if(row<numOfRows){
		switch(what){
			case "not":
				{
					simpleNot(table,row,fromCell1,toCell,timeForColumn);
					break;
					
				}
			case "and": 
				{
					simpleAnd(table,row,fromCell1,fromCell2,toCell,timeForColumn);
					break;
				}
			case "or":
				{
					simpleOr(table,row,fromCell1,fromCell2,toCell,timeForColumn);
					break;
				}
			case "impl":
				{
					simpleImpl(table,row,fromCell1,fromCell2,toCell,timeForColumn);
					break;
				}
			case "eque":
				{
					simpleEque(table,row,fromCell1,fromCell2,toCell,timeForColumn);
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


