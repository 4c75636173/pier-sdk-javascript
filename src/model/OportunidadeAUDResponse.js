(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './CdtDetalheOportunidadeAUD'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CdtDetalheOportunidadeAUD'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.OportunidadeAUDResponse = factory(root.Pier.ApiClient, root.Pier.CdtDetalheOportunidadeAUD);
  }
}(this, function(ApiClient, CdtDetalheOportunidadeAUD) {
  'use strict';

  /**
   * The OportunidadeAUDResponse model module.
   * @module model/OportunidadeAUDResponse
   * @version 2.50.4
   */

  /**
   * Constructs a new <code>OportunidadeAUDResponse</code>.
   * Representa\u00C3\u00A7\u00C3\u00A3o da resposta do recurso Oportunidades
   * @alias module:model/OportunidadeAUDResponse
   * @class
   */
  var exports = function() {














  };

  /**
   * Constructs a <code>OportunidadeAUDResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OportunidadeAUDResponse} obj Optional instance to populate.
   * @return {module:model/OportunidadeAUDResponse} The populated <code>OportunidadeAUDResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('idTipoOportunidade')) {
        obj['idTipoOportunidade'] = ApiClient.convertToType(data['idTipoOportunidade'], 'Integer');
      }
      if (data.hasOwnProperty('idStatusOportunidade')) {
        obj['idStatusOportunidade'] = ApiClient.convertToType(data['idStatusOportunidade'], 'Integer');
      }
      if (data.hasOwnProperty('dataCadastro')) {
        obj['dataCadastro'] = ApiClient.convertToType(data['dataCadastro'], 'String');
      }
      if (data.hasOwnProperty('dataAtualizacao')) {
        obj['dataAtualizacao'] = ApiClient.convertToType(data['dataAtualizacao'], 'String');
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
        obj['detalhes'] = ApiClient.convertToType(data['detalhes'], [CdtDetalheOportunidadeAUD]);
      }
      if (data.hasOwnProperty('revDate')) {
        obj['revDate'] = ApiClient.convertToType(data['revDate'], 'String');
      }
      if (data.hasOwnProperty('revType')) {
        obj['revType'] = ApiClient.convertToType(data['revType'], 'Integer');
      }
      if (data.hasOwnProperty('rev')) {
        obj['rev'] = ApiClient.convertToType(data['rev'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * C\u00C3\u00B3digo identificador da oportunidade
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

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
   * Data cadastro da oportunidade.
   * @member {String} dataCadastro
   */
  exports.prototype['dataCadastro'] = undefined;

  /**
   * Data atualiza\u00C3\u00A7\u00C3\u00A3o da oportunidade.
   * @member {String} dataAtualizacao
   */
  exports.prototype['dataAtualizacao'] = undefined;

  /**
   * N\u00C3\u00BAmero receita federal do cliente ao qual ser\u00C3\u00A1 ofertada a oportunidade
   * @member {String} numeroReceitaFederal
   */
  exports.prototype['numeroReceitaFederal'] = undefined;

  /**
   * In\u00C3\u00ADcio da vig\u00C3\u00AAncia da oportunidade
   * @member {String} dataInicioVigencia
   */
  exports.prototype['dataInicioVigencia'] = undefined;

  /**
   * fim da vig\u00C3\u00AAncia da oportunidade
   * @member {String} dataFimVigencia
   */
  exports.prototype['dataFimVigencia'] = undefined;

  /**
   * Flag de verifica\u00C3\u00A7\u00C3\u00A3o se a oportunidade est\u00C3\u00A1 ativa
   * @member {Boolean} flagAtivo
   */
  exports.prototype['flagAtivo'] = undefined;

  /**
   * Lista de detalhes da oportunidade
   * @member {Array.<module:model/CdtDetalheOportunidadeAUD>} detalhes
   */
  exports.prototype['detalhes'] = undefined;

  /**
   * Data da auditoria
   * @member {String} revDate
   */
  exports.prototype['revDate'] = undefined;

  /**
   * Tipo da auditoria
   * @member {Integer} revType
   */
  exports.prototype['revType'] = undefined;

  /**
   * Identificador da auditoria
   * @member {Integer} rev
   */
  exports.prototype['rev'] = undefined;




  return exports;
}));
