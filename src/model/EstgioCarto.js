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
    root.Pier.EstgioCarto = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The EstgioCarto model module.
   * @module model/EstgioCarto
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>EstgioCarto</code>.
   * Representa\u00C3\u00A7\u00C3\u00A3o do recurso Est\u00C3\u00A1gio Cart\u00C3\u00A3o
   * @alias module:model/EstgioCarto
   * @class
   * @param cancelaConta
   * @param id
   * @param idStatusDestinoDesbloqueio
   * @param nome
   * @param permiteDesbloqueio
   */
  var exports = function(cancelaConta, id, idStatusDestinoDesbloqueio, nome, permiteDesbloqueio) {

    this['cancelaConta'] = cancelaConta;
    this['id'] = id;
    this['idStatusDestinoDesbloqueio'] = idStatusDestinoDesbloqueio;
    this['nome'] = nome;
    this['permiteDesbloqueio'] = permiteDesbloqueio;
  };

  /**
   * Constructs a <code>EstgioCarto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EstgioCarto} obj Optional instance to populate.
   * @return {module:model/EstgioCarto} The populated <code>EstgioCarto</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('cancelaConta')) {
        obj['cancelaConta'] = ApiClient.convertToType(data['cancelaConta'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('idStatusDestinoDesbloqueio')) {
        obj['idStatusDestinoDesbloqueio'] = ApiClient.convertToType(data['idStatusDestinoDesbloqueio'], 'Integer');
      }
      if (data.hasOwnProperty('nome')) {
        obj['nome'] = ApiClient.convertToType(data['nome'], 'String');
      }
      if (data.hasOwnProperty('permiteDesbloqueio')) {
        obj['permiteDesbloqueio'] = ApiClient.convertToType(data['permiteDesbloqueio'], 'String');
      }
    }
    return obj;
  }


  /**
   * Indica que Cart\u00C3\u00B5es com este idStatusCartao devem ter a sua conta Cancelada, sendo: (0 = N\u00C3\u00A3o Cancelar) e  (1 = Cancelar Conta).
   * @member {String} cancelaConta
   */
  exports.prototype['cancelaConta'] = undefined;

  /**
   * C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Status do Cart\u00C3\u00A3o (id).
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * Indica qual o idStatusCartao que deve ser atribu\u00C3\u00ADdo a um idCartao quando ele for desbloqueado.
   * @member {Integer} idStatusDestinoDesbloqueio
   */
  exports.prototype['idStatusDestinoDesbloqueio'] = undefined;

  /**
   * Nome atribu\u00C3\u00ADdo ao Status de Entrega do Cart\u00C3\u00A3o.
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;

  /**
   * Indica que Cart\u00C3\u00B5es com este idStatusCartao podem ser Desbloqueados, sendo: (0 = N\u00C3\u00A3o Permitido) e  (1 = Permitido).
   * @member {String} permiteDesbloqueio
   */
  exports.prototype['permiteDesbloqueio'] = undefined;




  return exports;
}));
