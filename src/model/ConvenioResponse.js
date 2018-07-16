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
    root.Pier.ConvenioResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ConvenioResponse model module.
   * @module model/ConvenioResponse
   * @version 2.68.0
   */

  /**
   * Constructs a new <code>ConvenioResponse</code>.
   * Objeto Conv\u00EAnio
   * @alias module:model/ConvenioResponse
   * @class
   */
  var exports = function() {





















  };

  /**
   * Constructs a <code>ConvenioResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConvenioResponse} obj Optional instance to populate.
   * @return {module:model/ConvenioResponse} The populated <code>ConvenioResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
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
        obj['aceite'] = ApiClient.convertToType(data['aceite'], 'String');
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
      if (data.hasOwnProperty('operador')) {
        obj['operador'] = ApiClient.convertToType(data['operador'], 'String');
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], 'String');
      }
      if (data.hasOwnProperty('maquina')) {
        obj['maquina'] = ApiClient.convertToType(data['maquina'], 'String');
      }
    }
    return obj;
  }


  /**
   * Id do conv\u00EAnio.
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

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
   * @member {String} aceite
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

  /**
   * Usu\u00E1rio responsavel pelo cadastro e/ou altera\u00E7\u00E3o do conv\u00EAnio.
   * @member {String} operador
   */
  exports.prototype['operador'] = undefined;

  /**
   * Data de cadastro/altera\u00E7\u00E3o do conv\u00EAnio.
   * @member {String} data
   */
  exports.prototype['data'] = undefined;

  /**
   * M\u00E1quina pela qual foi realizado o cadastro ou altera\u00E7\u00E3o.
   * @member {String} maquina
   */
  exports.prototype['maquina'] = undefined;




  return exports;
}));
