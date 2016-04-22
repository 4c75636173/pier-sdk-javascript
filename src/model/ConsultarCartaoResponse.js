// require files in Node.js environment

if (typeof module === 'object' && module.exports) {
  
}




//export module
if ( typeof define === "function" && define.amd ) {
  define('ConsultarCartaoResponse', ['jquery'],
    function($) {
      return ConsultarCartaoResponse;
   });
}


var ConsultarCartaoResponse = function ConsultarCartaoResponse() { 
  var self = this;
  
  /**
   * datatype: Integer
   **/
  self.codigoRetorno = null;
  
  /**
   * datatype: String
   **/
  self.cvv2 = null;
  
  /**
   * datatype: String
   **/
  self.dataValidade = null;
  
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
  
  /**
   * datatype: String
   **/
  self.nomePortador = null;
  
  /**
   * datatype: String
   **/
  self.numCartao = null;
  
  /**
   * datatype: Number
   **/
  self.saldoDisponivel = null;
  
  /**
   * datatype: Integer
   **/
  self.statusCartao = null;
  
  /**
   * datatype: Integer
   **/
  self.statusConta = null;
  
  
  self.constructFromObject = function(data) {
    if (!data) {
      return;
    }
    
    self.codigoRetorno = data.codigoRetorno;
    
    self.cvv2 = data.cvv2;
    
    self.dataValidade = data.dataValidade;
    
    self.descricaoRetorno = data.descricaoRetorno;
    
    self.idCartao = data.idCartao;
    
    self.idConta = data.idConta;
    
    self.nomePortador = data.nomePortador;
    
    self.numCartao = data.numCartao;
    
    self.saldoDisponivel = data.saldoDisponivel;
    
    self.statusCartao = data.statusCartao;
    
    self.statusConta = data.statusConta;
    
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
  self.getCvv2 = function() {
    return self.cvv2;
  }

  /**
   * @param {String} cvv2
   **/
  self.setCvv2 = function (cvv2) {
    self.cvv2 = cvv2;
  }
  
  /**
   * @return {String}
   **/
  self.getDataValidade = function() {
    return self.dataValidade;
  }

  /**
   * @param {String} dataValidade
   **/
  self.setDataValidade = function (dataValidade) {
    self.dataValidade = dataValidade;
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
  
  /**
   * @return {String}
   **/
  self.getNomePortador = function() {
    return self.nomePortador;
  }

  /**
   * @param {String} nomePortador
   **/
  self.setNomePortador = function (nomePortador) {
    self.nomePortador = nomePortador;
  }
  
  /**
   * @return {String}
   **/
  self.getNumCartao = function() {
    return self.numCartao;
  }

  /**
   * @param {String} numCartao
   **/
  self.setNumCartao = function (numCartao) {
    self.numCartao = numCartao;
  }
  
  /**
   * @return {Number}
   **/
  self.getSaldoDisponivel = function() {
    return self.saldoDisponivel;
  }

  /**
   * @param {Number} saldoDisponivel
   **/
  self.setSaldoDisponivel = function (saldoDisponivel) {
    self.saldoDisponivel = saldoDisponivel;
  }
  
  /**
   * @return {Integer}
   **/
  self.getStatusCartao = function() {
    return self.statusCartao;
  }

  /**
   * @param {Integer} statusCartao
   **/
  self.setStatusCartao = function (statusCartao) {
    self.statusCartao = statusCartao;
  }
  
  /**
   * @return {Integer}
   **/
  self.getStatusConta = function() {
    return self.statusConta;
  }

  /**
   * @param {Integer} statusConta
   **/
  self.setStatusConta = function (statusConta) {
    self.statusConta = statusConta;
  }
  

  self.toJson = function () {
    return JSON.stringify(self);
  }
}

if (typeof module === 'object' && module.exports) {
  module.exports = ConsultarCartaoResponse;
}
