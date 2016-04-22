// require files in Node.js environment
var ExtratoResponse;
if (typeof module === 'object' && module.exports) {
  
  ExtratoResponse = require('./ExtratoResponse.js');
}




//export module
if ( typeof define === "function" && define.amd ) {
  define('ConsultarExtratoContaResponse', ['jquery', 'Array'],
    function($, Array) {
      return ConsultarExtratoContaResponse;
   });
}


var ConsultarExtratoContaResponse = function ConsultarExtratoContaResponse() { 
  var self = this;
  
  /**
   * datatype: Integer
   **/
  self.codigoRetorno = null;
  
  /**
   * datatype: Number
   **/
  self.comprasNacionais = null;
  
  /**
   * datatype: String
   **/
  self.cpf = null;
  
  /**
   * datatype: Number
   **/
  self.creditosNacionais = null;
  
  /**
   * datatype: String
   **/
  self.dataVencimento = null;
  
  /**
   * datatype: Number
   **/
  self.debitosNacionais = null;
  
  /**
   * datatype: String
   **/
  self.descricaoRetorno = null;
  
  /**
   * datatype: Array
   **/
  self.extrato = [];
  
  /**
   * datatype: Integer
   **/
  self.idCartao = null;
  
  /**
   * datatype: Integer
   **/
  self.idConta = null;
  
  /**
   * datatype: Number
   **/
  self.multa = null;
  
  /**
   * datatype: Number
   **/
  self.pagamentos = null;
  
  /**
   * datatype: Number
   **/
  self.saldoAtualFinal = null;
  
  /**
   * datatype: Number
   **/
  self.saldoExtratoAnterior = null;
  
  /**
   * datatype: Number
   **/
  self.tarifasNacionais = null;
  
  /**
   * datatype: Number
   **/
  self.valorMinimoExtrato = null;
  
  
  self.constructFromObject = function(data) {
    if (!data) {
      return;
    }
    
    self.codigoRetorno = data.codigoRetorno;
    
    self.comprasNacionais = data.comprasNacionais;
    
    self.cpf = data.cpf;
    
    self.creditosNacionais = data.creditosNacionais;
    
    self.dataVencimento = data.dataVencimento;
    
    self.debitosNacionais = data.debitosNacionais;
    
    self.descricaoRetorno = data.descricaoRetorno;
    
    self.extrato = new Array();
    
    self.idCartao = data.idCartao;
    
    self.idConta = data.idConta;
    
    self.multa = data.multa;
    
    self.pagamentos = data.pagamentos;
    
    self.saldoAtualFinal = data.saldoAtualFinal;
    
    self.saldoExtratoAnterior = data.saldoExtratoAnterior;
    
    self.tarifasNacionais = data.tarifasNacionais;
    
    self.valorMinimoExtrato = data.valorMinimoExtrato;
    
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
   * @return {Number}
   **/
  self.getComprasNacionais = function() {
    return self.comprasNacionais;
  }

  /**
   * @param {Number} comprasNacionais
   **/
  self.setComprasNacionais = function (comprasNacionais) {
    self.comprasNacionais = comprasNacionais;
  }
  
  /**
   * @return {String}
   **/
  self.getCpf = function() {
    return self.cpf;
  }

  /**
   * @param {String} cpf
   **/
  self.setCpf = function (cpf) {
    self.cpf = cpf;
  }
  
  /**
   * @return {Number}
   **/
  self.getCreditosNacionais = function() {
    return self.creditosNacionais;
  }

  /**
   * @param {Number} creditosNacionais
   **/
  self.setCreditosNacionais = function (creditosNacionais) {
    self.creditosNacionais = creditosNacionais;
  }
  
  /**
   * @return {String}
   **/
  self.getDataVencimento = function() {
    return self.dataVencimento;
  }

  /**
   * @param {String} dataVencimento
   **/
  self.setDataVencimento = function (dataVencimento) {
    self.dataVencimento = dataVencimento;
  }
  
  /**
   * @return {Number}
   **/
  self.getDebitosNacionais = function() {
    return self.debitosNacionais;
  }

  /**
   * @param {Number} debitosNacionais
   **/
  self.setDebitosNacionais = function (debitosNacionais) {
    self.debitosNacionais = debitosNacionais;
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
   * @return {Array}
   **/
  self.getExtrato = function() {
    return self.extrato;
  }

  /**
   * @param {Array} extrato
   **/
  self.setExtrato = function (extrato) {
    self.extrato = extrato;
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
   * @return {Number}
   **/
  self.getMulta = function() {
    return self.multa;
  }

  /**
   * @param {Number} multa
   **/
  self.setMulta = function (multa) {
    self.multa = multa;
  }
  
  /**
   * @return {Number}
   **/
  self.getPagamentos = function() {
    return self.pagamentos;
  }

  /**
   * @param {Number} pagamentos
   **/
  self.setPagamentos = function (pagamentos) {
    self.pagamentos = pagamentos;
  }
  
  /**
   * @return {Number}
   **/
  self.getSaldoAtualFinal = function() {
    return self.saldoAtualFinal;
  }

  /**
   * @param {Number} saldoAtualFinal
   **/
  self.setSaldoAtualFinal = function (saldoAtualFinal) {
    self.saldoAtualFinal = saldoAtualFinal;
  }
  
  /**
   * @return {Number}
   **/
  self.getSaldoExtratoAnterior = function() {
    return self.saldoExtratoAnterior;
  }

  /**
   * @param {Number} saldoExtratoAnterior
   **/
  self.setSaldoExtratoAnterior = function (saldoExtratoAnterior) {
    self.saldoExtratoAnterior = saldoExtratoAnterior;
  }
  
  /**
   * @return {Number}
   **/
  self.getTarifasNacionais = function() {
    return self.tarifasNacionais;
  }

  /**
   * @param {Number} tarifasNacionais
   **/
  self.setTarifasNacionais = function (tarifasNacionais) {
    self.tarifasNacionais = tarifasNacionais;
  }
  
  /**
   * @return {Number}
   **/
  self.getValorMinimoExtrato = function() {
    return self.valorMinimoExtrato;
  }

  /**
   * @param {Number} valorMinimoExtrato
   **/
  self.setValorMinimoExtrato = function (valorMinimoExtrato) {
    self.valorMinimoExtrato = valorMinimoExtrato;
  }
  

  self.toJson = function () {
    return JSON.stringify(self);
  }
}

if (typeof module === 'object' && module.exports) {
  module.exports = ConsultarExtratoContaResponse;
}
