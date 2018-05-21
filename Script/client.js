console.log('js');
$ ( document).ready(readyNow);

let employees = [];
class Employee{
constructor (first, last, id, title, salary) {
    this.firstName = first;
    this.lastName = last;
    this.id = id;
    this.title = title;
    this.salary = salary;
}
}
function readyNow(){
$ ( '#submitEmp' ).on( 'click' , addEmp );
function addEmp(){
    let newEmp = new Employee( $( '#firstName' ).val(),$( '#lastName' ).val(),$( '#empId' ).val(),$( '#title' ).val(),$( '#annualSalary' ).val());
    employees.push( newEmp );
    displayEmp();
}
}
function displayEmp(){
    let el = $('#empOut');
    el.empty();
    for(emps of employees){
        let outputString = '<li>';
            outputString += emps.first;
            outputString += emps.last;
            outputString += emps.id;
            outputString += emps.title;
            outputString += emps.salary;
            outputString += '</li>';
    } 
}