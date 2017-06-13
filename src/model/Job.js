(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.Job = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Job model module.
   * @module model/Job
   * @version 2.16.2
   */

  /**
   * Constructs a new <code>Job</code>.
   * Job
   * @alias module:model/Job
   * @class
   */
  var exports = function() {






  };

  /**
   * Constructs a <code>Job</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Job} obj Optional instance to populate.
   * @return {module:model/Job} The populated <code>Job</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('descricao')) {
        obj['descricao'] = ApiClient.convertToType(data['descricao'], 'String');
      }
      if (data.hasOwnProperty('groovy')) {
        obj['groovy'] = ApiClient.convertToType(data['groovy'], 'String');
      }
      if (data.hasOwnProperty('cron')) {
        obj['cron'] = ApiClient.convertToType(data['cron'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
    }
    return obj;
  }


  /**
   * Identificador do Job
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * Descricao do Job
   * @member {String} descricao
   */
  exports.prototype['descricao'] = undefined;

  /**
   * Script Groovy do Job
   * @member {String} groovy
   */
  exports.prototype['groovy'] = undefined;

  /**
   * Cron do Job
   * @member {String} cron
   */
  exports.prototype['cron'] = undefined;

  /**
   * Status do Job no agendador de tarefas
   * @member {module:model/Job.StatusEnum} status
   */
  exports.prototype['status'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = { 
    /**
     * value: ATIVO
     * @const
     */
    ATIVO: "ATIVO",
    
    /**
     * value: INATIVO
     * @const
     */
    INATIVO: "INATIVO"
  };

  return exports;
}));
