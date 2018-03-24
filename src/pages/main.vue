<template>
    <el-container>
        <!-- 头部 -->
        <el-header class="header" height="50px">
            <el-row :gutter="20" type="flex" justify="space-between">
                <el-col :span="4">
                WEB系统
                </el-col>
                <el-col>
                    <!-- 右侧导航 -->
                    <el-menu
                        class="el-menu-right"
                        mode="horizontal"
                        border-bottom="0"
                        background-color="#373d41"
                        text-color="#fff"
                        active-text-color="#409EFF"
                    >
                        <el-menu-item index="1" v-popover:msg>
                            <!-- 消息提示 -->
                            <i class="iconfont icon-lingdang"></i>  
                            <el-badge :value="3"></el-badge> 
                            <el-popover
                              ref="msg"
                              placement="bottom"
                              
                              trigger="hover">
                              <div>
                                    <ul class="msg-list">
                                        <li>
                                            <p class="top-msg">
                                                <span>张三</span>
                                                <span>任务类型1</span>
                                                <span>请XX批示</span>  
                                            </p>
                                            <p>2018-03-20 12:30</p>
                                        </li>  
                                        <li>
                                            <p class="top-msg">
                                                <span>张三</span>
                                                <span>任务类型1</span>
                                                <span>请XX批示</span>  
                                            </p>
                                            <p>2018-03-20 12:30</p>
                                        </li>  
                                        <li>
                                            <p class="top-msg">
                                                <span>张三</span>
                                                <span>任务类型1</span>
                                                <span>请XX批示</span>  
                                            </p>
                                            <p>2018-03-20 12:30</p>
                                        </li>
                                    </ul>
                              </div>
                            </el-popover>
                        </el-menu-item>
                            <el-submenu index="2">
                            <template slot="title">我的工作台</template>
                            <el-menu-item index="2-1">选项1</el-menu-item>
                            <el-menu-item index="2-2">选项2</el-menu-item>
                            <el-menu-item index="2-3">选项3</el-menu-item>
                            </el-submenu>
                            <el-menu-item index="4">订单管理</el-menu-item>
                            <el-menu-item index="5" v-popover:user>
                                <img class="user-img" src="../assets/default_handsome.jpg" alt="">
                                <el-popover
                                    popper-class="user-popover"
                                    ref="user"
                                    width="272"
                                    placement="bottom"
                                    trigger="hover">
                                    <div class="user-box">
                                        <div class="center user-top">
                                            <p><img class="user-img" src="../assets/default_handsome.jpg" alt=""> </p>
                                            <p>张三</p>
                                        </div> 
                                        <div class="user-bottom">
                                            <ul class="clearfix">
                                                <li>
                                                    <a href="">
                                                        <p>
                                                            <i class="iconfont icon-jibenziliao"></i>
                                                        </p>  
                                                        <p>基本资料</p>  
                                                    </a>
                                                </li> 
                                                <li>
                                                    <a href="">
                                                        <p>
                                                            <i class="iconfont icon-shimingrenzheng"></i>
                                                        </p>  
                                                        <p>实名认证</p>  
                                                    </a>
                                                </li> 
                                                <li>
                                                    <a href="">
                                                        <p>
                                                            <i class="iconfont icon-shezhi-tianchong"></i>
                                                        </p>  
                                                        <p>安全设置</p>  
                                                    </a>
                                                </li> 
                                                <li>
                                                    <a href="">
                                                        <p>
                                                            <i class="iconfont icon-jibenziliao"></i>
                                                        </p>  
                                                        <p>基本资料</p>  
                                                    </a>
                                                </li> 
                                                <li>
                                                    <a href="">
                                                        <p>
                                                            <i class="iconfont icon-shimingrenzheng"></i>
                                                        </p>  
                                                        <p>实名认证</p>  
                                                    </a>
                                                </li> 
                                                <li>
                                                    <a href="">
                                                        <p>
                                                            <i class="iconfont icon-shezhi-tianchong"></i>
                                                        </p>  
                                                        <p>安全设置</p>  
                                                    </a>
                                                </li> 
                                            </ul>    
                                        </div>  
                                        <div class="user-out center">
                                            <router-link to="/">
                                            退出管理平台
                                            </router-link>
                                        </div>
                                    </div>
                                </el-popover>            
                            </el-menu-item>
                        </el-menu> 
                </el-col>
            </el-row>
        </el-header>
        <el-container>
            <!-- 左侧侧导航 -->
            <el-menu
                height="100%" 
                class="el-menu-left"
                background-color="#333744"
                text-color="#fff"
                :unique-opened="true" 
                :router="true" 
                :collapse="isCollapse"
                default-active="1"
                :class="{menuwidth:!isCollapse}"
            >
                <p class="mianbaoxie">
                    <i  class="iconfont icon-mianbaoxie" 
                        :class={rotate:isCollapse} 
                        @click="closeAside">
                    </i>
                </p>
                <template v-for="(item, index) in menu">
                    <el-submenu  
                    v-if="item.submenu" 
                    :key="index" 
                    :index="String(index)"
                    >
                        <template slot="title">
                            <i :class="item.icon"></i>
                            <span class="menu-title">{{item.title}}</span>
                        </template>
                        <el-menu-item v-for="(subItem, subIndex) in item.submenu" :index="String(index) + '-' + String(subIndex)" :route="{path: subItem.path}">
                            <i :class="item.icon"></i>
                            <span slot="title">{{subItem.title}}</span>
                        </el-menu-item>
                    </el-submenu>
              
                    <el-menu-item v-else  :index="String(index)" :route="{path: item.path}">
                        <i :class="item.icon"></i>
                        <span slot="title">{{item.title}}</span>
                    </el-menu-item>
                </template>
            </el-menu>
            <el-container>
                <!-- 内容区域 -->
                <el-main>
                    <transition name="fade" mode="out-in">
                        <router-view></router-view>
                    </transition>
                </el-main>
            </el-container>
        </el-container>
    </el-container>
