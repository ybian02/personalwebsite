// smooth scrolling
function scrollNav() {
  $('.scroll a').click(function(){  

    //Animate
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top}, 400);
    return false;
  });
  $('.scrollTop a').scrollTop();
}
scrollNav();

// home page
var words = ['interaction designer','digital media enthusiast','natural storyteller','rational optimist','social justice nerd'],
    currentStep = 0,
    textEl = document.querySelector('.change-text'),
    oldWord = '';


setTimeout(changeWord, 1200);

function changeWord() {
  oldWord = textEl.innerHTML;
  
  // check if there is a word atm or not
  if (oldWord.length < 1) {

    if (currentStep !== words.length -1) {
          currentStep ++;
    }else {
      currentStep = 0;
    }
    addNextWord();
  } else {
    setTimeout(deleteWord, 1000);
  }
  
};

function deleteWord() {
  var WordLength = oldWord.length,
      currentWord = textEl.innerHTML,
      currentLength = currentWord.length;
  

  // The word is deleted so, start adding in the new one
  if (currentLength < 1) {
    changeWord();
    return;
  }
  
  // Remove a charachter
  textEl.innerHTML = currentWord.substring(0, currentLength - 1);
  
  setTimeout(deleteWord, 80);
}

function addNextWord() {
  var currentWord = textEl.innerHTML,
      currentLength = currentWord.length,
      nextWord = words[currentStep],
      nextWordLength = nextWord.length;
    
  
  if (currentLength === nextWordLength) {
    changeWord();
    return;
  }
  
  // add a charachter
  textEl.innerHTML = nextWord.substring(0, currentLength + 1);
    
  setTimeout(addNextWord, 80);
  
};

// gif transition

$(document).on(
  {
    mouseenter: function() {
      var gifImage = $(this).find("img"),
        gifImageSrc = gifImage.data("gif-image");
      gifImage.attr("src", gifImageSrc);
    },
    mouseleave: function() {
      var gifImage = $(this).find("img"),
        coverSrc = gifImage.data("image");
      gifImage.attr("src", coverSrc);
    }
  },
  "[data-gif-trigger]"
);

// lightbox

// let galleryItem = document.getElementsByClassName("gallery-item");
// let lightBoxContainer = document.createElement("div");
// let lightBoxContent = document.createElement("div");
// let lightBoxImg = document.createElement("img");
// let lightBoxPrev = document.createElement("div");
// let lightBoxNext = document.createElement("div");

// lightBoxContainer.classList.add("lightbox");
// lightBoxContent.classList.add("lightbox-content");
// lightBoxPrev.classList.add("fa", "fa-angle-left", "lightbox-prev");
// lightBoxNext.classList.add("fa", "fa-angle-right", "lightbox-next");

// lightBoxContainer.appendChild(lightBoxContent);
// lightBoxContent.appendChild(lightBoxImg);
// lightBoxContent.appendChild(lightBoxPrev);
// lightBoxContent.appendChild(lightBoxNext);

// document.body.appendChild(lightBoxContainer);

// let index = 1;

// function showLightBox(n) {
//     if (n > galleryItem.length) {
//         index = 1;
//     } else if (n < 1) {
//         index = galleryItem.length;
//     }
//     let imageLocation = galleryItem[index-1].children[0].getAttribute("src");
//     lightBoxImg.setAttribute("src", imageLocation);
// }

// function currentImage() {
//     lightBoxContainer.style.display = "block";

//     let imageIndex = parseInt(this.getAttribute("data-index"));
//     showLightBox(index = imageIndex);
// }
// for (let i = 0; i < galleryItem.length; i++) {
//     galleryItem[i].addEventListener("click", currentImage);
// }

// function slideImage(n) {
//     showLightBox(index += n);
// }
// function prevImage() {
//     slideImage(-1);
// }
// function nextImage() {
//     slideImage(1);
// }
// lightBoxPrev.addEventListener("click", prevImage);
// lightBoxNext.addEventListener("click", nextImage);

// function closeLightBox() {
//     if (this === event.target) {
//         lightBoxContainer.style.display = "none";
//     }
// }
// lightBoxContainer.addEventListener("click", closeLightBox);
