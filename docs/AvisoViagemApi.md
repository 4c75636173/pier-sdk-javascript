# Pier.AvisoViagemApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**consultarUsingGET4**](AvisoViagemApi.md#consultarUsingGET4) | **GET** /api/avisos-viagens/{id} | Consultar um aviso viagem de acordo com o id passado
[**desabilitarUsingPOST**](AvisoViagemApi.md#desabilitarUsingPOST) | **POST** /api/avisos-viagens/{id}/desabilitar | Desabilitar um aviso viagem de acordo com o id passado
[**habilitarUsingPOST**](AvisoViagemApi.md#habilitarUsingPOST) | **POST** /api/avisos-viagens/{id}/habilitar | Habilitar um aviso viagem de acordo com o id passado
[**listarUsingGET6**](AvisoViagemApi.md#listarUsingGET6) | **GET** /api/avisos-viagens | Lista os avisos viagens gerados pelo Emissor
[**salvarUsingPOST3**](AvisoViagemApi.md#salvarUsingPOST3) | **POST** /api/avisos-viagens | Realiza o cadastro de um novo Aviso Viagem


<a name="consultarUsingGET4"></a>
# **consultarUsingGET4**
> AvisoViagemResponse consultarUsingGET4(id)

Consultar um aviso viagem de acordo com o id passado

Este m\u00C3\u00A9todo permite que seja consultado um aviso viagen existente na base do emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.AvisoViagemApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Aviso Viagem (id).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET4(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Aviso Viagem (id). | 

### Return type

[**AvisoViagemResponse**](AvisoViagemResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="desabilitarUsingPOST"></a>
# **desabilitarUsingPOST**
> AvisoViagemResponse desabilitarUsingPOST(id)

Desabilitar um aviso viagem de acordo com o id passado

Este m\u00C3\u00A9todo permite que seja desabilitado um aviso viagen existente na base do emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.AvisoViagemApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Aviso Viagem (id).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.desabilitarUsingPOST(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Aviso Viagem (id). | 

### Return type

[**AvisoViagemResponse**](AvisoViagemResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="habilitarUsingPOST"></a>
# **habilitarUsingPOST**
> AvisoViagemResponse habilitarUsingPOST(id)

Habilitar um aviso viagem de acordo com o id passado

Este m\u00C3\u00A9todo permite que seja habilitado um aviso viagen existente na base do emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.AvisoViagemApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Aviso Viagem (id).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.habilitarUsingPOST(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Aviso Viagem (id). | 

### Return type

[**AvisoViagemResponse**](AvisoViagemResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET6"></a>
# **listarUsingGET6**
> PageAvisoViagemResponse listarUsingGET6(opts)

Lista os avisos viagens gerados pelo Emissor

Este m\u00C3\u00A9todo permite que sejam listados os avisos viagens existentes na base do emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.AvisoViagemApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
  'idCartao': 789, // {Integer} C\u00C3\u00B3digo Identificador do cart\u00C3\u00A3o na base (id)
  'codigoPais': "codigoPais_example", // {String} Codigo identificador do pa\u00C3\u00ADs na base (id)
  'dataInicio': "dataInicio_example", // {String} Data inicio do aviso viagem
  'dataFim': "dataFim_example", // {String} Data fim do aviso viagem
  'flagAtivo': 56 // {Integer} Identifica se o aviso viagem esta ativo ou n\u00C3\u00A3o
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
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros. | [optional] 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 
 **idCartao** | **Integer**| C\u00C3\u00B3digo Identificador do cart\u00C3\u00A3o na base (id) | [optional] 
 **codigoPais** | **String**| Codigo identificador do pa\u00C3\u00ADs na base (id) | [optional] 
 **dataInicio** | **String**| Data inicio do aviso viagem | [optional] 
 **dataFim** | **String**| Data fim do aviso viagem | [optional] 
 **flagAtivo** | **Integer**| Identifica se o aviso viagem esta ativo ou n\u00C3\u00A3o | [optional] 

### Return type

[**PageAvisoViagemResponse**](PageAvisoViagemResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarUsingPOST3"></a>
# **salvarUsingPOST3**
> AvisoViagemResponse salvarUsingPOST3(idCartao, codigoPais, dataInicio, dataFim)

Realiza o cadastro de um novo Aviso Viagem

Este m\u00C3\u00A9todo permite que seja cadastrado um novo Aviso Viagem na base de dados do Emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.AvisoViagemApi()

var idCartao = 789; // {Integer} C\u00C3\u00B3digo Identificador do cart\u00C3\u00A3o na base (id)

var codigoPais = "codigoPais_example"; // {String} Codigo identificador do pa\u00C3\u00ADs na base (id)

var dataInicio = "dataInicio_example"; // {String} Data inicio do aviso viagem

var dataFim = "dataFim_example"; // {String} Data fim do aviso viagem


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarUsingPOST3(idCartao, codigoPais, dataInicio, dataFim, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idCartao** | **Integer**| C\u00C3\u00B3digo Identificador do cart\u00C3\u00A3o na base (id) | 
 **codigoPais** | **String**| Codigo identificador do pa\u00C3\u00ADs na base (id) | 
 **dataInicio** | **String**| Data inicio do aviso viagem | 
 **dataFim** | **String**| Data fim do aviso viagem | 

### Return type

[**AvisoViagemResponse**](AvisoViagemResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

