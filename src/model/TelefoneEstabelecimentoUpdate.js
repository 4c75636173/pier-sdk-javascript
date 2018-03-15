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
    root.Pier.TelefoneEstabelecimentoUpdate = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TelefoneEstabelecimentoUpdate model module.
   * @module model/TelefoneEstabelecimentoUpdate
   * @version 2.57.0
   */

  /**
   * Constructs a new <code>TelefoneEstabelecimentoUpdate</code>.
   * Objeto Telefone
   * @alias module:model/TelefoneEstabelecimentoUpdate
   * @class
   * @param ddd
   * @param telefone
   */
  var exports = function(ddd, telefone) {

    this['ddd'] = ddd;
    this['telefone'] = telefone;

  };

  /**
   * Constructs a <code>TelefoneEstabelecimentoUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TelefoneEstabelecimentoUpdate} obj Optional instance to populate.
   * @return {module:model/TelefoneEstabelecimentoUpdate} The populated <code>TelefoneEstabelecimentoUpdate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('ddd')) {
        obj['ddd'] = ApiClient.convertToType(data['ddd'], 'String');
      }
      if (data.hasOwnProperty('telefone')) {
        obj['telefone'] = ApiClient.convertToType(data['telefone'], 'String');
      }
      if (data.hasOwnProperty('ramal')) {
        obj['ramal'] = ApiClient.convertToType(data['ramal'], 'String');
      }
    }
    return obj;
  }


  /**
   * C\u00F3digo DDD do telefone.
   * @member {String} ddd
   */
  exports.prototype['ddd'] = undefined;

  /**
   * N\u00FAmero do telefone.
   * @member {String} telefone
   */
  exports.prototype['telefone'] = undefined;

  /**
   * N\u00FAmero do ramal.
   * @member {String} ramal
   */
  exports.prototype['ramal'] = undefined;




  return exports;
}));
