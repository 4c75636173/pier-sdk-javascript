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
    root.Pier.ControleSegurancaDispositivoResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ControleSegurancaDispositivoResponse model module.
   * @module model/ControleSegurancaDispositivoResponse
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>ControleSegurancaDispositivoResponse</code>.
   * {{{controle_seguranca_dispositivo_resposta_descricao}}}
   * @alias module:model/ControleSegurancaDispositivoResponse
   * @class
   */
  var exports = function() {




  };

  /**
   * Constructs a <code>ControleSegurancaDispositivoResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ControleSegurancaDispositivoResponse} obj Optional instance to populate.
   * @return {module:model/ControleSegurancaDispositivoResponse} The populated <code>ControleSegurancaDispositivoResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
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
   * {{{controle_seguranca_dispositivo_resposta_id_descricao}}}
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * {{{controle_seguranca_dispositivo_resposta_id_usuario_descricao}}}
   * @member {Integer} idUsuario
   */
  exports.prototype['idUsuario'] = undefined;

  /**
   * {{{controle_seguranca_dispositivo_resposta_phone_id_descricao}}}
   * @member {String} phoneId
   */
  exports.prototype['phoneId'] = undefined;




  return exports;
}));
