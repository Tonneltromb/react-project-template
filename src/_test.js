let data = [
    {
        a: 1,
        c: []
    },
    {
        a: 2,
        c: [
            {
                a: 21,
                c: []
            },
            {
                a: 22,
                c: [
                    {
                        a: 221,
                        c: [
                            {
                                a: 2211,
                                c: []
                            },
                            {
                                a: 2212,
                                c: [
                                    {
                                        a: 22121,
                                        c: []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        a: 222,
                        c: []
                    }
                ]
            }
        ]
    },
    {
        a: 3,
        c: [
            {
                a: 31,
                c: []
            }
        ]
    }
];

function maxNesting(array, initMax, nesting) {
    let _m = initMax;
    let _n = nesting;
    for (let elem of array) {
        if (elem.c.length > 0) {
            if (_m < _n + 1) _m = _m + 1;
            let res = maxNesting(elem.c, _m, _n + 1);
            if (res > _m) _m = res;
        }
    }
    return _m;
}

function maxNesting_v2(array, currentMax, nestingLevel) {
    return array.reduce((max, elem, i, a) => {
        let _m = max;
        let _n = nestingLevel;
        if (elem.c.length > 0) {
            if (_m < _n + 1) _m = _m + 1;
            const nestedMax = maxNesting_v2(elem.c, _m, _n + 1);
            if (nestedMax > _m) _m = nestedMax;
        }
        return _m;
    }, currentMax)
}

console.log(maxNesting(data, 1, 1));
console.log(maxNesting_v2(data, 1, 1));