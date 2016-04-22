// require files in Node.js environment

if (typeof module === 'object' && module.exports) {
  
}




//export module
if ( typeof define === "function" && define.amd ) {
  define('ExtratoResponse', ['jquery'],
    function($) {
      return ExtratoResponse;
   });
}


var ExtratoResponse = function ExtratoResponse() { 
  var self = this;
  
  /**
   * datatype: String
   **/
  self.cartao = null;
  
  /**
   * datatype: String
   **/
  self.chip = null;
  
  /**
   * datatype: String
   **/
  self.cidadeUFPais = null;
  
  /**
   * datatype: String
   **/
  self.codigoAutorizacao = null;
  
  /**
   * datatype: String
   **/
  self.codigoMoeda = null;
  
  /**
   * datatype: String
   **/
  self.codigoMoedaDestino = null;
  
  /**
   * datatype: Number
   **/
  self.cotacaoDolar = null;
  
  /**
   * datatype: Number
   **/
  self.credito = null;
  
  /**
   * datatype: String
   **/
  self.dataCompra = null;
  
  /**
   * datatype: Date
   **/
  self.dataCotacaoDolar = null;
  
  /**
   * datatype: String
   **/
  self.dataEntradaCompra = null;
  
  /**
   * datatype: String
   **/
  self.dataTransacaoUTC = null;
  
  /**
   * datatype: Number
   **/
  self.debito = null;
  
  /**
   * datatype: String
   **/
  self.descricaoModoEntrada = null;
  
  /**
   * datatype: String
   **/
  self.descricaoTransacao = null;
  
  /**
   * datatype: Number
   **/
  self.encargosFinanceiros = null;
  
  /**
   * datatype: String
   **/
  self.historico = null;
  
  /**
   * datatype: Integer
   **/
  self.idEventoExterno = null;
  
  /**
   * datatype: Integer
   **/
  self.idTipoTransacao = null;
  
  /**
   * datatype: Integer
   **/
  self.idTransacao = null;
  
  /**
   * datatype: Integer
   **/
  self.mcc = null;
  
  /**
   * datatype: String
   **/
  self.nomeEstabVisa = null;
  
  /**
   * datatype: String
   **/
  self.nomePlastico = null;
  
  /**
   * datatype: Integer
   **/
  self.numeroEstabelecimento = null;
  
  /**
   * datatype: String
   **/
  self.origem = null;
  
  /**
   * datatype: Number
   **/
  self.taxaEmbarque = null;
  
  /**
   * datatype: String
   **/
  self.tipoEvento = null;
  
  /**
   * datatype: Number
   **/
  self.valorDolar = null;
  
  
  self.constructFromObject = function(data) {
    if (!data) {
      return;
    }
    
    self.cartao = data.cartao;
    
    self.chip = data.chip;
    
    self.cidadeUFPais = data.cidadeUFPais;
    
    self.codigoAutorizacao = data.codigoAutorizacao;
    
    self.codigoMoeda = data.codigoMoeda;
    
    self.codigoMoedaDestino = data.codigoMoedaDestino;
    
    self.cotacaoDolar = data.cotacaoDolar;
    
    self.credito = data.credito;
    
    self.dataCompra = data.dataCompra;
    
    self.dataCotacaoDolar = data.dataCotacaoDolar;
    
    self.dataEntradaCompra = data.dataEntradaCompra;
    
    self.dataTransacaoUTC = data.dataTransacaoUTC;
    
    self.debito = data.debito;
    
    self.descricaoModoEntrada = data.descricaoModoEntrada;
    
    self.descricaoTransacao = data.descricaoTransacao;
    
    self.encargosFinanceiros = data.encargosFinanceiros;
    
    self.historico = data.historico;
    
    self.idEventoExterno = data.idEventoExterno;
    
    self.idTipoTransacao = data.idTipoTransacao;
    
    self.idTransacao = data.idTransacao;
    
    self.mcc = data.mcc;
    
    self.nomeEstabVisa = data.nomeEstabVisa;
    
    self.nomePlastico = data.nomePlastico;
    
    self.numeroEstabelecimento = data.numeroEstabelecimento;
    
    self.origem = data.origem;
    
    self.taxaEmbarque = data.taxaEmbarque;
    
    self.tipoEvento = data.tipoEvento;
    
    self.valorDolar = data.valorDolar;
    
  }

  
  /**
   * @return {String}
   **/
  self.getCartao = function() {
    return self.cartao;
  }

  /**
   * @param {String} cartao
   **/
  self.setCartao = function (cartao) {
    self.cartao = cartao;
  }
  
  /**
   * @return {String}
   **/
  self.getChip = function() {
    return self.chip;
  }

  /**
   * @param {String} chip
   **/
  self.setChip = function (chip) {
    self.chip = chip;
  }
  
  /**
   * @return {String}
   **/
  self.getCidadeUFPais = function() {
    return self.cidadeUFPais;
  }

  /**
   * @param {String} cidadeUFPais
   **/
  self.setCidadeUFPais = function (cidadeUFPais) {
    self.cidadeUFPais = cidadeUFPais;
  }
  
  /**
   * @return {String}
   **/
  self.getCodigoAutorizacao = function() {
    return self.codigoAutorizacao;
  }

  /**
   * @param {String} codigoAutorizacao
   **/
  self.setCodigoAutorizacao = function (codigoAutorizacao) {
    self.codigoAutorizacao = codigoAutorizacao;
  }
  
  /**
   * @return {String}
   **/
  self.getCodigoMoeda = function() {
    return self.codigoMoeda;
  }

  /**
   * @param {String} codigoMoeda
   **/
  self.setCodigoMoeda = function (codigoMoeda) {
    self.codigoMoeda = codigoMoeda;
  }
  
  /**
   * @return {String}
   **/
  self.getCodigoMoedaDestino = function() {
    return self.codigoMoedaDestino;
  }

  /**
   * @param {String} codigoMoedaDestino
   **/
  self.setCodigoMoedaDestino = function (codigoMoedaDestino) {
    self.codigoMoedaDestino = codigoMoedaDestino;
  }
  
  /**
   * @return {Number}
   **/
  self.getCotacaoDolar = function() {
    return self.cotacaoDolar;
  }

  /**
   * @param {Number} cotacaoDolar
   **/
  self.setCotacaoDolar = function (cotacaoDolar) {
    self.cotacaoDolar = cotacaoDolar;
  }
  
  /**
   * @return {Number}
   **/
  self.getCredito = function() {
    return self.credito;
  }

  /**
   * @param {Number} credito
   **/
  self.setCredito = function (credito) {
    self.credito = credito;
  }
  
  /**
   * @return {String}
   **/
  self.getDataCompra = function() {
    return self.dataCompra;
  }

  /**
   * @param {String} dataCompra
   **/
  self.setDataCompra = function (dataCompra) {
    self.dataCompra = dataCompra;
  }
  
  /**
   * @return {Date}
   **/
  self.getDataCotacaoDolar = function() {
    return self.dataCotacaoDolar;
  }

  /**
   * @param {Date} dataCotacaoDolar
   **/
  self.setDataCotacaoDolar = function (dataCotacaoDolar) {
    self.dataCotacaoDolar = dataCotacaoDolar;
  }
  
  /**
   * @return {String}
   **/
  self.getDataEntradaCompra = function() {
    return self.dataEntradaCompra;
  }

  /**
   * @param {String} dataEntradaCompra
   **/
  self.setDataEntradaCompra = function (dataEntradaCompra) {
    self.dataEntradaCompra = dataEntradaCompra;
  }
  
  /**
   * @return {String}
   **/
  self.getDataTransacaoUTC = function() {
    return self.dataTransacaoUTC;
  }

  /**
   * @param {String} dataTransacaoUTC
   **/
  self.setDataTransacaoUTC = function (dataTransacaoUTC) {
    self.dataTransacaoUTC = dataTransacaoUTC;
  }
  
  /**
   * @return {Number}
   **/
  self.getDebito = function() {
    return self.debito;
  }

  /**
   * @param {Number} debito
   **/
  self.setDebito = function (debito) {
    self.debito = debito;
  }
  
  /**
   * @return {String}
   **/
  self.getDescricaoModoEntrada = function() {
    return self.descricaoModoEntrada;
  }

  /**
   * @param {String} descricaoModoEntrada
   **/
  self.setDescricaoModoEntrada = function (descricaoModoEntrada) {
    self.descricaoModoEntrada = descricaoModoEntrada;
  }
  
  /**
   * @return {String}
   **/
  self.getDescricaoTransacao = function() {
    return self.descricaoTransacao;
  }

  /**
   * @param {String} descricaoTransacao
   **/
  self.setDescricaoTransacao = function (descricaoTransacao) {
    self.descricaoTransacao = descricaoTransacao;
  }
  
  /**
   * @return {Number}
   **/
  self.getEncargosFinanceiros = function() {
    return self.encargosFinanceiros;
  }

  /**
   * @param {Number} encargosFinanceiros
   **/
  self.setEncargosFinanceiros = function (encargosFinanceiros) {
    self.encargosFinanceiros = encargosFinanceiros;
  }
  
  /**
   * @return {String}
   **/
  self.getHistorico = function() {
    return self.historico;
  }

  /**
   * @param {String} historico
   **/
  self.setHistorico = function (historico) {
    self.historico = historico;
  }
  
  /**
   * @return {Integer}
   **/
  self.getIdEventoExterno = function() {
    return self.idEventoExterno;
  }

  /**
   * @param {Integer} idEventoExterno
   **/
  self.setIdEventoExterno = function (idEventoExterno) {
    self.idEventoExterno = idEventoExterno;
  }
  
  /**
   * @return {Integer}
   **/
  self.getIdTipoTransacao = function() {
    return self.idTipoTransacao;
  }

  /**
   * @param {Integer} idTipoTransacao
   **/
  self.setIdTipoTransacao = function (idTipoTransacao) {
    self.idTipoTransacao = idTipoTransacao;
  }
  
  /**
   * @return {Integer}
   **/
  self.getIdTransacao = function() {
    return self.idTransacao;
  }

  /**
   * @param {Integer} idTransacao
   **/
  self.setIdTransacao = function (idTransacao) {
    self.idTransacao = idTransacao;
  }
  
  /**
   * @return {Integer}
   **/
  self.getMcc = function() {
    return self.mcc;
  }

  /**
   * @param {Integer} mcc
   **/
  self.setMcc = function (mcc) {
    self.mcc = mcc;
  }
  
  /**
   * @return {String}
   **/
  self.getNomeEstabVisa = function() {
    return self.nomeEstabVisa;
  }

  /**
   * @param {String} nomeEstabVisa
   **/
  self.setNomeEstabVisa = function (nomeEstabVisa) {
    self.nomeEstabVisa = nomeEstabVisa;
  }
  
  /**
   * @return {String}
   **/
  self.getNomePlastico = function() {
    return self.nomePlastico;
  }

  /**
   * @param {String} nomePlastico
   **/
  self.setNomePlastico = function (nomePlastico) {
    self.nomePlastico = nomePlastico;
  }
  
  /**
   * @return {Integer}
   **/
  self.getNumeroEstabelecimento = function() {
    return self.numeroEstabelecimento;
  }

  /**
   * @param {Integer} numeroEstabelecimento
   **/
  self.setNumeroEstabelecimento = function (numeroEstabelecimento) {
    self.numeroEstabelecimento = numeroEstabelecimento;
  }
  
  /**
   * @return {String}
   **/
  self.getOrigem = function() {
    return self.origem;
  }

  /**
   * @param {String} origem
   **/
  self.setOrigem = function (origem) {
    self.origem = origem;
  }
  
  /**
   * @return {Number}
   **/
  self.getTaxaEmbarque = function() {
    return self.taxaEmbarque;
  }

  /**
   * @param {Number} taxaEmbarque
   **/
  self.setTaxaEmbarque = function (taxaEmbarque) {
    self.taxaEmbarque = taxaEmbarque;
  }
  
  /**
   * @return {String}
   **/
  self.getTipoEvento = function() {
    return self.tipoEvento;
  }

  /**
   * @param {String} tipoEvento
   **/
  self.setTipoEvento = function (tipoEvento) {
    self.tipoEvento = tipoEvento;
  }
  
  /**
   * @return {Number}
   **/
  self.getValorDolar = function() {
    return self.valorDolar;
  }

  /**
   * @param {Number} valorDolar
   **/
  self.setValorDolar = function (valorDolar) {
    self.valorDolar = valorDolar;
  }
  

  self.toJson = function () {
    return JSON.stringify(self);
  }
}

if (typeof module === 'object' && module.exports) {
  module.exports = ExtratoResponse;
}
