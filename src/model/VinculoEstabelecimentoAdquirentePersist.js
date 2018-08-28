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
    root.Pier.VinculoEstabelecimentoAdquirentePersist = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The VinculoEstabelecimentoAdquirentePersist model module.
   * @module model/VinculoEstabelecimentoAdquirentePersist
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>VinculoEstabelecimentoAdquirentePersist</code>.
   * {{{vinculo_estabelecimento_adquirente_persist_description}}}
   * @alias module:model/VinculoEstabelecimentoAdquirentePersist
   * @class
   * @param idEstabelecimento
   * @param idAdquirente
   * @param codigoEstabelecimentoAdquirente
   */
  var exports = function(idEstabelecimento, idAdquirente, codigoEstabelecimentoAdquirente) {

    this['idEstabelecimento'] = idEstabelecimento;
    this['idAdquirente'] = idAdquirente;
    this['codigoEstabelecimentoAdquirente'] = codigoEstabelecimentoAdquirente;
  };

  /**
   * Constructs a <code>VinculoEstabelecimentoAdquirentePersist</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VinculoEstabelecimentoAdquirentePersist} obj Optional instance to populate.
   * @return {module:model/VinculoEstabelecimentoAdquirentePersist} The populated <code>VinculoEstabelecimentoAdquirentePersist</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('idEstabelecimento')) {
        obj['idEstabelecimento'] = ApiClient.convertToType(data['idEstabelecimento'], 'Integer');
      }
      if (data.hasOwnProperty('idAdquirente')) {
        obj['idAdquirente'] = ApiClient.convertToType(data['idAdquirente'], 'Integer');
      }
      if (data.hasOwnProperty('codigoEstabelecimentoAdquirente')) {
        obj['codigoEstabelecimentoAdquirente'] = ApiClient.convertToType(data['codigoEstabelecimentoAdquirente'], 'String');
      }
    }
    return obj;
  }


  /**
   * {{{vinculo_estabelecimento_adquirente_persist_id_estabelecimento_value}}}
   * @member {Integer} idEstabelecimento
   */
  exports.prototype['idEstabelecimento'] = undefined;

  /**
   * {{{vinculo_estabelecimento_adquirente_persist_id_adquirente_value}}}
   * @member {Integer} idAdquirente
   */
  exports.prototype['idAdquirente'] = undefined;

  /**
   * {{{vinculo_estabelecimento_adquirente_persist_codigo_estabelecimento_adquirente_value}}}
   * @member {String} codigoEstabelecimentoAdquirente
   */
  exports.prototype['codigoEstabelecimentoAdquirente'] = undefined;




  return exports;
}));
