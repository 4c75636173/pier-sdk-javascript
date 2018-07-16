(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './ArquivoParametroResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ArquivoParametroResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.ArquivoResponse = factory(root.Pier.ApiClient, root.Pier.ArquivoParametroResponse);
  }
}(this, function(ApiClient, ArquivoParametroResponse) {
  'use strict';

  /**
   * The ArquivoResponse model module.
   * @module model/ArquivoResponse
   * @version 2.68.0
   */

  /**
   * Constructs a new <code>ArquivoResponse</code>.
   * {{{arquivo_response_description}}}
   * @alias module:model/ArquivoResponse
   * @class
   */
  var exports = function() {











  };

  /**
   * Constructs a <code>ArquivoResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ArquivoResponse} obj Optional instance to populate.
   * @return {module:model/ArquivoResponse} The populated <code>ArquivoResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('idTipoArquivo')) {
        obj['idTipoArquivo'] = ApiClient.convertToType(data['idTipoArquivo'], 'Integer');
      }
      if (data.hasOwnProperty('nomeTipoArquivo')) {
        obj['nomeTipoArquivo'] = ApiClient.convertToType(data['nomeTipoArquivo'], 'String');
      }
      if (data.hasOwnProperty('idStatusArquivo')) {
        obj['idStatusArquivo'] = ApiClient.convertToType(data['idStatusArquivo'], 'Integer');
      }
      if (data.hasOwnProperty('nomeStatusArquivo')) {
        obj['nomeStatusArquivo'] = ApiClient.convertToType(data['nomeStatusArquivo'], 'String');
      }
      if (data.hasOwnProperty('nome')) {
        obj['nome'] = ApiClient.convertToType(data['nome'], 'String');
      }
      if (data.hasOwnProperty('extensao')) {
        obj['extensao'] = ApiClient.convertToType(data['extensao'], 'String');
      }
      if (data.hasOwnProperty('dataInclusao')) {
        obj['dataInclusao'] = ApiClient.convertToType(data['dataInclusao'], 'String');
      }
      if (data.hasOwnProperty('dataAlteracao')) {
        obj['dataAlteracao'] = ApiClient.convertToType(data['dataAlteracao'], 'String');
      }
      if (data.hasOwnProperty('detalhes')) {
        obj['detalhes'] = ApiClient.convertToType(data['detalhes'], [ArquivoParametroResponse]);
      }
    }
    return obj;
  }


  /**
   * {{{arquivo_response_id_value}}}
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * {{{arquivo_response_id_tipo_arquivo_value}}}
   * @member {Integer} idTipoArquivo
   */
  exports.prototype['idTipoArquivo'] = undefined;

  /**
   * {{{arquivo_response_nome_tipo_arquivo_value}}}
   * @member {String} nomeTipoArquivo
   */
  exports.prototype['nomeTipoArquivo'] = undefined;

  /**
   * {{{arquivo_response_id_status_arquivo_value}}}
   * @member {Integer} idStatusArquivo
   */
  exports.prototype['idStatusArquivo'] = undefined;

  /**
   * {{{arquivo_response_nome_status_arquivo_value}}}
   * @member {String} nomeStatusArquivo
   */
  exports.prototype['nomeStatusArquivo'] = undefined;

  /**
   * {{{arquivo_response_nome_value}}}
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;

  /**
   * {{{arquivo_response_extensao_value}}}
   * @member {String} extensao
   */
  exports.prototype['extensao'] = undefined;

  /**
   * {{{arquivo_response_data_inclusao_value}}}
   * @member {String} dataInclusao
   */
  exports.prototype['dataInclusao'] = undefined;

  /**
   * {{{arquivo_response_data_alteracao_value}}}
   * @member {String} dataAlteracao
   */
  exports.prototype['dataAlteracao'] = undefined;

  /**
   * {{{arquivo_response_detalhes_value}}}
   * @member {Array.<module:model/ArquivoParametroResponse>} detalhes
   */
  exports.prototype['detalhes'] = undefined;




  return exports;
}));
