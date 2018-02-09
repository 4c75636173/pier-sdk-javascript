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
    root.Pier.PlataformaMobilePersist = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PlataformaMobilePersist model module.
   * @module model/PlataformaMobilePersist
   * @version 2.54.1
   */

  /**
   * Constructs a new <code>PlataformaMobilePersist</code>.
   * Objeto PlataformaMobile
   * @alias module:model/PlataformaMobilePersist
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>PlataformaMobilePersist</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PlataformaMobilePersist} obj Optional instance to populate.
   * @return {module:model/PlataformaMobilePersist} The populated <code>PlataformaMobilePersist</code> instance.
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
   * Apresenta o nome da plataforma.
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;




  return exports;
}));
