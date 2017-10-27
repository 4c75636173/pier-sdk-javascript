# Pier.ConductorPayApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**atualizarChaveUsingPOST**](ConductorPayApi.md#atualizarChaveUsingPOST) | **POST** /api/cartoes-tokenizados/{id}/atualizar-chave | Atualiza a chave de gera\u00C3\u00A7\u00C3\u00A3o de transa\u00C3\u00A7\u00C3\u00A3o
[**atualizarUsingPUT**](ConductorPayApi.md#atualizarUsingPUT) | **PUT** /api/cartoes-tokenizados/{id} | Atualiza os dados do cart\u00C3\u00A3o
[**confirmaAtualizacaoChaveUsingPOST**](ConductorPayApi.md#confirmaAtualizacaoChaveUsingPOST) | **POST** /api/cartoes-tokenizados/{id}/confirmar-chave | Confirma a atualiza\u00C3\u00A7\u00C3\u00A3o da chave de transa\u00C3\u00A7\u00C3\u00A3o
[**consultarUsingGET5**](ConductorPayApi.md#consultarUsingGET5) | **GET** /api/cartoes-tokenizados/{id} | Apresenta os dados de um determinado cart\u00C3\u00A3o
[**listarCodigosRespostaUsingGET**](ConductorPayApi.md#listarCodigosRespostaUsingGET) | **GET** /api/codigos-resposta | Lista os c\u00C3\u00B3digos de resposta dos recursos de transa\u00C3\u00A7\u00C3\u00A3o e consulta de conta
[**listarModosEntradaUsingGET**](ConductorPayApi.md#listarModosEntradaUsingGET) | **GET** /api/modos-entrada | Lista os modos entradas
[**listarOperacoesUsingGET**](ConductorPayApi.md#listarOperacoesUsingGET) | **GET** /api/operacoes | Lista as opera\u00C3\u00A7\u00C3\u00B5es
[**listarTiposTerminaisUsingGET**](ConductorPayApi.md#listarTiposTerminaisUsingGET) | **GET** /api/tipos-terminais | Lista os tipos de terminais
[**listarTiposTransacoesUsingGET**](ConductorPayApi.md#listarTiposTransacoesUsingGET) | **GET** /api/tipos-transacoes | Lista os tipos de transa\u00C3\u00A7\u00C3\u00B5es
[**listarUsingGET6**](ConductorPayApi.md#listarUsingGET6) | **GET** /api/cartoes-tokenizados | Lista os cart\u00C3\u00B5es cadastrados
[**salvarUsingPOST4**](ConductorPayApi.md#salvarUsingPOST4) | **POST** /api/cartoes-tokenizados | Cria\u00C3\u00A7\u00C3\u00A3o de cart\u00C3\u00A3o


<a name="atualizarChaveUsingPOST"></a>
# **atualizarChaveUsingPOST**
> CartaoPayAtualizarChaveResponse atualizarChaveUsingPOST(deviceId, id)

Atualiza a chave de gera\u00C3\u00A7\u00C3\u00A3o de transa\u00C3\u00A7\u00C3\u00A3o

Este m\u00C3\u00A9todo permite atualizar a chave de gera\u00C3\u00A7\u00C3\u00A3o de transa\u00C3\u00A7\u00C3\u00A3o de um dispositivo a partir do seu identificador (id).

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ConductorPayApi()

var deviceId = "deviceId_example"; // {String} Device id criptografado

var id = 789; // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do cart\u00C3\u00A3o (id).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.atualizarChaveUsingPOST(deviceId, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **String**| Device id criptografado | 
 **id** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do cart\u00C3\u00A3o (id). | 

### Return type

[**CartaoPayAtualizarChaveResponse**](CartaoPayAtualizarChaveResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="atualizarUsingPUT"></a>
# **atualizarUsingPUT**
> CartaoPayResponse atualizarUsingPUT(deviceId, id, update)

Atualiza os dados do cart\u00C3\u00A3o

Este m\u00C3\u00A9todo permite atualizar os dados do cart\u00C3\u00A3o tokenizados de um dispositivo a partir do seu identificador (id).

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ConductorPayApi()

var deviceId = "deviceId_example"; // {String} Device id criptografado

var id = 789; // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do cart\u00C3\u00A3o (id).

var update = new Pier.CartaoPayUpdate(); // {CartaoPayUpdate} update


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.atualizarUsingPUT(deviceId, id, update, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **String**| Device id criptografado | 
 **id** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do cart\u00C3\u00A3o (id). | 
 **update** | [**CartaoPayUpdate**](CartaoPayUpdate.md)| update | 

### Return type

[**CartaoPayResponse**](CartaoPayResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="confirmaAtualizacaoChaveUsingPOST"></a>
# **confirmaAtualizacaoChaveUsingPOST**
> CartaoPayConfirmarChaveResponse confirmaAtualizacaoChaveUsingPOST(deviceId, id, update)

Confirma a atualiza\u00C3\u00A7\u00C3\u00A3o da chave de transa\u00C3\u00A7\u00C3\u00A3o

Este met\u00C3\u00B3do recebe confirma\u00C3\u00A7\u00C3\u00A3o de atualiza\u00C3\u00A7\u00C3\u00A3o de chave transa\u00C3\u00A7\u00C3\u00A3o.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ConductorPayApi()

var deviceId = "deviceId_example"; // {String} Device id criptografado

var id = 789; // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do cart\u00C3\u00A3o (id).

var update = new Pier.CartaoPayKeyUpdate(); // {CartaoPayKeyUpdate} update


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.confirmaAtualizacaoChaveUsingPOST(deviceId, id, update, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **String**| Device id criptografado | 
 **id** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do cart\u00C3\u00A3o (id). | 
 **update** | [**CartaoPayKeyUpdate**](CartaoPayKeyUpdate.md)| update | 

### Return type

[**CartaoPayConfirmarChaveResponse**](CartaoPayConfirmarChaveResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET5"></a>
# **consultarUsingGET5**
> CartaoPayDetalheResponse consultarUsingGET5(deviceId, id)

Apresenta os dados de um determinado cart\u00C3\u00A3o

Este m\u00C3\u00A9todo permite consultar as informa\u00C3\u00A7\u00C3\u00B5es de um determinado cart\u00C3\u00A3o a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ConductorPayApi()

var deviceId = "deviceId_example"; // {String} Device id criptografado

var id = 789; // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do cart\u00C3\u00A3o (id).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET5(deviceId, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **String**| Device id criptografado | 
 **id** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do cart\u00C3\u00A3o (id). | 

### Return type

[**CartaoPayDetalheResponse**](CartaoPayDetalheResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarCodigosRespostaUsingGET"></a>
# **listarCodigosRespostaUsingGET**
> [Object] listarCodigosRespostaUsingGET

Lista os c\u00C3\u00B3digos de resposta dos recursos de transa\u00C3\u00A7\u00C3\u00A3o e consulta de conta

Este m\u00C3\u00A9todo retorna a lista dos c\u00C3\u00B3digos de resposta das transa\u00C3\u00A7\u00C3\u00B5es e consulta de saque realizada no Pay.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ConductorPayApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarCodigosRespostaUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**[Object]**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarModosEntradaUsingGET"></a>
# **listarModosEntradaUsingGET**
> [Object] listarModosEntradaUsingGET

Lista os modos entradas

Este recurso permite listar os modos de entrada para transa\u00C3\u00A7\u00C3\u00A3o

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ConductorPayApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarModosEntradaUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**[Object]**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarOperacoesUsingGET"></a>
# **listarOperacoesUsingGET**
> [Object] listarOperacoesUsingGET

Lista as opera\u00C3\u00A7\u00C3\u00B5es

Este recurso permite listar as opera\u00C3\u00A7\u00C3\u00B5es disponiveis de transa\u00C3\u00A7\u00C3\u00A3o

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ConductorPayApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarOperacoesUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**[Object]**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarTiposTerminaisUsingGET"></a>
# **listarTiposTerminaisUsingGET**
> [Object] listarTiposTerminaisUsingGET

Lista os tipos de terminais

Este m\u00C3\u00A9todo retorna a lista dos tipos de terminais.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ConductorPayApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarTiposTerminaisUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**[Object]**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarTiposTransacoesUsingGET"></a>
# **listarTiposTransacoesUsingGET**
> [Object] listarTiposTransacoesUsingGET

Lista os tipos de transa\u00C3\u00A7\u00C3\u00B5es

Este m\u00C3\u00A9todo retorna a lista dos tipos de transa\u00C3\u00A7\u00C3\u00B5es realizadas no Pay.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ConductorPayApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarTiposTransacoesUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**[Object]**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET6"></a>
# **listarUsingGET6**
> PageCartaoPayResponse listarUsingGET6(opts)

Lista os cart\u00C3\u00B5es cadastrados

Este m\u00C3\u00A9todo permite listar os cart\u00C3\u00B5es cadastrado em um dispositivo.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ConductorPayApi()

var opts = { 
  'deviceId': "deviceId_example", // {String} Device id criptografado
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
  'status': "status_example", // {String} Status do cart\u00C3\u00A3o tokenizado
  'numeroCartao': "numeroCartao_example" // {String} Numero do cart\u00C3\u00A3o tokenizado
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET6(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **String**| Device id criptografado | [optional] 
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros. | [optional] 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 
 **status** | **String**| Status do cart\u00C3\u00A3o tokenizado | [optional] 
 **numeroCartao** | **String**| Numero do cart\u00C3\u00A3o tokenizado | [optional] 

### Return type

[**PageCartaoPayResponse**](PageCartaoPayResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarUsingPOST4"></a>
# **salvarUsingPOST4**
> CartaoPayCadastroResponse salvarUsingPOST4(deviceId, persist)

Cria\u00C3\u00A7\u00C3\u00A3o de cart\u00C3\u00A3o

Este met\u00C3\u00B3do permite a tokeniza\u00C3\u00A7\u00C3\u00A3o de um cart\u00C3\u00A3o a partir dos seus dados impressos.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ConductorPayApi()

var deviceId = "deviceId_example"; // {String} Device id criptografado

var persist = new Pier.CartaoPayPersist(); // {CartaoPayPersist} persist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarUsingPOST4(deviceId, persist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **String**| Device id criptografado | 
 **persist** | [**CartaoPayPersist**](CartaoPayPersist.md)| persist | 

### Return type

[**CartaoPayCadastroResponse**](CartaoPayCadastroResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

