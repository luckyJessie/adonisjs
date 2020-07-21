'use strict'
let axios = use('axios')
let config = use('App/bobo/index')
class ChannelController {
  async index ({params, response, view}) {
    let cname = params.cname
    let host = 'http://test.h5.api.yixia.com'
    let reqUrl = `${host}/bobo_feed/combine`
    // 如果没有聚合频道名称则跳转首页
    if (!cname) {
      response.route('channel', {
        cname: 'home'
      })
    }
    if (cname === 'home') {
      reqUrl = `${host}/bobo_feed/combine`
    }
    let {data} = await axios.get(reqUrl)
    let channelList = await axios.get(`${host}/bobo_feed/channellist`)
    let pageConfig = config.pageConfig[cname]
    return view.render('channel', {
      title: pageConfig.title,
      keywords: pageConfig.keywords,
      description: pageConfig.description,
      channelList: channelList.data.result,
      videoList: data.result
    })
  }
}

module.exports = ChannelController
