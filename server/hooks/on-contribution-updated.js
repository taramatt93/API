// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

const logger = require('winston');
const ElasticsearchWrapper = require('../services/search/elasticsearch.wrapper');


module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function (hook) {
    
    let es = new ElasticsearchWrapper();
    //https://docs.feathersjs.com/api/hooks.html
    logger.info('ES001 on contribution added:');
    
    try {
      let data = hook.result;

      logger.info('ES001 hook.data:' + JSON.stringify(data));

      es.update(data);

    } catch (error) {
      logger.error('Error:' + error);
    }
    

    return Promise.resolve(hook);
  };
};