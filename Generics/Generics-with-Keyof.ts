// Get the Array of Key Values from any the Dog Array
const printArrayWithKey = <DataType, KeyType extends keyof DataType>(
  array: DataType[],
  searchingKey: KeyType
): DataType[KeyType][] => {
  return array.map((item) => item[searchingKey]);
};

const dogArray = [
  { name: "Caesar", age: 10 },
  { name: "Jojo", age: 3 },
];

console.log(printArrayWithKey(dogArray, "age"));

// Event Map Interface
interface BaseEvent {
  eventName: string;
  eventId: number;
}

interface SpecificEventMap {
  logEvent: BaseEvent & { message: string; timestamp: number };
  checkoutEvent: BaseEvent & { success: boolean };
}

const printEvent = <EventKey extends keyof SpecificEventMap>(
  eventKey: EventKey,
  event: SpecificEventMap[EventKey]
): SpecificEventMap[EventKey] => {
  return event;
};

console.log(
  "\nCheckout Event is : ",
  printEvent("checkoutEvent", {
    eventName: "Logger",
    eventId: 1234,
    success: true,
  })
);

console.log(
  "\nLogging Event is : ",
  printEvent("logEvent", {
    eventName: "Logger",
    eventId: 1234,
    message: "Message is Logged",
    timestamp: 1234455,
  })
);
