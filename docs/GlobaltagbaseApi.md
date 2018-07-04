# Pier.GlobaltagbaseApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**limparUsingPOST**](GlobaltagbaseApi.md#limparUsingPOST) | **POST** /api/bases/limpar | {{{base_resource_limpar}}}


<a name="limparUsingPOST"></a>
# **limparUsingPOST**
> BodyAccessToken limparUsingPOST

{{{base_resource_limpar}}}

{{{base_resource_limpar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagbaseApi()

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

