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
	
	var tabulka = document.getElementById("animLin");
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
  	
  	$("#buttonAnimEnd").click(function(){
  		clearTimeout(time);
  	  	tabulka.innerHTML="<tbody align='center'><tr><td>{<span class='olderVariables'>r</span>}</td><td></td><td>{<span class='olderVariables'>¬r</span>,<span>p</span>}</td></tr>"+
  	  	"<tr><td><img src='../style/img/centreLine.png'></td><td><img src='../style/img/rightLine.png'></td><td></td></tr>"+
  	  	"<tr><td>{<span class='olderVariables'>p</span>}</td><td></td><td>{<span>¬q</span>,<span class='olderVariables'>¬p</span>}</td></tr>"+
  	  	"<tr><td><img src='../style/img/centreLine.png'></td><td><img src='../style/img/rightLine.png'></td><td></td></tr>"+
  	  	"<tr><td>{<span class='olderVariables'>¬q</span>}</td><td></td><td>{<span>¬p</span>,<span class='olderVariables'>q</span>}</td></tr>"+
  	  	"<tr><td><img src='../style/img/centreLine.png'></td><td><img src='../style/img/rightLine.png'></td><td></td></tr>"+
  	  	"<tr><td>{<span class='olderVariables'>¬p</span>}</td><td></td><td>{<span class='olderVariables'>p</span>}</td></tr>"+
  	  	"<tr><td><img src='../style/img/centreLine.png'></td><td><img src='../style/img/rightLine.png'></td><td></td></tr>"+
  	  	"<tr><td><span>□</span></td><td></td><td></td></tr></tbody>";
  	  	
  	  	animated=true;
  	  	action=false;
  	  				
  	});   
});

/*
 * tvorba zakladniho revolucniho stromu po vzoru resolutionTree
 */
function playResolutLinear(){
	 if(action==false){		
	  action=true;//zapoceni akce 		
  		var tabulka = document.getElementById("animLin");		
  		
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
  			var fromFirstKlauzul = klauzuls.cells[3];
  			colored(firstKlauzul,blue);
  			colored(fromFirstKlauzul,blue);
  			
  			animeThereInTable2(rowsOfKlauzuls[0],tabulka,0,3,0,0,timeOfSteps-100);
  			
  			time=setTimeout(function(){
  				firstKlauzul.innerHTML="{<span class="+red+">r</span>}";
  				colored(firstKlauzul);
  				colored(fromFirstKlauzul);
  				//konec prvni PKTRT
  				
  				//2 PKTRT
  				time=setTimeout(function(){
  					
  					variableRightRezolution (tabulka,0,2,""); //vytvoreni pole	
  					firstKlauzul = tabulka.rows[0].cells[2];
  					fromFirstKlauzul = klauzuls.cells[4];
  					  					
  					colored(firstKlauzul,blue);
  					colored(fromFirstKlauzul,blue);  		
  					animeThereInTable2(rowsOfKlauzuls[0],tabulka,0,4,0,2,timeOfSteps-100);
  				
  					time=setTimeout(function(){
  						firstKlauzul = tabulka.rows[0].cells[2];
  						fromFirstKlauzul = klauzuls.cells[4];
  						firstKlauzul.innerHTML="{<span class="+red+">¬r</span>,<span class="+green+">p</span>}";
  						colored(firstKlauzul);
  						colored(fromFirstKlauzul);
  				//konec 2PKTRT
  				
  						//vlozeni vetvi
  						time=setTimeout(function(){
  							linearRezolut (tabulka);
  							variableRightRezolution (tabulka,2,0,"<span></span><span></span>"); 
  							
  							firstKlauzul = tabulka.rows[2].cells[0];
  							colored(firstKlauzul,green);
  							
  							//zacatek animace literalu
  							time=setTimeout(function(){
  							  	animeThereInTableSpan(tabulka,0,2,1,2,0,0,timeOfSteps-100); //animovany posun  	
  								//animeThereInTableSpan(tabulka,0,0,0,2,2,0,timeOfSteps-100); //animovany posun	
  									
  								time=setTimeout(function(){
  									firstKlauzul = tabulka.rows[2].cells[0];
									firstKlauzul.innerHTML="{<span class="+red+">p</span>}";
  									colored(firstKlauzul);
  									colored(tabulka.rows[0].cells[0].getElementsByTagName("span")[0],olderVariables);
  									colored(tabulka.rows[0].cells[2].getElementsByTagName("span")[0],olderVariables);
  									colored(tabulka.rows[0].cells[2].getElementsByTagName("span")[1]);
  									
									//konec animace literalu
									
									time=setTimeout(function(){
										//komplexni animace jedne rezoluce
										linearRezolution(tabulka,klauzuls,rowsOfKlauzuls,2,2,"{<span class="+green+">¬q</span>,<span class="+red+">¬p</span>}",0,null,"{<span class="+red+">¬q</span>}",timeOfSteps*5);
										time=setTimeout(function(){
											//komplexni animace jedne rezoluce
											linearRezolution(tabulka,klauzuls,rowsOfKlauzuls,4,5,"{<span class="+green+">¬p</span>,<span class="+red+">q</span>}",0,null,"{<span class="+red+">¬p</span>}",timeOfSteps*5);

											//2 PKTRT
  											time=setTimeout(function(){
  												//rozepsan, protoze je specialni pripad
  												variableRightRezolution (tabulka,6,2,""); //vytvoreni pole			
  											  					  					
  												//colored(firstKlauzul,blue);
							  					//colored(fromFirstKlauzul,blue);  		
  												animeThereInTable(tabulka,2,0,6,2,timeOfSteps-100);
  				
  												time=setTimeout(function(){
  													firstKlauzul = tabulka.rows[6].cells[2];
								  					firstKlauzul.innerHTML="{<span class="+red+">p</span>}";
								  					//colored(firstKlauzul);
  													//colored(fromFirstKlauzul);
  													//konec 2PKTRT
  				
  													//vlozeni vetvi
  													time=setTimeout(function(){
  														linearRezolut (tabulka);
  														firstKlauzul = tabulka.rows[6].cells[2].getElementsByTagName("span")[0];
  														firstKlauzul2 = tabulka.rows[6].cells[0].getElementsByTagName("span")[0];
								  						colored(firstKlauzul,olderVariables);
								  						colored(firstKlauzul2,olderVariables);
								  						
  														variableRightRezolution (tabulka,8,0,"<span>□</span>"); 
  														action=false;
  														animated=true;
  														
													},timeOfSteps);
												},timeOfSteps); 
											},timeOfSteps*5.5);
										},timeOfSteps*5.5);		
									},timeOfSteps);	
  								},timeOfSteps);	
  							},timeOfSteps);	
  						},timeOfSteps);	
  					},timeOfSteps);	 
  		 		},timeOfSteps/2);
  			
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

