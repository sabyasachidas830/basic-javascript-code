const student = {
    name: "Sabyasachi Das",
    age: 20,
    course: "Computer Science",
    };
    student.course="IT"
    student.name="Sabya"
    student.age="21"

    console.log(student)

    const studenttwo={...student, new:"Rahul", newtwo:"Raj"}
    console.log(studenttwo)

    const {name, age, newtwo} = studenttwo;
    console.log(name, age, newtwo);