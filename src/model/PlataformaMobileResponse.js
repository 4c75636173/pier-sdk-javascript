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
    root.Pier.PlataformaMobileResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PlataformaMobileResponse model module.
   * @module model/PlataformaMobileResponse
   * @version 2.32.0
   */

  /**
   * Constructs a new <code>PlataformaMobileResponse</code>.
   * Plataforma Mobile
   * @alias module:model/PlataformaMobileResponse
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>PlataformaMobileResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PlataformaMobileResponse} obj Optional instance to populate.
   * @return {module:model/PlataformaMobileResponse} The populated <code>PlataformaMobileResponse</code> instance.
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
   * Identificador da Plataforma
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * Nome da Plataforma
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;




  return exports;
}));
