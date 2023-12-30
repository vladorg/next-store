import { __HOST } from "@/config";
import { writeFile } from "fs/promises";

export const thumbGeneratePathService = (thumb: any, path: string): { thumbName: string, thumbPath: string } => {
  try {
    const ext = thumb.type == 'image/jpeg' ? '.jpg' : '.png';
    const thumbName = `${Date.now() + ext}`;
    //const thumbPath = `${__HOST}/static/${path}/${thumbName}`;
    const thumbPath = `/static/${path}/${thumbName}`;

    return { thumbName, thumbPath }
  } catch(err) {
    console.log(err);  
    return { thumbName: '', thumbPath: '' }   
  }
}

export const thumbSaveService = async (thumb: any, thumbName: string, path: string): Promise<void> => {
  try {
    const bytes = await thumb.arrayBuffer()
    const buffer = Buffer.from(bytes)

    await writeFile(`public/static/${path}/${thumbName}`, buffer)

    console.log('File save is succefull!');    
    
  } catch(err) {
    console.log(err); 
  }
}

export const thumbSaveServiceTest = async (thumb: any, path: string): Promise<void> => {
  try {
    const bytes = await thumb.arrayBuffer()
    const buffer = Buffer.from(bytes)

    await writeFile(path, buffer)

    console.log('File save is succefull!');    
    
  } catch(err) {
    console.log(err); 
  }
}
