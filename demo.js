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
      "required": [ "name" ],
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
    "manager": {
      "title": "Manager",
      "allOf": [
        {
          "type": "object",
          "required": [ "group" ],
          "properties": {
            "group": {
              "title": "Group",
              "type": "string"
            }
          }
        },
        {
          "$ref": "#/definitions/person"
        }
      ]
    },
    "employees": {
      "type" : "array",
      "items": {
        "title": "Employee",
        "allOf": [
          {
            "$ref": "#/definitions/person"
          }
        ]
      }
    }
  }
};

console.log(validate(schema, data, schema));

/*
Output:

[ { path: [ 'employees', '1', 'age' ],
    errors: [ 'must be a number' ] } ]
*/
