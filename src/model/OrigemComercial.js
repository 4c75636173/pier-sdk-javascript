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
    root.Pier.OrigemComercial = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The OrigemComercial model module.
   * @module model/OrigemComercial
   * @version 2.16.2
   */

  /**
   * Constructs a new <code>OrigemComercial</code>.
   * Origem Comercial
   * @alias module:model/OrigemComercial
   * @class
   * @param id
   * @param nome
   * @param status
   */
  var exports = function(id, nome, status) {

    this['id'] = id;
    this['nome'] = nome;
    this['status'] = status;
  };

  /**
   * Constructs a <code>OrigemComercial</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrigemComercial} obj Optional instance to populate.
   * @return {module:model/OrigemComercial} The populated <code>OrigemComercial</code> instance.
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
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * Id da origem comercial
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * Nome da origem comercial
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;

  /**
   * Status da origem comercial
   * @member {Integer} status
   */
  exports.prototype['status'] = undefined;




  return exports;
}));
