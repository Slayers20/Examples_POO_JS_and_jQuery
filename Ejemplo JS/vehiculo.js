//constructor de la clase
	function Vehiculo(tipo, ruedas, tono){
		this.tipo = tipo;
		this.ruedas = ruedas;
		this.tono = tono;
	}

//Getters
    Vehiculo.prototype.get = function(atr){
        switch(atr){
            case "tipo":
                return this.tipo;
            case "ruedas":
                return this.ruedas;
            case "tono":
                return this.tono;
        }
    };

//Setters
    Vehiculo.prototype.set = function(atr,val){
        switch(atr) {
            case "tipo":
                this.tipo = val;
                break;
            case "ruedas":
                this.ruedas = val;
                break;
            case "tono":
                this.tono = val;
                break;
        }
    };

//Metodo que añade una rueda
	Vehiculo.prototype.ponRueda = function(){
	    this.ruedas++;
	};

//Metodo que quita una rueda
	Vehiculo.prototype.pinchaRueda = function(){
	    this.ruedas--;
	};