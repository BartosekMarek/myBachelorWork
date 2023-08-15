/**
 *
 * library for text formula for logic
 * 
 * used HTML ID
 * -
 * 
 * used HTML CLASS
 * - animated : znacka ze uz probehla animace
 * - imported : animacni zvyrazneni pro dulezitou promennou
 * - correct : animacni zvyrazneni pro semanticky spravnou promennou (zelena)
 * - wrong : animacni zvyrazneni pro semanticky spatnou promennou (cervena)
 * - olderVariables : animacni zesediveni puvodnych promennych
 * - animeStep : animacni zvyrazneni pro promenne ze kterych se bude animovat
 *
 * @author Marek Bartošek
 * @version 1.2.0
 */

//presunout do baseanime? (jen sem uvest podminku pokud neexistuje, tak definovat?)
var time;				//time in animation
var timeOfSteps= 1500;	//time in one step
var action=false;		//pro kontrolu jednoho probihajici udalosti
var colorOfConnection="blue";
//var colorOfZero="red";
//var colorOfOne="green";
var colorOfCorrect="blue";
var colorOfWrong="blue";
var colorOfOlder="olderVariables";
var colofOfMediateStep="";

/***
 * count distance for animate middle two objects
 * 
 * @return nothing
 * @exception nothing
 */
$(document).ready(function() {
	
	var output = document.getElementById("timeControl");
	if(output != null)
	{
			output.innerHTML = timeOfSteps/1000 + "s";
	}	
	
	var cas=0;

//TODO complet function animeColumn(tabulka,0,2,1,0);
//TODO set in all function time depends - later: TODO pause TODO stop TODO slower TODO faster TODO begin TODO start  

	$("#animAnd").click(function(){  	
	  if(action==false){	
	  	action=true;
	  	
  		var tabulka = document.getElementById("animTableAnd");	
  		
  		if(tabulka.getAttribute("class")=="animated"){
  			baseTable43(tabulka);
  			tabulka.removeAttribute("class");
  		}
  		
  		animeAnd(tabulka,1,0,2,1,cas); 				  		
  		time=setTimeout(function(){ 	
  			animeAnd(tabulka,2,0,2,1,cas); 			

  			time=setTimeout(function(){ 	
  				animeAnd(tabulka,3,0,2,1,cas); 	
  				
  				time=setTimeout(function(){ 	
  					animeAnd(tabulka,4,0,2,1,cas); 	
  					
  					time=setTimeout(function(){ 	 	
  						tabulka.setAttribute("class","animated");
  						action=false;
  						
  					},timeOfSteps*4);  					
  				},timeOfSteps*4);	
  			},timeOfSteps*4);	
  		},timeOfSteps*4);	
  	  }
  						 			  				
  	});
  	
  	$("#animOr").click(function(){ 
  	 if(action==false){	
	  	action=true; 
	  			
  		var tabulka = document.getElementById("animTableOr");	
  		
  		
  		if(tabulka.getAttribute("class")=="animated"){
  			baseTable43(tabulka);
  			tabulka.removeAttribute("class");
  		}	
  		
  		animeOr(tabulka,1,0,2,1,cas); 				  		
  		time=setTimeout(function(){ 	
  			animeOr(tabulka,2,0,2,1,cas); 	

  			time=setTimeout(function(){ 	
  				animeOr(tabulka,3,0,2,1,cas); 	
  				
  				time=setTimeout(function(){ 	
  					animeOr(tabulka,4,0,2,1,cas);
  					
  					time=setTimeout(function(){ 	 	
  						tabulka.setAttribute("class","animated");
  						action=false;
  						
  					},timeOfSteps*4);  	
  				},timeOfSteps*4);	
  			},timeOfSteps*4);	
  		},timeOfSteps*4);	
  	 }				 			  				
  	});
  	
  	$("#animImpl").click(function(){  
  	  if(action==false){	
	  	action=true;	
	  		
  		var tabulka = document.getElementById("animTableImpl");	
  		
		if(tabulka.getAttribute("class")=="animated"){
  			baseTable43(tabulka);
  			tabulka.removeAttribute("class");
  		}	
  		
  		animeImpl(tabulka,1,0,2,1,cas); 				  		
  		time=setTimeout(function(){ 	
  			animeImpl(tabulka,2,0,2,1,cas); 	

  			time=setTimeout(function(){ 	
  				animeImpl(tabulka,3,0,2,1,cas); 	
  				
  				time=setTimeout(function(){ 	
  					animeImpl(tabulka,4,0,2,1,cas); 
  					
  					time=setTimeout(function(){ 	 	
  						tabulka.setAttribute("class","animated");
  						action=false;
  						
  					},timeOfSteps*4); 	
  				},timeOfSteps*4);	
  			},timeOfSteps*4);	
  		},timeOfSteps*4);
  	  }					 			  				
  	});
  	
  	$("#animEque").click(function(){  	
  	 if(action==false){	
  	 	
	  	action=true;	
  		var tabulka = document.getElementById("animTableEque");	
  		
  		if(tabulka.getAttribute("class")=="animated"){
  			baseTable43(tabulka);
  			tabulka.removeAttribute("class");
  		}	
  		
  		animeEque(tabulka,1,0,2,1,cas); 				  		
  		time=setTimeout(function(){ 	
  			animeEque(tabulka,2,0,2,1,cas); 	

  			time=setTimeout(function(){ 	
  				animeEque(tabulka,3,0,2,1,cas); 	
  				
  				time=setTimeout(function(){ 	
				animeEque(tabulka,4,0,2,1,cas); 
  					
  					time=setTimeout(function(){ 	 	
  						tabulka.setAttribute("class","animated");
  						action=false;
  						
  					},timeOfSteps*4); 	
  				},timeOfSteps*4);	
  			},timeOfSteps*4);	
  		},timeOfSteps*4);
  	 }					 			  				
  	});
  	
  	$("#animNot").click(function(){  
  	  if(action==false){
  	  		
	  	action=true;		
  		var tabulka = document.getElementById("animTableNot");	
  		
  		if(tabulka.getAttribute("class")=="animated"){
  			baseTable22(tabulka); 
  			tabulka.removeAttribute("class");
  		}	
  		
  		animeNot(tabulka,1,1,0,timeOfSteps*5); 				  		
  		time=setTimeout(function(){ 	
  			animeNot(tabulka,2,1,0,timeOfSteps*5); 	
  			time=setTimeout(function(){ 	 	
  				tabulka.setAttribute("class","animated");
  				action=false;

  			},timeOfSteps*6);	
  		},timeOfSteps*6);	
  	 }				 			  				
  	});
  	
  	//mozna to presunout do baseAnime??  	  	  	  	
  	$("#buttonAnimSlower").click(function(){  		
		timeOfSteps+=250; 		
		
		var output = document.getElementById("timeControl");
		if(output != null)
		{
			output.innerHTML = timeOfSteps/1000 + "s ";
		}		
  	});
  	
  	//mozna to presunout do baseAnime??  
  	$("#buttonAnimFaster").click(function(){  		
		if(timeOfSteps!=250){
		timeOfSteps-=250; 		
		
		var output = document.getElementById("timeControl");
		if(output != null)
		{
			output.innerHTML = timeOfSteps/1000 + "s ";
		}
		}					
  	});	


});

