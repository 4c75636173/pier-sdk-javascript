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
    root.Pier.ArquivoAjusteLoteResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ArquivoAjusteLoteResponse model module.
   * @module model/ArquivoAjusteLoteResponse
   * @version 2.66.1
   */

  /**
   * Constructs a new <code>ArquivoAjusteLoteResponse</code>.
   * {{{arquivo_ajuste_lote_response_description}}}
   * @alias module:model/ArquivoAjusteLoteResponse
   * @class
   */
  var exports = function() {








  };

  /**
   * Constructs a <code>ArquivoAjusteLoteResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ArquivoAjusteLoteResponse} obj Optional instance to populate.
   * @return {module:model/ArquivoAjusteLoteResponse} The populated <code>ArquivoAjusteLoteResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('dataProcessamento')) {
        obj['dataProcessamento'] = ApiClient.convertToType(data['dataProcessamento'], 'Date');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('length')) {
        obj['length'] = ApiClient.convertToType(data['length'], 'Integer');
      }
      if (data.hasOwnProperty('lines')) {
        obj['lines'] = ApiClient.convertToType(data['lines'], 'Integer');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('srcName')) {
        obj['srcName'] = ApiClient.convertToType(data['srcName'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {Date} dataProcessamento
   */
  exports.prototype['dataProcessamento'] = undefined;

  /**
   * {{{arquivo_ajuste_lote_response_id_value}}}
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * {{{arquivo_ajuste_lote_response_length_value}}}
   * @member {Integer} length
   */
  exports.prototype['length'] = undefined;

  /**
   * {{{arquivo_ajuste_lote_response_lines_value}}}
   * @member {Integer} lines
   */
  exports.prototype['lines'] = undefined;

  /**
   * {{{arquivo_ajuste_lote_response_name_value}}}
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * {{{arquivo_ajuste_lote_response_status_value}}}
   * @member {String} status
   */
  exports.prototype['status'] = undefined;

  /**
   * {{{arquivo_ajuste_lote_response_srcName_value}}}
   * @member {String} srcName
   */
  exports.prototype['srcName'] = undefined;




  return exports;
}));
