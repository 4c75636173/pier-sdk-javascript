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
    root.Pier.TipoFaturamentoPorContaResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TipoFaturamentoPorContaResponse model module.
   * @module model/TipoFaturamentoPorContaResponse
   * @version 2.54.5
   */

  /**
   * Constructs a new <code>TipoFaturamentoPorContaResponse</code>.
   * Objeto Faturamento
   * @alias module:model/TipoFaturamentoPorContaResponse
   * @class
   */
  var exports = function() {








  };

  /**
   * Constructs a <code>TipoFaturamentoPorContaResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TipoFaturamentoPorContaResponse} obj Optional instance to populate.
   * @return {module:model/TipoFaturamentoPorContaResponse} The populated <code>TipoFaturamentoPorContaResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('idConta')) {
        obj['idConta'] = ApiClient.convertToType(data['idConta'], 'Integer');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'Boolean');
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
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do tipo de faturamento por conta (id).
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta relacionada ao tipo de faturamento.
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * Status da configura\u00C3\u00A7\u00C3\u00A3o que representa que se o tipo de faturamento por conta est\u00C3\u00A1 ativo ou cancelado.
   * @member {Boolean} status
   */
  exports.prototype['status'] = undefined;

  /**
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da tipo de faturamento referenciado.
   * @member {Integer} idTipoFaturamento
   */
  exports.prototype['idTipoFaturamento'] = undefined;

  /**
   * Data de inclus\u00C3\u00A3o da configura\u00C3\u00A7\u00C3\u00A3o de tipo de faturamento por conta.
   * @member {String} dataHoraInclusao
   */
  exports.prototype['dataHoraInclusao'] = undefined;

  /**
   * Data de cancelamento da configura\u00C3\u00A7\u00C3\u00A3o de tipo de faturamento por conta.
   * @member {String} dataHoraCancelamento
   */
  exports.prototype['dataHoraCancelamento'] = undefined;

  /**
   * Descri\u00C3\u00A7\u00C3\u00A3o do respons\u00C3\u00A1vel pela \u00C3\u00BAltima modifica\u00C3\u00A7\u00C3\u00A3o da configura\u00C3\u00A7\u00C3\u00A3o.
   * @member {String} modificadoPor
   */
  exports.prototype['modificadoPor'] = undefined;




  return exports;
}));
