(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['./ApiClient', './model/AuthToken', './model/Body', './model/BodyAccessToken', './model/CancelarCartaoResponse', './model/CartaoResponse', './model/ConsultarCartaoResponse', './model/ConsultarContaCartaoResponse', './model/ConsultarContaResponse', './model/ConsultarExtratoContaResponse', './model/ConsultarSaldoLimitesResponse', './model/ContaCartaoResponse', './model/ContaResponse', './model/DesbloquearCartaoResponse', './model/ExtraInfo', './model/ExtratoResponse', './model/PessoaFisicaResponse', './model/SaldoLimiteResponse', './api/CartaoApi', './api/ContaApi', './api/TokenApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/AuthToken'), require('./model/Body'), require('./model/BodyAccessToken'), require('./model/CancelarCartaoResponse'), require('./model/CartaoResponse'), require('./model/ConsultarCartaoResponse'), require('./model/ConsultarContaCartaoResponse'), require('./model/ConsultarContaResponse'), require('./model/ConsultarExtratoContaResponse'), require('./model/ConsultarSaldoLimitesResponse'), require('./model/ContaCartaoResponse'), require('./model/ContaResponse'), require('./model/DesbloquearCartaoResponse'), require('./model/ExtraInfo'), require('./model/ExtratoResponse'), require('./model/PessoaFisicaResponse'), require('./model/SaldoLimiteResponse'), require('./api/CartaoApi'), require('./api/ContaApi'), require('./api/TokenApi'));
  }
}(function(ApiClient, AuthToken, Body, BodyAccessToken, CancelarCartaoResponse, CartaoResponse, ConsultarCartaoResponse, ConsultarContaCartaoResponse, ConsultarContaResponse, ConsultarExtratoContaResponse, ConsultarSaldoLimitesResponse, ContaCartaoResponse, ContaResponse, DesbloquearCartaoResponse, ExtraInfo, ExtratoResponse, PessoaFisicaResponse, SaldoLimiteResponse, CartaoApi, ContaApi, TokenApi) {
  'use strict';

  /**
   * Gest\u00C3\u00A3o de pagamento eletr\u00C3\u00B4nicos como servi\u00C3\u00A7o.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var Pier = require('./index'); // See note below*.
   * var xxxSvc = new Pier.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new Pier.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['./index'], function(){...}) and put the application logic within the
   * callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new Pier.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new Pier.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 0.0.1
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The AuthToken model constructor.
     * @property {module:model/AuthToken}
     */
    AuthToken: AuthToken,
    /**
     * The Body model constructor.
     * @property {module:model/Body}
     */
    Body: Body,
    /**
     * The BodyAccessToken model constructor.
     * @property {module:model/BodyAccessToken}
     */
    BodyAccessToken: BodyAccessToken,
    /**
     * The CancelarCartaoResponse model constructor.
     * @property {module:model/CancelarCartaoResponse}
     */
    CancelarCartaoResponse: CancelarCartaoResponse,
    /**
     * The CartaoResponse model constructor.
     * @property {module:model/CartaoResponse}
     */
    CartaoResponse: CartaoResponse,
    /**
     * The ConsultarCartaoResponse model constructor.
     * @property {module:model/ConsultarCartaoResponse}
     */
    ConsultarCartaoResponse: ConsultarCartaoResponse,
    /**
     * The ConsultarContaCartaoResponse model constructor.
     * @property {module:model/ConsultarContaCartaoResponse}
     */
    ConsultarContaCartaoResponse: ConsultarContaCartaoResponse,
    /**
     * The ConsultarContaResponse model constructor.
     * @property {module:model/ConsultarContaResponse}
     */
    ConsultarContaResponse: ConsultarContaResponse,
    /**
     * The ConsultarExtratoContaResponse model constructor.
     * @property {module:model/ConsultarExtratoContaResponse}
     */
    ConsultarExtratoContaResponse: ConsultarExtratoContaResponse,
    /**
     * The ConsultarSaldoLimitesResponse model constructor.
     * @property {module:model/ConsultarSaldoLimitesResponse}
     */
    ConsultarSaldoLimitesResponse: ConsultarSaldoLimitesResponse,
    /**
     * The ContaCartaoResponse model constructor.
     * @property {module:model/ContaCartaoResponse}
     */
    ContaCartaoResponse: ContaCartaoResponse,
    /**
     * The ContaResponse model constructor.
     * @property {module:model/ContaResponse}
     */
    ContaResponse: ContaResponse,
    /**
     * The DesbloquearCartaoResponse model constructor.
     * @property {module:model/DesbloquearCartaoResponse}
     */
    DesbloquearCartaoResponse: DesbloquearCartaoResponse,
    /**
     * The ExtraInfo model constructor.
     * @property {module:model/ExtraInfo}
     */
    ExtraInfo: ExtraInfo,
    /**
     * The ExtratoResponse model constructor.
     * @property {module:model/ExtratoResponse}
     */
    ExtratoResponse: ExtratoResponse,
    /**
     * The PessoaFisicaResponse model constructor.
     * @property {module:model/PessoaFisicaResponse}
     */
    PessoaFisicaResponse: PessoaFisicaResponse,
    /**
     * The SaldoLimiteResponse model constructor.
     * @property {module:model/SaldoLimiteResponse}
     */
    SaldoLimiteResponse: SaldoLimiteResponse,
    /**
     * The CartaoApi service constructor.
     * @property {module:api/CartaoApi}
     */
    CartaoApi: CartaoApi,
    /**
     * The ContaApi service constructor.
     * @property {module:api/ContaApi}
     */
    ContaApi: ContaApi,
    /**
     * The TokenApi service constructor.
     * @property {module:api/TokenApi}
     */
    TokenApi: TokenApi
  };

  return exports;
}));
