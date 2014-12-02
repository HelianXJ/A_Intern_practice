function $$(e){
	return document.getElementById(e);
}

function myPlayer(con, child, speed){
    var oChild = $$(con).getElementsByTagName(child),
        timer,k=0;
        var timer = setInterval( function() {
            for(var m=0;m<oChild.length;m++){
            	oChild[m].style.visibility='hidden';
            }

            oChild[k].style.visibility='visible';

            if(k>oChild.length-2){
               k=0;
            }else{
               k++;
            }
        },speed);

}
myPlayer('pics','div',2000);