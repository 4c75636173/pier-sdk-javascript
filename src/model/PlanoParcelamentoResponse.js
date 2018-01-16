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
    root.Pier.PlanoParcelamentoResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PlanoParcelamentoResponse model module.
   * @module model/PlanoParcelamentoResponse
   * @version 2.50.11
   */

  /**
   * Constructs a new <code>PlanoParcelamentoResponse</code>.
   * Representa\u00C3\u00A7\u00C3\u00A3o da resposta do recurso de planos de parcelamento
   * @alias module:model/PlanoParcelamentoResponse
   * @class
   */
  var exports = function() {




















  };

  /**
   * Constructs a <code>PlanoParcelamentoResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PlanoParcelamentoResponse} obj Optional instance to populate.
   * @return {module:model/PlanoParcelamentoResponse} The populated <code>PlanoParcelamentoResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('dataFechamentoFatura')) {
        obj['dataFechamentoFatura'] = ApiClient.convertToType(data['dataFechamentoFatura'], 'String');
      }
      if (data.hasOwnProperty('dataVencimentoPadrao')) {
        obj['dataVencimentoPadrao'] = ApiClient.convertToType(data['dataVencimentoPadrao'], 'String');
      }
      if (data.hasOwnProperty('valorTotalFatura')) {
        obj['valorTotalFatura'] = ApiClient.convertToType(data['valorTotalFatura'], 'Number');
      }
      if (data.hasOwnProperty('quantidadeParcelas')) {
        obj['quantidadeParcelas'] = ApiClient.convertToType(data['quantidadeParcelas'], 'Integer');
      }
      if (data.hasOwnProperty('valorParcela')) {
        obj['valorParcela'] = ApiClient.convertToType(data['valorParcela'], 'Number');
      }
      if (data.hasOwnProperty('valorEntrada')) {
        obj['valorEntrada'] = ApiClient.convertToType(data['valorEntrada'], 'Number');
      }
      if (data.hasOwnProperty('taxaRefinanciamento')) {
        obj['taxaRefinanciamento'] = ApiClient.convertToType(data['taxaRefinanciamento'], 'Number');
      }
      if (data.hasOwnProperty('custoEfetivoTotal')) {
        obj['custoEfetivoTotal'] = ApiClient.convertToType(data['custoEfetivoTotal'], 'Number');
      }
      if (data.hasOwnProperty('valorTotalRefinanciamento')) {
        obj['valorTotalRefinanciamento'] = ApiClient.convertToType(data['valorTotalRefinanciamento'], 'Number');
      }
      if (data.hasOwnProperty('valorIOF')) {
        obj['valorIOF'] = ApiClient.convertToType(data['valorIOF'], 'Number');
      }
      if (data.hasOwnProperty('valorTAC')) {
        obj['valorTAC'] = ApiClient.convertToType(data['valorTAC'], 'Number');
      }
      if (data.hasOwnProperty('statusAdesao')) {
        obj['statusAdesao'] = ApiClient.convertToType(data['statusAdesao'], 'Integer');
      }
      if (data.hasOwnProperty('dataInclusao')) {
        obj['dataInclusao'] = ApiClient.convertToType(data['dataInclusao'], 'String');
      }
      if (data.hasOwnProperty('dataProcessamentoAdesao')) {
        obj['dataProcessamentoAdesao'] = ApiClient.convertToType(data['dataProcessamentoAdesao'], 'String');
      }
      if (data.hasOwnProperty('idConta')) {
        obj['idConta'] = ApiClient.convertToType(data['idConta'], 'Integer');
      }
      if (data.hasOwnProperty('descricaoServicoTipo')) {
        obj['descricaoServicoTipo'] = ApiClient.convertToType(data['descricaoServicoTipo'], 'String');
      }
      if (data.hasOwnProperty('comEntrada')) {
        obj['comEntrada'] = ApiClient.convertToType(data['comEntrada'], 'Boolean');
      }
      if (data.hasOwnProperty('nomeCampanha')) {
        obj['nomeCampanha'] = ApiClient.convertToType(data['nomeCampanha'], 'String');
      }
    }
    return obj;
  }


  /**
   * Identificador do parcelamento
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * Data de fechamento da fatura
   * @member {String} dataFechamentoFatura
   */
  exports.prototype['dataFechamentoFatura'] = undefined;

  /**
   * Data de vencimento padr\u00C3\u00A3o
   * @member {String} dataVencimentoPadrao
   */
  exports.prototype['dataVencimentoPadrao'] = undefined;

  /**
   * Valor total da fatura
   * @member {Number} valorTotalFatura
   */
  exports.prototype['valorTotalFatura'] = undefined;

  /**
   * Quantidade de parcelas
   * @member {Integer} quantidadeParcelas
   */
  exports.prototype['quantidadeParcelas'] = undefined;

  /**
   * Valor da parcela
   * @member {Number} valorParcela
   */
  exports.prototype['valorParcela'] = undefined;

  /**
   * Valor de entrada
   * @member {Number} valorEntrada
   */
  exports.prototype['valorEntrada'] = undefined;

  /**
   * Taxa de refinanciamento
   * @member {Number} taxaRefinanciamento
   */
  exports.prototype['taxaRefinanciamento'] = undefined;

  /**
   * Custo efetivo total
   * @member {Number} custoEfetivoTotal
   */
  exports.prototype['custoEfetivoTotal'] = undefined;

  /**
   * Valor total de refinanciamento
   * @member {Number} valorTotalRefinanciamento
   */
  exports.prototype['valorTotalRefinanciamento'] = undefined;

  /**
   * Valor do IOF
   * @member {Number} valorIOF
   */
  exports.prototype['valorIOF'] = undefined;

  /**
   * Valor do TAC
   * @member {Number} valorTAC
   */
  exports.prototype['valorTAC'] = undefined;

  /**
   * Status da ades\u00C3\u00A3o
   * @member {Integer} statusAdesao
   */
  exports.prototype['statusAdesao'] = undefined;

  /**
   * Data de inclus\u00C3\u00A3o
   * @member {String} dataInclusao
   */
  exports.prototype['dataInclusao'] = undefined;

  /**
   * Data de processamento da ades\u00C3\u00A3o
   * @member {String} dataProcessamentoAdesao
   */
  exports.prototype['dataProcessamentoAdesao'] = undefined;

  /**
   * Identificador da conta
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * Descri\u00C3\u00A7\u00C3\u00A3o do tipo de servi\u00C3\u00A7o
   * @member {String} descricaoServicoTipo
   */
  exports.prototype['descricaoServicoTipo'] = undefined;

  /**
   * Indica se a fatura foi com entrada
   * @member {Boolean} comEntrada
   */
  exports.prototype['comEntrada'] = undefined;

  /**
   * Nome da campanha
   * @member {String} nomeCampanha
   */
  exports.prototype['nomeCampanha'] = undefined;




  return exports;
}));
