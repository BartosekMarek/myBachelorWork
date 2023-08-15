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
	if(output != null){
			output.innerHTML = timeOfSteps/1000 + "s";
	}	
	
	$("#buttonAnimPlay").click(function(){ 
			playKNFDNF();
  	});
  	
  	$("#buttonAnimPlay2").click(function(){ 
			playKNFDNF2();			  				
  	});
  	
  	$("#buttonAnimPlay3").click(function(){ 
			playKNFDNF3();
  	});
  	
  	
  	$("#buttonAnimSlower").click(function(){  		
		timeOfSteps+=250; 		
		
		var output = document.getElementById("timeControl");
		if(output != null){
			output.innerHTML = timeOfSteps/1000 + "s ";
		}		
  	});
  	
  	$("#buttonAnimFaster").click(function(){  		
		if(timeOfSteps!=250){
			timeOfSteps-=250; 		
		
			var output = document.getElementById("timeControl");
			if(output != null){
				output.innerHTML = timeOfSteps/1000 + "s ";
			}
		}		
  	});  	

});

function playKNFDNF (){
if(action==false){
			action=true;		
		var tabulka = document.getElementById("animTable1");
	
	  	var row1 = document.getElementById("radio00").checked;	
  		
  		var row2 = document.getElementById("radio01").checked;	
  		
  		var row3 = document.getElementById("radio10").checked;	
  		
  		var row4 = document.getElementById("radio11").checked;
 		
 		var rUNDF = document.getElementById("resultUDNF");
 		
		var rUNKF = document.getElementById("resultUKNF");	 		

  		
  		if(tabulka.getAttribute("class")=="animated"){
  			
  			for(i=1;i<=4;i++){
  				for(j=3;j<=4;j++){
  					tabulka.rows[i].cells[j].innerHTML="";
  				}
  			}
			rUNDF.innerHTML="Formule vytvořená v úplné normální disjunktivní formě je: ";  
			rUNKF.innerHTML="Formule vytvořená v úplné normální konjunktivní formě je: ";  			
  			tabulka.removeAttribute("class");
  		}	
  		
  		var Kfirst= true;
  		var Dfirst= true;
  		
time=setTimeout(function(){   									
  		var npanq="&not; p &and; &not; q";
  		var poq="p &or; q";  		
  		if(row1){
  			document.getElementById("radio001").setAttribute("class","green");	//barveni 1
  			tabulka.rows[1].cells[3].innerHTML="K<sub>"+1+"</sub> = "+npanq;
  			tabulka.rows[1].cells[3].setAttribute("class","green");				//barveni
  			if(Kfirst){ 
  				rUNDF.innerHTML+="<span id='green'>D = ("+npanq + ") </span>";	//s barvenim
				Kfirst=false;
  			}
  			else{
  				rUNDF.innerHTML+="<span id='green'>&or; ("+npanq + ") </span>";	//s barvenim
  			}
  			
  			time=setTimeout(function(){
  				 document.getElementById("radio001").removeAttribute("class");	//mazani
  				 tabulka.rows[1].cells[3].removeAttribute("class");
  				  document.getElementById("green").removeAttribute("id");  				 
  			},timeOfSteps-100);  			
  		}
  		else{
  			document.getElementById("radio000").setAttribute("class","red");	//barveni 0
  			tabulka.rows[1].cells[4].innerHTML="D<sub>"+1+"</sub> = "+poq;
  			tabulka.rows[1].cells[4].setAttribute("class","red");				//barveni
  			if(Dfirst){ 
  				rUNKF.innerHTML+="<span id='red'>K = ("+poq + ") </span>";		//s barvenim
  				Dfirst=false;
  			}
  			else{
  				rUNKF.innerHTML+="<span id='red'>&and; ("+poq + ") </span>";	//s barvenim
  			}
  			
  			time=setTimeout(function(){
  				 document.getElementById("radio000").removeAttribute("class");	//mazani
  				 tabulka.rows[1].cells[4].removeAttribute("class");
  				  document.getElementById("red").removeAttribute("id");  				 
  			},timeOfSteps-100); 
  		}
  		
	time=setTimeout(function(){    		
  		var npaq="&not; p &and; q";
  		var ponq="p &or; &not; q";
  		if(row2){
  			document.getElementById("radio011").setAttribute("class","green");	//barveni 1
  			
  			tabulka.rows[2].cells[3].innerHTML="K<sub>"+2+"</sub> = "+npaq;
  			tabulka.rows[2].cells[3].setAttribute("class","green");				//barveni
  			
  			if(Kfirst){ 
  				rUNDF.innerHTML+="<span id='green'>D = ("+npaq + ") </span>";
				Kfirst=false;
  			}
  			else{
  				rUNDF.innerHTML+="<span id='green'>&or; ("+npaq + ") </span>";
  			}
  			time=setTimeout(function(){
  				 document.getElementById("radio011").removeAttribute("class");	//mazani
  				 tabulka.rows[2].cells[3].removeAttribute("class");
  				  document.getElementById("green").removeAttribute("id");  				 
  			},timeOfSteps-250); 
  			
  		}
  		else{
  			document.getElementById("radio010").setAttribute("class","red");	//barveni 0
  			tabulka.rows[2].cells[4].innerHTML="D<sub>"+2+"</sub> = "+ponq;
  			tabulka.rows[2].cells[4].setAttribute("class","red");				//barveni
  			if(Dfirst){ 
  				rUNKF.innerHTML+="<span id='red'>K = ("+ponq + ") </span>";
				Dfirst=false;  			
  			}
  			else{
  				rUNKF.innerHTML+="<span id='red'>&and; ("+ponq + ") </span>";
  			}
  			 time=setTimeout(function(){
  				 document.getElementById("radio010").removeAttribute("class");	//mazani
  				 tabulka.rows[2].cells[4].removeAttribute("class");
  				  document.getElementById("red").removeAttribute("id");  				 
  			},timeOfSteps-250); 
  		}
  		
  		time=setTimeout(function(){ 	
	  		var panq="p &and; &not; q";
  			var npoq="&not; p &or; q";
  			if(row3){
  				document.getElementById("radio101").setAttribute("class","green");	//barveni 1
  				tabulka.rows[3].cells[3].innerHTML="K<sub>"+3+"</sub> = "+panq;
  				tabulka.rows[3].cells[3].setAttribute("class","green");				//barveni
  				if(Kfirst){ 
  					rUNDF.innerHTML+="<span id='green'>D = ("+panq + ") </span>";
					Kfirst=false;
  				}
  				else{
  					rUNDF.innerHTML+="<span id='green'>&or; ("+panq + ") </span>";
  				}
  				time=setTimeout(function(){
  					document.getElementById("radio101").removeAttribute("class");	//mazani
  					tabulka.rows[3].cells[3].removeAttribute("class");
  					document.getElementById("green").removeAttribute("id");  				 
  				},timeOfSteps-250); 
  			}
  			else{
  				document.getElementById("radio100").setAttribute("class","red");	//barveni 0
  				tabulka.rows[3].cells[4].innerHTML="D<sub>"+3+"</sub> = "+npoq;
  				tabulka.rows[3].cells[4].setAttribute("class","red");				//barveni
  				if(Dfirst){ 
  					rUNKF.innerHTML+="<span id='red'>K = ("+npoq + ") </span>";
					Dfirst=false;
  				}
  				else{
  					rUNKF.innerHTML+="<span id='red'>&and; ("+npoq + ") </span>";
  				}
  				time=setTimeout(function(){
  					document.getElementById("radio100").removeAttribute("class");	//mazani
  					tabulka.rows[3].cells[4].removeAttribute("class");
  					document.getElementById("red").removeAttribute("id");  				 
  				},timeOfSteps-250); 
  			}
  			
			time=setTimeout(function(){ 	  		
  				var paq="p &and; q";
  				var nponq="&not;p &or; &not;q";
  				if(row4){
  					document.getElementById("radio111").setAttribute("class","green");
  					tabulka.rows[4].cells[3].innerHTML="K<sub>"+4+"</sub> = "+paq;
  					tabulka.rows[4].cells[3].setAttribute("class","green");				//barveni
  					if(Kfirst){ 
  						rUNDF.innerHTML+="<span id='green'>D = ("+paq + ") </span>";
						Kfirst=false;
  					}
  					else{
  						rUNDF.innerHTML+="<span id='green'>&or; ("+paq + ") </span>";
  					}
  	  				time=setTimeout(function(){
  						document.getElementById("radio111").removeAttribute("class");	//mazani
  						tabulka.rows[4].cells[3].removeAttribute("class");
  						document.getElementById("green").removeAttribute("id");  				 
  					},timeOfSteps-250); 
  			
  				}
  				else{
  					document.getElementById("radio110").setAttribute("class","red");	//barveni 0
  					tabulka.rows[4].cells[4].innerHTML="D<sub>"+4+"</sub> = "+nponq;
  					tabulka.rows[4].cells[4].setAttribute("class","red");				//barveni
  					if(Dfirst){ 
  						rUNKF.innerHTML+="<span id='red'>K = ("+nponq + ") </span>";
						Dfirst=false;
  					}
  					else{
  						rUNKF.innerHTML+="<span id='red'>&and; ("+nponq + ") </span>";
  					}
  					time=setTimeout(function(){
  						document.getElementById("radio110").removeAttribute("class");	//mazani
  						tabulka.rows[4].cells[4].removeAttribute("class");
  						document.getElementById("red").removeAttribute("id");  				 
  					},timeOfSteps-250); 
  					
  					
  				} 
  				tabulka.setAttribute("class","animated"); 	
  				action=false;			
  			},timeOfSteps);	
  		},timeOfSteps);		
	},timeOfSteps);	
},timeOfSteps);	
}	
}

