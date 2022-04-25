export default {
  messageStatus(type: string) {
    switch (type) {
      case "0":
        return "발송중"
      case "4":
        return "발송완료"
      default:
        "알수없음"
        break
    }
  },
  memoType(type: string) {
    switch (type) {
      case "0":
        return "인증해지"
      case "1":
        return "임의해지"
      case "2":
        return "메모저장"
      case "3":
        return "차단등록"
      default:
        "기타"
        break
    }
  },
  carrierName(type: string) {
    switch (type) {
      case "0":
        return "SKT"
      case "1":
        return "KT"
      case "2":
        return "LGU+"
      default:
        "기타"
        break
    }
  },
}
