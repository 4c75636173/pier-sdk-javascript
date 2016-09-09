(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.Saldos = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Saldos model module.
   * @module model/Saldos
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>Saldos</code>.
   * Saldos
   * @alias module:model/Saldos
   * @class
   * @param id
   * @param saldoDisponivelCompra
   * @param saldoDisponivelCompraInternacional
   * @param saldoDisponivelExterno
   * @param saldoDisponivelExtra
   * @param saldoDisponivelGlobal
   * @param saldoDisponivelMensal
   * @param saldoDisponivelParcelado
   * @param saldoDisponivelParcelas
   * @param saldoDisponivelSaque
   * @param saldoDisponivelSaqueInternacional
   * @param saldoPontosFidelidade
   */
  var exports = function(id, saldoDisponivelCompra, saldoDisponivelCompraInternacional, saldoDisponivelExterno, saldoDisponivelExtra, saldoDisponivelGlobal, saldoDisponivelMensal, saldoDisponivelParcelado, saldoDisponivelParcelas, saldoDisponivelSaque, saldoDisponivelSaqueInternacional, saldoPontosFidelidade) {

    this['id'] = id;
    this['saldoDisponivelCompra'] = saldoDisponivelCompra;
    this['saldoDisponivelCompraInternacional'] = saldoDisponivelCompraInternacional;
    this['saldoDisponivelExterno'] = saldoDisponivelExterno;
    this['saldoDisponivelExtra'] = saldoDisponivelExtra;
    this['saldoDisponivelGlobal'] = saldoDisponivelGlobal;
    this['saldoDisponivelMensal'] = saldoDisponivelMensal;
    this['saldoDisponivelParcelado'] = saldoDisponivelParcelado;
    this['saldoDisponivelParcelas'] = saldoDisponivelParcelas;
    this['saldoDisponivelSaque'] = saldoDisponivelSaque;
    this['saldoDisponivelSaqueInternacional'] = saldoDisponivelSaqueInternacional;
    this['saldoPontosFidelidade'] = saldoPontosFidelidade;
  };

  /**
   * Constructs a <code>Saldos</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Saldos} obj Optional instance to populate.
   * @return {module:model/Saldos} The populated <code>Saldos</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('saldoDisponivelCompra')) {
        obj['saldoDisponivelCompra'] = ApiClient.convertToType(data['saldoDisponivelCompra'], 'Number');
      }
      if (data.hasOwnProperty('saldoDisponivelCompraInternacional')) {
        obj['saldoDisponivelCompraInternacional'] = ApiClient.convertToType(data['saldoDisponivelCompraInternacional'], 'Number');
      }
      if (data.hasOwnProperty('saldoDisponivelExterno')) {
        obj['saldoDisponivelExterno'] = ApiClient.convertToType(data['saldoDisponivelExterno'], 'Number');
      }
      if (data.hasOwnProperty('saldoDisponivelExtra')) {
        obj['saldoDisponivelExtra'] = ApiClient.convertToType(data['saldoDisponivelExtra'], 'Number');
      }
      if (data.hasOwnProperty('saldoDisponivelGlobal')) {
        obj['saldoDisponivelGlobal'] = ApiClient.convertToType(data['saldoDisponivelGlobal'], 'Number');
      }
      if (data.hasOwnProperty('saldoDisponivelMensal')) {
        obj['saldoDisponivelMensal'] = ApiClient.convertToType(data['saldoDisponivelMensal'], 'Number');
      }
      if (data.hasOwnProperty('saldoDisponivelParcelado')) {
        obj['saldoDisponivelParcelado'] = ApiClient.convertToType(data['saldoDisponivelParcelado'], 'Number');
      }
      if (data.hasOwnProperty('saldoDisponivelParcelas')) {
        obj['saldoDisponivelParcelas'] = ApiClient.convertToType(data['saldoDisponivelParcelas'], 'Number');
      }
      if (data.hasOwnProperty('saldoDisponivelSaque')) {
        obj['saldoDisponivelSaque'] = ApiClient.convertToType(data['saldoDisponivelSaque'], 'Number');
      }
      if (data.hasOwnProperty('saldoDisponivelSaqueInternacional')) {
        obj['saldoDisponivelSaqueInternacional'] = ApiClient.convertToType(data['saldoDisponivelSaqueInternacional'], 'Number');
      }
      if (data.hasOwnProperty('saldoPontosFidelidade')) {
        obj['saldoPontosFidelidade'] = ApiClient.convertToType(data['saldoPontosFidelidade'], 'Number');
      }
    }
    return obj;
  }


  /**
   * C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Limite Disponibilidade (id).
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * @member {Number} saldoDisponivelCompra
   */
  exports.prototype['saldoDisponivelCompra'] = undefined;

  /**
   * @member {Number} saldoDisponivelCompraInternacional
   */
  exports.prototype['saldoDisponivelCompraInternacional'] = undefined;

  /**
   * @member {Number} saldoDisponivelExterno
   */
  exports.prototype['saldoDisponivelExterno'] = undefined;

  /**
   * @member {Number} saldoDisponivelExtra
   */
  exports.prototype['saldoDisponivelExtra'] = undefined;

  /**
   * Campo que 
   * @member {Number} saldoDisponivelGlobal
   */
  exports.prototype['saldoDisponivelGlobal'] = undefined;

  /**
   * @member {Number} saldoDisponivelMensal
   */
  exports.prototype['saldoDisponivelMensal'] = undefined;

  /**
   * @member {Number} saldoDisponivelParcelado
   */
  exports.prototype['saldoDisponivelParcelado'] = undefined;

  /**
   * @member {Number} saldoDisponivelParcelas
   */
  exports.prototype['saldoDisponivelParcelas'] = undefined;

  /**
   * @member {Number} saldoDisponivelSaque
   */
  exports.prototype['saldoDisponivelSaque'] = undefined;

  /**
   * @member {Number} saldoDisponivelSaqueInternacional
   */
  exports.prototype['saldoDisponivelSaqueInternacional'] = undefined;

  /**
   * @member {Number} saldoPontosFidelidade
   */
  exports.prototype['saldoPontosFidelidade'] = undefined;




  return exports;
}));