function playKNFDNF2(){
		

		var tabulka = document.getElementById("animTable2");

		var i=1;
		var timeLate=0;
		while(i<=8){
				
			if(tabulka.rows[i].cells[3].innerHTML==1){	
				rowAllK(tabulka,i,2000,timeLate);
				i++;
				timeLate+=6000;
			}
			else{
				rowK(tabulka,i,0,timeLate);
				i++;
				timeLate+=1500;
			}
							
		}
		
		time=setTimeout(function(){	
			//alert("zapinam UNKF");
			var UNKF = document.getElementById("resultUNDF2");
			var bolean = false;
			for(i=1;i<=8;i++){
				//pokud neni prazdny
				if(tabulka.rows[i].cells[4].innerHTML!="					"){
					if(bolean)//ponekolikate
					UNKF.innerHTML+=" ∨  ("+tabulka.rows[i].cells[4].innerHTML+")";
					//poprve
					else {UNKF.innerHTML+="("+tabulka.rows[i].cells[4].innerHTML+")";
					bolean=true;
					}
				}
			}
			UNKF.setAttribute("class","blue");
			//alert("provedl jsem zapis UNKF");
		},30000);		

		time=setTimeout(function(){
			var UNKF = document.getElementById("resultUNDF2");
			UNKF.removeAttribute("class");
		},30750);
		
}

