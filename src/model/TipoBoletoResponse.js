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
   * @version 2.66.1
   */

  /**
   * Constructs a new <code>TipoBoletoResponse</code>.
   * {{{tipo_boleto_response_description}}}
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
   * {{{tipo_boleto_response_id_value}}}
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * {{{tipo_boleto_response_descricao_value}}}
   * @member {String} descricao
   */
  exports.prototype['descricao'] = undefined;

  /**
   * {{{tipo_boleto_response_banco_value}}}
   * @member {Integer} banco
   */
  exports.prototype['banco'] = undefined;

  /**
   * {{{tipo_boleto_response_faixa_nosso_numero_value}}}
   * @member {Integer} faixaNossoNumero
   */
  exports.prototype['faixaNossoNumero'] = undefined;

  /**
   * {{{tipo_boleto_response_min_nosso_numero_value}}}
   * @member {Number} minNossoNumero
   */
  exports.prototype['minNossoNumero'] = undefined;

  /**
   * {{{tipo_boleto_response_max_nosso_numero_value}}}
   * @member {Number} maxNossoNumero
   */
  exports.prototype['maxNossoNumero'] = undefined;

  /**
   * {{{tipo_boleto_response_tam_nosso_numero_value}}}
   * @member {Integer} tamNossoNumero
   */
  exports.prototype['tamNossoNumero'] = undefined;

  /**
   * {{{tipo_boleto_response_ultimo_nosso_numero_value}}}
   * @member {Number} ultimoNossoNumero
   */
  exports.prototype['ultimoNossoNumero'] = undefined;




  return exports;
}));
