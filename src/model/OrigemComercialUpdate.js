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
    root.Pier.OrigemComercialUpdate = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The OrigemComercialUpdate model module.
   * @module model/OrigemComercialUpdate
   * @version 2.54.5
   */

  /**
   * Constructs a new <code>OrigemComercialUpdate</code>.
   * Par\u00C3\u00A2metros de requisi\u00C3\u00A7\u00C3\u00A3o para alterar origem comercial
   * @alias module:model/OrigemComercialUpdate
   * @class
   */
  var exports = function() {























  };

  /**
   * Constructs a <code>OrigemComercialUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrigemComercialUpdate} obj Optional instance to populate.
   * @return {module:model/OrigemComercialUpdate} The populated <code>OrigemComercialUpdate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('nome')) {
        obj['nome'] = ApiClient.convertToType(data['nome'], 'String');
      }
      if (data.hasOwnProperty('descricao')) {
        obj['descricao'] = ApiClient.convertToType(data['descricao'], 'String');
      }
      if (data.hasOwnProperty('idEstabelecimento')) {
        obj['idEstabelecimento'] = ApiClient.convertToType(data['idEstabelecimento'], 'Integer');
      }
      if (data.hasOwnProperty('idTipoOrigemComercial')) {
        obj['idTipoOrigemComercial'] = ApiClient.convertToType(data['idTipoOrigemComercial'], 'Integer');
      }
      if (data.hasOwnProperty('idGrupoOrigemComercial')) {
        obj['idGrupoOrigemComercial'] = ApiClient.convertToType(data['idGrupoOrigemComercial'], 'Integer');
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
   * Nome da origem comercial
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;

  /**
   * Descri\u00C3\u00A7\u00C3\u00A3o da origem comercial
   * @member {String} descricao
   */
  exports.prototype['descricao'] = undefined;

  /**
   * Identificador do estabelecimento
   * @member {Integer} idEstabelecimento
   */
  exports.prototype['idEstabelecimento'] = undefined;

  /**
   * Identificador do tipo de origem comercial
   * @member {Integer} idTipoOrigemComercial
   */
  exports.prototype['idTipoOrigemComercial'] = undefined;

  /**
   * Identificador do grupo de origem comercial
   * @member {Integer} idGrupoOrigemComercial
   */
  exports.prototype['idGrupoOrigemComercial'] = undefined;

  /**
   * Indica o status da origem comercial
   * @member {Integer} status
   */
  exports.prototype['status'] = undefined;

  /**
   * Indica se permite pr\u00C3\u00A9 aprova\u00C3\u00A7\u00C3\u00A3o
   * @member {Boolean} flagPreAprovado
   */
  exports.prototype['flagPreAprovado'] = undefined;

  /**
   * Indica se permite aprova\u00C3\u00A7\u00C3\u00A3o imediata
   * @member {Boolean} flagAprovacaoImediata
   */
  exports.prototype['flagAprovacaoImediata'] = undefined;

  /**
   * Nome fantasia impresso no pl\u00C3\u00A1stico
   * @member {String} nomeFantasiaPlastico
   */
  exports.prototype['nomeFantasiaPlastico'] = undefined;

  /**
   * Indica se permite cart\u00C3\u00A3o provis\u00C3\u00B3rio
   * @member {Boolean} flagCartaoProvisorio
   */
  exports.prototype['flagCartaoProvisorio'] = undefined;

  /**
   * Indica se permite cart\u00C3\u00A3o definitivo
   * @member {Boolean} flagCartaoDefinitivo
   */
  exports.prototype['flagCartaoDefinitivo'] = undefined;

  /**
   * Usu\u00C3\u00A1rio para autentica\u00C3\u00A7\u00C3\u00A3o
   * @member {String} usuario
   */
  exports.prototype['usuario'] = undefined;

  /**
   * Senha para autentica\u00C3\u00A7\u00C3\u00A3o
   * @member {String} senha
   */
  exports.prototype['senha'] = undefined;

  /**
   * Indica se \u00C3\u00A9 origem externa
   * @member {Boolean} flagOrigemExterna
   */
  exports.prototype['flagOrigemExterna'] = undefined;

  /**
   * Indica se h\u00C3\u00A1 modifica\u00C3\u00A7\u00C3\u00A3o
   * @member {Boolean} flagModificado
   */
  exports.prototype['flagModificado'] = undefined;

  /**
   * Indica se envia fatura
   * @member {Boolean} flagEnviaFaturaUsuario
   */
  exports.prototype['flagEnviaFaturaUsuario'] = undefined;

  /**
   * Indica se permite cr\u00C3\u00A9dito de faturamento
   * @member {Boolean} flagCreditoFaturamento
   */
  exports.prototype['flagCreditoFaturamento'] = undefined;

  /**
   * Indica se concede limite provis\u00C3\u00B3rio
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
   * Indica se realiza consulta pr\u00C3\u00A9via
   * @member {Boolean} flagConsultaPrevia
   */
  exports.prototype['flagConsultaPrevia'] = undefined;

  /**
   * Tipo de pessoa
   * @member {module:model/OrigemComercialUpdate.TipoPessoaEnum} tipoPessoa
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
