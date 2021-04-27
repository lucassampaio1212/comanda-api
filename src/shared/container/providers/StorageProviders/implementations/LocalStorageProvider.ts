import fs from "fs";
import { resolve } from "path";

import uploadConfig from "@config/upload";

import IStorageProvider from "../IStorageProviders";

export default class LocalStorageProvider implements IStorageProvider {
    async saveFile(file: string, folder: string): Promise<string> {
        await fs.promises.rename(
            resolve(uploadConfig.tmpFolder, file),
            resolve(`${uploadConfig.tmpFolder}/${folder}`, file)
        );

        return file;
    }
    async deleteFile(file: string, folder: string): Promise<void> {
        const filename = resolve(`${uploadConfig.tmpFolder}/${folder}`, file);

        try {
            await fs.promises.stat(filename);
        } catch {
            return;
        }

        await fs.promises.unlink(filename);
    }
}
