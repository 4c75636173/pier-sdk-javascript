# Pier.ContaApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ajustarContaUsingPOST1**](ContaApi.md#ajustarContaUsingPOST1) | **POST** /api/contas/{id}/ajustes-financeiros | Lan\u00E7a um ajuste para a conta do id informado
[**alterarProdutoUsingPOST**](ContaApi.md#alterarProdutoUsingPOST) | **POST** /api/contas/{id}/alterar-produto | Altera o produto associado \u00E0 conta.
[**alterarTitularUsingPOST**](ContaApi.md#alterarTitularUsingPOST) | **POST** /api/contas/{id}/alterar-titular | Realiza a altera\u00E7\u00E3o de uma Pessoa tilular da conta
[**alterarVencimentoUsingPUT**](ContaApi.md#alterarVencimentoUsingPUT) | **PUT** /api/contas/{id}/alterar-vencimento | Realiza a altera\u00E7\u00E3o do dia de vencimento das faturas da conta
[**ativarAnuidadeUsingPOST**](ContaApi.md#ativarAnuidadeUsingPOST) | **POST** /api/contas/{id}/atribuir-anuidade | Atribuir Anuidade
[**ativarEnvioFaturaEmailUsingPOST**](ContaApi.md#ativarEnvioFaturaEmailUsingPOST) | **POST** /api/contas/{id}/ativar-fatura-email |  Ativa o servi\u00E7o de envio de fatura por email
[**bloquearUsingPOST1**](ContaApi.md#bloquearUsingPOST1) | **POST** /api/contas/{id}/bloquear | Realiza o bloqueio de uma determinada Conta
[**cancelarUsingPOST1**](ContaApi.md#cancelarUsingPOST1) | **POST** /api/contas/{id}/cancelar | Realiza o cancelamento de uma determinada Conta
[**consultarBeneficioPagamentoAtrasoUsingGET**](ContaApi.md#consultarBeneficioPagamentoAtrasoUsingGET) | **GET** /api/contas/{id}/consultar-beneficio-pagamento-atraso | Apresenta a data m\u00E1xima para pagamento da fatura em atraso para receber o benef\u00EDcio.
[**consultarBoletoEmitidoUsingGET**](ContaApi.md#consultarBoletoEmitidoUsingGET) | **GET** /api/contas/{id}/consultar-dados-pagamento-fatura | Consulta os dados de um determinado boleto da fatura
[**consultarDividaAtualizadaClienteUsingGET**](ContaApi.md#consultarDividaAtualizadaClienteUsingGET) | **GET** /api/contas/{id}/recuperar-divida-atualizada | Consulta a d\u00EDvida atualizada do cliente
[**consultarTaxasTarifasUsingGET**](ContaApi.md#consultarTaxasTarifasUsingGET) | **GET** /api/contas/{id}/consultar-taxas-tarifas | Permite consultar a partir do ID da conta as taxas e tarifas
[**consultarUsingGET13**](ContaApi.md#consultarUsingGET13) | **GET** /api/contas/{id} | Apresenta dados de uma determinada conta
[**consultarUsingGET42**](ContaApi.md#consultarUsingGET42) | **GET** /api/contas/{id}/transferencias-creditos-cartoes/{id_transferencia} | Consulta os detalhes de uma determinada transfer\u00EAncia
[**desativarEnvioFaturaEmailUsingPOST**](ContaApi.md#desativarEnvioFaturaEmailUsingPOST) | **POST** /api/contas/{id}/desativar-fatura-email | Desativa o servi\u00E7o de envio de fatura por email
[**gerarBoletoRecargaUsingPOST**](ContaApi.md#gerarBoletoRecargaUsingPOST) | **POST** /api/contas/{id}/gerar-boleto-recarga | Gera um boleto de recarga
[**gerarCartaoEmbossingUsingPOST**](ContaApi.md#gerarCartaoEmbossingUsingPOST) | **POST** /api/contas/{id}/gerar-cartao-grafica | Realiza o envio para gera\u00E7\u00E3o de um novo cart\u00E3o na gr\u00E1fica
[**gerarCartaoProvisorioUsingPOST**](ContaApi.md#gerarCartaoProvisorioUsingPOST) | **POST** /api/contas/{id}/gerar-cartao-provisorio | Realiza a gera\u00E7\u00E3o de um cart\u00E3o provisorio
[**gerarCartaoUsingPOST**](ContaApi.md#gerarCartaoUsingPOST) | **POST** /api/contas/{id}/pessoas/{id_pessoa}/gerar-cartao | Realiza a gera\u00E7\u00E3o de um novo cart\u00E3o para impress\u00E3o avulsa
[**gerarCartaoVirtualUsingPOST**](ContaApi.md#gerarCartaoVirtualUsingPOST) | **POST** /api/contas/{id}/gerar-cartao-virtual | Realiza a gera\u00E7\u00E3o de um cart\u00E3o virtual
[**listarHistoricoAlteracoesLimitesUsingGET**](ContaApi.md#listarHistoricoAlteracoesLimitesUsingGET) | **GET** /api/contas/{id}/historicos-alteracoes-limites | Lista o hist\u00F3rico de altera\u00E7\u00F5es de limites da conta
[**listarHistoricoAssessoriaUsingGET**](ContaApi.md#listarHistoricoAssessoriaUsingGET) | **GET** /api/contas/{id}/historicos-assessorias-cobranca | Lista o hist\u00F3rico de entradas/sa\u00EDdas de assessorias de cobran\u00E7a
[**listarHistoricoAtrasosFaturasUsingGET**](ContaApi.md#listarHistoricoAtrasosFaturasUsingGET) | **GET** /api/contas/{id}/historicos-faturas-atrasos | Lista o historico de atrasos das faturas
[**listarNaoProcessadasUsingGET**](ContaApi.md#listarNaoProcessadasUsingGET) | **GET** /api/contas/{id}/transacoes/listar-nao-processadas | Lista as transa\u00E7\u00F5es n\u00E3o processadas da conta
[**listarProcessadasUsingGET**](ContaApi.md#listarProcessadasUsingGET) | **GET** /api/contas/{id}/transacoes/listar-processadas | Lista as transa\u00E7\u00F5es processadas da conta
[**listarUsingGET17**](ContaApi.md#listarUsingGET17) | **GET** /api/contas | Lista contas existentes na base de dados do Emissor
[**listarUsingGET50**](ContaApi.md#listarUsingGET50) | **GET** /api/contas/{id}/transferencias-creditos-cartoes | Lista as transfer\u00EAncias realizadas pela conta
[**reativarUsingPOST1**](ContaApi.md#reativarUsingPOST1) | **POST** /api/contas/{id}/reativar | Realiza a reativa\u00E7\u00E3o de contas.
[**simularEmprestimoFinanciamentoUsingPOST**](ContaApi.md#simularEmprestimoFinanciamentoUsingPOST) | **POST** /api/contas/{id}/simular-emprestimos-financiamentos | Simula valores de presta\u00E7\u00F5es de empr\u00E9stimos/financiamentos
[**transacoesUsingGET**](ContaApi.md#transacoesUsingGET) | **GET** /api/contas/{id}/timeline | Permite listar uma linha do tempo com os eventos da conta
[**transferirUsingPOST1**](ContaApi.md#transferirUsingPOST1) | **POST** /api/contas/{id}/transferencias-creditos-cartoes | Realiza uma transfer\u00EAncia de Cr\u00E9dito para outro cliente do mesmo Emissor


<a name="ajustarContaUsingPOST1"></a>
# **ajustarContaUsingPOST1**
> AjusteFinanceiroResponse ajustarContaUsingPOST1(id, idTipoAjuste, dataAjuste, valorAjuste, opts)

Lan\u00E7a um ajuste para a conta do id informado

Este recurso insere um ajuste para a conta do id informado

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ContaApi()

var id = 789; // {Integer} Id Conta

var idTipoAjuste = 789; // {Integer} C\u00F3digo identificador do tipo de ajuste.

var dataAjuste = "dataAjuste_example"; // {String} Data do ajuste no formato yyyy-MM-dd'T'HH:mm:ss.SSSZ.

var valorAjuste = 3.4; // {Number} Valor do ajuste

var opts = { 
  'identificadorExterno': "identificadorExterno_example" // {String} Identificador Externo
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.ajustarContaUsingPOST1(id, idTipoAjuste, dataAjuste, valorAjuste, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| Id Conta | 
 **idTipoAjuste** | **Integer**| C\u00F3digo identificador do tipo de ajuste. | 
 **dataAjuste** | **String**| Data do ajuste no formato yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ. | 
 **valorAjuste** | [**Number**](.md)| Valor do ajuste | 
 **identificadorExterno** | **String**| Identificador Externo | [optional] 

### Return type

[**AjusteFinanceiroResponse**](AjusteFinanceiroResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="alterarProdutoUsingPOST"></a>
# **alterarProdutoUsingPOST**
> &#39;String&#39; alterarProdutoUsingPOST(id, request)

Altera o produto associado \u00E0 conta.

O recurso permite fazer modifica\u00E7\u00E3o do produto associado \u00E0 conta.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ContaApi()

var id = 789; // {Integer} C\u00F3digo de identifica\u00E7\u00E3o da conta (id).

var request = new Pier.AlterarProdutoRequest(); // {AlterarProdutoRequest} request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.alterarProdutoUsingPOST(id, request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00F3digo de identifica\u00E7\u00E3o da conta (id). | 
 **request** | [**AlterarProdutoRequest**](AlterarProdutoRequest.md)| request | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="alterarTitularUsingPOST"></a>
# **alterarTitularUsingPOST**
> ContaResponse alterarTitularUsingPOST(id, idPessoa)

Realiza a altera\u00E7\u00E3o de uma Pessoa tilular da conta

Esta m\u00E9todo permite altera a pessoa de uma conta.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ContaApi()

var id = 789; // {Integer} C\u00F3digo de Identifica\u00E7\u00E3o da Conta (id)

var idPessoa = 789; // {Integer} C\u00F3digo de identifica\u00E7\u00E3o de uma Pessoa (id).


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
 **id** | **Integer**| C\u00F3digo de Identifica\u00E7\u00E3o da Conta (id) | 
 **idPessoa** | **Integer**| C\u00F3digo de identifica\u00E7\u00E3o de uma Pessoa (id). | 

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

Realiza a altera\u00E7\u00E3o do dia de vencimento das faturas da conta

Esse recurso permite alterar o vencimento para no m\u00E1ximo at\u00E9 30 dias ap\u00F3s data atual de uma conta especifica no PIER, respeitando o par\u00E2metro de intervalor entre as modifica\u00E7\u00F5es do vencimento informado pelo emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ContaApi()

var id = 789; // {Integer} C\u00F3digo de identifica\u00E7\u00E3o da conta (id).

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
 **id** | **Integer**| C\u00F3digo de identifica\u00E7\u00E3o da conta (id). | 
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

Esse recurso permite configurar qual a regra de Anuidade que ser\u00E1 atribu\u00EDda a uma determinada Conta.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ContaApi()

var id = 789; // {Integer} C\u00F3digo de identifica\u00E7\u00E3o da conta (id).

var idAnuidade = 789; // {Integer} Identificador da anuidade

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00E7\u00E3o dos registros.
  'page': 56, // {Integer} P\u00E1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50)
  'DDD': "DDD_example", // {String} DDD do celular
  'celular': "celular_example", // {String} N\u00FAmero do celular
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
 **id** | **Integer**| C\u00F3digo de identifica\u00E7\u00E3o da conta (id). | 
 **idAnuidade** | **Integer**| Identificador da anuidade | 
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00E7\u00E3o dos registros. | [optional] 
 **page** | **Integer**| P\u00E1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50) | [optional] 
 **DDD** | **String**| DDD do celular | [optional] 
 **celular** | **String**| N\u00FAmero do celular | [optional] 
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

 Ativa o servi\u00E7o de envio de fatura por email

Este recurso ativa o servi\u00E7o de envio de fatura por email

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ContaApi()

var id = 789; // {Integer} C\u00F3digo de identifica\u00E7\u00E3o da conta (id).


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
 **id** | **Integer**| C\u00F3digo de identifica\u00E7\u00E3o da conta (id). | 

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

Este m\u00E9todo permite a realiza\u00E7\u00E3o do bloqueio de uma determinada conta a partir do seu c\u00F3digo de identifica\u00E7\u00E3o (id).

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ContaApi()

var id = 789; // {Integer} C\u00F3digo de Identifica\u00E7\u00E3o da conta (id).

var idStatus = 789; // {Integer} C\u00F3digo de Identifica\u00E7\u00E3o do Novo Status Conta.


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
 **id** | **Integer**| C\u00F3digo de Identifica\u00E7\u00E3o da conta (id). | 
 **idStatus** | **Integer**| C\u00F3digo de Identifica\u00E7\u00E3o do Novo Status Conta. | 

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

Este m\u00E9todo permite a realiza\u00E7\u00E3o do cancelamento de uma determinada conta a partir do seu c\u00F3digo de identifica\u00E7\u00E3o (id).

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ContaApi()

var id = 789; // {Integer} C\u00F3digo de Identifica\u00E7\u00E3o da conta (id).

var idStatus = 789; // {Integer} C\u00F3digo de Identifica\u00E7\u00E3o do Novo Status Conta.


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
 **id** | **Integer**| C\u00F3digo de Identifica\u00E7\u00E3o da conta (id). | 
 **idStatus** | **Integer**| C\u00F3digo de Identifica\u00E7\u00E3o do Novo Status Conta. | 

### Return type

[**ContaResponse**](ContaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarBeneficioPagamentoAtrasoUsingGET"></a>
# **consultarBeneficioPagamentoAtrasoUsingGET**
> BeneficioPagamentoAtrasoResponse consultarBeneficioPagamentoAtrasoUsingGET(id)

Apresenta a data m\u00E1xima para pagamento da fatura em atraso para receber o benef\u00EDcio.

Este m\u00E9todo permite consultar se o cliente tem direito ao benef\u00EDcio de pagamento em atraso, em loja, at\u00E9 o s\u00E1bado subsequente ao vencimento, ficando isento do pagamento de multa, encargos, mora e IOF.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ContaApi()

var id = 789; // {Integer} C\u00F3digo de identifica\u00E7\u00E3o da conta (id).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarBeneficioPagamentoAtrasoUsingGET(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00F3digo de identifica\u00E7\u00E3o da conta (id). | 

### Return type

[**BeneficioPagamentoAtrasoResponse**](BeneficioPagamentoAtrasoResponse.md)

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

Consulta a d\u00EDvida atualizada do cliente

Este recurso consulta a d\u00EDvida atualizada do cliente

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ContaApi()

var id = 789; // {Integer} Id Conta

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00E7\u00E3o dos registros.
  'page': 56, // {Integer} P\u00E1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50)
  'dataVencimento': "dataVencimento_example", // {String} Data do vencimento
  'idEscritorioCobranca': 789 // {Integer} C\u00F3digo de identifica\u00E7\u00E3o do escrit\u00F3rio de cobran\u00E7a
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
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00E7\u00E3o dos registros. | [optional] 
 **page** | **Integer**| P\u00E1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50) | [optional] 
 **dataVencimento** | **String**| Data do vencimento | [optional] 
 **idEscritorioCobranca** | **Integer**| C\u00F3digo de identifica\u00E7\u00E3o do escrit\u00F3rio de cobran\u00E7a | [optional] 

### Return type

[**DividaClienteResponse**](DividaClienteResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarTaxasTarifasUsingGET"></a>
# **consultarTaxasTarifasUsingGET**
> PageTaxasRefinanciamentoResponse consultarTaxasTarifasUsingGET(id, opts)

Permite consultar a partir do ID da conta as taxas e tarifas

Esta opera\u00E7\u00E3o tem como objetivo permitir que os Emissores consultem as taxas e tarifas da conta

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ContaApi()

var id = 789; // {Integer} ID da conta a ser consultada.

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00E7\u00E3o dos registros.
  'page': 56, // {Integer} P\u00E1gina solicitada (Default = 0)
  'limit': 56 // {Integer} Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50)
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
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00E7\u00E3o dos registros. | [optional] 
 **page** | **Integer**| P\u00E1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50) | [optional] 

### Return type

[**PageTaxasRefinanciamentoResponse**](PageTaxasRefinanciamentoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET13"></a>
# **consultarUsingGET13**
> ContaDetalheResponse consultarUsingGET13(id)

Apresenta dados de uma determinada conta

Este m\u00E9todo permite consultar dados de uma determinada conta a partir de seu codigo de identifica\u00E7\u00E3o (id).

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ContaApi()

var id = 789; // {Integer} C\u00F3digo de identifica\u00E7\u00E3o da conta (id).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET13(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00F3digo de identifica\u00E7\u00E3o da conta (id). | 

### Return type

[**ContaDetalheResponse**](ContaDetalheResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET42"></a>
# **consultarUsingGET42**
> TransferenciaDetalheResponse consultarUsingGET42(id, idTransferencia)

Consulta os detalhes de uma determinada transfer\u00EAncia

Este m\u00E9todo permite consultar os detalhes de uma determinada transfer\u00EAncia de cr\u00E9dito realizada entre contas.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ContaApi()

var id = 789; // {Integer} C\u00F3digo de Identifica\u00E7\u00E3o da conta (id).

var idTransferencia = 789; // {Integer} C\u00F3digo de Identifica\u00E7\u00E3o da transfer\u00EAncia (id_transferencia).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET42(id, idTransferencia, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00F3digo de Identifica\u00E7\u00E3o da conta (id). | 
 **idTransferencia** | **Integer**| C\u00F3digo de Identifica\u00E7\u00E3o da transfer\u00EAncia (id_transferencia). | 

### Return type

[**TransferenciaDetalheResponse**](TransferenciaDetalheResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="desativarEnvioFaturaEmailUsingPOST"></a>
# **desativarEnvioFaturaEmailUsingPOST**
> Object desativarEnvioFaturaEmailUsingPOST(id)

Desativa o servi\u00E7o de envio de fatura por email

Este recurso desativa o servi\u00E7o de envio de fatura por email

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ContaApi()

var id = 789; // {Integer} C\u00F3digo de identifica\u00E7\u00E3o da conta (id).


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
 **id** | **Integer**| C\u00F3digo de identifica\u00E7\u00E3o da conta (id). | 

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

<a name="gerarCartaoEmbossingUsingPOST"></a>
# **gerarCartaoEmbossingUsingPOST**
> CartaoEmbossingResponse gerarCartaoEmbossingUsingPOST(id, cartaoEmbossingRequest)

Realiza o envio para gera\u00E7\u00E3o de um novo cart\u00E3o na gr\u00E1fica

Este recurso permite que seja gerado um novo Cart\u00E3o para um determinado Portador que esteja vinculado a uma Conta. Para isso, ser\u00E1 preciso informar o c\u00F3digo de identifica\u00E7\u00E3o da Conta (id), o idPessoa do Portador e o idTipoPlastico do Cart\u00E3o que dever\u00E1 ser gerado para impress\u00E3o. Esta funcionalidade poder\u00E1 ser utilizada para impress\u00E3o de cart\u00F5es em gr\u00E1fica.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ContaApi()

var id = 789; // {Integer} C\u00F3digo de identifica\u00E7\u00E3o da conta (id).

var cartaoEmbossingRequest = new Pier.CartaoEmbossingRequest(); // {CartaoEmbossingRequest} cartaoEmbossingRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.gerarCartaoEmbossingUsingPOST(id, cartaoEmbossingRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00F3digo de identifica\u00E7\u00E3o da conta (id). | 
 **cartaoEmbossingRequest** | [**CartaoEmbossingRequest**](CartaoEmbossingRequest.md)| cartaoEmbossingRequest | 

### Return type

[**CartaoEmbossingResponse**](CartaoEmbossingResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="gerarCartaoProvisorioUsingPOST"></a>
# **gerarCartaoProvisorioUsingPOST**
> CartaoImpressaoProvisorioResponse gerarCartaoProvisorioUsingPOST(id)

Realiza a gera\u00E7\u00E3o de um cart\u00E3o provisorio

Este recurso permite que seja gerado um cart\u00E3o provis\u00F3rio para um determinado Portador que esteja vinculado a uma Conta. Para isso, ser\u00E1 preciso informar o c\u00F3digo de identifica\u00E7\u00E3o da Conta (id).

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ContaApi()

var id = 789; // {Integer} C\u00F3digo de identifica\u00E7\u00E3o da conta (id).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.gerarCartaoProvisorioUsingPOST(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00F3digo de identifica\u00E7\u00E3o da conta (id). | 

### Return type

[**CartaoImpressaoProvisorioResponse**](CartaoImpressaoProvisorioResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="gerarCartaoUsingPOST"></a>
# **gerarCartaoUsingPOST**
> CartaoImpressaoResponse gerarCartaoUsingPOST(id, idPessoa, opts)

Realiza a gera\u00E7\u00E3o de um novo cart\u00E3o para impress\u00E3o avulsa

Este recurso permite que seja gerado um novo Cart\u00E3o para um determinado Portador que esteja vinculado a uma Conta. Para isso, ser\u00E1 preciso informar o c\u00F3digo de identifica\u00E7\u00E3o da Conta (id), o idPessoa do Portador e o idTipoPlastico do Cart\u00E3o que dever\u00E1 ser gerado para impress\u00E3o. Esta funcionalidade poder\u00E1 ser utilizada para realizar a impress\u00E3o de cart\u00F5es em Lojas, Quiosques, Escrit\u00F3rios, Terminais de Auto Atendimento, ou outro local que o Emissor escolher, desde que se possua uma impressora de Cart\u00F5es habilidade para o fazer, no local.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ContaApi()

var id = 789; // {Integer} C\u00F3digo de identifica\u00E7\u00E3o da conta (id).

var idPessoa = 789; // {Integer} C\u00F3digo de identifica\u00E7\u00E3o da pessoa (id).

var opts = { 
  'idTipoPlastico': 789 // {Integer} C\u00F3digo de identifica\u00E7\u00E3o do TipoPlastico (id).
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
 **id** | **Integer**| C\u00F3digo de identifica\u00E7\u00E3o da conta (id). | 
 **idPessoa** | **Integer**| C\u00F3digo de identifica\u00E7\u00E3o da pessoa (id). | 
 **idTipoPlastico** | **Integer**| C\u00F3digo de identifica\u00E7\u00E3o do TipoPlastico (id). | [optional] 

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

Realiza a gera\u00E7\u00E3o de um cart\u00E3o virtual

Este recurso permite que seja gerado um Cart\u00E3o virtual para um determinado Portador que esteja vinculado a uma Conta. Para isso, ser\u00E1 preciso informar o c\u00F3digo de identifica\u00E7\u00E3o da Conta (id). Esta funcionalidade poder\u00E1 ser utilizada para realizar a cria\u00E7\u00E3o de cart\u00F5es virtuaes atraves de um app.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ContaApi()

var id = 789; // {Integer} C\u00F3digo de identifica\u00E7\u00E3o da conta (id).

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
 **id** | **Integer**| C\u00F3digo de identifica\u00E7\u00E3o da conta (id). | 
 **dataValidade** | **String**| Data de Validade | 

### Return type

[**CartaoImpressaoResponse**](CartaoImpressaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarHistoricoAlteracoesLimitesUsingGET"></a>
# **listarHistoricoAlteracoesLimitesUsingGET**
> PageHistoricoEventosResponse listarHistoricoAlteracoesLimitesUsingGET(id, opts)

Lista o hist\u00F3rico de altera\u00E7\u00F5es de limites da conta

Este recurso consulta o hist\u00F3rico com as altera\u00E7\u00F5es de limites da conta informada

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ContaApi()

var id = 789; // {Integer} C\u00F3digo de identifica\u00E7\u00E3o da conta (id).

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00E7\u00E3o dos registros.
  'page': 56, // {Integer} P\u00E1gina solicitada (Default = 0)
  'limit': 56 // {Integer} Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50)
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
 **id** | **Integer**| C\u00F3digo de identifica\u00E7\u00E3o da conta (id). | 
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00E7\u00E3o dos registros. | [optional] 
 **page** | **Integer**| P\u00E1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50) | [optional] 

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

Lista o hist\u00F3rico de entradas/sa\u00EDdas de assessorias de cobran\u00E7a

Permite listar todos os registros de entrada e sa\u00EDda da Conta em arquivos de integra\u00E7\u00E3o com empresas de assessorias de cobran\u00E7a a partir do c\u00F3digo de identifica\u00E7\u00E3o da conta (idConta).

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ContaApi()

var id = 789; // {Integer} Id Conta

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00E7\u00E3o dos registros.
  'page': 56, // {Integer} P\u00E1gina solicitada (Default = 0)
  'limit': 56 // {Integer} Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50)
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
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00E7\u00E3o dos registros. | [optional] 
 **page** | **Integer**| P\u00E1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50) | [optional] 

### Return type

[**PageHistoricoAssessoriaResponse**](PageHistoricoAssessoriaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarHistoricoAtrasosFaturasUsingGET"></a>
# **listarHistoricoAtrasosFaturasUsingGET**
> PageHistoricoAtrasoFaturaResponse listarHistoricoAtrasosFaturasUsingGET(id, opts)

Lista o historico de atrasos das faturas

Este recurso lista o hist\u00F3rico do pagamento de faturas em atraso

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ContaApi()

var id = 789; // {Integer} Id Conta

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00E7\u00E3o dos registros.
  'page': 56, // {Integer} P\u00E1gina solicitada (Default = 0)
  'limit': 56 // {Integer} Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarHistoricoAtrasosFaturasUsingGET(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| Id Conta | 
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00E7\u00E3o dos registros. | [optional] 
 **page** | **Integer**| P\u00E1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50) | [optional] 

### Return type

[**PageHistoricoAtrasoFaturaResponse**](PageHistoricoAtrasoFaturaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarNaoProcessadasUsingGET"></a>
# **listarNaoProcessadasUsingGET**
> PageTransacaoNaoProcessadaResponse listarNaoProcessadasUsingGET(id, opts)

Lista as transa\u00E7\u00F5es n\u00E3o processadas da conta

Este m\u00E9todo permite que sejam listadas todas as transa\u00E7\u00F5es n\u00E3o processadas da Conta.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ContaApi()

var id = 789; // {Integer} C\u00F3digo de Identifica\u00E7\u00E3o da conta (id).

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00E7\u00E3o dos registros.
  'page': 56, // {Integer} P\u00E1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50)
  'dataInicio': "dataInicio_example", // {String} Data de in\u00EDcio da consulta do extrato no formato yyyy-MM-dd (Par\u00E2mentro Ignorado se dataFim n\u00E3o for definida).
  'dataFim': "dataFim_example" // {String} Data fim da consulta do extrato no formato yyyy-MM-dd  (Par\u00E2mentro Ignorado se dataInicio n\u00E3o for definida).
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
 **id** | **Integer**| C\u00F3digo de Identifica\u00E7\u00E3o da conta (id). | 
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00E7\u00E3o dos registros. | [optional] 
 **page** | **Integer**| P\u00E1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50) | [optional] 
 **dataInicio** | **String**| Data de in\u00EDcio da consulta do extrato no formato yyyy-MM-dd (Par\u00E2mentro Ignorado se dataFim n\u00E3o for definida). | [optional] 
 **dataFim** | **String**| Data fim da consulta do extrato no formato yyyy-MM-dd  (Par\u00E2mentro Ignorado se dataInicio n\u00E3o for definida). | [optional] 

### Return type

[**PageTransacaoNaoProcessadaResponse**](PageTransacaoNaoProcessadaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarProcessadasUsingGET"></a>
# **listarProcessadasUsingGET**
> PageTransacoesCorrentesResponse listarProcessadasUsingGET(id, opts)

Lista as transa\u00E7\u00F5es processadas da conta

Este m\u00E9todo permite que sejam listadas todas as transa\u00E7\u00F5es processadas da Conta.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ContaApi()

var id = 789; // {Integer} C\u00F3digo de Identifica\u00E7\u00E3o da conta (id).

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00E7\u00E3o dos registros.
  'page': 56, // {Integer} P\u00E1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50)
  'dataVencimento': "dataVencimento_example", // {String} Data de vencimento do extrato no formato yyyy-MM-dd.
  'dataInicio': "dataInicio_example", // {String} Data de in\u00EDcio da consulta do extrato no formato yyyy-MM-dd (Ignorado quando o par\u00E2mentro dataVencimento \u00E9 usado).
  'dataFim': "dataFim_example" // {String} Data fim da consulta do extrato no formato yyyy-MM-dd  (Ignorado quando o par\u00E2mentro dataVencimento \u00E9 usado).
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
 **id** | **Integer**| C\u00F3digo de Identifica\u00E7\u00E3o da conta (id). | 
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00E7\u00E3o dos registros. | [optional] 
 **page** | **Integer**| P\u00E1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50) | [optional] 
 **dataVencimento** | **String**| Data de vencimento do extrato no formato yyyy-MM-dd. | [optional] 
 **dataInicio** | **String**| Data de in\u00EDcio da consulta do extrato no formato yyyy-MM-dd (Ignorado quando o par\u00E2mentro dataVencimento \u00E9 usado). | [optional] 
 **dataFim** | **String**| Data fim da consulta do extrato no formato yyyy-MM-dd  (Ignorado quando o par\u00E2mentro dataVencimento \u00E9 usado). | [optional] 

### Return type

[**PageTransacoesCorrentesResponse**](PageTransacoesCorrentesResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET17"></a>
# **listarUsingGET17**
> PageContaResponse listarUsingGET17(opts)

Lista contas existentes na base de dados do Emissor

Este recurso permite listar contas existentes na base de dados do Emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ContaApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00E7\u00E3o dos registros.
  'page': 56, // {Integer} P\u00E1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50)
  'idProduto': 789, // {Integer} C\u00F3digo de identifica\u00E7\u00E3o do produto ao qual a conta faz parte. (id).
  'idOrigemComercial': 789, // {Integer} C\u00F3digo de Identifica\u00E7\u00E3o da Origem Comercial (id) que deu origem a Conta.
  'idPessoa': 789, // {Integer} C\u00F3digo de Identifica\u00E7\u00E3o da Pessoa Titular da Conta (id).
  'idStatusConta': 789, // {Integer} C\u00F3digo de Identifica\u00E7\u00E3o do status da conta.
  'diaVencimento': 56, // {Integer} Apresenta o dia de vencimento.
  'melhorDiaCompra': 56, // {Integer} Apresenta o melhor dia de compra.
  'dataStatusConta': "dataStatusConta_example", // {String} Apresenta a data em que o idStatusConta atual fora atribu\u00EDdo para ela.
  'dataCadastro': "dataCadastro_example", // {String} Apresenta a data em que o cart\u00E3o foi gerado.
  'dataUltimaAlteracaoVencimento': "dataUltimaAlteracaoVencimento_example" // {String} Apresenta a data da ultima altera\u00E7\u00E3o de vencimento.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET17(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00E7\u00E3o dos registros. | [optional] 
 **page** | **Integer**| P\u00E1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50) | [optional] 
 **idProduto** | **Integer**| C\u00F3digo de identifica\u00E7\u00E3o do produto ao qual a conta faz parte. (id). | [optional] 
 **idOrigemComercial** | **Integer**| C\u00F3digo de Identifica\u00E7\u00E3o da Origem Comercial (id) que deu origem a Conta. | [optional] 
 **idPessoa** | **Integer**| C\u00F3digo de Identifica\u00E7\u00E3o da Pessoa Titular da Conta (id). | [optional] 
 **idStatusConta** | **Integer**| C\u00F3digo de Identifica\u00E7\u00E3o do status da conta. | [optional] 
 **diaVencimento** | **Integer**| Apresenta o dia de vencimento. | [optional] 
 **melhorDiaCompra** | **Integer**| Apresenta o melhor dia de compra. | [optional] 
 **dataStatusConta** | **String**| Apresenta a data em que o idStatusConta atual fora atribu\u00EDdo para ela. | [optional] 
 **dataCadastro** | **String**| Apresenta a data em que o cart\u00E3o foi gerado. | [optional] 
 **dataUltimaAlteracaoVencimento** | **String**| Apresenta a data da ultima altera\u00E7\u00E3o de vencimento. | [optional] 

### Return type

[**PageContaResponse**](PageContaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET50"></a>
# **listarUsingGET50**
> PageTransferenciaResponse listarUsingGET50(id, opts)

Lista as transfer\u00EAncias realizadas pela conta

Este m\u00E9todo permite que sejam listadas as transfer\u00EAncias realizadas pela conta existentes na base do emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ContaApi()

var id = 789; // {Integer} C\u00F3digo de Identifica\u00E7\u00E3o da conta (id).

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00E7\u00E3o dos registros.
  'page': 56, // {Integer} P\u00E1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50)
  'idTransferencia': 789, // {Integer} C\u00F3digo de identifica\u00E7\u00E3o da transfer\u00EAncia (id).
  'idContaOrigem': 789, // {Integer} C\u00F3digo de identifica\u00E7\u00E3o da conta em que o valor ser\u00E1 debitado para a transfer\u00EAncia. (id).
  'idContaDestino': 789, // {Integer} C\u00F3digo de identifica\u00E7\u00E3o da conta em que o valor ser\u00E1 creditado para a transfer\u00EAncia. (id).
  'valorTransferencia': 3.4, // {Number} Valor estabelecido para ser transferido.
  'dataTransferencia': "dataTransferencia_example" // {String} Data estabelecida para ocorrer a transfer\u00EAncia.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET50(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00F3digo de Identifica\u00E7\u00E3o da conta (id). | 
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00E7\u00E3o dos registros. | [optional] 
 **page** | **Integer**| P\u00E1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50) | [optional] 
 **idTransferencia** | **Integer**| C\u00F3digo de identifica\u00E7\u00E3o da transfer\u00EAncia (id). | [optional] 
 **idContaOrigem** | **Integer**| C\u00F3digo de identifica\u00E7\u00E3o da conta em que o valor ser\u00E1 debitado para a transfer\u00EAncia. (id). | [optional] 
 **idContaDestino** | **Integer**| C\u00F3digo de identifica\u00E7\u00E3o da conta em que o valor ser\u00E1 creditado para a transfer\u00EAncia. (id). | [optional] 
 **valorTransferencia** | [**Number**](.md)| Valor estabelecido para ser transferido. | [optional] 
 **dataTransferencia** | **String**| Data estabelecida para ocorrer a transfer\u00EAncia. | [optional] 

### Return type

[**PageTransferenciaResponse**](PageTransferenciaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="reativarUsingPOST1"></a>
# **reativarUsingPOST1**
> Object reativarUsingPOST1(id)

Realiza a reativa\u00E7\u00E3o de contas.

Este recurso permite reativar contas. Para isso, ser\u00E1 preciso informar o c\u00F3digo de identifica\u00E7\u00E3o da Conta (id).

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

<a name="simularEmprestimoFinanciamentoUsingPOST"></a>
# **simularEmprestimoFinanciamentoUsingPOST**
> EmprestimoPessoalResponse simularEmprestimoFinanciamentoUsingPOST(id, request)

Simula valores de presta\u00E7\u00F5es de empr\u00E9stimos/financiamentos

Esta opera\u00E7\u00E3o pode ser utilizada para simular opera\u00E7\u00F5es financeiras a partir de informa\u00E7\u00F5es fornecidas pelo usu\u00E1rio. Os c\u00E1lculos gerados devem ser considerados apenas como refer\u00EAncia para as situa\u00E7\u00F5es reais e n\u00E3o como valores oficiais.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ContaApi()

var id = 789; // {Integer} C\u00F3digo de identifica\u00E7\u00E3o da conta (id).

var request = new Pier.EmprestimoPessoalRequest(); // {EmprestimoPessoalRequest} request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.simularEmprestimoFinanciamentoUsingPOST(id, request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00F3digo de identifica\u00E7\u00E3o da conta (id). | 
 **request** | [**EmprestimoPessoalRequest**](EmprestimoPessoalRequest.md)| request | 

### Return type

[**EmprestimoPessoalResponse**](EmprestimoPessoalResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="transacoesUsingGET"></a>
# **transacoesUsingGET**
> PageTransacaoResponse transacoesUsingGET(id, opts)

Permite listar uma linha do tempo com os eventos da conta

Esta opera\u00E7\u00E3o tem como objetivo permitir a listagem, em formato de timeline, dos eventos vinculados a uma detemrinada conta. Transa\u00E7\u00F5es, fechamento da fatura, pagamentos, gera\u00E7\u00E3o de cart\u00F5es e altera\u00E7\u00E3o de limite s\u00E3o exemplos de eventos contemplados por esta funcionalidade. Neste m\u00E9todo, as opera\u00E7\u00F5es s\u00E3o ordenadas de forma decrescente.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ContaApi()

var id = 789; // {Integer} Id Conta

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00E7\u00E3o dos registros.
  'page': 56, // {Integer} P\u00E1gina solicitada (Default = 0)
  'limit': 56 // {Integer} Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50)
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
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00E7\u00E3o dos registros. | [optional] 
 **page** | **Integer**| P\u00E1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50) | [optional] 

### Return type

[**PageTransacaoResponse**](PageTransacaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="transferirUsingPOST1"></a>
# **transferirUsingPOST1**
> TransferenciaDetalheResponse transferirUsingPOST1(id, idContaDestino, valorTransferencia)

Realiza uma transfer\u00EAncia de Cr\u00E9dito para outro cliente do mesmo Emissor

Este m\u00E9todo permite que um portador de um cart\u00E3o possa realizar auma transfer\u00EAncia de cr\u00E9dito para outro cliente do mesmo emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ContaApi()

var id = 789; // {Integer} C\u00F3digo de Identifica\u00E7\u00E3o da conta do cliente portador do cart\u00E3o que ser\u00E1 debitado (id).

var idContaDestino = 789; // {Integer} C\u00F3digo de Identifica\u00E7\u00E3o do cliente portador do cart\u00E3o que ser\u00E1 creditado (id).

var valorTransferencia = 3.4; // {Number} Valor da Transfer\u00EAncia.


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
 **id** | **Integer**| C\u00F3digo de Identifica\u00E7\u00E3o da conta do cliente portador do cart\u00E3o que ser\u00E1 debitado (id). | 
 **idContaDestino** | **Integer**| C\u00F3digo de Identifica\u00E7\u00E3o do cliente portador do cart\u00E3o que ser\u00E1 creditado (id). | 
 **valorTransferencia** | [**Number**](.md)| Valor da Transfer\u00EAncia. | 

### Return type

[**TransferenciaDetalheResponse**](TransferenciaDetalheResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

