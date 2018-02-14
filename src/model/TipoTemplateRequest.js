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
    root.Pier.TipoTemplateRequest = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TipoTemplateRequest model module.
   * @module model/TipoTemplateRequest
   * @version 2.54.2
   */

  /**
   * Constructs a new <code>TipoTemplateRequest</code>.
   * Representa\u00C3\u00A7\u00C3\u00A3o do tipo de template.
   * @alias module:model/TipoTemplateRequest
   * @class
   */
  var exports = function() {




  };

  /**
   * Constructs a <code>TipoTemplateRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TipoTemplateRequest} obj Optional instance to populate.
   * @return {module:model/TipoTemplateRequest} The populated <code>TipoTemplateRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('nome')) {
        obj['nome'] = ApiClient.convertToType(data['nome'], 'String');
      }
      if (data.hasOwnProperty('descricao')) {
        obj['descricao'] = ApiClient.convertToType(data['descricao'], 'String');
      }
      if (data.hasOwnProperty('sigla')) {
        obj['sigla'] = ApiClient.convertToType(data['sigla'], 'String');
      }
    }
    return obj;
  }


  /**
   * Nome do tipo de template.
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;

  /**
   * Descri\u00C3\u00A7\u00C3\u00A3o do tipo de template.
   * @member {String} descricao
   */
  exports.prototype['descricao'] = undefined;

  /**
   * Sigla do tipo de template.
   * @member {String} sigla
   */
  exports.prototype['sigla'] = undefined;




  return exports;
}));
