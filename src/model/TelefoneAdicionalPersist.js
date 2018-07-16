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
   * @version 2.68.0
   */

  /**
   * Constructs a new <code>TelefoneAdicionalPersist</code>.
   * {{{telefone_adicional_persist_description}}}
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
   * {{{telefone_adicional_persist_id_tipo_telefone_value}}}
   * @member {Integer} idTipoTelefone
   */
  exports.prototype['idTipoTelefone'] = undefined;

  /**
   * {{{telefone_adicional_persist_ddd_value}}}
   * @member {String} ddd
   */
  exports.prototype['ddd'] = undefined;

  /**
   * {{{telefone_adicional_persist_telefone_value}}}
   * @member {String} telefone
   */
  exports.prototype['telefone'] = undefined;

  /**
   * {{{telefone_adicional_persist_ramal_value}}}
   * @member {String} ramal
   */
  exports.prototype['ramal'] = undefined;




  return exports;
}));
