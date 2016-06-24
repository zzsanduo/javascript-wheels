var copy = require('../src/copy-object.js');

describe('copyObject, ', function() {
    it('can shallow copy an object', function() {
        var src = {
            'name': 'zzsanduo',
            'info': {
                'hobby': 'cycling'
            },
            'expirences': [
                'BUPT',
                'Schlumberger'
            ]

        };
        var dest = {};

        copy(src, dest);
        src.info.hobby = 'singing';
        src.expirences.push('future');

        expect(dest.name).toBe('zzsanduo');
        expect(dest.info.hobby).toBe('singing');
        expect(dest.expirences.length).toBe(3);


    });

    it('can deep copy an object', function() {
        var src = {
            'name': 'zzsanduo',
            'info': {
                'hobby': 'cycling'
            }
        };
        var dest = {};

        copy(src, dest, true);
        src.info.hobby = 'singing';

        expect(dest.name).toBe('zzsanduo');
        expect(dest.info.hobby).toBe('cycling');

    });

    it('can deep copy an object with array property', function() {
        var src = {
            'name': 'zzsanduo',
            'info': {
                'hobby': 'cycling'
            },
            'expirences': [
                'BUPT',
                'Schlumberger'
            ]
        };
        var dest = {};

        copy(src, dest, true);
        src.info.hobby = 'singing';
        src.expirences.push('future');

        expect(dest.name).toBe('zzsanduo');
        expect(dest.info.hobby).toBe('cycling');
        expect(dest.expirences.length).toBe(2);
        expect(src.expirences.length).toBe(3);
    });

    it('can deep copy an object with complexed property', function() {
        var src = {
            'name': 'zzsanduo',
            'info': {
                'hobby': 'cycling',
                'family': [
                    'baba',
                    'mama',
                    'husband'
                ]
            },
            'expirences': [
                ['BUPT', 'BUPT'], {
                    'Schlumberger': {
                        'start': '2014',
                        'end': 'now'
                    }

                }
            ]
        };
        var dest = {};

        copy(src, dest, true);
        src.expirences[1].Schlumberger.start = '2014.2';

        expect(dest.expirences[1].Schlumberger.start).toBe('2014');
    });


});