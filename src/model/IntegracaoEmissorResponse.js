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
    root.Pier.IntegracaoEmissorResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The IntegracaoEmissorResponse model module.
   * @module model/IntegracaoEmissorResponse
   * @version 2.68.0
   */

  /**
   * Constructs a new <code>IntegracaoEmissorResponse</code>.
   * {{{integracao_emissor_response_description}}}
   * @alias module:model/IntegracaoEmissorResponse
   * @class
   */
  var exports = function() {







  };

  /**
   * Constructs a <code>IntegracaoEmissorResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IntegracaoEmissorResponse} obj Optional instance to populate.
   * @return {module:model/IntegracaoEmissorResponse} The populated <code>IntegracaoEmissorResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('idConta')) {
        obj['idConta'] = ApiClient.convertToType(data['idConta'], 'Integer');
      }
      if (data.hasOwnProperty('idArquivo')) {
        obj['idArquivo'] = ApiClient.convertToType(data['idArquivo'], 'Integer');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('dataInclusao')) {
        obj['dataInclusao'] = ApiClient.convertToType(data['dataInclusao'], 'String');
      }
      if (data.hasOwnProperty('dataAlteracao')) {
        obj['dataAlteracao'] = ApiClient.convertToType(data['dataAlteracao'], 'String');
      }
    }
    return obj;
  }


  /**
   * {{{integracao_emissor_response_id_value}}}
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * {{{integracao_emissor_response_id_conta_value}}}
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * {{{integracao_emissor_response_id_arquivo_value}}}
   * @member {Integer} idArquivo
   */
  exports.prototype['idArquivo'] = undefined;

  /**
   * {{{integracao_emissor_response_status_value}}}
   * @member {String} status
   */
  exports.prototype['status'] = undefined;

  /**
   * {{{integracao_emissor_response_data_inclusao_value}}}
   * @member {String} dataInclusao
   */
  exports.prototype['dataInclusao'] = undefined;

  /**
   * {{{integracao_emissor_response_data_alteracao_value}}}
   * @member {String} dataAlteracao
   */
  exports.prototype['dataAlteracao'] = undefined;




  return exports;
}));
