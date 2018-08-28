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
    root.Pier.ControleSegurancaDispositivoPersistencia = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ControleSegurancaDispositivoPersistencia model module.
   * @module model/ControleSegurancaDispositivoPersistencia
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>ControleSegurancaDispositivoPersistencia</code>.
   * {{{controle_seguranca_dispositivo_persistencia_descricao}}}
   * @alias module:model/ControleSegurancaDispositivoPersistencia
   * @class
   * @param idUsuario
   * @param phoneId
   */
  var exports = function(idUsuario, phoneId) {

    this['idUsuario'] = idUsuario;
    this['phoneId'] = phoneId;
  };

  /**
   * Constructs a <code>ControleSegurancaDispositivoPersistencia</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ControleSegurancaDispositivoPersistencia} obj Optional instance to populate.
   * @return {module:model/ControleSegurancaDispositivoPersistencia} The populated <code>ControleSegurancaDispositivoPersistencia</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('idUsuario')) {
        obj['idUsuario'] = ApiClient.convertToType(data['idUsuario'], 'Integer');
      }
      if (data.hasOwnProperty('phoneId')) {
        obj['phoneId'] = ApiClient.convertToType(data['phoneId'], 'String');
      }
    }
    return obj;
  }


  /**
   * {{{controle_seguranca_dispositivo_id_usuario_descricao}}}
   * @member {Integer} idUsuario
   */
  exports.prototype['idUsuario'] = undefined;

  /**
   * {{{controle_seguranca_dispositivo_phone_id_descricao}}}
   * @member {String} phoneId
   */
  exports.prototype['phoneId'] = undefined;




  return exports;
}));
