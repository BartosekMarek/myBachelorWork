var leftLine ="<img src='../style/img/leftLine.png' >";
var rightLine ="<img src='../style/img/rightLine.png' >";	
var centreLine ="<img src='../style/img/centreLine.png' >";

var red="blue";
var green="";
var blue="";
var olderVariables="olderVariables";

/**
 * @author Marek
 */
var timeOfSteps= 1300;	//time in one step
var action=false;
var animated=false;

$(document).ready(function() {

  	var output = document.getElementById("timeControl");
	if(output != null)
	{
			output.innerHTML = timeOfSteps/1000 + "s";
	}		  
	
	var tabulka = document.getElementById("animTree");
	tabulka.innerHTML=	"<tbody align='center'><tr><td>	</td></tr></tbody>";
  	
  	
  	$("#buttonAnimPlay").click(function(){  
  	  		playResolutTree();	  				
  	});	
  	
  	/*$("#buttonAnimPause").click(function(){ 
 
  	});*/
  	
  	
  	$("#buttonAnimReload").click(function(){ 
  		  	animated=false;
  		  	action=false;
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
		if(timeOfSteps!=50){
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
  	  	
  	  	if (action==false){ 	  			
			playResolutTree();}
				
		time=setTimeout(function(){	
			timeOfSteps=oldTime;
			},600);
					
  	});  
  	
});

function clasicRezolut (table,whereCell,whereRow){
	
	if(whereRow!=null){
		if(table.rows.length>=whereRow){//pokud uz jsou vytvorene bunky, tak se jen vlozi
			variableRightRezolution (table,whereRow,whereCell+1,leftLine);
			variableRightRezolution (table,whereRow,whereCell+3,rightLine);
		}
	}
	else{
		var rowObject1 = [];
		
		if(whereCell==null){
  			rowObject1[0] = "";
 	 		rowObject1[1] = leftLine;
  			rowObject1[2] = "";
  			rowObject1[3] = rightLine;
  			rowObject1[4] = "";
  			addRowToTable(table,rowObject1);
  		}
		else{
			rowObject1[whereCell] = "";
  			rowObject1[whereCell+1] = leftLine;
  			rowObject1[whereCell+2] = "";
  			rowObject1[whereCell+3] = rightLine;
  			rowObject1[whereCell+4] = "";
  			addRowToTable(table,rowObject1);
		}
	}
}

function doubleclasicRezolut (table,where){
	var rowObject1 = [];
	if(where==null){
  		rowObject1[0] = "";
  		rowObject1[1] = leftLine;
  		rowObject1[2] = "";
  		rowObject1[3] = "";
  		rowObject1[4] = "";  		
  		rowObject1[5] = rightLine;
  		rowObject1[6] = "";
  		addRowToTable(table,rowObject1);
  	}
	else{
		rowObject1[where] = "";
  		rowObject1[where+1] = leftLine;
  		rowObject1[where+2] = "";
  		rowObject1[where+3] = "";
  		rowObject1[where+4] = "";
  		rowObject1[where+5] = rightLine;
  		rowObject1[where+6] = "";
  		addRowToTable(table,rowObject1);
	}
	clasicRezolut(table,where+1);
}

/*vlozeni promenne do tabulky - a pokud neexistuje tak vlozit bunky*/
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

//inspirace pro klasickou rezoluci
function linearRezolution(table,variable,rezolVar,timeRez){
	if(timeRez==null){timeRez=1300;}
	
	lastRow=table.rows.length-1;
	
		//time=setTimeout(function(){
			variableRightRezolution (table,lastRow,2,variable);//promenna vpravo(z ceho se rezoluje)
			time=setTimeout(function(){
				linearRezolut (table);
				time=setTimeout(function(){
					variableRightRezolution (table,lastRow+2,0,rezolVar);//promenna vlevo(vysledek rezoluce)
				},timeRez);
			},timeRez);
		//},timeRez);
}

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

function playResolutTree(){
	if(action==false){		
	  	action=true;//zapoceni akce
  	  	//location.reload();		
  		var tabulka = document.getElementById("animTree");
  		
  		if(animated){
  			//baseTable(tabulka,15,8);
  			animated=false;
  			//location.reload();
  			tabulka.innerHTML=	"<tbody align='center'><tr><td>	</td></tr></tbody>";
  		}
  		
  		var promenna = $(".resolutionFormula");
  		var radekpromenne = promenna[0].rows[0];
  		
  		//alert("ziskal jsem: "+ promenna+ "pole 0 je: "+ promenna[0] + "a obsahuje: " + promenna[0].innerHTML + "prvni bunka tabulky je: " + promenna[0].rows[0].cells[1].innerHTML);		
  		
  		time=setTimeout(function(){	
  			//1 varianta zvyrazneni 
  			//2 varianta - posun promenne ze zadavaciho radku			
  			variableRightRezolution (tabulka,0,0,"{p,r}");
  			//1
  			colored(radekpromenne.cells[1],blue); 
  			colored(tabulka.rows[0].cells[0],blue);
  			animeThereInTable2(promenna[0],tabulka,0,1,0,0,timeOfSteps-100); //animovany posun

  			
  		
  			time=setTimeout(function(){	
  				//mazani barvy
  				colored(radekpromenne.cells[1]);
  				colored(tabulka.rows[0].cells[0]);  
  							
  				variableRightRezolution (tabulka,0,4,"{q,¬r}");
  				//1
  				colored(radekpromenne.cells[2],blue); 
  				colored(tabulka.rows[0].cells[4],blue);
  				animeThereInTable2(promenna[0],tabulka,0,2,0,4,timeOfSteps-100); //animovany posun
  				
  			
  				time=setTimeout(function(){	
  					//mazani barvy
  					colored(radekpromenne.cells[2]);
  					colored(tabulka.rows[0].cells[4]); 
  					

  					clasicRezolut (tabulka);  
  					
  					//stylovani bunek k rezoluci-pokrocile
  					variableRightRezolution (tabulka,0,0,"{<span class="+green+">p</span>,<span class="+red+">r</span>}");
  					variableRightRezolution (tabulka,0,4,"{<span class="+green+">q</span>,<span class="+red+">¬r</span>}");			
  			
  					time=setTimeout(function(){	
  						variableRightRezolution (tabulka,2,2,"{<span>p</span>,<span>q</span>}");
  						//1 pokrocily
  						colored(tabulka.rows[2].cells[2],green);

  						animeThereInTableSpan(tabulka,0,4,0,2,2,1,timeOfSteps-100); //animovany posun  	
  						animeThereInTableSpan(tabulka,0,0,0,2,2,0,timeOfSteps-100); //animovany posun
			  				
  						time=setTimeout(function(){	
  							//mazani pokrocileho
  							variableRightRezolution (tabulka,0,0,"{p,<span class="+olderVariables+">r</span>}");
  							variableRightRezolution (tabulka,0,4,"{q,<span class="+olderVariables+">¬r</span>}");
  							colored(tabulka.rows[2].cells[2]);
  							 							
  							variableRightRezolution (tabulka,2,6,"{¬q}");
  							//1
  							colored(radekpromenne.cells[3],blue); 
  							colored(tabulka.rows[2].cells[6],blue);
  							
  							animeThereInTable2(promenna[0],tabulka,0,3,2,6,timeOfSteps-100); //animovany posun
  							
  							time=setTimeout(function(){	 
  								//mazani barvy
  								colored(radekpromenne.cells[3]); 
  								colored(tabulka.rows[2].cells[6]);
  								
  								clasicRezolut (tabulka,2);
  								
  								//stylovani bunek k rezoluci-pokrocile
  								variableRightRezolution (tabulka,2,6,"{<span class="+red+">¬q</span>}");
  								variableRightRezolution (tabulka,2,2,"{<span class="+green+">p</span>,<span class="+red+">q</span>}");
  					  					
  								time=setTimeout(function(){	
  									variableRightRezolution (tabulka,4,4,"{<span>p</span>}");
  									//1 pokrocily
  									colored(tabulka.rows[4].cells[4],green);
  									
  									animeThereInTableSpan(tabulka,2,2,0,4,4,0,timeOfSteps-100); //animovany posun  
  					 					
  									time=setTimeout(function(){	
  										//mazani pokrocileho
  										variableRightRezolution (tabulka,2,6,"{<span class="+olderVariables+">¬q</span>}");
  										variableRightRezolution (tabulka,2,2,"{p,<span class="+olderVariables+">q</span>}");
  										colored(tabulka.rows[4].cells[4]);
  										
  										variableRightRezolution (tabulka,0,10,"{¬p,t}");
  										//1
  										colored(radekpromenne.cells[4],blue); 
  										colored(tabulka.rows[0].cells[10],blue);
  										
  										animeThereInTable2(promenna[0],tabulka,0,4,0,10,timeOfSteps-100); //animovany posun
  				  				
  										time=setTimeout(function(){	
  											//mazani
  											colored(radekpromenne.cells[4]); 
  											colored(tabulka.rows[0].cells[10]);
  											
					  						variableRightRezolution (tabulka,0,14,"{s,¬t}");
					  						//1
					  						colored(radekpromenne.cells[6],blue); 
  											colored(tabulka.rows[0].cells[14],blue);
  											
  											animeThereInTable2(promenna[0],tabulka,0,6,0,14,timeOfSteps-100); //animovany posun
  			
  											time=setTimeout(function(){	
  												//mazani
  												colored(radekpromenne.cells[6]); 
  												colored(tabulka.rows[0].cells[14]);
  												
												clasicRezolut (tabulka,10,1);//pokus o jednotny prikaz pro cary
												
												//stylovani bunek k rezoluci-pokrocile
  												variableRightRezolution (tabulka,0,10,"{<span class="+green+">¬p</span>,<span class="+red+">t</span>}");
  												variableRightRezolution (tabulka,0,14,"{<span class="+green+">s</span>,<span class="+red+">¬t</span>}");
  					
  												time=setTimeout(function(){	
  													variableRightRezolution (tabulka,2,12,"{<span>¬p</span>,<span>s</span>}");
  													//1 pokrocily
  													colored(tabulka.rows[2].cells[12],green);
  													
  													animeThereInTableSpan(tabulka,0,14,0,2,12,1,timeOfSteps-100); //animovany posun 
  													animeThereInTableSpan(tabulka,0,10,0,2,12,0,timeOfSteps-100); //animovany posun  
  					 							
  													time=setTimeout(function(){	
  														//mazani pokrocileho
  														variableRightRezolution (tabulka,0,10,"{¬p,<span class="+olderVariables+">t</span>}");
  														variableRightRezolution (tabulka,0,14,"{s,<span class="+olderVariables+">¬t</span>}");
  														colored(tabulka.rows[2].cells[12]);
  														
  														
  														variableRightRezolution (tabulka,2,8,"{¬s}");
  														//1
  														colored(radekpromenne.cells[5],blue); 
  														colored(tabulka.rows[2].cells[8],blue);
  														
  														animeThereInTable2(promenna[0],tabulka,0,5,2,8,timeOfSteps-100); //animovany posun
  						
  														time=setTimeout(function(){	
  															//mazani
  															colored(radekpromenne.cells[5]); 
  															colored(tabulka.rows[2].cells[8]);
  															
  															clasicRezolut (tabulka,8,3);
  															
  															//stylovani bunek k rezoluci-pokrocile
  															variableRightRezolution (tabulka,2,12,"{<span class="+green+">¬p</span>,<span class="+red+">s</span>}");
  															variableRightRezolution (tabulka,2,8,"{<span class="+red+">¬s</span>}");
  															
  															time=setTimeout(function(){	
  																variableRightRezolution (tabulka,4,10,"{<span>¬p</span>}");
  																//1 pokrocily
  																colored(tabulka.rows[4].cells[10],green);
  																
  																animeThereInTableSpan(tabulka,2,12,0,4,10,0,timeOfSteps-100); //animovany posun  
  								
  																time=setTimeout(function(){	
  																	//mazani pokrocileho
  																	variableRightRezolution (tabulka,2,12,"{¬p,<span class="+olderVariables+">s</span>}");
  																	variableRightRezolution (tabulka,2,8,"(<span class="+olderVariables+">¬s</span>}");
  																	colored(tabulka.rows[4].cells[10]);
  																	
  																	doubleclasicRezolut (tabulka,4);
  									
  																	//stylovani bunek k rezoluci-pokrocile
  																	variableRightRezolution (tabulka,4,4,"{<span class="+red+">p</span>}");
  																	variableRightRezolution (tabulka,4,10,"{<span class="+red+">¬p</span>}");
  																	
  																	time=setTimeout(function(){	 																		
																		variableRightRezolution (tabulka,7,7,"<span></span><span></span>");
																		//1 pokrocily
																		colored(tabulka.rows[7].cells[7],red);
																		
																		animeThereInTableSpan(tabulka,4,10,0,7,7,1,timeOfSteps-100); //animovany posun  
																		animeThereInTableSpan(tabulka,4,4,0,7,7,0,timeOfSteps-100); //animovany posun  
																		
		  																	time=setTimeout(function(){	 																		
  																				//mazani pokrocileho
  																				variableRightRezolution (tabulka,4,4,"{<span class="+olderVariables+">p</span>}");
  																				variableRightRezolution (tabulka,4,10,"(<span class="+olderVariables+">¬p</span>}");
  																				
  																				variableRightRezolution (tabulka,7,7,"<span>&square;</span>");
  																				
																				colored(tabulka.rows[7].cells[7]);
																				action=false;
																				animated=true;
																																				
																		},timeOfSteps); 																																		
																	},timeOfSteps); 										
																},timeOfSteps); 										
															},timeOfSteps); 										
														},timeOfSteps); 										
													},timeOfSteps);										
												},timeOfSteps); 
  											},timeOfSteps); 
  										},timeOfSteps); 
  									},timeOfSteps); 
  								},timeOfSteps); 
  							},timeOfSteps); 
  						},timeOfSteps*2); 
  					},timeOfSteps); 			
  				},timeOfSteps);
  			},timeOfSteps);  
  		},timeOfSteps); 
  	}	
}