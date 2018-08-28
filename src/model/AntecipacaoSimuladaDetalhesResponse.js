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
    root.Pier.AntecipacaoSimuladaDetalhesResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AntecipacaoSimuladaDetalhesResponse model module.
   * @module model/AntecipacaoSimuladaDetalhesResponse
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>AntecipacaoSimuladaDetalhesResponse</code>.
   * {{{antecipacao_simulada_detalhes_response_description}}}
   * @alias module:model/AntecipacaoSimuladaDetalhesResponse
   * @class
   */
  var exports = function() {





  };

  /**
   * Constructs a <code>AntecipacaoSimuladaDetalhesResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AntecipacaoSimuladaDetalhesResponse} obj Optional instance to populate.
   * @return {module:model/AntecipacaoSimuladaDetalhesResponse} The populated <code>AntecipacaoSimuladaDetalhesResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('quantidadeParcelas')) {
        obj['quantidadeParcelas'] = ApiClient.convertToType(data['quantidadeParcelas'], 'Integer');
      }
      if (data.hasOwnProperty('valorParcelas')) {
        obj['valorParcelas'] = ApiClient.convertToType(data['valorParcelas'], 'Number');
      }
      if (data.hasOwnProperty('valorDesconto')) {
        obj['valorDesconto'] = ApiClient.convertToType(data['valorDesconto'], 'Number');
      }
      if (data.hasOwnProperty('valorParcelasDesconto')) {
        obj['valorParcelasDesconto'] = ApiClient.convertToType(data['valorParcelasDesconto'], 'Number');
      }
    }
    return obj;
  }


  /**
   * {{{antecipacao_simulada_detalhes_response_quantidade_parcelas_value}}}
   * @member {Integer} quantidadeParcelas
   */
  exports.prototype['quantidadeParcelas'] = undefined;

  /**
   * {{{antecipacao_simulada_detalhes_response_valor_parcelas_value}}}
   * @member {Number} valorParcelas
   */
  exports.prototype['valorParcelas'] = undefined;

  /**
   * {{{antecipacao_simulada_detalhes_response_valor_desconto_value}}}
   * @member {Number} valorDesconto
   */
  exports.prototype['valorDesconto'] = undefined;

  /**
   * {{{antecipacao_simulada_detalhes_response_valor_parcelas_desconto_value}}}
   * @member {Number} valorParcelasDesconto
   */
  exports.prototype['valorParcelasDesconto'] = undefined;




  return exports;
}));
