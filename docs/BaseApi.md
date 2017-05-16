# Pier.BaseApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**limparUsingPOST**](BaseApi.md#limparUsingPOST) | **POST** /api/bases/limpar | Limpar mapa de bases


<a name="limparUsingPOST"></a>
# **limparUsingPOST**
> BodyAccessToken limparUsingPOST

Limpar mapa de bases

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.BaseApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.limparUsingPOST(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**BodyAccessToken**](BodyAccessToken.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

