export function getNum(num){
    if(num < 0){
        return;
    }
    if(num < 10**4){
        return num;
    }else if(num < 10**8){
        // console.log(num);
        return Math.floor(num/10**4) + "万";//toFixed会四舍五入,Math.floor会取整数部分
    }else {
        return Math.floor(num/10**8) + "亿";
    }
}


export function getSizeImg(Url,size){
    return `${Url}?param=${size}y${size}`
}

export function getJoiningTogether(Url,parameter,value){
    return `${Url}?${parameter}=${value}`
}


export function formatDate(time, fmt) {
    let date = new Date(time);
  
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds()
    };
    for (let k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        let str = o[k] + '';
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
      }
    }
    return fmt;
  };
  
  function padLeftZero(str) {
    return ('00' + str).substr(str.length);
  };
  
  export function formatMonthDay(time) {
    return formatDate(time, "MM月dd日");
  }
  
  export function formatMinuteSecond(time) {
    return formatDate(time, "mm:ss");
  }




  const parseExp = /(\d{4})-(\d{1,2})-(\d{1,2})/;
  export function getChineseFormatTime(time){
    const result = parseExp.exec(time);
    if(!result){
      return time;
    }
    return result[1]+"年"+result[2]+"月"+result[3]+"日";
  }

  export function judgeLegalUserName(name){
    const userParseExp = /^[\u4e00-\u9fa5_a-zA-Z0-9-]{4,16}$/;
    const result =userParseExp.exec(name);
    return result;
  }

  export function judgeLegalPSw(password){
    const userParseExp = /^([A-Z]|[a-z]|[0-9]|[\uFF01\uff08\uff09\u2018\uff1b\uff1a\u2019\uff0c\uff1f]){6,20}$/;
    const result =userParseExp.exec(password);
    return result;
  }