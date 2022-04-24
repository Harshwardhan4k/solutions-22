// import required functions
import {
  getAuth,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js";

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("user");
    loginBtn.classList.add("--logged-in");
    loginBtn.classList.remove("show-modal");
	document.getElementById("modal").classList.add("hidden");
	document.getElementById("overlay").classList.add("hidden");
    loginBtn.href = "./profile/index.html";
  } else {
    console.log("not user");
    // loginBtn.addEventListener("click", function (e) {
    //   document.getElementById("modal").classList.toggle("hidden");
    //   document.getElementById("overlay").classList.toggle("hidden");
    //   document.querySelector("body").classList.toggle("--lock-body");
    //   console.log("clicked ");
    // });
  }
});
