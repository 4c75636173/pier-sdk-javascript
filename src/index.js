if (typeof module === 'object' && module.exports) {
  var CaaS = {};
  
  CaaS.DesbloquearCartaoResponse = require('./model/DesbloquearCartaoResponse.js');
  
  CaaS.CartaoResponse = require('./model/CartaoResponse.js');
  
  CaaS.ConsultarExtratoContaResponse = require('./model/ConsultarExtratoContaResponse.js');
  
  CaaS.PessoaFisicaResponse = require('./model/PessoaFisicaResponse.js');
  
  CaaS.ConsultarSaldoLimitesResponse = require('./model/ConsultarSaldoLimitesResponse.js');
  
  CaaS.ConsultarCartaoResponse = require('./model/ConsultarCartaoResponse.js');
  
  CaaS.ExtratoResponse = require('./model/ExtratoResponse.js');
  
  CaaS.ContaResponse = require('./model/ContaResponse.js');
  
  CaaS.CancelarCartaoResponse = require('./model/CancelarCartaoResponse.js');
  
  CaaS.SaldoLimiteResponse = require('./model/SaldoLimiteResponse.js');
  
  
  CaaS.ContaApi = require('./api/ContaApi.js');
  
  CaaS.CartaoApi = require('./api/CartaoApi.js');
  
  module.exports = CaaS;
}