//constructor de la clase
	function Vehiculo(tipo, ruedas, tono){
		this.tipo = tipo;
		this.ruedas = ruedas;
		this.tono = tono;
	}

//Getters
    Vehiculo.prototype.getTipo = function(){ return this.tipo; };
    Vehiculo.prototype.getRuedas = function(){ return this.ruedas; };
    Vehiculo.prototype.getTono = function(){ return this.tono; };

    // Se podrian hacer todos asi pero con jQuery no asi que os los muestro de uno en uno
    /*
    Vehiculo.prototype.get = function(atr){
        switch(atr){
            case "tipo":
                return this.tipo;
            case "ruedas":
                return this.ruedas;
            case "tono":
                return this.tono;
        }
    };*/

//Setters

    Vehiculo.prototype.setTipo = function(val){ this.tipo = val; };
    Vehiculo.prototype.setRuedas = function(val){ this.ruedas = val; };
    Vehiculo.prototype.setTono = function(val){  this.tono = val; };

    // Se podrian hacer todos asi pero con jQuery no asi que os los muestro de uno en uno
    /*
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
    };*/

//Metodo que añade una rueda
	Vehiculo.prototype.ponRueda = function(){
	    this.ruedas++;
	};

//Metodo que quita una rueda
	Vehiculo.prototype.pinchaRueda = function(){
	    this.ruedas--;
	};