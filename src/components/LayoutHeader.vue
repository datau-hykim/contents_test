<template>
  <div class="header_wrapper">
    <div @click="reload" class="icon-wrapper">
      <!-- <img class="header-icon" src="@/assets/img-logo-02@2x.png" /> -->
    </div>
    <div>
      <!-- <a class="msg-refund"
        >대기중인 환불내역 <button @click="goLink">{{ countRefund }}건</button></a
      > -->
      <!-- <a class="user_name" v-html="adminInfo.UserName"></a>님<el-button
        class="logout_btn btn-default"
        @click="logout(adminInfo.UserID)"
        >로그아웃</el-button
      > -->
    </div>
  </div>
</template>

<script lang="ts"></script>

<style lang="scss" scoped>
.header_wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.user_name {
  font-weight: bold;
  font-size: 20px;
  margin-right: 10px;
}
.logout_btn {
  padding: 10px;
  margin-left: 20px;
}
.msg-refund {
  margin-right: 15px;
  font-size: 14px;
  color: red;
  font-weight: bolder;
  button {
    background: none;
    border: none;
    padding: 0;
    text-decoration: underline;
    color: blue;
    cursor: pointer;
  }
}
.icon-wrapper {
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
}
.header-icon {
  height: 25px;
  margin-right: 6px;
}
</style>
