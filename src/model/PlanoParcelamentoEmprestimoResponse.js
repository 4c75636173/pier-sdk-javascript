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
    root.Pier.PlanoParcelamentoEmprestimoResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PlanoParcelamentoEmprestimoResponse model module.
   * @module model/PlanoParcelamentoEmprestimoResponse
   * @version 2.68.0
   */

  /**
   * Constructs a new <code>PlanoParcelamentoEmprestimoResponse</code>.
   * {{{plano_parcelamento_emprestimo_response_description}}}
   * @alias module:model/PlanoParcelamentoEmprestimoResponse
   * @class
   */
  var exports = function() {






  };

  /**
   * Constructs a <code>PlanoParcelamentoEmprestimoResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PlanoParcelamentoEmprestimoResponse} obj Optional instance to populate.
   * @return {module:model/PlanoParcelamentoEmprestimoResponse} The populated <code>PlanoParcelamentoEmprestimoResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('numeroParcelas')) {
        obj['numeroParcelas'] = ApiClient.convertToType(data['numeroParcelas'], 'Integer');
      }
      if (data.hasOwnProperty('valorParcelas')) {
        obj['valorParcelas'] = ApiClient.convertToType(data['valorParcelas'], 'Number');
      }
      if (data.hasOwnProperty('taxaJuros')) {
        obj['taxaJuros'] = ApiClient.convertToType(data['taxaJuros'], 'Number');
      }
      if (data.hasOwnProperty('valorTributosIOF')) {
        obj['valorTributosIOF'] = ApiClient.convertToType(data['valorTributosIOF'], 'Number');
      }
      if (data.hasOwnProperty('valorPercentualCET')) {
        obj['valorPercentualCET'] = ApiClient.convertToType(data['valorPercentualCET'], 'Number');
      }
    }
    return obj;
  }


  /**
   * {{{plano_parcelamento_emprestimo_response_numero_parcelas_value}}}
   * @member {Integer} numeroParcelas
   */
  exports.prototype['numeroParcelas'] = undefined;

  /**
   * {{{plano_parcelamento_emprestimo_response_valor_parcelas_value}}}
   * @member {Number} valorParcelas
   */
  exports.prototype['valorParcelas'] = undefined;

  /**
   * {{{plano_parcelamento_emprestimo_response_taxa_juros_value}}}
   * @member {Number} taxaJuros
   */
  exports.prototype['taxaJuros'] = undefined;

  /**
   * {{{plano_parcelamento_emprestimo_response_valor_tributos_i_o_f_value}}}
   * @member {Number} valorTributosIOF
   */
  exports.prototype['valorTributosIOF'] = undefined;

  /**
   * {{{plano_parcelamento_emprestimo_response_valor_percentual_c_e_t_value}}}
   * @member {Number} valorPercentualCET
   */
  exports.prototype['valorPercentualCET'] = undefined;




  return exports;
}));
