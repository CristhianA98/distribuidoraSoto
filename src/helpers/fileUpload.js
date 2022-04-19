export const fileUpload = async(file)=>{
    const cloudUrl = `https://api.cloudinary.com/v1_1/dfqd2wjqo/upload`;
    const formData = new FormData();
    formData.append('upload_preset','distribuidorasotoapp');
    const dataUrl=[];

    for (let i = 0; i < file.length; i++) {
        try {
            formData.append('file',file[i]);
            const resp = await fetch(cloudUrl,{
                method:"POST",
                body: formData
            });

            if(resp.ok){
                const cloudResp = await resp.json();
                dataUrl.push(cloudResp.secure_url);
            }else{
                throw await resp.json();
            }

        } catch (error) {
            throw error;
        }
    }

    return dataUrl;
}