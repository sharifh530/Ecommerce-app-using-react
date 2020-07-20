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
            "https://lh3.googleusercontent.com/proxy/XW8VLYs37_I3I9EPQmQC9w-I18EfaZ2htNgwAlgGrEtMl51fA1iQiseB4g3nPBrz6RJxAh8tiPUD18odN_K-L7zZ23qzUdsBcLdiA_JzWEZgqqni__6ph7Xv17Wj",
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
            "https://lh3.googleusercontent.com/proxy/Ca40amdP5dN33ngmhe1GuOb3vF9w3SV_ljCJ4aeGG4ku3a-CSJguN7VSqtiwL7NNehCHbxRHWM9hnsXnxmXte-0iyh5a_8Nl4z6lgJH5FnNn43R1zO_8eOy80LnMLEQPmWU-GDdUXh4nICA",
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
