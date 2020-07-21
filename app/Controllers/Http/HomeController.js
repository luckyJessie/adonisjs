'use strict'
let axios = use('axios')
let config = use('App/bobo/index')

class HomeController {
  /**
   * 首页逻辑
   * @param view
   * @returns {*}
   */
  async index ({view}) {
    let {data} = await axios.get('http://test.h5.api.yixia.com/bobo_feed/combine')
    let pageConfig = config.pageConfig.home
    return view.render('home', {
      title: pageConfig.title,
      keywords: pageConfig.keywords,
      description: pageConfig.description,
      videoList: data.result
    })
  }
}

module.exports = HomeController
