import {S3} from "aws-sdk";
import fs from "fs";
import mime from "mime";
import { resolve } from "path";

import upload from "@config/upload";

import IStorageProvider from "../IStorageProviders";

export default class S3storageProvider implements IStorageProvider {
    private client: S3;
    constructor() {
        this.client = new S3({
            region: process.env.AWS_BUCKTE_REGION,
        });
    }
    async saveFile(file: string, folder: string): Promise<string> {
        const originalName = resolve(upload.tmpFolder, file);

        const fileContent = await fs.promises.readFile(originalName);
        const ContentType = mime.getType(originalName);
        await this.client
            .putObject({
                Bucket: `${process.env.AWS_BUCKTE}/${folder}`,
                Key: file,
                ACL: "public-read",
                Body: fileContent,
                ContentType,
            })
            .promise();
        await fs.promises.unlink(originalName);

        return file;
    }
    async deleteFile(file: string, folder: string): Promise<void> {
        await this.client
            .deleteObject({
                Bucket: `${process.env.AWS_BUCKTE}/${folder}`,
                Key: file,
            })
            .promise();
    }
}
