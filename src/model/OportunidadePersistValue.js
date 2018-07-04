(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './DetalheOportunidadePersistValue'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DetalheOportunidadePersistValue'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.OportunidadePersistValue = factory(root.Pier.ApiClient, root.Pier.DetalheOportunidadePersistValue);
  }
}(this, function(ApiClient, DetalheOportunidadePersistValue) {
  'use strict';

  /**
   * The OportunidadePersistValue model module.
   * @module model/OportunidadePersistValue
   * @version 2.66.1
   */

  /**
   * Constructs a new <code>OportunidadePersistValue</code>.
   * {{{oportunidade_persist_description}}}
   * @alias module:model/OportunidadePersistValue
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
   * Constructs a <code>OportunidadePersistValue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OportunidadePersistValue} obj Optional instance to populate.
   * @return {module:model/OportunidadePersistValue} The populated <code>OportunidadePersistValue</code> instance.
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
        obj['detalhes'] = ApiClient.convertToType(data['detalhes'], [DetalheOportunidadePersistValue]);
      }
    }
    return obj;
  }


  /**
   * {{{oportunidade_persist_id_tipo_oportunidade_value}}}
   * @member {Integer} idTipoOportunidade
   */
  exports.prototype['idTipoOportunidade'] = undefined;

  /**
   * {{{oportunidade_persist_id_status_oportunidade_value}}}
   * @member {Integer} idStatusOportunidade
   */
  exports.prototype['idStatusOportunidade'] = undefined;

  /**
   * {{{oportunidade_persist_numero_receita_federal_value}}}
   * @member {String} numeroReceitaFederal
   */
  exports.prototype['numeroReceitaFederal'] = undefined;

  /**
   * {{{oportunidade_persist_data_inicio_vigencia_value}}}
   * @member {String} dataInicioVigencia
   */
  exports.prototype['dataInicioVigencia'] = undefined;

  /**
   * {{{oportunidade_persist_data_fim_vigencia_value}}}
   * @member {String} dataFimVigencia
   */
  exports.prototype['dataFimVigencia'] = undefined;

  /**
   * {{{oportunidade_persist_flag_ativo_value}}}
   * @member {Boolean} flagAtivo
   */
  exports.prototype['flagAtivo'] = undefined;

  /**
   * {{{oportunidade_persist_detalhes_value}}}
   * @member {Array.<module:model/DetalheOportunidadePersistValue>} detalhes
   */
  exports.prototype['detalhes'] = undefined;




  return exports;
}));
