// local reviews data
const reviews = [
  {
    id: 1,
    name: 'anna johnson',
    job: 'web designer',
    img:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
    text:
      'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 2,
    name: 'susan smith',
    job: 'web developer',
    img:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    text:
      'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    text:
      'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];
var index = 0;

let nextBtn = document.querySelector('.next-btn');
nextBtn.addEventListener('click', function () {
  // console.log(e.currentTarget);

  index++;
  if (index >= reviews.length) {
    index = 0;
  }
  document.querySelector('#person-img').src = reviews[index].img;
  document.querySelector('#author').textContent = reviews[index].name;
  document.querySelector('#job').textContent = reviews[index].job;
  document.querySelector('#info').textContent = reviews[index].text;
});

let prevBtn = document.querySelector('.prev-btn');
prevBtn.addEventListener('click', function () {
  index--;
  if (index < 0) {
    index = reviews.length - 1;
  }
  document.querySelector('#person-img').src = reviews[index].img;
  document.querySelector('#author').textContent = reviews[index].name;
  document.querySelector('#job').textContent = reviews[index].job;
  document.querySelector('#info').textContent = reviews[index].text;
});

let randBtn = document.querySelector('.random-btn');

randBtn.addEventListener('click', function () {
  index = randNum();
  // console.log(index);
  document.querySelector('#person-img').src = reviews[index].img;
  document.querySelector('#author').textContent = reviews[index].name;
  document.querySelector('#job').textContent = reviews[index].job;
  document.querySelector('#info').textContent = reviews[index].text;
});

function randNum() {
  return Math.floor(Math.random() * reviews.length);
}
