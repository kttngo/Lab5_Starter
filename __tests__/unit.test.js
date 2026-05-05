// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

//isPhoneNumber
test ('valid phone number: (123) 456-7890', () => {
    expect(isPhoneNumber("(123) 456-7890")).toBe(true);
});
test ('valid phone number: 123-456-7890', () => {
    expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('invalid phone number: 1234567890', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});
test('invalid phone number: abc', () => {
  expect(isPhoneNumber('abc')).toBe(false);
});

//isEmail
test('valid email: tester123@gmail.com', () => {
    expect(isEmail('tester123@gmail.com')).toBe(true);
});
test('valid email: user1@ucsd.edu', () => {
  expect(isEmail('user1@ucsd.edu')).toBe(true);
});

test('invalid email: tester@gmail', () => {
  expect(isEmail('tester@gmail')).toBe(false);
});
test('invalid email: tester@gmail.u', () => {
  expect(isEmail('tester@gmail.u')).toBe(false);
});

//isStrongPassword
test('valid password: abcd123', () => {
  expect(isStrongPassword('abcd123')).toBe(true);
});
test('valid password: PASS_234', () => {
  expect(isStrongPassword('PASS_234')).toBe(true);
});

test('invalid password (too short): abc', () => {
  expect(isStrongPassword('abc')).toBe(false);
});
test('invalid password (special character): abc#', () => {
    expect(isStrongPassword('abc#')).toBe(false);
});

//isDate
test('valid date: 5/4/2026', () => {
  expect(isDate('5/4/2026')).toBe(true);
});
test('valid date: 11/31/2024', () => {
  expect(isDate('11/31/2024')).toBe(true);
});

test('invalid date (dash): 5-4-2026', () => {
  expect(isDate('5-4-2026')).toBe(false);
});
test('invalid date (wrong year format): 5/1/26', () => {
  expect(isDate('5/1/26')).toBe(false);
});

//isHexColor
test('valid hex color: #0A0B03', () => {
  expect(isHexColor('#0A0B03')).toBe(true);
});
test('valid hex color: #d53', () => {
  expect(isHexColor('#d53')).toBe(true);
});

test('invalid hex color: red', () => {
  expect(isHexColor('red')).toBe(false);
});
test('invalid hex color: #0A0B003', () => {
    expect(isHexColor('#0A0B003')).toBe(false);
});