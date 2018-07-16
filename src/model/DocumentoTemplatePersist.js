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
   * @version 2.68.0
   */

  /**
   * Constructs a new <code>DocumentoTemplatePersist</code>.
   * {{{documento_template_persist_description}}}
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
   * {{{documento_template_persist_id_tipo_template_value}}}
   * @member {Integer} idTipoTemplate
   */
  exports.prototype['idTipoTemplate'] = undefined;

  /**
   * {{{documento_template_persist_template_value}}}
   * @member {String} template
   */
  exports.prototype['template'] = undefined;

  /**
   * {{{documento_template_persist_integracoes_value}}}
   * @member {Array.<module:model/ReferenciaIdPersist>} integracoes
   */
  exports.prototype['integracoes'] = undefined;




  return exports;
}));
