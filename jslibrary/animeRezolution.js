/**
 * Basic library for animation resolution
 * 
 * @author Marek Bartošek
 * @version 0.0.1
 * 
 */

/**
 * //using from http://www.mredkj.com/tutorials/tableaddcolumn.js
 * //prida na konec sloupec
 *
 * //prevzato z netu a pozmeneny promenne
 * @param textarea @type HTMLObject - textarea, where will be added symbols
 * @param text @type string
 * @return nothing
 * @exception nothing
 */
function addColumn(tblId,columnObject)
{
	//document.getElementById(tblId).tHead!=null
	if(tblId.tHead!=null)	{
		var tblHeadObj = tblId.tHead;
		for (var h=0; h<tblHeadObj.rows.length; h++) {
			var newTH = document.createElement('th');
			tblHeadObj.rows[h].appendChild(newTH);
			newTH.innerHTML = "";//'[th] row:' + h + ', cell: ' + (tblHeadObj.rows[h].cells.length - 1);
		}
	}
	//document.getElementById(tblId)
	var tblBodyObj = tblId.tBodies[0];
	for (var i=0; i<tblBodyObj.rows.length; i++) {
		var newCell = tblBodyObj.rows[i].insertCell(-1);
		
		if(columnObject!=null){
			newCell.innerHTML = columnObject[i];
		}
		else{
			newCell.innerHTML = "";//'[td] row:' + i + ', cell: ' + (tblBodyObj.rows[i].cells.length - 1);
		}
	}
}

/**
 * anime to and create. After remove in from
 *
 * //prevzato z netu a pozmeneny promenne
 * @param textarea @type HTMLObject - textarea, where will be added symbols
 * @param text @type string
 * @return nothing
 * @exception nothing
 */
function addFirstColumn(tblId,columnObject)
{
	//document.getElementById(tblId).tHead!=null
	if(tblId.tHead!=null)	{
		var tblHeadObj = tblId.tHead;
		for (var h=0; h<tblHeadObj.rows.length; h++) {
			var newTH = document.createElement('th');
			tblHeadObj.rows[h].appendChild(newTH);
			newTH.innerHTML = "";//'[th] row:' + h + ', cell: ' + (tblHeadObj.rows[h].cells.length - 1);
		}
	}
	var tblBodyObj = tblId.tBodies[0];
	for (var i=0; i<tblBodyObj.rows.length; i++) {
		var newCell = tblBodyObj.rows[i].insertCell(0);
		
	
		if(columnObject!=null){
			//newCell.innerHTML = columnObject[i].innerHTML;
			newCell.innerHTML = columnObject[i];
		}
		else {
			newCell.innerHTML = "";//'[td] row:' + i + ', cell: ' + (tblBodyObj.rows[i].cells.length - 1);
		}
	}
}

/**
 * /odstrani posledni sloupec
 *
 * //prevzato z netu a pozmeneny promenne
 * @param tblId @type TableObject 
 * @return nothing
 * @exception nothing
 */
function deleteColumn(tblId)
{
	var allRows = tblId.rows;
	for (var i=0; i<allRows.length; i++) {
		if (allRows[i].cells.length > 1) {
			allRows[i].deleteCell(-1);
		}
	}
}

/**
 * //prida radek na konci tabulky
 *
 * //prevzato z netu a pozmeneny promenne
 * @param tblId @type TableObject 
 * @param rowObject @type TableObject 
 * @return nothing
 * @exception nothing
 */
function addRowToTable(tblId,rowObject)
{
  var lastRow = tblId.rows.length;
  // if there's no header row in the table, then iteration = lastRow + 1
  var iteration = lastRow;
  var row = tblId.insertRow(lastRow);

	var tblBodyObj = tblId.rows[lastRow-1];
	var tblBodyObj2 = tblId.rows[lastRow];

	for (var i=0; i<tblBodyObj.cells.length; i++) {
		var newCell = tblBodyObj2.insertCell(i);
		
		if(rowObject!=null){
			if(rowObject[i]==undefined){
			newCell.innerHTML = "";	
			}
			else{
				newCell.innerHTML = rowObject[i];
			}
			
			
		}
		else {
			newCell.innerHTML = "";//'[td] row:' + lastRow + ', cell: ' + (i);
		}
	}
}

/**
 * //prida radek na zacatek tabulky
 *
 * //prevzato z netu a pozmeneny promenne
 * @param tblId @type TableObject 
 * @param rowObject @type TableObject 
 * @return nothing
 * @exception nothing
 */
function addFirstRowToTable(tblId,rowObject)
{
  var lastRow = tblId.rows.length;
  // if there's no header row in the table, then iteration = lastRow + 1
  var iteration = lastRow;
  var row = tblId.insertRow(0);

	var tblBodyObj = tblId.rows[lastRow];
	var tblBodyObj2 = tblId.rows[0];

	for (var i=0; i<tblBodyObj.cells.length; i++) {
		var newCell = tblBodyObj2.insertCell(i);
		
		if(rowObject!=null){
			newCell.innerHTML = rowObject[i];
		}
		else {
			newCell.innerHTML = "";//'[td] row:' + lastRow + ', cell: ' + (i);
		}
	}
}

/**
 * //smaze radek na konci tabulky
 *
 * //prevzato z netu a pozmeneny promenne
 * @param tblId @type TableObject 
 * @param rowObject @type TableObject 
 * @return nothing
 * @exception nothing
 */
function removeRowFromTable(tblId)
{
  var tbl = document.getElementById(tblId);
  var lastRow = tbl.rows.length;
  if (lastRow > 2) tbl.deleteRow(lastRow - 1);
}

//animace rezoluce uzlu
