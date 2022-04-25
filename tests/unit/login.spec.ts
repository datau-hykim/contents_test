const mockFn = jest.fn()
const { login } = require("./mock.json")

mockFn.mockResolvedValue(login)

test("로그인 데이터", () => {
  mockFn().then(({ Body }: any) => {
    expect(Body[0].UserID).toBe("test1")
  })
})
