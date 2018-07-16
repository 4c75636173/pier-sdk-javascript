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
   * @version 2.68.0
   */

  /**
   * Constructs a new <code>PlanoParcelamentoResponse</code>.
   * {{{plano_parcelamento_response_description}}}
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
      if (data.hasOwnProperty('idServicoTipo')) {
        obj['idServicoTipo'] = ApiClient.convertToType(data['idServicoTipo'], 'Integer');
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
   * {{{plano_parcelamento_response_id_value}}}
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * {{{plano_parcelamento_response_data_fechamento_fatura_value}}}
   * @member {String} dataFechamentoFatura
   */
  exports.prototype['dataFechamentoFatura'] = undefined;

  /**
   * {{{plano_parcelamento_response_data_vencimento_padrao_value}}}
   * @member {String} dataVencimentoPadrao
   */
  exports.prototype['dataVencimentoPadrao'] = undefined;

  /**
   * {{{plano_parcelamento_response_valor_total_fatura_value}}}
   * @member {Number} valorTotalFatura
   */
  exports.prototype['valorTotalFatura'] = undefined;

  /**
   * {{{plano_parcelamento_response_quantidade_parcelas_value}}}
   * @member {Integer} quantidadeParcelas
   */
  exports.prototype['quantidadeParcelas'] = undefined;

  /**
   * {{{plano_parcelamento_response_valor_parcela_value}}}
   * @member {Number} valorParcela
   */
  exports.prototype['valorParcela'] = undefined;

  /**
   * {{{plano_parcelamento_response_valor_entrada_value}}}
   * @member {Number} valorEntrada
   */
  exports.prototype['valorEntrada'] = undefined;

  /**
   * {{{plano_parcelamento_response_taxa_refinanciamento_value}}}
   * @member {Number} taxaRefinanciamento
   */
  exports.prototype['taxaRefinanciamento'] = undefined;

  /**
   * {{{plano_parcelamento_response_custo_efetivo_total_value}}}
   * @member {Number} custoEfetivoTotal
   */
  exports.prototype['custoEfetivoTotal'] = undefined;

  /**
   * {{{plano_parcelamento_response_valor_total_refinanciamento_value}}}
   * @member {Number} valorTotalRefinanciamento
   */
  exports.prototype['valorTotalRefinanciamento'] = undefined;

  /**
   * {{{plano_parcelamento_response_valor_i_o_f_value}}}
   * @member {Number} valorIOF
   */
  exports.prototype['valorIOF'] = undefined;

  /**
   * {{{plano_parcelamento_response_valor_t_a_c_value}}}
   * @member {Number} valorTAC
   */
  exports.prototype['valorTAC'] = undefined;

  /**
   * {{{plano_parcelamento_response_status_adesao_value}}}
   * @member {Integer} statusAdesao
   */
  exports.prototype['statusAdesao'] = undefined;

  /**
   * {{{plano_parcelamento_response_data_inclusao_value}}}
   * @member {String} dataInclusao
   */
  exports.prototype['dataInclusao'] = undefined;

  /**
   * {{{plano_parcelamento_response_data_processamento_adesao_value}}}
   * @member {String} dataProcessamentoAdesao
   */
  exports.prototype['dataProcessamentoAdesao'] = undefined;

  /**
   * {{{plano_parcelamento_response_id_conta_value}}}
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * {{{plano_parcelamento_response_id_servico_tipo_value}}}
   * @member {Integer} idServicoTipo
   */
  exports.prototype['idServicoTipo'] = undefined;

  /**
   * {{{plano_parcelamento_response_descricao_servico_tipo_value}}}
   * @member {String} descricaoServicoTipo
   */
  exports.prototype['descricaoServicoTipo'] = undefined;

  /**
   * {{{plano_parcelamento_response_com_entrada_value}}}
   * @member {Boolean} comEntrada
   */
  exports.prototype['comEntrada'] = undefined;

  /**
   * {{{plano_parcelamento_response_nome_campanha_value}}}
   * @member {String} nomeCampanha
   */
  exports.prototype['nomeCampanha'] = undefined;




  return exports;
}));
