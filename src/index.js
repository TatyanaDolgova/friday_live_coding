window.onload = function() {

  //Tags
  addTagsClickHandler();
};

const addTagsClickHandler = () => {
  document.querySelector('.strategies__tags').addEventListener('click', (e) => {
    if(e.target.classList.contains('tag')) {
      let clickedTag = e.target;
      removeSelectedTads();
      selectClickedTag(clickedTag);
    }
  });
};

const removeSelectedTads= () => {
  let tags = document.querySelectorAll('.strategies__tags .tag');
  tags.forEach(tag => {
    tag.classList.remove('tag_selected');
    tag.classList.add('tag_bordered');
  });
};

const selectClickedTag = (clickedTag) => {
  clickedTag.classList.add('tag_selected');
  clickedTag.classList.remove('tag_bordered');
}; 