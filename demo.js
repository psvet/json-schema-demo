'use strict'

const jsb = require('json-schema-builder');
const fs = require('fs');
const ZSchema = require('z-schema');
const validator = new ZSchema();

let schema = jsb.schema()
                .properties({
                   id: jsb.integer(),
                   name: jsb.string(),
                   species: jsb.string(),
                   description: jsb.object()
                      .properties({
                          age: jsb.integer(),
                          mix: jsb.boolean(),
                          breed: jsb.type(['string', 'array'])
                      })
                })
                .required(['id', 'name', 'description'])
                .additionalProperties(false);

let filepath = 'schema.json';
schema.save(filepath, (err) => {
  if (err) throw err;
  
  console.log(`Schema saved to ${filepath}!\n`);
  console.log('==================\n');

  let schema = JSON.parse(fs.readFileSync(filepath, 'utf8'));
  let valid = validator.validateSchema(schema);

  console.log(`${filepath} validated against Z-Schema: ${valid}\n`);

});
