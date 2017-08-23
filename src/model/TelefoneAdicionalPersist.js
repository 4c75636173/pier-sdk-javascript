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
    root.Pier.TelefoneAdicionalPersist = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TelefoneAdicionalPersist model module.
   * @module model/TelefoneAdicionalPersist
   * @version 2.28.3
   */

  /**
   * Constructs a new <code>TelefoneAdicionalPersist</code>.
   * Objeto Telefone
   * @alias module:model/TelefoneAdicionalPersist
   * @class
   */
  var exports = function() {





  };

  /**
   * Constructs a <code>TelefoneAdicionalPersist</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TelefoneAdicionalPersist} obj Optional instance to populate.
   * @return {module:model/TelefoneAdicionalPersist} The populated <code>TelefoneAdicionalPersist</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('idTipoTelefone')) {
        obj['idTipoTelefone'] = ApiClient.convertToType(data['idTipoTelefone'], 'Integer');
      }
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
   * C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Tipo do Telefone (id).
   * @member {Integer} idTipoTelefone
   */
  exports.prototype['idTipoTelefone'] = undefined;

  /**
   * C\u00C3\u00B3digo DDD do telefone (id).
   * @member {String} ddd
   */
  exports.prototype['ddd'] = undefined;

  /**
   * N\u00C3\u00BAmero do telefone.
   * @member {String} telefone
   */
  exports.prototype['telefone'] = undefined;

  /**
   * N\u00C3\u00BAmero do ramal.
   * @member {String} ramal
   */
  exports.prototype['ramal'] = undefined;




  return exports;
}));
