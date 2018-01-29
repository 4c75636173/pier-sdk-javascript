(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './ReferenciaIdPersist'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ReferenciaIdPersist'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.DocumentoTemplatePersist = factory(root.Pier.ApiClient, root.Pier.ReferenciaIdPersist);
  }
}(this, function(ApiClient, ReferenciaIdPersist) {
  'use strict';

  /**
   * The DocumentoTemplatePersist model module.
   * @module model/DocumentoTemplatePersist
   * @version 2.50.18
   */

  /**
   * Constructs a new <code>DocumentoTemplatePersist</code>.
   * Representa\u00C3\u00A7\u00C3\u00A3o do template do documento.
   * @alias module:model/DocumentoTemplatePersist
   * @class
   */
  var exports = function() {




  };

  /**
   * Constructs a <code>DocumentoTemplatePersist</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DocumentoTemplatePersist} obj Optional instance to populate.
   * @return {module:model/DocumentoTemplatePersist} The populated <code>DocumentoTemplatePersist</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('idTipoTemplate')) {
        obj['idTipoTemplate'] = ApiClient.convertToType(data['idTipoTemplate'], 'Integer');
      }
      if (data.hasOwnProperty('template')) {
        obj['template'] = ApiClient.convertToType(data['template'], 'String');
      }
      if (data.hasOwnProperty('integracoes')) {
        obj['integracoes'] = ApiClient.convertToType(data['integracoes'], [ReferenciaIdPersist]);
      }
    }
    return obj;
  }


  /**
   * ID para o Tipo de Template vinculado ao template.
   * @member {Integer} idTipoTemplate
   */
  exports.prototype['idTipoTemplate'] = undefined;

  /**
   * Template para o conte\u00C3\u00BAdo do documento.
   * @member {String} template
   */
  exports.prototype['template'] = undefined;

  /**
   * Lista de configura\u00C3\u00A7\u00C3\u00B5es de integra\u00C3\u00A7\u00C3\u00A3o
   * @member {Array.<module:model/ReferenciaIdPersist>} integracoes
   */
  exports.prototype['integracoes'] = undefined;




  return exports;
}));
