export const RequestApp2 = {
  NewPhishingDataForm: (channel: string) => {
    return {
      Header: {
        CmdType: "NewPhishingData",
      },
      Body: {
        PCode: channel,
        Length: 4,
        Offset: 0,
      },
    }
  },
  GetPhishingkeyword: () => {
    return {
      Header: {
        CmdType: "GetPhishingkeyword",
      },
      Body: {
        Length: 4,
        Offset: 0,
      },
    }
  },
}

export interface NewPhishingDataType {
  CardThumbNail: string
  CardThumbNailAlt: string
  CardTitle: string
  Contents: string
  ContentsGenre: string
  ContentsText: string
  IconName: string
  IconText: string
  Idx: string
  RegDT: string
  RegDT_Text: string
  Title: string
  Url: string
  serviceImg: string
  altImages: Array<string>
  images: Array<string>
}

export interface Keyword {
  OrderNum: number
  Title: string
  ChangeNum: number
  Arrow: string
  IconNum: number
}
