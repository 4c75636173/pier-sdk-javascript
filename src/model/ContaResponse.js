// require files in Node.js environment
var CartaoResponse;var PessoaFisicaResponse;var SaldoLimiteResponse;
if (typeof module === 'object' && module.exports) {
  
  CartaoResponse = require('./CartaoResponse.js');
  PessoaFisicaResponse = require('./PessoaFisicaResponse.js');
  SaldoLimiteResponse = require('./SaldoLimiteResponse.js');
}




//export module
if ( typeof define === "function" && define.amd ) {
  define('ContaResponse', ['jquery', 'CartaoResponse', 'PessoaFisicaResponse', 'SaldoLimiteResponse'],
    function($, CartaoResponse, PessoaFisicaResponse, SaldoLimiteResponse) {
      return ContaResponse;
   });
}


var ContaResponse = function ContaResponse() { 
  var self = this;
  
  /**
   * datatype: Integer
   **/
  self.bin = null;
  
  /**
   * datatype: CartaoResponse
   **/
  self.cartao = new CartaoResponse();
  
  /**
   * datatype: String
   **/
  self.dataCadastramento = null;
  
  /**
   * datatype: String
   **/
  self.dataUltimoPagamento = null;
  
  /**
   * datatype: String
   **/
  self.dataVencCobranca = null;
  
  /**
   * datatype: String
   **/
  self.dddcelularSMS = null;
  
  /**
   * datatype: String
   **/
  self.descricaoStatus = null;
  
  /**
   * datatype: Integer
   **/
  self.diasEmAtraso = null;
  
  /**
   * datatype: String
   **/
  self.emissor = null;
  
  /**
   * datatype: Boolean
   **/
  self.flagCancelamento = null;
  
  /**
   * datatype: String
   **/
  self.formaEnvioFatura = null;
  
  /**
   * datatype: Integer
   **/
  self.idBandeira = null;
  
  /**
   * datatype: Integer
   **/
  self.idConta = null;
  
  /**
   * datatype: Integer
   **/
  self.idEmissor = null;
  
  /**
   * datatype: Integer
   **/
  self.idEndereco = null;
  
  /**
   * datatype: Integer
   **/
  self.idFantasiaBasica = null;
  
  /**
   * datatype: Integer
   **/
  self.idOrigemComercial = null;
  
  /**
   * datatype: Integer
   **/
  self.idProduto = null;
  
  /**
   * datatype: Integer
   **/
  self.idProposta = null;
  
  /**
   * datatype: Integer
   **/
  self.melhorDia = null;
  
  /**
   * datatype: String
   **/
  self.nomeCredor = null;
  
  /**
   * datatype: String
   **/
  self.nomeProduto = null;
  
  /**
   * datatype: String
   **/
  self.numCelularSMS = null;
  
  /**
   * datatype: Number
   **/
  self.pagamentos = null;
  
  /**
   * datatype: Boolean
   **/
  self.permiteRefinanciamento = null;
  
  /**
   * datatype: PessoaFisicaResponse
   **/
  self.pessoaFisica = new PessoaFisicaResponse();
  
  /**
   * datatype: Integer
   **/
  self.quantidadePagamentos = null;
  
  /**
   * datatype: SaldoLimiteResponse
   **/
  self.saldoLimite = new SaldoLimiteResponse();
  
  /**
   * datatype: Integer
   **/
  self.status = null;
  
  /**
   * datatype: Date
   **/
  self.statusData = null;
  
  /**
   * datatype: String
   **/
  self.taxaRefinanciamento = null;
  
  /**
   * datatype: String
   **/
  self.vcto = null;
  
  /**
   * datatype: Integer
   **/
  self.vencimento1 = null;
  
  /**
   * datatype: Boolean
   **/
  self.vinculoOrigemUsuario = null;
  
  
  self.constructFromObject = function(data) {
    if (!data) {
      return;
    }
    
    self.bin = data.bin;
    
    self.cartao.constructFromObject(data.cartao);
    
    self.dataCadastramento = data.dataCadastramento;
    
    self.dataUltimoPagamento = data.dataUltimoPagamento;
    
    self.dataVencCobranca = data.dataVencCobranca;
    
    self.dddcelularSMS = data.dddcelularSMS;
    
    self.descricaoStatus = data.descricaoStatus;
    
    self.diasEmAtraso = data.diasEmAtraso;
    
    self.emissor = data.emissor;
    
    self.flagCancelamento = data.flagCancelamento;
    
    self.formaEnvioFatura = data.formaEnvioFatura;
    
    self.idBandeira = data.idBandeira;
    
    self.idConta = data.idConta;
    
    self.idEmissor = data.idEmissor;
    
    self.idEndereco = data.idEndereco;
    
    self.idFantasiaBasica = data.idFantasiaBasica;
    
    self.idOrigemComercial = data.idOrigemComercial;
    
    self.idProduto = data.idProduto;
    
    self.idProposta = data.idProposta;
    
    self.melhorDia = data.melhorDia;
    
    self.nomeCredor = data.nomeCredor;
    
    self.nomeProduto = data.nomeProduto;
    
    self.numCelularSMS = data.numCelularSMS;
    
    self.pagamentos = data.pagamentos;
    
    self.permiteRefinanciamento = data.permiteRefinanciamento;
    
    self.pessoaFisica.constructFromObject(data.pessoaFisica);
    
    self.quantidadePagamentos = data.quantidadePagamentos;
    
    self.saldoLimite.constructFromObject(data.saldoLimite);
    
    self.status = data.status;
    
    self.statusData = data.statusData;
    
    self.taxaRefinanciamento = data.taxaRefinanciamento;
    
    self.vcto = data.vcto;
    
    self.vencimento1 = data.vencimento1;
    
    self.vinculoOrigemUsuario = data.vinculoOrigemUsuario;
    
  }

  
  /**
   * @return {Integer}
   **/
  self.getBin = function() {
    return self.bin;
  }

  /**
   * @param {Integer} bin
   **/
  self.setBin = function (bin) {
    self.bin = bin;
  }
  
  /**
   * @return {CartaoResponse}
   **/
  self.getCartao = function() {
    return self.cartao;
  }

  /**
   * @param {CartaoResponse} cartao
   **/
  self.setCartao = function (cartao) {
    self.cartao = cartao;
  }
  
  /**
   * @return {String}
   **/
  self.getDataCadastramento = function() {
    return self.dataCadastramento;
  }

  /**
   * @param {String} dataCadastramento
   **/
  self.setDataCadastramento = function (dataCadastramento) {
    self.dataCadastramento = dataCadastramento;
  }
  
  /**
   * @return {String}
   **/
  self.getDataUltimoPagamento = function() {
    return self.dataUltimoPagamento;
  }

  /**
   * @param {String} dataUltimoPagamento
   **/
  self.setDataUltimoPagamento = function (dataUltimoPagamento) {
    self.dataUltimoPagamento = dataUltimoPagamento;
  }
  
  /**
   * @return {String}
   **/
  self.getDataVencCobranca = function() {
    return self.dataVencCobranca;
  }

  /**
   * @param {String} dataVencCobranca
   **/
  self.setDataVencCobranca = function (dataVencCobranca) {
    self.dataVencCobranca = dataVencCobranca;
  }
  
  /**
   * @return {String}
   **/
  self.getDddcelularSMS = function() {
    return self.dddcelularSMS;
  }

  /**
   * @param {String} dddcelularSMS
   **/
  self.setDddcelularSMS = function (dddcelularSMS) {
    self.dddcelularSMS = dddcelularSMS;
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
  self.getDiasEmAtraso = function() {
    return self.diasEmAtraso;
  }

  /**
   * @param {Integer} diasEmAtraso
   **/
  self.setDiasEmAtraso = function (diasEmAtraso) {
    self.diasEmAtraso = diasEmAtraso;
  }
  
  /**
   * @return {String}
   **/
  self.getEmissor = function() {
    return self.emissor;
  }

  /**
   * @param {String} emissor
   **/
  self.setEmissor = function (emissor) {
    self.emissor = emissor;
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
   * @return {String}
   **/
  self.getFormaEnvioFatura = function() {
    return self.formaEnvioFatura;
  }

  /**
   * @param {String} formaEnvioFatura
   **/
  self.setFormaEnvioFatura = function (formaEnvioFatura) {
    self.formaEnvioFatura = formaEnvioFatura;
  }
  
  /**
   * @return {Integer}
   **/
  self.getIdBandeira = function() {
    return self.idBandeira;
  }

  /**
   * @param {Integer} idBandeira
   **/
  self.setIdBandeira = function (idBandeira) {
    self.idBandeira = idBandeira;
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
   * @return {Integer}
   **/
  self.getIdEmissor = function() {
    return self.idEmissor;
  }

  /**
   * @param {Integer} idEmissor
   **/
  self.setIdEmissor = function (idEmissor) {
    self.idEmissor = idEmissor;
  }
  
  /**
   * @return {Integer}
   **/
  self.getIdEndereco = function() {
    return self.idEndereco;
  }

  /**
   * @param {Integer} idEndereco
   **/
  self.setIdEndereco = function (idEndereco) {
    self.idEndereco = idEndereco;
  }
  
  /**
   * @return {Integer}
   **/
  self.getIdFantasiaBasica = function() {
    return self.idFantasiaBasica;
  }

  /**
   * @param {Integer} idFantasiaBasica
   **/
  self.setIdFantasiaBasica = function (idFantasiaBasica) {
    self.idFantasiaBasica = idFantasiaBasica;
  }
  
  /**
   * @return {Integer}
   **/
  self.getIdOrigemComercial = function() {
    return self.idOrigemComercial;
  }

  /**
   * @param {Integer} idOrigemComercial
   **/
  self.setIdOrigemComercial = function (idOrigemComercial) {
    self.idOrigemComercial = idOrigemComercial;
  }
  
  /**
   * @return {Integer}
   **/
  self.getIdProduto = function() {
    return self.idProduto;
  }

  /**
   * @param {Integer} idProduto
   **/
  self.setIdProduto = function (idProduto) {
    self.idProduto = idProduto;
  }
  
  /**
   * @return {Integer}
   **/
  self.getIdProposta = function() {
    return self.idProposta;
  }

  /**
   * @param {Integer} idProposta
   **/
  self.setIdProposta = function (idProposta) {
    self.idProposta = idProposta;
  }
  
  /**
   * @return {Integer}
   **/
  self.getMelhorDia = function() {
    return self.melhorDia;
  }

  /**
   * @param {Integer} melhorDia
   **/
  self.setMelhorDia = function (melhorDia) {
    self.melhorDia = melhorDia;
  }
  
  /**
   * @return {String}
   **/
  self.getNomeCredor = function() {
    return self.nomeCredor;
  }

  /**
   * @param {String} nomeCredor
   **/
  self.setNomeCredor = function (nomeCredor) {
    self.nomeCredor = nomeCredor;
  }
  
  /**
   * @return {String}
   **/
  self.getNomeProduto = function() {
    return self.nomeProduto;
  }

  /**
   * @param {String} nomeProduto
   **/
  self.setNomeProduto = function (nomeProduto) {
    self.nomeProduto = nomeProduto;
  }
  
  /**
   * @return {String}
   **/
  self.getNumCelularSMS = function() {
    return self.numCelularSMS;
  }

  /**
   * @param {String} numCelularSMS
   **/
  self.setNumCelularSMS = function (numCelularSMS) {
    self.numCelularSMS = numCelularSMS;
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
   * @return {Boolean}
   **/
  self.getPermiteRefinanciamento = function() {
    return self.permiteRefinanciamento;
  }

  /**
   * @param {Boolean} permiteRefinanciamento
   **/
  self.setPermiteRefinanciamento = function (permiteRefinanciamento) {
    self.permiteRefinanciamento = permiteRefinanciamento;
  }
  
  /**
   * @return {PessoaFisicaResponse}
   **/
  self.getPessoaFisica = function() {
    return self.pessoaFisica;
  }

  /**
   * @param {PessoaFisicaResponse} pessoaFisica
   **/
  self.setPessoaFisica = function (pessoaFisica) {
    self.pessoaFisica = pessoaFisica;
  }
  
  /**
   * @return {Integer}
   **/
  self.getQuantidadePagamentos = function() {
    return self.quantidadePagamentos;
  }

  /**
   * @param {Integer} quantidadePagamentos
   **/
  self.setQuantidadePagamentos = function (quantidadePagamentos) {
    self.quantidadePagamentos = quantidadePagamentos;
  }
  
  /**
   * @return {SaldoLimiteResponse}
   **/
  self.getSaldoLimite = function() {
    return self.saldoLimite;
  }

  /**
   * @param {SaldoLimiteResponse} saldoLimite
   **/
  self.setSaldoLimite = function (saldoLimite) {
    self.saldoLimite = saldoLimite;
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
  
  /**
   * @return {String}
   **/
  self.getTaxaRefinanciamento = function() {
    return self.taxaRefinanciamento;
  }

  /**
   * @param {String} taxaRefinanciamento
   **/
  self.setTaxaRefinanciamento = function (taxaRefinanciamento) {
    self.taxaRefinanciamento = taxaRefinanciamento;
  }
  
  /**
   * @return {String}
   **/
  self.getVcto = function() {
    return self.vcto;
  }

  /**
   * @param {String} vcto
   **/
  self.setVcto = function (vcto) {
    self.vcto = vcto;
  }
  
  /**
   * @return {Integer}
   **/
  self.getVencimento1 = function() {
    return self.vencimento1;
  }

  /**
   * @param {Integer} vencimento1
   **/
  self.setVencimento1 = function (vencimento1) {
    self.vencimento1 = vencimento1;
  }
  
  /**
   * @return {Boolean}
   **/
  self.getVinculoOrigemUsuario = function() {
    return self.vinculoOrigemUsuario;
  }

  /**
   * @param {Boolean} vinculoOrigemUsuario
   **/
  self.setVinculoOrigemUsuario = function (vinculoOrigemUsuario) {
    self.vinculoOrigemUsuario = vinculoOrigemUsuario;
  }
  

  self.toJson = function () {
    return JSON.stringify(self);
  }
}

if (typeof module === 'object' && module.exports) {
  module.exports = ContaResponse;
}
