# Pier.TransferenciaBancariaApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**atualizarUsingPUT1**](TransferenciaBancariaApi.md#atualizarUsingPUT1) | **PUT** /api/contas-bancarias-portador/{id} | Atualiza conta banc\u00E1ria portador
[**cancelarTransferenciaCreditoContaBancariaUsingPOST**](TransferenciaBancariaApi.md#cancelarTransferenciaCreditoContaBancariaUsingPOST) | **POST** /api/transferencias-creditos-contas-bancarias/{idTransferencia}/cancelar | Realizar o cancelamento de uma transfer\u00EAncia banc\u00E1ria do cart\u00E3o para contas banc\u00E1rias que esteja pendente de confirma\u00E7\u00E3o.
[**confirmarTransferenciaCreditoContaBancariaUsingPOST**](TransferenciaBancariaApi.md#confirmarTransferenciaCreditoContaBancariaUsingPOST) | **POST** /api/transferencias-creditos-contas-bancarias/{idTransferencia}/confirmar | Realizar a confirma\u00E7\u00E3o de uma transfer\u00EAncia banc\u00E1ria do cart\u00E3o para contas banc\u00E1rias que esteja pendente de confirma\u00E7\u00E3o.
[**consultarTransferenciaBancariaUsingGET**](TransferenciaBancariaApi.md#consultarTransferenciaBancariaUsingGET) | **GET** /api/transferencias-creditos-contas-bancarias/{idTransferencia} | Realiza a consulta de uma transfer\u00EAncia banc\u00E1ria de cr\u00E9dito entre contas banc\u00E1rias de um portador
[**consultarUsingGET12**](TransferenciaBancariaApi.md#consultarUsingGET12) | **GET** /api/contas-bancarias-portador/{id} | Consulta conta banc\u00E1ria portador
[**consultarUsingGET41**](TransferenciaBancariaApi.md#consultarUsingGET41) | **GET** /api/contas/{id}/transferencias-creditos-contas-bancarias/{id_transferencia} | Consultar uma transfer\u00EAncia banc\u00E1ria para um banco
[**listarTransferenciaBancariaUsingGET**](TransferenciaBancariaApi.md#listarTransferenciaBancariaUsingGET) | **GET** /api/transferencias-creditos-contas-bancarias | Realiza a listagem das transfer\u00EAncias banc\u00E1rias de cr\u00E9dito entre contas banc\u00E1rias
[**listarUsingGET15**](TransferenciaBancariaApi.md#listarUsingGET15) | **GET** /api/contas-bancarias-portador | Lista contas banc\u00E1rias portador
[**listarUsingGET49**](TransferenciaBancariaApi.md#listarUsingGET49) | **GET** /api/contas/{id}/transferencias-creditos-contas-bancarias | Listar as transfer\u00EAncias banc\u00E1rias realizadas
[**salvarUsingPOST8**](TransferenciaBancariaApi.md#salvarUsingPOST8) | **POST** /api/contas-bancarias-portador | Cadastra uma conta banc\u00E1ria do portador
[**simularTransferenciaBancariaUsingPOST**](TransferenciaBancariaApi.md#simularTransferenciaBancariaUsingPOST) | **POST** /api/simular-transferencias-creditos-contas-bancarias | Realiza a simula\u00E7\u00E3o dos planos de parcelamentos para uma transfer\u00EAncia banc\u00E1ria de cr\u00E9dito entre contas banc\u00E1rias
[**transferenciaCreditoContaBancariaUsingPOST**](TransferenciaBancariaApi.md#transferenciaCreditoContaBancariaUsingPOST) | **POST** /api/transferencias-creditos-contas-bancarias | Realizar transfer\u00EAncia banc\u00E1ria do cart\u00E3o para contas banc\u00E1rias
[**transferirUsingPOST**](TransferenciaBancariaApi.md#transferirUsingPOST) | **POST** /api/contas/{id}/transferencias-creditos-contas-bancarias | Realizar transfer\u00EAncia banc\u00E1ria do cart\u00E3o para contas banc\u00E1rias


<a name="atualizarUsingPUT1"></a>
# **atualizarUsingPUT1**
> ContaBancariaPortadorResponse atualizarUsingPUT1(id, update)

Atualiza conta banc\u00E1ria portador

Esse recurso permite atualizar uma conta banc\u00E1ria do portador.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.TransferenciaBancariaApi()

var id = 789; // {Integer} C\u00F3digo de identifica\u00E7\u00E3o da conta banc\u00E1ria do portador (id).

var update = new Pier.ContaBancariaPortadorUpdate(); // {ContaBancariaPortadorUpdate} update


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.atualizarUsingPUT1(id, update, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00F3digo de identifica\u00E7\u00E3o da conta banc\u00E1ria do portador (id). | 
 **update** | [**ContaBancariaPortadorUpdate**](ContaBancariaPortadorUpdate.md)| update | 

### Return type

[**ContaBancariaPortadorResponse**](ContaBancariaPortadorResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cancelarTransferenciaCreditoContaBancariaUsingPOST"></a>
# **cancelarTransferenciaCreditoContaBancariaUsingPOST**
> &#39;String&#39; cancelarTransferenciaCreditoContaBancariaUsingPOST(idTransferencia)

Realizar o cancelamento de uma transfer\u00EAncia banc\u00E1ria do cart\u00E3o para contas banc\u00E1rias que esteja pendente de confirma\u00E7\u00E3o.

Este recurso tem como objetivo permitir o canelamento de uma transfer\u00EAncia de cr\u00E9dito entre contas.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.TransferenciaBancariaApi()

var idTransferencia = 789; // {Integer} Id Transfer\u00EAncia


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.cancelarTransferenciaCreditoContaBancariaUsingPOST(idTransferencia, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idTransferencia** | **Integer**| Id Transfer\u00EAncia | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="confirmarTransferenciaCreditoContaBancariaUsingPOST"></a>
# **confirmarTransferenciaCreditoContaBancariaUsingPOST**
> &#39;String&#39; confirmarTransferenciaCreditoContaBancariaUsingPOST(idTransferencia)

Realizar a confirma\u00E7\u00E3o de uma transfer\u00EAncia banc\u00E1ria do cart\u00E3o para contas banc\u00E1rias que esteja pendente de confirma\u00E7\u00E3o.

Este recurso tem como objetivo permitir a confirma\u00E7\u00E3o da transfer\u00EAncia de cr\u00E9dito entre contas.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.TransferenciaBancariaApi()

var idTransferencia = 789; // {Integer} Id Transfer\u00EAncia


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.confirmarTransferenciaCreditoContaBancariaUsingPOST(idTransferencia, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idTransferencia** | **Integer**| Id Transfer\u00EAncia | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarTransferenciaBancariaUsingGET"></a>
# **consultarTransferenciaBancariaUsingGET**
> TransferenciaCreditoContaBancariaResponse consultarTransferenciaBancariaUsingGET(idTransferencia)

Realiza a consulta de uma transfer\u00EAncia banc\u00E1ria de cr\u00E9dito entre contas banc\u00E1rias de um portador

Recurso utilizado para recuperar uma transfer\u00EAncia de cr\u00E9dito entre contas banc\u00E1ria de um portador, utiliza o ID da transfer\u00EAncia banc\u00E1riae o idConta para realizar a consulta.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.TransferenciaBancariaApi()

var idTransferencia = 789; // {Integer} Id Transfer\u00EAncia


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarTransferenciaBancariaUsingGET(idTransferencia, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idTransferencia** | **Integer**| Id Transfer\u00EAncia | 

### Return type

[**TransferenciaCreditoContaBancariaResponse**](TransferenciaCreditoContaBancariaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET12"></a>
# **consultarUsingGET12**
> ContaBancariaPortadorResponse consultarUsingGET12(id)

Consulta conta banc\u00E1ria portador

Esse recurso permite consultar uma conta banc\u00E1ria do portador a partir do seu c\u00F3digo de identifica\u00E7\u00E3o (id).

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.TransferenciaBancariaApi()

var id = 789; // {Integer} C\u00F3digo de identifica\u00E7\u00E3o da conta banc\u00E1ria (id).


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
 **id** | **Integer**| C\u00F3digo de identifica\u00E7\u00E3o da conta banc\u00E1ria (id). | 

### Return type

[**ContaBancariaPortadorResponse**](ContaBancariaPortadorResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET41"></a>
# **consultarUsingGET41**
> TransferenciaBancariaResponse consultarUsingGET41(id, idTransferencia, opts)

Consultar uma transfer\u00EAncia banc\u00E1ria para um banco

Este recurso permite consultar os detalhes de uma determinada transfer\u00EAncia de cr\u00E9dito realizada para uma conta banc\u00E1ria. De modo geral, esta opera\u00E7\u00E3o poder\u00E1 ser utilizada para uma consulta simples destes detalhes ou para realizar a montagem de um comprovante de 2\u00AA via de transfer\u00EAncia entre contas.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.TransferenciaBancariaApi()

var id = 789; // {Integer} Id Conta

var idTransferencia = 789; // {Integer} Id Transfer\u00EAncia

var opts = { 
  'idContaBancariaDestino': 789 // {Integer} C\u00F3digo de identifica\u00E7\u00E3o da conta banc\u00E1ria de destino (id)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET41(id, idTransferencia, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| Id Conta | 
 **idTransferencia** | **Integer**| Id Transfer\u00EAncia | 
 **idContaBancariaDestino** | **Integer**| C\u00F3digo de identifica\u00E7\u00E3o da conta banc\u00E1ria de destino (id) | [optional] 

### Return type

[**TransferenciaBancariaResponse**](TransferenciaBancariaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarTransferenciaBancariaUsingGET"></a>
# **listarTransferenciaBancariaUsingGET**
> PageTransferenciaCreditoContaBancariaResponse listarTransferenciaBancariaUsingGET(opts)

Realiza a listagem das transfer\u00EAncias banc\u00E1rias de cr\u00E9dito entre contas banc\u00E1rias

Recurso utilizado para listar as transfer\u00EAncia de cr\u00E9dito entre contas banc\u00E1ria de um portador solicitadas.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.TransferenciaBancariaApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00E7\u00E3o dos registros.
  'page': 56, // {Integer} P\u00E1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50)
  'idConta': 789, // {Integer} C\u00F3digo de identifica\u00E7\u00E3o da Conta.
  'dataSolicitacaoInicial': "dataSolicitacaoInicial_example", // {String} Data inicial da solicita\u00E7\u00E3o de transfer\u00EAncia.
  'dataSolicitacaoFinal': "dataSolicitacaoFinal_example", // {String} Data final da solicita\u00E7\u00E3o de transfer\u00EAncia
  'status': 56 // {Integer} C\u00F3digo do status do processamento
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarTransferenciaBancariaUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00E7\u00E3o dos registros. | [optional] 
 **page** | **Integer**| P\u00E1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50) | [optional] 
 **idConta** | **Integer**| C\u00F3digo de identifica\u00E7\u00E3o da Conta. | [optional] 
 **dataSolicitacaoInicial** | **String**| Data inicial da solicita\u00E7\u00E3o de transfer\u00EAncia. | [optional] 
 **dataSolicitacaoFinal** | **String**| Data final da solicita\u00E7\u00E3o de transfer\u00EAncia | [optional] 
 **status** | **Integer**| C\u00F3digo do status do processamento | [optional] 

### Return type

[**PageTransferenciaCreditoContaBancariaResponse**](PageTransferenciaCreditoContaBancariaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET15"></a>
# **listarUsingGET15**
> PageContaBancariaPortadorResponse listarUsingGET15(opts)

Lista contas banc\u00E1rias portador

Esse recurso permite listar contas banc\u00E1rias do portador.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.TransferenciaBancariaApi()

var opts = { 
  'idConta': 789, // {Integer} C\u00F3digo identificador da conta cart\u00E3o
  'nomeAgencia': "nomeAgencia_example", // {String} Descri\u00E7\u00E3o da ag\u00EAncia
  'numeroAgencia': "numeroAgencia_example", // {String} N\u00FAmero da ag\u00EAncia
  'numeroConta': "numeroConta_example", // {String} N\u00FAmero da conta
  'flagContaOrigemDoc': 56, // {Integer} Sinaliza se origem \u00E9 DOC (1: DOC, 0: TED)
  'idPessoaFisica': 789, // {Integer} C\u00F3digo da pessoa
  'favorecido': "favorecido_example", // {String} Nome do favorecido
  'numeroReceiraFederal': "numeroReceiraFederal_example", // {String} Documento do favorecido
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
api.listarUsingGET15(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idConta** | **Integer**| C\u00F3digo identificador da conta cart\u00E3o | [optional] 
 **nomeAgencia** | **String**| Descri\u00E7\u00E3o da ag\u00EAncia | [optional] 
 **numeroAgencia** | **String**| N\u00FAmero da ag\u00EAncia | [optional] 
 **numeroConta** | **String**| N\u00FAmero da conta | [optional] 
 **flagContaOrigemDoc** | **Integer**| Sinaliza se origem \u00E9 DOC (1: DOC, 0: TED) | [optional] 
 **idPessoaFisica** | **Integer**| C\u00F3digo da pessoa | [optional] 
 **favorecido** | **String**| Nome do favorecido | [optional] 
 **numeroReceiraFederal** | **String**| Documento do favorecido | [optional] 
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00E7\u00E3o dos registros. | [optional] 
 **page** | **Integer**| P\u00E1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50) | [optional] 

### Return type

[**PageContaBancariaPortadorResponse**](PageContaBancariaPortadorResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET49"></a>
# **listarUsingGET49**
> PageTransferenciaBancariaResponse listarUsingGET49(id, opts)

Listar as transfer\u00EAncias banc\u00E1rias realizadas

Este recurso tem como objetivo permitir que o portador de um Cart\u00E3o possa consultar uma lista das Transfer\u00EAncias Banc\u00E1rias para os Favorecidos cadastrados.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.TransferenciaBancariaApi()

var id = 789; // {Integer} Id Conta

var opts = { 
  'idContaBancariaDestino': 789, // {Integer} C\u00F3digo de identifica\u00E7\u00E3o da conta banc\u00E1ria de destino (id)
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
api.listarUsingGET49(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| Id Conta | 
 **idContaBancariaDestino** | **Integer**| C\u00F3digo de identifica\u00E7\u00E3o da conta banc\u00E1ria de destino (id) | [optional] 
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00E7\u00E3o dos registros. | [optional] 
 **page** | **Integer**| P\u00E1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50) | [optional] 

### Return type

[**PageTransferenciaBancariaResponse**](PageTransferenciaBancariaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarUsingPOST8"></a>
# **salvarUsingPOST8**
> ContaBancariaPortadorResponse salvarUsingPOST8(persist)

Cadastra uma conta banc\u00E1ria do portador

Esse recurso permite cadastrar contas banc\u00E1rias do portador.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.TransferenciaBancariaApi()

var persist = new Pier.ContaBancariaPortadorPersist(); // {ContaBancariaPortadorPersist} persist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarUsingPOST8(persist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **persist** | [**ContaBancariaPortadorPersist**](ContaBancariaPortadorPersist.md)| persist | 

### Return type

[**ContaBancariaPortadorResponse**](ContaBancariaPortadorResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="simularTransferenciaBancariaUsingPOST"></a>
# **simularTransferenciaBancariaUsingPOST**
> PlanoParcelamentoTransferenciaCreditoContaBancariaResponse simularTransferenciaBancariaUsingPOST(request)

Realiza a simula\u00E7\u00E3o dos planos de parcelamentos para uma transfer\u00EAncia banc\u00E1ria de cr\u00E9dito entre contas banc\u00E1rias

Realiza a simula\u00E7\u00E3o dos planos de parcelamentos para uma transfer\u00EAncia banc\u00E1ria de cr\u00E9dito entre contas banc\u00E1rias.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.TransferenciaBancariaApi()

var request = new Pier.PlanoParcelamentoTransferenciaCreditoContaBancariaRequest(); // {PlanoParcelamentoTransferenciaCreditoContaBancariaRequest} request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.simularTransferenciaBancariaUsingPOST(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**PlanoParcelamentoTransferenciaCreditoContaBancariaRequest**](PlanoParcelamentoTransferenciaCreditoContaBancariaRequest.md)| request | 

### Return type

[**PlanoParcelamentoTransferenciaCreditoContaBancariaResponse**](PlanoParcelamentoTransferenciaCreditoContaBancariaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="transferenciaCreditoContaBancariaUsingPOST"></a>
# **transferenciaCreditoContaBancariaUsingPOST**
> TransferenciaCreditoContaBancariaResponse transferenciaCreditoContaBancariaUsingPOST(persist)

Realizar transfer\u00EAncia banc\u00E1ria do cart\u00E3o para contas banc\u00E1rias

Este recurso tem como objetivo permitir que o portador de um cart\u00E3o possa realizar a transfer\u00EAncia de cr\u00E9dito para uma conta banc\u00E1ria. Assim, o valor do cr\u00E9dito somado a tarifa para transfer\u00EAncia, quando praticada pelo emissor, ser\u00E1 debitado da conta de origem, se houver saldo suficiente, e ser\u00E1 creditado na conta banc\u00E1ria de destino.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.TransferenciaBancariaApi()

var persist = new Pier.TransferenciaCreditoContaBancariaPersist(); // {TransferenciaCreditoContaBancariaPersist} persist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.transferenciaCreditoContaBancariaUsingPOST(persist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **persist** | [**TransferenciaCreditoContaBancariaPersist**](TransferenciaCreditoContaBancariaPersist.md)| persist | 

### Return type

[**TransferenciaCreditoContaBancariaResponse**](TransferenciaCreditoContaBancariaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="transferirUsingPOST"></a>
# **transferirUsingPOST**
> TransferenciaBancariaResponse transferirUsingPOST(id, transferenciaBancariaPersist)

Realizar transfer\u00EAncia banc\u00E1ria do cart\u00E3o para contas banc\u00E1rias

Este recurso tem como objetivo permitir que o portador de um cart\u00E3o possa realizar a transfer\u00EAncia de cr\u00E9dito para uma conta banc\u00E1ria. Assim, o valor do cr\u00E9dito somado a tarifa para transfer\u00EAncia, quando praticada pelo emissor, ser\u00E1 debitado da conta de origem, se houver saldo suficiente, e ser\u00E1 creditado na conta banc\u00E1ria de destino.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.TransferenciaBancariaApi()

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

