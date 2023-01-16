window.onload = function() {

  //Tags
  addTagsClickHandler();
};

const addTagsClickHandler = () => {
  document.querySelector('.strategies__tags').addEventListener('click', (e) => {
    if(e.target.classList.contains('tag')) {
      let clikedTag = e.target;
      removeSelectedTads();
    }
  });
};

const removeSelectedTads= () => {
  let tags = document.querySelectorAll('.strategies__tags .tag');
  console.log(tags);
};