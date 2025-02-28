
// document.addEventListener('DOMContentLoaded', function () {
//   const aboutPics = document.querySelectorAll('.about-pic');

//   aboutPics.forEach(pic => {
//     pic.addEventListener('mouseover', function () {
    
//       this.style.backgroundColor = 'darkgray';
      
      
//       const detailsContainer = this.nextElementSibling;
      
    
//       if (detailsContainer) {
//         const h3 = detailsContainer.querySelector('h3');
//         const p = detailsContainer.querySelector('p');
        
//         if (h3) h3.style.color = 'red';
//         if (p) p.style.color = 'red';
//       }
//     });

//     pic.addEventListener('mouseout', function () {
      
//       this.style.backgroundColor = '';
      
    
//       const detailsContainer = this.nextElementSibling;
//       if (detailsContainer) {
//         const h3 = detailsContainer.querySelector('h3');
//         const p = detailsContainer.querySelector('p');
        
//         if (h3) h3.style.color = '';
//         if (p) p.style.color = '';
//       }
//     });
//   });
// });
let picContainer=document.querySelector(".section__pic-container");
let page=document.querySelector("body");
picContainer.addEventListener("mouseenter",function(e){
      page.style.backgroundColor="red";
});
picContainer.addEventListener("mouseout",function(e){
  page.style.backgroundColor="white";
});
