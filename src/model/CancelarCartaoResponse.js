// require files in Node.js environment

if (typeof module === 'object' && module.exports) {
  
}




//export module
if ( typeof define === "function" && define.amd ) {
  define('CancelarCartaoResponse', ['jquery'],
    function($) {
      return CancelarCartaoResponse;
   });
}


var CancelarCartaoResponse = function CancelarCartaoResponse() { 
  var self = this;
  
  /**
   * datatype: Integer
   **/
  self.codigoRetorno = null;
  
  /**
   * datatype: String
   **/
  self.descricaoRetorno = null;
  
  /**
   * datatype: Integer
   **/
  self.idCartao = null;
  
  /**
   * datatype: Integer
   **/
  self.idConta = null;
  
  
  self.constructFromObject = function(data) {
    if (!data) {
      return;
    }
    
    self.codigoRetorno = data.codigoRetorno;
    
    self.descricaoRetorno = data.descricaoRetorno;
    
    self.idCartao = data.idCartao;
    
    self.idConta = data.idConta;
    
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
  
  /**
   * @return {Integer}
   **/
  self.getIdCartao = function() {
    return self.idCartao;
  }

  /**
   * @param {Integer} idCartao
   **/
  self.setIdCartao = function (idCartao) {
    self.idCartao = idCartao;
  }
  
  /**
   * @return {Integer}
   **/
  self.getIdConta = function() {
    return self.idConta;
  }

  /**
   * @param {Integer} idConta
   **/
  self.setIdConta = function (idConta) {
    self.idConta = idConta;
  }
  

  self.toJson = function () {
    return JSON.stringify(self);
  }
}

if (typeof module === 'object' && module.exports) {
  module.exports = CancelarCartaoResponse;
}
