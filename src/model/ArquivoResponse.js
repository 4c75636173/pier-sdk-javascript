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
   * @version 2.32.0
   */

  /**
   * Constructs a new <code>ArquivoResponse</code>.
   * Objeto Response do arquivo.
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
      if (data.hasOwnProperty('arquivo')) {
        obj['arquivo'] = ApiClient.convertToType(data['arquivo'], 'String');
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
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do arquivo
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * Tipo do arquivo
   * @member {Integer} idTipoArquivo
   */
  exports.prototype['idTipoArquivo'] = undefined;

  /**
   * Descri\u00C3\u00A7\u00C3\u00A3o do tipo do arquivo
   * @member {String} nomeTipoArquivo
   */
  exports.prototype['nomeTipoArquivo'] = undefined;

  /**
   * Conte\u00C3\u00BAdo do arquivo convertido em Base 64
   * @member {String} arquivo
   */
  exports.prototype['arquivo'] = undefined;

  /**
   * C\u00C3\u00B3digo de status do arquivo
   * @member {Integer} idStatusArquivo
   */
  exports.prototype['idStatusArquivo'] = undefined;

  /**
   * Desci\u00C3\u00A7\u00C3\u00A3o do status do arquivo
   * @member {String} nomeStatusArquivo
   */
  exports.prototype['nomeStatusArquivo'] = undefined;

  /**
   * Nome do arquivo
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;

  /**
   * Formato/extens\u00C3\u00A3o do arquivo
   * @member {String} extensao
   */
  exports.prototype['extensao'] = undefined;

  /**
   * Data de inclus\u00C3\u00A3o do arquivo.
   * @member {String} dataInclusao
   */
  exports.prototype['dataInclusao'] = undefined;

  /**
   * Data da \u00C3\u00BAltima altera\u00C3\u00A7\u00C3\u00A3o do aquivo.
   * @member {String} dataAlteracao
   */
  exports.prototype['dataAlteracao'] = undefined;

  /**
   * Detalhes contendo informa\u00C3\u00A7\u00C3\u00B5es adicionais, relacionadas ao arquivo.
   * @member {Array.<module:model/ArquivoParametroResponse>} detalhes
   */
  exports.prototype['detalhes'] = undefined;




  return exports;
}));
