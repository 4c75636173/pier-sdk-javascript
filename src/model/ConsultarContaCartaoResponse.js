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
    root.Pier.ConsultarContaCartaoResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ConsultarContaCartaoResponse model module.
   * @module model/ConsultarContaCartaoResponse
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>ConsultarContaCartaoResponse</code>.
   * @alias module:model/ConsultarContaCartaoResponse
   * @class
   */
  var exports = function() {












  };

  /**
   * Constructs a <code>ConsultarContaCartaoResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConsultarContaCartaoResponse} obj Optional instance to populate.
   * @return {module:model/ConsultarContaCartaoResponse} The populated <code>ConsultarContaCartaoResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('dataValidade')) {
        obj['dataValidade'] = ApiClient.convertToType(data['dataValidade'], 'String');
      }
      if (data.hasOwnProperty('descricaoEstagio')) {
        obj['descricaoEstagio'] = ApiClient.convertToType(data['descricaoEstagio'], 'String');
      }
      if (data.hasOwnProperty('descricaoStatus')) {
        obj['descricaoStatus'] = ApiClient.convertToType(data['descricaoStatus'], 'String');
      }
      if (data.hasOwnProperty('estagio')) {
        obj['estagio'] = ApiClient.convertToType(data['estagio'], 'Integer');
      }
      if (data.hasOwnProperty('flagCancelamento')) {
        obj['flagCancelamento'] = ApiClient.convertToType(data['flagCancelamento'], 'Boolean');
      }
      if (data.hasOwnProperty('idCartao')) {
        obj['idCartao'] = ApiClient.convertToType(data['idCartao'], 'Integer');
      }
      if (data.hasOwnProperty('numeroCartao')) {
        obj['numeroCartao'] = ApiClient.convertToType(data['numeroCartao'], 'String');
      }
      if (data.hasOwnProperty('portador')) {
        obj['portador'] = ApiClient.convertToType(data['portador'], 'String');
      }
      if (data.hasOwnProperty('portadorId')) {
        obj['portadorId'] = ApiClient.convertToType(data['portadorId'], 'Integer');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'Integer');
      }
      if (data.hasOwnProperty('statusData')) {
        obj['statusData'] = ApiClient.convertToType(data['statusData'], 'Date');
      }
    }
    return obj;
  }


  /**
   * @member {String} dataValidade
   */
  exports.prototype['dataValidade'] = undefined;

  /**
   * @member {String} descricaoEstagio
   */
  exports.prototype['descricaoEstagio'] = undefined;

  /**
   * @member {String} descricaoStatus
   */
  exports.prototype['descricaoStatus'] = undefined;

  /**
   * @member {Integer} estagio
   */
  exports.prototype['estagio'] = undefined;

  /**
   * @member {Boolean} flagCancelamento
   */
  exports.prototype['flagCancelamento'] = undefined;

  /**
   * @member {Integer} idCartao
   */
  exports.prototype['idCartao'] = undefined;

  /**
   * @member {String} numeroCartao
   */
  exports.prototype['numeroCartao'] = undefined;

  /**
   * @member {String} portador
   */
  exports.prototype['portador'] = undefined;

  /**
   * @member {Integer} portadorId
   */
  exports.prototype['portadorId'] = undefined;

  /**
   * @member {Integer} status
   */
  exports.prototype['status'] = undefined;

  /**
   * @member {Date} statusData
   */
  exports.prototype['statusData'] = undefined;




  return exports;
}));
