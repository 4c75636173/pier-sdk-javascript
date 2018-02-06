(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './ArquivoDetalhesPersist'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ArquivoDetalhesPersist'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.ArquivoPersist = factory(root.Pier.ApiClient, root.Pier.ArquivoDetalhesPersist);
  }
}(this, function(ApiClient, ArquivoDetalhesPersist) {
  'use strict';

  /**
   * The ArquivoPersist model module.
   * @module model/ArquivoPersist
   * @version 2.52.0
   */

  /**
   * Constructs a new <code>ArquivoPersist</code>.
   * Objeto Arquivo para persist\u00C3\u00AAncia de dados.
   * @alias module:model/ArquivoPersist
   * @class
   * @param arquivo
   * @param detalhes
   */
  var exports = function(arquivo, detalhes) {


    this['arquivo'] = arquivo;



    this['detalhes'] = detalhes;
  };

  /**
   * Constructs a <code>ArquivoPersist</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ArquivoPersist} obj Optional instance to populate.
   * @return {module:model/ArquivoPersist} The populated <code>ArquivoPersist</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('idTipoArquivo')) {
        obj['idTipoArquivo'] = ApiClient.convertToType(data['idTipoArquivo'], 'Integer');
      }
      if (data.hasOwnProperty('arquivo')) {
        obj['arquivo'] = ApiClient.convertToType(data['arquivo'], 'String');
      }
      if (data.hasOwnProperty('nome')) {
        obj['nome'] = ApiClient.convertToType(data['nome'], 'String');
      }
      if (data.hasOwnProperty('extensao')) {
        obj['extensao'] = ApiClient.convertToType(data['extensao'], 'String');
      }
      if (data.hasOwnProperty('tipoComunicacao')) {
        obj['tipoComunicacao'] = ApiClient.convertToType(data['tipoComunicacao'], 'String');
      }
      if (data.hasOwnProperty('detalhes')) {
        obj['detalhes'] = ApiClient.convertToType(data['detalhes'], [ArquivoDetalhesPersist]);
      }
    }
    return obj;
  }


  /**
   * Tipo do arquivo
   * @member {Integer} idTipoArquivo
   */
  exports.prototype['idTipoArquivo'] = undefined;

  /**
   * Conte\u00C3\u00BAdo do arquivo convertido em Base 64
   * @member {String} arquivo
   */
  exports.prototype['arquivo'] = undefined;

  /**
   * Nome do arquivo.
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;

  /**
   * Formato/extens\u00C3\u00A3o do arquivo.
   * @member {String} extensao
   */
  exports.prototype['extensao'] = undefined;

  /**
   * Tipo de comunica\u00C3\u00A7\u00C3\u00A3o.
   * @member {module:model/ArquivoPersist.TipoComunicacaoEnum} tipoComunicacao
   */
  exports.prototype['tipoComunicacao'] = undefined;

  /**
   * Detalhes contendo informa\u00C3\u00A7\u00C3\u00B5es adicionais, relacionadas ao arquivo
   * @member {Array.<module:model/ArquivoDetalhesPersist>} detalhes
   */
  exports.prototype['detalhes'] = undefined;


  /**
   * Allowed values for the <code>tipoComunicacao</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TipoComunicacaoEnum = { 
    /**
     * value: SOAP
     * @const
     */
    SOAP: "SOAP",
    
    /**
     * value: REST
     * @const
     */
    REST: "REST"
  };

  return exports;
}));
