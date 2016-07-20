(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './ConsultarContaCartaoResponse', './PessoaFisicaResponse', './SaldoLimiteResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ConsultarContaCartaoResponse'), require('./PessoaFisicaResponse'), require('./SaldoLimiteResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.ContaResponse = factory(root.Pier.ApiClient, root.Pier.ConsultarContaCartaoResponse, root.Pier.PessoaFisicaResponse, root.Pier.SaldoLimiteResponse);
  }
}(this, function(ApiClient, ConsultarContaCartaoResponse, PessoaFisicaResponse, SaldoLimiteResponse) {
  'use strict';

  /**
   * The ContaResponse model module.
   * @module model/ContaResponse
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>ContaResponse</code>.
   * @alias module:model/ContaResponse
   * @class
   */
  var exports = function() {



































  };

  /**
   * Constructs a <code>ContaResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ContaResponse} obj Optional instance to populate.
   * @return {module:model/ContaResponse} The populated <code>ContaResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('bin')) {
        obj['bin'] = ApiClient.convertToType(data['bin'], 'Integer');
      }
      if (data.hasOwnProperty('cartao')) {
        obj['cartao'] = ConsultarContaCartaoResponse.constructFromObject(data['cartao']);
      }
      if (data.hasOwnProperty('dataCadastramento')) {
        obj['dataCadastramento'] = ApiClient.convertToType(data['dataCadastramento'], 'String');
      }
      if (data.hasOwnProperty('dataUltimoPagamento')) {
        obj['dataUltimoPagamento'] = ApiClient.convertToType(data['dataUltimoPagamento'], 'String');
      }
      if (data.hasOwnProperty('dataVencCobranca')) {
        obj['dataVencCobranca'] = ApiClient.convertToType(data['dataVencCobranca'], 'String');
      }
      if (data.hasOwnProperty('dddcelularSMS')) {
        obj['dddcelularSMS'] = ApiClient.convertToType(data['dddcelularSMS'], 'String');
      }
      if (data.hasOwnProperty('descricaoStatus')) {
        obj['descricaoStatus'] = ApiClient.convertToType(data['descricaoStatus'], 'String');
      }
      if (data.hasOwnProperty('diasEmAtraso')) {
        obj['diasEmAtraso'] = ApiClient.convertToType(data['diasEmAtraso'], 'Integer');
      }
      if (data.hasOwnProperty('emissor')) {
        obj['emissor'] = ApiClient.convertToType(data['emissor'], 'String');
      }
      if (data.hasOwnProperty('flagCancelamento')) {
        obj['flagCancelamento'] = ApiClient.convertToType(data['flagCancelamento'], 'Boolean');
      }
      if (data.hasOwnProperty('formaEnvioFatura')) {
        obj['formaEnvioFatura'] = ApiClient.convertToType(data['formaEnvioFatura'], 'String');
      }
      if (data.hasOwnProperty('idBandeira')) {
        obj['idBandeira'] = ApiClient.convertToType(data['idBandeira'], 'Integer');
      }
      if (data.hasOwnProperty('idConta')) {
        obj['idConta'] = ApiClient.convertToType(data['idConta'], 'Integer');
      }
      if (data.hasOwnProperty('idEmissor')) {
        obj['idEmissor'] = ApiClient.convertToType(data['idEmissor'], 'Integer');
      }
      if (data.hasOwnProperty('idEndereco')) {
        obj['idEndereco'] = ApiClient.convertToType(data['idEndereco'], 'Integer');
      }
      if (data.hasOwnProperty('idFantasiaBasica')) {
        obj['idFantasiaBasica'] = ApiClient.convertToType(data['idFantasiaBasica'], 'Integer');
      }
      if (data.hasOwnProperty('idOrigemComercial')) {
        obj['idOrigemComercial'] = ApiClient.convertToType(data['idOrigemComercial'], 'Integer');
      }
      if (data.hasOwnProperty('idProduto')) {
        obj['idProduto'] = ApiClient.convertToType(data['idProduto'], 'Integer');
      }
      if (data.hasOwnProperty('idProposta')) {
        obj['idProposta'] = ApiClient.convertToType(data['idProposta'], 'Integer');
      }
      if (data.hasOwnProperty('melhorDia')) {
        obj['melhorDia'] = ApiClient.convertToType(data['melhorDia'], 'Integer');
      }
      if (data.hasOwnProperty('nomeCredor')) {
        obj['nomeCredor'] = ApiClient.convertToType(data['nomeCredor'], 'String');
      }
      if (data.hasOwnProperty('nomeProduto')) {
        obj['nomeProduto'] = ApiClient.convertToType(data['nomeProduto'], 'String');
      }
      if (data.hasOwnProperty('numCelularSMS')) {
        obj['numCelularSMS'] = ApiClient.convertToType(data['numCelularSMS'], 'String');
      }
      if (data.hasOwnProperty('pagamentos')) {
        obj['pagamentos'] = ApiClient.convertToType(data['pagamentos'], 'Number');
      }
      if (data.hasOwnProperty('permiteRefinanciamento')) {
        obj['permiteRefinanciamento'] = ApiClient.convertToType(data['permiteRefinanciamento'], 'Boolean');
      }
      if (data.hasOwnProperty('pessoaFisica')) {
        obj['pessoaFisica'] = PessoaFisicaResponse.constructFromObject(data['pessoaFisica']);
      }
      if (data.hasOwnProperty('quantidadePagamentos')) {
        obj['quantidadePagamentos'] = ApiClient.convertToType(data['quantidadePagamentos'], 'Integer');
      }
      if (data.hasOwnProperty('saldoLimite')) {
        obj['saldoLimite'] = SaldoLimiteResponse.constructFromObject(data['saldoLimite']);
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'Integer');
      }
      if (data.hasOwnProperty('statusData')) {
        obj['statusData'] = ApiClient.convertToType(data['statusData'], 'Date');
      }
      if (data.hasOwnProperty('taxaRefinanciamento')) {
        obj['taxaRefinanciamento'] = ApiClient.convertToType(data['taxaRefinanciamento'], 'String');
      }
      if (data.hasOwnProperty('vcto')) {
        obj['vcto'] = ApiClient.convertToType(data['vcto'], 'String');
      }
      if (data.hasOwnProperty('vencimento1')) {
        obj['vencimento1'] = ApiClient.convertToType(data['vencimento1'], 'Integer');
      }
      if (data.hasOwnProperty('vinculoOrigemUsuario')) {
        obj['vinculoOrigemUsuario'] = ApiClient.convertToType(data['vinculoOrigemUsuario'], 'Boolean');
      }
    }
    return obj;
  }


  /**
   * @member {Integer} bin
   */
  exports.prototype['bin'] = undefined;

  /**
   * @member {module:model/ConsultarContaCartaoResponse} cartao
   */
  exports.prototype['cartao'] = undefined;

  /**
   * @member {String} dataCadastramento
   */
  exports.prototype['dataCadastramento'] = undefined;

  /**
   * @member {String} dataUltimoPagamento
   */
  exports.prototype['dataUltimoPagamento'] = undefined;

  /**
   * @member {String} dataVencCobranca
   */
  exports.prototype['dataVencCobranca'] = undefined;

  /**
   * @member {String} dddcelularSMS
   */
  exports.prototype['dddcelularSMS'] = undefined;

  /**
   * @member {String} descricaoStatus
   */
  exports.prototype['descricaoStatus'] = undefined;

  /**
   * @member {Integer} diasEmAtraso
   */
  exports.prototype['diasEmAtraso'] = undefined;

  /**
   * @member {String} emissor
   */
  exports.prototype['emissor'] = undefined;

  /**
   * @member {Boolean} flagCancelamento
   */
  exports.prototype['flagCancelamento'] = undefined;

  /**
   * @member {String} formaEnvioFatura
   */
  exports.prototype['formaEnvioFatura'] = undefined;

  /**
   * @member {Integer} idBandeira
   */
  exports.prototype['idBandeira'] = undefined;

  /**
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * @member {Integer} idEmissor
   */
  exports.prototype['idEmissor'] = undefined;

  /**
   * @member {Integer} idEndereco
   */
  exports.prototype['idEndereco'] = undefined;

  /**
   * @member {Integer} idFantasiaBasica
   */
  exports.prototype['idFantasiaBasica'] = undefined;

  /**
   * @member {Integer} idOrigemComercial
   */
  exports.prototype['idOrigemComercial'] = undefined;

  /**
   * @member {Integer} idProduto
   */
  exports.prototype['idProduto'] = undefined;

  /**
   * @member {Integer} idProposta
   */
  exports.prototype['idProposta'] = undefined;

  /**
   * @member {Integer} melhorDia
   */
  exports.prototype['melhorDia'] = undefined;

  /**
   * @member {String} nomeCredor
   */
  exports.prototype['nomeCredor'] = undefined;

  /**
   * @member {String} nomeProduto
   */
  exports.prototype['nomeProduto'] = undefined;

  /**
   * @member {String} numCelularSMS
   */
  exports.prototype['numCelularSMS'] = undefined;

  /**
   * @member {Number} pagamentos
   */
  exports.prototype['pagamentos'] = undefined;

  /**
   * @member {Boolean} permiteRefinanciamento
   */
  exports.prototype['permiteRefinanciamento'] = undefined;

  /**
   * @member {module:model/PessoaFisicaResponse} pessoaFisica
   */
  exports.prototype['pessoaFisica'] = undefined;

  /**
   * @member {Integer} quantidadePagamentos
   */
  exports.prototype['quantidadePagamentos'] = undefined;

  /**
   * @member {module:model/SaldoLimiteResponse} saldoLimite
   */
  exports.prototype['saldoLimite'] = undefined;

  /**
   * @member {Integer} status
   */
  exports.prototype['status'] = undefined;

  /**
   * @member {Date} statusData
   */
  exports.prototype['statusData'] = undefined;

  /**
   * @member {String} taxaRefinanciamento
   */
  exports.prototype['taxaRefinanciamento'] = undefined;

  /**
   * @member {String} vcto
   */
  exports.prototype['vcto'] = undefined;

  /**
   * @member {Integer} vencimento1
   */
  exports.prototype['vencimento1'] = undefined;

  /**
   * @member {Boolean} vinculoOrigemUsuario
   */
  exports.prototype['vinculoOrigemUsuario'] = undefined;




  return exports;
}));
