window.addEventListener('DOMContentLoaded',(event) => {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input', function(){
        if(name.value.length==0){
            textError.textContent ="";
            return
        }
        try{
            (new EmployeePayrollData()).name  = name.value;
            textError.textContent = "";
        }catch(e){
            textError.textContent = e;
        }
});
    const year = document.querySelector('#year');
    const dateError = document.querySelector('.date-error');
    year.addEventListener('input', function() {
        try{
            (new EmployeePayrollData()).startDate = new Date(parseInt(getInputValueById('#year')), parseInt(getInputValueById('#month')), parseInt(getInputValueById('#day')));
            dateError.textContent = "";
        } catch (e) {
            dateError.textContent = e;
        }
    })

const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
salary.addEventListener('input', function(){
                         output.textContent = salary.value;
   });

});

const save = () =>{
    try{
        let employeePayrollData = createEmployeePayroll();
        createAndUpdateStorage(employeePayrollData);
    }catch(e){
        return;
    }
}

function createAndUpdateStorage(employeePayrollData){
    let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));

    if(employeePayrollList != undefined){
        employeePayrollList.push(employeePayrollData);
    }else{
        employeePayrollList = [employeePayrollData];
    }
    alert(employeePayrollList.toString());
    localStorage.setItem("EmployeePayrollList",JSON.stringify(employeePayrollList));
}

function getId(){
    let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));
    let length;
        if (employeePayrollList != undefined){
            length = employeePayrollList.length;
        } else {
            length = 0;
        }
    return length;
}

const createEmployeePayroll = () => {
    let employeePayrollData = new EmployeePayrollData();
    try{
        employeePayrollData.name = getInputValueById('#name');
    }catch(e){
        setTextValue('.text-error',e);
        throw e;
    }
    employeePayrollData.profilePic = getSelectedValues('[name=profile]').pop();
    employeePayrollData.gender = getSelectedValues('[name=gender]').pop();
    employeePayrollData.department = getSelectedValues('[name=department]');
    employeePayrollData.salary = getInputValueById('#salary');
    employeePayrollData.note = getInputValueById('#notes');
    let date  = new Date(getInputValueById('#year'),getInputValueById('#month'),getInputValueById('#day'));
    employeePayrollData.startDate = date;
    employeePayrollData.id = getId();
    let toPrint = employeePayrollData.toString();
    alert(toPrint);
    return employeePayrollData;
}

const getSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    let selItems=[];
    allItems.forEach(item => {
        if(item.checked) selItems.push(item.value);
    });
    return selItems;
}

const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}

resetForm = () => {
    setValue('#name','');
    unsetSelectedValues('[name=profile]');
    unsetSelectedValues('[name=gender]');
    unsetSelectedValues('[name=department]');
    setValue('#salary','');
    setTextValue('#salID',400000);
    setValue('#notes','');
    setValue('#day','Day');
    setValue('#month','Month');
    setValue('#year','Year');
    setTextValue(".text-error",'');
    setTextValue(".date-error",'');
}

const unsetSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    allItems.forEach(item => {
        item.checked = false;
    });
}

const setValue = (id,value) => {
    const element = document.querySelector(id);
    element.value = value;
}

const setTextValue = (id,value) => {
    const element = document.querySelector(id);
    element.textContent = value;
}




