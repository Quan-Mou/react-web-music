// 如果我们在开发环境和生产环境用的都是不同的接口：
const productionURL = "http://123.207.32.32:9001"
const developURl = "http://123.207.32.32:9001"

// node里有个方法可以判断是生产环境还是开发环境
export const BaseUrl = process.env.NODE_ENV === "development" ? developURl : productionURL;
export const TimeOut = 5000;


