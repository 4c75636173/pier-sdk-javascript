# Pier.ConfiguracaoRotativoDetalheResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Integer** | C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o de ConfiguracaoRotativo (id). | [optional] 
**idProduto** | **Integer** | C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Produto (idProduto). | [optional] 
**compoeOfertaValorRotativo** | **Boolean** | Quando verdadeiro, indica que o valor do rotativo deve compor a oferta de parcelamento. | [optional] 
**compoeOfertaValorNaoFinanciavel** | **Boolean** | Quando verdadeiro, indica que o valor n\u00C3\u00A3o financi\u00C3\u00A1vel deve compor a oferta de parcelamento. | [optional] 
**compoeOfertaValorNovosLancamentos** | **Boolean** | Quando verdadeiro, indica que o valor de novos lan\u00C3\u00A7amentos deve compor a oferta de parcelamento | [optional] 
**recalculaParcelamentoParaEntradaMaior** | **Boolean** | Quando verdadeiro, indica que deve recalcular o parcelamento caso o valor pago de entrada seja maior que o valor esperado | [optional] 
**minimoParcelasRecalculoParcelamento** | **Boolean** | Indica o m\u00C3\u00ADnimo de parcelas que ser\u00C3\u00A1 acatado no rec\u00C3\u00A1lculo do parcelamento. | [optional] 
**recalculaParcelamento** | **Boolean** | Quando verdadeiro, indica que o parcelamento deve ser recalculado caso o valor calculado da oferta seja inferior ao valor configurado m\u00C3\u00ADnimo da parcela (valorMinimoParcela) e de percentual aberto | [optional] 
**numeroMinimoOfertas** | **Boolean** | N\u00C3\u00BAmero m\u00C3\u00ADnimo de parcelas que ser\u00C3\u00A1 acatado no recalculo da oferta. | [optional] 
**aceitaPagamentoMaiorQueEntrada** | **Boolean** | Quando verdadeiro, indica que valores pagos entre o valor da entrada e o m\u00C3\u00ADnimo da fatura ser\u00C3\u00A3o acatados para a ades\u00C3\u00A3o ao parcelamento | [optional] 
**antecipaParcelamentosAbertos** | **Boolean** | Quando verdadeiro, indica que deve-se incluir o valor presente dos parcelamentos em aberto. | [optional] 
**valorMinimoParcela** | **Number** | Valor m\u00C3\u00ADnimo da parcela que deve ser aceito na oferta. | [optional] 
**percentualLimitarValorMinimoParcela** | **Number** | Percentual sobre os valores de parcelamento anteriores em aberto que deve ser considerado para limitar valorMinimoParcela. | [optional] 
**idRegraCampanha** | **Integer** | C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da regra de campanha. | [optional] 
**parcelarApenasMinimo** | **Boolean** | Quando verdadeiro, indica que parcelamento ofertado ter\u00C3\u00A1 como valor base o valor m\u00C3\u00ADnimo das transa\u00C3\u00A7\u00C3\u00B5es. | [optional] 
**usuario** | **String** | Nome do usu\u00C3\u00A1rio. | [optional] 


