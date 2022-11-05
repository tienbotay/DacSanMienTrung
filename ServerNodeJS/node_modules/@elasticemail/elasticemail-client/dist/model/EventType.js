"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* Enum class EventType.
* @enum {}
* @readonly
*/
var EventType = /*#__PURE__*/function () {
  function EventType() {
    _classCallCheck(this, EventType);

    _defineProperty(this, "Submission", "Submission");

    _defineProperty(this, "FailedAttempt", "FailedAttempt");

    _defineProperty(this, "Bounce", "Bounce");

    _defineProperty(this, "Sent", "Sent");

    _defineProperty(this, "Open", "Open");

    _defineProperty(this, "Click", "Click");

    _defineProperty(this, "Unsubscribe", "Unsubscribe");

    _defineProperty(this, "Complaint", "Complaint");
  }

  _createClass(EventType, null, [{
    key: "constructFromObject",
    value:
    /**
    * Returns a <code>EventType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/EventType} The enum <code>EventType</code> value.
    */
    function constructFromObject(object) {
      return object;
    }
  }]);

  return EventType;
}();

exports["default"] = EventType;