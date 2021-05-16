// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom"

function MockNotification(title, options) {
  this.title = title
  this.options = options
  this.close = () => {}
}

Object.defineProperty(MockNotification, "requestPermission", {
  value: jest.fn()
})

Object.defineProperty(MockNotification, "permission", {
  get() {
    return this._permission
  },
  configurable: true,
  enumerable: true
})

global.Notification = MockNotification

beforeEach(() => {
  jest.useFakeTimers()
})
