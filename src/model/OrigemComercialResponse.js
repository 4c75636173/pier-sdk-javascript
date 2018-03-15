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
   * @version 2.57.0
   */

  /**
   * Constructs a new <code>OrigemComercialResponse</code>.
   * Representa\u00E7\u00E3o da resposta do recurso de origem comercial
   * @alias module:model/OrigemComercialResponse
   * @class
   */
  var exports = function() {



























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
        obj['status'] = ApiClient.convertToType(data['status'], 'Integer');
      }
      if (data.hasOwnProperty('flagPreAprovado')) {
        obj['flagPreAprovado'] = ApiClient.convertToType(data['flagPreAprovado'], 'Boolean');
      }
      if (data.hasOwnProperty('flagAprovacaoImediata')) {
        obj['flagAprovacaoImediata'] = ApiClient.convertToType(data['flagAprovacaoImediata'], 'Boolean');
      }
      if (data.hasOwnProperty('nomeFantasiaPlastico')) {
        obj['nomeFantasiaPlastico'] = ApiClient.convertToType(data['nomeFantasiaPlastico'], 'String');
      }
      if (data.hasOwnProperty('flagCartaoProvisorio')) {
        obj['flagCartaoProvisorio'] = ApiClient.convertToType(data['flagCartaoProvisorio'], 'Boolean');
      }
      if (data.hasOwnProperty('flagCartaoDefinitivo')) {
        obj['flagCartaoDefinitivo'] = ApiClient.convertToType(data['flagCartaoDefinitivo'], 'Boolean');
      }
      if (data.hasOwnProperty('usuario')) {
        obj['usuario'] = ApiClient.convertToType(data['usuario'], 'String');
      }
      if (data.hasOwnProperty('senha')) {
        obj['senha'] = ApiClient.convertToType(data['senha'], 'String');
      }
      if (data.hasOwnProperty('flagOrigemExterna')) {
        obj['flagOrigemExterna'] = ApiClient.convertToType(data['flagOrigemExterna'], 'Boolean');
      }
      if (data.hasOwnProperty('flagModificado')) {
        obj['flagModificado'] = ApiClient.convertToType(data['flagModificado'], 'Boolean');
      }
      if (data.hasOwnProperty('flagEnviaFaturaUsuario')) {
        obj['flagEnviaFaturaUsuario'] = ApiClient.convertToType(data['flagEnviaFaturaUsuario'], 'Boolean');
      }
      if (data.hasOwnProperty('flagCreditoFaturamento')) {
        obj['flagCreditoFaturamento'] = ApiClient.convertToType(data['flagCreditoFaturamento'], 'Boolean');
      }
      if (data.hasOwnProperty('flagConcedeLimiteProvisorio')) {
        obj['flagConcedeLimiteProvisorio'] = ApiClient.convertToType(data['flagConcedeLimiteProvisorio'], 'Boolean');
      }
      if (data.hasOwnProperty('flagDigitalizarDoc')) {
        obj['flagDigitalizarDoc'] = ApiClient.convertToType(data['flagDigitalizarDoc'], 'Boolean');
      }
      if (data.hasOwnProperty('flagEmbossingLoja')) {
        obj['flagEmbossingLoja'] = ApiClient.convertToType(data['flagEmbossingLoja'], 'Boolean');
      }
      if (data.hasOwnProperty('flagConsultaPrevia')) {
        obj['flagConsultaPrevia'] = ApiClient.convertToType(data['flagConsultaPrevia'], 'Boolean');
      }
      if (data.hasOwnProperty('tipoPessoa')) {
        obj['tipoPessoa'] = ApiClient.convertToType(data['tipoPessoa'], 'String');
      }
    }
    return obj;
  }


  /**
   * C\u00F3digo identificador do OrigemComercial
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * Nome da origem comercial
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;

  /**
   * Descri\u00E7\u00E3o completa do nome da Origem Comercial
   * @member {String} descricao
   */
  exports.prototype['descricao'] = undefined;

  /**
   * Produtos da origem comercial
   * @member {Array.<module:model/ProdutoOrigemResponse>} produtosOrigem
   */
  exports.prototype['produtosOrigem'] = undefined;

  /**
   * C\u00F3digo de identifica\u00E7\u00E3o do Estabelecimento
   * @member {Integer} idEstabelecimento
   */
  exports.prototype['idEstabelecimento'] = undefined;

  /**
   * C\u00F3digo de identifica\u00E7\u00E3o do Tipo da Origem Comercial
   * @member {Integer} idTipoOrigemComercial
   */
  exports.prototype['idTipoOrigemComercial'] = undefined;

  /**
   * Nome do Tipo da Origem Comercial
   * @member {String} nomeTipoOrigemComercial
   */
  exports.prototype['nomeTipoOrigemComercial'] = undefined;

  /**
   * Identificador do grupo da origem comercial
   * @member {Integer} idGrupoOrigemComercial
   */
  exports.prototype['idGrupoOrigemComercial'] = undefined;

  /**
   * Nome do grupo da origem comercial
   * @member {String} nomeGrupoOrigemComercial
   */
  exports.prototype['nomeGrupoOrigemComercial'] = undefined;

  /**
   * Indica o status da origem comercial
   * @member {Integer} status
   */
  exports.prototype['status'] = undefined;

  /**
   * Indica se permite pr\u00E9 aprova\u00E7\u00E3o
   * @member {Boolean} flagPreAprovado
   */
  exports.prototype['flagPreAprovado'] = undefined;

  /**
   * Indica se permite aprova\u00E7\u00E3o imediata
   * @member {Boolean} flagAprovacaoImediata
   */
  exports.prototype['flagAprovacaoImediata'] = undefined;

  /**
   * Nome fantasia impresso no pl\u00E1stico
   * @member {String} nomeFantasiaPlastico
   */
  exports.prototype['nomeFantasiaPlastico'] = undefined;

  /**
   * Indica se permite cart\u00E3o provis\u00F3rio
   * @member {Boolean} flagCartaoProvisorio
   */
  exports.prototype['flagCartaoProvisorio'] = undefined;

  /**
   * Indica se permite cart\u00E3o definitivo
   * @member {Boolean} flagCartaoDefinitivo
   */
  exports.prototype['flagCartaoDefinitivo'] = undefined;

  /**
   * Usu\u00E1rio para autentica\u00E7\u00E3o
   * @member {String} usuario
   */
  exports.prototype['usuario'] = undefined;

  /**
   * Senha para autentica\u00E7\u00E3o
   * @member {String} senha
   */
  exports.prototype['senha'] = undefined;

  /**
   * Indica se \u00E9 origem externa
   * @member {Boolean} flagOrigemExterna
   */
  exports.prototype['flagOrigemExterna'] = undefined;

  /**
   * Indica se h\u00E1 modifica\u00E7\u00E3o
   * @member {Boolean} flagModificado
   */
  exports.prototype['flagModificado'] = undefined;

  /**
   * Indica se envia fatura
   * @member {Boolean} flagEnviaFaturaUsuario
   */
  exports.prototype['flagEnviaFaturaUsuario'] = undefined;

  /**
   * Indica se permite cr\u00E9dito de faturamento
   * @member {Boolean} flagCreditoFaturamento
   */
  exports.prototype['flagCreditoFaturamento'] = undefined;

  /**
   * Indica se concede limite provis\u00F3rio
   * @member {Boolean} flagConcedeLimiteProvisorio
   */
  exports.prototype['flagConcedeLimiteProvisorio'] = undefined;

  /**
   * Indica se digitaliza documento
   * @member {Boolean} flagDigitalizarDoc
   */
  exports.prototype['flagDigitalizarDoc'] = undefined;

  /**
   * Indica se realiza embossing em loja
   * @member {Boolean} flagEmbossingLoja
   */
  exports.prototype['flagEmbossingLoja'] = undefined;

  /**
   * Indica se realiza consulta pr\u00E9via
   * @member {Boolean} flagConsultaPrevia
   */
  exports.prototype['flagConsultaPrevia'] = undefined;

  /**
   * Tipo de pessoa
   * @member {module:model/OrigemComercialResponse.TipoPessoaEnum} tipoPessoa
   */
  exports.prototype['tipoPessoa'] = undefined;


  /**
   * Allowed values for the <code>tipoPessoa</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TipoPessoaEnum = { 
    /**
     * value: PESSOA_FISICA
     * @const
     */
    FISICA: "PESSOA_FISICA",
    
    /**
     * value: PESSOA_JURIDICA
     * @const
     */
    JURIDICA: "PESSOA_JURIDICA"
  };

  return exports;
}));
