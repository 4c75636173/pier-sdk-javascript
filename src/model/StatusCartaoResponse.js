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
   * @version 2.57.0
   */

  /**
   * Constructs a new <code>StatusCartaoResponse</code>.
   * Representa\u00E7\u00E3o do recurso Status Cart\u00E3o
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
   * C\u00F3digo de Identifica\u00E7\u00E3o do Status do Cart\u00E3o (id) 
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * Nome atribu\u00EDdo ao Status de Entrega do Cart\u00E3o.
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;

  /**
   * Par\u00E2metro que define se o status do cart\u00E3o permite a reativa\u00E7\u00E3o do cart\u00E3o, sendo: 0: Inativo e 1: Ativo.
   * @member {Integer} permiteDesbloquear
   */
  exports.prototype['permiteDesbloquear'] = undefined;

  /**
   * Par\u00E2metro que define se o status do cart\u00E3o permite a reativa\u00E7\u00E3o do cart\u00E3o, sendo: 0: Inativo e 1: Ativo.
   * @member {Integer} permiteAtribuirComoBloqueio
   */
  exports.prototype['permiteAtribuirComoBloqueio'] = undefined;

  /**
   * Par\u00E2metro que define se o status do cart\u00E3o permite a reativa\u00E7\u00E3o do cart\u00E3o, sendo: 0: Inativo e 1: Ativo.
   * @member {Integer} permiteAtribuirComoCancelamento
   */
  exports.prototype['permiteAtribuirComoCancelamento'] = undefined;

  /**
   * Par\u00E2metro que define se o status do cart\u00E3o permite a reativa\u00E7\u00E3o do cart\u00E3o, sendo: 0: Inativo e 1: Ativo.
   * @member {Integer} cobrarTarifaAoEmitirNovaVia
   */
  exports.prototype['cobrarTarifaAoEmitirNovaVia'] = undefined;




  return exports;
}));
