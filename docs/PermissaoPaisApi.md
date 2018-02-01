# Pier.PermissaoPaisApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listarContinentesUsingGET**](PermissaoPaisApi.md#listarContinentesUsingGET) | **GET** /api/continentes | Lista os continentes


<a name="listarContinentesUsingGET"></a>
# **listarContinentesUsingGET**
> [Object] listarContinentesUsingGET

Lista os continentes

Este recurso permite listar os continentes utilizados no recurso de permiss\u00C3\u00A3o de uso do cart\u00C3\u00A3o no exterior

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.PermissaoPaisApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarContinentesUsingGET(callback);
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

