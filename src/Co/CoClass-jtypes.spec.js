// Expose describe and it functions globally
buster.spec.expose();

describe("CoClass", function () {
    it("has the create Method static", function () {
		 expect(Co.CoClass.create).toBeDefined();
		 var o = Co.CoClass.create();
		 expect(o.create).not.toBeDefined();		 
    });

    it("hase the extend Method static", function () {
		expect(Co.CoClass.extend).toBeDefined();
		var o = Co.CoClass.create();
		expect(o.extend).not.toBeDefined();	
    });

});
