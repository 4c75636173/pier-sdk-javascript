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
    root.Pier.TipoDebitoRecorrenteResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TipoDebitoRecorrenteResponse model module.
   * @module model/TipoDebitoRecorrenteResponse
   * @version 2.66.1
   */

  /**
   * Constructs a new <code>TipoDebitoRecorrenteResponse</code>.
   * {{{tipo_debito_recorrente_response_description}}}
   * @alias module:model/TipoDebitoRecorrenteResponse
   * @class
   */
  var exports = function() {





























  };

  /**
   * Constructs a <code>TipoDebitoRecorrenteResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TipoDebitoRecorrenteResponse} obj Optional instance to populate.
   * @return {module:model/TipoDebitoRecorrenteResponse} The populated <code>TipoDebitoRecorrenteResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('flagAnuidadeBonificada')) {
        obj['flagAnuidadeBonificada'] = ApiClient.convertToType(data['flagAnuidadeBonificada'], 'Boolean');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('nome')) {
        obj['nome'] = ApiClient.convertToType(data['nome'], 'String');
      }
      if (data.hasOwnProperty('valor')) {
        obj['valor'] = ApiClient.convertToType(data['valor'], 'Number');
      }
      if (data.hasOwnProperty('flagAtivo')) {
        obj['flagAtivo'] = ApiClient.convertToType(data['flagAtivo'], 'Boolean');
      }
      if (data.hasOwnProperty('valorBonus')) {
        obj['valorBonus'] = ApiClient.convertToType(data['valorBonus'], 'Number');
      }
      if (data.hasOwnProperty('numeroParcelas')) {
        obj['numeroParcelas'] = ApiClient.convertToType(data['numeroParcelas'], 'Integer');
      }
      if (data.hasOwnProperty('flagAdereAutomatico')) {
        obj['flagAdereAutomatico'] = ApiClient.convertToType(data['flagAdereAutomatico'], 'Boolean');
      }
      if (data.hasOwnProperty('flagGeraNumeroSorte')) {
        obj['flagGeraNumeroSorte'] = ApiClient.convertToType(data['flagGeraNumeroSorte'], 'Boolean');
      }
      if (data.hasOwnProperty('faixaEtaria')) {
        obj['faixaEtaria'] = ApiClient.convertToType(data['faixaEtaria'], 'String');
      }
      if (data.hasOwnProperty('flagSeguro')) {
        obj['flagSeguro'] = ApiClient.convertToType(data['flagSeguro'], 'Boolean');
      }
      if (data.hasOwnProperty('sorteiosMensais')) {
        obj['sorteiosMensais'] = ApiClient.convertToType(data['sorteiosMensais'], 'String');
      }
      if (data.hasOwnProperty('flagAdesaoAutomatica')) {
        obj['flagAdesaoAutomatica'] = ApiClient.convertToType(data['flagAdesaoAutomatica'], 'Boolean');
      }
      if (data.hasOwnProperty('flagDependente')) {
        obj['flagDependente'] = ApiClient.convertToType(data['flagDependente'], 'Boolean');
      }
      if (data.hasOwnProperty('quantidadeDependente')) {
        obj['quantidadeDependente'] = ApiClient.convertToType(data['quantidadeDependente'], 'Integer');
      }
      if (data.hasOwnProperty('idTermoSeguroServico')) {
        obj['idTermoSeguroServico'] = ApiClient.convertToType(data['idTermoSeguroServico'], 'Integer');
      }
      if (data.hasOwnProperty('idadeMinima')) {
        obj['idadeMinima'] = ApiClient.convertToType(data['idadeMinima'], 'Integer');
      }
      if (data.hasOwnProperty('idadeMaxima')) {
        obj['idadeMaxima'] = ApiClient.convertToType(data['idadeMaxima'], 'Integer');
      }
      if (data.hasOwnProperty('flagDebitoIncondicional')) {
        obj['flagDebitoIncondicional'] = ApiClient.convertToType(data['flagDebitoIncondicional'], 'Boolean');
      }
      if (data.hasOwnProperty('flagExtratoIncondicional')) {
        obj['flagExtratoIncondicional'] = ApiClient.convertToType(data['flagExtratoIncondicional'], 'Boolean');
      }
      if (data.hasOwnProperty('flagEstornoAutomatico')) {
        obj['flagEstornoAutomatico'] = ApiClient.convertToType(data['flagEstornoAutomatico'], 'Boolean');
      }
      if (data.hasOwnProperty('valorRepassadoSeguradora')) {
        obj['valorRepassadoSeguradora'] = ApiClient.convertToType(data['valorRepassadoSeguradora'], 'Number');
      }
      if (data.hasOwnProperty('flagLancaTransacao')) {
        obj['flagLancaTransacao'] = ApiClient.convertToType(data['flagLancaTransacao'], 'Boolean');
      }
      if (data.hasOwnProperty('flagTransferenciaAutomatica')) {
        obj['flagTransferenciaAutomatica'] = ApiClient.convertToType(data['flagTransferenciaAutomatica'], 'Boolean');
      }
      if (data.hasOwnProperty('idProduto')) {
        obj['idProduto'] = ApiClient.convertToType(data['idProduto'], 'Integer');
      }
      if (data.hasOwnProperty('idGrupoDebitoRecorrente')) {
        obj['idGrupoDebitoRecorrente'] = ApiClient.convertToType(data['idGrupoDebitoRecorrente'], 'Integer');
      }
      if (data.hasOwnProperty('quantidadeTentativasCobranca')) {
        obj['quantidadeTentativasCobranca'] = ApiClient.convertToType(data['quantidadeTentativasCobranca'], 'Integer');
      }
      if (data.hasOwnProperty('idAjuste')) {
        obj['idAjuste'] = ApiClient.convertToType(data['idAjuste'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * @member {Boolean} flagAnuidadeBonificada
   */
  exports.prototype['flagAnuidadeBonificada'] = undefined;

  /**
   * {{{tipo_debito_recorrente_response_id_value}}}
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * {{{tipo_debito_recorrente_response_descricao_value}}}
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;

  /**
   * {{{tipo_debito_recorrente_response_valor_value}}}
   * @member {Number} valor
   */
  exports.prototype['valor'] = undefined;

  /**
   * {{{tipo_debito_recorrente_response_flag_ativo_value}}}
   * @member {Boolean} flagAtivo
   */
  exports.prototype['flagAtivo'] = undefined;

  /**
   * {{{tipo_debito_recorrente_response_valor_bonus_value}}}
   * @member {Number} valorBonus
   */
  exports.prototype['valorBonus'] = undefined;

  /**
   * {{{tipo_debito_recorrente_response_numero_parcelas_value}}}
   * @member {Integer} numeroParcelas
   */
  exports.prototype['numeroParcelas'] = undefined;

  /**
   * {{{tipo_debito_recorrente_response_flag_adere_automatico_value}}}
   * @member {Boolean} flagAdereAutomatico
   */
  exports.prototype['flagAdereAutomatico'] = undefined;

  /**
   * {{{tipo_debito_recorrente_response_flag_gera_numero_sorte_value}}}
   * @member {Boolean} flagGeraNumeroSorte
   */
  exports.prototype['flagGeraNumeroSorte'] = undefined;

  /**
   * {{{tipo_debito_recorrente_response_faixa_etaria_value}}}
   * @member {String} faixaEtaria
   */
  exports.prototype['faixaEtaria'] = undefined;

  /**
   * {{{tipo_debito_recorrente_response_flag_seguro_value}}}
   * @member {Boolean} flagSeguro
   */
  exports.prototype['flagSeguro'] = undefined;

  /**
   * {{{tipo_debito_recorrente_response_sorteios_mensais_value}}}
   * @member {String} sorteiosMensais
   */
  exports.prototype['sorteiosMensais'] = undefined;

  /**
   * {{{tipo_debito_recorrente_response_flag_adesao_automatica_value}}}
   * @member {Boolean} flagAdesaoAutomatica
   */
  exports.prototype['flagAdesaoAutomatica'] = undefined;

  /**
   * {{{tipo_debito_recorrente_response_flag_dependente_value}}}
   * @member {Boolean} flagDependente
   */
  exports.prototype['flagDependente'] = undefined;

  /**
   * {{{tipo_debito_recorrente_response_quantidade_dependente_value}}}
   * @member {Integer} quantidadeDependente
   */
  exports.prototype['quantidadeDependente'] = undefined;

  /**
   * {{{tipo_debito_recorrente_response_id_termo_seguro_servico_value}}}
   * @member {Integer} idTermoSeguroServico
   */
  exports.prototype['idTermoSeguroServico'] = undefined;

  /**
   * {{{tipo_debito_recorrente_response_idade_minima_value}}}
   * @member {Integer} idadeMinima
   */
  exports.prototype['idadeMinima'] = undefined;

  /**
   * {{{tipo_debito_recorrente_response_idade_maxima_value}}}
   * @member {Integer} idadeMaxima
   */
  exports.prototype['idadeMaxima'] = undefined;

  /**
   * {{{tipo_debito_recorrente_response_flag_debito_incondicional_value}}}
   * @member {Boolean} flagDebitoIncondicional
   */
  exports.prototype['flagDebitoIncondicional'] = undefined;

  /**
   * {{{tipo_debito_recorrente_response_flag_extrato_incondicional_value}}}
   * @member {Boolean} flagExtratoIncondicional
   */
  exports.prototype['flagExtratoIncondicional'] = undefined;

  /**
   * {{{tipo_debito_recorrente_response_flag_estorno_automatico_value}}}
   * @member {Boolean} flagEstornoAutomatico
   */
  exports.prototype['flagEstornoAutomatico'] = undefined;

  /**
   * {{{tipo_debito_recorrente_response_valor_repassado_seguradora_value}}}
   * @member {Number} valorRepassadoSeguradora
   */
  exports.prototype['valorRepassadoSeguradora'] = undefined;

  /**
   * {{{tipo_debito_recorrente_response_flag_lanca_transacao_value}}}
   * @member {Boolean} flagLancaTransacao
   */
  exports.prototype['flagLancaTransacao'] = undefined;

  /**
   * {{{tipo_debito_recorrente_response_flag_transferencia_automatica_value}}}
   * @member {Boolean} flagTransferenciaAutomatica
   */
  exports.prototype['flagTransferenciaAutomatica'] = undefined;

  /**
   * {{{tipo_debito_recorrente_response_id_produto_value}}}
   * @member {Integer} idProduto
   */
  exports.prototype['idProduto'] = undefined;

  /**
   * {{{tipo_debito_recorrente_response_id_grupo_debito_recorrente_value}}}
   * @member {Integer} idGrupoDebitoRecorrente
   */
  exports.prototype['idGrupoDebitoRecorrente'] = undefined;

  /**
   * {{{tipo_debito_recorrente_response_quantidade_tentativas_cobranca_value}}}
   * @member {Integer} quantidadeTentativasCobranca
   */
  exports.prototype['quantidadeTentativasCobranca'] = undefined;

  /**
   * {{{tipo_debito_recorrente_response_id_ajuste_value}}}
   * @member {Integer} idAjuste
   */
  exports.prototype['idAjuste'] = undefined;




  return exports;
}));
