<template>
  <div>
    <div class="head">금융사기 피해신고</div>
    <div class="container">
      <div class="hihi_1">
        <div class="koo">
          <div>금융사기 피해상담 및 환급</div>
          <div class="hihihi">금융감독원</div>
        </div>
        <div class="koo2">
          <div class="tt">1332</div>
          <div class="eo">국번없이</div>
        </div>
      </div>
      <div class="hihi">
        <div class="koo">
          <div>지급정지</div>
          <div class="hihihi">경찰청</div>
        </div>
        <div class="koo2">
          <div class="tt">112</div>
          <div class="eo">국번없이</div>
        </div>
      </div>
      <div class="hihi">
        <div class="koo">
          <div>피싱사이트 신고</div>
          <div class="hihihi">인터넷진흥원</div>
        </div>
        <div class="koo2">
          <div class="tt">118</div>
          <div class="eo">국번없이</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  components: {},
  data() {
    return {
      sampleData: "example",
    }
  },
}
</script>

<style scoped>
.container {
  border-top: 2px solid #04167c;
  border-bottom: 2px solid #04167c;
  display: block;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 0 0 60px 0;
}
.item {
  display: flex;
}
.hihi {
  display: flex;
  box-sizing: border-box;
  border-top: 2px solid #e0e0e0;
  justify-content: space-between;
}
.hihi_1 {
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
}
.koo {
  padding: 15px 0 15px 10px;
  display: block;
}
.hihihi {
  color: #019ddf;
}
.koo2 {
  padding: 15px 30px 0 0;
  flex-basis: 60px;
  text-align: center;
}
.head {
  padding: 0px 2px 10px;
  box-sizing: border-box;
}
@media screen and (max-width: 360px) {
  .hihihi {
    padding-top: 6px;
    font-size: 14px;
  }
  .hihi {
    font-size: 16px;
  }
  .eo {
    font-size: 11px;
  }
  .tt {
    font-size: 30px;
  }
}
</style>
