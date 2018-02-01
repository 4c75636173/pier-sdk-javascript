# Pier.TransferenciaBancariaApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**atualizarUsingPUT1**](TransferenciaBancariaApi.md#atualizarUsingPUT1) | **PUT** /api/contas-bancarias-portador/{id} | Atualiza conta banc\u00C3\u00A1ria portador
[**consultarTransferenciaBancariaUsingGET**](TransferenciaBancariaApi.md#consultarTransferenciaBancariaUsingGET) | **GET** /api/transferencias-creditos-contas-bancarias/{idTransferencia} | Realiza a consulta de uma transfer\u00C3\u00AAncia banc\u00C3\u00A1ria de cr\u00C3\u00A9dito entre contas banc\u00C3\u00A1rias de um portador
[**consultarUsingGET10**](TransferenciaBancariaApi.md#consultarUsingGET10) | **GET** /api/contas-bancarias-portador/{id} | Consulta conta banc\u00C3\u00A1ria portador
[**consultarUsingGET39**](TransferenciaBancariaApi.md#consultarUsingGET39) | **GET** /api/contas/{id}/transferencias-creditos-contas-bancarias/{id_transferencia} | Consultar uma transfer\u00C3\u00AAncia banc\u00C3\u00A1ria para um banco
[**listarTransferenciaBancariaUsingGET**](TransferenciaBancariaApi.md#listarTransferenciaBancariaUsingGET) | **GET** /api/transferencias-creditos-contas-bancarias | Realiza a listagem das transfer\u00C3\u00AAncias banc\u00C3\u00A1rias de cr\u00C3\u00A9dito entre contas banc\u00C3\u00A1rias
[**listarUsingGET11**](TransferenciaBancariaApi.md#listarUsingGET11) | **GET** /api/contas-bancarias-portador | Lista contas banc\u00C3\u00A1rias portador
[**listarUsingGET44**](TransferenciaBancariaApi.md#listarUsingGET44) | **GET** /api/contas/{id}/transferencias-creditos-contas-bancarias | Listar as transfer\u00C3\u00AAncias banc\u00C3\u00A1rias realizadas
[**salvarUsingPOST7**](TransferenciaBancariaApi.md#salvarUsingPOST7) | **POST** /api/contas-bancarias-portador | Cadastra uma conta banc\u00C3\u00A1ria do portador
[**simularTransferenciaBancariaUsingPOST**](TransferenciaBancariaApi.md#simularTransferenciaBancariaUsingPOST) | **POST** /api/simular-transferencias-creditos-contas-bancarias | Realiza a simula\u00C3\u00A7\u00C3\u00A3o dos planos de parcelamentos para uma transfer\u00C3\u00AAncia banc\u00C3\u00A1ria de cr\u00C3\u00A9dito entre contas banc\u00C3\u00A1rias
[**transferenciaCreditoContaBancariaUsingPOST**](TransferenciaBancariaApi.md#transferenciaCreditoContaBancariaUsingPOST) | **POST** /api/transferencias-creditos-contas-bancarias | Realizar transfer\u00C3\u00AAncia banc\u00C3\u00A1ria do cart\u00C3\u00A3o para contas banc\u00C3\u00A1rias
[**transferirUsingPOST**](TransferenciaBancariaApi.md#transferirUsingPOST) | **POST** /api/contas/{id}/transferencias-creditos-contas-bancarias | Realizar transfer\u00C3\u00AAncia banc\u00C3\u00A1ria do cart\u00C3\u00A3o para contas banc\u00C3\u00A1rias


<a name="atualizarUsingPUT1"></a>
# **atualizarUsingPUT1**
> ContaBancariaPortadorResponse atualizarUsingPUT1(id, update)

Atualiza conta banc\u00C3\u00A1ria portador

Esse recurso permite atualizar uma conta banc\u00C3\u00A1ria do portador.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.TransferenciaBancariaApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta banc\u00C3\u00A1ria do portador (id).

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
 **id** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta banc\u00C3\u00A1ria do portador (id). | 
 **update** | [**ContaBancariaPortadorUpdate**](ContaBancariaPortadorUpdate.md)| update | 

### Return type

[**ContaBancariaPortadorResponse**](ContaBancariaPortadorResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarTransferenciaBancariaUsingGET"></a>
# **consultarTransferenciaBancariaUsingGET**
> TransferenciaCreditoContaBancariaResponse consultarTransferenciaBancariaUsingGET(idTransferencia)

Realiza a consulta de uma transfer\u00C3\u00AAncia banc\u00C3\u00A1ria de cr\u00C3\u00A9dito entre contas banc\u00C3\u00A1rias de um portador

Recurso utilizado para recuperar uma transfer\u00C3\u00AAncia de cr\u00C3\u00A9dito entre contas banc\u00C3\u00A1ria de um portador, utiliza o ID da transfer\u00C3\u00AAncia banc\u00C3\u00A1riae o idConta para realizar a consulta.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.TransferenciaBancariaApi()

var idTransferencia = 789; // {Integer} Id Transfer\u00C3\u00AAncia


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
 **idTransferencia** | **Integer**| Id Transfer\u00C3\u00AAncia | 

### Return type

[**TransferenciaCreditoContaBancariaResponse**](TransferenciaCreditoContaBancariaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET10"></a>
# **consultarUsingGET10**
> ContaBancariaPortadorResponse consultarUsingGET10(id)

Consulta conta banc\u00C3\u00A1ria portador

Esse recurso permite consultar uma conta banc\u00C3\u00A1ria do portador a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.TransferenciaBancariaApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta banc\u00C3\u00A1ria (id).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET10(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta banc\u00C3\u00A1ria (id). | 

### Return type

[**ContaBancariaPortadorResponse**](ContaBancariaPortadorResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET39"></a>
# **consultarUsingGET39**
> TransferenciaBancariaResponse consultarUsingGET39(id, idTransferencia, opts)

Consultar uma transfer\u00C3\u00AAncia banc\u00C3\u00A1ria para um banco

Este recurso permite consultar os detalhes de uma determinada transfer\u00C3\u00AAncia de cr\u00C3\u00A9dito realizada para uma conta banc\u00C3\u00A1ria. De modo geral, esta opera\u00C3\u00A7\u00C3\u00A3o poder\u00C3\u00A1 ser utilizada para uma consulta simples destes detalhes ou para realizar a montagem de um comprovante de 2\u00C2\u00AA via de transfer\u00C3\u00AAncia entre contas.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.TransferenciaBancariaApi()

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
api.consultarUsingGET39(id, idTransferencia, opts, callback);
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

<a name="listarTransferenciaBancariaUsingGET"></a>
# **listarTransferenciaBancariaUsingGET**
> PageTransferenciaCreditoContaBancariaResponse listarTransferenciaBancariaUsingGET(opts)

Realiza a listagem das transfer\u00C3\u00AAncias banc\u00C3\u00A1rias de cr\u00C3\u00A9dito entre contas banc\u00C3\u00A1rias

Recurso utilizado para listar as transfer\u00C3\u00AAncia de cr\u00C3\u00A9dito entre contas banc\u00C3\u00A1ria de um portador solicitadas.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.TransferenciaBancariaApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
  'idConta': 789, // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da Conta.
  'dataSolicitacaoInicial': "dataSolicitacaoInicial_example", // {String} Data inicial da solicita\u00C3\u00A7\u00C3\u00A3o de transfer\u00C3\u00AAncia.
  'dataSolicitacaoFinal': "dataSolicitacaoFinal_example" // {String} Data final da solicita\u00C3\u00A7\u00C3\u00A3o de transfer\u00C3\u00AAncia
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
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros. | [optional] 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 
 **idConta** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da Conta. | [optional] 
 **dataSolicitacaoInicial** | **String**| Data inicial da solicita\u00C3\u00A7\u00C3\u00A3o de transfer\u00C3\u00AAncia. | [optional] 
 **dataSolicitacaoFinal** | **String**| Data final da solicita\u00C3\u00A7\u00C3\u00A3o de transfer\u00C3\u00AAncia | [optional] 

### Return type

[**PageTransferenciaCreditoContaBancariaResponse**](PageTransferenciaCreditoContaBancariaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET11"></a>
# **listarUsingGET11**
> PageContaBancariaPortadorResponse listarUsingGET11(opts)

Lista contas banc\u00C3\u00A1rias portador

Esse recurso permite listar contas banc\u00C3\u00A1rias do portador.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.TransferenciaBancariaApi()

var opts = { 
  'idConta': 789, // {Integer} C\u00C3\u00B3digo identificador da conta cart\u00C3\u00A3o
  'nomeAgencia': "nomeAgencia_example", // {String} Descri\u00C3\u00A7\u00C3\u00A3o da ag\u00C3\u00AAncia
  'numeroAgencia': "numeroAgencia_example", // {String} N\u00C3\u00BAmero da ag\u00C3\u00AAncia
  'numeroConta': "numeroConta_example", // {String} N\u00C3\u00BAmero da conta
  'flagContaOrigemDoc': 56, // {Integer} Sinaliza se origem \u00C3\u00A9 DOC (1: DOC, 0: TED)
  'idPessoaFisica': 789, // {Integer} C\u00C3\u00B3digo da pessoa
  'favorecido': "favorecido_example", // {String} Nome do favorecido
  'numeroReceiraFederal': "numeroReceiraFederal_example", // {String} Documento do favorecido
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
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
api.listarUsingGET11(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idConta** | **Integer**| C\u00C3\u00B3digo identificador da conta cart\u00C3\u00A3o | [optional] 
 **nomeAgencia** | **String**| Descri\u00C3\u00A7\u00C3\u00A3o da ag\u00C3\u00AAncia | [optional] 
 **numeroAgencia** | **String**| N\u00C3\u00BAmero da ag\u00C3\u00AAncia | [optional] 
 **numeroConta** | **String**| N\u00C3\u00BAmero da conta | [optional] 
 **flagContaOrigemDoc** | **Integer**| Sinaliza se origem \u00C3\u00A9 DOC (1: DOC, 0: TED) | [optional] 
 **idPessoaFisica** | **Integer**| C\u00C3\u00B3digo da pessoa | [optional] 
 **favorecido** | **String**| Nome do favorecido | [optional] 
 **numeroReceiraFederal** | **String**| Documento do favorecido | [optional] 
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros. | [optional] 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 

### Return type

[**PageContaBancariaPortadorResponse**](PageContaBancariaPortadorResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET44"></a>
# **listarUsingGET44**
> PageTransferenciaBancariaResponse listarUsingGET44(id, opts)

Listar as transfer\u00C3\u00AAncias banc\u00C3\u00A1rias realizadas

Este recurso tem como objetivo permitir que o portador de um Cart\u00C3\u00A3o possa consultar uma lista das Transfer\u00C3\u00AAncias Banc\u00C3\u00A1rias para os Favorecidos cadastrados.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.TransferenciaBancariaApi()

var id = 789; // {Integer} Id Conta

var opts = { 
  'idContaBancariaDestino': 789, // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta banc\u00C3\u00A1ria de destino (id)
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
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
api.listarUsingGET44(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| Id Conta | 
 **idContaBancariaDestino** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta banc\u00C3\u00A1ria de destino (id) | [optional] 
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros. | [optional] 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 

### Return type

[**PageTransferenciaBancariaResponse**](PageTransferenciaBancariaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarUsingPOST7"></a>
# **salvarUsingPOST7**
> ContaBancariaPortadorResponse salvarUsingPOST7(persist)

Cadastra uma conta banc\u00C3\u00A1ria do portador

Esse recurso permite cadastrar contas banc\u00C3\u00A1rias do portador.

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
api.salvarUsingPOST7(persist, callback);
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

Realiza a simula\u00C3\u00A7\u00C3\u00A3o dos planos de parcelamentos para uma transfer\u00C3\u00AAncia banc\u00C3\u00A1ria de cr\u00C3\u00A9dito entre contas banc\u00C3\u00A1rias

Realiza a simula\u00C3\u00A7\u00C3\u00A3o dos planos de parcelamentos para uma transfer\u00C3\u00AAncia banc\u00C3\u00A1ria de cr\u00C3\u00A9dito entre contas banc\u00C3\u00A1rias.

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

Realizar transfer\u00C3\u00AAncia banc\u00C3\u00A1ria do cart\u00C3\u00A3o para contas banc\u00C3\u00A1rias

Este recurso tem como objetivo permitir que o portador de um cart\u00C3\u00A3o possa realizar a transfer\u00C3\u00AAncia de cr\u00C3\u00A9dito para uma conta banc\u00C3\u00A1ria. Assim, o valor do cr\u00C3\u00A9dito somado a tarifa para transfer\u00C3\u00AAncia, quando praticada pelo emissor, ser\u00C3\u00A1 debitado da conta de origem, se houver saldo suficiente, e ser\u00C3\u00A1 creditado na conta banc\u00C3\u00A1ria de destino.

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

Realizar transfer\u00C3\u00AAncia banc\u00C3\u00A1ria do cart\u00C3\u00A3o para contas banc\u00C3\u00A1rias

Este recurso tem como objetivo permitir que o portador de um cart\u00C3\u00A3o possa realizar a transfer\u00C3\u00AAncia de cr\u00C3\u00A9dito para uma conta banc\u00C3\u00A1ria. Assim, o valor do cr\u00C3\u00A9dito somado a tarifa para transfer\u00C3\u00AAncia, quando praticada pelo emissor, ser\u00C3\u00A1 debitado da conta de origem, se houver saldo suficiente, e ser\u00C3\u00A1 creditado na conta banc\u00C3\u00A1ria de destino.

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

