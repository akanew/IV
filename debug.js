var inDivs = new Array();
inDivs=getDivsListWithAlikeClassName("col-xs-4");
linefeedDiv(inDivs, 3);//перенос строки
inDivs = new Array();
inDivs=getDivsListWithAlikeClassName("thumbnail");
divsMatrix=getDivsMatrixFromRowElementCount(inDivs,3);

var maxHeight=0;

for(i=0;i<divsMatrix.length;i++){

	for(j=0;j<divsMatrix[i].length;j++){
    commonHeight = divsMatrix[i][j].offsetHeight; //Получаем сумму высот изображения и описания
    if(maxHeight<commonHeight)
    	maxHeight=commonHeight; //Находим максимальную высоту
  }

  for(j=0;j<divsMatrix[i].length;j++){
      classCaption=divsMatrix[i][j].childNodes[3]; //get [div] (class="caption")
  	bottomAdder=maxHeight-divsMatrix[i][j].offsetHeight; //Вычисляем величину добавки (adder) для каждого товара
    classCaption.style.marginBottom = bottomAdder+"px"; // Регулируем высоту товаров
  }
  
  maxHeight=0;
}

////////////////////////////////////////////////////////////
function linefeedDiv(divsList, divsInRow) {
	divsList[parseInt(divsInRow)].style.clear = "both";
};

function getDivsListWithAlikeClassName(className){
  var divs = document.getElementsByTagName("div");
  var j=0;
  var inDivs = new Array();
  for(var i=0; i<divs.length; i++){
    if(divs[i].className == className){
    j++;
    inDivs[j-1] = divs[i];
    }
  }
	return inDivs;
}

function getDivsMatrixFromRowElementCount(divsList, countElementInRow){
	var divsMatrix = new Array();
	var divsSublist = new Array();
  var j=0, k=0;
	for(i=0;i<=divsList.length;i++){
  	if(i % countElementInRow == 0 && i != 0){    
    	divsMatrix[k]=divsSublist;
      k++;
      divsSublist = new Array();
      j=0;
    }
    divsSublist[j]=divsList[i];    
    j++;
  }
  return divsMatrix;
}