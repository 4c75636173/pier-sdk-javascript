# Pier.PessoaPersist

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cpf** | **String** | N\u00C3\u00BAmero do CPF, quando PF. | [optional] 
**dataEmissaoIdentidade** | [**ModelDate**](ModelDate.md) | Data emiss\u00C3\u00A3o da Identidade | [optional] 
**dataNascimento** | [**ModelDate**](ModelDate.md) | Data de Nascimento da Pessoa, quando PF, ou a Data de Abertura da Empresa, quando PJ. Essa data deve ser informada no formato aaaa-MM-dd. | [optional] 
**email** | **String** | Email do s\u00C3\u00B3cio | [optional] 
**estadoCivil** | **String** | Estado civil do s\u00C3\u00B3cio | [optional] 
**nacionalidade** | **String** | Nacionalidade do s\u00C3\u00B3cio | [optional] 
**nome** | **String** | Apresenta o Nome do Socio | 
**numeroIdentidade** | **String** | N\u00C3\u00BAmero da Identidade. | [optional] 
**orgaoExpedidorIdentidade** | **String** | Org\u00C3\u00A3o expedidor da Identidade. | [optional] 
**profissao** | **String** | Profiss\u00C3\u00A3o do s\u00C3\u00B3cio | [optional] 
**sexo** | **String** | C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do sexo da Pessoa, quando PF, sendo: (\&quot;M\&quot;: Masculino), (\&quot;F\&quot;: Feminino). | [optional] 
**telefones** | [**[TelefonePessoaAprovadaPersist]**](TelefonePessoaAprovadaPersist.md) | Informa os telefones do s\u00C3\u00B3cio | [optional] 
**unidadeFederativaIdentidade** | **String** | Sigla da Unidade Federativa de onde foi expedido a Identidade | [optional] 


