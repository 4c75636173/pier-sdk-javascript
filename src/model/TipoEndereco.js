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
    root.Pier.TipoEndereco = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TipoEndereco model module.
   * @module model/TipoEndereco
   * @version 2.8.0
   */

  /**
   * Constructs a new <code>TipoEndereco</code>.
   * Representa\u00C3\u00A7\u00C3\u00A3o do recurso Tipo Endere\u00C3\u00A7o
   * @alias module:model/TipoEndereco
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>TipoEndereco</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TipoEndereco} obj Optional instance to populate.
   * @return {module:model/TipoEndereco} The populated <code>TipoEndereco</code> instance.
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
   * C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Tipo do Endere\u00C3\u00A7o (id)
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * Nome do Tipo do Endere\u00C3\u00A7o
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;




  return exports;
}));
