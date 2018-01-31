(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './ProdutoOrigemResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ProdutoOrigemResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.OrigemComercialResponse = factory(root.Pier.ApiClient, root.Pier.ProdutoOrigemResponse);
  }
}(this, function(ApiClient, ProdutoOrigemResponse) {
  'use strict';

  /**
   * The OrigemComercialResponse model module.
   * @module model/OrigemComercialResponse
   * @version 2.50.19
   */

  /**
   * Constructs a new <code>OrigemComercialResponse</code>.
   * Origem Comercial
   * @alias module:model/OrigemComercialResponse
   * @class
   * @param id
   * @param nome
   * @param descricao
   * @param produtosOrigem
   * @param idEstabelecimento
   * @param idTipoOrigemComercial
   * @param nomeTipoOrigemComercial
   * @param idGrupoOrigemComercial
   * @param nomeGrupoOrigemComercial
   * @param status
   */
  var exports = function(id, nome, descricao, produtosOrigem, idEstabelecimento, idTipoOrigemComercial, nomeTipoOrigemComercial, idGrupoOrigemComercial, nomeGrupoOrigemComercial, status) {

    this['id'] = id;
    this['nome'] = nome;
    this['descricao'] = descricao;
    this['produtosOrigem'] = produtosOrigem;
    this['idEstabelecimento'] = idEstabelecimento;
    this['idTipoOrigemComercial'] = idTipoOrigemComercial;
    this['nomeTipoOrigemComercial'] = nomeTipoOrigemComercial;
    this['idGrupoOrigemComercial'] = idGrupoOrigemComercial;
    this['nomeGrupoOrigemComercial'] = nomeGrupoOrigemComercial;
    this['status'] = status;
  };

  /**
   * Constructs a <code>OrigemComercialResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrigemComercialResponse} obj Optional instance to populate.
   * @return {module:model/OrigemComercialResponse} The populated <code>OrigemComercialResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('nome')) {
        obj['nome'] = ApiClient.convertToType(data['nome'], 'String');
      }
      if (data.hasOwnProperty('descricao')) {
        obj['descricao'] = ApiClient.convertToType(data['descricao'], 'String');
      }
      if (data.hasOwnProperty('produtosOrigem')) {
        obj['produtosOrigem'] = ApiClient.convertToType(data['produtosOrigem'], [ProdutoOrigemResponse]);
      }
      if (data.hasOwnProperty('idEstabelecimento')) {
        obj['idEstabelecimento'] = ApiClient.convertToType(data['idEstabelecimento'], 'Integer');
      }
      if (data.hasOwnProperty('idTipoOrigemComercial')) {
        obj['idTipoOrigemComercial'] = ApiClient.convertToType(data['idTipoOrigemComercial'], 'Integer');
      }
      if (data.hasOwnProperty('nomeTipoOrigemComercial')) {
        obj['nomeTipoOrigemComercial'] = ApiClient.convertToType(data['nomeTipoOrigemComercial'], 'String');
      }
      if (data.hasOwnProperty('idGrupoOrigemComercial')) {
        obj['idGrupoOrigemComercial'] = ApiClient.convertToType(data['idGrupoOrigemComercial'], 'Integer');
      }
      if (data.hasOwnProperty('nomeGrupoOrigemComercial')) {
        obj['nomeGrupoOrigemComercial'] = ApiClient.convertToType(data['nomeGrupoOrigemComercial'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'Boolean');
      }
    }
    return obj;
  }


  /**
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da Origem Comercial
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * Nome da origem comercial
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;

  /**
   * Descri\u00C3\u00A7\u00C3\u00A3o completa do nome da Origem Comercial
   * @member {String} descricao
   */
  exports.prototype['descricao'] = undefined;

  /**
   * Lista de  ProdutosOrigem associados \u00C3\u00A0 Origem comercial
   * @member {Array.<module:model/ProdutoOrigemResponse>} produtosOrigem
   */
  exports.prototype['produtosOrigem'] = undefined;

  /**
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do Estabelecimento
   * @member {Integer} idEstabelecimento
   */
  exports.prototype['idEstabelecimento'] = undefined;

  /**
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do Tipo da Origem Comercial
   * @member {Integer} idTipoOrigemComercial
   */
  exports.prototype['idTipoOrigemComercial'] = undefined;

  /**
   * Nome do Tipo da Origem Comercial
   * @member {String} nomeTipoOrigemComercial
   */
  exports.prototype['nomeTipoOrigemComercial'] = undefined;

  /**
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do Grupo a qual a Origem Comercial pertence
   * @member {Integer} idGrupoOrigemComercial
   */
  exports.prototype['idGrupoOrigemComercial'] = undefined;

  /**
   * Nome do Grupo a qual a Origem Comercial pertence
   * @member {String} nomeGrupoOrigemComercial
   */
  exports.prototype['nomeGrupoOrigemComercial'] = undefined;

  /**
   * Status da origem comercial
   * @member {Boolean} status
   */
  exports.prototype['status'] = undefined;




  return exports;
}));
