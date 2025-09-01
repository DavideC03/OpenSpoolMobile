// Mock for sp-react-native-mqtt
const mockClient = {
  connect: jest.fn(),
  disconnect: jest.fn(),
  publish: jest.fn(),
  on: jest.fn(),
};

const MQTT = {
  createClient: jest.fn(() => Promise.resolve(mockClient)),
};

module.exports = MQTT;
