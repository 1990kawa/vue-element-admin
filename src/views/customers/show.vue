<template>
  <div class="app-container">
    <div v-if="user">
      <el-row :gutter="20">

        <el-col :span="6" :xs="24">
          <user-card :user="user" />
        </el-col>

        <el-col :span="18" :xs="24">
          <el-card>
            <el-table
              :data="tableData"
              :show-header="false"
              style="width: 100%"
            >
              <el-table-column
                prop="key"
                label="Key"
                width="180"
              />
              <el-table-column
                prop="value"
                label="Value"
                width="180"
              />
            </el-table>
          </el-card>

          <el-card>
            <el-tabs v-model="activeTab">
              <el-tab-pane label="商品" name="activity" />
              <el-tab-pane label="支払" name="timeline" />
              <el-tab-pane label="時間" name="account" />
            </el-tabs>
          </el-card>
        </el-col>

      </el-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UserCard from './components/UserCard'

export default {
  name: 'ShowCustomer',
  components: { UserCard },
  data() {
    return {
      user: {},
      activeTab: 'activity',
      tableData: [{
        key: '名前',
        value: '川島A'
      }, {
        key: 'ふりがな',
        value: 'かわしまA'
      }, {
        key: '性別',
        value: '男性'
      }, {
        key: '誕生日',
        value: '1990/03/03'
      }, {
        key: '電話番号',
        value: '000-0000-0000'
      }, {
        key: 'メールアドレス',
        value: 'hoge@google.com'
      }, {
        key: '郵便番号',
        value: '100-1100'
      }, {
        key: '住所',
        value: '東京'
      }]
    }
  },
  computed: {
    ...mapGetters([
      'name',
      'avatar',
      'roles'
    ])
  },
  created() {
    this.getUser()
  },
  methods: {
    getUser() {
      this.user = {
        name: this.name,
        role: this.roles.join(' | '),
        email: 'admin@test.com',
        avatar: this.avatar
      }
    }
  }
}
</script>

<style>
table {
  width: 100% !important;
}
.el-card.is-always-shadow {
  margin-bottom: 10px;
}
</style>
