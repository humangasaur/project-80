all_names=[];
function submit(){
    all_names.push(document.getElementById("name_input").value);
    console.log(all_names);
    document.getElementById("name").innerHTML=all_names;
    length=all_names.length;
    unsorted_list=all_names.join("<br>"); 
    console.log(unsorted_list);
}

function show(){
    document.getElementById("unsorted").innerHTML=unsorted_list;
}
    sl=unsorted_list.sort();
    console.log(sorted_list);
function sorting(){
    document.getElementById("sorted").innerHTML=unsorted_list.sort();
}

function search(){
    s=document.getElementById("search").value;
    found=0;
     j;
     for(j=0; j<length; j++){
         if(s==all_names[j]){
             found=found+1;
         }
     }
     document.getElementsById("search_name").innerHTML="names found"+found+"time/s.";
     console.log("found names" +found+ "time/s");
}