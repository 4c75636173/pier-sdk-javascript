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
    root.Pier.HistoricoImpressaoCartaoResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The HistoricoImpressaoCartaoResponse model module.
   * @module model/HistoricoImpressaoCartaoResponse
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>HistoricoImpressaoCartaoResponse</code>.
   * {{{historico_impressao_cartao_response_description}}}
   * @alias module:model/HistoricoImpressaoCartaoResponse
   * @class
   * @param id
   * @param idCartao
   * @param idStatusImpressaoCartao
   */
  var exports = function(id, idCartao, idStatusImpressaoCartao) {

    this['id'] = id;
    this['idCartao'] = idCartao;
    this['idStatusImpressaoCartao'] = idStatusImpressaoCartao;


  };

  /**
   * Constructs a <code>HistoricoImpressaoCartaoResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HistoricoImpressaoCartaoResponse} obj Optional instance to populate.
   * @return {module:model/HistoricoImpressaoCartaoResponse} The populated <code>HistoricoImpressaoCartaoResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('idCartao')) {
        obj['idCartao'] = ApiClient.convertToType(data['idCartao'], 'Integer');
      }
      if (data.hasOwnProperty('idStatusImpressaoCartao')) {
        obj['idStatusImpressaoCartao'] = ApiClient.convertToType(data['idStatusImpressaoCartao'], 'Integer');
      }
      if (data.hasOwnProperty('mensagemHistorico')) {
        obj['mensagemHistorico'] = ApiClient.convertToType(data['mensagemHistorico'], 'String');
      }
      if (data.hasOwnProperty('dataHistorico')) {
        obj['dataHistorico'] = ApiClient.convertToType(data['dataHistorico'], 'String');
      }
    }
    return obj;
  }


  /**
   * {{{historico_impressao_cartao_response_id_value}}}
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * {{{historico_impressao_cartao_response_id_cartao_value}}}
   * @member {Integer} idCartao
   */
  exports.prototype['idCartao'] = undefined;

  /**
   * {{{historico_impressao_cartao_response_id_status_impressao_cartao_value}}}
   * @member {Integer} idStatusImpressaoCartao
   */
  exports.prototype['idStatusImpressaoCartao'] = undefined;

  /**
   * {{{historico_impressao_cartao_response_mensagem_historico_value}}}
   * @member {String} mensagemHistorico
   */
  exports.prototype['mensagemHistorico'] = undefined;

  /**
   * {{{historico_impressao_cartao_response_data_historico_value}}}
   * @member {String} dataHistorico
   */
  exports.prototype['dataHistorico'] = undefined;




  return exports;
}));
