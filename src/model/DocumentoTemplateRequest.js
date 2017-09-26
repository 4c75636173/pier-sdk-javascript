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
    root.Pier.DocumentoTemplateRequest = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DocumentoTemplateRequest model module.
   * @module model/DocumentoTemplateRequest
   * @version 2.35.2
   */

  /**
   * Constructs a new <code>DocumentoTemplateRequest</code>.
   * Representa\u00C3\u00A7\u00C3\u00A3o do template do documento.
   * @alias module:model/DocumentoTemplateRequest
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>DocumentoTemplateRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DocumentoTemplateRequest} obj Optional instance to populate.
   * @return {module:model/DocumentoTemplateRequest} The populated <code>DocumentoTemplateRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('idTipoDocumento')) {
        obj['idTipoDocumento'] = ApiClient.convertToType(data['idTipoDocumento'], 'Integer');
      }
      if (data.hasOwnProperty('template')) {
        obj['template'] = ApiClient.convertToType(data['template'], 'String');
      }
    }
    return obj;
  }


  /**
   * ID para o Tipo de Documento vinculado ao template.
   * @member {Integer} idTipoDocumento
   */
  exports.prototype['idTipoDocumento'] = undefined;

  /**
   * Template para o conte\u00C3\u00BAdo do documento.
   * @member {String} template
   */
  exports.prototype['template'] = undefined;




  return exports;
}));
