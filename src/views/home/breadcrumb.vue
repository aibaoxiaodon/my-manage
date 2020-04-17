<template>
  <div class="breadcrumb_content">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item
        v-for="(item, index) in tagsList"
        :key="index"
        :to="{ path: item.path }">
        {{ item.title }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  created () {
    console.log(this.$route)
    this.setTags(this.$route);
  },
  data () {
    return {
      tagsList: []
    }
  },
  watch:{
    $route(newValue, oldValue){
      console.log(newValue, oldValue)
      this.setTags(newValue);
    }
  },
  methods: {
    setTags (route) {
      this.tagsList.push({
        title: route.meta.title,
        path: route.fullPath,
        name: route.matched[1].components.default.name
      })
    }
  }
}
</script>

<style>

</style>