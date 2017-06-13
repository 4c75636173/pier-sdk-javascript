# Pier.BoletoDeFatura

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dataProcessamento** | **String** | Data do processamento (emiss\u00C3\u00A3o ou faturamento) do boleto | [optional] 
**dataDocumento** | **String** | Data do documento (impress\u00C3\u00A3o) | [optional] 
**dataVencimento** | **String** | Data do vencimento | [optional] 
**valorBoleto** | **Number** | Valor do Boleto. | [optional] 
**numeroDoDocumento** | **String** | N\u00C3\u00BAmero do documento \u00C3\u00A9 o c\u00C3\u00B3digo informado pelo banco para identifica\u00C3\u00A7\u00C3\u00A3o do cliente | [optional] 
**nomeBeneficiario** | **String** | Benefici\u00C3\u00A1rio \u00C3\u00A9 a pessoa/empresa que gera o boleto | [optional] 
**agencia** | **String** | Ag\u00C3\u00AAncia. | [optional] 
**codigoBeneficiario** | **String** | C\u00C3\u00B3digo do benefici\u00C3\u00A1rio | [optional] 
**digitoCodigoBeneficiario** | **String** | D\u00C3\u00ADgito do c\u00C3\u00B3digo do benefici\u00C3\u00A1rio | [optional] 
**numeroConvenio** | **String** | N\u00C3\u00BAmero do conv\u00C3\u00AAnio fornecido pelo banco \u00C3\u00A9 o c\u00C3\u00B3digo que identifica um emissor junto ao seu banco para associar seus boletos. | [optional] 
**carteira** | **String** | Carteira \u00C3\u00A9 o c\u00C3\u00B3digo informado pelo banco pra identifica\u00C3\u00A7\u00C3\u00A3o do tipo do boleto | [optional] 
**nossoNumero** | **String** | Nosso n\u00C3\u00BAmero \u00C3\u00A9 o c\u00C3\u00B3digo que o benefici\u00C3\u00A1rio escolhe para manter controle sobre seus boletos. Esse valor serve para o cedente identificar quais boletos foram pagos ou n\u00C3\u00A3o. Recomenda-se o uso de n\u00C3\u00BAmeros sequ\u00C3\u00AAnciais, na gera\u00C3\u00A7\u00C3\u00A3o de diversos boletos, para facilitar a identifica\u00C3\u00A7\u00C3\u00A3o dos boletos pagos | [optional] 
**banco** | **String** | Banco | [optional] 
**digitoNossoNumero** | **String** | D\u00C3\u00ADgito do nosso n\u00C3\u00BAmero | [optional] 
**aceite** | **Boolean** | Aceite informa ao banco se deve aceitar o boleto ap\u00C3\u00B3s a data de vencimento (padr\u00C3\u00A3o: \&quot;N\&quot;) | [optional] 
**especieDoDocumento** | **String** | Esp\u00C3\u00A9cie do documento \u00C3\u00A9 o identificador do tipo de boleto (padr\u00C3\u00A3o: \&quot;DV\&quot;) | [optional] 
**especie** | **String** | Esp\u00C3\u00A9cie \u00C3\u00A9 o identificador da moeda do boleto (padr\u00C3\u00A3o: \&quot;R$\&quot;) | [optional] 
**instrucoes** | **[String]** | Instru\u00C3\u00A7\u00C3\u00B5es para o benefici\u00C3\u00A1rio | [optional] 
**locaisDePagamento** | **[String]** | Locais de pagamento | [optional] 
**nomePagador** | **String** | Pagador \u00C3\u00A9 a pessoa/empresa que deve pagar o boleto | [optional] 
**documentoBeneficiario** | **String** | Documento do Beneficiario. | [optional] 
**documentoPagador** | **String** | Documento do pagador (CPF ou CNPJ) | [optional] 
**logradouroPagador** | **String** | Logradouro do pagador | [optional] 
**bairroPagador** | **String** | Bairro do pagador | [optional] 
**cepPagador** | **String** | CEP do pagador | [optional] 
**cidadePagador** | **String** | Cidade do pagador | [optional] 
**ufPagador** | **String** | Unidade federativa do pagador | [optional] 
**codigoDeBarras** | **String** | Valor num\u00C3\u00A9rico do c\u00C3\u00B3digo de barras | [optional] 
**linhaDigitavel** | **String** | Linha digit\u00C3\u00A1vel formatada | [optional] 


