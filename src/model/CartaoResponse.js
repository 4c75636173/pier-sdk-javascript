// require files in Node.js environment

if (typeof module === 'object' && module.exports) {
  
}




//export module
if ( typeof define === "function" && define.amd ) {
  define('CartaoResponse', ['jquery'],
    function($) {
      return CartaoResponse;
   });
}


var CartaoResponse = function CartaoResponse() { 
  var self = this;
  
  /**
   * datatype: String
   **/
  self.dataValidade = null;
  
  /**
   * datatype: String
   **/
  self.descricaoEstagio = null;
  
  /**
   * datatype: String
   **/
  self.descricaoStatus = null;
  
  /**
   * datatype: Integer
   **/
  self.estagio = null;
  
  /**
   * datatype: Boolean
   **/
  self.flagCancelamento = null;
  
  /**
   * datatype: Integer
   **/
  self.idCartao = null;
  
  /**
   * datatype: String
   **/
  self.numeroCartao = null;
  
  /**
   * datatype: String
   **/
  self.portador = null;
  
  /**
   * datatype: Integer
   **/
  self.portadorId = null;
  
  /**
   * datatype: Integer
   **/
  self.status = null;
  
  /**
   * datatype: Date
   **/
  self.statusData = null;
  
  
  self.constructFromObject = function(data) {
    if (!data) {
      return;
    }
    
    self.dataValidade = data.dataValidade;
    
    self.descricaoEstagio = data.descricaoEstagio;
    
    self.descricaoStatus = data.descricaoStatus;
    
    self.estagio = data.estagio;
    
    self.flagCancelamento = data.flagCancelamento;
    
    self.idCartao = data.idCartao;
    
    self.numeroCartao = data.numeroCartao;
    
    self.portador = data.portador;
    
    self.portadorId = data.portadorId;
    
    self.status = data.status;
    
    self.statusData = data.statusData;
    
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
  self.getDescricaoEstagio = function() {
    return self.descricaoEstagio;
  }

  /**
   * @param {String} descricaoEstagio
   **/
  self.setDescricaoEstagio = function (descricaoEstagio) {
    self.descricaoEstagio = descricaoEstagio;
  }
  
  /**
   * @return {String}
   **/
  self.getDescricaoStatus = function() {
    return self.descricaoStatus;
  }

  /**
   * @param {String} descricaoStatus
   **/
  self.setDescricaoStatus = function (descricaoStatus) {
    self.descricaoStatus = descricaoStatus;
  }
  
  /**
   * @return {Integer}
   **/
  self.getEstagio = function() {
    return self.estagio;
  }

  /**
   * @param {Integer} estagio
   **/
  self.setEstagio = function (estagio) {
    self.estagio = estagio;
  }
  
  /**
   * @return {Boolean}
   **/
  self.getFlagCancelamento = function() {
    return self.flagCancelamento;
  }

  /**
   * @param {Boolean} flagCancelamento
   **/
  self.setFlagCancelamento = function (flagCancelamento) {
    self.flagCancelamento = flagCancelamento;
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
   * @return {String}
   **/
  self.getNumeroCartao = function() {
    return self.numeroCartao;
  }

  /**
   * @param {String} numeroCartao
   **/
  self.setNumeroCartao = function (numeroCartao) {
    self.numeroCartao = numeroCartao;
  }
  
  /**
   * @return {String}
   **/
  self.getPortador = function() {
    return self.portador;
  }

  /**
   * @param {String} portador
   **/
  self.setPortador = function (portador) {
    self.portador = portador;
  }
  
  /**
   * @return {Integer}
   **/
  self.getPortadorId = function() {
    return self.portadorId;
  }

  /**
   * @param {Integer} portadorId
   **/
  self.setPortadorId = function (portadorId) {
    self.portadorId = portadorId;
  }
  
  /**
   * @return {Integer}
   **/
  self.getStatus = function() {
    return self.status;
  }

  /**
   * @param {Integer} status
   **/
  self.setStatus = function (status) {
    self.status = status;
  }
  
  /**
   * @return {Date}
   **/
  self.getStatusData = function() {
    return self.statusData;
  }

  /**
   * @param {Date} statusData
   **/
  self.setStatusData = function (statusData) {
    self.statusData = statusData;
  }
  

  self.toJson = function () {
    return JSON.stringify(self);
  }
}

if (typeof module === 'object' && module.exports) {
  module.exports = CartaoResponse;
}
