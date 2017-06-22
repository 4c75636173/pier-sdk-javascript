# Pier.DispositivosApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ativarUsingPOST**](DispositivosApi.md#ativarUsingPOST) | **POST** /api/dispositivos/{id}/ativar-dispositivo | Ativa Dispositivo
[**desativarUsingPOST**](DispositivosApi.md#desativarUsingPOST) | **POST** /api/dispositivos/{id}/desativar-dispositivo | Desativa Dispositivo
[**listarUsingGET8**](DispositivosApi.md#listarUsingGET8) | **GET** /api/dispositivos | Lista os dispositivos cadastrados
[**salvarUsingPOST3**](DispositivosApi.md#salvarUsingPOST3) | **POST** /api/dispositivos | Cadastra Dispositivo


<a name="ativarUsingPOST"></a>
# **ativarUsingPOST**
> DispositivoResponse ativarUsingPOST(id)

Ativa Dispositivo

Esse recurso permite ativar dispositivo.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.DispositivosApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Plataforma (id).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.ativarUsingPOST(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Plataforma (id). | 

### Return type

[**DispositivoResponse**](DispositivoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="desativarUsingPOST"></a>
# **desativarUsingPOST**
> DispositivoResponse desativarUsingPOST(id)

Desativa Dispositivo

Esse recurso permite desativar dispositivo.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.DispositivosApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Plataforma (id).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.desativarUsingPOST(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Plataforma (id). | 

### Return type

[**DispositivoResponse**](DispositivoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET8"></a>
# **listarUsingGET8**
> PageDispositivoResponse listarUsingGET8(opts)

Lista os dispositivos cadastrados

Este m\u00C3\u00A9todo permite que sejam listados os dispositivos existentes na base do PIER.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.DispositivosApi()

var opts = { 
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
  'token': "token_example", // {String} Token do Dispositivo
  'idUsuario': 789, // {Integer} Identificador do Usu\u00C3\u00A1rio
  'idAplicacaoMobile': 789, // {Integer} Identificador da aplica\u00C3\u00A7\u00C3\u00A3o
  'dataCriacao': "dataCriacao_example", // {String} Apresenta a data e em que o registro foi criado.
  'dataDesativacao': "dataDesativacao_example" // {String} Apresenta a data e em que o registro foi desativado.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET8(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 
 **token** | **String**| Token do Dispositivo | [optional] 
 **idUsuario** | **Integer**| Identificador do Usu\u00C3\u00A1rio | [optional] 
 **idAplicacaoMobile** | **Integer**| Identificador da aplica\u00C3\u00A7\u00C3\u00A3o | [optional] 
 **dataCriacao** | **String**| Apresenta a data e em que o registro foi criado. | [optional] 
 **dataDesativacao** | **String**| Apresenta a data e em que o registro foi desativado. | [optional] 

### Return type

[**PageDispositivoResponse**](PageDispositivoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarUsingPOST3"></a>
# **salvarUsingPOST3**
> DispositivoResponse salvarUsingPOST3(persist)

Cadastra Dispositivo

Esse recurso permite cadastrar dispositivos.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.DispositivosApi()

var persist = new Pier.DispositivoPersist(); // {DispositivoPersist} persist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarUsingPOST3(persist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **persist** | [**DispositivoPersist**](DispositivoPersist.md)| persist | 

### Return type

[**DispositivoResponse**](DispositivoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

