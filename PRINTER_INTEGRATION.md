# OpenSpool Mobile - Printer Integration Feature

## Overview
The OpenSpool Mobile app now supports direct integration with Bambu printers via MQTT, allowing users to scan NFC tags and automatically update printer filament settings.

## New Features

### 1. Printer Settings Configuration
- IP Address: Enter your Bambu printer's local network IP
- Serial Number: Printer's unique serial identifier (found on printer screen)
- Access Code: Optional 8-digit access code for secure connection

### 2. Slot Selection
- External Spool: For spools not in the AMS
- AMS Slot 1-4: For filaments loaded in the AMS unit

### 3. MQTT Communication
- Uses Bambu's native MQTT protocol on port 1883
- Sends `ams_filament_setting` commands with proper brand codes
- Compatible with existing OpenSpool ESP project protocol

### 4. Workflow
1. Configure printer settings (Settings button)
2. Connect to printer (Connect button) 
3. Select target slot (dropdown)
4. Scan NFC tag with filament information (Read Tag button)
5. Send filament data to printer (Send to Printer button)
6. Manually load filament into selected slot

## Technical Implementation

### Brand Code Mapping
The app uses the same brand code mapping as the OpenSpool ESP project:
- PLA: GFL99 (Generic), GFA00 (Bambu Basic), GFL01 (PolyTerra), etc.
- PETG: GFG99 (Generic), GFSNL08 (Sunlu)
- TPU: GFU99 (Generic), GFU01 (Bambu)
- ABS: GFB99 (Generic), GFB00 (Bambu)
- And more...

### MQTT Protocol
```json
{
  "print": {
    "sequence_id": "0",
    "command": "ams_filament_setting",
    "ams_id": 255,  // 255 for external, 0 for AMS
    "tray_id": 254, // 254 for external, 0-3 for AMS slots
    "tray_color": "FF0081FF",
    "nozzle_temp_min": 190,
    "nozzle_temp_max": 240,
    "tray_type": "PLA",
    "setting_id": "",
    "tray_info_idx": "GFL99"
  }
}
```

## User Interface Changes

### New UI Elements
1. **Printer Integration Section**: Added below existing filament configuration
2. **Target Slot Dropdown**: Select between External spool and AMS slots
3. **Three Action Buttons**:
   - Settings: Configure printer connection
   - Connect: Establish MQTT connection (turns green when connected)
   - Send to Printer: Only enabled after scanning a tag and connecting

### Visual Indicators
- Connection status: Button color changes to green when connected
- Disabled state: Send to Printer button is disabled until prerequisites are met
- Loading states: "Connecting..." text during connection attempts

## Testing
- Unit tests for brand code mapping and slot configuration
- TypeScript compilation verification
- Linting compliance

## Future Enhancements
- Multi-AMS support (currently supports single AMS)
- Connection status monitoring
- Retry logic for failed connections
- Filament brand/variant selection in UI