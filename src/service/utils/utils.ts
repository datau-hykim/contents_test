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
