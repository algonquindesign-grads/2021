function toggle_visibility(id) {
   var e = document.getElementById(id);
   if(e.style.display == 'block')
      e.style.display = 'none';
   else
      e.style.display = 'block';
  }
  function toggle_invisibility(id) {
     var e = document.getElementById(id);
     if(e.style.display == 'block')
        e.style.display = 'none';
     else
        e.style.display = 'none';
    }

    function toggle_selected(button) {
      if (button.style.color == 'grey') {
        button.style.color = 'green';
        button.style.backgroundColor = "rgba(132, 194, 126, .3)";
      }
      else { button.style.color = 'grey';
      button.style.backgroundColor = "rgba(255, 255, 255, .9)";

      }
    }

    function show_results() {
      // I am defining both sets of all available/potential button choices here
      var selections1 = document.getElementsByClassName('question-1');
      var selections2 = document.getElementsByClassName('question-2');
      var selections3 = document.getElementsByClassName('question-3');
      // here I am defining a list of all the potential results, unfiltered
      var designers = document.getElementsByClassName('designer');
      var resultcount = 0;
      // here I start my for big for loop, it walks through each designer and tests that they met all available selections
      for (var designer_index=0; designer_index<designers.length; designer_index++) {
        // as I walk through each designer one at a time, this indicates/defines the current designer being checked
        var currentdesigner = designers[designer_index];
        // here assume all designers are hidden by default
        currentdesigner.style.display = 'none';
        // this loop checks to see if you meet 1 or more of the first criterias
        for (var selection1_index=0; selection1_index<selections1.length; selection1_index++) {
          // again I'm walking through each button one at a time, this indicates/defines my current position. "where are you along the path?"
          var currentbutton1 = selections1[selection1_index];
          // compare the current designer against the first set of criteria that have been selected in red
          // comparing class name and button 'value' (defined at the button level to match a class name THIS IS IMPORTANT)
          if (currentbutton1.style.color == 'green' && $(currentdesigner).hasClass(currentbutton1.value)) {
            // First ones made the grade, success! Will they also pass against this one? Let's find out.
            // Now we filter even further, testing the second criteria against the new available options selected above.
            // I am using this for loop to walk through my array one at a time, my counter is selection2_index, initialized at 0, it's value increases by 1 until it's bigger than the size of my array, running my function over and over
            for (var selection2_index=0; selection2_index<selections2.length; selection2_index++) {
              // this variable that I'm defining tells me what button I'm looking at right now in the loop and tests it against my conditions below
              var currentbutton2 = selections2[selection2_index];
              if (currentbutton2.style.color == 'green' && $(currentdesigner).hasClass(currentbutton2.value)) {
                // If I had a third criteria to check, I would nest a for loop here!! REMEMBER THIS
                for (var selection3_index=0; selection3_index<selections3.length; selection3_index++) {
                  var currentbutton3 = selections3[selection3_index];
                  if (currentbutton3.style.color == 'green' && $(currentdesigner).hasClass(currentbutton3.value)) {
                    // Finally I show you the list that passed both the criteria checked!
                      currentdesigner.style.display = 'block';
                      resultcount=resultcount+1;
                      console.log(resultcount);
                      // this break jumps you out the current for loop (Sufficient for Code 101)
                      break;
                  }
                }
              }
            }
          }
        }
      }
      var x = document.getElementById('noresults');
      if(resultcount == 0)
        x.style.display = 'block';
        else
          x.style.display = 'none';
    }
