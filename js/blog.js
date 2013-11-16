function show(i)
       {
       
       date = new Array();
       date[0] ="Octorber 27 2013";
       date[1] ="October 31 2013";
       date[2] ="April 12 2013";

       entry = new Array();
       entry[0] ="entry 1";
       entry[1] ="entry 2";
       entry[2] ="entry 3";

       post = new Array();
       post[0] ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac leo massa. Pellentesque vestibulum sed nisl a tristique. Donec sodales.";
       post[1] ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac leo massa. Pellentesque vestibulum sed nisl a tristique. Donec sodales.";
       post[2] ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac leo massa. Pellentesque vestibulum sed nisl a tristique. Donec sodales.";

       document.write("<p class=\"date\">"+date[i]+"</p><p class=\"entry\">"+entry[i]+"</p><p class=\"post\">"+post[i]+"</p>");
       }