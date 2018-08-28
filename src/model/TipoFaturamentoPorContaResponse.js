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
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>TipoFaturamentoPorContaResponse</code>.
   * {{{tipo_faturamento_por_conta_response_description}}}
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
      if (data.hasOwnProperty('ativo')) {
        obj['ativo'] = ApiClient.convertToType(data['ativo'], 'Boolean');
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
   * {{{tipo_faturamento_por_conta_response_id_value}}}
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * {{{tipo_faturamento_por_conta_response_id_conta_value}}}
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * {{{tipo_faturamento_por_conta_response_status_value}}}
   * @member {Boolean} ativo
   */
  exports.prototype['ativo'] = undefined;

  /**
   * {{{tipo_faturamento_por_conta_response_id_tipo_faturamento_value}}}
   * @member {Integer} idTipoFaturamento
   */
  exports.prototype['idTipoFaturamento'] = undefined;

  /**
   * {{{tipo_faturamento_por_conta_response_data_hora_inclusao_value}}}
   * @member {String} dataHoraInclusao
   */
  exports.prototype['dataHoraInclusao'] = undefined;

  /**
   * {{{tipo_faturamento_por_conta_response_data_hora_cancelamento_value}}}
   * @member {String} dataHoraCancelamento
   */
  exports.prototype['dataHoraCancelamento'] = undefined;

  /**
   * {{{tipo_faturamento_por_conta_response_modificado_por_value}}}
   * @member {String} modificadoPor
   */
  exports.prototype['modificadoPor'] = undefined;




  return exports;
}));
