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
    root.Pier.TipoFaturamentoPorContaPersist = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TipoFaturamentoPorContaPersist model module.
   * @module model/TipoFaturamentoPorContaPersist
   * @version 2.54.4
   */

  /**
   * Constructs a new <code>TipoFaturamentoPorContaPersist</code>.
   * TipoFaturamentoPorContaPersist
   * @alias module:model/TipoFaturamentoPorContaPersist
   * @class
   * @param status
   * @param idConta
   * @param idTipoFaturamento
   * @param modificadoPor
   */
  var exports = function(status, idConta, idTipoFaturamento, modificadoPor) {

    this['status'] = status;
    this['idConta'] = idConta;
    this['idTipoFaturamento'] = idTipoFaturamento;


    this['modificadoPor'] = modificadoPor;
  };

  /**
   * Constructs a <code>TipoFaturamentoPorContaPersist</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TipoFaturamentoPorContaPersist} obj Optional instance to populate.
   * @return {module:model/TipoFaturamentoPorContaPersist} The populated <code>TipoFaturamentoPorContaPersist</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'Boolean');
      }
      if (data.hasOwnProperty('idConta')) {
        obj['idConta'] = ApiClient.convertToType(data['idConta'], 'Integer');
      }
      if (data.hasOwnProperty('idTipoFaturamento')) {
        obj['idTipoFaturamento'] = ApiClient.convertToType(data['idTipoFaturamento'], 'Integer');
      }
      if (data.hasOwnProperty('dataHoraInclusao')) {
        obj['dataHoraInclusao'] = ApiClient.convertToType(data['dataHoraInclusao'], 'String');
      }
      if (data.hasOwnProperty('dataHoraCancelamento')) {
        obj['dataHoraCancelamento'] = ApiClient.convertToType(data['dataHoraCancelamento'], 'String');
      }
      if (data.hasOwnProperty('modificadoPor')) {
        obj['modificadoPor'] = ApiClient.convertToType(data['modificadoPor'], 'String');
      }
    }
    return obj;
  }


  /**
   * Representa se a configura\u00C3\u00A7\u00C3\u00A3o est\u00C3\u00A1 ativada ou desativada para a conta.
   * @member {Boolean} status
   */
  exports.prototype['status'] = undefined;

  /**
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta relacionada.
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do tipo de faturamento relacionada.
   * @member {Integer} idTipoFaturamento
   */
  exports.prototype['idTipoFaturamento'] = undefined;

  /**
   * Data da inclus\u00C3\u00A3o da configura\u00C3\u00A7\u00C3\u00A3o, deve ser informada no formato yyyy-MM-dd'T'HH:mm:ss.SSS'Z'.
   * @member {String} dataHoraInclusao
   */
  exports.prototype['dataHoraInclusao'] = undefined;

  /**
   * Data do cancelamento da configura\u00C3\u00A7\u00C3\u00A3o, deve ser informada no formato yyyy-MM-dd'T'HH:mm:ss.SSS'Z'.
   * @member {String} dataHoraCancelamento
   */
  exports.prototype['dataHoraCancelamento'] = undefined;

  /**
   * Identificador do respons\u00C3\u00A1vel pela modifica\u00C3\u00A7\u00C3\u00A3o do registro.
   * @member {String} modificadoPor
   */
  exports.prototype['modificadoPor'] = undefined;




  return exports;
}));
