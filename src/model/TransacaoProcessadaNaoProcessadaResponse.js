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
    root.Pier.TransacaoProcessadaNaoProcessadaResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TransacaoProcessadaNaoProcessadaResponse model module.
   * @module model/TransacaoProcessadaNaoProcessadaResponse
   * @version 2.66.1
   */

  /**
   * Constructs a new <code>TransacaoProcessadaNaoProcessadaResponse</code>.
   * {{{transacao_processada_nao_processada_response_description}}}
   * @alias module:model/TransacaoProcessadaNaoProcessadaResponse
   * @class
   */
  var exports = function() {



































  };

  /**
   * Constructs a <code>TransacaoProcessadaNaoProcessadaResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TransacaoProcessadaNaoProcessadaResponse} obj Optional instance to populate.
   * @return {module:model/TransacaoProcessadaNaoProcessadaResponse} The populated <code>TransacaoProcessadaNaoProcessadaResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('cartaoMascarado')) {
        obj['cartaoMascarado'] = ApiClient.convertToType(data['cartaoMascarado'], 'String');
      }
      if (data.hasOwnProperty('codigoAutorizacao')) {
        obj['codigoAutorizacao'] = ApiClient.convertToType(data['codigoAutorizacao'], 'String');
      }
      if (data.hasOwnProperty('codigoMCC')) {
        obj['codigoMCC'] = ApiClient.convertToType(data['codigoMCC'], 'Integer');
      }
      if (data.hasOwnProperty('codigoMoedaDestino')) {
        obj['codigoMoedaDestino'] = ApiClient.convertToType(data['codigoMoedaDestino'], 'String');
      }
      if (data.hasOwnProperty('codigoMoedaOrigem')) {
        obj['codigoMoedaOrigem'] = ApiClient.convertToType(data['codigoMoedaOrigem'], 'String');
      }
      if (data.hasOwnProperty('codigoReferencia')) {
        obj['codigoReferencia'] = ApiClient.convertToType(data['codigoReferencia'], 'String');
      }
      if (data.hasOwnProperty('codigoTerminal')) {
        obj['codigoTerminal'] = ApiClient.convertToType(data['codigoTerminal'], 'String');
      }
      if (data.hasOwnProperty('cotacaoUSD')) {
        obj['cotacaoUSD'] = ApiClient.convertToType(data['cotacaoUSD'], 'Number');
      }
      if (data.hasOwnProperty('dataCotacaoUSD')) {
        obj['dataCotacaoUSD'] = ApiClient.convertToType(data['dataCotacaoUSD'], 'String');
      }
      if (data.hasOwnProperty('dataFaturamento')) {
        obj['dataFaturamento'] = ApiClient.convertToType(data['dataFaturamento'], 'String');
      }
      if (data.hasOwnProperty('dataOrigem')) {
        obj['dataOrigem'] = ApiClient.convertToType(data['dataOrigem'], 'String');
      }
      if (data.hasOwnProperty('dataVencimentoReal')) {
        obj['dataVencimentoReal'] = ApiClient.convertToType(data['dataVencimentoReal'], 'String');
      }
      if (data.hasOwnProperty('descricaoAbreviada')) {
        obj['descricaoAbreviada'] = ApiClient.convertToType(data['descricaoAbreviada'], 'String');
      }
      if (data.hasOwnProperty('descricaoTipoTransacaoNaoProcessada')) {
        obj['descricaoTipoTransacaoNaoProcessada'] = ApiClient.convertToType(data['descricaoTipoTransacaoNaoProcessada'], 'String');
      }
      if (data.hasOwnProperty('flagCredito')) {
        obj['flagCredito'] = ApiClient.convertToType(data['flagCredito'], 'Integer');
      }
      if (data.hasOwnProperty('flagFaturado')) {
        obj['flagFaturado'] = ApiClient.convertToType(data['flagFaturado'], 'Integer');
      }
      if (data.hasOwnProperty('grupoDescricaoMCC')) {
        obj['grupoDescricaoMCC'] = ApiClient.convertToType(data['grupoDescricaoMCC'], 'String');
      }
      if (data.hasOwnProperty('grupoMCC')) {
        obj['grupoMCC'] = ApiClient.convertToType(data['grupoMCC'], 'Integer');
      }
      if (data.hasOwnProperty('idConta')) {
        obj['idConta'] = ApiClient.convertToType(data['idConta'], 'Integer');
      }
      if (data.hasOwnProperty('idEstabelecimento')) {
        obj['idEstabelecimento'] = ApiClient.convertToType(data['idEstabelecimento'], 'Integer');
      }
      if (data.hasOwnProperty('idTipoTransacaoNaoProcessada')) {
        obj['idTipoTransacaoNaoProcessada'] = ApiClient.convertToType(data['idTipoTransacaoNaoProcessada'], 'Integer');
      }
      if (data.hasOwnProperty('idTransacaoEstorno')) {
        obj['idTransacaoEstorno'] = ApiClient.convertToType(data['idTransacaoEstorno'], 'Integer');
      }
      if (data.hasOwnProperty('localidadeEstabelecimento')) {
        obj['localidadeEstabelecimento'] = ApiClient.convertToType(data['localidadeEstabelecimento'], 'String');
      }
      if (data.hasOwnProperty('modoEntradaTransacao')) {
        obj['modoEntradaTransacao'] = ApiClient.convertToType(data['modoEntradaTransacao'], 'String');
      }
      if (data.hasOwnProperty('nomeEstabelecimento')) {
        obj['nomeEstabelecimento'] = ApiClient.convertToType(data['nomeEstabelecimento'], 'String');
      }
      if (data.hasOwnProperty('nomeFantasiaEstabelecimento')) {
        obj['nomeFantasiaEstabelecimento'] = ApiClient.convertToType(data['nomeFantasiaEstabelecimento'], 'String');
      }
      if (data.hasOwnProperty('nomePortador')) {
        obj['nomePortador'] = ApiClient.convertToType(data['nomePortador'], 'String');
      }
      if (data.hasOwnProperty('parcela')) {
        obj['parcela'] = ApiClient.convertToType(data['parcela'], 'Integer');
      }
      if (data.hasOwnProperty('plano')) {
        obj['plano'] = ApiClient.convertToType(data['plano'], 'Integer');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'Integer');
      }
      if (data.hasOwnProperty('taxaEmbarque')) {
        obj['taxaEmbarque'] = ApiClient.convertToType(data['taxaEmbarque'], 'Number');
      }
      if (data.hasOwnProperty('valorBRL')) {
        obj['valorBRL'] = ApiClient.convertToType(data['valorBRL'], 'Number');
      }
      if (data.hasOwnProperty('valorEntrada')) {
        obj['valorEntrada'] = ApiClient.convertToType(data['valorEntrada'], 'Number');
      }
      if (data.hasOwnProperty('valorUSD')) {
        obj['valorUSD'] = ApiClient.convertToType(data['valorUSD'], 'Number');
      }
    }
    return obj;
  }


  /**
   * {{{transacao_nao_processada_response_cartao_mascarado_value}}}
   * @member {String} cartaoMascarado
   */
  exports.prototype['cartaoMascarado'] = undefined;

  /**
   * {{{transacao_nao_processada_response_codigo_autorizacao_value}}}
   * @member {String} codigoAutorizacao
   */
  exports.prototype['codigoAutorizacao'] = undefined;

  /**
   * {{{transacao_nao_processada_response_codigo_mcc_value}}}
   * @member {Integer} codigoMCC
   */
  exports.prototype['codigoMCC'] = undefined;

  /**
   * {{{transacao_nao_processada_response_codigo_moeda_destino_value}}}
   * @member {String} codigoMoedaDestino
   */
  exports.prototype['codigoMoedaDestino'] = undefined;

  /**
   * {{{transacao_nao_processada_response_codigo_moeda_origem_value}}}
   * @member {String} codigoMoedaOrigem
   */
  exports.prototype['codigoMoedaOrigem'] = undefined;

  /**
   * {{{transacao_nao_processada_response_codigo_referencia_value}}}
   * @member {String} codigoReferencia
   */
  exports.prototype['codigoReferencia'] = undefined;

  /**
   * {{{transacao_nao_processada_response_codigo_terminal_value}}}
   * @member {String} codigoTerminal
   */
  exports.prototype['codigoTerminal'] = undefined;

  /**
   * {{{transacao_nao_processada_response_cotacao_usd_value}}}
   * @member {Number} cotacaoUSD
   */
  exports.prototype['cotacaoUSD'] = undefined;

  /**
   * {{{transacao_nao_processada_response_data_cotacao_usd_value}}}
   * @member {String} dataCotacaoUSD
   */
  exports.prototype['dataCotacaoUSD'] = undefined;

  /**
   * {{{transacao_nao_processada_response_data_faturamento_value}}}
   * @member {String} dataFaturamento
   */
  exports.prototype['dataFaturamento'] = undefined;

  /**
   * {{{transacao_nao_processada_response_data_origem_value}}}
   * @member {String} dataOrigem
   */
  exports.prototype['dataOrigem'] = undefined;

  /**
   * {{{transacao_nao_processada_response_data_vencimento_value}}}
   * @member {String} dataVencimentoReal
   */
  exports.prototype['dataVencimentoReal'] = undefined;

  /**
   * {{{transacao_nao_processada_response_descricao_abreviada_value}}}
   * @member {String} descricaoAbreviada
   */
  exports.prototype['descricaoAbreviada'] = undefined;

  /**
   * {{{transacao_nao_processada_response_descricao_tipo_transacao_nao_processada_value}}}
   * @member {String} descricaoTipoTransacaoNaoProcessada
   */
  exports.prototype['descricaoTipoTransacaoNaoProcessada'] = undefined;

  /**
   * {{{transacao_nao_processada_response_flag_credito_value}}}
   * @member {Integer} flagCredito
   */
  exports.prototype['flagCredito'] = undefined;

  /**
   * {{{transacao_nao_processada_response_flag_faturado_value}}}
   * @member {Integer} flagFaturado
   */
  exports.prototype['flagFaturado'] = undefined;

  /**
   * {{{transacao_nao_processada_response_grupo_descricao_mcc_value}}}
   * @member {String} grupoDescricaoMCC
   */
  exports.prototype['grupoDescricaoMCC'] = undefined;

  /**
   * {{{transacao_nao_processada_response_grupo_mcc_value}}}
   * @member {Integer} grupoMCC
   */
  exports.prototype['grupoMCC'] = undefined;

  /**
   * {{{transacao_nao_processada_response_id_conta_value}}}
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * {{{transacao_nao_processada_response_id_estabelecimento_value}}}
   * @member {Integer} idEstabelecimento
   */
  exports.prototype['idEstabelecimento'] = undefined;

  /**
   * {{{transacao_nao_processada_response_id_tipo_transacao_nao_processada_value}}}
   * @member {Integer} idTipoTransacaoNaoProcessada
   */
  exports.prototype['idTipoTransacaoNaoProcessada'] = undefined;

  /**
   * {{{transacao_nao_processada_response_id_transacao_estorno_value}}}
   * @member {Integer} idTransacaoEstorno
   */
  exports.prototype['idTransacaoEstorno'] = undefined;

  /**
   * {{{transacao_nao_processada_response_localidade_estabelecimento_value}}}
   * @member {String} localidadeEstabelecimento
   */
  exports.prototype['localidadeEstabelecimento'] = undefined;

  /**
   * {{{transacao_nao_processada_response_modo_entrada_transacao_value}}}
   * @member {String} modoEntradaTransacao
   */
  exports.prototype['modoEntradaTransacao'] = undefined;

  /**
   * {{{transacao_nao_processada_response_nome_estabelecimento_value}}}
   * @member {String} nomeEstabelecimento
   */
  exports.prototype['nomeEstabelecimento'] = undefined;

  /**
   * {{{transacao_nao_processada_response_nome_fantasia_estabelecimento_value}}}
   * @member {String} nomeFantasiaEstabelecimento
   */
  exports.prototype['nomeFantasiaEstabelecimento'] = undefined;

  /**
   * {{{transacao_nao_processada_response_nome_portador_value}}}
   * @member {String} nomePortador
   */
  exports.prototype['nomePortador'] = undefined;

  /**
   * {{{transacao_nao_processada_response_numero_parcela_value}}}
   * @member {Integer} parcela
   */
  exports.prototype['parcela'] = undefined;

  /**
   * {{{transacao_nao_processada_response_plano_parcelamento_value}}}
   * @member {Integer} plano
   */
  exports.prototype['plano'] = undefined;

  /**
   * {{{transacao_nao_processada_response_status_value}}}
   * @member {Integer} status
   */
  exports.prototype['status'] = undefined;

  /**
   * {{{transacao_nao_processada_response_valor_taxa_embarque_value}}}
   * @member {Number} taxaEmbarque
   */
  exports.prototype['taxaEmbarque'] = undefined;

  /**
   * {{{transacao_nao_processada_response_valor_brl_value}}}
   * @member {Number} valorBRL
   */
  exports.prototype['valorBRL'] = undefined;

  /**
   * {{{transacao_nao_processada_response_valor_entrada_value}}}
   * @member {Number} valorEntrada
   */
  exports.prototype['valorEntrada'] = undefined;

  /**
   * {{{transacao_nao_processada_response_valor_usd_value}}}
   * @member {Number} valorUSD
   */
  exports.prototype['valorUSD'] = undefined;




  return exports;
}));
