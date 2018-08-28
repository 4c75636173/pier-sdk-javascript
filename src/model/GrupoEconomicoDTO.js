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
    root.Pier.GrupoEconomicoDTO = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GrupoEconomicoDTO model module.
   * @module model/GrupoEconomicoDTO
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>GrupoEconomicoDTO</code>.
   * {{{grupo_economico_d_t_o_description}}}
   * @alias module:model/GrupoEconomicoDTO
   * @class
   * @param razaoSocial
   * @param numeroReceitaFederal
   * @param periodicidade
   * @param idCredorRAV
   * @param percentualRAV
   */
  var exports = function(razaoSocial, numeroReceitaFederal, periodicidade, idCredorRAV, percentualRAV) {

    this['razaoSocial'] = razaoSocial;

    this['numeroReceitaFederal'] = numeroReceitaFederal;







    this['periodicidade'] = periodicidade;







    this['idCredorRAV'] = idCredorRAV;
    this['percentualRAV'] = percentualRAV;





  };

  /**
   * Constructs a <code>GrupoEconomicoDTO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GrupoEconomicoDTO} obj Optional instance to populate.
   * @return {module:model/GrupoEconomicoDTO} The populated <code>GrupoEconomicoDTO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('razaoSocial')) {
        obj['razaoSocial'] = ApiClient.convertToType(data['razaoSocial'], 'String');
      }
      if (data.hasOwnProperty('nomeCredor')) {
        obj['nomeCredor'] = ApiClient.convertToType(data['nomeCredor'], 'String');
      }
      if (data.hasOwnProperty('numeroReceitaFederal')) {
        obj['numeroReceitaFederal'] = ApiClient.convertToType(data['numeroReceitaFederal'], 'String');
      }
      if (data.hasOwnProperty('inscricaoEstadual')) {
        obj['inscricaoEstadual'] = ApiClient.convertToType(data['inscricaoEstadual'], 'String');
      }
      if (data.hasOwnProperty('contato')) {
        obj['contato'] = ApiClient.convertToType(data['contato'], 'String');
      }
      if (data.hasOwnProperty('banco')) {
        obj['banco'] = ApiClient.convertToType(data['banco'], 'Integer');
      }
      if (data.hasOwnProperty('agencia')) {
        obj['agencia'] = ApiClient.convertToType(data['agencia'], 'Integer');
      }
      if (data.hasOwnProperty('digitoAgencia')) {
        obj['digitoAgencia'] = ApiClient.convertToType(data['digitoAgencia'], 'String');
      }
      if (data.hasOwnProperty('contaCorrente')) {
        obj['contaCorrente'] = ApiClient.convertToType(data['contaCorrente'], 'String');
      }
      if (data.hasOwnProperty('digitoContaCorrente')) {
        obj['digitoContaCorrente'] = ApiClient.convertToType(data['digitoContaCorrente'], 'String');
      }
      if (data.hasOwnProperty('periodicidade')) {
        obj['periodicidade'] = ApiClient.convertToType(data['periodicidade'], 'String');
      }
      if (data.hasOwnProperty('pagamentoSemanal')) {
        obj['pagamentoSemanal'] = ApiClient.convertToType(data['pagamentoSemanal'], 'String');
      }
      if (data.hasOwnProperty('pagamentoMensal')) {
        obj['pagamentoMensal'] = ApiClient.convertToType(data['pagamentoMensal'], 'Integer');
      }
      if (data.hasOwnProperty('pagamentoDecendialPrimeiro')) {
        obj['pagamentoDecendialPrimeiro'] = ApiClient.convertToType(data['pagamentoDecendialPrimeiro'], 'Integer');
      }
      if (data.hasOwnProperty('pagamentoDecendialSegundo')) {
        obj['pagamentoDecendialSegundo'] = ApiClient.convertToType(data['pagamentoDecendialSegundo'], 'Integer');
      }
      if (data.hasOwnProperty('pagamentoDecendialTerceiro')) {
        obj['pagamentoDecendialTerceiro'] = ApiClient.convertToType(data['pagamentoDecendialTerceiro'], 'Integer');
      }
      if (data.hasOwnProperty('pagamentoQuinzenalPrimeiro')) {
        obj['pagamentoQuinzenalPrimeiro'] = ApiClient.convertToType(data['pagamentoQuinzenalPrimeiro'], 'Integer');
      }
      if (data.hasOwnProperty('pagamentoQuinzenalSegundo')) {
        obj['pagamentoQuinzenalSegundo'] = ApiClient.convertToType(data['pagamentoQuinzenalSegundo'], 'Integer');
      }
      if (data.hasOwnProperty('idCredorRAV')) {
        obj['idCredorRAV'] = ApiClient.convertToType(data['idCredorRAV'], 'Integer');
      }
      if (data.hasOwnProperty('percentualRAV')) {
        obj['percentualRAV'] = ApiClient.convertToType(data['percentualRAV'], 'Number');
      }
      if (data.hasOwnProperty('recebeRAV')) {
        obj['recebeRAV'] = ApiClient.convertToType(data['recebeRAV'], 'String');
      }
      if (data.hasOwnProperty('percentualMultiplica')) {
        obj['percentualMultiplica'] = ApiClient.convertToType(data['percentualMultiplica'], 'Number');
      }
      if (data.hasOwnProperty('taxaAdm')) {
        obj['taxaAdm'] = ApiClient.convertToType(data['taxaAdm'], 'Number');
      }
      if (data.hasOwnProperty('taxaBanco')) {
        obj['taxaBanco'] = ApiClient.convertToType(data['taxaBanco'], 'Number');
      }
      if (data.hasOwnProperty('limiteRAV')) {
        obj['limiteRAV'] = ApiClient.convertToType(data['limiteRAV'], 'Number');
      }
    }
    return obj;
  }


  /**
   * {{{grupo_economico_d_t_o_razao_social_value}}}
   * @member {String} razaoSocial
   */
  exports.prototype['razaoSocial'] = undefined;

  /**
   * {{{grupo_economico_d_t_o_nome_credor_value}}}
   * @member {String} nomeCredor
   */
  exports.prototype['nomeCredor'] = undefined;

  /**
   * {{{grupo_economico_d_t_o_numero_receita_federal_value}}}
   * @member {String} numeroReceitaFederal
   */
  exports.prototype['numeroReceitaFederal'] = undefined;

  /**
   * {{{grupo_economico_d_t_o_inscricao_estadual_value}}}
   * @member {String} inscricaoEstadual
   */
  exports.prototype['inscricaoEstadual'] = undefined;

  /**
   * {{{grupo_economico_d_t_o_contato_value}}}
   * @member {String} contato
   */
  exports.prototype['contato'] = undefined;

  /**
   * {{{grupo_economico_d_t_o_banco_value}}}
   * @member {Integer} banco
   */
  exports.prototype['banco'] = undefined;

  /**
   * {{{grupo_economico_d_t_o_agencia_value}}}
   * @member {Integer} agencia
   */
  exports.prototype['agencia'] = undefined;

  /**
   * {{{grupo_economico_d_t_o_digito_agencia_value}}}
   * @member {String} digitoAgencia
   */
  exports.prototype['digitoAgencia'] = undefined;

  /**
   * {{{grupo_economico_d_t_o_conta_corrente_value}}}
   * @member {String} contaCorrente
   */
  exports.prototype['contaCorrente'] = undefined;

  /**
   * {{{grupo_economico_d_t_o_digito_conta_corrente_value}}}
   * @member {String} digitoContaCorrente
   */
  exports.prototype['digitoContaCorrente'] = undefined;

  /**
   * {{{grupo_economico_d_t_o_periodicidade_value}}}
   * @member {module:model/GrupoEconomicoDTO.PeriodicidadeEnum} periodicidade
   */
  exports.prototype['periodicidade'] = undefined;

  /**
   * {{{grupo_economico_d_t_o_pagamento_semanal_value}}}
   * @member {module:model/GrupoEconomicoDTO.PagamentoSemanalEnum} pagamentoSemanal
   */
  exports.prototype['pagamentoSemanal'] = undefined;

  /**
   * {{{grupo_economico_d_t_o_pagamento_mensal_value}}}
   * @member {Integer} pagamentoMensal
   */
  exports.prototype['pagamentoMensal'] = undefined;

  /**
   * {{{grupo_economico_d_t_o_pagamento_decendial_primeiro_value}}}
   * @member {Integer} pagamentoDecendialPrimeiro
   */
  exports.prototype['pagamentoDecendialPrimeiro'] = undefined;

  /**
   * {{{grupo_economico_d_t_o_pagamento_decendial_segundo_value}}}
   * @member {Integer} pagamentoDecendialSegundo
   */
  exports.prototype['pagamentoDecendialSegundo'] = undefined;

  /**
   * {{{grupo_economico_d_t_o_pagamento_decendial_terceiro_value}}}
   * @member {Integer} pagamentoDecendialTerceiro
   */
  exports.prototype['pagamentoDecendialTerceiro'] = undefined;

  /**
   * {{{grupo_economico_d_t_o_pagamento_quinzenal_primeiro_value}}}
   * @member {Integer} pagamentoQuinzenalPrimeiro
   */
  exports.prototype['pagamentoQuinzenalPrimeiro'] = undefined;

  /**
   * {{{grupo_economico_d_t_o_pagamento_quinzenal_segundo_value}}}
   * @member {Integer} pagamentoQuinzenalSegundo
   */
  exports.prototype['pagamentoQuinzenalSegundo'] = undefined;

  /**
   * {{{grupo_economico_d_t_o_id_credor_r_a_v_value}}}
   * @member {Integer} idCredorRAV
   */
  exports.prototype['idCredorRAV'] = undefined;

  /**
   * {{{grupo_economico_d_t_o_percentual_r_a_v_value}}}
   * @member {Number} percentualRAV
   */
  exports.prototype['percentualRAV'] = undefined;

  /**
   * {{{grupo_economico_d_t_o_recebe_r_a_v_value}}}
   * @member {module:model/GrupoEconomicoDTO.RecebeRAVEnum} recebeRAV
   */
  exports.prototype['recebeRAV'] = undefined;

  /**
   * {{{grupo_economico_d_t_o_percentual_multiplica_value}}}
   * @member {Number} percentualMultiplica
   */
  exports.prototype['percentualMultiplica'] = undefined;

  /**
   * {{{grupo_economico_d_t_o_taxa_adm_value}}}
   * @member {Number} taxaAdm
   */
  exports.prototype['taxaAdm'] = undefined;

  /**
   * {{{grupo_economico_d_t_o_taxa_banco_value}}}
   * @member {Number} taxaBanco
   */
  exports.prototype['taxaBanco'] = undefined;

  /**
   * {{{grupo_economico_d_t_o_limite_r_a_v_value}}}
   * @member {Number} limiteRAV
   */
  exports.prototype['limiteRAV'] = undefined;


  /**
   * Allowed values for the <code>periodicidade</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PeriodicidadeEnum = { 
    /**
     * value: DIARIO
     * @const
     */
    DIARIO: "DIARIO",
    
    /**
     * value: SEMANAL
     * @const
     */
    SEMANAL: "SEMANAL",
    
    /**
     * value: MENSAL
     * @const
     */
    MENSAL: "MENSAL",
    
    /**
     * value: DECENDIAL
     * @const
     */
    DECENDIAL: "DECENDIAL",
    
    /**
     * value: QUINZENAL
     * @const
     */
    QUINZENAL: "QUINZENAL"
  };  /**
   * Allowed values for the <code>pagamentoSemanal</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PagamentoSemanalEnum = { 
    /**
     * value: SEGUNDA
     * @const
     */
    SEGUNDA: "SEGUNDA",
    
    /**
     * value: TERCA
     * @const
     */
    TERCA: "TERCA",
    
    /**
     * value: QUARTA
     * @const
     */
    QUARTA: "QUARTA",
    
    /**
     * value: QUINTA
     * @const
     */
    QUINTA: "QUINTA",
    
    /**
     * value: SEXTA
     * @const
     */
    SEXTA: "SEXTA",
    
    /**
     * value: SABADO
     * @const
     */
    SABADO: "SABADO",
    
    /**
     * value: DOMINGO
     * @const
     */
    DOMINGO: "DOMINGO"
  };  /**
   * Allowed values for the <code>recebeRAV</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RecebeRAVEnum = { 
    /**
     * value: NAO_TEM_PERMISSAO_RAV
     * @const
     */
    NAO_TEM_PERMISSAO_RAV: "NAO_TEM_PERMISSAO_RAV",
    
    /**
     * value: CREDITO_RAV
     * @const
     */
    CREDITO_RAV: "CREDITO_RAV",
    
    /**
     * value: DEBITO_RAV
     * @const
     */
    DEBITO_RAV: "DEBITO_RAV"
  };

  return exports;
}));
