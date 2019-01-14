import {CARTURL} from "../commons/URLSchem"

export default {
    /**
    * 通过用户的编号来获取carts信息
    * @param cd 返回数据
    * */
  getMainList(cd){
    fetch(CARTURL).then(res=>{
        res.json().then(data=>{
          cd(data)
        })
    })
  }

  
}