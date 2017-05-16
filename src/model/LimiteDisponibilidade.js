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
    root.Pier.LimiteDisponibilidade = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The LimiteDisponibilidade model module.
   * @module model/LimiteDisponibilidade
   * @version 2.15.0
   */

  /**
   * Constructs a new <code>LimiteDisponibilidade</code>.
   * Limite Disponibilidade
   * @alias module:model/LimiteDisponibilidade
   * @class
   * @param id
   * @param limiteGlobal
   * @param limiteCompra
   * @param limiteParcelado
   * @param limiteParcelas
   * @param limiteSaqueGlobal
   * @param limiteSaquePeriodo
   * @param limiteConsignado
   * @param limiteInternacionalCompra
   * @param limiteInternacionalParcelado
   * @param limiteInternacionalParcelas
   * @param limiteInternacionalSaqueGlobal
   * @param limiteInternacionalSaquePeriodo
   * @param saldoDisponivelGlobal
   * @param saldoDisponivelCompra
   * @param saldoDisponivelParcelado
   * @param saldoDisponivelParcelas
   * @param saldoDisponivelSaque
   * @param saldoPontosFidelidade
   * @param saldoDisponivelCompraInternacional
   * @param saldoDisponivelSaqueInternacional
   */
  var exports = function(id, limiteGlobal, limiteCompra, limiteParcelado, limiteParcelas, limiteSaqueGlobal, limiteSaquePeriodo, limiteConsignado, limiteInternacionalCompra, limiteInternacionalParcelado, limiteInternacionalParcelas, limiteInternacionalSaqueGlobal, limiteInternacionalSaquePeriodo, saldoDisponivelGlobal, saldoDisponivelCompra, saldoDisponivelParcelado, saldoDisponivelParcelas, saldoDisponivelSaque, saldoPontosFidelidade, saldoDisponivelCompraInternacional, saldoDisponivelSaqueInternacional) {

    this['id'] = id;
    this['limiteGlobal'] = limiteGlobal;
    this['limiteCompra'] = limiteCompra;
    this['limiteParcelado'] = limiteParcelado;
    this['limiteParcelas'] = limiteParcelas;
    this['limiteSaqueGlobal'] = limiteSaqueGlobal;
    this['limiteSaquePeriodo'] = limiteSaquePeriodo;
    this['limiteConsignado'] = limiteConsignado;
    this['limiteInternacionalCompra'] = limiteInternacionalCompra;
    this['limiteInternacionalParcelado'] = limiteInternacionalParcelado;
    this['limiteInternacionalParcelas'] = limiteInternacionalParcelas;
    this['limiteInternacionalSaqueGlobal'] = limiteInternacionalSaqueGlobal;
    this['limiteInternacionalSaquePeriodo'] = limiteInternacionalSaquePeriodo;
    this['saldoDisponivelGlobal'] = saldoDisponivelGlobal;
    this['saldoDisponivelCompra'] = saldoDisponivelCompra;
    this['saldoDisponivelParcelado'] = saldoDisponivelParcelado;
    this['saldoDisponivelParcelas'] = saldoDisponivelParcelas;
    this['saldoDisponivelSaque'] = saldoDisponivelSaque;
    this['saldoPontosFidelidade'] = saldoPontosFidelidade;
    this['saldoDisponivelCompraInternacional'] = saldoDisponivelCompraInternacional;
    this['saldoDisponivelSaqueInternacional'] = saldoDisponivelSaqueInternacional;
  };

  /**
   * Constructs a <code>LimiteDisponibilidade</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LimiteDisponibilidade} obj Optional instance to populate.
   * @return {module:model/LimiteDisponibilidade} The populated <code>LimiteDisponibilidade</code> instance.
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
   * Apresenta o valor do limite de cr\u00C3\u00A9dito que o portador do cart\u00C3\u00A3o possui.
   * @member {Number} limiteGlobal
   */
  exports.prototype['limiteGlobal'] = undefined;

  /**
   * Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que o portador possui para uso exclusivo em Compras Nacionais.
   * @member {Number} limiteCompra
   */
  exports.prototype['limiteCompra'] = undefined;

  /**
   * Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que o portador possui para realizar transa\u00C3\u00A7\u00C3\u00B5es de compras parceladas.
   * @member {Number} limiteParcelado
   */
  exports.prototype['limiteParcelado'] = undefined;

  /**
   * Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que portador pode acumular a partir da soma das parcelas das compras que forem realizadas nesta modalidade.
   * @member {Number} limiteParcelas
   */
  exports.prototype['limiteParcelas'] = undefined;

  /**
   * Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que o portador pode utilizar para realizar transa\u00C3\u00A7\u00C3\u00B5es de Saque Nacional.
   * @member {Number} limiteSaqueGlobal
   */
  exports.prototype['limiteSaqueGlobal'] = undefined;

  /**
   * Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que o portador pode utilizar para realizar transa\u00C3\u00A7\u00C3\u00B5es de Saque Nacional dentro de cada ciclo de faturamento.
   * @member {Number} limiteSaquePeriodo
   */
  exports.prototype['limiteSaquePeriodo'] = undefined;

  /**
   * Quando utilizado pelo emissor, este campo apresenta o valor da margem de cr\u00C3\u00A9dito que ele poder\u00C3\u00A1 utilizar para ser cobrado de forma consignada (desconto em folha) em seu sal\u00C3\u00A1rio/vencimentos.
   * @member {Number} limiteConsignado
   */
  exports.prototype['limiteConsignado'] = undefined;

  /**
   * Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que o portador possui para uso exclusivo em Compras Internacionais.
   * @member {Number} limiteInternacionalCompra
   */
  exports.prototype['limiteInternacionalCompra'] = undefined;

  /**
   * Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que o portador possui para realizar transa\u00C3\u00A7\u00C3\u00B5es Internacionais de Compras Parceladas.
   * @member {Number} limiteInternacionalParcelado
   */
  exports.prototype['limiteInternacionalParcelado'] = undefined;

  /**
   * Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que portador pode acumular a partir da soma das parcelas das compras internacionais que forem realizadas nesta modalidade.
   * @member {Number} limiteInternacionalParcelas
   */
  exports.prototype['limiteInternacionalParcelas'] = undefined;

  /**
   * Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que o portador pode utilizar para realizar transa\u00C3\u00A7\u00C3\u00B5es de Saque Internacional.
   * @member {Number} limiteInternacionalSaqueGlobal
   */
  exports.prototype['limiteInternacionalSaqueGlobal'] = undefined;

  /**
   * Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que o portador pode utilizar para realizar transa\u00C3\u00A7\u00C3\u00B5es de Saque Internacional dentro de cada ciclo de faturamento.
   * @member {Number} limiteInternacionalSaquePeriodo
   */
  exports.prototype['limiteInternacionalSaquePeriodo'] = undefined;

  /**
   * Apresenta o valor de cr\u00C3\u00A9dito que o portador possui dispon\u00C3\u00ADvel para realizar transa\u00C3\u00A7\u00C3\u00B5es.
   * @member {Number} saldoDisponivelGlobal
   */
  exports.prototype['saldoDisponivelGlobal'] = undefined;

  /**
   * Quando utilizado pelo emissor a modalidade limiteCompra, este campo apresentar\u00C3\u00A1 o valor de cr\u00C3\u00A9dito que o portador possui dispon\u00C3\u00ADvel para realizar transa\u00C3\u00A7\u00C3\u00B5es de compra Nacional.
   * @member {Number} saldoDisponivelCompra
   */
  exports.prototype['saldoDisponivelCompra'] = undefined;

  /**
   * Quando utilizado pelo emissor a modalidade limiteParcelado, este campo apresentar\u00C3\u00A1 o valor de cr\u00C3\u00A9dito que o portador possui dispon\u00C3\u00ADvel para realizar transa\u00C3\u00A7\u00C3\u00B5es de compra Nacional.
   * @member {Number} saldoDisponivelParcelado
   */
  exports.prototype['saldoDisponivelParcelado'] = undefined;

  /**
   * Quando utilizado pelo emissor a modalidade limiteParcelas, este campo apresentar\u00C3\u00A1 o valor de cr\u00C3\u00A9dito que o portador possui dispon\u00C3\u00ADvel para utilizar como valor de parcelas Nacionais em um determinado ciclo de faturamento.
   * @member {Number} saldoDisponivelParcelas
   */
  exports.prototype['saldoDisponivelParcelas'] = undefined;

  /**
   * Quando utilizado pelo emissor a modalidade limiteSaque, este campo apresentar\u00C3\u00A1 o valor de cr\u00C3\u00A9dito que o portador possui dispon\u00C3\u00ADvel para realizar transa\u00C3\u00A7\u00C3\u00B5es de Saque Nacional.
   * @member {Number} saldoDisponivelSaque
   */
  exports.prototype['saldoDisponivelSaque'] = undefined;

  /**
   * Quando utilizado um programa de fidelidade pelo emissor, este campo apresentar\u00C3\u00A1 o saldo atual de pontos que o portador possui.
   * @member {Number} saldoPontosFidelidade
   */
  exports.prototype['saldoPontosFidelidade'] = undefined;

  /**
   * Quando utilizado pelo emissor a modalidade limiteCompraInternacional, este campo apresentar\u00C3\u00A1 o valor de cr\u00C3\u00A9dito que o portador possui dispon\u00C3\u00ADvel para realizar transa\u00C3\u00A7\u00C3\u00B5es de Compra Internacional.
   * @member {Number} saldoDisponivelCompraInternacional
   */
  exports.prototype['saldoDisponivelCompraInternacional'] = undefined;

  /**
   * Quando utilizado pelo emissor a modalidade limiteSaqueInternacional, este campo apresentar\u00C3\u00A1 o valor de cr\u00C3\u00A9dito que o portador possui dispon\u00C3\u00ADvel para realizar transa\u00C3\u00A7\u00C3\u00B5es de Saque Internacional.
   * @member {Number} saldoDisponivelSaqueInternacional
   */
  exports.prototype['saldoDisponivelSaqueInternacional'] = undefined;




  return exports;
}));
