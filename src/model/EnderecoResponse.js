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
    root.Pier.EnderecoResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The EnderecoResponse model module.
   * @module model/EnderecoResponse
   * @version 2.49.0
   */

  /**
   * Constructs a new <code>EnderecoResponse</code>.
   * Objeto Endere\u00C3\u00A7o
   * @alias module:model/EnderecoResponse
   * @class
   */
  var exports = function() {















  };

  /**
   * Constructs a <code>EnderecoResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EnderecoResponse} obj Optional instance to populate.
   * @return {module:model/EnderecoResponse} The populated <code>EnderecoResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('idPessoa')) {
        obj['idPessoa'] = ApiClient.convertToType(data['idPessoa'], 'Integer');
      }
      if (data.hasOwnProperty('idTipoEndereco')) {
        obj['idTipoEndereco'] = ApiClient.convertToType(data['idTipoEndereco'], 'Integer');
      }
      if (data.hasOwnProperty('cep')) {
        obj['cep'] = ApiClient.convertToType(data['cep'], 'String');
      }
      if (data.hasOwnProperty('logradouro')) {
        obj['logradouro'] = ApiClient.convertToType(data['logradouro'], 'String');
      }
      if (data.hasOwnProperty('numero')) {
        obj['numero'] = ApiClient.convertToType(data['numero'], 'Integer');
      }
      if (data.hasOwnProperty('complemento')) {
        obj['complemento'] = ApiClient.convertToType(data['complemento'], 'String');
      }
      if (data.hasOwnProperty('pontoReferencia')) {
        obj['pontoReferencia'] = ApiClient.convertToType(data['pontoReferencia'], 'String');
      }
      if (data.hasOwnProperty('bairro')) {
        obj['bairro'] = ApiClient.convertToType(data['bairro'], 'String');
      }
      if (data.hasOwnProperty('cidade')) {
        obj['cidade'] = ApiClient.convertToType(data['cidade'], 'String');
      }
      if (data.hasOwnProperty('uf')) {
        obj['uf'] = ApiClient.convertToType(data['uf'], 'String');
      }
      if (data.hasOwnProperty('pais')) {
        obj['pais'] = ApiClient.convertToType(data['pais'], 'String');
      }
      if (data.hasOwnProperty('dataInclusao')) {
        obj['dataInclusao'] = ApiClient.convertToType(data['dataInclusao'], 'String');
      }
      if (data.hasOwnProperty('dataUltimaAtualizacao')) {
        obj['dataUltimaAtualizacao'] = ApiClient.convertToType(data['dataUltimaAtualizacao'], 'String');
      }
    }
    return obj;
  }


  /**
   * C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Endere\u00C3\u00A7o (id).
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Pessoa a qual o endere\u00C3\u00A7o pertence (id)
   * @member {Integer} idPessoa
   */
  exports.prototype['idPessoa'] = undefined;

  /**
   * C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Tipo Endere\u00C3\u00A7o (id)
   * @member {Integer} idTipoEndereco
   */
  exports.prototype['idTipoEndereco'] = undefined;

  /**
   * Apresenta o C\u00C3\u00B3digo de Endere\u00C3\u00A7amento Postal (CEP) no formaro '58800000'
   * @member {String} cep
   */
  exports.prototype['cep'] = undefined;

  /**
   * Apresenta o nome do Logradouro
   * @member {String} logradouro
   */
  exports.prototype['logradouro'] = undefined;

  /**
   * Apresenta o n\u00C3\u00BAmero do endere\u00C3\u00A7o
   * @member {Integer} numero
   */
  exports.prototype['numero'] = undefined;

  /**
   * Apresenta descri\u00C3\u00A7oes complementares referente ao endere\u00C3\u00A7o
   * @member {String} complemento
   */
  exports.prototype['complemento'] = undefined;

  /**
   * Apresenta a descri\u00C3\u00A7\u00C3\u00A3o de ponto de refer\u00C3\u00AAncia do endere\u00C3\u00A7o
   * @member {String} pontoReferencia
   */
  exports.prototype['pontoReferencia'] = undefined;

  /**
   * Apresenta nome do bairro
   * @member {String} bairro
   */
  exports.prototype['bairro'] = undefined;

  /**
   * Apresenta nome da cidade
   * @member {String} cidade
   */
  exports.prototype['cidade'] = undefined;

  /**
   * Apresenta sigla da Unidade Federativa
   * @member {String} uf
   */
  exports.prototype['uf'] = undefined;

  /**
   * Apresenta nome do Pais
   * @member {String} pais
   */
  exports.prototype['pais'] = undefined;

  /**
   * Apresenta a data em que fora cadastrado o Endere\u00C3\u00A7o
   * @member {String} dataInclusao
   */
  exports.prototype['dataInclusao'] = undefined;

  /**
   * Data em que fora realizada a \u00C3\u00BAltima mudan\u00C3\u00A7a neste registro de endere\u00C3\u00A7o. Quando n\u00C3\u00A3o tiver ocorrido mudan\u00C3\u00A7a, conter\u00C3\u00A1 a mesma informa\u00C3\u00A7\u00C3\u00A3o que o campo dataInclusao
   * @member {String} dataUltimaAtualizacao
   */
  exports.prototype['dataUltimaAtualizacao'] = undefined;




  return exports;
}));
