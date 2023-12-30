import { __HOST } from "@/config";
import { writeFile } from "fs/promises";

export const thumbGeneratePathService = (thumb: any, path: string) => {
  const ext = thumb.type == 'image/jpeg' ? '.jpg' : '.png';
  const thumbName = `${Date.now() + ext}`;
  const thumbPath = `${__HOST}/static/${path}/${thumbName}`;

  return { thumbName, thumbPath }
}

export const thumbSaveService = async (thumb: any, thumbName: string, path: string) => {
  const bytes = await thumb.arrayBuffer()
  const buffer = Buffer.from(bytes)

  await writeFile(`./public/static/${path}/${thumbName}`, buffer)
}
