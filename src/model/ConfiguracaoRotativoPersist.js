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
    root.Pier.ConfiguracaoRotativoPersist = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ConfiguracaoRotativoPersist model module.
   * @module model/ConfiguracaoRotativoPersist
   * @version 2.57.0
   */

  /**
   * Constructs a new <code>ConfiguracaoRotativoPersist</code>.
   * Configura\u00E7\u00E3o Rotativo
   * @alias module:model/ConfiguracaoRotativoPersist
   * @class
   */
  var exports = function() {
















  };

  /**
   * Constructs a <code>ConfiguracaoRotativoPersist</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConfiguracaoRotativoPersist} obj Optional instance to populate.
   * @return {module:model/ConfiguracaoRotativoPersist} The populated <code>ConfiguracaoRotativoPersist</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('idProduto')) {
        obj['idProduto'] = ApiClient.convertToType(data['idProduto'], 'Integer');
      }
      if (data.hasOwnProperty('compoeOfertaValorRotativo')) {
        obj['compoeOfertaValorRotativo'] = ApiClient.convertToType(data['compoeOfertaValorRotativo'], 'Boolean');
      }
      if (data.hasOwnProperty('compoeOfertaValorNaoFinanciavel')) {
        obj['compoeOfertaValorNaoFinanciavel'] = ApiClient.convertToType(data['compoeOfertaValorNaoFinanciavel'], 'Boolean');
      }
      if (data.hasOwnProperty('compoeOfertaValorNovosLancamentos')) {
        obj['compoeOfertaValorNovosLancamentos'] = ApiClient.convertToType(data['compoeOfertaValorNovosLancamentos'], 'Boolean');
      }
      if (data.hasOwnProperty('recalculaParcelamentoParaEntradaMaior')) {
        obj['recalculaParcelamentoParaEntradaMaior'] = ApiClient.convertToType(data['recalculaParcelamentoParaEntradaMaior'], 'Boolean');
      }
      if (data.hasOwnProperty('minimoParcelasRecalculoParcelamento')) {
        obj['minimoParcelasRecalculoParcelamento'] = ApiClient.convertToType(data['minimoParcelasRecalculoParcelamento'], 'Boolean');
      }
      if (data.hasOwnProperty('recalculaParcelamento')) {
        obj['recalculaParcelamento'] = ApiClient.convertToType(data['recalculaParcelamento'], 'Boolean');
      }
      if (data.hasOwnProperty('numeroMinimoOfertas')) {
        obj['numeroMinimoOfertas'] = ApiClient.convertToType(data['numeroMinimoOfertas'], 'Boolean');
      }
      if (data.hasOwnProperty('aceitaPagamentoMaiorQueEntrada')) {
        obj['aceitaPagamentoMaiorQueEntrada'] = ApiClient.convertToType(data['aceitaPagamentoMaiorQueEntrada'], 'Boolean');
      }
      if (data.hasOwnProperty('antecipaParcelamentosAbertos')) {
        obj['antecipaParcelamentosAbertos'] = ApiClient.convertToType(data['antecipaParcelamentosAbertos'], 'Boolean');
      }
      if (data.hasOwnProperty('valorMinimoParcela')) {
        obj['valorMinimoParcela'] = ApiClient.convertToType(data['valorMinimoParcela'], 'Number');
      }
      if (data.hasOwnProperty('percentualLimitarValorMinimoParcela')) {
        obj['percentualLimitarValorMinimoParcela'] = ApiClient.convertToType(data['percentualLimitarValorMinimoParcela'], 'Number');
      }
      if (data.hasOwnProperty('idRegraCampanha')) {
        obj['idRegraCampanha'] = ApiClient.convertToType(data['idRegraCampanha'], 'Integer');
      }
      if (data.hasOwnProperty('parcelarApenasMinimo')) {
        obj['parcelarApenasMinimo'] = ApiClient.convertToType(data['parcelarApenasMinimo'], 'Boolean');
      }
      if (data.hasOwnProperty('usuario')) {
        obj['usuario'] = ApiClient.convertToType(data['usuario'], 'String');
      }
    }
    return obj;
  }


  /**
   * C\u00F3digo de Identifica\u00E7\u00E3o do Produto (idProduto).
   * @member {Integer} idProduto
   */
  exports.prototype['idProduto'] = undefined;

  /**
   * Quando verdadeiro, indica que o valor do rotativo deve compor a oferta de parcelamento.
   * @member {Boolean} compoeOfertaValorRotativo
   */
  exports.prototype['compoeOfertaValorRotativo'] = undefined;

  /**
   * Quando verdadeiro, indica que o valor n\u00E3o financi\u00E1vel deve compor a oferta de parcelamento.
   * @member {Boolean} compoeOfertaValorNaoFinanciavel
   */
  exports.prototype['compoeOfertaValorNaoFinanciavel'] = undefined;

  /**
   * Quando verdadeiro, indica que o valor de novos lan\u00E7amentos deve compor a oferta de parcelamento
   * @member {Boolean} compoeOfertaValorNovosLancamentos
   */
  exports.prototype['compoeOfertaValorNovosLancamentos'] = undefined;

  /**
   * Quando verdadeiro, indica que deve recalcular o parcelamento caso o valor pago de entrada seja maior que o valor esperado
   * @member {Boolean} recalculaParcelamentoParaEntradaMaior
   */
  exports.prototype['recalculaParcelamentoParaEntradaMaior'] = undefined;

  /**
   * Indica o m\u00EDnimo de parcelas que ser\u00E1 acatado no rec\u00E1lculo do parcelamento.
   * @member {Boolean} minimoParcelasRecalculoParcelamento
   */
  exports.prototype['minimoParcelasRecalculoParcelamento'] = undefined;

  /**
   * Quando verdadeiro, indica que o parcelamento deve ser recalculado caso o valor calculado da oferta seja inferior ao valor configurado m\u00EDnimo da parcela (valorMinimoParcela) e de percentual aberto
   * @member {Boolean} recalculaParcelamento
   */
  exports.prototype['recalculaParcelamento'] = undefined;

  /**
   * N\u00FAmero m\u00EDnimo de parcelas que ser\u00E1 acatado no recalculo da oferta.
   * @member {Boolean} numeroMinimoOfertas
   */
  exports.prototype['numeroMinimoOfertas'] = undefined;

  /**
   * Quando verdadeiro, indica que valores pagos entre o valor da entrada e o m\u00EDnimo da fatura ser\u00E3o acatados para a ades\u00E3o ao parcelamento
   * @member {Boolean} aceitaPagamentoMaiorQueEntrada
   */
  exports.prototype['aceitaPagamentoMaiorQueEntrada'] = undefined;

  /**
   * Quando verdadeiro, indica que deve-se incluir o valor presente dos parcelamentos em aberto.
   * @member {Boolean} antecipaParcelamentosAbertos
   */
  exports.prototype['antecipaParcelamentosAbertos'] = undefined;

  /**
   * Valor m\u00EDnimo da parcela que deve ser aceito na oferta.
   * @member {Number} valorMinimoParcela
   */
  exports.prototype['valorMinimoParcela'] = undefined;

  /**
   * Percentual sobre os valores de parcelamento anteriores em aberto que deve ser considerado para limitar valorMinimoParcela.
   * @member {Number} percentualLimitarValorMinimoParcela
   */
  exports.prototype['percentualLimitarValorMinimoParcela'] = undefined;

  /**
   * C\u00F3digo de Identifica\u00E7\u00E3o da regra de campanha.
   * @member {Integer} idRegraCampanha
   */
  exports.prototype['idRegraCampanha'] = undefined;

  /**
   * Quando verdadeiro, indica que parcelamento ofertado ter\u00E1 como valor base o valor m\u00EDnimo das transa\u00E7\u00F5es.
   * @member {Boolean} parcelarApenasMinimo
   */
  exports.prototype['parcelarApenasMinimo'] = undefined;

  /**
   * Nome do usu\u00E1rio
   * @member {String} usuario
   */
  exports.prototype['usuario'] = undefined;




  return exports;
}));
