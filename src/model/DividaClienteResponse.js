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
    root.Pier.DividaClienteResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DividaClienteResponse model module.
   * @module model/DividaClienteResponse
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>DividaClienteResponse</code>.
   * {{{divida_cliente_response_description}}}
   * @alias module:model/DividaClienteResponse
   * @class
   */
  var exports = function() {


















  };

  /**
   * Constructs a <code>DividaClienteResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DividaClienteResponse} obj Optional instance to populate.
   * @return {module:model/DividaClienteResponse} The populated <code>DividaClienteResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('dataVencimentoFaturaAtraso')) {
        obj['dataVencimentoFaturaAtraso'] = ApiClient.convertToType(data['dataVencimentoFaturaAtraso'], 'String');
      }
      if (data.hasOwnProperty('quantidadeDiasAtraso')) {
        obj['quantidadeDiasAtraso'] = ApiClient.convertToType(data['quantidadeDiasAtraso'], 'Integer');
      }
      if (data.hasOwnProperty('dataVencimentoAcordo')) {
        obj['dataVencimentoAcordo'] = ApiClient.convertToType(data['dataVencimentoAcordo'], 'String');
      }
      if (data.hasOwnProperty('quantidadeDiasAtrasoCorrigido')) {
        obj['quantidadeDiasAtrasoCorrigido'] = ApiClient.convertToType(data['quantidadeDiasAtrasoCorrigido'], 'Integer');
      }
      if (data.hasOwnProperty('valorSaldoDevedor')) {
        obj['valorSaldoDevedor'] = ApiClient.convertToType(data['valorSaldoDevedor'], 'Number');
      }
      if (data.hasOwnProperty('taxaCorrecao')) {
        obj['taxaCorrecao'] = ApiClient.convertToType(data['taxaCorrecao'], 'Number');
      }
      if (data.hasOwnProperty('valorCorrecao')) {
        obj['valorCorrecao'] = ApiClient.convertToType(data['valorCorrecao'], 'Number');
      }
      if (data.hasOwnProperty('valorIOF')) {
        obj['valorIOF'] = ApiClient.convertToType(data['valorIOF'], 'Number');
      }
      if (data.hasOwnProperty('valorSaldoCorrigido')) {
        obj['valorSaldoCorrigido'] = ApiClient.convertToType(data['valorSaldoCorrigido'], 'Number');
      }
      if (data.hasOwnProperty('idStatusConta')) {
        obj['idStatusConta'] = ApiClient.convertToType(data['idStatusConta'], 'Integer');
      }
      if (data.hasOwnProperty('descricaoStatusConta')) {
        obj['descricaoStatusConta'] = ApiClient.convertToType(data['descricaoStatusConta'], 'String');
      }
      if (data.hasOwnProperty('idStatusAcordo')) {
        obj['idStatusAcordo'] = ApiClient.convertToType(data['idStatusAcordo'], 'Integer');
      }
      if (data.hasOwnProperty('descricaoStatusAcordo')) {
        obj['descricaoStatusAcordo'] = ApiClient.convertToType(data['descricaoStatusAcordo'], 'String');
      }
      if (data.hasOwnProperty('idEscritorioCobranca')) {
        obj['idEscritorioCobranca'] = ApiClient.convertToType(data['idEscritorioCobranca'], 'Integer');
      }
      if (data.hasOwnProperty('nomeEscritorioCobranca')) {
        obj['nomeEscritorioCobranca'] = ApiClient.convertToType(data['nomeEscritorioCobranca'], 'String');
      }
      if (data.hasOwnProperty('emailPessoaConta')) {
        obj['emailPessoaConta'] = ApiClient.convertToType(data['emailPessoaConta'], 'String');
      }
    }
    return obj;
  }


  /**
   * {{{divida_cliente_response_id_value}}}
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * {{{divida_cliente_response_data_vencimento_fatura_atraso_value}}}
   * @member {String} dataVencimentoFaturaAtraso
   */
  exports.prototype['dataVencimentoFaturaAtraso'] = undefined;

  /**
   * {{{divida_cliente_response_quantidade_dias_atraso_value}}}
   * @member {Integer} quantidadeDiasAtraso
   */
  exports.prototype['quantidadeDiasAtraso'] = undefined;

  /**
   * {{{divida_cliente_response_data_vencimento_acordo_value}}}
   * @member {String} dataVencimentoAcordo
   */
  exports.prototype['dataVencimentoAcordo'] = undefined;

  /**
   * {{{divida_cliente_response_quantidade_dias_atraso_corrigido_value}}}
   * @member {Integer} quantidadeDiasAtrasoCorrigido
   */
  exports.prototype['quantidadeDiasAtrasoCorrigido'] = undefined;

  /**
   * {{{divida_cliente_response_valor_saldo_devedor_value}}}
   * @member {Number} valorSaldoDevedor
   */
  exports.prototype['valorSaldoDevedor'] = undefined;

  /**
   * {{{divida_cliente_response_taxa_correcao_value}}}
   * @member {Number} taxaCorrecao
   */
  exports.prototype['taxaCorrecao'] = undefined;

  /**
   * {{{divida_cliente_response_valor_correcao_value}}}
   * @member {Number} valorCorrecao
   */
  exports.prototype['valorCorrecao'] = undefined;

  /**
   * {{{divida_cliente_response_valor_i_o_f_value}}}
   * @member {Number} valorIOF
   */
  exports.prototype['valorIOF'] = undefined;

  /**
   * {{{divida_cliente_response_valor_saldo_corrigido_value}}}
   * @member {Number} valorSaldoCorrigido
   */
  exports.prototype['valorSaldoCorrigido'] = undefined;

  /**
   * {{{divida_cliente_response_id_status_conta_value}}}
   * @member {Integer} idStatusConta
   */
  exports.prototype['idStatusConta'] = undefined;

  /**
   * {{{divida_cliente_response_descricao_status_conta_value}}}
   * @member {String} descricaoStatusConta
   */
  exports.prototype['descricaoStatusConta'] = undefined;

  /**
   * {{{divida_cliente_response_id_status_acordo_value}}}
   * @member {Integer} idStatusAcordo
   */
  exports.prototype['idStatusAcordo'] = undefined;

  /**
   * {{{divida_cliente_response_descricao_status_acordo_value}}}
   * @member {String} descricaoStatusAcordo
   */
  exports.prototype['descricaoStatusAcordo'] = undefined;

  /**
   * {{{divida_cliente_response_id_escritorio_cobranca_value}}}
   * @member {Integer} idEscritorioCobranca
   */
  exports.prototype['idEscritorioCobranca'] = undefined;

  /**
   * {{{divida_cliente_response_nome_escritorio_cobranca_value}}}
   * @member {String} nomeEscritorioCobranca
   */
  exports.prototype['nomeEscritorioCobranca'] = undefined;

  /**
   * {{{divida_cliente_response_email_pessoa_conta_value}}}
   * @member {String} emailPessoaConta
   */
  exports.prototype['emailPessoaConta'] = undefined;




  return exports;
}));
