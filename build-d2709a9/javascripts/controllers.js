'use strict';

/* Controllers */

function BucketList($scope) {
  $scope.annotations = [
    {
      username: "xXbRiAnSgIrLXx",
      time: "about 3 days ago",
      excerpt: "Demonstrators seized bottles of liquor and wine from the offices along with cartons of cigarettes, items which Chinese officials frequently receive as bribes. A photograph posted on Sina Weibo, the main Chinese microblogging service, showed some of the items displayed outside the government building.",
      text: "Chinese officials sound really easy to bribe."
    },
    {
      username: "FutureFry",
      time: "about 21 hours ago",
      text: "Seems to me that the article singles out Microsoft because it puts this motion in the context of Microsoft making secret patent deals with Android manufacturers:"
    },
    {
      username: "brian_buggers",
      time: "1 day ago",
      text: "In other words, Apple is currently about where Microsoft was when they started paying dividends a little more than a decade ago...i.e. The point where they went from a growth company to a the sort of 'blue chip' held by index funds. The past decade has been spent securing their place in enterprise - their core market and one in which Apple, Google, and Facebook offer little competition. With loads of cash, a conucopia of brilliant personnel and Gates and Ballmer as the two largest shareholders, the whims of Wall Street bloggers don't have much effect."
    },
    {
      username: "Mb'Skepteko",
      time: "about 6 hours ago",
      text: "The key to a long-lasting marriage"
    },
    {
      username: "P1MP_$TEVE",
      time: "about 1 hour ago",
      text: "In related news, German electricity is 30% more expensive than French, and 300% more expensive than American."
    }
  ];
}

function HistoryList($scope) {
  $scope.annotations = [
    {
      username: "WillardM_Romney",
      time: "about 3 days ago",
      page: "China cancels waste project after protests turn violent | Reuters",
      link: "http://www.reuters.com/article/2012/07/28/us-china-environment-protest-idUSBRE86R02Y20120728",
      domain: "reuters.com",
      excerpt: "Demonstrators seized bottles of liquor and wine from the offices along with cartons of cigarettes, items which Chinese officials frequently receive as bribes. A photograph posted on Sina Weibo, the main Chinese microblogging service, showed some of the items displayed outside the government building.",
      text: "Chinese officials sound really easy to bribe."
    },
    {
      username: "WillardM_Romney",
      time: "about 21 hours ago",
      page: "Microsoft Files Motion in Apple v. Samsung to Hide Patent License Agreement Terms ~pj",
      link: "http://groklaw.net/article.php?story=20120727084323510",
      domain: "groklaw.net",
      excerpt: "I seriously want to see those license terms, and I'd go so far as to suggest that the public has a right to know what those terms are, particularly future victims of Microsoft's patent strategy, and I know you want to know this too, because we've all heard the rumors that Microsoft licenses on very, very low royalties, just to be able to say to the world that Android/Linux folks are paying Microsoft for its patents. I'd love to know if that is true. Plus, if Microsoft paid for Samsung's FRAND patents the fee Samsung is asking Apple for, on what basis would Microsoft argue in its litigation against Motorola, that FRAND patents should be paid for at a greatly reduced royalty?",    
      text: "Seems to me that the article singles out Microsoft because it puts this motion in the context of Microsoft making secret patent deals with Android manufacturers:"
    },
    {
      username: "WillardM_Romney",
      time: "1 day ago",
      page: "How Microsoft Lost Its Mojo: Steve Ballmer and Corporate America’s Most Spectacular Decline | Business | Vanity Fair",
      link: "http://m.vanityfair.com/business/2012/08/microsoft-lost-mojo-steve-ballmer",
      domain: "m.vanityfair.com",
      excerpt: "In December 2000, Microsoft had a market capitalization of $510 billion, making it the world’s most valuable company. As of June it is No. 3, with a market cap of $249 billion. In December 2000, Apple had a market cap of $4.8 billion and didn’t even make the list. As of this June it is No. 1 in the world, with a market cap of $541 billion.",
      text: "In other words, Apple is currently about where Microsoft was when they started paying dividends a little more than a decade ago...i.e. The point where they went from a growth company to a the sort of 'blue chip' held by index funds. The past decade has been spent securing their place in enterprise - their core market and one in which Apple, Google, and Facebook offer little competition. With loads of cash, a conucopia of brilliant personnel and Gates and Ballmer as the two largest shareholders, the whims of Wall Street bloggers don't have much effect."
    },
    {
      username: "WillardM_Romney",
      time: "about 6 hours ago",
      page: "Japanese equestrian defies Father Time as the oldest competitor at London Olympics - Yahoo! Sports",
      link: "http://sports.yahoo.com/news/olympics--japanese-equestrian-defies-father-time-as-oldest-competitor-at-london-olympics.html",
      domain: "sports.yahoo.com",
      excerpt: "I have not seen my wife, Motoko, for more than a year",
      text: "The key to a long-lasting marriage"
    },
    {
      username: "WillardM_Romney",
      time: "about 1 hour ago",
      page: "German renewables output hits record high in H1 | Reuters",
      link: "http://www.reuters.com/article/2012/07/26/germany-renewables-idUSL6E8IQIA720120726",
      domain: "reuters.com",
      excerpt: "Renewables now account for 25 percent of energy production, up from 21 percent last year, the country's energy industry association (BDEW) said in a statement that reinforced Germany's position as a leader in green technology.",
      text: "In related news, German electricity is 30% more expensive than French, and 300% more expensive than American."
    }
  ];
}

