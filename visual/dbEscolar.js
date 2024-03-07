
const materias = [
    {subject: "Matematicas"},
    x10

]
db.subjects.insertMany(materias)

const teachers =[
    {teacher: "Dra. Garcia"},
    x5
]
db.teachers.insertMany(teachers)

function getRandom(){
    const random = Math.floor(Math.random()*10);
    return random >= 10 ? 9 : random
}
for(let i = 0; i<60; i++){
    const student ={
        name:names[getRandom()],
        first_last_name:lastNames[getRandom()],
        second_last_name:lastNames[getRandom()],
        age:ages[getRandom()],
        addresses:addresses [getRandom()]
    }
}
db.students.insertOne(student)

for(let i =0; i <= 5; i++){
    const name_group = i +1;
    const students = [];
    db.students.find().skip(i*10).limit(10).forEach(doc=>{
        students.push(doc)
        /**
         * skip(saltar registros)
         * limit(trae un limite de registros)
         * forEach(por cada documento vas a hacer algo)
         */
    })

    const numbers_to_delete = [];
    while (numbers_to_delete.lenght< 4){
        const number_random = getRandom()
        if(!numbers_to_delete.includes(number_random)){
            numbers_to_delete.push(number_random)
            /* includes: hace referencia a que si "algo" en el arreglo */
        }
    }
    let subjects  = [];
    db.subjects.find().limit(10).forEach(doc=>{
        subjects.push(doc)
    })

    subjects = subjects.filter((_, index)=> !numbers_to_delete.includes(index))
    let teacher = {}
    db.teachers.find().skip(i).forEach(doc=>{
        teacher = doc
        /* filter(doc,number): revuelve otro arreglo*/
    })
    const studentsObjectsId = students.map(std => std._id);
    const subjectsObjectsId = students.map(sbj => sbj._id);
    /* map = analiza cada objeto dentro del arreglo sin afectarlo*/ 

    const grup = {
        name: name_group,
        students: studentsObjectsId,
        subjects: subjectsObjectsId,
        teacher_id: teacher._id
         /* .= para acceder a las propiedades de un objeto . + nombre de la propiedad*/ 
    };
    db.groups.insrtOne(group)
}
/*db.subjects.countDocuments()
load (c: .dbEscolar.js)*/
