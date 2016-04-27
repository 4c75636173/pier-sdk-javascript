(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './ExtratoResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ExtratoResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.ConsultarExtratoContaResponse = factory(root.Pier.ApiClient, root.Pier.ExtratoResponse);
  }
}(this, function(ApiClient, ExtratoResponse) {
  'use strict';

  /**
   * The ConsultarExtratoContaResponse model module.
   * @module model/ConsultarExtratoContaResponse
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>ConsultarExtratoContaResponse</code>.
   * @alias module:model/ConsultarExtratoContaResponse
   * @class
   */
  var exports = function() {

















  };

  /**
   * Constructs a <code>ConsultarExtratoContaResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConsultarExtratoContaResponse} obj Optional instance to populate.
   * @return {module:model/ConsultarExtratoContaResponse} The populated <code>ConsultarExtratoContaResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('codigoRetorno')) {
        obj['codigoRetorno'] = ApiClient.convertToType(data['codigoRetorno'], 'Integer');
      }
      if (data.hasOwnProperty('comprasNacionais')) {
        obj['comprasNacionais'] = ApiClient.convertToType(data['comprasNacionais'], 'Number');
      }
      if (data.hasOwnProperty('cpf')) {
        obj['cpf'] = ApiClient.convertToType(data['cpf'], 'String');
      }
      if (data.hasOwnProperty('creditosNacionais')) {
        obj['creditosNacionais'] = ApiClient.convertToType(data['creditosNacionais'], 'Number');
      }
      if (data.hasOwnProperty('dataVencimento')) {
        obj['dataVencimento'] = ApiClient.convertToType(data['dataVencimento'], 'String');
      }
      if (data.hasOwnProperty('debitosNacionais')) {
        obj['debitosNacionais'] = ApiClient.convertToType(data['debitosNacionais'], 'Number');
      }
      if (data.hasOwnProperty('descricaoRetorno')) {
        obj['descricaoRetorno'] = ApiClient.convertToType(data['descricaoRetorno'], 'String');
      }
      if (data.hasOwnProperty('extrato')) {
        obj['extrato'] = ApiClient.convertToType(data['extrato'], [ExtratoResponse]);
      }
      if (data.hasOwnProperty('idCartao')) {
        obj['idCartao'] = ApiClient.convertToType(data['idCartao'], 'Integer');
      }
      if (data.hasOwnProperty('idConta')) {
        obj['idConta'] = ApiClient.convertToType(data['idConta'], 'Integer');
      }
      if (data.hasOwnProperty('multa')) {
        obj['multa'] = ApiClient.convertToType(data['multa'], 'Number');
      }
      if (data.hasOwnProperty('pagamentos')) {
        obj['pagamentos'] = ApiClient.convertToType(data['pagamentos'], 'Number');
      }
      if (data.hasOwnProperty('saldoAtualFinal')) {
        obj['saldoAtualFinal'] = ApiClient.convertToType(data['saldoAtualFinal'], 'Number');
      }
      if (data.hasOwnProperty('saldoExtratoAnterior')) {
        obj['saldoExtratoAnterior'] = ApiClient.convertToType(data['saldoExtratoAnterior'], 'Number');
      }
      if (data.hasOwnProperty('tarifasNacionais')) {
        obj['tarifasNacionais'] = ApiClient.convertToType(data['tarifasNacionais'], 'Number');
      }
      if (data.hasOwnProperty('valorMinimoExtrato')) {
        obj['valorMinimoExtrato'] = ApiClient.convertToType(data['valorMinimoExtrato'], 'Number');
      }
    }
    return obj;
  }


  /**
   * @member {Integer} codigoRetorno
   */
  exports.prototype['codigoRetorno'] = undefined;

  /**
   * @member {Number} comprasNacionais
   */
  exports.prototype['comprasNacionais'] = undefined;

  /**
   * @member {String} cpf
   */
  exports.prototype['cpf'] = undefined;

  /**
   * @member {Number} creditosNacionais
   */
  exports.prototype['creditosNacionais'] = undefined;

  /**
   * @member {String} dataVencimento
   */
  exports.prototype['dataVencimento'] = undefined;

  /**
   * @member {Number} debitosNacionais
   */
  exports.prototype['debitosNacionais'] = undefined;

  /**
   * @member {String} descricaoRetorno
   */
  exports.prototype['descricaoRetorno'] = undefined;

  /**
   * @member {Array.<module:model/ExtratoResponse>} extrato
   */
  exports.prototype['extrato'] = undefined;

  /**
   * @member {Integer} idCartao
   */
  exports.prototype['idCartao'] = undefined;

  /**
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * @member {Number} multa
   */
  exports.prototype['multa'] = undefined;

  /**
   * @member {Number} pagamentos
   */
  exports.prototype['pagamentos'] = undefined;

  /**
   * @member {Number} saldoAtualFinal
   */
  exports.prototype['saldoAtualFinal'] = undefined;

  /**
   * @member {Number} saldoExtratoAnterior
   */
  exports.prototype['saldoExtratoAnterior'] = undefined;

  /**
   * @member {Number} tarifasNacionais
   */
  exports.prototype['tarifasNacionais'] = undefined;

  /**
   * @member {Number} valorMinimoExtrato
   */
  exports.prototype['valorMinimoExtrato'] = undefined;




  return exports;
}));
