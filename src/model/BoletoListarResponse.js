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
    root.Pier.BoletoListarResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The BoletoListarResponse model module.
   * @module model/BoletoListarResponse
   * @version 2.66.1
   */

  /**
   * Constructs a new <code>BoletoListarResponse</code>.
   * {{{boleto_listar_response_description}}}
   * @alias module:model/BoletoListarResponse
   * @class
   */
  var exports = function() {







  };

  /**
   * Constructs a <code>BoletoListarResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BoletoListarResponse} obj Optional instance to populate.
   * @return {module:model/BoletoListarResponse} The populated <code>BoletoListarResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('idConta')) {
        obj['idConta'] = ApiClient.convertToType(data['idConta'], 'Integer');
      }
      if (data.hasOwnProperty('nossoNumero')) {
        obj['nossoNumero'] = ApiClient.convertToType(data['nossoNumero'], 'String');
      }
      if (data.hasOwnProperty('dataVencimento')) {
        obj['dataVencimento'] = ApiClient.convertToType(data['dataVencimento'], 'String');
      }
      if (data.hasOwnProperty('valorBoleto')) {
        obj['valorBoleto'] = ApiClient.convertToType(data['valorBoleto'], 'Number');
      }
      if (data.hasOwnProperty('idTipoBoleto')) {
        obj['idTipoBoleto'] = ApiClient.convertToType(data['idTipoBoleto'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * {{{boleto_response_id_value}}}
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * {{{boleto_response_id_conta_value}}}
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * {{{boleto_response_nosso_numero_value}}}
   * @member {String} nossoNumero
   */
  exports.prototype['nossoNumero'] = undefined;

  /**
   * {{{boleto_response_data_vencimento_value}}}
   * @member {String} dataVencimento
   */
  exports.prototype['dataVencimento'] = undefined;

  /**
   * {{{boleto_response_valor_boleto_value}}}
   * @member {Number} valorBoleto
   */
  exports.prototype['valorBoleto'] = undefined;

  /**
   * {{{boleto_response_id_tipo_boleto_value}}}
   * @member {Integer} idTipoBoleto
   */
  exports.prototype['idTipoBoleto'] = undefined;




  return exports;
}));
