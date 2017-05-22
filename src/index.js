(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['./ApiClient', './model/AjusteResponse', './model/AplicacaoMobile', './model/AplicacaoMobilePersist', './model/AplicacaoMobileUpdate', './model/AtendimentoCliente', './model/AuthToken', './model/AutorizacaoOnUsRequest', './model/Base', './model/BodyAccessToken', './model/BoletoDeFatura', './model/CampoCodificadoDescricaoResponse', './model/CancelamentoTransacaoOnUsRequest', './model/Cartao', './model/CartaoImpressao', './model/CdtDetalheOportunidadeAUD', './model/ContaDetalheResponse', './model/ContaResponse', './model/DadosCarto', './model/DesfazimentoTransacaoOnURequest', './model/DetalheOportunidadePersist', './model/DetalheOportunidadeResponse', './model/DetalheOportunidadeUpdate', './model/DetalhesFaturaConsignadaResponse', './model/DetalhesFaturaResponse', './model/Dispositivo', './model/DispositivoPersist', './model/DividaClienteResponse', './model/Endereco', './model/EnderecoAprovadoPersist', './model/EnderecoAprovadoResponse', './model/Estabelecimento', './model/EstagioCartao', './model/ExtraInfo', './model/FAQ', './model/FaturaConsignadaDetalheResponse', './model/FaturaConsignadaResponse', './model/FaturaResponse', './model/HistoricoAtrasoFaturaResponse', './model/HistoricoEventos', './model/HistoricoImpressaoCartao', './model/HistoricoTelefone', './model/LimiteDisponibilidade', './model/LinkHistoricoAssessoriaResponse', './model/LinkPageHistoricoAssessoriaResponse', './model/LinkPageTransferenciaBancariaResponse', './model/LinkTransferenciaBancariaResponse', './model/ListaProdutos', './model/LoteCartoesPrePagos', './model/MapOfstringAndstring', './model/NotificacaoPushResponse', './model/NotificacaoSMSBody', './model/NotificacaoSMSResponse', './model/OportunidadeAUDResponse', './model/OportunidadePersist', './model/OportunidadeResponse', './model/OportunidadeUpdate', './model/OrigemComercial', './model/PageAplicacoesMobile', './model/PageAtendimentoClientes', './model/PageBases', './model/PageCampoCodificadoDescricao', './model/PageCartoes', './model/PageContas', './model/PageContasDetalhe', './model/PageDispositivos', './model/PageEnderecos', './model/PageEstabelecimentos', './model/PageEstagiosCartoes', './model/PageFaqs', './model/PageFaturas', './model/PageFaturasConsignadas', './model/PageHistoricoAtraso', './model/PageHistoricoEventos', './model/PageLoteCartoesPrePagosResponse', './model/PageOprtunidadeAUD', './model/PageOprtunidadesResponse', './model/PageOrigensComerciais', './model/PagePessoas', './model/PagePlataformasMobile', './model/PagePortador', './model/PagePush', './model/PageSMS', './model/PageStatusCartoes', './model/PageStatusContas', './model/PageStatusImpressao', './model/PageStatusOprtunidades', './model/PageStatusOprtunidadesAUD', './model/PageTelefones', './model/PageTipoAjuste', './model/PageTipoBoleto', './model/PageTipoOprtunidades', './model/PageTipoOprtunidadesAUD', './model/PageTipoTelefones', './model/PageTiposEndereco', './model/PageTransacaoResponse', './model/PageTransacoesCorrentes', './model/PageTransferencias', './model/PageUsuarios', './model/PageWebHooks', './model/Pessoa', './model/PessoaDetalheResponse', './model/PessoaFisicaAprovadaPersist', './model/PessoaFisicaAprovadaResponse', './model/PessoaJuridicaAprovadaPersist', './model/PessoaJuridicaAprovadaResponse', './model/PessoaPersist', './model/PlataformaMobile', './model/PlataformaMobilePersist', './model/PlataformaMobileUpdate', './model/Portador', './model/ProdutoDetalhesResponse', './model/ProdutoResponse', './model/PushAPNS', './model/PushFCMEGCM', './model/RiscoFraudeDetalhadoResponse', './model/RiscoFraudeResponse', './model/RiscoFraudeResponsePage', './model/SMS', './model/SocioAprovadoResponse', './model/StatusCartao', './model/StatusConta', './model/StatusImpressao', './model/StatusOportunidade', './model/StatusOportunidadeAUDResponse', './model/StatusOportunidadeResponse', './model/Telefone', './model/TelefonePessoaAprovadaPersist', './model/TelefonePessoaAprovadaResponse', './model/TipoAjusteResponse', './model/TipoEndereco', './model/TipoOportunidade', './model/TipoOportunidadeAUDResponse', './model/TipoOportunidadeResponse', './model/TipoTelefone', './model/Token', './model/TransacaoCorrenteResponse', './model/TransacaoOnUsRequest', './model/TransacaoOnUsResponse', './model/TransacoesCorrentes', './model/Transferencia', './model/TransferenciaBancariaPersist', './model/UsuarioPersist', './model/UsuarioResponse', './model/UsuarioUpdate', './model/ValidaCartao', './model/ValidaSenhaCartao', './model/WebHook', './api/AplicacoesMobileApi', './api/AutorizacoesApi', './api/BaseApi', './api/CadastrosGeraisApi', './api/CartaoApi', './api/ContaApi', './api/DispositivosApi', './api/FAQApi', './api/NotificacoesApi', './api/OportunidadesApi', './api/PlataformasMobileApi', './api/RiscoFraudeApi', './api/StatusParametrosApi', './api/TokenApi', './api/UsuariosApi', './api/WebhooksApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/AjusteResponse'), require('./model/AplicacaoMobile'), require('./model/AplicacaoMobilePersist'), require('./model/AplicacaoMobileUpdate'), require('./model/AtendimentoCliente'), require('./model/AuthToken'), require('./model/AutorizacaoOnUsRequest'), require('./model/Base'), require('./model/BodyAccessToken'), require('./model/BoletoDeFatura'), require('./model/CampoCodificadoDescricaoResponse'), require('./model/CancelamentoTransacaoOnUsRequest'), require('./model/Cartao'), require('./model/CartaoImpressao'), require('./model/CdtDetalheOportunidadeAUD'), require('./model/ContaDetalheResponse'), require('./model/ContaResponse'), require('./model/DadosCarto'), require('./model/DesfazimentoTransacaoOnURequest'), require('./model/DetalheOportunidadePersist'), require('./model/DetalheOportunidadeResponse'), require('./model/DetalheOportunidadeUpdate'), require('./model/DetalhesFaturaConsignadaResponse'), require('./model/DetalhesFaturaResponse'), require('./model/Dispositivo'), require('./model/DispositivoPersist'), require('./model/DividaClienteResponse'), require('./model/Endereco'), require('./model/EnderecoAprovadoPersist'), require('./model/EnderecoAprovadoResponse'), require('./model/Estabelecimento'), require('./model/EstagioCartao'), require('./model/ExtraInfo'), require('./model/FAQ'), require('./model/FaturaConsignadaDetalheResponse'), require('./model/FaturaConsignadaResponse'), require('./model/FaturaResponse'), require('./model/HistoricoAtrasoFaturaResponse'), require('./model/HistoricoEventos'), require('./model/HistoricoImpressaoCartao'), require('./model/HistoricoTelefone'), require('./model/LimiteDisponibilidade'), require('./model/LinkHistoricoAssessoriaResponse'), require('./model/LinkPageHistoricoAssessoriaResponse'), require('./model/LinkPageTransferenciaBancariaResponse'), require('./model/LinkTransferenciaBancariaResponse'), require('./model/ListaProdutos'), require('./model/LoteCartoesPrePagos'), require('./model/MapOfstringAndstring'), require('./model/NotificacaoPushResponse'), require('./model/NotificacaoSMSBody'), require('./model/NotificacaoSMSResponse'), require('./model/OportunidadeAUDResponse'), require('./model/OportunidadePersist'), require('./model/OportunidadeResponse'), require('./model/OportunidadeUpdate'), require('./model/OrigemComercial'), require('./model/PageAplicacoesMobile'), require('./model/PageAtendimentoClientes'), require('./model/PageBases'), require('./model/PageCampoCodificadoDescricao'), require('./model/PageCartoes'), require('./model/PageContas'), require('./model/PageContasDetalhe'), require('./model/PageDispositivos'), require('./model/PageEnderecos'), require('./model/PageEstabelecimentos'), require('./model/PageEstagiosCartoes'), require('./model/PageFaqs'), require('./model/PageFaturas'), require('./model/PageFaturasConsignadas'), require('./model/PageHistoricoAtraso'), require('./model/PageHistoricoEventos'), require('./model/PageLoteCartoesPrePagosResponse'), require('./model/PageOprtunidadeAUD'), require('./model/PageOprtunidadesResponse'), require('./model/PageOrigensComerciais'), require('./model/PagePessoas'), require('./model/PagePlataformasMobile'), require('./model/PagePortador'), require('./model/PagePush'), require('./model/PageSMS'), require('./model/PageStatusCartoes'), require('./model/PageStatusContas'), require('./model/PageStatusImpressao'), require('./model/PageStatusOprtunidades'), require('./model/PageStatusOprtunidadesAUD'), require('./model/PageTelefones'), require('./model/PageTipoAjuste'), require('./model/PageTipoBoleto'), require('./model/PageTipoOprtunidades'), require('./model/PageTipoOprtunidadesAUD'), require('./model/PageTipoTelefones'), require('./model/PageTiposEndereco'), require('./model/PageTransacaoResponse'), require('./model/PageTransacoesCorrentes'), require('./model/PageTransferencias'), require('./model/PageUsuarios'), require('./model/PageWebHooks'), require('./model/Pessoa'), require('./model/PessoaDetalheResponse'), require('./model/PessoaFisicaAprovadaPersist'), require('./model/PessoaFisicaAprovadaResponse'), require('./model/PessoaJuridicaAprovadaPersist'), require('./model/PessoaJuridicaAprovadaResponse'), require('./model/PessoaPersist'), require('./model/PlataformaMobile'), require('./model/PlataformaMobilePersist'), require('./model/PlataformaMobileUpdate'), require('./model/Portador'), require('./model/ProdutoDetalhesResponse'), require('./model/ProdutoResponse'), require('./model/PushAPNS'), require('./model/PushFCMEGCM'), require('./model/RiscoFraudeDetalhadoResponse'), require('./model/RiscoFraudeResponse'), require('./model/RiscoFraudeResponsePage'), require('./model/SMS'), require('./model/SocioAprovadoResponse'), require('./model/StatusCartao'), require('./model/StatusConta'), require('./model/StatusImpressao'), require('./model/StatusOportunidade'), require('./model/StatusOportunidadeAUDResponse'), require('./model/StatusOportunidadeResponse'), require('./model/Telefone'), require('./model/TelefonePessoaAprovadaPersist'), require('./model/TelefonePessoaAprovadaResponse'), require('./model/TipoAjusteResponse'), require('./model/TipoEndereco'), require('./model/TipoOportunidade'), require('./model/TipoOportunidadeAUDResponse'), require('./model/TipoOportunidadeResponse'), require('./model/TipoTelefone'), require('./model/Token'), require('./model/TransacaoCorrenteResponse'), require('./model/TransacaoOnUsRequest'), require('./model/TransacaoOnUsResponse'), require('./model/TransacoesCorrentes'), require('./model/Transferencia'), require('./model/TransferenciaBancariaPersist'), require('./model/UsuarioPersist'), require('./model/UsuarioResponse'), require('./model/UsuarioUpdate'), require('./model/ValidaCartao'), require('./model/ValidaSenhaCartao'), require('./model/WebHook'), require('./api/AplicacoesMobileApi'), require('./api/AutorizacoesApi'), require('./api/BaseApi'), require('./api/CadastrosGeraisApi'), require('./api/CartaoApi'), require('./api/ContaApi'), require('./api/DispositivosApi'), require('./api/FAQApi'), require('./api/NotificacoesApi'), require('./api/OportunidadesApi'), require('./api/PlataformasMobileApi'), require('./api/RiscoFraudeApi'), require('./api/StatusParametrosApi'), require('./api/TokenApi'), require('./api/UsuariosApi'), require('./api/WebhooksApi'));
  }
}(function(ApiClient, AjusteResponse, AplicacaoMobile, AplicacaoMobilePersist, AplicacaoMobileUpdate, AtendimentoCliente, AuthToken, AutorizacaoOnUsRequest, Base, BodyAccessToken, BoletoDeFatura, CampoCodificadoDescricaoResponse, CancelamentoTransacaoOnUsRequest, Cartao, CartaoImpressao, CdtDetalheOportunidadeAUD, ContaDetalheResponse, ContaResponse, DadosCarto, DesfazimentoTransacaoOnURequest, DetalheOportunidadePersist, DetalheOportunidadeResponse, DetalheOportunidadeUpdate, DetalhesFaturaConsignadaResponse, DetalhesFaturaResponse, Dispositivo, DispositivoPersist, DividaClienteResponse, Endereco, EnderecoAprovadoPersist, EnderecoAprovadoResponse, Estabelecimento, EstagioCartao, ExtraInfo, FAQ, FaturaConsignadaDetalheResponse, FaturaConsignadaResponse, FaturaResponse, HistoricoAtrasoFaturaResponse, HistoricoEventos, HistoricoImpressaoCartao, HistoricoTelefone, LimiteDisponibilidade, LinkHistoricoAssessoriaResponse, LinkPageHistoricoAssessoriaResponse, LinkPageTransferenciaBancariaResponse, LinkTransferenciaBancariaResponse, ListaProdutos, LoteCartoesPrePagos, MapOfstringAndstring, NotificacaoPushResponse, NotificacaoSMSBody, NotificacaoSMSResponse, OportunidadeAUDResponse, OportunidadePersist, OportunidadeResponse, OportunidadeUpdate, OrigemComercial, PageAplicacoesMobile, PageAtendimentoClientes, PageBases, PageCampoCodificadoDescricao, PageCartoes, PageContas, PageContasDetalhe, PageDispositivos, PageEnderecos, PageEstabelecimentos, PageEstagiosCartoes, PageFaqs, PageFaturas, PageFaturasConsignadas, PageHistoricoAtraso, PageHistoricoEventos, PageLoteCartoesPrePagosResponse, PageOprtunidadeAUD, PageOprtunidadesResponse, PageOrigensComerciais, PagePessoas, PagePlataformasMobile, PagePortador, PagePush, PageSMS, PageStatusCartoes, PageStatusContas, PageStatusImpressao, PageStatusOprtunidades, PageStatusOprtunidadesAUD, PageTelefones, PageTipoAjuste, PageTipoBoleto, PageTipoOprtunidades, PageTipoOprtunidadesAUD, PageTipoTelefones, PageTiposEndereco, PageTransacaoResponse, PageTransacoesCorrentes, PageTransferencias, PageUsuarios, PageWebHooks, Pessoa, PessoaDetalheResponse, PessoaFisicaAprovadaPersist, PessoaFisicaAprovadaResponse, PessoaJuridicaAprovadaPersist, PessoaJuridicaAprovadaResponse, PessoaPersist, PlataformaMobile, PlataformaMobilePersist, PlataformaMobileUpdate, Portador, ProdutoDetalhesResponse, ProdutoResponse, PushAPNS, PushFCMEGCM, RiscoFraudeDetalhadoResponse, RiscoFraudeResponse, RiscoFraudeResponsePage, SMS, SocioAprovadoResponse, StatusCartao, StatusConta, StatusImpressao, StatusOportunidade, StatusOportunidadeAUDResponse, StatusOportunidadeResponse, Telefone, TelefonePessoaAprovadaPersist, TelefonePessoaAprovadaResponse, TipoAjusteResponse, TipoEndereco, TipoOportunidade, TipoOportunidadeAUDResponse, TipoOportunidadeResponse, TipoTelefone, Token, TransacaoCorrenteResponse, TransacaoOnUsRequest, TransacaoOnUsResponse, TransacoesCorrentes, Transferencia, TransferenciaBancariaPersist, UsuarioPersist, UsuarioResponse, UsuarioUpdate, ValidaCartao, ValidaSenhaCartao, WebHook, AplicacoesMobileApi, AutorizacoesApi, BaseApi, CadastrosGeraisApi, CartaoApi, ContaApi, DispositivosApi, FAQApi, NotificacoesApi, OportunidadesApi, PlataformasMobileApi, RiscoFraudeApi, StatusParametrosApi, TokenApi, UsuariosApi, WebhooksApi) {
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
   * @version 2.15.5
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The AjusteResponse model constructor.
     * @property {module:model/AjusteResponse}
     */
    AjusteResponse: AjusteResponse,
    /**
     * The AplicacaoMobile model constructor.
     * @property {module:model/AplicacaoMobile}
     */
    AplicacaoMobile: AplicacaoMobile,
    /**
     * The AplicacaoMobilePersist model constructor.
     * @property {module:model/AplicacaoMobilePersist}
     */
    AplicacaoMobilePersist: AplicacaoMobilePersist,
    /**
     * The AplicacaoMobileUpdate model constructor.
     * @property {module:model/AplicacaoMobileUpdate}
     */
    AplicacaoMobileUpdate: AplicacaoMobileUpdate,
    /**
     * The AtendimentoCliente model constructor.
     * @property {module:model/AtendimentoCliente}
     */
    AtendimentoCliente: AtendimentoCliente,
    /**
     * The AuthToken model constructor.
     * @property {module:model/AuthToken}
     */
    AuthToken: AuthToken,
    /**
     * The AutorizacaoOnUsRequest model constructor.
     * @property {module:model/AutorizacaoOnUsRequest}
     */
    AutorizacaoOnUsRequest: AutorizacaoOnUsRequest,
    /**
     * The Base model constructor.
     * @property {module:model/Base}
     */
    Base: Base,
    /**
     * The BodyAccessToken model constructor.
     * @property {module:model/BodyAccessToken}
     */
    BodyAccessToken: BodyAccessToken,
    /**
     * The BoletoDeFatura model constructor.
     * @property {module:model/BoletoDeFatura}
     */
    BoletoDeFatura: BoletoDeFatura,
    /**
     * The CampoCodificadoDescricaoResponse model constructor.
     * @property {module:model/CampoCodificadoDescricaoResponse}
     */
    CampoCodificadoDescricaoResponse: CampoCodificadoDescricaoResponse,
    /**
     * The CancelamentoTransacaoOnUsRequest model constructor.
     * @property {module:model/CancelamentoTransacaoOnUsRequest}
     */
    CancelamentoTransacaoOnUsRequest: CancelamentoTransacaoOnUsRequest,
    /**
     * The Cartao model constructor.
     * @property {module:model/Cartao}
     */
    Cartao: Cartao,
    /**
     * The CartaoImpressao model constructor.
     * @property {module:model/CartaoImpressao}
     */
    CartaoImpressao: CartaoImpressao,
    /**
     * The CdtDetalheOportunidadeAUD model constructor.
     * @property {module:model/CdtDetalheOportunidadeAUD}
     */
    CdtDetalheOportunidadeAUD: CdtDetalheOportunidadeAUD,
    /**
     * The ContaDetalheResponse model constructor.
     * @property {module:model/ContaDetalheResponse}
     */
    ContaDetalheResponse: ContaDetalheResponse,
    /**
     * The ContaResponse model constructor.
     * @property {module:model/ContaResponse}
     */
    ContaResponse: ContaResponse,
    /**
     * The DadosCarto model constructor.
     * @property {module:model/DadosCarto}
     */
    DadosCarto: DadosCarto,
    /**
     * The DesfazimentoTransacaoOnURequest model constructor.
     * @property {module:model/DesfazimentoTransacaoOnURequest}
     */
    DesfazimentoTransacaoOnURequest: DesfazimentoTransacaoOnURequest,
    /**
     * The DetalheOportunidadePersist model constructor.
     * @property {module:model/DetalheOportunidadePersist}
     */
    DetalheOportunidadePersist: DetalheOportunidadePersist,
    /**
     * The DetalheOportunidadeResponse model constructor.
     * @property {module:model/DetalheOportunidadeResponse}
     */
    DetalheOportunidadeResponse: DetalheOportunidadeResponse,
    /**
     * The DetalheOportunidadeUpdate model constructor.
     * @property {module:model/DetalheOportunidadeUpdate}
     */
    DetalheOportunidadeUpdate: DetalheOportunidadeUpdate,
    /**
     * The DetalhesFaturaConsignadaResponse model constructor.
     * @property {module:model/DetalhesFaturaConsignadaResponse}
     */
    DetalhesFaturaConsignadaResponse: DetalhesFaturaConsignadaResponse,
    /**
     * The DetalhesFaturaResponse model constructor.
     * @property {module:model/DetalhesFaturaResponse}
     */
    DetalhesFaturaResponse: DetalhesFaturaResponse,
    /**
     * The Dispositivo model constructor.
     * @property {module:model/Dispositivo}
     */
    Dispositivo: Dispositivo,
    /**
     * The DispositivoPersist model constructor.
     * @property {module:model/DispositivoPersist}
     */
    DispositivoPersist: DispositivoPersist,
    /**
     * The DividaClienteResponse model constructor.
     * @property {module:model/DividaClienteResponse}
     */
    DividaClienteResponse: DividaClienteResponse,
    /**
     * The Endereco model constructor.
     * @property {module:model/Endereco}
     */
    Endereco: Endereco,
    /**
     * The EnderecoAprovadoPersist model constructor.
     * @property {module:model/EnderecoAprovadoPersist}
     */
    EnderecoAprovadoPersist: EnderecoAprovadoPersist,
    /**
     * The EnderecoAprovadoResponse model constructor.
     * @property {module:model/EnderecoAprovadoResponse}
     */
    EnderecoAprovadoResponse: EnderecoAprovadoResponse,
    /**
     * The Estabelecimento model constructor.
     * @property {module:model/Estabelecimento}
     */
    Estabelecimento: Estabelecimento,
    /**
     * The EstagioCartao model constructor.
     * @property {module:model/EstagioCartao}
     */
    EstagioCartao: EstagioCartao,
    /**
     * The ExtraInfo model constructor.
     * @property {module:model/ExtraInfo}
     */
    ExtraInfo: ExtraInfo,
    /**
     * The FAQ model constructor.
     * @property {module:model/FAQ}
     */
    FAQ: FAQ,
    /**
     * The FaturaConsignadaDetalheResponse model constructor.
     * @property {module:model/FaturaConsignadaDetalheResponse}
     */
    FaturaConsignadaDetalheResponse: FaturaConsignadaDetalheResponse,
    /**
     * The FaturaConsignadaResponse model constructor.
     * @property {module:model/FaturaConsignadaResponse}
     */
    FaturaConsignadaResponse: FaturaConsignadaResponse,
    /**
     * The FaturaResponse model constructor.
     * @property {module:model/FaturaResponse}
     */
    FaturaResponse: FaturaResponse,
    /**
     * The HistoricoAtrasoFaturaResponse model constructor.
     * @property {module:model/HistoricoAtrasoFaturaResponse}
     */
    HistoricoAtrasoFaturaResponse: HistoricoAtrasoFaturaResponse,
    /**
     * The HistoricoEventos model constructor.
     * @property {module:model/HistoricoEventos}
     */
    HistoricoEventos: HistoricoEventos,
    /**
     * The HistoricoImpressaoCartao model constructor.
     * @property {module:model/HistoricoImpressaoCartao}
     */
    HistoricoImpressaoCartao: HistoricoImpressaoCartao,
    /**
     * The HistoricoTelefone model constructor.
     * @property {module:model/HistoricoTelefone}
     */
    HistoricoTelefone: HistoricoTelefone,
    /**
     * The LimiteDisponibilidade model constructor.
     * @property {module:model/LimiteDisponibilidade}
     */
    LimiteDisponibilidade: LimiteDisponibilidade,
    /**
     * The LinkHistoricoAssessoriaResponse model constructor.
     * @property {module:model/LinkHistoricoAssessoriaResponse}
     */
    LinkHistoricoAssessoriaResponse: LinkHistoricoAssessoriaResponse,
    /**
     * The LinkPageHistoricoAssessoriaResponse model constructor.
     * @property {module:model/LinkPageHistoricoAssessoriaResponse}
     */
    LinkPageHistoricoAssessoriaResponse: LinkPageHistoricoAssessoriaResponse,
    /**
     * The LinkPageTransferenciaBancariaResponse model constructor.
     * @property {module:model/LinkPageTransferenciaBancariaResponse}
     */
    LinkPageTransferenciaBancariaResponse: LinkPageTransferenciaBancariaResponse,
    /**
     * The LinkTransferenciaBancariaResponse model constructor.
     * @property {module:model/LinkTransferenciaBancariaResponse}
     */
    LinkTransferenciaBancariaResponse: LinkTransferenciaBancariaResponse,
    /**
     * The ListaProdutos model constructor.
     * @property {module:model/ListaProdutos}
     */
    ListaProdutos: ListaProdutos,
    /**
     * The LoteCartoesPrePagos model constructor.
     * @property {module:model/LoteCartoesPrePagos}
     */
    LoteCartoesPrePagos: LoteCartoesPrePagos,
    /**
     * The MapOfstringAndstring model constructor.
     * @property {module:model/MapOfstringAndstring}
     */
    MapOfstringAndstring: MapOfstringAndstring,
    /**
     * The NotificacaoPushResponse model constructor.
     * @property {module:model/NotificacaoPushResponse}
     */
    NotificacaoPushResponse: NotificacaoPushResponse,
    /**
     * The NotificacaoSMSBody model constructor.
     * @property {module:model/NotificacaoSMSBody}
     */
    NotificacaoSMSBody: NotificacaoSMSBody,
    /**
     * The NotificacaoSMSResponse model constructor.
     * @property {module:model/NotificacaoSMSResponse}
     */
    NotificacaoSMSResponse: NotificacaoSMSResponse,
    /**
     * The OportunidadeAUDResponse model constructor.
     * @property {module:model/OportunidadeAUDResponse}
     */
    OportunidadeAUDResponse: OportunidadeAUDResponse,
    /**
     * The OportunidadePersist model constructor.
     * @property {module:model/OportunidadePersist}
     */
    OportunidadePersist: OportunidadePersist,
    /**
     * The OportunidadeResponse model constructor.
     * @property {module:model/OportunidadeResponse}
     */
    OportunidadeResponse: OportunidadeResponse,
    /**
     * The OportunidadeUpdate model constructor.
     * @property {module:model/OportunidadeUpdate}
     */
    OportunidadeUpdate: OportunidadeUpdate,
    /**
     * The OrigemComercial model constructor.
     * @property {module:model/OrigemComercial}
     */
    OrigemComercial: OrigemComercial,
    /**
     * The PageAplicacoesMobile model constructor.
     * @property {module:model/PageAplicacoesMobile}
     */
    PageAplicacoesMobile: PageAplicacoesMobile,
    /**
     * The PageAtendimentoClientes model constructor.
     * @property {module:model/PageAtendimentoClientes}
     */
    PageAtendimentoClientes: PageAtendimentoClientes,
    /**
     * The PageBases model constructor.
     * @property {module:model/PageBases}
     */
    PageBases: PageBases,
    /**
     * The PageCampoCodificadoDescricao model constructor.
     * @property {module:model/PageCampoCodificadoDescricao}
     */
    PageCampoCodificadoDescricao: PageCampoCodificadoDescricao,
    /**
     * The PageCartoes model constructor.
     * @property {module:model/PageCartoes}
     */
    PageCartoes: PageCartoes,
    /**
     * The PageContas model constructor.
     * @property {module:model/PageContas}
     */
    PageContas: PageContas,
    /**
     * The PageContasDetalhe model constructor.
     * @property {module:model/PageContasDetalhe}
     */
    PageContasDetalhe: PageContasDetalhe,
    /**
     * The PageDispositivos model constructor.
     * @property {module:model/PageDispositivos}
     */
    PageDispositivos: PageDispositivos,
    /**
     * The PageEnderecos model constructor.
     * @property {module:model/PageEnderecos}
     */
    PageEnderecos: PageEnderecos,
    /**
     * The PageEstabelecimentos model constructor.
     * @property {module:model/PageEstabelecimentos}
     */
    PageEstabelecimentos: PageEstabelecimentos,
    /**
     * The PageEstagiosCartoes model constructor.
     * @property {module:model/PageEstagiosCartoes}
     */
    PageEstagiosCartoes: PageEstagiosCartoes,
    /**
     * The PageFaqs model constructor.
     * @property {module:model/PageFaqs}
     */
    PageFaqs: PageFaqs,
    /**
     * The PageFaturas model constructor.
     * @property {module:model/PageFaturas}
     */
    PageFaturas: PageFaturas,
    /**
     * The PageFaturasConsignadas model constructor.
     * @property {module:model/PageFaturasConsignadas}
     */
    PageFaturasConsignadas: PageFaturasConsignadas,
    /**
     * The PageHistoricoAtraso model constructor.
     * @property {module:model/PageHistoricoAtraso}
     */
    PageHistoricoAtraso: PageHistoricoAtraso,
    /**
     * The PageHistoricoEventos model constructor.
     * @property {module:model/PageHistoricoEventos}
     */
    PageHistoricoEventos: PageHistoricoEventos,
    /**
     * The PageLoteCartoesPrePagosResponse model constructor.
     * @property {module:model/PageLoteCartoesPrePagosResponse}
     */
    PageLoteCartoesPrePagosResponse: PageLoteCartoesPrePagosResponse,
    /**
     * The PageOprtunidadeAUD model constructor.
     * @property {module:model/PageOprtunidadeAUD}
     */
    PageOprtunidadeAUD: PageOprtunidadeAUD,
    /**
     * The PageOprtunidadesResponse model constructor.
     * @property {module:model/PageOprtunidadesResponse}
     */
    PageOprtunidadesResponse: PageOprtunidadesResponse,
    /**
     * The PageOrigensComerciais model constructor.
     * @property {module:model/PageOrigensComerciais}
     */
    PageOrigensComerciais: PageOrigensComerciais,
    /**
     * The PagePessoas model constructor.
     * @property {module:model/PagePessoas}
     */
    PagePessoas: PagePessoas,
    /**
     * The PagePlataformasMobile model constructor.
     * @property {module:model/PagePlataformasMobile}
     */
    PagePlataformasMobile: PagePlataformasMobile,
    /**
     * The PagePortador model constructor.
     * @property {module:model/PagePortador}
     */
    PagePortador: PagePortador,
    /**
     * The PagePush model constructor.
     * @property {module:model/PagePush}
     */
    PagePush: PagePush,
    /**
     * The PageSMS model constructor.
     * @property {module:model/PageSMS}
     */
    PageSMS: PageSMS,
    /**
     * The PageStatusCartoes model constructor.
     * @property {module:model/PageStatusCartoes}
     */
    PageStatusCartoes: PageStatusCartoes,
    /**
     * The PageStatusContas model constructor.
     * @property {module:model/PageStatusContas}
     */
    PageStatusContas: PageStatusContas,
    /**
     * The PageStatusImpressao model constructor.
     * @property {module:model/PageStatusImpressao}
     */
    PageStatusImpressao: PageStatusImpressao,
    /**
     * The PageStatusOprtunidades model constructor.
     * @property {module:model/PageStatusOprtunidades}
     */
    PageStatusOprtunidades: PageStatusOprtunidades,
    /**
     * The PageStatusOprtunidadesAUD model constructor.
     * @property {module:model/PageStatusOprtunidadesAUD}
     */
    PageStatusOprtunidadesAUD: PageStatusOprtunidadesAUD,
    /**
     * The PageTelefones model constructor.
     * @property {module:model/PageTelefones}
     */
    PageTelefones: PageTelefones,
    /**
     * The PageTipoAjuste model constructor.
     * @property {module:model/PageTipoAjuste}
     */
    PageTipoAjuste: PageTipoAjuste,
    /**
     * The PageTipoBoleto model constructor.
     * @property {module:model/PageTipoBoleto}
     */
    PageTipoBoleto: PageTipoBoleto,
    /**
     * The PageTipoOprtunidades model constructor.
     * @property {module:model/PageTipoOprtunidades}
     */
    PageTipoOprtunidades: PageTipoOprtunidades,
    /**
     * The PageTipoOprtunidadesAUD model constructor.
     * @property {module:model/PageTipoOprtunidadesAUD}
     */
    PageTipoOprtunidadesAUD: PageTipoOprtunidadesAUD,
    /**
     * The PageTipoTelefones model constructor.
     * @property {module:model/PageTipoTelefones}
     */
    PageTipoTelefones: PageTipoTelefones,
    /**
     * The PageTiposEndereco model constructor.
     * @property {module:model/PageTiposEndereco}
     */
    PageTiposEndereco: PageTiposEndereco,
    /**
     * The PageTransacaoResponse model constructor.
     * @property {module:model/PageTransacaoResponse}
     */
    PageTransacaoResponse: PageTransacaoResponse,
    /**
     * The PageTransacoesCorrentes model constructor.
     * @property {module:model/PageTransacoesCorrentes}
     */
    PageTransacoesCorrentes: PageTransacoesCorrentes,
    /**
     * The PageTransferencias model constructor.
     * @property {module:model/PageTransferencias}
     */
    PageTransferencias: PageTransferencias,
    /**
     * The PageUsuarios model constructor.
     * @property {module:model/PageUsuarios}
     */
    PageUsuarios: PageUsuarios,
    /**
     * The PageWebHooks model constructor.
     * @property {module:model/PageWebHooks}
     */
    PageWebHooks: PageWebHooks,
    /**
     * The Pessoa model constructor.
     * @property {module:model/Pessoa}
     */
    Pessoa: Pessoa,
    /**
     * The PessoaDetalheResponse model constructor.
     * @property {module:model/PessoaDetalheResponse}
     */
    PessoaDetalheResponse: PessoaDetalheResponse,
    /**
     * The PessoaFisicaAprovadaPersist model constructor.
     * @property {module:model/PessoaFisicaAprovadaPersist}
     */
    PessoaFisicaAprovadaPersist: PessoaFisicaAprovadaPersist,
    /**
     * The PessoaFisicaAprovadaResponse model constructor.
     * @property {module:model/PessoaFisicaAprovadaResponse}
     */
    PessoaFisicaAprovadaResponse: PessoaFisicaAprovadaResponse,
    /**
     * The PessoaJuridicaAprovadaPersist model constructor.
     * @property {module:model/PessoaJuridicaAprovadaPersist}
     */
    PessoaJuridicaAprovadaPersist: PessoaJuridicaAprovadaPersist,
    /**
     * The PessoaJuridicaAprovadaResponse model constructor.
     * @property {module:model/PessoaJuridicaAprovadaResponse}
     */
    PessoaJuridicaAprovadaResponse: PessoaJuridicaAprovadaResponse,
    /**
     * The PessoaPersist model constructor.
     * @property {module:model/PessoaPersist}
     */
    PessoaPersist: PessoaPersist,
    /**
     * The PlataformaMobile model constructor.
     * @property {module:model/PlataformaMobile}
     */
    PlataformaMobile: PlataformaMobile,
    /**
     * The PlataformaMobilePersist model constructor.
     * @property {module:model/PlataformaMobilePersist}
     */
    PlataformaMobilePersist: PlataformaMobilePersist,
    /**
     * The PlataformaMobileUpdate model constructor.
     * @property {module:model/PlataformaMobileUpdate}
     */
    PlataformaMobileUpdate: PlataformaMobileUpdate,
    /**
     * The Portador model constructor.
     * @property {module:model/Portador}
     */
    Portador: Portador,
    /**
     * The ProdutoDetalhesResponse model constructor.
     * @property {module:model/ProdutoDetalhesResponse}
     */
    ProdutoDetalhesResponse: ProdutoDetalhesResponse,
    /**
     * The ProdutoResponse model constructor.
     * @property {module:model/ProdutoResponse}
     */
    ProdutoResponse: ProdutoResponse,
    /**
     * The PushAPNS model constructor.
     * @property {module:model/PushAPNS}
     */
    PushAPNS: PushAPNS,
    /**
     * The PushFCMEGCM model constructor.
     * @property {module:model/PushFCMEGCM}
     */
    PushFCMEGCM: PushFCMEGCM,
    /**
     * The RiscoFraudeDetalhadoResponse model constructor.
     * @property {module:model/RiscoFraudeDetalhadoResponse}
     */
    RiscoFraudeDetalhadoResponse: RiscoFraudeDetalhadoResponse,
    /**
     * The RiscoFraudeResponse model constructor.
     * @property {module:model/RiscoFraudeResponse}
     */
    RiscoFraudeResponse: RiscoFraudeResponse,
    /**
     * The RiscoFraudeResponsePage model constructor.
     * @property {module:model/RiscoFraudeResponsePage}
     */
    RiscoFraudeResponsePage: RiscoFraudeResponsePage,
    /**
     * The SMS model constructor.
     * @property {module:model/SMS}
     */
    SMS: SMS,
    /**
     * The SocioAprovadoResponse model constructor.
     * @property {module:model/SocioAprovadoResponse}
     */
    SocioAprovadoResponse: SocioAprovadoResponse,
    /**
     * The StatusCartao model constructor.
     * @property {module:model/StatusCartao}
     */
    StatusCartao: StatusCartao,
    /**
     * The StatusConta model constructor.
     * @property {module:model/StatusConta}
     */
    StatusConta: StatusConta,
    /**
     * The StatusImpressao model constructor.
     * @property {module:model/StatusImpressao}
     */
    StatusImpressao: StatusImpressao,
    /**
     * The StatusOportunidade model constructor.
     * @property {module:model/StatusOportunidade}
     */
    StatusOportunidade: StatusOportunidade,
    /**
     * The StatusOportunidadeAUDResponse model constructor.
     * @property {module:model/StatusOportunidadeAUDResponse}
     */
    StatusOportunidadeAUDResponse: StatusOportunidadeAUDResponse,
    /**
     * The StatusOportunidadeResponse model constructor.
     * @property {module:model/StatusOportunidadeResponse}
     */
    StatusOportunidadeResponse: StatusOportunidadeResponse,
    /**
     * The Telefone model constructor.
     * @property {module:model/Telefone}
     */
    Telefone: Telefone,
    /**
     * The TelefonePessoaAprovadaPersist model constructor.
     * @property {module:model/TelefonePessoaAprovadaPersist}
     */
    TelefonePessoaAprovadaPersist: TelefonePessoaAprovadaPersist,
    /**
     * The TelefonePessoaAprovadaResponse model constructor.
     * @property {module:model/TelefonePessoaAprovadaResponse}
     */
    TelefonePessoaAprovadaResponse: TelefonePessoaAprovadaResponse,
    /**
     * The TipoAjusteResponse model constructor.
     * @property {module:model/TipoAjusteResponse}
     */
    TipoAjusteResponse: TipoAjusteResponse,
    /**
     * The TipoEndereco model constructor.
     * @property {module:model/TipoEndereco}
     */
    TipoEndereco: TipoEndereco,
    /**
     * The TipoOportunidade model constructor.
     * @property {module:model/TipoOportunidade}
     */
    TipoOportunidade: TipoOportunidade,
    /**
     * The TipoOportunidadeAUDResponse model constructor.
     * @property {module:model/TipoOportunidadeAUDResponse}
     */
    TipoOportunidadeAUDResponse: TipoOportunidadeAUDResponse,
    /**
     * The TipoOportunidadeResponse model constructor.
     * @property {module:model/TipoOportunidadeResponse}
     */
    TipoOportunidadeResponse: TipoOportunidadeResponse,
    /**
     * The TipoTelefone model constructor.
     * @property {module:model/TipoTelefone}
     */
    TipoTelefone: TipoTelefone,
    /**
     * The Token model constructor.
     * @property {module:model/Token}
     */
    Token: Token,
    /**
     * The TransacaoCorrenteResponse model constructor.
     * @property {module:model/TransacaoCorrenteResponse}
     */
    TransacaoCorrenteResponse: TransacaoCorrenteResponse,
    /**
     * The TransacaoOnUsRequest model constructor.
     * @property {module:model/TransacaoOnUsRequest}
     */
    TransacaoOnUsRequest: TransacaoOnUsRequest,
    /**
     * The TransacaoOnUsResponse model constructor.
     * @property {module:model/TransacaoOnUsResponse}
     */
    TransacaoOnUsResponse: TransacaoOnUsResponse,
    /**
     * The TransacoesCorrentes model constructor.
     * @property {module:model/TransacoesCorrentes}
     */
    TransacoesCorrentes: TransacoesCorrentes,
    /**
     * The Transferencia model constructor.
     * @property {module:model/Transferencia}
     */
    Transferencia: Transferencia,
    /**
     * The TransferenciaBancariaPersist model constructor.
     * @property {module:model/TransferenciaBancariaPersist}
     */
    TransferenciaBancariaPersist: TransferenciaBancariaPersist,
    /**
     * The UsuarioPersist model constructor.
     * @property {module:model/UsuarioPersist}
     */
    UsuarioPersist: UsuarioPersist,
    /**
     * The UsuarioResponse model constructor.
     * @property {module:model/UsuarioResponse}
     */
    UsuarioResponse: UsuarioResponse,
    /**
     * The UsuarioUpdate model constructor.
     * @property {module:model/UsuarioUpdate}
     */
    UsuarioUpdate: UsuarioUpdate,
    /**
     * The ValidaCartao model constructor.
     * @property {module:model/ValidaCartao}
     */
    ValidaCartao: ValidaCartao,
    /**
     * The ValidaSenhaCartao model constructor.
     * @property {module:model/ValidaSenhaCartao}
     */
    ValidaSenhaCartao: ValidaSenhaCartao,
    /**
     * The WebHook model constructor.
     * @property {module:model/WebHook}
     */
    WebHook: WebHook,
    /**
     * The AplicacoesMobileApi service constructor.
     * @property {module:api/AplicacoesMobileApi}
     */
    AplicacoesMobileApi: AplicacoesMobileApi,
    /**
     * The AutorizacoesApi service constructor.
     * @property {module:api/AutorizacoesApi}
     */
    AutorizacoesApi: AutorizacoesApi,
    /**
     * The BaseApi service constructor.
     * @property {module:api/BaseApi}
     */
    BaseApi: BaseApi,
    /**
     * The CadastrosGeraisApi service constructor.
     * @property {module:api/CadastrosGeraisApi}
     */
    CadastrosGeraisApi: CadastrosGeraisApi,
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
     * The DispositivosApi service constructor.
     * @property {module:api/DispositivosApi}
     */
    DispositivosApi: DispositivosApi,
    /**
     * The FAQApi service constructor.
     * @property {module:api/FAQApi}
     */
    FAQApi: FAQApi,
    /**
     * The NotificacoesApi service constructor.
     * @property {module:api/NotificacoesApi}
     */
    NotificacoesApi: NotificacoesApi,
    /**
     * The OportunidadesApi service constructor.
     * @property {module:api/OportunidadesApi}
     */
    OportunidadesApi: OportunidadesApi,
    /**
     * The PlataformasMobileApi service constructor.
     * @property {module:api/PlataformasMobileApi}
     */
    PlataformasMobileApi: PlataformasMobileApi,
    /**
     * The RiscoFraudeApi service constructor.
     * @property {module:api/RiscoFraudeApi}
     */
    RiscoFraudeApi: RiscoFraudeApi,
    /**
     * The StatusParametrosApi service constructor.
     * @property {module:api/StatusParametrosApi}
     */
    StatusParametrosApi: StatusParametrosApi,
    /**
     * The TokenApi service constructor.
     * @property {module:api/TokenApi}
     */
    TokenApi: TokenApi,
    /**
     * The UsuariosApi service constructor.
     * @property {module:api/UsuariosApi}
     */
    UsuariosApi: UsuariosApi,
    /**
     * The WebhooksApi service constructor.
     * @property {module:api/WebhooksApi}
     */
    WebhooksApi: WebhooksApi
  };

  return exports;
}));
