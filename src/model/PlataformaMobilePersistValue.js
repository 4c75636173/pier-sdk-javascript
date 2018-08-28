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
    root.Pier.PlataformaMobilePersistValue = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PlataformaMobilePersistValue model module.
   * @module model/PlataformaMobilePersistValue
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>PlataformaMobilePersistValue</code>.
   * {{{plataforma_mobile_persist_description}}}
   * @alias module:model/PlataformaMobilePersistValue
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>PlataformaMobilePersistValue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PlataformaMobilePersistValue} obj Optional instance to populate.
   * @return {module:model/PlataformaMobilePersistValue} The populated <code>PlataformaMobilePersistValue</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('nome')) {
        obj['nome'] = ApiClient.convertToType(data['nome'], 'String');
      }
    }
    return obj;
  }


  /**
   * {{{plataforma_mobile_persist_nome_value}}}
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;




  return exports;
}));
