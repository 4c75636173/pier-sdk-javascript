(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './PlanoParcelamentoEmprestimoResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PlanoParcelamentoEmprestimoResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.EmprestimoPessoalResponse = factory(root.Pier.ApiClient, root.Pier.PlanoParcelamentoEmprestimoResponse);
  }
}(this, function(ApiClient, PlanoParcelamentoEmprestimoResponse) {
  'use strict';

  /**
   * The EmprestimoPessoalResponse model module.
   * @module model/EmprestimoPessoalResponse
   * @version 2.52.0
   */

  /**
   * Constructs a new <code>EmprestimoPessoalResponse</code>.
   * Resposta do recurso de simular empr\u00C3\u00A9stimos/financiamentos
   * @alias module:model/EmprestimoPessoalResponse
   * @class
   */
  var exports = function() {










  };

  /**
   * Constructs a <code>EmprestimoPessoalResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EmprestimoPessoalResponse} obj Optional instance to populate.
   * @return {module:model/EmprestimoPessoalResponse} The populated <code>EmprestimoPessoalResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('planosParcelamentos')) {
        obj['planosParcelamentos'] = ApiClient.convertToType(data['planosParcelamentos'], [PlanoParcelamentoEmprestimoResponse]);
      }
      if (data.hasOwnProperty('valorSolicitado')) {
        obj['valorSolicitado'] = ApiClient.convertToType(data['valorSolicitado'], 'Number');
      }
      if (data.hasOwnProperty('valorMaximoSolicitacao')) {
        obj['valorMaximoSolicitacao'] = ApiClient.convertToType(data['valorMaximoSolicitacao'], 'Number');
      }
      if (data.hasOwnProperty('numeroParcelas')) {
        obj['numeroParcelas'] = ApiClient.convertToType(data['numeroParcelas'], 'Integer');
      }
      if (data.hasOwnProperty('valorMaximoParcela')) {
        obj['valorMaximoParcela'] = ApiClient.convertToType(data['valorMaximoParcela'], 'Number');
      }
      if (data.hasOwnProperty('dataPrimeiraParcela')) {
        obj['dataPrimeiraParcela'] = ApiClient.convertToType(data['dataPrimeiraParcela'], 'String');
      }
      if (data.hasOwnProperty('periodoTaxa')) {
        obj['periodoTaxa'] = ApiClient.convertToType(data['periodoTaxa'], 'String');
      }
      if (data.hasOwnProperty('sistemaAmortizacao')) {
        obj['sistemaAmortizacao'] = ApiClient.convertToType(data['sistemaAmortizacao'], 'String');
      }
      if (data.hasOwnProperty('taxaJuros')) {
        obj['taxaJuros'] = ApiClient.convertToType(data['taxaJuros'], 'Number');
      }
    }
    return obj;
  }


  /**
   * @member {Array.<module:model/PlanoParcelamentoEmprestimoResponse>} planosParcelamentos
   */
  exports.prototype['planosParcelamentos'] = undefined;

  /**
   * Valor solicitado do empr\u00C3\u00A9stimo/financiamento
   * @member {Number} valorSolicitado
   */
  exports.prototype['valorSolicitado'] = undefined;

  /**
   * Valor m\u00C3\u00A1ximo de empr\u00C3\u00A9stimo pelo valor limite de parcela
   * @member {Number} valorMaximoSolicitacao
   */
  exports.prototype['valorMaximoSolicitacao'] = undefined;

  /**
   * N\u00C3\u00BAmero de parcelas solicitado
   * @member {Integer} numeroParcelas
   */
  exports.prototype['numeroParcelas'] = undefined;

  /**
   * Limite m\u00C3\u00A1ximo de parcela permitido
   * @member {Number} valorMaximoParcela
   */
  exports.prototype['valorMaximoParcela'] = undefined;

  /**
   * Data do desconto da primeira parcela
   * @member {String} dataPrimeiraParcela
   */
  exports.prototype['dataPrimeiraParcela'] = undefined;

  /**
   * Per\u00C3\u00ADodo de aplica da taxa de juros
   * @member {String} periodoTaxa
   */
  exports.prototype['periodoTaxa'] = undefined;

  /**
   * Sistema para amortiza\u00C3\u00A7\u00C3\u00A3o do valor das parcelas
   * @member {String} sistemaAmortizacao
   */
  exports.prototype['sistemaAmortizacao'] = undefined;

  /**
   * Valor percentual da taxa de juros a ser aplicada
   * @member {Number} taxaJuros
   */
  exports.prototype['taxaJuros'] = undefined;




  return exports;
}));
