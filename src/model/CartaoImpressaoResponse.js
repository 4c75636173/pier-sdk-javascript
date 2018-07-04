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
    root.Pier.CartaoImpressaoResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CartaoImpressaoResponse model module.
   * @module model/CartaoImpressaoResponse
   * @version 2.66.1
   */

  /**
   * Constructs a new <code>CartaoImpressaoResponse</code>.
   * {{{cartao_impressao_response_description}}}
   * @alias module:model/CartaoImpressaoResponse
   * @class
   */
  var exports = function() {

























  };

  /**
   * Constructs a <code>CartaoImpressaoResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CartaoImpressaoResponse} obj Optional instance to populate.
   * @return {module:model/CartaoImpressaoResponse} The populated <code>CartaoImpressaoResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('idConta')) {
        obj['idConta'] = ApiClient.convertToType(data['idConta'], 'Integer');
      }
      if (data.hasOwnProperty('idPessoa')) {
        obj['idPessoa'] = ApiClient.convertToType(data['idPessoa'], 'Integer');
      }
      if (data.hasOwnProperty('idCartao')) {
        obj['idCartao'] = ApiClient.convertToType(data['idCartao'], 'Integer');
      }
      if (data.hasOwnProperty('idBandeira')) {
        obj['idBandeira'] = ApiClient.convertToType(data['idBandeira'], 'Integer');
      }
      if (data.hasOwnProperty('idTipoCartao')) {
        obj['idTipoCartao'] = ApiClient.convertToType(data['idTipoCartao'], 'Integer');
      }
      if (data.hasOwnProperty('numeroCartao')) {
        obj['numeroCartao'] = ApiClient.convertToType(data['numeroCartao'], 'String');
      }
      if (data.hasOwnProperty('nomePlastico')) {
        obj['nomePlastico'] = ApiClient.convertToType(data['nomePlastico'], 'String');
      }
      if (data.hasOwnProperty('cvv2')) {
        obj['cvv2'] = ApiClient.convertToType(data['cvv2'], 'String');
      }
      if (data.hasOwnProperty('dataGeracao')) {
        obj['dataGeracao'] = ApiClient.convertToType(data['dataGeracao'], 'String');
      }
      if (data.hasOwnProperty('dataValidade')) {
        obj['dataValidade'] = ApiClient.convertToType(data['dataValidade'], 'String');
      }
      if (data.hasOwnProperty('nomeOrigemComercial')) {
        obj['nomeOrigemComercial'] = ApiClient.convertToType(data['nomeOrigemComercial'], 'String');
      }
      if (data.hasOwnProperty('nomeEmpresa')) {
        obj['nomeEmpresa'] = ApiClient.convertToType(data['nomeEmpresa'], 'String');
      }
      if (data.hasOwnProperty('numeroAgencia')) {
        obj['numeroAgencia'] = ApiClient.convertToType(data['numeroAgencia'], 'Integer');
      }
      if (data.hasOwnProperty('numeroContaCorente')) {
        obj['numeroContaCorente'] = ApiClient.convertToType(data['numeroContaCorente'], 'String');
      }
      if (data.hasOwnProperty('nomeEmpresaBeneficio')) {
        obj['nomeEmpresaBeneficio'] = ApiClient.convertToType(data['nomeEmpresaBeneficio'], 'String');
      }
      if (data.hasOwnProperty('cpf')) {
        obj['cpf'] = ApiClient.convertToType(data['cpf'], 'String');
      }
      if (data.hasOwnProperty('tipoPortador')) {
        obj['tipoPortador'] = ApiClient.convertToType(data['tipoPortador'], 'String');
      }
      if (data.hasOwnProperty('nomeEmpregador')) {
        obj['nomeEmpregador'] = ApiClient.convertToType(data['nomeEmpregador'], 'String');
      }
      if (data.hasOwnProperty('trilha1')) {
        obj['trilha1'] = ApiClient.convertToType(data['trilha1'], 'String');
      }
      if (data.hasOwnProperty('trilha2')) {
        obj['trilha2'] = ApiClient.convertToType(data['trilha2'], 'String');
      }
      if (data.hasOwnProperty('trilhaCVV1')) {
        obj['trilhaCVV1'] = ApiClient.convertToType(data['trilhaCVV1'], 'String');
      }
      if (data.hasOwnProperty('trilhaCVV2')) {
        obj['trilhaCVV2'] = ApiClient.convertToType(data['trilhaCVV2'], 'String');
      }
      if (data.hasOwnProperty('flagVirtual')) {
        obj['flagVirtual'] = ApiClient.convertToType(data['flagVirtual'], 'Integer');
      }
      if (data.hasOwnProperty('numeroCartaoHash')) {
        obj['numeroCartaoHash'] = ApiClient.convertToType(data['numeroCartaoHash'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * {{{cartao_impressao_response_id_conta_value}}}
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * {{{cartao_impressao_response_id_pessoa_value}}}
   * @member {Integer} idPessoa
   */
  exports.prototype['idPessoa'] = undefined;

  /**
   * {{{cartao_impressao_response_id_cartao_value}}}
   * @member {Integer} idCartao
   */
  exports.prototype['idCartao'] = undefined;

  /**
   * {{{cartao_impressao_response_id_bandeira_value}}}
   * @member {Integer} idBandeira
   */
  exports.prototype['idBandeira'] = undefined;

  /**
   * {{{cartao_impressao_response_id_tipo_cartao_value}}}
   * @member {Integer} idTipoCartao
   */
  exports.prototype['idTipoCartao'] = undefined;

  /**
   * {{{cartao_impressao_response_numero_cartao_value}}}
   * @member {String} numeroCartao
   */
  exports.prototype['numeroCartao'] = undefined;

  /**
   * {{{cartao_impressao_response_nome_plastico_value}}}
   * @member {String} nomePlastico
   */
  exports.prototype['nomePlastico'] = undefined;

  /**
   * {{{cartao_impressao_response_cvv2_value}}}
   * @member {String} cvv2
   */
  exports.prototype['cvv2'] = undefined;

  /**
   * {{{cartao_impressao_response_data_geracao_value}}}
   * @member {String} dataGeracao
   */
  exports.prototype['dataGeracao'] = undefined;

  /**
   * {{{cartao_impressao_response_data_validade_value}}}
   * @member {String} dataValidade
   */
  exports.prototype['dataValidade'] = undefined;

  /**
   * {{{cartao_impressao_response_nome_origem_comercial_value}}}
   * @member {String} nomeOrigemComercial
   */
  exports.prototype['nomeOrigemComercial'] = undefined;

  /**
   * {{{cartao_impressao_response_nome_empresa_value}}}
   * @member {String} nomeEmpresa
   */
  exports.prototype['nomeEmpresa'] = undefined;

  /**
   * {{{cartao_impressao_response_numero_agencia_value}}}
   * @member {Integer} numeroAgencia
   */
  exports.prototype['numeroAgencia'] = undefined;

  /**
   * {{{cartao_impressao_response_numero_conta_corente_value}}}
   * @member {String} numeroContaCorente
   */
  exports.prototype['numeroContaCorente'] = undefined;

  /**
   * {{{cartao_impressao_response_nome_empresa_beneficio_value}}}
   * @member {String} nomeEmpresaBeneficio
   */
  exports.prototype['nomeEmpresaBeneficio'] = undefined;

  /**
   * {{{cartao_impressao_response_cpf_value}}}
   * @member {String} cpf
   */
  exports.prototype['cpf'] = undefined;

  /**
   * {{{cartao_impressao_response_tipo_portador_value}}}
   * @member {String} tipoPortador
   */
  exports.prototype['tipoPortador'] = undefined;

  /**
   * {{{cartao_impressao_response_nome_empregador_value}}}
   * @member {String} nomeEmpregador
   */
  exports.prototype['nomeEmpregador'] = undefined;

  /**
   * {{{cartao_impressao_response_trilha1_value}}}
   * @member {String} trilha1
   */
  exports.prototype['trilha1'] = undefined;

  /**
   * {{{cartao_impressao_response_trilha2_value}}}
   * @member {String} trilha2
   */
  exports.prototype['trilha2'] = undefined;

  /**
   * {{{cartao_impressao_response_trilha_c_v_v1_value}}}
   * @member {String} trilhaCVV1
   */
  exports.prototype['trilhaCVV1'] = undefined;

  /**
   * {{{cartao_impressao_response_trilha_c_v_v2_value}}}
   * @member {String} trilhaCVV2
   */
  exports.prototype['trilhaCVV2'] = undefined;

  /**
   * {{{cartao_impressao_response_flag_virtual_value}}}
   * @member {Integer} flagVirtual
   */
  exports.prototype['flagVirtual'] = undefined;

  /**
   * {{{cartao_impressao_response_numero_cartao_hash_value}}}
   * @member {Integer} numeroCartaoHash
   */
  exports.prototype['numeroCartaoHash'] = undefined;




  return exports;
}));
