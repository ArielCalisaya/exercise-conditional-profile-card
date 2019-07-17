import "../style/index.scss";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 */
function render(variables = {}) {
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";
  //**Name*/
  let name = `<h1>${variables.name}</h1>`;
  if (variables.name == null) name = "<h1></h1>";
  //**Last name */
  let lastname = `<h1>${variables.lastname}</h1>`;
  if (variables.lastname == null) lastname = "<h1></h1>";
  /**position S.M. */
  let SMPosition = "left";
  if (variables.socialMediaPosition == null) SMPosition = "right";
  else if (variables.socialMediaPosition == "right") SMPosition = "right";

  /**twitter */
  let twitter = `<a href="https://twitter.com/${variables.twitter}">`;
  if (variables.twitter == null) variables = "<a>";

  // reset the website body with the new html output

  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          ${name}${lastname}
          <h2>Web Developer</h2>
          <h3>Miami, USA</h3>
            <ul class=${SMPosition}>
            <li>${twitter}<li class="fa fa-twitter"></i></a></li>
            <li><a href="https://github.com/alesanchezr"><li class="fa fa-github"></i></a></li>
            <li><a href="https://linkedin.com/alesanchezr"><li class="fa fa-linkedin"></i></a></li>
            <li><a href="https://instagram.com/alesanchezr"><li class="fa fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should
    includeCover: true,
    // this is the url of the image that will used as background for the profile cover
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    // this is the url for the profile avatar
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    // social media bar position (left or right)
    socialMediaPosition: "left",
    // social media usernames
    twitter: null,
    github: "alesanchezr",
    linkedin: null,
    instagram: null,
    name: null,
    lastname: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables);
  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      const attribute = e.target.getAttribute("for");
      let values = {};
      values[attribute] =
        this.value == ""
          ? null
          : this.value == "true"
            ? true
            : this.value == "false"
              ? false
              : this.value;
      render(Object.assign(window.variables, values));
    });
  });
};
