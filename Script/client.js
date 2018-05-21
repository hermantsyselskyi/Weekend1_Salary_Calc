console.log('js');
$ ( document).ready(readyNow);
let totalMonthly = 0;
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
    let pay = $('#outputMonthly');
    el.empty();
    totalMonthly = 0;
    for(emps of employees){
        let outputString = '<div class="col-4">';
            outputString += '<div class="card-header">' + emps.first + '</div>';
            outputString += '<div class="card-body">' + emps.last + '</div>';
            outputString += '<div class="card-body">' + emps.id + '</div>';
            outputString += '<div class="card-body">' + emps.title + '</div>';
            outputString += '<div type="number" class="card-footer">' + emps.salary + '</div>';
            outputString += '<button class="btn btn-danger">Delete</button>';
            outputString += '</div>';
            totalMonthly = totalMonthly + parseInt(emps.salary);
            el.append ( outputString );
            pay.empty();
            pay.append( totalMonthly );
    } 
}