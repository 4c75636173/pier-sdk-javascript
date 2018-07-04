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
    root.Pier.DetalheAjusteLoteResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DetalheAjusteLoteResponse model module.
   * @module model/DetalheAjusteLoteResponse
   * @version 2.66.1
   */

  /**
   * Constructs a new <code>DetalheAjusteLoteResponse</code>.
   * {{{detalhe_ajuste_lote_response_description}}}
   * @alias module:model/DetalheAjusteLoteResponse
   * @class
   */
  var exports = function() {












  };

  /**
   * Constructs a <code>DetalheAjusteLoteResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DetalheAjusteLoteResponse} obj Optional instance to populate.
   * @return {module:model/DetalheAjusteLoteResponse} The populated <code>DetalheAjusteLoteResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('arquivoId')) {
        obj['arquivoId'] = ApiClient.convertToType(data['arquivoId'], 'Integer');
      }
      if (data.hasOwnProperty('tipoAjusteDescricao')) {
        obj['tipoAjusteDescricao'] = ApiClient.convertToType(data['tipoAjusteDescricao'], 'String');
      }
      if (data.hasOwnProperty('idConta')) {
        obj['idConta'] = ApiClient.convertToType(data['idConta'], 'Integer');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('dataTransacao')) {
        obj['dataTransacao'] = ApiClient.convertToType(data['dataTransacao'], 'Date');
      }
      if (data.hasOwnProperty('valorTotalTransacao')) {
        obj['valorTotalTransacao'] = ApiClient.convertToType(data['valorTotalTransacao'], 'String');
      }
      if (data.hasOwnProperty('tipoOperacao')) {
        obj['tipoOperacao'] = ApiClient.convertToType(data['tipoOperacao'], 'String');
      }
      if (data.hasOwnProperty('dataProcessamento')) {
        obj['dataProcessamento'] = ApiClient.convertToType(data['dataProcessamento'], 'Date');
      }
      if (data.hasOwnProperty('numeroLinha')) {
        obj['numeroLinha'] = ApiClient.convertToType(data['numeroLinha'], 'Integer');
      }
      if (data.hasOwnProperty('descricaoStatus')) {
        obj['descricaoStatus'] = ApiClient.convertToType(data['descricaoStatus'], 'String');
      }
    }
    return obj;
  }


  /**
   * {{{detalhe_ajuste_lote_response_id_value}}}
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * {{{detalhe_ajuste_lote_response_arquivoId_value}}}
   * @member {Integer} arquivoId
   */
  exports.prototype['arquivoId'] = undefined;

  /**
   * {{{detalhe_ajuste_lote_response_idTipoAjuste_value}}}
   * @member {String} tipoAjusteDescricao
   */
  exports.prototype['tipoAjusteDescricao'] = undefined;

  /**
   * {{{detalhe_ajuste_lote_response_idConta_value}}}
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * {{{detalhe_ajuste_lote_response_Status_value}}}
   * @member {String} status
   */
  exports.prototype['status'] = undefined;

  /**
   * {{{detalhe_ajuste_lote_response_dataTransacao_value}}}
   * @member {Date} dataTransacao
   */
  exports.prototype['dataTransacao'] = undefined;

  /**
   * {{{detalhe_ajuste_lote_response_valorTransacao_value}}}
   * @member {String} valorTotalTransacao
   */
  exports.prototype['valorTotalTransacao'] = undefined;

  /**
   * {{{detalhe_ajuste_lote_response_tipoRegistro_value}}}
   * @member {String} tipoOperacao
   */
  exports.prototype['tipoOperacao'] = undefined;

  /**
   * {{{detalhe_ajuste_lote_response_dataProcessamento_value}}}
   * @member {Date} dataProcessamento
   */
  exports.prototype['dataProcessamento'] = undefined;

  /**
   * {{{detalhe_ajuste_lote_response_numeroLinha_value}}}
   * @member {Integer} numeroLinha
   */
  exports.prototype['numeroLinha'] = undefined;

  /**
   * {{{detalhe_ajuste_lote_response_descricaoStatus_value}}}
   * @member {String} descricaoStatus
   */
  exports.prototype['descricaoStatus'] = undefined;




  return exports;
}));
