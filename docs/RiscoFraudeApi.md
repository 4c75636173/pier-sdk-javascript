# Pier.RiscoFraudeApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**consultarUsingGET**](RiscoFraudeApi.md#consultarUsingGET) | **GET** /api/atendimento-clientes/{id} | Apresenta os dados de um determinado Atendimento
[**consultarUsingGET12**](RiscoFraudeApi.md#consultarUsingGET12) | **GET** /api/riscos-fraudes/{id} | Consultar uma transa\u00C3\u00A7\u00C3\u00A3o classificada com risco de fraude
[**informarRiscoFraudeUsingPOST**](RiscoFraudeApi.md#informarRiscoFraudeUsingPOST) | **POST** /api/riscos-fraudes | Receber Risco Fraude
[**listarUsingGET1**](RiscoFraudeApi.md#listarUsingGET1) | **GET** /api/atendimento-clientes | Lista todos os atendimentos
[**listarUsingGET18**](RiscoFraudeApi.md#listarUsingGET18) | **GET** /api/riscos-fraudes | Listar as transa\u00C3\u00A7\u00C3\u00B5es com resolu\u00C3\u00A7\u00C3\u00A3o de risco fraude pendente
[**negarUsingPOST**](RiscoFraudeApi.md#negarUsingPOST) | **POST** /api/riscos-fraudes/{id}/negar | Negar autenticidade da transa\u00C3\u00A7\u00C3\u00A3o com risco de fraude
[**reconhecerUsingPOST**](RiscoFraudeApi.md#reconhecerUsingPOST) | **POST** /api/riscos-fraudes/{id}/reconhecer | Reconhecer a transa\u00C3\u00A7\u00C3\u00A3o com risco de fraude
[**salvarUsingPOST1**](RiscoFraudeApi.md#salvarUsingPOST1) | **POST** /api/atendimento-clientes | Cadastro um novo Atendimento do tipo Gen\u00C3\u00A9rico para uma Conta


<a name="consultarUsingGET"></a>
# **consultarUsingGET**
> AtendimentoCliente consultarUsingGET(id)

Apresenta os dados de um determinado Atendimento

Este m\u00C3\u00A9todo permite consultar os par\u00C3\u00A2metros de um determinado Atendimento a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (idAtendimento).

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.RiscoFraudeApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do atendimento cliente (id).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do atendimento cliente (id). | 

### Return type

[**AtendimentoCliente**](AtendimentoCliente.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET12"></a>
# **consultarUsingGET12**
> RiscoFraudeDetalhadoResponse consultarUsingGET12(id)

Consultar uma transa\u00C3\u00A7\u00C3\u00A3o classificada com risco de fraude

Consulta os detalhes de uma transa\u00C3\u00A7\u00C3\u00A3o classificada com risco de fraude.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.RiscoFraudeApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do risco de fraude


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET12(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do risco de fraude | 

### Return type

[**RiscoFraudeDetalhadoResponse**](RiscoFraudeDetalhadoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="informarRiscoFraudeUsingPOST"></a>
# **informarRiscoFraudeUsingPOST**
> &#39;String&#39; informarRiscoFraudeUsingPOST(detalhadoResponses)

Receber Risco Fraude

Receber risco fraude

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.RiscoFraudeApi()

var detalhadoResponses = [new Pier.RiscoFraudeDetalhadoResponse()]; // {[RiscoFraudeDetalhadoResponse]} detalhadoResponses


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.informarRiscoFraudeUsingPOST(detalhadoResponses, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **detalhadoResponses** | [**[RiscoFraudeDetalhadoResponse]**](RiscoFraudeDetalhadoResponse.md)| detalhadoResponses | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET1"></a>
# **listarUsingGET1**
> PageAtendimentoClientes listarUsingGET1(opts)

Lista todos os atendimentos

Este m\u00C3\u00A9todo permite que sejam listados todos os Registro de Atendimento, independente do Tipo.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.RiscoFraudeApi()

var opts = { 
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
  'idTipoAtendimento': 789, // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Tipo de Atendimento (id)
  'idConta': 789, // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o de conta (id).
  'nomeAtendente': "nomeAtendente_example", // {String} Apresenta o nome do Atendente que registrou o Atendimento.
  'dataAtendimento': "dataAtendimento_example" // {String} Apresenta a data em que o Atendimento foi realizado.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET1(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 
 **idTipoAtendimento** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Tipo de Atendimento (id) | [optional] 
 **idConta** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o de conta (id). | [optional] 
 **nomeAtendente** | **String**| Apresenta o nome do Atendente que registrou o Atendimento. | [optional] 
 **dataAtendimento** | **String**| Apresenta a data em que o Atendimento foi realizado. | [optional] 

### Return type

[**PageAtendimentoClientes**](PageAtendimentoClientes.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET18"></a>
# **listarUsingGET18**
> RiscoFraudeResponsePage listarUsingGET18(idConta, confirmacaoFraude, opts)

Listar as transa\u00C3\u00A7\u00C3\u00B5es com resolu\u00C3\u00A7\u00C3\u00A3o de risco fraude pendente

Este recurso permite que sejam listados os riscos de fraudes existentes

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.RiscoFraudeApi()

var idConta = 789; // {Integer} Id Conta

var confirmacaoFraude = "confirmacaoFraude_example"; // {String} Confirma\u00C3\u00A7\u00C3\u00A3o da fraude

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
api.listarUsingGET18(idConta, confirmacaoFraude, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idConta** | **Integer**| Id Conta | 
 **confirmacaoFraude** | **String**| Confirma\u00C3\u00A7\u00C3\u00A3o da fraude | 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 

### Return type

[**RiscoFraudeResponsePage**](RiscoFraudeResponsePage.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="negarUsingPOST"></a>
# **negarUsingPOST**
> RiscoFraudeDetalhadoResponse negarUsingPOST(id)

Negar autenticidade da transa\u00C3\u00A7\u00C3\u00A3o com risco de fraude

Nega a realiza\u00C3\u00A7\u00C3\u00A3o da transa\u00C3\u00A7\u00C3\u00A3o classificada com risco de fraude.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.RiscoFraudeApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do risco de fraude


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.negarUsingPOST(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do risco de fraude | 

### Return type

[**RiscoFraudeDetalhadoResponse**](RiscoFraudeDetalhadoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="reconhecerUsingPOST"></a>
# **reconhecerUsingPOST**
> RiscoFraudeDetalhadoResponse reconhecerUsingPOST(id)

Reconhecer a transa\u00C3\u00A7\u00C3\u00A3o com risco de fraude

Confirma a autenticidade da transa\u00C3\u00A7\u00C3\u00A3o classificada com risco de fraude.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.RiscoFraudeApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do risco de fraude


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.reconhecerUsingPOST(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do risco de fraude | 

### Return type

[**RiscoFraudeDetalhadoResponse**](RiscoFraudeDetalhadoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarUsingPOST1"></a>
# **salvarUsingPOST1**
> AtendimentoCliente salvarUsingPOST1(opts)

Cadastro um novo Atendimento do tipo Gen\u00C3\u00A9rico para uma Conta

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.RiscoFraudeApi()

var opts = { 
  'idConta': 789, // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Conta a qual o Atendimento est\u00C3\u00A1 associado
  'conteudoAtendimento': "conteudoAtendimento_example", // {String} Apresenta as informa\u00C3\u00A7\u00C3\u00B5es que foram utilizadas para consultar, cadastrar ou alterar informa\u00C3\u00A7\u00C3\u00B5es relacionadas ao Atendimento.
  'detalhesAtendimento': "detalhesAtendimento_example", // {String} Apresenta os detalhes lan\u00C3\u00A7ados pelo sistema ou pelo Atendente durante relacionados ao Atendimento.
  'nomeAtendente': "nomeAtendente_example", // {String} Apresenta o nome do Atendente que registrou o Atendimento.
  'dataAtendimento': "dataAtendimento_example", // {String} Apresenta a data e hora em que o Atendimento foi realizado no formato yyyy-MM-dd'T'HH:mm:ss.SSS'Z'.
  'dataAgendamento': "dataAgendamento_example", // {String} Quando utilizado, de acordo com o Tipo de Atendimento, apresenta a data e hora para processamento ou a data e hora para retorno do Atendimento no formato yyyy-MM-dd'T'HH:mm:ss.SSS'Z'.
  'dataHoraInicioAtendimento': "dataHoraInicioAtendimento_example", // {String} Apresenta a data e hora em que o Atendimento foi iniciado. Quando utilizado, serve para medir a performance dos Atendimentos no formato yyyy-MM-dd'T'HH:mm:ss.SSS'Z'.
  'dataHoraFimAtendimento': "dataHoraFimAtendimento_example", // {String} Apresenta a data e hora em que o Atendimento foi iniciado. Quando utilizado, serve para medir a performance dos Atendimentos no formato yyyy-MM-dd'T'HH:mm:ss.SSS'Z'.
  'flagFilaFraude': 56 // {Integer} Flag fila fraude
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarUsingPOST1(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idConta** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Conta a qual o Atendimento est\u00C3\u00A1 associado | [optional] 
 **conteudoAtendimento** | **String**| Apresenta as informa\u00C3\u00A7\u00C3\u00B5es que foram utilizadas para consultar, cadastrar ou alterar informa\u00C3\u00A7\u00C3\u00B5es relacionadas ao Atendimento. | [optional] 
 **detalhesAtendimento** | **String**| Apresenta os detalhes lan\u00C3\u00A7ados pelo sistema ou pelo Atendente durante relacionados ao Atendimento. | [optional] 
 **nomeAtendente** | **String**| Apresenta o nome do Atendente que registrou o Atendimento. | [optional] 
 **dataAtendimento** | **String**| Apresenta a data e hora em que o Atendimento foi realizado no formato yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSS&#39;Z&#39;. | [optional] 
 **dataAgendamento** | **String**| Quando utilizado, de acordo com o Tipo de Atendimento, apresenta a data e hora para processamento ou a data e hora para retorno do Atendimento no formato yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSS&#39;Z&#39;. | [optional] 
 **dataHoraInicioAtendimento** | **String**| Apresenta a data e hora em que o Atendimento foi iniciado. Quando utilizado, serve para medir a performance dos Atendimentos no formato yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSS&#39;Z&#39;. | [optional] 
 **dataHoraFimAtendimento** | **String**| Apresenta a data e hora em que o Atendimento foi iniciado. Quando utilizado, serve para medir a performance dos Atendimentos no formato yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSS&#39;Z&#39;. | [optional] 
 **flagFilaFraude** | **Integer**| Flag fila fraude | [optional] 

### Return type

[**AtendimentoCliente**](AtendimentoCliente.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

