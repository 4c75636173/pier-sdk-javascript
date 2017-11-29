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
    root.Pier.TipoTemplateResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TipoTemplateResponse model module.
   * @module model/TipoTemplateResponse
   * @version 2.46.4
   */

  /**
   * Constructs a new <code>TipoTemplateResponse</code>.
   * Representa\u00C3\u00A7\u00C3\u00A3o da resposta do recurso de Tipo de Template
   * @alias module:model/TipoTemplateResponse
   * @class
   */
  var exports = function() {





  };

  /**
   * Constructs a <code>TipoTemplateResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TipoTemplateResponse} obj Optional instance to populate.
   * @return {module:model/TipoTemplateResponse} The populated <code>TipoTemplateResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
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
   * ID do Tipo de Template.
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * Nome do Tipo de Template.
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;

  /**
   * Descri\u00C3\u00A7\u00C3\u00A3o do Tipo de Template.
   * @member {String} descricao
   */
  exports.prototype['descricao'] = undefined;

  /**
   * Sigla do Tipo de Template.
   * @member {String} sigla
   */
  exports.prototype['sigla'] = undefined;




  return exports;
}));
