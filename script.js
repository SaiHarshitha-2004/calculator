const content = document.getElementById('text');

let operator = [];
 let pre ;
 let err;

function operation( val ){

    if( val != '=' && val != 'back') {        

        operator.push(val);

      document.getElementById('text').innerText += val;

    }

    if( val == 'C'){
        document.getElementById('text').innerHTML = "";
        document.getElementById('answerText').innerHTML = ""
    }

    if( val == 'back'){
      const backSpace = content.innerHTML;
      var use = backSpace.slice(0 , -1);
      document.getElementById('text').innerHTML = use;
    }

    if( val == '+' || val == '-' || val == '*' || val == '/' && pre == '+' || pre == '-' || pre == '*' || pre == '/' ){
         
        err = 1;
    }
    if(val == '='){
        result( err ); 
    }
}

function result() {

  let len = operator.length;

    if(len == 0 ){
        document.getElementById('text').innerText = 0;
    }
    else if(isNaN(operator[0]) == true){

        document.getElementById('text').innerHTML = "Syntax Error";
    }
    else { 

        if(err == 1){
            document.getElementById('answerText').innerHTML = "Syntax Error"
        }
        var exp = document.getElementById('text').textContent;
        var result = eval( exp );
        document.getElementById('answerText').innerHTML = `= ${result}`;
        
    }
}






