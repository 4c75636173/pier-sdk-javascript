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
    root.Pier.ContaDebitoRecorrentePersistValue = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ContaDebitoRecorrentePersistValue model module.
   * @module model/ContaDebitoRecorrentePersistValue
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>ContaDebitoRecorrentePersistValue</code>.
   * {{{conta_debito_recorrente_persist_description}}}
   * @alias module:model/ContaDebitoRecorrentePersistValue
   * @class
   */
  var exports = function() {






  };

  /**
   * Constructs a <code>ContaDebitoRecorrentePersistValue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ContaDebitoRecorrentePersistValue} obj Optional instance to populate.
   * @return {module:model/ContaDebitoRecorrentePersistValue} The populated <code>ContaDebitoRecorrentePersistValue</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('idConta')) {
        obj['idConta'] = ApiClient.convertToType(data['idConta'], 'Integer');
      }
      if (data.hasOwnProperty('idTipoDebitoRecorrente')) {
        obj['idTipoDebitoRecorrente'] = ApiClient.convertToType(data['idTipoDebitoRecorrente'], 'Integer');
      }
      if (data.hasOwnProperty('idUsuario')) {
        obj['idUsuario'] = ApiClient.convertToType(data['idUsuario'], 'Integer');
      }
      if (data.hasOwnProperty('login')) {
        obj['login'] = ApiClient.convertToType(data['login'], 'String');
      }
      if (data.hasOwnProperty('numeroParcelas')) {
        obj['numeroParcelas'] = ApiClient.convertToType(data['numeroParcelas'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * {{{conta_debito_recorrente_persist_id_conta_value}}}
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * {{{conta_debito_recorrente_persist_id_tipo_debito_recorrente_value}}}
   * @member {Integer} idTipoDebitoRecorrente
   */
  exports.prototype['idTipoDebitoRecorrente'] = undefined;

  /**
   * {{{conta_debito_recorrente_persist_id_usuario_value}}}
   * @member {Integer} idUsuario
   */
  exports.prototype['idUsuario'] = undefined;

  /**
   * {{{conta_debito_recorrente_persist_login_value}}}
   * @member {String} login
   */
  exports.prototype['login'] = undefined;

  /**
   * {{{conta_debito_recorrente_persist_num_parcelas_value}}}
   * @member {Integer} numeroParcelas
   */
  exports.prototype['numeroParcelas'] = undefined;




  return exports;
}));
