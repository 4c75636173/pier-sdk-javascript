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
    root.Pier.ConvenioPersist = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ConvenioPersist model module.
   * @module model/ConvenioPersist
   * @version 2.68.0
   */

  /**
   * Constructs a new <code>ConvenioPersist</code>.
   * ConvenioPersist
   * @alias module:model/ConvenioPersist
   * @class
   * @param banco
   * @param agencia
   * @param contaCorrente
   */
  var exports = function(banco, agencia, contaCorrente) {

    this['banco'] = banco;
    this['agencia'] = agencia;
    this['contaCorrente'] = contaCorrente;













  };

  /**
   * Constructs a <code>ConvenioPersist</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConvenioPersist} obj Optional instance to populate.
   * @return {module:model/ConvenioPersist} The populated <code>ConvenioPersist</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('banco')) {
        obj['banco'] = ApiClient.convertToType(data['banco'], 'Integer');
      }
      if (data.hasOwnProperty('agencia')) {
        obj['agencia'] = ApiClient.convertToType(data['agencia'], 'Integer');
      }
      if (data.hasOwnProperty('contaCorrente')) {
        obj['contaCorrente'] = ApiClient.convertToType(data['contaCorrente'], 'String');
      }
      if (data.hasOwnProperty('especie')) {
        obj['especie'] = ApiClient.convertToType(data['especie'], 'String');
      }
      if (data.hasOwnProperty('numeroConvenio')) {
        obj['numeroConvenio'] = ApiClient.convertToType(data['numeroConvenio'], 'Number');
      }
      if (data.hasOwnProperty('carteira')) {
        obj['carteira'] = ApiClient.convertToType(data['carteira'], 'Integer');
      }
      if (data.hasOwnProperty('codigoCedente')) {
        obj['codigoCedente'] = ApiClient.convertToType(data['codigoCedente'], 'String');
      }
      if (data.hasOwnProperty('especieTipo')) {
        obj['especieTipo'] = ApiClient.convertToType(data['especieTipo'], 'String');
      }
      if (data.hasOwnProperty('especieDocumento')) {
        obj['especieDocumento'] = ApiClient.convertToType(data['especieDocumento'], 'String');
      }
      if (data.hasOwnProperty('aceite')) {
        obj['aceite'] = ApiClient.convertToType(data['aceite'], 'Boolean');
      }
      if (data.hasOwnProperty('instrucoes')) {
        obj['instrucoes'] = ApiClient.convertToType(data['instrucoes'], 'String');
      }
      if (data.hasOwnProperty('localPagamento1')) {
        obj['localPagamento1'] = ApiClient.convertToType(data['localPagamento1'], 'String');
      }
      if (data.hasOwnProperty('localPagamento2')) {
        obj['localPagamento2'] = ApiClient.convertToType(data['localPagamento2'], 'String');
      }
      if (data.hasOwnProperty('enderecoCobrancaEmissor')) {
        obj['enderecoCobrancaEmissor'] = ApiClient.convertToType(data['enderecoCobrancaEmissor'], 'String');
      }
      if (data.hasOwnProperty('nomeBeneficiario')) {
        obj['nomeBeneficiario'] = ApiClient.convertToType(data['nomeBeneficiario'], 'String');
      }
      if (data.hasOwnProperty('cnpjBeneficiario')) {
        obj['cnpjBeneficiario'] = ApiClient.convertToType(data['cnpjBeneficiario'], 'String');
      }
    }
    return obj;
  }


  /**
   * Identifica\u00E7\u00E3o do banco.
   * @member {Integer} banco
   */
  exports.prototype['banco'] = undefined;

  /**
   * N\u00FAmero da ag\u00EAncia.
   * @member {Integer} agencia
   */
  exports.prototype['agencia'] = undefined;

  /**
   * Conta corrente.
   * @member {String} contaCorrente
   */
  exports.prototype['contaCorrente'] = undefined;

  /**
   * C\u00F3digo do tipo de esp\u00E9cie do documento.
   * @member {String} especie
   */
  exports.prototype['especie'] = undefined;

  /**
   * C\u00F3digo de identifica\u00E7\u00E3o do conv\u00EAnio.
   * @member {Number} numeroConvenio
   */
  exports.prototype['numeroConvenio'] = undefined;

  /**
   * C\u00F3digo da carteira de cobran\u00E7a.
   * @member {Integer} carteira
   */
  exports.prototype['carteira'] = undefined;

  /**
   * C\u00F3digo do cedente.
   * @member {String} codigoCedente
   */
  exports.prototype['codigoCedente'] = undefined;

  /**
   * Tipo de esp\u00E9cie de t\u00EDtulo de cr\u00E9dito.
   * @member {String} especieTipo
   */
  exports.prototype['especieTipo'] = undefined;

  /**
   * Esp\u00E9cie do documento.
   * @member {String} especieDocumento
   */
  exports.prototype['especieDocumento'] = undefined;

  /**
   * Indica se o pagador assinou o documento de cobran\u00E7a que originou o boleto. O padr\u00E3o \u00E9 usar \"N\".
   * @member {Boolean} aceite
   */
  exports.prototype['aceite'] = undefined;

  /**
   * Instru\u00E7\u00F5es para pagamento.
   * @member {String} instrucoes
   */
  exports.prototype['instrucoes'] = undefined;

  /**
   * Local preferencial onde pode ser efetuado o pagamento.
   * @member {String} localPagamento1
   */
  exports.prototype['localPagamento1'] = undefined;

  /**
   * Local para pagamento (campo adicional).
   * @member {String} localPagamento2
   */
  exports.prototype['localPagamento2'] = undefined;

  /**
   * Endere\u00E7o de cobran\u00E7a do emissor.
   * @member {String} enderecoCobrancaEmissor
   */
  exports.prototype['enderecoCobrancaEmissor'] = undefined;

  /**
   * Nome do benefici\u00E1rio/cedente da cobran\u00E7a.
   * @member {String} nomeBeneficiario
   */
  exports.prototype['nomeBeneficiario'] = undefined;

  /**
   * CNPJ do benefici\u00E1rio/cedente da cobran\u00E7a.
   * @member {String} cnpjBeneficiario
   */
  exports.prototype['cnpjBeneficiario'] = undefined;




  return exports;
}));
