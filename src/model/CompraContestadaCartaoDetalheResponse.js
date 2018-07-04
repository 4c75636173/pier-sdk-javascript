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
    root.Pier.CompraContestadaCartaoDetalheResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CompraContestadaCartaoDetalheResponse model module.
   * @module model/CompraContestadaCartaoDetalheResponse
   * @version 2.66.1
   */

  /**
   * Constructs a new <code>CompraContestadaCartaoDetalheResponse</code>.
   * {{{compra_contestada_cartao_detalhe_response_description}}}
   * @alias module:model/CompraContestadaCartaoDetalheResponse
   * @class
   */
  var exports = function() {







  };

  /**
   * Constructs a <code>CompraContestadaCartaoDetalheResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CompraContestadaCartaoDetalheResponse} obj Optional instance to populate.
   * @return {module:model/CompraContestadaCartaoDetalheResponse} The populated <code>CompraContestadaCartaoDetalheResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('numeroCartao')) {
        obj['numeroCartao'] = ApiClient.convertToType(data['numeroCartao'], 'String');
      }
      if (data.hasOwnProperty('portador')) {
        obj['portador'] = ApiClient.convertToType(data['portador'], 'String');
      }
      if (data.hasOwnProperty('nomePlastico')) {
        obj['nomePlastico'] = ApiClient.convertToType(data['nomePlastico'], 'String');
      }
      if (data.hasOwnProperty('dataValidade')) {
        obj['dataValidade'] = ApiClient.convertToType(data['dataValidade'], 'Date');
      }
      if (data.hasOwnProperty('statusCartao')) {
        obj['statusCartao'] = ApiClient.convertToType(data['statusCartao'], 'String');
      }
      if (data.hasOwnProperty('statusCartaoDescricao')) {
        obj['statusCartaoDescricao'] = ApiClient.convertToType(data['statusCartaoDescricao'], 'String');
      }
    }
    return obj;
  }


  /**
   * {{{compra_contestada_cartao_detalhe_response_numero_cartao_value}}}
   * @member {String} numeroCartao
   */
  exports.prototype['numeroCartao'] = undefined;

  /**
   * {{{compra_contestada_cartao_detalhe_response_portador_value}}}
   * @member {String} portador
   */
  exports.prototype['portador'] = undefined;

  /**
   * {{{compra_contestada_cartao_detalhe_response_nome_plastico_value}}}
   * @member {String} nomePlastico
   */
  exports.prototype['nomePlastico'] = undefined;

  /**
   * {{{compra_contestada_cartao_detalhe_response_data_validade_value}}}
   * @member {Date} dataValidade
   */
  exports.prototype['dataValidade'] = undefined;

  /**
   * {{{compra_contestada_cartao_detalhe_response_status_cartao_value}}}
   * @member {String} statusCartao
   */
  exports.prototype['statusCartao'] = undefined;

  /**
   * {{{compra_contestada_cartao_detalhe_response_status_cartao_descricao_value}}}
   * @member {String} statusCartaoDescricao
   */
  exports.prototype['statusCartaoDescricao'] = undefined;




  return exports;
}));
