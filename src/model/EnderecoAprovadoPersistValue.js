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
    root.Pier.EnderecoAprovadoPersistValue = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The EnderecoAprovadoPersistValue model module.
   * @module model/EnderecoAprovadoPersistValue
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>EnderecoAprovadoPersistValue</code>.
   * {{{endereco_aprovado_persist_description}}}
   * @alias module:model/EnderecoAprovadoPersistValue
   * @class
   * @param idTipoEndereco
   * @param cidade
   * @param uf
   * @param enderecoCorrespondencia
   */
  var exports = function(idTipoEndereco, cidade, uf, enderecoCorrespondencia) {

    this['idTipoEndereco'] = idTipoEndereco;






    this['cidade'] = cidade;
    this['uf'] = uf;

    this['enderecoCorrespondencia'] = enderecoCorrespondencia;
  };

  /**
   * Constructs a <code>EnderecoAprovadoPersistValue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EnderecoAprovadoPersistValue} obj Optional instance to populate.
   * @return {module:model/EnderecoAprovadoPersistValue} The populated <code>EnderecoAprovadoPersistValue</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

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
      if (data.hasOwnProperty('enderecoCorrespondencia')) {
        obj['enderecoCorrespondencia'] = ApiClient.convertToType(data['enderecoCorrespondencia'], 'Boolean');
      }
    }
    return obj;
  }


  /**
   * {{{endereco_aprovado_persist_id_tipo_endereco_value}}}
   * @member {Integer} idTipoEndereco
   */
  exports.prototype['idTipoEndereco'] = undefined;

  /**
   * {{{endereco_aprovado_persist_cep_value}}}
   * @member {String} cep
   */
  exports.prototype['cep'] = undefined;

  /**
   * {{{endereco_aprovado_persist_logradouro_value}}}
   * @member {String} logradouro
   */
  exports.prototype['logradouro'] = undefined;

  /**
   * {{{endereco_aprovado_persist_numero_value}}}
   * @member {Integer} numero
   */
  exports.prototype['numero'] = undefined;

  /**
   * {{{endereco_aprovado_persist_complemento_value}}}
   * @member {String} complemento
   */
  exports.prototype['complemento'] = undefined;

  /**
   * {{{endereco_aprovado_persist_ponto_referencia_value}}}
   * @member {String} pontoReferencia
   */
  exports.prototype['pontoReferencia'] = undefined;

  /**
   * {{{endereco_aprovado_persist_bairro_value}}}
   * @member {String} bairro
   */
  exports.prototype['bairro'] = undefined;

  /**
   * {{{endereco_aprovado_persist_cidade_value}}}
   * @member {String} cidade
   */
  exports.prototype['cidade'] = undefined;

  /**
   * {{{endereco_aprovado_persist_uf_value}}}
   * @member {String} uf
   */
  exports.prototype['uf'] = undefined;

  /**
   * {{{endereco_aprovado_persist_pais_value}}}
   * @member {String} pais
   */
  exports.prototype['pais'] = undefined;

  /**
   * {{{endereco_aprovado_persist_endereco_correspondencia_value}}}
   * @member {Boolean} enderecoCorrespondencia
   */
  exports.prototype['enderecoCorrespondencia'] = undefined;




  return exports;
}));
