$(document).ready(function(){



	function unitsToHundred(numberofElements,numero,read,decena){
		if (numberofElements==1){
			return (numero.key1[read[0]]);
		}else if(numberofElements==2){
				if(read[0]==1){
					return (numero.key2[read[1]]);
				}else{
					return (decena.key1[read[0]]) + " " +(numero.key1[read[1]]);
		        }
		}else if(numberofElements===3 ){
			if(read[0]==0){
				return (decena.key1[read[1]]) + " " +(numero.key1[read[2]]);
			}else if (read[0]==0 && read[1]==0 && read[2]== 0){
				return " ";
			}else if (read[1]==1){
				return (numero.key1[read[0]])+ " hundred " + (numero.key2[read[2]]);
			}else{
				return (numero.key1[read[0]])+ " hundred " + (decena.key1[read[1]]) + " " +(numero.key1[read[2]]);
			} 	
		}
	}


	var numero={key1:["","one","two","three","four","five","six","seven","eight","nine"],key2:["ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"]};
	var decena={key1:["","","tweny","thirty","fourty","fifty","sixty","seventy","eighty","ninety"]};
	var separatewords= {key1:["","thousand", "million", "thousand million", "billion"]};
	//var separatewords = {key1:["billion","thousand million", "million", "thousand"]}

	$("button#writenumber").on("click",function() {
		event.preventDefault();
		var number= parseInt($("input#typenumber").val());
		var samenumber= ($("input#typenumber").val());
		var read = samenumber.split("").map(Number);
		var numberofElements = (read.length);
		var timestoRepeat = Math.ceil(numberofElements/3);
		var contador ;
		var contador2= timestoRepeat;
		var result;
		var answer =[];
		var doingShowAnswer;
		var answerToShow=[] ;
		var separate;
		

	if (number> -1 && number<1000000000001){
		if (number == 0){
			separate= "zero";
		}else if(number == 1000000000000){
			separate = "one billion";	
		}else if (timestoRepeat>1){
			numberofElements = (numberofElements-((timestoRepeat-1)*3));
			for (contador=0; contador<timestoRepeat; contador++) {
				contador2=contador2-1 ;
				result= unitsToHundred(numberofElements,numero,read,decena);
				answer.push(result);
				read.splice(0,numberofElements);
				doingShowAnswer = ((answer[contador])+ " "+(separatewords.key1[contador2]));
				answerToShow.push(doingShowAnswer);
				var separate = answerToShow.join(" ");
				numberofElements=3;
			}
			
			//for (contador=0;contador<timestoRepeat;contador++){}
		}else{
			numberofElements=numberofElements;
			answerToShow = unitsToHundred(numberofElements,numero,read,decena);
			
		}
		$("#tabla").append("<tr><td>" + number + "</td><td>" + separate + "</td></tr>");
	}else{
		alert ("This program just calculates numbers from 0 to 1 billion");
	}

		 
		
	})
})
