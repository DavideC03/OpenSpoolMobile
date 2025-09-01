const NfcTech = {
  IsoDep: 'IsoDep',
  NfcA: 'NfcA',
  NfcB: 'NfcB',
  NfcF: 'NfcF',
  NfcV: 'NfcV',
  Ndef: 'Ndef',
  MifareClassic: 'MifareClassic',
  MifareUltralight: 'MifareUltralight',
  MifareIOS: 'MifareIOS',
  Iso15693IOS: 'Iso15693IOS',
  FeliCaIOS: 'FeliCaIOS',
};

const Ndef = {
  TNF_EMPTY: 0x0,
  TNF_WELL_KNOWN: 0x01,
  TNF_MIME_MEDIA: 0x02,
  TNF_ABSOLUTE_URI: 0x03,
  TNF_EXTERNAL_TYPE: 0x04,
  TNF_UNKNOWN: 0x05,
  TNF_UNCHANGED: 0x06,
  TNF_RESERVED: 0x07,
  RTD_TEXT: [0x54],
  RTD_URI: [0x55],
  RTD_SMART_POSTER: [0x53, 0x70],
  RTD_ALTERNATIVE_CARRIER: [0x61, 0x63],
  RTD_HANDOVER_CARRIER: [0x48, 0x63],
  RTD_HANDOVER_REQUEST: [0x48, 0x72],
  RTD_HANDOVER_SELECT: [0x48, 0x73],
  uriHelper: {
    // Mock URI helper
    stringToBytes: jest.fn(),
    bytesToString: jest.fn(),
  },
  textHelper: {
    // Mock text helper
    decodePayload: jest.fn(),
    encodePayload: jest.fn(),
  },
  encodeMessage: jest.fn(),
  decodeMessage: jest.fn(),
};

const NfcManager = {
  start: jest.fn(() => Promise.resolve()),
  stop: jest.fn(() => Promise.resolve()),
  isEnabled: jest.fn(() => Promise.resolve(true)),
  goToNfcSetting: jest.fn(() => Promise.resolve()),
  registerTagEvent: jest.fn(() => Promise.resolve()),
  unregisterTagEvent: jest.fn(() => Promise.resolve()),
  requestTechnology: jest.fn(() => Promise.resolve()),
  closeTechnology: jest.fn(() => Promise.resolve()),
  getTag: jest.fn(() => Promise.resolve({})),
  setAlertMessage: jest.fn(),
  setEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  getNdefMessage: jest.fn(() => Promise.resolve([])),
  writeNdefMessage: jest.fn(() => Promise.resolve()),
  getCachedNdefMessage: jest.fn(() => Promise.resolve(null)),
  clearNdefMessage: jest.fn(() => Promise.resolve()),
  // Add any other methods used in your app
};

export default NfcManager;
export { NfcTech, Ndef };
