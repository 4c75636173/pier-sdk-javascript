(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './TipoTransacaoAjusteResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TipoTransacaoAjusteResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.TipoAjusteResponse = factory(root.Pier.ApiClient, root.Pier.TipoTransacaoAjusteResponse);
  }
}(this, function(ApiClient, TipoTransacaoAjusteResponse) {
  'use strict';

  /**
   * The TipoAjusteResponse model module.
   * @module model/TipoAjusteResponse
   * @version 2.68.0
   */

  /**
   * Constructs a new <code>TipoAjusteResponse</code>.
   * {{{tipo_ajuste_response_description}}}
   * @alias module:model/TipoAjusteResponse
   * @class
   */
  var exports = function() {




  };

  /**
   * Constructs a <code>TipoAjusteResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TipoAjusteResponse} obj Optional instance to populate.
   * @return {module:model/TipoAjusteResponse} The populated <code>TipoAjusteResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('descricao')) {
        obj['descricao'] = ApiClient.convertToType(data['descricao'], 'String');
      }
      if (data.hasOwnProperty('transacoes')) {
        obj['transacoes'] = ApiClient.convertToType(data['transacoes'], [TipoTransacaoAjusteResponse]);
      }
    }
    return obj;
  }


  /**
   * {{{tipo_ajuste_response_id_value}}}
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * {{{tipo_ajuste_response_descricao_value}}}
   * @member {String} descricao
   */
  exports.prototype['descricao'] = undefined;

  /**
   * {{{tipo_ajuste_response_transacoes_value}}}
   * @member {Array.<module:model/TipoTransacaoAjusteResponse>} transacoes
   */
  exports.prototype['transacoes'] = undefined;




  return exports;
}));
