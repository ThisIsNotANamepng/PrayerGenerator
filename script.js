function quote(){
  const quotes = [
    "If we are peaceful, if we are happy, we can smile and blossom like a flower. And everyone in our family, our entire society, will benefit from our peace.",
    "With every breath I take today, I vow to be awake; and every step I take, I vow to take with a grateful heart. So I may see with eyes of love Into the hearts of all I meet, To ease their burden when I can And touch them with a smile of peace.",
    "May I be a guard for those who need protection, A guide for those on the path, A boat, a raft, a bridge for those who wish to cross the flood. May I be a lamp in the darkness, A resting place for the weary, A healing medicine for all who are sick, A vase of plenty, a tree of miracles. And for the boundless multitudes of living beings, May I bring sustenance and awakening, Enduring like the earth and sky, Until all beings are freed from sorrow, And all are awakened.",
    "Here is the great Earth, Filled with the smell of incense, Covered with a blanket of flowers, The Great Mountain, the Four Continents, Wearing a jewel of the Sun and Moon. In my mind I make them the Paradise of a Buddha, And offer it all to You. By this deed, may every living being Experience the Pure World.",
    "Sky is free. Ocean is blissful. Trees are divine. Rocks are enlightened. So are we. Who is still searching…. For what?",
    "May the children of the world grow constantly in spiritual awareness and peace consciousness. May more and more young people each day find the wisdom of simply being and awakening. May we all find the alert stillness of our Buddha natures.",
    "May I become at all times, both now and forever, A protector for those without protection, A guide for those who have lost their way, A ship for those with oceans to cross, A bridge for those with rivers to cross, A sanctuary for those in danger, A lamp for those without light, A place of refuge for those who lack shelter, And a servant to all in need.",
    "We reverently pray for eternal harmony in the universe. May the weather be seasonable, May the harvest be fruitful, May countries exist in harmony, And may all people enjoy happiness. ",
    "My mind can go in a thousand directions. Now I walk in peace. Each step creates a warm breeze. With each step, a lotus blooms.",
    "Enlightenment is like the moon reflected on the water. The moon does not get wet, nor is the water broken. Although its light is wide and great, The moon is reflected even in a puddle an inch wide. The whole moon and the entire sky, are reflected in one dewdrop on the grass. ",
    "No one is stupid, just uneducated"
  ];
  const authors = [
    "- Thich Nhat Hanh", 
    "- Anonymous", 
    " - Shantideva", 
    " - Tibetan Prayer",
    " - Anam Thubten Rinpoche",
    "- Anonymous", 
    "- Tenzin Gyatso", 
    "- Anonymous", 
    "- Andrew Weiss", 
    " - Dogen",
    " "
  ];

  num = Math.floor(Math.random() * 11);
  console.log(num)
  document.getElementById("quoteP").innerHTML = quotes[num];
  document.getElementById("author").innerHTML = authors[num];



}
