// require files in Node.js environment

if (typeof module === 'object' && module.exports) {
  
}




//export module
if ( typeof define === "function" && define.amd ) {
  define('DesbloquearCartaoResponse', ['jquery'],
    function($) {
      return DesbloquearCartaoResponse;
   });
}


var DesbloquearCartaoResponse = function DesbloquearCartaoResponse() { 
  var self = this;
  
  /**
   * datatype: Integer
   **/
  self.codigoRetorno = null;
  
  /**
   * datatype: String
   **/
  self.descricaoRetorno = null;
  
  
  self.constructFromObject = function(data) {
    if (!data) {
      return;
    }
    
    self.codigoRetorno = data.codigoRetorno;
    
    self.descricaoRetorno = data.descricaoRetorno;
    
  }

  
  /**
   * @return {Integer}
   **/
  self.getCodigoRetorno = function() {
    return self.codigoRetorno;
  }

  /**
   * @param {Integer} codigoRetorno
   **/
  self.setCodigoRetorno = function (codigoRetorno) {
    self.codigoRetorno = codigoRetorno;
  }
  
  /**
   * @return {String}
   **/
  self.getDescricaoRetorno = function() {
    return self.descricaoRetorno;
  }

  /**
   * @param {String} descricaoRetorno
   **/
  self.setDescricaoRetorno = function (descricaoRetorno) {
    self.descricaoRetorno = descricaoRetorno;
  }
  

  self.toJson = function () {
    return JSON.stringify(self);
  }
}

if (typeof module === 'object' && module.exports) {
  module.exports = DesbloquearCartaoResponse;
}
