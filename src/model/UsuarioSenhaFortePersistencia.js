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
    root.Pier.UsuarioSenhaFortePersistencia = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The UsuarioSenhaFortePersistencia model module.
   * @module model/UsuarioSenhaFortePersistencia
   * @version 2.68.0
   */

  /**
   * Constructs a new <code>UsuarioSenhaFortePersistencia</code>.
   * {{{usuario_senha_forte_persistencia_descricao}}}
   * @alias module:model/UsuarioSenhaFortePersistencia
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>UsuarioSenhaFortePersistencia</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UsuarioSenhaFortePersistencia} obj Optional instance to populate.
   * @return {module:model/UsuarioSenhaFortePersistencia} The populated <code>UsuarioSenhaFortePersistencia</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('idPlataforma')) {
        obj['idPlataforma'] = ApiClient.convertToType(data['idPlataforma'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * {{{usuario_senha_forte_persistencia_id_plataforma_descricao}}}
   * @member {Integer} idPlataforma
   */
  exports.prototype['idPlataforma'] = undefined;




  return exports;
}));
