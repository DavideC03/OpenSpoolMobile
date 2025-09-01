/**
 * @format
 */

import 'react-native';

// Note: import explicitly to use the types shipped with jest.
import {it, describe, expect} from '@jest/globals';

// Import individual services for focused testing
import { StorageService } from '../src/services/StorageService';
import { bambuPrinterService } from '../src/services/BambuPrinterService';

describe('OpenSpool App Integration', () => {
  it('should have StorageService available', () => {
    expect(StorageService).toBeDefined();
  });

  it('should have BambuPrinterService available', () => {
    expect(bambuPrinterService).toBeDefined();
  });

  it('should have required service methods', () => {
    expect(typeof StorageService.savePrinterSettings).toBe('function');
    expect(typeof StorageService.loadPrinterSettings).toBe('function');
    expect(typeof bambuPrinterService.connect).toBe('function');
    expect(typeof bambuPrinterService.sendFilamentToSlot).toBe('function');
  });
});
