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
    root.Pier.TaxaJurosContaPersistValue = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TaxaJurosContaPersistValue model module.
   * @module model/TaxaJurosContaPersistValue
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>TaxaJurosContaPersistValue</code>.
   * {{{taxa_juros_conta_persist_value}}}
   * @alias module:model/TaxaJurosContaPersistValue
   * @class
   * @param numeroMesesCarencia
   * @param taxaJuros
   */
  var exports = function(numeroMesesCarencia, taxaJuros) {

    this['numeroMesesCarencia'] = numeroMesesCarencia;
    this['taxaJuros'] = taxaJuros;
  };

  /**
   * Constructs a <code>TaxaJurosContaPersistValue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TaxaJurosContaPersistValue} obj Optional instance to populate.
   * @return {module:model/TaxaJurosContaPersistValue} The populated <code>TaxaJurosContaPersistValue</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('numeroMesesCarencia')) {
        obj['numeroMesesCarencia'] = ApiClient.convertToType(data['numeroMesesCarencia'], 'Integer');
      }
      if (data.hasOwnProperty('taxaJuros')) {
        obj['taxaJuros'] = ApiClient.convertToType(data['taxaJuros'], 'Number');
      }
    }
    return obj;
  }


  /**
   * {{{taxa_juros_conta_update_numero_meses_carencia_value}}}
   * @member {Integer} numeroMesesCarencia
   */
  exports.prototype['numeroMesesCarencia'] = undefined;

  /**
   * {{{taxa_juros_conta_update_taxa_juros_value}}}
   * @member {Number} taxaJuros
   */
  exports.prototype['taxaJuros'] = undefined;




  return exports;
}));
