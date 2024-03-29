import { Device } from './types';
export default class ZebraBrowserPrintWrapper {
    device: Device;
    apiUrl: string;
    constructor(apiUrlOverride?: string | null);
    getAvailablePrinters: () => Promise<any>;
    getDefaultPrinter: () => Promise<Device>;
    setPrinter: (device: Device) => void;
    getPrinter: () => Device;
    cleanUpString: (str: string) => string;
    checkPrinterStatus: () => Promise<{
        isReadyToPrint: boolean;
        errors: string;
    }>;
    write: (data: string) => Promise<void>;
    read: () => Promise<string>;
    print: (text: string) => Promise<void>;
}
