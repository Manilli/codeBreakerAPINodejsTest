module.exports={

    game:function(num){
        numero =  [1,2,3,4];
        numeroIngresado = num.toString();
        var resultado="";
        for (var i = 0; i < numero.length; i++) {
            for(var j=0;j < numeroIngresado.length; j++ ){
                if((numero[i]==numeroIngresado[j])){
                    if((i==j)){
                        resultado+="X";
                    } else {
                        resultado+="_";
                    }
                }
            }
            
        }
        resultado = this.order(resultado);
        return(resultado);
    },

    order:function(str){
        var varX = "";
        var var_ = "";
        for (var i = 0; i < str.length; i++) {
            if(str.substr(i,1)== "X"){
                varX+= "X";
            }
            if(str.substr(i,1)== "_"){
                var_+= "_";
            }
        }
        return varX + var_;
    },

    setSecretCode:function(str){
        return str
    }
}