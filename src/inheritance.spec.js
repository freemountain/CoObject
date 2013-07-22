
buster.spec.expose();

describe("Inheritance", function () {
    before(function () {

        this.TestClass = Co.CoClass.extend({
            '+publicCounter': 0,            
			'#protectedCounter': 0,
            '-privateCounterr': 0
        }, {
            'init': function (a,b,c) {
				this.publicCounter = a;                
				this.protectedCounter = b;
				this.privateCounter = c;
            },
			'+setProtectedCounter': function (c) {
                this.protectedCounter = c;
            },
            '+getProtectedCounter': function () {
                return this.protectedCounter;
            },
            '+setPrivateCounter': function (c) {
                this.privateCounter = c;
            },
		    '+getPrivateCounter': function () {
                return this.privateCounter;
            }

        });
	});
	
	it('create inherited Object', function(){
		var o  = this.TestClass.create(1,2,3);
		expect(o instanceof this.TestClass).toBe(true);
		expect(o instanceof Co.CoClass).toBe(true);
		

	});
    
	it('publishs only public member', function () {
		var o = this.TestClass.create(1,2,3);
		expect(o.publicCounter).toBeDefined();
		expect(o.protectedCounter).not.toBeDefined();
		expect(o.privateCounter).not.toBeDefined();

		expect(o.getProtectedCounter).toBeDefined();
		expect(o.setProtectedCounter).toBeDefined();
		expect(o.getPrivateCounter).toBeDefined();
		expect(o.setPrivateCounter).toBeDefined();
	});
/*
	it('member cann access all levels', function(){
		
	});*/
});
