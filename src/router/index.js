import Vue from 'vue'
import Router from 'vue-router'

//首页界面页面
import indexPage from '@/components/indexPage'
//文章列表示例页面

//备份用---------------------
///import articleListPage from '@/components/articleListPage'
///------------------------------
//文章内容样式
//备份用---------------------
//import articlePage from '@/components/articlePage'
///------------------------------
import Hello from '@/components/Hello'

//---------------正式页面-------------------
//文章列表页面
import listPageArticle from '@/components/generalArticle/articleList'
//文章内容页面
import contPageArticle from '@/components/generalArticle/articlePage'
//关于我
import aboutPage from '@/components/aboutMe/aboutPage'
//留言板
import messagePage from '@/components/message/messagePage'
//产品列表
import productPage from '@/components/product/productPage'



//////音乐页面//////
import articlePage from '@/components/musicComponents/articlePage'
import articleListPage from '@/components/musicComponents/articleListPage'
import musicMainPage from '@/components/musicComponents/musicMain'
///音乐首页界面
import musicIndexPage from '@/components/musicComponents/music_indexPage';


////搜索音乐界面
import musicSearchPage from '@/components/musicComponents/search/seachMain';
/////
//////歌曲搜素列表
import searchListOfSong from '@/components/musicComponents/search/searchList';
//////searchList_Album 专辑搜索列表
import searchListOfAlbum from '@/components/musicComponents/search/searchList_Album';
//////歌手搜索列表
import searchListOfSinger from '@/components/musicComponents/search/searchList_singer';
//专辑列表
import albumListPage from '@/components/musicComponents/albumList/albumListPage'



///登陆界面
import loginPage from '@/components/theNewPage/login';
import startUp from '@/components/theNewPage/start-up';





Vue.use(Router)

export default new Router({
  routes: [
    // {path: '/',redirect: '/index'},
    // {path: '/index',name: 'indexPage',component: indexPage},
    // {path: '/hello',name: 'Hello',component: Hello},
    // {path: '/articlePage',name: 'articlePage',component: articlePage},
    // {path: '/listPageOfArticle',name: '资讯文章',component: listPageArticle},
    // {path: '/contPageArticle',name: '文章详细内容',component: contPageArticle},
    // {path: '/aboutPage',name: '关于我',component: aboutPage},
    // {path: '/productPage',name: '产品列表',component: productPage},
    // {path: '/messagePage',name: '留言板',component: messagePage},
    // {path: '/musicMainPage',name: '音乐搜素',component: musicMainPage, 
    // children: [
    // 	{path: '/', redirect: '/musicMainPage/musicIndexPage'},
    // 	{path: '/musicMainPage/musicIndexPage',name: '音乐首页',component: musicIndexPage},
    // ]},
    // {path: '/musicSearchPage',name: '音乐搜索界面',component: musicSearchPage,
    //     children: [
    //        // {path: '/', redirect: '/musicMainPage/musicIndexPage/searchListOfSong'},
    //         {path: '/musicSearchPage/searchListOfSong',name: '歌曲搜素列表',component: searchListOfSong},
    //         {path: '/musicSearchPage/searchListOfAlbum',name: '专辑搜素列表',component: searchListOfAlbum},
    //         {path: '/musicSearchPage/searchListOfSinger',name: '歌手搜素列表',component: searchListOfSinger},
    //     ]},
    // {path: '/articleListPage',name: '音乐列表',component: articleListPage},
    // {path: '/albumListPage',name: '专辑列表',component: albumListPage},
      {path: '/',redirect: '/loginPage'},
      {path: '/loginPage',name: '登陆界面',component: loginPage},
      {path: '/startup',name: '启动页面',component: startUp},
      


  ]
})
