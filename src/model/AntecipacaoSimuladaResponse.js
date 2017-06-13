(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './AntecipacaoSimuladaDetalhesResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AntecipacaoSimuladaDetalhesResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.AntecipacaoSimuladaResponse = factory(root.Pier.ApiClient, root.Pier.AntecipacaoSimuladaDetalhesResponse);
  }
}(this, function(ApiClient, AntecipacaoSimuladaDetalhesResponse) {
  'use strict';

  /**
   * The AntecipacaoSimuladaResponse model module.
   * @module model/AntecipacaoSimuladaResponse
   * @version 2.16.2
   */

  /**
   * Constructs a new <code>AntecipacaoSimuladaResponse</code>.
   * Representa\u00C3\u00A7\u00C3\u00A3o da resposta do recurso Antecipacao Simulada
   * @alias module:model/AntecipacaoSimuladaResponse
   * @class
   */
  var exports = function() {






  };

  /**
   * Constructs a <code>AntecipacaoSimuladaResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AntecipacaoSimuladaResponse} obj Optional instance to populate.
   * @return {module:model/AntecipacaoSimuladaResponse} The populated <code>AntecipacaoSimuladaResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('idSimulacao')) {
        obj['idSimulacao'] = ApiClient.convertToType(data['idSimulacao'], 'Integer');
      }
      if (data.hasOwnProperty('idCompra')) {
        obj['idCompra'] = ApiClient.convertToType(data['idCompra'], 'Integer');
      }
      if (data.hasOwnProperty('idConta')) {
        obj['idConta'] = ApiClient.convertToType(data['idConta'], 'Integer');
      }
      if (data.hasOwnProperty('dataHoraSimulacao')) {
        obj['dataHoraSimulacao'] = ApiClient.convertToType(data['dataHoraSimulacao'], 'String');
      }
      if (data.hasOwnProperty('detalhes')) {
        obj['detalhes'] = ApiClient.convertToType(data['detalhes'], [AntecipacaoSimuladaDetalhesResponse]);
      }
    }
    return obj;
  }


  /**
   * C\u00C3\u00B3digo identificador da simula\u00C3\u00A7\u00C3\u00A3o de antecipa\u00C3\u00A7\u00C3\u00A3o.
   * @member {Integer} idSimulacao
   */
  exports.prototype['idSimulacao'] = undefined;

  /**
   * C\u00C3\u00B3digo identificador da compra.
   * @member {Integer} idCompra
   */
  exports.prototype['idCompra'] = undefined;

  /**
   * C\u00C3\u00B3digo identificador da conta.
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * Data e hora em que a simula\u00C3\u00A7\u00C3\u00A3o foi feita.
   * @member {String} dataHoraSimulacao
   */
  exports.prototype['dataHoraSimulacao'] = undefined;

  /**
   * Detalhes da simula\u00C3\u00A7\u00C3\u00A3o.
   * @member {Array.<module:model/AntecipacaoSimuladaDetalhesResponse>} detalhes
   */
  exports.prototype['detalhes'] = undefined;




  return exports;
}));
