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
    root.Pier.LimiteDisponibilidadeResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The LimiteDisponibilidadeResponse model module.
   * @module model/LimiteDisponibilidadeResponse
   * @version 2.43.0
   */

  /**
   * Constructs a new <code>LimiteDisponibilidadeResponse</code>.
   * Limite Disponibilidade
   * @alias module:model/LimiteDisponibilidadeResponse
   * @class
   */
  var exports = function() {























  };

  /**
   * Constructs a <code>LimiteDisponibilidadeResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LimiteDisponibilidadeResponse} obj Optional instance to populate.
   * @return {module:model/LimiteDisponibilidadeResponse} The populated <code>LimiteDisponibilidadeResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('limiteGlobal')) {
        obj['limiteGlobal'] = ApiClient.convertToType(data['limiteGlobal'], 'Number');
      }
      if (data.hasOwnProperty('limiteCompra')) {
        obj['limiteCompra'] = ApiClient.convertToType(data['limiteCompra'], 'Number');
      }
      if (data.hasOwnProperty('limiteParcelado')) {
        obj['limiteParcelado'] = ApiClient.convertToType(data['limiteParcelado'], 'Number');
      }
      if (data.hasOwnProperty('limiteParcelas')) {
        obj['limiteParcelas'] = ApiClient.convertToType(data['limiteParcelas'], 'Number');
      }
      if (data.hasOwnProperty('limiteSaqueGlobal')) {
        obj['limiteSaqueGlobal'] = ApiClient.convertToType(data['limiteSaqueGlobal'], 'Number');
      }
      if (data.hasOwnProperty('limiteSaquePeriodo')) {
        obj['limiteSaquePeriodo'] = ApiClient.convertToType(data['limiteSaquePeriodo'], 'Number');
      }
      if (data.hasOwnProperty('limiteConsignado')) {
        obj['limiteConsignado'] = ApiClient.convertToType(data['limiteConsignado'], 'Number');
      }
      if (data.hasOwnProperty('limiteInternacionalCompra')) {
        obj['limiteInternacionalCompra'] = ApiClient.convertToType(data['limiteInternacionalCompra'], 'Number');
      }
      if (data.hasOwnProperty('limiteInternacionalParcelado')) {
        obj['limiteInternacionalParcelado'] = ApiClient.convertToType(data['limiteInternacionalParcelado'], 'Number');
      }
      if (data.hasOwnProperty('limiteInternacionalParcelas')) {
        obj['limiteInternacionalParcelas'] = ApiClient.convertToType(data['limiteInternacionalParcelas'], 'Number');
      }
      if (data.hasOwnProperty('limiteInternacionalSaqueGlobal')) {
        obj['limiteInternacionalSaqueGlobal'] = ApiClient.convertToType(data['limiteInternacionalSaqueGlobal'], 'Number');
      }
      if (data.hasOwnProperty('limiteInternacionalSaquePeriodo')) {
        obj['limiteInternacionalSaquePeriodo'] = ApiClient.convertToType(data['limiteInternacionalSaquePeriodo'], 'Number');
      }
      if (data.hasOwnProperty('limiteMaximo')) {
        obj['limiteMaximo'] = ApiClient.convertToType(data['limiteMaximo'], 'Number');
      }
      if (data.hasOwnProperty('saldoDisponivelGlobal')) {
        obj['saldoDisponivelGlobal'] = ApiClient.convertToType(data['saldoDisponivelGlobal'], 'Number');
      }
      if (data.hasOwnProperty('saldoDisponivelCompra')) {
        obj['saldoDisponivelCompra'] = ApiClient.convertToType(data['saldoDisponivelCompra'], 'Number');
      }
      if (data.hasOwnProperty('saldoDisponivelParcelado')) {
        obj['saldoDisponivelParcelado'] = ApiClient.convertToType(data['saldoDisponivelParcelado'], 'Number');
      }
      if (data.hasOwnProperty('saldoDisponivelParcelas')) {
        obj['saldoDisponivelParcelas'] = ApiClient.convertToType(data['saldoDisponivelParcelas'], 'Number');
      }
      if (data.hasOwnProperty('saldoDisponivelSaque')) {
        obj['saldoDisponivelSaque'] = ApiClient.convertToType(data['saldoDisponivelSaque'], 'Number');
      }
      if (data.hasOwnProperty('saldoPontosFidelidade')) {
        obj['saldoPontosFidelidade'] = ApiClient.convertToType(data['saldoPontosFidelidade'], 'Number');
      }
      if (data.hasOwnProperty('saldoDisponivelCompraInternacional')) {
        obj['saldoDisponivelCompraInternacional'] = ApiClient.convertToType(data['saldoDisponivelCompraInternacional'], 'Number');
      }
      if (data.hasOwnProperty('saldoDisponivelSaqueInternacional')) {
        obj['saldoDisponivelSaqueInternacional'] = ApiClient.convertToType(data['saldoDisponivelSaqueInternacional'], 'Number');
      }
    }
    return obj;
  }


  /**
   * C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o de Limite e Disponibilidade (id).
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * Valor do limite de cr\u00C3\u00A9dito.
   * @member {Number} limiteGlobal
   */
  exports.prototype['limiteGlobal'] = undefined;

  /**
   * Valor do limite de cr\u00C3\u00A9dito para uso exclusivo em compras nacionais.
   * @member {Number} limiteCompra
   */
  exports.prototype['limiteCompra'] = undefined;

  /**
   * Valor do limite de cr\u00C3\u00A9dito para transa\u00C3\u00A7\u00C3\u00B5es de compras parceladas.
   * @member {Number} limiteParcelado
   */
  exports.prototype['limiteParcelado'] = undefined;

  /**
   * Valor do limite de cr\u00C3\u00A9dito acumulado da soma das parcelas das compras que forem realizadas nesta modalidade.
   * @member {Number} limiteParcelas
   */
  exports.prototype['limiteParcelas'] = undefined;

  /**
   * Valor do limite de cr\u00C3\u00A9dito para transa\u00C3\u00A7\u00C3\u00B5es de Saque Nacional.
   * @member {Number} limiteSaqueGlobal
   */
  exports.prototype['limiteSaqueGlobal'] = undefined;

  /**
   * Valor do limite de cr\u00C3\u00A9dito para transa\u00C3\u00A7\u00C3\u00B5es de Saque Nacional dentro de cada ciclo de faturamento.
   * @member {Number} limiteSaquePeriodo
   */
  exports.prototype['limiteSaquePeriodo'] = undefined;

  /**
   * Valor da margem de cr\u00C3\u00A9dito para consigna\u00C3\u00A7\u00C3\u00B5es (desconto em folha).
   * @member {Number} limiteConsignado
   */
  exports.prototype['limiteConsignado'] = undefined;

  /**
   * Valor do limite de cr\u00C3\u00A9dito para uso exclusivo em compras internacionais.
   * @member {Number} limiteInternacionalCompra
   */
  exports.prototype['limiteInternacionalCompra'] = undefined;

  /**
   * Valor do limite de cr\u00C3\u00A9dito para transa\u00C3\u00A7\u00C3\u00B5es internacionais de compras parceladas.
   * @member {Number} limiteInternacionalParcelado
   */
  exports.prototype['limiteInternacionalParcelado'] = undefined;

  /**
   * Valor do limite de cr\u00C3\u00A9dito acumulado da soma das parcelas das compras internacionais que forem realizadas nesta modalidade.
   * @member {Number} limiteInternacionalParcelas
   */
  exports.prototype['limiteInternacionalParcelas'] = undefined;

  /**
   * Valor do limite de cr\u00C3\u00A9dito para transa\u00C3\u00A7\u00C3\u00B5es de saque internacional.
   * @member {Number} limiteInternacionalSaqueGlobal
   */
  exports.prototype['limiteInternacionalSaqueGlobal'] = undefined;

  /**
   * Valor do limite de cr\u00C3\u00A9dito para transa\u00C3\u00A7\u00C3\u00B5es de saque internacional dentro de cada ciclo de faturamento.
   * @member {Number} limiteInternacionalSaquePeriodo
   */
  exports.prototype['limiteInternacionalSaquePeriodo'] = undefined;

  /**
   * Valor m\u00C3\u00A1ximo do limite de cr\u00C3\u00A9dito para realizar transa\u00C3\u00A7\u00C3\u00B5es.
   * @member {Number} limiteMaximo
   */
  exports.prototype['limiteMaximo'] = undefined;

  /**
   * Valor de cr\u00C3\u00A9dito dispon\u00C3\u00ADvel para transa\u00C3\u00A7\u00C3\u00B5es.
   * @member {Number} saldoDisponivelGlobal
   */
  exports.prototype['saldoDisponivelGlobal'] = undefined;

  /**
   * Valor de cr\u00C3\u00A9dito dispon\u00C3\u00ADvel para transa\u00C3\u00A7\u00C3\u00B5es de compra nacional.
   * @member {Number} saldoDisponivelCompra
   */
  exports.prototype['saldoDisponivelCompra'] = undefined;

  /**
   * Valor de cr\u00C3\u00A9dito dispon\u00C3\u00ADvel para transa\u00C3\u00A7\u00C3\u00B5es de compra nacional parcelada.
   * @member {Number} saldoDisponivelParcelado
   */
  exports.prototype['saldoDisponivelParcelado'] = undefined;

  /**
   * Valor de cr\u00C3\u00A9dito dispon\u00C3\u00ADvel para utilizar como valor de parcelas Nacionais em um determinado ciclo de faturamento.
   * @member {Number} saldoDisponivelParcelas
   */
  exports.prototype['saldoDisponivelParcelas'] = undefined;

  /**
   * Valor de cr\u00C3\u00A9dito que o portador possui dispon\u00C3\u00ADvel para realizar transa\u00C3\u00A7\u00C3\u00B5es de Saque Nacional.
   * @member {Number} saldoDisponivelSaque
   */
  exports.prototype['saldoDisponivelSaque'] = undefined;

  /**
   * Saldo atual de pontos do programa de fidelidade.
   * @member {Number} saldoPontosFidelidade
   */
  exports.prototype['saldoPontosFidelidade'] = undefined;

  /**
   * Valor de cr\u00C3\u00A9dito dispon\u00C3\u00ADvel para transa\u00C3\u00A7\u00C3\u00B5es de compra internacional.
   * @member {Number} saldoDisponivelCompraInternacional
   */
  exports.prototype['saldoDisponivelCompraInternacional'] = undefined;

  /**
   * Valor de cr\u00C3\u00A9dito dispon\u00C3\u00ADvel para transa\u00C3\u00A7\u00C3\u00B5es de saque internacional.
   * @member {Number} saldoDisponivelSaqueInternacional
   */
  exports.prototype['saldoDisponivelSaqueInternacional'] = undefined;




  return exports;
}));
