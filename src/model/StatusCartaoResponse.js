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
    root.Pier.StatusCartaoResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The StatusCartaoResponse model module.
   * @module model/StatusCartaoResponse
   * @version 2.66.1
   */

  /**
   * Constructs a new <code>StatusCartaoResponse</code>.
   * {{{status_cartao_response_description}}}
   * @alias module:model/StatusCartaoResponse
   * @class
   * @param id
   * @param nome
   */
  var exports = function(id, nome) {

    this['id'] = id;
    this['nome'] = nome;




  };

  /**
   * Constructs a <code>StatusCartaoResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StatusCartaoResponse} obj Optional instance to populate.
   * @return {module:model/StatusCartaoResponse} The populated <code>StatusCartaoResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('nome')) {
        obj['nome'] = ApiClient.convertToType(data['nome'], 'String');
      }
      if (data.hasOwnProperty('permiteDesbloquear')) {
        obj['permiteDesbloquear'] = ApiClient.convertToType(data['permiteDesbloquear'], 'Integer');
      }
      if (data.hasOwnProperty('permiteAtribuirComoBloqueio')) {
        obj['permiteAtribuirComoBloqueio'] = ApiClient.convertToType(data['permiteAtribuirComoBloqueio'], 'Integer');
      }
      if (data.hasOwnProperty('permiteAtribuirComoCancelamento')) {
        obj['permiteAtribuirComoCancelamento'] = ApiClient.convertToType(data['permiteAtribuirComoCancelamento'], 'Integer');
      }
      if (data.hasOwnProperty('cobrarTarifaAoEmitirNovaVia')) {
        obj['cobrarTarifaAoEmitirNovaVia'] = ApiClient.convertToType(data['cobrarTarifaAoEmitirNovaVia'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * {{{status_cartao_response_id_value}}}
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * {{{status_cartao_response_nome_value}}}
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;

  /**
   * {{{status_cartao_response_permite_desbloquear_value}}}
   * @member {Integer} permiteDesbloquear
   */
  exports.prototype['permiteDesbloquear'] = undefined;

  /**
   * {{{status_cartao_response_permite_atribuir_como_bloqueio_value}}}
   * @member {Integer} permiteAtribuirComoBloqueio
   */
  exports.prototype['permiteAtribuirComoBloqueio'] = undefined;

  /**
   * {{{status_cartao_response_permite_atribuir_como_cancelamento_value}}}
   * @member {Integer} permiteAtribuirComoCancelamento
   */
  exports.prototype['permiteAtribuirComoCancelamento'] = undefined;

  /**
   * {{{status_cartao_response_cobrar_tarifa_ao_emitir_nova_via_value}}}
   * @member {Integer} cobrarTarifaAoEmitirNovaVia
   */
  exports.prototype['cobrarTarifaAoEmitirNovaVia'] = undefined;




  return exports;
}));
