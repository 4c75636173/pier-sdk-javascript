(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './ReferenciaIdPersist'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ReferenciaIdPersist'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.PerfilUpdate = factory(root.Pier.ApiClient, root.Pier.ReferenciaIdPersist);
  }
}(this, function(ApiClient, ReferenciaIdPersist) {
  'use strict';

  /**
   * The PerfilUpdate model module.
   * @module model/PerfilUpdate
   * @version 2.68.0
   */

  /**
   * Constructs a new <code>PerfilUpdate</code>.
   * {{{perfil_update_object_description}}}
   * @alias module:model/PerfilUpdate
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>PerfilUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PerfilUpdate} obj Optional instance to populate.
   * @return {module:model/PerfilUpdate} The populated <code>PerfilUpdate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('nome')) {
        obj['nome'] = ApiClient.convertToType(data['nome'], 'String');
      }
      if (data.hasOwnProperty('permissoes')) {
        obj['permissoes'] = ApiClient.convertToType(data['permissoes'], [ReferenciaIdPersist]);
      }
    }
    return obj;
  }


  /**
   * {{{perfil_update_nome_value}}}
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;

  /**
   * {{{perfil_update_permissoes_value}}}
   * @member {Array.<module:model/ReferenciaIdPersist>} permissoes
   */
  exports.prototype['permissoes'] = undefined;




  return exports;
}));
