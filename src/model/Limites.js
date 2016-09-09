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
    root.Pier.Limites = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Limites model module.
   * @module model/Limites
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>Limites</code>.
   * Limites
   * @alias module:model/Limites
   * @class
   * @param id
   * @param limiteCompra
   * @param limiteConsignado
   * @param limiteExterno
   * @param limiteExtra
   * @param limiteGlobal
   * @param limiteInternacionalCompra
   * @param limiteInternacionalParcelado
   * @param limiteInternacionalParcelas
   * @param limiteInternacionalSaqueGlobal
   * @param limiteInternacionalSaquePeriodo
   * @param limiteMensal
   * @param limiteParcelado
   * @param limiteParcelas
   * @param limiteSaqueGlobal
   * @param limiteSaquePeriodo
   */
  var exports = function(id, limiteCompra, limiteConsignado, limiteExterno, limiteExtra, limiteGlobal, limiteInternacionalCompra, limiteInternacionalParcelado, limiteInternacionalParcelas, limiteInternacionalSaqueGlobal, limiteInternacionalSaquePeriodo, limiteMensal, limiteParcelado, limiteParcelas, limiteSaqueGlobal, limiteSaquePeriodo) {

    this['id'] = id;
    this['limiteCompra'] = limiteCompra;
    this['limiteConsignado'] = limiteConsignado;
    this['limiteExterno'] = limiteExterno;
    this['limiteExtra'] = limiteExtra;
    this['limiteGlobal'] = limiteGlobal;
    this['limiteInternacionalCompra'] = limiteInternacionalCompra;
    this['limiteInternacionalParcelado'] = limiteInternacionalParcelado;
    this['limiteInternacionalParcelas'] = limiteInternacionalParcelas;
    this['limiteInternacionalSaqueGlobal'] = limiteInternacionalSaqueGlobal;
    this['limiteInternacionalSaquePeriodo'] = limiteInternacionalSaquePeriodo;
    this['limiteMensal'] = limiteMensal;
    this['limiteParcelado'] = limiteParcelado;
    this['limiteParcelas'] = limiteParcelas;
    this['limiteSaqueGlobal'] = limiteSaqueGlobal;
    this['limiteSaquePeriodo'] = limiteSaquePeriodo;
  };

  /**
   * Constructs a <code>Limites</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Limites} obj Optional instance to populate.
   * @return {module:model/Limites} The populated <code>Limites</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('limiteCompra')) {
        obj['limiteCompra'] = ApiClient.convertToType(data['limiteCompra'], 'Number');
      }
      if (data.hasOwnProperty('limiteConsignado')) {
        obj['limiteConsignado'] = ApiClient.convertToType(data['limiteConsignado'], 'Number');
      }
      if (data.hasOwnProperty('limiteExterno')) {
        obj['limiteExterno'] = ApiClient.convertToType(data['limiteExterno'], 'Number');
      }
      if (data.hasOwnProperty('limiteExtra')) {
        obj['limiteExtra'] = ApiClient.convertToType(data['limiteExtra'], 'Number');
      }
      if (data.hasOwnProperty('limiteGlobal')) {
        obj['limiteGlobal'] = ApiClient.convertToType(data['limiteGlobal'], 'Number');
      }
      if (data.hasOwnProperty('limiteInternacionalCompra')) {
        obj['limiteInternacionalCompra'] = ApiClient.convertToType(data['limiteInternacionalCompra'], 'Number');
      }
      if (data.hasOwnProperty('limiteInternacionalParcelado')) {
        obj['limiteInternacionalParcelado'] = ApiClient.convertToType(data['limiteInternacionalParcelado'], 'Number');
      }
      if (data.hasOwnProperty('limiteInternacionalParcelas')) {
        obj['limiteInternacionalParcelas'] = ApiClient.convertToType(data['limiteInternacionalParcelas'], 'Number');
      }
      if (data.hasOwnProperty('limiteInternacionalSaqueGlobal')) {
        obj['limiteInternacionalSaqueGlobal'] = ApiClient.convertToType(data['limiteInternacionalSaqueGlobal'], 'Number');
      }
      if (data.hasOwnProperty('limiteInternacionalSaquePeriodo')) {
        obj['limiteInternacionalSaquePeriodo'] = ApiClient.convertToType(data['limiteInternacionalSaquePeriodo'], 'Number');
      }
      if (data.hasOwnProperty('limiteMensal')) {
        obj['limiteMensal'] = ApiClient.convertToType(data['limiteMensal'], 'Number');
      }
      if (data.hasOwnProperty('limiteParcelado')) {
        obj['limiteParcelado'] = ApiClient.convertToType(data['limiteParcelado'], 'Number');
      }
      if (data.hasOwnProperty('limiteParcelas')) {
        obj['limiteParcelas'] = ApiClient.convertToType(data['limiteParcelas'], 'Number');
      }
      if (data.hasOwnProperty('limiteSaqueGlobal')) {
        obj['limiteSaqueGlobal'] = ApiClient.convertToType(data['limiteSaqueGlobal'], 'Number');
      }
      if (data.hasOwnProperty('limiteSaquePeriodo')) {
        obj['limiteSaquePeriodo'] = ApiClient.convertToType(data['limiteSaquePeriodo'], 'Number');
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
   * @member {Number} limiteCompra
   */
  exports.prototype['limiteCompra'] = undefined;

  /**
   * @member {Number} limiteConsignado
   */
  exports.prototype['limiteConsignado'] = undefined;

  /**
   * @member {Number} limiteExterno
   */
  exports.prototype['limiteExterno'] = undefined;

  /**
   * @member {Number} limiteExtra
   */
  exports.prototype['limiteExtra'] = undefined;

  /**
   * @member {Number} limiteGlobal
   */
  exports.prototype['limiteGlobal'] = undefined;

  /**
   * @member {Number} limiteInternacionalCompra
   */
  exports.prototype['limiteInternacionalCompra'] = undefined;

  /**
   * @member {Number} limiteInternacionalParcelado
   */
  exports.prototype['limiteInternacionalParcelado'] = undefined;

  /**
   * @member {Number} limiteInternacionalParcelas
   */
  exports.prototype['limiteInternacionalParcelas'] = undefined;

  /**
   * @member {Number} limiteInternacionalSaqueGlobal
   */
  exports.prototype['limiteInternacionalSaqueGlobal'] = undefined;

  /**
   * @member {Number} limiteInternacionalSaquePeriodo
   */
  exports.prototype['limiteInternacionalSaquePeriodo'] = undefined;

  /**
   * @member {Number} limiteMensal
   */
  exports.prototype['limiteMensal'] = undefined;

  /**
   * @member {Number} limiteParcelado
   */
  exports.prototype['limiteParcelado'] = undefined;

  /**
   * @member {Number} limiteParcelas
   */
  exports.prototype['limiteParcelas'] = undefined;

  /**
   * @member {Number} limiteSaqueGlobal
   */
  exports.prototype['limiteSaqueGlobal'] = undefined;

  /**
   * @member {Number} limiteSaquePeriodo
   */
  exports.prototype['limiteSaquePeriodo'] = undefined;




  return exports;
}));
