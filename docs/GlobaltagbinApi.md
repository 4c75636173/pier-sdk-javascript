# Pier.GlobaltagbinApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listarBinUsingGET**](GlobaltagbinApi.md#listarBinUsingGET) | **GET** /api/bins | {{{Bin_resource_listar_bins}}}


<a name="listarBinUsingGET"></a>
# **listarBinUsingGET**
> PageBinResponse listarBinUsingGET(opts)

{{{Bin_resource_listar_bins}}}

{{{Bin_resource_listar_Bin_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagbinApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'id': 789, // {Integer} {{{bin_request_id_value}}}
  'proximaConta': 789, // {Integer} {{{bin_request_proximaconta_value}}}
  'flagCartaoVirtual': 56, // {Integer} {{{bin_request_flagcartaocirtual_value}}}
  'flagProvisorio': 56, // {Integer} {{{bin_request_flagprovisorio_value}}}
  'serviceCode': 56 // {Integer} {{{bin_request_servicecode_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarBinUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **id** | **Integer**| {{{bin_request_id_value}}} | [optional] 
 **proximaConta** | **Integer**| {{{bin_request_proximaconta_value}}} | [optional] 
 **flagCartaoVirtual** | **Integer**| {{{bin_request_flagcartaocirtual_value}}} | [optional] 
 **flagProvisorio** | **Integer**| {{{bin_request_flagprovisorio_value}}} | [optional] 
 **serviceCode** | **Integer**| {{{bin_request_servicecode_value}}} | [optional] 

### Return type

[**PageBinResponse**](PageBinResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

