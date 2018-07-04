(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './DetalheOportunidadeResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DetalheOportunidadeResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.OportunidadeResponse = factory(root.Pier.ApiClient, root.Pier.DetalheOportunidadeResponse);
  }
}(this, function(ApiClient, DetalheOportunidadeResponse) {
  'use strict';

  /**
   * The OportunidadeResponse model module.
   * @module model/OportunidadeResponse
   * @version 2.66.1
   */

  /**
   * Constructs a new <code>OportunidadeResponse</code>.
   * {{{oportunidade_response_description}}}
   * @alias module:model/OportunidadeResponse
   * @class
   */
  var exports = function() {











  };

  /**
   * Constructs a <code>OportunidadeResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OportunidadeResponse} obj Optional instance to populate.
   * @return {module:model/OportunidadeResponse} The populated <code>OportunidadeResponse</code> instance.
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
        obj['detalhes'] = ApiClient.convertToType(data['detalhes'], [DetalheOportunidadeResponse]);
      }
    }
    return obj;
  }


  /**
   * {{{oportunidade_response_id_value}}}
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * {{{oportunidade_response_id_tipo_oportunidade_value}}}
   * @member {Integer} idTipoOportunidade
   */
  exports.prototype['idTipoOportunidade'] = undefined;

  /**
   * {{{oportunidade_response_id_status_oportunidade_value}}}
   * @member {Integer} idStatusOportunidade
   */
  exports.prototype['idStatusOportunidade'] = undefined;

  /**
   * {{{oportunidade_response_data_cadastro_value}}}
   * @member {String} dataCadastro
   */
  exports.prototype['dataCadastro'] = undefined;

  /**
   * {{{oportunidade_response_data_atualizacao_value}}}
   * @member {String} dataAtualizacao
   */
  exports.prototype['dataAtualizacao'] = undefined;

  /**
   * {{{oportunidade_response_numero_receita_federal_value}}}
   * @member {String} numeroReceitaFederal
   */
  exports.prototype['numeroReceitaFederal'] = undefined;

  /**
   * {{{oportunidade_response_data_inicio_vigencia_value}}}
   * @member {String} dataInicioVigencia
   */
  exports.prototype['dataInicioVigencia'] = undefined;

  /**
   * {{{oportunidade_response_data_fim_vigencia_value}}}
   * @member {String} dataFimVigencia
   */
  exports.prototype['dataFimVigencia'] = undefined;

  /**
   * {{{oportunidade_response_flag_ativo_value}}}
   * @member {Boolean} flagAtivo
   */
  exports.prototype['flagAtivo'] = undefined;

  /**
   * {{{oportunidade_response_detalhes_value}}}
   * @member {Array.<module:model/DetalheOportunidadeResponse>} detalhes
   */
  exports.prototype['detalhes'] = undefined;




  return exports;
}));
