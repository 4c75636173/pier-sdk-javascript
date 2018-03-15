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
   * @version 2.57.0
   */

  /**
   * Constructs a new <code>BoletoResponse</code>.
   * Representa\u00E7\u00E3o da resposta do boleto de fatura
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
    }
    return obj;
  }


  /**
   * N\u00FAmero do documento \u00E9 o c\u00F3digo informado pelo banco para identifica\u00E7\u00E3o do cliente
   * @member {String} numeroDoDocumento
   */
  exports.prototype['numeroDoDocumento'] = undefined;

  /**
   * Data do processamento (emiss\u00E3o ou faturamento) do boleto
   * @member {String} dataProcessamento
   */
  exports.prototype['dataProcessamento'] = undefined;

  /**
   * Data do documento (impress\u00E3o)
   * @member {String} dataDocumento
   */
  exports.prototype['dataDocumento'] = undefined;

  /**
   * Data do vencimento
   * @member {String} dataVencimento
   */
  exports.prototype['dataVencimento'] = undefined;

  /**
   * Data do fechamento
   * @member {String} dataFechamento
   */
  exports.prototype['dataFechamento'] = undefined;

  /**
   * Valor do Boleto.
   * @member {Number} valorBoleto
   */
  exports.prototype['valorBoleto'] = undefined;

  /**
   * Benefici\u00E1rio \u00E9 a pessoa/empresa que gera o boleto
   * @member {String} nomeBeneficiario
   */
  exports.prototype['nomeBeneficiario'] = undefined;

  /**
   * Documento do Beneficiario.
   * @member {String} documentoBeneficiario
   */
  exports.prototype['documentoBeneficiario'] = undefined;

  /**
   * Ag\u00EAncia.
   * @member {String} agencia
   */
  exports.prototype['agencia'] = undefined;

  /**
   * C\u00F3digo do benefici\u00E1rio
   * @member {String} codigoBeneficiario
   */
  exports.prototype['codigoBeneficiario'] = undefined;

  /**
   * N\u00FAmero do conv\u00EAnio fornecido pelo banco \u00E9 o c\u00F3digo que identifica um emissor junto ao seu banco para associar seus boletos.
   * @member {String} numeroConvenio
   */
  exports.prototype['numeroConvenio'] = undefined;

  /**
   * D\u00EDgito do c\u00F3digo do benefici\u00E1rio
   * @member {String} digitoCodigoBeneficiario
   */
  exports.prototype['digitoCodigoBeneficiario'] = undefined;

  /**
   * Carteira \u00E9 o c\u00F3digo informado pelo banco pra identifica\u00E7\u00E3o do tipo do boleto
   * @member {String} carteira
   */
  exports.prototype['carteira'] = undefined;

  /**
   * Nosso n\u00FAmero \u00E9 o c\u00F3digo que o benefici\u00E1rio escolhe para manter controle sobre seus boletos. Esse valor serve para o cedente identificar quais boletos foram pagos ou n\u00E3o. Recomenda-se o uso de n\u00FAmeros sequ\u00EAnciais, na gera\u00E7\u00E3o de diversos boletos, para facilitar a identifica\u00E7\u00E3o dos boletos pagos
   * @member {String} nossoNumero
   */
  exports.prototype['nossoNumero'] = undefined;

  /**
   * D\u00EDgito do nosso n\u00FAmero
   * @member {String} digitoNossoNumero
   */
  exports.prototype['digitoNossoNumero'] = undefined;

  /**
   * Banco
   * @member {String} banco
   */
  exports.prototype['banco'] = undefined;

  /**
   * Aceite informa ao banco se deve aceitar o boleto ap\u00F3s a data de vencimento (padr\u00E3o: \"N\")
   * @member {Boolean} aceite
   */
  exports.prototype['aceite'] = undefined;

  /**
   * Esp\u00E9cie do documento \u00E9 o identificador do tipo de boleto (padr\u00E3o: \"DV\")
   * @member {String} especieDoDocumento
   */
  exports.prototype['especieDoDocumento'] = undefined;

  /**
   * Esp\u00E9cie \u00E9 o identificador da moeda do boleto (padr\u00E3o: \"R$\")
   * @member {String} especie
   */
  exports.prototype['especie'] = undefined;

  /**
   * Instru\u00E7\u00F5es para o benefici\u00E1rio
   * @member {Array.<String>} instrucoes
   */
  exports.prototype['instrucoes'] = undefined;

  /**
   * Locais de pagamento
   * @member {Array.<String>} locaisDePagamento
   */
  exports.prototype['locaisDePagamento'] = undefined;

  /**
   * Pagador \u00E9 a pessoa/empresa que deve pagar o boleto
   * @member {String} nomePagador
   */
  exports.prototype['nomePagador'] = undefined;

  /**
   * Documento do pagador (CPF ou CNPJ)
   * @member {String} documentoPagador
   */
  exports.prototype['documentoPagador'] = undefined;

  /**
   * Logradouro do pagador
   * @member {String} logradouroPagador
   */
  exports.prototype['logradouroPagador'] = undefined;

  /**
   * Bairro do pagador
   * @member {String} bairroPagador
   */
  exports.prototype['bairroPagador'] = undefined;

  /**
   * CEP do pagador
   * @member {String} cepPagador
   */
  exports.prototype['cepPagador'] = undefined;

  /**
   * Cidade do pagador
   * @member {String} cidadePagador
   */
  exports.prototype['cidadePagador'] = undefined;

  /**
   * Unidade federativa do pagador
   * @member {String} ufPagador
   */
  exports.prototype['ufPagador'] = undefined;

  /**
   * Valor num\u00E9rico do c\u00F3digo de barras
   * @member {String} codigoDeBarras
   */
  exports.prototype['codigoDeBarras'] = undefined;

  /**
   * Linha digit\u00E1vel formatada
   * @member {String} linhaDigitavel
   */
  exports.prototype['linhaDigitavel'] = undefined;




  return exports;
}));
