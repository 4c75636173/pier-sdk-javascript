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
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>ConfiguracaoRotativoPersist</code>.
   * {{{configuracao_rotativo_persist_description}}}
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
   * {{{configuracao_rotativo_persist_id_produto_value}}}
   * @member {Integer} idProduto
   */
  exports.prototype['idProduto'] = undefined;

  /**
   * {{{configuracao_rotativo_persist_compoe_oferta_valor_rotativo_value}}}
   * @member {Boolean} compoeOfertaValorRotativo
   */
  exports.prototype['compoeOfertaValorRotativo'] = undefined;

  /**
   * {{{configuracao_rotativo_persist_compoe_oferta_valor_nao_financiavel_value}}}
   * @member {Boolean} compoeOfertaValorNaoFinanciavel
   */
  exports.prototype['compoeOfertaValorNaoFinanciavel'] = undefined;

  /**
   * {{{configuracao_rotativo_persist_compoe_oferta_valor_novos_lancamentos_value}}}
   * @member {Boolean} compoeOfertaValorNovosLancamentos
   */
  exports.prototype['compoeOfertaValorNovosLancamentos'] = undefined;

  /**
   * {{{configuracao_rotativo_persist_recalcula_parcelamento_para_entrada_maior_value}}}
   * @member {Boolean} recalculaParcelamentoParaEntradaMaior
   */
  exports.prototype['recalculaParcelamentoParaEntradaMaior'] = undefined;

  /**
   * {{{configuracao_rotativo_persist_minimo_parcelas_recalculo_parcelamento_value}}}
   * @member {Boolean} minimoParcelasRecalculoParcelamento
   */
  exports.prototype['minimoParcelasRecalculoParcelamento'] = undefined;

  /**
   * {{{configuracao_rotativo_persist_recalcula_parcelamento_value}}}
   * @member {Boolean} recalculaParcelamento
   */
  exports.prototype['recalculaParcelamento'] = undefined;

  /**
   * {{{configuracao_rotativo_persist_numero_minimo_ofertas_value}}}
   * @member {Boolean} numeroMinimoOfertas
   */
  exports.prototype['numeroMinimoOfertas'] = undefined;

  /**
   * {{{configuracao_rotativo_persist_aceita_pagamento_maior_que_entrada_value}}}
   * @member {Boolean} aceitaPagamentoMaiorQueEntrada
   */
  exports.prototype['aceitaPagamentoMaiorQueEntrada'] = undefined;

  /**
   * {{{configuracao_rotativo_persist_antecipa_parcelamentos_abertos_value}}}
   * @member {Boolean} antecipaParcelamentosAbertos
   */
  exports.prototype['antecipaParcelamentosAbertos'] = undefined;

  /**
   * {{{configuracao_rotativo_persist_valor_minimo_parcela_value}}}
   * @member {Number} valorMinimoParcela
   */
  exports.prototype['valorMinimoParcela'] = undefined;

  /**
   * {{{configuracao_rotativo_persist_percentual_limitar_valor_minimo_parcela_value}}}
   * @member {Number} percentualLimitarValorMinimoParcela
   */
  exports.prototype['percentualLimitarValorMinimoParcela'] = undefined;

  /**
   * {{{configuracao_rotativo_persist_id_regra_campanha_value}}}
   * @member {Integer} idRegraCampanha
   */
  exports.prototype['idRegraCampanha'] = undefined;

  /**
   * {{{configuracao_rotativo_persist_parcelar_apenas_minimo_value}}}
   * @member {Boolean} parcelarApenasMinimo
   */
  exports.prototype['parcelarApenasMinimo'] = undefined;

  /**
   * {{{configuracao_rotativo_persist_usuario_value}}}
   * @member {String} usuario
   */
  exports.prototype['usuario'] = undefined;




  return exports;
}));
