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
    root.Pier.DadosCarto = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DadosCarto model module.
   * @module model/DadosCarto
   * @version 2.15.5
   */

  /**
   * Constructs a new <code>DadosCarto</code>.
   * Objeto Dados Cart\u00C3\u00A3o
   * @alias module:model/DadosCarto
   * @class
   */
  var exports = function() {










  };

  /**
   * Constructs a <code>DadosCarto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DadosCarto} obj Optional instance to populate.
   * @return {module:model/DadosCarto} The populated <code>DadosCarto</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('numeroCartao')) {
        obj['numeroCartao'] = ApiClient.convertToType(data['numeroCartao'], 'String');
      }
      if (data.hasOwnProperty('dataValidade')) {
        obj['dataValidade'] = ApiClient.convertToType(data['dataValidade'], 'Date');
      }
      if (data.hasOwnProperty('cvv2')) {
        obj['cvv2'] = ApiClient.convertToType(data['cvv2'], 'String');
      }
      if (data.hasOwnProperty('nomePlastico')) {
        obj['nomePlastico'] = ApiClient.convertToType(data['nomePlastico'], 'String');
      }
      if (data.hasOwnProperty('idConta')) {
        obj['idConta'] = ApiClient.convertToType(data['idConta'], 'Integer');
      }
      if (data.hasOwnProperty('idCartao')) {
        obj['idCartao'] = ApiClient.convertToType(data['idCartao'], 'Integer');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'Integer');
      }
      if (data.hasOwnProperty('statusDescricao')) {
        obj['statusDescricao'] = ApiClient.convertToType(data['statusDescricao'], 'String');
      }
      if (data.hasOwnProperty('flagProvisorio')) {
        obj['flagProvisorio'] = ApiClient.convertToType(data['flagProvisorio'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * N\u00C3\u00BAmero do cart\u00C3\u00A3o.
   * @member {String} numeroCartao
   */
  exports.prototype['numeroCartao'] = undefined;

  /**
   * Data de validade.
   * @member {Date} dataValidade
   */
  exports.prototype['dataValidade'] = undefined;

  /**
   * CVV2 do cart\u00C3\u00A3o.
   * @member {String} cvv2
   */
  exports.prototype['cvv2'] = undefined;

  /**
   * Nome do portador.
   * @member {String} nomePlastico
   */
  exports.prototype['nomePlastico'] = undefined;

  /**
   * Identificador da conta do portador.
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * Identificador da cart\u00C3\u00A3o do portador.
   * @member {Integer} idCartao
   */
  exports.prototype['idCartao'] = undefined;

  /**
   * Status da conta do portador.
   * @member {Integer} status
   */
  exports.prototype['status'] = undefined;

  /**
   * Descri\u00C3\u00A7\u00C3\u00A3o do status da conta do portador.
   * @member {String} statusDescricao
   */
  exports.prototype['statusDescricao'] = undefined;

  /**
   * Flag de verifica\u00C3\u00A7\u00C3\u00A3o se o cart\u00C3\u00A3o \u00C3\u00A9 provis\u00C3\u00B3rio.
   * @member {Integer} flagProvisorio
   */
  exports.prototype['flagProvisorio'] = undefined;




  return exports;
}));
