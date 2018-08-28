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
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>ConsultaCadastroEstabelecimentoDTO</code>.
   * {{{consulta_cadastro_estabelecimento_d_t_o_description}}}
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
   * {{{consulta_cadastro_estabelecimento_d_t_o_data_hora_consulta_value}}}
   * @member {String} dataHoraConsulta
   */
  exports.prototype['dataHoraConsulta'] = undefined;

  /**
   * {{{consulta_cadastro_estabelecimento_d_t_o_status_value}}}
   * @member {module:model/ConsultaCadastroEstabelecimentoDTO.StatusEnum} status
   */
  exports.prototype['status'] = undefined;

  /**
   * {{{consulta_cadastro_estabelecimento_d_t_o_tipo_entidade_value}}}
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
