import { backendApi } from "../api/backendApi";

export const fileUpload = async (file) => {

    if (!file) throw new Error('No hay archivo');

    try {

        const resp = await backendApi.post('/upload-by-file', {
            photos: file
        }, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        return resp.data.msg;

    } catch (error) {
        window.alert(error.message);
    }

}