const events = new Map();

const event = {
  eventNumber: 100,
  name: "Test name",
};

events.set(event.eventNumber, event);

module.exports = { event };
