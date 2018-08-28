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
    root.Pier.OrigemComercialPersist = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The OrigemComercialPersist model module.
   * @module model/OrigemComercialPersist
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>OrigemComercialPersist</code>.
   * {{{origem_comercial_persist_description}}}
   * @alias module:model/OrigemComercialPersist
   * @class
   */
  var exports = function() {
























  };

  /**
   * Constructs a <code>OrigemComercialPersist</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrigemComercialPersist} obj Optional instance to populate.
   * @return {module:model/OrigemComercialPersist} The populated <code>OrigemComercialPersist</code> instance.
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
      if (data.hasOwnProperty('idProduto')) {
        obj['idProduto'] = ApiClient.convertToType(data['idProduto'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * {{{origem_comercial_update_nome_value}}}
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;

  /**
   * {{{origem_comercial_update_descricao_value}}}
   * @member {String} descricao
   */
  exports.prototype['descricao'] = undefined;

  /**
   * {{{origem_comercial_update_id_estabelecimento_value}}}
   * @member {Integer} idEstabelecimento
   */
  exports.prototype['idEstabelecimento'] = undefined;

  /**
   * {{{origem_comercial_update_id_tipo_origem_comercial_value}}}
   * @member {Integer} idTipoOrigemComercial
   */
  exports.prototype['idTipoOrigemComercial'] = undefined;

  /**
   * {{{origem_comercial_update_id_grupo_origem_comercial_value}}}
   * @member {Integer} idGrupoOrigemComercial
   */
  exports.prototype['idGrupoOrigemComercial'] = undefined;

  /**
   * {{{origem_comercial_update_status_value}}}
   * @member {Integer} status
   */
  exports.prototype['status'] = undefined;

  /**
   * {{{origem_comercial_update_flag_pre_aprovado_value}}}
   * @member {Boolean} flagPreAprovado
   */
  exports.prototype['flagPreAprovado'] = undefined;

  /**
   * {{{origem_comercial_update_flag_aprovacao_imediata_value}}}
   * @member {Boolean} flagAprovacaoImediata
   */
  exports.prototype['flagAprovacaoImediata'] = undefined;

  /**
   * {{{origem_comercial_update_nome_fantasia_plastico_value}}}
   * @member {String} nomeFantasiaPlastico
   */
  exports.prototype['nomeFantasiaPlastico'] = undefined;

  /**
   * {{{origem_comercial_update_flag_cartao_provisorio_value}}}
   * @member {Boolean} flagCartaoProvisorio
   */
  exports.prototype['flagCartaoProvisorio'] = undefined;

  /**
   * {{{origem_comercial_update_flag_cartao_definitivo_value}}}
   * @member {Boolean} flagCartaoDefinitivo
   */
  exports.prototype['flagCartaoDefinitivo'] = undefined;

  /**
   * {{{origem_comercial_update_usuario_value}}}
   * @member {String} usuario
   */
  exports.prototype['usuario'] = undefined;

  /**
   * {{{origem_comercial_update_senha_value}}}
   * @member {String} senha
   */
  exports.prototype['senha'] = undefined;

  /**
   * {{{origem_comercial_update_flag_origem_externa_value}}}
   * @member {Boolean} flagOrigemExterna
   */
  exports.prototype['flagOrigemExterna'] = undefined;

  /**
   * {{{origem_comercial_update_flag_modificado_value}}}
   * @member {Boolean} flagModificado
   */
  exports.prototype['flagModificado'] = undefined;

  /**
   * {{{origem_comercial_update_flag_envia_fatura_usuario_value}}}
   * @member {Boolean} flagEnviaFaturaUsuario
   */
  exports.prototype['flagEnviaFaturaUsuario'] = undefined;

  /**
   * {{{origem_comercial_update_flag_credito_faturamento_value}}}
   * @member {Boolean} flagCreditoFaturamento
   */
  exports.prototype['flagCreditoFaturamento'] = undefined;

  /**
   * {{{origem_comercial_update_flag_concede_limite_provisorio_value}}}
   * @member {Boolean} flagConcedeLimiteProvisorio
   */
  exports.prototype['flagConcedeLimiteProvisorio'] = undefined;

  /**
   * {{{origem_comercial_update_flag_digitalizar_doc_value}}}
   * @member {Boolean} flagDigitalizarDoc
   */
  exports.prototype['flagDigitalizarDoc'] = undefined;

  /**
   * {{{origem_comercial_update_flag_embossing_loja_value}}}
   * @member {Boolean} flagEmbossingLoja
   */
  exports.prototype['flagEmbossingLoja'] = undefined;

  /**
   * {{{origem_comercial_update_flag_consulta_previa_value}}}
   * @member {Boolean} flagConsultaPrevia
   */
  exports.prototype['flagConsultaPrevia'] = undefined;

  /**
   * {{{origem_comercial_update_tipo_pessoa_value}}}
   * @member {module:model/OrigemComercialPersist.TipoPessoaEnum} tipoPessoa
   */
  exports.prototype['tipoPessoa'] = undefined;

  /**
   * {{{origem_comercial_persist_id_produto_value}}}
   * @member {Integer} idProduto
   */
  exports.prototype['idProduto'] = undefined;


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
