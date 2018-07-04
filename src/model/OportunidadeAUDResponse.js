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
   * @version 2.66.1
   */

  /**
   * Constructs a new <code>OportunidadeAUDResponse</code>.
   * {{{oportunidade_a_u_d_response_description}}}
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
   * {{{oportunidade_a_u_d_response_id_value}}}
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * {{{oportunidade_a_u_d_response_id_tipo_oportunidade_value}}}
   * @member {Integer} idTipoOportunidade
   */
  exports.prototype['idTipoOportunidade'] = undefined;

  /**
   * {{{oportunidade_a_u_d_response_id_status_oportunidade_value}}}
   * @member {Integer} idStatusOportunidade
   */
  exports.prototype['idStatusOportunidade'] = undefined;

  /**
   * {{{oportunidade_a_u_d_response_data_cadastro_value}}}
   * @member {String} dataCadastro
   */
  exports.prototype['dataCadastro'] = undefined;

  /**
   * {{{oportunidade_a_u_d_response_data_atualizacao_value}}}
   * @member {String} dataAtualizacao
   */
  exports.prototype['dataAtualizacao'] = undefined;

  /**
   * {{{oportunidade_a_u_d_response_numero_receita_federal_value}}}
   * @member {String} numeroReceitaFederal
   */
  exports.prototype['numeroReceitaFederal'] = undefined;

  /**
   * {{{oportunidade_a_u_d_response_data_inicio_vigencia_value}}}
   * @member {String} dataInicioVigencia
   */
  exports.prototype['dataInicioVigencia'] = undefined;

  /**
   * {{{oportunidade_a_u_d_response_data_fim_vigencia_value}}}
   * @member {String} dataFimVigencia
   */
  exports.prototype['dataFimVigencia'] = undefined;

  /**
   * {{{oportunidade_a_u_d_response_flag_ativo_value}}}
   * @member {Boolean} flagAtivo
   */
  exports.prototype['flagAtivo'] = undefined;

  /**
   * {{{oportunidade_a_u_d_response_detalhes_value}}}
   * @member {Array.<module:model/CdtDetalheOportunidadeAUD>} detalhes
   */
  exports.prototype['detalhes'] = undefined;

  /**
   * {{{oportunidade_a_u_d_response_rev_date_value}}}
   * @member {String} revDate
   */
  exports.prototype['revDate'] = undefined;

  /**
   * {{{oportunidade_a_u_d_response_rev_type_value}}}
   * @member {Integer} revType
   */
  exports.prototype['revType'] = undefined;

  /**
   * {{{oportunidade_a_u_d_response_rev_value}}}
   * @member {Integer} rev
   */
  exports.prototype['rev'] = undefined;




  return exports;
}));
