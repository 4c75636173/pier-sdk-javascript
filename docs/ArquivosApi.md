# Pier.ArquivosApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**consultarUsingGET**](ArquivosApi.md#consultarUsingGET) | **GET** /api/arquivos/{id} | Consulta de arquivo no PIER Cloud
[**salvarUsingPOST1**](ArquivosApi.md#salvarUsingPOST1) | **POST** /api/arquivos | Permite armazenar arquivos no PIER Cloud


<a name="consultarUsingGET"></a>
# **consultarUsingGET**
> ArquivoResponse consultarUsingGET(id)

Consulta de arquivo no PIER Cloud

Este recurso permite consultar um determinado arquivo armazenado no PIER Cloud.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ArquivosApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do arquivo


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
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do arquivo | 

### Return type

[**ArquivoResponse**](ArquivoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarUsingPOST1"></a>
# **salvarUsingPOST1**
> ArquivoResponse salvarUsingPOST1(arquivoPersist)

Permite armazenar arquivos no PIER Cloud

Este recurso permite o armazenamento de arquivos no PIER Cloud.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ArquivosApi()

var arquivoPersist = new Pier.ArquivoPersist(); // {ArquivoPersist} arquivoPersist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarUsingPOST1(arquivoPersist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **arquivoPersist** | [**ArquivoPersist**](ArquivoPersist.md)| arquivoPersist | 

### Return type

[**ArquivoResponse**](ArquivoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

