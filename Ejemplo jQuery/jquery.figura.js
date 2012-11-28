$.fn.figura = function (id,opciones){
    //guardo el objeto con el que trabajo
    var _this = $(this);

    //constructor
    if(id){
        //valores por defecto
        var atributos = {
            tono : "red",
            texto : ""
        }

        //extiendo los atributos por defecto con los nuevos
        $.extend(atributos,opciones);

        //creo el objeto "fisico"
        var nuevo = "<div id='"+id+"' data-tono='"+atributos.tono+"' class='"+atributos.tono+"'>"+atributos.texto+"</div>";

        //otra manera de añadir clases
        //_this.find("#"+id).addClass(atributos.tono);

        //Inserto al final del contenedor
        _this.append(nuevo);

        //devuelvo el objeto figura
        return _this.find("#"+id).figura();
    }else{
        //resto de metodos
        var metodos = {
            //Getters
            //no miro css porque quiero el tono no el color puede implicar más cosas
            //3 tipos de atributo
            getTono : function () { return _this.attr("data-tono"); },
            getText : function () { return _this.html(); },

            //Setters
            setTono : function (val) {
                //this porque estoy en el settono
                _this.removeClass(this.getTono()); //borro la clase que tenia
                _this.attr("data-tono",val); //cambio el data
                _this.addClass(_this.attr("data-tono")); //añado la clase
             },
             setText : function (val) {
                _this.html(val);
             },

            //metodo que duplica la capa
            duplicate : function(newid){
                var nuevo = _this.clone().attr("id",newid);
                _this.after(nuevo);

                //devuelvo el objeto figura nueva
                return _this.parent().find("#"+newid).figura();
            }

        };

        return metodos;
    }
};

$.fn.circulo = function(id,radio){
    //guardo el objeto con el que trabajo
    var _this = $(this);

    //constructor
    if(id){

        //soy una figura
        //parecido al super() de java
        _this.figura(id);

        //ahora me guardo el objeto que acabo de crear
        var obj = _this.find("#"+id);

        //atributos del circulo
        obj.css({
             "height" : radio*2+"px",
             "width" : radio*2+"px",
             "border-radius" : radio +"px"
        });

        //devuelvo el objeto circulo
        return obj.circulo();
    }else{
        var metodos = {
            //Getters
            getRadio : function () { return parseInt(_this.css("border-radius")) + "px"; },

            //Setters
            setRadio : function (radio) { _this.css({
                 "height" : radio*2+"px",
                 "width" : radio*2+"px",
                 "border-radius" : radio +"px"
                });
            }
        };

        //heredo de figura
        return $.extend({}, _this.figura(),metodos);
    }

}