function playKNFDNF3 (){
		var tabulka = document.getElementById("animTable3");
		
		var i=1;
		var timeLate=0;
		//alert("jsme nazivu, a v bunce je ."+ tabulka.rows[1].cells[4]+".");
		while(i<=8){
			
			if(tabulka.rows[i].cells[3].innerHTML==0){	
				rowAllD(tabulka,i,2000,timeLate);
				i++;
				timeLate+=6000;	
			}
			else{
				rowD(tabulka,i,0,timeLate);
				i++;
				timeLate+=1500;
			}		
		}	
			
		time=setTimeout(function(){	
			//alert("zapinam UNKF");
			var UNKF = document.getElementById("resultUNDF3");
			var bolean = false;
			for(i=1;i<=8;i++){
				//pokud neni prazdny
				if(tabulka.rows[i].cells[4].innerHTML!="					"){
					if(bolean)//ponekolikate
					UNKF.innerHTML+=" ∧ ("+tabulka.rows[i].cells[4].innerHTML+")";
					//poprve
					else {UNKF.innerHTML+="("+tabulka.rows[i].cells[4].innerHTML+")";
					bolean=true;
					}
				}
			}
			UNKF.setAttribute("class","blue");
			//alert("provedl jsem zapis UNKF");

		},30000);
		
		time=setTimeout(function(){
			var UNKF = document.getElementById("resultUNDF3");
			UNKF.removeAttribute("class");
		},30750);
		
		
}

