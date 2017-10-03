# Pier.PlataformaMobileApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**atualizarUsingPUT1**](PlataformaMobileApi.md#atualizarUsingPUT1) | **PUT** /api/plataformas-mobile/{id} | Atualiza Plataforma Mobile
[**listarUsingGET19**](PlataformaMobileApi.md#listarUsingGET19) | **GET** /api/plataformas-mobile | Lista as plataformas mobile cadastradas
[**salvarUsingPOST14**](PlataformaMobileApi.md#salvarUsingPOST14) | **POST** /api/plataformas-mobile | Cadastra Plataforma Mobile


<a name="atualizarUsingPUT1"></a>
# **atualizarUsingPUT1**
> PlataformaMobileResponse atualizarUsingPUT1(id, update)

Atualiza Plataforma Mobile

Esse recurso permite atualizar plataforma mobile.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.PlataformaMobileApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Plataforma (id).

var update = new Pier.PlataformaMobileUpdate(); // {PlataformaMobileUpdate} update


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
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Plataforma (id). | 
 **update** | [**PlataformaMobileUpdate**](PlataformaMobileUpdate.md)| update | 

### Return type

[**PlataformaMobileResponse**](PlataformaMobileResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET19"></a>
# **listarUsingGET19**
> PagePlataformaMobileResponse listarUsingGET19(opts)

Lista as plataformas mobile cadastradas

Este m\u00C3\u00A9todo permite que sejam listadas as plataformas mobile existentes na base do PIER.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.PlataformaMobileApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
  'nome': "nome_example" // {String} Nome da Plataforma Mobile
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET19(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros. | [optional] 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 
 **nome** | **String**| Nome da Plataforma Mobile | [optional] 

### Return type

[**PagePlataformaMobileResponse**](PagePlataformaMobileResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarUsingPOST14"></a>
# **salvarUsingPOST14**
> PlataformaMobileResponse salvarUsingPOST14(persist)

Cadastra Plataforma Mobile

Esse recurso permite cadastrar plataformas mobile.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.PlataformaMobileApi()

var persist = new Pier.PlataformaMobilePersist(); // {PlataformaMobilePersist} persist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarUsingPOST14(persist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **persist** | [**PlataformaMobilePersist**](PlataformaMobilePersist.md)| persist | 

### Return type

[**PlataformaMobileResponse**](PlataformaMobileResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

