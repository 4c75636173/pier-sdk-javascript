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
    root.Pier.EmprestimoPessoalRequest = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The EmprestimoPessoalRequest model module.
   * @module model/EmprestimoPessoalRequest
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>EmprestimoPessoalRequest</code>.
   * {{{emprestimo_pessoal_request_description}}}
   * @alias module:model/EmprestimoPessoalRequest
   * @class
   * @param valorSolicitado
   * @param numeroParcelas
   * @param taxaJuros
   * @param periodoTaxa
   * @param sistemaAmortizacao
   */
  var exports = function(valorSolicitado, numeroParcelas, taxaJuros, periodoTaxa, sistemaAmortizacao) {

    this['valorSolicitado'] = valorSolicitado;
    this['numeroParcelas'] = numeroParcelas;
    this['taxaJuros'] = taxaJuros;
    this['periodoTaxa'] = periodoTaxa;
    this['sistemaAmortizacao'] = sistemaAmortizacao;

  };

  /**
   * Constructs a <code>EmprestimoPessoalRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EmprestimoPessoalRequest} obj Optional instance to populate.
   * @return {module:model/EmprestimoPessoalRequest} The populated <code>EmprestimoPessoalRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('valorSolicitado')) {
        obj['valorSolicitado'] = ApiClient.convertToType(data['valorSolicitado'], 'Number');
      }
      if (data.hasOwnProperty('numeroParcelas')) {
        obj['numeroParcelas'] = ApiClient.convertToType(data['numeroParcelas'], 'Integer');
      }
      if (data.hasOwnProperty('taxaJuros')) {
        obj['taxaJuros'] = ApiClient.convertToType(data['taxaJuros'], 'Number');
      }
      if (data.hasOwnProperty('periodoTaxa')) {
        obj['periodoTaxa'] = ApiClient.convertToType(data['periodoTaxa'], 'String');
      }
      if (data.hasOwnProperty('sistemaAmortizacao')) {
        obj['sistemaAmortizacao'] = ApiClient.convertToType(data['sistemaAmortizacao'], 'String');
      }
      if (data.hasOwnProperty('numeroMesesCarencia')) {
        obj['numeroMesesCarencia'] = ApiClient.convertToType(data['numeroMesesCarencia'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * {{{emprestimo_pessoal_request_valor_solicitado_value}}}
   * @member {Number} valorSolicitado
   */
  exports.prototype['valorSolicitado'] = undefined;

  /**
   * {{{emprestimo_pessoal_request_numero_parcelas_value}}}
   * @member {Integer} numeroParcelas
   */
  exports.prototype['numeroParcelas'] = undefined;

  /**
   * {{{emprestimo_pessoal_request_taxa_juros_value}}}
   * @member {Number} taxaJuros
   */
  exports.prototype['taxaJuros'] = undefined;

  /**
   * {{{emprestimo_pessoal_request_periodo_taxa_value}}}
   * @member {String} periodoTaxa
   */
  exports.prototype['periodoTaxa'] = undefined;

  /**
   * {{{emprestimo_pessoal_request_sistema_amortizacao_value}}}
   * @member {String} sistemaAmortizacao
   */
  exports.prototype['sistemaAmortizacao'] = undefined;

  /**
   * {{{emprestimo_pessoal_request_numero_meses_carencia_value}}}
   * @member {Integer} numeroMesesCarencia
   */
  exports.prototype['numeroMesesCarencia'] = undefined;




  return exports;
}));
