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
    root.Pier.CartaoEmbossingRequest = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CartaoEmbossingRequest model module.
   * @module model/CartaoEmbossingRequest
   * @version 2.50.5
   */

  /**
   * Constructs a new <code>CartaoEmbossingRequest</code>.
   * Parametros de requisi\u00C3\u00A7\u00C3\u00A3o da gera\u00C3\u00A7\u00C3\u00A3o do cart\u00C3\u00A3o embossing
   * @alias module:model/CartaoEmbossingRequest
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>CartaoEmbossingRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CartaoEmbossingRequest} obj Optional instance to populate.
   * @return {module:model/CartaoEmbossingRequest} The populated <code>CartaoEmbossingRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id_pessoa')) {
        obj['id_pessoa'] = ApiClient.convertToType(data['id_pessoa'], 'Integer');
      }
      if (data.hasOwnProperty('id_tipo_plastico')) {
        obj['id_tipo_plastico'] = ApiClient.convertToType(data['id_tipo_plastico'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Pessoa a qual o cart\u00C3\u00A3o pertence (id)
   * @member {Integer} id_pessoa
   */
  exports.prototype['id_pessoa'] = undefined;

  /**
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do TipoPlastico (id).
   * @member {Integer} id_tipo_plastico
   */
  exports.prototype['id_tipo_plastico'] = undefined;




  return exports;
}));
