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
    root.Pier.TransacaoPayQueryResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TransacaoPayQueryResponse model module.
   * @module model/TransacaoPayQueryResponse
   * @version 2.54.2
   */

  /**
   * Constructs a new <code>TransacaoPayQueryResponse</code>.
   * Representa\u00C3\u00A7\u00C3\u00A3o da resposta do recurso de consultar cart\u00C3\u00A3o
   * @alias module:model/TransacaoPayQueryResponse
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>TransacaoPayQueryResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TransacaoPayQueryResponse} obj Optional instance to populate.
   * @return {module:model/TransacaoPayQueryResponse} The populated <code>TransacaoPayQueryResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('codigo')) {
        obj['codigo'] = ApiClient.convertToType(data['codigo'], 'String');
      }
      if (data.hasOwnProperty('descricao')) {
        obj['descricao'] = ApiClient.convertToType(data['descricao'], 'String');
      }
    }
    return obj;
  }


  /**
   * Resultado de consulta de conta
   * @member {String} codigo
   */
  exports.prototype['codigo'] = undefined;

  /**
   * Mensagem descrevendo resposta.
   * @member {String} descricao
   */
  exports.prototype['descricao'] = undefined;




  return exports;
}));
