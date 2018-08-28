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
    root.Pier.AdicionalContaPersist = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AdicionalContaPersist model module.
   * @module model/AdicionalContaPersist
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>AdicionalContaPersist</code>.
   * {{{adicional_conta_persist_description}}}
   * @alias module:model/AdicionalContaPersist
   * @class
   * @param idPessoa
   */
  var exports = function(idPessoa) {

    this['idPessoa'] = idPessoa;






  };

  /**
   * Constructs a <code>AdicionalContaPersist</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AdicionalContaPersist} obj Optional instance to populate.
   * @return {module:model/AdicionalContaPersist} The populated <code>AdicionalContaPersist</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('idPessoa')) {
        obj['idPessoa'] = ApiClient.convertToType(data['idPessoa'], 'Integer');
      }
      if (data.hasOwnProperty('nomeImpresso')) {
        obj['nomeImpresso'] = ApiClient.convertToType(data['nomeImpresso'], 'String');
      }
      if (data.hasOwnProperty('idEstadoCivil')) {
        obj['idEstadoCivil'] = ApiClient.convertToType(data['idEstadoCivil'], 'Integer');
      }
      if (data.hasOwnProperty('idProfissao')) {
        obj['idProfissao'] = ApiClient.convertToType(data['idProfissao'], 'Integer');
      }
      if (data.hasOwnProperty('idNacionalidade')) {
        obj['idNacionalidade'] = ApiClient.convertToType(data['idNacionalidade'], 'Integer');
      }
      if (data.hasOwnProperty('idParentesco')) {
        obj['idParentesco'] = ApiClient.convertToType(data['idParentesco'], 'Integer');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
    }
    return obj;
  }


  /**
   * {{{adicional_conta_persist_id_pessoa_value}}}
   * @member {Integer} idPessoa
   */
  exports.prototype['idPessoa'] = undefined;

  /**
   * {{{adicional_conta_persist_nome_impresso_value}}}
   * @member {String} nomeImpresso
   */
  exports.prototype['nomeImpresso'] = undefined;

  /**
   * {{{adicional_conta_persist_id_estado_civil_value}}}
   * @member {Integer} idEstadoCivil
   */
  exports.prototype['idEstadoCivil'] = undefined;

  /**
   * {{{adicional_conta_persist_id_profissao_value}}}
   * @member {Integer} idProfissao
   */
  exports.prototype['idProfissao'] = undefined;

  /**
   * {{{adicional_conta_persist_id_nacionalidade_value}}}
   * @member {Integer} idNacionalidade
   */
  exports.prototype['idNacionalidade'] = undefined;

  /**
   * {{{adicional_conta_persist_id_parentesco_value}}}
   * @member {Integer} idParentesco
   */
  exports.prototype['idParentesco'] = undefined;

  /**
   * {{{adicional_conta_persist_email_value}}}
   * @member {String} email
   */
  exports.prototype['email'] = undefined;




  return exports;
}));
