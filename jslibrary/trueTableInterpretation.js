/**
 *
 * library for text formula for logic
 *
 * @author Marek Bartošek
 * @version 1.0.0 18.11.2014
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
			output.innerHTML = timeOfSteps/1000 + "s";
	}	
	
	$("#buttonAnimPlay").click(function(){ 
		
		playTrueTableInterpretation();
			  				
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
  	
  	//nemozne zatim spravne nastavit cas pro prijatelnou rychlou animaci beze ztrat
  /*	$("#buttonAnimEnd").click(function(){  		
		var oldTime=timeOfSteps;
		timeOfSteps-=timeOfSteps-100; 	
		playTrueTableInterpretation();	
		time=setTimeout(function(){	
			timeOfSteps=oldTime;
			},300);			
  	});*/

});

function playTrueTableInterpretation(){
		 if(action==false){		
	  	action=true;//zapoceni akce 		
  		
  		var tabulka = document.getElementById("animTable1");
  		
  		if(tabulka.getAttribute("class")=="animated"){
  			baseTable(tabulka,10,1);
  			tabulka.removeAttribute("class");
  		}	
  		
  		var A = document.getElementById("radioA").checked;	
  		
  		var B = document.getElementById("radioB").checked;	
  		
  		
  		time=setTimeout(function(){	
  			if(A){tabulka.rows[1].cells[0].innerHTML=1;}
  			else{tabulka.rows[1].cells[0].innerHTML=0;}
  			
  			if(B){tabulka.rows[1].cells[1].innerHTML=1;}
  			else{tabulka.rows[1].cells[1].innerHTML=0;}
  			
			animeVariables(tabulka,0,9,timeOfSteps); //vsechny a
			animeVariables(tabulka,0,2,timeOfSteps);
			
  			time=setTimeout(function(){
  				animeVariables(tabulka,1,7,timeOfSteps);  //pozor na pořadí, musí se od konce, jinak nefunguje
  				animeVariables(tabulka,1,4,timeOfSteps); //vsechny b
  				
  					time=setTimeout(function(){
  						animeColumn(tabulka,7,-1,6,0,"not",timeOfSteps/2);

						time=setTimeout(function(){
							animeColumn(tabulka,2,4,3,0,"impl",timeOfSteps/2);				  		
  							time=setTimeout(function(){ 			

								animeColumn(tabulka,6,9,8,0,"or",timeOfSteps/2);
								time=setTimeout(function(){ 			

									animeColumn(tabulka,3,8,5,0,"eque",timeOfSteps/2);
									time=setTimeout(function(){ 			

										tabulka.setAttribute("class","animated");	
										action=false;									

  									},timeOfSteps);
  								},timeOfSteps);
  							},timeOfSteps);
  						},timeOfSteps);
  					},timeOfSteps);
  			},timeOfSteps);
  		},0);  
  	 }	
}
