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
    root.Pier.TipoBoletoResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TipoBoletoResponse model module.
   * @module model/TipoBoletoResponse
   * @version 2.43.0
   */

  /**
   * Constructs a new <code>TipoBoletoResponse</code>.
   * Fatura
   * @alias module:model/TipoBoletoResponse
   * @class
   */
  var exports = function() {









  };

  /**
   * Constructs a <code>TipoBoletoResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TipoBoletoResponse} obj Optional instance to populate.
   * @return {module:model/TipoBoletoResponse} The populated <code>TipoBoletoResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('descricao')) {
        obj['descricao'] = ApiClient.convertToType(data['descricao'], 'String');
      }
      if (data.hasOwnProperty('banco')) {
        obj['banco'] = ApiClient.convertToType(data['banco'], 'Integer');
      }
      if (data.hasOwnProperty('faixaNossoNumero')) {
        obj['faixaNossoNumero'] = ApiClient.convertToType(data['faixaNossoNumero'], 'Integer');
      }
      if (data.hasOwnProperty('minNossoNumero')) {
        obj['minNossoNumero'] = ApiClient.convertToType(data['minNossoNumero'], 'Number');
      }
      if (data.hasOwnProperty('maxNossoNumero')) {
        obj['maxNossoNumero'] = ApiClient.convertToType(data['maxNossoNumero'], 'Number');
      }
      if (data.hasOwnProperty('tamNossoNumero')) {
        obj['tamNossoNumero'] = ApiClient.convertToType(data['tamNossoNumero'], 'Integer');
      }
      if (data.hasOwnProperty('ultimoNossoNumero')) {
        obj['ultimoNossoNumero'] = ApiClient.convertToType(data['ultimoNossoNumero'], 'Number');
      }
    }
    return obj;
  }


  /**
   * C\u00C3\u00B3digo identificador do tipo de boleto.
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * Descri\u00C3\u00A7\u00C3\u00A3o do tipo de boleto.
   * @member {String} descricao
   */
  exports.prototype['descricao'] = undefined;

  /**
   * C\u00C3\u00B3digo identificador do banco.
   * @member {Integer} banco
   */
  exports.prototype['banco'] = undefined;

  /**
   * Faixa permitida para cria\u00C3\u00A7\u00C3\u00A3o do nosso n\u00C3\u00BAmero.
   * @member {Integer} faixaNossoNumero
   */
  exports.prototype['faixaNossoNumero'] = undefined;

  /**
   * N\u00C3\u00BAmero minimo para o nosso n\u00C3\u00BAmero.
   * @member {Number} minNossoNumero
   */
  exports.prototype['minNossoNumero'] = undefined;

  /**
   * N\u00C3\u00BAmero m\u00C3\u00A1ximo para o nosso n\u00C3\u00BAmero.
   * @member {Number} maxNossoNumero
   */
  exports.prototype['maxNossoNumero'] = undefined;

  /**
   * Tamanho do nosso n\u00C3\u00BAmero.
   * @member {Integer} tamNossoNumero
   */
  exports.prototype['tamNossoNumero'] = undefined;

  /**
   * \u00C3\u009Altimo nosso n\u00C3\u00BAmero utilizado.
   * @member {Number} ultimoNossoNumero
   */
  exports.prototype['ultimoNossoNumero'] = undefined;




  return exports;
}));
