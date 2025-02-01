var o = {
    v1: 'v1',
    v2: 'v2',
    f1: function () {
        console.log(this.v1);
    },
    f2: function () {
        console.log(this.v2);
    }
}

var p = {
    v1: 'p_v1',
    v2: 'p_v2',
    f3: function () {
        console.log(o.v1);
    },
    f4: function () {
        console.log(o.v2);
    }
}

o.f1();
o.f2();
p.f3();
p.f4();