/**
 *	simple animated not for explain function not
 * 
 * @param {Object} table
 * @param {Object} table
 * @param {Object} fromCell1
 * @param {Object} toCell
 * @param {Object} myTime
 * @return nothing
 * @exception nothing
 */
function baseTable43(tabulka){
	tabulka.rows[1].cells[0].innerHTML=0;
  	tabulka.rows[1].cells[0].removeAttribute("class");
  	tabulka.rows[1].cells[1].innerHTML="";
  	tabulka.rows[1].cells[1].removeAttribute("class");
  	tabulka.rows[1].cells[2].innerHTML=0;
  	tabulka.rows[1].cells[2].removeAttribute("class");
  	tabulka.rows[2].cells[0].innerHTML=0;
  	tabulka.rows[2].cells[0].removeAttribute("class");
  	tabulka.rows[2].cells[1].innerHTML="";
  	tabulka.rows[2].cells[1].removeAttribute("class");
  	tabulka.rows[2].cells[2].innerHTML=1;
  	tabulka.rows[2].cells[2].removeAttribute("class");
  	tabulka.rows[3].cells[0].innerHTML=1;
  	tabulka.rows[3].cells[0].removeAttribute("class");
  	tabulka.rows[3].cells[1].innerHTML="";
  	tabulka.rows[3].cells[1].removeAttribute("class");
  	tabulka.rows[3].cells[2].innerHTML=0;
  	tabulka.rows[3].cells[2].removeAttribute("class");
  	tabulka.rows[4].cells[0].innerHTML=1;
  	tabulka.rows[4].cells[0].removeAttribute("class");
  	tabulka.rows[4].cells[1].innerHTML="";
  	tabulka.rows[4].cells[1].removeAttribute("class");
  	tabulka.rows[4].cells[2].innerHTML=1;
  	tabulka.rows[4].cells[2].removeAttribute("class");
}

