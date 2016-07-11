describe('array.flatmap test',function () {
  it("array.flatmap should be defined", function () {
    expect(Array.prototype.flatMap).toBeDefined();
    expect([].flatMap).toBeDefined();
  });


  it("missing lambda should throo", function () {
    expect(function () {[].flatMap()}).toThrowError(TypeError)
  });


  it("single level array  should return as is", function () {
    expect([1,2,3].flatMap(function (self) {return self})).toEqual([1,2,3]);
  });


  it("deep level array  should retur flattend", function () {
    expect([[1],[2],[3]].flatMap(function (self) {return self})).toEqual([1,2,3]);
  });

  it("deep level array  should retur flattend", function () {
    expect([[1],[2],[3]].flatMap(function (self) {return self})).toEqual([1,2,3]);
  });

});
