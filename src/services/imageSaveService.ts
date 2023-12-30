

export const imageSaveService = async (image: any): Promise<any> => {
  try {
    if (!image) {
      console.log('empty image');
      return ''
    }

    const formData = new FormData();
    formData.append('image', image);

    const API_URL = process.env.IMGBB_API_URL || '';
    const req = await fetch(API_URL, {
      method: "POST",
      body: formData
    });
    const res = await req.json();

    return res
  } catch(err) {
    console.log(err);
    return ''    
  }
}