/**
 *	simple animated not for explain function not
 * 
 * @param {Object} table
 * @param {Object} table
 * @param {Object} fromCell1
 * @param {Object} toCell
 * @param {Object} myTime
 * @return nothing
 * @exception nothing
 */
function baseTable22(tabulka){
	tabulka.rows[1].cells[0].innerHTML="";
  	tabulka.rows[1].cells[0].removeAttribute("class");
  	tabulka.rows[1].cells[1].innerHTML=0;
  	tabulka.rows[1].cells[1].removeAttribute("class");
  	tabulka.rows[2].cells[0].innerHTML="";
  	tabulka.rows[2].cells[0].removeAttribute("class");
  	tabulka.rows[2].cells[1].innerHTML=1;
  	tabulka.rows[2].cells[1].removeAttribute("class");
}

/**
 *	simple animated not for explain function not
 * 
 * @param {Object} table
 * @param {Object} table
 * @param {Object} fromCell1
 * @param {Object} toCell
 * @param {Object} myTime
 * @return nothing
 * @exception nothing
 */
function animeNot(table,row,fromCell1,toCell,myTime){
	var from = table.rows[row].cells[fromCell1];
	var into = table.rows[row].cells[toCell];
	var connection = table.rows[0].cells[toCell]; //spojka

			into.innerHTML=connection.innerHTML;
			animeThereInTable(table,0,toCell,row,toCell,(myTime/5)-5); //posun and zvrhu	
			connection.setAttribute("class",colorOfConnection);
			
			time=setTimeout(function(){
				into.setAttribute("class",colorOfConnection); //zvyrazneni not

				
				if(from.innerHTML==1){
					from.setAttribute("class",colorOfCorrect);						
						time=setTimeout(function(){
													
							animeFromInTable(table,row,toCell,0,toCell,(myTime/5)-5); //posun and zdola zpet
							
							time=setTimeout(function(){
								into.setAttribute("class",colorOfCorrect);
								animeThereInTable(table,row,fromCell1,row,toCell,(myTime/5)-5); //posun 1
								time=setTimeout(function(){
									into.setAttribute("class",colorOfWrong);
									animeShowInTable(table,0,row,toCell,(myTime/5)-5);
								},myTime/5);
							},myTime/5);
							
						},myTime/5);
				}
				else if(from.innerHTML==0){
					from.setAttribute("class",colorOfWrong);
						time=setTimeout(function(){
							animeFromInTable(table,row,toCell,0,toCell,myTime/5-5); //posun and zdola zpet
							
							time=setTimeout(function(){
								into.setAttribute("class",colorOfWrong);
								animeThereInTable(table,row,fromCell1,row,toCell,(myTime/5)-5); //zjeveni 1
								time=setTimeout(function(){
									into.setAttribute("class",colorOfCorrect);
									animeShowInTable(table,1,row,toCell,(myTime/5)-5);
								},myTime/5);
							},myTime/5);
							
						},myTime/5);					
				}
			},myTime/5);		
			
			time=setTimeout(function(){
  										from.setAttribute("class",colorOfOlder);
										//time=setTimeout(function(){
											into.removeAttribute("class");	
											connection.removeAttribute("class");
										//},myTime);
 
  			},myTime+30);						
};

/**
 *pro jednoduchou vyukovou animaci AND
 * @param {Object} table
 * @param {Object} row
 * @param {Object} fromCell1
 * @param {Object} fromCell2
 * @param {Object} toCell
 */
