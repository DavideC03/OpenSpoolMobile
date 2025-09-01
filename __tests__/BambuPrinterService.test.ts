import { BambuPrinterService, PrinterSettings, FilamentData, SlotInfo } from '../src/services/BambuPrinterService';

// Mock the MQTT library
jest.mock('sp-react-native-mqtt');

describe('BambuPrinterService', () => {
  let service: BambuPrinterService;
  beforeEach(() => {
    service = new BambuPrinterService();
    jest.clearAllMocks();
  });

  describe('static methods', () => {
    it('should return available slots', () => {
      const slots = BambuPrinterService.getAvailableSlots();
      expect(slots).toHaveLength(5);
      expect(slots[0]).toEqual({ id: 'external', label: 'External Spool', amsId: 255, trayId: 254 });
      expect(slots[1]).toEqual({ id: 'ams1', label: 'AMS Slot 1', amsId: 0, trayId: 0 });
    });

    it('should get correct brand codes for different filament types', () => {
      expect(BambuPrinterService.getBrandCode('PLA', 'Bambu')).toBe('GFA00');
      expect(BambuPrinterService.getBrandCode('PLA', 'Generic')).toBe('GFL99');
      expect(BambuPrinterService.getBrandCode('TPU', 'Bambu')).toBe('GFU01');
      expect(BambuPrinterService.getBrandCode('TPU', 'Generic')).toBe('GFU99');
      expect(BambuPrinterService.getBrandCode('PETG', 'Sunlu')).toBe('GFSNL08');
      expect(BambuPrinterService.getBrandCode('PETG', 'Generic')).toBe('GFG99');
      expect(BambuPrinterService.getBrandCode('ABS', 'Bambu')).toBe('GFB00');
      expect(BambuPrinterService.getBrandCode('ABS', 'Generic')).toBe('GFB99');
      expect(BambuPrinterService.getBrandCode('UNKNOWN', 'Generic')).toBe('GFL99');
    });
  });

  describe('instance methods', () => {
    const mockSettings: PrinterSettings = {
      ipAddress: '192.168.1.100',
      serialNumber: 'AC12345678',
      accessCode: 'test123',
    };

    it('should configure printer settings', () => {
      service.configure(mockSettings);
      expect(service.getSettings()).toEqual(mockSettings);
    });

    it('should throw error when connecting without settings', async () => {
      await expect(service.connect()).rejects.toThrow('Printer settings not configured');
    });

    it('should throw error when sending filament data without connection', async () => {
      const filamentData: FilamentData = {
        color_hex: 'FF0000',
        type: 'PLA',
        min_temp: 200,
        max_temp: 220,
        brand: 'Bambu',
      };
      const slot: SlotInfo = { id: 'ams1', label: 'AMS Slot 1', amsId: 0, trayId: 0 };

      await expect(service.sendFilamentToSlot(filamentData, slot)).rejects.toThrow('Not connected to printer');
    });
  });
});
