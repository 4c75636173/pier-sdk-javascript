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
    root.Pier.OperacaoCredorUpdate = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The OperacaoCredorUpdate model module.
   * @module model/OperacaoCredorUpdate
   * @version 2.68.0
   */

  /**
   * Constructs a new <code>OperacaoCredorUpdate</code>.
   * {{{operacao_credor_update_description}}}
   * @alias module:model/OperacaoCredorUpdate
   * @class
   * @param idOperacao
   * @param idGrupoEconomico
   * @param planoMinimo
   * @param planoMaximo
   */
  var exports = function(idOperacao, idGrupoEconomico, planoMinimo, planoMaximo) {

    this['idOperacao'] = idOperacao;
    this['idGrupoEconomico'] = idGrupoEconomico;








    this['planoMinimo'] = planoMinimo;
    this['planoMaximo'] = planoMaximo;
  };

  /**
   * Constructs a <code>OperacaoCredorUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OperacaoCredorUpdate} obj Optional instance to populate.
   * @return {module:model/OperacaoCredorUpdate} The populated <code>OperacaoCredorUpdate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('idOperacao')) {
        obj['idOperacao'] = ApiClient.convertToType(data['idOperacao'], 'Integer');
      }
      if (data.hasOwnProperty('idGrupoEconomico')) {
        obj['idGrupoEconomico'] = ApiClient.convertToType(data['idGrupoEconomico'], 'Integer');
      }
      if (data.hasOwnProperty('idProduto')) {
        obj['idProduto'] = ApiClient.convertToType(data['idProduto'], 'Integer');
      }
      if (data.hasOwnProperty('remuneracaoPercentual')) {
        obj['remuneracaoPercentual'] = ApiClient.convertToType(data['remuneracaoPercentual'], 'Number');
      }
      if (data.hasOwnProperty('remuneracaoFixa')) {
        obj['remuneracaoFixa'] = ApiClient.convertToType(data['remuneracaoFixa'], 'Number');
      }
      if (data.hasOwnProperty('periodicidade')) {
        obj['periodicidade'] = ApiClient.convertToType(data['periodicidade'], 'String');
      }
      if (data.hasOwnProperty('vencimentoPrimeiraParcela')) {
        obj['vencimentoPrimeiraParcela'] = ApiClient.convertToType(data['vencimentoPrimeiraParcela'], 'Integer');
      }
      if (data.hasOwnProperty('diasAfastamento')) {
        obj['diasAfastamento'] = ApiClient.convertToType(data['diasAfastamento'], 'Integer');
      }
      if (data.hasOwnProperty('fatorMultiplicador')) {
        obj['fatorMultiplicador'] = ApiClient.convertToType(data['fatorMultiplicador'], 'String');
      }
      if (data.hasOwnProperty('flagTaxaFixada')) {
        obj['flagTaxaFixada'] = ApiClient.convertToType(data['flagTaxaFixada'], 'Boolean');
      }
      if (data.hasOwnProperty('planoMinimo')) {
        obj['planoMinimo'] = ApiClient.convertToType(data['planoMinimo'], 'Integer');
      }
      if (data.hasOwnProperty('planoMaximo')) {
        obj['planoMaximo'] = ApiClient.convertToType(data['planoMaximo'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * {{{operacao_credor_update_id_operacao_value}}}
   * @member {Integer} idOperacao
   */
  exports.prototype['idOperacao'] = undefined;

  /**
   * {{{operacao_credor_update_id_grupo_economico_value}}}
   * @member {Integer} idGrupoEconomico
   */
  exports.prototype['idGrupoEconomico'] = undefined;

  /**
   * {{{operacao_credor_update_id_produto_value}}}
   * @member {Integer} idProduto
   */
  exports.prototype['idProduto'] = undefined;

  /**
   * {{{operacao_credor_update_remuneracao_percentual_value}}}
   * @member {Number} remuneracaoPercentual
   */
  exports.prototype['remuneracaoPercentual'] = undefined;

  /**
   * {{{operacao_credor_update_remuneracao_fixa_value}}}
   * @member {Number} remuneracaoFixa
   */
  exports.prototype['remuneracaoFixa'] = undefined;

  /**
   * {{{operacao_credor_update_periodicidade_value}}}
   * @member {module:model/OperacaoCredorUpdate.PeriodicidadeEnum} periodicidade
   */
  exports.prototype['periodicidade'] = undefined;

  /**
   * {{{operacao_credor_update_vencimento_primeira_parcela_value}}}
   * @member {Integer} vencimentoPrimeiraParcela
   */
  exports.prototype['vencimentoPrimeiraParcela'] = undefined;

  /**
   * {{{operacao_credor_update_dias_afastamento_value}}}
   * @member {Integer} diasAfastamento
   */
  exports.prototype['diasAfastamento'] = undefined;

  /**
   * {{{operacao_credor_update_fator_multiplicador_value}}}
   * @member {module:model/OperacaoCredorUpdate.FatorMultiplicadorEnum} fatorMultiplicador
   */
  exports.prototype['fatorMultiplicador'] = undefined;

  /**
   * {{{operacao_credor_update_flag_taxa_fixada_value}}}
   * @member {Boolean} flagTaxaFixada
   */
  exports.prototype['flagTaxaFixada'] = undefined;

  /**
   * {{{operacao_credor_update_plano_minimo_value}}}
   * @member {Integer} planoMinimo
   */
  exports.prototype['planoMinimo'] = undefined;

  /**
   * {{{operacao_credor_update_plano_maximo_value}}}
   * @member {Integer} planoMaximo
   */
  exports.prototype['planoMaximo'] = undefined;


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
   * Allowed values for the <code>fatorMultiplicador</code> property.
   * @enum {String}
   * @readonly
   */
  exports.FatorMultiplicadorEnum = { 
    /**
     * value: FORA_AGENDA
     * @const
     */
    FORA_AGENDA: "FORA_AGENDA",
    
    /**
     * value: AGENDA
     * @const
     */
    AGENDA: "AGENDA",
    
    /**
     * value: AGENDA_NEGATIVA
     * @const
     */
    AGENDA_NEGATIVA: "AGENDA_NEGATIVA"
  };

  return exports;
}));
