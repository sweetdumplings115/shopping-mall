import React,{memo}from "react";
import {LoadingCoverWrapper} from "./style";

function Loading() {
    return (
        <LoadingCoverWrapper>
             <div></div>
             <div></div>
        </LoadingCoverWrapper>
    )
}

export default memo(Loading);