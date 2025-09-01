import { StorageService } from '../src/services/StorageService';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Mock AsyncStorage
jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
}));

describe('StorageService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should save printer settings successfully', async () => {
    const settings = {
      ipAddress: '192.168.1.100',
      serialNumber: '01S00A123456789',
      accessCode: '12345678',
    };

    (AsyncStorage.setItem as jest.Mock).mockResolvedValue(undefined);

    await StorageService.savePrinterSettings(settings);

    expect(AsyncStorage.setItem).toHaveBeenCalledWith(
      'openspool_printer_settings',
      JSON.stringify(settings)
    );
  });

  it('should load printer settings successfully', async () => {
    const settings = {
      ipAddress: '192.168.1.100',
      serialNumber: '01S00A123456789',
      accessCode: '12345678',
    };

    (AsyncStorage.getItem as jest.Mock).mockResolvedValue(JSON.stringify(settings));

    const result = await StorageService.loadPrinterSettings();

    expect(AsyncStorage.getItem).toHaveBeenCalledWith('openspool_printer_settings');
    expect(result).toEqual(settings);
  });

  it('should return null when no settings are stored', async () => {
    (AsyncStorage.getItem as jest.Mock).mockResolvedValue(null);

    const result = await StorageService.loadPrinterSettings();

    expect(result).toBeNull();
  });

  it('should clear printer settings successfully', async () => {
    (AsyncStorage.removeItem as jest.Mock).mockResolvedValue(undefined);

    await StorageService.clearPrinterSettings();

    expect(AsyncStorage.removeItem).toHaveBeenCalledWith('openspool_printer_settings');
  });
});