function animeAnd(table,row,fromCell1,fromCell2,toCell,myTime){
	
	var from = table.rows[row].cells[fromCell1];
	var from2 = table.rows[row].cells[fromCell2];
	var into = table.rows[row].cells[toCell];
	var connection = table.rows[0].cells[toCell]; //spojka

			//formatovani spojky 
			connection.setAttribute("class",colorOfConnection);
			into.setAttribute("class",colorOfConnection);

			animeThereInTable(table,0,toCell,row,toCell,timeOfSteps); //posun and zvrhu	
			
			time=setTimeout(function(){			
				if(from.innerHTML==1){
					from.setAttribute("class",colorOfCorrect);
					if(from2.innerHTML==1){
						from2.setAttribute("class",colorOfCorrect);
						time=setTimeout(function(){
											
							animeFromInTable(table,row,toCell,0,toCell,timeOfSteps); //posun and zdola zpet
							
							time=setTimeout(function(){
								into.setAttribute("class",colorOfCorrect); 
								animeShowInTable(table,"1",row,toCell,timeOfSteps/2); //zjeveni 1
							},timeOfSteps);
							
							
						},timeOfSteps/2);
						
					}
					else if(from2.innerHTML==0){
						from2.setAttribute("class",colorOfWrong);
						time=setTimeout(function(){
							animeFromInTable(table,row,toCell,0,toCell,timeOfSteps); //posun and zdola zpet
							
							time=setTimeout(function(){
								into.setAttribute("class",colorOfWrong); 
								into.innerHTML=0;
								animeThereInTable(table,row,fromCell2,row,toCell,timeOfSteps); //posune se 0 zprava
							},timeOfSteps);
						},timeOfSteps/2);
						
					}
				}
				else if(from.innerHTML==0){
					from.setAttribute("class",colorOfWrong);
					if(from2.innerHTML==1){
						from2.setAttribute("class",colorOfCorrect);
						time=setTimeout(function(){
							animeFromInTable(table,row,toCell,0,toCell,timeOfSteps); //posun and zdola zpet
							time=setTimeout(function(){
								into.setAttribute("class",colorOfWrong); 
								into.innerHTML=0;
								animeThereInTable(table,row,fromCell1,row,toCell,timeOfSteps); //posune se 0 zleva
							},timeOfSteps);
						},timeOfSteps/2);
						
					}
					else if(from2.innerHTML==0){
						from2.setAttribute("class",colorOfWrong);
						time=setTimeout(function(){
							animeFromInTable(table,row,toCell,0,toCell,timeOfSteps); //posun and zdola zpet
							time=setTimeout(function(){
								into.setAttribute("class",colorOfWrong); 
								animeShowInTable(table,"0",row,toCell,timeOfSteps/2); //zjeveni 0
							},timeOfSteps);
						},timeOfSteps/2);
						
					}
					
				}
			},timeOfSteps+100);		
			
			time=setTimeout(function(){
										connection.removeAttribute("class");
  										from.setAttribute("class",colorOfOlder);
										from2.setAttribute("class",colorOfOlder);
										time=setTimeout(function(){
										
											into.removeAttribute("class");	
										},timeOfSteps);
 
  			},timeOfSteps*3);						
};


/***
 * count distance for animate middle two objects
 * @param from @type HTMLObject - textarea, where will be added symbols
 * @param to @type string
 * @return nothing
 * @exception nothing
 */
function animeOr (table,row,fromCell1,fromCell2,toCell,myTime){
var from = table.rows[row].cells[fromCell1];
	var from2 = table.rows[row].cells[fromCell2];
	var into = table.rows[row].cells[toCell];
	var connection = table.rows[0].cells[toCell]; //spojka

			//formatovani spojky 
			connection.setAttribute("class",colorOfConnection);
			into.setAttribute("class",colorOfConnection);

			animeThereInTable(table,0,toCell,row,toCell,timeOfSteps); //posun or zvrhu	
			
			time=setTimeout(function(){
				if(from.innerHTML==1){
					from.setAttribute("class",colorOfCorrect);
					if(from2.innerHTML==1){
						from2.setAttribute("class",colorOfCorrect);
						time=setTimeout(function(){
							animeFromInTable(table,row,toCell,0,toCell,timeOfSteps); //posun or zdola zpet
							
							time=setTimeout(function(){
								into.setAttribute("class",colorOfCorrect);
								animeShowInTable(table,"1",row,toCell,timeOfSteps/2); //zjeveni 1
							},timeOfSteps);
							
						},timeOfSteps/2);
						
					}
					else if(from2.innerHTML==0){
						from2.setAttribute("class",colorOfWrong);
						time=setTimeout(function(){
							animeFromInTable(table,row,toCell,0,toCell,timeOfSteps); //posun or zdola zpet
							
							time=setTimeout(function(){
								into.innerHTML=0;
								into.setAttribute("class",colorOfCorrect);
								animeThereInTable(table,row,fromCell1,row,toCell,timeOfSteps); //posune se 1 zleva
							},timeOfSteps);
						},timeOfSteps/2);
						
					}
				}
				else if(from.innerHTML==0){
					from.setAttribute("class",colorOfWrong);
					if(from2.innerHTML==1){
						from2.setAttribute("class",colorOfCorrect);
						time=setTimeout(function(){
							animeFromInTable(table,row,toCell,0,toCell,timeOfSteps); //posun or zdola zpet
							time=setTimeout(function(){
								into.innerHTML=0;
								into.setAttribute("class",colorOfCorrect);
								animeThereInTable(table,row,fromCell2,row,toCell,timeOfSteps); //posune se 1 zprava
							},timeOfSteps);
						},timeOfSteps/2);
						
					}
					else if(from2.innerHTML==0){
						from2.setAttribute("class",colorOfWrong);
						time=setTimeout(function(){
							animeFromInTable(table,row,toCell,0,toCell,timeOfSteps); //posun or zdola zpet
							time=setTimeout(function(){
								into.setAttribute("class",colorOfWrong);
								animeShowInTable(table,"0",row,toCell,timeOfSteps/2); //zjeveni 0
							},timeOfSteps);
						},timeOfSteps/2);
						
					}
					
				}
			},timeOfSteps+100);		
			
			time=setTimeout(function(){
										connection.removeAttribute("class");
  										from.setAttribute("class",colorOfOlder);
										from2.setAttribute("class",colorOfOlder);
										time=setTimeout(function(){
											into.removeAttribute("class");	
										},timeOfSteps);
  			},timeOfSteps*3);			
}


