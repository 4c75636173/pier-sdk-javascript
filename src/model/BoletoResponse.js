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
    root.Pier.BoletoResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The BoletoResponse model module.
   * @module model/BoletoResponse
   * @version 2.66.1
   */

  /**
   * Constructs a new <code>BoletoResponse</code>.
   * {{{boleto_response_description}}}
   * @alias module:model/BoletoResponse
   * @class
   */
  var exports = function() {



































  };

  /**
   * Constructs a <code>BoletoResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BoletoResponse} obj Optional instance to populate.
   * @return {module:model/BoletoResponse} The populated <code>BoletoResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('numeroDoDocumento')) {
        obj['numeroDoDocumento'] = ApiClient.convertToType(data['numeroDoDocumento'], 'String');
      }
      if (data.hasOwnProperty('dataProcessamento')) {
        obj['dataProcessamento'] = ApiClient.convertToType(data['dataProcessamento'], 'String');
      }
      if (data.hasOwnProperty('dataDocumento')) {
        obj['dataDocumento'] = ApiClient.convertToType(data['dataDocumento'], 'String');
      }
      if (data.hasOwnProperty('dataVencimento')) {
        obj['dataVencimento'] = ApiClient.convertToType(data['dataVencimento'], 'String');
      }
      if (data.hasOwnProperty('dataFechamento')) {
        obj['dataFechamento'] = ApiClient.convertToType(data['dataFechamento'], 'String');
      }
      if (data.hasOwnProperty('valorBoleto')) {
        obj['valorBoleto'] = ApiClient.convertToType(data['valorBoleto'], 'Number');
      }
      if (data.hasOwnProperty('nomeBeneficiario')) {
        obj['nomeBeneficiario'] = ApiClient.convertToType(data['nomeBeneficiario'], 'String');
      }
      if (data.hasOwnProperty('documentoBeneficiario')) {
        obj['documentoBeneficiario'] = ApiClient.convertToType(data['documentoBeneficiario'], 'String');
      }
      if (data.hasOwnProperty('agencia')) {
        obj['agencia'] = ApiClient.convertToType(data['agencia'], 'String');
      }
      if (data.hasOwnProperty('codigoBeneficiario')) {
        obj['codigoBeneficiario'] = ApiClient.convertToType(data['codigoBeneficiario'], 'String');
      }
      if (data.hasOwnProperty('numeroConvenio')) {
        obj['numeroConvenio'] = ApiClient.convertToType(data['numeroConvenio'], 'String');
      }
      if (data.hasOwnProperty('digitoCodigoBeneficiario')) {
        obj['digitoCodigoBeneficiario'] = ApiClient.convertToType(data['digitoCodigoBeneficiario'], 'String');
      }
      if (data.hasOwnProperty('carteira')) {
        obj['carteira'] = ApiClient.convertToType(data['carteira'], 'String');
      }
      if (data.hasOwnProperty('nossoNumero')) {
        obj['nossoNumero'] = ApiClient.convertToType(data['nossoNumero'], 'String');
      }
      if (data.hasOwnProperty('digitoNossoNumero')) {
        obj['digitoNossoNumero'] = ApiClient.convertToType(data['digitoNossoNumero'], 'String');
      }
      if (data.hasOwnProperty('banco')) {
        obj['banco'] = ApiClient.convertToType(data['banco'], 'String');
      }
      if (data.hasOwnProperty('aceite')) {
        obj['aceite'] = ApiClient.convertToType(data['aceite'], 'Boolean');
      }
      if (data.hasOwnProperty('especieDoDocumento')) {
        obj['especieDoDocumento'] = ApiClient.convertToType(data['especieDoDocumento'], 'String');
      }
      if (data.hasOwnProperty('especie')) {
        obj['especie'] = ApiClient.convertToType(data['especie'], 'String');
      }
      if (data.hasOwnProperty('instrucoes')) {
        obj['instrucoes'] = ApiClient.convertToType(data['instrucoes'], ['String']);
      }
      if (data.hasOwnProperty('locaisDePagamento')) {
        obj['locaisDePagamento'] = ApiClient.convertToType(data['locaisDePagamento'], ['String']);
      }
      if (data.hasOwnProperty('nomePagador')) {
        obj['nomePagador'] = ApiClient.convertToType(data['nomePagador'], 'String');
      }
      if (data.hasOwnProperty('documentoPagador')) {
        obj['documentoPagador'] = ApiClient.convertToType(data['documentoPagador'], 'String');
      }
      if (data.hasOwnProperty('logradouroPagador')) {
        obj['logradouroPagador'] = ApiClient.convertToType(data['logradouroPagador'], 'String');
      }
      if (data.hasOwnProperty('bairroPagador')) {
        obj['bairroPagador'] = ApiClient.convertToType(data['bairroPagador'], 'String');
      }
      if (data.hasOwnProperty('cepPagador')) {
        obj['cepPagador'] = ApiClient.convertToType(data['cepPagador'], 'String');
      }
      if (data.hasOwnProperty('cidadePagador')) {
        obj['cidadePagador'] = ApiClient.convertToType(data['cidadePagador'], 'String');
      }
      if (data.hasOwnProperty('ufPagador')) {
        obj['ufPagador'] = ApiClient.convertToType(data['ufPagador'], 'String');
      }
      if (data.hasOwnProperty('codigoDeBarras')) {
        obj['codigoDeBarras'] = ApiClient.convertToType(data['codigoDeBarras'], 'String');
      }
      if (data.hasOwnProperty('linhaDigitavel')) {
        obj['linhaDigitavel'] = ApiClient.convertToType(data['linhaDigitavel'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('idConta')) {
        obj['idConta'] = ApiClient.convertToType(data['idConta'], 'Integer');
      }
      if (data.hasOwnProperty('enderecoCobrancaBeneficiario')) {
        obj['enderecoCobrancaBeneficiario'] = ApiClient.convertToType(data['enderecoCobrancaBeneficiario'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * {{{boleto_response_numero_do_documento_value}}}
   * @member {String} numeroDoDocumento
   */
  exports.prototype['numeroDoDocumento'] = undefined;

  /**
   * {{{boleto_response_data_processamento_value}}}
   * @member {String} dataProcessamento
   */
  exports.prototype['dataProcessamento'] = undefined;

  /**
   * {{{boleto_response_data_documento_value}}}
   * @member {String} dataDocumento
   */
  exports.prototype['dataDocumento'] = undefined;

  /**
   * {{{boleto_response_data_vencimento_value}}}
   * @member {String} dataVencimento
   */
  exports.prototype['dataVencimento'] = undefined;

  /**
   * {{{boleto_response_data_fechamento_value}}}
   * @member {String} dataFechamento
   */
  exports.prototype['dataFechamento'] = undefined;

  /**
   * {{{boleto_response_valor_boleto_value}}}
   * @member {Number} valorBoleto
   */
  exports.prototype['valorBoleto'] = undefined;

  /**
   * {{{boleto_response_nome_beneficiario_value}}}
   * @member {String} nomeBeneficiario
   */
  exports.prototype['nomeBeneficiario'] = undefined;

  /**
   * {{{boleto_response_documento_beneficiario_value}}}
   * @member {String} documentoBeneficiario
   */
  exports.prototype['documentoBeneficiario'] = undefined;

  /**
   * {{{boleto_response_agencia_value}}}
   * @member {String} agencia
   */
  exports.prototype['agencia'] = undefined;

  /**
   * {{{boleto_response_codigo_beneficiario_value}}}
   * @member {String} codigoBeneficiario
   */
  exports.prototype['codigoBeneficiario'] = undefined;

  /**
   * {{{boleto_response_numero_convenio_value}}}
   * @member {String} numeroConvenio
   */
  exports.prototype['numeroConvenio'] = undefined;

  /**
   * {{{boleto_response_digito_codigo_beneficiario_value}}}
   * @member {String} digitoCodigoBeneficiario
   */
  exports.prototype['digitoCodigoBeneficiario'] = undefined;

  /**
   * {{{boleto_response_carteira_value}}}
   * @member {String} carteira
   */
  exports.prototype['carteira'] = undefined;

  /**
   * {{{boleto_response_nosso_numero_value}}}
   * @member {String} nossoNumero
   */
  exports.prototype['nossoNumero'] = undefined;

  /**
   * {{{boleto_response_digito_nosso_numero_value}}}
   * @member {String} digitoNossoNumero
   */
  exports.prototype['digitoNossoNumero'] = undefined;

  /**
   * {{{boleto_response_banco_value}}}
   * @member {String} banco
   */
  exports.prototype['banco'] = undefined;

  /**
   * {{{boleto_response_aceite_value}}}
   * @member {Boolean} aceite
   */
  exports.prototype['aceite'] = undefined;

  /**
   * {{{boleto_response_especie_do_documento_value}}}
   * @member {String} especieDoDocumento
   */
  exports.prototype['especieDoDocumento'] = undefined;

  /**
   * {{{boleto_response_especie_value}}}
   * @member {String} especie
   */
  exports.prototype['especie'] = undefined;

  /**
   * {{{boleto_response_instrucoes_value}}}
   * @member {Array.<String>} instrucoes
   */
  exports.prototype['instrucoes'] = undefined;

  /**
   * {{{boleto_response_locais_de_pagamento_value}}}
   * @member {Array.<String>} locaisDePagamento
   */
  exports.prototype['locaisDePagamento'] = undefined;

  /**
   * {{{boleto_response_nome_pagador_value}}}
   * @member {String} nomePagador
   */
  exports.prototype['nomePagador'] = undefined;

  /**
   * {{{boleto_response_documento_pagador_value}}}
   * @member {String} documentoPagador
   */
  exports.prototype['documentoPagador'] = undefined;

  /**
   * {{{boleto_response_logradouro_pagador_value}}}
   * @member {String} logradouroPagador
   */
  exports.prototype['logradouroPagador'] = undefined;

  /**
   * {{{boleto_response_bairro_pagador_value}}}
   * @member {String} bairroPagador
   */
  exports.prototype['bairroPagador'] = undefined;

  /**
   * {{{boleto_response_cep_pagador_value}}}
   * @member {String} cepPagador
   */
  exports.prototype['cepPagador'] = undefined;

  /**
   * {{{boleto_response_cidade_pagador_value}}}
   * @member {String} cidadePagador
   */
  exports.prototype['cidadePagador'] = undefined;

  /**
   * {{{boleto_response_uf_pagador_value}}}
   * @member {String} ufPagador
   */
  exports.prototype['ufPagador'] = undefined;

  /**
   * {{{boleto_response_codigo_de_barras_value}}}
   * @member {String} codigoDeBarras
   */
  exports.prototype['codigoDeBarras'] = undefined;

  /**
   * {{{boleto_response_linha_digitavel_value}}}
   * @member {String} linhaDigitavel
   */
  exports.prototype['linhaDigitavel'] = undefined;

  /**
   * {{{boleto_response_id_value}}}
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * {{{boleto_response_id_conta_value}}}
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * {{{boleto_response_endereco_cobranca_beneficiario_value}}}
   * @member {String} enderecoCobrancaBeneficiario
   */
  exports.prototype['enderecoCobrancaBeneficiario'] = undefined;

  /**
   * {{{boleto_response_status_value}}}
   * @member {Integer} status
   */
  exports.prototype['status'] = undefined;




  return exports;
}));
