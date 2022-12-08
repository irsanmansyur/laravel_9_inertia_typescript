import axios from 'axios';
import route from 'ziggy-js';

export namespace Faq.data {
  export const Footer = async () => {
    return await axios.get<App.Models.Faq[]>(route('faq.api.footer'));
  };
  export const uploadImageHanlder = async (blobInfo: any, progress: any) => {
    const formData = new FormData();
    formData.append('image', blobInfo.blob(), blobInfo.filename());
    formData.append('folder', 'upload/faq');
    let resp = await axios.post(route('upload.editor'), formData);
    return resp.data;
  };
  export const getDataImages = async () => {
    return await axios.get<{ data: { title: string; value: string }[] }>(route('file.image_editor'), { params: { folder: 'upload/faq' } });
  };
  export const Kategori = async () => {
    return await axios.get<{ data: any[] }>(route('faq.api.kategori'));
  };
}
