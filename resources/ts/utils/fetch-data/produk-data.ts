import axios from 'axios';
import route from 'ziggy-js';

export namespace Produk.data {
  export const uploadImageHanlder = async (blobInfo: any, progress: any) => {
    const formData = new FormData();
    formData.append('image', blobInfo.blob(), blobInfo.filename());
    formData.append('folder', 'upload/produk/editor');
    let resp = await axios.post(route('upload.editor'), formData);
    return resp.data;
  };
  export const getDataImagesEditor = async () => {
    return await axios.get<{ data: { title: string; value: string }[] }>(route('file.image_editor'), { params: { folder: 'upload/produk/editor' } });
  };
}
