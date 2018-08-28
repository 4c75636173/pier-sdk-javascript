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
    root.Pier.CartaoMultiAppPersistValue = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CartaoMultiAppPersistValue model module.
   * @module model/CartaoMultiAppPersistValue
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>CartaoMultiAppPersistValue</code>.
   * {{{cartao_multi_app_persist_description}}}
   * @alias module:model/CartaoMultiAppPersistValue
   * @class
   * @param idConta
   * @param idPessoa
   */
  var exports = function(idConta, idPessoa) {

    this['idConta'] = idConta;
    this['idPessoa'] = idPessoa;
  };

  /**
   * Constructs a <code>CartaoMultiAppPersistValue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CartaoMultiAppPersistValue} obj Optional instance to populate.
   * @return {module:model/CartaoMultiAppPersistValue} The populated <code>CartaoMultiAppPersistValue</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('idConta')) {
        obj['idConta'] = ApiClient.convertToType(data['idConta'], 'Integer');
      }
      if (data.hasOwnProperty('idPessoa')) {
        obj['idPessoa'] = ApiClient.convertToType(data['idPessoa'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * {{{cartao_multi_app_persist_id_conta_value}}}
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * {{{cartao_multi_app_persist_id_pessoa_value}}}
   * @member {Integer} idPessoa
   */
  exports.prototype['idPessoa'] = undefined;




  return exports;
}));
