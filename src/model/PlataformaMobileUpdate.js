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
    root.Pier.PlataformaMobileUpdate = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PlataformaMobileUpdate model module.
   * @module model/PlataformaMobileUpdate
   * @version 2.15.5
   */

  /**
   * Constructs a new <code>PlataformaMobileUpdate</code>.
   * Objeto PlataformaMobile
   * @alias module:model/PlataformaMobileUpdate
   * @class
   * @param nome
   */
  var exports = function(nome) {

    this['nome'] = nome;
  };

  /**
   * Constructs a <code>PlataformaMobileUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PlataformaMobileUpdate} obj Optional instance to populate.
   * @return {module:model/PlataformaMobileUpdate} The populated <code>PlataformaMobileUpdate</code> instance.
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
   * Nome da Plataforma
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;




  return exports;
}));
