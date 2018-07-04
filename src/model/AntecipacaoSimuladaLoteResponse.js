(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './AntecipacaoSimuladaResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AntecipacaoSimuladaResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.AntecipacaoSimuladaLoteResponse = factory(root.Pier.ApiClient, root.Pier.AntecipacaoSimuladaResponse);
  }
}(this, function(ApiClient, AntecipacaoSimuladaResponse) {
  'use strict';

  /**
   * The AntecipacaoSimuladaLoteResponse model module.
   * @module model/AntecipacaoSimuladaLoteResponse
   * @version 2.66.1
   */

  /**
   * Constructs a new <code>AntecipacaoSimuladaLoteResponse</code>.
   * {{{antecipacao_simulada_lote_response_description}}}
   * @alias module:model/AntecipacaoSimuladaLoteResponse
   * @class
   */
  var exports = function() {





  };

  /**
   * Constructs a <code>AntecipacaoSimuladaLoteResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AntecipacaoSimuladaLoteResponse} obj Optional instance to populate.
   * @return {module:model/AntecipacaoSimuladaLoteResponse} The populated <code>AntecipacaoSimuladaLoteResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('valorTotalAntecipado')) {
        obj['valorTotalAntecipado'] = ApiClient.convertToType(data['valorTotalAntecipado'], 'Number');
      }
      if (data.hasOwnProperty('valorTotalDesconto')) {
        obj['valorTotalDesconto'] = ApiClient.convertToType(data['valorTotalDesconto'], 'Number');
      }
      if (data.hasOwnProperty('valorTotalComDesconto')) {
        obj['valorTotalComDesconto'] = ApiClient.convertToType(data['valorTotalComDesconto'], 'Number');
      }
      if (data.hasOwnProperty('antecipacoesSimuladas')) {
        obj['antecipacoesSimuladas'] = ApiClient.convertToType(data['antecipacoesSimuladas'], [AntecipacaoSimuladaResponse]);
      }
    }
    return obj;
  }


  /**
   * {{{antecipacao_simulada_lote_response_valor_total_antecipado_value}}}
   * @member {Number} valorTotalAntecipado
   */
  exports.prototype['valorTotalAntecipado'] = undefined;

  /**
   * {{{antecipacao_simulada_lote_response_valor_total_desconto_value}}}
   * @member {Number} valorTotalDesconto
   */
  exports.prototype['valorTotalDesconto'] = undefined;

  /**
   * {{{antecipacao_simulada_lote_response_valor_total_com_desconto_value}}}
   * @member {Number} valorTotalComDesconto
   */
  exports.prototype['valorTotalComDesconto'] = undefined;

  /**
   * {{{antecipacao_simulada_lote_response_antecipacoes_simuladas_value}}}
   * @member {Array.<module:model/AntecipacaoSimuladaResponse>} antecipacoesSimuladas
   */
  exports.prototype['antecipacoesSimuladas'] = undefined;




  return exports;
}));
