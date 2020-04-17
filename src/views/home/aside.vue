<template>
    <el-aside width="200px">
        <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            :router="true"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <template v-for="item in menuList">
                <template v-if="item.children && item.children.length > 0">
                    <el-submenu :key="item.path" :index="item.path">
                        <template slot="title">
                            <i :class="item.icon"></i>
                            <span>{{ item.authName }}</span>
                        </template>
                        <el-menu-item v-for="subItem in item.children" :key="subItem.id" :index="subItem.path">
                            <template slot="title">
                                <i :class="item.icon"></i>
                                <span>{{ subItem.authName }}</span>
                            </template>
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.path" :key="item.path">
                        <i :class="item.icon"></i>
                        <span slot="title">{{ item.authName }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </el-aside>
</template>

<script>
import menuList from './menuList'
export default {
  data () {
    return {
      menuList: menuList
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  name: 'Aside'
}
</script>

<style lang="scss">
  
</style>
