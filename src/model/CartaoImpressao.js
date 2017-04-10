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
    root.Pier.CartaoImpressao = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CartaoImpressao model module.
   * @module model/CartaoImpressao
   * @version 2.12.0
   */

  /**
   * Constructs a new <code>CartaoImpressao</code>.
   * Objeto Cart\u00C3\u00A3o para Impresso
   * @alias module:model/CartaoImpressao
   * @class
   */
  var exports = function() {























  };

  /**
   * Constructs a <code>CartaoImpressao</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CartaoImpressao} obj Optional instance to populate.
   * @return {module:model/CartaoImpressao} The populated <code>CartaoImpressao</code> instance.
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
        obj['dataGeracao'] = ApiClient.convertToType(data['dataGeracao'], 'Date');
      }
      if (data.hasOwnProperty('dataValidade')) {
        obj['dataValidade'] = ApiClient.convertToType(data['dataValidade'], 'Date');
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
    }
    return obj;
  }


  /**
   * Apresenta o C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Conta (id) a qual o cart\u00C3\u00A3o gerado pertence.
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * Apresenta o C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Pessoa (id) portadora do cart\u00C3\u00A3o gerado.
   * @member {Integer} idPessoa
   */
  exports.prototype['idPessoa'] = undefined;

  /**
   * Apresenta o C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Cart\u00C3\u00A3o (id) que foi gerado.
   * @member {Integer} idCartao
   */
  exports.prototype['idCartao'] = undefined;

  /**
   * Apresenta o C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Bandeira (id) a qual o Cart\u00C3\u00A3o pertence, quando bandeirado.
   * @member {Integer} idBandeira
   */
  exports.prototype['idBandeira'] = undefined;

  /**
   * Apresenta o C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Tipo do Cart\u00C3\u00A3o (id) atribu\u00C3\u00ADdo ao Cart\u00C3\u00A3o.
   * @member {Integer} idTipoCartao
   */
  exports.prototype['idTipoCartao'] = undefined;

  /**
   * Apresenta o n\u00C3\u00BAmero do cart\u00C3\u00A3o.
   * @member {String} numeroCartao
   */
  exports.prototype['numeroCartao'] = undefined;

  /**
   * Apresenta o nome do Portador do Cart\u00C3\u00A3o.
   * @member {String} nomePlastico
   */
  exports.prototype['nomePlastico'] = undefined;

  /**
   * Apresenta o n\u00C3\u00BAmero do CVV a ser impresso no Cart\u00C3\u00A3o
   * @member {String} cvv2
   */
  exports.prototype['cvv2'] = undefined;

  /**
   * Apresenta a data de emiss\u00C3\u00A3o do Cart\u00C3\u00A3o.
   * @member {Date} dataGeracao
   */
  exports.prototype['dataGeracao'] = undefined;

  /**
   * Apresenta a data de Validade do Cart\u00C3\u00A3o.
   * @member {Date} dataValidade
   */
  exports.prototype['dataValidade'] = undefined;

  /**
   * Apresenta o nome da Origem Comercial que realizou o cadastro do Titular da Conta a qual o Cart\u00C3\u00A3o pertence.
   * @member {String} nomeOrigemComercial
   */
  exports.prototype['nomeOrigemComercial'] = undefined;

  /**
   * Apresenta o nome da Empresa (Pessoa Jur\u00C3\u00ADdica) titular do Cart\u00C3\u00A3o, quando aplic\u00C3\u00A1vel.
   * @member {String} nomeEmpresa
   */
  exports.prototype['nomeEmpresa'] = undefined;

  /**
   * Apresenta o n\u00C3\u00BAmero da Ag\u00C3\u00AAncia a ser impresso no Cart\u00C3\u00A3o, quando aplic\u00C3\u00A1vel.
   * @member {Integer} numeroAgencia
   */
  exports.prototype['numeroAgencia'] = undefined;

  /**
   * Apresenta o n\u00C3\u00BAmero da Conta Corrente a ser impresso no Cart\u00C3\u00A3o, quando aplic\u00C3\u00A1vel.
   * @member {String} numeroContaCorente
   */
  exports.prototype['numeroContaCorente'] = undefined;

  /**
   * Apresenta o nome da Pessoa F\u00C3\u00ADsica ou Jur\u00C3\u00ADdica que contratou servi\u00C3\u00A7os de benef\u00C3\u00ADcio para o portador do cart\u00C3\u00A3o, quando aplic\u00C3\u00A1vel.
   * @member {String} nomeEmpresaBeneficio
   */
  exports.prototype['nomeEmpresaBeneficio'] = undefined;

  /**
   * Apresenta o CPF do Portador do Cart\u00C3\u00A3o.
   * @member {String} cpf
   */
  exports.prototype['cpf'] = undefined;

  /**
   * Apresenta o tipo do Portador do cart\u00C3\u00A3o, sendo: ('T': Titular, 'A': Adicional).
   * @member {String} tipoPortador
   */
  exports.prototype['tipoPortador'] = undefined;

  /**
   * Apresenta o nome da Pessoa F\u00C3\u00ADsica ou Jur\u00C3\u00ADdica a ser impresso no cart\u00C3\u00A3o, quando aplic\u00C3\u00A1vel.
   * @member {String} nomeEmpregador
   */
  exports.prototype['nomeEmpregador'] = undefined;

  /**
   * Apresenta os dados da Trilha1, seguindo as regras de trilha do emissor.
   * @member {String} trilha1
   */
  exports.prototype['trilha1'] = undefined;

  /**
   * Apresenta os dados da Trilha2, seguindo as regras de trilha do emissor.
   * @member {String} trilha2
   */
  exports.prototype['trilha2'] = undefined;

  /**
   * Apresenta os dados da TrilhaCVV01, seguindo as regras de trilha do emissor.
   * @member {String} trilhaCVV1
   */
  exports.prototype['trilhaCVV1'] = undefined;

  /**
   * Apresenta os dados da TrilhaCVV02, seguindo as regras de trilha do emissor.
   * @member {String} trilhaCVV2
   */
  exports.prototype['trilhaCVV2'] = undefined;




  return exports;
}));
