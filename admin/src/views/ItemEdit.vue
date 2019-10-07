<template>
  <div class="about">
    <h1>{{id?'编辑':'新建'}}物品</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="图标">
        <el-upload
          :action="uploadUrl"
          :headers="getAuthHeaders()"
          :show-file-list="false"
          :on-success="afterUpload"
        >
          <img v-if="model.icon" :src="model.icon" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "itemedit",
  props: {
    id: String
  },
  data() {
    return {
      model: {
        type: Object
      }
    };
  },
  created() {
    this.id && this.fetch();
  },
  methods: {
    async save() {
      if (this.id) {
        //编辑提交
        await this.$http.put(`rest/items/${this.id}`, this.model);
      } else {
        //新建
        await this.$http.post("rest/items", this.model);
      }
      this.$router.push("/items/list");
      this.$message({
        type: "success",
        message: "保存成功"
      });
    },
    async fetch() {
      const res = await this.$http.get(`rest/items/${this.id}`);
      this.model = res.data;
    },
    afterUpload(res) {
      //显示赋值
      this.$set(this.model, "icon", res.url);
    }
  }
};
</script>
<style scoped>
</style>