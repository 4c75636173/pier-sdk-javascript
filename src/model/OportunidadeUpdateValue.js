(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './DetalheOportunidadeUpdateValue'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DetalheOportunidadeUpdateValue'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.OportunidadeUpdateValue = factory(root.Pier.ApiClient, root.Pier.DetalheOportunidadeUpdateValue);
  }
}(this, function(ApiClient, DetalheOportunidadeUpdateValue) {
  'use strict';

  /**
   * The OportunidadeUpdateValue model module.
   * @module model/OportunidadeUpdateValue
   * @version 2.68.0
   */

  /**
   * Constructs a new <code>OportunidadeUpdateValue</code>.
   * {{{oportunidade_update_description}}}
   * @alias module:model/OportunidadeUpdateValue
   * @class
   * @param idTipoOportunidade
   * @param idStatusOportunidade
   * @param numeroReceitaFederal
   * @param dataInicioVigencia
   * @param dataFimVigencia
   * @param flagAtivo
   * @param detalhes
   */
  var exports = function(idTipoOportunidade, idStatusOportunidade, numeroReceitaFederal, dataInicioVigencia, dataFimVigencia, flagAtivo, detalhes) {

    this['idTipoOportunidade'] = idTipoOportunidade;
    this['idStatusOportunidade'] = idStatusOportunidade;
    this['numeroReceitaFederal'] = numeroReceitaFederal;
    this['dataInicioVigencia'] = dataInicioVigencia;
    this['dataFimVigencia'] = dataFimVigencia;
    this['flagAtivo'] = flagAtivo;
    this['detalhes'] = detalhes;
  };

  /**
   * Constructs a <code>OportunidadeUpdateValue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OportunidadeUpdateValue} obj Optional instance to populate.
   * @return {module:model/OportunidadeUpdateValue} The populated <code>OportunidadeUpdateValue</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('idTipoOportunidade')) {
        obj['idTipoOportunidade'] = ApiClient.convertToType(data['idTipoOportunidade'], 'Integer');
      }
      if (data.hasOwnProperty('idStatusOportunidade')) {
        obj['idStatusOportunidade'] = ApiClient.convertToType(data['idStatusOportunidade'], 'Integer');
      }
      if (data.hasOwnProperty('numeroReceitaFederal')) {
        obj['numeroReceitaFederal'] = ApiClient.convertToType(data['numeroReceitaFederal'], 'String');
      }
      if (data.hasOwnProperty('dataInicioVigencia')) {
        obj['dataInicioVigencia'] = ApiClient.convertToType(data['dataInicioVigencia'], 'String');
      }
      if (data.hasOwnProperty('dataFimVigencia')) {
        obj['dataFimVigencia'] = ApiClient.convertToType(data['dataFimVigencia'], 'String');
      }
      if (data.hasOwnProperty('flagAtivo')) {
        obj['flagAtivo'] = ApiClient.convertToType(data['flagAtivo'], 'Boolean');
      }
      if (data.hasOwnProperty('detalhes')) {
        obj['detalhes'] = ApiClient.convertToType(data['detalhes'], [DetalheOportunidadeUpdateValue]);
      }
    }
    return obj;
  }


  /**
   * {{{oportunidade_update_id_tipo_oportunidade_value}}}
   * @member {Integer} idTipoOportunidade
   */
  exports.prototype['idTipoOportunidade'] = undefined;

  /**
   * {{{oportunidade_update_id_status_oportunidade_value}}}
   * @member {Integer} idStatusOportunidade
   */
  exports.prototype['idStatusOportunidade'] = undefined;

  /**
   * {{{oportunidade_update_numero_receita_federal_value}}}
   * @member {String} numeroReceitaFederal
   */
  exports.prototype['numeroReceitaFederal'] = undefined;

  /**
   * {{{oportunidade_update_data_inicio_vigencia_value}}}
   * @member {String} dataInicioVigencia
   */
  exports.prototype['dataInicioVigencia'] = undefined;

  /**
   * {{{oportunidade_update_data_fim_vigencia_value}}}
   * @member {String} dataFimVigencia
   */
  exports.prototype['dataFimVigencia'] = undefined;

  /**
   * {{{oportunidade_update_flag_ativo_value}}}
   * @member {Boolean} flagAtivo
   */
  exports.prototype['flagAtivo'] = undefined;

  /**
   * {{{oportunidade_update_detalhes_value}}}
   * @member {Array.<module:model/DetalheOportunidadeUpdateValue>} detalhes
   */
  exports.prototype['detalhes'] = undefined;




  return exports;
}));
