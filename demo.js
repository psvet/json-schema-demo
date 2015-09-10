'use strict'

const jsb = require('json-schema-builder');

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
});
