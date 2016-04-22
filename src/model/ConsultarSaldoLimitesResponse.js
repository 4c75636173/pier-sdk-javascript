// require files in Node.js environment

if (typeof module === 'object' && module.exports) {
  
}




//export module
if ( typeof define === "function" && define.amd ) {
  define('ConsultarSaldoLimitesResponse', ['jquery'],
    function($) {
      return ConsultarSaldoLimitesResponse;
   });
}


var ConsultarSaldoLimitesResponse = function ConsultarSaldoLimitesResponse() { 
  var self = this;
  
  /**
   * datatype: Integer
   **/
  self.codigoRetorno = null;
  
  /**
   * datatype: String
   **/
  self.dataVencimento = null;
  
  /**
   * datatype: String
   **/
  self.descricaoRetorno = null;
  
  /**
   * datatype: Number
   **/
  self.disponibCompraNac = null;
  
  /**
   * datatype: Number
   **/
  self.disponibGlobalCredito = null;
  
  /**
   * datatype: Number
   **/
  self.disponibParceladoNac = null;
  
  /**
   * datatype: Number
   **/
  self.disponibParcelasNac = null;
  
  /**
   * datatype: Number
   **/
  self.disponibSaqueNacGlobal = null;
  
  /**
   * datatype: Number
   **/
  self.limiteCompraNac = null;
  
  /**
   * datatype: Number
   **/
  self.limiteGlobalCredito = null;
  
  /**
   * datatype: Number
   **/
  self.limiteParceladoNac = null;
  
  /**
   * datatype: Number
   **/
  self.limiteParcelasNac = null;
  
  /**
   * datatype: Number
   **/
  self.limiteSaqueNacGlobal = null;
  
  /**
   * datatype: Number
   **/
  self.saldoAtualFinal = null;
  
  /**
   * datatype: Number
   **/
  self.saldoDevedor = null;
  
  /**
   * datatype: Number
   **/
  self.saldoFuturo = null;
  
  
  self.constructFromObject = function(data) {
    if (!data) {
      return;
    }
    
    self.codigoRetorno = data.codigoRetorno;
    
    self.dataVencimento = data.dataVencimento;
    
    self.descricaoRetorno = data.descricaoRetorno;
    
    self.disponibCompraNac = data.disponibCompraNac;
    
    self.disponibGlobalCredito = data.disponibGlobalCredito;
    
    self.disponibParceladoNac = data.disponibParceladoNac;
    
    self.disponibParcelasNac = data.disponibParcelasNac;
    
    self.disponibSaqueNacGlobal = data.disponibSaqueNacGlobal;
    
    self.limiteCompraNac = data.limiteCompraNac;
    
    self.limiteGlobalCredito = data.limiteGlobalCredito;
    
    self.limiteParceladoNac = data.limiteParceladoNac;
    
    self.limiteParcelasNac = data.limiteParcelasNac;
    
    self.limiteSaqueNacGlobal = data.limiteSaqueNacGlobal;
    
    self.saldoAtualFinal = data.saldoAtualFinal;
    
    self.saldoDevedor = data.saldoDevedor;
    
    self.saldoFuturo = data.saldoFuturo;
    
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
   * @return {Number}
   **/
  self.getDisponibCompraNac = function() {
    return self.disponibCompraNac;
  }

  /**
   * @param {Number} disponibCompraNac
   **/
  self.setDisponibCompraNac = function (disponibCompraNac) {
    self.disponibCompraNac = disponibCompraNac;
  }
  
  /**
   * @return {Number}
   **/
  self.getDisponibGlobalCredito = function() {
    return self.disponibGlobalCredito;
  }

  /**
   * @param {Number} disponibGlobalCredito
   **/
  self.setDisponibGlobalCredito = function (disponibGlobalCredito) {
    self.disponibGlobalCredito = disponibGlobalCredito;
  }
  
  /**
   * @return {Number}
   **/
  self.getDisponibParceladoNac = function() {
    return self.disponibParceladoNac;
  }

  /**
   * @param {Number} disponibParceladoNac
   **/
  self.setDisponibParceladoNac = function (disponibParceladoNac) {
    self.disponibParceladoNac = disponibParceladoNac;
  }
  
  /**
   * @return {Number}
   **/
  self.getDisponibParcelasNac = function() {
    return self.disponibParcelasNac;
  }

  /**
   * @param {Number} disponibParcelasNac
   **/
  self.setDisponibParcelasNac = function (disponibParcelasNac) {
    self.disponibParcelasNac = disponibParcelasNac;
  }
  
  /**
   * @return {Number}
   **/
  self.getDisponibSaqueNacGlobal = function() {
    return self.disponibSaqueNacGlobal;
  }

  /**
   * @param {Number} disponibSaqueNacGlobal
   **/
  self.setDisponibSaqueNacGlobal = function (disponibSaqueNacGlobal) {
    self.disponibSaqueNacGlobal = disponibSaqueNacGlobal;
  }
  
  /**
   * @return {Number}
   **/
  self.getLimiteCompraNac = function() {
    return self.limiteCompraNac;
  }

  /**
   * @param {Number} limiteCompraNac
   **/
  self.setLimiteCompraNac = function (limiteCompraNac) {
    self.limiteCompraNac = limiteCompraNac;
  }
  
  /**
   * @return {Number}
   **/
  self.getLimiteGlobalCredito = function() {
    return self.limiteGlobalCredito;
  }

  /**
   * @param {Number} limiteGlobalCredito
   **/
  self.setLimiteGlobalCredito = function (limiteGlobalCredito) {
    self.limiteGlobalCredito = limiteGlobalCredito;
  }
  
  /**
   * @return {Number}
   **/
  self.getLimiteParceladoNac = function() {
    return self.limiteParceladoNac;
  }

  /**
   * @param {Number} limiteParceladoNac
   **/
  self.setLimiteParceladoNac = function (limiteParceladoNac) {
    self.limiteParceladoNac = limiteParceladoNac;
  }
  
  /**
   * @return {Number}
   **/
  self.getLimiteParcelasNac = function() {
    return self.limiteParcelasNac;
  }

  /**
   * @param {Number} limiteParcelasNac
   **/
  self.setLimiteParcelasNac = function (limiteParcelasNac) {
    self.limiteParcelasNac = limiteParcelasNac;
  }
  
  /**
   * @return {Number}
   **/
  self.getLimiteSaqueNacGlobal = function() {
    return self.limiteSaqueNacGlobal;
  }

  /**
   * @param {Number} limiteSaqueNacGlobal
   **/
  self.setLimiteSaqueNacGlobal = function (limiteSaqueNacGlobal) {
    self.limiteSaqueNacGlobal = limiteSaqueNacGlobal;
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
  self.getSaldoDevedor = function() {
    return self.saldoDevedor;
  }

  /**
   * @param {Number} saldoDevedor
   **/
  self.setSaldoDevedor = function (saldoDevedor) {
    self.saldoDevedor = saldoDevedor;
  }
  
  /**
   * @return {Number}
   **/
  self.getSaldoFuturo = function() {
    return self.saldoFuturo;
  }

  /**
   * @param {Number} saldoFuturo
   **/
  self.setSaldoFuturo = function (saldoFuturo) {
    self.saldoFuturo = saldoFuturo;
  }
  

  self.toJson = function () {
    return JSON.stringify(self);
  }
}

if (typeof module === 'object' && module.exports) {
  module.exports = ConsultarSaldoLimitesResponse;
}
