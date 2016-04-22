// require files in Node.js environment

if (typeof module === 'object' && module.exports) {
  
}




//export module
if ( typeof define === "function" && define.amd ) {
  define('SaldoLimiteResponse', ['jquery'],
    function($) {
      return SaldoLimiteResponse;
   });
}


var SaldoLimiteResponse = function SaldoLimiteResponse() { 
  var self = this;
  
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
   * datatype: Boolean
   **/
  self.flagAntecipacao = null;
  
  /**
   * datatype: Number
   **/
  self.limiteCompraNac = null;
  
  /**
   * datatype: Number
   **/
  self.limiteCreditoConcedido = null;
  
  /**
   * datatype: Number
   **/
  self.limiteCreditoDisponivel = null;
  
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
  self.limitePontuacao = null;
  
  /**
   * datatype: Number
   **/
  self.limiteSaqueNacGlobal = null;
  
  /**
   * datatype: Integer
   **/
  self.numeroCiclo = null;
  
  /**
   * datatype: Number
   **/
  self.pontosConcedidos = null;
  
  /**
   * datatype: Number
   **/
  self.pontosRemanescentes = null;
  
  /**
   * datatype: String
   **/
  self.proximoVencimentoPadrao = null;
  
  /**
   * datatype: String
   **/
  self.proximoVencimentoReal = null;
  
  /**
   * datatype: Number
   **/
  self.saldoAtualFinal = null;
  
  /**
   * datatype: Number
   **/
  self.saldoCredor = null;
  
  /**
   * datatype: Number
   **/
  self.saldoDevedor = null;
  
  /**
   * datatype: Number
   **/
  self.saldoDevedorOneroso = null;
  
  /**
   * datatype: Number
   **/
  self.saldoDevedorTotal = null;
  
  /**
   * datatype: Number
   **/
  self.saltaExtratoAnterior = null;
  
  /**
   * datatype: Number
   **/
  self.totalDisponivelUtilizacao = null;
  
  /**
   * datatype: Number
   **/
  self.totalFuturo = null;
  
  /**
   * datatype: Number
   **/
  self.valorMinimoExtrato = null;
  
  /**
   * datatype: Number
   **/
  self.valorMinimoExtratoOriginal = null;
  
  /**
   * datatype: String
   **/
  self.vencimentoPadraoAnterior = null;
  
  /**
   * datatype: String
   **/
  self.vencimentoPosProx = null;
  
  /**
   * datatype: String
   **/
  self.vencimentoRealAnterior = null;
  
  
  self.constructFromObject = function(data) {
    if (!data) {
      return;
    }
    
    self.disponibCompraNac = data.disponibCompraNac;
    
    self.disponibGlobalCredito = data.disponibGlobalCredito;
    
    self.disponibParceladoNac = data.disponibParceladoNac;
    
    self.disponibParcelasNac = data.disponibParcelasNac;
    
    self.disponibSaqueNacGlobal = data.disponibSaqueNacGlobal;
    
    self.flagAntecipacao = data.flagAntecipacao;
    
    self.limiteCompraNac = data.limiteCompraNac;
    
    self.limiteCreditoConcedido = data.limiteCreditoConcedido;
    
    self.limiteCreditoDisponivel = data.limiteCreditoDisponivel;
    
    self.limiteGlobalCredito = data.limiteGlobalCredito;
    
    self.limiteParceladoNac = data.limiteParceladoNac;
    
    self.limiteParcelasNac = data.limiteParcelasNac;
    
    self.limitePontuacao = data.limitePontuacao;
    
    self.limiteSaqueNacGlobal = data.limiteSaqueNacGlobal;
    
    self.numeroCiclo = data.numeroCiclo;
    
    self.pontosConcedidos = data.pontosConcedidos;
    
    self.pontosRemanescentes = data.pontosRemanescentes;
    
    self.proximoVencimentoPadrao = data.proximoVencimentoPadrao;
    
    self.proximoVencimentoReal = data.proximoVencimentoReal;
    
    self.saldoAtualFinal = data.saldoAtualFinal;
    
    self.saldoCredor = data.saldoCredor;
    
    self.saldoDevedor = data.saldoDevedor;
    
    self.saldoDevedorOneroso = data.saldoDevedorOneroso;
    
    self.saldoDevedorTotal = data.saldoDevedorTotal;
    
    self.saltaExtratoAnterior = data.saltaExtratoAnterior;
    
    self.totalDisponivelUtilizacao = data.totalDisponivelUtilizacao;
    
    self.totalFuturo = data.totalFuturo;
    
    self.valorMinimoExtrato = data.valorMinimoExtrato;
    
    self.valorMinimoExtratoOriginal = data.valorMinimoExtratoOriginal;
    
    self.vencimentoPadraoAnterior = data.vencimentoPadraoAnterior;
    
    self.vencimentoPosProx = data.vencimentoPosProx;
    
    self.vencimentoRealAnterior = data.vencimentoRealAnterior;
    
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
   * @return {Boolean}
   **/
  self.getFlagAntecipacao = function() {
    return self.flagAntecipacao;
  }

  /**
   * @param {Boolean} flagAntecipacao
   **/
  self.setFlagAntecipacao = function (flagAntecipacao) {
    self.flagAntecipacao = flagAntecipacao;
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
  self.getLimiteCreditoConcedido = function() {
    return self.limiteCreditoConcedido;
  }

  /**
   * @param {Number} limiteCreditoConcedido
   **/
  self.setLimiteCreditoConcedido = function (limiteCreditoConcedido) {
    self.limiteCreditoConcedido = limiteCreditoConcedido;
  }
  
  /**
   * @return {Number}
   **/
  self.getLimiteCreditoDisponivel = function() {
    return self.limiteCreditoDisponivel;
  }

  /**
   * @param {Number} limiteCreditoDisponivel
   **/
  self.setLimiteCreditoDisponivel = function (limiteCreditoDisponivel) {
    self.limiteCreditoDisponivel = limiteCreditoDisponivel;
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
  self.getLimitePontuacao = function() {
    return self.limitePontuacao;
  }

  /**
   * @param {Number} limitePontuacao
   **/
  self.setLimitePontuacao = function (limitePontuacao) {
    self.limitePontuacao = limitePontuacao;
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
   * @return {Integer}
   **/
  self.getNumeroCiclo = function() {
    return self.numeroCiclo;
  }

  /**
   * @param {Integer} numeroCiclo
   **/
  self.setNumeroCiclo = function (numeroCiclo) {
    self.numeroCiclo = numeroCiclo;
  }
  
  /**
   * @return {Number}
   **/
  self.getPontosConcedidos = function() {
    return self.pontosConcedidos;
  }

  /**
   * @param {Number} pontosConcedidos
   **/
  self.setPontosConcedidos = function (pontosConcedidos) {
    self.pontosConcedidos = pontosConcedidos;
  }
  
  /**
   * @return {Number}
   **/
  self.getPontosRemanescentes = function() {
    return self.pontosRemanescentes;
  }

  /**
   * @param {Number} pontosRemanescentes
   **/
  self.setPontosRemanescentes = function (pontosRemanescentes) {
    self.pontosRemanescentes = pontosRemanescentes;
  }
  
  /**
   * @return {String}
   **/
  self.getProximoVencimentoPadrao = function() {
    return self.proximoVencimentoPadrao;
  }

  /**
   * @param {String} proximoVencimentoPadrao
   **/
  self.setProximoVencimentoPadrao = function (proximoVencimentoPadrao) {
    self.proximoVencimentoPadrao = proximoVencimentoPadrao;
  }
  
  /**
   * @return {String}
   **/
  self.getProximoVencimentoReal = function() {
    return self.proximoVencimentoReal;
  }

  /**
   * @param {String} proximoVencimentoReal
   **/
  self.setProximoVencimentoReal = function (proximoVencimentoReal) {
    self.proximoVencimentoReal = proximoVencimentoReal;
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
  self.getSaldoCredor = function() {
    return self.saldoCredor;
  }

  /**
   * @param {Number} saldoCredor
   **/
  self.setSaldoCredor = function (saldoCredor) {
    self.saldoCredor = saldoCredor;
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
  self.getSaldoDevedorOneroso = function() {
    return self.saldoDevedorOneroso;
  }

  /**
   * @param {Number} saldoDevedorOneroso
   **/
  self.setSaldoDevedorOneroso = function (saldoDevedorOneroso) {
    self.saldoDevedorOneroso = saldoDevedorOneroso;
  }
  
  /**
   * @return {Number}
   **/
  self.getSaldoDevedorTotal = function() {
    return self.saldoDevedorTotal;
  }

  /**
   * @param {Number} saldoDevedorTotal
   **/
  self.setSaldoDevedorTotal = function (saldoDevedorTotal) {
    self.saldoDevedorTotal = saldoDevedorTotal;
  }
  
  /**
   * @return {Number}
   **/
  self.getSaltaExtratoAnterior = function() {
    return self.saltaExtratoAnterior;
  }

  /**
   * @param {Number} saltaExtratoAnterior
   **/
  self.setSaltaExtratoAnterior = function (saltaExtratoAnterior) {
    self.saltaExtratoAnterior = saltaExtratoAnterior;
  }
  
  /**
   * @return {Number}
   **/
  self.getTotalDisponivelUtilizacao = function() {
    return self.totalDisponivelUtilizacao;
  }

  /**
   * @param {Number} totalDisponivelUtilizacao
   **/
  self.setTotalDisponivelUtilizacao = function (totalDisponivelUtilizacao) {
    self.totalDisponivelUtilizacao = totalDisponivelUtilizacao;
  }
  
  /**
   * @return {Number}
   **/
  self.getTotalFuturo = function() {
    return self.totalFuturo;
  }

  /**
   * @param {Number} totalFuturo
   **/
  self.setTotalFuturo = function (totalFuturo) {
    self.totalFuturo = totalFuturo;
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
  
  /**
   * @return {Number}
   **/
  self.getValorMinimoExtratoOriginal = function() {
    return self.valorMinimoExtratoOriginal;
  }

  /**
   * @param {Number} valorMinimoExtratoOriginal
   **/
  self.setValorMinimoExtratoOriginal = function (valorMinimoExtratoOriginal) {
    self.valorMinimoExtratoOriginal = valorMinimoExtratoOriginal;
  }
  
  /**
   * @return {String}
   **/
  self.getVencimentoPadraoAnterior = function() {
    return self.vencimentoPadraoAnterior;
  }

  /**
   * @param {String} vencimentoPadraoAnterior
   **/
  self.setVencimentoPadraoAnterior = function (vencimentoPadraoAnterior) {
    self.vencimentoPadraoAnterior = vencimentoPadraoAnterior;
  }
  
  /**
   * @return {String}
   **/
  self.getVencimentoPosProx = function() {
    return self.vencimentoPosProx;
  }

  /**
   * @param {String} vencimentoPosProx
   **/
  self.setVencimentoPosProx = function (vencimentoPosProx) {
    self.vencimentoPosProx = vencimentoPosProx;
  }
  
  /**
   * @return {String}
   **/
  self.getVencimentoRealAnterior = function() {
    return self.vencimentoRealAnterior;
  }

  /**
   * @param {String} vencimentoRealAnterior
   **/
  self.setVencimentoRealAnterior = function (vencimentoRealAnterior) {
    self.vencimentoRealAnterior = vencimentoRealAnterior;
  }
  

  self.toJson = function () {
    return JSON.stringify(self);
  }
}

if (typeof module === 'object' && module.exports) {
  module.exports = SaldoLimiteResponse;
}
