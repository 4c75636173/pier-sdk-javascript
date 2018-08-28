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
    root.Pier.BoletoRequest = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The BoletoRequest model module.
   * @module model/BoletoRequest
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>BoletoRequest</code>.
   * {{{boleto_request_description}}}
   * @alias module:model/BoletoRequest
   * @class
   * @param idConta
   * @param tipoBoleto
   * @param valor
   * @param dataVencimento
   */
  var exports = function(idConta, tipoBoleto, valor, dataVencimento) {

    this['idConta'] = idConta;
    this['tipoBoleto'] = tipoBoleto;
    this['valor'] = valor;
    this['dataVencimento'] = dataVencimento;
  };

  /**
   * Constructs a <code>BoletoRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BoletoRequest} obj Optional instance to populate.
   * @return {module:model/BoletoRequest} The populated <code>BoletoRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('idConta')) {
        obj['idConta'] = ApiClient.convertToType(data['idConta'], 'Integer');
      }
      if (data.hasOwnProperty('tipoBoleto')) {
        obj['tipoBoleto'] = ApiClient.convertToType(data['tipoBoleto'], 'Integer');
      }
      if (data.hasOwnProperty('valor')) {
        obj['valor'] = ApiClient.convertToType(data['valor'], 'Number');
      }
      if (data.hasOwnProperty('dataVencimento')) {
        obj['dataVencimento'] = ApiClient.convertToType(data['dataVencimento'], 'String');
      }
    }
    return obj;
  }


  /**
   * {{{boleto_request_id_conta_value}}}
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * {{{boleto_request_tipo_boleto_value}}}
   * @member {Integer} tipoBoleto
   */
  exports.prototype['tipoBoleto'] = undefined;

  /**
   * {{{boleto_request_valor_value}}}
   * @member {Number} valor
   */
  exports.prototype['valor'] = undefined;

  /**
   * {{{boleto_request_data_vencimento_value}}}
   * @member {String} dataVencimento
   */
  exports.prototype['dataVencimento'] = undefined;




  return exports;
}));
