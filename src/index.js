import { Article } from "./js/Article";

const data = [
  {
    id: 1,
    title: "Increasing Prosperity With Positive Thinking",
    urlToImage: "./src/img/strategies/1.jpg",
    tags: ["Art", "Design"],
    content:
      "Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",
    date: "01.01.2020",
  },
  {
    id: 2,
    title: "Motivation Is The First Step To Success",
    urlToImage: "./src/img/strategies/2.jpg",
    tags: ["Culture"],
    content:
      "Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",
    date: "01.01.2020",
  },
  {
    id: 3,
    title: "Success Steps For Your Personal Or Business Life",
    urlToImage: "./src/img/strategies/3.jpg",
    tags: ["Culture", "Design", "Art"],
    content:
      "Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",
    date: "01.01.2020",
  },
];

window.onload = function () {
  console.log("Hello");

  //Render Article
  if(data) {
    const renderArticlesToDom = () => {
      let strategiesWrapper = getStrategiesWrapper();
    };

    const getStrategiesWrapper = () => {
      const strategiesConstainer = document.querySelector('.strategy-wrapper');
      strategiesConstainer.innerHTML = '';
      return strategiesConstainer;
    };
  }

  //Tags
  addTagsClickHandler();
};

const addTagsClickHandler = () => {
  document.querySelector(".strategies__tags").addEventListener("click", (e) => {
    if (e.target.classList.contains("tag")) {
      let clickedTag = e.target;
      removeSelectedTads();
      selectClickedTag(clickedTag);
      if (clickedTag.innerText === "All") {
        showAllStrategies();
      } else {
        filterStrategyBySelectedTag(clickedTag.innerText);
      }
    }
  });
};

const removeSelectedTads = () => {
  let tags = document.querySelectorAll(".strategies__tags .tag");
  tags.forEach((tag) => {
    tag.classList.remove("tag_selected");
    tag.classList.add("tag_bordered");
  });
};

const selectClickedTag = (clickedTag) => {
  clickedTag.classList.add("tag_selected");
  clickedTag.classList.remove("tag_bordered");
};

const showAllStrategies = () => {
  let strategies = document.querySelectorAll(".strategy-wrapper .strategy");
  strategies.forEach((strategy) => {
    strategy.classList.remove("strategy_hidden");
  });
};

const filterStrategyBySelectedTag = (selectedTag) => {
  let strategies = document.querySelectorAll(".strategy-wrapper .strategy");
  strategies.forEach((strategy) => {
    strategy.classList.add("strategy_hidden");
    strategy.querySelectorAll(".tag").forEach((tag) => {
      if (tag.innerText === selectedTag) {
        strategy.classList.remove("strategy_hidden");
      }
    });
  });
};
