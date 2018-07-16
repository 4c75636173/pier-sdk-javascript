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
    root.Pier.CompraContestadaCartaoResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CompraContestadaCartaoResponse model module.
   * @module model/CompraContestadaCartaoResponse
   * @version 2.68.0
   */

  /**
   * Constructs a new <code>CompraContestadaCartaoResponse</code>.
   * {{{compra_contestada_cartao_response_description}}}
   * @alias module:model/CompraContestadaCartaoResponse
   * @class
   */
  var exports = function() {






  };

  /**
   * Constructs a <code>CompraContestadaCartaoResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CompraContestadaCartaoResponse} obj Optional instance to populate.
   * @return {module:model/CompraContestadaCartaoResponse} The populated <code>CompraContestadaCartaoResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('idCartao')) {
        obj['idCartao'] = ApiClient.convertToType(data['idCartao'], 'Integer');
      }
      if (data.hasOwnProperty('agingContestacao')) {
        obj['agingContestacao'] = ApiClient.convertToType(data['agingContestacao'], 'Integer');
      }
      if (data.hasOwnProperty('cartao')) {
        obj['cartao'] = ApiClient.convertToType(data['cartao'], 'String');
      }
      if (data.hasOwnProperty('nome')) {
        obj['nome'] = ApiClient.convertToType(data['nome'], 'String');
      }
      if (data.hasOwnProperty('bandeira')) {
        obj['bandeira'] = ApiClient.convertToType(data['bandeira'], 'String');
      }
    }
    return obj;
  }


  /**
   * {{{compra_contestada_cartao_response_id_cartao_value}}}
   * @member {Integer} idCartao
   */
  exports.prototype['idCartao'] = undefined;

  /**
   * {{{compra_contestada_cartao_response_aging_contestacao_value}}}
   * @member {Integer} agingContestacao
   */
  exports.prototype['agingContestacao'] = undefined;

  /**
   * {{{compra_contestada_cartao_response_cartao_value}}}
   * @member {String} cartao
   */
  exports.prototype['cartao'] = undefined;

  /**
   * {{{compra_contestada_cartao_response_nome_value}}}
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;

  /**
   * {{{compra_contestada_cartao_response_bandeira_value}}}
   * @member {String} bandeira
   */
  exports.prototype['bandeira'] = undefined;




  return exports;
}));
