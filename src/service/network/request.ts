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
	MainPhishingDataForm: (channel: string, month: number, page: number) => {
		return {
      Header: {
        CmdType: "MainPhishingData",
      },
      Body: {
        PCode: channel,
				Month: month,
        Length: 4,
        Offset: (page - 1) * 4,
      },
    }
	}
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

export interface MainPhishingDataType {
	CardThumbNail: string
  CardThumbNailAlt: string
	CardTitle: string
  Contents: string
	ContentsGenre: number
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
