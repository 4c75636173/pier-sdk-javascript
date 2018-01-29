(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './DetalheOportunidadeUpdate'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DetalheOportunidadeUpdate'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.OportunidadeUpdate = factory(root.Pier.ApiClient, root.Pier.DetalheOportunidadeUpdate);
  }
}(this, function(ApiClient, DetalheOportunidadeUpdate) {
  'use strict';

  /**
   * The OportunidadeUpdate model module.
   * @module model/OportunidadeUpdate
   * @version 2.50.15
   */

  /**
   * Constructs a new <code>OportunidadeUpdate</code>.
   * Objeto Oportunidade
   * @alias module:model/OportunidadeUpdate
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
   * Constructs a <code>OportunidadeUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OportunidadeUpdate} obj Optional instance to populate.
   * @return {module:model/OportunidadeUpdate} The populated <code>OportunidadeUpdate</code> instance.
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
        obj['detalhes'] = ApiClient.convertToType(data['detalhes'], [DetalheOportunidadeUpdate]);
      }
    }
    return obj;
  }


  /**
   * C\u00C3\u00B3digo identificador do tipo oportunidade
   * @member {Integer} idTipoOportunidade
   */
  exports.prototype['idTipoOportunidade'] = undefined;

  /**
   * C\u00C3\u00B3digo identificador do status oportunidade
   * @member {Integer} idStatusOportunidade
   */
  exports.prototype['idStatusOportunidade'] = undefined;

  /**
   * N\u00C3\u00BAmero receita federal do cliente
   * @member {String} numeroReceitaFederal
   */
  exports.prototype['numeroReceitaFederal'] = undefined;

  /**
   * In\u00C3\u00ADcio da vig\u00C3\u00AAncia da oportunidade
   * @member {String} dataInicioVigencia
   */
  exports.prototype['dataInicioVigencia'] = undefined;

  /**
   * Fim da vig\u00C3\u00AAncia da oportunidade
   * @member {String} dataFimVigencia
   */
  exports.prototype['dataFimVigencia'] = undefined;

  /**
   * Atributo que indica se a oportunidade est\u00C3\u00A1 ativa
   * @member {Boolean} flagAtivo
   */
  exports.prototype['flagAtivo'] = undefined;

  /**
   * Lista de detalhes
   * @member {Array.<module:model/DetalheOportunidadeUpdate>} detalhes
   */
  exports.prototype['detalhes'] = undefined;




  return exports;
}));
