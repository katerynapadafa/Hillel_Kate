const STICKERS_API_URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/stickers'
const stickersApi = new RestApi(STICKERS_API_URL)
stickersApi.getList()