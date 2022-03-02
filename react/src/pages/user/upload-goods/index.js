import React,{memo, useRef, useState}from "react";
import {UploadGoodsWrapper} from "./style";

import {
    uploadGoodsPicture,
    uploadGoods,
} from "../../../service/goods"

function UploadGoods() {
    const fileRef = useRef();//取file
    const [imgUrl,setUrl] = useState("");
    return (
        <UploadGoodsWrapper>
            <h2>上传图片文件(png)</h2>
                <input type="file" name="file"  ref={fileRef}/>
                <input type="submit" value="上传" onClick={uploadClick}/>
                <input type="text" placeholder="请输入商品名"/>
                <input type="text" placeholder="请输入价格"/>
                <input type="text" placeholder="请输入商品数量"/>

        </UploadGoodsWrapper>
    )

    function uploadClick(){
        let file = fileRef.current?.files[0];
        let formdata = new FormData();
        //FormData将form表单元素的name与value进行组合，实现表单数据的序列化
        formdata.append("file", file);  
        // 后端用 const {file} = ctx.request.files;
        uploadGoodsPicture(formdata).then(res => {
            setUrl(res.result?.goods_img);
        }).catch(err => {
            console.error(err);
        })

       const goods = {
         goods_name:"lo",
         goods_price:12.3,
         goods_img:imgUrl,
         goods_num:12
       }

       console.log(imgUrl);


       uploadGoods(goods).then(res => {
           console.log(res);
       }).catch(err => {
        console.error(err);
       })

    }
}

export default memo(UploadGoods);