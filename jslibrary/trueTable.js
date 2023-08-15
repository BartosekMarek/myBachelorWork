/**
 *
 * library for text formula for logic
 *
 * @author Marek Bartošek
 * @version 1.0.0 (18.11.2014)
 */
var action=false;
var time;				//time in animation
var timeOfSteps= 2000;	//time in one step

// started function
$(document).ready(function() {
	
	
	var output = document.getElementById("timeControl");
	if(output != null)
	{
			output.innerHTML = timeOfSteps/1000 + "s ";
	}	
	
	$("#buttonAnimPlay").click(function(){  
	
		playTrueTable();
			  				
  	});
  	
  	$("#buttonAnimSlower").click(function(){  		
		timeOfSteps+=250; 		
		
		var output = document.getElementById("timeControl");
		if(output != null)
		{
			output.innerHTML = timeOfSteps/1000 + "s ";
		}		
  	});
  	
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
  	
  	 $("#buttonAnimEnd").click(function(){  		
		var oldTime=timeOfSteps;
		timeOfSteps-=timeOfSteps+500; 	
		playTrueTable();	
		time=setTimeout(function(){	
			timeOfSteps=oldTime;
			},300);			
  	});
  	
  	//zatim nepouzita funkce - uvidim jestli to ma smysl
  	$("#buttonAnimBegin").click(function(){  		
		var tabulka = document.getElementById("animTable1");
		baseTable(tabulka,8,8,3);
  		tabulka.removeAttribute("class");		
  	});
  	
});

function playTrueTable(){
		 if(action==false){		
	 	action=true;//zapoceni akce
	 	
  		var tabulka = document.getElementById("animTable1");		
  		
  		if(tabulka.getAttribute("class")=="animated"){
  			baseTable(tabulka,8,8,3);
  			tabulka.removeAttribute("class");
  		}

  		
  		time=setTimeout(function(){	
			animeVariables(tabulka,0,3,timeOfSteps); //vsechny a
  			time=setTimeout(function(){
  				animeVariables(tabulka,1,10,timeOfSteps);  //pozor na pořadí, musí se od konce, jinak nefunguje
  				animeVariables(tabulka,1,5,timeOfSteps); //vsechny b
  					time=setTimeout(function(){
  						animeColumn(tabulka,10,-1,9,0,"not",timeOfSteps*2);
  						//animeNotColumn(tabulka,10,0);
						time=setTimeout(function(){
							animeVariables(tabulka,2,7,timeOfSteps); //vsechny C  				  		
  							time=setTimeout(function(){ 			
								//animeAndColumn(tabulka,3,5,4,0);
								animeColumn(tabulka,3,5,4,0,"and",timeOfSteps*2);
								time=setTimeout(function(){ 			
									//animeAndColumn(tabulka,7,10,8,0);
									animeColumn(tabulka,7,9,8,0,"and",timeOfSteps*2);
									time=setTimeout(function(){ 			
										//animeOrColumn(tabulka,4,8,6,0);
										animeColumn(tabulka,4,8,6,0,"or",timeOfSteps*2);
										
										time=setTimeout(function(){ 	 	
  											tabulka.setAttribute("class","animated");//priznak ze jsou zbytky po animaci
  											action=false;//ukonceni akce
  						
  										},timeOfSteps*4);
  									},timeOfSteps*4);
  								},timeOfSteps*4);
  							},timeOfSteps);
  						},timeOfSteps*4);
  					},timeOfSteps);
  			},timeOfSteps);
  		},0);  
  	 }		
}