function DetailList($scope) {
  $scope.annotations = [
    {
      username: "xXbRiAnSgIrLXx",
      time: "about 3 days ago",
      stance: "neut",
      score: 86,
      excerpt: "Demonstrators seized bottles of liquor and wine from the offices along with cartons of cigarettes, items which Chinese officials frequently receive as bribes. A photograph posted on Sina Weibo, the main Chinese microblogging service, showed some of the items displayed outside the government building.",
      text: "Chinese officials sound really easy to bribe.",
      count: "15 replies",
      children: [
        {
          username: "notouch",
          time: "about 1 day ago",
          stance: "pos",
          score: 16,
          text: "Just talked to someone who came here from China. Apparently foreign liquor and cigarettes cost ten-fold of its original price, if not more. So these things are easily $100 each. Not to mention these were only items found in the office, not their private mansion. Also learned that it's very common to treat someone to dinner or a massage parlor as form of bribery. A good fancy dinner cost a few hundred dollars, even thousands of dollars. The massage parlor usually offer some special kind of service in the back-end.",
          count: "3 replies",
          children: [
            {
              username: "elmer_the_arse",
              time: "about 1 day ago",
              stance: "neut",
              score: 32,
              text: "what if the corrupt official does't like 'the special kind of service in the back end'?",
              count: "1 reply",
              children: [
                {
                  username: 'notouch',
                  time: "about 1 day ago",
                  stance: "pos",
                  score: 12,
                  text: "I'm sure they provide special service in the front end too. ;)"
                }
              ]
            },
            {
              username: 'G0VERNMENT',
              time: 'about 22 hours ago',
              stance: "neg",
              score: 20,
              text: 'Ya, its called using back doors and is considered normal and is so common place that it borders on acceptable in Chinese culture.'
            }
          ]
        },
        {
          username: 'ponto1',
          time: 'about 1 day ago',
          stance: "neut",
          score: 47,
          text: 'China has had some of the most insanely fast economic growth of world history in the past couple of decades. Very few will protest until this kind of growth stops.',
          count: "10 replies",
          children: [
            {
              username: 'dingdongpuddi',
              time: 'about 1 day ago',
              stance: "neg",
              score: 10,
              text: "Actually there's been many reports on how little, if any, benefits of this decades-long growth for the poor and rural. Here's one such report: http://www.nytimes.com/2008/01/13/world/asia/13china.html?pagewanted=all",
              count: "9 replies",
              children: [
                {
                  username: 'anarcho-fox',
                  time: 'about 1 day ago',
                  stance: "neg",
                  score: 36,
                  text: 'its becuase the chinese rural poor are the government sanctioned rural poor...they arent allowed to join into the urban growth because they are designated rural workers http://en.wikipedia.org/wiki/Hukou_system china has a form of caste system thats not talked about much...the government fears that ending it would catapult all the rural poor into the cities and that it would fuck everything up',
                  count: "7 replies",
                  children: [
                    {
                      username: 'TBradley',
                      time: 'about 1 day ago',
                      stance: "pos",
                      score: 18,
                      text: 'Yep, they have an internal passport like system.'
                    },
                    {
                      username: 'Baraka_Flocka_Flame',
                      time: 'about 23 hours ago',
                      stance: "pos",
                      score: 15,
                      text: "I remember seeing a video on reddit a year or so ago where an economist was displaying the vast wealth disparities in china based on the province. Without really getting into details, it showed how many of the most industrialized urban areas had wealth equivalent to the wealthiest western nations while the rural areas had wealth equivalent to some of the poorest areas in Africa. I can't seem to find it though, anyone know what I'm talking about?",
                      count: "5 replies",
                      children: [
                        {
                          username: 'AmIKawaiiUguuu',
                          time: 'about 20 hours ago',
                          stance: "neut",
                          score: 10,
                          text: 'http://www.economist.com/content/chinese_equivalents',
                          count: "3 replies",
                          children: [
                            {
                              username: 'green_flash',
                              time: 'about 19 hours ago',
                              stance: "neg",
                              score: 21,
                              text: "If you look at GDP per capita, it's actually not that bad. Even the poorest province (Guizhou) is still on the same level as India. And with the exemption of city states like HK, Macau, Shanghai, Beijing and Tianjin no province is richer than 4 times the poorest. That's better than Brazil and India inequality-wise, but not as good as in the US of course: Mississippi has about half the GDP per capita of Connecticut, one of the richest.",
                              count: "2 replies",
                              children: [
                                {
                                  username: 'polarenvy',
                                  time: 'about 19 hours ago',
                                  stance: "pos",
                                  score: 10,
                                  text: "China is not the police state most people in the West imagine it to be.",
                                  count: "1 reply",
                                  children: [
                                    {
                                      username: 'TheMediumPanda',
                                      time: 'about 19 hours ago',
                                      stance: "pos",
                                      score: 5,
                                      text: "Yes and no. I imagine if you go ask some random guy in the Bible Belt to mention some differences between, say, China and North Korea, I believe there's a very good chance they can't really do it. They're like a world apart in reality."
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          username: "jaylink",
                          time: "about 20 hours ago",
                          stance: "neg",
                          score: 7,
                          text: "Oh no, that could never happen here. Eastern Tennessee -vs- NYC, cough, cough. Compton -vs- Beverly Hills -- that's only a few miles."
                        }
                      ]
                    }
                  ]
                },
                {
                  username: "jaylink",
                  time: "about 20 hours ago",
                  stance: "neg",
                  score: 7,
                  text: "Oh no, that could never happen here. Eastern Tennessee -vs- NYC, cough, cough. Compton -vs- Beverly Hills -- that's only a few miles."
                }
              ]
            }
          ]
        }
      ]
    }
  ];
}
;
