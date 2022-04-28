<template>
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
  padding-top: 6px;
}
.koo2 {
  min-width: 108px;
  padding: 15px 0px 10px 0;
  /* flex-basis: 60px; */
  box-sizing: border-box;
  text-align: center;
}

.head {
  padding: 0px 2px 10px;
  box-sizing: content-box;
  font-size: 16px;
}
.eo {
  text-align: center;
}

@media screen and (max-width: 360px) {
  .hihihi {
    padding-top: 6px;
    font-size: 14px;
  }
  .hihi {
    font-size: 16px;
  }
  .hihi1 {
    font-size: 16px;
  }
  .eo {
    padding-left: 26px;
    font-size: 11px;
  }
  .tt {
    padding-left: 26px;
    font-size: 30px;
  }
}

@media screen and (min-width: 640px) {
  .hihihi {
    font-size: 16px;
  }
  .hihi {
    font-size: 20px;
  }
  .hihi_1 {
    font-size: 20px;
  }
  .eo {
    font-size: 12px;
    text-align: center;
  }
  .tt {
    font-size: 35px;
  }
  /* .container {
    width: 90%;
  } */
  .head {
    font-size: 30px;
  }
}
</style>
