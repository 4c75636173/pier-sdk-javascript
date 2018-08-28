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
    root.Pier.BinChaveUpdate = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The BinChaveUpdate model module.
   * @module model/BinChaveUpdate
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>BinChaveUpdate</code>.
   * @alias module:model/BinChaveUpdate
   * @class
   */
  var exports = function() {








  };

  /**
   * Constructs a <code>BinChaveUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BinChaveUpdate} obj Optional instance to populate.
   * @return {module:model/BinChaveUpdate} The populated <code>BinChaveUpdate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('chave')) {
        obj['chave'] = ApiClient.convertToType(data['chave'], 'String');
      }
      if (data.hasOwnProperty('checkValue')) {
        obj['checkValue'] = ApiClient.convertToType(data['checkValue'], 'String');
      }
      if (data.hasOwnProperty('flagDescriptografado')) {
        obj['flagDescriptografado'] = ApiClient.convertToType(data['flagDescriptografado'], 'Boolean');
      }
      if (data.hasOwnProperty('idBin')) {
        obj['idBin'] = ApiClient.convertToType(data['idBin'], 'Integer');
      }
      if (data.hasOwnProperty('idTipoChave')) {
        obj['idTipoChave'] = ApiClient.convertToType(data['idTipoChave'], 'Integer');
      }
      if (data.hasOwnProperty('label')) {
        obj['label'] = ApiClient.convertToType(data['label'], 'String');
      }
      if (data.hasOwnProperty('validade')) {
        obj['validade'] = ApiClient.convertToType(data['validade'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} chave
   */
  exports.prototype['chave'] = undefined;

  /**
   * @member {String} checkValue
   */
  exports.prototype['checkValue'] = undefined;

  /**
   * @member {Boolean} flagDescriptografado
   */
  exports.prototype['flagDescriptografado'] = undefined;

  /**
   * @member {Integer} idBin
   */
  exports.prototype['idBin'] = undefined;

  /**
   * @member {Integer} idTipoChave
   */
  exports.prototype['idTipoChave'] = undefined;

  /**
   * @member {String} label
   */
  exports.prototype['label'] = undefined;

  /**
   * @member {String} validade
   */
  exports.prototype['validade'] = undefined;




  return exports;
}));
