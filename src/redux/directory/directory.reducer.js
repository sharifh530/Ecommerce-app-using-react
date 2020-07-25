const INITIAL_STATE = {
  sections: [
    {
      title: "hats",
      imageUrl:
        "https://img4.goodfon.com/wallpaper/nbig/5/dd/chelovek-shliapy-fon.jpg",
      id: 1,
      linkUrl: "shop/hats",
    },
    {
      title: "jackets",
      imageUrl:
        "https://c4.wallpaperflare.com/wallpaper/184/298/432/women-blonde-jacket-leather-jackets-wallpaper-preview.jpg",
      id: 2,
      linkUrl: "shop/jackets",
    },
    {
      title: "sneakers",
      imageUrl:
        "https://www.pixel4k.com/wp-content/uploads/2018/10/sneakers-legs-shoes-backlight-4k_1540060850.jpg",
      id: 3,
      linkUrl: "shop/sneakers",
    },
    {
      title: "womens",
      imageUrl:
        "https://lh3.googleusercontent.com/FCsvOvQ7gMivO3rOXC-O6ZIbbSl2I8JdnC2oKHJF31Zi7zeQyE9Gx7vhTXuEb8Q1cKdfmTRzxo8yf30lSiyNnXHGi98FOzpnyinp9_8PWYFH2SQ6u3dEG5Yop16OrToXFIi0e9S79FG40tM3YmNr1VUvO5qbRLu0nwHwn4EbyhoLr6D8Px97jdpfk018vpQBqvvWbOT_8_30VzYyURcXxNDkJAlD_j9zial5Lav7JeZ1m6_nD0CmnfijR8hPB_JEOvZWxP_clJXTW1BJr3OaTMavjcY83LzicYG8BKJDSFclNL6qsg81T5-AWPNP2eylJ8B5b3xoz-W3_eUdwuw9wYSRsMOGSP6_bfryc8fzz85r0144TrhR0Xm2QB_RCWH1nUOkNv6XsZ6HnoWV8K8gdLEs8Wx8kbDPbwCzqtjea-cYQgDYd2GIMmIrbQrCjLIUc77TmMrhZsuWIkjZuFd8YH7Z1EodO7lN84ozOxQnYqZPmMo9upqQe0Xe8bhFmuFEbFUcSEg1hruaJAOn_gGTJz6_KERGg1MnpGncqA8-nqIaqtGofz5VRxIxs-1FOUDG1yOEZDxlF0hxFGzOWBWGRU_d8XzDgspp3tTr2bJ9p1ASXu2wFZUk2Mnh3MqQKW3ux-ezul2ZYsVIUQ0ZfbtVJjQsWOjAXMrwtwkwn8zPRsMLMrsDYHiImQ-Rwhko=w1129-h635-no?authuser=0",
      size: "large",
      id: 4,
      linkUrl: "shop/womens",
    },
    {
      title: "mens",
      imageUrl:
        "https://lh3.googleusercontent.com/PghR5eQG2ZNk0yetcnRVShwEhUz-AOr3LtfPyfXGrA4J2dMjtvKx4oESfVfe8WjGVtMeykm4VcQhVLB2R2ulGScaQb7c_QrItyleFeYGvwxFkqG8le111JTiRDk_7v5dtcHg5QymiAta7_JmEebN8OiSgUokpzKF6wT9RSKu5O8US3iw6u4zm3Tibjh-kHnvt_22V5Wag9Fa3aqQtXw8WzDCeRCsbTGvghSBRp0cg-FAp9zNEiVEhCu-4ekte99KXowWRl1ov9BUaiwPmwNvxkOycQRQfwyQmLNcnMd83FMEY3u8VYNqnO2OFDIy_BM26lPhWLCkl-fEBp2VPEYKUfCRTg6A0HGUADfnEga5oPnu5v5igNeC4hHpsoSPqbCR1rcqARwzNfJtxEt81SpLG7so4Z5FvYGbO-6OeiJ1MwY5sVkC0e6aXAQV8AZ8jtHmt-8TAOVa7qZKYsdF-XtGIFANn93BcueLDSWuieA2ZA_YEOiLxBS6t3MAQXHp6QvCBe6jIUlVpzcmp-xx_BhR8dJTev6IVnv9O94KXzQ0gD27Fc58lCvvWSww61NkWuNafPT-kniNjliw9yEmD_oN-0dmxUShj8kxDRZM2Ih-myMpvUVFL4WQKEEzlAXop8xk-sH1vWJS0lkEdjQIxpGUdFmW2zogNh-ws1VI9jJmbMpiWsjURdcyenWrkTLi=w1042-h586-no?authuser=0",
      size: "large",
      id: 5,
      linkUrl: "shop/mens",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
