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
    root.Pier.ValidaCartaoResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ValidaCartaoResponse model module.
   * @module model/ValidaCartaoResponse
   * @version 2.50.18
   */

  /**
   * Constructs a new <code>ValidaCartaoResponse</code>.
   * Objeto de resposta para a valida\u00C3\u00A7\u00C3\u00A3o de cart\u00C3\u00A3o
   * @alias module:model/ValidaCartaoResponse
   * @class
   */
  var exports = function() {









  };

  /**
   * Constructs a <code>ValidaCartaoResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ValidaCartaoResponse} obj Optional instance to populate.
   * @return {module:model/ValidaCartaoResponse} The populated <code>ValidaCartaoResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('idStatusCartao')) {
        obj['idStatusCartao'] = ApiClient.convertToType(data['idStatusCartao'], 'Integer');
      }
      if (data.hasOwnProperty('statusCartao')) {
        obj['statusCartao'] = ApiClient.convertToType(data['statusCartao'], 'String');
      }
      if (data.hasOwnProperty('idStatusConta')) {
        obj['idStatusConta'] = ApiClient.convertToType(data['idStatusConta'], 'Integer');
      }
      if (data.hasOwnProperty('statusConta')) {
        obj['statusConta'] = ApiClient.convertToType(data['statusConta'], 'String');
      }
      if (data.hasOwnProperty('idConta')) {
        obj['idConta'] = ApiClient.convertToType(data['idConta'], 'Integer');
      }
      if (data.hasOwnProperty('numeroAgencia')) {
        obj['numeroAgencia'] = ApiClient.convertToType(data['numeroAgencia'], 'Integer');
      }
      if (data.hasOwnProperty('numeroContaCorrente')) {
        obj['numeroContaCorrente'] = ApiClient.convertToType(data['numeroContaCorrente'], 'String');
      }
      if (data.hasOwnProperty('criptogramaResposta')) {
        obj['criptogramaResposta'] = ApiClient.convertToType(data['criptogramaResposta'], 'String');
      }
    }
    return obj;
  }


  /**
   * Descri\u00C3\u00A7\u00C3\u00A3o do status do cart\u00C3\u00A3o
   * @member {Integer} idStatusCartao
   */
  exports.prototype['idStatusCartao'] = undefined;

  /**
   * Descri\u00C3\u00A7\u00C3\u00A3o do status do cart\u00C3\u00A3o
   * @member {String} statusCartao
   */
  exports.prototype['statusCartao'] = undefined;

  /**
   * Descri\u00C3\u00A7\u00C3\u00A3o do status da conta
   * @member {Integer} idStatusConta
   */
  exports.prototype['idStatusConta'] = undefined;

  /**
   * Descri\u00C3\u00A7\u00C3\u00A3o do status da conta
   * @member {String} statusConta
   */
  exports.prototype['statusConta'] = undefined;

  /**
   * C\u00C3\u00B3digo identificador da conta.
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * N\u00C3\u00BAmero da ag\u00C3\u00AAncia.
   * @member {Integer} numeroAgencia
   */
  exports.prototype['numeroAgencia'] = undefined;

  /**
   * N\u00C3\u00BAmero da conta corrente.
   * @member {String} numeroContaCorrente
   */
  exports.prototype['numeroContaCorrente'] = undefined;

  /**
   * Criptograma de resposta
   * @member {String} criptogramaResposta
   */
  exports.prototype['criptogramaResposta'] = undefined;




  return exports;
}));
