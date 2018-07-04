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
    root.Pier.DocumentoTemplateResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DocumentoTemplateResponse model module.
   * @module model/DocumentoTemplateResponse
   * @version 2.66.1
   */

  /**
   * Constructs a new <code>DocumentoTemplateResponse</code>.
   * {{{documento_template_response_description}}}
   * @alias module:model/DocumentoTemplateResponse
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>DocumentoTemplateResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DocumentoTemplateResponse} obj Optional instance to populate.
   * @return {module:model/DocumentoTemplateResponse} The populated <code>DocumentoTemplateResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('idTipoTemplate')) {
        obj['idTipoTemplate'] = ApiClient.convertToType(data['idTipoTemplate'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * {{{documento_template_response_id_value}}}
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * {{{documento_template_response_id_tipo_template_value}}}
   * @member {Integer} idTipoTemplate
   */
  exports.prototype['idTipoTemplate'] = undefined;




  return exports;
}));
