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
    root.Pier.EstagioCartao = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The EstagioCartao model module.
   * @module model/EstagioCartao
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>EstagioCartao</code>.
   * Representa\u00C3\u00A7\u00C3\u00A3o do recurso Est\u00C3\u00A1gio Cart\u00C3\u00A3o
   * @alias module:model/EstagioCartao
   * @class
   * @param id
   * @param nome
   */
  var exports = function(id, nome) {

    this['id'] = id;
    this['nome'] = nome;
  };

  /**
   * Constructs a <code>EstagioCartao</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EstagioCartao} obj Optional instance to populate.
   * @return {module:model/EstagioCartao} The populated <code>EstagioCartao</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('nome')) {
        obj['nome'] = ApiClient.convertToType(data['nome'], 'String');
      }
    }
    return obj;
  }


  /**
   * Id do est\u00C3\u00A1gio cart\u00C3\u00A3o
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * Nome do est\u00C3\u00A1gio cart\u00C3\u00A3o
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;




  return exports;
}));