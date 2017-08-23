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
   * @version 2.28.3
   */

  /**
   * Constructs a new <code>AntecipacaoSimuladaDetalhesResponse</code>.
   * Representa\u00C3\u00A7\u00C3\u00A3o da resposta dos detalhes do recurso Antecipacao Simulada
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
   * Quantidade de parcelas do plano de parcelamento simulado.
   * @member {Integer} quantidadeParcelas
   */
  exports.prototype['quantidadeParcelas'] = undefined;

  /**
   * Valor total das parcelas do plano de parcelamento.
   * @member {Number} valorParcelas
   */
  exports.prototype['valorParcelas'] = undefined;

  /**
   * Valor do desconto para o plano de parcelamento.
   * @member {Number} valorDesconto
   */
  exports.prototype['valorDesconto'] = undefined;

  /**
   * Valor total da parcela ap\u00C3\u00B3s a aplica\u00C3\u00A7\u00C3\u00A3o do desconto.
   * @member {Number} valorParcelasDesconto
   */
  exports.prototype['valorParcelasDesconto'] = undefined;




  return exports;
}));
