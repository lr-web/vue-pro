window.gConfig = {
  "minioUrl": "http://192.168.2.12:49000",//静态图片地址
  "systemUrl": "http://192.168.2.118:8080",//关联后台系统地址-前端
  
  "videoWsUrl": "ws://192.168.2.118:48082",//视频流前缀-ws
  "videoHttpUrl": "http://192.168.2.118:48082"//视频流前缀-http
}
window.mockData = {
  'DecisionSuggestion': {
    // 市政建设
    'MunicipalConstruction': {
      // 监控补盲
      'MonitoringRemedy': [{
        pointName: '锦城公园',//建议点位
        substreet: '武侯区益州大道中段',//所属街道
        suggestedTime: '2023-06-29 11:25:23',//建议时间
        handlingSuggestion: 0, //处理意见
        longitude: 104.0601239568018,// 经度
        latitude: 30.576957817300556, //纬度
        livePicture: [
          '/urban/2023/06/29/00d4b4be903b4780a53b11d458224b6a.jpg',
          '/urban/2023/06/29/00f307f09ae9427aa2c6b26069ad341b.jpg'
        ],//现场图片
      },
      {
        pointName: '金宝广场',//建议点位
        substreet: '武侯区万象南路',//所属街道
        suggestedTime: '2023-06-29 05:06:23',//建议时间
        handlingSuggestion: 0, //处理意见
        longitude: 104.05202783713408,// 经度
        latitude: 30.593486311588407, //纬度
        livePicture: [
          '/urban/2023/06/29/0cef5485ae024f6287ccc8cf7aaa41f7.jpg',
          '/urban/2023/06/29/1e66655eac4844f8bf9054548cd7d68e.jpg'
        ],//现场图片
      },
      {
        pointName: '沙河小区',//建议点位
        substreet: '双流区香沙路',//所属街道
        suggestedTime: '2023-06-29 03:06:23',//建议时间
        handlingSuggestion: 0, //处理意见
        longitude: 104.08768715072675,// 经度
        latitude: 30.50656181914935, //纬度
        livePicture: [
          '/urban/2023/06/29/028fb89361204290b9acfd15e325011c.jpg',
          '/urban/2023/06/29/03ed8532d582448b8a62b69925d88f6d.png'
        ],//现场图片
      },
      {
        pointName: '祥和二街',//建议点位
        substreet: '武侯区万象南路',//所属街道
        suggestedTime: '2023-06-28 19:06:23',//建议时间
        handlingSuggestion: 0, //处理意见
        longitude: 104.09796649367564,// 经度
        latitude: 30.528930339595234, //纬度
        livePicture: [
          'urban/2023/06/29/04194086dedb473190ed136dcf3aa763.jpg',
          'urban/2023/06/29/03ed8532d582448b8a62b69925d88f6d.png'
        ],//现场图片
      },
      {
        pointName: '华府大道',//建议点位
        substreet: '双流区警校路二段',//所属街道
        suggestedTime: '2023-06-28 15:06:23',//建议时间
        handlingSuggestion: 0, //处理意见
        longitude: 104.05202783713408,// 经度
        latitude: 30.593486311588407, //纬度
        livePicture: [
          '/urban/2023/06/29/0cef5485ae024f6287ccc8cf7aaa41f7.jpg',
          '/urban/2023/06/29/1e66655eac4844f8bf9054548cd7d68e.jpg'
        ],//现场图片
      },
      {
        pointName: '金桂花园丹桂苑',//建议点位
        substreet: '双流区中和街道朝阳路',//所属街道
        suggestedTime: '2023-06-27 15:08:23',//建议时间
        handlingSuggestion: 0, //处理意见
        longitude: 104.10060455514042,// 经度
        latitude: 30.564126595553653, //纬度
        livePicture: [
          '/urban/2023/06/29/216e9c1e6ffa4438b0ed0b5be32c64eb.jpg',
          '/urban/2023/06/29/220aba2eebe64b849b122cf1724212bc.jpg'
        ],//现场图片
      }],
      // 路灯维护
      'StreetLampMaintenance': [{
        pointName: '世纪城国际展览中心',//建议点位
        substreet: '武侯区世纪城路198号',//所属街道
        suggestedTime: '2023-06-29 03:06:23',//建议时间
        handlingSuggestion: 0, //处理意见
        longitude: 104.07476974631308,// 经度
        latitude: 30.560898840490143, //纬度
        livePicture: [
          '/urban/2023/06/29/23c57b86ccb540a68987502a569328ae.jpg',
          '/urban/2023/06/29/37bd7c6e12514390870d00ce4504418f.jpg'
        ],//现场图片
      },
      {
        pointName: '成都三利爱琴海购物中心',//建议点位
        substreet: '天府新区天府大道南段辅路',//所属街道
        suggestedTime: '2023-06-28 04:08:23',//建议时间
        handlingSuggestion: 0, //处理意见
        longitude: 104.07476974631308,// 经度
        latitude: 30.49892067569685, //纬度
        livePicture: [
          '/urban/2023/06/29/22fc26f51b1444ac8196d51033cf8a6a.jpg',
          '/urban/2023/06/29/37bd7c6e12514390870d00ce4504418f.jpg'
        ],//现场图片
      },
      {
        pointName: '蓝山美树',//建议点位
        substreet: '武侯区鹭岛路36号',//所属街道
        suggestedTime: '2023-06-15 05:08:23',//建议时间
        handlingSuggestion: 0, //处理意见
        longitude: 104.08159231906677,// 经度
        latitude: 30.49080622046076, //纬度
        livePicture: [
          '/urban/2023/06/29/422d1e886efd445ea06e75da7f262fb7.jpg',
          '/urban/2023/06/29/3e39395b5f1c446c95b36f710933cf11.jpg'
        ],//现场图片
      }],
      // 垃圾桶
      'Dustbin': [{
        pointName: '锦城公园',//建议点位
        substreet: '武侯区益州大道中段',//所属街道
        suggestedTime: '2023-06-29 11:25:23',//建议时间
        handlingSuggestion: 0, //处理意见
        longitude: 104.0601239568018,// 经度
        latitude: 30.576957817300556, //纬度
        livePicture: [
          '/urban/2023/06/29/4581ba91415b4298a0a758085a7d9ed0.jpg',
          '/urban/2023/06/29/440520b9edef41aebce29e205d5c6ce9.jpg'
        ],//现场图片
      },
      {
        pointName: '金宝广场',//建议点位
        substreet: '武侯区万象南路',//所属街道
        suggestedTime: '2023-06-29 05:06:23',//建议时间
        handlingSuggestion: 0, //处理意见
        longitude: 104.05202783713408,// 经度
        latitude: 30.593486311588407, //纬度
        livePicture: [
          '/urban/2023/06/29/4678ccb2e2314a678b059b0b94bc1985.jpg',
          '/urban/2023/06/29/454a713b90b64ab285238854a9884967.jpg'
        ],//现场图片
      },
      {
        pointName: '沙河小区',//建议点位
        substreet: '双流区香沙路',//所属街道
        suggestedTime: '2023-06-29 03:06:23',//建议时间
        handlingSuggestion: 0, //处理意见
        longitude: 104.08768715072675,// 经度
        latitude: 30.50656181914935, //纬度
        livePicture: [
          '/urban/2023/06/29/49c8239657e446d7a8aab88b9e938089.jpg',
          '/urban/2023/06/29/48bca5c30ca2461eac5c220953a16486.jpg'
        ],//现场图片
      },
      {
        pointName: '祥和二街',//建议点位
        substreet: '武侯区万象南路',//所属街道
        suggestedTime: '2023-06-28 19:06:23',//建议时间
        handlingSuggestion: 0, //处理意见
        longitude: 104.09796649367564,// 经度
        latitude: 30.528930339595234, //纬度
        livePicture: [
          '/urban/2023/06/29/4aabde5065da40b9b020e53370327e18.jpg',
          '/urban/2023/06/29/4ab149b77ab54d54afd7c77ba2be2290.jpg'
        ],//现场图片
      },
      {
        pointName: '华府大道',//建议点位
        substreet: '双流区警校路二段',//所属街道
        suggestedTime: '2023-06-28 15:06:23',//建议时间
        handlingSuggestion: 0, //处理意见
        longitude: 104.05202783713408,// 经度
        latitude: 30.593486311588407, //纬度
        livePicture: [
          '/urban/2023/06/29/4be83e73748844d3af5e9752839b44de.jpg',
          '/urban/2023/06/29/4c2edcb7558842749fae0df27280e885.jpg'
        ],//现场图片
      },
      {
        pointName: '金桂花园丹桂苑',//建议点位
        substreet: '双流区中和街道朝阳路',//所属街道
        suggestedTime: '2023-06-27 15:08:23',//建议时间
        handlingSuggestion: 0, //处理意见
        longitude: 104.10060455514042,// 经度
        latitude: 30.564126595553653, //纬度
        livePicture: [
          '/urban/2023/06/29/4fa8b1bb01044ab68023d9aa8156f194.jpg',
          '/urban/2023/06/29/4f7f5993a2c8437e92510159ea7c170b.jpg'
        ],//现场图片
      }],
      // 道路维护
      'RoadMaintenance': [{
        pointName: '世纪城国际展览中心',//建议点位
        substreet: '武侯区世纪城路198号',//所属街道
        suggestedTime: '2023-06-29 03:06:23',//建议时间
        handlingSuggestion: 0, //处理意见
        longitude: 104.07476974631308,// 经度
        latitude: 30.560898840490143, //纬度
        livePicture: [
          '/urban/2023/06/29/51697bc464194b0691279ef38513c85b.jpg',
          '/urban/2023/06/29/519a1aa54c7c488ebdbdec6336c615bf.jpg'
        ],//现场图片
      },
      {
        pointName: '成都三利爱琴海购物中心',//建议点位
        substreet: '天府新区天府大道南段辅路',//所属街道
        suggestedTime: '2023-06-28 04:08:23',//建议时间
        handlingSuggestion: 0, //处理意见
        longitude: 104.07476974631308,// 经度
        latitude: 30.49892067569685, //纬度
        livePicture: [
          '/urban/2023/06/29/573890e3236140378c0241ab5688806e.jpg',
          '/urban/2023/06/29/55afba430ef443798f3c991d4ad89615.jpg'
        ],//现场图片
      },
      {
        pointName: '蓝山美树',//建议点位
        substreet: '武侯区鹭岛路36号',//所属街道
        suggestedTime: '2023-06-15 05:08:23',//建议时间
        handlingSuggestion: 0, //处理意见
        longitude: 104.08159231906677,// 经度
        latitude: 30.49080622046076, //纬度
        livePicture: [
          '/urban/2023/06/29/57fab2c6aa7c44aaa91a44c3b9d35756.jpg',
          '/urban/2023/06/29/5927d8b353e442daa63a59dca9ee0fd1.jpg'
        ],//现场图片
      }],
      // 智慧公厕
      'SmartPublicToilet': [{
        pointName: '世纪城国际展览中心',//建议点位
        substreet: '武侯区世纪城路198号',//所属街道
        suggestedTime: '2023-06-29 03:06:23',//建议时间
        handlingSuggestion: 0, //处理意见
        longitude: 104.07476974631308,// 经度
        latitude: 30.560898840490143, //纬度
        livePicture: [
          '/urban/2023/06/29/5d9808341eb04f1fa69afa381a6c0959.jpg',
          '/urban/2023/06/29/6044fd626bcc48ba97e7475652afe5e4.jpg'
        ],//现场图片
      },
      {
        pointName: '成都三利爱琴海购物中心',//建议点位
        substreet: '天府新区天府大道南段辅路',//所属街道
        suggestedTime: '2023-06-28 04:08:23',//建议时间
        handlingSuggestion: 0, //处理意见
        longitude: 104.07476974631308,// 经度
        latitude: 30.49892067569685, //纬度
        livePicture: [
          '/urban/2023/06/29/0cef5485ae024f6287ccc8cf7aaa41f7.jpg',
          '/urban/2023/06/29/1e66655eac4844f8bf9054548cd7d68e.jpg'
        ],//现场图片
      },
      {
        pointName: '蓝山美树',//建议点位
        substreet: '武侯区鹭岛路36号',//所属街道
        suggestedTime: '2023-06-15 05:08:23',//建议时间
        handlingSuggestion: 0, //处理意见
        longitude: 104.08159231906677,// 经度
        latitude: 30.49080622046076, //纬度
        livePicture: [
          '/urban/2023/06/29/0cef5485ae024f6287ccc8cf7aaa41f7.jpg',
          '/urban/2023/06/29/1e66655eac4844f8bf9054548cd7d68e.jpg'
        ],//现场图片
      }],
      // 井盖维护
      'ManholeCoverMaintenance': [{
        pointName: '锦城公园',//建议点位
        substreet: '武侯区益州大道中段',//所属街道
        suggestedTime: '2023-06-29 11:25:23',//建议时间
        handlingSuggestion: 0, //处理意见
        longitude: 104.0601239568018,// 经度
        latitude: 30.576957817300556, //纬度
        livePicture: [
          '/urban/2023/06/29/0cef5485ae024f6287ccc8cf7aaa41f7.jpg',
          '/urban/2023/06/29/1e66655eac4844f8bf9054548cd7d68e.jpg'
        ],//现场图片
      },
      {
        pointName: '金宝广场',//建议点位
        substreet: '武侯区万象南路',//所属街道
        suggestedTime: '2023-06-29 05:06:23',//建议时间
        handlingSuggestion: 0, //处理意见
        longitude: 104.05202783713408,// 经度
        latitude: 30.593486311588407, //纬度
        livePicture: [
          '/urban/2023/06/29/0cef5485ae024f6287ccc8cf7aaa41f7.jpg',
          '/urban/2023/06/29/1e66655eac4844f8bf9054548cd7d68e.jpg'
        ],//现场图片
      },
      {
        pointName: '沙河小区',//建议点位
        substreet: '双流区香沙路',//所属街道
        suggestedTime: '2023-06-29 03:06:23',//建议时间
        handlingSuggestion: 0, //处理意见
        longitude: 104.08768715072675,// 经度
        latitude: 30.50656181914935, //纬度
        livePicture: [
          '/urban/2023/06/29/0cef5485ae024f6287ccc8cf7aaa41f7.jpg',
          '/urban/2023/06/29/1e66655eac4844f8bf9054548cd7d68e.jpg'
        ],//现场图片
      },
      {
        pointName: '祥和二街',//建议点位
        substreet: '武侯区万象南路',//所属街道
        suggestedTime: '2023-06-28 19:06:23',//建议时间
        handlingSuggestion: 0, //处理意见
        longitude: 104.09796649367564,// 经度
        latitude: 30.528930339595234, //纬度
        livePicture: [
          '/urban/2023/06/29/0cef5485ae024f6287ccc8cf7aaa41f7.jpg',
          '/urban/2023/06/29/1e66655eac4844f8bf9054548cd7d68e.jpg'
        ],//现场图片
      },
      {
        pointName: '华府大道',//建议点位
        substreet: '双流区警校路二段',//所属街道
        suggestedTime: '2023-06-28 15:06:23',//建议时间
        handlingSuggestion: 0, //处理意见
        longitude: 104.05202783713408,// 经度
        latitude: 30.593486311588407, //纬度
        livePicture: [
          '/urban/2023/06/29/0cef5485ae024f6287ccc8cf7aaa41f7.jpg',
          '/urban/2023/06/29/1e66655eac4844f8bf9054548cd7d68e.jpg'
        ],//现场图片
      },
      {
        pointName: '金桂花园丹桂苑',//建议点位
        substreet: '双流区中和街道朝阳路',//所属街道
        suggestedTime: '2023-06-27 15:08:23',//建议时间
        handlingSuggestion: 0, //处理意见
        longitude: 104.10060455514042,// 经度
        latitude: 30.564126595553653, //纬度
        livePicture: [
          '/urban/2023/06/29/0cef5485ae024f6287ccc8cf7aaa41f7.jpg',
          '/urban/2023/06/29/1e66655eac4844f8bf9054548cd7d68e.jpg'
        ],//现场图片
      }],
    },
    // 详细建设
    'DetailedProposal': {
      // 垃圾收运
      'RefuseCAndT': [{
        pointName: '会龙小区',//点位
        warningLevel: '二级',//预警等级
        iconType: '2',
        numberOfBarrel: 0,//本月爆桶次数
        suggestCount: "4小时/次", //建议运送频次
        handlingSuggestion: 0, //处理意见
        longitude: 104.08458232238877,// 经度
        latitude: 30.52793978799073, //纬度
        dialogType: 'txt',
        txt1: '建议收运频次：3小时/次',
        txt2: '当月收运频次：4小时/次',
        txt3: '本月爆桶次数：1次'
      },
      {
        pointName: '市一医院',//点位
        warningLevel: '一级',//预警等级
        iconType: '3',
        numberOfBarrel: 5,//本月爆桶次数
        suggestCount: "2小时/次", //建议运送频次
        handlingSuggestion: 1, //处理意见
        longitude: 104.18478106066563,// 经度
        latitude: 30.702404842707615, //纬度
        dialogType: 'txt',
        txt1: '建议收运频次：2小时/次',
        txt2: '当月收运频次：4小时/次',
        txt3: '本月爆桶次数：5次'
      },
      {
        pointName: '火车南站',//点位
        warningLevel: '三级',//预警等级
        iconType: '1',
        numberOfBarrel: 1,//本月爆桶次数
        suggestCount: "3小时/次", //建议运送频次
        handlingSuggestion: 0, //处理意见
        longitude: 104.0572129924269,// 经度
        latitude: 30.594824208006283, //纬度
        dialogType: 'txt',
        txt1: '建议收运频次：4小时/次',
        txt2: '当月收运频次：4小时/次',
        txt3: '本月爆桶次数：0次'
      }],
      // 共享单车
      'Bikesharing': [{
        pointName: '会龙小区',//点位
        warningLevel: '二级',//预警等级
        numberOfBarrel: 4,//本月爆桶次数
        suggestCount: 30, //建议运送频次
        handlingSuggestion: 0, //处理意见
        longitude: 104.08458232238877,// 经度
        latitude: 30.52793978799073, //纬度
        dialogType: 'txt',
        txt1: '建议收运频次：4小时/次',
        txt2: '当月收运频次：4小时/次',
        txt3: '本月爆满次数：0次'
      },
      {
        pointName: '市一医院',//点位
        warningLevel: '一级',//预警等级
        numberOfBarrel: 10,//本月爆桶次数
        suggestCount: 40, //建议运送频次
        handlingSuggestion: 1, //处理意见
        longitude: 104.18478106066563,// 经度
        latitude: 30.702404842707615, //纬度
        dialogType: 'txt',
        txt1: '建议收运频次：4小时/次',
        txt2: '当月收运频次：4小时/次',
        txt3: '本月爆满次数：0次'
      },
      {
        pointName: '火车南站',//点位
        warningLevel: '三级',//预警等级
        numberOfBarrel: 3,//本月爆桶次数
        suggestCount: 28, //建议运送频次
        handlingSuggestion: 0, //处理意见
        longitude: 104.0572129924269,// 经度
        latitude: 30.594824208006283, //纬度
        dialogType: 'txt',
        txt1: '建议收运频次：4小时/次',
        txt2: '当月收运频次：4小时/次',
        txt3: '本月爆满次数：0次'
      }],
      // 绿化建议
      'GreeningProposal': [{
        pointName: '会龙小区',//点位
        warningLevel: '二级',//预警等级
        numberOfBarrel: 4,//本月爆桶次数
        suggestCount: 30, //建议运送频次
        handlingSuggestion: 0, //处理意见
        longitude: 104.08458232238877,// 经度
        latitude: 30.52793978799073, //纬度
        dialogType: 'txt',
        txt1: '建议收运频次：4小时/次',
        txt2: '当月收运频次：4小时/次',
        txt3: '本月爆满次数：0次'
      },
      {
        pointName: '市一医院',//点位
        warningLevel: '一级',//预警等级
        numberOfBarrel: 10,//本月爆桶次数
        suggestCount: 40, //建议运送频次
        handlingSuggestion: 1, //处理意见
        longitude: 104.18478106066563,// 经度
        latitude: 30.702404842707615, //纬度
        dialogType: 'txt',
        txt1: '建议收运频次：4小时/次',
        txt2: '当月收运频次：4小时/次',
        txt3: '本月爆满次数：0次'
      },
      {
        pointName: '火车南站',//点位
        warningLevel: '三级',//预警等级
        numberOfBarrel: 3,//本月爆桶次数
        suggestCount: 28, //建议运送频次
        handlingSuggestion: 0, //处理意见
        longitude: 104.0572129924269,// 经度
        latitude: 30.594824208006283, //纬度
        dialogType: 'txt',
        txt1: '建议收运频次：4小时/次',
        txt2: '当月收运频次：4小时/次',
        txt3: '本月爆满次数：0次'
      }],

      // 夜市点位
      'NightMarketLocation': [{
        pointName: '会龙小区',//点位
        warningLevel: '二级',//预警等级
        numberOfBarrel: 4,//本月爆桶次数
        suggestCount: 30, //建议运送频次
        handlingSuggestion: 0, //处理意见
        longitude: 104.08458232238877,// 经度
        latitude: 30.52793978799073, //纬度
        dialogType: 'txt',
        txt1: '建议收运频次：4小时/次',
        txt2: '当月收运频次：4小时/次',
        txt3: '本月爆满次数：0次'
      },
      {
        pointName: '市一医院',//点位
        warningLevel: '一级',//预警等级
        numberOfBarrel: 10,//本月爆桶次数
        suggestCount: 40, //建议运送频次
        handlingSuggestion: 1, //处理意见
        longitude: 104.18478106066563,// 经度
        latitude: 30.702404842707615, //纬度
        dialogType: 'txt',
        txt1: '建议收运频次：4小时/次',
        txt2: '当月收运频次：4小时/次',
        txt3: '本月爆满次数：0次'
      },
      {
        pointName: '火车南站',//点位
        warningLevel: '三级',//预警等级
        numberOfBarrel: 3,//本月爆桶次数
        suggestCount: 28, //建议运送频次
        handlingSuggestion: 0, //处理意见
        longitude: 104.0572129924269,// 经度
        latitude: 30.594824208006283, //纬度
        dialogType: 'txt',
        txt1: '建议收运频次：4小时/次',
        txt2: '当月收运频次：4小时/次',
        txt3: '本月爆满次数：0次'
      }],

    },
    // 民众关怀
    'PublicConcern': {
      // 休闲座椅
      'CasualChair': [{
        pointName: '锦城公园',//建议点位
        substreet: '武侯区益州大道中段',//所属街道
        suggestedTime: '2023-06-29 11:25:23',//建议时间
        handlingSuggestion: 0, //处理意见
        longitude: 104.0601239568018,// 经度
        latitude: 30.576957817300556, //纬度
        livePicture: [
          '/urban/2023/06/29/643e755aead942e2bfa34f6f3f55b2cf.jpg',
          '/urban/2023/06/29/6628114102aa436e9fe7a7c92c2b1fbf.jpg'
        ],//现场图片
      },
      {
        pointName: '金宝广场',//建议点位
        substreet: '武侯区万象南路',//所属街道
        suggestedTime: '2023-06-29 05:06:23',//建议时间
        handlingSuggestion: 0, //处理意见
        longitude: 104.05202783713408,// 经度
        latitude: 30.593486311588407, //纬度
        livePicture: [
          '/urban/2023/06/29/0cef5485ae024f6287ccc8cf7aaa41f7.jpg',
          '/urban/2023/06/29/1e66655eac4844f8bf9054548cd7d68e.jpg'
        ],//现场图片
      },
      {
        pointName: '沙河小区',//建议点位
        substreet: '双流区香沙路',//所属街道
        suggestedTime: '2023-06-29 03:06:23',//建议时间
        handlingSuggestion: 0, //处理意见
        longitude: 104.08768715072675,// 经度
        latitude: 30.50656181914935, //纬度
        livePicture: [
          '/urban/2023/06/29/679f917544e0444ca6f0abde1e0de04e.jpg',
          '/urban/2023/06/29/1e66655eac4844f8bf9054548cd7d68e.jpg'
        ],//现场图片
      },
      {
        pointName: '祥和二街',//建议点位
        substreet: '武侯区万象南路',//所属街道
        suggestedTime: '2023-06-28 19:06:23',//建议时间
        handlingSuggestion: 0, //处理意见
        longitude: 104.09796649367564,// 经度
        latitude: 30.528930339595234, //纬度
        livePicture: [
          '/urban/2023/06/29/69e103428d314d04b84c8b1d46157268.jpg',
          '/urban/2023/06/29/71cff7d126ea41dab747b8f9aed1604d.jpg'
        ],//现场图片
      },
      {
        pointName: '华府大道',//建议点位
        substreet: '双流区警校路二段',//所属街道
        suggestedTime: '2023-06-28 15:06:23',//建议时间
        handlingSuggestion: 0, //处理意见
        longitude: 104.05202783713408,// 经度
        latitude: 30.593486311588407, //纬度
        livePicture: [
          '/urban/2023/06/29/7be83b0ebc104161b5a6a481e30b7395.jpg',
          '/urban/2023/06/29/844cbb797647431ab150db551c80e018.jpg'
        ],//现场图片
      },
      {
        pointName: '金桂花园丹桂苑',//建议点位
        substreet: '双流区中和街道朝阳路',//所属街道
        suggestedTime: '2023-06-27 15:08:23',//建议时间
        handlingSuggestion: 0, //处理意见
        longitude: 104.10060455514042,// 经度
        latitude: 30.564126595553653, //纬度
        livePicture: [
          '/urban/2023/06/29/0cef5485ae024f6287ccc8cf7aaa41f7.jpg',
          '/urban/2023/06/29/1e66655eac4844f8bf9054548cd7d68e.jpg'
        ],//现场图片
      },],
      // 健身场所
      'FitnessPlace': [
        {
          pointName: '世纪城国际展览中心',//建议点位
          substreet: '武侯区世纪城路198号',//所属街道
          suggestedTime: '2023-06-29 03:06:23',//建议时间
          handlingSuggestion: 0, //处理意见
          longitude: 104.07476974631308,// 经度
          latitude: 30.560898840490143, //纬度
          livePicture: [
            '/urban/2023/06/29/844cbb797647431ab150db551c80e018.jpg',
            '/urban/2023/06/29/1e66655eac4844f8bf9054548cd7d68e.jpg'
          ],//现场图片
        },
        {
          pointName: '成都三利爱琴海购物中心',//建议点位
          substreet: '天府新区天府大道南段辅路',//所属街道
          suggestedTime: '2023-06-28 04:08:23',//建议时间
          handlingSuggestion: 0, //处理意见
          longitude: 104.07476974631308,// 经度
          latitude: 30.49892067569685, //纬度
          livePicture: [
            '/urban/2023/06/29/82309f110e344832b585198c298947ff.jpg',
            '/urban/2023/06/29/82309f110e344832b585198c298947ff.jpg'
          ],//现场图片
        },
        {
          pointName: '蓝山美树',//建议点位
          substreet: '武侯区鹭岛路36号',//所属街道
          suggestedTime: '2023-06-15 05:08:23',//建议时间
          handlingSuggestion: 0, //处理意见
          longitude: 104.08159231906677,// 经度
          latitude: 30.49080622046076, //纬度
          livePicture: [
            '/urban/2023/06/29/0cef5485ae024f6287ccc8cf7aaa41f7.jpg',
            '/urban/2023/06/29/1e66655eac4844f8bf9054548cd7d68e.jpg'
          ],//现场图片
        }],
      // 夜市菜市
      'NightMarket': [{
        pointName: '点位1',//建议点位
        substreet: '成华区建设街道',//所属街道
        suggestedTime: '2023-06-05 05:05:23',//建议时间
        handlingSuggestion: 0, //处理意见
        longitude: 104.09796649367564,// 经度
        latitude: 30.528930339595234, //纬度
        livePicture: [
          '/urban/2023/06/29/850f9629de4e49c2bb53c109938b0cb6.jpg',
          '/urban/2023/06/29/8daea9bcf992425bb6c3dba217fc64fe.jpg'
        ],//现场图片
      },
      {
        pointName: '点位2',//建议点位
        substreet: '成华区建设街道',//所属街道
        suggestedTime: '2023-06-05 05:06:23',//建议时间
        handlingSuggestion: 0, //处理意见
        longitude: 104.05202783713408,// 经度
        latitude: 30.593486311588407, //纬度
        livePicture: [
          '/urban/2023/06/29/8b442b76c63e4792aca3a49701b0f59e.jpg',
          '/urban/2023/06/29/8daea9bcf992425bb6c3dba217fc64fe.jpg'
        ],//现场图片
      },
      {
        pointName: '点位3',//建议点位
        substreet: '成华区建设街道',//所属街道
        suggestedTime: '2023-06-05 05:08:23',//建议时间
        handlingSuggestion: 0, //处理意见
        longitude: 104.0601239568018,// 经度
        latitude: 30.576957817300556, //纬度
        livePicture: [
          '/urban/2023/06/29/95960973be1a477d8b33cfe3bec07743.jpg',
          '/urban/2023/06/29/941920c952854e43af085ef2700b108e.jpg'
        ],//现场图片
      }],
      // 广场舞
      'SquareDance': [{
        pointName: '锦城公园',//建议点位
        substreet: '武侯区益州大道中段',//所属街道
        suggestedTime: '2023-06-29 11:25:23',//建议时间
        handlingSuggestion: 0, //处理意见
        longitude: 104.0601239568018,// 经度
        latitude: 30.576957817300556, //纬度
        livePicture: [
          '/urban/2023/06/29/9b4b568437a04d99bff4db6a71d389b7.jpg',
          '/urban/2023/06/29/a276d129f31c4c75b6c0eaa7450bdf18.jpg'
        ],//现场图片
      },
      {
        pointName: '金宝广场',//建议点位
        substreet: '武侯区万象南路',//所属街道
        suggestedTime: '2023-06-29 05:06:23',//建议时间
        handlingSuggestion: 0, //处理意见
        longitude: 104.05202783713408,// 经度
        latitude: 30.593486311588407, //纬度
        livePicture: [
          '/urban/2023/06/29/0cef5485ae024f6287ccc8cf7aaa41f7.jpg',
          '/urban/2023/06/29/1e66655eac4844f8bf9054548cd7d68e.jpg'
        ],//现场图片
      },
      {
        pointName: '沙河小区',//建议点位
        substreet: '双流区香沙路',//所属街道
        suggestedTime: '2023-06-29 03:06:23',//建议时间
        handlingSuggestion: 0, //处理意见
        longitude: 104.08768715072675,// 经度
        latitude: 30.50656181914935, //纬度
        livePicture: [
          '/urban/2023/06/29/9b4b568437a04d99bff4db6a71d389b7.jpg',
          '/urban/2023/06/29/a276d129f31c4c75b6c0eaa7450bdf18.jpg'
        ],//现场图片
      },
      {
        pointName: '祥和二街',//建议点位
        substreet: '武侯区万象南路',//所属街道
        suggestedTime: '2023-06-28 19:06:23',//建议时间
        handlingSuggestion: 0, //处理意见
        longitude: 104.09796649367564,// 经度
        latitude: 30.528930339595234, //纬度
        livePicture: [
          '/urban/2023/06/29/9b4b568437a04d99bff4db6a71d389b7.jpg',
          '/urban/2023/06/29/a276d129f31c4c75b6c0eaa7450bdf18.jpg'
        ],//现场图片
      },
      {
        pointName: '华府大道',//建议点位
        substreet: '双流区警校路二段',//所属街道
        suggestedTime: '2023-06-28 15:06:23',//建议时间
        handlingSuggestion: 0, //处理意见
        longitude: 104.05202783713408,// 经度
        latitude: 30.593486311588407, //纬度
        livePicture: [
          '/urban/2023/06/29/0cef5485ae024f6287ccc8cf7aaa41f7.jpg',
          '/urban/2023/06/29/1e66655eac4844f8bf9054548cd7d68e.jpg'
        ],//现场图片
      },
      {
        pointName: '金桂花园丹桂苑',//建议点位
        substreet: '双流区中和街道朝阳路',//所属街道
        suggestedTime: '2023-06-27 15:08:23',//建议时间
        handlingSuggestion: 0, //处理意见
        longitude: 104.10060455514042,// 经度
        latitude: 30.564126595553653, //纬度
        livePicture: [
          '/urban/2023/06/29/9b4b568437a04d99bff4db6a71d389b7.jpg',
          '/urban/2023/06/29/a276d129f31c4c75b6c0eaa7450bdf18.jpg'
        ],//现场图片
      }],
      // 遛狗场所
      'DogWalk': [{
        pointName: '锦城公园',//建议点位
        substreet: '武侯区益州大道中段',//所属街道
        suggestedTime: '2023-06-29 11:25:23',//建议时间
        handlingSuggestion: 0, //处理意见
        longitude: 104.0601239568018,// 经度
        latitude: 30.576957817300556, //纬度
        livePicture: [
          '/urban/2023/06/29/0cef5485ae024f6287ccc8cf7aaa41f7.jpg',
          '/urban/2023/06/29/1e66655eac4844f8bf9054548cd7d68e.jpg'
        ],//现场图片
        dialogType: 'txt',
        txt1: '建议增设宠物爱心箱子：5个',
        txt2: '目前爱心箱个数：1个',
        txt3: '本月爆箱次数：2次'
      },
      {
        pointName: '金宝广场',//建议点位
        substreet: '武侯区万象南路',//所属街道
        suggestedTime: '2023-06-29 05:06:23',//建议时间
        handlingSuggestion: 0, //处理意见
        longitude: 104.05202783713408,// 经度
        latitude: 30.593486311588407, //纬度
        livePicture: [
          '/urban/2023/06/29/9b4b568437a04d99bff4db6a71d389b7.jpg',
          '/urban/2023/06/29/a276d129f31c4c75b6c0eaa7450bdf18.jpg'
        ],//现场图片
      },
      {
        pointName: '沙河小区',//建议点位
        substreet: '双流区香沙路',//所属街道
        suggestedTime: '2023-06-29 03:06:23',//建议时间
        handlingSuggestion: 0, //处理意见
        longitude: 104.08768715072675,// 经度
        latitude: 30.50656181914935, //纬度
        livePicture: [
          '/urban/2023/06/29/9b4b568437a04d99bff4db6a71d389b7.jpg',
          '/urban/2023/06/29/a276d129f31c4c75b6c0eaa7450bdf18.jpg'
        ],//现场图片
        dialogType: 'txt',
        txt1: '建议增设宠物爱心箱子：5个',
        txt2: '目前爱心箱个数：1个',
        txt3: '本月爆箱次数：2次'
      },
      {
        pointName: '祥和二街',//建议点位
        substreet: '武侯区万象南路',//所属街道
        suggestedTime: '2023-06-28 19:06:23',//建议时间
        handlingSuggestion: 0, //处理意见
        longitude: 104.09796649367564,// 经度
        latitude: 30.528930339595234, //纬度
        livePicture: [
          '/urban/2023/06/29/0cef5485ae024f6287ccc8cf7aaa41f7.jpg',
          '/urban/2023/06/29/1e66655eac4844f8bf9054548cd7d68e.jpg'
        ],//现场图片
      },
      {
        pointName: '华府大道',//建议点位
        substreet: '双流区警校路二段',//所属街道
        suggestedTime: '2023-06-28 15:06:23',//建议时间
        handlingSuggestion: 0, //处理意见
        longitude: 104.05202783713408,// 经度
        latitude: 30.593486311588407, //纬度
        livePicture: [
          '/urban/2023/06/29/9b4b568437a04d99bff4db6a71d389b7.jpg',
          '/urban/2023/06/29/a276d129f31c4c75b6c0eaa7450bdf18.jpg'
        ],//现场图片
      },
      {
        pointName: '金桂花园丹桂苑',//建议点位
        substreet: '双流区中和街道朝阳路',//所属街道
        suggestedTime: '2023-06-27 15:08:23',//建议时间
        handlingSuggestion: 0, //处理意见
        longitude: 104.10060455514042,// 经度
        latitude: 30.564126595553653, //纬度
        livePicture: [
          '/urban/2023/06/29/0cef5485ae024f6287ccc8cf7aaa41f7.jpg',
          '/urban/2023/06/29/1e66655eac4844f8bf9054548cd7d68e.jpg'
        ],//现场图片
      }],
      // 儿童游乐园
      'ChildrenPark': [{
        pointName: '世纪城国际展览中心',//建议点位
        substreet: '武侯区世纪城路198号',//所属街道
        suggestedTime: '2023-06-29 03:06:23',//建议时间
        handlingSuggestion: 0, //处理意见
        longitude: 104.07476974631308,// 经度
        latitude: 30.560898840490143, //纬度
        livePicture: [
          '/urban/2023/06/29/0cef5485ae024f6287ccc8cf7aaa41f7.jpg',
          '/urban/2023/06/29/1e66655eac4844f8bf9054548cd7d68e.jpg'
        ],//现场图片
      },
      {
        pointName: '成都三利爱琴海购物中心',//建议点位
        substreet: '天府新区天府大道南段辅路',//所属街道
        suggestedTime: '2023-06-28 04:08:23',//建议时间
        handlingSuggestion: 0, //处理意见
        longitude: 104.07476974631308,// 经度
        latitude: 30.49892067569685, //纬度
        livePicture: [
          '/urban/2023/06/29/0cef5485ae024f6287ccc8cf7aaa41f7.jpg',
          '/urban/2023/06/29/1e66655eac4844f8bf9054548cd7d68e.jpg'
        ],//现场图片
      },
      {
        pointName: '蓝山美树',//建议点位
        substreet: '武侯区鹭岛路36号',//所属街道
        suggestedTime: '2023-06-15 05:08:23',//建议时间
        handlingSuggestion: 0, //处理意见
        longitude: 104.08159231906677,// 经度
        latitude: 30.49080622046076, //纬度
        livePicture: [
          '/urban/2023/06/29/0cef5485ae024f6287ccc8cf7aaa41f7.jpg',
          '/urban/2023/06/29/1e66655eac4844f8bf9054548cd7d68e.jpg'
        ],//现场图片
      }],
    },

  }
}
window.mockDataImgList = [
  "/urban/2023/06/28/2425d7a50a0042419f0ccd9369fecbc8.jpg",
  "/urban/2023/06/28/2d21542dca8d4c81930e85a56a1cc84f.jpg",
  "/urban/2023/06/28/2d127ee851f14563bf1a0bdd1545c494.jpg",
  "/urban/2023/06/28/2eba1ef2bfe141b59d61855a1e024725.jpg",
  "/urban/2023/06/28/36b2de2c836042d58f09e6d939010efa.jpg",
  "/urban/2023/06/28/36eb719cf25144488a2cc4c54854a467.jpg",
  "/urban/2023/06/28/3e934a6adfee4dd18a37d93947581c80.jpg",
  "/urban/2023/06/28/42f1d49797634befbf9664644dd8e144.jpg",
  "/urban/2023/06/28/47f7061f93b24c32ad8f579e4d6103e4.jpg",
  "/urban/2023/06/28/47fcff1bd522473a8d5a27ab34316555.jpg",
  "/urban/2023/06/28/4dd7b279314a40329e9c588648fc86c3.jpg",
  "/urban/2023/06/28/51e13861b3994d278b86dca57e1f2ff4.jpg",
  "/urban/2023/06/28/57b6725df1864857b9a6fd57d85e723e.jpg",
]
