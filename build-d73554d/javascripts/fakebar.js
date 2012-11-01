(function() {
  var app, bviewHtml, dviewHtml, summHtml, treeHtml;

  app = angular.module("myApp", ["filters"]);

  /*
  Truncate Filter
  @Param text
  @Param length, default is 10
  @Param end, default is "..."
  @return string
  */


  angular.module("filters", []).filter("truncate", function() {
    return function(text, length, end) {
      if (isNaN(length)) {
        length = text.length;
      }
      if (end === undefined) {
        end = "...";
      }
      if (text.length <= length || text.length - end.length <= length) {
        return text;
      } else {
        return String(text).substring(0, length - end.length) + end;
      }
    };
  });

  /*
  Usage
  
  var myText = "This is an example.";
  
  {{myText|Truncate}}
  {{myText|Truncate:5}}
  {{myText|Truncate:25:" ->"}}
  Output
  "This is..."
  "Th..."
  "This is an e ->"
  */


  app.directive('bview', function($compile) {
    return {
      restrict: 'E',
      scope: {
        node: "=",
        parent: "="
      },
      link: function(scope, elem, attrs) {
        return elem.append(($compile(bviewHtml))(scope));
      }
    };
  });

  bviewHtml = "<div class=\"annotator-outer annotator-viewer\">\n  <ul class=\"annotator-widget annotator-listing\">\n      <li summary=\"exp\" class=\"annotation summary paper\" ng-repeat=\"child in node.children\" node=\"child\" parent=\"node\"></div>\n  </ul>\n</div>";

  app.directive('summary', function($compile) {
    return {
      restrict: 'A',
      scope: {
        node: "=",
        parent: "="
      },
      link: function(scope, elem, attrs) {
        return elem.append(($compile(summHtml))(scope));
      }
    };
  });

  summHtml = "<div class=\"topbar\">\n  <div class=\"user\">{{node.username}}</div>\n  <div class=\"time\">{{node.time}}</div>\n</div>\n\n<div class=\"content\">{{node.text}}</div>\n";

  app.directive('dview', function($compile) {
    return {
      restrict: 'E',
      scope: {
        node: "=",
        parent: "="
      },
      link: function(scope, elem, attrs) {
        return elem.append(($compile(dviewHtml))(scope));
      }
    };
  });

  dviewHtml = "<div class=\"annotator-outer annotator-viewer\">\n  <ul class=\"annotator-widget annotator-listing\">\n    <li class='paper excerpt'>\n      <blockquote>{{node.excerpt}}</blockquote>\n    </li>\n\n    <li class=\"annotation paper detail\">\n\n      <div class=\"topbar\">\n        <div class=\"user\">{{node.username}}</div>\n        <div class=\"time\">{{node.time}}</div>\n      </div>\n      <div class='content'>{{node.text}}</div>\n\n      <div class=\"thread\">\n        <ul class=\"annotator-listing\">\n          <li tree=\"exp\" class=\"annotation detail\" ng-repeat=\"child in node.children\" node=\"child\" parent=\"node\"></li>\n        </ul>\n      </div>\n\n    </li>\n  </ul>\n</div>";

  app.directive('tree', function($compile) {
    return {
      replace: true,
      scope: {
        node: "=",
        parent: "="
      },
      link: function(scope, elem, attrs) {
        return elem.append(($compile(treeHtml))(scope));
      }
    };
  });

  treeHtml = "<a class=\"threadexp\" href=\"#collapse\"></a>\n<div class=\"topbar\">\n  <div class=\"user\">{{node.username}}</div>\n  <div class=\"time\">{{node.time}}</div>\n</div>\n<div class=\"content\">{{node.text}}</div>\n<div class=\"thread\">\n  <ul class=\"annotator-listing\"> \n    <li tree=\"exp\" class=\"annotation detail\" ng-repeat=\"child in node.children\" node=\"child\" parent=\"node\"></li>\n\n  </ul>\n</div>\n";

  this.BucketList = function($scope) {
    return $scope.root = {
      children: [
        {
          username: "xXbRiAnSgIrLXx",
          time: "about 3 days ago",
          excerpt: "Demonstrators seized bottles of liquor and wine from the offices along with cartons of cigarettes, items which Chinese officials frequently receive as bribes. A photograph posted on Sina Weibo, the main Chinese microblogging service, showed some of the items displayed outside the government building.",
          text: "Chinese officials sound really easy to bribe."
        }, {
          username: "FutureFry",
          time: "about 21 hours ago",
          text: "Seems to me that the article singles out Microsoft because it puts this motion in the context of Microsoft making secret patent deals with Android manufacturers:"
        }, {
          username: "brian_buggers",
          time: "1 day ago",
          text: "In other words, Apple is currently about where Microsoft was when they started paying dividends a little more than a decade ago...i.e. The point where they went from a growth company to a the sort of 'blue chip' held by index funds. The past decade has been spent securing their place in enterprise - their core market and one in which Apple, Google, and Facebook offer little competition. With loads of cash, a conucopia of brilliant personnel and Gates and Ballmer as the two largest shareholders, the whims of Wall Street bloggers don't have much effect."
        }, {
          username: "Mb'Skepteko",
          time: "about 6 hours ago",
          text: "The key to a long-lasting marriage"
        }, {
          username: "P1MP_$TEVE",
          time: "about 1 hour ago",
          text: "In related news, German electricity is 30% more expensive than French, and 300% more expensive than American."
        }
      ]
    };
  };

  this.DetailList = function($scope) {
    return $scope.root = {
      username: "xXbRiAnSgIrLXx",
      time: "about 3 days ago",
      excerpt: "Demonstrators seized bottles of liquor and wine from the offices along with cartons of cigarettes, items which Chinese officials frequently receive as bribes. A photograph posted on Sina Weibo, the main Chinese microblogging service, showed some of the items displayed outside the government building.",
      text: "Chinese officials sound really easy to bribe.",
      children: [
        {
          username: "notouch",
          time: "about 1 day ago",
          text: "Just talked to someone who came here from China. Apparently foreign liquor and cigarettes cost ten-fold of its original price, if not more. So these things are easily $100 each. Not to mention these were only items found in the office, not their private mansion. Also learned that it's very common to treat someone to dinner or a massage parlor as form of bribery. A good fancy dinner cost a few hundred dollars, even thousands of dollars. The massage parlor usually offer some special kind of service in the back-end.",
          children: [
            {
              username: "elmer_the_arse",
              time: "about 1 day ago",
              text: "what if the corrupt official does't like 'the special kind of service in the back end'?",
              children: [
                {
                  username: 'notouch',
                  time: "about 1 day ago",
                  text: "I'm sure they provide special service in the front end too. ;)"
                }
              ]
            }, {
              username: 'G0VERNMENT',
              time: 'about 22 hours ago',
              text: 'Ya, its called using back doors and is considered normal and is so common place that it borders on acceptable in Chinese culture.'
            }
          ]
        }, {
          username: 'ponto1',
          time: 'about 1 day ago',
          text: 'China has had some of the most insanely fast economic growth of world history in the past couple of decades. Very few will protest until this kind of growth stops.',
          children: [
            {
              username: 'dingdongpuddi',
              time: 'about 1 day ago',
              text: "Actually there's been many reports on how little, if any, benefits of this decades-long growth for the poor and rural. Here's one such report: http://www.nytimes.com/2008/01/13/world/asia/13china.html?pagewanted=all",
              children: [
                {
                  username: 'anarcho-fox',
                  time: 'about 1 day ago',
                  text: 'its becuase the chinese rural poor are the government sanctioned rural poor...they arent allowed to join into the urban growth because they are designated rural workers http://en.wikipedia.org/wiki/Hukou_system china has a form of caste system thats not talked about much...the government fears that ending it would catapult all the rural poor into the cities and that it would fuck everything up',
                  children: [
                    {
                      username: 'TBradley',
                      time: 'about 1 day ago',
                      text: 'Yep, they have an internal passport like system.'
                    }, {
                      username: 'Baraka_Flocka_Flame',
                      time: 'about 23 hours ago',
                      text: "I remember seeing a video on reddit a year or so ago where an economist was displaying the vast wealth disparities in china based on the province. Without really getting into details, it showed how many of the most industrialized urban areas had wealth equivalent to the wealthiest western nations while the rural areas had wealth equivalent to some of the poorest areas in Africa. I can't seem to find it though, anyone know what I'm talking about?",
                      children: [
                        {
                          username: 'AmIKawaiiUguuu',
                          time: 'about 20 hours ago',
                          text: 'http://www.economist.com/content/chinese_equivalents',
                          children: [
                            {
                              username: 'green_flash',
                              time: 'about 19 hours ago',
                              text: "If you look at GDP per capita, it's actually not that bad. Even the poorest province (Guizhou) is still on the same level as India.And with the exemption of city states like HK, Macau, Shanghai, Beijing and Tianjin no province is richer than 4 times the poorest.That's better than Brazil and India inequality-wise, but not as good as in the US of course: Mississippi has about half the GDP per capita of Connecticut, one of the richest."
                            }
                          ]
                        }, {
                          username: "jaylink",
                          time: "about 20 hours ago",
                          text: "Oh no, that could never happen here. Eastern Tennessee -vs- NYC, cough, cough. Compton -vs- Beverly Hills -- that's only a few miles."
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    };
  };

}).call(this);
