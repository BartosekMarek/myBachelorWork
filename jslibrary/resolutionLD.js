/**
 * @author Marek
 */

//vytvoreni rezolucniho kroku s vyuzitim animeRezolution.js
var timeOfSteps= 1300;
var action=false;
var animated=false;
var time;				//time in animation
//var oldTime;
var timeOfSteps= 2000;	//time in one step

var red="blue";
var green="";
var blue="";
var olderVariables="olderVariables";
var purple="purple";


$(document).ready(function() {

	
	var output = document.getElementById("timeControl");
	if(output != null)
	{
			output.innerHTML = timeOfSteps/1000 + "s";
	}
	
	var tabulka = document.getElementById("animLD");
	if(tabulka.innerHMTL!="<tbody align='center'><tr><td>	</td></tr></tbody>"){
		tabulka.innerHTML="<tbody align='center'><tr><td>	</td></tr></tbody>";
	}
	
	
	$("#buttonAnimPlay").click(function(){ 
 		playResolutLinear();		
  	});	
  
    $("#buttonAnimReload").click(function(){ 
  		  	animated=false;
  			location.reload();
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
});

/*
 * tvorba zakladniho revolucniho stromu po vzoru resolutionTree
 */
function playResolutLinear(){
	 if(action==false){		
	  action=true;//zapoceni akce 		
  		var tabulka = document.getElementById("animLD");		
  		
  		if(animated){
  			animated=false;
  			//location.reload();
  			tabulka.innerHTML=	"<tbody align='center'><tr><td>	</td></tr></tbody>";
  		}
  	
  		var rowsOfKlauzuls = $(".resolutionFormula");
  		var klauzuls = rowsOfKlauzuls[0].rows[0];
  		
  		//jedna funkce pro presun z radku klauzuli do rezolucniho stromu PKTRT
  		time=setTimeout(function(){
  			
  			var firstKlauzul = tabulka.rows[0].cells[0];
  			var fromFirstKlauzul = klauzuls.cells[2];
  			colored(firstKlauzul,blue);
  			colored(fromFirstKlauzul,blue);
  			
  			animeThereInTable2(rowsOfKlauzuls[0],tabulka,0,2,0,0,timeOfSteps-100);
  			
  			time=setTimeout(function(){
  				firstKlauzul.innerHTML="[<span class="+green+">¬q</span>,<span class="+red+">¬p</span>]";
  				colored(firstKlauzul);
  				colored(fromFirstKlauzul);
  				//konec prvni PKTRT
  				
				time=setTimeout(function(){
					//komplexni animace jedne rezoluce
					//function linearRezolution(tabulka,klauzuls,rowsOfKlauzuls,myRow,fromKlauzulCell,fromKlauzul,whichRSpan,whichLSpan,result,myTimeRez)
					linearRezolution(tabulka,klauzuls,rowsOfKlauzuls,0,4,"[<span class="+red+">p</span>,<span class="+green+">¬r</span>]",1,0,"[<span class="+green+">¬q</span>,<span class="+red+">¬r</span>]",timeOfSteps*5);
									
									time=setTimeout(function(){
										//komplexni animace jedne rezoluce
										linearRezolution(tabulka,klauzuls,rowsOfKlauzuls,2,3,"[<span class="+red+">r</span>]",null,0,"[<span class="+red+">¬q</span>]",timeOfSteps*5);
									
										time=setTimeout(function(){
											//komplexni animace jedne rezoluce
											linearRezolution(tabulka,klauzuls,rowsOfKlauzuls,4,5,"[<span class="+red+">q</span>,<span class="+green+">¬p</span>]",1,null,"[<span class="+red+">¬p</span>]",timeOfSteps*5);
										
											time=setTimeout(function(){
												//komplexni animace jedne rezoluce
												linearRezolution(tabulka,klauzuls,rowsOfKlauzuls,6,4,"[<span class="+red+">p</span>,<span class="+green+">¬r</span>]",1,null,"[<span class="+red+">¬r</span>]",timeOfSteps*5);
											
												time=setTimeout(function(){
													//komplexni animace jedne rezoluce
													linearRezolution(tabulka,klauzuls,rowsOfKlauzuls,8,3,"[<span class="+red+">r</span>]",0,0,"<span class="+red+">□</span>",timeOfSteps*5);
 				
  													//vlozeni vetvi
  													time=setTimeout(function(){
								  						colored(tabulka.rows[8].cells[0].getElementsByTagName("span")[0],olderVariables);
								  						colored(tabulka.rows[8].cells[2].getElementsByTagName("span")[0],olderVariables);
  														variableRightRezolution (tabulka,10,0,"<span>□</span>"); 
  														action=false;
  														animated=true;

													},timeOfSteps*5.5);
												},timeOfSteps*5.5);
											},timeOfSteps*5.5);
										},timeOfSteps*5.5);		
									},timeOfSteps*5.5);	
								},timeOfSteps);	
  								
  			
  			},timeOfSteps);	 
  		 },timeOfSteps/2);	
  	  }	 
}


/*
 * minifunkce pro barveni promennych s navratem puvodnych barev
 */
function colored(what,color){
	if(what!=null){
		
		var oldClass;
		if(what.getAttribute("class")!=null){
			oldClass=what.getAttribute("class");
		}
		if(color==null){
			what.removeAttribute("class");		
		}
		else{
			what.setAttribute("class",color);
		}
		return oldClass;
	}	
}

/*
 * minifunkce pro vlozeni promenne do prave vetve linearni rezoluce
 */
function variableRightRezolution (table,row,cell,what){
	//podminka pro pripadnou neexistujici sloupec
	var cellLength=table.rows[0].cells.length;
	var rowLength=table.rows.length;//pocet radku
	while(cellLength-1<cell){
		addColumn(table);
		cellLength++;
	}

	//podminka pro neexistujici radek
	while(rowLength-1<row){
		addRowToTable(table);
		rowLength++;
	}
	
	var temp = table.rows[row].cells[cell];
	temp.innerHTML = what;
}

/*
 * minifunkce pro tvorbu samostatnych vetvi
 */
function linearRezolut (table,where){
	var rowObject1 = [];
	if(where==null){
  		rowObject1[0] = "<img src='../style/img/centreLine.png'>";
  		rowObject1[1] = "<img src='../style/img/rightLine.png' >";
  		rowObject1[2] = "";
  		addRowToTable(table,rowObject1);
  	}
	else{
		rowObject1[where] = "<img src='../style/img/centreLine.png'>";
  		rowObject1[where+1] = "<img src='../style/img/rightLine.png' >";
  		rowObject1[where+2] = "";
  		addRowToTable(table,rowObject1);
	}
}

/*
 * kompletni funkce pro vlozeni promenno do prave vetve a tvoreni vetvi a vlozeni vysledneho rezolventu
 * včetně barvení a animačního posunu
 * variable - promenna z praveho vetve
 * rezolVar - vysledna rezolventa
 */
function linearRezolution(tabulka,klauzuls,rowsOfKlauzuls,myRow,fromKlauzulCell,fromKlauzul,whichRSpan,whichLSpan,result,myTimeRez){
  				
  			//	var tabulka = document.getElementById("animLin2");	
  			//	var rowsOfKlauzuls = $(".resolutionFormula2");
  			//	var klauzuls = rowsOfKlauzuls[0].rows[0];
  				
  				//2 PKTRT
  				time=setTimeout(function(){
  					
  					variableRightRezolution (tabulka,myRow,2,""); //vytvoreni pole	
  					firstKlauzul = tabulka.rows[myRow].cells[2];
  					fromFirstKlauzul = klauzuls.cells[fromKlauzulCell];
  					  					
  					colored(firstKlauzul,blue);
  					colored(fromFirstKlauzul,blue);  		
  					animeThereInTable2(rowsOfKlauzuls[0],tabulka,0,fromKlauzulCell,myRow,2,myTimeRez/5);
  				
  					time=setTimeout(function(){
  						firstKlauzul = tabulka.rows[myRow].cells[2];
  						fromFirstKlauzul = klauzuls.cells[fromKlauzulCell];
  						firstKlauzul.innerHTML=fromKlauzul;
  						colored(firstKlauzul);
  						colored(fromFirstKlauzul);
  				//konec 2PKTRT
  				
  						//vlozeni vetvi
  						time=setTimeout(function(){
  							linearRezolut (tabulka);
  							variableRightRezolution (tabulka,myRow+2,0,"<span></span><span></span>"); 
  							
  							firstKlauzul = tabulka.rows[myRow+2].cells[0];
  							colored(firstKlauzul,green);
  							
  							//zacatek animace literalu
  							time=setTimeout(function(){
  								if(whichRSpan!=null){
  							  		animeThereInTableSpan(tabulka,myRow,2,whichRSpan,myRow+2,0,1,myTimeRez/5); //animovany posun
  							  	}
  							  	if(whichLSpan!=null){  	
  									animeThereInTableSpan(tabulka,myRow,0,whichLSpan,myRow+2,0,0,myTimeRez/5); //animovany posun	
  								}
  									
  								time=setTimeout(function(){
  									firstKlauzul = tabulka.rows[myRow+2].cells[0];
									firstKlauzul.innerHTML=result;
  									colored(firstKlauzul);
  									
  									colored(tabulka.rows[myRow].cells[0].getElementsByTagName("span")[whichLSpan]);
  									colored(tabulka.rows[myRow].cells[2].getElementsByTagName("span")[whichRSpan]);
  									
  									if(whichLSpan==null){
  										colored(tabulka.rows[myRow].cells[0].getElementsByTagName("span")[0],olderVariables);
  									}
  									else{								
  									if(tabulka.rows[myRow].cells[0].getElementsByTagName("span")[(whichLSpan+1)%2]!=null){
  										colored(tabulka.rows[myRow].cells[0].getElementsByTagName("span")[(whichLSpan+1)%2],olderVariables);//druhy span od posouvaneho
  									}}
  									
  									if(whichRSpan==null){
  										colored(tabulka.rows[myRow].cells[2].getElementsByTagName("span")[0],olderVariables);
  									}
  									else{
  									if(tabulka.rows[myRow].cells[2].getElementsByTagName("span")[(whichRSpan+1)%2]!=null){
  										colored(tabulka.rows[myRow].cells[2].getElementsByTagName("span")[(whichRSpan+1)%2],olderVariables);
  									}}
									//konec animace literalu
  								},myTimeRez/5);	
  							},myTimeRez/5);	
  						},myTimeRez/5);	
  					},myTimeRez/5);	 
  		 		},myTimeRez/5);
}