/***
 * 
 */
function animeImpl (table,row,fromCell1,fromCell2,toCell,myTime){
var from = table.rows[row].cells[fromCell1];
	var from2 = table.rows[row].cells[fromCell2];
	var into = table.rows[row].cells[toCell];
	var connection = table.rows[0].cells[toCell]; //spojka

			//formatovani spojky 
			connection.setAttribute("class",colorOfConnection);
			into.setAttribute("class",colorOfConnection);
			
			animeThereInTable(table,0,toCell,row,toCell,timeOfSteps); //posun impl zvrhu	
			
			time=setTimeout(function(){
				if(from.innerHTML==1){
					from.setAttribute("class",colorOfCorrect);
					if(from2.innerHTML==1){
						from2.setAttribute("class",colorOfCorrect);
						time=setTimeout(function(){
							animeFromInTable(table,row,toCell,0,toCell,timeOfSteps); //posun impl zdola zpet
							
							time=setTimeout(function(){
								into.setAttribute("class",colorOfCorrect);
								animeShowInTable(table,"1",row,toCell,timeOfSteps/2); //zjeveni 1
							},timeOfSteps);
							
						},timeOfSteps/2);
						
					}
					else if(from2.innerHTML==0){
						from2.setAttribute("class",colorOfWrong);
						time=setTimeout(function(){
							animeFromInTable(table,row,toCell,0,toCell,timeOfSteps); //posun impl zdola zpet
							
							time=setTimeout(function(){
								into.innerHTML=0;
								into.setAttribute("class",colorOfWrong);
								animeThereInTable(table,row,fromCell2,row,toCell,timeOfSteps); //posune se 0 zleva
							},timeOfSteps);
						},timeOfSteps/2);
						
					}
				}
				else if(from.innerHTML==0){
					from.setAttribute("class",colorOfCorrect);
					if(from2.innerHTML==1){
						from2.setAttribute("class","");
						time=setTimeout(function(){
							animeFromInTable(table,row,toCell,0,toCell,timeOfSteps); //posun impl zdola zpet
							time=setTimeout(function(){
								into.innerHTML=0;
								into.setAttribute("class",colorOfCorrect);
								animeShowInTable(table,"1",row,toCell,timeOfSteps/2); //zjeveni 1
							},timeOfSteps);
						},timeOfSteps/2);
						
					}
					else if(from2.innerHTML==0){
						from2.setAttribute("class","");
						time=setTimeout(function(){
							animeFromInTable(table,row,toCell,0,toCell,timeOfSteps); //posun impl zdola zpet
							time=setTimeout(function(){
								into.setAttribute("class",colorOfCorrect);
								animeShowInTable(table,"1",row,toCell,timeOfSteps/2); //zjeveni 1
							},timeOfSteps);
						},timeOfSteps/2);
						
					}
					
				}
			},timeOfSteps+100);		
			
			time=setTimeout(function(){
										connection.removeAttribute("class");
  										from.setAttribute("class",colorOfOlder);
										from2.setAttribute("class",colorOfOlder);
										time=setTimeout(function(){
											into.removeAttribute("class");	
										},timeOfSteps);
  			},timeOfSteps*3);		
}


