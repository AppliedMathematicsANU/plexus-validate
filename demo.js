var validate = require('./index');

var data = {
  "manager": {
    "name": "jill",
    "age" : 43
  },
  "employees": [
    {
      "name": "jane",
      "age" : 27
    },
    {
      "name": "jack",
      "age" : "thirty"
    }
  ]
};

var schema = {
  "definitions": {
    "person": {
      "type": "object",
      "properties": {
        "name": {
          "title": "Name",
          "type": "string"
        },
        "age": {
          "title": "Age",
          "type": "integer"
        }
      }
    }
  },
  "title": "Testdata",
  "type": "object",
  "properties": {
    "manager": { "$ref": "#/definitions/person" },
    "employees": {
      "type" : "array",
      "items": { "$ref": "#/definitions/person" }
    }
  }
};

console.log(validate(schema, data, schema));

/*
Output:

[ { path: [ 'employees', '1', 'age' ],
    errors: [ 'must be a number' ] } ]
*/
