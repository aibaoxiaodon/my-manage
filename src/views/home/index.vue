<template>
    <el-container>
        <Aside></Aside>
        <el-container>
            <el-header>
                <div class="header-right">
                    <div class="user-avator">
                        <img src="../../assets/img.jpg" alt="">
                    </div>
                    <el-dropdown trigger="click">
                        <span class="el-dropdown-link">
                            admin
                            <i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item icon="el-icon-circle-plus">修改密码</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </el-header>
            <el-main>
              <Breadcrumb></Breadcrumb>
              <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import Aside from './aside'
import Breadcrumb from './breadcrumb'

export default {
  data () {
    return {}
  },
  methods: {},
  components: {
    Aside,
    Breadcrumb
  },
  name: 'Home'
}
</script>

<style>
  .header-right {
      height: 100%;
      float: right;
      display: flex;
      align-items: center;
  }
  .user-avator {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  .user-avator>img {
    width: 100%;
      border-radius: 50%;
  }
  .el-menu-item, .el-submenu__title {
      text-align: left;
  }

  .el-aside {
    background-color: rgb(84, 92, 100);
    color: #333;
    text-align: center;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }
  .el-container {
    height: 100%;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .el-dropdown-link {
    cursor: pointer;
    padding-left: 20px;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }
</style>
