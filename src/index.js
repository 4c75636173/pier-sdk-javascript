(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['./ApiClient', './model/AuthToken', './model/BodyAccessToken', './model/CancelarCartaoResponse', './model/CartaoResponseOld', './model/Carto', './model/ConsultarCartaoResponse', './model/ConsultarContaCartaoResponse', './model/ConsultarContaResponse', './model/ConsultarExtratoContaResponse', './model/ConsultarSaldoLimitesResponse', './model/ContaCartaoResponse', './model/ContaResponse', './model/DesbloquearCartaoResponse', './model/EmbossadoCartaoResponse', './model/EstgioCarto', './model/ExtraInfo', './model/ExtratoResponse', './model/ListaDeCartes', './model/ListaDeEstgiosCartes', './model/ListaDeOrigensComerciais', './model/ListaDePessoas', './model/ListaDeStatusCartes', './model/OrigemComercial', './model/Pessoa', './model/PessoaFisicaResponse', './model/SaldoLimiteResponse', './model/StatusCarto', './api/BaseApi', './api/CartaoApi', './api/CartoApi', './api/ContaApi', './api/EstgioCartoApi', './api/OrigemComercialApi', './api/PessoaApi', './api/ProdutoApi', './api/StatusCartoApi', './api/TokenApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/AuthToken'), require('./model/BodyAccessToken'), require('./model/CancelarCartaoResponse'), require('./model/CartaoResponseOld'), require('./model/Carto'), require('./model/ConsultarCartaoResponse'), require('./model/ConsultarContaCartaoResponse'), require('./model/ConsultarContaResponse'), require('./model/ConsultarExtratoContaResponse'), require('./model/ConsultarSaldoLimitesResponse'), require('./model/ContaCartaoResponse'), require('./model/ContaResponse'), require('./model/DesbloquearCartaoResponse'), require('./model/EmbossadoCartaoResponse'), require('./model/EstgioCarto'), require('./model/ExtraInfo'), require('./model/ExtratoResponse'), require('./model/ListaDeCartes'), require('./model/ListaDeEstgiosCartes'), require('./model/ListaDeOrigensComerciais'), require('./model/ListaDePessoas'), require('./model/ListaDeStatusCartes'), require('./model/OrigemComercial'), require('./model/Pessoa'), require('./model/PessoaFisicaResponse'), require('./model/SaldoLimiteResponse'), require('./model/StatusCarto'), require('./api/BaseApi'), require('./api/CartaoApi'), require('./api/CartoApi'), require('./api/ContaApi'), require('./api/EstgioCartoApi'), require('./api/OrigemComercialApi'), require('./api/PessoaApi'), require('./api/ProdutoApi'), require('./api/StatusCartoApi'), require('./api/TokenApi'));
  }
}(function(ApiClient, AuthToken, BodyAccessToken, CancelarCartaoResponse, CartaoResponseOld, Carto, ConsultarCartaoResponse, ConsultarContaCartaoResponse, ConsultarContaResponse, ConsultarExtratoContaResponse, ConsultarSaldoLimitesResponse, ContaCartaoResponse, ContaResponse, DesbloquearCartaoResponse, EmbossadoCartaoResponse, EstgioCarto, ExtraInfo, ExtratoResponse, ListaDeCartes, ListaDeEstgiosCartes, ListaDeOrigensComerciais, ListaDePessoas, ListaDeStatusCartes, OrigemComercial, Pessoa, PessoaFisicaResponse, SaldoLimiteResponse, StatusCarto, BaseApi, CartaoApi, CartoApi, ContaApi, EstgioCartoApi, OrigemComercialApi, PessoaApi, ProdutoApi, StatusCartoApi, TokenApi) {
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
   * @version 1.1.0
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
     * The CartaoResponseOld model constructor.
     * @property {module:model/CartaoResponseOld}
     */
    CartaoResponseOld: CartaoResponseOld,
    /**
     * The Carto model constructor.
     * @property {module:model/Carto}
     */
    Carto: Carto,
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
     * The EmbossadoCartaoResponse model constructor.
     * @property {module:model/EmbossadoCartaoResponse}
     */
    EmbossadoCartaoResponse: EmbossadoCartaoResponse,
    /**
     * The EstgioCarto model constructor.
     * @property {module:model/EstgioCarto}
     */
    EstgioCarto: EstgioCarto,
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
     * The ListaDeCartes model constructor.
     * @property {module:model/ListaDeCartes}
     */
    ListaDeCartes: ListaDeCartes,
    /**
     * The ListaDeEstgiosCartes model constructor.
     * @property {module:model/ListaDeEstgiosCartes}
     */
    ListaDeEstgiosCartes: ListaDeEstgiosCartes,
    /**
     * The ListaDeOrigensComerciais model constructor.
     * @property {module:model/ListaDeOrigensComerciais}
     */
    ListaDeOrigensComerciais: ListaDeOrigensComerciais,
    /**
     * The ListaDePessoas model constructor.
     * @property {module:model/ListaDePessoas}
     */
    ListaDePessoas: ListaDePessoas,
    /**
     * The ListaDeStatusCartes model constructor.
     * @property {module:model/ListaDeStatusCartes}
     */
    ListaDeStatusCartes: ListaDeStatusCartes,
    /**
     * The OrigemComercial model constructor.
     * @property {module:model/OrigemComercial}
     */
    OrigemComercial: OrigemComercial,
    /**
     * The Pessoa model constructor.
     * @property {module:model/Pessoa}
     */
    Pessoa: Pessoa,
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
     * The StatusCarto model constructor.
     * @property {module:model/StatusCarto}
     */
    StatusCarto: StatusCarto,
    /**
     * The BaseApi service constructor.
     * @property {module:api/BaseApi}
     */
    BaseApi: BaseApi,
    /**
     * The CartaoApi service constructor.
     * @property {module:api/CartaoApi}
     */
    CartaoApi: CartaoApi,
    /**
     * The CartoApi service constructor.
     * @property {module:api/CartoApi}
     */
    CartoApi: CartoApi,
    /**
     * The ContaApi service constructor.
     * @property {module:api/ContaApi}
     */
    ContaApi: ContaApi,
    /**
     * The EstgioCartoApi service constructor.
     * @property {module:api/EstgioCartoApi}
     */
    EstgioCartoApi: EstgioCartoApi,
    /**
     * The OrigemComercialApi service constructor.
     * @property {module:api/OrigemComercialApi}
     */
    OrigemComercialApi: OrigemComercialApi,
    /**
     * The PessoaApi service constructor.
     * @property {module:api/PessoaApi}
     */
    PessoaApi: PessoaApi,
    /**
     * The ProdutoApi service constructor.
     * @property {module:api/ProdutoApi}
     */
    ProdutoApi: ProdutoApi,
    /**
     * The StatusCartoApi service constructor.
     * @property {module:api/StatusCartoApi}
     */
    StatusCartoApi: StatusCartoApi,
    /**
     * The TokenApi service constructor.
     * @property {module:api/TokenApi}
     */
    TokenApi: TokenApi
  };

  return exports;
}));
