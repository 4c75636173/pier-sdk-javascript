(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './TelefonePessoaAprovadaResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TelefonePessoaAprovadaResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.SocioAprovadoResponse = factory(root.Pier.ApiClient, root.Pier.TelefonePessoaAprovadaResponse);
  }
}(this, function(ApiClient, TelefonePessoaAprovadaResponse) {
  'use strict';

  /**
   * The SocioAprovadoResponse model module.
   * @module model/SocioAprovadoResponse
   * @version 2.66.1
   */

  /**
   * Constructs a new <code>SocioAprovadoResponse</code>.
   * {{{socio_aprovado_response_description}}}
   * @alias module:model/SocioAprovadoResponse
   * @class
   */
  var exports = function() {















  };

  /**
   * Constructs a <code>SocioAprovadoResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SocioAprovadoResponse} obj Optional instance to populate.
   * @return {module:model/SocioAprovadoResponse} The populated <code>SocioAprovadoResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('nome')) {
        obj['nome'] = ApiClient.convertToType(data['nome'], 'String');
      }
      if (data.hasOwnProperty('cpf')) {
        obj['cpf'] = ApiClient.convertToType(data['cpf'], 'String');
      }
      if (data.hasOwnProperty('dataNascimento')) {
        obj['dataNascimento'] = ApiClient.convertToType(data['dataNascimento'], 'String');
      }
      if (data.hasOwnProperty('sexo')) {
        obj['sexo'] = ApiClient.convertToType(data['sexo'], 'String');
      }
      if (data.hasOwnProperty('numeroIdentidade')) {
        obj['numeroIdentidade'] = ApiClient.convertToType(data['numeroIdentidade'], 'String');
      }
      if (data.hasOwnProperty('orgaoExpedidorIdentidade')) {
        obj['orgaoExpedidorIdentidade'] = ApiClient.convertToType(data['orgaoExpedidorIdentidade'], 'String');
      }
      if (data.hasOwnProperty('unidadeFederativaIdentidade')) {
        obj['unidadeFederativaIdentidade'] = ApiClient.convertToType(data['unidadeFederativaIdentidade'], 'String');
      }
      if (data.hasOwnProperty('dataEmissaoIdentidade')) {
        obj['dataEmissaoIdentidade'] = ApiClient.convertToType(data['dataEmissaoIdentidade'], 'String');
      }
      if (data.hasOwnProperty('estadoCivil')) {
        obj['estadoCivil'] = ApiClient.convertToType(data['estadoCivil'], 'String');
      }
      if (data.hasOwnProperty('profissao')) {
        obj['profissao'] = ApiClient.convertToType(data['profissao'], 'String');
      }
      if (data.hasOwnProperty('nacionalidade')) {
        obj['nacionalidade'] = ApiClient.convertToType(data['nacionalidade'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('telefones')) {
        obj['telefones'] = ApiClient.convertToType(data['telefones'], [TelefonePessoaAprovadaResponse]);
      }
    }
    return obj;
  }


  /**
   * {{{socio_aprovado_response_id_value}}}
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * {{{socio_aprovado_response_nome_value}}}
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;

  /**
   * {{{socio_aprovado_response_cpf_value}}}
   * @member {String} cpf
   */
  exports.prototype['cpf'] = undefined;

  /**
   * {{{socio_aprovado_response_data_nascimento_value}}}
   * @member {String} dataNascimento
   */
  exports.prototype['dataNascimento'] = undefined;

  /**
   * {{{socio_aprovado_response_sexo_value}}}
   * @member {String} sexo
   */
  exports.prototype['sexo'] = undefined;

  /**
   * {{{socio_aprovado_response_numero_identidade_value}}}
   * @member {String} numeroIdentidade
   */
  exports.prototype['numeroIdentidade'] = undefined;

  /**
   * {{{socio_aprovado_response_orgao_expedidor_identidade_value}}}
   * @member {String} orgaoExpedidorIdentidade
   */
  exports.prototype['orgaoExpedidorIdentidade'] = undefined;

  /**
   * {{{socio_aprovado_response_unidade_federativa_identidade_value}}}
   * @member {String} unidadeFederativaIdentidade
   */
  exports.prototype['unidadeFederativaIdentidade'] = undefined;

  /**
   * {{{socio_aprovado_response_data_emissao_identidade_value}}}
   * @member {String} dataEmissaoIdentidade
   */
  exports.prototype['dataEmissaoIdentidade'] = undefined;

  /**
   * {{{socio_aprovado_response_estado_civil_value}}}
   * @member {String} estadoCivil
   */
  exports.prototype['estadoCivil'] = undefined;

  /**
   * {{{socio_aprovado_response_profissao_value}}}
   * @member {String} profissao
   */
  exports.prototype['profissao'] = undefined;

  /**
   * {{{socio_aprovado_response_nacionalidade_value}}}
   * @member {String} nacionalidade
   */
  exports.prototype['nacionalidade'] = undefined;

  /**
   * {{{socio_aprovado_response_email_value}}}
   * @member {String} email
   */
  exports.prototype['email'] = undefined;

  /**
   * {{{socio_aprovado_response_telefones_value}}}
   * @member {Array.<module:model/TelefonePessoaAprovadaResponse>} telefones
   */
  exports.prototype['telefones'] = undefined;




  return exports;
}));
