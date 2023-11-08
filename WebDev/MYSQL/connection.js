

var mysql = require('mysql');
var con = mysql.createConnection({
    host: 'localhost',
    user:'root',
    database:'univ1'
});
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    });
    const { faker } = require('@faker-js/faker');
    const dept_names = ["CS&IS","English","Chemistry","Nurse"];
    let N = 2;
const std_info = [];
for (let i = 0; i < N; i++){
    let rand_index = faker.number.int({min: 0,max:3});
    var rand_name = faker.person.fullName();
    let rand_Department = dept_names[rand_index];
    var rand_GPA = (Math.random() * 4.0).toFixed(2);
    var rand_tot_credit = faker.number.int({min: 15, max: 120});
    console.log("Random std name:" + rand_name);
    console.log(rand_Department);
    console.log("Random total credit:"+ rand_tot_credit);
    std_info.push([rand_name, rand_GPA, rand_tot_credit, rand_Department]);
}
var q = "insert into STUDENT1 (name,GPA,TOT_CREDIT,rand_Department) values ?";
con.query(q, [std_info], function(err, results, fields){
    if (err) throw err;
    console.log(results.affectedRows + "students inserted");
});
con.end();