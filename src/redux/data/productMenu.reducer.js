const INITIAL_STATE = {
  menus: [
    {
      title: "hats",
      imgUrl: "https://i.ibb.co/cvpntL1/hats.png",
      id: 1,
      size: "",
    },
    {
      title: "jackets",
      imgUrl: "https://i.ibb.co/cvpntL1/hats.png",
      id: 2,
      size: "",
    },
    {
      title: "shoes",
      imgUrl: "https://i.ibb.co/cvpntL1/hats.png",
      id: 3,
      size: "",
    },
    {
      title: "Women",
      imgUrl: "https://i.ibb.co/cvpntL1/hats.png",
      id: 4,
      size: "large",
    },
    {
      title: "Men",
      imgUrl: "https://i.ibb.co/cvpntL1/hats.png",
      id: 5,
      size: "large",
    },
  ],
};

const productMenuReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productMenuReducer;
