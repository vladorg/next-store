import { writeFile } from "fs/promises";

const __HOST = process.env.NEXTAUTH_URL

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