</template>

<script>
export default {
  name: 'mainvue',
  data () {
    return {
      isCollapse:false,
      menu:[
        {
          title: '角色权限',
          icon: 'iconfont icon-quanxianguanli',
          path: '/main/child1'
        },
        {
          title: '产品管理',
          icon: 'iconfont icon-guanli',
          submenu: [
            {
              title: '产品类型',
              path: '/main/child2'
            },
            {
              title: '页面3',
              path: '/main/child3'
            }
          ]
        },
        {
          title: '角色权限',
          icon: 'iconfont icon-quanxianguanli',
          path: '/main/child1'
        },
        {
          title: '产品管理',
          icon: 'iconfont icon-guanli',
          submenu: [
            {
              title: '产品类型',
              path: '/main/child2'
            },
            {
              title: '页面3',
              path: '/main/child3'
            }
          ]
        }
      ]
    }
  },
  mounted () {
    // this.$router.push('/main/child2'); 
  },
  methods : {
    closeAside () {
      this.isCollapse = !this.isCollapse;
    }
  }
}
</script>

<style scoped>
  .el-header{
    line-height:50px;
    background-color: #373d41;
    font-size:18px;
    color: #fff;  
  }
  .menuwidth{
    width:230px;
  }
  .menu-title{
    color:#fff;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
  }
  .el-container{
    width:100%;
  }
  .el-container,.el-main{
    height:100%;
  }
  .mianbaoxie{
    height:30px;
    line-height:30px;
    text-align:center;
    background: #4a5064;
  }
  .mianbaoxie i{
    display:inline-block;
    color:#909399;
    font-size:18px;
    cursor:pointer;
  }
  .mianbaoxie i:hover{
    color:#fff;
  }
  .rotate{
    transform:rotate(90deg);
  }
  .el-menu--horizontal{
    border-bottom:0 !important;
   }
  .el-menu{
    float:right;
    transition:all 0s linear;
  }
  .el-menu-left .iconfont{
    margin-right:10px;
  }
  .icon-lingdang{
    font-size:20px;
    color:#fff;
  }
  .msg-list li{
    margin-bottom:10px;
  }
  .msg-list li:last-child{
    margin-bottom:0;
  }
  .msg-list p{
    margin-bottom:5px;
  }
  .top-msg{
    color: #00C1DE;
  }
  .user-img{
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
  .user-top{
    padding:10px ;
    border-bottom: 1px solid #ddd;
  }
  .user-bottom {
    padding:15px;
  }
  .user-bottom li{
    float:left;
    text-align:center;
  }
  .user-bottom p:first-child{
    margin-bottom:10px;
  }
  .user-bottom a{
    display:block;
    padding-top:12px;
    width:80px;
    height:80px;
    transition:background .2s linear;
  }
  .user-bottom a:hover{
    background: #f5f5f5;
  }
  .user-out{
    height:40px;
    line-height:40px;  
    background-color: #f5f5f6;
    cursor:pointer;
  }
  .user-out a{
    transition:all .2s linear;
  }
  .user-out:hover a{
    color:#409EFF;

  }
</style>
