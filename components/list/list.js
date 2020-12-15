// components/list/list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    "list":{
      "type":Array,
      'value':["衣服", "鞋子","帽子"]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    "currentindex":null
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handelclick(event){
      console.log(event)
      const index = event.currentTarget.dataset.index
      this.setData({
        "currentindex":index
      })
    }
  }
})
