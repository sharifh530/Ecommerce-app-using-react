import React from "react";
import MenuItem from "../menu/menu-item";
import "./directory-menu.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      section: [
        {
          title: "hats",
          imageUrl:
            "https://img4.goodfon.com/wallpaper/nbig/5/dd/chelovek-shliapy-fon.jpg",
          id: 1,
          linkUrl: "hats",
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
          imageUrl: "https://images7.alphacoders.com/442/thumb-1920-442644.jpg",
          size: "large",
          id: 4,
          linkUrl: "shop/womens",
        },
        {
          title: "mens",
          imageUrl:
            "https://www.biographyprofile.com/wp-content/uploads/2020/01/srk-cover.png",
          size: "large",
          id: 5,
          linkUrl: "shop/mens",
        },
      ],
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.section.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
