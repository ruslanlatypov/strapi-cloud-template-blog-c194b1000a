'use strict';

/**
 * mockup service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::mockup.mockup');
