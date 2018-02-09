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
    root.Pier.OperacaoCredorPersist = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The OperacaoCredorPersist model module.
   * @module model/OperacaoCredorPersist
   * @version 2.54.1
   */

  /**
   * Constructs a new <code>OperacaoCredorPersist</code>.
   * Objeto OperacaoCredor
   * @alias module:model/OperacaoCredorPersist
   * @class
   */
  var exports = function() {













  };

  /**
   * Constructs a <code>OperacaoCredorPersist</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OperacaoCredorPersist} obj Optional instance to populate.
   * @return {module:model/OperacaoCredorPersist} The populated <code>OperacaoCredorPersist</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('idOperacao')) {
        obj['idOperacao'] = ApiClient.convertToType(data['idOperacao'], 'Integer');
      }
      if (data.hasOwnProperty('idCredor')) {
        obj['idCredor'] = ApiClient.convertToType(data['idCredor'], 'Integer');
      }
      if (data.hasOwnProperty('idsProduto')) {
        obj['idsProduto'] = ApiClient.convertToType(data['idsProduto'], ['Integer']);
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
   * Apresenta o id da Opera\u00C3\u00A7\u00C3\u00A3o.
   * @member {Integer} idOperacao
   */
  exports.prototype['idOperacao'] = undefined;

  /**
   * Apresenta o id do Credor.
   * @member {Integer} idCredor
   */
  exports.prototype['idCredor'] = undefined;

  /**
   * Apresenta a lista de ids produtos que v\u00C3\u00A3o ter regras cadastradas.
   * @member {Array.<Integer>} idsProduto
   */
  exports.prototype['idsProduto'] = undefined;

  /**
   * Remunera\u00C3\u00A7\u00C3\u00A3o Percentual.
   * @member {Number} remuneracaoPercentual
   */
  exports.prototype['remuneracaoPercentual'] = undefined;

  /**
   * Remunera\u00C3\u00A7\u00C3\u00A3o Fixa.
   * @member {Number} remuneracaoFixa
   */
  exports.prototype['remuneracaoFixa'] = undefined;

  /**
   * Periodicidade (DIARIO(1), SEMANAL(2), MENSAL(3), DECENDIAL(4), QUINZENAL(5)).
   * @member {module:model/OperacaoCredorPersist.PeriodicidadeEnum} periodicidade
   */
  exports.prototype['periodicidade'] = undefined;

  /**
   * Vencimento da primeira parcela.
   * @member {Integer} vencimentoPrimeiraParcela
   */
  exports.prototype['vencimentoPrimeiraParcela'] = undefined;

  /**
   * Dias afastamento.
   * @member {Integer} diasAfastamento
   */
  exports.prototype['diasAfastamento'] = undefined;

  /**
   * Fator multiplicador (FORA_AGENDA(0), AGENDA(1)).
   * @member {module:model/OperacaoCredorPersist.FatorMultiplicadorEnum} fatorMultiplicador
   */
  exports.prototype['fatorMultiplicador'] = undefined;

  /**
   * Flag taxa fixada.
   * @member {Boolean} flagTaxaFixada
   */
  exports.prototype['flagTaxaFixada'] = undefined;

  /**
   * Plano m\u00C3\u00ADnimo da regra.
   * @member {Integer} planoMinimo
   */
  exports.prototype['planoMinimo'] = undefined;

  /**
   * Plano m\u00C3\u00A1ximo da regra.
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
