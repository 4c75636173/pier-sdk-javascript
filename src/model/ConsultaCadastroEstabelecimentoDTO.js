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
    root.Pier.ConsultaCadastroEstabelecimentoDTO = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ConsultaCadastroEstabelecimentoDTO model module.
   * @module model/ConsultaCadastroEstabelecimentoDTO
   * @version 2.54.4
   */

  /**
   * Constructs a new <code>ConsultaCadastroEstabelecimentoDTO</code>.
   * @alias module:model/ConsultaCadastroEstabelecimentoDTO
   * @class
   */
  var exports = function() {




  };

  /**
   * Constructs a <code>ConsultaCadastroEstabelecimentoDTO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConsultaCadastroEstabelecimentoDTO} obj Optional instance to populate.
   * @return {module:model/ConsultaCadastroEstabelecimentoDTO} The populated <code>ConsultaCadastroEstabelecimentoDTO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('dataHoraConsulta')) {
        obj['dataHoraConsulta'] = ApiClient.convertToType(data['dataHoraConsulta'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('tipoEntidade')) {
        obj['tipoEntidade'] = ApiClient.convertToType(data['tipoEntidade'], 'String');
      }
    }
    return obj;
  }


  /**
   * Data hora de cadastro.
   * @member {String} dataHoraConsulta
   */
  exports.prototype['dataHoraConsulta'] = undefined;

  /**
   * Status da consulta (1 - OK, 2 - NOK).
   * @member {module:model/ConsultaCadastroEstabelecimentoDTO.StatusEnum} status
   */
  exports.prototype['status'] = undefined;

  /**
   * Tipo da entidade (1 - ATIVO, 2 - BLOQUEADO).
   * @member {module:model/ConsultaCadastroEstabelecimentoDTO.TipoEntidadeEnum} tipoEntidade
   */
  exports.prototype['tipoEntidade'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = { 
    /**
     * value: OK
     * @const
     */
    OK: "OK",
    
    /**
     * value: NOK
     * @const
     */
    NOK: "NOK"
  };  /**
   * Allowed values for the <code>tipoEntidade</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TipoEntidadeEnum = { 
    /**
     * value: ATIVO
     * @const
     */
    ATIVO: "ATIVO",
    
    /**
     * value: BLOQUEADO
     * @const
     */
    BLOQUEADO: "BLOQUEADO"
  };

  return exports;
}));
