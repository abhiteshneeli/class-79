name_of_the_stdunt = []

function submit() {

    var name1 = document.getElementById("name_of_the_student_1").innerHTML.value;
    var name2 = document.getElementById("name_of_the_student_2").innerHTML.value;
    var name3 = document.getElementById("name_of_the_student_3").innerHTML.value;
    var name4 = document.getElementById("name_of_the_student_4").innerHTML.value;


    name_of_the_stdunt.push(name1);
    name_of_the_stdunt.push(name2);
    name_of_the_stdunt.push(name3);
    name_of_the_stdunt.push(name4);

   

    document.getElementById("display_the_name").innerHTML = name_of_the_stdunt;
    document.getElementById("submit").style.display = "none";
    document.getElementById("short").style.display = "inline-none";

}