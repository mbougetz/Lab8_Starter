// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

//isPhoneNumber
test('isPhoneNumber: test 818-828-8334', () => {
    expect(functions.isPhoneNumber("818-828-8334")).toBe(true);
  });

  test('isPhoneNumber: test 818-420-6969', () => {
    expect(functions.isPhoneNumber("818-420-6969")).toBe(true);
  });

  test('isPhoneNumber: test 9818g3243432432-8akdjhsadaasdjask28-8334', () => {
    expect(functions.isPhoneNumber("9818g3243432432-8akdjhsadaasdjask28-8334")).toBe(false);
  });

  test('isPhoneNumber: test 818-828-balls', () => {
    expect(functions.isPhoneNumber("818-828-balls")).toBe(false);
  });


//isEmail
test('isEmail: test bill@google.com', () => {
    expect(functions.isEmail("bill@google.com")).toBe(true);
  });

  test('isEmail: test dangus@dongus.org', () => {
    expect(functions.isEmail("dangus@dongus.org")).toBe(true);
  });

  test('isEmail: test bi.ll@g.o@o@gl@e.c@o@m', () => {
    expect(functions.isEmail("bi.ll@g.o@o@gl@e.c@o@m")).toBe(false);
  });

  test('isEmail: test dangus@dongus@dingus.org.net.com.weed', () => {
    expect(functions.isEmail("dangus@dongus@dingus.org.net.com.weed")).toBe(false);
  });

//isStrongPassword
test('isStrongPassword: test A89asdasddsd', () => {
    expect(functions.isStrongPassword("A89asdasddsd")).toBe(true);
});

test('isStrongPassword: test Chongus', () => {
    expect(functions.isStrongPassword("Chongus")).toBe(true);
});

test('isStrongPassword: test A89asdasddsddadasdsadadasdadsadasdsadasdsadsadsadsadsadsdsadadsadsadsa', () => {
    expect(functions.isStrongPassword("A89asdasddsddadasdsadadasdadsadasdsadasdsadsadsadsadsadsdsadadsadsadsa")).toBe(false);
});

test('isStrongPassword: test 123', () => {
    expect(functions.isStrongPassword("123")).toBe(false);
});

//isDate
test('isDate: test 03/02/21', () => {
    expect(functions.isDate("03/02/2121")).toBe(true);
});

test('isDate: test 03/02/15', () => {
    expect(functions.isDate("03/02/1515")).toBe(true);
});

test('isDate: test 032/02/21', () => {
    expect(functions.isDate("032/02/21")).toBe(false);
});

test('isDate: test 03/0221', () => {
    expect(functions.isDate("03/0221")).toBe(false);
});

//isHexColor
test('isHexColor: test #F21', () => {
    expect(functions.isHexColor("#F21")).toBe(true);
});

test('isHexColor: test #D25', () => {
    expect(functions.isHexColor("#D21")).toBe(true);
});

test('isHexColor: test #F2a1', () => {
    expect(functions.isHexColor("##F2a1")).toBe(false);
});

test('isHexColor: test #Fasdsadsasadsa21', () => {
    expect(functions.isHexColor("Fasdsadsasadsa21")).toBe(false);
});