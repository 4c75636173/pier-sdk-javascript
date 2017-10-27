(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './AntecipacaoSimuladaMockResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AntecipacaoSimuladaMockResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.AntecipacaoSimuladaLoteResponse = factory(root.Pier.ApiClient, root.Pier.AntecipacaoSimuladaMockResponse);
  }
}(this, function(ApiClient, AntecipacaoSimuladaMockResponse) {
  'use strict';

  /**
   * The AntecipacaoSimuladaLoteResponse model module.
   * @module model/AntecipacaoSimuladaLoteResponse
   * @version 2.43.0
   */

  /**
   * Constructs a new <code>AntecipacaoSimuladaLoteResponse</code>.
   * Representa\u00C3\u00A7\u00C3\u00A3o da resposta do recurso Antecipacao Simulada
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
        obj['antecipacoesSimuladas'] = ApiClient.convertToType(data['antecipacoesSimuladas'], [AntecipacaoSimuladaMockResponse]);
      }
    }
    return obj;
  }


  /**
   * Valor total antecipado.
   * @member {Number} valorTotalAntecipado
   */
  exports.prototype['valorTotalAntecipado'] = undefined;

  /**
   * Valor total do desconto.
   * @member {Number} valorTotalDesconto
   */
  exports.prototype['valorTotalDesconto'] = undefined;

  /**
   * Valor total antecipado com o desconto.
   * @member {Number} valorTotalComDesconto
   */
  exports.prototype['valorTotalComDesconto'] = undefined;

  /**
   * Antecipa\u00C3\u00A7\u00C3\u00B5es Simuladas.
   * @member {Array.<module:model/AntecipacaoSimuladaMockResponse>} antecipacoesSimuladas
   */
  exports.prototype['antecipacoesSimuladas'] = undefined;




  return exports;
}));
