var members = ['leoni', 'sonny', 'kim'];
console.log(members[1]);

var i = 0;
while (i < members.length) {
    console.log('array loop', members[i]);
    i = i + 1;
};

var roles = {
    'programmer': 'leoni',
    'designer': 'sonny',
    'manager': 'kim'
};
console.log(roles.manager);
console.log(roles['designer']);

for (var name in roles) {
    console.log('object => ', name, '\t', 'value => ', roles[name]);
}