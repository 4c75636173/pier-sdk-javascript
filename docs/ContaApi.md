# Pier.ContaApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ajustarContaUsingPOST**](ContaApi.md#ajustarContaUsingPOST) | **POST** /api/contas/{id}/ajustes-financeiros | Lan\u00C3\u00A7a um ajuste para a conta do id informado
[**alterarLimiteUsingPUT**](ContaApi.md#alterarLimiteUsingPUT) | **PUT** /api/contas/{id}/alterar-limites | Realiza a altera\u00C3\u00A7\u00C3\u00A3o dos limites da conta
[**alterarTitularUsingPOST**](ContaApi.md#alterarTitularUsingPOST) | **POST** /api/contas/{id}/alterar-titular | Realiza a altera\u00C3\u00A7\u00C3\u00A3o de uma Pessoa tilular da conta
[**alterarVencimentoUsingPUT**](ContaApi.md#alterarVencimentoUsingPUT) | **PUT** /api/contas/{id}/alterar-vencimento | Realiza a altera\u00C3\u00A7\u00C3\u00A3o do dia de vencimento das faturas da conta
[**ativarAnuidadeUsingPOST**](ContaApi.md#ativarAnuidadeUsingPOST) | **POST** /api/contas/{id}/atribuir-anuidade | Atribuir Anuidade
[**ativarEnvioFaturaEmailUsingPOST**](ContaApi.md#ativarEnvioFaturaEmailUsingPOST) | **POST** /api/contas/{id}/ativar-fatura-email |  Ativa o servi\u00C3\u00A7o de envio de fatura por email
[**bloquearUsingPOST1**](ContaApi.md#bloquearUsingPOST1) | **POST** /api/contas/{id}/bloquear | Realiza o bloqueio de uma determinada Conta
[**cancelarUsingPOST1**](ContaApi.md#cancelarUsingPOST1) | **POST** /api/contas/{id}/cancelar | Realiza o cancelamento de uma determinada Conta
[**consultarBoletoEmitidoUsingGET**](ContaApi.md#consultarBoletoEmitidoUsingGET) | **GET** /api/contas/{id}/consultar-dados-pagamento-fatura | Consulta os dados de um determinado boleto da fatura
[**consultarDividaAtualizadaClienteUsingGET**](ContaApi.md#consultarDividaAtualizadaClienteUsingGET) | **GET** /api/contas/{id}/recuperar-divida-atualizada | Consulta a d\u00C3\u00ADvida atualizada do cliente
[**consultarFaturaConsignadaAbertaUsingGET**](ContaApi.md#consultarFaturaConsignadaAbertaUsingGET) | **GET** /api/contas/{id}/faturas-consignadas/consultar-aberta | Consultar a fatura consignadas abertas da conta
[**consultarFaturaConsignadaUsingGET**](ContaApi.md#consultarFaturaConsignadaUsingGET) | **GET** /api/contas/{id}/faturas-consignadas/{id_fatura} | Apresenta dados de uma determinada fatura consignada
[**consultarFaturaUsingGET**](ContaApi.md#consultarFaturaUsingGET) | **GET** /api/contas/{id}/faturas/consultar-fechada | Consultar Fatura da Conta
[**consultarLancamentosFuturosFaturaUsingGET**](ContaApi.md#consultarLancamentosFuturosFaturaUsingGET) | **GET** /api/contas/{id}/faturas/consultar-aberta | Consultar Lan\u00C3\u00A7amentos Futuros da Fatura de uma Conta
[**consultarLimiteDisponibilidadeUsingGET1**](ContaApi.md#consultarLimiteDisponibilidadeUsingGET1) | **GET** /api/contas/{id}/limites-disponibilidades | Apresenta os limites da conta
[**consultarTaxasTarifasUsingGET**](ContaApi.md#consultarTaxasTarifasUsingGET) | **GET** /api/contas/{id}/consultar-taxas-tarifas | Permite consultar a partir do ID da conta as taxas e tarifas
[**consultarUsingGET24**](ContaApi.md#consultarUsingGET24) | **GET** /api/contas/{id}/transferencias-creditos-contas-bancarias/{id_transferencia} | Consultar uma transfer\u00C3\u00AAncia banc\u00C3\u00A1ria para um banco
[**consultarUsingGET25**](ContaApi.md#consultarUsingGET25) | **GET** /api/contas/{id}/transferencias-creditos-cartoes/{id_transferencia} | Consulta os detalhes de uma determinada transfer\u00C3\u00AAncia
[**consultarUsingGET5**](ContaApi.md#consultarUsingGET5) | **GET** /api/contas/{id} | Apresenta dados de uma determinada conta
[**desativarEnvioFaturaEmailUsingPOST**](ContaApi.md#desativarEnvioFaturaEmailUsingPOST) | **POST** /api/contas/{id}/desativar-fatura-email | Desativa o servi\u00C3\u00A7o de envio de fatura por email
[**gerarBoletoRecargaUsingPOST**](ContaApi.md#gerarBoletoRecargaUsingPOST) | **POST** /api/contas/{id}/gerar-boleto-recarga | Gera um boleto de recarga
[**gerarCartaoUsingPOST**](ContaApi.md#gerarCartaoUsingPOST) | **POST** /api/contas/{id}/pessoas/{id_pessoa}/gerar-cartao | Realiza a gera\u00C3\u00A7\u00C3\u00A3o de um novo cart\u00C3\u00A3o para impress\u00C3\u00A3o avulsa
[**gerarCartaoVirtualUsingPOST**](ContaApi.md#gerarCartaoVirtualUsingPOST) | **POST** /api/contas/{id}/gerar-cartao-virtual | Realiza a gera\u00C3\u00A7\u00C3\u00A3o de um cart\u00C3\u00A3o virtual
[**listarFaturasConsignadasUsingGET**](ContaApi.md#listarFaturasConsignadasUsingGET) | **GET** /api/contas/{id}/faturas-consignadas | Lista as faturas consignadas da conta
[**listarFaturasUsingGET**](ContaApi.md#listarFaturasUsingGET) | **GET** /api/contas/{id}/faturas | Lista as faturas da conta
[**listarHistoricoAlteracoesLimitesUsingGET**](ContaApi.md#listarHistoricoAlteracoesLimitesUsingGET) | **GET** /api/contas/{id}/historicos-alteracoes-limites | Lista o hist\u00C3\u00B3rico de altera\u00C3\u00A7\u00C3\u00B5es de limites da conta
[**listarHistoricoAssessoriaUsingGET**](ContaApi.md#listarHistoricoAssessoriaUsingGET) | **GET** /api/contas/{id}/historicos-assessorias-cobranca | Lista o hist\u00C3\u00B3rico de entradas/sa\u00C3\u00ADdas de assessorias de cobran\u00C3\u00A7a
[**listarHistoricoAtrasosFaturasUsingGET**](ContaApi.md#listarHistoricoAtrasosFaturasUsingGET) | **GET** /api/contas/{id}/historicos-faturas-atrasos | Lista o historico de atrasos das faturas
[**listarNaoProcessadasUsingGET**](ContaApi.md#listarNaoProcessadasUsingGET) | **GET** /api/contas/{id}/transacoes/listar-nao-processadas | Lista as transa\u00C3\u00A7\u00C3\u00B5es n\u00C3\u00A3o processadas da conta
[**listarProcessadasUsingGET**](ContaApi.md#listarProcessadasUsingGET) | **GET** /api/contas/{id}/transacoes/listar-processadas | Lista as transa\u00C3\u00A7\u00C3\u00B5es processadas da conta
[**listarUsingGET28**](ContaApi.md#listarUsingGET28) | **GET** /api/contas/{id}/transferencias-creditos-contas-bancarias | Listar as transfer\u00C3\u00AAncias banc\u00C3\u00A1rias realizadas
[**listarUsingGET29**](ContaApi.md#listarUsingGET29) | **GET** /api/contas/{id}/transferencias-creditos-cartoes | Lista as transfer\u00C3\u00AAncias realizadas pela conta
[**listarUsingGET7**](ContaApi.md#listarUsingGET7) | **GET** /api/contas | Lista contas existentes na base de dados do Emissor
[**reativarUsingPOST1**](ContaApi.md#reativarUsingPOST1) | **POST** /api/contas/{id}/reativar | Realiza a reativa\u00C3\u00A7\u00C3\u00A3o de contas.
[**transacoesUsingGET**](ContaApi.md#transacoesUsingGET) | **GET** /api/contas/{id}/timeline | Permite listar uma linha do tempo com os eventos da conta
[**transferirUsingPOST**](ContaApi.md#transferirUsingPOST) | **POST** /api/contas/{id}/transferencias-creditos-contas-bancarias | Realizar transfer\u00C3\u00AAncia banc\u00C3\u00A1ria do cart\u00C3\u00A3o para contas banc\u00C3\u00A1rias
[**transferirUsingPOST1**](ContaApi.md#transferirUsingPOST1) | **POST** /api/contas/{id}/transferencias-creditos-cartoes | Realiza uma transfer\u00C3\u00AAncia de Cr\u00C3\u00A9dito para outro cliente do mesmo Emissor


<a name="ajustarContaUsingPOST"></a>
# **ajustarContaUsingPOST**
> AjusteResponse ajustarContaUsingPOST(id, idTipoAjuste, dataAjuste, valorAjuste)

Lan\u00C3\u00A7a um ajuste para a conta do id informado

Este recurso insere um ajuste para a conta do id informado

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ContaApi()

var id = 789; // {Integer} Id Conta

var idTipoAjuste = 789; // {Integer} C\u00C3\u00B3digo identificador do tipo de ajuste.

var dataAjuste = "dataAjuste_example"; // {String} Data do ajuste.

var valorAjuste = 3.4; // {Number} Valor do ajuste


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.ajustarContaUsingPOST(id, idTipoAjuste, dataAjuste, valorAjuste, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| Id Conta | 
 **idTipoAjuste** | **Integer**| C\u00C3\u00B3digo identificador do tipo de ajuste. | 
 **dataAjuste** | **String**| Data do ajuste. | 
 **valorAjuste** | [**Number**](.md)| Valor do ajuste | 

### Return type

[**AjusteResponse**](AjusteResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="alterarLimiteUsingPUT"></a>
# **alterarLimiteUsingPUT**
> LimiteDisponibilidadeResponse alterarLimiteUsingPUT(id, limiteGlobal, limiteCompra, limiteParcelado, limiteParcelas, limiteSaqueGlobal, limiteSaquePeriodo, limiteConsignado, limiteInternacionalCompra, limiteInternacionalParcelado, limiteInternacionalParcelas, limiteInternacionalSaqueGlobal, limiteInternacionalSaquePeriodo, limiteMaximo)

Realiza a altera\u00C3\u00A7\u00C3\u00A3o dos limites da conta

Esse recurso permite realizar a altera\u00C3\u00A7\u00C3\u00A3o dos Limites de uma determinada Conta.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ContaApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).

var limiteGlobal = 3.4; // {Number} Apresenta o valor do limite de cr\u00C3\u00A9dito que o portador do cart\u00C3\u00A3o possui.

var limiteCompra = 3.4; // {Number} Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que o portador possui para uso exclusivo em Compras Nacionais.

var limiteParcelado = 3.4; // {Number} Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que o portador possui para realizar transa\u00C3\u00A7\u00C3\u00B5es de compras parceladas.

var limiteParcelas = 3.4; // {Number} Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que portador pode acumular a partir da soma das parcelas das compras que forem realizadas nesta modalidade.

var limiteSaqueGlobal = 3.4; // {Number} Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que o portador pode utilizar para realizar transa\u00C3\u00A7\u00C3\u00B5es de Saque Nacional.

var limiteSaquePeriodo = 3.4; // {Number} Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que o portador pode utilizar para realizar transa\u00C3\u00A7\u00C3\u00B5es de Saque Nacional dentro de cada ciclo de faturamento.

var limiteConsignado = 3.4; // {Number} Quando utilizado pelo emissor, este campo apresenta o valor da margem de cr\u00C3\u00A9dito que ele poder\u00C3\u00A1 utilizar para ser cobrado de forma consignada (desconto em folha) em seu sal\u00C3\u00A1rio/vencimentos.

var limiteInternacionalCompra = 3.4; // {Number} Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que o portador possui para uso exclusivo em Compras Internacionais.

var limiteInternacionalParcelado = 3.4; // {Number} Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que o portador possui para realizar transa\u00C3\u00A7\u00C3\u00B5es Internacionais de Compras Parceladas.

var limiteInternacionalParcelas = 3.4; // {Number} Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que portador pode acumular a partir da soma das parcelas das compras internacionais que forem realizadas nesta modalidade.

var limiteInternacionalSaqueGlobal = 3.4; // {Number} Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que o portador pode utilizar para realizar transa\u00C3\u00A7\u00C3\u00B5es de Saque Internacional.

var limiteInternacionalSaquePeriodo = 3.4; // {Number} Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que o portador pode utilizar para realizar transa\u00C3\u00A7\u00C3\u00B5es de Saque Internacional dentro de cada ciclo de faturamento.

var limiteMaximo = 3.4; // {Number} Valor m\u00C3\u00A1ximo do limite de cr\u00C3\u00A9dito para realizar transa\u00C3\u00A7\u00C3\u00B5es.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.alterarLimiteUsingPUT(id, limiteGlobal, limiteCompra, limiteParcelado, limiteParcelas, limiteSaqueGlobal, limiteSaquePeriodo, limiteConsignado, limiteInternacionalCompra, limiteInternacionalParcelado, limiteInternacionalParcelas, limiteInternacionalSaqueGlobal, limiteInternacionalSaquePeriodo, limiteMaximo, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id). | 
 **limiteGlobal** | [**Number**](.md)| Apresenta o valor do limite de cr\u00C3\u00A9dito que o portador do cart\u00C3\u00A3o possui. | 
 **limiteCompra** | [**Number**](.md)| Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que o portador possui para uso exclusivo em Compras Nacionais. | 
 **limiteParcelado** | [**Number**](.md)| Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que o portador possui para realizar transa\u00C3\u00A7\u00C3\u00B5es de compras parceladas. | 
 **limiteParcelas** | [**Number**](.md)| Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que portador pode acumular a partir da soma das parcelas das compras que forem realizadas nesta modalidade. | 
 **limiteSaqueGlobal** | [**Number**](.md)| Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que o portador pode utilizar para realizar transa\u00C3\u00A7\u00C3\u00B5es de Saque Nacional. | 
 **limiteSaquePeriodo** | [**Number**](.md)| Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que o portador pode utilizar para realizar transa\u00C3\u00A7\u00C3\u00B5es de Saque Nacional dentro de cada ciclo de faturamento. | 
 **limiteConsignado** | [**Number**](.md)| Quando utilizado pelo emissor, este campo apresenta o valor da margem de cr\u00C3\u00A9dito que ele poder\u00C3\u00A1 utilizar para ser cobrado de forma consignada (desconto em folha) em seu sal\u00C3\u00A1rio/vencimentos. | 
 **limiteInternacionalCompra** | [**Number**](.md)| Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que o portador possui para uso exclusivo em Compras Internacionais. | 
 **limiteInternacionalParcelado** | [**Number**](.md)| Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que o portador possui para realizar transa\u00C3\u00A7\u00C3\u00B5es Internacionais de Compras Parceladas. | 
 **limiteInternacionalParcelas** | [**Number**](.md)| Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que portador pode acumular a partir da soma das parcelas das compras internacionais que forem realizadas nesta modalidade. | 
 **limiteInternacionalSaqueGlobal** | [**Number**](.md)| Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que o portador pode utilizar para realizar transa\u00C3\u00A7\u00C3\u00B5es de Saque Internacional. | 
 **limiteInternacionalSaquePeriodo** | [**Number**](.md)| Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que o portador pode utilizar para realizar transa\u00C3\u00A7\u00C3\u00B5es de Saque Internacional dentro de cada ciclo de faturamento. | 
 **limiteMaximo** | [**Number**](.md)| Valor m\u00C3\u00A1ximo do limite de cr\u00C3\u00A9dito para realizar transa\u00C3\u00A7\u00C3\u00B5es. | 

### Return type

[**LimiteDisponibilidadeResponse**](LimiteDisponibilidadeResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="alterarTitularUsingPOST"></a>
# **alterarTitularUsingPOST**
> ContaResponse alterarTitularUsingPOST(id, idPessoa)

Realiza a altera\u00C3\u00A7\u00C3\u00A3o de uma Pessoa tilular da conta

Esta m\u00C3\u00A9todo permite altera a pessoa de uma conta.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ContaApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Conta (id)

var idPessoa = 789; // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o de uma Pessoa (id).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.alterarTitularUsingPOST(id, idPessoa, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Conta (id) | 
 **idPessoa** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o de uma Pessoa (id). | 

### Return type

[**ContaResponse**](ContaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="alterarVencimentoUsingPUT"></a>
# **alterarVencimentoUsingPUT**
> ContaResponse alterarVencimentoUsingPUT(id, novoDiaVencimento)

Realiza a altera\u00C3\u00A7\u00C3\u00A3o do dia de vencimento das faturas da conta

Esse recurso permite alterar o vencimento de uma conta especifica.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ContaApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).

var novoDiaVencimento = 56; // {Integer} Novo dia de vencimento.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.alterarVencimentoUsingPUT(id, novoDiaVencimento, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id). | 
 **novoDiaVencimento** | **Integer**| Novo dia de vencimento. | 

### Return type

[**ContaResponse**](ContaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="ativarAnuidadeUsingPOST"></a>
# **ativarAnuidadeUsingPOST**
> Object ativarAnuidadeUsingPOST(id, idAnuidade, opts)

Atribuir Anuidade

Esse recurso permite configurar qual a regra de Anuidade que ser\u00C3\u00A1 atribu\u00C3\u00ADda a uma determinada Conta.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ContaApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).

var idAnuidade = 789; // {Integer} Identificador da anuidade

var opts = { 
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
  'DDD': "DDD_example", // {String} DDD do celular
  'celular': "celular_example", // {String} N\u00C3\u00BAmero do celular
  'idOperadora': 789, // {Integer} Identificador da operadora do celular
  'idOrigemComercial': 789 // {Integer} Identificador da origem comercial
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.ativarAnuidadeUsingPOST(id, idAnuidade, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id). | 
 **idAnuidade** | **Integer**| Identificador da anuidade | 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 
 **DDD** | **String**| DDD do celular | [optional] 
 **celular** | **String**| N\u00C3\u00BAmero do celular | [optional] 
 **idOperadora** | **Integer**| Identificador da operadora do celular | [optional] 
 **idOrigemComercial** | **Integer**| Identificador da origem comercial | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="ativarEnvioFaturaEmailUsingPOST"></a>
# **ativarEnvioFaturaEmailUsingPOST**
> Object ativarEnvioFaturaEmailUsingPOST(id)

 Ativa o servi\u00C3\u00A7o de envio de fatura por email

Este recurso ativa o servi\u00C3\u00A7o de envio de fatura por email

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ContaApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.ativarEnvioFaturaEmailUsingPOST(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id). | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bloquearUsingPOST1"></a>
# **bloquearUsingPOST1**
> ContaResponse bloquearUsingPOST1(id, idStatus)

Realiza o bloqueio de uma determinada Conta

Este m\u00C3\u00A9todo permite a realiza\u00C3\u00A7\u00C3\u00A3o do bloqueio de uma determinada conta a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ContaApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).

var idStatus = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Novo Status Conta.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.bloquearUsingPOST1(id, idStatus, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da conta (id). | 
 **idStatus** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Novo Status Conta. | 

### Return type

[**ContaResponse**](ContaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cancelarUsingPOST1"></a>
# **cancelarUsingPOST1**
> ContaResponse cancelarUsingPOST1(id, idStatus)

Realiza o cancelamento de uma determinada Conta

Este m\u00C3\u00A9todo permite a realiza\u00C3\u00A7\u00C3\u00A3o do cancelamento de uma determinada conta a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ContaApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).

var idStatus = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Novo Status Conta.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.cancelarUsingPOST1(id, idStatus, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da conta (id). | 
 **idStatus** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Novo Status Conta. | 

### Return type

[**ContaResponse**](ContaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarBoletoEmitidoUsingGET"></a>
# **consultarBoletoEmitidoUsingGET**
> BoletoResponse consultarBoletoEmitidoUsingGET(id)

Consulta os dados de um determinado boleto da fatura

Este recurso consulta um boleto da fatura

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ContaApi()

var id = 789; // {Integer} Id Conta


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarBoletoEmitidoUsingGET(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| Id Conta | 

### Return type

[**BoletoResponse**](BoletoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarDividaAtualizadaClienteUsingGET"></a>
# **consultarDividaAtualizadaClienteUsingGET**
> DividaClienteResponse consultarDividaAtualizadaClienteUsingGET(id, opts)

Consulta a d\u00C3\u00ADvida atualizada do cliente

Este recurso consulta a d\u00C3\u00ADvida atualizada do cliente

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ContaApi()

var id = 789; // {Integer} Id Conta

var opts = { 
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
  'dataVencimento': "dataVencimento_example", // {String} Data do vencimento
  'idEscritorioCobranca': 789 // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do escrit\u00C3\u00B3rio de cobran\u00C3\u00A7a
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarDividaAtualizadaClienteUsingGET(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| Id Conta | 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 
 **dataVencimento** | **String**| Data do vencimento | [optional] 
 **idEscritorioCobranca** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do escrit\u00C3\u00B3rio de cobran\u00C3\u00A7a | [optional] 

### Return type

[**DividaClienteResponse**](DividaClienteResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarFaturaConsignadaAbertaUsingGET"></a>
# **consultarFaturaConsignadaAbertaUsingGET**
> DetalhesFaturaConsignadaResponse consultarFaturaConsignadaAbertaUsingGET(id, opts)

Consultar a fatura consignadas abertas da conta

Atrav\u00C3\u00A9s desta opera\u00C3\u00A7\u00C3\u00A3o os Emissores ou Portadores poder\u00C3\u00A3o consultar a fatura consignada em aberto

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ContaApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).

var opts = { 
  'dataVencimento': "dataVencimento_example" // {String} Data Vencimento
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarFaturaConsignadaAbertaUsingGET(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id). | 
 **dataVencimento** | **String**| Data Vencimento | [optional] 

### Return type

[**DetalhesFaturaConsignadaResponse**](DetalhesFaturaConsignadaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarFaturaConsignadaUsingGET"></a>
# **consultarFaturaConsignadaUsingGET**
> FaturaConsignadaDetalheResponse consultarFaturaConsignadaUsingGET(id, idFatura)

Apresenta dados de uma determinada fatura consignada

Atrav\u00C3\u00A9s desta opera\u00C3\u00A7\u00C3\u00A3o os Emissores ou Portadores poder\u00C3\u00A3o consultar uma fatura, atrav\u00C3\u00A9s do id da conta e o id da fatura.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ContaApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).

var idFatura = 789; // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da fatura (id_fatura).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarFaturaConsignadaUsingGET(id, idFatura, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id). | 
 **idFatura** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da fatura (id_fatura). | 

### Return type

[**FaturaConsignadaDetalheResponse**](FaturaConsignadaDetalheResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarFaturaUsingGET"></a>
# **consultarFaturaUsingGET**
> DetalhesFaturaResponse consultarFaturaUsingGET(id, dataVencimento)

Consultar Fatura da Conta

Atrav\u00C3\u00A9s desta opera\u00C3\u00A7\u00C3\u00A3o os Emissores ou Portadores poder\u00C3\u00A3o consultar os detalhes de uma fatura vinculados a uma determinada conta.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ContaApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).

var dataVencimento = "dataVencimento_example"; // {String} Data Vencimento.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarFaturaUsingGET(id, dataVencimento, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id). | 
 **dataVencimento** | **String**| Data Vencimento. | 

### Return type

[**DetalhesFaturaResponse**](DetalhesFaturaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarLancamentosFuturosFaturaUsingGET"></a>
# **consultarLancamentosFuturosFaturaUsingGET**
> DetalhesFaturaResponse consultarLancamentosFuturosFaturaUsingGET(id, opts)

Consultar Lan\u00C3\u00A7amentos Futuros da Fatura de uma Conta

Atrav\u00C3\u00A9s desta opera\u00C3\u00A7\u00C3\u00A3o os Emissores ou Portadores poder\u00C3\u00A3o consultar os detalhes dos lan\u00C3\u00A7amentos futuros de uma fatura vinculados a uma determinada conta.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ContaApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).

var opts = { 
  'dataVencimento': "dataVencimento_example" // {String} Data Vencimento
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarLancamentosFuturosFaturaUsingGET(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id). | 
 **dataVencimento** | **String**| Data Vencimento | [optional] 

### Return type

[**DetalhesFaturaResponse**](DetalhesFaturaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarLimiteDisponibilidadeUsingGET1"></a>
# **consultarLimiteDisponibilidadeUsingGET1**
> LimiteDisponibilidadeResponse consultarLimiteDisponibilidadeUsingGET1(id)

Apresenta os limites da conta

Este m\u00C3\u00A9todo permite consultar os Limites configurados para uma determinada Conta, a partir do c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ContaApi()

var id = 789; // {Integer} Id Conta


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarLimiteDisponibilidadeUsingGET1(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| Id Conta | 

### Return type

[**LimiteDisponibilidadeResponse**](LimiteDisponibilidadeResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarTaxasTarifasUsingGET"></a>
# **consultarTaxasTarifasUsingGET**
> PageTaxasRefinanciamentoResponse consultarTaxasTarifasUsingGET(id, opts)

Permite consultar a partir do ID da conta as taxas e tarifas

Esta opera\u00C3\u00A7\u00C3\u00A3o tem como objetivo permitir que os Emissores consultem as taxas e tarifas da conta

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ContaApi()

var id = 789; // {Integer} ID da conta a ser consultada.

var opts = { 
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56 // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarTaxasTarifasUsingGET(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| ID da conta a ser consultada. | 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 

### Return type

[**PageTaxasRefinanciamentoResponse**](PageTaxasRefinanciamentoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET24"></a>
# **consultarUsingGET24**
> TransferenciaBancariaResponse consultarUsingGET24(id, idTransferencia, opts)

Consultar uma transfer\u00C3\u00AAncia banc\u00C3\u00A1ria para um banco

Este recurso permite consultar os detalhes de uma determinada transfer\u00C3\u00AAncia de cr\u00C3\u00A9dito realizada para uma conta banc\u00C3\u00A1ria. De modo geral, esta opera\u00C3\u00A7\u00C3\u00A3o poder\u00C3\u00A1 ser utilizada para uma consulta simples destes detalhes ou para realizar a montagem de um comprovante de 2\u00C2\u00AA via de transfer\u00C3\u00AAncia entre contas.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ContaApi()

var id = 789; // {Integer} Id Conta

var idTransferencia = 789; // {Integer} Id Transfer\u00C3\u00AAncia

var opts = { 
  'idContaBancariaDestino': 789 // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta banc\u00C3\u00A1ria de destino (id)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET24(id, idTransferencia, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| Id Conta | 
 **idTransferencia** | **Integer**| Id Transfer\u00C3\u00AAncia | 
 **idContaBancariaDestino** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta banc\u00C3\u00A1ria de destino (id) | [optional] 

### Return type

[**TransferenciaBancariaResponse**](TransferenciaBancariaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET25"></a>
# **consultarUsingGET25**
> PageTransferenciaResponse consultarUsingGET25(id, idTransferencia)

Consulta os detalhes de uma determinada transfer\u00C3\u00AAncia

Este m\u00C3\u00A9todo permite consultar os detalhes de uma determinada transfer\u00C3\u00AAncia de cr\u00C3\u00A9dito realizada entre contas.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ContaApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).

var idTransferencia = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da transfer\u00C3\u00AAncia (id_transferencia).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET25(id, idTransferencia, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da conta (id). | 
 **idTransferencia** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da transfer\u00C3\u00AAncia (id_transferencia). | 

### Return type

[**PageTransferenciaResponse**](PageTransferenciaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET5"></a>
# **consultarUsingGET5**
> ContaDetalheResponse consultarUsingGET5(id)

Apresenta dados de uma determinada conta

Este m\u00C3\u00A9todo permite consultar dados de uma determinada conta a partir de seu codigo de identifica\u00C3\u00A7\u00C3\u00A3o (id).

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ContaApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET5(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id). | 

### Return type

[**ContaDetalheResponse**](ContaDetalheResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="desativarEnvioFaturaEmailUsingPOST"></a>
# **desativarEnvioFaturaEmailUsingPOST**
> Object desativarEnvioFaturaEmailUsingPOST(id)

Desativa o servi\u00C3\u00A7o de envio de fatura por email

Este recurso desativa o servi\u00C3\u00A7o de envio de fatura por email

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ContaApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.desativarEnvioFaturaEmailUsingPOST(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id). | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="gerarBoletoRecargaUsingPOST"></a>
# **gerarBoletoRecargaUsingPOST**
> BoletoResponse gerarBoletoRecargaUsingPOST(id, valor, dataVencimento)

Gera um boleto de recarga

Este recurso gera um boleto de recarga

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ContaApi()

var id = 789; // {Integer} Id Conta

var valor = 3.4; // {Number} Atributo que representa o valor do Boleto Emitido

var dataVencimento = "dataVencimento_example"; // {String} Atributo que representa a data de vencimento do boleto


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.gerarBoletoRecargaUsingPOST(id, valor, dataVencimento, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| Id Conta | 
 **valor** | [**Number**](.md)| Atributo que representa o valor do Boleto Emitido | 
 **dataVencimento** | **String**| Atributo que representa a data de vencimento do boleto | 

### Return type

[**BoletoResponse**](BoletoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="gerarCartaoUsingPOST"></a>
# **gerarCartaoUsingPOST**
> CartaoImpressaoResponse gerarCartaoUsingPOST(id, idPessoa, opts)

Realiza a gera\u00C3\u00A7\u00C3\u00A3o de um novo cart\u00C3\u00A3o para impress\u00C3\u00A3o avulsa

Este recurso permite que seja gerado um novo Cart\u00C3\u00A3o para um determinado Portador que esteja vinculado a uma Conta. Para isso, ser\u00C3\u00A1 preciso informar o c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da Conta (id), o idPessoa do Portador e o idTipoPlastico do Cart\u00C3\u00A3o que dever\u00C3\u00A1 ser gerado para impress\u00C3\u00A3o. Esta funcionalidade poder\u00C3\u00A1 ser utilizada para realizar a impress\u00C3\u00A3o de cart\u00C3\u00B5es em Lojas, Quiosques, Escrit\u00C3\u00B3rios, Terminais de Auto Atendimento, ou outro local que o Emissor escolher, desde que se possua uma impressora de Cart\u00C3\u00B5es habilidade para o fazer, no local.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ContaApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).

var idPessoa = 789; // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da pessoa (id).

var opts = { 
  'idTipoPlastico': 789 // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do TipoPlastico (id).
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.gerarCartaoUsingPOST(id, idPessoa, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id). | 
 **idPessoa** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da pessoa (id). | 
 **idTipoPlastico** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do TipoPlastico (id). | [optional] 

### Return type

[**CartaoImpressaoResponse**](CartaoImpressaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="gerarCartaoVirtualUsingPOST"></a>
# **gerarCartaoVirtualUsingPOST**
> CartaoImpressaoResponse gerarCartaoVirtualUsingPOST(id, dataValidade)

Realiza a gera\u00C3\u00A7\u00C3\u00A3o de um cart\u00C3\u00A3o virtual

Este recurso permite que seja gerado um Cart\u00C3\u00A3o virtual para um determinado Portador que esteja vinculado a uma Conta. Para isso, ser\u00C3\u00A1 preciso informar o c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da Conta (id). Esta funcionalidade poder\u00C3\u00A1 ser utilizada para realizar a cria\u00C3\u00A7\u00C3\u00A3o de cart\u00C3\u00B5es virtuaes atraves de um app.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ContaApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).

var dataValidade = "dataValidade_example"; // {String} Data de Validade


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.gerarCartaoVirtualUsingPOST(id, dataValidade, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id). | 
 **dataValidade** | **String**| Data de Validade | 

### Return type

[**CartaoImpressaoResponse**](CartaoImpressaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarFaturasConsignadasUsingGET"></a>
# **listarFaturasConsignadasUsingGET**
> PageFaturaConsignadaResponse listarFaturasConsignadasUsingGET(id, opts)

Lista as faturas consignadas da conta

Atrav\u00C3\u00A9s desta opera\u00C3\u00A7\u00C3\u00A3o os Emissores ou Portadores poder\u00C3\u00A3o consultar todo o Hist\u00C3\u00B3rico de Faturas vinculados a uma determinada Conta, independentemente do valor delas.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ContaApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).

var opts = { 
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
  'dataVencimento': "dataVencimento_example" // {String} Apresenta a data de vencimento da fatura.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarFaturasConsignadasUsingGET(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id). | 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 
 **dataVencimento** | **String**| Apresenta a data de vencimento da fatura. | [optional] 

### Return type

[**PageFaturaConsignadaResponse**](PageFaturaConsignadaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarFaturasUsingGET"></a>
# **listarFaturasUsingGET**
> PageFaturaResponse listarFaturasUsingGET(id, opts)

Lista as faturas da conta

Atrav\u00C3\u00A9s desta opera\u00C3\u00A7\u00C3\u00A3o os Emissores ou Portadores poder\u00C3\u00A3o consultar todo o Hist\u00C3\u00B3rico de Faturas vinculados a uma determinada Conta, independentemente do valor delas.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ContaApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).

var opts = { 
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
  'dataVencimento': "dataVencimento_example" // {String} Data de Vencimento da Fatura.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarFaturasUsingGET(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id). | 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 
 **dataVencimento** | **String**| Data de Vencimento da Fatura. | [optional] 

### Return type

[**PageFaturaResponse**](PageFaturaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarHistoricoAlteracoesLimitesUsingGET"></a>
# **listarHistoricoAlteracoesLimitesUsingGET**
> PageHistoricoEventosResponse listarHistoricoAlteracoesLimitesUsingGET(id, opts)

Lista o hist\u00C3\u00B3rico de altera\u00C3\u00A7\u00C3\u00B5es de limites da conta

Este recurso consulta o hist\u00C3\u00B3rico com as altera\u00C3\u00A7\u00C3\u00B5es de limites da conta informada

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ContaApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).

var opts = { 
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56 // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarHistoricoAlteracoesLimitesUsingGET(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id). | 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 

### Return type

[**PageHistoricoEventosResponse**](PageHistoricoEventosResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarHistoricoAssessoriaUsingGET"></a>
# **listarHistoricoAssessoriaUsingGET**
> PageHistoricoAssessoriaResponse listarHistoricoAssessoriaUsingGET(id, opts)

Lista o hist\u00C3\u00B3rico de entradas/sa\u00C3\u00ADdas de assessorias de cobran\u00C3\u00A7a

Permite listar todos os registros de entrada e sa\u00C3\u00ADda da Conta em arquivos de integra\u00C3\u00A7\u00C3\u00A3o com empresas de assessorias de cobran\u00C3\u00A7a a partir do c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (idConta).

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ContaApi()

var id = 789; // {Integer} Id Conta

var opts = { 
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56 // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarHistoricoAssessoriaUsingGET(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| Id Conta | 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 

### Return type

[**PageHistoricoAssessoriaResponse**](PageHistoricoAssessoriaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarHistoricoAtrasosFaturasUsingGET"></a>
# **listarHistoricoAtrasosFaturasUsingGET**
> PageHistoricoAtrasoFaturaResponse listarHistoricoAtrasosFaturasUsingGET(id)

Lista o historico de atrasos das faturas

Este recurso lista o hist\u00C3\u00B3rico do pagamento de faturas em atraso

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ContaApi()

var id = 789; // {Integer} Id Conta


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarHistoricoAtrasosFaturasUsingGET(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| Id Conta | 

### Return type

[**PageHistoricoAtrasoFaturaResponse**](PageHistoricoAtrasoFaturaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarNaoProcessadasUsingGET"></a>
# **listarNaoProcessadasUsingGET**
> PageTransacoesCorrentesResponse listarNaoProcessadasUsingGET(id, opts)

Lista as transa\u00C3\u00A7\u00C3\u00B5es n\u00C3\u00A3o processadas da conta

Este m\u00C3\u00A9todo permite que sejam listadas todas as transa\u00C3\u00A7\u00C3\u00B5es n\u00C3\u00A3o processadas da Conta.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ContaApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).

var opts = { 
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
  'dataInicio': "dataInicio_example", // {String} Data de in\u00C3\u00ADcio da consulta do extrato no formato yyyy-MM-dd (Par\u00C3\u00A2mentro Ignorado se dataFim n\u00C3\u00A3o for definida).
  'dataFim': "dataFim_example" // {String} Data fim da consulta do extrato no formato yyyy-MM-dd  (Par\u00C3\u00A2mentro Ignorado se dataInicio n\u00C3\u00A3o for definida).
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarNaoProcessadasUsingGET(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da conta (id). | 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 
 **dataInicio** | **String**| Data de in\u00C3\u00ADcio da consulta do extrato no formato yyyy-MM-dd (Par\u00C3\u00A2mentro Ignorado se dataFim n\u00C3\u00A3o for definida). | [optional] 
 **dataFim** | **String**| Data fim da consulta do extrato no formato yyyy-MM-dd  (Par\u00C3\u00A2mentro Ignorado se dataInicio n\u00C3\u00A3o for definida). | [optional] 

### Return type

[**PageTransacoesCorrentesResponse**](PageTransacoesCorrentesResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarProcessadasUsingGET"></a>
# **listarProcessadasUsingGET**
> PageTransacoesCorrentesResponse listarProcessadasUsingGET(id, opts)

Lista as transa\u00C3\u00A7\u00C3\u00B5es processadas da conta

Este m\u00C3\u00A9todo permite que sejam listadas todas as transa\u00C3\u00A7\u00C3\u00B5es processadas da Conta.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ContaApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).

var opts = { 
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
  'dataVencimento': "dataVencimento_example", // {String} Data de vencimento do extrato no formato yyyy-MM-dd.
  'dataInicio': "dataInicio_example", // {String} Data de in\u00C3\u00ADcio da consulta do extrato no formato yyyy-MM-dd (Ignorado quando o par\u00C3\u00A2mentro dataVencimento \u00C3\u00A9 usado).
  'dataFim': "dataFim_example" // {String} Data fim da consulta do extrato no formato yyyy-MM-dd  (Ignorado quando o par\u00C3\u00A2mentro dataVencimento \u00C3\u00A9 usado).
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarProcessadasUsingGET(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da conta (id). | 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 
 **dataVencimento** | **String**| Data de vencimento do extrato no formato yyyy-MM-dd. | [optional] 
 **dataInicio** | **String**| Data de in\u00C3\u00ADcio da consulta do extrato no formato yyyy-MM-dd (Ignorado quando o par\u00C3\u00A2mentro dataVencimento \u00C3\u00A9 usado). | [optional] 
 **dataFim** | **String**| Data fim da consulta do extrato no formato yyyy-MM-dd  (Ignorado quando o par\u00C3\u00A2mentro dataVencimento \u00C3\u00A9 usado). | [optional] 

### Return type

[**PageTransacoesCorrentesResponse**](PageTransacoesCorrentesResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET28"></a>
# **listarUsingGET28**
> PageTransferenciaBancariaResponse listarUsingGET28(id, opts)

Listar as transfer\u00C3\u00AAncias banc\u00C3\u00A1rias realizadas

Este recurso tem como objetivo permitir que o portador de um Cart\u00C3\u00A3o possa consultar uma lista das Transfer\u00C3\u00AAncias Banc\u00C3\u00A1rias para os Favorecidos cadastrados.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ContaApi()

var id = 789; // {Integer} Id Conta

var opts = { 
  'idContaBancariaDestino': 789, // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta banc\u00C3\u00A1ria de destino (id)
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56 // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET28(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| Id Conta | 
 **idContaBancariaDestino** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta banc\u00C3\u00A1ria de destino (id) | [optional] 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 

### Return type

[**PageTransferenciaBancariaResponse**](PageTransferenciaBancariaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET29"></a>
# **listarUsingGET29**
> PageTransferenciaResponse listarUsingGET29(id, opts)

Lista as transfer\u00C3\u00AAncias realizadas pela conta

Este m\u00C3\u00A9todo permite que sejam listadas as transfer\u00C3\u00AAncias realizadas pela conta existentes na base do emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ContaApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).

var opts = { 
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
  'idTransferencia': 789, // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da transfer\u00C3\u00AAncia (id).
  'idContaOrigem': 789, // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta em que o valor ser\u00C3\u00A1 debitado para a transfer\u00C3\u00AAncia. (id).
  'idContaDestino': 789, // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta em que o valor ser\u00C3\u00A1 creditado para a transfer\u00C3\u00AAncia. (id).
  'valorTransferencia': 3.4, // {Number} Valor estabelecido para ser transferido.
  'dataTransferencia': "dataTransferencia_example" // {String} Data estabelecida para ocorrer a transfer\u00C3\u00AAncia.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET29(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da conta (id). | 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 
 **idTransferencia** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da transfer\u00C3\u00AAncia (id). | [optional] 
 **idContaOrigem** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta em que o valor ser\u00C3\u00A1 debitado para a transfer\u00C3\u00AAncia. (id). | [optional] 
 **idContaDestino** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta em que o valor ser\u00C3\u00A1 creditado para a transfer\u00C3\u00AAncia. (id). | [optional] 
 **valorTransferencia** | [**Number**](.md)| Valor estabelecido para ser transferido. | [optional] 
 **dataTransferencia** | **String**| Data estabelecida para ocorrer a transfer\u00C3\u00AAncia. | [optional] 

### Return type

[**PageTransferenciaResponse**](PageTransferenciaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET7"></a>
# **listarUsingGET7**
> PageContaResponse listarUsingGET7(opts)

Lista contas existentes na base de dados do Emissor

Este recurso permite listar contas existentes na base de dados do Emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ContaApi()

var opts = { 
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
  'idProduto': 789, // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do produto ao qual a conta faz parte. (id).
  'idOrigemComercial': 789, // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Origem Comercial (id) que deu origem a Conta.
  'idPessoa': 789, // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Pessoa Titular da Conta (id).
  'idStatusConta': 789, // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Produto a qual o cart\u00C3\u00A3o pertence (id).
  'diaVencimento': 56, // {Integer} Apresenta o dia de vencimento.
  'melhorDiaCompra': 56, // {Integer} Apresenta o melhor dia de compra.
  'dataStatusConta': "dataStatusConta_example", // {String} Apresenta a data em que o idStatusConta atual fora atribu\u00C3\u00ADdo para ela.
  'dataCadastro': "dataCadastro_example", // {String} Apresenta a data em que o cart\u00C3\u00A3o foi gerado.
  'dataUltimaAlteracaoVencimento': "dataUltimaAlteracaoVencimento_example" // {String} Apresenta a data da ultima altera\u00C3\u00A7\u00C3\u00A3o de vencimento.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET7(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 
 **idProduto** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do produto ao qual a conta faz parte. (id). | [optional] 
 **idOrigemComercial** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Origem Comercial (id) que deu origem a Conta. | [optional] 
 **idPessoa** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Pessoa Titular da Conta (id). | [optional] 
 **idStatusConta** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Produto a qual o cart\u00C3\u00A3o pertence (id). | [optional] 
 **diaVencimento** | **Integer**| Apresenta o dia de vencimento. | [optional] 
 **melhorDiaCompra** | **Integer**| Apresenta o melhor dia de compra. | [optional] 
 **dataStatusConta** | **String**| Apresenta a data em que o idStatusConta atual fora atribu\u00C3\u00ADdo para ela. | [optional] 
 **dataCadastro** | **String**| Apresenta a data em que o cart\u00C3\u00A3o foi gerado. | [optional] 
 **dataUltimaAlteracaoVencimento** | **String**| Apresenta a data da ultima altera\u00C3\u00A7\u00C3\u00A3o de vencimento. | [optional] 

### Return type

[**PageContaResponse**](PageContaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="reativarUsingPOST1"></a>
# **reativarUsingPOST1**
> Object reativarUsingPOST1(id)

Realiza a reativa\u00C3\u00A7\u00C3\u00A3o de contas.

Este recurso permite reativar contas. Para isso, ser\u00C3\u00A1 preciso informar o c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da Conta (id).

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ContaApi()

var id = 789; // {Integer} Id Conta


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.reativarUsingPOST1(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| Id Conta | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="transacoesUsingGET"></a>
# **transacoesUsingGET**
> PageTransacaoResponse transacoesUsingGET(id, opts)

Permite listar uma linha do tempo com os eventos da conta

Esta opera\u00C3\u00A7\u00C3\u00A3o tem como objetivo permitir a listagem, em formato de timeline, dos eventos vinculados a uma detemrinada conta. Transa\u00C3\u00A7\u00C3\u00B5es, fechamento da fatura, pagamentos, gera\u00C3\u00A7\u00C3\u00A3o de cart\u00C3\u00B5es e altera\u00C3\u00A7\u00C3\u00A3o de limite s\u00C3\u00A3o exemplos de eventos contemplados por esta funcionalidade. Neste m\u00C3\u00A9todo, as opera\u00C3\u00A7\u00C3\u00B5es s\u00C3\u00A3o ordenadas de forma decrescente.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ContaApi()

var id = 789; // {Integer} Id Conta

var opts = { 
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56 // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.transacoesUsingGET(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| Id Conta | 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 

### Return type

[**PageTransacaoResponse**](PageTransacaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="transferirUsingPOST"></a>
# **transferirUsingPOST**
> TransferenciaBancariaResponse transferirUsingPOST(id, transferenciaBancariaPersist)

Realizar transfer\u00C3\u00AAncia banc\u00C3\u00A1ria do cart\u00C3\u00A3o para contas banc\u00C3\u00A1rias

Este recurso tem como objetivo permitir que o portador de um cart\u00C3\u00A3o possa realizar a transfer\u00C3\u00AAncia de cr\u00C3\u00A9dito para uma conta banc\u00C3\u00A1ria. Assim, o valor do cr\u00C3\u00A9dito somado a tarifa para transfer\u00C3\u00AAncia, quando praticada pelo emissor, ser\u00C3\u00A1 debitado da conta de origem, se houver saldo suficiente, e ser\u00C3\u00A1 creditado na conta banc\u00C3\u00A1ria de destino.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ContaApi()

var id = 789; // {Integer} Id Conta

var transferenciaBancariaPersist = new Pier.TransferenciaBancariaPersist(); // {TransferenciaBancariaPersist} transferenciaBancariaPersist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.transferirUsingPOST(id, transferenciaBancariaPersist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| Id Conta | 
 **transferenciaBancariaPersist** | [**TransferenciaBancariaPersist**](TransferenciaBancariaPersist.md)| transferenciaBancariaPersist | 

### Return type

[**TransferenciaBancariaResponse**](TransferenciaBancariaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="transferirUsingPOST1"></a>
# **transferirUsingPOST1**
> PageTransferenciaResponse transferirUsingPOST1(id, idContaDestino, valorTransferencia)

Realiza uma transfer\u00C3\u00AAncia de Cr\u00C3\u00A9dito para outro cliente do mesmo Emissor

Este m\u00C3\u00A9todo permite que um portador de um cart\u00C3\u00A3o possa realizar auma transfer\u00C3\u00AAncia de cr\u00C3\u00A9dito para outro cliente do mesmo emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ContaApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da conta do cliente portador do cart\u00C3\u00A3o que ser\u00C3\u00A1 debitado (id).

var idContaDestino = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do cliente portador do cart\u00C3\u00A3o que ser\u00C3\u00A1 creditado (id).

var valorTransferencia = 3.4; // {Number} Valor da Transfer\u00C3\u00AAncia.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.transferirUsingPOST1(id, idContaDestino, valorTransferencia, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da conta do cliente portador do cart\u00C3\u00A3o que ser\u00C3\u00A1 debitado (id). | 
 **idContaDestino** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do cliente portador do cart\u00C3\u00A3o que ser\u00C3\u00A1 creditado (id). | 
 **valorTransferencia** | [**Number**](.md)| Valor da Transfer\u00C3\u00AAncia. | 

### Return type

[**PageTransferenciaResponse**](PageTransferenciaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

