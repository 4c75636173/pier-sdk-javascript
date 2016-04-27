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
    root.Pier.SaldoLimiteResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The SaldoLimiteResponse model module.
   * @module model/SaldoLimiteResponse
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>SaldoLimiteResponse</code>.
   * @alias module:model/SaldoLimiteResponse
   * @class
   */
  var exports = function() {

































  };

  /**
   * Constructs a <code>SaldoLimiteResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SaldoLimiteResponse} obj Optional instance to populate.
   * @return {module:model/SaldoLimiteResponse} The populated <code>SaldoLimiteResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('disponibCompraNac')) {
        obj['disponibCompraNac'] = ApiClient.convertToType(data['disponibCompraNac'], 'Number');
      }
      if (data.hasOwnProperty('disponibGlobalCredito')) {
        obj['disponibGlobalCredito'] = ApiClient.convertToType(data['disponibGlobalCredito'], 'Number');
      }
      if (data.hasOwnProperty('disponibParceladoNac')) {
        obj['disponibParceladoNac'] = ApiClient.convertToType(data['disponibParceladoNac'], 'Number');
      }
      if (data.hasOwnProperty('disponibParcelasNac')) {
        obj['disponibParcelasNac'] = ApiClient.convertToType(data['disponibParcelasNac'], 'Number');
      }
      if (data.hasOwnProperty('disponibSaqueNacGlobal')) {
        obj['disponibSaqueNacGlobal'] = ApiClient.convertToType(data['disponibSaqueNacGlobal'], 'Number');
      }
      if (data.hasOwnProperty('flagAntecipacao')) {
        obj['flagAntecipacao'] = ApiClient.convertToType(data['flagAntecipacao'], 'Boolean');
      }
      if (data.hasOwnProperty('limiteCompraNac')) {
        obj['limiteCompraNac'] = ApiClient.convertToType(data['limiteCompraNac'], 'Number');
      }
      if (data.hasOwnProperty('limiteCreditoConcedido')) {
        obj['limiteCreditoConcedido'] = ApiClient.convertToType(data['limiteCreditoConcedido'], 'Number');
      }
      if (data.hasOwnProperty('limiteCreditoDisponivel')) {
        obj['limiteCreditoDisponivel'] = ApiClient.convertToType(data['limiteCreditoDisponivel'], 'Number');
      }
      if (data.hasOwnProperty('limiteGlobalCredito')) {
        obj['limiteGlobalCredito'] = ApiClient.convertToType(data['limiteGlobalCredito'], 'Number');
      }
      if (data.hasOwnProperty('limiteParceladoNac')) {
        obj['limiteParceladoNac'] = ApiClient.convertToType(data['limiteParceladoNac'], 'Number');
      }
      if (data.hasOwnProperty('limiteParcelasNac')) {
        obj['limiteParcelasNac'] = ApiClient.convertToType(data['limiteParcelasNac'], 'Number');
      }
      if (data.hasOwnProperty('limitePontuacao')) {
        obj['limitePontuacao'] = ApiClient.convertToType(data['limitePontuacao'], 'Number');
      }
      if (data.hasOwnProperty('limiteSaqueNacGlobal')) {
        obj['limiteSaqueNacGlobal'] = ApiClient.convertToType(data['limiteSaqueNacGlobal'], 'Number');
      }
      if (data.hasOwnProperty('numeroCiclo')) {
        obj['numeroCiclo'] = ApiClient.convertToType(data['numeroCiclo'], 'Integer');
      }
      if (data.hasOwnProperty('pontosConcedidos')) {
        obj['pontosConcedidos'] = ApiClient.convertToType(data['pontosConcedidos'], 'Number');
      }
      if (data.hasOwnProperty('pontosRemanescentes')) {
        obj['pontosRemanescentes'] = ApiClient.convertToType(data['pontosRemanescentes'], 'Number');
      }
      if (data.hasOwnProperty('proximoVencimentoPadrao')) {
        obj['proximoVencimentoPadrao'] = ApiClient.convertToType(data['proximoVencimentoPadrao'], 'String');
      }
      if (data.hasOwnProperty('proximoVencimentoReal')) {
        obj['proximoVencimentoReal'] = ApiClient.convertToType(data['proximoVencimentoReal'], 'String');
      }
      if (data.hasOwnProperty('saldoAtualFinal')) {
        obj['saldoAtualFinal'] = ApiClient.convertToType(data['saldoAtualFinal'], 'Number');
      }
      if (data.hasOwnProperty('saldoCredor')) {
        obj['saldoCredor'] = ApiClient.convertToType(data['saldoCredor'], 'Number');
      }
      if (data.hasOwnProperty('saldoDevedor')) {
        obj['saldoDevedor'] = ApiClient.convertToType(data['saldoDevedor'], 'Number');
      }
      if (data.hasOwnProperty('saldoDevedorOneroso')) {
        obj['saldoDevedorOneroso'] = ApiClient.convertToType(data['saldoDevedorOneroso'], 'Number');
      }
      if (data.hasOwnProperty('saldoDevedorTotal')) {
        obj['saldoDevedorTotal'] = ApiClient.convertToType(data['saldoDevedorTotal'], 'Number');
      }
      if (data.hasOwnProperty('saltaExtratoAnterior')) {
        obj['saltaExtratoAnterior'] = ApiClient.convertToType(data['saltaExtratoAnterior'], 'Number');
      }
      if (data.hasOwnProperty('totalDisponivelUtilizacao')) {
        obj['totalDisponivelUtilizacao'] = ApiClient.convertToType(data['totalDisponivelUtilizacao'], 'Number');
      }
      if (data.hasOwnProperty('totalFuturo')) {
        obj['totalFuturo'] = ApiClient.convertToType(data['totalFuturo'], 'Number');
      }
      if (data.hasOwnProperty('valorMinimoExtrato')) {
        obj['valorMinimoExtrato'] = ApiClient.convertToType(data['valorMinimoExtrato'], 'Number');
      }
      if (data.hasOwnProperty('valorMinimoExtratoOriginal')) {
        obj['valorMinimoExtratoOriginal'] = ApiClient.convertToType(data['valorMinimoExtratoOriginal'], 'Number');
      }
      if (data.hasOwnProperty('vencimentoPadraoAnterior')) {
        obj['vencimentoPadraoAnterior'] = ApiClient.convertToType(data['vencimentoPadraoAnterior'], 'String');
      }
      if (data.hasOwnProperty('vencimentoPosProx')) {
        obj['vencimentoPosProx'] = ApiClient.convertToType(data['vencimentoPosProx'], 'String');
      }
      if (data.hasOwnProperty('vencimentoRealAnterior')) {
        obj['vencimentoRealAnterior'] = ApiClient.convertToType(data['vencimentoRealAnterior'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {Number} disponibCompraNac
   */
  exports.prototype['disponibCompraNac'] = undefined;

  /**
   * @member {Number} disponibGlobalCredito
   */
  exports.prototype['disponibGlobalCredito'] = undefined;

  /**
   * @member {Number} disponibParceladoNac
   */
  exports.prototype['disponibParceladoNac'] = undefined;

  /**
   * @member {Number} disponibParcelasNac
   */
  exports.prototype['disponibParcelasNac'] = undefined;

  /**
   * @member {Number} disponibSaqueNacGlobal
   */
  exports.prototype['disponibSaqueNacGlobal'] = undefined;

  /**
   * @member {Boolean} flagAntecipacao
   */
  exports.prototype['flagAntecipacao'] = undefined;

  /**
   * @member {Number} limiteCompraNac
   */
  exports.prototype['limiteCompraNac'] = undefined;

  /**
   * @member {Number} limiteCreditoConcedido
   */
  exports.prototype['limiteCreditoConcedido'] = undefined;

  /**
   * @member {Number} limiteCreditoDisponivel
   */
  exports.prototype['limiteCreditoDisponivel'] = undefined;

  /**
   * @member {Number} limiteGlobalCredito
   */
  exports.prototype['limiteGlobalCredito'] = undefined;

  /**
   * @member {Number} limiteParceladoNac
   */
  exports.prototype['limiteParceladoNac'] = undefined;

  /**
   * @member {Number} limiteParcelasNac
   */
  exports.prototype['limiteParcelasNac'] = undefined;

  /**
   * @member {Number} limitePontuacao
   */
  exports.prototype['limitePontuacao'] = undefined;

  /**
   * @member {Number} limiteSaqueNacGlobal
   */
  exports.prototype['limiteSaqueNacGlobal'] = undefined;

  /**
   * @member {Integer} numeroCiclo
   */
  exports.prototype['numeroCiclo'] = undefined;

  /**
   * @member {Number} pontosConcedidos
   */
  exports.prototype['pontosConcedidos'] = undefined;

  /**
   * @member {Number} pontosRemanescentes
   */
  exports.prototype['pontosRemanescentes'] = undefined;

  /**
   * @member {String} proximoVencimentoPadrao
   */
  exports.prototype['proximoVencimentoPadrao'] = undefined;

  /**
   * @member {String} proximoVencimentoReal
   */
  exports.prototype['proximoVencimentoReal'] = undefined;

  /**
   * @member {Number} saldoAtualFinal
   */
  exports.prototype['saldoAtualFinal'] = undefined;

  /**
   * @member {Number} saldoCredor
   */
  exports.prototype['saldoCredor'] = undefined;

  /**
   * @member {Number} saldoDevedor
   */
  exports.prototype['saldoDevedor'] = undefined;

  /**
   * @member {Number} saldoDevedorOneroso
   */
  exports.prototype['saldoDevedorOneroso'] = undefined;

  /**
   * @member {Number} saldoDevedorTotal
   */
  exports.prototype['saldoDevedorTotal'] = undefined;

  /**
   * @member {Number} saltaExtratoAnterior
   */
  exports.prototype['saltaExtratoAnterior'] = undefined;

  /**
   * @member {Number} totalDisponivelUtilizacao
   */
  exports.prototype['totalDisponivelUtilizacao'] = undefined;

  /**
   * @member {Number} totalFuturo
   */
  exports.prototype['totalFuturo'] = undefined;

  /**
   * @member {Number} valorMinimoExtrato
   */
  exports.prototype['valorMinimoExtrato'] = undefined;

  /**
   * @member {Number} valorMinimoExtratoOriginal
   */
  exports.prototype['valorMinimoExtratoOriginal'] = undefined;

  /**
   * @member {String} vencimentoPadraoAnterior
   */
  exports.prototype['vencimentoPadraoAnterior'] = undefined;

  /**
   * @member {String} vencimentoPosProx
   */
  exports.prototype['vencimentoPosProx'] = undefined;

  /**
   * @member {String} vencimentoRealAnterior
   */
  exports.prototype['vencimentoRealAnterior'] = undefined;




  return exports;
}));
