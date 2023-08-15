/**
 *
 * library for text formula for logic
 *
 * @author Marek Bartošek
 * @version 1.0.0 18.11.2014
 */
var action=false;
var time;				//time in animation
var oldTime;
var timeOfSteps= 2000;	//time in one step
//TODO vyladit animace s závislostí na timeOfSteps

// started function
$(document).ready(function() {
	
	
	var output = document.getElementById("timeControl");
	if(output != null)
	{
			output.innerHTML = timeOfSteps/1000 + "s";
	}	
	
	$("#buttonAnimPlay").click(function(){  
		
		playTrueTableContradiction();
		 	  				
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
		playTrueTableContradiction();	
		time=setTimeout(function(){	
			timeOfSteps=oldTime;
			},300);			
  	});
  	

});

function playTrueTableContradiction(){
	if(action==false){		
	  	action=true;//zapoceni akce
	  			
  		var tabulka = document.getElementById("animTable1");		
  		
  		if(tabulka.getAttribute("class")=="animated"){
  			baseTable(tabulka,8,4,2);
  			tabulka.removeAttribute("class");
  		}
  		//timeOfSteps= 2300;
  		
  		time=setTimeout(function(){	
			animeVariables(tabulka,0,7,timeOfSteps);  //pozor na pořadí, musí se od konce, jinak nefunguje
  			animeVariables(tabulka,0,5,timeOfSteps); //vsechny x
  			
  			time=setTimeout(function(){
  				animeVariables(tabulka,1,9,timeOfSteps);  //pozor na pořadí, musí se od konce, jinak nefunguje
  				animeVariables(tabulka,1,3,timeOfSteps); //vsechny y
  				
  				time=setTimeout(function(){
  					animeColumn(tabulka,3,-1,2,0,"not",timeOfSteps); //negace x

  					time=setTimeout(function(){
						animeColumn(tabulka,2,5,4,0,"and",timeOfSteps); 
  						
						time=setTimeout(function(){
							animeColumn(tabulka,7,9,8,0,"impl",timeOfSteps);
							
							time=setTimeout(function(){ 	 	
  								animeColumn(tabulka,4,8,6,0,"eque",timeOfSteps); 
  									 	
  	  		  					time=setTimeout(function(){ 	 	
  	  		  	  	  			 	tabulka.setAttribute("class","animated");
  		  							action=false;
  								},100);										  						  												  						
  							},timeOfSteps*2.5);
  						},timeOfSteps*2.5);
  					},timeOfSteps*2.5);
  				},timeOfSteps*1.5);
  			},timeOfSteps);
  		},0); 
  	 } 		
}
