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
   * @version 2.66.1
   */

  /**
   * Constructs a new <code>OrigemComercialResponse</code>.
   * {{{origem_comercial_response_description}}}
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
   * {{{origem_comercial_response_id_value}}}
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * {{{origem_comercial_response_nome_value}}}
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;

  /**
   * {{{origem_comercial_response_descricao_value}}}
   * @member {String} descricao
   */
  exports.prototype['descricao'] = undefined;

  /**
   * {{{origem_comercial_response_produtos_origem_value}}}
   * @member {Array.<module:model/ProdutoOrigemResponse>} produtosOrigem
   */
  exports.prototype['produtosOrigem'] = undefined;

  /**
   * {{{origem_comercial_response_id_estabelecimento_value}}}
   * @member {Integer} idEstabelecimento
   */
  exports.prototype['idEstabelecimento'] = undefined;

  /**
   * {{{origem_comercial_response_id_tipo_origem_comercial_value}}}
   * @member {Integer} idTipoOrigemComercial
   */
  exports.prototype['idTipoOrigemComercial'] = undefined;

  /**
   * {{{origem_comercial_response_nome_tipo_origem_comercial_value}}}
   * @member {String} nomeTipoOrigemComercial
   */
  exports.prototype['nomeTipoOrigemComercial'] = undefined;

  /**
   * {{{origem_comercial_response_id_grupo_origem_comercial_value}}}
   * @member {Integer} idGrupoOrigemComercial
   */
  exports.prototype['idGrupoOrigemComercial'] = undefined;

  /**
   * {{{origem_comercial_response_nome_grupo_origem_comercial_value}}}
   * @member {String} nomeGrupoOrigemComercial
   */
  exports.prototype['nomeGrupoOrigemComercial'] = undefined;

  /**
   * {{{origem_comercial_response_status_value}}}
   * @member {Integer} status
   */
  exports.prototype['status'] = undefined;

  /**
   * {{{origem_comercial_response_flag_pre_aprovado_value}}}
   * @member {Boolean} flagPreAprovado
   */
  exports.prototype['flagPreAprovado'] = undefined;

  /**
   * {{{origem_comercial_response_flag_aprovacao_imediata_value}}}
   * @member {Boolean} flagAprovacaoImediata
   */
  exports.prototype['flagAprovacaoImediata'] = undefined;

  /**
   * {{{origem_comercial_response_nome_fantasia_plastico_value}}}
   * @member {String} nomeFantasiaPlastico
   */
  exports.prototype['nomeFantasiaPlastico'] = undefined;

  /**
   * {{{origem_comercial_response_flag_cartao_provisorio_value}}}
   * @member {Boolean} flagCartaoProvisorio
   */
  exports.prototype['flagCartaoProvisorio'] = undefined;

  /**
   * {{{origem_comercial_response_flag_cartao_definitivo_value}}}
   * @member {Boolean} flagCartaoDefinitivo
   */
  exports.prototype['flagCartaoDefinitivo'] = undefined;

  /**
   * {{{origem_comercial_response_usuario_value}}}
   * @member {String} usuario
   */
  exports.prototype['usuario'] = undefined;

  /**
   * {{{origem_comercial_response_senha_value}}}
   * @member {String} senha
   */
  exports.prototype['senha'] = undefined;

  /**
   * {{{origem_comercial_response_flag_origem_externa_value}}}
   * @member {Boolean} flagOrigemExterna
   */
  exports.prototype['flagOrigemExterna'] = undefined;

  /**
   * {{{origem_comercial_response_flag_modificado_value}}}
   * @member {Boolean} flagModificado
   */
  exports.prototype['flagModificado'] = undefined;

  /**
   * {{{origem_comercial_response_flag_envia_fatura_usuario_value}}}
   * @member {Boolean} flagEnviaFaturaUsuario
   */
  exports.prototype['flagEnviaFaturaUsuario'] = undefined;

  /**
   * {{{origem_comercial_response_flag_credito_faturamento_value}}}
   * @member {Boolean} flagCreditoFaturamento
   */
  exports.prototype['flagCreditoFaturamento'] = undefined;

  /**
   * {{{origem_comercial_response_flag_concede_limite_provisorio_value}}}
   * @member {Boolean} flagConcedeLimiteProvisorio
   */
  exports.prototype['flagConcedeLimiteProvisorio'] = undefined;

  /**
   * {{{origem_comercial_response_flag_digitalizar_doc_value}}}
   * @member {Boolean} flagDigitalizarDoc
   */
  exports.prototype['flagDigitalizarDoc'] = undefined;

  /**
   * {{{origem_comercial_response_flag_embossing_loja_value}}}
   * @member {Boolean} flagEmbossingLoja
   */
  exports.prototype['flagEmbossingLoja'] = undefined;

  /**
   * {{{origem_comercial_response_flag_consulta_previa_value}}}
   * @member {Boolean} flagConsultaPrevia
   */
  exports.prototype['flagConsultaPrevia'] = undefined;

  /**
   * {{{origem_comercial_response_tipo_pessoa_value}}}
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
