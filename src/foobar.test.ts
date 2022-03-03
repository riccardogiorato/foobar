import foobar from "./foobar";

// test foobar function
describe("foobar", () => {
  it("should print the numbers from 1 to 100", () => {
    foobar({});
  });

  it("should print numbers from 1 to 3", () => {
    expect(foobar({ from: 1, to: 3 })).toBe("1 2 Foo");
  });

  it("should print numbers from 1 to 5", () => {
    expect(foobar({ from: 1, to: 5 })).toBe("1 2 Foo 4 Bar");
  });

  it("should print numbers from 1 to 15", () => {
    expect(foobar({ from: 1, to: 15 })).toBe(
      "1 2 Foo 4 Bar Foo 7 8 Foo Bar 11 Foo 13 14 FooBar"
    );
  });
});
