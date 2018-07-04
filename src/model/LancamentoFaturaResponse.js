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
    root.Pier.LancamentoFaturaResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The LancamentoFaturaResponse model module.
   * @module model/LancamentoFaturaResponse
   * @version 2.66.1
   */

  /**
   * Constructs a new <code>LancamentoFaturaResponse</code>.
   * {{{lancamento_fatura_response_description}}}
   * @alias module:model/LancamentoFaturaResponse
   * @class
   */
  var exports = function() {


























  };

  /**
   * Constructs a <code>LancamentoFaturaResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LancamentoFaturaResponse} obj Optional instance to populate.
   * @return {module:model/LancamentoFaturaResponse} The populated <code>LancamentoFaturaResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('idTransacao')) {
        obj['idTransacao'] = ApiClient.convertToType(data['idTransacao'], 'Integer');
      }
      if (data.hasOwnProperty('descricaoTipoTransacao')) {
        obj['descricaoTipoTransacao'] = ApiClient.convertToType(data['descricaoTipoTransacao'], 'String');
      }
      if (data.hasOwnProperty('idTipoEvento')) {
        obj['idTipoEvento'] = ApiClient.convertToType(data['idTipoEvento'], 'Integer');
      }
      if (data.hasOwnProperty('descricaoTipoEvento')) {
        obj['descricaoTipoEvento'] = ApiClient.convertToType(data['descricaoTipoEvento'], 'String');
      }
      if (data.hasOwnProperty('idEvento')) {
        obj['idEvento'] = ApiClient.convertToType(data['idEvento'], 'Integer');
      }
      if (data.hasOwnProperty('idConta')) {
        obj['idConta'] = ApiClient.convertToType(data['idConta'], 'Integer');
      }
      if (data.hasOwnProperty('complemento')) {
        obj['complemento'] = ApiClient.convertToType(data['complemento'], 'String');
      }
      if (data.hasOwnProperty('valorBRL')) {
        obj['valorBRL'] = ApiClient.convertToType(data['valorBRL'], 'Number');
      }
      if (data.hasOwnProperty('valorUSD')) {
        obj['valorUSD'] = ApiClient.convertToType(data['valorUSD'], 'Number');
      }
      if (data.hasOwnProperty('numeroParcela')) {
        obj['numeroParcela'] = ApiClient.convertToType(data['numeroParcela'], 'Integer');
      }
      if (data.hasOwnProperty('quantidadeParcelas')) {
        obj['quantidadeParcelas'] = ApiClient.convertToType(data['quantidadeParcelas'], 'Integer');
      }
      if (data.hasOwnProperty('dataHoraTransacao')) {
        obj['dataHoraTransacao'] = ApiClient.convertToType(data['dataHoraTransacao'], 'String');
      }
      if (data.hasOwnProperty('nomeEstabelecimento')) {
        obj['nomeEstabelecimento'] = ApiClient.convertToType(data['nomeEstabelecimento'], 'String');
      }
      if (data.hasOwnProperty('descricaoEstabelecimento')) {
        obj['descricaoEstabelecimento'] = ApiClient.convertToType(data['descricaoEstabelecimento'], 'String');
      }
      if (data.hasOwnProperty('nomeFantasiaEstabelecimento')) {
        obj['nomeFantasiaEstabelecimento'] = ApiClient.convertToType(data['nomeFantasiaEstabelecimento'], 'String');
      }
      if (data.hasOwnProperty('flagCredito')) {
        obj['flagCredito'] = ApiClient.convertToType(data['flagCredito'], 'Boolean');
      }
      if (data.hasOwnProperty('idMCC')) {
        obj['idMCC'] = ApiClient.convertToType(data['idMCC'], 'Integer');
      }
      if (data.hasOwnProperty('idGrupoMCC')) {
        obj['idGrupoMCC'] = ApiClient.convertToType(data['idGrupoMCC'], 'Integer');
      }
      if (data.hasOwnProperty('descricaoGrupoMCC')) {
        obj['descricaoGrupoMCC'] = ApiClient.convertToType(data['descricaoGrupoMCC'], 'String');
      }
      if (data.hasOwnProperty('titular')) {
        obj['titular'] = ApiClient.convertToType(data['titular'], 'Boolean');
      }
      if (data.hasOwnProperty('nomePortador')) {
        obj['nomePortador'] = ApiClient.convertToType(data['nomePortador'], 'String');
      }
      if (data.hasOwnProperty('numeroCartaoMascarado')) {
        obj['numeroCartaoMascarado'] = ApiClient.convertToType(data['numeroCartaoMascarado'], 'String');
      }
      if (data.hasOwnProperty('flagSolicitouContestacao')) {
        obj['flagSolicitouContestacao'] = ApiClient.convertToType(data['flagSolicitouContestacao'], 'Boolean');
      }
      if (data.hasOwnProperty('valorTaxaEmbarque')) {
        obj['valorTaxaEmbarque'] = ApiClient.convertToType(data['valorTaxaEmbarque'], 'Number');
      }
      if (data.hasOwnProperty('descricaoAbreviada')) {
        obj['descricaoAbreviada'] = ApiClient.convertToType(data['descricaoAbreviada'], 'String');
      }
    }
    return obj;
  }


  /**
   * {{{lancamento_fatura_response_id_transacao_value}}}
   * @member {Integer} idTransacao
   */
  exports.prototype['idTransacao'] = undefined;

  /**
   * {{{lancamento_fatura_response_descricao_tipo_transacao_value}}}
   * @member {String} descricaoTipoTransacao
   */
  exports.prototype['descricaoTipoTransacao'] = undefined;

  /**
   * {{{lancamento_fatura_response_id_tipo_evento_value}}}
   * @member {Integer} idTipoEvento
   */
  exports.prototype['idTipoEvento'] = undefined;

  /**
   * {{{lancamento_fatura_response_descricao_tipo_evento_value}}}
   * @member {String} descricaoTipoEvento
   */
  exports.prototype['descricaoTipoEvento'] = undefined;

  /**
   * {{{lancamento_fatura_response_id_evento_value}}}
   * @member {Integer} idEvento
   */
  exports.prototype['idEvento'] = undefined;

  /**
   * {{{lancamento_fatura_response_id_conta_value}}}
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * {{{lancamento_fatura_response_complemento_value}}}
   * @member {String} complemento
   */
  exports.prototype['complemento'] = undefined;

  /**
   * {{{lancamento_fatura_response_valor_b_r_l_value}}}
   * @member {Number} valorBRL
   */
  exports.prototype['valorBRL'] = undefined;

  /**
   * {{{lancamento_fatura_response_valor_u_s_d_value}}}
   * @member {Number} valorUSD
   */
  exports.prototype['valorUSD'] = undefined;

  /**
   * {{{lancamento_fatura_response_numero_parcela_value}}}
   * @member {Integer} numeroParcela
   */
  exports.prototype['numeroParcela'] = undefined;

  /**
   * {{{lancamento_fatura_response_quantidade_parcelas_value}}}
   * @member {Integer} quantidadeParcelas
   */
  exports.prototype['quantidadeParcelas'] = undefined;

  /**
   * {{{lancamento_fatura_response_data_hora_transacao_value}}}
   * @member {String} dataHoraTransacao
   */
  exports.prototype['dataHoraTransacao'] = undefined;

  /**
   * {{{lancamento_fatura_response_nome_estabelecimento_value}}}
   * @member {String} nomeEstabelecimento
   */
  exports.prototype['nomeEstabelecimento'] = undefined;

  /**
   * {{{lancamento_fatura_response_descricao_estabelecimento_value}}}
   * @member {String} descricaoEstabelecimento
   */
  exports.prototype['descricaoEstabelecimento'] = undefined;

  /**
   * {{{lancamento_fatura_response_nome_fantasia_estabelecimento_value}}}
   * @member {String} nomeFantasiaEstabelecimento
   */
  exports.prototype['nomeFantasiaEstabelecimento'] = undefined;

  /**
   * {{{lancamento_fatura_response_flag_credito_value}}}
   * @member {Boolean} flagCredito
   */
  exports.prototype['flagCredito'] = undefined;

  /**
   * {{{lancamento_fatura_response_id_m_c_c_value}}}
   * @member {Integer} idMCC
   */
  exports.prototype['idMCC'] = undefined;

  /**
   * {{{lancamento_fatura_response_id_grupo_m_c_c_value}}}
   * @member {Integer} idGrupoMCC
   */
  exports.prototype['idGrupoMCC'] = undefined;

  /**
   * {{{lancamento_fatura_response_descricao_grupo_m_c_c_value}}}
   * @member {String} descricaoGrupoMCC
   */
  exports.prototype['descricaoGrupoMCC'] = undefined;

  /**
   * {{{lancamento_fatura_response_titular_value}}}
   * @member {Boolean} titular
   */
  exports.prototype['titular'] = undefined;

  /**
   * {{{lancamento_fatura_response_nome_portador_value}}}
   * @member {String} nomePortador
   */
  exports.prototype['nomePortador'] = undefined;

  /**
   * {{{lancamento_fatura_response_numero_cartao_mascarado_value}}}
   * @member {String} numeroCartaoMascarado
   */
  exports.prototype['numeroCartaoMascarado'] = undefined;

  /**
   * {{{lancamento_fatura_response_flag_solicitou_contestacao_value}}}
   * @member {Boolean} flagSolicitouContestacao
   */
  exports.prototype['flagSolicitouContestacao'] = undefined;

  /**
   * {{{lancamento_fatura_response_valor_taxa_embarque_value}}}
   * @member {Number} valorTaxaEmbarque
   */
  exports.prototype['valorTaxaEmbarque'] = undefined;

  /**
   * {{{lancamento_fatura_response_descricao_abreviada_value}}}
   * @member {String} descricaoAbreviada
   */
  exports.prototype['descricaoAbreviada'] = undefined;




  return exports;
}));