/***
 * 
 */
function animeEque (table,row,fromCell1,fromCell2,toCell,myTime){
var from = table.rows[row].cells[fromCell1];
	var from2 = table.rows[row].cells[fromCell2];
	var into = table.rows[row].cells[toCell];
	var connection = table.rows[0].cells[toCell]; //spojka

			//formatovani spojky 
			connection.setAttribute("class",colorOfConnection);
			into.setAttribute("class",colorOfConnection);
			
			animeThereInTable(table,0,toCell,row,toCell,timeOfSteps); //posun Eque zvrhu	
			
			time=setTimeout(function(){
				if(from.innerHTML==1){
					from.setAttribute("class",colorOfCorrect);
					if(from2.innerHTML==1){
						from2.setAttribute("class",colorOfCorrect);
						time=setTimeout(function(){
							animeFromInTable(table,row,toCell,0,toCell,timeOfSteps); //posun Eque zdola zpet
							
							time=setTimeout(function(){
								into.setAttribute("class",colorOfCorrect); //barva zjeveni
								animeShowInTable(table,"1",row,toCell,timeOfSteps/2); //zjeveni 1
							},timeOfSteps);
							
						},timeOfSteps/2);
						
					}
					else if(from2.innerHTML==0){
						from2.setAttribute("class",colorOfWrong);
						time=setTimeout(function(){
							animeFromInTable(table,row,toCell,0,toCell,timeOfSteps); //posun Eque zdola zpet
							
							time=setTimeout(function(){
								into.innerHTML=0;
								into.setAttribute("class",colorOfWrong); //barva posouvane 0
								animeThereInTable(table,row,fromCell2,row,toCell,timeOfSteps); //posune se 0 zprava
							},timeOfSteps);
						},timeOfSteps/2);
						
					}
				}
				else if(from.innerHTML==0){
					from.setAttribute("class",colorOfWrong);
					if(from2.innerHTML==1){
						from2.setAttribute("class",colorOfCorrect);
						time=setTimeout(function(){
							animeFromInTable(table,row,toCell,0,toCell,timeOfSteps); //posun Eque zdola zpet
							time=setTimeout(function(){
								into.innerHTML=0;
								into.setAttribute("class",colorOfWrong); //barva posouvane 0
								animeThereInTable(table,row,fromCell1,row,toCell,timeOfSteps); //posune se 0 zleva
							},timeOfSteps);
						},timeOfSteps/2);
						
					}
					else if(from2.innerHTML==0){
						from2.setAttribute("class",colorOfWrong);
						time=setTimeout(function(){
							animeFromInTable(table,row,toCell,0,toCell,timeOfSteps); //posun Eque zdola zpet
							time=setTimeout(function(){
								into.setAttribute("class",colorOfCorrect); //zjeveni 0
								animeShowInTable(table,"1",row,toCell,timeOfSteps/2); //zjeveni 1
							},timeOfSteps);
						},timeOfSteps/2);
						
					}
					
				}
			},timeOfSteps+100);		
			
			time=setTimeout(function(){
										connection.removeAttribute("class");
  										from.setAttribute("class",colorOfOlder);
										from2.setAttribute("class",colorOfOlder);
										time=setTimeout(function(){
											into.removeAttribute("class");	
										},timeOfSteps);
  			},timeOfSteps*3);		
}

/***
 * 
 */
function animeColumn(table,connect,fromCell1,fromCell2,toCell,row,time)
{	
		var numOfRows= table.rows.length;
		
		if(row==0){
		var where = table.rows[0].cells[toCell]; //pro zvyrazneni hlavicky sloupce
  			where.setAttribute("class",colofOfMediateStep);
  			setTimeout(function(){animeAndColumn(table,fromCell1,fromCell2,row+1);},timeOfSteps);
  		}
  		else if(row<numOfRows){
			animeAnd(table,row,fromCell1,fromCell2,toCell);
			setTimeout(function(){animeNotColumn(table,cell,row+1);},timeOfSteps*4);//rekurze
		}
  		else{
			var where = table.rows[0].cells[toCell]; 
			where.removeAttribute("class");//smazani zvyrazneni v hlavicce
		}
}