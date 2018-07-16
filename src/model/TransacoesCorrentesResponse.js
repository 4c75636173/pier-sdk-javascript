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
    root.Pier.TransacoesCorrentesResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TransacoesCorrentesResponse model module.
   * @module model/TransacoesCorrentesResponse
   * @version 2.68.0
   */

  /**
   * Constructs a new <code>TransacoesCorrentesResponse</code>.
   * {{{transacoes_correntes_response_description}}}
   * @alias module:model/TransacoesCorrentesResponse
   * @class
   */
  var exports = function() {







































  };

  /**
   * Constructs a <code>TransacoesCorrentesResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TransacoesCorrentesResponse} obj Optional instance to populate.
   * @return {module:model/TransacoesCorrentesResponse} The populated <code>TransacoesCorrentesResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('idTipoTransacao')) {
        obj['idTipoTransacao'] = ApiClient.convertToType(data['idTipoTransacao'], 'Integer');
      }
      if (data.hasOwnProperty('descricaoAbreviada')) {
        obj['descricaoAbreviada'] = ApiClient.convertToType(data['descricaoAbreviada'], 'String');
      }
      if (data.hasOwnProperty('statusTransacao')) {
        obj['statusTransacao'] = ApiClient.convertToType(data['statusTransacao'], 'String');
      }
      if (data.hasOwnProperty('idEvento')) {
        obj['idEvento'] = ApiClient.convertToType(data['idEvento'], 'Integer');
      }
      if (data.hasOwnProperty('tipoEvento')) {
        obj['tipoEvento'] = ApiClient.convertToType(data['tipoEvento'], 'String');
      }
      if (data.hasOwnProperty('idConta')) {
        obj['idConta'] = ApiClient.convertToType(data['idConta'], 'Integer');
      }
      if (data.hasOwnProperty('cartaoMascarado')) {
        obj['cartaoMascarado'] = ApiClient.convertToType(data['cartaoMascarado'], 'String');
      }
      if (data.hasOwnProperty('nomePortador')) {
        obj['nomePortador'] = ApiClient.convertToType(data['nomePortador'], 'String');
      }
      if (data.hasOwnProperty('dataTransacao')) {
        obj['dataTransacao'] = ApiClient.convertToType(data['dataTransacao'], 'String');
      }
      if (data.hasOwnProperty('dataFaturamento')) {
        obj['dataFaturamento'] = ApiClient.convertToType(data['dataFaturamento'], 'String');
      }
      if (data.hasOwnProperty('dataVencimento')) {
        obj['dataVencimento'] = ApiClient.convertToType(data['dataVencimento'], 'String');
      }
      if (data.hasOwnProperty('modoEntradaTransacao')) {
        obj['modoEntradaTransacao'] = ApiClient.convertToType(data['modoEntradaTransacao'], 'String');
      }
      if (data.hasOwnProperty('valorTaxaEmbarque')) {
        obj['valorTaxaEmbarque'] = ApiClient.convertToType(data['valorTaxaEmbarque'], 'Number');
      }
      if (data.hasOwnProperty('valorEntrada')) {
        obj['valorEntrada'] = ApiClient.convertToType(data['valorEntrada'], 'Number');
      }
      if (data.hasOwnProperty('valorBRL')) {
        obj['valorBRL'] = ApiClient.convertToType(data['valorBRL'], 'Number');
      }
      if (data.hasOwnProperty('valorUSD')) {
        obj['valorUSD'] = ApiClient.convertToType(data['valorUSD'], 'Number');
      }
      if (data.hasOwnProperty('cotacaoUSD')) {
        obj['cotacaoUSD'] = ApiClient.convertToType(data['cotacaoUSD'], 'Number');
      }
      if (data.hasOwnProperty('dataCotacaoUSD')) {
        obj['dataCotacaoUSD'] = ApiClient.convertToType(data['dataCotacaoUSD'], 'String');
      }
      if (data.hasOwnProperty('codigoMoedaOrigem')) {
        obj['codigoMoedaOrigem'] = ApiClient.convertToType(data['codigoMoedaOrigem'], 'String');
      }
      if (data.hasOwnProperty('codigoMoedaDestino')) {
        obj['codigoMoedaDestino'] = ApiClient.convertToType(data['codigoMoedaDestino'], 'String');
      }
      if (data.hasOwnProperty('codigoAutorizacao')) {
        obj['codigoAutorizacao'] = ApiClient.convertToType(data['codigoAutorizacao'], 'String');
      }
      if (data.hasOwnProperty('codigoReferencia')) {
        obj['codigoReferencia'] = ApiClient.convertToType(data['codigoReferencia'], 'String');
      }
      if (data.hasOwnProperty('codigoTerminal')) {
        obj['codigoTerminal'] = ApiClient.convertToType(data['codigoTerminal'], 'String');
      }
      if (data.hasOwnProperty('codigoMCC')) {
        obj['codigoMCC'] = ApiClient.convertToType(data['codigoMCC'], 'Integer');
      }
      if (data.hasOwnProperty('grupoMCC')) {
        obj['grupoMCC'] = ApiClient.convertToType(data['grupoMCC'], 'Integer');
      }
      if (data.hasOwnProperty('grupoDescricaoMCC')) {
        obj['grupoDescricaoMCC'] = ApiClient.convertToType(data['grupoDescricaoMCC'], 'String');
      }
      if (data.hasOwnProperty('idEstabelecimento')) {
        obj['idEstabelecimento'] = ApiClient.convertToType(data['idEstabelecimento'], 'Integer');
      }
      if (data.hasOwnProperty('nomeEstabelecimento')) {
        obj['nomeEstabelecimento'] = ApiClient.convertToType(data['nomeEstabelecimento'], 'String');
      }
      if (data.hasOwnProperty('nomeFantasiaEstabelecimento')) {
        obj['nomeFantasiaEstabelecimento'] = ApiClient.convertToType(data['nomeFantasiaEstabelecimento'], 'String');
      }
      if (data.hasOwnProperty('localidadeEstabelecimento')) {
        obj['localidadeEstabelecimento'] = ApiClient.convertToType(data['localidadeEstabelecimento'], 'String');
      }
      if (data.hasOwnProperty('planoParcelamento')) {
        obj['planoParcelamento'] = ApiClient.convertToType(data['planoParcelamento'], 'Integer');
      }
      if (data.hasOwnProperty('numeroParcela')) {
        obj['numeroParcela'] = ApiClient.convertToType(data['numeroParcela'], 'Integer');
      }
      if (data.hasOwnProperty('detalhesTransacao')) {
        obj['detalhesTransacao'] = ApiClient.convertToType(data['detalhesTransacao'], 'String');
      }
      if (data.hasOwnProperty('flagCredito')) {
        obj['flagCredito'] = ApiClient.convertToType(data['flagCredito'], 'Integer');
      }
      if (data.hasOwnProperty('flagFaturado')) {
        obj['flagFaturado'] = ApiClient.convertToType(data['flagFaturado'], 'Integer');
      }
      if (data.hasOwnProperty('flagEstorno')) {
        obj['flagEstorno'] = ApiClient.convertToType(data['flagEstorno'], 'Integer');
      }
      if (data.hasOwnProperty('idTransacaoEstorno')) {
        obj['idTransacaoEstorno'] = ApiClient.convertToType(data['idTransacaoEstorno'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * {{{transacoes_correntes_response_id_value}}}
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * {{{transacoes_correntes_response_id_tipo_transacao_value}}}
   * @member {Integer} idTipoTransacao
   */
  exports.prototype['idTipoTransacao'] = undefined;

  /**
   * {{{transacoes_correntes_response_descricao_abreviada_value}}}
   * @member {String} descricaoAbreviada
   */
  exports.prototype['descricaoAbreviada'] = undefined;

  /**
   * {{{transacoes_correntes_response_status_transacao_value}}}
   * @member {String} statusTransacao
   */
  exports.prototype['statusTransacao'] = undefined;

  /**
   * {{{transacoes_correntes_response_id_evento_value}}}
   * @member {Integer} idEvento
   */
  exports.prototype['idEvento'] = undefined;

  /**
   * {{{transacoes_correntes_response_tipo_evento_value}}}
   * @member {String} tipoEvento
   */
  exports.prototype['tipoEvento'] = undefined;

  /**
   * {{{transacoes_correntes_response_id_conta_value}}}
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * {{{transacoes_correntes_response_cartao_mascarado_value}}}
   * @member {String} cartaoMascarado
   */
  exports.prototype['cartaoMascarado'] = undefined;

  /**
   * {{{transacoes_correntes_response_nome_portador_value}}}
   * @member {String} nomePortador
   */
  exports.prototype['nomePortador'] = undefined;

  /**
   * {{{transacoes_correntes_response_data_transacao_value}}}
   * @member {String} dataTransacao
   */
  exports.prototype['dataTransacao'] = undefined;

  /**
   * {{{transacoes_correntes_response_data_faturamento_value}}}
   * @member {String} dataFaturamento
   */
  exports.prototype['dataFaturamento'] = undefined;

  /**
   * {{{transacoes_correntes_response_data_vencimento_value}}}
   * @member {String} dataVencimento
   */
  exports.prototype['dataVencimento'] = undefined;

  /**
   * {{{transacoes_correntes_response_modo_entrada_transacao_value}}}
   * @member {String} modoEntradaTransacao
   */
  exports.prototype['modoEntradaTransacao'] = undefined;

  /**
   * {{{transacoes_correntes_response_valor_taxa_embarque_value}}}
   * @member {Number} valorTaxaEmbarque
   */
  exports.prototype['valorTaxaEmbarque'] = undefined;

  /**
   * {{{transacoes_correntes_response_valor_entrada_value}}}
   * @member {Number} valorEntrada
   */
  exports.prototype['valorEntrada'] = undefined;

  /**
   * {{{transacoes_correntes_response_valor_b_r_l_value}}}
   * @member {Number} valorBRL
   */
  exports.prototype['valorBRL'] = undefined;

  /**
   * {{{transacoes_correntes_response_valor_u_s_d_value}}}
   * @member {Number} valorUSD
   */
  exports.prototype['valorUSD'] = undefined;

  /**
   * {{{transacoes_correntes_response_cotacao_u_s_d_value}}}
   * @member {Number} cotacaoUSD
   */
  exports.prototype['cotacaoUSD'] = undefined;

  /**
   * {{{transacoes_correntes_response_data_cotacao_u_s_d_value}}}
   * @member {String} dataCotacaoUSD
   */
  exports.prototype['dataCotacaoUSD'] = undefined;

  /**
   * {{{transacoes_correntes_response_codigo_moeda_origem_value}}}
   * @member {String} codigoMoedaOrigem
   */
  exports.prototype['codigoMoedaOrigem'] = undefined;

  /**
   * {{{transacoes_correntes_response_codigo_moeda_destino_value}}}
   * @member {String} codigoMoedaDestino
   */
  exports.prototype['codigoMoedaDestino'] = undefined;

  /**
   * {{{transacoes_correntes_response_codigo_autorizacao_value}}}
   * @member {String} codigoAutorizacao
   */
  exports.prototype['codigoAutorizacao'] = undefined;

  /**
   * {{{transacoes_correntes_response_codigo_referencia_value}}}
   * @member {String} codigoReferencia
   */
  exports.prototype['codigoReferencia'] = undefined;

  /**
   * {{{transacoes_correntes_response_codigo_terminal_value}}}
   * @member {String} codigoTerminal
   */
  exports.prototype['codigoTerminal'] = undefined;

  /**
   * {{{transacoes_correntes_response_codigo_m_c_c_value}}}
   * @member {Integer} codigoMCC
   */
  exports.prototype['codigoMCC'] = undefined;

  /**
   * {{{transacoes_correntes_response_grupo_m_c_c_value}}}
   * @member {Integer} grupoMCC
   */
  exports.prototype['grupoMCC'] = undefined;

  /**
   * {{{transacoes_correntes_response_grupo_descricao_m_c_c_value}}}
   * @member {String} grupoDescricaoMCC
   */
  exports.prototype['grupoDescricaoMCC'] = undefined;

  /**
   * {{{transacoes_correntes_response_id_estabelecimento_value}}}
   * @member {Integer} idEstabelecimento
   */
  exports.prototype['idEstabelecimento'] = undefined;

  /**
   * {{{transacoes_correntes_response_nome_estabelecimento_value}}}
   * @member {String} nomeEstabelecimento
   */
  exports.prototype['nomeEstabelecimento'] = undefined;

  /**
   * {{{transacoes_correntes_response_nome_fantasia_estabelecimento_value}}}
   * @member {String} nomeFantasiaEstabelecimento
   */
  exports.prototype['nomeFantasiaEstabelecimento'] = undefined;

  /**
   * {{{transacoes_correntes_response_localidade_estabelecimento_value}}}
   * @member {String} localidadeEstabelecimento
   */
  exports.prototype['localidadeEstabelecimento'] = undefined;

  /**
   * {{{transacoes_correntes_response_plano_parcelamento_value}}}
   * @member {Integer} planoParcelamento
   */
  exports.prototype['planoParcelamento'] = undefined;

  /**
   * {{{transacoes_correntes_response_numero_parcela_value}}}
   * @member {Integer} numeroParcela
   */
  exports.prototype['numeroParcela'] = undefined;

  /**
   * {{{transacoes_correntes_response_detalhes_transacao_value}}}
   * @member {String} detalhesTransacao
   */
  exports.prototype['detalhesTransacao'] = undefined;

  /**
   * {{{transacoes_correntes_response_flag_credito_value}}}
   * @member {Integer} flagCredito
   */
  exports.prototype['flagCredito'] = undefined;

  /**
   * {{{transacoes_correntes_response_flag_faturado_value}}}
   * @member {Integer} flagFaturado
   */
  exports.prototype['flagFaturado'] = undefined;

  /**
   * {{{transacoes_correntes_response_flag_estorno_value}}}
   * @member {Integer} flagEstorno
   */
  exports.prototype['flagEstorno'] = undefined;

  /**
   * {{{transacoes_correntes_response_id_transacao_estorno_value}}}
   * @member {Integer} idTransacaoEstorno
   */
  exports.prototype['idTransacaoEstorno'] = undefined;




  return exports;
}));