function rowAllK(tabulka,row,timeLate,interTimeLate){
	//time=setTimeout(function(){
		rowK(tabulka,row,0,interTimeLate);
		time=setTimeout(function(){		
			rowK(tabulka,row,1,interTimeLate);
			time=setTimeout(function(){		
				rowK(tabulka,row,2,interTimeLate);	
			},timeLate);	
		},timeLate);
	//},timeLate);
	
	
}

function rowAllD(tabulka,row,timeLate,interTimeLate){
	//time=setTimeout(function(){
		rowD(tabulka,row,0,interTimeLate);
		time=setTimeout(function(){		
			rowD(tabulka,row,1,interTimeLate);
			time=setTimeout(function(){		
				rowD(tabulka,row,2,interTimeLate);	
			},timeLate);	
		},timeLate);
	//},timeLate);	
}

function rowK(tabulka,row,cell,timeLate){
	time=setTimeout(function(){
		//funkcni sloupec
		if(tabulka.rows[row].cells[3].innerHTML==1){
			tabulka.rows[row].cells[3].setAttribute("class","blue"); 
		
			time=setTimeout(function(){ 
				//prvni promenna
				tabulka.rows[row].cells[cell].setAttribute("class","blue"); 					
					
				time=setTimeout(function(){
					//vysledek z jedne promenne
					if(tabulka.rows[row].cells[cell].innerHTML==1){
						if(cell>0){
							tabulka.rows[row].cells[4].innerHTML+="∧ "+tabulka.rows[0].cells[cell].innerHTML;	
						}
						else{
							tabulka.rows[row].cells[4].innerHTML+=tabulka.rows[0].cells[cell].innerHTML;
						}
					}
					else {
						if(cell>0){
							tabulka.rows[row].cells[4].innerHTML+="∧ ¬"+tabulka.rows[0].cells[cell].innerHTML;
						}
						else{
							tabulka.rows[row].cells[4].innerHTML+="¬"+tabulka.rows[0].cells[cell].innerHTML;
						}
					}
					time=setTimeout(function(){
						tabulka.rows[row].cells[3].removeAttribute("class"); 
						tabulka.rows[row].cells[cell].removeAttribute("class"); 
					},500);	
				},500);	
			},500);			
		}
		//kdyz to neni K tak nejak obarvit (nebo D)
		else{
			tabulka.rows[row].cells[3].setAttribute("class","olderVariables"); 
			time=setTimeout(function(){
				tabulka.rows[row].cells[3].removeAttribute("class"); 
			},1000);
		}	
	},timeLate);		
}

function rowD(tabulka,row,cell,timeLate){
	time=setTimeout(function(){
		//funkcni sloupec
		if(tabulka.rows[row].cells[3].innerHTML==0){
			tabulka.rows[row].cells[3].setAttribute("class","blue"); 
		
			time=setTimeout(function(){ 
				//prvni promenna
				tabulka.rows[row].cells[cell].setAttribute("class","blue"); 					
					
				time=setTimeout(function(){
					//vysledek z jedne promenne
					if(tabulka.rows[row].cells[cell].innerHTML==0){
						if(cell>0){
							tabulka.rows[row].cells[4].innerHTML+="∨  "+tabulka.rows[0].cells[cell].innerHTML;	
						}
						else{
							tabulka.rows[row].cells[4].innerHTML+=tabulka.rows[0].cells[cell].innerHTML;
						}
					}
					else {
						if(cell>0){
							tabulka.rows[row].cells[4].innerHTML+="∨ ¬"+tabulka.rows[0].cells[cell].innerHTML;
						}
						else{
							tabulka.rows[row].cells[4].innerHTML+="¬"+tabulka.rows[0].cells[cell].innerHTML;
						}
					}
					time=setTimeout(function(){
						tabulka.rows[row].cells[3].removeAttribute("class"); 
						tabulka.rows[row].cells[cell].removeAttribute("class"); 
					},500);	
				},500);	
			},500);			
		}
		//kdyz to neni K tak nejak obarvit (nebo D)
		else{
			tabulka.rows[row].cells[3].setAttribute("class","olderVariables"); 
			time=setTimeout(function(){
				tabulka.rows[row].cells[3].removeAttribute("class"); 
			},1000);
		}	
	},timeLate);		
}

