class Project {
  constructor(
    img,
    title,
    desc,
    gitLink,
    id,
    deployLink,
    projectTech,
    features
  ) {
    this.img = `assets/${img}`;
    this.title = title;
    this.desc = desc;
    this.gitLink = gitLink;
    this.id = id;
    this.deployLink = deployLink;
    this.projectTech = projectTech;
    this.features = features;
  }
}

export const projectArr = [
  {
    ...new Project(
      "PharmEasy.png",
      "PharmEasy Clone",
      "PharmEasy is an online pharmacy website where customers can easily get the medicines, book lab tests, and can consult doctors online.",
      "https://github.com/Raju-16/PHARMEASY-CLONE.git",
      "1",
      "https://pharmeasy-clone.netlify.app/",
      [
        "assets/html-5.png",
        "assets/css.png",
        "assets/js.png",
        "assets/node-js.png",
        "assets/mongodb.png",
        "assets/expressjs-icon.svg",
      ],
      [
        "Responsive web design",
        "Backend authentication",
        "CRUD operations on jobs",
      ]
    ),
  },
  {
    ...new Project(
      "frazzo.png",
      "Frazzo clone",
      "Frazzo is a Ecommerce plateform where you can Order online Fruits and Vegetables directly from farm and Get farm-fresh produce under 12 hours from harvest at best price from Fraazo.",
      "https://github.com/Raju-16/fraazo.com.git",
      "2",
      "rajufrazzo.netlify.app",
      ["assets/html-5.png", "assets/css.png", "assets/js.png"],
      [
        "User-friendly easy and secure purchasing system.",
        "Location-based medicine delivery.",
        "Sign-in/Sign-up for user.",
      ]
    ),
  },

  {
    ...new Project(
      "zara.jpeg",
      "ZARA Clone",
      "Zara Online stores have men's and women's clothing as well as children's clothing (Zara Kids). Zara Home designs are located in European stores. The majority of Zara customers are aged between 18 and about 35.",
      "https://github.com/Raju-16/zara",
      "1",
      "https://zara-vert.vercel.app/",
      ["assets/html-5.png", "assets/css.png", "assets/js.png"],
      [
        "User-friendly easy and secure purchasing system.",
        "Location-based delivery.",
        "Sign-in/Sign-up for user.",
      ]
    ),
  },

];
