<template>
  <div class="phishingcase" v-if="data[idx]">
    <div class="contents-wrapper">
      <div class="contents-title">{{ data[idx].Title }}</div>
      <div class="contents-date">{{ $dayjs(data[idx].RegDT).format("YYYY-MM-DD HH:mm:ss") }}</div>
      <div class="contents-news" v-html="data[idx].Contents"></div>
    </div>
    <div class="button-wrapper">
      <img id="kakao-link-btn" @click="shareKakao" src="@/assets/phishingcase-share_kakao.jpg" />
      <img src="@/assets/phishingcase-join_antiscam.jpg" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue"
import { useRoute } from "vue-router"
import { useStore } from "vuex"
// import { url, image } from "@/service/constant/constant.json"
// import { serverURL } from "@/service/network/network"

export default defineComponent({
  setup() {
    const { state, dispatch } = useStore()
    const idx = ref(Number(useRoute().params.idx))
    const data = computed(() => state.app2.NewPhishingData)
    // const channel = computed(() => state.app2.pcode)
    const setData = async () => {
      await dispatch("app2/requestNewPhishingData", { length: 1, offset: idx.value })
    }
    if (data.value.length !== 4) {
      setData()
      idx.value = 0
    }

    const shareKakao = () => {
      //@ts-ignore
      window.Kakao.Link.createDefaultButton({
        container: "#kakao-link-btn",
        objectType: "text",
        text: "기본 템플릿으로 제공되는 텍스트 템플릿은 텍스트를 최대 200자까지 표시할 수 있습니다. 텍스트 템플릿은 텍스트 영역과 하나의 기본 버튼을 가집니다. 임의의 버튼을 설정할 수도 있습니다. 여러 장의 이미지, 프로필 정보 등 보다 확장된 형태의 카카오링크는 다른 템플릿을 이용해 보낼 수 있습니다.",
        link: {
          mobileWebUrl: "https://developers.kakao.com",
          webUrl: "https://developers.kakao.com",
        },
      })
      // let bonmun = data.value[idx.value].Contents
      // bonmun = bonmun.replace(/<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/gi, "")
      // console.log(bonmun)
      // console.log(data.value[idx.value].Title)
      // console.log(serverURL(image) + "serviceimage/" + data.value[idx.value].serviceImg)

      // //@ts-ignore
      // window.Kakao.Link.sendDefault({
      //   objectType: "feed",
      //   content: {
      //     title: data.value[idx.value].Title,
      //     description: bonmun,
      //     imageHeight: 550,
      //     imageUrl: serverURL(image) + "serviceimage/" + data.value[idx.value].serviceImg,
      //     link: {
      //       mobileWebUrl: serverURL(url) + channel.value + "/" + idx.value.toString(),
      //     },
      //   },
      //   buttons: [
      //     {
      //       title: "자세히 보기",
      //       link: {
      //         mobileWebUrl: serverURL(url) + channel.value + "/" + idx.value.toString(),
      //       },
      //     },
      //   ],
      // })
    }

    return {
      data,
      idx,
      setData,
      shareKakao,
    }
  },
})
</script>
