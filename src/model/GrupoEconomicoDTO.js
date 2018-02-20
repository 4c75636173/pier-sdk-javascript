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
   * @version 2.54.4
   */

  /**
   * Constructs a new <code>GrupoEconomicoDTO</code>.
   * Par\u00C3\u00A2metros de requisi\u00C3\u00A7\u00C3\u00A3o para cadastrar grupo econ\u00C3\u00B4mico
   * @alias module:model/GrupoEconomicoDTO
   * @class
   * @param razaoSocial
   * @param numeroReceitaFederal
   * @param periodicidade
   * @param percentualRAV
   */
  var exports = function(razaoSocial, numeroReceitaFederal, periodicidade, percentualRAV) {

    this['razaoSocial'] = razaoSocial;

    this['numeroReceitaFederal'] = numeroReceitaFederal;







    this['periodicidade'] = periodicidade;







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
   * Raz\u00C3\u00A3o social da pessoa jur\u00C3\u00ADdica
   * @member {String} razaoSocial
   */
  exports.prototype['razaoSocial'] = undefined;

  /**
   * Nome do credor
   * @member {String} nomeCredor
   */
  exports.prototype['nomeCredor'] = undefined;

  /**
   * N\u00C3\u00BAmero da Receita Federal
   * @member {String} numeroReceitaFederal
   */
  exports.prototype['numeroReceitaFederal'] = undefined;

  /**
   * N\u00C3\u00BAmero da inscri\u00C3\u00A7\u00C3\u00A3o estadual
   * @member {String} inscricaoEstadual
   */
  exports.prototype['inscricaoEstadual'] = undefined;

  /**
   * Nome da pessoa para entrar em contato
   * @member {String} contato
   */
  exports.prototype['contato'] = undefined;

  /**
   * C\u00C3\u00B3digo do banco
   * @member {Integer} banco
   */
  exports.prototype['banco'] = undefined;

  /**
   * Raz\u00C3\u00A3o social da pessoa jur\u00C3\u00ADdica
   * @member {Integer} agencia
   */
  exports.prototype['agencia'] = undefined;

  /**
   * D\u00C3\u00ADgito Verificador da ag\u00C3\u00AAncia
   * @member {String} digitoAgencia
   */
  exports.prototype['digitoAgencia'] = undefined;

  /**
   * C\u00C3\u00B3digo da Conta Corrente
   * @member {String} contaCorrente
   */
  exports.prototype['contaCorrente'] = undefined;

  /**
   * D\u00C3\u00ADgito Verificador da Conta Corrente
   * @member {String} digitoContaCorrente
   */
  exports.prototype['digitoContaCorrente'] = undefined;

  /**
   * Periodicidade do pagamento
   * @member {module:model/GrupoEconomicoDTO.PeriodicidadeEnum} periodicidade
   */
  exports.prototype['periodicidade'] = undefined;

  /**
   * Dia para pagamento semanal
   * @member {module:model/GrupoEconomicoDTO.PagamentoSemanalEnum} pagamentoSemanal
   */
  exports.prototype['pagamentoSemanal'] = undefined;

  /**
   * Dia da data para o pagamento mensal
   * @member {Integer} pagamentoMensal
   */
  exports.prototype['pagamentoMensal'] = undefined;

  /**
   * Dia da data para o primeiro pagamento decendial
   * @member {Integer} pagamentoDecendialPrimeiro
   */
  exports.prototype['pagamentoDecendialPrimeiro'] = undefined;

  /**
   * Dia da data para o segundo pagamento decendial
   * @member {Integer} pagamentoDecendialSegundo
   */
  exports.prototype['pagamentoDecendialSegundo'] = undefined;

  /**
   * Dia da data para o terceiro pagamento decendial
   * @member {Integer} pagamentoDecendialTerceiro
   */
  exports.prototype['pagamentoDecendialTerceiro'] = undefined;

  /**
   * Dia da data para o primeiro pagamento quinzenal
   * @member {Integer} pagamentoQuinzenalPrimeiro
   */
  exports.prototype['pagamentoQuinzenalPrimeiro'] = undefined;

  /**
   * Dia da data para o segundo pagamento quinzenal
   * @member {Integer} pagamentoQuinzenalSegundo
   */
  exports.prototype['pagamentoQuinzenalSegundo'] = undefined;

  /**
   * Valor percentual do RAV do credor
   * @member {Number} percentualRAV
   */
  exports.prototype['percentualRAV'] = undefined;

  /**
   * Indica se o credor recebe RAV e o tipo
   * @member {module:model/GrupoEconomicoDTO.RecebeRAVEnum} recebeRAV
   */
  exports.prototype['recebeRAV'] = undefined;

  /**
   * Percentual Multiplica
   * @member {Number} percentualMultiplica
   */
  exports.prototype['percentualMultiplica'] = undefined;

  /**
   * Taxa Administrativa
   * @member {Number} taxaAdm
   */
  exports.prototype['taxaAdm'] = undefined;

  /**
   * Taxa do Banco
   * @member {Number} taxaBanco
   */
  exports.prototype['taxaBanco'] = undefined;

  /**
   * Valor limite do RAV
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
