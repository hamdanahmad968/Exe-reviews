// local reviews data
const reviews = [
    {
      id: 1,
      name: "Hamdan Ahmad",
      job: "web developer",
      img:
        "/exe img/hamdan.jpeg.jpeg",
      text:
        " A Lonely , Sad , Depressed and Hit of Luck boy",
    },
    {
      id: 2,
      name: "Yasir Waqar",
      job: "L&T Construction",
      img:
        "/exe img/waqar.jpeg.jpeg",
      text:
        "A denky danker boy who gets a dream of cracking GATE/ESE Exam .",
    },
    {
      id: 3,
      name: "Anas Jamil",
      job: "C++ programmer",
      img:
        "/exe img/anas.jpeg.jpeg",
      text:
        "A competitive programmer who is a 5 star coder at Hackerrank and also a winner of science olympiad in class 8th",
    },
    {
      id: 4,
      name: "Mayank Anmol",
      job: "Java programmer",
      img:
        "/exe img/mayank.jpeg.jpeg",
      text:
        "A java developer , SAE chairperson and a pet lover  with lots of female grill friends ",
    },
    {
        id: 5,
        name: "yasir Nisar",
        job: "solidworks designer",
        img:
          "/exe img/nisar.jpeg.jpeg",
        text:
          "A mechanical engineer , reeler ,  who has also a interest in Mechanical design ",
      },
      {
        id: 6,
        name: "Gaurav yadav",
        job: "Data Scientist",
        img:
          "/exe img/gaurav.jpeg.jpeg",
        text:
          "A well known ML engineer who also loves doing backbitching of his friends",
      },
      {
        id: 7,
        name: "Tanveer Hasan",
        job: "C++ Programmer",
        img:
          "/exe img/tanveer.jpeg.jpeg",
        text:
          "A c++ programmer and also a web developer who is doing programming just because their is no scope in core Mechanical field",
      },
      {
        id: 8,
        name: "Keshav Jha",
        job: "Machine design ",
        img:
          "/exe img/keshav.jpeg.jpeg",
        text:
          "A Mech boy , agnostic who has also a deep interest in History",
      },
      {
        id: 9,
        name: "Minhal Murtaza",
        job: "EC engineer",
        img:
          "/exe img/minhal.jpeg.jpeg",
        text:
          "ECE Boy whose maximum family members is either Teaching or Head in Jamia Miliia",
      },
      {
        id: 10,
        name: "Avesh Khan",
        job: "NPCIL",
        img:
          "/exe img/avesh.jpeg.jpeg",
        text:
          " A just do it boy , dudh bhaat ",
      },
    
  ];
  // select items
  const img = document.getElementById("person-img");
  const author = document.getElementById("author");
  const job = document.getElementById("job");
  const info = document.getElementById("info");
  
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const randomBtn = document.querySelector(".random-btn");
  
  // set starting item
  let currentItem = 0;
  
  // load initial item
  window.addEventListener("DOMContentLoaded", function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  });
  
  // show person based on item
//   creating a function which runs whenever we click on next or prev btn 
  function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }
  // show next person
  nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });
  // show prev person
  prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  });
  // show random person
  randomBtn.addEventListener("click", function () {
    console.log("random");
  
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
  });