(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['./ApiClient', './model/AdicionalDetalheResponse', './model/AdicionalPersist', './model/AdicionalResponse', './model/AdicionalUpdate', './model/AjusteResponse', './model/AlterarProdutoRequest', './model/AntecipacaoResponse', './model/AntecipacaoSimuladaDetalhesResponse', './model/AntecipacaoSimuladaResponse', './model/AnuidadeResponse', './model/AplicacaoMobilePersist', './model/AplicacaoMobileResponse', './model/AplicacaoMobileUpdate', './model/ArquivoDetalhesPersist', './model/ArquivoParametroResponse', './model/ArquivoPersist', './model/ArquivoResponse', './model/AtendimentoClienteResponse', './model/AtribuirAssinaturaClientePersist', './model/AuthToken', './model/AutorizacaoOnUsRequest', './model/BancoResponse', './model/BaseResponse', './model/BeneficioPagamentoAtrasoResponse', './model/BodyAccessToken', './model/BoletoResponse', './model/CampoCodificadoDescricaoResponse', './model/CancelamentoTransacaoOnUsRequest', './model/CancelamentoTransacaoPorIdCartaoRequest', './model/CartaoDetalheResponse', './model/CartaoEmbossingRequest', './model/CartaoEmbossingResponse', './model/CartaoImpressaoProvisorioResponse', './model/CartaoImpressaoResponse', './model/CartaoResponse', './model/CdtDetalheOportunidadeAUD', './model/CodigoSegurancaSMSPersist', './model/CodigoSegurancaSMSRequest', './model/CompraResponse', './model/ConfiguracaoEmailPersist', './model/ConfiguracaoEmailResponse', './model/ContaDetalheResponse', './model/ContaHistoricoPagamentoResponse', './model/ContaResponse', './model/ControleVencimentoResponse', './model/DadosCartaoResponse', './model/DesfazimentoTransacaoOnUsRequest', './model/DetalheOportunidadePersist', './model/DetalheOportunidadeResponse', './model/DetalheOportunidadeUpdate', './model/DetalhesFaturaConsignadaResponse', './model/DetalhesFaturaResponse', './model/DispositivoPersist', './model/DispositivoResponse', './model/DividaClienteResponse', './model/DocumentoDetalheResponse', './model/DocumentoParametrosRequest', './model/DocumentoResponse', './model/DocumentoTemplateRequest', './model/DocumentoTemplateResponse', './model/DocumentoTipoRequest', './model/DocumentoTipoResponse', './model/EmprestimoPessoalRequest', './model/EmprestimoPessoalResponse', './model/EnderecoAprovadoPersist', './model/EnderecoAprovadoResponse', './model/EnderecoResponse', './model/EstabelecimentoResponse', './model/EstagioCartaoResponse', './model/ExtraInfo', './model/FantasiaBasicaResponse', './model/FaqResponse', './model/FaturaConsignadaDetalheResponse', './model/FaturaConsignadaResponse', './model/FaturaResponse', './model/HistoricoAssessoriaResponse', './model/HistoricoAtrasoFaturaResponse', './model/HistoricoEventosResponse', './model/HistoricoImpressaoCartaoResponse', './model/HistoricoTelefoneResponse', './model/IntegracaoEmissorPersist', './model/IntegracaoEmissorResponse', './model/JobResponse', './model/LimiteDisponibilidadeResponse', './model/LoteCartoesPrePagosResponse', './model/MapOfstringAndstring', './model/NotificacaoEmailRequest', './model/NotificacaoEmailResponse', './model/NotificacaoPushResponse', './model/NotificacaoResponse', './model/NotificacaoSMSBody', './model/NotificacaoSMSResponse', './model/OperadoraResponse', './model/OportunidadeAUDResponse', './model/OportunidadePersist', './model/OportunidadeResponse', './model/OportunidadeUpdate', './model/OrigemComercialResponse', './model/PageAnuidadeResponse', './model/PageAplicacaoMobileResponse', './model/PageAtendimentoClienteResponse', './model/PageBancoResponse', './model/PageBaseResponse', './model/PageCampoCodificadoDescricaoResponse', './model/PageCartaoResponse', './model/PageCompraResponse', './model/PageConfiguracaoEmailResponse', './model/PageContaDetalheResponse', './model/PageContaHistoricoPagamentoResponse', './model/PageContaResponse', './model/PageControleVencimentoResponse', './model/PageDispositivoResponse', './model/PageEnderecoResponse', './model/PageEstabelecimentoResponse', './model/PageEstagioCartaoResponse', './model/PageFantasiaBasicaResponse', './model/PageFaqResponse', './model/PageFaturaConsignadaResponse', './model/PageFaturaResponse', './model/PageHistoricoAssessoriaResponse', './model/PageHistoricoAtrasoFaturaResponse', './model/PageHistoricoEventosResponse', './model/PageJobResponse', './model/PageLoteCartoesPrePagosResponse', './model/PageOperadoraResponse', './model/PageOportunidadeAUDResponse', './model/PageOportunidadeResponse', './model/PageOrigemComercialResponse', './model/PagePaisResponse', './model/PagePessoaDetalheResponse', './model/PagePessoaResponse', './model/PagePlanoParcelamentoResponse', './model/PagePlataformaMobileResponse', './model/PagePortadorResponse', './model/PageProdutoResponse', './model/PagePromotorResponse', './model/PagePushResponse', './model/PageRiscoFraudeResponse', './model/PageSMSResponse', './model/PageStatusCartaoResponse', './model/PageStatusContaResponse', './model/PageStatusImpressaoResponse', './model/PageStatusOportunidadeAUDResponse', './model/PageStatusOportunidadeResponse', './model/PageTaxasRefinanciamentoResponse', './model/PageTelefoneResponse', './model/PageTemplateNotificacaoResponse', './model/PageTerminalResponse', './model/PageTipoAjusteResponse', './model/PageTipoBoletoResponse', './model/PageTipoEnderecoResponse', './model/PageTipoOportunidadeAUDResponse', './model/PageTipoOportunidadeResponse', './model/PageTipoTelefoneResponse', './model/PageTransacaoNaoProcessadaResponse', './model/PageTransacaoResponse', './model/PageTransacoesCorrentesResponse', './model/PageTransferenciaBancariaResponse', './model/PageTransferenciaResponse', './model/PageUsuarioResponse', './model/PageWebHookResponse', './model/PaisResponse', './model/ParametroProdutoResponse', './model/PessoaDetalheResponse', './model/PessoaFisicaAprovadaPersist', './model/PessoaFisicaAprovadaResponse', './model/PessoaJuridicaAprovadaPersist', './model/PessoaJuridicaAprovadaResponse', './model/PessoaPersist', './model/PessoaResponse', './model/PlanoParcelamentoEmprestimoResponse', './model/PlanoParcelamentoResponse', './model/PlataformaMobilePersist', './model/PlataformaMobileResponse', './model/PlataformaMobileUpdate', './model/PortadorResponse', './model/ProdutoDetalhesResponse', './model/ProdutoOrigemResponse', './model/ProdutoResponse', './model/PromotorResponse', './model/PushAPNS', './model/PushFCMEGCM', './model/RiscoFraudeDetalhadoResponse', './model/RiscoFraudeResponse', './model/SocioAprovadoResponse', './model/StatusCartaoResponse', './model/StatusContaResponse', './model/StatusImpressaoResponse', './model/StatusOportunidade', './model/StatusOportunidadeAUDResponse', './model/StatusOportunidadeResponse', './model/TaxaAntecipacaoRequest', './model/TaxasRefinanciamentoResponse', './model/TelefoneAdicionalPersist', './model/TelefoneAdicionalUpdate', './model/TelefonePessoaAprovadaPersist', './model/TelefonePessoaAprovadaResponse', './model/TelefoneResponse', './model/TemplateNotificacaoResponse', './model/TerminalResponse', './model/TipoAjusteResponse', './model/TipoBoletoResponse', './model/TipoEnderecoResponse', './model/TipoOportunidade', './model/TipoOportunidadeAUDResponse', './model/TipoOportunidadeResponse', './model/TipoResolucaoResponse', './model/TipoTelefoneResponse', './model/TokenResponse', './model/TransacaoCorrenteResponse', './model/TransacaoNaoProcessadaResponse', './model/TransacaoOnUsPorIdCartaoRequest', './model/TransacaoOnUsRequest', './model/TransacaoOnUsResponse', './model/TransacoesCorrentesResponse', './model/TransferenciaBancariaPersist', './model/TransferenciaBancariaResponse', './model/TransferenciaResponse', './model/UsuarioPersist', './model/UsuarioResponse', './model/UsuarioUpdate', './model/ValidaCartaoResponse', './model/ValidaSenhaCartaoResponse', './model/WebHookResponse', './api/AntecipacaoApi', './api/AplicacaoMobileApi', './api/ArquivoApi', './api/AutorizacaoApi', './api/BaseApi', './api/CadastroClienteApi', './api/CadastroGeralApi', './api/CartaoApi', './api/ContaApi', './api/DispositivoApi', './api/DocumentosApi', './api/EnderecoNacionalApi', './api/EstabelecimentoApi', './api/FAQApi', './api/FaturaApi', './api/JobApi', './api/LimiteApi', './api/MockApi', './api/NotificacaoApi', './api/OportunidadeApi', './api/PermissaoPaisApi', './api/PlataformaMobileApi', './api/RiscoFraudeApi', './api/ServicoContaApi', './api/StatusParametroApi', './api/TokenApi', './api/UsuarioApi', './api/WebhookApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/AdicionalDetalheResponse'), require('./model/AdicionalPersist'), require('./model/AdicionalResponse'), require('./model/AdicionalUpdate'), require('./model/AjusteResponse'), require('./model/AlterarProdutoRequest'), require('./model/AntecipacaoResponse'), require('./model/AntecipacaoSimuladaDetalhesResponse'), require('./model/AntecipacaoSimuladaResponse'), require('./model/AnuidadeResponse'), require('./model/AplicacaoMobilePersist'), require('./model/AplicacaoMobileResponse'), require('./model/AplicacaoMobileUpdate'), require('./model/ArquivoDetalhesPersist'), require('./model/ArquivoParametroResponse'), require('./model/ArquivoPersist'), require('./model/ArquivoResponse'), require('./model/AtendimentoClienteResponse'), require('./model/AtribuirAssinaturaClientePersist'), require('./model/AuthToken'), require('./model/AutorizacaoOnUsRequest'), require('./model/BancoResponse'), require('./model/BaseResponse'), require('./model/BeneficioPagamentoAtrasoResponse'), require('./model/BodyAccessToken'), require('./model/BoletoResponse'), require('./model/CampoCodificadoDescricaoResponse'), require('./model/CancelamentoTransacaoOnUsRequest'), require('./model/CancelamentoTransacaoPorIdCartaoRequest'), require('./model/CartaoDetalheResponse'), require('./model/CartaoEmbossingRequest'), require('./model/CartaoEmbossingResponse'), require('./model/CartaoImpressaoProvisorioResponse'), require('./model/CartaoImpressaoResponse'), require('./model/CartaoResponse'), require('./model/CdtDetalheOportunidadeAUD'), require('./model/CodigoSegurancaSMSPersist'), require('./model/CodigoSegurancaSMSRequest'), require('./model/CompraResponse'), require('./model/ConfiguracaoEmailPersist'), require('./model/ConfiguracaoEmailResponse'), require('./model/ContaDetalheResponse'), require('./model/ContaHistoricoPagamentoResponse'), require('./model/ContaResponse'), require('./model/ControleVencimentoResponse'), require('./model/DadosCartaoResponse'), require('./model/DesfazimentoTransacaoOnUsRequest'), require('./model/DetalheOportunidadePersist'), require('./model/DetalheOportunidadeResponse'), require('./model/DetalheOportunidadeUpdate'), require('./model/DetalhesFaturaConsignadaResponse'), require('./model/DetalhesFaturaResponse'), require('./model/DispositivoPersist'), require('./model/DispositivoResponse'), require('./model/DividaClienteResponse'), require('./model/DocumentoDetalheResponse'), require('./model/DocumentoParametrosRequest'), require('./model/DocumentoResponse'), require('./model/DocumentoTemplateRequest'), require('./model/DocumentoTemplateResponse'), require('./model/DocumentoTipoRequest'), require('./model/DocumentoTipoResponse'), require('./model/EmprestimoPessoalRequest'), require('./model/EmprestimoPessoalResponse'), require('./model/EnderecoAprovadoPersist'), require('./model/EnderecoAprovadoResponse'), require('./model/EnderecoResponse'), require('./model/EstabelecimentoResponse'), require('./model/EstagioCartaoResponse'), require('./model/ExtraInfo'), require('./model/FantasiaBasicaResponse'), require('./model/FaqResponse'), require('./model/FaturaConsignadaDetalheResponse'), require('./model/FaturaConsignadaResponse'), require('./model/FaturaResponse'), require('./model/HistoricoAssessoriaResponse'), require('./model/HistoricoAtrasoFaturaResponse'), require('./model/HistoricoEventosResponse'), require('./model/HistoricoImpressaoCartaoResponse'), require('./model/HistoricoTelefoneResponse'), require('./model/IntegracaoEmissorPersist'), require('./model/IntegracaoEmissorResponse'), require('./model/JobResponse'), require('./model/LimiteDisponibilidadeResponse'), require('./model/LoteCartoesPrePagosResponse'), require('./model/MapOfstringAndstring'), require('./model/NotificacaoEmailRequest'), require('./model/NotificacaoEmailResponse'), require('./model/NotificacaoPushResponse'), require('./model/NotificacaoResponse'), require('./model/NotificacaoSMSBody'), require('./model/NotificacaoSMSResponse'), require('./model/OperadoraResponse'), require('./model/OportunidadeAUDResponse'), require('./model/OportunidadePersist'), require('./model/OportunidadeResponse'), require('./model/OportunidadeUpdate'), require('./model/OrigemComercialResponse'), require('./model/PageAnuidadeResponse'), require('./model/PageAplicacaoMobileResponse'), require('./model/PageAtendimentoClienteResponse'), require('./model/PageBancoResponse'), require('./model/PageBaseResponse'), require('./model/PageCampoCodificadoDescricaoResponse'), require('./model/PageCartaoResponse'), require('./model/PageCompraResponse'), require('./model/PageConfiguracaoEmailResponse'), require('./model/PageContaDetalheResponse'), require('./model/PageContaHistoricoPagamentoResponse'), require('./model/PageContaResponse'), require('./model/PageControleVencimentoResponse'), require('./model/PageDispositivoResponse'), require('./model/PageEnderecoResponse'), require('./model/PageEstabelecimentoResponse'), require('./model/PageEstagioCartaoResponse'), require('./model/PageFantasiaBasicaResponse'), require('./model/PageFaqResponse'), require('./model/PageFaturaConsignadaResponse'), require('./model/PageFaturaResponse'), require('./model/PageHistoricoAssessoriaResponse'), require('./model/PageHistoricoAtrasoFaturaResponse'), require('./model/PageHistoricoEventosResponse'), require('./model/PageJobResponse'), require('./model/PageLoteCartoesPrePagosResponse'), require('./model/PageOperadoraResponse'), require('./model/PageOportunidadeAUDResponse'), require('./model/PageOportunidadeResponse'), require('./model/PageOrigemComercialResponse'), require('./model/PagePaisResponse'), require('./model/PagePessoaDetalheResponse'), require('./model/PagePessoaResponse'), require('./model/PagePlanoParcelamentoResponse'), require('./model/PagePlataformaMobileResponse'), require('./model/PagePortadorResponse'), require('./model/PageProdutoResponse'), require('./model/PagePromotorResponse'), require('./model/PagePushResponse'), require('./model/PageRiscoFraudeResponse'), require('./model/PageSMSResponse'), require('./model/PageStatusCartaoResponse'), require('./model/PageStatusContaResponse'), require('./model/PageStatusImpressaoResponse'), require('./model/PageStatusOportunidadeAUDResponse'), require('./model/PageStatusOportunidadeResponse'), require('./model/PageTaxasRefinanciamentoResponse'), require('./model/PageTelefoneResponse'), require('./model/PageTemplateNotificacaoResponse'), require('./model/PageTerminalResponse'), require('./model/PageTipoAjusteResponse'), require('./model/PageTipoBoletoResponse'), require('./model/PageTipoEnderecoResponse'), require('./model/PageTipoOportunidadeAUDResponse'), require('./model/PageTipoOportunidadeResponse'), require('./model/PageTipoTelefoneResponse'), require('./model/PageTransacaoNaoProcessadaResponse'), require('./model/PageTransacaoResponse'), require('./model/PageTransacoesCorrentesResponse'), require('./model/PageTransferenciaBancariaResponse'), require('./model/PageTransferenciaResponse'), require('./model/PageUsuarioResponse'), require('./model/PageWebHookResponse'), require('./model/PaisResponse'), require('./model/ParametroProdutoResponse'), require('./model/PessoaDetalheResponse'), require('./model/PessoaFisicaAprovadaPersist'), require('./model/PessoaFisicaAprovadaResponse'), require('./model/PessoaJuridicaAprovadaPersist'), require('./model/PessoaJuridicaAprovadaResponse'), require('./model/PessoaPersist'), require('./model/PessoaResponse'), require('./model/PlanoParcelamentoEmprestimoResponse'), require('./model/PlanoParcelamentoResponse'), require('./model/PlataformaMobilePersist'), require('./model/PlataformaMobileResponse'), require('./model/PlataformaMobileUpdate'), require('./model/PortadorResponse'), require('./model/ProdutoDetalhesResponse'), require('./model/ProdutoOrigemResponse'), require('./model/ProdutoResponse'), require('./model/PromotorResponse'), require('./model/PushAPNS'), require('./model/PushFCMEGCM'), require('./model/RiscoFraudeDetalhadoResponse'), require('./model/RiscoFraudeResponse'), require('./model/SocioAprovadoResponse'), require('./model/StatusCartaoResponse'), require('./model/StatusContaResponse'), require('./model/StatusImpressaoResponse'), require('./model/StatusOportunidade'), require('./model/StatusOportunidadeAUDResponse'), require('./model/StatusOportunidadeResponse'), require('./model/TaxaAntecipacaoRequest'), require('./model/TaxasRefinanciamentoResponse'), require('./model/TelefoneAdicionalPersist'), require('./model/TelefoneAdicionalUpdate'), require('./model/TelefonePessoaAprovadaPersist'), require('./model/TelefonePessoaAprovadaResponse'), require('./model/TelefoneResponse'), require('./model/TemplateNotificacaoResponse'), require('./model/TerminalResponse'), require('./model/TipoAjusteResponse'), require('./model/TipoBoletoResponse'), require('./model/TipoEnderecoResponse'), require('./model/TipoOportunidade'), require('./model/TipoOportunidadeAUDResponse'), require('./model/TipoOportunidadeResponse'), require('./model/TipoResolucaoResponse'), require('./model/TipoTelefoneResponse'), require('./model/TokenResponse'), require('./model/TransacaoCorrenteResponse'), require('./model/TransacaoNaoProcessadaResponse'), require('./model/TransacaoOnUsPorIdCartaoRequest'), require('./model/TransacaoOnUsRequest'), require('./model/TransacaoOnUsResponse'), require('./model/TransacoesCorrentesResponse'), require('./model/TransferenciaBancariaPersist'), require('./model/TransferenciaBancariaResponse'), require('./model/TransferenciaResponse'), require('./model/UsuarioPersist'), require('./model/UsuarioResponse'), require('./model/UsuarioUpdate'), require('./model/ValidaCartaoResponse'), require('./model/ValidaSenhaCartaoResponse'), require('./model/WebHookResponse'), require('./api/AntecipacaoApi'), require('./api/AplicacaoMobileApi'), require('./api/ArquivoApi'), require('./api/AutorizacaoApi'), require('./api/BaseApi'), require('./api/CadastroClienteApi'), require('./api/CadastroGeralApi'), require('./api/CartaoApi'), require('./api/ContaApi'), require('./api/DispositivoApi'), require('./api/DocumentosApi'), require('./api/EnderecoNacionalApi'), require('./api/EstabelecimentoApi'), require('./api/FAQApi'), require('./api/FaturaApi'), require('./api/JobApi'), require('./api/LimiteApi'), require('./api/MockApi'), require('./api/NotificacaoApi'), require('./api/OportunidadeApi'), require('./api/PermissaoPaisApi'), require('./api/PlataformaMobileApi'), require('./api/RiscoFraudeApi'), require('./api/ServicoContaApi'), require('./api/StatusParametroApi'), require('./api/TokenApi'), require('./api/UsuarioApi'), require('./api/WebhookApi'));
  }
}(function(ApiClient, AdicionalDetalheResponse, AdicionalPersist, AdicionalResponse, AdicionalUpdate, AjusteResponse, AlterarProdutoRequest, AntecipacaoResponse, AntecipacaoSimuladaDetalhesResponse, AntecipacaoSimuladaResponse, AnuidadeResponse, AplicacaoMobilePersist, AplicacaoMobileResponse, AplicacaoMobileUpdate, ArquivoDetalhesPersist, ArquivoParametroResponse, ArquivoPersist, ArquivoResponse, AtendimentoClienteResponse, AtribuirAssinaturaClientePersist, AuthToken, AutorizacaoOnUsRequest, BancoResponse, BaseResponse, BeneficioPagamentoAtrasoResponse, BodyAccessToken, BoletoResponse, CampoCodificadoDescricaoResponse, CancelamentoTransacaoOnUsRequest, CancelamentoTransacaoPorIdCartaoRequest, CartaoDetalheResponse, CartaoEmbossingRequest, CartaoEmbossingResponse, CartaoImpressaoProvisorioResponse, CartaoImpressaoResponse, CartaoResponse, CdtDetalheOportunidadeAUD, CodigoSegurancaSMSPersist, CodigoSegurancaSMSRequest, CompraResponse, ConfiguracaoEmailPersist, ConfiguracaoEmailResponse, ContaDetalheResponse, ContaHistoricoPagamentoResponse, ContaResponse, ControleVencimentoResponse, DadosCartaoResponse, DesfazimentoTransacaoOnUsRequest, DetalheOportunidadePersist, DetalheOportunidadeResponse, DetalheOportunidadeUpdate, DetalhesFaturaConsignadaResponse, DetalhesFaturaResponse, DispositivoPersist, DispositivoResponse, DividaClienteResponse, DocumentoDetalheResponse, DocumentoParametrosRequest, DocumentoResponse, DocumentoTemplateRequest, DocumentoTemplateResponse, DocumentoTipoRequest, DocumentoTipoResponse, EmprestimoPessoalRequest, EmprestimoPessoalResponse, EnderecoAprovadoPersist, EnderecoAprovadoResponse, EnderecoResponse, EstabelecimentoResponse, EstagioCartaoResponse, ExtraInfo, FantasiaBasicaResponse, FaqResponse, FaturaConsignadaDetalheResponse, FaturaConsignadaResponse, FaturaResponse, HistoricoAssessoriaResponse, HistoricoAtrasoFaturaResponse, HistoricoEventosResponse, HistoricoImpressaoCartaoResponse, HistoricoTelefoneResponse, IntegracaoEmissorPersist, IntegracaoEmissorResponse, JobResponse, LimiteDisponibilidadeResponse, LoteCartoesPrePagosResponse, MapOfstringAndstring, NotificacaoEmailRequest, NotificacaoEmailResponse, NotificacaoPushResponse, NotificacaoResponse, NotificacaoSMSBody, NotificacaoSMSResponse, OperadoraResponse, OportunidadeAUDResponse, OportunidadePersist, OportunidadeResponse, OportunidadeUpdate, OrigemComercialResponse, PageAnuidadeResponse, PageAplicacaoMobileResponse, PageAtendimentoClienteResponse, PageBancoResponse, PageBaseResponse, PageCampoCodificadoDescricaoResponse, PageCartaoResponse, PageCompraResponse, PageConfiguracaoEmailResponse, PageContaDetalheResponse, PageContaHistoricoPagamentoResponse, PageContaResponse, PageControleVencimentoResponse, PageDispositivoResponse, PageEnderecoResponse, PageEstabelecimentoResponse, PageEstagioCartaoResponse, PageFantasiaBasicaResponse, PageFaqResponse, PageFaturaConsignadaResponse, PageFaturaResponse, PageHistoricoAssessoriaResponse, PageHistoricoAtrasoFaturaResponse, PageHistoricoEventosResponse, PageJobResponse, PageLoteCartoesPrePagosResponse, PageOperadoraResponse, PageOportunidadeAUDResponse, PageOportunidadeResponse, PageOrigemComercialResponse, PagePaisResponse, PagePessoaDetalheResponse, PagePessoaResponse, PagePlanoParcelamentoResponse, PagePlataformaMobileResponse, PagePortadorResponse, PageProdutoResponse, PagePromotorResponse, PagePushResponse, PageRiscoFraudeResponse, PageSMSResponse, PageStatusCartaoResponse, PageStatusContaResponse, PageStatusImpressaoResponse, PageStatusOportunidadeAUDResponse, PageStatusOportunidadeResponse, PageTaxasRefinanciamentoResponse, PageTelefoneResponse, PageTemplateNotificacaoResponse, PageTerminalResponse, PageTipoAjusteResponse, PageTipoBoletoResponse, PageTipoEnderecoResponse, PageTipoOportunidadeAUDResponse, PageTipoOportunidadeResponse, PageTipoTelefoneResponse, PageTransacaoNaoProcessadaResponse, PageTransacaoResponse, PageTransacoesCorrentesResponse, PageTransferenciaBancariaResponse, PageTransferenciaResponse, PageUsuarioResponse, PageWebHookResponse, PaisResponse, ParametroProdutoResponse, PessoaDetalheResponse, PessoaFisicaAprovadaPersist, PessoaFisicaAprovadaResponse, PessoaJuridicaAprovadaPersist, PessoaJuridicaAprovadaResponse, PessoaPersist, PessoaResponse, PlanoParcelamentoEmprestimoResponse, PlanoParcelamentoResponse, PlataformaMobilePersist, PlataformaMobileResponse, PlataformaMobileUpdate, PortadorResponse, ProdutoDetalhesResponse, ProdutoOrigemResponse, ProdutoResponse, PromotorResponse, PushAPNS, PushFCMEGCM, RiscoFraudeDetalhadoResponse, RiscoFraudeResponse, SocioAprovadoResponse, StatusCartaoResponse, StatusContaResponse, StatusImpressaoResponse, StatusOportunidade, StatusOportunidadeAUDResponse, StatusOportunidadeResponse, TaxaAntecipacaoRequest, TaxasRefinanciamentoResponse, TelefoneAdicionalPersist, TelefoneAdicionalUpdate, TelefonePessoaAprovadaPersist, TelefonePessoaAprovadaResponse, TelefoneResponse, TemplateNotificacaoResponse, TerminalResponse, TipoAjusteResponse, TipoBoletoResponse, TipoEnderecoResponse, TipoOportunidade, TipoOportunidadeAUDResponse, TipoOportunidadeResponse, TipoResolucaoResponse, TipoTelefoneResponse, TokenResponse, TransacaoCorrenteResponse, TransacaoNaoProcessadaResponse, TransacaoOnUsPorIdCartaoRequest, TransacaoOnUsRequest, TransacaoOnUsResponse, TransacoesCorrentesResponse, TransferenciaBancariaPersist, TransferenciaBancariaResponse, TransferenciaResponse, UsuarioPersist, UsuarioResponse, UsuarioUpdate, ValidaCartaoResponse, ValidaSenhaCartaoResponse, WebHookResponse, AntecipacaoApi, AplicacaoMobileApi, ArquivoApi, AutorizacaoApi, BaseApi, CadastroClienteApi, CadastroGeralApi, CartaoApi, ContaApi, DispositivoApi, DocumentosApi, EnderecoNacionalApi, EstabelecimentoApi, FAQApi, FaturaApi, JobApi, LimiteApi, MockApi, NotificacaoApi, OportunidadeApi, PermissaoPaisApi, PlataformaMobileApi, RiscoFraudeApi, ServicoContaApi, StatusParametroApi, TokenApi, UsuarioApi, WebhookApi) {
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
   * @version 2.35.2
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The AdicionalDetalheResponse model constructor.
     * @property {module:model/AdicionalDetalheResponse}
     */
    AdicionalDetalheResponse: AdicionalDetalheResponse,
    /**
     * The AdicionalPersist model constructor.
     * @property {module:model/AdicionalPersist}
     */
    AdicionalPersist: AdicionalPersist,
    /**
     * The AdicionalResponse model constructor.
     * @property {module:model/AdicionalResponse}
     */
    AdicionalResponse: AdicionalResponse,
    /**
     * The AdicionalUpdate model constructor.
     * @property {module:model/AdicionalUpdate}
     */
    AdicionalUpdate: AdicionalUpdate,
    /**
     * The AjusteResponse model constructor.
     * @property {module:model/AjusteResponse}
     */
    AjusteResponse: AjusteResponse,
    /**
     * The AlterarProdutoRequest model constructor.
     * @property {module:model/AlterarProdutoRequest}
     */
    AlterarProdutoRequest: AlterarProdutoRequest,
    /**
     * The AntecipacaoResponse model constructor.
     * @property {module:model/AntecipacaoResponse}
     */
    AntecipacaoResponse: AntecipacaoResponse,
    /**
     * The AntecipacaoSimuladaDetalhesResponse model constructor.
     * @property {module:model/AntecipacaoSimuladaDetalhesResponse}
     */
    AntecipacaoSimuladaDetalhesResponse: AntecipacaoSimuladaDetalhesResponse,
    /**
     * The AntecipacaoSimuladaResponse model constructor.
     * @property {module:model/AntecipacaoSimuladaResponse}
     */
    AntecipacaoSimuladaResponse: AntecipacaoSimuladaResponse,
    /**
     * The AnuidadeResponse model constructor.
     * @property {module:model/AnuidadeResponse}
     */
    AnuidadeResponse: AnuidadeResponse,
    /**
     * The AplicacaoMobilePersist model constructor.
     * @property {module:model/AplicacaoMobilePersist}
     */
    AplicacaoMobilePersist: AplicacaoMobilePersist,
    /**
     * The AplicacaoMobileResponse model constructor.
     * @property {module:model/AplicacaoMobileResponse}
     */
    AplicacaoMobileResponse: AplicacaoMobileResponse,
    /**
     * The AplicacaoMobileUpdate model constructor.
     * @property {module:model/AplicacaoMobileUpdate}
     */
    AplicacaoMobileUpdate: AplicacaoMobileUpdate,
    /**
     * The ArquivoDetalhesPersist model constructor.
     * @property {module:model/ArquivoDetalhesPersist}
     */
    ArquivoDetalhesPersist: ArquivoDetalhesPersist,
    /**
     * The ArquivoParametroResponse model constructor.
     * @property {module:model/ArquivoParametroResponse}
     */
    ArquivoParametroResponse: ArquivoParametroResponse,
    /**
     * The ArquivoPersist model constructor.
     * @property {module:model/ArquivoPersist}
     */
    ArquivoPersist: ArquivoPersist,
    /**
     * The ArquivoResponse model constructor.
     * @property {module:model/ArquivoResponse}
     */
    ArquivoResponse: ArquivoResponse,
    /**
     * The AtendimentoClienteResponse model constructor.
     * @property {module:model/AtendimentoClienteResponse}
     */
    AtendimentoClienteResponse: AtendimentoClienteResponse,
    /**
     * The AtribuirAssinaturaClientePersist model constructor.
     * @property {module:model/AtribuirAssinaturaClientePersist}
     */
    AtribuirAssinaturaClientePersist: AtribuirAssinaturaClientePersist,
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
     * The BancoResponse model constructor.
     * @property {module:model/BancoResponse}
     */
    BancoResponse: BancoResponse,
    /**
     * The BaseResponse model constructor.
     * @property {module:model/BaseResponse}
     */
    BaseResponse: BaseResponse,
    /**
     * The BeneficioPagamentoAtrasoResponse model constructor.
     * @property {module:model/BeneficioPagamentoAtrasoResponse}
     */
    BeneficioPagamentoAtrasoResponse: BeneficioPagamentoAtrasoResponse,
    /**
     * The BodyAccessToken model constructor.
     * @property {module:model/BodyAccessToken}
     */
    BodyAccessToken: BodyAccessToken,
    /**
     * The BoletoResponse model constructor.
     * @property {module:model/BoletoResponse}
     */
    BoletoResponse: BoletoResponse,
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
     * The CancelamentoTransacaoPorIdCartaoRequest model constructor.
     * @property {module:model/CancelamentoTransacaoPorIdCartaoRequest}
     */
    CancelamentoTransacaoPorIdCartaoRequest: CancelamentoTransacaoPorIdCartaoRequest,
    /**
     * The CartaoDetalheResponse model constructor.
     * @property {module:model/CartaoDetalheResponse}
     */
    CartaoDetalheResponse: CartaoDetalheResponse,
    /**
     * The CartaoEmbossingRequest model constructor.
     * @property {module:model/CartaoEmbossingRequest}
     */
    CartaoEmbossingRequest: CartaoEmbossingRequest,
    /**
     * The CartaoEmbossingResponse model constructor.
     * @property {module:model/CartaoEmbossingResponse}
     */
    CartaoEmbossingResponse: CartaoEmbossingResponse,
    /**
     * The CartaoImpressaoProvisorioResponse model constructor.
     * @property {module:model/CartaoImpressaoProvisorioResponse}
     */
    CartaoImpressaoProvisorioResponse: CartaoImpressaoProvisorioResponse,
    /**
     * The CartaoImpressaoResponse model constructor.
     * @property {module:model/CartaoImpressaoResponse}
     */
    CartaoImpressaoResponse: CartaoImpressaoResponse,
    /**
     * The CartaoResponse model constructor.
     * @property {module:model/CartaoResponse}
     */
    CartaoResponse: CartaoResponse,
    /**
     * The CdtDetalheOportunidadeAUD model constructor.
     * @property {module:model/CdtDetalheOportunidadeAUD}
     */
    CdtDetalheOportunidadeAUD: CdtDetalheOportunidadeAUD,
    /**
     * The CodigoSegurancaSMSPersist model constructor.
     * @property {module:model/CodigoSegurancaSMSPersist}
     */
    CodigoSegurancaSMSPersist: CodigoSegurancaSMSPersist,
    /**
     * The CodigoSegurancaSMSRequest model constructor.
     * @property {module:model/CodigoSegurancaSMSRequest}
     */
    CodigoSegurancaSMSRequest: CodigoSegurancaSMSRequest,
    /**
     * The CompraResponse model constructor.
     * @property {module:model/CompraResponse}
     */
    CompraResponse: CompraResponse,
    /**
     * The ConfiguracaoEmailPersist model constructor.
     * @property {module:model/ConfiguracaoEmailPersist}
     */
    ConfiguracaoEmailPersist: ConfiguracaoEmailPersist,
    /**
     * The ConfiguracaoEmailResponse model constructor.
     * @property {module:model/ConfiguracaoEmailResponse}
     */
    ConfiguracaoEmailResponse: ConfiguracaoEmailResponse,
    /**
     * The ContaDetalheResponse model constructor.
     * @property {module:model/ContaDetalheResponse}
     */
    ContaDetalheResponse: ContaDetalheResponse,
    /**
     * The ContaHistoricoPagamentoResponse model constructor.
     * @property {module:model/ContaHistoricoPagamentoResponse}
     */
    ContaHistoricoPagamentoResponse: ContaHistoricoPagamentoResponse,
    /**
     * The ContaResponse model constructor.
     * @property {module:model/ContaResponse}
     */
    ContaResponse: ContaResponse,
    /**
     * The ControleVencimentoResponse model constructor.
     * @property {module:model/ControleVencimentoResponse}
     */
    ControleVencimentoResponse: ControleVencimentoResponse,
    /**
     * The DadosCartaoResponse model constructor.
     * @property {module:model/DadosCartaoResponse}
     */
    DadosCartaoResponse: DadosCartaoResponse,
    /**
     * The DesfazimentoTransacaoOnUsRequest model constructor.
     * @property {module:model/DesfazimentoTransacaoOnUsRequest}
     */
    DesfazimentoTransacaoOnUsRequest: DesfazimentoTransacaoOnUsRequest,
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
     * The DispositivoPersist model constructor.
     * @property {module:model/DispositivoPersist}
     */
    DispositivoPersist: DispositivoPersist,
    /**
     * The DispositivoResponse model constructor.
     * @property {module:model/DispositivoResponse}
     */
    DispositivoResponse: DispositivoResponse,
    /**
     * The DividaClienteResponse model constructor.
     * @property {module:model/DividaClienteResponse}
     */
    DividaClienteResponse: DividaClienteResponse,
    /**
     * The DocumentoDetalheResponse model constructor.
     * @property {module:model/DocumentoDetalheResponse}
     */
    DocumentoDetalheResponse: DocumentoDetalheResponse,
    /**
     * The DocumentoParametrosRequest model constructor.
     * @property {module:model/DocumentoParametrosRequest}
     */
    DocumentoParametrosRequest: DocumentoParametrosRequest,
    /**
     * The DocumentoResponse model constructor.
     * @property {module:model/DocumentoResponse}
     */
    DocumentoResponse: DocumentoResponse,
    /**
     * The DocumentoTemplateRequest model constructor.
     * @property {module:model/DocumentoTemplateRequest}
     */
    DocumentoTemplateRequest: DocumentoTemplateRequest,
    /**
     * The DocumentoTemplateResponse model constructor.
     * @property {module:model/DocumentoTemplateResponse}
     */
    DocumentoTemplateResponse: DocumentoTemplateResponse,
    /**
     * The DocumentoTipoRequest model constructor.
     * @property {module:model/DocumentoTipoRequest}
     */
    DocumentoTipoRequest: DocumentoTipoRequest,
    /**
     * The DocumentoTipoResponse model constructor.
     * @property {module:model/DocumentoTipoResponse}
     */
    DocumentoTipoResponse: DocumentoTipoResponse,
    /**
     * The EmprestimoPessoalRequest model constructor.
     * @property {module:model/EmprestimoPessoalRequest}
     */
    EmprestimoPessoalRequest: EmprestimoPessoalRequest,
    /**
     * The EmprestimoPessoalResponse model constructor.
     * @property {module:model/EmprestimoPessoalResponse}
     */
    EmprestimoPessoalResponse: EmprestimoPessoalResponse,
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
     * The EnderecoResponse model constructor.
     * @property {module:model/EnderecoResponse}
     */
    EnderecoResponse: EnderecoResponse,
    /**
     * The EstabelecimentoResponse model constructor.
     * @property {module:model/EstabelecimentoResponse}
     */
    EstabelecimentoResponse: EstabelecimentoResponse,
    /**
     * The EstagioCartaoResponse model constructor.
     * @property {module:model/EstagioCartaoResponse}
     */
    EstagioCartaoResponse: EstagioCartaoResponse,
    /**
     * The ExtraInfo model constructor.
     * @property {module:model/ExtraInfo}
     */
    ExtraInfo: ExtraInfo,
    /**
     * The FantasiaBasicaResponse model constructor.
     * @property {module:model/FantasiaBasicaResponse}
     */
    FantasiaBasicaResponse: FantasiaBasicaResponse,
    /**
     * The FaqResponse model constructor.
     * @property {module:model/FaqResponse}
     */
    FaqResponse: FaqResponse,
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
     * The HistoricoAssessoriaResponse model constructor.
     * @property {module:model/HistoricoAssessoriaResponse}
     */
    HistoricoAssessoriaResponse: HistoricoAssessoriaResponse,
    /**
     * The HistoricoAtrasoFaturaResponse model constructor.
     * @property {module:model/HistoricoAtrasoFaturaResponse}
     */
    HistoricoAtrasoFaturaResponse: HistoricoAtrasoFaturaResponse,
    /**
     * The HistoricoEventosResponse model constructor.
     * @property {module:model/HistoricoEventosResponse}
     */
    HistoricoEventosResponse: HistoricoEventosResponse,
    /**
     * The HistoricoImpressaoCartaoResponse model constructor.
     * @property {module:model/HistoricoImpressaoCartaoResponse}
     */
    HistoricoImpressaoCartaoResponse: HistoricoImpressaoCartaoResponse,
    /**
     * The HistoricoTelefoneResponse model constructor.
     * @property {module:model/HistoricoTelefoneResponse}
     */
    HistoricoTelefoneResponse: HistoricoTelefoneResponse,
    /**
     * The IntegracaoEmissorPersist model constructor.
     * @property {module:model/IntegracaoEmissorPersist}
     */
    IntegracaoEmissorPersist: IntegracaoEmissorPersist,
    /**
     * The IntegracaoEmissorResponse model constructor.
     * @property {module:model/IntegracaoEmissorResponse}
     */
    IntegracaoEmissorResponse: IntegracaoEmissorResponse,
    /**
     * The JobResponse model constructor.
     * @property {module:model/JobResponse}
     */
    JobResponse: JobResponse,
    /**
     * The LimiteDisponibilidadeResponse model constructor.
     * @property {module:model/LimiteDisponibilidadeResponse}
     */
    LimiteDisponibilidadeResponse: LimiteDisponibilidadeResponse,
    /**
     * The LoteCartoesPrePagosResponse model constructor.
     * @property {module:model/LoteCartoesPrePagosResponse}
     */
    LoteCartoesPrePagosResponse: LoteCartoesPrePagosResponse,
    /**
     * The MapOfstringAndstring model constructor.
     * @property {module:model/MapOfstringAndstring}
     */
    MapOfstringAndstring: MapOfstringAndstring,
    /**
     * The NotificacaoEmailRequest model constructor.
     * @property {module:model/NotificacaoEmailRequest}
     */
    NotificacaoEmailRequest: NotificacaoEmailRequest,
    /**
     * The NotificacaoEmailResponse model constructor.
     * @property {module:model/NotificacaoEmailResponse}
     */
    NotificacaoEmailResponse: NotificacaoEmailResponse,
    /**
     * The NotificacaoPushResponse model constructor.
     * @property {module:model/NotificacaoPushResponse}
     */
    NotificacaoPushResponse: NotificacaoPushResponse,
    /**
     * The NotificacaoResponse model constructor.
     * @property {module:model/NotificacaoResponse}
     */
    NotificacaoResponse: NotificacaoResponse,
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
     * The OperadoraResponse model constructor.
     * @property {module:model/OperadoraResponse}
     */
    OperadoraResponse: OperadoraResponse,
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
     * The OrigemComercialResponse model constructor.
     * @property {module:model/OrigemComercialResponse}
     */
    OrigemComercialResponse: OrigemComercialResponse,
    /**
     * The PageAnuidadeResponse model constructor.
     * @property {module:model/PageAnuidadeResponse}
     */
    PageAnuidadeResponse: PageAnuidadeResponse,
    /**
     * The PageAplicacaoMobileResponse model constructor.
     * @property {module:model/PageAplicacaoMobileResponse}
     */
    PageAplicacaoMobileResponse: PageAplicacaoMobileResponse,
    /**
     * The PageAtendimentoClienteResponse model constructor.
     * @property {module:model/PageAtendimentoClienteResponse}
     */
    PageAtendimentoClienteResponse: PageAtendimentoClienteResponse,
    /**
     * The PageBancoResponse model constructor.
     * @property {module:model/PageBancoResponse}
     */
    PageBancoResponse: PageBancoResponse,
    /**
     * The PageBaseResponse model constructor.
     * @property {module:model/PageBaseResponse}
     */
    PageBaseResponse: PageBaseResponse,
    /**
     * The PageCampoCodificadoDescricaoResponse model constructor.
     * @property {module:model/PageCampoCodificadoDescricaoResponse}
     */
    PageCampoCodificadoDescricaoResponse: PageCampoCodificadoDescricaoResponse,
    /**
     * The PageCartaoResponse model constructor.
     * @property {module:model/PageCartaoResponse}
     */
    PageCartaoResponse: PageCartaoResponse,
    /**
     * The PageCompraResponse model constructor.
     * @property {module:model/PageCompraResponse}
     */
    PageCompraResponse: PageCompraResponse,
    /**
     * The PageConfiguracaoEmailResponse model constructor.
     * @property {module:model/PageConfiguracaoEmailResponse}
     */
    PageConfiguracaoEmailResponse: PageConfiguracaoEmailResponse,
    /**
     * The PageContaDetalheResponse model constructor.
     * @property {module:model/PageContaDetalheResponse}
     */
    PageContaDetalheResponse: PageContaDetalheResponse,
    /**
     * The PageContaHistoricoPagamentoResponse model constructor.
     * @property {module:model/PageContaHistoricoPagamentoResponse}
     */
    PageContaHistoricoPagamentoResponse: PageContaHistoricoPagamentoResponse,
    /**
     * The PageContaResponse model constructor.
     * @property {module:model/PageContaResponse}
     */
    PageContaResponse: PageContaResponse,
    /**
     * The PageControleVencimentoResponse model constructor.
     * @property {module:model/PageControleVencimentoResponse}
     */
    PageControleVencimentoResponse: PageControleVencimentoResponse,
    /**
     * The PageDispositivoResponse model constructor.
     * @property {module:model/PageDispositivoResponse}
     */
    PageDispositivoResponse: PageDispositivoResponse,
    /**
     * The PageEnderecoResponse model constructor.
     * @property {module:model/PageEnderecoResponse}
     */
    PageEnderecoResponse: PageEnderecoResponse,
    /**
     * The PageEstabelecimentoResponse model constructor.
     * @property {module:model/PageEstabelecimentoResponse}
     */
    PageEstabelecimentoResponse: PageEstabelecimentoResponse,
    /**
     * The PageEstagioCartaoResponse model constructor.
     * @property {module:model/PageEstagioCartaoResponse}
     */
    PageEstagioCartaoResponse: PageEstagioCartaoResponse,
    /**
     * The PageFantasiaBasicaResponse model constructor.
     * @property {module:model/PageFantasiaBasicaResponse}
     */
    PageFantasiaBasicaResponse: PageFantasiaBasicaResponse,
    /**
     * The PageFaqResponse model constructor.
     * @property {module:model/PageFaqResponse}
     */
    PageFaqResponse: PageFaqResponse,
    /**
     * The PageFaturaConsignadaResponse model constructor.
     * @property {module:model/PageFaturaConsignadaResponse}
     */
    PageFaturaConsignadaResponse: PageFaturaConsignadaResponse,
    /**
     * The PageFaturaResponse model constructor.
     * @property {module:model/PageFaturaResponse}
     */
    PageFaturaResponse: PageFaturaResponse,
    /**
     * The PageHistoricoAssessoriaResponse model constructor.
     * @property {module:model/PageHistoricoAssessoriaResponse}
     */
    PageHistoricoAssessoriaResponse: PageHistoricoAssessoriaResponse,
    /**
     * The PageHistoricoAtrasoFaturaResponse model constructor.
     * @property {module:model/PageHistoricoAtrasoFaturaResponse}
     */
    PageHistoricoAtrasoFaturaResponse: PageHistoricoAtrasoFaturaResponse,
    /**
     * The PageHistoricoEventosResponse model constructor.
     * @property {module:model/PageHistoricoEventosResponse}
     */
    PageHistoricoEventosResponse: PageHistoricoEventosResponse,
    /**
     * The PageJobResponse model constructor.
     * @property {module:model/PageJobResponse}
     */
    PageJobResponse: PageJobResponse,
    /**
     * The PageLoteCartoesPrePagosResponse model constructor.
     * @property {module:model/PageLoteCartoesPrePagosResponse}
     */
    PageLoteCartoesPrePagosResponse: PageLoteCartoesPrePagosResponse,
    /**
     * The PageOperadoraResponse model constructor.
     * @property {module:model/PageOperadoraResponse}
     */
    PageOperadoraResponse: PageOperadoraResponse,
    /**
     * The PageOportunidadeAUDResponse model constructor.
     * @property {module:model/PageOportunidadeAUDResponse}
     */
    PageOportunidadeAUDResponse: PageOportunidadeAUDResponse,
    /**
     * The PageOportunidadeResponse model constructor.
     * @property {module:model/PageOportunidadeResponse}
     */
    PageOportunidadeResponse: PageOportunidadeResponse,
    /**
     * The PageOrigemComercialResponse model constructor.
     * @property {module:model/PageOrigemComercialResponse}
     */
    PageOrigemComercialResponse: PageOrigemComercialResponse,
    /**
     * The PagePaisResponse model constructor.
     * @property {module:model/PagePaisResponse}
     */
    PagePaisResponse: PagePaisResponse,
    /**
     * The PagePessoaDetalheResponse model constructor.
     * @property {module:model/PagePessoaDetalheResponse}
     */
    PagePessoaDetalheResponse: PagePessoaDetalheResponse,
    /**
     * The PagePessoaResponse model constructor.
     * @property {module:model/PagePessoaResponse}
     */
    PagePessoaResponse: PagePessoaResponse,
    /**
     * The PagePlanoParcelamentoResponse model constructor.
     * @property {module:model/PagePlanoParcelamentoResponse}
     */
    PagePlanoParcelamentoResponse: PagePlanoParcelamentoResponse,
    /**
     * The PagePlataformaMobileResponse model constructor.
     * @property {module:model/PagePlataformaMobileResponse}
     */
    PagePlataformaMobileResponse: PagePlataformaMobileResponse,
    /**
     * The PagePortadorResponse model constructor.
     * @property {module:model/PagePortadorResponse}
     */
    PagePortadorResponse: PagePortadorResponse,
    /**
     * The PageProdutoResponse model constructor.
     * @property {module:model/PageProdutoResponse}
     */
    PageProdutoResponse: PageProdutoResponse,
    /**
     * The PagePromotorResponse model constructor.
     * @property {module:model/PagePromotorResponse}
     */
    PagePromotorResponse: PagePromotorResponse,
    /**
     * The PagePushResponse model constructor.
     * @property {module:model/PagePushResponse}
     */
    PagePushResponse: PagePushResponse,
    /**
     * The PageRiscoFraudeResponse model constructor.
     * @property {module:model/PageRiscoFraudeResponse}
     */
    PageRiscoFraudeResponse: PageRiscoFraudeResponse,
    /**
     * The PageSMSResponse model constructor.
     * @property {module:model/PageSMSResponse}
     */
    PageSMSResponse: PageSMSResponse,
    /**
     * The PageStatusCartaoResponse model constructor.
     * @property {module:model/PageStatusCartaoResponse}
     */
    PageStatusCartaoResponse: PageStatusCartaoResponse,
    /**
     * The PageStatusContaResponse model constructor.
     * @property {module:model/PageStatusContaResponse}
     */
    PageStatusContaResponse: PageStatusContaResponse,
    /**
     * The PageStatusImpressaoResponse model constructor.
     * @property {module:model/PageStatusImpressaoResponse}
     */
    PageStatusImpressaoResponse: PageStatusImpressaoResponse,
    /**
     * The PageStatusOportunidadeAUDResponse model constructor.
     * @property {module:model/PageStatusOportunidadeAUDResponse}
     */
    PageStatusOportunidadeAUDResponse: PageStatusOportunidadeAUDResponse,
    /**
     * The PageStatusOportunidadeResponse model constructor.
     * @property {module:model/PageStatusOportunidadeResponse}
     */
    PageStatusOportunidadeResponse: PageStatusOportunidadeResponse,
    /**
     * The PageTaxasRefinanciamentoResponse model constructor.
     * @property {module:model/PageTaxasRefinanciamentoResponse}
     */
    PageTaxasRefinanciamentoResponse: PageTaxasRefinanciamentoResponse,
    /**
     * The PageTelefoneResponse model constructor.
     * @property {module:model/PageTelefoneResponse}
     */
    PageTelefoneResponse: PageTelefoneResponse,
    /**
     * The PageTemplateNotificacaoResponse model constructor.
     * @property {module:model/PageTemplateNotificacaoResponse}
     */
    PageTemplateNotificacaoResponse: PageTemplateNotificacaoResponse,
    /**
     * The PageTerminalResponse model constructor.
     * @property {module:model/PageTerminalResponse}
     */
    PageTerminalResponse: PageTerminalResponse,
    /**
     * The PageTipoAjusteResponse model constructor.
     * @property {module:model/PageTipoAjusteResponse}
     */
    PageTipoAjusteResponse: PageTipoAjusteResponse,
    /**
     * The PageTipoBoletoResponse model constructor.
     * @property {module:model/PageTipoBoletoResponse}
     */
    PageTipoBoletoResponse: PageTipoBoletoResponse,
    /**
     * The PageTipoEnderecoResponse model constructor.
     * @property {module:model/PageTipoEnderecoResponse}
     */
    PageTipoEnderecoResponse: PageTipoEnderecoResponse,
    /**
     * The PageTipoOportunidadeAUDResponse model constructor.
     * @property {module:model/PageTipoOportunidadeAUDResponse}
     */
    PageTipoOportunidadeAUDResponse: PageTipoOportunidadeAUDResponse,
    /**
     * The PageTipoOportunidadeResponse model constructor.
     * @property {module:model/PageTipoOportunidadeResponse}
     */
    PageTipoOportunidadeResponse: PageTipoOportunidadeResponse,
    /**
     * The PageTipoTelefoneResponse model constructor.
     * @property {module:model/PageTipoTelefoneResponse}
     */
    PageTipoTelefoneResponse: PageTipoTelefoneResponse,
    /**
     * The PageTransacaoNaoProcessadaResponse model constructor.
     * @property {module:model/PageTransacaoNaoProcessadaResponse}
     */
    PageTransacaoNaoProcessadaResponse: PageTransacaoNaoProcessadaResponse,
    /**
     * The PageTransacaoResponse model constructor.
     * @property {module:model/PageTransacaoResponse}
     */
    PageTransacaoResponse: PageTransacaoResponse,
    /**
     * The PageTransacoesCorrentesResponse model constructor.
     * @property {module:model/PageTransacoesCorrentesResponse}
     */
    PageTransacoesCorrentesResponse: PageTransacoesCorrentesResponse,
    /**
     * The PageTransferenciaBancariaResponse model constructor.
     * @property {module:model/PageTransferenciaBancariaResponse}
     */
    PageTransferenciaBancariaResponse: PageTransferenciaBancariaResponse,
    /**
     * The PageTransferenciaResponse model constructor.
     * @property {module:model/PageTransferenciaResponse}
     */
    PageTransferenciaResponse: PageTransferenciaResponse,
    /**
     * The PageUsuarioResponse model constructor.
     * @property {module:model/PageUsuarioResponse}
     */
    PageUsuarioResponse: PageUsuarioResponse,
    /**
     * The PageWebHookResponse model constructor.
     * @property {module:model/PageWebHookResponse}
     */
    PageWebHookResponse: PageWebHookResponse,
    /**
     * The PaisResponse model constructor.
     * @property {module:model/PaisResponse}
     */
    PaisResponse: PaisResponse,
    /**
     * The ParametroProdutoResponse model constructor.
     * @property {module:model/ParametroProdutoResponse}
     */
    ParametroProdutoResponse: ParametroProdutoResponse,
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
     * The PessoaResponse model constructor.
     * @property {module:model/PessoaResponse}
     */
    PessoaResponse: PessoaResponse,
    /**
     * The PlanoParcelamentoEmprestimoResponse model constructor.
     * @property {module:model/PlanoParcelamentoEmprestimoResponse}
     */
    PlanoParcelamentoEmprestimoResponse: PlanoParcelamentoEmprestimoResponse,
    /**
     * The PlanoParcelamentoResponse model constructor.
     * @property {module:model/PlanoParcelamentoResponse}
     */
    PlanoParcelamentoResponse: PlanoParcelamentoResponse,
    /**
     * The PlataformaMobilePersist model constructor.
     * @property {module:model/PlataformaMobilePersist}
     */
    PlataformaMobilePersist: PlataformaMobilePersist,
    /**
     * The PlataformaMobileResponse model constructor.
     * @property {module:model/PlataformaMobileResponse}
     */
    PlataformaMobileResponse: PlataformaMobileResponse,
    /**
     * The PlataformaMobileUpdate model constructor.
     * @property {module:model/PlataformaMobileUpdate}
     */
    PlataformaMobileUpdate: PlataformaMobileUpdate,
    /**
     * The PortadorResponse model constructor.
     * @property {module:model/PortadorResponse}
     */
    PortadorResponse: PortadorResponse,
    /**
     * The ProdutoDetalhesResponse model constructor.
     * @property {module:model/ProdutoDetalhesResponse}
     */
    ProdutoDetalhesResponse: ProdutoDetalhesResponse,
    /**
     * The ProdutoOrigemResponse model constructor.
     * @property {module:model/ProdutoOrigemResponse}
     */
    ProdutoOrigemResponse: ProdutoOrigemResponse,
    /**
     * The ProdutoResponse model constructor.
     * @property {module:model/ProdutoResponse}
     */
    ProdutoResponse: ProdutoResponse,
    /**
     * The PromotorResponse model constructor.
     * @property {module:model/PromotorResponse}
     */
    PromotorResponse: PromotorResponse,
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
     * The SocioAprovadoResponse model constructor.
     * @property {module:model/SocioAprovadoResponse}
     */
    SocioAprovadoResponse: SocioAprovadoResponse,
    /**
     * The StatusCartaoResponse model constructor.
     * @property {module:model/StatusCartaoResponse}
     */
    StatusCartaoResponse: StatusCartaoResponse,
    /**
     * The StatusContaResponse model constructor.
     * @property {module:model/StatusContaResponse}
     */
    StatusContaResponse: StatusContaResponse,
    /**
     * The StatusImpressaoResponse model constructor.
     * @property {module:model/StatusImpressaoResponse}
     */
    StatusImpressaoResponse: StatusImpressaoResponse,
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
     * The TaxaAntecipacaoRequest model constructor.
     * @property {module:model/TaxaAntecipacaoRequest}
     */
    TaxaAntecipacaoRequest: TaxaAntecipacaoRequest,
    /**
     * The TaxasRefinanciamentoResponse model constructor.
     * @property {module:model/TaxasRefinanciamentoResponse}
     */
    TaxasRefinanciamentoResponse: TaxasRefinanciamentoResponse,
    /**
     * The TelefoneAdicionalPersist model constructor.
     * @property {module:model/TelefoneAdicionalPersist}
     */
    TelefoneAdicionalPersist: TelefoneAdicionalPersist,
    /**
     * The TelefoneAdicionalUpdate model constructor.
     * @property {module:model/TelefoneAdicionalUpdate}
     */
    TelefoneAdicionalUpdate: TelefoneAdicionalUpdate,
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
     * The TelefoneResponse model constructor.
     * @property {module:model/TelefoneResponse}
     */
    TelefoneResponse: TelefoneResponse,
    /**
     * The TemplateNotificacaoResponse model constructor.
     * @property {module:model/TemplateNotificacaoResponse}
     */
    TemplateNotificacaoResponse: TemplateNotificacaoResponse,
    /**
     * The TerminalResponse model constructor.
     * @property {module:model/TerminalResponse}
     */
    TerminalResponse: TerminalResponse,
    /**
     * The TipoAjusteResponse model constructor.
     * @property {module:model/TipoAjusteResponse}
     */
    TipoAjusteResponse: TipoAjusteResponse,
    /**
     * The TipoBoletoResponse model constructor.
     * @property {module:model/TipoBoletoResponse}
     */
    TipoBoletoResponse: TipoBoletoResponse,
    /**
     * The TipoEnderecoResponse model constructor.
     * @property {module:model/TipoEnderecoResponse}
     */
    TipoEnderecoResponse: TipoEnderecoResponse,
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
     * The TipoResolucaoResponse model constructor.
     * @property {module:model/TipoResolucaoResponse}
     */
    TipoResolucaoResponse: TipoResolucaoResponse,
    /**
     * The TipoTelefoneResponse model constructor.
     * @property {module:model/TipoTelefoneResponse}
     */
    TipoTelefoneResponse: TipoTelefoneResponse,
    /**
     * The TokenResponse model constructor.
     * @property {module:model/TokenResponse}
     */
    TokenResponse: TokenResponse,
    /**
     * The TransacaoCorrenteResponse model constructor.
     * @property {module:model/TransacaoCorrenteResponse}
     */
    TransacaoCorrenteResponse: TransacaoCorrenteResponse,
    /**
     * The TransacaoNaoProcessadaResponse model constructor.
     * @property {module:model/TransacaoNaoProcessadaResponse}
     */
    TransacaoNaoProcessadaResponse: TransacaoNaoProcessadaResponse,
    /**
     * The TransacaoOnUsPorIdCartaoRequest model constructor.
     * @property {module:model/TransacaoOnUsPorIdCartaoRequest}
     */
    TransacaoOnUsPorIdCartaoRequest: TransacaoOnUsPorIdCartaoRequest,
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
     * The TransacoesCorrentesResponse model constructor.
     * @property {module:model/TransacoesCorrentesResponse}
     */
    TransacoesCorrentesResponse: TransacoesCorrentesResponse,
    /**
     * The TransferenciaBancariaPersist model constructor.
     * @property {module:model/TransferenciaBancariaPersist}
     */
    TransferenciaBancariaPersist: TransferenciaBancariaPersist,
    /**
     * The TransferenciaBancariaResponse model constructor.
     * @property {module:model/TransferenciaBancariaResponse}
     */
    TransferenciaBancariaResponse: TransferenciaBancariaResponse,
    /**
     * The TransferenciaResponse model constructor.
     * @property {module:model/TransferenciaResponse}
     */
    TransferenciaResponse: TransferenciaResponse,
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
     * The ValidaCartaoResponse model constructor.
     * @property {module:model/ValidaCartaoResponse}
     */
    ValidaCartaoResponse: ValidaCartaoResponse,
    /**
     * The ValidaSenhaCartaoResponse model constructor.
     * @property {module:model/ValidaSenhaCartaoResponse}
     */
    ValidaSenhaCartaoResponse: ValidaSenhaCartaoResponse,
    /**
     * The WebHookResponse model constructor.
     * @property {module:model/WebHookResponse}
     */
    WebHookResponse: WebHookResponse,
    /**
     * The AntecipacaoApi service constructor.
     * @property {module:api/AntecipacaoApi}
     */
    AntecipacaoApi: AntecipacaoApi,
    /**
     * The AplicacaoMobileApi service constructor.
     * @property {module:api/AplicacaoMobileApi}
     */
    AplicacaoMobileApi: AplicacaoMobileApi,
    /**
     * The ArquivoApi service constructor.
     * @property {module:api/ArquivoApi}
     */
    ArquivoApi: ArquivoApi,
    /**
     * The AutorizacaoApi service constructor.
     * @property {module:api/AutorizacaoApi}
     */
    AutorizacaoApi: AutorizacaoApi,
    /**
     * The BaseApi service constructor.
     * @property {module:api/BaseApi}
     */
    BaseApi: BaseApi,
    /**
     * The CadastroClienteApi service constructor.
     * @property {module:api/CadastroClienteApi}
     */
    CadastroClienteApi: CadastroClienteApi,
    /**
     * The CadastroGeralApi service constructor.
     * @property {module:api/CadastroGeralApi}
     */
    CadastroGeralApi: CadastroGeralApi,
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
     * The DispositivoApi service constructor.
     * @property {module:api/DispositivoApi}
     */
    DispositivoApi: DispositivoApi,
    /**
     * The DocumentosApi service constructor.
     * @property {module:api/DocumentosApi}
     */
    DocumentosApi: DocumentosApi,
    /**
     * The EnderecoNacionalApi service constructor.
     * @property {module:api/EnderecoNacionalApi}
     */
    EnderecoNacionalApi: EnderecoNacionalApi,
    /**
     * The EstabelecimentoApi service constructor.
     * @property {module:api/EstabelecimentoApi}
     */
    EstabelecimentoApi: EstabelecimentoApi,
    /**
     * The FAQApi service constructor.
     * @property {module:api/FAQApi}
     */
    FAQApi: FAQApi,
    /**
     * The FaturaApi service constructor.
     * @property {module:api/FaturaApi}
     */
    FaturaApi: FaturaApi,
    /**
     * The JobApi service constructor.
     * @property {module:api/JobApi}
     */
    JobApi: JobApi,
    /**
     * The LimiteApi service constructor.
     * @property {module:api/LimiteApi}
     */
    LimiteApi: LimiteApi,
    /**
     * The MockApi service constructor.
     * @property {module:api/MockApi}
     */
    MockApi: MockApi,
    /**
     * The NotificacaoApi service constructor.
     * @property {module:api/NotificacaoApi}
     */
    NotificacaoApi: NotificacaoApi,
    /**
     * The OportunidadeApi service constructor.
     * @property {module:api/OportunidadeApi}
     */
    OportunidadeApi: OportunidadeApi,
    /**
     * The PermissaoPaisApi service constructor.
     * @property {module:api/PermissaoPaisApi}
     */
    PermissaoPaisApi: PermissaoPaisApi,
    /**
     * The PlataformaMobileApi service constructor.
     * @property {module:api/PlataformaMobileApi}
     */
    PlataformaMobileApi: PlataformaMobileApi,
    /**
     * The RiscoFraudeApi service constructor.
     * @property {module:api/RiscoFraudeApi}
     */
    RiscoFraudeApi: RiscoFraudeApi,
    /**
     * The ServicoContaApi service constructor.
     * @property {module:api/ServicoContaApi}
     */
    ServicoContaApi: ServicoContaApi,
    /**
     * The StatusParametroApi service constructor.
     * @property {module:api/StatusParametroApi}
     */
    StatusParametroApi: StatusParametroApi,
    /**
     * The TokenApi service constructor.
     * @property {module:api/TokenApi}
     */
    TokenApi: TokenApi,
    /**
     * The UsuarioApi service constructor.
     * @property {module:api/UsuarioApi}
     */
    UsuarioApi: UsuarioApi,
    /**
     * The WebhookApi service constructor.
     * @property {module:api/WebhookApi}
     */
    WebhookApi: WebhookApi
  };

  return exports;
}));
