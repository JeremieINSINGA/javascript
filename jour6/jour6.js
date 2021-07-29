'##01 Format'

function formatDate(stringDate) {
  var date = new Date(stringDate);
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

console.log(formatDate("2020-12-11"));

function calculateAge(birthday) {
  var date = new Date(birthday);
  var age = new Date(new Date() - date);
  return age.getFullYear() - 1970;
}

console.log(calculateAge("1988-11-17"));

'##02 - Age'

var moment = require("moment");

function formatDate(stringDate) {
 var date = moment(stringDate);
 return date.format("DD/MM/YYYY");
}

console.log(formatDate("2020-12-11"));

function calculateAge(birthday) {
  var date = moment(birthday);
  return date.fromNow()
}

console.log(calculateAge("1988-11-17"));

'##03 - Validator'

var prompt = require("prompt");

var schema = {
  properties: {
    email: { pattern: /^\S+@\S+\.\S+$/, required: true, message:"Email non valide" },
    username: {pattern: /^[a-zA-Z-]+$/, required: true, message:"Username non valide"},
    password: {required: true, message:"Password non valide", conform: function (value) {
        if (value.search(/.{6,}/) === -1) {
            return false;
        }

        if (value.search(/[a-zA-Z]/) === -1) {
            return false;
        }

        if (value.search(/[0-9]/) === -1) {
            return false;
        }

        if (value.search(/[^a-zA-Z0-9-]/) > -1) {
            return false;
        }

        return true;
    }}
  },
};

prompt.start();
prompt.get(schema, (err, res) => {
    console.log(res);
});