function knfAndDnf (table,objectOfInput,result){
	  		//jeden radek a s pomoci createrNF (s vlozenim K1 a D1)
	  		
	  		//vzor ze starsi reseni
	  		/*var paq="p &and; q"; //string na zaklade sloupcu a vybrane hodnoty a co obsahuje promenna
  				var nponq="&not;p &or; &not;q";
  				if(row4){
  					document.getElementById("radio111").setAttribute("class","green");
  					tabulka.rows[4].cells[3].innerHTML="K<sub>"+4+"</sub> = "+paq;
  					tabulka.rows[4].cells[3].setAttribute("class","green");				//barveni
  					if(Kfirst){ 
  						rUNDF.innerHTML+="<span id='green'>D = ("+paq + ") </span>";
						Kfirst=false;
  					}
  					else{
  						rUNDF.innerHTML+="<span id='green'>&or; ("+paq + ") </span>";
  					}
  	  				time=setTimeout(function(){
  						document.getElementById("radio111").removeAttribute("class");	//mazani
  						tabulka.rows[4].cells[3].removeAttribute("class");
  						document.getElementById("green").removeAttribute("id");  				 
  					},timeOfSteps-250); 
  			
  				}
  				else{
  					document.getElementById("radio110").setAttribute("class","red");	//barveni 0
  					tabulka.rows[4].cells[4].innerHTML="D<sub>"+4+"</sub> = "+nponq;
  					tabulka.rows[4].cells[4].setAttribute("class","red");				//barveni
  					if(Dfirst){ 
  						rUNKF.innerHTML+="<span id='red'>K = ("+nponq + ") </span>";
						Dfirst=false;
  					}
  					else{
  						rUNKF.innerHTML+="<span id='red'>&and; ("+nponq + ") </span>";
  					}
  					time=setTimeout(function(){
  						document.getElementById("radio110").removeAttribute("class");	//mazani
  						tabulka.rows[4].cells[4].removeAttribute("class");
  						document.getElementById("red").removeAttribute("id");  				 
  					},timeOfSteps-250); */
}

//otestovat
//ciste jen o zjistovani a vytvoreni retezce pro NF
function createrNF (boeal,variablehead,variable,variablehead2,variable2){
	var a = variablehead.innerHTML;
	var b = variablehead2.innerHTML;
	var not = '&not;' ;
	if(variable.innerHTML==0) var aBolean = false;
	else if(variable.innerHTML==1) var aBolean = true;
	
	if(variable2.innerHTML==0) var bBolean = false;
	else if(variable2.innerHTML==1) var bBolean = true;
	
	var returnString="";
	
	if(anime){}											//pokud chci animovanou variantu jinak zakladni
	else{	
		if(boeal){
			if(variable)returnString+=a;					//pokud f=1 a=1
			else returnString +=not+" "+a;
			
			returnString += '&and;';
			
			if(variable2)returnString+=b;					//pokud f=1 b=1
			else returnString +=not+" "+b;	
		}
		else{
			if(variable)returnString+=not+" "+a;			//pokud f=0 a=1
			else returnString +=a;
			
			returnString += '&or;';
			
			if(variable2)returnString+=not+" "+b;			//pokud f=0 b=1
			else returnString +=b;	
		}
	}
	
	return returnString;
}
