// const shareKakao = () => {
//   let bonmun = data.value[idx].Contents
//   bonmun = bonmun.replace(/<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/gi, "")
//   //@ts-ignore
//   window.Kakao.Link.sendDefault({
//     objectType: "feed",
//     content: {
//       title: data.value[idx].Title,
//       description: bonmun,
//       imageHeight: 550,
//       imageUrl: "https://images.antiscam.co.kr/serviceimage/" + data.value[idx].serviceImg,
//       link: {
//         mobileWebUrl:
//           "https://partner.antiscam.co.kr/PhishingDataDetail/" + this.CHANNEL + "/" + this.$route.params.idx.toString(),
//       },
//     },
//     buttons: [
//       {
//         title: "자세히 보기",
//         link: {
//           mobileWebUrl:
//             "https://partner.antiscam.co.kr/PhishingDataDetail/" +
//             this.CHANNEL +
//             "/" +
//             this.$route.params.idx.toString(),
//         },
//       },
//     ],
//   })
// }
import Swiper, { SwiperOptions } from "swiper"
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core"
SwiperCore.use([Autoplay, Pagination, Navigation])

import "swiper/swiper-bundle.min.css"
import "swiper/swiper.min.css"
import "swiper/components/navigation/navigation.min.css"

export const deviceCheck = () => {
  const filter = "win|win32|win64|mac|macintel"
  if (navigator.platform) return filter.indexOf(navigator.platform.toLowerCase()) < 0 ? true : false // mobile : pc
}
export const makeSwiper = (swiperID: any, swiperOpts: any) => {
  return new Swiper(swiperID, swiperOpts)
}
