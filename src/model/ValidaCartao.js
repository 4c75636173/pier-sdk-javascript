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
    root.Pier.ValidaCartao = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ValidaCartao model module.
   * @module model/ValidaCartao
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>ValidaCartao</code>.
   * Objeto de resposta para a valida\u00C3\u00A7\u00C3\u00A3o de cart\u00C3\u00A3o
   * @alias module:model/ValidaCartao
   * @class
   */
  var exports = function() {




  };

  /**
   * Constructs a <code>ValidaCartao</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ValidaCartao} obj Optional instance to populate.
   * @return {module:model/ValidaCartao} The populated <code>ValidaCartao</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('statusCartao')) {
        obj['statusCartao'] = ApiClient.convertToType(data['statusCartao'], 'String');
      }
      if (data.hasOwnProperty('statusConta')) {
        obj['statusConta'] = ApiClient.convertToType(data['statusConta'], 'String');
      }
      if (data.hasOwnProperty('criptogramaResposta')) {
        obj['criptogramaResposta'] = ApiClient.convertToType(data['criptogramaResposta'], 'String');
      }
    }
    return obj;
  }


  /**
   * Descri\u00C3\u00A7\u00C3\u00A3o do status do cart\u00C3\u00A3o
   * @member {String} statusCartao
   */
  exports.prototype['statusCartao'] = undefined;

  /**
   * Descri\u00C3\u00A7\u00C3\u00A3o do status da conta
   * @member {String} statusConta
   */
  exports.prototype['statusConta'] = undefined;

  /**
   * Criptograma de resposta
   * @member {String} criptogramaResposta
   */
  exports.prototype['criptogramaResposta'] = undefined;




  return exports;
}));
