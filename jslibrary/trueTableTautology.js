//TODO - rozliseni prohlizece
//TODO - rozliseni jazyka

/**
 *
 * library for text formula for logic
 *
 * @author Marek Bartošek
 * @version 1.2.0
 */
var action=false;
var time;				//time in animation
var timeOfSteps= 2000;	//time in one step
//TODO vyladit animace s závislostí na timeOfSteps

// started function
$(document).ready(function() {
	
	
	var output = document.getElementById("timeControl");
	if(output != null)
	{
			output.innerHTML = timeOfSteps/1000 + "s ";
	}	
	
	$("#buttonAnimPlay").click(function(){  
		
		playTrueTableTautology();
				  				
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
		playTrueTableTautology();	
		time=setTimeout(function(){	
			timeOfSteps=oldTime;
			},300);			
  	});
});

function playTrueTableTautology(){
		 if(action==false){		
	 	action=true;//zapoceni akce
	 			
  		var tabulka = document.getElementById("animTable1");		
  		
  		if(tabulka.getAttribute("class")=="animated"){
  			baseTable(tabulka,8,4,2);
  			tabulka.removeAttribute("class");
  		}
  		
  		time=setTimeout(function(){	
			animeVariables(tabulka,0,7,timeOfSteps);  //pozor na pořadí, musí se od konce, jinak nefunguje
  			animeVariables(tabulka,0,2,timeOfSteps); //vsechny p
  			
  			time=setTimeout(function(){
  				animeColumn(tabulka,7,-1,6,0,"not",timeOfSteps*2); //negace p
  				
  					time=setTimeout(function(){
  						animeVariables(tabulka,1,9,timeOfSteps);  //pozor na pořadí, musí se od konce, jinak nefunguje
  						animeVariables(tabulka,1,4,timeOfSteps); //vsechny q

						time=setTimeout(function(){
							animeColumn(tabulka,2,4,3,0,"impl",timeOfSteps*2); //impl  
											  		
  							time=setTimeout(function(){ 			
								animeColumn(tabulka,6,9,8,0,"or",timeOfSteps*2); //or
								
								time=setTimeout(function(){ 			
									animeColumn(tabulka,3,8,5,0,"eque",timeOfSteps*2);
										
										time=setTimeout(function(){ 	 	
  											tabulka.setAttribute("class","animated");
  											action=false;
  						
  										},timeOfSteps*4);

  								},timeOfSteps*4);
  							},timeOfSteps*4);
  						},timeOfSteps);
  					},timeOfSteps*4);
  			},timeOfSteps/2);
  		},0); 
  	 } 	
}
