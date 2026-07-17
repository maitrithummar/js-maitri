let students =[]

function calculateGrade(percentage){
    if(percentage >= 90) return "A";
    if(percentage >= 75) return "B";
    if(percentage >= 40) return "C";
    return "F";
}

function addStudent(){
 const name =document.getElementById('name').value.trim();
 const m1 =document.getElementById('m1').value;
 const m2 =document.getElementById('m2').value;
 const m3 =document.getElementById('m3').value;
 const errorMsg =document.getElementById('errorMsg');

 
errorMsg.innerHTML=""

if (name === "") {
     errorMsg.innerHTML="pelase enter your name "
    return;
    }
if (m1 === ""|| m2 === "" || m3 === ""||isNaN(m1) || isNaN(m2) || isNaN(m3)) {
    errorMsg.innerHTML="Please enter valid marks for all 3 subjects."
    return;
    }

    const marks =[Number(m1),Number(m2),Number(m3)];

if (marks.some(m => m <0 || m > 100)) {
    errorMsg.innerHTML="Marks must be between 0 and 100."
    return;
}

const total =marks.reduce((sum,m)=> sum + m ,0);
const percentage = (total / marks.length).toFixed(2);
const grade = calculateGrade(percentage);
const result = grade === "F" ? "fail":"pass";

students.push({name,marks,total,percentage,grade,result});


document.getElementById('name').value =" ";
document.getElementById('m1').value =" ";
document.getElementById('m2').value =" ";
document.getElementById('m3').value =" ";

renderTable();

}

function deletestudent(index){
    students.splice(index ,1);
    renderTable();
}

function renderTable(){
    const body =document.getElementById('resultBody')

    if (students === 0) {
        body.innerHTML='<tr><td colSpan="9" class="empty">No students added yet</td></tr>'
        
    }

    body.innerHTML =students.map((s,i)=>`
    <tr>
        <td>${s.name}</td>
        <td>${s.marks[0]}</td>
        <td>${s.marks[1]}</td>
        <td>${s.marks[2]}</td>
        <td>${s.total}</td>
        <td>${s.percentage}</td>
        <td class="grade-${s.gread}">${s.grade}</td>
        <td>${s.result}</td>
        <td><button class="button-btn" onClick="deletestudent(${i})">delete</button></td>
    </tr>
`).join('');
}



